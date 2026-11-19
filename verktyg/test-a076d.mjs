// A-076 tillägg 11:45: cykeln och generatorn var för sig, på konturerna, kabeln till skrivaren, inga bruna boxar, ingen vit låda,
// en trampa-uppmaning, kontrollerna i ordning, Esc i tio lägen och hammaren. Kör: node verktyg/test-a076d.mjs [url] → verktyg/a076/d-*.png
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('a076d')) { sessionStorage.setItem('a076d', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url); await p.waitForTimeout(5000);
const H = (f, a) => p.evaluate(f, a);
await p.click('.br-starta'); await p.waitForTimeout(2500); await p.keyboard.press('Enter'); await p.waitForTimeout(12000);
for (let i = 0; i < 60 && (await H(() => !!document.querySelector('.ph-dagnotis') || window.__printahem.pratar())); i++) await p.waitForTimeout(500);
const titta = (x, z, d = 2.4, pitch = -0.4) => H(([x, z, d, pitch]) => { const sp = window.__printahem.spelare; sp.pos.set(x + d, sp.pos.y, z + d); sp.yaw = Math.atan2(-(x - sp.pos.x), -(z - sp.pos.z)); sp.pitch = pitch; }, [x, z, d, pitch]);
const C = await H(() => ({ ...window.__printahem.CYKEL_RUTA }));
// förutsättning: skrivaren står, gåtan om strömmen
await H(() => { const P = window.__printahem, S = P.S; S.skrivareLastad = S.skrivareStar = true; S.stromHjalp = true; S.steg = P.STEG.findIndex((x) => x.id === 'bygg'); P.ritaStart(); });
await p.waitForTimeout(1000);
// 1. generatorn i handen, cykeln utan generator i handen
await H(() => { const P = window.__printahem, S = P.S; S.generatorTagen = true; const i = P.laggTill('byggsats:generator'); P.byt(i); P.ritaStart(); });
await titta(C.x, C.z); await p.waitForTimeout(1500); await p.screenshot({ path: dir + 'd-generatorn-i-handen.png' });
await H(() => { const P = window.__printahem, S = P.S; S.cykelBuren = true; const i = P.laggTill('cykelS'); P.byt(i); P.ritaStart(); });
await p.waitForTimeout(1500); await p.screenshot({ path: dir + 'd-cykeln-i-handen.png' });
const h1 = await H(() => { const P = window.__printahem; let gul = 0; P.hand.grupp.traverse((o) => { let v = true; for (let x = o; x; x = x.parent) if (!x.visible) v = false; if (v && o.isMesh && o.material?.color?.getHex?.() === 0xf1c40f) gul++; }); return { typ: P.valdTyp(), gul }; });
ut.push([`cykeln i handen utan generatorn (${h1.typ}, gula delar i handen: ${h1.gul})`, h1.typ === 'cykelS' && h1.gul === 0]);
// 2. ingen vit låda när man siktar på platsen
const ram = await H(() => { const P = window.__printahem; P.interaktor.hovrad = null; const r = P.interaktor.ram; P.interaktor.mal.includes(P.startYta); return !!P.startYta.userData.interaktion?.utanRam; });
ut.push([`platsen har ingen vit låda (utanRam ${ram})`, ram]);
// 3. båda ställda vid konturerna (cykeln först, sedan generatorn) – generatorn står kvar tills båda står, glider sedan upp
await H(() => { const P = window.__printahem, S = P.S; const i = P.S.hotbar.findIndex((x) => x?.typ === 'cykelS'); P.byt(i); });
const fore = await H(() => { const P = window.__printahem; return P.genStar.position.toArray(); });
await H(() => { const P = window.__printahem; P.startYta.userData.interaktion.aktivera(); });
await p.waitForTimeout(800);
const hand2 = await H(() => window.__printahem.valdTyp());
ut.push([`efter att cykeln ställts är handen tom (${hand2 || 'tom'}) – ingen sak dyker upp i handen av sig själv`, !hand2]);
await H(() => { const P = window.__printahem; const i = P.S.hotbar.findIndex((x) => x?.typ === 'byggsats:generator'); P.byt(i); P.ritaStart(); P.startYta.userData.interaktion.aktivera(); });
await p.waitForTimeout(400); const g0 = await H(() => window.__printahem.genStar.position.toArray());
await titta(C.x, C.z, 2.6, -0.35); await p.screenshot({ path: dir + 'd-bada-pa-plats.png' });
await p.waitForTimeout(3500);
const k = await H(() => { const P = window.__printahem, S = P.S, kab = P.startKabel; kab.geometry.computeBoundingBox(); const bb = kab.geometry.boundingBox; const g = P.skrivare.find((x) => x.id === 'g1').mesh.getWorldPosition(new P.THREE.Vector3()); const pos = kab.geometry.attributes.position; let min = 99; for (let i = 0; i < pos.count; i++) min = Math.min(min, Math.hypot(pos.getX(i) - g.x, pos.getZ(i) - g.z)); return { ombyggd: !!S.cykelOmbyggd, synlig: kab.visible, narSkrivaren: +min.toFixed(2) }; });
ut.push([`generatorn stod där den ställdes (${g0.map((x) => x.toFixed(2)).join(', ')}), monterades när båda stod (${k.ombyggd}), kabeln når skrivaren: ${k.narSkrivaren} m`, k.ombyggd && k.synlig && k.narSkrivaren < 0.6 && Math.hypot(g0[0] - fore[0], g0[2] - fore[2]) < 0.01]);
const g1 = await H(() => { const g = window.__printahem.skrivare.find((x) => x.id === 'g1').mesh.getWorldPosition(new window.__printahem.THREE.Vector3()); return [g.x, g.z]; });
await titta((g1[0] + C.x) / 2, (g1[1] + C.z) / 2, 2.4, -0.5); await p.waitForTimeout(1200); await p.screenshot({ path: dir + 'd-kabeln-till-skrivaren.png' });
// 4. inga bruna boxar
const brun = await H(() => { const P = window.__printahem, g = P.skrivare.find((x) => x.id === 'g1').mesh; let n = 0; g.traverse((o) => { let v = true; for (let x = o; x; x = x.parent) if (!x.visible) v = false; if (v && o.isMesh && o.material?.color?.getHex?.() === 0x7a3e1c) n++; }); return n; });
await titta(g1[0], g1[1], 1.3, -0.5); await p.waitForTimeout(1200); await p.screenshot({ path: dir + 'd-skrivaren-utan-boxar.png' });
ut.push([`inga bruna boxar på skrivaren (${brun})`, brun === 0]);
// 5. en trampa-uppmaning
await H(() => { window.__printahem.S.strom = 0; }); await p.waitForTimeout(3000);
const tramp = await H(() => { const P = window.__printahem; const T = [...document.querySelectorAll('.ph-kontroll, .dn-r, .fp-prompt.syns, .ph-notis')].filter((n) => n.getClientRects().length).map((n) => n.textContent).filter((t) => /trampa/i.test(t)); const br = P.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'DUBBEL UPPMANING'); return { T, br: br.map((e) => e.text) }; });
await titta(C.x, C.z, 2.4, -0.35); await p.waitForTimeout(1500); await p.screenshot({ path: dir + 'd-en-trampa.png' });
ut.push([`"trampa" syns på ${tramp.T.length} ställe (${tramp.T.join(' / ')}) · DUBBEL UPPMANING: ${tramp.br.length}`, tramp.T.length <= 1 && !tramp.br.length]);
// 6. hammaren
await H(() => { const P = window.__printahem; const i = P.laggTill('hammare'); P.byt(i); P.spelare.pitch = -0.6; });
await p.waitForTimeout(500); const l0 = await H(() => window.__printahem.textLogg().length);
await H(() => window.__printahem.ui.o.onAnvand(true)); await H(() => window.__printahem.ui.o.onAnvand(false)); await p.waitForTimeout(600);
const ham = await H((l0) => window.__printahem.textLogg().slice(l0).some((e) => /slag för skojs skull/.test(e.text)), l0);
ut.push([`hammaren slår för skojs skull (${ham})`, ham]);
// 7. Esc i tio lägen
const lagen = [
  ['vanligt', () => {}],
  ['under tal', () => { window.__printahem.prata('berattare', 'Det här är ett test av rösten som pratar en stund.'); }],
  ['med en ritning', () => { const P = window.__printahem; P.S.kvarnKopt = true; P.S.kvarnStar = false; P.ritaStart(); }],
  ['under en kamerarörelse', () => { window.__printahem.tittaMot(0, 0, 1.4, { tvang: true, nyckel: 'esc' + Math.random() }); }],
  ['med kontrollhjälpen', () => { window.__printahem.S.kontrollKlar = []; }],
  ['med en sak i handen', () => { const P = window.__printahem; P.byt(P.S.hotbar.findIndex((x) => x?.typ === 'hammare')); }],
  ['med ett sms i kön', () => { window.__printahem.S.strom = 50; }],
  ['efter en notis', () => { window.__printahem.regi.info('Test', 'bra'); }],
  ['tomhänt', () => { window.__printahem.byt(0); }],
  ['när en print går', () => { const P = window.__printahem, g = P.skrivare.find((x) => x.id === 'g1'); g.fil = 100; P.S.strom = 100; P.startaDirekt?.(g, { typ: 'nyckelring' }); }],
];
let escOk = 0; const escFel = [];
for (const [namn, f] of lagen) {
  await H(f); await p.waitForTimeout(700);
  await p.keyboard.press('Escape'); await p.waitForTimeout(500);
  const oppen = await H(() => !window.__printahem.ui.overlay.hidden && window.__printahem.ui.pausad);
  if (namn === 'under tal') await p.screenshot({ path: dir + 'd-esc-under-tal.png' });
  await p.keyboard.press('Escape'); await p.waitForTimeout(500);
  const stangd = await H(() => window.__printahem.ui.overlay.hidden && !window.__printahem.ui.pausad);
  if (!stangd) await H(() => window.__printahem.ui.starta(true));
  if (oppen && stangd) escOk++; else escFel.push(`${namn} (öppen ${oppen}, stängd ${stangd})`);
}
ut.push([`Esc öppnar och stänger menyn i ${escOk} av ${lagen.length} lägen${escFel.length ? ': fel ' + escFel.join(', ') : ''}`, escOk === lagen.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
