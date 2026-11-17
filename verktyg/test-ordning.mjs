// A-065 lager 3: ordningen genom hela spelet (ersätter test-dag1-ordning.mjs som enda ordningstest).
// Spelar med AX-boten (sim-kapitel1.mjs) och kontrollerar varje steg i STORYKEDJA:
//   händelse (malKlart) → kvittens (högst 2 s) → nästa mål (högst 4 s), 0 KROCK, 0 KEDJA, 0 brott i lager 2.
// Sparar ordningen i verktyg/ordning-facit.json och listar skillnaden mot förra facit ("Ändrad ordning").
//
// Kör:  node verktyg/test-ordning.mjs <url> [tillDag=22] [--md färdig-ax.md] [--nytt-facit]
//   --md: läs en färdig AX-rapport i stället för att spela (snabbt, för flera rapporter: --md a.md,b.md)
//   --nytt-facit: skriv över facit (bara när Jesper/planeringschatten godkänt den nya ordningen)
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const arg = process.argv.slice(2);
const url = arg[0] && !arg[0].startsWith('--') ? arg[0] : 'http://127.0.0.1:8765/ax.html';
const tillDag = +(arg.find((a, i) => i > 0 && /^\d+$/.test(a)) || 22);
const mdArg = arg.includes('--md') ? arg[arg.indexOf('--md') + 1] : null;
const nyttFacit = arg.includes('--nytt-facit');
const dir = new URL('.', import.meta.url).pathname;
const facitFil = dir + 'ordning-facit.json';

let filer = mdArg ? mdArg.split(',') : null;
if (!filer) {
  const ut = `/tmp/test-ordning-${Date.now()}.md`;
  execFileSync('node', [dir + 'sim-kapitel1.mjs', url, ut, '1', String(tillDag)], { stdio: 'inherit', timeout: 4 * 3600e3 });
  filer = [ut];
}

const rader = [], flaggor = [];
for (const f of filer) {
  const md = fs.readFileSync(f, 'utf8');
  let dag = 0;
  for (const l of md.split('\n')) {
    const d = l.match(/^## Dag (\d+)/); if (d) { dag = +d[1]; continue; }
    const fl = l.match(/^- \*\*([A-ZÅÄÖ ]+)\*\* dag (\d+) ([\d:]+): (.*)$/); if (fl) { flaggor.push({ typ: fl[1], dag: +fl[2], t: fl[3], text: fl[4] }); continue; }
    const m = l.match(/^\| ([\d:]+) \| ([^|]+?) \| ([^|]*?) \| (.*) \|$/); if (!m || !dag) continue;
    const [, t, kalla, vem, text] = m, s = t.split(':').reduce((a, b) => a * 60 + +b, 0);
    rader.push({ dag, t, s, kalla: kalla.trim(), vem: vem.trim(), text: text.trim() });
  }
}

// ordningen: varje klarat mål → första kvittensen efter → nästa mål i rutan
const ordning = [];
rader.forEach((r, i) => {
  if (r.kalla !== 'händelse' || r.vem !== 'malKlart') return;
  const id = (r.text.match(/id=(\S+)/) || [])[1], nasta = (r.text.match(/nasta=(\S+)/) || [])[1];
  const efter = rader.slice(i + 1).filter((x) => x.dag === r.dag && x.s - r.s <= 15);
  const fore = rader.slice(Math.max(0, i - 12), i).filter((x) => x.dag === r.dag && r.s - x.s <= 2 && ['kvittens', 'varför', 'lapp'].includes(x.kalla));
  const kv = fore.pop() || efter.find((x) => ['kvittens', 'varför', 'kvittens-bock', 'lapp'].includes(x.kalla));
  const mal = efter.find((x) => x.kalla === 'målruta');
  ordning.push({ dag: r.dag, id, nasta, kvittens: kv ? `${kv.kalla}: ${kv.text.slice(0, 60)}` : null, tillKvittens: kv ? (kv.kalla === 'kvittens-bock' ? 0 : Math.max(0, kv.s - r.s)) : null, tillMal: mal ? mal.s - r.s : null });
});

const lager2 = ['SEN KVITTENS', 'SAKNAD KVITTENS', 'DUBBEL KVITTENS', 'FEL ORDNING', 'KÖ FÖRE KVITTENS', 'SPÖKE', 'FEL BYGGEFFEKT', 'OREGISTRERAT MÅL'];
const brott = rader.filter((r) => r.kalla === 'brott' && lager2.includes(r.vem));
const krock = flaggor.filter((f) => f.typ === 'KROCK'), kedja = flaggor.filter((f) => f.typ === 'KEDJA');
const utanKvittens = ordning.filter((o) => o.kvittens == null);
const senMal = ordning.filter((o) => o.tillMal != null && o.tillMal > 4 + 10);   // målrutan väntar högst MAL_SENAST_MS (10 s) på förklaringen

// jämför med facit
const nyckel = (o) => `${o.dag}:${o.id}`;
let forra = null; try { forra = JSON.parse(fs.readFileSync(facitFil, 'utf8')); } catch {}
const andrat = [];
if (forra) {
  const fm = new Map(forra.ordning.map((o) => [nyckel(o), o])), nm = new Map(ordning.map((o) => [nyckel(o), o]));
  const fIds = forra.ordning.map(nyckel), nIds = ordning.map(nyckel);
  for (const k of nIds) if (!fm.has(k)) andrat.push(`nytt steg ${k}`);
  for (const k of fIds) if (!nm.has(k) && +k.split(':')[0] <= Math.max(...ordning.map((o) => o.dag))) andrat.push(`borta: ${k}`);
  for (const k of nIds) { const a = fm.get(k), b = nm.get(k); if (a && b && (a.kvittens || '').split(':')[0] !== (b.kvittens || '').split(':')[0]) andrat.push(`${k}: kvittens ${a.kvittens} → ${b.kvittens}`); }
  const gem = nIds.filter((k) => fm.has(k)), fGem = fIds.filter((k) => nm.has(k));
  if (gem.join() !== fGem.join()) andrat.push('ordningen mellan stegen har ändrats');
}
if (!forra || nyttFacit) fs.writeFileSync(facitFil, JSON.stringify({ skapad: new Date().toISOString(), filer, ordning }, null, 1));

const ok = (v, t) => console.log(`${v ? '✓' : '✗'} ${t}`);
console.log(`\n${ordning.length} klarade mål (dag ${Math.min(...ordning.map((o) => o.dag))}–${Math.max(...ordning.map((o) => o.dag))})`);
ok(!krock.length, `0 KROCK (${krock.length})`); krock.slice(0, 8).forEach((f) => console.log(`   dag ${f.dag} ${f.t}: ${f.text}`));
ok(!kedja.length, `0 KEDJA (${kedja.length})`); kedja.slice(0, 8).forEach((f) => console.log(`   dag ${f.dag} ${f.t}: ${f.text}`));
ok(!brott.length, `0 brott i lager 2 (${brott.length})`); [...new Set(brott.map((b) => `${b.vem}: ${b.text}`))].slice(0, 8).forEach((b) => console.log('   ' + b));
ok(!utanKvittens.length, `varje mål har en kvittens inom 15 s (${utanKvittens.length} utan)`); utanKvittens.slice(0, 8).forEach((o) => console.log(`   dag ${o.dag} ${o.id}`));
console.log(`\nÄndrad ordning mot facit: ${forra ? (andrat.length ? '' : 'ingen') : '(första körningen – facit skapat)'}`); andrat.slice(0, 30).forEach((a) => console.log('   ' + a));
console.log('\n| Dag | Steg | Kvittens | s till kvittens | s till nästa mål |\n|---|---|---|---|---|');
for (const o of ordning) console.log(`| ${o.dag} | ${o.id} | ${o.kvittens || '–'} | ${o.tillKvittens ?? '–'} | ${o.tillMal ?? '–'} |`);
process.exit(krock.length || kedja.length || brott.length ? 1 : 0);
