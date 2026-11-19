// A-076 tillägg 14:35: (1) det man ställer står exakt där det ställdes – direkt = efter 5 s = efter omladdning (FLYTTAD EFTER STÄLL),
// (2) pilen följer avståndet och syns tillsammans med bilden på 2, 3, 5 och 15 m, (3) etiketten "Printa · 15 % av rullen".
// Kör: node verktyg/test-a076i.mjs [url] → verktyg/a076/i-*.png
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('f')) { sessionStorage.setItem('f', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url); await p.waitForTimeout(5000);
const H = (f, a) => p.evaluate(f, a);
await p.click('.br-starta'); await p.waitForTimeout(2500); await p.keyboard.press('Enter'); await p.waitForTimeout(4000);
for (let i = 0; i < 40 && !(await p.evaluate(() => !!document.querySelector('.ph-dagbokkort'))); i++) await p.waitForTimeout(250); await p.keyboard.press('Enter'); await p.waitForTimeout(1500);   /* A-076 14:22: morgonsidan stängs med FORTSÄTT */
// 1. ställ skrivaren, cykeln, generatorn, kvarnen och en vanlig sak (ett bord)
const direkt = await H(async () => {
  const P = window.__printahem, S = P.S, w = (ms) => new Promise((r) => setTimeout(r, ms)), aktivera = () => P.startYta.userData.interaktion.aktivera();
  S.skyltUppe = true; S.skrivareLastad = true; P.byt(P.laggTill('skrivareS')); P.ritaStart(); aktivera(); await w(300);
  S.cykelBuren = true; P.byt(P.laggTill('cykelS')); P.ritaStart(); aktivera(); await w(300);
  S.generatorTagen = true; P.byt(P.laggTill('byggsats:generator')); P.ritaStart(); aktivera(); await w(300);
  const fore = JSON.parse(JSON.stringify(S.stallPos || {}));
  P.byt(P.laggTill('byggsats:gammalkvarn')); P.ritaStart(); aktivera(); await w(300);
  P.placera({ id: 'p' + (S.nastaId++), typ: 'bord', x: -8, z: 9, r: 0, r8: 0 }); await w(300);
  return { pos: JSON.parse(JSON.stringify(S.stallPos || {})), fore, omb: S.cykelOmbyggd };
});
await p.waitForTimeout(5500);
const efter5 = await H(() => { const P = window.__printahem, r = {}; for (const k of Object.keys(P.S.stallPos || {})) r[k] = P.stallNu(k); return { r, omb: P.S.cykelOmbyggd }; });
await p.screenshot({ path: dir + 'i-stallda.png' });
const diff = (a, b2) => a && b2 ? Math.hypot(a[0] - b2[0], a[1] - b2[1], a[2] - b2[2]) : 99;
const nycklar = Object.keys(direkt.pos);
const d5 = nycklar.map((k) => [k, diff(direkt.pos[k], efter5.r[k])]);
ut.push([`${nycklar.length} saker ställda (${nycklar.join(', ')}) · cykeln monterad (${efter5.omb}) · efter 5 s: ${d5.map(([k, d]) => `${k} ${d.toFixed(3)}`).join(', ')}`, nycklar.length >= 5 && efter5.omb && d5.every(([, d]) => d < 0.02)]);
const genMont = diff(direkt.fore.generator, efter5.r.generator), cykMont = diff(direkt.fore.cykel, efter5.r.cykel);
ut.push([`monteringen flyttar inget: generatorn ${genMont.toFixed(3)} m, cykeln ${cykMont.toFixed(3)} m`, genMont < 0.02 && cykMont < 0.02]);
// omladdning
await p.waitForTimeout(1500); await p.reload(); await p.waitForTimeout(6000); await p.screenshot({ path: dir + 'i-omladdad-meny.png' }); console.log('fel:', fel.join(' | '), 'knappar:', await H(() => [...document.querySelectorAll('button')].filter((x) => x.offsetParent).map((x) => x.className + ':' + x.textContent.trim().slice(0, 20)).join(' | ')));
await p.click('.br-starta', { timeout: 8000 }).catch(() => {}); for (let i = 0; i < 40 && !(await H(() => !!window.__printahem?.S?.stallPos).catch(() => false)); i++) await p.waitForTimeout(500); await p.keyboard.press('Enter').catch(() => {}); await p.waitForTimeout(3000);
const omladd = await H(() => { const P = window.__printahem, r = {}; for (const k of Object.keys(P.S.stallPos || {})) r[k] = P.stallNu(k); return r; });
const dl = nycklar.map((k) => [k, diff(direkt.pos[k], omladd[k])]);
ut.push([`efter omladdning: ${dl.map(([k, d]) => `${k} ${d.toFixed(3)}`).join(', ')}`, dl.every(([, d]) => d < 0.02)]);
const brott = await H(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'FLYTTAD EFTER STÄLL').map((e) => e.text));
ut.push([`FLYTTAD EFTER STÄLL: ${brott.length} ${brott.slice(0, 2).join(' · ')}`, !brott.length]);
// 2. pilen vid skrivaren på 2, 3, 5 och 15 m
await H(() => { const P = window.__printahem; P.S.steg = P.STEG.findIndex((x) => x.id === 'valjModell'); }); await p.waitForTimeout(7000);
const pil = [];
for (const m of [2, 3, 5, 15]) {
  const r = await H(async (m) => {
    const P = window.__printahem, S = P.S, sp = P.spelare, w = (ms) => new Promise((r) => setTimeout(r, ms));
    const g = P.gammal.getWorldPosition(sp.pos.clone());
    sp.pos.x = g.x + m; sp.pos.z = g.z; sp.yaw = Math.PI / 2; sp.pitch = -Math.atan2(1.6 - 0.6, m);
    await w(900);
    const K = P.kamera, mp = P.malPil; if (!mp.visible) return { syns: false };
    mp.updateMatrixWorld(true); const v = mp.getWorldPosition(mp.position.clone()).project(K);
    const bild = mp.children.find((c) => c.isSprite); const bv = bild ? bild.getWorldPosition(mp.position.clone()).project(K) : null;
    return { syns: true, skala: +mp.scale.x.toFixed(2), hojd: +(mp.position.y).toFixed(2), pil: [v.x, v.y].map((x) => +x.toFixed(2)), bild: bv && [bv.x, bv.y].map((x) => +x.toFixed(2)), bildSyns: !!bild?.visible };
  }, m);
  await p.screenshot({ path: dir + `i-pil-${m}m.png` });
  const inom = (q) => q && Math.abs(q[0]) < 0.95 && Math.abs(q[1]) < 0.95;
  pil.push([m, r, r.syns && inom(r.pil) && (!r.bildSyns || inom(r.bild))]);
}
ut.push([`pilen och bilden i bild: ${pil.map(([m, r, ok]) => `${m} m ${ok ? '✓' : '✗'} (skala ${r.skala}, höjd ${r.hojd}, pil ${r.pil}, bild ${r.bildSyns ? r.bild : 'dold'})`).join(' · ')}`, pil.every((x) => x[2])]);
ut.push([`pilen växer med avståndet: ${pil.map(([m, r]) => r.skala).join(' < ')}`, pil[0][1].skala < pil[2][1].skala && pil[2][1].skala < pil[3][1].skala && pil[0][1].skala <= 0.5]);
const putom = await H(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'PIL UTOM BILD').map((e) => e.text));
ut.push([`PIL UTOM BILD: ${putom.length} ${putom.slice(0, 2).join(' · ')}`, !putom.length]);
// 3. etiketten
const et = await H(() => { const P = window.__printahem, sk = P.skrivare.find((x) => x.id === 'g1'); return sk ? P.skrivarText(sk) : ''; });
ut.push([`etiketten: "${et}"`, /^Printa · \d+ % av rullen$|^Printa · /.test(et) && !/\(/.test(et) || !/^Printa/.test(et)]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
