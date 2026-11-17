// A-065 lager 4: statisk kontroll av sekvensreglerna innan commit.
// Kör: node verktyg/lint-sekvens.mjs [spel/printa-hem/spel.js]   → exit 1 om något bryter mot reglerna.
// Undantag: en kommentar /* UNDANTAG: skäl */ på samma rad. Undantagen listas alltid (de ska stå i morgonrapporten).
import fs from 'node:fs';

const fil = process.argv[2] || new URL('../spel/printa-hem/spel.js', import.meta.url).pathname;
const kod = fs.readFileSync(fil, 'utf8');
const rader = kod.split('\n');
const fel = [], undantag = [];
const radNr = (pos) => kod.slice(0, pos).split('\n').length;
const anmark = (nr, regel, text) => {
  const r = rader[nr - 1] || '';
  const m = r.match(/\/\*\s*UNDANTAG:\s*([^*]+)\*\//);
  (m ? undantag : fel).push({ nr, regel, text: m ? `${text} – ${m[1].trim()}` : text, rad: r.trim().slice(0, 140) });
};

// funktionskropp: från "function namn(" till matchande måsvinge (strängar och kommentarer hoppas över)
function kropp(namn) {
  const i = kod.search(new RegExp(`function ${namn}\\s*\\(`));
  if (i < 0) return null;
  let j = kod.indexOf('{', kod.indexOf(')', i)), d = 0, str = null;
  for (let k = j; k < kod.length; k++) {
    const c = kod[k], n = kod[k + 1];
    if (str) { if (c === '\\') { k++; continue; } if (c === str) str = null; continue; }
    if (c === '/' && n === '*') { k = kod.indexOf('*/', k + 2) + 1; continue; }
    if (c === '/' && n === '/') { k = kod.indexOf('\n', k); continue; }
    if (c === "'" || c === '"' || c === '`') { str = c; continue; }
    if (c === '{') d++;
    if (c === '}' && --d === 0) return { fran: j, till: k };
  }
  return null;
}

// 1. id/namn-jämförelser i de delade funktionerna = en lapp, inte en rättning
const DELADE = ['kanalLagg', 'korKanal', 'visaLapp', 'handelse', 'malKontrakt', 'startaDel', 'notisVisa', 'kedja'];
for (const f of DELADE) {
  const k = kropp(f); if (!k) continue;
  const del = kod.slice(k.fran, k.till), re = /\b(id|namn)\s*===\s*'([^']+)'/g;
  let m; while ((m = re.exec(del))) anmark(radNr(k.fran + m.index), 'SPECIALFALL', `${f}(): ${m[0]}`);
}

// 2. printaFram( får bara anropas från print-vägen (effekten väljs ur ursprung)
const PRINTVAG = ['placera', 'byggEffekt', 'printaFram', 'skrivareKlar', 'tomSkrivare', 'printKlar'];
const tillatna = PRINTVAG.map(kropp).filter(Boolean);
{ const re = /\bprintaFram\(/g; let m;
  while ((m = re.exec(kod))) {
    if (/function\s+$/.test(kod.slice(Math.max(0, m.index - 10), m.index))) continue;
    if (tillatna.some((k) => m.index > k.fran && m.index < k.till)) continue;
    anmark(radNr(m.index), 'PRINTAFRAM', 'printaFram( utanför print-vägen');
  }
}

// 3. kvittenser får inte fördröjas för hand: setTimeout/bud runt kedja(…) eller kvitto:
{ const re = /(setTimeout|bud)\(\s*\(\)\s*=>\s*(kedja\(|[^;]{0,80}kvitto\s*:)/g; let m;
  while ((m = re.exec(kod))) anmark(radNr(m.index), 'FÖRDRÖJD KVITTENS', m[0].slice(0, 70));
}

// 4. "Ställ/Sätt/Lägg … här" måste fråga världen (finns/placerat/harPlacerat/S.…), aldrig en egen flagga
{ const re = /['`](Ställ|Sätt|Lägg)[^'`\n]{0,40}\bhär\b[^'`\n]*['`]/g; let m;
  while ((m = re.exec(kod))) {
    const nr = radNr(m.index), r = rader[nr - 1];
    if (/\b(finns|placerat|harPlacerat|harSak|spoke|lin|S\.[a-zA-Z]+|ar[A-Z]\w*)\b/.test(r)) continue;
    anmark(nr, 'EGEN FLAGGA', m[0]);
  }
}

// 5. kod efter en //-kommentar på samma rad körs aldrig (felet har slagit ut både tippens yta och marken)
for (const f of [fil, ...fs.readdirSync(fil.replace(/[^/]+$/, '')).filter((n) => n.endsWith('.js') && !fil.endsWith(n)).map((n) => fil.replace(/[^/]+$/, n))]) {
  const r2 = fs.readFileSync(f, 'utf8').split('\n');
  r2.forEach((r, i) => { const k = r.search(/\/\/(?!.*['"`]\s*\+)/); if (k < 0 || /https?:$/.test(r.slice(0, k)) || (r.slice(0, k).split(/['"`]/).length % 2 === 0)) return; const efter = r.slice(k + 2); const m = efter.match(/(^|[\s;])([a-zA-Z_$][\w$]*(\.[a-zA-Z_$][\w$]*)+\([^)]*\)|(const|let) [a-zA-Z_$][\w$]* =[^;]+);\s*($|\/\*|\/\/)/); if (m) fel.push({ nr: i + 1, regel: 'KOD EFTER KOMMENTAR', text: `${f.split('/').pop()}: ${m[2].slice(0, 60)}`, rad: r.trim().slice(0, 140) }); });
}
console.log(`lint-sekvens: ${fel.length} fel, ${undantag.length} undantag (${fil.split('/').slice(-2).join('/')})`);
for (const f of fel) console.log(`  ✗ ${f.regel} rad ${f.nr}: ${f.text}\n      ${f.rad}`);
for (const u of undantag) console.log(`  ~ UNDANTAG ${u.regel} rad ${u.nr}: ${u.text}`);
process.exit(fel.length ? 1 : 0);
