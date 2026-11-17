// A-042 punkt 3: julen med och utan reserverna (Birgittas rosor, Rolfs trumstockar, Göran).
// Kör julscenen två gånger från sparfilen dag 18 (hoppar till dag 22 med testkroken) och klickar igenom korten.
// Kör: node verktyg/test-a042-jul.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
for (const med of [false, true]) {
  const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
  p.on('pageerror', (e) => fel.push(e.message));
  const spar = fs.readFileSync('verktyg/sparfiler/dag18.json', 'utf8');
  await p.addInitScript((s) => { if (!sessionStorage.getItem('jul')) { sessionStorage.setItem('jul', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); } }, spar);
  await p.goto(url); await p.waitForTimeout(5000);
  for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) { await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|Fortsätt|Starta|Hoppa|Vakna|Ny dag/i.test(k.textContent)) { k.click(); return; } } }); await p.waitForTimeout(1000); }
  await p.waitForTimeout(2000);
  const rader = await p.evaluate((med) => { const P = window.__printahem, S = P.S; P.jul();
    S.tradgard = { ...(S.tradgard || {}), rosor: med }; S.goranMaskot = med; S.lagerHittat = med ? ['trumstockar'] : (S.lagerHittat || []).filter((x) => x !== 'trumstockar');
    if (!med) { P.taBortInv('trumstockar'); } return P.julRader().map((r) => r[2]); }, med);
  await p.evaluate(() => { const P = window.__printahem; P.laggTill('julbord'); P.julScen(); });
  for (let i = 0; i < 80 && (await p.evaluate(() => !!document.querySelector('.ph-jul'))); i++) { await p.evaluate(() => document.querySelector('.ph-jul')?.click()); await p.waitForTimeout(250); }
  const r = await p.evaluate(() => ({ firad: !!window.__printahem.S.julFirad, brev: window.__printahem.S.post?.lapp }));
  const bord = rader.find((t) => /^Skinkan/.test(t)), band = rader.find((t) => /^Rolf på trummor/.test(t)), goran = rader.some((t) => /Göran/.test(t));
  const ratt = med ? /rosor/.test(bord) && /1987/.test(band) && goran : /Granris/.test(bord) && /kastruller/.test(band) && !goran;
  ut.push([`julen ${med ? 'med' : 'utan'} reserverna: ${rader.length} kort, "${bord}" · ${/kastruller/.test(band) ? 'kastrullerna' : 'trumstockarna'} · Göran ${goran ? 'med' : 'saknas'} · firad ${r.firad}, mammas brev ${r.brev}${fel.length ? ' · sidfel: ' + fel[0] : ''}`, ratt && r.firad && r.brev === 'mammajul' && !fel.length]);
  await p.close();
}
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
await b.close(); process.exit(ut.every((x) => x[1]) ? 0 : 1);
