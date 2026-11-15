// Soptippsvägen 1 – punkt AX: simulerar kapitel 1 (dag 1–5) med en bot och skriver en textlogg.
// Kör: node verktyg/sim-kapitel1.mjs <url> <ut.md> [körning-nr]
//   url: t.ex. http://127.0.0.1:8765/printa-hem.html (det byggda spelet)
// Loggen visar per dag: minuter, prints, kr, köp, bärförmåga, trivsel och ALL text (tid, källa, vem).
// Flaggor: KROCK (två texter inom 5 s), RÖST AVBRUTEN (ny röst innan den förra pratat klart),
// FÖR TIDIGT (texten nämner en sak som inte finns hos Ali än), TEMPO (dagen utanför 10–15 min, dag 1 10–12).
import fs from 'fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';

const [url = 'http://127.0.0.1:8765/printa-hem.html', ut = 'sim-kapitel1.md', nr = '1'] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const sidfel = []; p.on('pageerror', (e) => sidfel.push(e.message));
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
      for (const fn of q) { if (fn.name === 'ruta') continue; try { fn(vt); } catch (e) { console.error('raf', e.message); } }
    },
    verklig: (fn, ms) => rs(fn, ms),
    get nu() { return vt; },
  };
  if (!sessionStorage.getItem('sim')) { sessionStorage.setItem('sim', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true, spelarNamn: 'Simulering' })); }
});
await p.goto(url); await p.waitForTimeout(3500);
await p.click('.br-starta').catch(() => {}); await p.waitForTimeout(2000);
await p.evaluate(() => window.__vt.start());
await p.addScriptTag({ content: fs.readFileSync(new URL('./sim-bot.js', import.meta.url), 'utf8') });
const r = await p.evaluate(() => window.__simBot.kor(6, 130));
await b.close();

// ---------- rapport ----------
const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const synlig = (e) => !['röst', 'MÅL'].includes(e.kalla);
const flaggor = [];
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
// tempo
for (const d of r.dagar) {
  const min = d.sek / 60, [lo, hi] = d.dag === 1 ? [10, 12] : [10, 15];
  if (min < lo || min > hi) flaggor.push({ dag: d.dag, t: d.sek, typ: 'TEMPO', text: `dag ${d.dag} tog ${min.toFixed(1)} min (mål ${lo}–${hi})` });
}
const per = {};
for (const d of r.dagar) per[d.dag] = d;
let md = `# Simulering kapitel 1 – körning ${nr}\n\n*Gjord ${new Date().toISOString().slice(0, 16).replace('T', ' ')} med \`verktyg/sim-kapitel1.mjs\` + \`verktyg/sim-bot.js\` (punkt AX). Boten går 4,5 m/s, läser ${15} tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*\n\n`;
md += `## Sammanfattning\n\n| Dag | Minuter | Prints (totalt) | Kr vid sömn | Bär | Trivsel |\n|---|---|---|---|---|---|\n`;
for (const d of r.dagar) md += `| ${d.dag} | ${(d.sek / 60).toFixed(1)} | ${d.printat} | ${d.mynt} | ${d.bar} | ${d.trivsel} |\n`;
md += `\n**Köp:**\n\n` + r.kop.map((k) => `- dag ${k.dag} ${fmt(k.t)} – ${k.id} (${k.pris} kr)`).join('\n') + '\n';
md += `\n## Flaggor (${flaggor.length})\n\n` + (flaggor.length ? flaggor.map((f) => `- **${f.typ}** dag ${f.dag} ${fmt(f.t)}: ${f.text}`).join('\n') : '- inga') + '\n';
md += `\nSidfel: ${sidfel.length ? sidfel.slice(0, 5).join(' · ') : 'inga'}\n`;
for (const dag of [...new Set(r.logg.map((e) => e.dag))]) {
  md += `\n## Dag ${dag}\n\n| Tid | Källa | Vem | Text |\n|---|---|---|---|\n`;
  for (const e of r.logg.filter((x) => x.dag === dag)) md += `| ${fmt(e.t)} | ${e.kalla} | ${e.vem} | ${e.text.replace(/\|/g, '/').slice(0, 300)} |\n`;
  md += `\n<details><summary>Botens handlingar dag ${dag}</summary>\n\n` + r.handlingar.filter((h) => h.dag === dag).map((h) => `- ${fmt(h.t)} ${h.text} (${h.mynt} kr)`).join('\n') + '\n\n</details>\n';
}
fs.writeFileSync(ut, md);
console.log(`klart: ${r.dagar.length} dagar, ${r.logg.length} textrader, ${flaggor.length} flaggor, sidfel ${sidfel.length} → ${ut}`);
for (const d of r.dagar) console.log(`  dag ${d.dag}: ${(d.sek / 60).toFixed(1)} min, ${d.mynt} kr, trivsel ${d.trivsel}, bär ${d.bar}`);
console.log('sista handlingar:', r.handlingar.slice(-6).map((h) => h.text).join(' | '));
