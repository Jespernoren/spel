// A-076 tillägg 18:00 + 18:05: startrutan. Kör: node verktyg/test-a076l.mjs [url] → skärmdumpar i verktyg/a076/meny/
// 1 tom profil: menyerna v3 direkt (ingen FpUI-ruta), STARTA + Ladda grå "Inga sparningar än"
// 2 med sparning: STARTA + Ladda · Ladda öppnar Spara och ladda med "Senast spelad" → Fortsätt
// 3 samma bredd på start, undersidor och Esc-menyn (0 ANNAN MENYBREDD) · 4 STARTA med sparning → ny sparplats + introt, den gamla finns kvar
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/meny/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [], fel = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage();
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { window.__brott = []; window.__textLogg = (k, v, t) => { if (k === 'brott') window.__brott.push(v + ' ' + t); }; });
const H = (f, a) => p.evaluate(f, a);
const bredd = () => H(() => Math.round(document.querySelector('.br3')?.getBoundingClientRect().width || 0));
const mal = Math.round(Math.min(620, 1280 * 0.92));
const bredder = [];
// 1. tom profil
await p.goto(url); await p.waitForTimeout(800);
const tidig = await H(() => ({ gammal: /Sparplatser|Börja om från början/.test(document.querySelector('.fp-overlay')?.innerText || ''), }));
await p.waitForTimeout(4000);
const s1 = await H(() => { const l = document.querySelector('.br3-ladda'); return { br3: !!document.querySelector('.br3'), starta: document.querySelector('.br-starta')?.innerText.trim(), ladda: l?.innerText.trim(), gra: !!l?.disabled, gammal: /Sparplatser|Börja om från början/.test(document.querySelector('.fp-overlay')?.innerText || '') }; });
bredder.push(['start tom', await bredd()]);
await p.screenshot({ path: dir + 'l1-start-utan-sparning.png' });
ut.push([`tom profil: menyerna v3 direkt, ingen gammal ruta (tidigt ${!tidig.gammal}, sen ${!s1.gammal}), "${s1.starta}" och "${s1.ladda}" grå ${s1.gra}`, s1.br3 && !tidig.gammal && !s1.gammal && s1.starta === 'STARTA' && s1.gra && /Inga sparningar/.test(s1.ladda)]);
// in i spelet för att få en sparning
await p.click('.br-starta'); await p.waitForTimeout(1200);
const namn = await p.$('.ph-namn-falt'); if (namn) { await namn.fill('Testaren'); await p.keyboard.press('Enter'); }
await p.waitForTimeout(2000);
for (let i = 0; i < 8; i++) { const k = await H(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort')); if (k) break; await p.keyboard.press('Enter'); await p.waitForTimeout(1500); }
await p.keyboard.press('Enter'); await p.waitForTimeout(2500);
// Esc-menyn
await p.keyboard.press('Escape'); await p.waitForTimeout(1200);
const s2 = await H(() => ({ paus: !!document.querySelector('.br3-paus'), fort: /FORTSÄTT/.test(document.querySelector('.br-starta')?.innerText || '') }));
bredder.push(['Esc-menyn', await bredd()]);
await p.screenshot({ path: dir + 'l2-esc.png' });
ut.push([`Esc-menyn behåller PAUSAD + FORTSÄTT (${s2.paus}, ${s2.fort})`, s2.paus && s2.fort]);
await p.keyboard.press('Escape'); await p.waitForTimeout(800);
await H(() => window.__printahem?.spar?.spara?.(true));
// 2. ladda om med sparning
await p.reload(); await p.waitForTimeout(5000);
const s3 = await H(() => { const l = document.querySelector('.br3-ladda'); return { starta: document.querySelector('.br-starta')?.innerText.trim(), ladda: l?.innerText.trim(), gra: !!l?.disabled }; });
bredder.push(['start med sparning', await bredd()]);
await p.screenshot({ path: dir + 'l3-start-med-sparning.png' });
ut.push([`med sparning: "${s3.starta}" och "${s3.ladda}" (grå ${s3.gra})`, s3.starta === 'STARTA' && s3.ladda === 'Ladda' && !s3.gra]);
await p.click('.br3-ladda'); await p.waitForTimeout(1500);
const s4 = await H(() => ({ senast: !!document.querySelector('.br3-senast [data-fortsatt]'), rub: document.querySelector('.br3-sidtopp b')?.innerText }));
bredder.push(['Spara och ladda', await bredd()]);
await p.screenshot({ path: dir + 'l4-ladda.png' });
ut.push([`Ladda öppnar "${s4.rub}" med Senast spelad → Fortsätt (${s4.senast})`, s4.rub === 'Spara och ladda' && s4.senast]);
await p.click('[data-tillbaka]'); await p.waitForTimeout(500);
for (const [sida, namnet] of [['installningar', 'Inställningar'], ['hjalp', 'Hjälp oss']]) { await p.click(`[data-sida="${sida}"]`); await p.waitForTimeout(600); bredder.push([namnet, await bredd()]); await p.click('[data-tillbaka]'); await p.waitForTimeout(400); }
const olika = bredder.filter(([, w]) => Math.abs(w - mal) > 2);
ut.push([`samma bredd ${mal} px överallt: ${bredder.map(([n, w]) => `${n} ${w}`).join(' · ')}`, !olika.length]);
// 4. STARTA med sparning → ny omgång, den gamla på en sparplats
const fore = await H(() => Object.keys(localStorage).filter((k) => /:plats\d$/.test(k)).length);
await p.click('.br-starta'); await p.waitForTimeout(9000);
const s5 = await H(() => ({ platser: Object.keys(localStorage).filter((k) => /:plats\d$/.test(k)).length, intro: !!document.querySelector('.ph-intro3, .ph-intro'), dag: window.__printahem?.S?.dag, steg: window.__printahem?.S?.steg }));
await p.screenshot({ path: dir + 'l5-starta-ny-omgang.png' });
await p.waitForTimeout(6000); const s6 = await H(() => Object.keys(localStorage).filter((k) => /:plats\d$/.test(k)).length);
ut.push([`STARTA med sparning: introt ${s5.intro}, dag ${s5.dag} steg ${s5.steg} · sparplatser ${fore} → ${s6} (den gamla omgången + den nya, var sin plats, ingen skrivs över)`, s6 === fore + 2 && s5.intro]);
const brott = await H(() => (window.__brott || []).filter((x) => /^(ANNAN MENYBREDD|SIDFEL VID START) /.test(x)));
ut.push([`0 ANNAN MENYBREDD, 0 SIDFEL VID START (${brott.join(' · ') || 'inga'})`, !brott.length]);
ut.push([`0 sidfel (${fel.join(' · ') || 'inga'})`, !fel.length]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
await b.close();
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
