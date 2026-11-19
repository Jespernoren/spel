// A-076 tillägg 14:00: kontrollhjälpen följer kedjan har saken → har den vald → siktar på platsen.
// Tre lägen: handen vald (rulla-uppmaning + pil på rutan), saken vald långt från platsen (ingen klick-uppmaning), saken vald på platsen (klick-uppmaning).
// Kör: node verktyg/test-a076h.mjs [url] → verktyg/a076/h-*.png
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
await p.click('.br-starta'); await p.waitForTimeout(2500); await p.keyboard.press('Enter'); await p.waitForTimeout(5000);
const kontroll = () => H(() => { const e = document.querySelector('.ph-kontroll.in span'); return e ? e.textContent : ''; });
const vanta = async (f, ms = 4000) => { for (let t = 0; t < ms; t += 200) { const v = await f(); if (v) return v; await p.waitForTimeout(200); } return await f(); };
await H(() => { const P = window.__printahem, S = P.S; S.kontrollKlar = ['ga', 'titta', 'klick', 'byta']; P.spelare.pos.x += 3; P.spelare.yaw += 1; });
await p.waitForTimeout(1500);
await H(() => { const P = window.__printahem; P.hammarPaBrador.userData.interaktion.aktivera(); });
// 0. hammaren i raden, handen vald
await H(() => window.__printahem.byt(0)); await p.waitForTimeout(1200);
const k0 = await vanta(async () => /Rulla hjulet för att ta hammaren/.test(await kontroll()) && kontroll());
const pek0 = await H(() => { const e = document.querySelector('.ph-hotbar .ph-pekas'); return e ? +e.dataset.i : -1; });
const ham = await H(() => window.__printahem.S.hotbar.findIndex((x) => x?.typ === 'hammare'));
await p.screenshot({ path: dir + 'h-rulla-hammaren.png' });
ut.push([`handen vald, hammaren i raden: "${k0 || ''}" · pilen på ruta ${pek0} (hammaren ${ham})`, !!k0 && pek0 === ham]);
// skylten klar, skrivaren i raden
await H(() => { const P = window.__printahem, S = P.S; S.skyltUppe = true; S.skrivareLastad = true; S.steg = P.STEG.findIndex((x) => x.id === 'stall'); P.laggTill('skrivareS'); P.byt(0); P.ritaStart?.(); });
await p.waitForTimeout(800);
// 1. handen vald
const k1 = await vanta(async () => /Rulla hjulet för att ta skrivaren/.test(await kontroll()) && kontroll());
const pek1 = await H(() => { const e = document.querySelector('.ph-hotbar .ph-pekas'); return e ? +e.dataset.i : -1; }), sk = await H(() => window.__printahem.S.hotbar.findIndex((x) => x?.typ === 'skrivareS'));
await p.screenshot({ path: dir + 'h-1-handen-vald.png' });
ut.push([`1. handen vald: "${k1 || await kontroll()}" · pilen på ruta ${pek1} (skrivaren ${sk})`, !!k1 && pek1 === sk]);
// 2. skrivaren vald, siktet långt från platsen (mot himlen)
await H(() => { const P = window.__printahem; P.byt(P.S.hotbar.findIndex((x) => x?.typ === 'skrivareS')); P.spelare.pitch = 0.8; });
await p.waitForTimeout(1500);
const k2 = await kontroll(), kd2 = await H(() => window.__printahem.kedjaNu());
await p.screenshot({ path: dir + 'h-2-vald-langt-bort.png' });
ut.push([`2. skrivaren vald, siktet inte på platsen: kedjan fattas "${kd2?.fattas}", kontroll: "${k2 || 'ingen'}"`, kd2?.fattas === 'sikte' && !/Klick/i.test(k2)]);
// 3. skrivaren vald, siktet på platsen
const r3 = await H(async () => {
  const P = window.__printahem, sp = P.spelare, vanta = (ms) => new Promise((r) => setTimeout(r, ms));
  const pl = P.startYta ? P.startYta.position : null; if (!pl) return { fel: 'ingen plats' };
  for (const v of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) {
    sp.pos.x = pl.x + Math.sin(v) * 2.6; sp.pos.z = pl.z + Math.cos(v) * 2.6; sp.yaw = v; sp.pitch = -0.55;
    await vanta(900); const k = P.kedjaNu(); if (k?.ja) return { ja: true, v };
  }
  return { ja: false, k: P.kedjaNu() };
});
const k3 = await vanta(async () => /Klicka för att ställa ner/.test(await kontroll()) && kontroll());
await p.screenshot({ path: dir + 'h-3-vald-pa-platsen.png' });
ut.push([`3. ${r3.fel || ''} skrivaren vald, siktet på platsen (${r3.ja}): "${k3 || await kontroll()}"`, r3.ja && !!k3]);
// tillbaka till handen → klick-uppmaningen försvinner, rulla kommer tillbaka
await H(() => window.__printahem.byt(0));
const k4 = (await vanta(async () => /Rulla hjulet/.test(await kontroll()) && kontroll())) || await kontroll();
ut.push([`tillbaka till handen: klick-uppmaningen borta, "${k4}"`, !/Klick/.test(k4) && /Rulla hjulet/.test(k4)]);
const brott = await H(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'KLICK SOM INTE GÅR').map((e) => e.text));
ut.push([`KLICK SOM INTE GÅR: ${brott.length} ${brott.slice(0, 2).join(' · ')}`, !brott.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
