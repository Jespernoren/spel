// A-090 (inkorg 29): boten spelar hela spelet, dag 1 → julafton, ett kapitel i taget.
// Varje kapitel körs med sim-kapitel1.mjs från förra kapitlets sparfil och får en egen rapport i verktyg/a090/.
// Ett mål som inte nås på 10 min (SIM_STEGMAX) stoppar körningen och skrivs som FAST i sammanfattningen.
// Kör: node verktyg/sim-hela.mjs [url] [frånKapitel=1]
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';

const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const fran = +(process.argv[3] || 1);
const dir = new URL('./a090/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const spar = `${dir}spar/dag`; fs.mkdirSync(`${dir}spar`, { recursive: true });
const sim = new URL('./sim-kapitel1.mjs', import.meta.url).pathname;
// kapitel: [nr, första dag, dagen då nästa kapitel börjar]. K4 slutar när julafton (dag 22) är spelad, alltså när dag 23 börjar.
const KAP = [[1, 1, 6], [2, 6, 11], [3, 11, 16], [4, 16, 23]];
const rad = [];
for (const [nr, forst, till] of KAP) {
  if (nr < fran) continue;
  const fil = `${dir}k${nr}.md`, logg = `${dir}k${nr}.log`;
  const env = { ...process.env, SIM_STEGMAX: process.env.SIM_STEGMAX || '10', SIM_SPAR: spar };
  if (forst > 1) { const sp = `${spar}${forst}.json`; if (!fs.existsSync(sp)) { rad.push(`| K${nr} | – | sparfilen för dag ${forst} saknas – förra kapitlet nådde inte hit | – |`); break; } env.SIM_FRAN = sp; }
  const t0 = Date.now();
  const r = spawnSync('node', [sim, url, fil, '1', String(till)], { env, encoding: 'utf8', maxBuffer: 1 << 28, timeout: 3 * 3600e3 });
  fs.writeFileSync(logg, (r.stdout || '') + (r.stderr || ''));
  const md = fs.existsSync(fil) ? fs.readFileSync(fil, 'utf8') : '';
  const flaggor = [...md.matchAll(/^- \*\*([A-ZÅÄÖ0-9 ]+)\*\*/gm)].map((m) => m[1]);
  const per = Object.entries(flaggor.reduce((a, f) => ((a[f] = (a[f] || 0) + 1), a), {})).sort((a, b) => b[1] - a[1]).map(([f, n]) => `${f} ${n}`).join(' · ');
  const fast = /fastnade: (.*)/.exec(r.stdout || '')?.[1] || /fastnade: ([^|\n]*)/.exec(md)?.[1];
  const sidfel = /Sidfel: (.*)/.exec(md)?.[1] || '?';
  const nadde = fs.existsSync(`${spar}${till}.json`);
  rad.push(`| K${nr} (dag ${forst}–${till - 1}) | ${flaggor.length} | ${per || '–'} | ${fast ? `**FAST:** ${fast.trim()}` : nadde ? `nådde dag ${till}` : 'nådde inte slutet'} · sidfel: ${sidfel} · ${Math.round((Date.now() - t0) / 60000)} min |`);
  console.log(rad[rad.length - 1]);
  if (fast || !nadde) break;
}
const sammanfattning = `# A-090 · Boten spelar hela spelet\n\n*${new Date().toISOString().slice(0, 16)} · ${url}*\n\n| Kapitel | Flaggor | Per sort | Slut |\n|---|---|---|---|\n${rad.join('\n')}\n\nRapporterna per kapitel: \`k1.md\` … \`k4.md\`.\n`;
fs.writeFileSync(`${dir}sammanfattning.md`, sammanfattning);
console.log(sammanfattning);
