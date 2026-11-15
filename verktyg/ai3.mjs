// punkt AI3/AI4: rendera introts lager ur spelet och spara som png (konverteras till webp med verktyg/ai3_webp.py)
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs'; import fs from 'fs';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1000, height: 625 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (sessionStorage.getItem('k')) return; sessionStorage.setItem('k', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true })); });
await p.goto('http://127.0.0.1:8765/printa-hem.html'); await p.waitForTimeout(6000);
const STORLEK = { vag: [2600, 520], cyklist: [520, 520] };
const lista = (process.argv[2] || 'rum1,rum,stok1,stok2,stok3,mamma2,mamma3,mamma4,mamma5,mamma6,dorr6,kort7,kort8,kort9,cyklist,vag,gard,kort12,kort13,skjul').split(',');
const ut = process.argv[3] || '/home/claude/test/ai3';
const pts = {};
for (const n of lista) {
  const [w, h] = STORLEK[n] || [1000, 625];
  const r = await p.evaluate(([n, w, h]) => window.__printahem.introLager(n, w, h), [n, w, h]);
  fs.writeFileSync(`${ut}/${n}.png`, Buffer.from(r.url.split(',')[1], 'base64'));
  if (r.pts) pts[n] = r.pts;
  console.log('klar', n);
}
if (Object.keys(pts).length) console.log('PTS', JSON.stringify(pts));
console.log(fel.slice(0, 3)); await b.close();
