// inkorg 75 p.6 (A-130): röktestet med sparningar – körs före varje push (.git/hooks/pre-push).
// Laddar spelet som Pages gör (index.html som ES-modul, så att "Cannot access X before initialization" syns) med
//   (1) varje fil i verktyg/sparfiler/ och
//   (2) en sparning per sak som kan ligga i handen (alla varor, byggsatser och verktyg) – blå skärm 09:00 kom av powerbanken i handen.
// Kräver för varje: 0 sidfel, startmenyn syns, spelet går att fortsätta, och ingen felruta "Spelet kunde inte starta".
// Kör: node verktyg/roktest-sparfiler.mjs [--snabb]   (--snabb: bara sparfilerna, inga handsaker)
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';

const REPO = new URL('..', import.meta.url).pathname;
const SNABB = process.argv.includes('--snabb');
const PARALLELLT = Math.max(2, Math.min(6, (await import('node:os')).cpus().length - 1));
const TYPER = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml', '.wav': 'audio/wav', '.ogg': 'audio/ogg' };
const server = http.createServer((req, res) => {
  const p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let f = path.join(REPO, p); if (!f.startsWith(REPO)) { res.writeHead(403); return res.end(); }
  try { if (fs.statSync(f).isDirectory()) f = path.join(f, 'index.html'); res.writeHead(200, { 'content-type': TYPER[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }
  catch { res.writeHead(404); res.end(); }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const url = `http://127.0.0.1:${server.address().port}/spel/printa-hem/index.html`;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'] });

/* three.js från jsDelivr hämtas en gång och serveras lokalt i varje ny kontext (annars går 9 av 10 sekunder åt till nedladdningen) */
const THREE_JS = fs.readFileSync('/home/claude/verktyg/node_modules/three/build/three.module.js');
async function nyKontext(o = {}) { const c = await b.newContext(o); await c.route(/cdn\.jsdelivr\.net\/npm\/three@0\.170\.0\/build\/three\.module\.js/, (r) => r.fulfill({ body: THREE_JS, contentType: 'text/javascript' })); return c; }
async function prova(namn, spar) {
  const ctx = await nyKontext({ viewport: { width: 1024, height: 640 } });
  const p = await ctx.newPage(); const fel = [];
  p.on('pageerror', (e) => fel.push(e.message.split('\n')[0]));
  if (spar) await p.addInitScript((s) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); } }, spar);
  let meny = false, startfel = null, igang = false;
  try {
    await p.goto(url, { waitUntil: 'load', timeout: 60000 });
    meny = await p.waitForFunction(() => document.querySelector('.br-starta') || document.querySelector('.ph-startfel'), null, { timeout: 90000 }).then(() => p.evaluate(() => !!document.querySelector('.br-starta'))).catch(() => false);
    if (meny && spar) { await p.evaluate(() => window.__startaSpel?.()).catch((e) => fel.push(String(e.message))); await p.waitForTimeout(3000); igang = await p.evaluate(() => !!window.__printahem?.ui?.igang || !document.querySelector('.fp-overlay:not([hidden])')).catch(() => false); }
    else igang = true;
    startfel = await p.evaluate(() => window.__startfel?.[0] || null).catch(() => null);
  } catch (e) { fel.push('test: ' + e.message.slice(0, 120)); }
  await ctx.close();
  const ok = !fel.length && meny && !startfel;
  return { namn, ok, text: `${namn}: ${fel.length} sidfel${fel.length ? ' (' + [...new Set(fel)].slice(0, 2).join(' · ') + ')' : ''}, startmenyn ${meny ? 'syns' : 'syns INTE'}${startfel ? ', felruta: ' + startfel.split('\n')[0] : ''}${igang ? '' : ', gick inte att fortsätta'}` };
}

const jobb = [], jobbExtra = [];
const mapp = path.join(REPO, 'verktyg/sparfiler');
for (const f of fs.readdirSync(mapp).filter((f) => f.endsWith('.json')).sort()) jobb.push([f, fs.readFileSync(path.join(mapp, f), 'utf8')]);
if (!SNABB) {
  /* listan över saker kommer ur spelet självt (VAROR, MASKINER) – en ny sak kommer med i testet utan att någon skriver in den */
  const ctx = await nyKontext(); const p = await ctx.newPage();
  await p.goto(url, { waitUntil: 'load' }); await p.waitForFunction(() => window.__printahem?.VAROR, null, { timeout: 30000 });
  const typer = await p.evaluate(() => { const P = window.__printahem; return [...new Set([...Object.keys(P.VAROR), ...Object.keys(P.MASKINER).map((k) => 'byggsats:' + k), 'hammare', 'karra', 'sackkarra', 'magnet', 'vaskpanna', 'hacka', 'motorsag', 'grip', 'skrivareS', 'cykelS'])]; });
  await ctx.close();
  const bas = JSON.parse(fs.readFileSync(path.join(mapp, 'start-dag5.json'), 'utf8'));
  /* åtta saker per sparning: alla i verktygsraden (ikonerna ritas när modulen laddas – så kom 09:00-felet), och den första i handen */
  for (let k = 0; k < typer.length; k += 8) { const grupp = typer.slice(k, k + 8), d = structuredClone(bas); d.hotbar = [null, ...grupp.map((t) => ({ typ: t, n: 1 }))]; while (d.hotbar.length < 9) d.hotbar.push(null); d.vald = 1; jobb.push([`i handen: ${grupp.join(', ')}`, JSON.stringify(d)]); }
  /* och var och en i handen, en i taget, i ett spel som redan är igång */
  const ctx2 = await nyKontext(); const q = await ctx2.newPage(); const qfel = []; q.on('pageerror', (e) => qfel.push(e.message.split('\n')[0]));
  await q.addInitScript((s) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); } }, JSON.stringify(bas));
  await q.goto(url, { waitUntil: 'load' }); await q.waitForFunction(() => document.querySelector('.br-starta'), null, { timeout: 30000 }); await q.evaluate(() => window.__startaSpel()); await q.waitForTimeout(1500);
  const handFel = await q.evaluate(async (typer) => { const P = window.__printahem, ut = []; for (const t of typer) { try { P.S.hotbar[1] = { typ: t, n: 1 }; P.S.vald = 1; P.byt?.(1); P.ritaHotbar?.(); } catch (e) { ut.push(`${t}: ${e.message}`); } } return ut; }, typer);
  await ctx2.close();
  jobbExtra.push({ namn: `var och en i handen (${typer.length} saker)`, ok: !handFel.length && !qfel.length, text: `var och en i handen (${typer.length} saker): ${[...handFel, ...qfel].slice(0, 3).join(' · ') || '0 fel'}` });
}
jobb.unshift(['utan sparning', null]);
const ut = []; let i = 0;
await Promise.all(Array.from({ length: PARALLELLT }, async () => { while (i < jobb.length) { const [n, s] = jobb[i++]; ut.push(await prova(n, s)); } }));
await b.close(); server.close();
ut.push(...jobbExtra);
const fel = ut.filter((r) => !r.ok);
for (const r of fel) console.log('✗', r.text);
console.log(`${fel.length ? '✗' : '✓'} röktest med sparningar: ${ut.length - fel.length} av ${ut.length} startar (${jobb.filter((j) => j[0].endsWith('.json')).length} sparfiler${SNABB ? '' : `, ${jobb.filter((j) => j[0].startsWith('i handen')).length} sparningar med saker i verktygsraden och handen`})`);
process.exit(fel.length ? 1 : 0);
