// Inkorg 22: analys av Regissörens logg för en dag (från verktyg/luft.mjs).
// Ett meddelande = allt som syns eller hörs samtidigt om samma sak (rösten, tankebubblan, sms:et …) – poster inom 0,4 s med samma text slås ihop.
// Inte meddelanden: målrutan (dess byte är när en uppgift blev klar), kameran och kontrollhjälpen (en fast rad i HUD:en).
// Svar = kvittens, nytt mål eller ett svar på det man just gjorde (e.svar). Allt annat ska ha andrum.
// Kör för att jämföra: node verktyg/luft-analys.mjs fore nu  → tabell per dag
import fs from 'fs';
export const ANDRUM_MS = 8000, ANDRUM_EFTER_KLART_MS = 12000;
const norm = (t) => String(t || '').replace(/^💭\s*/, '').replace(/^📻 [^:]+:\s*/, '').replace(/\s+/g, ' ').trim().slice(0, 50);
export function analys({ namn, dag, logg, sidfel = [], brott = [] }) {
  const klar = (logg.some((e) => e.kanal === 'klar') ? logg.filter((e) => e.kanal === 'klar') : logg.filter((e) => e.kanal === 'målruta')).map((e) => e.start).sort((a, b) => a - b);   // när uppgiften blev grön (äldre byggen: när nästa mål kom)
  const poster = logg.filter((e) => !['målruta', 'klar', 'kamera', 'hjälp', 'pil', 'nick', 'svep'].includes(e.kanal) && e.text && !/^\(/.test(e.text))   // "(läget ändras)" är ingen text man ser.sort((a, b) => a.start - b.start);
  const med = [];
  for (const e of poster) {
    const g = med.find((m) => { const d = Math.abs(e.start - m.start), x = norm(m.text), y = norm(e.text), lika = x.includes(y.slice(0, 20)) || y.includes(x.slice(0, 20)); return lika && d <= 2500; });   // samma text inom 2,5 s (tankebubblan kommer efter kamerans nick)
    const svar = e.svar ?? ['kvittens', 'mål', 'MÅL'].includes(e.prio);
    if (g) { g.slut = Math.max(g.slut, e.slut); g.svar ||= svar; g.kanaler.add(e.kanal); continue; }
    med.push({ start: e.start, slut: Math.max(e.slut, e.start), text: norm(e.text), vem: e.vem, svar, kanaler: new Set([e.kanal]) });
  }
  const luft = [], trangsel = [], t0 = med[0]?.start || 0; let slutHittills = -Infinity;
  for (let i = 0; i < med.length; i++) {
    const m = med[i];
    if (i > 0) { const l = m.start - slutHittills; luft.push(l);
      if (!m.svar) { const k = klar.filter((t) => t <= m.start).pop(); if (l < ANDRUM_MS || (k != null && m.start - k < ANDRUM_EFTER_KLART_MS)) trangsel.push({ t: +((m.start - t0) / 1000).toFixed(1), vad: [...m.kanaler].join('+'), vem: m.vem, text: m.text, luft: +(l / 1000).toFixed(1), efterKlar: k != null ? +((m.start - k) / 1000).toFixed(1) : null }); } }
    slutHittills = Math.max(slutHittills, m.slut);
  }
  const annat = med.filter((m, i) => i > 0 && !m.svar).map((m) => luft[med.indexOf(m) - 1]);
  const s = (a) => a.length ? { medel: +(a.reduce((x, y) => x + y, 0) / a.length / 1000).toFixed(1), minst: +(Math.min(...a) / 1000).toFixed(1) } : { medel: null, minst: null };
  return { namn, dag, meddelanden: med.length, annat: annat.length, luftAlla: s(luft), luftAnnat: s(annat), trangsel2: trangsel.length, exempel: trangsel.slice(0, 10), sidfel: sidfel.slice(0, 2), spelets: brott.length, brott: brott.slice(0, 5) };
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const namnen = process.argv.slice(2), rad = [];
  for (let d = 1; d <= 5; d++) for (const n of namnen) { const f = new URL(`./a076/luft-${n}-dag${d}.json`, import.meta.url); if (fs.existsSync(f)) rad.push(analys(JSON.parse(fs.readFileSync(f, 'utf8')))); }
  console.log('| Dag | Bygge | Meddelanden | varav ej svar | Luft medel / minst (alla) | Luft medel / minst (ej svar) | TRÄNGSEL 2 | Spelets flaggor |\n|---|---|---|---|---|---|---|---|');
  for (const r of rad) console.log(`| ${r.dag} | ${r.namn} | ${r.meddelanden} | ${r.annat} | ${r.luftAlla.medel} s / ${r.luftAlla.minst} s | ${r.luftAnnat.medel} s / ${r.luftAnnat.minst} s | ${r.trangsel2} | ${r.spelets} |`);
  if (process.env.EXEMPEL) for (const r of rad) { console.log(`\n${r.namn} dag ${r.dag}:`); for (const b of r.brott) console.log('  flagga: ' + b); for (const e of r.exempel) console.log(`  ${e.t}s ${e.vad} ${e.vem}: ${e.text} (luft ${e.luft} s, efter klar ${e.efterKlar} s)`); }
}
