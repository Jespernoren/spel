// Soptippsvägen 1 – punkt AX: simulerar kapitel 1 (dag 1–5) med en bot och skriver en textlogg.
// Kör: node verktyg/sim-kapitel1.mjs <url> <ut.md> [körning-nr]
//   url: t.ex. http://127.0.0.1:8765/printa-hem.html (det byggda spelet)
// Loggen visar per dag: minuter, prints, kr, köp, bärförmåga, trivsel och ALL text (tid, källa, vem).
// Flaggor: FÖRE, OSYNLIG, OSYNLIG GÅVA, TYST NEJ (ED), SPAM (samma notis inom 2 min), TOM RUTA (inget mål i rutan efter 10 s), UPPREPNING (samma text inom 5 dagar), INAKTUELL (text visas fast villkoret inte gäller), SEN (reaktion > 10 s efter händelsen), BONUS DAG 1, KROCK (två texter inom 5 s), RÖST AVBRUTEN (ny röst innan den förra pratat klart),
// FÖR TIDIGT (texten nämner en sak som inte finns hos Ali än), TEMPO (dagen utanför 10–15 min, dag 1 10–12).
import fs from 'fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';

const [url = 'http://127.0.0.1:8765/printa-hem.html', ut = 'sim-kapitel1.md', nr = '1', tillDag = '6'] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
p.on("framenavigated", (f) => { if (f === p.mainFrame()) console.log("[sim] NAVIGERING", f.url()); }); p.on("console", (m) => { if (/warn|error/.test(m.type())) console.log("[sida]", m.type(), m.text().slice(0, 300)); });   /* en sida som laddas om mitt i körningen syns i loggen */
const sidfel = []; p.on('pageerror', (e) => sidfel.push(e.message));
let senastLiv = Date.now();
p.on('console', (m) => { const t = m.text(); if (t.startsWith('[sim]')) { senastLiv = Date.now(); console.log(t); } });
setInterval(() => { if (Date.now() - senastLiv > 6 * 60000) { console.log('[sim] HÄNGER: ingen handling på 6 min – avbryter (rapporten fram till senaste dagen ligger kvar)'); process.exit(3); } }, 30000);
// virtuell tid: aktiveras när boten startar
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
        if (g === 199 && !window.__vtSvalt) { window.__vtSvalt = 1; console.log('[sim] SVÄLT: 200 timers på en bildruta – ' + String(nasta.fn).replace(/\s+/g, ' ').slice(0, 200)); }   /* AX 88: en timer som lägger sig själv på 0 ms svälter boten */
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
}, process.env.SIM_FRAN ? fs.readFileSync(process.env.SIM_FRAN, 'utf8') : null);
await p.goto(url); await p.waitForTimeout(3500);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {}); await p.waitForTimeout(2000);
for (let i = 0; i < 30 && !(await p.evaluate(() => !!window.__printahem?.S).catch(() => false)); i++) await p.waitForTimeout(1000);
p.on('pageerror', (e) => console.log('[sidfel]', e.message));
await p.evaluate(([u, m]) => { window.__vt.start(); window.__simUtforlig = u; window.__simStegMax = m; }, [!!process.env.UTFORLIG, +(process.env.SIM_STEGMAX || 15)]);
await p.evaluate((k) => { window.__stegKanon = k; }, JSON.parse(fs.readFileSync(new URL('./steg-kanon.json', import.meta.url), 'utf8')));   // A-069 §5: boten matchar på steg-id
if (process.env.NYBORJARE) await p.evaluate(() => { window.__nyborjare = true; });
import { execFileSync as execFileSyncF } from 'child_process';
function skrivInspDag(dag, regi) {   /* A-085: Regissörens tidslinje + video för en dag */
  const fmt2 = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  if (dag > +(process.env.INSPELNING_TILL || 99)) return;
    const d = `${INSP}/dag-${dag}`; fs.mkdirSync(d, { recursive: true });
    const L = regi.filter((e) => e.dag === dag), t0 = Math.min(...L.map((e) => e.start));
    fs.writeFileSync(`${d}/tidslinje.json`, JSON.stringify(L.map((e) => ({ ...e, start: +((e.start - t0) / 1000).toFixed(1), slut: +((e.slut - t0) / 1000).toFixed(1) }))));
    let md = `# Dag ${dag} – Regissörens tidslinje\n\n*Allt som visades och sades, i ordning. Tid från dagens början (speltid). Bildrutor: video.mp4, skärmdumpar per målbyte: mal-NN-*.jpg.*\n\n| Start | Längd | Kanal | Prio | Vem | Text |\n|---|---|---|---|---|---|\n`;
    for (const e of L) md += `| ${fmt2((e.start - t0) / 1000)} | ${((e.slut - e.start) / 1000).toFixed(1)} s | ${e.kanal} | ${e.prio} | ${e.vem || ''} | ${String(e.text).replace(/\|/g, '/').slice(0, 140)} |\n`;
    fs.writeFileSync(`${d}/tidslinje.md`, md);
    try { if (fs.existsSync(`${d}/bildrutor`)) execFileSyncF('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', process.env.VIDEO_FPS || '8', '-pattern_type', 'glob', '-i', `${d}/bildrutor/*.jpg`, '-vf', 'scale=1280:-2', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '28', '-pix_fmt', 'yuv420p', `${d}/video.mp4`]); } catch (e) { console.log('ffmpeg:', e.message.slice(0, 200)); }
}
/* A-085: inspelning – bildrutor (video) och en skärmdump per målbyte, per dag i INSPELNING/dag-N/ */
const INSP = process.env.INSPELNING; let bildNr = 0; const malNr = {};
if (INSP) {
  fs.mkdirSync(INSP, { recursive: true });
  let inspDag = 0;
  await p.exposeFunction('__taBild', async (m) => {
    if (m.dag !== inspDag) { if (inspDag) try { skrivInspDag(inspDag, await p.evaluate(() => window.__regiLogg || [])); } catch (e) { console.log('[sim] tidslinjen dag ' + inspDag + ': ' + e.message.split('\n')[0]); } inspDag = m.dag; }   /* varje dag skrivs när den är slut – en krasch senare tar inte med sig den */
    if (m.dag > +(process.env.INSPELNING_TILL || 99)) return;
    const d = `${INSP}/dag-${m.dag}`; fs.mkdirSync(`${d}/bildrutor`, { recursive: true });
    let buf; try { buf = await p.screenshot({ type: 'jpeg', quality: 62, timeout: 20000 }); } catch (e) { console.log('[sim] bildruta hoppades över: ' + e.message.split('\n')[0]); return; }
    fs.writeFileSync(`${d}/bildrutor/${String(++bildNr).padStart(6, '0')}.jpg`, buf);
    fs.appendFileSync(`${d}/bildrutor.txt`, `${bildNr}\t${m.t}\n`);
    if (m.mal) { const n = (malNr[m.dag] = (malNr[m.dag] || 0) + 1); fs.writeFileSync(`${d}/mal-${String(n).padStart(2, '0')}-${m.t.toFixed(0).padStart(4, '0')}s.jpg`, buf); fs.appendFileSync(`${d}/mal.txt`, `${String(n).padStart(2, '0')}\t${Math.floor(m.t / 60)}:${String(Math.floor(m.t % 60)).padStart(2, '0')}\t${m.steg}\t${m.mal}\n`); }
  });
  await p.evaluate((n) => { window.__bildIntervall = n; }, +(process.env.BILD_INTERVALL || 2));
}   /* A-081: nybörjarboten */
await p.addScriptTag({ content: fs.readFileSync(new URL('./sim-bot.js', import.meta.url), 'utf8') });
// SIM_FRAN=fil: börja från en sparfil · varje ny dag sparas till /tmp/sim-dag<N>.json så att en lång körning kan tas om från en dag
let sparadDag = 0; const kollaDag = setInterval(async () => { try { const [d, sp, mem] = await p.evaluate(() => [window.__printahem.S.dag, localStorage.getItem('spar:printahem2:v1'), [Math.round((performance.memory?.usedJSHeapSize || 0) / 1e6), window.__printahem.skrapLista.length, window.__printahem.placerade.length, document.querySelectorAll('*').length]]); if (process.env.SIM_MINNE) console.log('[minne]', d, JSON.stringify(mem)); if (d !== sparadDag && sp) { sparadDag = d; fs.writeFileSync(`${process.env.SIM_SPAR || '/tmp/sim-dag'}${d}.json`, sp); } } catch {} }, 15000);
let delDagar = 0;   /* AX skriver rapporten efter varje speldag – en körning som hänger ger ändå en rapport fram till den dagen */
const delRapport = setInterval(async () => { try { const del = await Promise.race([p.evaluate(() => window.__simBot.del?.()), new Promise((_, n) => setTimeout(() => n(new Error('svarar inte')), 20000))]); if (del && del.dagar.length > delDagar) { delDagar = del.dagar.length; rapport(del); console.log(`[rapport] dag 1–${del.dagar[del.dagar.length - 1].dag} skriven till ${ut}`); } } catch (e) { console.log('[rapport] sidan svarar inte:', e.message); } }, 30000);
const r = await p.evaluate((d) => window.__simBot.kor(d, 30 * d), +tillDag); clearInterval(kollaDag); clearInterval(delRapport); senastLiv = Date.now() + 30 * 60000; console.log('[sim] körningen klar – skriver rapporten');   /* AX 95: rapporten efter sista dagen räknas inte som att boten hänger */
await b.close();

function rapport(r) {
  let md;
// ---------- rapport ----------
const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const synlig = (e) => ['sms-bubbla', 'notis', 'lapp', 'bubbla', 'meddelande', 'morgonkort'].includes(e.kalla);   // det som syns på skärmen (toasts är svar på ett klick och räknas inte)
const flaggor = [];
// BZ: SEKVENS – spelet loggar själv när något levereras som redan är köpt eller gjort
for (const e of r.logg.filter((x) => x.kalla === 'sekvens')) flaggor.push({ dag: e.dag, t: e.t, typ: 'SEKVENS', text: `${e.vem}: "${String(e.text).slice(0, 60)}" (${e.varfor || ''})` });
// CB: VARA – dagens vara ska ge minst lika mycket kr/s (med bonusen) som spelarens bästa recept
for (const e of r.logg.filter((x) => x.kalla === 'vara')) { const m = /([\d.]+) kr\/s med bonus · bästa ([\d.]+)/.exec(e.varfor || ''); if (m && +m[1] < +m[2]) flaggor.push({ dag: e.dag, t: e.t, typ: 'VARA', text: `${e.text}: ${e.varfor}` }); }
// CJ: kärrklick – minst 9 av 10 ska plocka något
{ const k = r.logg.filter((x) => x.kalla === 'karraKlick'); if (k.length) { const tr = k.filter((x) => x.text === 'träff').length; console.log(`kärran: ${tr}/${k.length} klick plockade något`); if (tr / k.length < 0.9) flaggor.push({ dag: 0, t: 0, typ: 'KÄRRA', text: `bara ${tr}/${k.length} klick träffade` }); } }
// CT: poolen tog slut (tystnad i stället för upprepning) – per figur
{ const t = {}; for (const e of r.logg.filter((x) => x.kalla === 'poolTom')) t[e.vem] = (t[e.vem] || 0) + 1; if (Object.keys(t).length) console.log('pool slut:', JSON.stringify(t)); }
// CR: webbshoppen – hur mycket den gav
{ const w = r.logg.filter((x) => x.kalla === 'webbBetalt'); if (w.length) console.log(`webbshop: ${w.reduce((a, x) => a + (+x.text || 0), 0)} kr på ${w.length} morgnar`); }
{ const a = r.logg.filter((x) => x.kalla === 'aliSalt' && x.dag >= 6).reduce((t, x) => t + (+x.text || 0), 0), w = r.logg.filter((x) => x.kalla === 'webbBetalt' && x.dag >= 6).reduce((t, x) => t + (+x.text || 0), 0); console.log(`dag 6–10: Ali ${a} kr · webbshop ${w} kr (+${a ? Math.round(w / a * 100) : 0} %)`); }
// BL: STEG – en sak från ett lägre steg köps efter ett högre. CG: SEKVENS ovan. CK: TIDIG – en målsak köps innan målet är aktivt. CI: FAST loggas av spelet.
for (const e of r.logg.filter((x) => ['steg', 'tidig', 'fast', 'scen', 'upprepning'].includes(x.kalla))) flaggor.push({ dag: e.dag, t: e.t, typ: e.kalla.toUpperCase(), text: `${e.text} (${e.varfor || ''})` });
// BV: lugn start – ingen text, röst eller sms de första 5 s efter BÖRJA DAGEN, och inget sms de första 30 s
for (const st of r.logg.filter((e) => e.kalla === 'händelse' && e.vem === 'morgonkortStangt')) {
  for (const e of r.logg) {
    if (e.dag !== st.dag || e.tot < st.tot || e.tot >= st.tot + 30) continue;
    const d = e.tot - st.tot;
    if (d < 5 && (synlig(e) || e.kalla === 'röst' || e.kalla === 'sms') && e.kalla !== 'morgonkort') flaggor.push({ dag: e.dag, t: e.t, typ: 'LUGN', text: `${d.toFixed(1)} s efter BÖRJA DAGEN: [${e.kalla}] "${String(e.text).slice(0, 60)}"` });
    else if (e.kalla === 'sms') flaggor.push({ dag: e.dag, t: e.t, typ: 'LUGN', text: `sms ${d.toFixed(1)} s efter BÖRJA DAGEN (minst 30 s): "${String(e.text).slice(0, 60)}"` });
  }
}
// krockar: två synliga texter inom 4 s (A-065: talutrymmet håller 4 s) (samma text i två kanaler räknas inte)
const syn = r.logg.filter(synlig);
/* A-065: en kvittens har förtur – den får komma 2 s efter det som syntes före (allt annat 4 s) */
const kvittoText = new Set(r.logg.filter((e) => e.kalla === 'kvitto-visas' || e.kalla === 'kvittens' || e.kalla === 'varför').map((e) => String(e.text).slice(0, 30)));
const arKv = (e) => kvittoText.has(String(e.text).replace(/^💭 /, '').slice(0, 30));
for (let i = 1; i < syn.length; i++) {
  const a = syn[i - 1], c = syn[i];
  if (c.dag === a.dag && c.tot - a.tot < (arKv(c) ? 2 : 4) && a.text !== c.text && !a.text.includes(c.text.slice(0, 30)) && !c.text.includes(a.text.slice(0, 30)) && !['bubbla'].includes(a.kalla + c.kalla) && c.kalla !== 'morgonkort') {   /* morgonkortet kommer efter sömnen – en egen scen */
    flaggor.push({ dag: c.dag, t: c.t, typ: 'KROCK', text: `${(c.tot - a.tot).toFixed(1)} s mellan [${a.kalla}] "${a.text.slice(0, 60)}" och [${c.kalla}] "${c.text.slice(0, 60)}"` });
  }
}
// röst avbruten
/* A-090 p.3: spelet loggar själv när en röst klipps (röst-avbruten) – med riktig klipplängd och talfart. Den gamla uppskattningen
   (0,062 s per tecken utan talfarten 1,3) larmade för repliker som talats klart. */
for (const e of r.logg.filter((x) => x.kalla === 'röst-avbruten')) flaggor.push({ dag: e.dag, t: e.t, typ: 'RÖST AVBRUTEN', text: `${e.vem}: ${e.text}` });
// punkt BE: kvittens → varför → nytt mål. Flagga om något saknas eller om målet läses upp mer än 2 s efter att kedjan pratat klart.
const rostLangd = (t) => Math.min(9, 0.6 + t.length * 0.062);
const rostFor = (text, efter) => r.logg.find((e) => e.kalla === 'röst' && e.tot >= efter - 0.5 && e.text.includes(text.slice(0, 40)));   /* en replik kan vara en del av en längre (Alis hälsning + gåvan) */
const kedjeRader = [];
for (const kv of r.logg.filter((e) => e.kalla === 'kvittens')) {
  const va = r.logg.find((e) => e.kalla === 'varför' && e.varfor === kv.varfor && e.tot >= kv.tot && e.tot - kv.tot < 30);
  let sista = va || kv, rs = rostFor(sista.text, sista.tot); if (!rs && va) { sista = kv; rs = rostFor(kv.text, kv.tot); }   /* varför-raden kan strykas (målet har en egen knuff) */
  const slut = rs ? rs.tot + rostLangd(sista.text) : null;
  const mal = r.logg.find((e) => ((e.kalla === 'röst' && /· MÅL$/.test(e.text)) || (e.kalla === 'sak' && e.vem === 'berattare')) && e.tot >= (rs?.tot ?? sista.tot));   /* A-065: ett mål utan uppläsning byts tyst i rutan */
  const gap = slut != null && mal ? mal.tot - slut : null;
  kedjeRader.push({ dag: kv.dag, t: kv.t, id: kv.varfor, kv: kv.text, va: va?.text || '', gap, mal: mal?.text.replace(/ · MÅL$/, '') || '' });
  if (!rs) flaggor.push({ dag: kv.dag, t: kv.t, typ: 'KEDJA', text: `${kv.varfor}: kvittensen lästes aldrig upp` });
  else if (!r.logg.some((e) => e.kalla === 'händelse' && e.vem === 'malKlart' && e.tot - kv.tot > -2 && e.tot - kv.tot < 1.5)) { /* kvittens mitt i ett mål – inget nytt mål väntas */ }
  else if (!mal || mal.tot - slut > 20) flaggor.push({ dag: kv.dag, t: kv.t, typ: 'KEDJA', text: `${kv.varfor}: inget nytt mål lästes upp efter kedjan` });
  else if (gap > 2 && r.logg.some((e) => (e.kalla === 'meddelande' || (e.kalla === 'lapp' && /^Dag \d/.test(e.text))) && e.tot >= slut - 0.5 && e.tot <= mal.tot)) { /* en dagbokssida (pausad scen) får stå mellan kedjan och målet */ }
  else if (gap > 2 && mal.tot - rs.tot <= 6.6) { /* A-090 p.5: målets tanke väntar 6 s efter förra tanken (kvittensen) */ }
  else if (gap > 2) flaggor.push({ dag: kv.dag, t: kv.t, typ: 'KEDJA', text: `${kv.varfor}: nytt mål ${gap.toFixed(1)} s efter kedjan (max 2 s)` });
}
for (const m of r.logg.filter((e) => e.kalla === 'MÅL')) {
  { const f = r.logg.find((e) => e.kalla === 'MÅL' && e.dag === m.dag); if (!f || m.tot - f.tot < 5) continue; }   /* dagens första mål har inget klart mål före sig */
  if (!r.logg.some((e) => ['kvittens', 'varför', 'kvittens-bock', 'lapp'].includes(e.kalla) && Math.abs(e.tot - m.tot) < 8)) flaggor.push({ dag: m.dag, t: m.t, typ: 'KEDJA', text: `mål utan kvittens: "${m.text.slice(0, 70)}"` });
}
// punkt 10: varje sms ska synas som bubbla
for (const sm of r.logg.filter((e) => e.kalla === 'sms')) {
  const bb = r.logg.find((e) => e.kalla === 'sms-bubbla' && e.text === sm.text && e.tot >= sm.tot);
  if (!bb) flaggor.push({ dag: sm.dag, t: sm.t, typ: 'SMS', text: `${sm.vem}: "${sm.text.slice(0, 50)}" syntes aldrig som bubbla` });
  else if (bb.tot - sm.tot > 15) flaggor.push({ dag: sm.dag, t: sm.t, typ: 'SMS', text: `${sm.vem}: bubblan kom ${(bb.tot - sm.tot).toFixed(0)} s efter sms:et` });
}
// EA: INAKTUELL – en text visas fast villkoret inte gäller längre (AX:s egna villkor, oberoende av spelets)
for (const e of r.logg.filter((x) => x.inaktuell)) flaggor.push({ dag: e.dag, t: e.t, typ: 'INAKTUELL', text: `[${e.kalla}] ${e.vem}: "${e.text.slice(0, 70)}" – ${e.inaktuell}` });
// EA: SEN – en reaktion visas mer än 10 s efter sin händelse (från att den köades, minus planerad väntan och tid i en meny)
{ const vant = new Map();
  const paketKlar = {}; let aktivPaket = null;
  for (const e of r.logg) {
    if (e.kalla === 'klar' && aktivPaket) { paketKlar[aktivPaket] = e.tot; aktivPaket = null; }
    if (e.kalla === 'sak') aktivPaket = /paket (\d+)/.exec(e.varfor)?.[1] || null;
    if (e.kalla === 'sak' && /^\(/.test(e.text)) { vant.delete(e.text); continue; }   // paketets tysta delar
    if (e.kalla === 'väntar' && !vant.has(e.text)) { const om = /om ([\d.]+) s/.exec(e.varfor); vant.set(e.text, e.tot + (om ? +om[1] : 0)); }
    if (e.kalla === 'sak' && /^REAKTION/.test(e.varfor) && vant.has(e.text)) {
      const meny = +(/meny ([\d.]+) s/.exec(e.varfor)?.[1] || 0), pk = /paket (\d+)/.exec(e.varfor)?.[1], v = e.tot - Math.max(vant.get(e.text), (pk && paketKlar[pk]) || 0) - meny; vant.delete(e.text);   // i ett paket: från att förra delen var klar
      if (v > 10.5) flaggor.push({ dag: e.dag, t: e.t, typ: 'SEN', text: `${v.toFixed(1)} s efter händelsen: ${e.vem}: "${e.text.slice(0, 70)}"` });
    } else if (e.kalla === 'sak' || e.kalla === 'struken') vant.delete(e.text);
  }
}
// EA: BONUS dag 1 – bonus (småprat) får inte förekomma dag 1
for (const e of r.logg.filter((x) => x.kalla === 'sak' && /^SMÅPRAT/.test(x.varfor) && x.dag <= 1)) flaggor.push({ dag: e.dag, t: e.t, typ: 'BONUS DAG 1', text: `${e.vem}: "${e.text.slice(0, 70)}"` });
// punkt 15: en sak i taget – pausen mellan saker, och hur länge varje nytt mål väntade efter att det förra blev klart
const inreSak = (e) => /^\((läget ändras|tips|lapp)/.test(e.text);   // EA: paketets tysta delar (läget ändras) räknas inte som texter
const saker = r.logg.filter((e) => (e.kalla === 'sak' || e.kalla === 'klar') && !inreSak(e));
for (let i = 1; i < saker.length; i++) {
  const a = saker[i - 1], c = saker[i];
  if (a.kalla === 'sak' && c.kalla === 'sak') flaggor.push({ dag: c.dag, t: c.t, typ: 'SAMTIDIGT', text: `"${a.text.slice(0, 40)}" och "${c.text.slice(0, 40)}"` });
  const forTur = /^MÅL/.test(String(c.varfor || '')) || r.logg.some((e) => e.kalla === 'kvitto-visas' && Math.abs(e.tot - c.tot) < 0.05);   /* A-065/A-072: kvittensen och nästa mål har förtur – kort paus räcker */
  if (a.kalla === 'klar' && c.kalla === 'sak' && c.tot - a.tot < (forTur ? 0.25 : 1.95) && c.dag === a.dag) flaggor.push({ dag: c.dag, t: c.t, typ: 'PAUS', text: `${(c.tot - a.tot).toFixed(1)} s paus före "${c.text.slice(0, 50)}"` });
}
// punkt BF: nytt mål synligt i målrutan inom 4 s (aldrig mer än 8 s) efter att förra målet blev klart
const malVantan = [];
for (const h of r.logg.filter((e) => e.kalla === 'händelse' && e.vem === 'malKlart')) {
  const m = r.logg.find((e) => e.kalla === 'målruta' && e.tot >= h.tot - 0.05);
  if (!m) continue;
  const v = m.tot - h.tot; malVantan.push({ dag: h.dag, t: h.t, v, text: m.text });
  // EC: TOM RUTA – inget mål i rutan mer än 10 s efter att förra målet blev klart (på morgonen räknat från BÖRJA DAGEN)
  const fore = [...r.logg].reverse().find((e) => e.kalla === 'målruta' && e.tot < h.tot - 0.05);   // räkna från första mål som klarades sedan rutan senast byttes
  if (fore && r.logg.some((e) => e.kalla === 'händelse' && e.vem === 'malKlart' && e.tot > fore.tot && e.tot < h.tot - 0.05)) continue;
  const mk = r.logg.find((e) => e.kalla === 'händelse' && e.vem === 'morgonkortStangt' && e.tot >= h.tot && e.tot <= m.tot);
  if (r.logg.some((e) => e.kalla === 'meddelande' && e.tot >= h.tot - 0.05 && e.tot <= m.tot)) continue;   /* EK 25: en pausad dagbokssida räknas inte */
  const v2 = m.tot - (mk ? mk.tot : h.tot);
  if (v2 > 10.5) flaggor.push({ dag: h.dag, t: h.t, typ: 'TOM RUTA', text: `${v2.toFixed(1)} s innan "${m.text.slice(0, 60)}" syntes` });
}
// EC: SPAM – samma notis (siffror bortsett) två gånger inom 2 min
{ const sen = new Map();
  for (const e of r.logg.filter((x) => x.kalla === 'sak' && String(x.vem).startsWith('notis:'))) {
    const k = e.text.replace(/[\d%]+/g, '#'), f = sen.get(k);
    if (f != null && e.tot - f < 120) flaggor.push({ dag: e.dag, t: e.t, typ: 'SPAM', text: `${(e.tot - f).toFixed(0)} s efter förra: "${e.text.slice(0, 70)}"` });
    sen.set(k, e.tot);
  }
}
// EC: UPPREPNING – samma figurtext (sms, småprat, tanke) visas igen inom 5 dagar
{ const sett = new Map();
  for (const e of r.logg.filter((x) => (x.kalla === 'sak' || x.kalla === 'bubbla') && x.vem && !['berattare', 'bud', ''].includes(x.vem) && !String(x.vem).startsWith('notis:') && !/^\(/.test(x.text) && !(String(x.vem).startsWith('värld:') && x.text.trim().split(/\s+/).length <= 3))) {   /* A-042: katten och sopbilens tut är ljud, inte repliker */
    const f = sett.get(e.text);
    if (f != null && e.dag - f < 5 && e.kalla === 'sak') flaggor.push({ dag: e.dag, t: e.t, typ: 'UPPREPNING', text: `${e.vem}: "${e.text.slice(0, 70)}" (förra gången dag ${f})` });
    if (e.kalla === 'sak') sett.set(e.text, e.dag);
  }
}
// EL 29: regelvaktens brott (spelet loggar dem som kalla 'brott', vem = flaggan)
for (const e of r.logg.filter((x) => x.kalla === 'brott' && !['UPPLÅST', 'RESERV'].includes(x.vem))) flaggor.push({ dag: e.dag, t: e.t, typ: e.vem, text: e.text });
// ED4/ED7/ED9/ED13: FÖRE, OSYNLIG, OSYNLIG GÅVA, TYST NEJ
for (const e of r.logg.filter((x) => x.kalla === 'före')) flaggor.push({ dag: e.dag, t: e.t, typ: 'FÖRE', text: e.text });
for (const e of r.logg.filter((x) => x.kalla === 'osynlig')) flaggor.push({ dag: e.dag, t: e.t, typ: 'OSYNLIG', text: `${e.vem}: "${e.text.slice(0, 60)}" – ${e.varfor}` });
for (const e of r.logg.filter((x) => x.kalla === 'osynlig gåva')) flaggor.push({ dag: e.dag, t: e.t, typ: 'OSYNLIG GÅVA', text: `${e.text} ${e.varfor}` });
{ const forklarat = new Set(), syns = ['notis', 'toast', 'sak', 'bubbla', 'butiksbubbla', 'kvittens', 'lapp', 'sms-bubbla'];
  for (const e of r.logg.filter((x) => x.kalla === 'nej')) {
    const har = r.logg.some((x) => syns.includes(x.kalla) && x.tot >= e.tot - 1 && x.tot <= e.tot + 0.6);
    if (har) { forklarat.add(e.text); continue; }
    if (!forklarat.has(e.text)) flaggor.push({ dag: e.dag, t: e.t, typ: 'TYST NEJ', text: `nej-ljud utan förklaring (${e.text.slice(0, 60) || 'inget i handen'})` });
  } }
// A-041: SKRATT per 10 min och TORRT (över 4 min speltid utan roligt ögonblick)
{ const sk = r.logg.filter((e) => e.kalla === 'skratt'); r.skratt = sk.length;
  for (const d of r.dagar) { const lista = sk.filter((e) => e.dag === d.dag).map((e) => e.t).sort((a, b) => a - b); let forra = 0;
    for (const t of [...lista, d.sek]) { if (t - forra > 240 && d.sek > 60) flaggor.push({ dag: d.dag, t: forra, typ: 'TORRT', text: `${Math.round(t - forra)} s utan roligt ögonblick` }); forra = t; } } }
// tempo
for (const d of r.dagar) {
  const min = d.sek / 60, [lo, hi] = d.dag === 1 ? [10, 12] : [10, 15];
  if (min < lo || min > hi) flaggor.push({ dag: d.dag, t: d.sek, typ: 'TEMPO', text: `dag ${d.dag} tog ${min.toFixed(1)} min (mål ${lo}–${hi})` });
}
const per = {};
for (const d of r.dagar) per[d.dag] = d;
md = `# Simulering kapitel 1 – körning ${nr}\n\n*Gjord ${new Date().toISOString().slice(0, 16).replace('T', ' ')} med \`verktyg/sim-kapitel1.mjs\` + \`verktyg/sim-bot.js\` (punkt AX). Boten går 4,5 m/s, läser ${15} tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*\n\n`;
md += `## Sammanfattning\n\n| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |\n|---|---|---|---|---|---|---|\n`;
for (const d of r.dagar) md += `| ${d.dag} | ${(d.sek / 60).toFixed(1)} | ${d.sek ? Math.round((d.vantan || 0) / d.sek * 100) : 0} %${d.sek && (d.vantan || 0) / d.sek > 0.2 ? ' ⚠️' : ''} | ${d.printat} | ${d.mynt} | ${d.bar} | ${d.trivsel} |\n`;
// EE: flaskhalskartan – sekunder (bara/inkomst: antal) per flaskhals och dag, och när kapacitetssakerna låstes upp
{ const K = ['bara', 'mala', 'trampa', 'strom', 'skrivare', 'inkomst'];
  md += `\n## Flaskhalskartan (EE)\n\n| Dag | ${K.join(' | ')} | Upplåst |\n|---|${K.map(() => '---').join('|')}|---|\n`;
  for (const d of r.dagar) md += `| ${d.dag} | ${K.map((k) => Math.round(d.flask?.[k] || 0)).join(' | ')} | ${r.logg.filter((e) => e.kalla === 'upplåst' && e.dag === d.dag).map((e) => `${e.text} (${e.vem}, ${fmt(e.t)}${/reserv/.test(e.varfor) ? ', reserv' : ''})`).join(', ')} |\n`;
  const kl = r.logg.filter((e) => e.kalla === 'brott' && ['TIDIG', 'FAST', 'RESERV'].includes(e.vem)); md += `\nTIDIG: ${kl.filter((e) => e.vem === 'TIDIG').length} · FAST: ${kl.filter((e) => e.vem === 'FAST').length} · upplåst av reserven (målet väntade 3 min): ${kl.filter((e) => e.vem === 'RESERV').length}\n`; }
md += `\n**SKRATT:** ${r.skratt || 0} roliga ögonblick på ${Math.round(r.dagar.reduce((a, d) => a + d.sek, 0) / 60)} min (${(10 * (r.skratt || 0) / Math.max(1, r.dagar.reduce((a, d) => a + d.sek, 0) / 60)).toFixed(1)} per 10 min, mål minst 5)\n`;
md += `\n**Köp:**\n\n` + r.kop.map((k) => `- dag ${k.dag} ${fmt(k.t)} – ${k.id} (${k.pris} kr)`).join('\n') + '\n';
md += `\n## Storykedjan (kvittens → varför → nytt mål)\n\n| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |\n|---|---|---|---|---|---|---|\n` + kedjeRader.map((k) => `| ${k.dag} | ${fmt(k.t)} | ${k.id} | ${k.kv.slice(0, 60)} | ${k.va.slice(0, 60)} | ${k.mal.slice(0, 60)} | ${k.gap == null ? '–' : k.gap.toFixed(1) + ' s'} |`).join('\n') + '\n';
md += `\n## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)\n\n` + (malVantan.length ? `Snitt ${(malVantan.reduce((x, m) => x + m.v, 0) / malVantan.length).toFixed(1)} s · max ${Math.max(...malVantan.map((m) => m.v)).toFixed(1)} s · över 4 s: ${malVantan.filter((m) => m.v > 4).length} · över 8 s: ${malVantan.filter((m) => m.v > 8).length} av ${malVantan.length}\n` : '-\n');
md += `\n## Flaggor (${flaggor.length})\n\n` + (flaggor.length ? flaggor.map((f) => `- **${f.typ}** dag ${f.dag} ${fmt(f.t)}: ${f.text}`).join('\n') : '- inga') + '\n';
md += `\nSidfel: ${sidfel.length ? sidfel.slice(0, 5).join(' · ') : 'inga'}\n`;
for (const dag of [...new Set(r.logg.map((e) => e.dag))]) {
  md += `\n## Dag ${dag}\n\n| Tid | Källa | Vem | Text |\n|---|---|---|---|\n`;
  for (const e of r.logg.filter((x) => x.dag === dag)) md += `| ${fmt(e.t)} | ${e.kalla} | ${e.vem} | ${e.text.replace(/\|/g, '/').slice(0, 300)} |\n`;
  md += `\n<details><summary>Botens handlingar dag ${dag}</summary>\n\n` + r.handlingar.filter((h) => h.dag === dag).map((h) => `- ${fmt(h.t)} ${h.text} (${h.mynt} kr)`).join('\n') + '\n\n</details>\n';
}
// mål för mål: när varje mål syntes och hur länge det tog (friktionskurvan jämför nybörjaren med AX)
const malTider = []; { const M = r.logg.filter((e) => e.kalla === 'MÅL'); M.forEach((e, i) => { const n = M[i + 1]; if (n && n.dag === e.dag) malTider.push({ dag: e.dag, mal: e.text, sek: n.t - e.t }); }); }
fs.writeFileSync(ut.replace(/\.md$/, '') + '.mal.json', JSON.stringify(malTider));
if (process.env.NYBORJARE) md = nyborjarRapport(r, malTider) + md;
fs.writeFileSync(ut, md);
  return flaggor;
}
/* A-081: Nybörjarbotens rapport – flaggorna från botens ögon + Regissörens logg (TRÄNGSEL, HANN INTE LÄSA, DOLT) + friktionskurvan */
function nyborjarAnalys(r) {
  const F = [...(r.nyFlaggor || [])], R = r.regi || [];
  const SYNS = ['info', 'notis', 'tanke-text', 'sms', 'dagbok', 'bubbla', 'kort', 'dagbok-notis'];
  const v = R.filter((e) => SYNS.includes(e.kanal)).sort((a, b) => a.start - b.start);
  const dagT0 = {}; for (const e of R) if (dagT0[e.dag] == null || e.start < dagT0[e.dag]) dagT0[e.dag] = e.start;
  const t = (e) => (e.start - (dagT0[e.dag] ?? e.start)) / 1000;
  for (let i = 1; i < v.length; i++) { const a = v[i - 1], b = v[i]; if (b.start - a.start < 2000 && a.text !== b.text && a.dag === b.dag) F.push({ dag: b.dag, t: t(b), typ: 'TRÄNGSEL', text: `${a.kanal} ”${a.text.slice(0, 40)}” och ${b.kanal} ”${b.text.slice(0, 40)}” inom ${((b.start - a.start) / 1000).toFixed(1)} s` }); }
  for (const e of v) { const beh = 1200 + 60 * e.text.length; if (e.slut - e.start < beh - 50) F.push({ dag: e.dag, t: t(e), typ: 'HANN INTE LÄSA', text: `${e.kanal} ”${e.text.slice(0, 50)}” stod ${((e.slut - e.start) / 1000).toFixed(1)} s, behöver ${(beh / 1000).toFixed(1)} s` }); }
  for (const e of R.filter((x) => x.dolt)) F.push({ dag: e.dag, t: t(e), typ: 'DOLT', text: `${e.vem || 'bubbla'}: ”${e.text.slice(0, 50)}” sades utom bild` });
  for (const e of r.logg.filter((x) => x.kalla === 'brott' && x.vem === 'OKÄNT ORD')) F.push({ dag: e.dag, t: e.t, typ: 'OKÄNT ORD', text: e.text });
  return F.sort((a, b) => a.dag - b.dag || a.t - b.t);
}
function nyborjarRapport(r, malTider) {
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  const F = nyborjarAnalys(r), typer = ['FÖRVIRRAD', 'FAST', 'TRÄNGSEL', 'HANN INTE LÄSA', 'DOLT', 'NY SAK UTAN FÖRKLARING', 'OKÄNT ORD'];
  let ref = []; try { if (process.env.AX_REF) ref = JSON.parse(fs.readFileSync(process.env.AX_REF, 'utf8')); } catch {}
  let md = `# Nybörjarboten – körning ${nr}\n\n*A-081: samma händer som AX, men boten vet bara det som syns (målrutan, pilen, det som sägs). Går 3 m/s, läser 60 ms per tecken, följer pilen, tittar runt när målet är otydligt och går fel ibland.*\n\n`;
  md += `| Dag | Minuter | ${typer.join(' | ')} |\n|---|---|${typer.map(() => '---').join('|')}|\n`;
  for (const d of r.dagar) md += `| ${d.dag} | ${(d.sek / 60).toFixed(1)} | ${typer.map((ty) => F.filter((f) => f.dag === d.dag && f.typ === ty).length).join(' | ')} |\n`;
  md += `\n## Flaggor (${F.length})\n\n` + (F.map((f) => `- **${f.typ}** dag ${f.dag} ${fmt(f.t)}: ${f.text}`).join('\n') || 'inga') + '\n';
  md += `\n## Friktionskurvan (sekunder per mål: nybörjaren mot AX)\n\n| Dag | Mål | Nybörjaren | AX | × |\n|---|---|---|---|---|\n`;
  for (const m of malTider) { const a = ref.find((x) => x.dag === m.dag && x.mal === m.mal); md += `| ${m.dag} | ${m.mal.replace(/\|/g, '/').slice(0, 60)} | ${Math.round(m.sek)} | ${a ? Math.round(a.sek) : '–'} | ${a && a.sek > 0 ? (m.sek / a.sek).toFixed(1) : '–'} |\n`; }
  fs.writeFileSync(ut.replace(/\.md$/, '') + '.ny.json', JSON.stringify(F));
  console.log('nybörjaren: ' + typer.map((ty) => `${ty} ${F.filter((f) => f.typ === ty).length}`).join(' · '));
  return md + '\n---\n\n';
}
const flaggor = rapport(r);
if (INSP) {   /* A-085: dagar som inte redan skrivits (sista dagen) */
  const dagar = [...new Set((r.regi || []).map((e) => e.dag))];
  for (const dag of dagar) if (!fs.existsSync(`${INSP}/dag-${dag}/tidslinje.md`)) skrivInspDag(dag, r.regi);
  console.log(`[sim] inspelningen: ${INSP} (${dagar.length} dagar)`);
}
console.log(`klart: ${r.dagar.length} dagar, ${r.logg.length} textrader, ${flaggor.length} flaggor, sidfel ${sidfel.length} → ${ut}`);
for (const d of r.dagar) console.log(`  dag ${d.dag}: ${(d.sek / 60).toFixed(1)} min, väntan ${d.sek ? Math.round((d.vantan || 0) / d.sek * 100) : 0} %, ${d.mynt} kr, trivsel ${d.trivsel}, bär ${d.bar}`);
console.log('sista handlingar:', r.handlingar.slice(-6).map((h) => h.text).join(' | '));
