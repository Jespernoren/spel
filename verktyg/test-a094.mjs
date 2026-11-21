// A-094 (inkorg 34): träffytan efter sakens storlek. Stora saker får boxen + 5 cm, mellan + 10 cm, små 1,5× (minst 0,4 m).
// Skärmdumpar med den vita ramen i verktyg/a094/. Kör: node verktyg/test-a094.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a094/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
async function sida(spar) {
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(e.message));
  await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
  await p.goto(url); await p.waitForTimeout(5000);
  await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
  for (let i = 0; i < 30 && !(await p.evaluate(() => !!window.__printahem?.S).catch(() => false)); i++) await p.waitForTimeout(1000);
  await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-dagbokkort, .ph-kapkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
  await p.evaluate(() => { document.querySelectorAll('.ph-dagbokkort, .ph-notis').forEach((e) => e.remove()); });
  return p;
}
const sikta = (p, re, fil, avst = 2.4) => p.evaluate(([re, avst]) => {
  const P = window.__printahem, I = P.interaktorObj(), sp = P.spelare, V = sp.pos.constructor, rx = new RegExp(re, 'i');
  const txt = (o) => { try { const t = o.userData.interaktion.text; return String(typeof t === 'function' ? t(o) : t || ''); } catch { return ''; } };
  const syn = (o) => { for (let x = o; x; x = x.parent) if (!x.visible) return false; return true; };
  const o = I.mal.find((x) => syn(x) && rx.test(txt(x))); if (!o) return { fel: 'hittade inte ' + re };
  const B = o.autoTraffYta ? new (P.THREE.Box3)().setFromObject(o.autoTraffYta) : new (P.THREE.Box3)().setFromObject(o);
  const vis = new (P.THREE.Box3)(); o.updateMatrixWorld(true); o.traverse((m) => { if (!m.isMesh || m.userData.autoTraff || m.material?.colorWrite === false) return; for (let q = m; q && q !== o.parent; q = q.parent) if (!q.visible) return; vis.union(new (P.THREE.Box3)().setFromObject(m)); });
  const c = B.getCenter(new V()), vs = vis.getSize(new V()), L = Math.max(vs.x, vs.y, vs.z);
  for (let i = 0; i < 16; i++) { const v = i * Math.PI / 8, d = Math.max(avst, L + 1.2); const x = c.x + Math.sin(v) * d, z = c.z + Math.cos(v) * d;
    sp.pos.set(x, sp.pos.y, z); sp.yaw = Math.atan2(-(c.x - x), -(c.z - z)); sp.pitch = Math.atan2(c.y - 1.6, d);
    P.kameraObj().position.set(x, 1.6, z); P.kameraObj().rotation.set(sp.pitch, sp.yaw, 0, 'YXZ'); P.kameraObj().updateMatrixWorld(true); P.uppdateraSikte();
    let ok = false; for (let h = I.hovrad; h; h = h.parent) if (h === o) ok = true;
    if (ok) return { namn: txt(o).slice(0, 40), ram: I.ram.visible, L: +L.toFixed(2), over: +(B.max.y - vis.max.y).toFixed(2), sida: +((B.getSize(new V()).x - vs.x) / 2).toFixed(2), auto: !!o.autoTraffYta };
  }
  return { fel: 'siktet tog aldrig ' + re };
}, [re, avst]);
{ const p = await sida(JSON.stringify({ spelarNamn: 'Test', introSett: true }));
  const r = await sikta(p, 'Spika|ta hammaren'); await p.waitForTimeout(700); await p.screenshot({ path: dir + 'bradhogen.png' });
  ut.push([`brädhögen: ${r.fel || `största sidan ${r.L} m, ramen ${r.over} m över högsta plankan, ram ${r.ram}`}`, !r.fel && r.ram && r.over <= 0.15]);
  const s = await sikta(p, 'Först skylten|lasta|Ta upp'); await p.waitForTimeout(700); await p.screenshot({ path: dir + 'skrivaren.png' });
  ut.push([`skrivaren på cykeln: ${s.fel || `största sidan ${s.L} m, ${s.over} m över, ram ${s.ram}`}`, !s.fel && s.ram]);
  await p.close(); }
{ const p = await sida(fs.readFileSync(new URL('./sparfiler/start-dag2.json', import.meta.url), 'utf8'));
  const f = await sikta(p, 'pet-flaska'); await p.waitForTimeout(700); await p.screenshot({ path: dir + 'flaskan.png' });
  ut.push([`en pet-flaska: ${f.fel || `största sidan ${f.L} m, ramen ${f.sida} m ut åt sidan (efter storleken), ram ${f.ram}`}`, !f.fel && f.ram && f.sida > 0.05]);
  const k = await sikta(p, 'skjul|taket|väggen|dörren|Här ska sängen', 'skjulet.png', 4); await p.waitForTimeout(700); await p.screenshot({ path: dir + 'skjulet.png' });
  ut.push([`skjulet: ${k.fel || `${k.namn} · största sidan ${k.L} m, ${k.over} m över, ram ${k.ram}`}`, !k.fel && k.ram && (k.L <= 1.5 || k.over <= 0.15)]);
  // alla saker över 1,5 m: ramen högst 15 cm över den högsta synliga delen
  const stora = await p.evaluate(() => { const P = window.__printahem, I = P.interaktorObj(), ut = [];
    for (const o of I.mal) { const y = o.autoTraffYta; if (!y) continue; const vis = new (P.THREE.Box3)(); o.updateMatrixWorld(true);
      o.traverse((m) => { if (!m.isMesh || m.userData.autoTraff || m.material?.colorWrite === false) return; for (let q = m; q && q !== o.parent; q = q.parent) if (!q.visible) return; vis.union(new (P.THREE.Box3)().setFromObject(m)); });
      if (vis.isEmpty()) continue; const s = vis.getSize(new (P.THREE.Vector3)()); if (Math.max(s.x, s.y, s.z) <= 1.5) continue;
      const B = new (P.THREE.Box3)().setFromObject(y); if (B.max.y - vis.max.y > 0.15) ut.push(`${o.name || o.uuid.slice(0, 6)} ${(B.max.y - vis.max.y).toFixed(2)} m`); }
    return ut; });
  ut.push([`saker över 1,5 m med ramen mer än 15 cm över: ${stora.length} (${stora.slice(0, 4).join(' · ') || 'inga'})`, !stora.length]);
  await p.close(); }
ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, !fel.length]);
await b.close();
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
