// A-062 v3: introt enligt storyboard v3 → startmenyn → dagboken sida 1 → spelet. Kör: node verktyg/test-a062v3.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';   /* A-078: introt v4 har 14 rutor; A-076: menyn först, Starta spelar introt */
const N = 14;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const ctx = await b.newContext({ viewport: { width: 1280, height: 800 } });
await ctx.addInitScript(() => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); } });
const p = await ctx.newPage(); const fel = []; p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
await p.click('.br-starta'); await p.waitForTimeout(800);
await p.evaluate(() => { const f = document.querySelector('.ph-namn-falt'); if (f) { f.value = 'Test'; f.closest('.ph-namn')?.querySelector('.fp-knapp')?.click(); } });
let sista = 0; const ut = [];
for (let n = 0; n < 900; n++) {
  const s = await p.evaluate(() => { const l = (window.__introLogg || []).filter((x) => x.h === 'visas'); return { k: l.length, slut: (window.__introLogg || []).some((x) => x.h === 'slut') }; });
  if (s.k !== sista) { sista = s.k; await p.waitForTimeout(sista === N ? 5200 : sista === N - 1 ? 5000 : 900); await p.screenshot({ path: `verktyg/a062v3-ruta${String(sista).padStart(2, '0')}.png` }); }
  if (s.slut) break; await p.waitForTimeout(100);
}
await p.waitForTimeout(400);   /* första bilden i spelet, innan något vänder kameran */
const diff = await p.evaluate(async () => {
  const P = window.__printahem, a = P.spelBildCache.start, pv = P.malPil.visible; P.malPil.visible = false; const bb = P.startBild(); P.malPil.visible = pv;   /* målpilen är spelets eget tillägg */
  const las = (src) => new Promise((ok) => { const im = new Image(); im.onload = () => { const c = document.createElement('canvas'); c.width = 160; c.height = 100; const g = c.getContext('2d'); g.drawImage(im, 0, 0, 160, 100); ok(g.getImageData(0, 0, 160, 100).data); }; im.src = src; });
  const [x, y] = [await las(a), await las(bb)]; let d = 0; for (let i = 0; i < x.length; i += 4) d += Math.abs(x[i] - y[i]) + Math.abs(x[i + 1] - y[i + 1]) + Math.abs(x[i + 2] - y[i + 2]);
  return d / (x.length / 4) / 3 / 255 * 100;
});
const L = await p.evaluate(() => window.__introLogg || []);
const visas = L.filter((x) => x.h === 'visas'), bub = L.filter((x) => x.h === 'bubbla').map((x) => JSON.parse(x.x));
ut.push([`${N} rutor visades (${visas.length})`, visas.length === N]);
{ const kal = visas.map((v) => (v.x.match(/kal\|(MÅN|TIS|ONS|TORS|FRE)DAG/) || [])[0]).filter(Boolean).map((x) => x.slice(4)); ut.push([`kalendern ${kal.join(' → ')}`, kal.join() === 'MÅNDAG,TISDAG,ONSDAG,TORSDAG,FREDAG']); }
{ const st = L.filter((x) => x.h === 'röstStart' && /^STÄDA/.test(x.x)).map((x) => x.x); ut.push([`tre hörbara STÄDA: ${st.join(' ')}`, st.length === 3]); }
{ const krock = bub.filter((x) => { const [hx, hy] = x.huvud; const f = [hx - 6, hy - 10, hx + 6, hy + 10]; return !(x.bub[2] < f[0] || x.bub[0] > f[2] || x.bub[3] < f[1] || x.bub[1] > f[3]); }); ut.push([`${bub.length} bubblor, ingen täcker ett ansikte${krock.length ? ': ' + krock.map((x) => x.text).join(', ') : ''}`, bub.length >= 6 && !krock.length]); }
{ const bryt = []; for (let i = 1; i < visas.length; i++) { const t = visas[i].t, prat = L.filter((x) => x.h === 'röstStart' && x.t < t).pop(), slut = L.filter((x) => x.h === 'röstSlut' && x.t < t).pop(); if (prat && (!slut || slut.t < prat.t)) bryt.push(i + 1); } ut.push([`ingen ruta byts medan någon pratar${bryt.length ? ': ' + bryt.join(',') : ''}`, !bryt.length]); }
await p.waitForTimeout(1500);
const meny = await p.evaluate(() => !document.querySelector('.ph-intro') && !document.querySelector('.ph-citat'));
ut.push(['efter introt: inget kvar av introt, inget citatkort', meny]); await p.screenshot({ path: 'verktyg/a062v3-meny.png' });
await p.evaluate(() => { const f = document.querySelector('.ph-namn-falt'); if (f) { f.value = 'Test'; f.closest('.ph-namn')?.querySelector('.fp-knapp')?.click(); } }); await p.waitForTimeout(3500);
const dag1 = await p.evaluate(() => document.querySelector('.ph-dag1')?.innerText || '');
{ const igang = await p.evaluate(() => !!window.__printahem.ui.igang); ut.push([`spelet igång direkt efter introt (A-076: dagboksnotisen i stället för sida 1)`, igang]); } await p.screenshot({ path: 'verktyg/a062v3-dagbok.png' });
await p.evaluate(() => document.querySelector('.ph-dag1 button')?.click()); await p.waitForTimeout(2500);
await p.screenshot({ path: 'verktyg/a062v3-spel.png' });
ut.push([`sista rutan utan krita = spelets första bild (skillnad ${diff.toFixed(2)} %)`, diff < 2]);
await p.waitForTimeout(9000);
const t = await p.evaluate(() => window.__printahem.textLogg().filter((e) => ['sak', 'sak-del'].includes(e.kalla) && e.vem === 'du').map((e) => e.text));
{ const i = t.findIndex((x) => /guldgruva/.test(x)), j = t.findIndex((x) => /Men först en skylt/.test(x)); ut.push([`tankarna: ${t.slice(0, 3).join(' → ')}`, /fri från tjat/i.test(t[0] || '') && i > 0 && j > i]); }
const fanfar = await p.evaluate(() => [...window.__printahem.tidigFanfar]);
ut.push([`ingen fanfar vid start: ${fanfar.join('; ') || '–'}`, !fanfar.length]);
for (const [x, ok] of ut) console.log(ok ? '✓' : '✗', x);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
