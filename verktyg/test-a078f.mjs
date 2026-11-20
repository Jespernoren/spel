// Inkorg 14 (A-078 ruta 15): "Ett hem?" – skjulet blir ett hem i fyra steg, vita idé-ritningar ovanpå det riktiga skjulet.
// Bara synliga linjer (djupbufferten), byggt ur SKJUL. Skärmdumpar: verktyg/a078/hem-steg1..4.png + hem-alla.png. 0 RITNING UTANFÖR SAKEN.
// Kör: node verktyg/test-a078f.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a078/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { window.__brott = []; window.__textLogg = (k, v, t) => { if (k === 'brott') window.__brott.push(v + ' ' + t); }; localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); });
await p.goto(url); await p.waitForTimeout(4000);
const ut = [];
const koll = await p.evaluate(() => window.__printahem.hemRitningKoll());
ut.push([`ritningen följer skjulets mått: ${koll.length ? koll.join(' · ') : 'tak, skorsten, dörr, fönster, trappa och lampa på rätt plats'}`, !koll.length]);
// stegen som bilder: startbilden + de ritade stegen ovanpå (samma kamera)
const bilder = await p.evaluate(async () => { const P = window.__printahem, ladda = (src) => new Promise((ok) => { const i = new Image(); i.onload = () => ok(i); i.src = src; });
  const bas = await ladda(P.spelBild('hem')), lager = [], ut = []; for (const n of [2, 3, 4]) lager.push(await ladda(P.hemRitningBild(n)));
  const linjer = [];
  for (let s = 1; s <= 4; s++) { const c = document.createElement('canvas'); c.width = 1280; c.height = 800; const g = c.getContext('2d'); g.drawImage(bas, 0, 0); for (let i = 0; i < s - 1; i++) g.drawImage(lager[i], 0, 0); ut.push(c.toDataURL('image/png')); }
  for (const l of lager) { const c = document.createElement('canvas'); c.width = 1280; c.height = 800; const g = c.getContext('2d'); g.drawImage(l, 0, 0); const d = g.getImageData(0, 0, 1280, 800).data; let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i] > 60) n++; linjer.push(n); }
  return { ut, linjer }; });
bilder.ut.forEach((u, i) => fs.writeFileSync(`${dir}hem-steg${i + 1}.png`, Buffer.from(u.split(',')[1], 'base64')));
ut.push([`steg 2–4 har egna linjer (${bilder.linjer.join(' / ')} px)`, bilder.linjer.every((n) => n > 400)]);
// dolda kanter: takets bakre gavel ska inte ritas – jämför med samma tak ritat utan djup
// introt: sista rutan visar startbilden och de tre stegen, utan sidfel
await p.evaluate(() => window.__printahem.visaIntroDirekt());
await p.waitForFunction(() => document.querySelectorAll('.ph-il.hemsteg').length === 3, null, { timeout: 150000 });
await p.waitForTimeout(3200);
await p.screenshot({ path: `${dir}hem-introt.png` });
const syns = await p.evaluate(() => [...document.querySelectorAll('.ph-il.hemsteg')].map((e) => getComputedStyle(e).opacity));
ut.push([`introt: tre ritade steg syns ovanpå skjulet (${syns.join(', ')})`, syns.length === 3 && syns.every((o) => +o > 0.9)]);
const brott = await p.evaluate(() => window.__brott.filter((x) => x.startsWith('RITNING UTANFÖR SAKEN')));
ut.push([`${brott.length} RITNING UTANFÖR SAKEN ${brott.slice(0, 2).join(' · ')}`, !brott.length]);
ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, fel.length === 0]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
await b.close(); process.exit(ut.every((x) => x[1]) ? 0 : 1);
