// A-062: introt (14 rutor), citatet, tysta kapitelkort och att ruta 14 = första spelbilden. Kör: node verktyg/test-a062.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/a062.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
const klickStart = () => p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); const t = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); if (r.width && t && (t === k || k.contains(t)) && /^(Börja|Starta)/.test(k.textContent.trim())) { k.click(); return k.textContent.trim(); } } return ''; });
for (let n = 0; n < 6 && !(await p.evaluate(() => (window.__introLogg || []).length)); n++) { await klickStart(); await p.waitForTimeout(1500); }
const ut = [], kal = [], cykel = {}, texter = {};
const info = () => p.evaluate(() => {
  const k = (window.__introLogg || []).filter((x) => x.h === 'visas').slice(-1)[0]?.kort || 0;
  const syns = [...document.querySelectorAll('.ph-is > :not(.ut)')];
  const kalT = syns.filter((e) => e.classList.contains('kal')).map((e) => (e.textContent.match(/(MÅN|TIS|ONS|TORS|FRE)DAG/) || [])[0]).filter(Boolean);
  const harCykel = syns.some((e) => /cyklist|kort9|ph-spelbild/.test(e.outerHTML.slice(0, 400)));
  return { k, kal: kalT, cykel: harCykel, text: document.querySelector('.ph-intro-ord')?.textContent.trim() || '' };
});
let sista = 0;
for (let n = 0; n < 600; n++) {
  const i = await info();
  if (!i.k) { await p.waitForTimeout(400); continue; }
  kal[i.k] = kal[i.k] || i.kal.join(','); cykel[i.k] = cykel[i.k] || i.cykel; texter[i.k] = i.text || texter[i.k];
  if (i.k !== sista) { sista = i.k; await p.waitForTimeout(i.k >= 12 ? 1800 : 0); await p.screenshot({ path: `verktyg/a062-ruta${String(i.k).padStart(2, '0')}.png` }); }
  if (i.k === 15) break;
  await p.waitForTimeout(40);
}
await p.keyboard.press('Space'); await p.waitForTimeout(1200);
const citat = await p.evaluate(() => document.querySelector('.ph-citat')?.textContent || '');
await p.screenshot({ path: 'verktyg/a062-citat.png' });
await p.waitForTimeout(4500);
// ruta 14 (kort 15) utan krita jämförs med spelkamerans första bild
const diff = await p.evaluate(async () => {
  const P = window.__printahem, a = P.spelBildCache.start, bb = P.startBild();
  const las = (src) => new Promise((ok) => { const im = new Image(); im.onload = () => { const c = document.createElement('canvas'); c.width = 160; c.height = 100; const g = c.getContext('2d'); g.drawImage(im, 0, 0, 160, 100); ok(g.getImageData(0, 0, 160, 100).data); }; im.src = src; });
  const [x, y] = [await las(a), await las(bb)]; let d = 0; for (let i = 0; i < x.length; i += 4) d += Math.abs(x[i] - y[i]) + Math.abs(x[i + 1] - y[i + 1]) + Math.abs(x[i + 2] - y[i + 2]);
  const fs = (src, n) => { const im = new Image(); im.src = src; return im; }; void fs;
  return { snitt: d / (x.length / 4) / 3, start: bb };
});
await p.evaluate((src) => { const im = document.createElement('img'); im.src = src; im.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:99999'; im.id = 'jmf'; document.body.appendChild(im); }, diff.start);
await p.waitForTimeout(300); await p.screenshot({ path: 'verktyg/a062-startbild.png' }); await p.evaluate(() => document.getElementById('jmf').remove());
const tidig = await p.evaluate(() => [...window.__printahem.tidigFanfar]);
{ const v = await p.evaluate(() => (window.__introLogg || []).filter((x) => x.h === 'visas' && typeof x.kort === 'number'));
  for (const x of v) { const d = (x.x.match(/kal\|(MÅN|TIS|ONS|TORS|FRE)DAG/) || [])[0]; kal[x.kort] = d ? d.slice(4) : ''; cykel[x.kort] = /cyklist|kort9|\|start\||\|skrivare\|/.test(x.x); } }
console.log('kalender', JSON.stringify(kal)); console.log('cykel', JSON.stringify(cykel));
ut.push([`14 rader i tabellen = 15 kort (rad 13 har berättaren + din bubbla) – sista kortet ${sista}`, sista === 15]);
ut.push([`kalendern MÅNDAG → FREDAG: ${kal.slice(2, 7).join(' → ')}`, kal.slice(2, 7).join() === 'MÅNDAG,TISDAG,ONSDAG,TORSDAG,FREDAG']);
ut.push([`cykeln bara i ruta 9 (garaget, enligt tabellen), 10 och 12–14 (kort 12–15): ${Object.entries(cykel).filter(([, v]) => v).map(([k]) => k).join(',')}`, Object.entries(cykel).every(([k, v]) => v === [9, 10, 12, 13, 14, 15].includes(+k)) && Object.keys(cykel).length >= 15]);
ut.push([`citatet: "${citat}"`, /BO på en soptipp/.test(citat) && /i fredags/.test(citat)]);
ut.push([`ruta 14 = första spelbilden (snittdiff ${diff.snitt.toFixed(1)}/255)`, diff.snitt < 12]);
ut.push([`ingen fanfar/konfetti utan delmål: ${tidig.join('; ') || '–'}`, !tidig.length]);
ut.push([`inget "filament" i introt`, !Object.values(texter).some((t) => /filament/i.test(t))]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
