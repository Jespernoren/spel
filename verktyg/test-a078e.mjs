// Inkorg 13 (A-078 ruta 13): ritpapperet – blått rutpapper, skräpet → PLAST → tratten → kvarnen, FILAMENT → rullen, PRINTA ALLT! → skrivaren.
// En skärmdump per steg i verktyg/a078/ritpapper-steg1..4.png. Ingen text överlappar någon sak, samma luft mot alla kanter, inget flyttar sig.
// Kör: node verktyg/test-a078e.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a078/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })));
await p.goto(url); await p.waitForTimeout(4000);
await p.evaluate(() => window.__printahem.visaIntroDirekt());
await p.waitForSelector('.ph-tavla', { timeout: 120000 });
const ut = [], DELAR = [['skrap'], ['pil1', 'kvarn'], ['pil2', 'filament'], ['pil3', 'skrivare']];
const mat = () => p.evaluate(() => { const svg = document.querySelector('.ph-tavla svg'), r = {}; for (const g of svg.querySelectorAll('g[data-del]')) { const sak = [...g.children].filter((x) => x.tagName !== 'text'), text = [...g.querySelectorAll('text')]; const box = (l) => { if (!l.length) return null; const bb = l.map((x) => x.getBBox()); const x0 = Math.min(...bb.map((q) => q.x)), y0 = Math.min(...bb.map((q) => q.y)); return { x0, y0, x1: Math.max(...bb.map((q) => q.x + q.width)), y1: Math.max(...bb.map((q) => q.y + q.height)) }; }; r[g.dataset.del] = { sak: box(sak), text: box(text), syns: g.classList.contains('rita') }; } return r; });
let forsta = null;
for (let s = 0; s < DELAR.length; s++) {
  await p.waitForFunction((d) => d.every((k) => document.querySelector(`.ph-tavla g[data-del="${k}"]`)?.classList.contains('rita')), DELAR[s], { timeout: 30000 });
  /* skärmdumpen tas när steget är färdigritat, men innan nästa steg börjar */
  const nasta = DELAR[s + 1]?.[0]; const t0 = Date.now();
  while (Date.now() - t0 < 1500 && !(nasta && await p.evaluate((k) => document.querySelector(`.ph-tavla g[data-del="${k}"]`)?.classList.contains('rita'), nasta))) await p.waitForTimeout(50);
  if (nasta) await p.evaluate((k) => { const g = document.querySelector(`.ph-tavla g[data-del="${k}"]`); if (g) g.style.visibility = 'hidden'; }, nasta);
  const ram = await p.$('.ph-tavla'); await ram.screenshot({ path: `${dir}ritpapper-steg${s + 1}.png` });
  if (nasta) await p.evaluate((k) => { const g = document.querySelector(`.ph-tavla g[data-del="${k}"]`); if (g) g.style.visibility = ''; }, nasta);
  const m = await mat(); if (!forsta) forsta = m;
  const flytt = Object.keys(forsta).filter((k) => JSON.stringify(forsta[k].sak) !== JSON.stringify(m[k].sak));
  ut.push([`steg ${s + 1}: ${DELAR[s].join(' + ')} ritat · inget har flyttat sig (${flytt.join(', ') || 'ok'})`, !flytt.length]);
}
const m = await mat(), saker = Object.entries(m).filter(([, v]) => v.sak), texter = Object.entries(m).filter(([, v]) => v.text);
const kr = (a, c) => a.x0 < c.x1 && c.x0 < a.x1 && a.y0 < c.y1 && c.y0 < a.y1;
const overlapp = []; for (const [tk, tv] of texter) for (const [sk, sv] of saker) if (kr(tv.text, sv.sak) && !(tk === sk)) overlapp.push(`${tk}-texten på ${sk}`);
for (const [tk, tv] of texter) if (kr(tv.text, tv.sak) && !/^pil/.test(tk)) overlapp.push(`${tk}-texten på sin egen sak`);
ut.push([`ingen text överlappar någon sak (${overlapp.join(', ') || 'ok'})`, !overlapp.length]);
const alla = Object.values(m).flatMap((v) => [v.sak, v.text].filter(Boolean));
const x0 = Math.min(...alla.map((q) => q.x0)), y0 = Math.min(...alla.map((q) => q.y0)), x1 = Math.max(...alla.map((q) => q.x1)), y1 = Math.max(...alla.map((q) => q.y1));
const marg = [x0, y0, 1000 - x1, 625 - y1].map((v) => Math.round(v));
ut.push([`luften mot kanterna (vänster, upp, höger, ner): ${marg.join(' · ')} – lika (±12)`, Math.max(...marg) - Math.min(...marg) <= 12]);
const kol = m.skrap.sak, tr = m.kvarn.sak;
ut.push([`vänster kolumn: skräpet ovanför PLAST-pilen ovanför tratten och kvarnen, samma mitt (${Math.round((kol.x0 + kol.x1) / 2)} / ${Math.round((tr.x0 + tr.x1) / 2)})`, kol.y1 < m.pil1.sak.y0 && m.pil1.sak.y1 < tr.y0 && Math.abs((kol.x0 + kol.x1) / 2 - (tr.x0 + tr.x1) / 2) < 15]);
const bg = await p.evaluate(() => getComputedStyle(document.querySelector('.ph-tavla')).backgroundColor);
ut.push([`blått rutpapper (${bg})`, /rgb\(31, 79, 143\)/.test(bg)]);
ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, fel.length === 0]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
await b.close(); process.exit(ut.every((x) => x[1]) ? 0 : 1);
