// test-a131 (inkorg 76): utvecklarläget – börja på valfri dag.
//  a) ?utv i en webbläsare utan kod: Jesper väljer en kod, rutan "Börja på …" kommer
//  b) dag 7 och dag 12 (inkorg 77: 15 dagar): spelet startar på rätt morgon, 0 sidfel
//  c) Ge 500 kr, Hoppa till nästa steg, Visa steg
//  d) barnens sparning är orörd efteråt
//  e) Shift+U fem gånger på startsidan (ny flik) frågar koden; fel kod släpper inte in, rätt kod gör det
// Kör: node verktyg/test-a131.mjs   (index.html som modul via egen server)
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';

const REPO = new URL('..', import.meta.url).pathname, UT = path.join(REPO, 'verktyg/a131');
fs.mkdirSync(UT, { recursive: true });
const TYPER = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.webp': 'image/webp', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => { const p = decodeURIComponent(new URL(req.url, 'http://x').pathname); let f = path.join(REPO, p); try { if (fs.statSync(f).isDirectory()) f = path.join(f, 'index.html'); res.writeHead(200, { 'content-type': TYPER[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); } catch { res.writeHead(404); res.end(); } });
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const BAS = `http://127.0.0.1:${server.address().port}/spel/printa-hem/index.html`;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'] });
const THREE_JS = fs.readFileSync('/home/claude/verktyg/node_modules/three/build/three.module.js');
const res = []; const ok = (n, v, info = '') => res.push([v, `${n}${info ? ' – ' + info : ''}`]);
const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });
await ctx.route(/cdn\.jsdelivr\.net\/npm\/three@0\.170\.0/, (r) => r.fulfill({ body: THREE_JS, contentType: 'text/javascript' }));
const barn = fs.readFileSync(path.join(REPO, 'verktyg/sparfiler/start-dag3.json'), 'utf8');
await ctx.addInitScript((s) => { if (!localStorage.getItem('__t')) { localStorage.setItem('__t', '1'); localStorage.setItem('spar:printahem2:v1', s); } }, barn);
const p = await ctx.newPage(); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
const meny = () => p.waitForFunction(() => document.querySelector('.br-starta'), null, { timeout: 40000 });

/* a) ?utv utan kod */
await p.goto(BAS + '?utv'); await meny(); await p.waitForSelector('.ph-utvkod', { timeout: 10000 });

const utanTid = (j) => { const d = JSON.parse(j || '{}'); delete d.sparadTid; delete d.stegNyckel; return JSON.stringify(d); };
const fraga = await p.evaluate(() => document.querySelector('.ph-utvkod')?.innerText || '');
await p.fill('.ph-utvkod [data-kod]', 'skrot42'); await p.waitForTimeout(1000);
const barnFore = await p.evaluate(() => localStorage.getItem('spar:printahem2:v1'));   /* som den låg när utvecklarläget slogs på */
await p.click('.ph-utvkod [type=submit]');
await p.waitForSelector('.ph-utv', { timeout: 40000 });
await p.screenshot({ path: path.join(UT, 'utv-rutan.png') });
const rutan = await p.evaluate(() => ({ dagar: document.querySelectorAll('[data-utvdag]').length, text: document.querySelector('.ph-utv')?.innerText || '', utv: document.body.classList.contains('ph-utvlage') }));
ok('a) ?utv första gången: Jesper väljer en kod', /Välj en kod/.test(fraga));
ok('a) rutan "Börja på …" med alla dagar och kapitlen', rutan.dagar === 15 && /Kapitel 2/.test(rutan.text) && /Julafton/.test(rutan.text) && rutan.utv, `${rutan.dagar} dagar`);

/* b) dag 7 och dag 12 */
for (const d of [7, 12]) {
  if (!(await p.$('.ph-utv'))) { await p.keyboard.down('Shift'); await p.keyboard.press('KeyU'); await p.keyboard.up('Shift'); await p.waitForSelector('.ph-utv', { timeout: 5000 }); }
  await p.click(`[data-utvdag="${d}"]`);
  /* inkorg 76 rest a: dagen börjar med morgonsidan (eller kapitelkortet), inte mitt på dagen */
  const morgon = await p.waitForFunction((d) => window.__printahem?.S?.dag === d && [...document.querySelectorAll('button')].some((k) => /FORTSÄTT/i.test(k.innerText) && k.offsetParent), d, { timeout: 60000 }).then(() => true).catch(() => false);
  const kl = await p.evaluate(() => ({ vaken: window.__printahem.S.vakenTid, kort: document.body.innerText.match(/\d+ dagar? till jul|Julafton/)?.[0] || '' }));
  ok(`b) dag ${d}: morgonsidan visas först`, morgon && kl.vaken < 5, `${kl.kort} · vaken ${Math.round(kl.vaken)} s`);
  await p.screenshot({ path: path.join(UT, `dag${d}-morgon.png`) });
  await p.evaluate(() => [...document.querySelectorAll('button')].find((k) => /FORTSÄTT/i.test(k.innerText) && k.offsetParent)?.click());
  await p.waitForFunction(() => window.__printahem?.ui?.igang, null, { timeout: 30000 }).catch(() => {});
  await p.waitForTimeout(2500);
  /* inkorg 76 rest b: datumet står en gång i HUD:en */
  const datum = await p.evaluate(() => { const t = (document.querySelector('.ui-hud, .fp-hud, #hud')?.innerText || document.body.innerText).toLowerCase(); return (t.match(/\d+ december/g) || []).length; });
  ok(`b) dag ${d}: datumet en gång i HUD:en`, datum <= 1, `${datum} gånger`);
  const r = await p.evaluate(() => ({ dag: window.__printahem.S.dag, steg: window.__printahem.S.steg, id: window.__printahem.STEG[window.__printahem.S.steg]?.id, igang: window.__printahem.ui.igang }));
  await p.screenshot({ path: path.join(UT, `dag${d}.png`) });
  ok(`b) dag ${d}: spelet startar på rätt morgon`, r.dag === d && r.igang, `dag ${r.dag}, steg ${r.steg} ${r.id}`);
}
/* c) knapparna */
await p.keyboard.down('Shift'); await p.keyboard.press('KeyU'); await p.keyboard.up('Shift'); await p.waitForSelector('.ph-utv', { timeout: 5000 });
const fore = await p.evaluate(() => ({ mynt: window.__printahem.S.mynt, steg: window.__printahem.S.steg }));
await p.click('[data-utv500]'); await p.click('[data-utvnasta]'); await p.click('[data-utvsteg]');
const efter = await p.evaluate(() => ({ mynt: window.__printahem.S.mynt, steg: window.__printahem.S.steg, visas: document.querySelector('.ph-utv .steg')?.textContent || '' }));
ok('c) Ge 500 kr', efter.mynt === fore.mynt + 500, `${fore.mynt} → ${efter.mynt}`);
ok('c) Hoppa till nästa steg', efter.steg === fore.steg + 1, `${fore.steg} → ${efter.steg}`);
ok('c) Visa vilket steg jag är på (id ur story.js)', /steg \d+: \S+/.test(efter.visas), efter.visas.slice(0, 80));
await p.screenshot({ path: path.join(UT, 'utv-knapparna.png') });
await p.evaluate(() => window.__printahem.spar.spara(true));

/* d) barnens sparning */
const lager = await p.evaluate(() => ({ barn: localStorage.getItem('spar:printahem2:v1'), utv: JSON.parse(localStorage.getItem('spar:printahem2:utv') || '{}').dag }));
const orord = utanTid(lager.barn) === utanTid(barnFore);   /* sparadTid kan stämplas av barnens egen sida innan omladdningen – innehållet ska vara samma */
const skiljer = orord ? [] : (() => { const a = JSON.parse(barnFore), c = JSON.parse(lager.barn); return Object.keys({ ...a, ...c }).filter((k) => JSON.stringify(a[k]) !== JSON.stringify(c[k])); })();
ok('d) barnens sparning är orörd', orord, orord ? 'samma innehåll som när utvecklarläget slogs på' : 'ÄNDRAD: ' + skiljer.join(', '));
ok('d) utvecklarläget sparar på sin egen plats', lager.utv === 12, `spar:printahem2:utv dag ${lager.utv}`);
ok('a–d) 0 sidfel', !fel.length, fel[0]);

/* e) ny flik (inte i utvecklarläget): Shift+U ×5 */
await p.click('[data-utvlamna]'); await meny(); await p.waitForTimeout(800);
const S0 = await p.evaluate(() => ({ dag: window.__printahem.S.dag, utv: document.body.classList.contains('ph-utvlage') }));
ok('e) Lämna utvecklarläget: barnens spel är tillbaka', S0.dag === 3 && !S0.utv, `dag ${S0.dag}`);
for (let i = 0; i < 5; i++) { await p.keyboard.down('Shift'); await p.keyboard.press('KeyU'); await p.keyboard.up('Shift'); await p.waitForTimeout(120); }
await p.waitForSelector('.ph-utvkod', { timeout: 5000 }).catch(() => {});
const fraga2 = await p.evaluate(() => document.querySelector('.ph-utvkod')?.innerText || '');
await p.fill('.ph-utvkod [data-kod]', 'fel'); await p.click('.ph-utvkod [type=submit]'); await p.waitForTimeout(400);
const felSynd = await p.evaluate(() => !document.querySelector('.ph-utvkod .fel')?.hidden && !document.querySelector('.ph-utv'));
await p.fill('.ph-utvkod [data-kod]', 'skrot42'); await p.click('.ph-utvkod [type=submit]');
const inne = await p.waitForSelector('.ph-utv', { timeout: 40000 }).then(() => true).catch(() => false);
ok('e) Shift+U fem gånger frågar koden', /Skriv koden/.test(fraga2));
ok('e) fel kod släpper inte in, rätt kod gör det', felSynd && inne);
ok('e) 0 sidfel', !fel.length, fel[0]);
await b.close(); server.close();
for (const [v, t] of res) console.log(v ? '✓' : '✗', t);
const alla = res.every((r) => r[0]); console.log(alla ? `✓ test-a131: ${res.length} av ${res.length}` : `✗ test-a131: ${res.filter((r) => !r[0]).length} fel`);
process.exit(alla ? 0 : 1);
