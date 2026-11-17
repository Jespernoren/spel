// EG 19: kvarnmotorn ersätter veven synligt (skärmdump). Kör: node verktyg/test-eg.mjs [url]
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
await p.evaluate(() => { const h = window.__printahem, S = h.S; S.kvarnStar = true; h.ritaStart(); const k = h.kvarn.getWorldPosition(new h.THREE.Vector3()); h.spelare.pos.set(k.x + 0.4, 0, k.z + 2.4); h.spelare.yaw = 0.15; h.spelare.pitch = -0.3; });
await p.waitForTimeout(1500); await p.screenshot({ path: '/home/claude/jespernoren/spel/verktyg/test-eg-vev.png' });
const v0 = await p.evaluate(() => window.__printahem.vev3d()?.visible ?? null);
await p.evaluate(() => { const h = window.__printahem; h.laggTill('byggsats:kvarnmotor'); });
const ok = await p.evaluate(() => { const h = window.__printahem, m = h.MONTERA['byggsats:kvarnmotor']; if (!m) return 'ingen MONTERA'; const i = h.S.hotbar.findIndex((x) => x?.typ === 'byggsats:kvarnmotor'); h.S.vald = i; m.gor(h.kvarn); return h.S.kvarn.motor; });
await p.waitForTimeout(1500); await p.screenshot({ path: '/home/claude/jespernoren/spel/verktyg/test-eg-motor.png' });
const v1 = await p.evaluate(() => window.__printahem.vev3d()?.visible ?? null);
ut.push([`motorn sitter (${ok}), veven synlig före ${v0} → efter ${v1}`, ok === true && v1 === false]);
for (const [t, ok2] of ut) console.log(ok2 ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
