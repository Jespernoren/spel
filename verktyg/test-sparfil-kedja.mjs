// A-065 lager 5: gamla sparfiler (dag 3, 8, 14, 18) laddas utan att någon kvittens kommer igen.
// Kör: node verktyg/test-sparfil-kedja.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const DAGAR = [3, 8, 14, 18];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
let allaOk = true;
for (const d of DAGAR) {
  const spar = fs.readFileSync(new URL(`./sparfiler/dag${d}.json`, import.meta.url), 'utf8');
  const fore = JSON.parse(spar);
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } }), p = await ctx.newPage(), fel = [];
  p.on('pageerror', (e) => fel.push(e.message));
  await p.addInitScript((s) => { localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); window.__a065 = []; window.__textLogg = (kalla, vem, text, varfor) => window.__a065.push({ kalla, vem, text, varfor }); }, spar);
  await p.goto(url); await p.waitForTimeout(3500);
  await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
  for (let i = 0; i < 30 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) {
    await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|BÖRJA|Fortsätt|Starta/i.test(k.textContent)) { k.click(); return; } } }).catch(() => {});
    await p.waitForTimeout(1000);
  }
  await p.waitForTimeout(15000);
  const r = await p.evaluate((kedjaFore) => {
    const h = window.__printahem, logg = window.__a065;
    const igen = logg.filter((e) => ['kvittens', 'varför'].includes(e.kalla) && kedjaFore.includes(e.varfor));
    const tidigaMal = logg.filter((e) => e.kalla === 'händelse' && e.vem === 'malKlart').map((e) => e.text);
    return { dag: h.S.dag, steg: h.S.steg, igen: igen.map((e) => `${e.varfor}: ${e.text}`), malKlart: tidigaMal, version: h.STORYKEDJA_VERSION, n: h.STORYKEDJA().length };
  }, fore.kedja || []);
  const ok = !r.igen.length && !fel.length && r.steg >= (fore.steg || 0);
  allaOk &&= ok;
  console.log(`${ok ? '✓' : '✗'} dag ${d}: laddad dag ${r.dag}, steg ${fore.steg}→${r.steg}, ${r.igen.length} kvittenser igen, ${r.malKlart.length} mål klara vid laddning, ${fel.length} sidfel${r.igen.length ? '\n   ' + r.igen.join('\n   ') : ''}${fel.length ? '\n   ' + fel.join('\n   ') : ''}`);
  await ctx.close();
}
await b.close();
console.log(allaOk ? 'alla sparfiler OK' : 'FEL');
process.exit(allaOk ? 0 : 1);
