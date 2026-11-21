// A-093 (inkorg 33): dag 18 → 19. Grunden som köptes under dagen räknas inte som GRATIS KLAR när kedjan går vidare på morgonen,
// och en grund som aldrig gjuts blir inte klar av att dagen byter. Kör: node verktyg/test-a093.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const spar = fs.readFileSync(new URL('./sparfiler/start-dag18.json', import.meta.url), 'utf8');
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
async function natt(gjuten) {
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(e.message));
  await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
  await p.goto(url); await p.waitForTimeout(6000);
  await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
  for (let i = 0; i < 30 && !(await p.evaluate(() => !!window.__printahem?.S).catch(() => false)); i++) await p.waitForTimeout(1000);
  await p.waitForTimeout(5000);
  for (let i = 0; i < 20; i++) { const kort = await p.$('.dk-fortsatt, [data-fortsatt]'); if (!kort) break; await kort.click().catch(() => {}); await p.waitForTimeout(600); }
  await p.evaluate((gjuten) => { const S = window.__printahem.S; S.kvarn.kniv = 2; if (gjuten && !S.mark.agt.includes('husgrund')) S.mark.agt.push('husgrund'); }, gjuten);
  await p.waitForTimeout(4000);
  await p.evaluate(() => window.__printahem.sov());
  await p.waitForFunction(() => window.__printahem.S.dag === 19, null, { timeout: 60000 }).catch(() => {});
  await p.waitForTimeout(6000);
  const r = await p.evaluate(() => { const H = window.__printahem, S = H.S;
    return { dag: S.dag, grund: S.mark.agt.includes('husgrund'), gratis: H.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'GRATIS KLAR').map((e) => e.text) }; });
  await p.close(); return r;
}
const a = await natt(true);
ut.push([`grunden köpt dag 18, guldrullen inte malen: dag ${a.dag}, 0 GRATIS KLAR för grunden (${a.gratis.join(' · ') || 'inga'})`, a.dag === 19 && !a.gratis.some((t) => t.includes('gjut-grunden'))]);
const c = await natt(false);
ut.push([`dag 18 utan att gjuta: dag ${c.dag}, grunden finns inte (${c.grund}), 0 GRATIS KLAR (${c.gratis.join(' · ') || 'inga'})`, c.dag === 19 && !c.grund && !c.gratis.length]);
ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, !fel.length]);
await b.close();
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
