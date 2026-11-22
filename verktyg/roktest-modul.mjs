// inkorg 62 (A-117): röktestet mot spelet som det laddas på GitHub Pages – index.html som ES-modul, inte den bundlade filen.
// Varför testerna inte såg den blå skärmen: alla tester körde ut/printa-hem.html, som esbuild --minify bygger.
// Där blir toppnivåns const till var, så en läsning av S innan `const S = …` ger undefined i stället för
// "Cannot access 'S' before initialization". Pages laddar spel.js som modul, och där kraschar samma rad.
//
// Kör:  node verktyg/roktest-modul.mjs                 → repots spel/printa-hem/index.html via en egen server (pre-commit)
//       node verktyg/roktest-modul.mjs <url> [commit]  → en adress, t.ex. Pages; med commit väntar testet tills ?v= i
//                                                       index.html är samma som i repot för den commiten (efter push)
// Kräver: 0 sidfel, 0 konsolfel från egna filer, och att startmenyn (STARTA) syns. Ren profil, ingen sparfil, inga testkrokar.
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';

const REPO = new URL('..', import.meta.url).pathname;
const [arg, commit] = process.argv.slice(2);
const TYPER = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml', '.glb': 'model/gltf-binary', '.wav': 'audio/wav', '.ogg': 'audio/ogg' };

let server = null, url = arg;
if (!url) {   /* repot som Pages ser det: roten är repot, spelet ligger i spel/printa-hem/ */
  server = http.createServer((req, res) => {
    const p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let f = path.join(REPO, p); if (!f.startsWith(REPO)) { res.writeHead(403); return res.end(); }
    try { if (fs.statSync(f).isDirectory()) f = path.join(f, 'index.html'); res.writeHead(200, { 'content-type': TYPER[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }
    catch { res.writeHead(404); res.end(); }
  });
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  url = `http://127.0.0.1:${server.address().port}/spel/printa-hem/index.html`;
}

/* efter push: vänta tills Pages serverar commitens index.html (samma ?v= som i repot), högst 10 min */
if (commit) {
  const vill = execFileSync('git', ['-C', REPO, 'show', `${commit}:spel/printa-hem/index.html`], { encoding: 'utf8' }).match(/\?v=([0-9a-f]+)/)?.[1];
  let har = null; const t0 = Date.now();
  while (Date.now() - t0 < 600000) {
    try { har = (await (await fetch(url + (url.includes('?') ? '&' : '?') + 'nocache=' + Date.now())).text()).match(/\?v=([0-9a-f]+)/)?.[1]; } catch { har = null; }
    if (har && har === vill) break;
    await new Promise((r) => setTimeout(r, 15000));
  }
  if (har !== vill) { console.log(`✗ röktest: ${url} serverar ?v=${har}, commiten ${commit} har ?v=${vill} (Pages har inte byggt klart på 10 min)`); process.exit(1); }
  console.log(`✓ ${url} serverar commitens version (?v=${vill})`);
}

const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });   /* ny profil: localStorage och IndexedDB är tomma */
const p = await ctx.newPage(); const fel = [], konsol = [];
p.on('pageerror', (e) => fel.push(e.message));
p.on('console', (m) => { if (m.type() === 'error' && !/favicon|ERR_INTERNET|net::ERR_(NAME|CONNECTION)/.test(m.text())) konsol.push(m.text()); });
p.on('response', (r) => { if (r.status() >= 400 && new URL(r.url()).host === new URL(url).host && !/favicon/.test(r.url())) konsol.push(`${r.status()} ${new URL(r.url()).pathname}`); });
await p.goto(url, { waitUntil: 'load', timeout: 60000 });
const meny = await p.waitForSelector('.br-starta', { timeout: 20000 }).then(() => true).catch(() => false);
await p.waitForTimeout(1500);
await b.close(); server?.close();
const ok = !fel.length && !konsol.length && meny;
console.log(`${ok ? '✓' : '✗'} röktest ${url}: ${fel.length} sidfel${fel.length ? ' (' + fel.join(' · ') + ')' : ''}, ${konsol.length} konsolfel${konsol.length ? ' (' + konsol.slice(0, 5).join(' · ') + ')' : ''}, startmenyn ${meny ? 'syns' : 'syns INTE'}`);
process.exit(ok ? 0 : 1);
