// A-056: guldet i gamla grustaget – grinden, Göran, Bengt-Åkes brevlåda, kapskivan, Rolf kapar grinden, vaskning, hackan och klumpen. Kör: node verktyg/test-a056.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
for (let i = 0; i < 25; i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); const top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); if (r.width && top && (top === k || k.contains(top)) && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); break; } } });
  await p.waitForTimeout(1000);
}
const ut = [];
const vy = async (x, z, tx, tz, namn) => { await p.evaluate(([x, z, tx, tz]) => { const h = window.__printahem; h.spelare.pos.x = x; h.spelare.pos.z = z; h.tittaMot(tx, tz, 0.4, { tvang: true }); }, [x, z, tx, tz]); await p.waitForTimeout(3000); await p.screenshot({ path: `verktyg/test-a056-${namn}.png` }); };
// dag 2: grinden, inget glitter
await p.evaluate(() => { const h = window.__printahem; h.S.dag = 2; h.ritaGrustag(); });
await vy(-36, 3, -42, 3, 'grind-dag2');
const g0 = await p.evaluate(() => window.__printahem.grop.userData.glitter.visible);
ut.push([`dag 2: grinden syns, inget glitter (${g0})`, g0 === false]);
// dag 16: Göran och flagan
await p.evaluate(() => { const h = window.__printahem, S = h.S; S.dag = 16; S.kapitel = 4; S.guldAder = 16; h.laggTill('guldflaga'); h.ritaGrustag(); });
await vy(-38.5, 1, -47, 1, 'glitter-dag16');
const r1 = await p.evaluate(() => { const h = window.__printahem, S = h.S; const i = S.hotbar.findIndex((x) => x?.typ === 'guldflaga'); if (i >= 0) h.byt(i); const ok = h.bengtLadaHandlare.some((x) => x.aktivera()); return { ok, flaga: S.flagaBengt }; });
ut.push([`guldflagan i Bengt-Åkes brevlåda (dag ${r1.flaga})`, r1.ok && r1.flaga === 16]);
for (let i = 0; i < 4 && !(await p.evaluate(() => window.__printahem.kand('grustaget'))); i++) { await p.keyboard.press('Escape'); await p.waitForTimeout(1500); }
const r2 = await p.evaluate(() => { const h = window.__printahem, S = h.S; return { recept: S.ritningar.includes('recept:kapskiva'), kand: h.kand('grustaget') }; });
ut.push([`Rolf vill ha en kapskiva (recept ${r2.recept}); "grustaget" blir känt när brevet läses (nu: ${r2.kand})`, r2.recept]);
// dag 17: Rolf kapar grinden
await p.evaluate(() => { const h = window.__printahem, S = h.S; S.kapskivaHosRolf = 16; S.dag = 17; h.spelare.pos.x = -36; h.spelare.pos.z = 3; h.rolfKaparGrinden(); });
await p.waitForTimeout(500); await p.screenshot({ path: 'verktyg/test-a056-rolf-kapar.png' });
await p.waitForTimeout(3500);
const r3 = await p.evaluate(() => { const h = window.__printahem, S = h.S; return { kapad: S.grindKapad, panna: h.antalInv('vaskpanna'), minX: h.spelare.granser.minX }; });
ut.push([`grinden kapad dag ${r3.kapad}, Birgittas panna i handen (${r3.panna}), man kan gå in (minX ${r3.minX})`, r3.kapad === 17 && r3.panna >= 1 && r3.minX < -46]);
await vy(-42, 7, -52, 7, 'backen-adern');
// vaska tills ringen kommer, hackan, malm, klumpen
const r4 = await p.evaluate(async () => { const h = window.__printahem, S = h.S; for (let i = 0; i < 9 && !S.ringFunnen; i++) h.vaskSlapp(1.9);
  h.laggTill('hacka'); const i = S.hotbar.findIndex((x) => x?.typ === 'hacka'); if (i >= 0) h.byt(i);
  h.gruvTillGrotta(); h.bergYta.userData.interaktion.aktivera();   /* A-075: ådern sitter i grottan längst ner i gruvan */
  h.gruvAk(false); h.gruvFard() && (h.gruvFard().t = 0);   /* upp igen innan extraktorn ställs */
  for (let k = 0; k < 50 && h.gruvLage(); k++) await new Promise((x) => setTimeout(x, 200));
  h.placera({ id: 'ex1', typ: 'extraktor', x: h.spelare.pos.x + 1, z: h.spelare.pos.z, r: 0, r8: 0 });
  for (let k = 0; k < 8 && !h.antalInv('guldklump'); k++) await new Promise((x) => setTimeout(x, 1000));
  return { ring: S.ringFunnen, malm: S.forstaKlump || h.antalInv('malm'), klump: h.antalInv('guldklump') }; });
ut.push([`ringen hittas i bäcken (${r4.ring}), hackan bryter malm och extraktorn ger första klumpen (${r4.klump})`, r4.ring && r4.klump >= 1]);
const r5 = await p.evaluate(async () => { const h = window.__printahem, S = h.S; const i = S.hotbar.findIndex((x) => x?.typ === 'guldklump'); if (i >= 0) h.byt(i); h.bengtLadaHandlare.some((x) => x.aktivera()); S.dag = 18; for (let k = 0; k < 5 && !S.klumpTack; k++) await new Promise((x) => setTimeout(x, 1000)); return { lagd: S.klumpBengt, tack: S.klumpTack }; });
ut.push([`klumpen i brevlådan (dag ${r5.lagd}) och tacket dagen efter (dag ${r5.tack})`, r5.lagd === 17 && r5.tack === 18]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
