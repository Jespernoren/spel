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
const ut = [];
await p.evaluate(() => { const h = window.__printahem, S = h.S; S.kvarnStar = true; S.kvarn.ut = 600; h.ritaStart();
  const k = h.kvarn.getWorldPosition(new h.THREE.Vector3()); h.spelare.pos.set(k.x + 0.2, 0, k.z + 2.6); h.spelare.yaw = 0; h.spelare.pitch = -0.25; });
await p.waitForTimeout(1500);
const v = await p.evaluate(() => { const l = window.__printahem.rullLapp; return { syns: l.visible, v: l.userData.v }; });
ut.push([`lappen visar 60 % (${JSON.stringify(v)})`, v.syns && v.v === 60]);
await p.screenshot({ path: '/home/claude/jespernoren/spel/verktyg/test-eh.png' });
await p.evaluate(() => { window.__printahem.S.kvarn.ut = 1000; }); await p.waitForTimeout(800);
ut.push(['full rulle: lappen döljs (då lyser rullen)', await p.evaluate(() => !window.__printahem.rullLapp.visible)]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
