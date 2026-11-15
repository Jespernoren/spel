// Soptippsvägen 1 – punkt AX: simulerar kapitel 1 (dag 1–5) med en bot och skriver en textlogg.
// Kör: node verktyg/sim-kapitel1.mjs <url> <ut.md> [körning-nr]
//   url: t.ex. http://127.0.0.1:8765/printa-hem.html (det byggda spelet)
// Loggen visar per dag: minuter, prints, kr, köp, bärförmåga, trivsel och ALL text (tid, källa, vem).
// Flaggor: KROCK (två texter inom 5 s), RÖST AVBRUTEN (ny röst innan den förra pratat klart),
// FÖR TIDIGT (texten nämner en sak som inte finns hos Ali än), TEMPO (dagen utanför 10–15 min, dag 1 10–12).
import fs from 'fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';

const [url = 'http://127.0.0.1:8765/printa-hem.html', ut = 'sim-kapitel1.md', nr = '1', tillDag = '6'] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const sidfel = []; p.on('pageerror', (e) => sidfel.push(e.message));
p.on('console', (m) => { const t = m.text(); if (t.startsWith('[sim]')) console.log(t); });
// virtuell tid: aktiveras när boten startar
await p.addInitScript(() => {
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
  if (!sessionStorage.getItem('sim')) { sessionStorage.setItem('sim', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true, spelarNamn: 'Simulering' })); }
});
await p.goto(url); await p.waitForTimeout(3500);
await p.click('.br-starta').catch(() => {}); await p.waitForTimeout(2000);
await p.evaluate((u) => { window.__vt.start(); window.__simUtforlig = u; }, !!process.env.UTFORLIG);
await p.addScriptTag({ content: fs.readFileSync(new URL('./sim-bot.js', import.meta.url), 'utf8') });
const r = await p.evaluate((d) => window.__simBot.kor(d, 30 * d), +tillDag);
await b.close();

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
// krockar: två synliga texter inom 5 s (samma text i två kanaler räknas inte)
const syn = r.logg.filter(synlig);
for (let i = 1; i < syn.length; i++) {
  const a = syn[i - 1], c = syn[i];
  if (c.dag === a.dag && c.tot - a.tot < 5 && a.text !== c.text && !a.text.includes(c.text.slice(0, 30)) && !c.text.includes(a.text.slice(0, 30)) && !['bubbla'].includes(a.kalla + c.kalla)) {
    flaggor.push({ dag: c.dag, t: c.t, typ: 'KROCK', text: `${(c.tot - a.tot).toFixed(1)} s mellan [${a.kalla}] "${a.text.slice(0, 60)}" och [${c.kalla}] "${c.text.slice(0, 60)}"` });
  }
}
// röst avbruten
const rost = r.logg.filter((e) => e.kalla === 'röst');
for (let i = 1; i < rost.length; i++) {
  const a = rost[i - 1], c = rost[i], langd = Math.min(9, 0.6 + a.text.length * 0.062);
  if (c.tot - a.tot < langd - 0.3) flaggor.push({ dag: c.dag, t: c.t, typ: 'RÖST AVBRUTEN', text: `${a.vem}: "${a.text.slice(0, 50)}" (behöver ${langd.toFixed(1)} s, fick ${(c.tot - a.tot).toFixed(1)} s) ← ${c.vem}: "${c.text.slice(0, 40)}"` });
}
// punkt BE: kvittens → varför → nytt mål. Flagga om något saknas eller om målet läses upp mer än 2 s efter att kedjan pratat klart.
const rostLangd = (t) => Math.min(9, 0.6 + t.length * 0.062);
const rostFor = (text, efter) => r.logg.find((e) => e.kalla === 'röst' && e.tot >= efter - 0.5 && e.text.startsWith(text.slice(0, 40)));
const kedjeRader = [];
for (const kv of r.logg.filter((e) => e.kalla === 'kvittens')) {
  const va = r.logg.find((e) => e.kalla === 'varför' && e.varfor === kv.varfor && e.tot >= kv.tot && e.tot - kv.tot < 30);
  const sista = va || kv, rs = rostFor(sista.text, sista.tot), slut = rs ? rs.tot + rostLangd(sista.text) : null;
  const mal = r.logg.find((e) => e.kalla === 'röst' && /· MÅL$/.test(e.text) && e.tot >= (rs?.tot ?? sista.tot));
  const gap = slut != null && mal ? mal.tot - slut : null;
  kedjeRader.push({ dag: kv.dag, t: kv.t, id: kv.varfor, kv: kv.text, va: va?.text || '', gap, mal: mal?.text.replace(/ · MÅL$/, '') || '' });
  if (!rs) flaggor.push({ dag: kv.dag, t: kv.t, typ: 'KEDJA', text: `${kv.varfor}: kvittensen lästes aldrig upp` });
  else if (!r.logg.some((e) => e.kalla === 'MÅL' && Math.abs(e.tot - kv.tot) < 10)) { /* kvittens mitt i ett mål – inget nytt mål väntas */ }
  else if (!mal || mal.tot - slut > 20) flaggor.push({ dag: kv.dag, t: kv.t, typ: 'KEDJA', text: `${kv.varfor}: inget nytt mål lästes upp efter kedjan` });
  else if (gap > 2) flaggor.push({ dag: kv.dag, t: kv.t, typ: 'KEDJA', text: `${kv.varfor}: nytt mål ${gap.toFixed(1)} s efter kedjan (max 2 s)` });
}
for (const m of r.logg.filter((e) => e.kalla === 'MÅL')) {
  if (!r.logg.some((e) => ['kvittens', 'varför'].includes(e.kalla) && Math.abs(e.tot - m.tot) < 8)) flaggor.push({ dag: m.dag, t: m.t, typ: 'KEDJA', text: `mål utan kvittens: "${m.text.slice(0, 70)}"` });
}
// punkt 10: varje sms ska synas som bubbla
for (const sm of r.logg.filter((e) => e.kalla === 'sms')) {
  const bb = r.logg.find((e) => e.kalla === 'sms-bubbla' && e.text === sm.text && e.tot >= sm.tot);
  if (!bb) flaggor.push({ dag: sm.dag, t: sm.t, typ: 'SMS', text: `${sm.vem}: "${sm.text.slice(0, 50)}" syntes aldrig som bubbla` });
  else if (bb.tot - sm.tot > 15) flaggor.push({ dag: sm.dag, t: sm.t, typ: 'SMS', text: `${sm.vem}: bubblan kom ${(bb.tot - sm.tot).toFixed(0)} s efter sms:et` });
}
// punkt 15: en sak i taget – pausen mellan saker, och hur länge varje nytt mål väntade efter att det förra blev klart
const saker = r.logg.filter((e) => e.kalla === 'sak' || e.kalla === 'klar');
for (let i = 1; i < saker.length; i++) {
  const a = saker[i - 1], c = saker[i];
  if (a.kalla === 'sak' && c.kalla === 'sak') flaggor.push({ dag: c.dag, t: c.t, typ: 'SAMTIDIGT', text: `"${a.text.slice(0, 40)}" och "${c.text.slice(0, 40)}"` });
  if (a.kalla === 'klar' && c.kalla === 'sak' && c.tot - a.tot < 1.95 && c.dag === a.dag) flaggor.push({ dag: c.dag, t: c.t, typ: 'PAUS', text: `${(c.tot - a.tot).toFixed(1)} s paus före "${c.text.slice(0, 50)}"` });
}
// punkt BF: nytt mål synligt i målrutan inom 4 s (aldrig mer än 8 s) efter att förra målet blev klart
const malVantan = [];
for (const h of r.logg.filter((e) => e.kalla === 'händelse' && e.vem === 'malKlart')) {
  const m = r.logg.find((e) => e.kalla === 'målruta' && e.tot >= h.tot - 0.05);
  if (!m) continue;
  const v = m.tot - h.tot; malVantan.push({ dag: h.dag, t: h.t, v, text: m.text });
  if (v > 8) flaggor.push({ dag: h.dag, t: h.t, typ: 'MÅL > 8 s', text: `${v.toFixed(1)} s innan "${m.text.slice(0, 60)}" syntes` });
  else if (v > 4) flaggor.push({ dag: h.dag, t: h.t, typ: 'MÅL > 4 s', text: `${v.toFixed(1)} s innan "${m.text.slice(0, 60)}" syntes` });
}
// tempo
for (const d of r.dagar) {
  const min = d.sek / 60, [lo, hi] = d.dag === 1 ? [10, 12] : [10, 15];
  if (min < lo || min > hi) flaggor.push({ dag: d.dag, t: d.sek, typ: 'TEMPO', text: `dag ${d.dag} tog ${min.toFixed(1)} min (mål ${lo}–${hi})` });
}
const per = {};
for (const d of r.dagar) per[d.dag] = d;
let md = `# Simulering kapitel 1 – körning ${nr}\n\n*Gjord ${new Date().toISOString().slice(0, 16).replace('T', ' ')} med \`verktyg/sim-kapitel1.mjs\` + \`verktyg/sim-bot.js\` (punkt AX). Boten går 4,5 m/s, läser ${15} tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*\n\n`;
md += `## Sammanfattning\n\n| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |\n|---|---|---|---|---|---|---|\n`;
for (const d of r.dagar) md += `| ${d.dag} | ${(d.sek / 60).toFixed(1)} | ${d.sek ? Math.round((d.vantan || 0) / d.sek * 100) : 0} %${d.sek && (d.vantan || 0) / d.sek > 0.2 ? ' ⚠️' : ''} | ${d.printat} | ${d.mynt} | ${d.bar} | ${d.trivsel} |\n`;
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
fs.writeFileSync(ut, md);
console.log(`klart: ${r.dagar.length} dagar, ${r.logg.length} textrader, ${flaggor.length} flaggor, sidfel ${sidfel.length} → ${ut}`);
for (const d of r.dagar) console.log(`  dag ${d.dag}: ${(d.sek / 60).toFixed(1)} min, väntan ${d.sek ? Math.round((d.vantan || 0) / d.sek * 100) : 0} %, ${d.mynt} kr, trivsel ${d.trivsel}, bär ${d.bar}`);
console.log('sista handlingar:', r.handlingar.slice(-6).map((h) => h.text).join(' | '));
