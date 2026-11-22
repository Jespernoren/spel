// test-story (inkorg 58 §4 p.5, A-113): byggs ur story.js. Boten spelar dag 1; för varje steg kollas att målet, startrepliken och kvittot
// är de som står i masterfilen, i rätt ordning, och att SEKVENSFEL, REDAN GJORT, FEL PLATS I TEXT och GÅVA SOM KÖP är 0.
// Andra passet: lägena (kvarnen i handen, raden, ryggsäcken och kistan) och Alis butik direkt efter kvarnköpet (klick med musen).
// Kör: node verktyg/test-story.mjs [url]
import fs from 'fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
import { STORY_STEG } from '../spel/printa-hem/story.js';
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
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {}); await p.waitForTimeout(2000);
for (let i = 0; i < 30 && !(await p.evaluate(() => !!window.__printahem?.S).catch(() => false)); i++) await p.waitForTimeout(1000);
p.on('pageerror', (e) => console.log('[sidfel]', e.message));
const startRad = await p.evaluate(() => window.__printahem.S.hotbar.slice(0, 3).map((x) => x?.typ || 'hand'));   /* inkorg 20: verktygsraden från start */
let forstaHjalp = ''; for (let i = 0; i < 40 && !forstaHjalp; i++) { forstaHjalp = await p.evaluate(() => document.querySelector('.ph-kontroll')?.textContent || ''); if (!forstaHjalp) await p.waitForTimeout(250); }   /* inkorg 20: första uppmaningen, innan boten gör något */
await p.evaluate(([u, m, c]) => { window.__vt.start(); window.__simUtforlig = u; window.__simStegMax = m; window.__simCykelForst = c[0]; window.__simStromDirekt = c[1]; }, [!!process.env.UTFORLIG, +(process.env.SIM_STEGMAX || 15), [!!process.env.CYKEL_FORST, !!process.env.STROM_DIREKT]]);   /* A-073: STROM_DIREKT=1 tar generatorn direkt i stället för att vänta på hjälpen */   /* A-071: CYKEL_FORST=1 ställer cykeln före generatorn */
await p.addScriptTag({ content: fs.readFileSync(new URL('./sim-bot.js', import.meta.url), 'utf8') });
const r = await p.evaluate(() => window.__simBot.kor(4, 90));   /* inkorg 63: dag 1–3 */
const L = r.logg.filter((e) => e.dag === 1), L3 = r.logg.filter((e) => e.dag <= 3), ut = []; fs.writeFileSync('/tmp/story-logg.json', JSON.stringify(L)); fs.writeFileSync('/tmp/story-logg3.json', JSON.stringify(L3));
const steg1 = STORY_STEG.filter((x) => x.dag === 1);
// 1. målen i rätt ordning, med texten ur story.js
const rutor = L.filter((e) => e.kalla === 'målruta').map((e) => e.text);
let pos = -1; const fattas = [];
const lit = (s) => typeof s.mal === 'string' ? [s.mal] : (String(s.mal).match(/'([^']{4,})'/g) || []).map((x) => x.slice(1, -1));
const traff = (s, t) => lit(s).some((m) => t === m || t.startsWith(m)) || (lit(s).some((m) => /^Spara/.test(m)) && /^(Plocka skräp och mal det|Printa och sälj)/.test(t));   // utan pengar visar rutan flaskhalsens fyllnad (inkorg 47)
for (const s of steg1) { if (s.id === 'skylt') continue; const i = rutor.findIndex((t, j) => j > pos && traff(s, t)); if (i < 0) fattas.push(s.id); else pos = i; }
console.log('  målrutan:', rutor.join(' → '));
ut.push([`målen dag 1 i story.js-ordning (${steg1.length - 1} steg efter skylten)${fattas.length ? ' – saknas eller fel ordning: ' + fattas.join(', ') : ''}`, !fattas.length]);
// 2. startrepliken sägs när steget börjar, högst en gång
const sagt = L.filter((e) => ['sak', 'sak-del', 'röst', 'notis'].includes(e.kalla)).map((e) => String(e.text || ''));
const startar = steg1.filter((s) => typeof s.start === 'string');
const struken = (s) => L.some((e) => e.kalla === 'struken' && String(e.text).includes(s.start));   // boten hann före – repliken ströks (steget redan klart)
const lagT = (s) => Object.values(s.lagen || {}).map((v) => v.tanke);   // låg saken redan i ett läge sägs lägets tanke i stället
const orsakText = (s) => { const id = String(s.startSvarPa || '').replace(/^dialog:/, ''); const d = STORY_STEG.flatMap((x) => x.dialog || []).find((x) => x.id === id); return typeof d?.text === 'string' ? d.text : null; };
const orsakSedd = (s) => !s.startSvarPa || L.some((e) => String(e.text || '').includes(orsakText(s) || '§'));   // inkorg 61: starten svarar på något – kom det aldrig medan steget pågick ska den inte sägas
const ejSagd = startar.filter((s) => orsakSedd(s) && ![s.start, ...lagT(s)].some((x) => sagt.some((t) => t.includes(x)) || struken({ start: x })));
const tva = startar.filter((s) => L.filter((e) => e.kalla === 'röst' && String(e.text).includes(s.start)).length > 1);
ut.push([`startrepliken sägs (${startar.length - ejSagd.length}/${startar.length})${ejSagd.length ? ' – inte: ' + ejSagd.map((s) => s.id).join(', ') : ''}, ingen två gånger${tva.length ? ' – två: ' + tva.map((s) => s.id).join(', ') : ''}`, !ejSagd.length && !tva.length]);
// 3. kvittot sägs efter att steget blivit klart
const kv = steg1.filter((s) => typeof s.kvitto === 'string');
const kvFel = kv.filter((s) => { const h = L.find((e) => e.kalla === 'händelse' && e.vem === 'malKlart' && e.text.includes('id=' + s.id + ' ')) || L.find((e) => e.kalla === 'händelse' && e.vem === 'malKlart' && e.text.endsWith('id=' + s.id)); const k = L.find((e) => e.kalla === 'kvittens' && e.text === s.kvitto); return !k || (h && k.tot > h.tot + 4); });
ut.push([`kvittot efter steget (${kv.length - kvFel.length}/${kv.length})${kvFel.length ? ' – saknas: ' + kvFel.map((s) => s.id).join(', ') : ''}`, !kvFel.length]);
// inkorg 59: din egen röst före berättaren – skyltens startreplik först, ingen uppläsning av målet efter
{ const roster = L.filter((e) => e.kalla === 'röst'); const forst = roster.findIndex((e) => String(e.text).includes('Först borde jag spika upp en skylt')); const ber = roster.findIndex((e) => /^Spika upp din adresskylt/.test(String(e.text)));
  ut.push([`inkorg 59: "Först borde jag spika upp en skylt…" sägs (${forst >= 0}), berättaren läser inte "Spika upp din adresskylt." (${ber < 0 ? 'ingen' : 'röst nr ' + ber})`, forst >= 0 && ber < 0]); }
/* inkorg 63 p.3: varje steg dag 1–3 börjar med din röst och säger nästa handling (startrepliken i något av sakens lägen, eller lägets tanke) */
{ const G0 = new Proxy({}, { get: (t, k) => k === 'rolfVara' || k === 'rolfNamn' ? () => '' : () => 0 }), LAGESTEST = [{ stat: {}, rolf: {}, saljLagt: {} }, { stat: {}, rolf: {}, saljLagt: {}, cykelBuren: true }, { stat: {}, rolf: {}, saljLagt: {}, cykelStar: true }, { stat: {}, rolf: {}, saljLagt: {}, mynt: 1e6 }];
  const duRost = L3.filter((e) => e.kalla === 'röst' && /^du$/.test(e.vem || '')).map((e) => String(e.text || ''));
  const rostAlla = L3.filter((e) => ['röst', 'sak', 'struken'].includes(e.kalla)).map((e) => String(e.text || ''));
  const varianter = (s) => { const v = new Set(); for (const S0 of LAGESTEST) { try { const t = typeof s.start === 'function' ? s.start(S0, G0) : s.start; if (t) v.add(String(t)); } catch {} } lagT(s).forEach((t) => t && v.add(t)); return [...v]; };
  const kor = (s) => L3.some((e) => e.kalla === 'händelse' && e.vem === 'malKlart' && (String(e.text).includes('id=' + s.id + ' ') || String(e.text).endsWith('id=' + s.id)));
  const klarT = (id) => L3.find((e) => e.kalla === 'händelse' && e.vem === 'malKlart' && (String(e.text).includes('id=' + id + ' ') || String(e.text).endsWith('id=' + id)))?.tot;
  const startT = (id) => L3.find((e) => e.kalla === 'händelse' && e.vem === 'malKlart' && new RegExp('nasta=' + id + '(\\s|$)').test(String(e.text)))?.tot;
  const direktKlar = (x) => { const a = startT(x.id), b = klarT(x.id); return a != null && b != null && b - a < 2; };   /* steget klarades i samma stund som det började (gården redan städad) – inget att säga */
  const stegen = STORY_STEG.filter((x) => x.dag <= 3 && !x.sov && x.handling !== 'sov' && kor(x) && orsakSedd(x) && !direktKlar(x));
  const tyst = stegen.filter((s) => { const v = varianter(s).map((t) => t.replace(/\$\{[^}]*\}/g, '').slice(0, 24)); return !v.some((x) => x && duRost.some((t) => t.includes(x))) && !v.some((x) => x && L3.some((e) => e.kalla === 'struken' && String(e.text).includes(x))); });
  ut.push([`inkorg 63 p.3: varje steg dag 1–3 som spelades börjar med din röst (${stegen.length - tyst.length}/${stegen.length})${tyst.length ? ' – tyst: ' + tyst.map((s) => s.dag + ':' + s.id).join(', ') : ''}`, !tyst.length]);
  const gen = L3.filter((e) => e.kalla === 'röst' && /koppla på generatorn/.test(String(e.text || '')));
  ut.push([`inkorg 63 p.3: när cykeln står sägs "Nu borde jag koppla på generatorn…" med din röst (${gen.length} gånger)`, gen.length >= 1]);
  const uttag = r.logg.find((e) => e.kalla === 'händelse' && e.vem === 'tagitUrPrint' && /sak=nyckelring/.test(e.text)), foto = r.logg.find((e) => e.kalla === 'foto' && /nyckelring/i.test(String(e.text || '') + String(e.varfor || '')));
  const dt = uttag && foto ? foto.tot - uttag.tot : null;
  ut.push([`inkorg 63 p.5: fotot av första nyckelringen ${dt == null ? 'saknas' : dt.toFixed(2) + ' s'} efter att den tagits ut (högst 0,5 s)`, dt != null && dt <= 0.5]);
  const klarNotis = L3.filter((e) => ['notis', 'toast', 'sak'].includes(e.kalla) && /är klar – ta ut|st klara på skrivaren/.test(String(e.text || '')));
  ut.push([`inkorg 63 p.4: en klar print ger bara den gröna skylten – 0 notiser om klar print (${klarNotis.length}${klarNotis.length ? ': ' + klarNotis[0].text.slice(0, 40) : ''})`, !klarNotis.length]); }
const FLAGGOR = ['SEKVENSFEL', 'REDAN GJORT', 'FEL PLATS I TEXT', 'GÅVA SOM KÖP', 'PIL PÅ GJORD SAK', 'BERÄTTAREN FÖRE DIG', 'RÖST AVBRUTEN', 'TYST UPPMANING'];
const br = L.filter((e) => e.kalla === 'brott' && FLAGGOR.includes(e.vem));
ut.push([`0 ${FLAGGOR.join(', 0 ')} dag 1 (${br.map((e) => e.vem + ': ' + e.text).join(' · ') || 'inga'})`, !br.length]);
ut.push([`dag 1 spelad till sömnen (${L.filter((e) => e.kalla === 'händelse' && e.vem === 'malKlart').length} mål)`, r.dagar.length >= 1]);
await b.close();

// ---- andra passet: lägena och butiken ----
const b2 = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const q = await b2.newPage({ viewport: { width: 1280, height: 720 } }); const fel2 = []; q.on('pageerror', (e) => fel2.push(e.message));
const spar = fs.readFileSync(new URL('./sparfiler/start-dag2.json', import.meta.url), 'utf8');
await q.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); const s = JSON.parse(spar); Object.assign(s, { dag: 1, sang: false, kvarnKopt: false, kvarnStar: false, kopta: {}, steg: 0 }); localStorage.setItem('spar:printahem2:v1', JSON.stringify(s)); } }, spar);
await q.goto(url.replace('ax.html', 'ax2.html')); await q.waitForTimeout(4000);
await q.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => q.evaluate(() => window.__startaSpel())).catch(() => {});
await q.waitForTimeout(2500); for (let i = 0; i < 6; i++) { await q.keyboard.press('Enter'); await q.waitForTimeout(250); }
// till steget "Köp kvarnen" med pengar till den
await q.evaluate(() => { const P = window.__printahem, S = P.S, i = P.STEGLISTA().findIndex((x) => x.id === 'aliKvarn'); S.steg = i; S.rullSlut = true; S.mynt = 200; S.kvarnKopt = false; S.kvarnStar = false; for (const a of [S.hotbar, S.ryggsack, S.kistan]) a.forEach((x, j) => { if (x?.typ === 'byggsats:gammalkvarn') a[j] = null; }); P.oppnaMarknad(); });
await q.waitForTimeout(1200);
const knapp = await q.$('[data-kopnu*="gammalkvarn"]');
if (knapp) { await knapp.click(); await q.waitForTimeout(1500); }
fs.mkdirSync(new URL('./a113/', import.meta.url), { recursive: true });
await q.screenshot({ path: new URL('./a113/ali-efter-kvarnkop.png', import.meta.url).pathname });
const butik = await q.evaluate(() => { const P = window.__printahem; return { kopt: !!P.S.kvarnKopt, gava: [...document.querySelectorAll('.ph-gava')].map((e) => e.textContent).join(' | '), kontroll: [...document.querySelectorAll('.ph-kontroll')].filter((e) => e.getClientRects().length && !e.hidden).map((e) => e.textContent).join(' | '),
  salj: [...document.querySelectorAll('.dc-s2 .dc-k2-namn')].map((e) => e.textContent).join(' | '), ej: document.querySelectorAll('[data-dcej]').length, bild: (() => { const st = P.STEGLISTA()[P.S.steg]; try { return typeof st.bild === 'function' ? st.bild() : st.bild; } catch { return ''; } })(), steg: P.stegId?.() }; });
ut.push([`butiken efter kvarnköpet (knappen klickad: ${!!knapp}): kortet "${butik.gava}", ingen Veva ("${butik.kontroll || '–'}"), bilden ${butik.bild} (steg ${butik.steg}), säljlistan "${butik.salj}" utan sådant Ali inte köper (${butik.ej})`,
  butik.kopt && /Du köpte/.test(butik.gava) && !/Ali ger dig/.test(butik.gava) && !/Veva/.test(butik.kontroll) && /gammalkvarn/.test(butik.bild) && !/Hammare|Kvarn/i.test(butik.salj) && !butik.ej]);
await q.evaluate(() => window.__printahem.ui.stangButik());
// lägena för kvarnen: raden, ryggsäcken, kistan, handen – lägets tanke, aldrig "Veva" innan den står
const LAG = STORY_STEG.find((x) => x.id === 'kvarn').lagen;
for (const l of ['ryggan', 'kistan', 'raden', 'handen']) {
  const res = await q.evaluate((l) => { const P = window.__printahem, S = P.S, t = 'byggsats:gammalkvarn'; for (const a of [S.hotbar, S.ryggsack, S.kistan]) a.forEach((x, j) => { if (x?.typ === t) a[j] = null; });
    const fri = (a, fr = 0) => { const i = a.findIndex((x, j) => j >= fr && !x); return i < 0 ? fr : i; };
    if (l === 'ryggan') S.ryggsack[fri(S.ryggsack)] = { typ: t, n: 1 }; if (l === 'kistan') S.kistan[fri(S.kistan)] = { typ: t, n: 1 };
    if (l === 'raden' || l === 'handen') { const i = fri(S.hotbar, 1); S.hotbar[i] = { typ: t, n: 1 }; P.byt(l === 'handen' ? i : 0); } P.ritaStart?.(); return P.storyLage(t); }, l);
  await q.waitForTimeout(l === 'ryggan' || l === 'kistan' ? 3500 : 2500);
  const syns = await q.evaluate(() => ({ logg: window.__printahem.textLogg().slice(-40).map((e) => e.text || '').join(' ¦ '), kontroll: [...document.querySelectorAll('.ph-kontroll')].filter((e) => e.getClientRects().length && !e.hidden).map((e) => e.textContent).join(' | ') }));
  const ok = (LAG[l] ? syns.logg.includes(LAG[l].tanke) || l === 'ryggan' || l === 'kistan' : true) && !/Veva/.test(syns.kontroll);
  ut.push([`kvarnen i läget ${l} (spelet säger ${res}): ${LAG[l] ? `"${LAG[l].tanke}"` : '–'}${l === 'ryggan' || l === 'kistan' ? ' (eller flyttas fram till raden, OFORLORBAR)' : ''}, ingen Veva-hjälp ("${syns.kontroll || '–'}")`, ok]);
}
const br2 = await q.evaluate((F) => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && F.includes(e.vem)).map((e) => e.vem + ': ' + e.text), FLAGGOR);
ut.push([`andra passet: 0 ${FLAGGOR.join(', 0 ')} (${br2.join(' · ') || 'inga'})`, !br2.length]);
ut.push([`0 sidfel (${[...sidfel, ...fel2].slice(0, 3).join(' · ') || 'inga'})`, !sidfel.length && !fel2.length]);
await b2.close();
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
process.exit(ut.every((x) => x[1]) ? 0 : 1);
