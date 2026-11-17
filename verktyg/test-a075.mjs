// A-075: världen v2 – svackan, gruvan som berg- och dalbana, slyet, Bengt-Åkes trädgård, tomtens mark. Kör: node verktyg/test-a075.mjs [url] [vyer|alla]
// Skärmdumpar i verktyg/a075/ från samma vinklar som mockupen (claude/soptippsvagen-mockup-varlden.md), översatta till spelets koordinater.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html', bara = (process.argv[3] || 'alla').split(',');
const dir = new URL('./a075/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | ')));
await p.addInitScript(() => { if (!sessionStorage.getItem('a075')) { sessionStorage.setItem('a075', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true, spelarNamn: 'Test', dag1Sida: true, skyltUppe: true })); } });
await p.goto(url); await p.waitForTimeout(5000);
for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) {
  await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|BÖRJA|Fortsätt|Starta|Hoppa/i.test(k.textContent)) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
const H = (f, a) => p.evaluate(f, a), ut = [];
// en bild från en fast kamera i världens koordinater, utan HUD. dimma: [nära, långt] eller null
export const vy = async (namn, fran, mot, o = {}) => {
  const data = await H(([f, m, o]) => {
    const P = window.__printahem, k = P.kamera, r = P.renderer, sc = P.miljo.mark.parent;
    const gs = r.getSize(new P.THREE.Vector2()), pr = r.getPixelRatio(), pos = k.position.clone(), q = k.quaternion.clone(), asp = k.aspect, fov = k.fov, far = k.far, dim = sc.fog && [sc.fog.near, sc.fog.far];
    if (o.dimma && sc.fog) { sc.fog.near = o.dimma[0]; sc.fog.far = o.dimma[1]; }
    k.position.set(...f); k.fov = o.fov || (o.gruva ? 66 : 62); k.far = 400; k.lookAt(...m); k.aspect = 1280 / 720; k.updateProjectionMatrix(); k.updateMatrixWorld(true);
    r.setPixelRatio(1); r.setSize(1280, 720, false); if (o.kamFn) { const P2 = window.__printahem; (new Function('P', 'k', o.kamFn))(P2, k); } k.updateMatrixWorld(true); r.render(o.gruva ? P.gruvScen : sc, k);
    const C = document.createElement('canvas'); C.width = 1280; C.height = 720; C.getContext('2d').drawImage(r.domElement, 0, 0);
    r.setPixelRatio(pr); r.setSize(gs.x, gs.y, false); k.position.copy(pos); k.quaternion.copy(q); k.aspect = asp; k.fov = fov; k.far = far; k.updateProjectionMatrix(); if (dim) { sc.fog.near = dim[0]; sc.fog.far = dim[1]; }
    return C.toDataURL('image/png');
  }, [fran, mot, o]);
  fs.writeFileSync(dir + namn + '.png', Buffer.from(data.split(',')[1], 'base64'));
};
const vill = (n) => bara.includes('alla') || bara.some((x) => n.startsWith(x));
const W = await H(() => { const P = window.__printahem; return { G: [P.GRIND.x, P.GRIND.z], GR: [P.GRUVA.x, P.GRUVA.z], SV: P.SVACKA, start: [P.spelare.pos.x, P.spelare.pos.z] }; });
const Y = -W.SV.djup, mz = (z) => z - 22, mx = (x) => x - 1;   // mockupens tomt/grind → spelets
// §1 svackan
if (vill('svacka')) {
  await H(() => { const P = window.__printahem; P.S.grindKapad = 0; P.ritaStart?.(); P.ritaGrustag?.(); });
  // från startpunkten syns inte svackans botten eller bergväggen: strålar mot botten och väggen, 0 fria utom genom grinden
  const syn = await H(() => { const P = window.__printahem, T = P.THREE, sc = P.miljo.mark.parent, SV = P.SVACKA, G = P.GRIND, o = new T.Vector3(P.spelare.pos.x, 1.6, P.spelare.pos.z);
    let fria = 0, genomGrind = 0, alla = 0; const exempel = [];
    const mal = []; for (let x = -45; x <= 45; x += 3) { mal.push([x, -SV.djup + 0.3, (SV.botten1 + SV.botten2) / 2]); mal.push([x, -SV.djup + 4, SV.botten2 - 1.2]); mal.push([x, -1, SV.vagg + 0.6]); }
    for (const [x, y, z] of mal) { const m = new T.Vector3(x, y, z), d = m.clone().sub(o), L = d.length(); d.normalize(); const rc = new T.Raycaster(o, d, 0.3, L - 0.8); rc.camera = P.kamera; alla++;
      const h = rc.intersectObjects(sc.children, true).find((h) => { let q = h.object; while (q) { if (!q.visible) return false; q = q.parent; } const mt = h.object.material; return mt && mt.visible !== false && !(mt.opacity < 0.05); });
      if (!h) { const t = (SV.kant - o.z) / d.z, xk = o.x + d.x * t; if (Math.abs(xk - G.x) < 2.3) genomGrind++; else { fria++; if (exempel.length < 4) exempel.push(`${x},${y.toFixed(0)},${z.toFixed(0)}`); } } }
    return { fria, genomGrind, alla, exempel }; });
  ut.push([`från startplatsen: ${syn.fria} av ${syn.alla} strålar mot botten/bergväggen är fria utanför grinden (${syn.genomGrind} genom grinden)${syn.exempel.length ? ' – ' + syn.exempel.join('; ') : ''}`, syn.fria === 0]);
  await vy('svacka-start', [W.start[0], 1.6, W.start[1]], [W.G[0], 0.4, W.G[1] - 3]);   /* från startplatsen mot grinden */
  await vy('svacka-start-mockvinkel', [mx(-24), 1.7, mz(13)], [mx(-18), 0.2, mz(-4)]);
  await vy('svacka-framme', [W.G[0], 1.7, W.G[1] + 4.3], [W.G[0], -1.5, W.G[1] - 6]);
  await vy('svacka-oversikt', [-4, 20, mz(20)], [4, Y + 2, W.SV.botten2 + 4]);
  await vy('svacka-vast', [-6, 2.5, W.SV.kant + 1], [-70, Y + 3, W.SV.kant - 18]);
  await vy('svacka-ost', [14, 2.5, W.SV.kant + 1], [80, Y + 3, W.SV.kant - 16]);
  await vy('svacka-floden', [-8, Y + 1.6, W.SV.botten1 - 1.5], [7, Y + 0.6, W.SV.botten2]);
  await vy('svacka-gruvan-stangd', [W.GR[0] - 1.2, Y + 1.6, W.GR[1] + 6.5], [W.GR[0], Y + 1.1, W.GR[1]]);
  await H(() => { const P = window.__printahem; P.S.grindKapad = 16; P.ritaGrustag?.(); });
  await vy('svacka-gruvan-oppen', [W.GR[0] - 1.2, Y + 1.6, W.GR[1] + 6.5], [W.GR[0], Y + 1.1, W.GR[1]]);
  await H(() => { const P = window.__printahem; P.S.grindKapad = 0; P.ritaGrustag?.(); });
}
// §3 slyet → solcellsparken (mockupens vyer "spelare" och "ovan", steg 0–3)
if (vill('sly')) {
  const M = await H(() => { const P = window.__printahem, k = P.slyKlumpar[0].g.position; return { x: -30, z: -1.4 }; });
  const sx = (x) => x - 4 + M.x, sz = (z) => z + 4 + M.z, PX = 4, PZ = -4;
  /* i spelet ligger tippen söder om platsen (i mockupen väster), så spelarens vinkel tas från tomtens västra kant, där man kommer från */
  const VY = { spelare: [[M.x + 13.5, 1.7, M.z + 9], [M.x - 1, 0.4, M.z - 0.5]], ovan: [[M.x + 12, 24, M.z + 14], [M.x, 0, M.z - 1]] };
  const steg = async (n) => {
    if (n === 0) await H(() => { const P = window.__printahem; P.S.slyBort = []; P.S.slyRojt = 0; P.slyKlumpar.forEach((k) => { k.borta = false; k.g.visible = true; k.kvar.visible = false; k.g.children[0].rotation.z = 0; k.g.children[0].position.x = 0; }); });
    if (n === 1) { await H(() => { const P = window.__printahem; P.S.slyBort = [0, 1, 2]; P.slyKlumpar.forEach((k, i) => { if (i < 3) { k.borta = true; k.g.visible = false; k.kvar.visible = true; } }); P.sagaSly(P.slyKlumpar[3]); }); await p.waitForTimeout(1900); }
    if (n === 2) { await H(() => { const P = window.__printahem; P.S.slyBort = [0, 1, 2, 3, 4, 5]; P.S.slyRojt = P.S.dag || 9; P.slyKlumpar.forEach((k) => { k.borta = true; k.g.visible = false; k.kvar.visible = true; }); }); await p.waitForTimeout(3500); }
    if (n === 2) { const k = await H(() => !!window.__printahem.ritningNu()); ut.push([`slyet: konturen av solcellsparken syns när sista klumpen fallit (${k})`, k]); }
    if (n === 3) { await H(() => { const P = window.__printahem; P.placera({ id: "test-solpark", typ: "solpark", x: -30, z: -1, r: 0 }, false); }); await p.waitForTimeout(3500); }
    for (const [v, [f, m]] of Object.entries(VY)) await vy(`sly-${v}-steg${n}`, f, m);
  };
  for (let n = 0; n <= 3; n++) await steg(n);
}
// §4 bommen, ängen, Bengt-Åkes hus, trädgården och graven (mockupens vag.js; huset ligger söder om vägen i spelet, så z speglas runt huset)
if (vill('vag')) {
  const B = await H(() => { const P = window.__printahem; return { hus: [P.BENGT_HUS.x, P.BENGT_HUS.z], bom: P.BOMMAR.hoger.x, vz: 24 }; });
  const bP = (dx, dz, y) => [B.hus[0] + dx, y, B.hus[1] - dz], HZ = -9;
  await H(() => { const P = window.__printahem; P.S.bengtAvslojad = 0; });
  await p.waitForTimeout(3000);
  await vy('vag-bom-stangd', [B.bom - 8.5, 1.7, B.vz + 1.2], [B.bom + 6.5, 1.0, B.vz + 0.5]);
  await H(() => { const P = window.__printahem; P.S.bengtAvslojad = 15; });
  await p.waitForTimeout(7000);
  await vy('vag-bom-oppen', [B.bom - 8.5, 1.7, B.vz + 1.2], [B.bom + 6.5, 1.0, B.vz + 0.5]);
  await vy('vag-huset', bP(-11, 3.2 - HZ, 1.7), bP(0, -7 - HZ, 2));
  await vy('vag-tradgard', bP(-7, 9, 4.5), bP(1, -2, 0.5));
  await vy('vag-graven', bP(0.2, -3.1, 1.7), bP(-2, -7.5, 0.5));
  await vy('vag-ovan', [B.hus[0] - 26, 32, B.hus[1] - 30], [B.hus[0] - 18, 0, B.hus[1] - 4], { dimma: [80, 200] });
  // kikaren syns från tomten: en stråle från tomtens östra del till blänken träffar inget annat på vägen
  const kik = await H(() => { const P = window.__printahem, T = P.THREE, g = P.bengtHus.userData.glimt, mal = new T.Vector3(); g.getWorldPosition(mal); const sc = P.miljo.mark.parent; const res = [];
    for (const fr of [[16, 1.6, 12], [18, 1.6, 4], [10, 1.6, 16]]) { const o = new T.Vector3(...fr), d = mal.clone().sub(o), L = d.length(); d.normalize(); const rc = new T.Raycaster(o, d, 0.1, L - 0.15); rc.camera = P.kamera;
      const tr = rc.intersectObjects(sc.children, true).filter((h) => { let x = h.object; while (x) { if (!x.visible) return false; x = x.parent; } const m = h.object.material; return m && m.visible !== false && !(m.opacity < 0.05); });
      res.push(tr.length ? tr[0].object.name || tr[0].object.type : 'fri'); }
    return res; });
  ut.push([`kikarens blänk syns från tomten (${kik.join(', ')})`, kik.includes('fri')]);
  ut.push(['Bengt-Åkes hus och trädgården finns', await H(() => { const P = window.__printahem; return !!P.bengtHus && P.bengtTradgard?.children.length > 20; })]);
}
// §2 gruvan: åkturen (mockupens gruva.js), tid, tidsserie var femte sekund, och ådern
if (vill('gruva')) {
  await H(() => { const P = window.__printahem; P.S.grindKapad = 16; P.ritaGrustag?.(); P.spelare.granser = { minX: -90, maxX: 90, minZ: -90, maxZ: 90 }; });
  const O = [W.GR[0], Y, W.GR[1]], L = (x, y, z) => [O[0] + x, O[1] + y, O[2] + z];
  const tid = await H(() => { const P = window.__printahem, dt = 0.02; let t = 4 / P.GRUV_LANGD, s = 0, tider = [], u = 1 - 0.6 / P.GRUV_LANGD; const tt = []; while (t < u) { if (s >= tider.length * 5 - 1e-9) tider.push(t); t += P.gruvFart(t, true) * dt / P.GRUV_LANGD; s += dt; } let t2 = u, s2 = 0; while (t2 > 4 / P.GRUV_LANGD) { t2 -= P.gruvFart(t2, false) * dt / P.GRUV_LANGD; s2 += dt; } return { ner: s, upp: s2, tider, langd: P.GRUV_LANGD }; });
  ut.push([`banan ${tid.langd.toFixed(1)} m (minst 50)`, tid.langd >= 50]);
  ut.push([`åkturen ner ${tid.ner.toFixed(1)} s (20–25), upp ${tid.upp.toFixed(1)} s (ca 15)`, tid.ner >= 19 && tid.ner <= 26 && tid.upp >= 12 && tid.upp <= 18]);
  const near = async (x, y, z) => H(([q]) => { const P = window.__printahem, T = P.THREE, v = new T.Vector3(...q); let b = 0, bd = 1e9; for (let i = 0; i <= 2000; i++) { const d = P.GRUV_BANA.getPointAt(i / 2000).distanceTo(v); if (d < bd) { bd = d; b = i / 2000; } } return b; }, [L(x, y, z)]);
  await H(() => { const P = window.__printahem; P.gruvVagn.visible = true; P.gruvKameraVid(4 / P.GRUV_LANGD + 0.002); });
  await vy('gruva-ingang', L(0.3, 1.6, 3.2), L(-0.2, 0.4, -8), { gruva: true });
  for (const [n, q] of [['aker1', [0, -0.2, -11.5]], ['aker2', [-10, -4.1, -29.5]]]) { const t = await near(...q); await vy('gruva-' + n, [0, 0, 0], [0, 0, -1], { gruva: true, kamFn: `P.gruvKameraVid(${t});` }); }
  await H(() => { const P = window.__printahem; P.gruvKameraVid(P.GRUV_SLUT_T); });
  await vy('gruva-grottan', L(-26.7, -11.4, -6.2), L(-27.8, -12.2, 4), { gruva: true });
  for (let i = 0; i < tid.tider.length; i++) await vy(`gruva-fard-${String(i * 5).padStart(2, '0')}s`, [0, 0, 0], [0, 0, -1], { gruva: true, kamFn: `P.gruvKameraVid(${tid.tider[i]});` });
  // åk på riktigt: ner, bryt ådern, upp, och hoppa över med Mellanslag andra gången
  const ak = await H(async () => { const P = window.__printahem, S = P.S, vanta = (ms) => new Promise((r) => setTimeout(r, ms)); const ut = {};
    S.gruvFarder = 0; P.gruvAk(true); ut.fard = P.gruvLage(); for (let i = 0; i < 1200 && P.gruvLage() === 'fard'; i++) await vanta(100); ut.ner = P.gruvLage();
    ut.vidBock = P.gruvVagn.position.distanceTo(P.GRUV_BANA.getPointAt(P.GRUV_SLUT_T)) < 0.3;
    P.laggTill('hacka'); const fore = P.antalInv('malm'); P.valjTyp('hacka'); try { P.bergYta.userData.interaktion?.aktivera?.(); } catch (e) { ut.e = String(e); } ut.malm = P.antalInv('malm') - fore;
    P.gruvAk(false); for (let i = 0; i < 1200 && P.gruvLage() === 'fard'; i++) await vanta(100); ut.upp = P.gruvLage();
    P.gruvAk(true); await vanta(300); dispatchEvent(new KeyboardEvent('keydown', { code: 'Space', bubbles: true })); await vanta(300); ut.hopp = P.gruvLage();
    P.gruvAk(false); await vanta(300); dispatchEvent(new KeyboardEvent('keydown', { code: 'Space', bubbles: true })); await vanta(300); ut.hoppUpp = P.gruvLage();
    return ut; });
  ut.push([`åk ner: ${ak.fard} → ${ak.ner}, vagnen vid bocken: ${ak.vidBock}`, ak.fard === 'fard' && ak.ner === 'grotta' && ak.vidBock]);
  ut.push([`bryt ådern i grottan: +${ak.malm} malm${ak.e ? ' ' + ak.e : ''}`, ak.malm >= 1]);
  ut.push([`åk upp: ${ak.upp}; Mellanslag hoppar över andra gången: ner → ${ak.hopp}, upp → ${ak.hoppUpp}`, ak.upp === null && ak.hopp === 'grotta' && ak.hoppUpp === null]);
}
if (vill('motorsag')) {   // motorsågen röjer alla sex klumparna på riktigt, och konturen syns direkt efter
  const r = await H(async () => { const P = window.__printahem, S = P.S, v = (ms) => new Promise((x) => setTimeout(x, ms)); S.slyBort = []; S.slyRojt = 0; P.slyKlumpar.forEach((k) => { k.borta = false; k.g.visible = true; k.kvar.visible = false; k.g.children[0].rotation.z = 0; });
    for (const kl of P.slyKlumpar) { P.sagaSly(kl); await v(1700); } await v(4000); return { rojt: !!S.slyRojt, borta: S.slyBort.length, stubbar: P.slyKlumpar.filter((k) => k.kvar.visible).length, kontur: !!P.ritningNu() }; });
  ut.push([`motorsågen: ${r.borta}/6 klumpar fallna, ${r.stubbar} rundlar med stubbar, röjt ${r.rojt}, konturen syns ${r.kontur}`, r.borta === 6 && r.stubbar === 6 && r.rojt && r.kontur]);
}
if (vill('tomt')) {
  await vy('tomt-uppifran', [0, 55, 30], [0, 0, -2], { dimma: [120, 300] });
  ut.push(['tomtytan och stigen är borta', await H(() => { const P = window.__printahem; let brun = 0; P.miljo.mark.parent.traverse((o) => { const c = o.material?.color?.getHex?.(); if (o.isMesh && o.geometry?.type === 'PlaneGeometry' && (c === 0x9a8a62 || c === 0xb9a37e)) brun++; }); return brun === 0; })]);
}
if (vill('serie')) {   // tidsserierna som rutnät och gif
  const { execSync } = await import('node:child_process');
  const rut = (filer, ut2, kol) => execSync(`convert ${filer.map((f) => dir + f).join(' ')} -resize 640x +append ${dir}${ut2}.png`);
  try {
    execSync(`cd ${dir} && montage sly-spelare-steg0.png sly-spelare-steg1.png sly-spelare-steg2.png sly-spelare-steg3.png sly-ovan-steg0.png sly-ovan-steg1.png sly-ovan-steg2.png sly-ovan-steg3.png -tile 4x2 -geometry 640x360+2+2 -background '#222' tidsserie-sly.png`);
    execSync(`cd ${dir} && convert -delay 120 -loop 0 sly-spelare-steg0.png sly-spelare-steg1.png sly-spelare-steg2.png sly-spelare-steg3.png -resize 640x tidsserie-sly.gif`);
    const f = fs.readdirSync(dir).filter((x) => /^gruva-fard-\d+s\.png$/.test(x)).sort();
    execSync(`cd ${dir} && montage ${f.join(' ')} -tile ${f.length}x1 -geometry 640x360+2+2 -background '#222' tidsserie-gruva.png`);
    execSync(`cd ${dir} && convert -delay 100 -loop 0 ${f.join(' ')} -resize 640x tidsserie-gruva.gif`);
    ut.push(['tidsserierna (slyet → solcellsparken, åkturen var 5:e s) som rutnät och gif', true]);
  } catch (e) { ut.push(['tidsserierna: ' + e.message.slice(0, 120), false]); }
}
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
