// Inkorg 10f (Jesper 18:45): slangen följer skrivaren och har en största längd. Kopplad = slangen når. Kör: node verktyg/test-a076q.mjs [url] → verktyg/a076/q-*.png
// flytta en kopplad skrivare långt bort (kopplingen bryts, skälet visas) → tillbaka (kopplad igen) → ladda om (samma resultat). 0 SLANG I LUFTEN.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [], fel = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { window.__brott = []; window.__textLogg = (k, v, t) => { if (k === 'brott') window.__brott.push(v + ' ' + t); }; if (!sessionStorage.getItem('a076q')) { sessionStorage.setItem('a076q', 1); localStorage.clear(); localStorage.setItem('printa-hem:vridKamera', 'av'); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test', introSett: true, skyltUppe: true, skrivareLastad: true, skrivareStar: true, cykelStar: true, generatorStar: true, cykelOmbyggd: true, kvarnKopt: true, kvarnStar: true, rullSlut: true, aliMott: true })); } });
const H = (f, a) => p.evaluate(f, a);
const starta = async () => { await p.waitForFunction(() => window.__startaSpel && window.__slang, null, { timeout: 15000 }); await H(() => window.__startaSpel()); await p.waitForTimeout(2500); for (let i = 0; i < 12; i++) { if (await H(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort'))) await p.keyboard.press('Enter'); await p.waitForTimeout(300); } };
const lage = () => H(() => { const L = window.__slang(), g1 = window.__printahem.skrivare.find((x) => x.id === 'g1'); L.uppdateraSlangar(); const m = L.matarSlang, b = g1.mesh.getWorldPosition(g1.mesh.position.clone()); return { kopplad: L.slangNar(g1), avst: +L.slangAvst(g1).toFixed(2), max: +L.slangMax().toFixed(2), synlig: !!m.visible, slutAvst: m.userData.b ? +m.userData.b.distanceTo(b.clone().add({ x: 0.35, y: 0.25, z: 0 })).toFixed(2) : null, text: L.skrivarText(g1) }; });
const titta = () => H(() => { const P = window.__printahem, L = window.__slang(), t = L.tornPunkt(); P.spelare.pos.set(t.x + 3, P.spelare.pos.y, t.z + 5); P.spelare.yaw = Math.atan2(3, 5); P.spelare.pitch = -0.35; });
await p.goto(url); await starta();
await p.waitForTimeout(800);
const l0 = await lage(); await titta(); await p.waitForTimeout(600); await p.screenshot({ path: dir + 'q-1-kopplad.png' });
ut.push([`på sin plats: kopplad (${l0.kopplad}), ${l0.avst} m av ${l0.max} m, slangen syns (${l0.synlig}) och slutar vid skrivaren (${l0.slutAvst} m ifrån)`, l0.kopplad && l0.synlig && l0.slutAvst < 0.05]);
// flytta långt bort
await H(() => { const L = window.__slang(); L.gammal.position.x += 12; L.gammal.updateMatrixWorld(true); });
await p.waitForTimeout(1200);
const l1 = await lage(); await titta(); await p.waitForTimeout(600); await p.screenshot({ path: dir + 'q-2-for-langt-bort.png' });
ut.push([`flyttad långt bort: inte kopplad (${!l1.kopplad}), ${l1.avst} m > ${l1.max} m, ingen slang (${!l1.synlig}), skälet: "${l1.text}"`, !l1.kopplad && !l1.synlig && /slangen når inte tornet/i.test(l1.text)]);
// tillbaka
await H(() => { const L = window.__slang(); L.gammal.position.x -= 12; L.gammal.updateMatrixWorld(true); });
await p.waitForTimeout(1200);
const l2 = await lage(); await titta(); await p.waitForTimeout(600); await p.screenshot({ path: dir + 'q-3-tillbaka.png' });
ut.push([`tillbaka: kopplad igen (${l2.kopplad}), slangen följer med (${l2.synlig}, ${l2.slutAvst} m från skrivaren)`, l2.kopplad && l2.synlig && l2.slutAvst < 0.05]);
// en bit bort men inom räckvidd: slangen följer skrivaren
await H(() => { const L = window.__slang(); L.gammal.position.z += 1.5; L.gammal.updateMatrixWorld(true); });
await p.waitForTimeout(1200);
const l3 = await lage(); await titta(); await p.waitForTimeout(600); await p.screenshot({ path: dir + 'q-4-flyttad-inom-rackvidd.png' });
ut.push([`flyttad 1,5 m inom räckvidd: kopplad (${l3.kopplad}), slangen dragen till nya platsen (${l3.slutAvst} m från skrivaren)`, l3.kopplad && l3.synlig && l3.slutAvst < 0.05]);
await H(() => { const L = window.__slang(); L.gammal.position.z -= 1.5; L.gammal.updateMatrixWorld(true); });
// ladda om
await H(() => window.__printahem.spar?.spara?.(true)); await p.reload(); await starta(); await p.waitForTimeout(800);
const l4 = await lage();
ut.push([`efter omladdning: samma resultat (kopplad ${l4.kopplad}, slangen ${l4.synlig}, ${l4.slutAvst} m från skrivaren)`, l4.kopplad === l0.kopplad && l4.synlig === l0.synlig && l4.slutAvst < 0.05]);
const brott = await H(() => window.__brott.filter((x) => x.startsWith('SLANG I LUFTEN')));
ut.push([`0 SLANG I LUFTEN (${brott.join(' · ') || 'inga'})`, !brott.length]);
ut.push([`0 sidfel (${fel.join(' · ') || 'inga'})`, !fel.length]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
await b.close();
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
