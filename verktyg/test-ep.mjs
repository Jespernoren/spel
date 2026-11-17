// EH: fyllnadsgraden syns på rullen som fylls. Kör: node verktyg/test-eh.mjs [url]
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
// EP: skylten vid tippen säger bara SOPTIPP tills man känner Rolf. Skärmdumpar före och efter.
const ut = [];
const titta = () => p.evaluate(() => { const h = window.__printahem; h.spelare.pos.set(h.TS.x2 + 6, 0, h.TIPP.z + 0.5); h.spelare.yaw = Math.PI / 2; h.spelare.pitch = 0.05; });
await p.evaluate(() => { document.querySelectorAll('.ph-notis,.fp-toast').forEach((e) => e.remove()); });
await titta(); await p.waitForTimeout(2500);
await p.screenshot({ path: '/home/claude/jespernoren/spel/verktyg/test-ep-fore.png' });
const fore = await p.evaluate(() => window.__printahem.kand('rolf'));
await p.evaluate(() => { window.__printahem.S.rolfKand = true; }); await titta(); await p.waitForTimeout(2500);
await p.screenshot({ path: '/home/claude/jespernoren/spel/verktyg/test-ep-efter.png' });
ut.push([`kand('rolf') före ${fore}, efter ${await p.evaluate(() => window.__printahem.kand('rolf'))}`, !fore]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
