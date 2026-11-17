// EK: skärmdumpar av dagbokssidan dag 1 och ett milstolpsfoto. Kör: node verktyg/test-ek.mjs [url]
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
await p.waitForTimeout(3000);
await p.evaluate(() => window.__printahem.visaLapp('start'));
await p.waitForTimeout(4000);
await p.screenshot({ path: '/home/claude/jespernoren/spel/verktyg/test-ek-dagbok.png' });
ut.push(['dagbokssidan dag 1 syns stor med Fortsätt', await p.evaluate(() => [...document.querySelectorAll('button')].some((b) => b.getBoundingClientRect().width && /Fortsätt/.test(b.textContent)))]);
await p.evaluate(() => { for (const b of document.querySelectorAll('button')) if (b.getBoundingClientRect().width && /Fortsätt/.test(b.textContent)) b.click(); });
await p.waitForTimeout(1500);
await p.evaluate(() => { const h = window.__printahem; h.fotografera(h.POLAROID[1]); });
await p.waitForTimeout(1800);
await p.screenshot({ path: '/home/claude/jespernoren/spel/verktyg/test-ek-foto.png' });
ut.push(['fotot syns stort med text under', await p.evaluate(() => !!document.querySelector('.ph-polstor'))]);
ut.push([`17 polaroider (${await p.evaluate(() => window.__printahem.POLAROID.length)})`, await p.evaluate(() => window.__printahem.POLAROID.length === 17)]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
