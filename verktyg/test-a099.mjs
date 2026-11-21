// Inkorg 43 (A-099): bara morgonen är en hel dagbokssida. Under dagen små dagboksnotiser, kvällen på nattskärmen, allt i dagens uppslag.
// Kör: node verktyg/test-a099.mjs [url] → verktyg/a099/
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const dir = new URL('./a099/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 20000 }); await p.evaluate(() => window.__startaSpel());
await p.waitForTimeout(2500); await p.keyboard.press('Enter');
const frys = (sel) => p.evaluate((sel) => { const o = document.querySelector(sel); if (!o) return false; const c = o.cloneNode(true); c.id = 'frys'; const r = o.getBoundingClientRect(); Object.assign(c.style, { position: 'fixed', left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px', zIndex: 2147483647, opacity: 1, transition: 'none', transform: 'none' }); c.querySelectorAll('*').forEach((x) => { x.style.transition = 'none'; x.style.animation = 'none'; }); document.body.appendChild(c); return true; }, sel);
const ofrys = () => p.evaluate(() => document.getElementById('frys')?.remove());
// 1. morgonsidan dag 1
for (let i = 0; i < 40 && !(await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dk-a4'))); i++) await p.waitForTimeout(400);
await p.waitForTimeout(1200); const morgon = await p.evaluate(() => document.querySelector('.ph-med:not([hidden]) .ph-dk-a4')?.innerText.replace(/\s+/g, ' ').slice(0, 80) || null);
await p.screenshot({ path: dir + '1-morgonsidan-dag1.png' });
ut.push([`morgonsidan dag 1 är en hel sida ("${morgon}")`, /^Dag 1\./.test(morgon || '')]);
for (let i = 0; i < 8; i++) { if (await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden])'))) await p.keyboard.press('Enter'); await p.waitForTimeout(500); }
// 2. spika skylten som en spelare – dagboksnotisen
const sikta = (re) => p.evaluate((re) => {
  const P = window.__printahem, I = P.interaktorObj(), sp = P.spelare, V = sp.pos.constructor, rx = new RegExp(re, 'i');
  const txt = (o) => { try { const t = o.userData.interaktion.text; return String(typeof t === 'function' ? t(o) : t || ''); } catch { return ''; } };
  const syn = (o) => { for (let x = o; x; x = x.parent) if (!x.visible) return false; return true; };
  const kand = I.mal.filter((x) => syn(x) && rx.test(txt(x)));
  for (const o of kand) { const c = new (P.THREE.Box3)().setFromObject(o.autoTraffYta || o).getCenter(new V());
    for (let i = 0; i < 16; i++) { const v = i * Math.PI / 8, d = 2.2, x = c.x + Math.sin(v) * d, z = c.z + Math.cos(v) * d;
      sp.pos.set(x, sp.pos.y, z); sp.yaw = Math.atan2(-(c.x - x), -(c.z - z)); sp.pitch = Math.atan2(c.y - 1.6, d);
      P.kameraObj().position.set(x, 1.6, z); P.kameraObj().rotation.set(sp.pitch, sp.yaw, 0, 'YXZ'); P.kameraObj().updateMatrixWorld(true); P.uppdateraSikte();
      let ok = false; for (let h = I.hovrad; h; h = h.parent) if (h === o) ok = true; if (ok) return { namn: txt(o).slice(0, 40) }; } }
  return { fel: 'siktet tog aldrig ' + re }; }, re);
const klick = async () => { await p.mouse.move(640, 360); await p.mouse.down(); await p.waitForTimeout(80); await p.mouse.up(); await p.waitForTimeout(400); };
await p.waitForTimeout(2000);
const s1 = await sikta('Spika|hammaren'); await klick();
let notis = null, helsida = false;
for (let i = 0; i < 80 && !notis; i++) { helsida ||= await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort')); if (await p.evaluate(() => !!document.querySelector('.ph-notis.dagbok:not(.ut)'))) { await frys('.ph-notis.dagbok:not(.ut)'); notis = await p.evaluate(() => { const n = document.querySelector('.ph-notis.dagbok:not(.ut)'); return { text: n.innerText.replace(/\s+/g, ' '), hogtalare: !!n.querySelector('.ph-lasupp'), fortsatt: !!n.querySelector('.ph-fortsatt'), pausad: window.__printahem.kanalLage().pausad }; }); await p.screenshot({ path: dir + '2-notisen-skylten.png' }); await ofrys(); } else await p.waitForTimeout(250); }
ut.push([`skylten (${s1.namn || s1.fel}): liten dagboksnotis "${notis?.text || '–'}", 🔊 ${notis?.hogtalare}, ingen FORTSÄTT, spelet går (${notis && !notis.pausad}), ingen helsida (${!helsida})`, !!notis && /Dagboken/.test(notis.text) && /Soptippsvägen 1/.test(notis.text) && notis.hogtalare && !notis.fortsatt && !notis.pausad && !helsida && !/Dag 1\./.test(notis.text)]);
// 3. nattskärmen dag 1 med kvällsraden och printkortet
await p.evaluate(() => { const S = window.__printahem.S; S.printDag = { 1: { nyckelring: 3, kruka: 1 } }; S.inkDag = { 1: { 'ali:nyckelring': 45, 'ali:kruka': 25 } }; window.__printahem.sov(); });
let natt = null; for (let i = 0; i < 30 && !natt; i++) { if (await p.evaluate(() => !!document.querySelector('.ph-natt .ph-nattprint'))) { natt = await p.evaluate(() => ({ rad: document.querySelector('.ph-nattrad')?.innerText.replace(/\s+/g, ' ') || '', kort: !!document.querySelector('.ph-nattprint') })); await frys('.ph-natt'); await p.screenshot({ path: dir + '3-nattskarmen-dag1.png' }); await ofrys(); } else await p.waitForTimeout(250); }
ut.push([`nattskärmen dag 1: kvällsraden "${natt?.rad || '–'}" ovanför Dagens printar`, !!natt && /I morgon/.test(natt.rad) && natt.kort && !/Dag 1\./.test(natt.rad)]);
// 4. dagboken (Tab) dag 2 – uppslaget för dag 1
await p.waitForFunction(() => window.__printahem.S.dag === 2, null, { timeout: 30000 }).catch(() => {});
for (let i = 0; i < 30; i++) { if (await p.evaluate(() => !!document.querySelector('.ph-hurvar'))) await p.keyboard.press('Escape'); if (await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden])'))) await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
await p.evaluate(() => window.__printahem.oppnaDagbok()); await p.waitForTimeout(500); await p.click('[data-flik="dagbok"]').catch(() => {}); await p.waitForTimeout(800);
const upp = await p.evaluate(() => { const u = document.querySelector('[data-uppslag="1"]'); return u ? { text: u.innerText.replace(/\s+/g, ' '), morgon: !!u.querySelector('.ph-upp-morgon'), rader: u.querySelectorAll('.ph-upp-rad').length } : null; });
await p.evaluate(() => document.querySelector('[data-uppslag="1"]')?.scrollIntoView()); await p.waitForTimeout(300);
await p.screenshot({ path: dir + '4-dagboken-dag1.png' });
ut.push([`dagboken: dag 1 har morgonsidan och ${upp?.rader ?? 0} rader under (${(upp?.text || '–').slice(0, 140)})`, !!upp && upp.morgon && upp.rader >= 2 && /Soptippsvägen 1/.test(upp.text) && /I morgon/.test(upp.text)]);
const br = await p.evaluate(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && /HELSIDA UNDER DAGEN|LÅNG DAGBOK/.test(e.vem)).map((e) => e.vem + ' ' + e.text));
ut.push([`0 HELSIDA UNDER DAGEN och LÅNG DAGBOK (${br.join(' · ') || 'inga'})`, !br.length]);
ut.push([`0 sidfel (${fel.slice(0, 2).join(' · ') || 'inga'})`, !fel.length]);
await b.close();
for (const [t, o] of ut) console.log(`${o ? '✓' : '✗'} ${t}`);
process.exit(ut.every(([, o]) => o) ? 0 : 1);
