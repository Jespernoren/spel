// A-045: guldådern, vaskning (rätt och fel släpp), ringen garanterad inom 8 vaskningar. Kör: node verktyg/test-a045.mjs [url]
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
await p.evaluate(() => { const h = window.__printahem, S = h.S; S.dag = 16; S.guldAder = 16; S.ringVask = 99; h.ader.visible = true; const a = h.ader.position; h.spelare.pos.set(a.x, 0, a.z + 3.2); h.spelare.yaw = 0; h.spelare.pitch = -0.45; h.laggTill('vaskpanna'); const i = S.hotbar.findIndex((x) => x?.typ === 'vaskpanna'); if (i >= 0) S.vald = i; });
await p.waitForTimeout(2500); await p.screenshot({ path: '/home/claude/jespernoren/spel/verktyg/test-a045-ader.png' });
const r = await p.evaluate(() => { const h = window.__printahem, S = h.S, f = () => (S.hotbar.find((x) => x?.typ === 'fynd4')?.n || 0) + (S.kista?.fynd4 || 0); const a0 = f(); for (let i = 0; i < 6; i++) h.vaskSlapp(0.4); const a1 = f(); let bra = 0; for (let i = 0; i < 30; i++) { const b = f(); h.vaskSlapp(2.0); if (f() > b) bra++; } return { felGuld: a1 - a0, bra }; });
ut.push([`fel släpp ger inget guld (${r.felGuld}), rätt släpp ger guld (${r.bra} av 30)`, r.felGuld === 0 && r.bra > 5]);
const ring = await p.evaluate(() => { const h = window.__printahem, S = h.S; S.ringFunnen = false; S.vask = 0; S.ringVask = 0; let n = 0; while (!S.ringFunnen && n < 8) { h.vaskSlapp(2.0); n++; } return { n, iHand: S.hotbar.some((x) => x?.typ === 'ring') }; });
ut.push([`ringen hittas inom 8 vaskningar (${ring.n}) och hamnar i handen`, ring.n <= 8 && ring.iHand]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
