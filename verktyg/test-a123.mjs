// Inkorg 68 (A-123): sak med plats (pil, kistan säger nej), kärran på tippen ovanför marken, UNDER MARKEN, sov-pilen på sängen,
// verktygsbytet sägs, sängens dagboksrad bara på morgonsidan.
// Kör: node verktyg/test-a123.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
fs.mkdirSync(new URL('./a123/', import.meta.url), { recursive: true });
async function oppna(fil) {
  const spar = fs.readFileSync(new URL('./sparfiler/' + fil, import.meta.url), 'utf8');
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(fil + ': ' + e.message));
  await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
  await p.goto(url); await p.waitForTimeout(5000);
  await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
  await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]), .ph-kapkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
  await p.waitForTimeout(1200); return p;
}
const brott = (p, namn) => p.evaluate((namn) => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && namn.includes(e.vem)).map((e) => e.vem + ': ' + e.text), namn);

// 1. bilbatteriet i handen: pilen på cykeln direkt, kistan säger nej med skäl
{ const p = await oppna('start-dag3.json');
  const r = await p.evaluate(async () => { const P = window.__printahem, S = P.S; const i = P.laggTill('byggsats:cykelbatteri'); if (typeof i === 'number') P.byt(i);
    await new Promise((x) => setTimeout(x, 900)); P.uppdateraMalPil?.(); const m = P.malPunkt(), c = P.cykelObj?.() || P.cykel; const cp = c.getWorldPosition(new P.THREE.Vector3());
    const d = m ? Math.hypot(m.x - cp.x, m.z - cp.z) : null; const syns = P.malPilObj?.()?.visible ?? null;
    P.oppnaInv?.(); await new Promise((x) => setTimeout(x, 400)); const k0 = (S.kistan || []).filter((x) => x?.typ === 'byggsats:cykelbatteri').length;
    const hi = S.hotbar.findIndex((x) => x?.typ === 'byggsats:cykelbatteri'); P.invFlytta('h', hi); const k1 = (S.kistan || []).filter((x) => x?.typ === 'byggsats:cykelbatteri').length + (S.ryggsack || []).filter((x) => x?.typ === 'byggsats:cykelbatteri').length;
    await new Promise((x) => setTimeout(x, 1500)); const t = P.textLogg().filter((e) => e.kalla === 'tanke' && /ska sitta på cykeln/.test(e.text)).map((e) => e.text);
    document.querySelector('.ui-stang, [data-stang]')?.click(); return { d, syns, k0, k1, t }; });
  await p.screenshot({ path: new URL('./a123/batteriet-pil.png', import.meta.url).pathname });
  ut.push([`bilbatteriet i handen: pilen på cykeln (${r.d?.toFixed(1)} m från cykeln)`, r.d != null && r.d < 1.5]);
  ut.push([`kistan/ryggsäcken säger nej och var den ska (${r.t.slice(-1)[0] || 'ingen tanke'})`, r.k1 === r.k0 && r.t.some((x) => /Den ska inte ligga/.test(x))]);
  ut.push([`första gången i handen: "Batteriet ska sitta på cykeln, bredvid generatorn." (${r.t[0] || '–'})`, r.t.some((x) => /^Batteriet ska sitta på cykeln/.test(x))]);
  await p.close(); }

// 2. kärran på tippen ligger på marken, och UNDER MARKEN är 0 på flera sparfiler
for (const fil of ['start-dag4.json', 'dag14.json', 'start-dag18.json']) {
  const p = await oppna(fil);
  const r = await p.evaluate(async () => { const P = window.__printahem, S = P.S, T = P.THREE; let karra = null;
    if (!P.antalInvNu('karra')) P.laggTill('karra'); P.valjTyp('karra'); const sp = P.spelare; sp.pos.set(P.TIPP.x, sp.pos.y, P.TIPP.z + 1); P.simulera(1, 0.05);
    await new Promise((x) => setTimeout(x, 600)); const k = P.efterslapande?.karraPivot;
    return { brott: P.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'UNDER MARKEN').map((e) => e.text) }; });
  await p.waitForTimeout(6500);
  const br = await brott(p, ['UNDER MARKEN']);
  if (fil === 'start-dag4.json') await p.screenshot({ path: new URL('./a123/karran-tippen.png', import.meta.url).pathname });
  ut.push([`${fil}: 0 UNDER MARKEN med kärran på tippen (${br.slice(0, 2).join(' · ') || 'inga'})`, !br.length]);
  await p.close();
}

// 3. sov-steget: pilen på sängen, pekrutan säger Sov
{ const p = await oppna('start-dag3.json');
  const r = await p.evaluate(async () => { const P = window.__printahem, S = P.S; S.sang = true; S.steg = P.STEG.findIndex((x) => x.sov && x.id === 'sov3'); S.vakenTid = 999;
    await new Promise((x) => setTimeout(x, 400)); const m = P.malPunkt(), sg = P.taltSang.getWorldPosition(new P.THREE.Vector3());
    const t = P.taltSang.userData.interaktion?.text?.(); return { d: m ? Math.hypot(m.x - sg.x, m.z - sg.z) : null, t }; });
  ut.push([`sov-steget: pilen på sängen (${r.d?.toFixed(2)} m) och pekrutan "${r.t}"`, r.d != null && r.d < 0.5 && r.t === 'Sov']);
  await p.close(); }

// 4. dag 1: verktygsbytet sägs, sängens rad står bara på morgonsidan
{ const p = await oppna('start-dag1.json');
  await p.evaluate(() => { const P = window.__printahem, S = P.S; S.skyltUppe = false; S.steg = 0; S.storyMedan = []; P.byt?.(0); });
  await p.waitForTimeout(9000);
  const r = await p.evaluate(() => window.__printahem.textLogg().filter((e) => /Hammaren ligger i raden/.test(e.text || '')).map((e) => e.kalla));
  ut.push([`dag 1: "Hammaren ligger i raden. Hjulet eller 2." sägs (${r.join(', ') || 'inte'})`, r.length > 0]);
  await p.close(); }
// 5. säcken i vänster hand: tom, halv och full
{ const p = await oppna('start-dag3.json');
  for (const [namn, n] of [['tom', 0], ['halv', 5], ['full', 10]]) {
    const r = await p.evaluate(async (n) => { const P = window.__printahem, S = P.S; P.byt(0); let i = 0;
      while (P.hand.saker.filter((x) => x.userData.typ === 'skrap').length < n && i++ < 40) { const s = P.skrapLista.filter((x) => !x.userData.tung && P.kanLyfta(x)).sort((a, b) => a.position.distanceTo(P.spelare.pos) - b.position.distanceTo(P.spelare.pos))[0]; if (!s) break; P.plockaSkrap(s, true); }
      P.simulera(1, 0.05); await new Promise((x) => setTimeout(x, 400)); return { syns: P.sackSyns?.() ?? null, n: P.hand.saker.length }; }, n);
    await p.screenshot({ path: new URL(`./a123/sacken-${namn}.png`, import.meta.url).pathname });
    if (namn === 'full') ut.push([`säcken syns i vänster hand och fylls (${r.n} skräp, bilder verktyg/a123/sacken-*.png)`, r.syns === true && r.n >= 8]);
  }
  await p.close(); }
ut.push([`0 sidfel (${fel.slice(0, 3).join(' · ') || 'inga'})`, !fel.length]);
await b.close();
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
process.exit(ut.every((x) => x[1]) ? 0 : 1);
