// Inkorg 69 p.1 (A-124): låsta platser som lockar – lappen vid låset, ett ljud eller sken på håll, din replik när du läser lappen
// och en nyfiken replik första gången du ser platsen. Ingen text säger vad som finns där (SPOILER). Kartan (p.2) väntar på mockup.
// Kör: node verktyg/test-a124.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
import { PLATSER } from '../spel/printa-hem/story.js';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
const mapp = new URL('./a124/', import.meta.url).pathname; fs.mkdirSync(mapp, { recursive: true });
async function oppna(fil) {
  const spar = fs.readFileSync(new URL('./sparfiler/' + fil, import.meta.url), 'utf8');
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(fil + ': ' + e.message));
  await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
  await p.goto(url); await p.waitForTimeout(5000);
  await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
  await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]), .ph-kapkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
  await p.waitForTimeout(1200); return p;
}
const spara = (u, namn) => fs.writeFileSync(mapp + namn, Buffer.from(u.split(',')[1], 'base64'));

// 1. dag 2 kväll: alla fyra platserna är låsta, har lapp och ljud/sken; gå fram till varje lapp och titta mot platsen
{ const p = await oppna('start-dag2.json');
  await p.evaluate(() => { window.__printahem.tidTest?.(18 * 60 + 30); });
  await p.waitForTimeout(1500);
  const fore = await p.evaluate(() => window.__printahem.platser());
  ut.push([`dag 2: ${fore.length} låsta platser, alla med lapp (${fore.map((x) => x.id + ': ' + x.skylt).join(' · ')})`, fore.length === 4 && fore.every((x) => !x.oppen && x.synlig && x.skylt)]);
  ut.push([`dag 2 kväll: skenet i gruvöppningen syns (${fore.find((x) => x.id === 'gruvan')?.glitter})`, fore.find((x) => x.id === 'gruvan')?.glitter === true]);
  for (const pl of fore) {
    await p.evaluate((pl) => { const P = window.__printahem, sp = P.spelare; sp.pos.set(pl.sx + 1.2 * Math.sign(pl.px - pl.sx || 1) * 0, sp.pos.y, pl.sz + (pl.id === 'angen' ? 0 : 1.4)); if (pl.id === 'angen') sp.pos.x = pl.sx - 1.4; sp.yaw = Math.atan2(-(pl.mx - sp.pos.x), -(pl.mz - sp.pos.z)); }, pl);
    await p.waitForTimeout(2200);
    await p.evaluate((pl) => { const P = window.__printahem, sp = P.spelare; sp.pos.set(pl.px + (pl.id === 'angen' ? -2 : 0), sp.pos.y, pl.pz + (pl.id === 'angen' ? 0 : 2)); sp.yaw = Math.atan2(-(pl.mx - sp.pos.x), -(pl.mz - sp.pos.z)); }, pl);
    await p.waitForTimeout(2200);
  }
  await p.waitForTimeout(9000);
  const efter = await p.evaluate(() => ({ pl: window.__printahem.platser(), t: window.__printahem.textLogg().filter((e) => e.kalla === 'tanke' || e.kalla === 'sak').map((e) => e.text), brott: window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && /SPOILER|PLATS UTAN|OKÄNT ORD/.test(e.vem)).map((e) => e.vem + ': ' + e.text) }));
  for (const pl of PLATSER) {
    const x = efter.pl.find((y) => y.id === pl.id), las = typeof pl.las === 'function' ? null : pl.las;
    ut.push([`${pl.id}: lappen lästes (${x.las ? 'dag ' + x.las : 'nej'}) och platsen sågs på nära håll (${x.ny ? 'dag ' + x.ny : 'nej'})`, !!x.las && !!x.ny]);
    if (las) ut.push([`${pl.id}: "${las}" sades en gång`, efter.t.filter((t) => t.includes(las)).length >= 1 && new Set(efter.t.filter((t) => t.includes(las))).size === 1]);
  }
  ut.push([`0 SPOILER, 0 PLATS UTAN LOCKELSE, 0 OKÄNT ORD (${efter.brott.slice(0, 3).join(' · ') || 'inga'})`, !efter.brott.length]);
  // bilderna: grinden till tippen och gruvöppningen på kvällen dag 2
  { const g = fore.find((x) => x.id === 'tippen'); spara(await p.evaluate((g) => window.__printahem.bildFran(g.sx + 4, 1.7, g.sz + 3, g.sx, 1.0, g.sz - 1), g), 'grinden-kvall-dag2.png'); }
  { const g = fore.find((x) => x.id === 'gruvan'); spara(await p.evaluate((g) => window.__printahem.bildFran(g.px + 1, 1.7, g.pz + 4, g.mx, g.my + 1, g.mz), g), 'gruvoppningen-kvall-dag2.png');
    spara(await p.evaluate((g) => window.__printahem.bildFran(g.mx, g.my + 2, g.mz + 9, g.mx, g.my + 1, g.mz), g), 'gruvoppningen-nara-kvall-dag2.png'); }
  { const g = fore.find((x) => x.id === 'floden'); spara(await p.evaluate((g) => window.__printahem.bildFran(g.sx + 2, 1.6, g.sz + 3, g.sx, 1.0, g.sz), g), 'igensvetsade-grinden-kvall-dag2.png'); }
  { const g = fore.find((x) => x.id === 'angen'); spara(await p.evaluate((g) => window.__printahem.bildFran(g.sx - 3, 1.6, g.sz + 2, g.sx, 1.0, g.sz), g), 'staketet-ost-kvall-dag2.png'); }
  await p.close(); }

// 2. platserna öppnas av sina steg: lappen och skenet försvinner
{ const p = await oppna('start-dag18.json');
  const r = await p.evaluate(async () => { await new Promise((x) => setTimeout(x, 1200)); return window.__printahem.platser().map((x) => `${x.id}:${x.oppen ? 'öppen' : 'låst'}/${x.synlig ? 'lapp' : '–'}`); });
  ut.push([`dag 18: tippen, gruvan och floden är öppna utan lapp (${r.join(' · ')})`, ['tippen', 'gruvan', 'floden'].every((id) => r.some((x) => x.startsWith(id + ':öppen/–')))]);
  await p.close(); }

await b.close();
for (const [t, ok] of ut) console.log((ok ? '✅ ' : '❌ ') + t);
if (fel.length) console.log('sidfel:', fel.slice(0, 5));
process.exit(ut.every(([, ok]) => ok) && !fel.length ? 0 : 1);
