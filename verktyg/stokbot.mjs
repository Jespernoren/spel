// stökboten (inkorg 58 §4 p.6, A-113): spelar dag 1–3 som ett barn. Med ett fast frö (går att köra om) gör den saker
// i fel ordning mellan stegen: lägger saker i kistan och ryggsäcken, byter sak, försöker sälja det den behöver, öppnar och stänger
// menyer, klickar på saker som inte går, springer iväg. Den får aldrig fastna (FAST) och aldrig ge SEKVENSFEL.
// Kör: node verktyg/stokbot.mjs <frö> [url]   ·   alla tio: for f in 1 2 … 10
import fs from 'fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const FRO = +(process.argv[2] || 1);
const url = process.argv[3] || 'http://127.0.0.1:8765/ax.html';
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
}, null);
await p.goto(url); await p.waitForTimeout(3500);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {}); await p.waitForTimeout(2000);
for (let i = 0; i < 30 && !(await p.evaluate(() => !!window.__printahem?.S).catch(() => false)); i++) await p.waitForTimeout(1000);
p.on('pageerror', (e) => console.log('[sidfel]', e.message));
const startRad = await p.evaluate(() => window.__printahem.S.hotbar.slice(0, 3).map((x) => x?.typ || 'hand'));   /* inkorg 20: verktygsraden från start */
let forstaHjalp = ''; for (let i = 0; i < 40 && !forstaHjalp; i++) { forstaHjalp = await p.evaluate(() => document.querySelector('.ph-kontroll')?.textContent || ''); if (!forstaHjalp) await p.waitForTimeout(250); }   /* inkorg 20: första uppmaningen, innan boten gör något */
await p.evaluate(([u, m, c]) => { window.__vt.start(); window.__simUtforlig = u; window.__simStegMax = m; window.__simCykelForst = c[0]; window.__simStromDirekt = c[1]; }, [!!process.env.UTFORLIG, +(process.env.SIM_STEGMAX || 15), [!!process.env.CYKEL_FORST, !!process.env.STROM_DIREKT]]);   /* A-073: STROM_DIREKT=1 tar generatorn direkt i stället för att vänta på hjälpen */   /* A-071: CYKEL_FORST=1 ställer cykeln före generatorn */
await p.evaluate((FRO) => {
  let a = FRO * 2654435761 >>> 0; const slump = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const P = window.__printahem, S = P.S, logg = (window.__stok = []);
  const val = (l) => l[Math.floor(slump() * l.length)];
  const STOK = {
    kistan: () => { const i = S.hotbar.findIndex((x, j) => j > 0 && x && slump() < 0.5); if (i < 1) return; const k = S.kistan.findIndex((x) => !x); if (k < 0) return; S.kistan[k] = S.hotbar[i]; S.hotbar[i] = null; return 'la ' + S.kistan[k].typ + ' i kistan'; },
    ryggan: () => { const i = S.hotbar.findIndex((x, j) => j > 0 && x && slump() < 0.5); if (i < 1) return; const k = S.ryggsack.findIndex((x) => !x); if (k < 0) return; S.ryggsack[k] = S.hotbar[i]; S.hotbar[i] = null; return 'la ' + S.ryggsack[k].typ + ' i ryggsäcken'; },
    salj: () => { const t = val([...S.hotbar, ...S.ryggsack].filter(Boolean).map((x) => x.typ)); if (!t) return; const kr = P.saljTillAli(t, 1); return `försökte sälja ${t} (${kr ? kr + ' kr' : 'nej'})`; },
    byt: () => { const i = Math.floor(slump() * 9); P.byt(i); return 'bytte till plats ' + i; },
    meny: () => { const m = val(['oppnaInv', 'oppnaMarknad', 'oppnaDagbok']); try { P[m](); P.ui.stangButik?.(); } catch {} return 'öppnade och stängde ' + m; },
    klick: () => { const I = P.interaktorObj(), l = I.mal.filter((o) => { let v = true; o.traverse?.((x) => {}); for (let x = o; x; x = x.parent) if (x.visible === false) v = false; return v; }); const o = val(l); if (!o) return; I.hovrad = o; try { I.aktivera(); } catch {} I.hovrad = null; try { P.ui.stangButik?.(); } catch {} return 'klickade på ' + (o.name || o.type); },
    spring: () => { const sp = P.spelare.pos; sp.x += (slump() - 0.5) * 30; sp.z += (slump() - 0.5) * 30; return 'sprang iväg'; },
  };
  window.__simVidSteg = async (id) => { if (slump() > 0.55) return; const n = 1 + Math.floor(slump() * 3); for (let i = 0; i < n; i++) { const k = val(Object.keys(STOK)); let r; try { r = STOK[k](); P.ritaHotbar?.(); } catch (e) { r = 'fel ' + e.message; } if (r) logg.push(`dag ${S.dag} ${id}: ${r}`); } };
}, FRO);
await p.addScriptTag({ content: fs.readFileSync(new URL('./sim-bot.js', import.meta.url), 'utf8') });
const r = await p.evaluate(() => window.__simBot.kor(4, 90));
const stok = await p.evaluate(() => window.__stok);
const L = r.logg;
const FLAGGOR = ['SEKVENSFEL', 'REDAN GJORT', 'FEL PLATS I TEXT', 'GÅVA SOM KÖP', 'PIL PÅ GJORD SAK', 'SAK FÖR UPPGIFT SAKNAS', 'KLICK UTAN SVAR', 'SVAR FÖRE ORSAK'];
const br = L.filter((e) => e.kalla === 'brott' && FLAGGOR.includes(e.vem));
const fast = r.handlingar.filter((h) => /fastnade/.test(typeof h === 'string' ? h : h.text || '')).map((h) => (typeof h === 'string' ? h : h.text));
const ut = [];
ut.push([`frö ${FRO}: ${stok.length} stök, nådde dag ${Math.max(...r.dagar.map((d) => d.dag), 1)}${r.dagar.length ? '' : ''}`, r.dagar.some((d) => d.dag >= 3) && !fast.length]);
ut.push([`frö ${FRO}: 0 FAST (${fast.join(' · ') || 'inga'})`, !fast.length]);
ut.push([`frö ${FRO}: 0 SEKVENSFEL, REDAN GJORT, FEL PLATS I TEXT, GÅVA SOM KÖP, PIL PÅ GJORD SAK, KLICK UTAN SVAR, SVAR FÖRE ORSAK (${br.filter((e) => e.vem !== 'SAK FÖR UPPGIFT SAKNAS').map((e) => e.vem + ': ' + e.text).slice(0, 4).join(' · ') || 'inga'})`, !br.some((e) => e.vem !== 'SAK FÖR UPPGIFT SAKNAS')]);
ut.push([`frö ${FRO}: ${br.filter((e) => e.vem === 'SAK FÖR UPPGIFT SAKNAS').length} gånger tillbaka från kistan/ryggsäcken/borta (SAK FÖR UPPGIFT SAKNAS är räddningen, inte ett fel)`, true]);
/* inkorg 64: dag 1 fram till gripklon – inget mål över 60 s (tiden varje mål stod i rutan) */
{ const M = L.filter((e) => e.kalla === 'målruta' && e.dag === 1); const slut = L.find((e) => e.kalla === 'händelse' && e.vem === 'malKlart' && /id=printGrip(\s|$)/.test(e.text));
  const langa = []; for (let i = 0; i < M.length; i++) { const t1 = (M[i + 1]?.tot ?? slut?.tot ?? M[i].tot); if (slut && M[i].tot >= slut.tot) break; if (t1 - M[i].tot > 60) langa.push(`${M[i].text} ${(t1 - M[i].tot).toFixed(0)} s`); }
  ut.push([`frö ${FRO}: dag 1 når gripklon (${slut ? (slut.tot / 60).toFixed(1) + ' min' : 'nej'}) utan mål över 60 s (${langa.join(' · ') || 'inga'})`, !!slut && !langa.length]); }
ut.push([`frö ${FRO}: 0 sidfel (${sidfel.slice(0, 2).join(' · ') || 'inga'})`, !sidfel.length]);
fs.mkdirSync(new URL('./a113/stokbot/', import.meta.url), { recursive: true });
fs.writeFileSync(new URL(`./a113/stokbot/fro-${FRO}.md`, import.meta.url), `# Stökboten frö ${FRO}\n\n${ut.map(([t, o]) => `- ${o ? '✓' : '✗'} ${t}`).join('\n')}\n\n## Dagarna\n${r.dagar.map((d) => `- dag ${d.dag}: ${(d.sek / 60).toFixed(1)} min${d.ofardig ? ' (ofärdig)' : ''}`).join('\n')}\n\n## Stöket (${stok.length})\n${stok.map((x) => '- ' + x).join('\n')}\n`);
for (const [t, o] of ut) console.log(o ? '✓' : '✗', t);
await b.close(); process.exit(ut.every((x) => x[1]) ? 0 : 1);
