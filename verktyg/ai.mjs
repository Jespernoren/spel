// punkt AI: rendera introbilderna ur spelet (nytt spel = nya gården) och spara som png
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs'; import fs from 'fs';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1200, height: 750 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (sessionStorage.getItem('k')) return; sessionStorage.setItem('k', 1); localStorage.clear(); localStorage.setItem('spar:printa-hem:v7', JSON.stringify({ introSett: true })); });
await p.goto('http://127.0.0.1:8765/printa-hem.html'); await p.waitForTimeout(6000);
const lista = (process.argv[2] || '1,2,3,4,5,6,7,8,9,10,11,12').split(',').map(Number);
for (const n of lista) {
  const url = await p.evaluate((n) => window.__printahem.introBild(n, 1200, 750), n);
  fs.writeFileSync(`ai/${String(n).padStart(2, '0')}.png`, Buffer.from(url.split(',')[1], 'base64'));
  console.log('klar', n);
}
console.log(fel.slice(0, 3)); await b.close();
