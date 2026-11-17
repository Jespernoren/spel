// A-060: tippen är en hög i lager som sjunker; varje lager kräver kapitel, procent och verktyg. Kör: node verktyg/test-a060.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
for (let i = 0; i < 25; i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); const top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); if (r.width && top && (top === k || k.contains(top)) && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); break; } } });
  await p.waitForTimeout(1000);
}
const ut = [];
// rensa tippen så att procenten är uppfylld, och prova lager för lager utan och med verktyg
const sv = async (namn) => { await p.evaluate(() => { const h = window.__printahem; h.spelare.pos.x = h.TIPP.x + 9; h.spelare.pos.z = h.TIPP.z + 6; h.tittaMot(h.TIPP.x - 2.6, h.TIPP.z - 1.2, 0.4, { tvang: true }); }); await p.waitForTimeout(4500); await p.screenshot({ path: `verktyg/test-a060-${namn}.png` }); };
await sv('k1');
const steg = [[2, 'magnet', (S) => { S.magnet = true; }], [3, 'rullband', (S) => { S.kolf.band = true; }], [4, 'hacka', (S, h) => { h.laggTill('hacka'); }]];
for (const [n, namn] of steg) {
  const utan = await p.evaluate(async (n) => { const h = window.__printahem, S = h.S; S.kapitel = n; S.tippNyckel = true; for (const x of [...h.skrapLista]) if (h.paTippen(x.position.x, x.position.z) && !x.userData.helen) { h.scen?.remove?.(x); } h.skrapLista.splice(0, h.skrapLista.length, ...h.skrapLista.filter((x) => !(h.paTippen(x.position.x, x.position.z) && !x.userData.helen))); await new Promise((r) => setTimeout(r, 4500)); return S.tippLager; }, n);
  await p.evaluate((n) => { const h = window.__printahem, S = h.S; if (n === 2) S.magnet = true; if (n === 3) S.kolf.band = true; if (n === 4) h.laggTill('hacka'); }, n);
  const med = await p.evaluate(async () => { await new Promise((r) => setTimeout(r, 4500)); return window.__printahem.S.tippLager; });
  ut.push([`lager ${n}: utan ${namn} står tippen kvar på lager ${utan}, med ${namn} släpper det (lager ${med})`, utan === n - 1 && med === n]);
  await sv('k' + n);
}
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
