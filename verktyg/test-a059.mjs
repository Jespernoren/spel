// A-059: ingen extruderlåda – kvarnens varma hålskiva glöder och tråden ringlar ner på rullen; kvarnarna växer per linje. Kör: node verktyg/test-a059.mjs [url]
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
const r = await p.evaluate(() => { const h = window.__printahem; const t = []; h.extruder.traverse((o) => { if (o.isMesh && o.material?.color?.getHex?.() === 0xd9822b) t.push('orange låda'); }); const html = document.documentElement.innerHTML; return { lada: t.length, synligText: /EXTRUDER|>Extruder</.test(document.body.innerText) }; });
ut.push([`ingen orange extruderlåda (${r.lada}) och inget "Extruder" i texterna (${!r.synligText})`, r.lada === 0 && !r.synligText]);
await p.evaluate(() => { const h = window.__printahem, S = h.S; S.kvarnStar = true; h.ritaStart(); S.kvarn.motor = true; S.kvarn.tratt = 8; S.kvarn.binge = [200, 200, 200, 200, 200, 200, 200, 200]; S.strom = 100; const k = h.kvarn.getWorldPosition(new h.THREE.Vector3()); h.spelare.pos.x = k.x - 2.2; h.spelare.pos.z = k.z + 2.6; h.tittaMot(k.x - 1.1, k.z + 0.4, 0.4, { tvang: true }); });
await p.waitForTimeout(3500); await p.screenshot({ path: 'verktyg/test-a059-halskiva.png' });
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
