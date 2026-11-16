// DO/DM/DK: linjernas byggsatser, pirran en i taget, containern matar själv, tornen matar skrivarna, materialen från Rolf. Kör: node verktyg/test-pirra.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
for (let i = 0; i < 60 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang)); i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
const H = (f, a) => p.evaluate(f, a); const ut = [];
await p.waitForTimeout(2000);
// DK: nytt spel – exakt 2 tunnor och 1 kanot på tippen
const d1 = await H(() => { const h = window.__printahem; return { t: h.skrapLista.filter((x) => x.userData.sort === 'tunna' || x.userData.sort === 'rodback').length, k: h.skrapLista.filter((x) => x.userData.sort === 'kajak').length }; });
ut.push([`DK: nytt spel har 2 tunnor (${d1.t}) och 1 kanot (${d1.k})`, d1.t === 2 && d1.k === 1]);
const r = await H(() => { const h = window.__printahem, S = h.S; S.kapitel = 2; S.pappaBesok = true; S.sackkarra = true; S.strom = 12; h.laggTill('sackkarra');
  h.placera({ id: 'tk1', typ: 'petgkvarn', x: -16.3, z: 6, r: 0, r8: 0 }); h.placera({ id: 'tk2', typ: 'skrivarepetg', x: -10.5, z: 6, r: 0, r8: 0 }); h.placera({ id: 'tk3', typ: 'skrivare2', x: -8.7, z: 11.5, r: 0, r8: 0 });
  const pk = h.placerade.find((x) => x.typ === 'petgkvarn'), petgSk = h.skrivare.find((x) => x.gen === 4), blaSk = h.skrivare.find((x) => x.gen !== 4 && x.gen !== 5);
  S.ritningar.push('petgtorn', 'petgcontainer'); petgSk.fil = 3000; blaSk.fil = 3000;
  const bla = h.startaJobb(blaSk, { maskin: 'petgtorn' }), rod = h.startaJobb(petgSk, { maskin: 'petgtorn' });
  // pirran: en tunna i taget
  for (let i = 0; i < 3; i++) h.laggSkrap(-26 + i * 1.5, 18, h.variantFor('tunna'), 0);
  const tunnor = h.skrapLista.filter((x) => x.userData.sort === 'tunna').slice(-3);
  h.valjTyp('sackkarra'); h.plockaSkrap(tunnor[0]); h.plockaSkrap(tunnor[1]);
  const enPaPirran = S.karraLast.length === 1;
  // utan container: en tunna åt gången
  h.petgAktivera(pk); const ko1 = S.petg.ko; h.plockaSkrap(tunnor[1]); h.petgAktivera(pk); const avvisad = S.karraLast.length === 1 && S.petg.ko === ko1;
  return { bla, rod: !!rod, enPaPirran, avvisad };
});
ut.push(['DO: Rulltorn XL går inte på blå skrivare', !r.bla]);
ut.push(['DO: Rulltorn XL går på PETG-skrivaren', r.rod]);
ut.push(['DO: pirran lastar bara en tunna', r.enPaPirran]);
ut.push(['DO: utan container tar kvarnen en tunna åt gången', r.avvisad]);
await p.waitForTimeout(1500);
ut.push(['DO: tanken om röd byggsats på blå skrivare', await H(() => JSON.stringify(window.__printahem.textLogg()).includes('Den här ska vara röd'))]);
const c = await H(() => { const h = window.__printahem, S = h.S, pk = h.placerade.find((x) => x.typ === 'petgkvarn'), petgSk = h.skrivare.find((x) => x.gen === 4);
  S.petg.ko = 0; S.petg.ut = 0; S.petg.rullar = 0; S.petg.container = true; S.petg.torn = true; S.petg.cont = []; S.karraLast = []; petgSk.jobb = null; petgSk.fil = 0;
  for (let i = 0; i < 3; i++) { h.laggSkrap(-26 + i * 1.5, 20, h.variantFor('tunna'), 0); const t = h.skrapLista[h.skrapLista.length - 1]; h.valjTyp('sackkarra'); h.plockaSkrap(t); h.petgAktivera(pk); }
  const iCont = S.petg.cont.length;
  let gjorda = 0; const f0 = petgSk.fil;
  for (let i = 0; i < 400; i++) { S.strom = 12; const r0 = S.petg.rullar; h.uppdateraPetg(0.25); }
  return { iCont, rullar: S.petg.rullar, fil: petgSk.fil, till: h.filTillg(petgSk), tot: S.petg.rullar + Math.round(petgSk.fil / 1000) };
});
ut.push([`DO: tre tunnor i containern (${c.iCont}/6)`, c.iCont === 3]);
ut.push([`DO/DM: kvarnen mal dem själv – ca 9 rullar (${c.tot}: ${c.rullar} i tornet, ${Math.round(c.fil)} g i PETG-skrivaren, skrivaren når ${c.till} g genom slangen)`, c.tot >= 8 && c.till >= 8000]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
