// EO 34: modellkollen – varje byggsats på en rad: ikonen och modellen i handen (båda från sakModell). Kör: node verktyg/modellkoll.mjs [url] [ut.png]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html', ut = process.argv[3] || '/tmp/modellkoll.png';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1400, height: 900 } })).newPage();
await p.goto(url); await p.waitForTimeout(6000);
const rader = await p.evaluate(() => {
  const h = window.__printahem, ut = [];
  for (const t of h.ikonLista()) { if (!t.startsWith('byggsats:')) continue; let saknas = false, ikon = ''; try { saknas = h.ikonModell(t)[1]; ikon = h.renderaIkon(t, 72).url; } catch (e) { saknas = 'fel: ' + e.message; } ut.push({ t, saknas, ikon }); }
  document.body.innerHTML = `<div style="display:grid;grid-template-columns:repeat(8,1fr);gap:6px;padding:8px;background:#222;font:11px system-ui;color:#fff">${ut.map((x) => `<div style="background:${x.saknas ? '#7a1f1f' : '#333'};padding:4px;text-align:center"><img src="${x.ikon}" width="72" height="72"><br>${x.t.slice(9)}</div>`).join('')}</div>`;
  return ut.map((x) => [x.t, x.saknas]);
});
await p.screenshot({ path: ut, fullPage: true });
const fel = rader.filter((x) => x[1]); console.log(`${rader.length} byggsatser, ${fel.length} utan egen modell${fel.length ? ': ' + fel.map((x) => x[0].slice(9)).join(', ') : ''}`);
await b.close(); process.exit(fel.length ? 1 : 0);
