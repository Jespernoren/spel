// DM2: ingen handladdning, fel färg går aldrig, inga rullhållare på skrivarna, gamla sparfiler flyttar rullarna till rätt torn. Kör: node verktyg/test-dm2.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('console', (m) => m.text().startsWith('DM2') && console.log(m.text())); p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
for (let i = 0; i < 60 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang)); i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
const H = (f, a) => p.evaluate(f, a); const ut = [];
await p.waitForTimeout(2000);
const har = (t) => H((t) => JSON.stringify(window.__printahem.textLogg()).includes(t), t);
const a = await H(() => { const h = window.__printahem, S = h.S; S.kapitel = 2; S.pappaBesok = true; S.strom = 50; S.kvarnStar = true;
  h.placera({ id: 'tk1', typ: 'petgkvarn', x: -16.3, z: 6, r: 0, r8: 0 }); h.placera({ id: 'tk2', typ: 'skrivarepetg', x: -10.5, z: 6, r: 0, r8: 0 });
  const pk = h.petgKvarn(), rod = h.skrivare.find((x) => x.gen === 4), bla = h.skrivare.find((x) => x.id === 'g1');
  h.laggTill('rulle', 2); h.laggTill('rulle2', 2);
  const f0 = [rod.fil, bla.fil, h.antalInv('rulle'), h.antalInv('rulle2')];
  h.valjTyp('rulle'); h.anvandSkrivare(rod);
  h.valjTyp('rulle2'); h.anvandSkrivare(bla);
  h.anvandSkrivare(rod);
  const f1 = [rod.fil, bla.fil, h.antalInv('rulle'), h.antalInv('rulle2')];
  h.valjTyp('rulle'); const rodFore = S.petg.rullar || 0; h.petgAktivera(pk); const rodBlaTorn = (S.petg.rullar || 0) - rodFore;
  h.valjTyp('rulle2'); h.petgAktivera(pk); const rodEfter = (S.petg.rullar || 0) - rodFore;
  const spolar = rod.mesh.children.some((c) => c === rod.spole) || bla.mesh.children.some((c) => c === bla.spole) || !!rod.spolstall || !!bla.spolstall;
  return { f0, f1, rodBlaTorn, rodEfter, spolar, inv2: h.antalInv('rulle2') }; });
console.log(JSON.stringify(a));
ut.push(['blå rulle i PETG-skrivaren laddas inte', a.f1[0] === a.f0[0] && a.f1[2] === a.f0[2]]);
ut.push(['röd rulle i Skrivare S laddas inte', a.f1[1] === a.f0[1] && a.f1[3] === a.f0[3]]);
ut.push(['tanken "tar bara röd PETG"', await har('Den här skrivaren tar bara röd PETG.')]);
ut.push(['tanken "tar bara blå plast"', await har('Den här skrivaren tar bara blå plast.')]);
ut.push(['tanken om slangen från tornet', await har('Rullarna kommer genom slangen från tornet')]);
ut.push(['blå rulle går inte in i röda tornet', a.rodBlaTorn === 0 && await har('Det här tornet tar bara röd PETG.')]);
ut.push([`röd rulle läggs i röda tornet (${a.rodEfter})`, a.rodEfter === 2 && a.inv2 === 0]);
ut.push(['inga spolar eller rullhållare på skrivarna', !a.spolar]);
// gammal sparfil: PETG-skrivaren har 2 blå rullar + 2 röda i en stor rullhållare, Skrivare S har 5 rullar
await H(() => { const h = window.__printahem, S = h.S, rod = h.skrivare.find((x) => x.gen === 4), bla = h.skrivare.find((x) => x.id === 'g1');
  S.kvarn.ut = 0; S.petg.rullar = 0; S.rullstall = 1; h.spar.spara(true);
  const K = h.spar.nyckel, d = JSON.parse(localStorage.getItem(K)); d.skrivare[rod.id] = { ...d.skrivare[rod.id], fil: 2000, filTyp: 'rulle', spolNiva: 2 }; d.skrivare[bla.id] = { ...d.skrivare[bla.id], fil: 5000, spolNiva: 3 };
  delete d.skrivare[bla.id].filTyp; localStorage.setItem(K, JSON.stringify(d)); Storage.prototype.setItem = () => {}; });
await p.reload(); await p.waitForTimeout(8000);
const m = await H(() => { const h = window.__printahem, S = h.S, rod = h.skrivare.find((x) => x.gen === 4), bla = h.skrivare.find((x) => x.id === 'g1');
  return { rodFil: rod.fil, blaFil: bla.fil, blaTorn: S.kvarn.ut, rodTorn: S.petg.rullar || 0, kista: JSON.stringify(S.kistan || []), kistaRullar: (S.kistan || []).filter((x) => x?.typ === 'rulle').reduce((a, x) => a + x.n, 0) }; });
console.log(JSON.stringify(m));
ut.push([`PETG-skrivarens blå rullar → blå tornet (${m.blaTorn / 1000} rullar i tornet)`, m.rodFil === 0 && m.rodTorn === 0]);
ut.push([`blå skrivarens rullar → blå tornet, resten i kistan (torn ${m.blaTorn / 1000}, kista ${m.kistaRullar})`, m.blaFil < 1000 && m.blaTorn / 1000 + m.kistaRullar === 7 && m.blaTorn <= 3 * 1000]);
// PETG-skrivaren printar bara med rött ur röda tornet
const r = await H(() => { const h = window.__printahem, S = h.S, rod = h.skrivare.find((x) => x.gen === 4); S.strom = 500; S.petg.rullar = 2; const blaFore = S.kvarn.ut;
  S.ritningar.push('petgtorn'); const ok = h.startaJobb(rod, { maskin: 'petgtorn' }); for (let i = 0; i < 40; i++) h.uppdateraSkrivare(rod, 0.5);
  return { ok: !!ok || !!rod.jobb, rodKvar: S.petg.rullar, blaOrord: S.kvarn.ut === blaFore, prog: rod.prog, jobb: rod.jobb, fil: rod.fil, vantar: rod.vantar }; });
console.log(JSON.stringify(r));
ut.push([`PETG-skrivaren drar röd PETG ur röda tornet (kvar ${r.rodKvar}) och rör inte blå tornet`, r.ok && r.rodKvar < 2 && r.blaOrord && (r.prog > 0 || r.jobb?.del > 1)]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
