// Inkorg 10a (Jesper 18:46): kvarnen ges bara av Ali när han räcker över den. Kör: node verktyg/test-a076m.mjs [url]
// 1 Alis butik öppnad vid aliKvarn → ingen kvarn, ingen kvarn i butiken · 2 fel mitt i besöket → ingen kvarn, SIDFEL loggat, Ali kommer tillbaka
// 3 det vanliga flödet → kvarnen i handen precis när Ali räcker över den · 0 SAK UTAN KÄLLA, 0 EFTERSLÄPANDE KVITTENS
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [], fel = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage();
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { window.__brott = []; window.__textLogg = (k, v, t) => { if (k === 'brott') window.__brott.push(v + ' ' + t); }; if (!sessionStorage.getItem('a076m')) { sessionStorage.setItem('a076m', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test', introSett: true, skyltUppe: true })); } });
await p.goto(url);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 15000 }); await p.evaluate(() => window.__startaSpel()); await p.waitForTimeout(2500);
const H = (f, a) => p.evaluate(f, a);
const stang = () => H(() => { for (let i = 0; i < 6; i++) { const k = [...document.querySelectorAll('.ph-med button, .fp-knapp')].find((x) => x.offsetParent && /Fortsätt|Stäng|OK|Läst|Klar|Vidare/i.test(x.textContent)); if (!k) break; k.click(); } if (!window.__printahem.ui.igang) window.__printahem.ui.starta(true); });
await stang(); await p.waitForTimeout(1000);
// hoppa till aliKvarn: skrivaren står, första printen gjord, rullen slut. Besöket ska krascha första gången.
await H(() => { window.__aliBesokFel = true; const P = window.__printahem, S = P.S; S.skyltUppe = true; S.skrivareLastad = S.skrivareStar = S.cykelStar = S.generatorStar = S.cykelOmbyggd = true; S.stat.printat = 1; S.rullSlut = true; S.steg = P.STEG.findIndex((x) => x.id === 'aliKvarn'); });
await p.waitForTimeout(500);
// 1. butiken vid aliKvarn
await H(() => window.__printahem.oppnaMarknad()); await p.waitForTimeout(1500);
const s1 = await H(() => ({ kvarn: !!window.__printahem.S.kvarnKopt || window.__printahem.antalInv('byggsats:gammalkvarn') > 0, iButiken: /Kvarnen/.test(document.querySelector('.fp-butik, .ph-butik, .ui-panel')?.innerText || '') && /gammalkvarn/.test(document.body.innerHTML) }));
await p.screenshot({ path: dir + 'm-butiken-vid-alikvarn.png' });
await H(() => window.__printahem.ui.stangButik()); await stang();
ut.push([`Alis butik öppnad vid aliKvarn: ingen kvarn (${!s1.kvarn})`, !s1.kvarn]);
// 2. besöket kraschar mitt i
let sidfel = false; for (let i = 0; i < 90 && !sidfel; i++) { await p.waitForTimeout(1000); await stang(); sidfel = await H(() => window.__brott.some((x) => x.startsWith('SIDFEL aliBesok'))); }
await p.waitForTimeout(800);
const s2 = await H(() => ({ kvarn: !!window.__printahem.S.kvarnKopt || window.__printahem.antalInv('byggsats:gammalkvarn') > 0, steg: window.__printahem.stegId() }));
ut.push([`fel mitt i besöket: SIDFEL loggat (${sidfel}), ingen kvarn (${!s2.kvarn}), steget kvar på ${s2.steg}`, sidfel && !s2.kvarn && s2.steg === 'aliKvarn']);
// 3. Ali kommer tillbaka och räcker över kvarnen
await H(() => { window.__aliBesokFel = false; });
let kvarnT = 0, overT = 0; const t0 = Date.now();
for (let i = 0; i < 300 && !kvarnT; i++) { await p.waitForTimeout(500); if (i % 4 === 0) await stang(); const r = await H(() => ({ k: !!window.__printahem.S.kvarnKopt, over: window.__printahem.textLogg().filter((e) => e.vem === 'ali' && e.kalla === 'replik' && /Pappas gamla köttkvarn/.test(e.text)).length })); if (r.over > 1 && !overT) overT = Date.now(); if (r.k) kvarnT = Date.now(); }
const s3 = await H(() => ({ rep: window.__printahem.textLogg().filter((e) => e.vem === 'ali').map((e) => e.text.slice(0, 20)).join(' | '), iHand: window.__printahem.valdTyp(), besok: window.__printahem.textLogg().filter((e) => e.kalla === 'scenInfo' && /Ali går över vägen/.test(e.text)).length }));
await p.screenshot({ path: dir + 'm-kvarnen-fran-ali.png' });
console.log(s3.rep); ut.push([`Ali kom tillbaka (${s3.besok} besök) och räckte över kvarnen: i handen ${s3.iHand}, ${kvarnT ? ((kvarnT - t0) / 1000).toFixed(0) + ' s' : 'aldrig'}`, s3.besok >= 2 && s3.iHand === 'byggsats:gammalkvarn' && kvarnT > 0]);
await p.waitForTimeout(4000);
const brott = await H(() => window.__brott.filter((x) => /^(SAK UTAN KÄLLA|EFTERSLÄPANDE KVITTENS) /.test(x)));
ut.push([`0 SAK UTAN KÄLLA och 0 EFTERSLÄPANDE KVITTENS (${brott.join(' · ') || 'inga'})`, !brott.length]);
ut.push([`0 sidfel (${fel.join(' · ') || 'inga'})`, !fel.length]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
await b.close();
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
