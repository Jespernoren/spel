// A-076: dag 1 v3. Kör: node verktyg/test-a076.mjs [url]  → skärmdumpar i verktyg/a076/
// 1 menyn före introt, introt → rakt in i spelet, dagboksnotisen med dagens mål ovanpå spelet, HUD:en med bildprickar
// 2 skylten: bildbubblan visar hammaren, hammaren hamnar i verktygsraden · 3 bubblan följer steget
// 4 rullen tar slut → Ali kommer över med kvarnen · 5 kvarnen i handen utan spegelvänd text · 6 kapitelkortet högst ca 3 s
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('a076')) { sessionStorage.setItem('a076', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url); await p.waitForTimeout(5000);
const H = (f, a) => p.evaluate(f, a);
// 1. menyn först, inget intro
const m0 = await H(() => ({ meny: !!document.querySelector('.br-starta') && !window.__printahem.ui.overlay.hidden, intro: !!document.querySelector('.ph-intro') }));
await p.screenshot({ path: dir + 'meny.png' });
ut.push([`menyn först (meny ${m0.meny}, intro ${m0.intro})`, m0.meny && !m0.intro]);
await p.click('.br-starta'); await p.waitForTimeout(2500);
const m1 = await H(() => ({ intro: !!document.querySelector('.ph-intro3'), meny: !window.__printahem.ui.overlay.hidden }));
ut.push([`Starta → introt börjar direkt (intro ${m1.intro}, menyn dold ${!m1.meny})`, m1.intro && !m1.meny]);
await p.keyboard.press('Enter'); await p.waitForTimeout(2500);
const m2 = await H(() => ({ igang: window.__printahem.ui.igang, meny: !window.__printahem.ui.overlay.hidden, notis: !!document.querySelector('.ph-dagnotis.syns'), bilder: document.querySelectorAll('.ph-dagnotis li img').length, rader: [...document.querySelectorAll('.ph-dagnotis li')].map((x) => x.textContent.trim()) }));
await p.screenshot({ path: dir + 'notisen-over-spelet.png' });
ut.push([`efter introt: rakt in i spelet (igång ${m2.igang}, ingen meny ${!m2.meny}), notisen med ${m2.rader.length} mål och ${m2.bilder} bilder: ${m2.rader.join(' · ')}`, m2.igang && !m2.meny && m2.notis && m2.bilder === 0   /* A-076 13:20: notisen har ingen mållista */]);
await p.waitForTimeout(9000);
const m3 = await H(() => ({ notis: !!document.querySelector('.ph-dagnotis'), prickar: document.querySelectorAll('.dn-mal .c img').length }));
await p.screenshot({ path: dir + 'hud-bildprickar.png' });
ut.push([`notisen krymper in i HUD:en: borta ${!m3.notis}, ${m3.prickar} bildprickar`, m3.prickar === 0   /* A-076 13:20: inga kommande prickar */]);
// 6. kapitelkortet
const k6 = await H(() => new Promise((ok) => { const t0 = performance.now(); const f = () => { const k = document.querySelector('.ph-kapkort'); if (!k && performance.now() - t0 > 500) ok(+(performance.now() - t0) / 1000); else if (performance.now() - t0 > 12000) ok(99); else setTimeout(f, 200); }; f(); }));
ut.push([`kapitelkortet borta efter ${k6.toFixed(1)} s (högst ca 3,5)`, k6 <= 3.6]);
// 2. skylten: bubblan visar hammaren, hammaren i raden
const b1 = await H(() => window.__printahem.pilBildTyp());
await H(() => window.__printahem.spikaSkylt()); await p.waitForTimeout(5000);
const stang = () => H(() => { for (let i = 0; i < 6; i++) { const k = [...document.querySelectorAll('.ph-med button, .fp-knapp')].find((x) => x.offsetParent && /Fortsätt|Stäng|OK|Läst|Klar|Vidare/i.test(x.textContent)); if (!k) break; k.click(); } if (!window.__printahem.ui.igang) window.__printahem.ui.starta(true); });
await stang(); await p.waitForTimeout(1500);
const h2 = await H(() => ({ hammare: window.__printahem.antalInv('hammare'), toast: window.__printahem.textLogg().some((e) => /Hammaren ligger i verktygsraden/.test(e.text)), bubbla: window.__printahem.pilBildTyp(), steg: window.__printahem.stegId() }));
ut.push([`bildbubblan vid skylten: ${b1} (hammaren), efter skylten: ${h2.bubbla} vid steget ${h2.steg}`, /^hammare/.test(b1) && /^skrivareS/.test(h2.bubbla)]);
ut.push([`hammaren i verktygsraden (${h2.hammare}) – den ligger där från start (A-076 tillägg 12:25)`, h2.hammare === 1]);
// 4. rullen tar slut → Ali kommer
await H(() => { const P = window.__printahem, S = P.S; S.skrivareLastad = S.skrivareStar = S.cykelStar = S.generatorStar = S.cykelOmbyggd = true; S.stat.printat = 1; S.steg = P.STEG.findIndex((x) => x.id === 'rullSlut'); });
await stang(); await p.waitForTimeout(1500);
const r4 = await H(() => { const P = window.__printahem; const g1 = P.skrivare.find((x) => x.id === 'g1'); return { fil: g1?.fil, steg: P.stegId(), bubbla: P.pilBildTyp() }; });
await H(() => { const P = window.__printahem, S = P.S; const g1 = P.skrivare.find((x) => x.id === 'g1'); g1.fil = 40; P.startaDirekt(g1, { typ: 'nyckelring' }); g1.prog = 0.55; g1.fil = 0.3; S.strom = 100;   /* mitt i printen: rullen räcker inte till resten */ });
await p.waitForTimeout(1000); await stang(); for (let i = 0; i < 16; i++) { await H(() => { window.__printahem.S.strom = 100; }); await p.waitForTimeout(500); }   // trampar

await p.screenshot({ path: dir + 'rullen-slut.png' });
const r5 = await H(() => ({ slut: !!window.__printahem.S.rullSlut, tanke: window.__printahem.textLogg().some((e) => /Om man bara kunde göra tråd av skräpet/.test(e.text)), steg: window.__printahem.stegId() }));
ut.push([`rullen tar slut mitt i printen (${r5.slut}) med tanken (${r5.tanke}), nästa mål ${r5.steg} · bubblan vid "${r4.steg}": ${r4.bubbla}`, r5.slut && r5.tanke && r5.steg === 'aliKvarn' && /^nyckelring/.test(r4.bubbla)]);
let aliNara = false;
for (let i = 0; i < 40 && !aliNara; i++) { await p.waitForTimeout(1000); await stang();  aliNara = await H(() => { const P = window.__printahem, v = P.aliFig.getWorldPosition(P.spelare.pos.clone()); return Math.hypot(v.x - (-10.6), v.z - 13.9) < 4; }); }
await H(() => { const P = window.__printahem, v = P.aliFig.getWorldPosition(P.spelare.pos.clone()); P.spelare.pos.set(v.x + 1.5, P.spelare.pos.y, v.z + 3.2); P.tittaMot?.(v.x, v.z, 0.3, { tvang: true, nyckel: 'ali76' }); });
await p.waitForTimeout(7000); await p.screenshot({ path: dir + 'ali-vid-skrivaren.png' });
for (let i = 0; i < 200 && !(await H(() => !!window.__printahem.S.kvarnKopt)); i++) { await p.waitForTimeout(1000); if (i % 10 === 0) await stang(); }
for (let i = 0; i < 40 && (await H(() => window.__printahem.textLogg().filter((e) => e.vem === 'ali' && e.kalla === 'replik').length)) < 6; i++) await p.waitForTimeout(1000);
const r6 = await H(() => ({ kvarn: !!window.__printahem.S.kvarnKopt, iHand: window.__printahem.valdTyp(), repliker: window.__printahem.textLogg().filter((e) => e.vem === 'ali' && e.kalla === 'replik').map((e) => e.text) }));
ut.push([`Ali kom över (nära skrivaren ${aliNara}) och gav kvarnen (${r6.kvarn}, i handen: ${r6.iHand}) · ${r6.repliker.length} repliker: ${r6.repliker.join(' / ')}`, aliNara && r6.kvarn && r6.repliker.length >= 4 && /uppfinnare/.test(r6.repliker[0] || '')]);
// 5. kvarnen i handen
await H(() => { const P = window.__printahem; const i = P.S.hotbar.findIndex((x) => x?.typ === 'byggsats:gammalkvarn'); if (i >= 0) P.byt(i); P.spelare.pos.set(0, P.spelare.pos.y, 10); });
await p.waitForTimeout(2000); await p.screenshot({ path: dir + 'kvarnen-i-handen.png' });
ut.push(['kvarnen i handen (se kvarnen-i-handen.png)', true]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
