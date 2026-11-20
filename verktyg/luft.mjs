// Inkorg 22: luften mellan meddelandena. Spelar en dag med AX-boten och mäter Regissörens logg (window.__regiLogg):
// luft = start på nästa meddelande − slut på förra (allt som syns eller hörs, utom målrutan). TRÄNGSEL 2 = något som inte hör ihop
// med det man just gjorde (inte kvittens, mål eller svar) inom ANDRUM_MS efter förra meddelandet eller ANDRUM_EFTER_KLART_MS efter en klar uppgift.
// Kör: node verktyg/luft.mjs <url> <dag 1–5> <namn>  → verktyg/a076/luft-<namn>-dag<N>.json och en rad på stdout
import fs from 'fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const [url = 'http://127.0.0.1:8765/ax.html', dagS = '1', namn = 'nu'] = process.argv.slice(2), dag = +dagS;
const ANDRUM_MS = 8000, ANDRUM_EFTER_KLART_MS = 12000;
const fran = dag === 1 ? null : fs.readFileSync(new URL(`./sparfiler/start-dag${dag}.json`, import.meta.url), 'utf8');
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const sidfel = []; p.on('pageerror', (e) => sidfel.push(e.message));
p.on('console', (m) => { const t = m.text(); if (process.env.VISA && t.startsWith('[sim]')) console.log(t); });
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
}, fran);
await p.goto(url); await p.waitForTimeout(3500);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {}); await p.waitForTimeout(2000);
for (let i = 0; i < 30 && !(await p.evaluate(() => !!window.__printahem?.S).catch(() => false)); i++) await p.waitForTimeout(1000);
await p.evaluate(() => { window.__vt.start(); window.__simStegMax = 40; });
await p.addScriptTag({ content: fs.readFileSync(new URL('./sim-bot.js', import.meta.url), 'utf8') });
const r = await p.evaluate((d) => window.__simBot.kor(d + 1, 40), dag);
const logg = (await p.evaluate(() => window.__regiLogg || [])).filter((e) => e.dag === dag);
const brott = await p.evaluate(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && ['TRÄNGSEL 2', 'MAMMA SKRIKER', 'SEN KVITTENS', 'OCH SEN', 'SNÖ', 'SAMMA MENING TVÅ GÅNGER', 'SAMMA SAK TVÅ GÅNGER', 'SPELORD I REPLIK', 'FRAMTIDA MÅL SYNS', 'BRORSAN'].includes(e.vem)).map((e) => e.vem + ': ' + e.text));
await b.close();
fs.mkdirSync(new URL('./a076/', import.meta.url), { recursive: true });
fs.writeFileSync(new URL(`./a076/luft-${namn}-dag${dag}.json`, import.meta.url), JSON.stringify({ namn, dag, sidfel, brott, logg }, null, 0));
const { analys } = await import('./luft-analys.mjs');
console.log(JSON.stringify({ ...analys({ namn, dag, logg, sidfel }), brott }));
