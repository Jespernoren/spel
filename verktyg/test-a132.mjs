// Inkorg 77 (A-132): 15 dagar till jul. Bilder: morgonsidan dag 1, 8 och 15, dagbytet till dag 2 och kapitelkortet dag 5.
// Kollar också att gamla sparningar (dag 3, 10, 18) hamnar på rätt ny dag. Kör: node verktyg/test-a132.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const THREE_JS = fs.readFileSync('/home/claude/verktyg/node_modules/three/build/three.module.js');
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'] });
const UT = new URL('./a132/', import.meta.url).pathname; fs.mkdirSync(UT, { recursive: true });
const ut = [], fel = [];
const UTV = new URL('../spel/printa-hem/utv/', import.meta.url).pathname, SPF = new URL('./sparfiler/', import.meta.url).pathname;
async function oppna(fil) {
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });
  await ctx.route(/cdn\.jsdelivr\.net\/npm\/three@0\.170\.0/, (r) => r.fulfill({ body: THREE_JS, contentType: 'text/javascript' }));
  const p = await ctx.newPage(); p.on('pageerror', (e) => fel.push(`${fil}: ${e.message}`));
  const spar = fs.readFileSync(fil, 'utf8');
  await p.addInitScript((s) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); } }, spar);
  await p.goto(url); await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 60000 });
  return { p, ctx };
}
const morgonText = (p) => p.evaluate(() => document.querySelector('.ph-dagbok, .br-morgon, .ph-dagkort')?.innerText || [...document.querySelectorAll('button')].find((k) => /FORTSÄTT/i.test(k.innerText))?.closest('div')?.innerText || '');
/* morgonsidan dag 1, 8 och 15 och kapitelkortet dag 5 */
for (const [d, namn, krav] of [[1, 'morgon-dag1', /14 dagar till jul/], [5, 'kapitelkort-dag5', /KAPITEL 2/], [8, 'morgon-dag8', /KAPITEL 3|7 dagar till jul/], [15, 'morgon-dag15', /Julafton/]]) {
  const fil = d === 1 ? SPF + 'start-dag1.json' : UTV + `dag${d}.json`; if (!fs.existsSync(fil)) { ut.push([`dag ${d}: sparfilen finns`, false]); continue; }
  const { p, ctx } = await oppna(fil);
  if (d === 1) { await p.evaluate(() => { const S = window.__printahem.S; S.dag1Sida = false; S.skyltUppe = false; S.introSett = true; window.__startaSpel(); }); }
  else await p.evaluate((d) => window.__printahem.morgonVisa(d), d);
  await p.waitForTimeout(4500);
  const t = await p.evaluate(() => document.body.innerText);
  await p.screenshot({ path: UT + namn + '.png' });
  ut.push([`${namn}: ${(t.match(krav) || ['(saknas)'])[0]}`, krav.test(t)]);
  await ctx.close();
}
/* dagbytet dag 1 → 2: datum och veckodag */
{ const { p, ctx } = await oppna(SPF + 'start-dag2.json');
  await p.evaluate(() => { const P = window.__printahem; P.S.dag = 1; window.__startaSpel(); });
  await p.waitForTimeout(2500); await p.evaluate(() => window.__printahem.sov()); let t = '';
  for (let i = 0; i < 30 && !/december/i.test(t); i++) { await p.waitForTimeout(500); t = await p.evaluate(() => document.querySelector('.ph-natt')?.innerText || ''); }
  await p.screenshot({ path: UT + 'dagbyte-dag2.png' });
  ut.push([`dagbytet dag 2: ${t.replace(/\s+/g, ' ').slice(0, 60)}`, /Torsdag 11 december/.test(t)]); await ctx.close(); }
/* gamla sparningar (22 dagar) hamnar på rätt ny dag */
for (const [fil, ny] of [['start-dag3.json', 3], ['dag8.json', 6], ['dag18.json', 12], ['start-dag18.json', 12]]) {
  if (!fs.existsSync(SPF + fil)) continue;
  const { p, ctx } = await oppna(SPF + fil); await p.evaluate(() => window.__startaSpel()); await p.waitForTimeout(2500);
  const r = await p.evaluate(() => ({ dag: window.__printahem.S.dag, fran: window.__printahem.S.kalenderFlyttad, datum: window.__printahem.S.dag + 9 }));
  ut.push([`gammal sparning ${fil} (dag ${r.fran ?? '?'}) → dag ${r.dag}`, r.dag === ny]); await ctx.close();
}
ut.push([`0 sidfel (${fel.slice(0, 3).join(' · ') || 'inga'})`, !fel.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
const n = ut.filter((x) => !x[1]).length; console.log(n ? `✗ test-a132: ${n} fel` : '✓ test-a132 grönt'); await b.close(); process.exit(n ? 1 : 0);
