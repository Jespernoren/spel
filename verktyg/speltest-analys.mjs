// A-108 (inkorg 53): läser en speltest-zip från spelet och skriver samma sorts rapport som nybörjarboten,
// så att en riktig spelare går att jämföra med botarna.
// Kör: node verktyg/speltest-analys.mjs speltest-<namn>-<datum>.zip [rapport.md]
import fs from 'node:fs';

const [zipFil, utFil] = process.argv.slice(2);
if (!zipFil) { console.log('Kör: node verktyg/speltest-analys.mjs <speltest.zip> [rapport.md]'); process.exit(1); }

// zip utan komprimering (STORE), som spelet skriver den
function lasZip(buf) {
  const filer = {}; let i = 0;
  while (i + 30 <= buf.length && buf.readUInt32LE(i) === 0x04034b50) {
    const metod = buf.readUInt16LE(i + 8), stor = buf.readUInt32LE(i + 18), nl = buf.readUInt16LE(i + 26), xl = buf.readUInt16LE(i + 28);
    const namn = buf.toString('utf8', i + 30, i + 30 + nl), start = i + 30 + nl + xl;
    if (metod !== 0) throw new Error(`${namn}: komprimerad zip stöds inte (spelets egen export är okomprimerad)`);
    filer[namn] = buf.subarray(start, start + stor); i = start + stor;
  }
  return filer;
}
const filer = lasZip(fs.readFileSync(zipFil));
if (!filer['logg.json']) { console.log('Ingen logg.json i zip-filen'); process.exit(1); }
const L = JSON.parse(filer['logg.json'].toString('utf8'));
const H = (L.handelser || []).slice().sort((a, b) => a.ms - b.ms);
const bilder = Object.keys(filer).filter((n) => n.startsWith('bilder/'));

const sek = (ms) => (ms / 1000).toFixed(0);
const mmss = (ms) => { const s = Math.max(0, Math.round(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
const t0 = H[0]?.ms || 0, nar = (e) => `dag ${e.dag} ${mmss(e.ms - t0)}`;
const LASTID = (t) => 2000 + String(t || '').length * 60;   // samma läsbara tid som regeln i spelet (2 s + 60 ms per tecken)

// mål och tid per mål (friktionskurvan)
const mal = []; let forra = null;
for (const e of H) if (e.typ === 'mal' || e.typ === 'start') { if (forra) forra.sek = (e.ms - forra.ms) / 1000; forra = { id: e.id || e.steg, text: e.text || '(start)', dag: e.dag, ms: e.ms }; if (e.typ === 'mal') mal.push(forra); }
if (forra && H.length) forra.sek = (H[H.length - 1].ms - forra.ms) / 1000;

// felklick: ett klick som inte träffade något, eller som fick ett nej inom 1,5 s
const klick = H.filter((e) => e.typ === 'klick'), nej = H.filter((e) => e.typ === 'nej');
const felklick = klick.filter((k) => k.gick === false || nej.some((n) => n.ms >= k.ms && n.ms - k.ms <= 1500)).map((k) => ({ ...k, varfor: k.varfor || nej.find((n) => n.ms >= k.ms && n.ms - k.ms <= 1500)?.varfor || '' }));
// stillestånd: över 20 s utan att målet går framåt (det längsta per mål)
const stilla = new Map(); for (const e of H.filter((x) => x.typ === 'stilla')) { const k = e.dag + ':' + e.steg; if (!stilla.has(k) || stilla.get(k).sek < e.sek) stilla.set(k, e); }
// texter han inte hann läsa eller hoppade över
const hoppade = H.filter((e) => e.typ === 'hoppade');
const forFort = H.filter((e) => e.typ === 'fortsatt' && e.sek * 1000 < LASTID(e.text) * 0.5);
// menyer
const menyer = {}; for (const e of H.filter((x) => x.typ === 'meny')) { const m = (menyer[e.namn] ||= { n: 0, sek: 0 }); m.n++; m.sek += e.sek; }
const kontroll = H.filter((e) => e.typ === 'kontroll'), verktyg = H.filter((e) => e.typ === 'verktyg'), f8 = H.filter((e) => e.typ === 'f8'), kansla = H.filter((e) => e.typ === 'kansla');
const pil = H.filter((e) => e.typ === 'visat' && e.kanal === 'pil');
const dagar = [...new Set(H.map((e) => e.dag))];

let md = `# Speltest: ${L.spelare || 'spelare'}\n\n`;
md += `*${L.spel || ''} · version ${L.bygg || '?'} · startad ${L.startad || '?'} · exporterad ${L.exporterad || '?'}*\n\n`;
md += `**${H.length} händelser · ${bilder.length} bilder · dag ${dagar.join(', ')} · ${mal.length} mål · ${klick.length} klick, varav ${felklick.length} felklick · ${stilla.size} stillestånd · ${hoppade.length} överhoppade repliker · ${forFort.length} sidor stängda innan de hann läsas**\n\n`;
md += `## Flaggor (samma namn som nybörjarboten)\n`;
md += `- **FAST** (över 2 min på ett mål): ${mal.filter((m) => m.sek > 120).length}\n- **FÖRVIRRAD** (felklick i rad, 3 eller fler inom 30 s): ${(() => { let n = 0; for (let i = 2; i < felklick.length; i++) if (felklick[i].ms - felklick[i - 2].ms < 30000) n++; return n; })()}\n- **HANN INTE LÄSA** (sidan stängd på under halva lästiden): ${forFort.length}\n- **STILLA** (över 20 s utan framsteg): ${stilla.size}\n\n`;
md += `## Tid per mål\n\n| Dag | Mål | Tid | Stilla längst | Felklick |\n|---|---|---|---|---|\n`;
for (const m of mal) { const st = [...stilla.values()].filter((e) => e.dag === m.dag && e.steg === m.id).reduce((a, e) => Math.max(a, e.sek), 0); const fk = felklick.filter((k) => k.ms >= m.ms && k.ms < m.ms + (m.sek || 0) * 1000).length; md += `| ${m.dag} | ${String(m.text).replace(/\|/g, '/')} | ${m.sek != null ? mmss(m.sek * 1000) : '–'} | ${st ? st + ' s' : ''} | ${fk || ''} |\n`; }
md += `\n## Var han fastnade (stillestånd över 20 s)\n\n`;
md += stilla.size ? [...stilla.values()].map((e) => `- ${nar(e)} · **${e.sek} s** på *${e.mal || e.steg}*`).join('\n') + '\n' : '*Inga.*\n';
md += `\n## Felklick\n\n`;
md += felklick.length ? felklick.map((k) => `- ${nar(k)} · ${k.pa ? `klickade på *${k.pa}*` : 'klickade på inget'} med ${k.verktyg || 'handen'}${k.varfor ? ` → *${k.varfor}*` : ''}`).join('\n') + '\n' : '*Inga.*\n';
md += `\n## Texter han hoppade över eller inte hann läsa\n\n`;
md += [...hoppade.map((e) => `- ${nar(e)} · hoppade över (Enter): ${e.vem ? e.vem + ': ' : ''}*${e.text || ''}*`), ...forFort.map((e) => `- ${nar(e)} · dagbokssidan stängd efter ${e.sek} s: *${e.text}*`)].join('\n') || '*Inga.*';
md += `\n\n## Menyer\n\n| Meny | Gånger | Tid totalt |\n|---|---|---|\n${Object.entries(menyer).sort((a, b) => b[1].sek - a[1].sek).map(([n, m]) => `| ${n} | ${m.n} | ${m.sek.toFixed(0)} s |`).join('\n') || '| – | | |'}\n`;
md += `\n## Övrigt\n\n- Verktygsbyten: ${verktyg.length}\n- Kontrollhjälp som visades: ${kontroll.length} (${[...new Set(kontroll.map((k) => k.text))].slice(0, 8).join(' · ')})\n- Pilen flyttades: ${pil.length} gånger\n- F8-rapporter: ${f8.length}${f8.length ? ' – ' + f8.map((e) => `*${e.text || '(utan text)'}*`).join(', ') : ''}\n- Hur var dagen / Hur känns spelet: ${kansla.length ? kansla.map((e) => `${e.fraga} ${e.text}`).join(' · ') : '–'}\n`;
md += `\n## Bilder\n\n${bilder.length} bilder i zip-filen (en per nytt mål och en i minuten): ${bilder.slice(0, 6).map((b) => b.replace('bilder/', '')).join(', ')}${bilder.length > 6 ? ' …' : ''}\n`;

const ut = utFil || zipFil.replace(/\.zip$/, '') + '-rapport.md';
fs.writeFileSync(ut, md);
console.log(`speltest-analys: ${H.length} händelser, ${mal.length} mål, ${felklick.length} felklick, ${stilla.size} stillestånd, ${bilder.length} bilder → ${ut}`);
