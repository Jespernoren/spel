// Inkorg 64 p.1 (A-119): ett klick på cykeln = sätt dig och trampa tills printen är klar, blicken på skrivaren,
// cykeln vänd med sadeln mot skrivaren, ingen print vald → repliken, gå iväg → repliken efter 10 s, veven vevar själv.
// Kör: node verktyg/test-a119-cykel.mjs [url]   (riktig mus, inga testkrokar för trampa/veva)
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
const spar = fs.readFileSync(new URL('./sparfiler/start-dag2.json', import.meta.url), 'utf8');
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(5000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]), .ph-kapkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
await p.waitForTimeout(1500);
const sikta = (namn) => p.evaluate((namn) => {
  const P = window.__printahem, sp = P.spelare, o = namn === 'vev' ? P.vevYtaObj() : P.cykelObj(); const V = sp.pos.constructor, c = new V(); o.getWorldPosition(c);
  const I = P.interaktorObj();
  for (let i = 0; i < 24; i++) { const v = i * Math.PI / 12, d = 1.6, x = c.x + Math.sin(v) * d, z = c.z + Math.cos(v) * d;
    sp.pos.set(x, sp.pos.y, z); sp.yaw = Math.atan2(-(c.x - x), -(c.z - z)); sp.pitch = Math.atan2(c.y - 1.6, d);
    P.kameraObj().position.set(x, 1.6, z); P.kameraObj().rotation.set(sp.pitch, sp.yaw, 0, 'YXZ'); P.kameraObj().updateMatrixWorld(true); P.uppdateraSikte?.();
    if (I.hovrad === o) return true; }
  return false;
}, namn);
const klick = async () => { await p.mouse.move(640, 360); await p.mouse.down(); await p.waitForTimeout(120); await p.mouse.up(); };
const tankar = () => p.evaluate(() => window.__printahem.textLogg().filter((e) => e.kalla === 'tanke' || e.kalla === 'sak').map((e) => e.text));
// 0. cykeln vänd mot skrivaren
const rikt = await p.evaluate(() => { const P = window.__printahem, T = P.THREE, c = P.cykelObj(); P.riktaCykel(); c.updateMatrixWorld(true);
  const g = new T.Box3().setFromObject(P.skrivareLista().find((s) => s.id === 'g1').mesh).getCenter(new T.Vector3()); const fram = new T.Vector3(0, 0, 1).applyQuaternion(c.quaternion);
  const till = new T.Vector3(g.x - c.position.x, 0, g.z - c.position.z).normalize(); return Math.acos(Math.max(-1, Math.min(1, fram.x * till.x + fram.z * till.z))) * 180 / Math.PI; });
ut.push([`cykeln står med sadeln mot skrivaren (${rikt.toFixed(1)}° fel)`, rikt < 10]);
// 1. ingen print vald
await p.evaluate(() => { const P = window.__printahem; for (const sk of P.skrivareLista()) { sk.jobb = null; } P.S.strom = 0; });
const s1 = await sikta('cykel'); await klick(); await p.waitForTimeout(2500);
const ingen = (await tankar()).some((t) => /Först måste skrivaren veta vad den ska printa/.test(t));
const sitt0 = await p.evaluate(() => window.__printahem.sitterNu());
ut.push([`utan print: klick på cykeln ger "Först måste skrivaren veta vad den ska printa." och du sätter dig inte (sikte ${s1}, sitter ${!!sitt0})`, s1 && ingen && !sitt0]);
// 2. med print: ett klick, sedan trampar du utan att hålla
const jobb = await p.evaluate(() => { const P = window.__printahem, S = P.S, g1 = P.skrivareLista().find((s) => s.id === 'g1'); S.rullar = Math.max(S.rullar || 0, 3); try { P.startaJobb(g1, { typ: 'nyckelring' }); } catch (e) { return 'fel: ' + e.message; } return !!g1.jobb; });
await sikta('cykel'); const st0 = await p.evaluate(() => window.__printahem.S.strom); await klick(); await p.waitForTimeout(3000);
const [st1, sitt1] = await p.evaluate(() => [window.__printahem.S.strom, window.__printahem.sitterNu()]);
ut.push([`med print (${jobb}): ett klick → du sitter och trampar utan att hålla (ström ${(+st0).toFixed(1)} → ${(+st1).toFixed(1)})`, jobb === true && sitt1?.pa === 'cykel' && st1 > st0]);
const vinkel = await p.evaluate(() => { const P = window.__printahem, T = P.THREE, k = P.kameraObj(); const g = new T.Box3().setFromObject(P.skrivareLista().find((s) => s.id === 'g1').mesh).getCenter(new T.Vector3());
  const d = k.getWorldDirection(new T.Vector3()); const till = g.clone().sub(k.position).normalize(); return Math.acos(Math.max(-1, Math.min(1, d.dot(till)))) * 180 / Math.PI; });
ut.push([`blicken är på skrivaren när du sitter (${vinkel.toFixed(1)}° från mitten)`, vinkel < 20]);
await p.screenshot({ path: 'verktyg/a119/sadeln.png' });
// 3. W reser dig
await p.keyboard.down('KeyW'); await p.waitForTimeout(250); await p.keyboard.up('KeyW'); await p.waitForTimeout(300);
ut.push([`W → du reser dig (${JSON.stringify(await p.evaluate(() => window.__printahem.sitterNu()))})`, !(await p.evaluate(() => window.__printahem.sitterNu()))]);
// 4. klick igen reser dig
await p.evaluate(() => { const P = window.__printahem, g1 = P.skrivareLista().find((s) => s.id === 'g1'); if (!g1.jobb) { g1.klar = null; P.startaJobb(g1, { typ: 'nyckelring' }); } P.S.strom = 0; });
await sikta('cykel'); await klick(); await p.waitForTimeout(600); const a = await p.evaluate(() => !!window.__printahem.sitterNu());
await p.evaluate(() => { const sp = window.__printahem.spelare; sp.pitch = 1.2; });   // tittar upp i himlen, utan att gå
await p.waitForTimeout(300); await klick(); await p.waitForTimeout(400); const bb = await p.evaluate(() => !!window.__printahem.sitterNu());
ut.push([`klick på cykeln sätter dig (${a}), ett klick till reser dig (${!bb})`, a && !bb]);
// 5. gå iväg under Trampa cykeln → repliken efter 10 s
await p.evaluate(() => { const P = window.__printahem, g1 = P.skrivareLista().find((s) => s.id === 'g1'); if (!g1.jobb) { g1.klar = null; P.startaJobb(g1, { typ: 'nyckelring' }); } P.S.strom = 0; });
const stegOk = await p.evaluate(() => { window.__printahem.cykelBortaTestSteg('trampa'); return true; });
await p.evaluate(() => { const P = window.__printahem, sp = P.spelare, c = P.cykelObj(); sp.pos.set(c.position.x + 7, sp.pos.y, c.position.z + 4); });
await p.waitForTimeout(14000);
const bi = await p.evaluate(() => window.__printahem.cykelBortaInfo()); console.log('borta-info', JSON.stringify(bi));
const borta = (await tankar()).some((t) => /^Cykeln\. Jag måste trampa, annars får skrivaren ingen ström\./.test(t));
ut.push([`gå från cykeln under "Trampa cykeln" → "Cykeln. Jag måste trampa, annars får skrivaren ingen ström." efter 10 s (steget satt ${stegOk})`, borta]);
// 6. veven: ett klick vevar tills tratten är tom
await p.evaluate(() => { const S = window.__printahem.S; S.kvarnKopt = true; S.kvarnStar = true; S.kvarn.motor = false; S.kvarn.tratt = 3; S.kvarn.ut = 0; S.kvarn.prog = 0; });
await p.waitForTimeout(400); const sv = await sikta('vev'); const v0 = await p.evaluate(() => [window.__printahem.S.kvarn.tratt, window.__printahem.S.kvarn.prog || 0]); await klick();
await p.waitForTimeout(3500);
const [v1, sittV] = await p.evaluate(() => [[window.__printahem.S.kvarn.tratt, window.__printahem.S.kvarn.prog || 0], window.__printahem.sitterNu()]);
ut.push([`veven: ett klick vevar utan att hålla (sikte ${sv}, tratt ${v0[0]} → ${v1[0]}, prog ${(+v0[1]).toFixed(2)} → ${(+v1[1]).toFixed(2)}, vevar ${sittV?.pa || '-'})`, sv && (v1[0] < v0[0] || v1[1] > v0[1])]);
ut.push([`0 sidfel (${fel.join(' | ') || 'inga'})`, !fel.length]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
await b.close(); process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
