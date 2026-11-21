// Inkorg 41 (A-098): det du har i handen är det du använder. Kör: node verktyg/test-a098.mjs [url]
// (a) hammaren vald + klick på en pet-flaska → handen syns och flaskan plockas
// (b) 3 skräp i famnen + klick på brädhögen → hammaren syns och slår, siffran 3 står kvar
// Skärmdumpar av verktygsraden i verktyg/a098/.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const dir = new URL('./a098/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 20000 }); await p.evaluate(() => window.__startaSpel());
await p.waitForTimeout(2500); await p.keyboard.press('Enter');
for (let i = 0; i < 10; i++) { if (await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden])'))) await p.keyboard.press('Enter'); await p.waitForTimeout(600); }
await p.waitForTimeout(2500);
const rad = { x: 330, y: 632, width: 620, height: 88 };
// verktygsraden med förslaget (pilen över hammaren) och den valda platsen (handen)
const forslag = await p.evaluate(() => { const v = document.querySelector('.ph-hotbar .ph-slot.vald'), f = document.querySelector('.ph-hotbar .ph-pekas'); const cs = f && getComputedStyle(f); return { vald: v?.dataset.i, forslag: f?.dataset.i ?? null, forslagRam: cs ? cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0 : false, forslagFylld: f ? f.classList.contains('vald') : false }; });
await p.screenshot({ path: dir + 'rad-forslag.png', clip: rad });
ut.push([`förslaget har bara pilen, ingen ram (vald plats ${forslag.vald}, förslag ${forslag.forslag}, ram ${forslag.forslagRam})`, forslag.forslag !== null && !forslag.forslagRam && !forslag.forslagFylld]);
const sikta = (re) => p.evaluate((re) => {
  const P = window.__printahem, I = P.interaktorObj(), sp = P.spelare, V = sp.pos.constructor, rx = new RegExp(re, 'i');
  const txt = (o) => { try { const t = o.userData.interaktion.text; return String(typeof t === 'function' ? t(o) : t || ''); } catch { return ''; } };
  const syn = (o) => { for (let x = o; x; x = x.parent) if (!x.visible) return false; return true; };
  const kand = I.mal.filter((x) => syn(x) && rx.test(txt(x)));
  for (const o of kand) { const c = new (P.THREE.Box3)().setFromObject(o.autoTraffYta || o).getCenter(new V());
    for (let i = 0; i < 16; i++) { const v = i * Math.PI / 8, d = 2.2, x = c.x + Math.sin(v) * d, z = c.z + Math.cos(v) * d;
      sp.pos.set(x, sp.pos.y, z); sp.yaw = Math.atan2(-(c.x - x), -(c.z - z)); sp.pitch = Math.atan2(c.y - 1.6, d);
      P.kameraObj().position.set(x, 1.6, z); P.kameraObj().rotation.set(sp.pitch, sp.yaw, 0, 'YXZ'); P.kameraObj().updateMatrixWorld(true); P.uppdateraSikte();
      let ok = false; for (let h = I.hovrad; h; h = h.parent) if (h === o) ok = true; if (ok) return { namn: txt(o).slice(0, 40) }; } }
  return { fel: 'siktet tog aldrig ' + re }; }, re);
const klick = async () => { await p.mouse.move(640, 360); await p.mouse.down(); await p.waitForTimeout(80); await p.mouse.up(); await p.waitForTimeout(700); };
const lage = () => p.evaluate(() => { const P = window.__printahem, S = P.S; return { vald: S.vald, typ: S.hotbar[S.vald]?.typ || 'handen', handSyns: P.hand.grupp.visible, famn: P.hand.saker.length, skylt: !!S.skyltUppe, slag: S.skyltSlag ?? null, brott: P.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'FEL I HANDEN').map((e) => e.text) }; });
// (a)
await p.keyboard.press('Digit2'); await p.waitForTimeout(500);
const fore = await lage();
const s1 = await sikta('pet-flaska|Plocka');
const a0 = await lage(); await klick(); const a = await lage();
const tanke = await p.evaluate(() => window.__printahem.textLogg().some((e) => e.kalla === 'tanke' && /Hammaren får vänta/.test(e.text)));
await p.screenshot({ path: dir + 'a-hammaren-till-handen.png' });
await p.screenshot({ path: dir + 'rad-a-efter.png', clip: rad });
ut.push([`(a) ${fore.typ} vald, klick på "${s1.namn || s1.fel}": nu ${a.typ}, handen syns ${a.handSyns}, i famnen ${a0.famn} → ${a.famn}, tanken "Hammaren får vänta." ${tanke}`, fore.typ === 'hammare' && a.vald === 0 && a.handSyns && a.famn === a0.famn + 1 && tanke]);
// (b) tre skräp i famnen
for (let i = 0; i < 6 && (await lage()).famn < 3; i++) { await sikta('pet-flaska|Plocka|Yoghurt|påse|skräp'); await klick(); }
// dag 1 före kvarnen rymmer famnen ett skräp – lägg två till direkt i famnen (förberedelse, klicket nedan är det som testas)
await p.evaluate(() => { const P = window.__printahem, I = P.interaktorObj(); P.hand.kapacitet = 3; for (const o of I.mal.filter((x) => x.userData?.typ === 'skrap' && x.visible).slice(0, 3 - P.hand.saker.length)) { o.parent?.remove(o); I.avregistrera(o); P.hand.plocka(o); } });
const b0 = await lage();
const s2 = await sikta('Spika|hammaren');
await p.mouse.move(640, 360); await p.mouse.down(); await p.waitForTimeout(80); await p.mouse.up(); await p.waitForTimeout(650); const b1 = await lage();
for (let i = 0; i < 40 && !(await p.evaluate(() => { const h = document.querySelector('.ph-hotbar'); return !!h && h.offsetParent !== null && getComputedStyle(h).opacity > 0.9 && !document.querySelector('.ph-med:not([hidden])'); })); i++) { if (await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden])'))) await p.keyboard.press('Enter'); await p.waitForTimeout(500); }
await p.waitForTimeout(600); await p.screenshot({ path: dir + 'rad-b-efter.png', clip: rad }); await p.screenshot({ path: dir + 'b-handen-till-hammaren.png' });
const siffra = await p.evaluate(() => document.querySelector('.ph-hotbar [data-i="0"] .n')?.textContent || '');
ut.push([`(b) ${b0.famn} skräp i famnen med ${b0.typ}, klick på "${s2.namn || s2.fel}": nu ${b1.typ}, handen syns ${b1.handSyns}, famnen ${b1.famn}, siffran på plats 1 "${siffra}"`, b0.famn === 3 && b1.typ === 'hammare' && !b1.handSyns && b1.famn === 3 && /3/.test(siffra)]);
// inkorg 41b: samma regel för alla verktyg
await p.waitForTimeout(1500);
for (let i = 0; i < 10; i++) { if (await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden])'))) await p.keyboard.press('Enter'); await p.waitForTimeout(300); }
const sattRad = (f) => p.evaluate(f);
const siktaObj = (f) => p.evaluate((f) => { const P = window.__printahem, I = P.interaktorObj(), sp = P.spelare, V = sp.pos.constructor; const o = new Function('P', 'return ' + f)(P); if (!o) return { fel: 'ingen sak' };
  const c = new (P.THREE.Box3)().setFromObject(o.autoTraffYta || o).getCenter(new V());
  for (let i = 0; i < 16; i++) { const v = i * Math.PI / 8, d = 2.2, x = c.x + Math.sin(v) * d, z = c.z + Math.cos(v) * d; sp.pos.set(x, sp.pos.y, z); sp.yaw = Math.atan2(-(c.x - x), -(c.z - z)); sp.pitch = Math.atan2(c.y - 1.6, d); P.kameraObj().position.set(x, 1.6, z); P.kameraObj().rotation.set(sp.pitch, sp.yaw, 0, 'YXZ'); P.kameraObj().updateMatrixWorld(true); P.uppdateraSikte(); let ok = false; for (let h = I.hovrad; h; h = h.parent) if (h === o) ok = true; if (ok) return { namn: 'ok' }; }
  return { fel: 'siktet tog den aldrig' }; }, f);
// gripen: plats 1 är gripen, hammaren vald, klick på skräp
await sattRad(() => { const S = window.__printahem.S; S.grip = true; window.__printahem.hand.saker.splice(0); });
await p.keyboard.press('Digit2'); await p.waitForTimeout(300);
const g0 = await lage(); await sikta('pet-flaska|Plocka|Yoghurt|påse|skräp'); await klick(); const g1 = await lage();
ut.push([`gripen: ${g0.typ} vald, klick på skräp → ${g1.typ} (plats ${g1.vald}), i famnen ${g0.famn} → ${g1.famn}`, g0.typ === 'hammare' && g1.vald === 0 && g1.famn === g0.famn + 1]);
// magneten vald: klick på skräp – magneten får vara kvar (den plockar skräp)
await sattRad(() => { const S = window.__printahem.S; S.hotbar[4] = { typ: 'magnet', n: 1 }; window.__printahem.hand.saker.splice(0); });
await p.keyboard.press('Digit5'); await p.waitForTimeout(300);
const m0 = await lage(); await sikta('pet-flaska|Plocka|Yoghurt|påse|skräp'); await klick(); const m1 = await lage();
ut.push([`magneten: ${m0.typ} vald, klick på skräp → ${m1.typ} kvar i bild`, m0.typ === 'magnet' && m1.typ === 'magnet']);
// pirran: röd back, hammaren vald
await sattRad(() => { const P = window.__printahem, S = P.S; S.hotbar[5] = { typ: 'sackkarra', n: 1 }; const sp = P.spelare.pos; P.laggSkrap(sp.x + 3, sp.z + 3, P.variantFor('rodback'), 0); });
await p.keyboard.press('Digit2'); await p.waitForTimeout(300);
const r0 = await lage(); const rs = await siktaObj("P.skrapLista.filter((x) => x.userData.sort === 'rodback').slice(-1)[0]"); await klick(); const r1 = await lage();
ut.push([`pirran: ${r0.typ} vald, klick på en röd back (${rs.namn || rs.fel}) → ${r1.typ}`, r0.typ === 'hammare' && r1.typ === 'sackkarra']);
// montering: uppgiften är vindsnurran, den ligger i raden, handen vald, klick på skjulet
await sattRad(() => { const P = window.__printahem, S = P.S; S.hotbar[6] = { typ: 'byggsats:vindsnurra', n: 1 }; try { P.lasUpp('vindsnurra'); } catch {} S.steg = P.STEGLISTA().findIndex((x) => x.id === 'vindsnurra'); });
await p.keyboard.press('Digit1'); await p.waitForTimeout(300);
const k0 = await lage(); const ks = await siktaObj("P.MONTERA['byggsats:vindsnurra'].mal()[0]"); await klick(); const k1 = await p.evaluate(() => ({ kvar: window.__printahem.S.hotbar.some((x) => x?.typ === 'byggsats:vindsnurra'), steg: window.__printahem.S.steg }));
ut.push([`montering: ${k0.typ} vald, klick på skjulet (${ks.namn || ks.fel}) → vindsnurran tagen ur raden och monterad (${!k1.kvar})`, ks.namn === 'ok' && !k1.kvar]);
// inkorg 50 p.1: motorsågen (slyet) och vaskpannan (bäcken) – hammaren vald, verktyget ligger i raden (motorsågen i ryggsäcken)
await sattRad(() => { const S = window.__printahem.S; S.hotbar[7] = { typ: 'vaskpanna', n: 1 }; const r = S.ryggsack.findIndex((x) => !x); S.ryggsack[r >= 0 ? r : 0] = { typ: 'motorsag', n: 1 }; S.hotbar[8] = { typ: 'hacka', n: 1 }; window.__printahem.slyKlumpar.forEach((k) => { k.g.visible = true; }); S.guldAder = true; window.__printahem.ader.visible = true; });
await p.keyboard.press('Digit2'); await p.waitForTimeout(300);
{ const s0 = await lage(); const ss = await siktaObj('P.slyKlumpar[0].g'); await klick(); const s1 = await lage();
  ut.push([`motorsågen: ${s0.typ} vald, motorsågen i ryggsäcken, klick på slyet (${ss.namn || ss.fel}) → ${s1.typ}`, s1.typ === 'motorsag']); }
await p.keyboard.press('Digit2'); await p.waitForTimeout(300);
{ const v0 = await lage(); const vs = await p.evaluate(() => { const P = window.__printahem, I = P.interaktorObj(), y = P.ader.children.find((c) => c.isMesh && c.material?.colorWrite === false); I.hovrad = y; I.aktivera(); return { namn: y ? 'bäckens yta (siktet satt direkt, bäcken ligger i svackan)' : null, fel: 'ingen yta' }; }); await p.waitForTimeout(300); const v1 = await lage();
  ut.push([`vaskpannan: ${v0.typ} vald, klick på bäcken (${vs.namn || vs.fel}) → ${v1.typ}`, v1.typ === 'vaskpanna']); }
{ const h = await p.evaluate(() => window.__printahem.verktygFor(window.__printahem.bergYta));
  ut.push([`hackan: ådern i gruvan kräver ${h} (samma tabell, klicket tar fram den)`, h === 'hacka']); }
const allaBrott = await p.evaluate(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'FEL I HANDEN').map((e) => e.text));
ut.push([`0 FEL I HANDEN (${allaBrott.join(' · ') || 'inga'})`, !allaBrott.length]);
ut.push([`0 sidfel (${fel.slice(0, 2).join(' · ') || 'inga'})`, !fel.length]);
await b.close();
for (const [t, o] of ut) console.log(`${o ? '✓' : '✗'} ${t}`);
process.exit(ut.every(([, o]) => o) ? 0 : 1);
