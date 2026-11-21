// test-a108 (inkorg 53, A-108): speltestloggen. Slår på speltestet i Esc-menyn (Hjälp) med musen, låter boten spela dag 1,
// gör ett felklick, hämtar zip-filen och kör verktyg/speltest-analys.mjs på den.
// Kör: node verktyg/test-a108.mjs [url]
import fs from 'fs';
import { execFileSync } from 'child_process';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
fs.mkdirSync(new URL('./a108/', import.meta.url), { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const sidfel = []; p.on('pageerror', (e) => sidfel.push(e.message));
await p.addInitScript((fran) => {
  const rs = window.setTimeout.bind(window), rc = window.clearTimeout.bind(window), si = window.setInterval.bind(window), ci = window.clearInterval.bind(window), raf = window.requestAnimationFrame.bind(window);
  const pnow = performance.now.bind(performance);
  let virt = false, vt = 0, nid = 1e6; const T = new Map(); let rafQ = [];
  performance.now = () => (virt ? vt : pnow());
  window.__vt = {
    start() {
      vt = pnow(); virt = true;
      window.setTimeout = (fn, ms = 0, ...a) => { const id = nid++; T.set(id, { at: vt + Math.max(0, +ms || 0), fn, a }); return id; };
      window.clearTimeout = (id) => { if (T.has(id)) T.delete(id); else rc(id); };
      window.setInterval = (fn, ms = 0, ...a) => { const id = nid++; T.set(id, { at: vt + Math.max(10, +ms || 0), fn, a, iv: Math.max(10, +ms || 0) }); return id; };
      window.clearInterval = (id) => { if (T.has(id)) T.delete(id); else ci(id); };
      window.requestAnimationFrame = (fn) => { rafQ.push(fn); return nid++; };
    },
    fram(ms) {
      vt += ms;
      for (let g = 0; g < 200; g++) {
        let nasta = null, nid2 = null;
        for (const [id, t] of T) if (t.at <= vt && (!nasta || t.at < nasta.at)) { nasta = t; nid2 = id; }
        if (!nasta) break;
        if (nasta.iv) nasta.at += nasta.iv; else T.delete(nid2);
        try { typeof nasta.fn === 'function' ? nasta.fn(...nasta.a) : null; } catch (e) { console.error('timer', e.message); }
      }
      const q = rafQ; rafQ = [];
      for (const fn of q) { if (fn.name === 'ruta' || fn.motorLoop) continue; try { fn(vt); } catch (e) { console.error('raf', e.message); } }
    },
    verklig: (fn, ms) => { if (ms) return rs(fn, ms); const ch = new MessageChannel(); ch.port1.onmessage = () => fn(); ch.port2.postMessage(0); },   // MessageChannel stryps inte som setTimeout i en dold flik
    get nu() { return vt; },
  };
  if (!sessionStorage.getItem('sim')) { sessionStorage.setItem('sim', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', fran || JSON.stringify({ introSett: true, spelarNamn: 'Simulering', dag1Sida: true })); }
}, null);
await p.goto(url); await p.waitForTimeout(3500);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {}); await p.waitForTimeout(2000);
for (let i = 0; i < 30 && !(await p.evaluate(() => !!window.__printahem?.S).catch(() => false)); i++) await p.waitForTimeout(1000);
await p.evaluate(() => window.__printahem.speltest.rensa());
const ut = [];
// 1. knappen i Esc-menyn → Hjälp, med musen
await p.keyboard.press('Escape'); await p.waitForTimeout(600);
await p.click('[data-sida="hjalp"]').catch(() => {}); await p.waitForTimeout(500);
const fore = await p.evaluate(() => document.querySelector('[data-speltest]')?.textContent || '');
await p.click('[data-speltest]').catch(() => {}); await p.waitForTimeout(400);
const efter = await p.evaluate(() => document.querySelector('[data-speltest]')?.textContent || '');
await p.screenshot({ path: new URL('./a108/esc-hjalp-speltest.png', import.meta.url).pathname });
ut.push([`knappen i Esc-menyn → Hjälp: "${fore.replace(/\s+/g, ' ').slice(0, 30)}" → "${efter.replace(/\s+/g, ' ').slice(0, 30)}"`, /AV/.test(fore) && /PÅ/.test(efter)]);
await p.click('[data-tillbaka]').catch(() => {}); await p.waitForTimeout(300); await p.keyboard.press('Escape'); await p.waitForTimeout(600);
const prick = await p.evaluate(() => { const d = document.querySelector('.ph-st-prick'); return !!d && !d.hidden && d.getBoundingClientRect().width > 0; });
await p.screenshot({ path: new URL('./a108/rod-prick.png', import.meta.url).pathname, clip: { x: 1080, y: 0, width: 200, height: 80 } });
ut.push(['röd prick uppe i hörnet när speltestet är på', prick]);
// 2. felklick med musen i riktig tid: först mot himlen (inget i siktet), sedan på brädhögen utan hammaren framme
await p.evaluate(() => { const P = window.__printahem; P.spelare.pitch = 1.4; });
await p.mouse.move(640, 360); await p.waitForTimeout(400); await p.mouse.down(); await p.waitForTimeout(150); await p.mouse.up(); await p.waitForTimeout(600);
await p.evaluate(() => { const P = window.__printahem, o = P.bradhog, sp = P.spelare, m = new P.THREE.Box3().setFromObject(o).getCenter(new P.THREE.Vector3()); sp.pos.set(m.x + 1.8, sp.pos.y, m.z + 1.4); sp.yaw = Math.atan2(-(m.x - sp.pos.x), -(m.z - sp.pos.z)); sp.pitch = -0.25; });
await p.waitForTimeout(800); await p.mouse.down(); await p.waitForTimeout(150); await p.mouse.up(); await p.waitForTimeout(800);
console.log('  klicken i loggen:', JSON.stringify(await p.evaluate(async () => { await window.__printahem.speltest.flush(); return 0; })));
// 3. boten spelar dag 1 (samma bot och virtuell tid som test-story)
await p.evaluate(() => { window.__vt.start(); window.__simStegMax = 15; });
await p.addScriptTag({ content: fs.readFileSync(new URL('./sim-bot.js', import.meta.url), 'utf8') });
await p.evaluate(() => window.__simBot.kor(2, 30));

// 4. hämta zip-filen och analysera
await p.evaluate(() => window.__printahem.speltest.flush());
const z = await p.evaluate(() => window.__printahem.speltest.export());
const zipFil = new URL(`./a108/${z.namn}`, import.meta.url).pathname; fs.writeFileSync(zipFil, Buffer.from(z.b64, 'base64'));
let analys = '', analysOk = true; try { analys = execFileSync('node', [new URL('./speltest-analys.mjs', import.meta.url).pathname, zipFil, new URL('./a108/rapport.md', import.meta.url).pathname], { encoding: 'utf8' }).trim(); } catch (e) { analysOk = false; analys = String(e.stdout || e.message); }
ut.push([`zip-filen ${z.namn}: ${z.antal} händelser, ${z.bilder} bilder`, z.antal > 50 && z.bilder > 0]);
ut.push([`speltest-analys utan fel: ${analys}`, analysOk]);
const rap = fs.existsSync(new URL('./a108/rapport.md', import.meta.url)) ? fs.readFileSync(new URL('./a108/rapport.md', import.meta.url), 'utf8') : '';
const tal = (re) => +(rap.match(re)?.[1] || 0);
const felk = tal(/varav (\d+) felklick/), stilla = tal(/(\d+) stillestånd/), malN = tal(/(\d+) mål ·/);
ut.push([`minst ett felklick (${felk})`, felk >= 1], [`minst ett stillestånd (${stilla})`, stilla >= 1]);
const L = JSON.parse(execFileSync('unzip', ['-p', zipFil, 'logg.json'], { encoding: 'utf8', maxBuffer: 1e8 }));
const malB = L.handelser.filter((e) => e.typ === 'bild' && e.skal === 'mal').length;
ut.push([`en bild per mål (${malB} bilder vid ${malN} nya mål)`, malB >= malN && malN >= 10]);
const typer = [...new Set(L.handelser.map((e) => e.typ))].sort();
ut.push([`det som sparas: ${typer.join(', ')}`, ['visat', 'klick', 'mal', 'plats', 'stilla', 'bild', 'verktyg', 'meny', 'kontroll'].every((t) => typer.includes(t))]);
ut.push([`0 sidfel${sidfel.length ? ' – ' + sidfel[0] : ''}`, !sidfel.length]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
await b.close(); process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
