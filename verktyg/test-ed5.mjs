// ED 5: pilen står 0,3 m ovanför det man ser (inte träffytan) och är högst 2× stor. Kör: node verktyg/test-ed5.mjs [url]
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
const mat = () => p.evaluate(() => { const h = window.__printahem, pil = h.malPil, T = h.THREE; if (!pil.visible) return null;
  // närmaste synliga sak under pilen: högsta synliga mesh (inte träffytor) inom 1,5 m
  let topp = -Infinity; (() => { let r = pil; while (r.parent) r = r.parent; return r; })().traverse((m) => { if (!m.isMesh || m === pil || pil.getObjectById(m.id)) return; for (let q = m; q; q = q.parent) if (q.visible === false) return; if (m.material?.colorWrite === false || (m.material?.opacity ?? 1) < 0.05) return;
    if (!m.geometry.boundingBox) m.geometry.computeBoundingBox(); const bx = m.geometry.boundingBox.clone().applyMatrix4(m.matrixWorld); const c = bx.getCenter(new T.Vector3()), px = pil.position.x - (h.S.steg <= 1 && !h.S.skyltUppe ? 0.65 : 0);
    if (Math.hypot(c.x - px, c.z - pil.position.z) < 1.2 && bx.max.y < pil.position.y && bx.max.y - bx.min.y < 6) topp = Math.max(topp, bx.max.y); });
  return { y: pil.position.y, topp, skala: pil.scale.x, steg: h.S.steg }; });
await p.waitForTimeout(1500);
const a = await mat(); await p.screenshot({ path: 'verktyg/test-ed5-start.png' });
if (a) ut.push([`startmålet: pilen ${(a.y - a.topp).toFixed(2)} m ovanför det synliga, skala ${a.skala.toFixed(2)}`, a.y - a.topp >= 0.25 && a.y - a.topp <= 0.5 && a.skala <= 2.001]);
await p.evaluate(() => { const h = window.__printahem; h.S.skyltUppe = true; h.S.steg = h.SI.kop ?? h.S.steg; h.S.kvarnStar = true; h.ritaStart(); });
await p.waitForTimeout(2500);
const c = await mat(); await p.screenshot({ path: 'verktyg/test-ed5-kvarn.png' });
if (c) ut.push([`kvarnmålet (steg ${c.steg}): pilen ${(c.y - c.topp).toFixed(2)} m ovanför det synliga, skala ${c.skala.toFixed(2)}`, c.y - c.topp >= 0.25 && c.y - c.topp <= 0.5 && c.skala <= 2.001]);
if (!a && !c) ut.push(['ingen pil syntes', false]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
