// A-052: hoppa över, redan hört läses inte igen, fyra volymreglage sparas. Kör: node verktyg/test-a052.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } }); const p = await ctx.newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
for (let i = 0; i < 60 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang)); i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent)) { k.click(); break; } } });
  await p.waitForTimeout(1000);
}
await p.waitForTimeout(3000);
const ut = [];
const r1 = await p.evaluate(() => { const h = window.__printahem; h.S.rostLage = 'rost'; h.prataNu('mamma', 'Testreplik för A-052, den är ganska lång så att den hinner läsas.', 'REAKTION'); return h.pratarNu(); });
await p.keyboard.press('Enter'); await p.waitForTimeout(200);
const r2 = await p.evaluate(() => window.__printahem.pratarNu());
ut.push([`Enter hoppar över (pratar ${r1} → ${r2})`, r1 && !r2]);
const r3 = await p.evaluate(() => { const h = window.__printahem, L = () => h.textLogg().filter((x) => x.kalla === 'röst').length; h.prataNu('mamma', 'Testreplik för A-052, den är ganska lång så att den hinner läsas.', 'REAKTION'); return h.S.hort.length; });
const r4 = await p.evaluate(() => window.__printahem.S.hort.filter(Boolean).length);
ut.push([`redan hört sparas en gång (${r3} = ${r4})`, r3 === r4]);
await p.evaluate(() => { const h = window.__printahem; h.S.vol = { rost: 0.3, berattare: 0.5, musik: 0.2, effekt: 0.7 }; h.spar.spara(true); });
await p.reload(); await p.waitForTimeout(8000);
const v = await p.evaluate(() => { const h = window.__printahem; return ['rost', 'berattare', 'musik', 'effekt'].map((k) => h.volym(k)); });
ut.push([`fyra reglage sparas (${v})`, JSON.stringify(v) === JSON.stringify([0.3, 0.5, 0.2, 0.7])]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
