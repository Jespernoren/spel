// punkt AI: introt i 900×620 och 390×844 – en skärmdump per bild
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs'; import fs from 'fs';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const fel = [], natet = [];
for (const [w, h] of [[900, 620], [390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } }); p.on('pageerror', (e) => fel.push(e.message));
  p.on('request', (r) => { if (r.url().includes('/intro/')) natet.push(`${w}:${r.url().split('/').pop()}`); });
  await p.addInitScript(() => { if (sessionStorage.getItem('k')) return; sessionStorage.setItem('k', 1); localStorage.clear(); });
  await p.goto('http://127.0.0.1:8765/printa-hem.html'); await p.waitForTimeout(3500);
  await p.mouse.click(w / 2, h / 2); await p.waitForTimeout(1500);
  for (let i = 1; i <= 12; i++) {
    await p.waitForTimeout(900);
    await p.screenshot({ path: `ai/intro-${w}-${String(i).padStart(2, '0')}.png` });
    if (i === 1) console.log(w, 'förladdat vid bild 1:', JSON.stringify(natet.filter((x) => x.startsWith(w + ':'))));
    await p.mouse.click(w / 2, h - 40);
  }
  await p.close();
}
console.log('hämtade bilder:', natet.length, 'sidfel:', JSON.stringify(fel.slice(0, 3))); await b.close();
