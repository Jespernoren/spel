// test-a130 (inkorg 75): sparningen som inte försvinner.
//  a) privat fönster (ny kontext utan beständig lagring): startsidan varnar och läser upp varningen
//  b) vanligt fönster (beständig profil): ingen varning
//  c) en trasig sparning: spelet startar, rutan "Sparningen gick inte att läsa" erbjuder gårdagens, och valet laddar den
//  d) spara en kopia som fil och öppna den igen i ett tomt fönster
//  e) automatiska sparningar: morgon och natt, i localStorage och IndexedDB, visas i sparrutan
//  f) aldrig blå skärm: three.js blockerad (som en reklamspärr) → rutan "Spelet kunde inte starta" med tre val
// Kör: node verktyg/test-a130.mjs   (index.html som modul via egen server)
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';

const REPO = new URL('..', import.meta.url).pathname, UT = path.join(REPO, 'verktyg/a130');
fs.mkdirSync(UT, { recursive: true });
const TYPER = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.webp': 'image/webp', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => { const p = decodeURIComponent(new URL(req.url, 'http://x').pathname); let f = path.join(REPO, p); try { if (fs.statSync(f).isDirectory()) f = path.join(f, 'index.html'); res.writeHead(200, { 'content-type': TYPER[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); } catch { res.writeHead(404); res.end(); } });
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const URL_ = `http://127.0.0.1:${server.address().port}/spel/printa-hem/index.html`;
const ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'];
const b0 = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ARGS });
const THREE_JS = fs.readFileSync('/home/claude/verktyg/node_modules/three/build/three.module.js');
const lokalThree = (c) => c.route(/cdn\.jsdelivr\.net\/npm\/three@0\.170\.0/, (r) => r.fulfill({ body: THREE_JS, contentType: 'text/javascript' }));
const b = { newContext: async (o) => { const c = await b0.newContext(o); await lokalThree(c); return c; }, close: () => b0.close() };
const res = []; const ok = (namn, villkor, info = '') => { res.push([villkor, `${namn}${info ? ' – ' + info : ''}`]); };
const spar = (f) => fs.readFileSync(path.join(REPO, 'verktyg/sparfiler', f), 'utf8');
async function sida(ctx, init) {
  const p = await ctx.newPage(); p.fel = []; p.on('pageerror', (e) => p.fel.push(e.message));
  if (init) await p.addInitScript(init.fn, init.arg);
  return p;
}
const vantaMeny = (p) => p.waitForFunction(() => document.querySelector('.br-starta') || document.querySelector('.ph-startfel'), null, { timeout: 40000 });

/* a) privat */
{
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } }); const p = await sida(ctx);
  await p.goto(URL_); await vantaMeny(p); await p.waitForTimeout(800);
  const rad = await p.evaluate(() => document.querySelector('.br3-privat')?.innerText || '');
  await p.screenshot({ path: path.join(UT, 'a-privat-fonster.png') });
  await p.mouse.click(640, 40); await p.waitForTimeout(600);
  const last = await p.evaluate(() => window.__sparning?.lasPrivat() && window.__printahem.textLogg().some((e) => /privat fönster/.test(e.text)));
  ok('a) privat fönster: varningen syns på startsidan', /privat fönster/.test(rad) && /sparas inte/.test(rad), rad.replace(/\s+/g, ' ').trim());
  ok('a) varningen läses upp (berättaren) efter första klicket', !!last);
  ok('a) 0 sidfel', !p.fel.length, p.fel[0]); await ctx.close();
}
/* b) vanligt fönster */
{
  const dir = fs.mkdtempSync('/tmp/a130prof-'); const ctx = await chromium.launchPersistentContext(dir, { executablePath: '/usr/bin/google-chrome', args: ARGS, viewport: { width: 1280, height: 720 } }); await lokalThree(ctx);
  const p = await sida(ctx); await p.goto(URL_); await vantaMeny(p); await p.waitForTimeout(800);
  const rad = await p.evaluate(() => document.querySelector('.br3-privat')?.innerText || '');
  const lag = await p.evaluate(() => window.__sparning?.SPARSTART?.lagring);
  ok('b) vanligt fönster: ingen varning', !rad, `kvot ${Math.round((lag?.kvot || 0) / 1e9)} GB, skäl: ${(lag?.skal || []).join(', ') || 'inga'}`);
  await ctx.close();
}
/* c) trasig sparning + automatiska sparningar i localStorage */
{
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });
  const gar = JSON.parse(spar('start-dag3.json')), forr = JSON.parse(spar('start-dag2.json'));
  const auto = [{ dag: 3, nar: 'morgon', tid: Date.now() - 3600e3, mynt: gar.mynt, json: JSON.stringify(gar) }, { dag: 2, nar: 'natt', tid: Date.now() - 7200e3, mynt: forr.mynt, json: JSON.stringify(forr) }];
  const trasig = spar('start-dag4.json').slice(0, 9000);   /* avbruten skrivning: halva filen */
  const p = await sida(ctx, { fn: ([t, a]) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', t); localStorage.setItem('spar:printahem2:auto', a); } }, arg: [trasig, JSON.stringify(auto)] });
  await p.goto(URL_); await vantaMeny(p); await p.waitForTimeout(800);
  const ruta = await p.evaluate(() => document.querySelector('.br3-trasig')?.innerText || '');
  await p.screenshot({ path: path.join(UT, 'c-trasig-sparning.png') });
  ok('c) trasig sparning: spelet startar och visar rutan', /gick inte att läsa/.test(ruta) && /Senaste/.test(ruta) && /Gårdagens/.test(ruta), ruta.split('\n').slice(0, 4).join(' | '));
  const undan = await p.evaluate(() => localStorage.getItem('spar:printahem2:trasig')?.length || 0);
  ok('c) den trasiga är sparad undan (inte överskriven)', undan === trasig.length, `${undan} tecken`);
  const dl = p.waitForEvent('download', { timeout: 5000 }).catch(() => null);
  const nav = p.waitForNavigation({ timeout: 20000 }).catch(() => null);
  await p.click('[data-trasigval="1"]'); const fil = await dl; await nav;
  ok('c) den trasiga sparas som fil när man väljer', !!fil && /trasig/.test(fil?.suggestedFilename() || ''), fil ? fil.suggestedFilename() : 'ingen nedladdning');
  await p.waitForFunction(() => window.__printahem?.S && document.querySelector('.br-starta'), null, { timeout: 40000 }); await p.waitForTimeout(500);
  const S = await p.evaluate(() => ({ dag: window.__printahem.S.dag, steg: window.__printahem.S.steg }));
  ok('c) gårdagens sparning (dag 2) laddas', S.dag === 2, `dag ${S.dag}, steg ${S.steg}`);
  ok('c) 0 sidfel', !p.fel.length, p.fel[0]); await ctx.close();
}
/* d) spara en kopia som fil, öppna i ett tomt fönster */
{
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 }, acceptDownloads: true });
  const p = await sida(ctx, { fn: (s) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); } }, arg: spar('start-dag4.json') });
  await p.goto(URL_); await vantaMeny(p); await p.evaluate(() => window.__startaSpel()); await p.waitForTimeout(2500);
  await p.keyboard.press('Escape'); await p.waitForTimeout(600);
  await p.click('[data-sida="spara"]'); await p.waitForTimeout(800);
  await p.screenshot({ path: path.join(UT, 'd-spara-och-ladda.png') });
  const dl = p.waitForEvent('download', { timeout: 8000 }); await p.click('[data-sparafil]'); const fil = await dl;
  const fp = path.join(UT, 'd-' + fil.suggestedFilename()); await fil.saveAs(fp);
  const innehall = JSON.parse(fs.readFileSync(fp, 'utf8')), facit = await p.evaluate(() => ({ dag: window.__printahem.S.dag, steg: window.__printahem.S.steg, namn: window.__printahem.S.spelarNamn }));
  ok('d) Spara en kopia laddar ned soptippsvagen-<namn>-<datum>.json', /^soptippsvagen-[a-z0-9-]+-\d{4}-\d\d-\d\d\.json$/.test(fil.suggestedFilename()) && innehall.dag === facit.dag && innehall.steg === facit.steg, fil.suggestedFilename());
  await ctx.close();
  const ctx2 = await b.newContext({ viewport: { width: 1280, height: 720 } }); const q = await sida(ctx2);
  await q.goto(URL_); await vantaMeny(q); await q.click('[data-sida="spara"]'); await q.waitForTimeout(600);
  const val = q.waitForEvent('filechooser'); await q.click('[data-oppnafil]'); await (await val).setFiles(fp);
  await q.waitForFunction(() => window.__printahem?.S?.steg > 0 && document.querySelector('.br-starta'), null, { timeout: 40000 }); await q.waitForTimeout(500);
  const S2 = await q.evaluate(() => ({ dag: window.__printahem.S.dag, steg: window.__printahem.S.steg, namn: window.__printahem.S.spelarNamn }));
  ok('d) Öppna en sparning läser in filen i ett tomt fönster', S2.dag === facit.dag && S2.steg === facit.steg && S2.namn === facit.namn, `dag ${S2.dag}, steg ${S2.steg}, ${S2.namn}`);
  /* fel fil */
  await q.keyboard.press('Escape').catch(() => {}); fs.writeFileSync('/tmp/a130-fel.json', '{"inte":"en sparning"');
  await q.evaluate(() => { document.querySelector('[data-sida="spara"]')?.click(); }); await q.waitForTimeout(600);
  if (await q.$('[data-oppnafil]')) { const v2 = q.waitForEvent('filechooser'); await q.click('[data-oppnafil]'); await (await v2).setFiles('/tmp/a130-fel.json'); await q.waitForTimeout(800); }
  const felText = await q.evaluate(() => document.querySelector('.br3-filfel')?.textContent || '');
  ok('d) en fil som inte är en sparning ger ett meddelande, inget annat händer', /gick inte att läsa/.test(felText), felText);
  ok('d) 0 sidfel', !q.fel.length, q.fel[0]); await ctx2.close();
}
/* e) automatiska sparningar */
{
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });
  const p = await sida(ctx, { fn: (s) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); } }, arg: spar('start-dag5.json') });
  await p.goto(URL_); await vantaMeny(p); await p.evaluate(() => window.__startaSpel()); await p.waitForTimeout(8000);   /* dagens morgonsparning kommer efter 6 s */
  const ls1 = await p.evaluate(() => JSON.parse(localStorage.getItem('spar:printahem2:auto') || '[]').map((a) => `${a.dag}:${a.nar}`));
  await p.evaluate(() => window.__printahem.sov()); await p.waitForTimeout(1500);
  const r = await p.evaluate(async () => {
    const ls = JSON.parse(localStorage.getItem('spar:printahem2:auto') || '[]');
    const idb = await new Promise((res) => { const o = indexedDB.open('printahem-spar'); o.onsuccess = () => { const g = o.result.transaction('kv').objectStore('kv').get('auto'); g.onsuccess = () => res(g.result || []); }; });
    return { ls: ls.map((a) => `${a.dag}:${a.nar}`), idb: idb.map((a) => `${a.dag}:${a.nar}`) };
  });
  ok('e) morgonen sparas automatiskt', ls1.includes('5:morgon'), ls1.join(', '));
  ok('e) när du somnar sparas dagen i localStorage och IndexedDB', r.ls[0] === '5:natt' && r.idb[0] === '5:natt', `localStorage ${r.ls.join(', ')} · IndexedDB ${r.idb.join(', ')}`);
  await ctx.close();
}
/* f) three.js blockerad */
{
  const ctx = await b0.newContext({ viewport: { width: 1280, height: 720 } }); await ctx.route(/cdn\.jsdelivr\.net/, (r) => r.abort());
  const p = await ctx.newPage(); await p.goto(URL_); await p.waitForSelector('.ph-startfel', { timeout: 30000 }).catch(() => {});
  const t = await p.evaluate(() => document.querySelector('.ph-startfel')?.innerText || '');
  await p.screenshot({ path: path.join(UT, 'f-kunde-inte-starta.png') });
  ok('f) three.js blockerad: rutan "Spelet kunde inte starta" i stället för blått', /kunde inte starta/.test(t) && /Försök igen/.test(t) && /Börja om utan sparning/.test(t) && /Spara felet till fil/.test(t), t.split('\n')[1] || '');
  const dl = p.waitForEvent('download', { timeout: 5000 }).catch(() => null); await p.click('[data-fil]'); const fil = await dl;
  ok('f) Spara felet till fil', !!fil, fil?.suggestedFilename()); await ctx.close();
}
/* f2) ett fel när modulen körs (som pbMesh 09:00) – simulerat med en sparning som får en egen kontroll att kasta */
{
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });
  await ctx.route(/printa-hem\/spel\.js/, async (r) => { const svar = await r.fetch(); const t = (await svar.text()).replace("const SPEL_ID = 'printa-hem';", "const SPEL_ID = 'printa-hem'; if (localStorage.getItem('spar:printahem2:v1')) null.krasch;"); r.fulfill({ response: svar, body: t }); });
  const p = await sida(ctx, { fn: (s) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); } }, arg: spar('start-dag3.json') });
  await p.goto(URL_); await p.waitForSelector('.ph-startfel', { timeout: 30000 }).catch(() => {});
  const t = await p.evaluate(() => document.querySelector('.ph-startfel')?.innerText || '');
  ok('f) modulen kraschar vid start: felrutan med felet', /kunde inte starta/.test(t) && /krasch|null/.test(t), (t.split('\n')[1] || '').slice(0, 80));
  await p.click('[data-utan]'); await vantaMeny(p); await p.waitForTimeout(500);
  const efter = await p.evaluate(() => ({ meny: !!document.querySelector('.br-starta'), undan: !!localStorage.getItem('spar:printahem2:trasig') }));
  ok('f) Börja om utan sparning: spelet startar, sparningen ligger undan', efter.meny && efter.undan); await ctx.close();
}
await b.close(); server.close();
for (const [v, t] of res) console.log(v ? '✓' : '✗', t);
const alla = res.every((r) => r[0]); console.log(alla ? `✓ test-a130: ${res.length} av ${res.length}` : `✗ test-a130: ${res.filter((r) => !r[0]).length} fel`);
process.exit(alla ? 0 : 1);
