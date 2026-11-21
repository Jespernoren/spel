// Jesper 22:15: Alis hylla har alltid minst två köp – nästa köp i berättelsen och ett dyrare låst köp efter det. Kör varje dag 1-steg och läser hyllan.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
const spar = fs.readFileSync(new URL('./sparfiler/start-dag1.json', import.meta.url), 'utf8');
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(4000);
const ut = await p.evaluate(() => { const P = window.__printahem, S = P.S, rad = [];
  for (let i = 0; i < P.STEG.length; i++) { const st = P.STEG[i]; S.steg = i;
    if (st.id === 'rullSlut') { S.stat.printat = 1; } if (st.id === 'saljTva') S.rullSlut = true; if (st.id === 'kvarn') S.kvarnKopt = true; if (st.id === 'flaska') S.kvarnStar = true;
    const L = P.aliKopLista().filter((x) => x.key !== 'filament'); rad.push({ steg: st.id, n: L.length, kopbar: L.filter((x) => !x.las).length, lista: L.map((x) => x.key + (x.las ? ` [${x.las}]` : '')).join(' · ') }); if (st.id === 'sov1') break; }
  return rad; });
let ok = true; for (const r of ut) { const bra = r.n >= 2; if (!bra) ok = false; console.log(`${bra ? '✓' : '✗'} ${r.steg.padEnd(12)} ${r.n} st: ${r.lista}`); }
console.log(`${ok ? '✓' : '✗'} hyllan har minst två köp i varje dag 1-steg · ${fel.length ? '✗ sidfel ' + fel[0] : '✓ 0 sidfel'}`);
await b.close(); process.exit(ok && !fel.length ? 0 : 1);
