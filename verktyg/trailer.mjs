// A-086: spelar in trailerscener från spelets trailerläge (?trailer=<scen>) – bild för bild, 1920×1080, 30 bilder/s, utan HUD.
// Kör: node verktyg/trailer.mjs <scen> [sparfil] [url]   → verktyg/trailer/scen-<scen>.mp4 (+ en stillbild mitt i, scen-<scen>.jpg)
// Scenerna står i window.__trailer (spel.js, "A-086: trailerläget"). Tiden är virtuell, så varje bild blir likadan oavsett dator.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const [scen, sparfil = new URL('./sparfiler/dag3.json', import.meta.url).pathname, url = 'http://127.0.0.1:8765/printa-hem.html'] = process.argv.slice(2);
if (!scen) { console.log('ange en scen, t.ex. node verktyg/trailer.mjs kvarn'); process.exit(1); }
const UT = new URL('./trailer/', import.meta.url).pathname, TMP = `/tmp/trailer-${scen}`;
fs.mkdirSync(UT, { recursive: true }); fs.rmSync(TMP, { recursive: true, force: true }); fs.mkdirSync(TMP, { recursive: true });
const FPS = 30;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 })).newPage();
const fel = []; p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript((spar) => {
  if (!sessionStorage.getItem('trailer')) { sessionStorage.setItem('trailer', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); localStorage.setItem('printa-hem:vridKamera', 'av'); }
  // virtuell tid (samma som AX): performance.now, timers och rAF går bara när verktyget stegar
  const pnow = performance.now.bind(performance); let virt = false, vt = 0, nid = 1e6; const T = new Map(); let rafQ = [];
  performance.now = () => (virt ? vt : pnow());
  window.__vt = {
    start() { vt = pnow(); virt = true;
      window.setTimeout = (fn, ms = 0, ...a) => { const id = nid++; T.set(id, { at: vt + Math.max(0, +ms || 0), fn, a }); return id; };
      window.clearTimeout = (id) => { T.delete(id); };
      window.setInterval = (fn, ms = 0, ...a) => { const id = nid++; T.set(id, { at: vt + Math.max(10, +ms || 0), fn, a, iv: Math.max(10, +ms || 0) }); return id; };
      window.clearInterval = (id) => { T.delete(id); };
      window.requestAnimationFrame = (fn) => { rafQ.push(fn); return nid++; }; },
    fram(ms) { vt += ms;
      for (let g = 0; g < 200; g++) { let n = null, i = null; for (const [id, t] of T) if (t.at <= vt && (!n || t.at < n.at)) { n = t; i = id; } if (!n) break; if (n.iv) n.at += n.iv; else T.delete(i); try { typeof n.fn === 'function' && n.fn(...n.a); } catch (e) { console.error('timer', e.message); } }
      const q = rafQ; rafQ = []; for (const fn of q) { if (fn.motorLoop) continue; try { fn(vt); } catch (e) { console.error('raf', e.message); } } },
  };
}, fs.readFileSync(sparfil, 'utf8'));
await p.goto(`${url}?trailer=${encodeURIComponent(scen)}`); await p.waitForTimeout(4000);
const H = (f, a) => p.evaluate(f, a);
if (!(await H(() => window.__trailer?.finns))) { console.log(`okänd scen "${scen}" – finns: ${await H(() => window.__trailer?.scener?.join(', '))}`); await b.close(); process.exit(1); }
for (let i = 0; i < 20; i++) { const l = await H(() => ({ igang: window.__printahem.ui.igang, kort: !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort, .ph-intro3') })); if (l.kort) await p.keyboard.press('Enter'); else if (!l.igang) await H(() => window.__startaSpel()); else if (i > 3) break; await p.waitForTimeout(600); }
await H(() => { window.__vt.start(); window.__trailer.forbered(); });
await H(() => { const P = window.__printahem; for (let i = 0; i < 30; i++) { window.__vt.fram(1000 / 30); P.uppdatera(1 / 30); } });   // 1 s uppvärmning: allt hinner falla på plats
const n = Math.round((await H(() => window.__trailer.tid)) * FPS);
for (let i = 0; i < n; i++) {
  const data = await H(([i, fps]) => { const P = window.__printahem; window.__vt.fram(1000 / fps); P.uppdatera(1 / fps); window.__trailer.bild(i / fps, 1 / fps); return P.renderer.domElement.toDataURL('image/jpeg', 0.93); }, [i, FPS]);
  fs.writeFileSync(`${TMP}/${String(i).padStart(4, '0')}.jpg`, Buffer.from(data.split(',')[1], 'base64'));
}
await b.close();
execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-framerate', String(FPS), '-i', `${TMP}/%04d.jpg`, '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '18', '-pix_fmt', 'yuv420p', `${UT}scen-${scen}.mp4`]);
fs.copyFileSync(`${TMP}/${String(Math.floor(n / 2)).padStart(4, '0')}.jpg`, `${UT}scen-${scen}.jpg`);
console.log(`${scen}: ${n} bilder (${(n / FPS).toFixed(1)} s) → verktyg/trailer/scen-${scen}.mp4 · ${fel.length ? 'sidfel: ' + fel.slice(0, 2).join(' · ') : 'inga sidfel'}`);
process.exit(fel.length ? 1 : 0);
