// A-076 tillägg 12:25: hammaren i raden från start, hjulet lärs först, skylten kräver hammaren, skrivaren går inte att ta före skylten,
// ingen kvittens i efterhand. Kör: node verktyg/test-a076e.mjs [url] → verktyg/a076/e-*.png
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('e')) { sessionStorage.setItem('e', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url); await p.waitForTimeout(5000);
const H = (f, a) => p.evaluate(f, a);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())); await p.waitForTimeout(2500); await p.keyboard.press('Enter'); await p.waitForTimeout(6000);
for (let i = 0; i < 40 && !(await H(() => !!document.querySelector('.ph-dagbokkort'))); i++) await p.waitForTimeout(250); await p.keyboard.press('Enter'); await p.waitForTimeout(1500);   /* A-076 14:22: morgonsidan stängs med FORTSÄTT */
// 1. inkorg 20: hammaren och generatorn i verktygsraden från start, ingen hammare på brädorna, första hjälpen är hjulet
let k1 = null; for (let i = 0; i < 40; i++) { await p.waitForTimeout(400); k1 = await H(() => document.querySelector('.ph-kontroll')?.textContent || null); if (/hjulet/i.test(k1 || '')) break; }
const s1 = await H(() => { const P = window.__printahem; return { rad: P.S.hotbar.slice(0, 3).map((x) => x?.typ || 'hand').join(' · '), hand: P.valdTyp() || 'tom', paBrador: P.bradhog.children.some((o) => o.children?.length === 2 && o.children[1].material?.color?.getHex?.() === 0x444444) }; });
await p.screenshot({ path: dir + 'e-hammaren-i-raden.png' });
ut.push([`verktygsraden från start: ${s1.rad}, handen ${s1.hand}, ingen hammare på brädorna (${!s1.paBrador}), första hjälpen: "${k1}"`, s1.rad === 'hand · hammare · byggsats:generator' && s1.hand === 'tom' && !s1.paBrador && /Rulla hjulet för att ta hammaren/.test(k1 || '')]);
// 2. brädorna med tom hand: "Rulla hjulet för att ta hammaren."
const l0 = await H(() => window.__printahem.textLogg().length);
await H(() => window.__printahem.bradhog.userData.interaktion.aktivera()); await p.waitForTimeout(2500);
const s2 = await H((l0) => { const P = window.__printahem; return { uppe: !!P.S.skyltUppe, sagt: P.textLogg().slice(l0).filter((e) => e.vem === 'du').map((e) => e.text) }; }, l0);
ut.push([`brädorna med tom hand: ingen skylt (${!s2.uppe}), "${s2.sagt.find((t) => /hammaren/.test(t)) || ''}"`, !s2.uppe && s2.sagt.some((t) => /Rulla hjulet för att ta hammaren/.test(t))]);
// 3. skrivaren före skylten: spärrad
const l1 = await H(() => window.__printahem.textLogg().length);
await H(() => window.__printahem.vagCykel.userData.interaktion.aktivera()); await p.waitForTimeout(2500);
const s3 = await H((l1) => { const P = window.__printahem; return { lastad: !!P.S.skrivareLastad, sagt: P.textLogg().slice(l1).filter((e) => e.vem === 'du').map((e) => e.text), pek: P.vagCykel.userData.interaktion.text() }; }, l1);
await p.screenshot({ path: dir + 'e-forst-skylten.png' });
ut.push([`skrivaren före skylten: inte tagen (${!s3.lastad}), "${s3.sagt.find((t) => /Först skylten/.test(t)) || ''}", pekrutan "${s3.pek}"`, !s3.lastad && s3.sagt.some((t) => /Först skylten/.test(t)) && /Först skylten/.test(s3.pek)]);
// 4. hjulet → hammaren → spika
await p.mouse.wheel(0, 120); await p.waitForTimeout(600);
const s4 = await H(() => window.__printahem.valdTyp());
await H(() => window.__printahem.bradhog.userData.interaktion.aktivera());
await p.waitForTimeout(1300); const dub = await H(() => { const P = window.__printahem, hv = (o) => { for (let x = o; x; x = x.parent) if (!x.visible) return false; return true; }; let n = 0; P.kamera.traverse((o) => { if (o.userData?.iHanden === 'hammare' && hv(o)) n++; }); return { anim: n === 1, hand: hv(P.hand.grupp) }; });   /* inkorg 10b: hammaren i handen är den som slår */
await p.screenshot({ path: dir + 'e-mitt-i-slaget.png' });
ut.push([`mitt i slaget: exakt en hammare (${dub.anim}, handen dold ${!dub.hand})`, dub.anim && !dub.hand]);
for (let i = 0; i < 30 && !(await H(() => !!window.__printahem.S.skyltUppe)); i++) await p.waitForTimeout(500);
await p.waitForTimeout(1500);
const s5 = await H(() => !!window.__printahem.S.skyltUppe);
ut.push([`hjulet tar hammaren (${s4}), sedan spikas skylten (${s5})`, s4 === 'hammare' && s5]);
// 5. nu går skrivaren att ta
await H(() => { const P = window.__printahem; P.byt(0); P.vagCykel.userData.interaktion.aktivera(); }); await p.waitForTimeout(800);
const s6 = await H(() => !!window.__printahem.S.skrivareLastad);
ut.push([`efter skylten går skrivaren att ta (${s6})`, s6]);
// 6. skyddsnätet: en kvittens som kommer efter nästa steg spelas inte
const s7 = await H(() => window.__printahem.efterslapande('skylt'));
const br = await H(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && ['EFTERSLÄPANDE KVITTENS', 'DUBBLETT I HANDEN'].includes(e.vem)).map((e) => e.vem + ': ' + e.text));
ut.push([`skylt-kvittensen räknas som efterslängd när skrivaren är tagen (${s7}) · EFTERSLÄPANDE KVITTENS: ${br.length}`, s7 && !br.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
