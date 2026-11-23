// story-koll (inkorg 58 §4 p.1, A-113): kollar masterfilen spel/printa-hem/story.js utan att spela.
// Stoppar committen om ordningen inte går ihop. Kör: node verktyg/story-koll.mjs
import fs from 'node:fs';
import { STORY, STORY_STEG, FRAN_START, HANDLINGAR, LAGEN, KOP_NAMN, PLATS_FOR } from '../spel/printa-hem/story.js';

const fel = [];
const PIL_NAMN = ['bengtLada', 'bradhog', 'vagCykel', 'startYta', 'skrivare', 'cykel', 'ali', 'vevYta', 'skjul', 'gard', 'postlada', 'tippen', 'kvarn', 'bord'];   // samma namn som PIL_MAL i spel.js
const givet = new Set(FRAN_START), sett = new Set(), dialogFore = new Set(), dialogId = new Set(), vetFore = new Set();
STORY_STEG.forEach((p, i) => {
  const vid = `steg ${i} (${p.id || '?'})`;
  if (!p.id) fel.push(`${vid}: saknar id`);
  if (sett.has(p.id)) fel.push(`${vid}: id finns två gånger`); sett.add(p.id);
  if (!p.mal) fel.push(`${vid}: saknar mal`);
  if (typeof p.klar !== 'function') fel.push(`${vid}: saknar klar()`);
  if (p.pil && !PIL_NAMN.includes(p.pil)) fel.push(`${vid}: pilen "${p.pil}" finns inte i världen`);
  if (!p.pil) fel.push(`${vid}: saknar pil`);
  if (p.handling && !HANDLINGAR.includes(p.handling)) fel.push(`${vid}: okänd handling "${p.handling}"`);
  { /* 58 omgång 3: ett mål som säljer (Sälj …, lägg … i säljlådan/leveranslådan) har handling salj – annars håller stegBehover kvar saken och den går inte att sälja (boten fastnade dag 7) */
    let m = ''; try { m = typeof p.mal === 'function' ? String(p.mal({ saljLagt: {}, stat: {} }, new Proxy({}, { get: () => () => '' }))) : String(p.mal || ''); } catch { m = String(p.mal || ''); }
    if ((/^Sälj /.test(m) || /i (sälj|leverans)lådan/.test(m)) && p.handling && p.handling !== 'salj') fel.push(`${vid}: målet säljer ("${m.slice(0, 40)}") men handling är "${p.handling}" – saken blir osäljbar medan steget pågår`);
  }
  for (const l of Object.keys(p.lagen || {})) if (!LAGEN.includes(l)) fel.push(`${vid}: okänt läge "${l}"`);
  for (const k of p.kraver || []) if (!givet.has(k)) fel.push(`${vid}: kräver "${k}" men inget tidigare steg ger det`);
  // bilden får inte vara en sak som ett tidigare, klart steg gällde (PIL PÅ GJORD SAK, i filen)
  if (typeof p.bild === 'string' && p.bild !== p.sak) {
    const fore = STORY_STEG.slice(0, i).find((x) => x.sak === p.bild);
    const igen = STORY_STEG.slice(i).some((x) => x.sak === p.bild);
    if (fore && !igen) fel.push(`${vid}: bilden ${p.bild} hör till det klara steget ${fore.id}`);
  }
  for (const g of p.ger || []) givet.add(g);
  // inkorg 61 (A-116): dialogen – varje replik svarar på något som redan har hänt, och förutsätter bara det spelaren redan vet
  const koll = (vad, svarPa, vet, fore) => {
    if (svarPa && svarPa.startsWith('dialog:') && !dialogFore.has(svarPa.slice(7))) fel.push(`${vid}: ${vad} svarar på ${svarPa}, som inte har sagts före (SVAR FÖRE ORSAK)`);
    if (svarPa && /^(steg|malKlart):/.test(svarPa) && !sett.has(svarPa.split(':')[1])) fel.push(`${vid}: ${vad} svarar på ${svarPa}, som kommer senare (SVAR FÖRE ORSAK)`);
    for (const f of vet || []) if (!vetFore.has(f)) fel.push(`${vid}: ${vad} förutsätter att spelaren vet "${f}", men ingen replik före ger det`);
    for (const f of fore || []) if (vetFore.has(f)) fel.push(`${vid}: ${vad} kan bara sägas innan spelaren vet "${f}", men det vet spelaren redan (GLÖMT VAD MAN VET)`);
  };
  for (const d of p.dialog || []) {
    if (!d.id) fel.push(`${vid}: en replik saknar id`);
    if (dialogId.has(d.id)) fel.push(`${vid}: replik-id ${d.id} finns två gånger`); dialogId.add(d.id);
    if (!['butik', 'sms', 'tanke', 'rop'].includes(d.kanal)) fel.push(`${vid}: ${d.id} har okänd kanal "${d.kanal}"`);
    if (!d.svarPa && !d.stamning) fel.push(`${vid}: ${d.id} svarar inte på något (SVARAR INTE PÅ NÅGOT)`);
    if (d.kanal !== 'sms' && typeof d.text === 'string' && /^Ali här\b/.test(d.text)) fel.push(`${vid}: ${d.id} säger "Ali här." ansikte mot ansikte (SMS-FORM)`);
    koll(d.id, d.svarPa, d.vet, d.fore);
    dialogFore.add(d.id); for (const f of d.ger || []) vetFore.add(f);
  }
  if (p.startSvarPa || p.startVet || p.startFore) koll('starten', p.startSvarPa, p.startVet, p.startFore);   // starten får vänta på en replik i samma steg
});
/* inkorg 65 p.2: inget namn innan figuren har presenterat sig – mål, uppläsning, start, påminnelse, kvitto och repliker.
   Ett namn med en kand-flagga i story.js (t.ex. Ali → kandAli) får bara stå efter en replik som ger flaggan. */
{ const KAND = {}; for (const m of fs.readFileSync(new URL('../spel/printa-hem/story.js', import.meta.url), 'utf8').matchAll(/'kand([A-ZÅÄÖ][a-zåäö]+)'/g)) KAND[m[1]] = 'kand' + m[1];
  const vet = new Set(), texter = (v) => typeof v === 'string' ? [v] : typeof v === 'function' ? [...String(v).matchAll(/(['"`])((?:\\.|(?!\1)[^\\])*)\1/g)].map((m) => m[2]) : [];
  for (const p of STORY_STEG) {
    for (const f of ['mal', 'tal', 'start', 'pamin', 'kvitto', 'borta']) for (const t of texter(p[f])) for (const [namn, flagga] of Object.entries(KAND)) if (new RegExp(`\\b${namn}\\b`).test(t) && !vet.has(flagga)) fel.push(`${p.id}: ${f} säger "${namn}" innan ${namn} har presenterat sig ("${t.slice(0, 50)}")`);
    for (const d of p.dialog || []) { for (const t of texter(d.text)) for (const [namn, flagga] of Object.entries(KAND)) if (new RegExp(`\\b${namn}\\b`).test(t) && !vet.has(flagga) && !(d.ger || []).includes(flagga)) fel.push(`${p.id}: ${d.id} säger "${namn}" innan ${namn} har presenterat sig`); for (const g of d.ger || []) vet.add(g); }
  } }
// de gamla tabellerna får inte ha kvar poster för stegen i story.js
const spel = fs.readFileSync(new URL('../spel/printa-hem/spel.js', import.meta.url), 'utf8');
const tabell = (namn) => { const i = spel.indexOf(`const ${namn} = {`); if (i < 0) return ''; return spel.slice(i, spel.indexOf('\n};', i)); };
for (const namn of ['STEG_TAL', 'STEG_TAL_SPARA', 'JAG_TAL', 'PAMINN_T', 'KEDJA_TEXT', 'KEDJA_MAL', 'FOR_DU']) {
  const t = tabell(namn);
  for (const p of STORY_STEG) if (new RegExp(`^\\s+'?${p.id}'?:`, 'm').test(t)) fel.push(`${namn} har kvar en post för ${p.id} (den ska bara stå i story.js)`);
}
for (const p of STORY_STEG) if (new RegExp(`x\\.id === '${p.id}'`).test(tabell('KNUFF_T') || spel.slice(spel.indexOf('const KNUFF_T'), spel.indexOf('];', spel.indexOf('const KNUFF_T'))))) fel.push(`KNUFF_T har kvar en post för ${p.id}`);
for (const gammal of ['DAG1_FORST', 'DU_BYGG']) if (new RegExp(`const ${gammal}\\b`).test(spel)) fel.push(`${gammal} finns kvar (står som start i story.js)`);

/* inkorg 63 p.3: varje steg (utom kvällen) har en start som säger nästa handling – inte bara problemet eller en fråga */
{ const G0 = new Proxy({}, { get: (t, k) => k === 'rolfVara' || k === 'rolfNamn' ? () => 'en sak' : () => 0 }), lagenS = [{ stat: {}, rolf: {}, saljLagt: {} }, { stat: {}, rolf: {}, saljLagt: {}, cykelBuren: true }, { stat: {}, rolf: {}, saljLagt: {}, cykelStar: true }];
  for (const st of STORY_STEG) { if (st.sov || st.handling === 'sov') continue;
    if (!st.start) { fel.push(`${st.id}: ingen start – varje steg säger nästa handling med din röst (inkorg 63 p.3)`); continue; }
    for (const S0 of lagenS) { let t = ''; try { t = String(typeof st.start === 'function' ? st.start(S0, G0) : st.start); } catch { t = ''; }
      if (t && /\?\s*$/.test(t) && !/[.!]\s/.test(t)) fel.push(`${st.id}: starten är bara en fråga ("${t.slice(0, 40)}") – säg vad jag ska göra (inkorg 63 p.3)`); } } }
/* inkorg 63 p.1: varje dag 1–22 har en insats i vanligt tal på morgonkortet – aldrig "får mamma rätt" */
for (let d = 1; d <= 22; d++) { const dg = STORY.find((x) => x.dag === d); if (!dg?.insats) fel.push(`dag ${d}: ingen insats på morgonkortet`); else if (/får mamma rätt/i.test(dg.insats)) fel.push(`dag ${d}: insatsen säger "får mamma rätt" (inkorg 63 p.1)`); }
/* inkorg 67 p.1–2: varje köpsteg och låst steg har ett sparmål (KOP_NAMN), och inget mål börjar med "Vänta" (VÄNTA-MÅL) */
{ const G1 = new Proxy({}, { get: (t, k) => k === 'rolfVara' || k === 'rolfNamn' ? () => 'en sak' : k === 'VAROR' ? new Proxy({}, { get: () => ({ recept: 40, namn: 'sak' }) }) : () => 0 });
  const lagen2 = [{ stat: {}, rolf: {}, saljLagt: {}, ritningar: [], mynt: 0, kolf: {}, kvarn: {} }, { stat: {}, rolf: {}, saljLagt: {}, ritningar: [], mynt: 99999, kolf: {}, kvarn: {}, brevVantar: { lapp: 'rolf:0' }, krukaErbjuden: true }];
  for (const p of STORY_STEG) {
    if ((p.handling === 'kop' || p.las) && !KOP_NAMN[p.sak]) fel.push(`${p.id}: köpsteget (${p.sak}) har inget sparmål i KOP_NAMN – målet ska säga "Spara till … · x / y kr" (inkorg 67 p.1)`);
    for (const S0 of lagen2) { let m = ''; try { m = String(typeof p.mal === 'function' ? p.mal(S0, G1) : p.mal); } catch { m = typeof p.mal === 'string' ? p.mal : ''; }
      if (/^\s*Vänta\b/i.test(m)) fel.push(`${p.id}: målet "${m.slice(0, 50)}" är att vänta – målet är det du gör (VÄNTA-MÅL, inkorg 67 p.2)`); } } }
/* inkorg 68 p.10: varje sak som monteras har en plats i PLATS_FOR (pilen, kistan och repliken läser den) */
for (const p of STORY_STEG) if (p.handling === 'montera' && p.sak && !PLATS_FOR[p.sak]) fel.push(`${p.id}: ${p.sak} monteras men saknar plats i PLATS_FOR (SAK UTAN PLATS, inkorg 68 p.10)`);
/* inkorg 67 p.5 (rad 40): morgonkortets rubrik handlar om dagens första mål (INSATS UTAN MÅL) – dag 2–22 */
{ const G2 = new Proxy({}, { get: (t, k) => k === 'rolfVara' || k === 'rolfNamn' ? () => 'en sak' : () => 0 }), S2 = { stat: {}, rolf: {}, ritningar: [], mynt: 0, kolf: {}, kvarn: {}, saljLagt: {} };
  for (let d = 2; d <= 22; d++) { const dg = STORY.find((x) => x.dag === d); if (!dg) continue; if (!dg.rubrik) { fel.push(`dag ${d}: morgonkortet har ingen rubrik (INSATS UTAN MÅL)`); continue; }
    const st = dg.steg[0]; let m = ''; try { m = String(typeof st.mal === 'function' ? st.mal(S2, G2) : st.mal).toLowerCase(); } catch { m = ''; }
    const ord = dg.rubrik.toLowerCase().match(/[a-zåäö-]{4,}/g) || []; if (!ord.some((w) => m.includes(w.slice(0, 5)))) fel.push(`dag ${d}: rubriken "${dg.rubrik}" handlar inte om dagens första mål "${m}" (INSATS UTAN MÅL)`); } }
if (fel.length) { console.log(`story-koll: ${fel.length} fel`); fel.forEach((f) => console.log('  ✗ ' + f)); process.exit(1); }
console.log(`story-koll: ${STORY_STEG.length} steg i ordning, kraver/ger går ihop, ${dialogId.size} repliker svarar på något som redan hänt, 0 fel`);
