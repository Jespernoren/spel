import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
const natet = []; p.on('request', (r) => { if (r.url().includes('/intro/')) natet.push(r.url().split('/').pop()); });
await p.addInitScript(() => { if (sessionStorage.getItem('k')) return; sessionStorage.setItem('k', 1); localStorage.clear(); });
await p.goto('http://127.0.0.1:8765/printa-hem.html'); await p.waitForTimeout(3500);
await p.mouse.click(640, 400); await p.waitForTimeout(1600);
const sk = (n) => p.screenshot({ path: `/home/claude/test/intro/${n}.png` });
await sk('01');
for (let k = 2; k <= 14; k++) {
  await p.mouse.click(640, 690);
  if (k === 3) { await p.waitForTimeout(250); await sk('02-03-mitt'); }
  if (k === 6) { await p.waitForTimeout(450); await sk('06-dorr'); }
  if (k === 10) { await p.waitForTimeout(1500); await sk('10-mitt'); }
  if (k === 11) { await p.waitForTimeout(900); await sk('11-mitt'); }
  await p.waitForTimeout(k === 14 ? 2500 : 1500); await sk(String(k).padStart(2, '0'));
  if (k === 14) { await p.waitForTimeout(16000); await sk('14-slut'); }
}
console.log('hämtat:', natet.length, [...new Set(natet)].join(' ')); console.log(fel.slice(0, 4)); await b.close();
