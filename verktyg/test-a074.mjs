// A-074: tippen v2 – ett berg som blir en grop. Kör: node verktyg/test-a074.mjs [url]
// Tidsserien steg 0–9 från mockupens "tre"-vy (rutnät + gif) och skärmdumpar från grinden, vägen och nere i gropen, i verktyg/a074/.
import fs from 'node:fs';
import { execSync } from 'node:child_process';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a074/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | ')));
await p.addInitScript(() => { if (!sessionStorage.getItem('a074')) { sessionStorage.setItem('a074', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true, spelarNamn: 'Test', dag1Sida: true, skyltUppe: true })); } });
await p.goto(url); await p.waitForTimeout(5000);
for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) {
  await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|BÖRJA|Fortsätt|Starta|Hoppa/i.test(k.textContent)) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
const H = (f, a) => p.evaluate(f, a), ut = [];
const T = await H(() => { const P = window.__printahem; return { x: P.TIPP.x, z: P.TIPP.z }; });
// en bild från en fast kamera (relativt TIPP), utan spelarens kamera och utan HUD
const vy = async (namn, fran, mot, steg) => {
  const data = await H(([f, m, s]) => {
    const P = window.__printahem, k = P.kamera, r = P.renderer, T = P.TIPP;
    if (s != null) P.sattTippSteg(s, true);
    const gs = r.getSize(new P.THREE.Vector2()), pr = r.getPixelRatio(), pos = k.position.clone(), q = k.quaternion.clone(), asp = k.aspect, fov = k.fov;
    k.position.set(T.x + f[0], f[1], T.z + f[2]); k.fov = 60; k.lookAt(T.x + m[0], m[1], T.z + m[2]); k.aspect = 1280 / 720; k.updateProjectionMatrix(); k.updateMatrixWorld(true);
    r.setPixelRatio(1); r.setSize(1280, 720, false); r.render(P.miljo.mark.parent, k);
    const C = document.createElement('canvas'); C.width = 1280; C.height = 720; C.getContext('2d').drawImage(r.domElement, 0, 0);
    r.setPixelRatio(pr); r.setSize(gs.x, gs.y, false); k.position.copy(pos); k.quaternion.copy(q); k.aspect = asp; k.fov = fov; k.updateProjectionMatrix();
    return C.toDataURL('image/png');
  }, [fran, mot, steg]);
  fs.writeFileSync(dir + namn + '.png', Buffer.from(data.split(',')[1], 'base64'));
};
await H(() => { const P = window.__printahem, S = P.S; S.tippNyckel = true; S.kapitel = 4; S.dag = 18; });
const TRE = [[9, 5.5, 13], [-2, -0.2, 0]];
for (let s = 0; s <= 9; s++) await vy(`tre-steg${s}`, ...TRE, s);
// formen per steg: höjden i mitten och vid husvagnen
const form = await H(() => { const P = window.__printahem, T = P.TIPP, ut = []; for (let s = 0; s <= 9; s++) { P.sattTippSteg(s, true); ut.push([P.tippHojd(T.x + 0.01, T.z), P.tippHojd(T.x + P.TIPP_HV.x, T.z + P.TIPP_HV.z), P.tippHojd(T.x + 7.9, T.z)]); } return ut; });
ut.push([`mitten: ${form.map((f) => f[0].toFixed(2)).join(' → ')}`, form[0][0] > 1.8 && form[9][0] < -1.5]);
ut.push([`kanten (7,9 m öster): ${form[0][2].toFixed(3)} / ${form[9][2].toFixed(3)} – möter marken mjukt`, Math.abs(form[0][2]) < 0.05 && Math.abs(form[9][2]) < 0.05]);
// rutnät + gif
fs.writeFileSync(dir + 'tidsserie.html', `<body style="margin:0;background:#222;display:grid;grid-template-columns:repeat(5,512px);gap:4px">${[...Array(10).keys()].map((s) => `<div style="position:relative"><img src="tre-steg${s}.png" width="512"><b style="position:absolute;left:8px;top:6px;color:#fff;font:600 22px sans-serif;text-shadow:0 1px 3px #000">steg ${s}</b></div>`).join('')}</body>`);
{ const p2 = await p.context().newPage(); await p2.setViewportSize({ width: 512 * 5 + 16, height: 296 * 2 + 4 }); await p2.goto('file://' + dir + 'tidsserie.html'); await p2.waitForTimeout(500); await p2.screenshot({ path: dir + 'tidsserie.png' }); await p2.close(); fs.unlinkSync(dir + 'tidsserie.html'); }
try { execSync(`ffmpeg -y -loglevel error -framerate 1.5 -i ${dir}tre-steg%d.png -vf "scale=640:-1:flags=lanczos,split[a][b];[a]palettegen[p];[b][p]paletteuse" ${dir}tidsserie.gif`); } catch (e) { ut.push(['gif: ' + e.message, false]); }
// grinden vid start, vägen vid start och i slutet, nere i gropen vid husvagnen
await vy('grinden-start', [11.8, 1.7, 0.6], [-3, 0.5, 0], 0);
await vy('vagen-start', [3, 3.2, 21], [-1, 0.2, 0], 0);
await vy('vagen-slut', [3, 3.2, 21], [-1, 0.2, 0], 9);
await vy('uppifran-steg5', [9, 13, 14], [-1, 0, 0], 5);
await vy('gropen-husvagnen', [2.5, -1.8 + 1.6, 2.0], [-4.2, -1.8 + 0.6, 0.6], 9);
await vy('husvagnen-steg4', [0.5, 2.6, 6], [-4.2, 0.4, 0.8], 4);
if (process.env.SNABB) { for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t); console.log(fel.join('\n') || 'inga sidfel'); await b.close(); process.exit(0); }
// AX: upp på berget och ner i gropen överallt (8 riktningar, utifrån och in till mitten och ut igen), inga osynliga väggar
const ga = async (f, t, sek = 30) => H(async ([f, t, sek]) => {
  const P = window.__printahem, sp = P.spelare; sp.pos.set(f[0], P.markY(f[0], f[1]), f[1]); let last = [sp.pos.x, sp.pos.z], still = 0;
  for (let i = 0; i < sek * 4; i++) { sp.aktiv = true; sp.tangenter.KeyW = true; sp.yaw = Math.atan2(-(t[0] - sp.pos.x), -(t[1] - sp.pos.z)); await new Promise((r) => setTimeout(r, 250)); if (Math.hypot(sp.pos.x - t[0], sp.pos.z - t[1]) < 0.6) break; if (Math.hypot(sp.pos.x - last[0], sp.pos.z - last[1]) < 0.01) { if (++still > 8) break; } else still = 0; last = [sp.pos.x, sp.pos.z]; }
  sp.tangenter.KeyW = false; return { x: sp.pos.x, z: sp.pos.z, y: sp.pos.y, mark: P.markY(sp.pos.x, sp.pos.z) };
}, [f, t, sek]);
await H(() => { const P = window.__printahem; P.spelare.granser = { minX: -90, maxX: 90, minZ: -90, maxZ: 90 }; P.S.slyRojt = true; });
for (const s of [0, 9]) {
  await H((s) => window.__printahem.sattTippSteg(s, true), s);
  let ok = 0, fast = [];
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2 + 0.4,   /* förbi bommen vid infarten (den spärrar med flit) */ ute = [T.x + Math.cos(a) * 7.3, T.z + Math.sin(a) * 7.3]   /* A-091: innanför staketet (det står på 8 m) */, mal = [T.x + Math.cos(a) * 0.8, T.z + Math.sin(a) * 0.8];
    const runt = s >= 6 && Math.hypot(ute[0] - (T.x - 4.2), ute[1] - (T.z + 0.8)) < 8;   /* husvagnen står fri från steg 6 och är ett hinder: gå runt den */
    if (runt) await ga(ute, [T.x - 3.5, T.z + 3.8]);
    const inn = runt ? await ga([T.x - 3.5, T.z + 3.8], mal) : await ga(ute, mal); const ut2 = await ga([inn.x, inn.z], ute);
    if (Math.hypot(inn.x - mal[0], inn.z - mal[1]) < 0.7 && Math.hypot(ut2.x - ute[0], ut2.z - ute[1]) < 0.7) ok++; else fast.push(`${(a * 180 / Math.PI).toFixed(0)}°: in till ${Math.hypot(inn.x - T.x, inn.z - T.z).toFixed(1)} m, ut till ${Math.hypot(ut2.x - T.x, ut2.z - T.z).toFixed(1)} m`);
  }
  ut.push([`steg ${s}: in till mitten och ut igen i ${ok}/8 riktningar${fast.length ? ' – ' + fast.join('; ') : ''}`, ok === 8]);
}
// före nyckeln: tippen spärrar (ingen grind behövs)
await H(() => { window.__printahem.S.tippNyckel = false; });
const utanfor = []; for (const [dx, dz] of [[0, -1], [-1, 0], [0.3, 1]]) { const r = await ga([T.x + dx * 12, T.z + dz * 12], [T.x, T.z], 12); utanfor.push(Math.max(Math.abs(r.x - T.x), Math.abs(r.z - T.z))); }
await H(() => { window.__printahem.S.tippNyckel = true; });
ut.push([`A-091: före nyckeln stoppar staketet (${utanfor.map((d) => d.toFixed(1)).join(', ')} m från mitten, staketet på 8 m)`, utanfor.every((d) => d > 7.9)]);
// lösa saker följer ytan vid varje sänkning
const los = await H(async () => { const P = window.__printahem, fel = [];
  for (let s = 0; s <= 9; s++) { P.S.tippSteg = s; await new Promise((r) => setTimeout(r, 2400)); for (const k of P.skrapLista) { if (!P.paTippen(k.position.x, k.position.z) || k.userData.helen) continue; const y = P.tippHojd(k.position.x, k.position.z); if (Math.abs(k.position.y - y) > 0.4) fel.push(`steg ${s} ${k.userData.sort} ${k.position.y.toFixed(2)}/${y.toFixed(2)}`); } }
  return fel; });
ut.push([`lösa saker på ytan efter varje sänkning (${los.length} fel)${los.length ? ' – ' + los.slice(0, 4).join(', ') : ''}`, los.length === 0]);
// husvagnen: skåpet nås vid steg 6 i K3
const hv = await H(() => { const P = window.__printahem, g = P.husvagnG(); P.S.kapitel = 3; P.sattTippSteg(5, true); const fore = P.husvagnFri?.() ?? null; P.sattTippSteg(6, true); return { pos: [g.position.x - P.TIPP.x, g.position.y, g.position.z - P.TIPP.z], syns: g.visible, hinder: !P.husvagnHinder.isEmpty() }; });
ut.push([`husvagnen står i berget (${hv.pos.map((v) => v.toFixed(2)).join(', ')}), syns: ${hv.syns}, hinder vid steg 6: ${hv.hinder}`, hv.syns && Math.abs(hv.pos[0] + 4.2) < 0.01 && hv.hinder]);
// mellanlagren: steg från städprocenten
const mel = await H(() => { const P = window.__printahem, S = P.S, f = S.tippLager; const r = []; S.tippLager = 1; r.push(P.tippMalSteg()); S.tippLager = 4; r.push(P.tippMalSteg()); S.tippLager = f; return r; });
ut.push([`tippMalSteg: lager 1 → ${mel[0]}, lager 4 → ${mel[1]}`, mel[0] >= 0 && mel[0] <= 2 && mel[1] === 9]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
