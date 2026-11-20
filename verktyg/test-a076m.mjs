// Inkorg 18 (ersätter A-076 18:46): kvarnen KÖPS hos Ali för pengarna från två nyckelringar – ingen gåva, inget besök.
// Storebrors rulle ger exakt 2 nyckelringar, kvarnen kostar 2 × nyckelringens pris, kvarnen syns i butiken först när rullen är tom,
// köpknappen är låst med skälet tills pengarna räcker, och köpet är den enda vägen (0 SAK UTAN KÄLLA).
// Kör: node verktyg/test-a076m.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { window.__brott = []; window.__textLogg = (k, v, t) => { if (k === 'brott') window.__brott.push(v + ' ' + t); }; localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test', introSett: true })); });
await p.goto(url); await p.waitForTimeout(4000);
const H = (f, a) => p.evaluate(f, a);
await H(() => window.__startaSpel()); await p.waitForTimeout(2500);
for (let i = 0; i < 6; i++) { if (await H(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort'))) await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
const ut = [];
// skrivaren, cykeln och generatorn på plats, ström, och två printar av storebrors rulle
await H(() => { const P = window.__printahem, S = P.S; S.skyltUppe = true; S.skrivareLastad = true; S.skrivareStar = true; S.cykelStar = true; S.generatorStar = true; P.ritaStart(); P.byggOmCykeln(); S.steg = P.STEG.findIndex((x) => x.id === 'trampa'); });
await p.waitForTimeout(1500);
const fore = await H(() => { const P = window.__printahem, g1 = P.skrivare.find((x) => x.id === 'g1'); return { fil: g1.fil, gram: P.VAROR.nyckelring.gram, pris: P.VAROR.nyckelring.pris, kvarnPris: P.MASKINER.gammalkvarn.ritning }; });
ut.push([`storebrors rulle ${fore.fil} g = 2 × nyckelringen (${fore.gram} g)`, fore.fil === 2 * fore.gram]);
ut.push([`kvarnen kostar ${fore.kvarnPris} kr = 2 × nyckelringens pris (${fore.pris} kr)`, fore.kvarnPris === 2 * fore.pris]);
const butikHar = () => H(async () => { const P = window.__printahem; P.oppnaMarknad(); await new Promise((r) => setTimeout(r, 300)); const k = [...document.querySelectorAll('[data-kopnu]')].find((e) => /gammalkvarn/.test(e.dataset.kopnu)); k?.click(); await new Promise((r) => setTimeout(r, 300)); return { finns: !!k, text: (document.body.innerText.match(/[^\n]*sälj nyckelringarna[^\n]*/i) || [''])[0] }; });
const stangButik = () => H(() => window.__printahem.ui.stangButik());
let bu = await butikHar(); await stangButik();
ut.push([`före första printen: ingen kvarn i butiken (${bu.finns ? 'FINNS' : 'nej'})`, !bu.finns]);
await H(() => { window.__fullStrom = setInterval(() => { window.__printahem.trampa(0.5); }, 100); });   /* testet trampar hela tiden (testkroken), så skrivaren går */
for (let n = 1; n <= 2; n++) {
  await H(() => { const P = window.__printahem, g1 = P.skrivare.find((x) => x.id === 'g1'); g1.klar = null; P.startaDirekt(g1, { typ: 'nyckelring' }); P.S.strom = 999; });
  for (let i = 0; i < 300 && await H(() => !!window.__printahem.skrivare.find((x) => x.id === "g1").jobb); i++) await p.waitForTimeout(500);   /* headless ritar långsamt – en ring tar ca 40 s här */
  await H(() => { const P = window.__printahem, g1 = P.skrivare.find((x) => x.id === 'g1'); if (g1.klar) g1.mesh.userData.interaktion?.aktivera(); });   /* ta ut ringen, som ett klick på skrivaren */
  await p.waitForTimeout(600);
}
await p.waitForTimeout(1200);
const efter = await H(() => { const P = window.__printahem, g1 = P.skrivare.find((x) => x.id === "g1"); return { fil: g1.fil, slut: !!P.S.rullSlut, printat: P.S.stat.printat || 0, steg: P.STEG[P.S.steg]?.id, tankar: P.textLogg().filter((x) => /Slut på storebrors rulle/.test(x.text || x.t || JSON.stringify(x))).length }; });
ut.push([`två nyckelringar printade (${efter.printat}), rullen tom (${efter.fil} g), storebrors rulle slut: ${efter.slut} · tanken om affären mitt emot: ${efter.tankar ? 'ja' : 'NEJ'}`, efter.printat === 2 && efter.fil === 0 && efter.slut && efter.tankar > 0]);
const tredje = await H(() => { const P = window.__printahem, g1 = P.skrivare.find((x) => x.id === 'g1'); g1.klar = null; P.startaDirekt(g1, { typ: 'nyckelring' }); P.S.strom = 999; return true; });
await p.waitForTimeout(4000);
const t3 = await H(() => { const P = window.__printahem, g1 = P.skrivare.find((x) => x.id === 'g1'); return { klar: !!g1.klar, prog: +(g1.prog || 0).toFixed(2), printat: P.S.stat.printat || 0 }; });
ut.push([`en tredje ring av storebrors rulle blir inte klar (printat ${t3.printat})`, t3.printat === 2 && !t3.klar]);
await H(() => { const P = window.__printahem, g1 = P.skrivare.find((x) => x.id === 'g1'); g1.jobb = null; g1.prog = 0; P.S.mynt = 5; });
bu = await butikHar(); await stangButik();
ut.push([`rullen tom, 5 kr: kvarnen syns i butiken men är låst med skälet (${bu.text.slice(0, 90)})`, bu.finns && /sälj nyckelringarna/i.test(bu.text)]);
const kopFattig = await H(async () => { const P = window.__printahem; P.oppnaMarknad(); await new Promise((r) => setTimeout(r, 300)); const k = [...document.querySelectorAll('[data-kopnu]')].find((e) => /gammalkvarn/.test(e.dataset.kopnu)); k?.click(); await new Promise((r) => setTimeout(r, 500)); const r = { kopt: !!P.S.kvarnKopt, mynt: P.S.mynt }; P.ui.stangButik(); return r; });
ut.push([`köp med 5 kr: ingen kvarn (${kopFattig.kopt ? 'KÖPT' : 'nej'}), pengarna kvar (${kopFattig.mynt} kr)`, !kopFattig.kopt && kopFattig.mynt === 5]);
// sälj två nyckelringar → exakt priset till (5 + 2 × pris)
await H(() => { const P = window.__printahem; P.S.mynt = 5 + 2 * P.VAROR.nyckelring.pris; P.S.stat.salt = 2; });   // de två ringarna är sålda
const kop = await H(async () => { const P = window.__printahem; P.oppnaMarknad(); await new Promise((r) => setTimeout(r, 400)); const repl = (P.textLogg().map((x) => JSON.stringify(x)).find((x) => /köttkvarn/.test(x)) || '').replace(/^.*?(Pappas[^"]*).*$/, '$1'); const k = [...document.querySelectorAll('[data-kopnu]')].find((e) => /gammalkvarn/.test(e.dataset.kopnu)); k?.click(); await new Promise((r) => setTimeout(r, 600)); const r = { repl, kopt: !!P.S.kvarnKopt, mynt: P.S.mynt, hand: P.S.hotbar?.[P.S.vald]?.typ, svar: document.querySelector('.dc-ali-bubbla, .ph-ali-bubbla, [class*=bubbla]')?.textContent || '' }; P.ui.stangButik(); return r; });
ut.push([`Ali tar fram kvarnen: "${kop.repl.slice(0, 80)}"`, /köttkvarn/.test(kop.repl) && /kronor/.test(kop.repl)]);
ut.push([`köp med två ringars pengar: kvarnen i handen (${kop.hand}), ${kop.mynt} kr kvar · Ali: "${kop.svar.slice(0, 60)}"`, kop.kopt && kop.hand === 'byggsats:gammalkvarn' && kop.mynt === 5 && /nåt smart/.test(kop.svar)]);
const brott = await H(() => window.__brott.filter((x) => /^(SAK UTAN KÄLLA|EFTERSLÄPANDE KVITTENS)/.test(x)));
ut.push([`0 SAK UTAN KÄLLA och 0 EFTERSLÄPANDE KVITTENS (${brott.slice(0, 2).join(' · ') || 'inga'})`, !brott.length]);
const borta = await H(() => { const P = window.__printahem; return { besok: typeof P.aliBesok, skuld: 'kvarnSkuld' in P.S && P.S.kvarnSkuld > 0 }; });
ut.push([`inget besök över vägen och ingen skuld (${borta.besok}, skuld ${borta.skuld})`, borta.besok === 'undefined' && !borta.skuld]);
ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, fel.length === 0]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
await b.close(); process.exit(ut.every((x) => x[1]) ? 0 : 1);
