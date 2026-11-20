// Inkorg 21 (Jesper 07:53): "Hitboxarna på allt är inte tillbaka än."
// Varje klickbar sak: sikta från 2 m med 10° fel åt vänster, höger, upp och ner. Siktet ska ta saken och pekrutan visa åtgärden.
// Två lägen: tom hand, och med en sak som går att ställa ut i handen (då var siktehjälpen avstängd förut).
// Körs i nytt spel, efter omladdning och i början av dag 1–5 (verktyg/sparfiler/start-dagN.json). Resultattabellen skrivs till verktyg/a076/traffytor.md.
// Kör: node verktyg/test-a076t.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const sparfil = (n) => fs.readFileSync(new URL(`./sparfiler/start-dag${n}.json`, import.meta.url), 'utf8');   // början av dag n (nybörjarboten, A-085)
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const fel = [];

// mäter alla saker i ett läge – körs i sidan
function mat(lage) {
  const P = window.__printahem, I = P.interaktor, K = P.kamera, V = K.position.constructor, Q = K.quaternion.constructor;
  const sparM = K.matrixWorld.clone(), sparH = I.sikteHjalp, ut = [];
  const namn = (o) => { if (!o) return 'inget'; const t = o.userData.interaktion?.text; let x = ''; try { x = typeof t === 'function' ? t(o) : t; } catch {} return String(x || o.name || o.userData.typ || '?').replace(/\s+/g, ' ').slice(0, 44); };
  const forst = (o) => { const y = o.autoTraffYta; const c = new V(); if (y) { y.getWorldPosition(c); return c; } const bb = new P.THREE_Box3().setFromObject(o); return bb.isEmpty() ? null : bb.getCenter(c); };
  const sikta = (ogon, c, dYaw, dPitch) => {
    const m = new K.matrixWorld.constructor().lookAt(ogon, c, new V(0, 1, 0));
    const q = new Q().setFromRotationMatrix(m), qy = new Q().setFromAxisAngle(new V(0, 1, 0), dYaw * Math.PI / 180), qp = new Q().setFromAxisAngle(new V(1, 0, 0), dPitch * Math.PI / 180);
    K.matrixWorld.compose(ogon, qy.multiply(q).multiply(qp), new V(1, 1, 1)); K.matrixWorldInverse.copy(K.matrixWorld).invert();
    const save = K.updateMatrixWorld; K.updateMatrixWorld = () => {}; P.uppdateraSikte(lage.bar); K.updateMatrixWorld = save;
    return I.hovrad;
  };
  for (const o of [...I.mal]) {
    const info = o.userData.interaktion; if (!info) continue;
    if (o === P.startYta) continue;   // rutan där saker ställs – ingen sak att klicka på
    if (o.isMesh && o.material?.colorWrite === false && !o.children.length) continue;   // en ren träffyta som är registrerad för sig
    let syns = true; for (let x = o; x; x = x.parent) if (!x.visible) { syns = false; break; }
    if (!syns) continue;   // bara det som finns i världen just nu
    let aktiv = true; try { aktiv = !info.kanAktivera || !!info.kanAktivera(o); } catch {} if (!aktiv) continue;   // det som inte går att klicka just nu tar siktet inte heller
    o.updateMatrixWorld(true); const c = forst(o); if (!c) continue;
    const id = (o.userData.typ || o.name || '') + '@' + c.toArray().map((v) => Math.round(v * 2) / 2).join('/');
    const harYta = !!o.autoTraffYta || (() => { let h = false; o.traverse((m) => { if (m !== o && m.material?.colorWrite === false) h = true; }); return h; })();
    const ogonH = c.y < -1 ? c.y + 1 : 1.6;   // ögonhöjd 1,6 m (i gruvan 1 m över saken)
    let bast = null;
    for (let i = 0; i < 8; i++) {
      const v = i * Math.PI / 4, ogon = new V(c.x + Math.sin(v) * 2, ogonH, c.z + Math.cos(v) * 2);
      const mitt = sikta(ogon, c, 0, 0);
      const lada = new P.THREE_Box3().setFromObject(o).expandByScalar(0.2);
      const samma = (h) => h === o || (h && (() => { const c2 = forst(h); return c2 && (c2.distanceTo(c) < 0.5 || lada.containsPoint(c2)); })());   // två saker på samma plats (sängplatsen och sängen), eller en sak som står på/sitter i saken (skrivaren på arbetsbordet, sophållaren på kvarnen) – siktet ger det som står där
      if (!samma(mitt)) continue;   // från det här hållet står något annat i vägen – spelaren kommer från ett annat håll
      const fick = [[-10, 0], [10, 0], [0, 10], [0, -10]].map(([y, p]) => sikta(ogon, c, y, p)), traff = fick.map(samma);
      const text = namn(o), istallet = fick.filter((h, j) => !traff[j]).map((h) => namn(h));
      const pa = fick.filter((h, j) => traff[j] && h !== o).map((h) => namn(h));
      const r = { hall: i * 45, traff: traff.filter(Boolean).length, text, istallet, pa };
      if (!bast || r.traff > bast.traff) bast = r;
      if (r.traff === 4) break;
    }
    const stor = (() => { const bb = new P.THREE_Box3().setFromObject(o), s = bb.getSize(new V()); return Math.max(s.x, s.y, s.z) > 3.5; })();
    ut.push({ id, sak: namn(o), utanText: namn(o) === '?', stor, typ: o.userData.typ || o.name || '', pos: c.toArray().map((v) => +v.toFixed(1)), harYta, traff: bast ? bast.traff : 0, fritt: !!bast, hall: bast?.hall ?? null, istallet: bast?.istallet || [], pa: bast?.pa || [] });
  }
  K.matrixWorld.copy(sparM); K.matrixWorldInverse.copy(sparM).invert(); I.sikteHjalp = sparH; P.uppdateraSikte();
  return ut;
}

async function lage(namn, forbered) {
  const ctx = await b.newContext({ viewport: { width: 1000, height: 640 } }), p = await ctx.newPage();
  p.on('pageerror', (e) => fel.push(namn + ': ' + e.message));
  await forbered(p);
  await p.evaluate(() => { const P = window.__printahem; P.THREE_Box3 = P.THREE_Box3 || new (P.kamera.position.constructor)().constructor; });
  // Box3 från three.js finns inte på kroken – hämta konstruktören via en träffyta
  await p.evaluate(() => { const P = window.__printahem; const y = P.interaktor.mal.find((o) => o.autoTraffYta)?.autoTraffYta; if (y) { y.geometry.computeBoundingBox(); P.THREE_Box3 = y.geometry.boundingBox.constructor; } });
  const tom = await p.evaluate(`(${mat})({ bar: false })`);
  const bar = await p.evaluate(`(${mat})({ bar: true })`);
  const brott = await p.evaluate(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'SAK UTAN TRÄFFYTA').map((e) => e.text));
  await ctx.close();
  return { namn, tom, bar, brott };
}
const start = async (p, spar) => {
  await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
  await p.goto(url); await p.waitForTimeout(4000);
  await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
  await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-dagbokkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
  await p.waitForTimeout(1500);
};
const lagen = [];
lagen.push(await lage('nytt spel', (p) => start(p, JSON.stringify({ spelarNamn: 'Test', introSett: true }))));
lagen.push(await lage('efter omladdning', async (p) => { await start(p, JSON.stringify({ spelarNamn: 'Test', introSett: true })); await p.evaluate(() => window.__printahem.spar.spara(true)); await p.waitForTimeout(800); await p.reload(); await p.waitForTimeout(4000); await p.evaluate(() => window.__startaSpel?.()).catch(() => {}); await p.waitForTimeout(3000); for (let i = 0; i < 10 && await p.evaluate(() => !!document.querySelector('.ph-dagbokkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); } }));
for (const n of [1, 2, 3, 4, 5]) lagen.push(await lage(`dag ${n}`, (p) => start(p, sparfil(n))));
// en modell som växer under spelets gång får en ny träffyta (kollen går varannan sekund)
let vaxer = null, plats = null;
{ const ctx = await b.newContext({ viewport: { width: 1000, height: 640 } }), p = await ctx.newPage(); p.on('pageerror', (e) => fel.push('växer: ' + e.message));
  await start(p, JSON.stringify({ spelarNamn: 'Test', introSett: true }));
  const fore = await p.evaluate(() => { const P = window.__printahem, o = P.interaktor.mal.find((x) => x.autoTraffYta && x.children.length > 1 && x.visible && x.autoTraffYta.geometry.parameters.width < 1.2 && x.autoTraffYta.geometry.parameters.height < 1.2); window.__vaxer = o; const g = o.autoTraffYta.geometry.parameters, m = o.children.find((c) => c.isMesh && !c.userData.autoTraff); const k = m.clone(); k.scale.multiplyScalar(2.2); o.add(k); return { namn: o.userData.typ || o.name || '?', b: +g.width.toFixed(2) }; });
  await p.waitForTimeout(2600);
  const efter = await p.evaluate(() => +(window.__vaxer.autoTraffYta?.geometry.parameters.width ?? 0).toFixed(2));
  vaxer = { ...fore, efter };
  // bär man en sak och pekar på fri mark framför sig vinner platsen för saken – siktehjälpen tar inget
  plats = await p.evaluate(() => { const P = window.__printahem, K = P.kamera, V = K.position.constructor, I = P.interaktor, sp = P.spelare, c = new V(), ogon = new V(sp.pos.x, 1.6, sp.pos.z);
    const centra = I.mal.filter((o) => o.autoTraffYta).map((o) => o.autoTraffYta.getWorldPosition(new V()));
    let mal = null; for (let r = 3; r <= 4.5 && !mal; r += 0.5) for (let v = 0; v < 24 && !mal; v++) { const q = new V(sp.pos.x + Math.sin(v * Math.PI / 12) * r, 0, sp.pos.z + Math.cos(v * Math.PI / 12) * r); if (centra.every((x) => Math.hypot(x.x - q.x, x.z - q.z) > 2)) mal = q; }
    if (!mal) return { ok: false, varfor: 'ingen fri mark' };
    const m = new K.matrixWorld.constructor().lookAt(ogon, mal, new V(0, 1, 0)), q = new K.quaternion.constructor().setFromRotationMatrix(m);
    K.matrixWorld.compose(ogon, q, new V(1, 1, 1)); K.matrixWorldInverse.copy(K.matrixWorld).invert(); const save = K.updateMatrixWorld; K.updateMatrixWorld = () => {};
    const h = P.uppdateraSikte(true); K.updateMatrixWorld = save; return { ok: h === null, varfor: h ? 'siktet tog ' + (h.userData.typ || h.name) : 'platsen' }; });
  await ctx.close(); }
await b.close();

// tabellen
const rader = new Map();
for (const l of lagen) for (const [hand, lista] of [['tom', l.tom], ['bär', l.bar]]) for (const x of lista) {
  const k = x.id; if (!rader.has(k)) rader.set(k, { sak: x.sak, yta: x.harYta || x.stor, stor: x.stor, utanText: false, celler: {} });
  const r = rader.get(k); r.yta = r.yta && (x.harYta || x.stor); r.utanText ||= x.utanText; if (!x.utanText) r.sak = x.sak; const cell = `${l.namn}|${hand}`; const f = r.celler[cell];
  if (!f || x.traff < f.traff) r.celler[cell] = x;
}
const kol = lagen.flatMap((l) => ['tom', 'bär'].map((h) => `${l.namn}|${h}`));
const tecken = (x) => !x ? '–' : !x.fritt ? '⚠ skymd' : x.traff < 4 ? `NEJ ${x.traff}/4` : x.pa.length ? 'ja¹' : 'ja';
let md = `# Träffytor – inkorg 21\n\n*${new Date().toISOString().slice(0, 16).replace('T', ' ')} · \`verktyg/test-a076t.mjs\` · från 2 m, 10° fel åt vänster, höger, upp och ner. "tom" = tom hand, "bär" = en sak som går att ställa ut i handen. "–" = saken finns inte eller går inte att klicka i det läget. "stor sak" = större än 3,5 m, själva modellen är träffytan.*\n\n`;
md += `| Sak | Träffyta | ${kol.map((k) => k.replace('|', ' · ')).join(' | ')} |\n|---|---|${kol.map(() => '---').join('|')}|\n`;
const alla = [...rader.values()].sort((a, b) => a.sak.localeCompare(b.sak, 'sv'));
for (const r of alla) md += `| ${r.sak.replace(/\|/g, '/')} | ${r.stor ? 'stor sak' : r.yta ? 'ja' : 'NEJ'} | ${kol.map((k) => tecken(r.celler[k])).join(' | ')} |\n`;
const miss = alla.filter((r) => Object.values(r.celler).some((x) => x.fritt && x.traff < 4));
const skymd = alla.filter((r) => Object.values(r.celler).some((x) => !x.fritt));
const utanYta = alla.filter((r) => !r.yta);
const brott = lagen.flatMap((l) => l.brott), utanText = alla.filter((r) => r.utanText);
md += `\n**Summa:** ${alla.length} saker · missar ${miss.length} · skymda från alla håll ${skymd.length} · utan träffyta ${utanYta.length} · utan text i pekrutan ${utanText.length} · SAK UTAN TRÄFFYTA ${brott.length}\n`;
{ const pa = [...new Set(alla.flatMap((r) => Object.values(r.celler).flatMap((x) => x.pa.map((t) => `${r.sak} → ${t}`))))]; if (pa.length) md += `\n¹ Vid något av felen tar siktet det som står på eller sitter i saken (samma plats): ${pa.join(' · ')}\n`; }
if (skymd.length) md += `\n*Skymd: från alla åtta håll står något annat i vägen för mitten av saken. ${skymd.map((r) => r.sak).join(', ')}*\n`;
fs.writeFileSync(dir + 'traffytor.md', md);
const ut = [
  [`alla saker träffas från 2 m med 10° fel åt fyra håll, tom hand och med sak i handen (${alla.length} saker, missar: ${miss.map((r) => r.sak).join(', ') || 'inga'})`, miss.length === 0 && alla.length > 25],
  [`ingen sak är skymd från alla håll (${skymd.map((r) => r.sak).join(', ') || 'inga'})`, skymd.length === 0],
  [`alla klickbara saker har träffyta (${utanYta.map((r) => r.sak).join(', ') || 'alla'})`, utanYta.length === 0],
  [`allt klickbart visar vad klicket gör i pekrutan (utan text: ${utanText.length})`, utanText.length === 0],
  [`en modell som växer får en större träffyta (${vaxer.namn}: ${vaxer.b} → ${vaxer.efter} m)`, vaxer.efter > vaxer.b * 1.2],
  [`bär man en sak och pekar på fri mark vinner platsen (${plats.varfor})`, plats.ok],
  [`0 SAK UTAN TRÄFFYTA (${brott.slice(0, 3).join(' · ') || 'inga'})`, brott.length === 0],
];
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
for (const r of miss) for (const [k, x] of Object.entries(r.celler)) if (x.fritt && x.traff < 4) console.log(`   ${r.sak} (${k}): siktet tog ${x.istallet.join(', ')}`);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel');
process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
