// Inkorg 78 (A-134): sopsäcken nere till vänster – en svart säck som går ut ur bild nedåt, bara öppningen syns.
// Ingen hand, ingen knut. Tom/halv: mörkt i öppningen. Full: saker sticker upp. Skräpet sjunker ned i öppningen vid plockning.
// Bilder: verktyg/a134/sacken-<tom|halv|full>-<bredd>.png. Kör: node verktyg/test-a134.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const THREE_JS = fs.readFileSync('/home/claude/verktyg/node_modules/three/build/three.module.js');
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'] });
const ut = [], fel = [];
fs.mkdirSync(new URL('./a134/', import.meta.url), { recursive: true });
const spar = fs.readFileSync(new URL('./sparfiler/start-dag3.json', import.meta.url), 'utf8');
for (const [w, h] of [[1280, 720], [1024, 640]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h } });
  await ctx.route(/cdn\.jsdelivr\.net\/npm\/three@0\.170\.0/, (r) => r.fulfill({ body: THREE_JS, contentType: 'text/javascript' }));
  const p = await ctx.newPage(); p.on('pageerror', (e) => fel.push(`${w}: ${e.message}`));
  await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
  await p.goto(url); await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 60000 }).catch(() => {});
  await p.evaluate(() => window.__startaSpel()); await p.waitForTimeout(3000);
  for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]), .ph-kapkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
  await p.evaluate(() => { const P = window.__printahem; P.S.korg = true; P.S.grip = true; P.byt(0); P.ritaHotbar?.(); });
  for (const [namn, n] of [['tom', 0], ['halv', 5], ['full', 99]]) {
    const r = await p.evaluate(async (n) => { const P = window.__printahem, T = P.THREE; let i = 0, fall = null;
      const max = () => P.hand.kapacitet || 10;
      while (P.hand.saker.filter((x) => x.userData.typ === 'skrap').length < Math.min(n, 99) && !P.hand.full && i++ < 40) { const s = P.skrapLista.filter((x) => !x.userData.tung && P.kanLyfta(x)).sort((a, b) => a.position.distanceTo(P.spelare.pos) - b.position.distanceTo(P.spelare.pos))[0]; if (!s) break; P.plockaSkrap(s, true); P.simulera(0.05, 0.05); if (!fall) fall = P.sackFallNu(); }
      P.simulera(1, 0.05); await new Promise((x) => setTimeout(x, 400));
      const sk = P.sackObj(), K = P.kameraObj(); K.updateMatrixWorld(true); sk.updateMatrixWorld(true);
      /* kanten (öppningen) och säckens nedersta punkt i bild */
      const proj = (y) => new T.Vector3(0, y, 0).applyMatrix4(sk.userData.kant.matrixWorld).project(K);
      const kant = proj(0.0); let botten = 9; for (let y = 0; y >= -1.0; y -= 0.05) { const v = new T.Vector3(0, y, 0).applyMatrix4(sk.userData.kant.matrixWorld).applyMatrix4(K.matrixWorldInverse); if (v.z < -0.05) botten = Math.min(botten, v.clone().applyMatrix4(K.projectionMatrix).y); }   /* lägsta punkt på säckens mittlinje framför kameran */
      let knut = false; sk.traverse((o) => { if (o.geometry?.type === 'TorusGeometry') knut = true; });
      return { syns: sk.visible, hand: P.hand.grupp.visible, full: sk.userData.full.visible, n: P.hand.saker.length, max: max(), kant: [kant.x, kant.y], botten, knut, fall };
    }, n);
    await p.screenshot({ path: new URL(`./a134/sacken-${namn}-${w}.png`, import.meta.url).pathname });
    const fallTxt = r.fall?.length ? `skräpet ${r.fall[0].y.toFixed(2)} m vid öppningen` : 'inget föll';
    ut.push([`${w}×${h} ${namn}: säcken syns, ingen hand, ingen knut (${r.n}/${r.max} skräp)`, r.syns && !r.hand && !r.knut]);
    ut.push([`${w}×${h} ${namn}: öppningen nere till vänster i bild (x ${r.kant[0].toFixed(2)}, y ${r.kant[1].toFixed(2)}), säcken går ut ur bild nedåt (botten y ${r.botten.toFixed(2)})`, r.kant[0] > -1 && r.kant[0] < -0.2 && r.kant[1] > -0.95 && r.kant[1] < -0.2 && r.botten < -1]);
    ut.push([`${w}×${h} ${namn}: ${namn === 'full' ? 'saker sticker upp ur öppningen' : 'bara mörker i öppningen'}`, namn === 'full' ? r.full && r.n >= r.max : !r.full]);
    if (namn === 'halv') ut.push([`${w}×${h}: skräpet hamnar i öppningen vid plockning (${fallTxt})`, !!r.fall?.length && r.fall[0].y > -0.05]);
  }
  await ctx.close();
}
ut.push([`0 sidfel (${fel.slice(0, 3).join(' · ') || 'inga'})`, !fel.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
const nFel = ut.filter((x) => !x[1]).length; console.log(nFel ? `✗ test-a134: ${nFel} fel` : '✓ test-a134 grönt'); await b.close(); process.exit(nFel ? 1 : 0);
