// A-063: spelar dag 1 som en spelare (AX-boten) och kollar ordningen mot storykedjan (claude/soptippsvagen-storykedja.md, kapitel 1 dag 1):
// prompt → handling → kvittens → nästa mål. Högst 4 s från händelse till nästa mål. Skärmdump i varje steg (verktyg/a063-steg-NN.png).
// Kör: node verktyg/test-dag1-ordning.mjs [url]
import fs from 'fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
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
await p.click('.br-starta').catch(() => {}); await p.waitForTimeout(2000);
for (let i = 0; i < 30 && !(await p.evaluate(() => !!window.__printahem?.S).catch(() => false)); i++) await p.waitForTimeout(1000);
p.on('pageerror', (e) => console.log('[sidfel]', e.message));
await p.evaluate(([u, m, c]) => { window.__vt.start(); window.__simUtforlig = u; window.__simStegMax = m; window.__simCykelForst = c; }, [!!process.env.UTFORLIG, +(process.env.SIM_STEGMAX || 15), !!process.env.CYKEL_FORST]);   /* A-071: CYKEL_FORST=1 ställer cykeln före generatorn */
await p.addScriptTag({ content: fs.readFileSync(new URL('./sim-bot.js', import.meta.url), 'utf8') });
// skärmdump varje gång målet byts (eller en sida visas) – i verklig tid medan boten kör
let n = 0, forra = '';
const dumpa = setInterval(async () => { try {
  const k = await p.evaluate(() => { const P = window.__printahem; return P.S.dag > 1 ? 'slut' : P.S.steg + '|' + (P.medEl2.hidden ? '' : 'sida'); });
  if (k === 'slut') return; if (k !== forra) { forra = k; n++; await p.screenshot({ path: `verktyg/a063-steg-${String(n).padStart(2, '0')}.png` }); }
} catch {} }, 700);
const r = await p.evaluate(() => window.__simBot.kor(2, 30)); clearInterval(dumpa);
const L = r.logg.filter((e) => e.dag === 1), ut = []; fs.writeFileSync('/tmp/a063-logg.json', JSON.stringify(L));
const mal = L.filter((e) => e.kalla === 'händelse' && e.vem === 'malKlart');
const rader = [];
for (const h of mal) {
  const m = L.find((e) => e.kalla === 'målruta' && e.tot >= h.tot - 0.05);
  const sida = L.find((e) => e.kalla === 'meddelande' && e.tot >= h.tot - 0.05 && (!m || e.tot <= m.tot + 0.05));
  const sidaSt = sida ? (L.find((e) => e.kalla === 'händelse' && e.vem === 'medStangd' && e.tot >= sida.tot) || null) : null;
  /* en replik som redan pratade när det hände får prata klart (+ 2 s paus), som i regelvakten */
  const akt = [...L].reverse().find((e) => e.kalla === 'sak' && e.tot < h.tot); const aktSlut = akt && L.find((e) => e.kalla === 'klar' && e.text === akt.text && e.tot >= akt.tot);
  const grans = Math.max(h.tot, aktSlut && aktSlut.tot > h.tot ? aktSlut.tot + 2 : 0) + 4;
  const kv = L.find((e) => ['sak', 'sak-del', 'toast', 'meddelande', 'notis', 'butiksbubbla', 'aliSalt', 'sms', 'varför', 'kvittens', 'duns', 'bubbla', 'ljud'].includes(e.kalla) && e.tot >= h.tot - 2 && e.tot <= grans && !/^\(/.test(e.text) && e.vem !== 'berattare');
  const v = m ? m.tot - h.tot - +((String(m.varfor || '').match(/meny ([\d.]+) s/) || [])[1] || 0) : null;   // tid i butiken och på pausade sidor räknas inte
  rader.push({ t: h.tot, id: (h.text.match(/id=(\S+)/) || [])[1] || h.text, kv: kv ? `${kv.vem}: ${kv.text}` : '', mal: m?.text || '', v, sida: !!sida });
}
const brott = L.filter((e) => e.kalla === 'brott' && ['SEN KVITTENS', 'SPÖKE', 'FEL BYGGEFFEKT', 'NÄSTA UTAN KONTUR', 'GENERISK MARKERING', 'FAST I HANDEN'].includes(e.vem));
const skylt = L.find((e) => (e.kalla === 'händelse' && e.vem === 'skyltKlar') || (e.kalla === 'varför' && e.varfor === 'skylt')), sidaSkylt = skylt && L.find((e) => e.kalla === 'meddelande' && e.tot >= skylt.tot && /MITT/.test(e.text));
const promptSkylt = L.find((e) => ['sak', 'sak-del'].includes(e.kalla) && /Men först en skylt/.test(e.text));
const duns = L.filter((e) => e.kalla === 'duns'), print = L.filter((e) => e.kalla === 'brott' && e.vem === 'FEL BYGGEFFEKT');
console.log('| tid | mål klart | kvittens | nästa mål | s |'); for (const x of rader) console.log(`| ${x.t.toFixed(1)} | ${x.id} | ${x.kv.slice(0, 50)} | ${x.mal.slice(0, 50)} | ${x.v == null ? '–' : x.v.toFixed(1)}${x.sida ? ' (sida)' : ''} |`);
ut.push([`dag 1 spelad: ${mal.length} mål klara`, mal.length >= 10 && r.dagar.length >= 1]);
ut.push([`prompten före skylten: "${promptSkylt?.text || '–'}"`, !!promptSkylt && (!skylt || promptSkylt.tot < skylt.tot)]);
ut.push([`dagbokssidan om skylten ${sidaSkylt ? (sidaSkylt.tot - skylt.tot).toFixed(1) + ' s' : 'saknas'} efter skyltKlar (högst 2 s)`, !!sidaSkylt && sidaSkylt.tot - skylt.tot <= 2]);
{ const sena = rader.filter((x) => x.v != null && x.v > 4 && !x.sida); ut.push([`nästa mål inom 4 s efter varje händelse (sidor som pausar undantagna): ${sena.map((x) => `${x.id} ${x.v.toFixed(1)} s`).join(', ') || 'alla'}`, !sena.length]); }
{ const utan = rader.filter((x) => !x.kv); ut.push([`varje mål har en kvittens inom 4 s: ${utan.map((x) => x.id).join(', ') || 'alla'}`, !utan.length]); }
ut.push([`storebrors skrivare och kvarnen ställs ner med en duns (${duns.length} dunsar)`, duns.length >= 2]);
{ const pl = L.filter((e) => e.kalla === 'händelse' && e.vem === 'placerat' && /sak=(cykel|generator)$/.test(e.text)).map((e) => e.text.replace('sak=', '')), omb = L.find((e) => e.kalla === 'händelse' && e.vem === 'ombyggd');
  ut.push([`A-071: ${pl.join(' → ')} → monterad (${process.env.CYKEL_FORST ? 'cykeln först' : 'generatorn först'})`, pl.length === 2 && pl[0] === (process.env.CYKEL_FORST ? 'cykel' : 'generator') && !!omb && omb.tot >= Math.max(...L.filter((e) => e.kalla === 'händelse' && e.vem === 'placerat' && /sak=(cykel|generator)$/.test(e.text)).map((e) => e.tot))]); }
ut.push([`0 SEN KVITTENS, 0 SPÖKE, 0 FEL BYGGEFFEKT, 0 NÄSTA UTAN KONTUR, 0 GENERISK MARKERING, 0 FAST I HANDEN: ${brott.map((e) => `${e.vem} ${e.text}`).join(' · ') || 'inga'}`, !brott.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(`${n} skärmdumpar (verktyg/a063-steg-NN.png)`); console.log(sidfel.length ? 'sidfel: ' + sidfel.slice(0, 3).join(' · ') : 'inga sidfel');
await b.close(); process.exit(ut.every((x) => x[1]) && !sidfel.length ? 0 : 1);
