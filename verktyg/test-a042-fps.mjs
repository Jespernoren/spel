// A-042 punkt 5 och tillägg 15:05: fart. Laddar sparfilen dag 18 (svackan, floden, tippens lager och fyra linjer) och mäter
// från fyra vyer: bilder per sekund (medel och sämsta 1 %), JS-tid per bildruta, ritanrop och trianglar.
// Headless Chrome ritar med programvara (swiftshader), så FPS här är ett golv – ritanropen och JS-tiden är det som går att jämföra.
// Kör: node verktyg/test-a042-fps.mjs [url] [cpu-broms, t.ex. 4]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html', broms = +(process.argv[3] || 1);
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } }); const p = await ctx.newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
const spar = JSON.parse(fs.readFileSync('verktyg/sparfiler/dag18.json', 'utf8'));
await p.addInitScript((s) => { if (!sessionStorage.getItem('fps')) { sessionStorage.setItem('fps', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); } }, JSON.stringify(spar));
await p.goto(url); await p.waitForTimeout(5000);
for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) { await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|BÖRJA|Fortsätt|Starta|Hoppa|Vakna|Ny dag/i.test(k.textContent)) { k.click(); return; } } }); await p.waitForTimeout(1000); }
await p.waitForTimeout(3000);
if (broms > 1) { const cdp = await ctx.newCDPSession(p); await cdp.send('Emulation.setCPUThrottlingRate', { rate: broms }); }
const VYER = [['startplatsen mot svackan', [2, 12], [0, -30]], ['fabriken, fyra linjer', [-6, 14], [-14, 0]], ['tippen', [-8, 10], [-22, 2]], ['grinden ner i svackan', [-20, -21], [-12, -34]]];
const ut = [];
for (const [namn, [x, z], [tx, tz]] of VYER) {
  const r = await p.evaluate(async ([x, z, tx, tz]) => { const P = window.__printahem; P.spelare.pos.set(x, P.spelare.pos.y, z); P.tittaMot?.(tx, tz, 0.1, { tvang: true, nyckel: 'fps' + x });
    await new Promise((ok) => setTimeout(ok, 1500));
    const dt = []; let t0 = performance.now(), slut = t0 + 6000; await new Promise((ok) => { const f = (t) => { dt.push(t - t0); t0 = t; if (t < slut) requestAnimationFrame(f); else ok(); }; requestAnimationFrame(f); });
    const i = P.renderer?.info?.render || {}; dt.shift(); const s = [...dt].sort((a, b) => b - a); const medel = dt.reduce((a, b) => a + b, 0) / dt.length;
    return { fps: +(1000 / medel).toFixed(1), samst1: +(1000 / s[Math.max(0, Math.floor(s.length * 0.01))]).toFixed(1), calls: i.calls, tri: i.triangles };
  }, [x, z, tx, tz]);
  ut.push(`${namn}: ${r.fps} FPS (sämsta 1 %: ${r.samst1}) · ${r.calls} ritanrop · ${Math.round(r.tri / 1000)} k trianglar`);
}
console.log(`CPU-broms ${broms}×`); for (const t of ut) console.log('·', t);
console.log(fel.length ? 'sidfel: ' + fel[0] : 'inga sidfel'); await b.close();
