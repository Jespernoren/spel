// A-076 tillägg 14:22 + 14:20 p.1 + 15:40: ett dagbokskort överallt. Morgonsidan inom 0,3 s när dagen börjar (introt och sömnen),
// spelet står still bakom, FORTSÄTT/Enter/Esc stänger, du säger första uppgiften. Skylt-kvittensen och "läs igen" i samma kort.
// Röst på/av finns kvar efter omladdning. Kör: node verktyg/test-a076j.mjs [url] → verktyg/a076/j-*.png
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('f')) { sessionStorage.setItem('f', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url); await p.waitForTimeout(5000);
const H = (f, a) => p.evaluate(f, a);
const kort = () => H(() => { const k = document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort'); return k ? { text: k.querySelector('.ph-pap-text')?.textContent, rub: k.querySelector('.ph-dk-rub')?.textContent || '', rost: !!k.querySelector('.ph-rostknapp'), fortsatt: /FORTSÄTT/.test(k.querySelector('.ph-fortsatt')?.textContent || ''), lasIgen: !!k.querySelector('.ph-lasigen') } : null; });
const matning = () => H(() => window.__printahem.dagbokMatning());
const brott = (namn) => H((n) => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && e.vem === n).map((e) => e.text), namn);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())); await p.waitForTimeout(2500); await p.keyboard.press('Enter');
// 1. intro → spel: morgonsidan direkt
let k1 = null; for (let i = 0; i < 120 && !k1; i++) { await p.waitForTimeout(250); k1 = await kort(); }
const m1 = await matning();
const d1 = m1.borjat.length && m1.visad.length ? m1.visad[0].t - m1.borjat[0] : 99999;
await p.screenshot({ path: dir + 'j-morgon-dag1.png' });
ut.push([`intro → spel: morgonsidan "${k1?.rub}" · "${k1?.text}" · ${Math.round(d1)} ms efter att dagen började (≤ 300) · Röst på/av ${k1?.rost}, FORTSÄTT ${k1?.fortsatt}, 🔊 ${k1?.lasIgen}`, !!k1 && d1 <= 300 && k1.rost && k1.fortsatt && k1.lasIgen]);
// 2. spelet står still bakom
const fore = await H(() => { const P = window.__printahem; return { tid: P.S.dagTid || 0, n: P.textLogg().filter((e) => ['notis', 'sms', 'toast', 'info', 'MÅL'].includes(e.kalla)).length, igang: P.ui.igang }; });
await p.waitForTimeout(4000);
const efter = await H(() => { const P = window.__printahem; return { tid: P.S.dagTid || 0, n: P.textLogg().filter((e) => ['notis', 'sms', 'toast', 'info', 'MÅL'].includes(e.kalla)).length, kvar: !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort') }; });
ut.push([`spelet står still bakom: speltid ${fore.tid.toFixed?.(1)} → ${efter.tid.toFixed?.(1)}, nya notiser/sms/mål ${efter.n - fore.n}, kortet kvar efter 4 s (${efter.kvar}), ui.igang ${fore.igang}`, Math.abs(efter.tid - fore.tid) < 0.05 && efter.n === fore.n && efter.kvar && !fore.igang]);
// 3. FORTSÄTT → du säger första uppgiften, uppgiftsrutan glider in
const l0 = await H(() => window.__printahem.textLogg().length);
await p.keyboard.press('Enter');
let sagt = false; for (let i = 0; i < 40 && !sagt; i++) { await p.waitForTimeout(250); sagt = await H((l0) => window.__printahem.textLogg().slice(l0).some((e) => e.vem === 'du' && /Först ska jag spika upp skylten/.test(e.text)), l0); }
await p.waitForTimeout(1500);
const uppg = await H(() => !document.body.classList.contains('dn-forsta') && !!document.querySelector('.dn-uppg'));
await p.screenshot({ path: dir + 'j-efter-fortsatt.png' });
ut.push([`FORTSÄTT (Enter) stänger · du säger "Först ska jag spika upp skylten." (${sagt}) · uppgiftsrutan inne (${uppg})`, sagt && uppg]);
// 4. skylt-kvittensen i samma kort, stängs med Esc
await H(() => { const P = window.__printahem; P.hammarPaBrador.userData.interaktion.aktivera(); P.byt(P.S.hotbar.findIndex((x) => x?.typ === 'hammare')); P.bradhog.userData.interaktion.aktivera(); });
let k2 = null; for (let i = 0; i < 80 && !k2; i++) { await p.waitForTimeout(250); k2 = await kort(); }
await p.waitForTimeout(600); await p.screenshot({ path: dir + 'j-skylt-kvittens.png' });
await p.keyboard.press('Space'); await p.waitForTimeout(500);   /* A-076 15:30: Esc på kortet öppnar menyn – mellanslag stänger */
const stangd = !(await kort());
ut.push([`skylt-kvittensen i dagbokskortet: "${(k2?.text || '').slice(0, 50)}…" · mellanslag stänger (${stangd})`, !!k2 && k2.rost && k2.fortsatt && stangd]);
// 5. läs igen ur dagboken
await H(() => window.__printahem.oppnaDagbok()); await p.waitForTimeout(500);
await H(() => { document.querySelector('[data-flik="dagbok"]')?.click(); }); await p.waitForTimeout(500);
await H(() => { document.querySelector('[data-las]')?.click(); }); await p.waitForTimeout(800);
const k3 = await kort(); await p.screenshot({ path: dir + 'j-las-igen.png' });
await p.keyboard.press('Enter'); await p.waitForTimeout(400);
const panelKvar = await H(() => !!document.querySelector('.ui-panel, .ph-ruta, [data-flik]'));
ut.push([`läs igen ur dagboken: samma kort (${!!k3}) · tillbaka till dagboken (${panelKvar})`, !!k3 && k3.fortsatt]);
await H(() => { document.querySelectorAll('[data-stang], .ui-stang').forEach((x) => x.click()); }); await p.keyboard.press('Escape'); await p.waitForTimeout(400);
// 6. Röst av sparas
await H(() => { window.__printahem.S.rost = false; window.__printahem.sparaNu?.(); });
// 7. sömn → morgon
await H(() => { const P = window.__printahem, S = P.S; document.querySelectorAll('.ph-med:not([hidden]) .fp-knapp').forEach((x) => x.click()); S.sang = true; S.steg = P.STEG.findIndex((x) => x.sov); P.sov(); });
let k4 = null; for (let i = 0; i < 100 && !k4; i++) { await p.waitForTimeout(250); if (await H(() => !!document.querySelector('.ph-hurvar'))) await p.keyboard.press('Escape');   /* A-076 15:30: "Hur var dagen?" hoppas över */ k4 = await kort(); if (k4 && !/Dag 2/.test(k4.rub)) k4 = null; }
const m4 = await matning(); const bt = m4.borjat[m4.borjat.length - 1], vv = m4.visad.filter((x) => x.morgon).pop();
const d4 = bt != null && vv ? vv.t - bt : 99999;
await p.waitForTimeout(400); await p.screenshot({ path: dir + 'j-morgon-dag2.png' });
const ord = (k4?.text || '').split(/\s+/).filter(Boolean).length;
ut.push([`sömn → morgon: "${k4?.rub}" · "${k4?.text}" (${ord} ord) · ${Math.round(d4)} ms efter att dagen började`, !!k4 && d4 <= 300 && ord <= 25]);
await p.keyboard.press('Enter'); await p.waitForTimeout(800);
for (const n of ['SEN MORGONSIDA', 'LÅNG DAGBOK', 'ANNAN DAGBOKSLAYOUT']) { const x = await brott(n).catch(() => ['?']); ut.push([`${n}: ${x.length} ${x.slice(0, 2).join(' · ')}`, !x.length]); }
// 8. omladdning: rösten av finns kvar
await p.waitForTimeout(2500); await p.reload(); await p.waitForTimeout(6000);
const rost = await H(() => { try { return JSON.parse(localStorage.getItem('spar:printahem2:v1') || '{}').rost; } catch { return null; } });
ut.push([`Röst av finns kvar efter omladdning (rost = ${rost})`, rost === false]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
