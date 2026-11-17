// A-066: världskartan – svackan med floden och gruvan, grusvägen, bommarna, Ali mitt emot skjulet, Bengt-Åkes hus, slyet och motorsågen.
// Kör: node verktyg/test-a066.mjs [url]   → skärmdumpar i verktyg/a066/
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a066/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('a066')) { sessionStorage.setItem('a066', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true, spelarNamn: 'Test', dag1Sida: true, skyltUppe: true, dag: 9, kapitel: 2 })); } });
await p.goto(url); await p.waitForTimeout(5000);
for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) {
  await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|BÖRJA|Fortsätt|Starta|Hoppa/i.test(k.textContent)) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
const ut = [], H = (f, a) => p.evaluate(f, a);
await H(() => { document.querySelectorAll('.dn-topp, .dn-matare, .ph-hotbar').forEach((e) => { e.style.visibility = 'hidden'; }); });
const bild = async (namn, fran, mot, o = {}) => {
  await H(([f, m, o]) => { const P = window.__printahem, sp = P.spelare; sp.pos.x = f[0]; sp.pos.z = f[1]; sp.pos.y = P.markY(f[0], f[1]); sp.hojd = o.hojd ?? 1.6; P.tittaMot(m[0], m[1], 1.2, { tvang: true, y: m[2] ?? sp.pos.y + 1 }); }, [fran, mot, o]);
  await p.waitForTimeout(o.vanta ?? 2800); await p.screenshot({ path: dir + namn + '.png' });
};
const S0 = await H(() => { const P = window.__printahem; return { SV: P.SVACKA, G: P.GRUVA, V: P.SVACKA_VAG, ali: [P.ALI.x, P.ALI.z], vask: [P.VASK.x, P.VASK.z], tipp: [P.TIPP.x, P.TIPP.z, P.TIPP.r] }; });
const Y = -S0.SV.djup;
// översikt uppifrån (som kartan)
await H(() => { const P = window.__printahem; P.spelare.granser = { minX: -90, maxX: 90, minZ: -90, maxZ: 90 }; });
await H(() => { const sc = window.__printahem.miljo.mark.parent; window.__dimma = [sc.fog.near, sc.fog.far]; sc.fog.near = 400; sc.fog.far = 900; window.__printahem.kamera.far = 900; window.__printahem.kamera.updateProjectionMatrix(); });
await bild('oversikt-uppifran', [0, 40], [0, -8, -20], { hojd: 80, vanta: 4000 });
await H(() => { const sc = window.__printahem.miljo.mark.parent; [sc.fog.near, sc.fog.far] = window.__dimma; });
await H(() => { window.__printahem.spelare.hojd = 1.6; window.__printahem.uppdateraMark(); });
// tomtens bakkant mot svackan, före grinden
await bild('bakkanten-mot-svackan', [-8, -20.5], [-2, -34, Y]);
// grinden är kapad (d17): ner för grusvägen
await H(() => { const P = window.__printahem, S = P.S; S.grindKapad = 16; S.dag = 17; P.uppdateraMark(); });
await bild('grusvagen-halvvags', [-12, -26.6], [-2, -33, Y + 1]);
await bild('floden-vid-grusbanken', [S0.vask[0] + 3, S0.vask[1] + 2.5], [S0.vask[0] - 2, S0.SV.flod, Y]);
await H(() => { const P = window.__printahem; P.S.grindKapad = 0; P.ritaStart(); });
await p.waitForTimeout(1600);
await bild('gruvoppningen-fore', [S0.G.x - 1, S0.G.z + 6], [S0.G.x, S0.G.z, Y + 1.3]);
await H(() => { const P = window.__printahem; P.S.grindKapad = 16; P.S.guldAder = 16; P.uppdateraMark(); P.ritaStart(); });
await p.waitForTimeout(1600);
await bild('gruvoppningen-efter', [S0.G.x - 1, S0.G.z + 6], [S0.G.x, S0.G.z, Y + 1.3]);
await bild('inne-i-gruvan', [S0.G.x, S0.G.z - 1.2], [S0.G.x, S0.G.z - S0.G.l, Y + 1.2]);
// gå ner och upp via grusvägen, och försök klättra ur
const ga = async (fran, till, sek = 40) => H(async ([f, t, sek]) => {
  const P = window.__printahem, sp = P.spelare; sp.pos.set(f[0], P.markY(f[0], f[1]), f[1]); let last = [sp.pos.x, sp.pos.z], still = 0;
  for (let i = 0; i < sek * 4; i++) { sp.aktiv = true; sp.tangenter.KeyW = true; sp.yaw = Math.atan2(-(t[0] - sp.pos.x), -(t[1] - sp.pos.z)); await new Promise((r) => setTimeout(r, 250)); if (Math.hypot(sp.pos.x - t[0], sp.pos.z - t[1]) < 0.6) break; if (Math.hypot(sp.pos.x - last[0], sp.pos.z - last[1]) < 0.01) { if (++still > 10) break; } else still = 0; last = [sp.pos.x, sp.pos.z]; }
  sp.tangenter.KeyW = false; return { x: sp.pos.x, z: sp.pos.z, y: sp.pos.y };
}, [fran, till, sek]);
const vagen = async (bak) => { const pts = bak ? [...S0.V].reverse() : S0.V; let r; for (let i = 1; i < pts.length; i++) r = await ga([pts[i - 1][0], pts[i - 1][1]], [pts[i][0], pts[i][1]], 20); return r; };
let r = await vagen(false); ut.push([`ner för grusvägen: står på ${r.y.toFixed(1)} m (botten ${Y})`, r.y < Y + 0.5]);
r = await ga([0, S0.SV.botten1 - 1], [0, -18], 15); ut.push([`klättra rakt upp för slänten: stannar på ${r.y.toFixed(1)} m vid z ${r.z.toFixed(1)}`, r.y < Y + 1 && r.z < S0.SV.botten1]);
r = await ga([0, S0.SV.botten2 + 0.6], [0, -45], 10); ut.push([`klättra upp för bergväggen: stannar vid z ${r.z.toFixed(1)}`, r.z > S0.SV.botten2]);
r = await vagen(true); ut.push([`upp igen via grusvägen: ${r.y.toFixed(1)} m vid z ${r.z.toFixed(1)}`, r.y > -0.5 && r.z > -22.5]);
// bommarna
await H(() => { const P = window.__printahem; P.S.dag = 9; P.S.bengtAvslojad = 0; P.uppdateraMark(); });
await p.waitForTimeout(2500);
const B = await H(() => { const P = window.__printahem; return Object.fromEntries(Object.entries(P.BOMMAR).map(([k, v]) => [k, v.x])); });
await bild('bom-vanster-stangd', [B.vanster + 6, 24], [B.vanster, 24, 1]);
await bild('bom-hoger-stangd', [B.hoger - 6, 24], [B.hoger, 24, 1]);
ut.push(['bommarna är stängda dag 9', await H(() => { const g = window.__printahem.spelare.granser; return g.minX > -42 && g.maxX < 23; })]);
await H(() => { const P = window.__printahem; P.S.dag = 15; P.S.bengtAvslojad = 15; P.uppdateraMark(); });
await p.waitForTimeout(3500);
await bild('bom-vanster-oppen', [B.vanster + 6, 24], [B.vanster - 8, 24, 1]);
await bild('bom-hoger-oppen', [B.hoger - 6, 24], [B.hoger + 10, 24, 1]);
ut.push(['bommarna öppna (d11 och d15)', await H(() => { const g = window.__printahem.spelare.granser; return g.minX < -50 && g.maxX > 50; })]);
// Alis butik mitt emot skjulet, Bengt-Åkes hus
await bild('ali-mitt-emot-skjulet', [9, 12], [S0.ali[0], S0.ali[1], 1.5]);
ut.push([`Alis butik mitt emot skjulet (x ${S0.ali[0]})`, Math.abs(S0.ali[0] - 9) < 0.5]);
await bild('bengt-akes-hus', [46, 24], [52, 35, 2]);
// slyet före och efter motorsågen
await H(() => { const P = window.__printahem; P.S.dag = 9; P.S.bengtAvslojad = 0; P.uppdateraMark(); });
await bild('slyet-fore', [-30, 6.5], [-30, -2, 1]);
await H(() => { const P = window.__printahem; P.slyKlumpar.forEach((k) => { k.borta = true; k.g.visible = false; }); P.S.slyRojt = 9; });
await bild('slyet-efter', [-30, 6.5], [-30, -2, 0.5]);
// utsikten från Rolfs bänk
const bank = await H(() => { const P = window.__printahem; try { return P.introBild ? true : false; } catch { return false; } });
await bild('utsikt-fran-rolfs-bank', [-12, -40], [0, -32, Y], { hojd: 13 });
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
