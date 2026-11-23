// Inkorg 70 (A-125): Rolf ritar själv – servetten visar saken, servetten är ritningen (gratis i printkortet),
// en ritning som lagts i skrivaren stannar där, och Ali säljer aldrig Rolfs önskningar.
// Kör: node verktyg/test-a125.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
const mapp = new URL('./a125/', import.meta.url).pathname; fs.mkdirSync(mapp, { recursive: true });
async function oppna(fil) {
  const spar = fs.readFileSync(new URL('./sparfiler/' + fil, import.meta.url), 'utf8');
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(fil + ': ' + e.message));
  await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
  await p.goto(url); await p.waitForTimeout(5000);
  await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
  await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]), .ph-kapkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
  await p.waitForTimeout(1200); return p;
}

// 1. de tre första önskningarna: servetten visar saken, i handen, gratis i printkortet, Ali säljer den inte
{ const p = await oppna('start-dag3.json');
  const varor = await p.evaluate(() => window.__printahem.rolfVaror());
  for (let i = 0; i < 3; i++) {
    const v = varor[i];
    const r = await p.evaluate(async (v) => { const P = window.__printahem, S = P.S;
      S.ritningar = S.ritningar.filter((x) => x !== 'gava:' + v); S.rolf.aktiv = true;
      const mynt = S.mynt; P.geServett(v); await new Promise((x) => setTimeout(x, 300));
      const sv = P.servett(), bild = P.renderaIkon('byggsats:servett', 320).url;
      return { sv, bild, mynt0: mynt, mynt1: S.mynt, gava: S.ritningar.includes('gava:' + v), ali: P.aliKopNamn().filter((x) => /Rolfs önskan/.test(x) || new RegExp(P.S && v).test(x)) }; }, v);
    fs.writeFileSync(mapp + `servett-${i + 1}-${v}.png`, Buffer.from(r.bild.split(',')[1], 'base64'));
    ut.push([`önskan ${i + 1} (${v}): servetten är en skiss av saken (${r.sv.skiss} streck) och ligger i handen`, r.sv.for === v && r.sv.skiss > 6 && r.sv.iHand === 1]);
    ut.push([`önskan ${i + 1}: saken finns i printkortet utan köp (${r.mynt0} → ${r.mynt1} kr)`, r.gava && r.mynt0 === r.mynt1]);
    ut.push([`önskan ${i + 1}: Ali har inget kort för Rolfs önskan (${r.ali.join(' · ') || 'inget'})`, !r.ali.length]);
  }
  // 2. servetten i skrivaren stannar där – ur handen, liten lapp på skrivaren
  const r = await p.evaluate(async () => { const P = window.__printahem; P.valjTyp?.('byggsats:servett'); P.anvandSkrivareNr(0); await new Promise((x) => setTimeout(x, 500));
    document.querySelector('.ui-stang, [data-stang]')?.click(); return P.servett(); });
  ut.push([`servetten i skrivaren: borta ur handen (${r.iHand}) och fastklämd på skrivaren (${r.lapp})`, r.iHand === 0 && r.lapp && !!r.pa]);
  { const u = await p.evaluate(() => window.__printahem.bildAvSkrivare(0)); fs.writeFileSync(mapp + 'servett-pa-skrivaren.png', Buffer.from(u.split(',')[1], 'base64')); }
  await p.close(); }

// 3. 0 kort "Rolfs önskan" hos Ali på dag 1–23, med varje önskan aktiv
for (const fil of ['start-dag1.json', 'start-dag3.json', 'start-dag5.json', 'dag8.json', 'dag14.json', 'start-dag18.json', 'bot-dag22.json']) {
  const p = await oppna(fil);
  const r = await p.evaluate(() => { const P = window.__printahem, S = P.S, hitt = [];
    for (let i = 0; i < P.rolfVaror().length; i++) { S.rolf.i = i; S.rolf.aktiv = true; S.rolf.jobb = null; hitt.push(...P.aliKopNamn().filter((x) => /Rolfs önskan|3D-modell: (Ölhållare|Flasköppnare|Grillspade|Tomte)/i.test(x))); }
    return hitt; });
  ut.push([`${fil}: 0 kort för Rolfs önskan hos Ali (${r.slice(0, 2).join(' · ') || 'inga'})`, !r.length]);
  await p.close();
}

await b.close();
for (const [t, ok] of ut) console.log((ok ? '✅ ' : '❌ ') + t);
if (fel.length) console.log('sidfel:', fel.slice(0, 5));
process.exit(ut.every(([, ok]) => ok) && !fel.length ? 0 : 1);
