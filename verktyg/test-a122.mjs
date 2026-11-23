// Inkorg 67 (A-122) + 73 (A-128): sparmål med siffra, inget Vänta-mål, Rolfs första träff vid skjulet (fem repliker, säckarna där han kastade dem,
// brevet i postlådan), Alis bubbla aldrig tom, dagbytet med datum och rätt veckodag, kärran räknar skräp.
// Kör: node verktyg/test-a122.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
fs.mkdirSync(new URL('./a122/', import.meta.url), { recursive: true });
const spar = fs.readFileSync(new URL('./sparfiler/start-dag2.json', import.meta.url), 'utf8');
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(5000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]), .ph-kapkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
await p.waitForTimeout(1500);
const brott = (namn) => p.evaluate((namn) => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && namn.includes(e.vem)).map((e) => e.vem + ': ' + e.text), namn);

// 1. sparmålet: kvarnmotorn med 20 kr och med 60 kr, och alla köpsteg dag 1–23
const spar1 = await p.evaluate(async () => { const P = window.__printahem, S = P.S, i = P.STEG.findIndex((x) => x.id === 'kopMotor');
  S.steg = i; S.ritningar = S.ritningar.filter((x) => x !== 'kvarnmotor'); S.kvarn.motor = false; S.mynt = 20; const lite = P.stegText();
  S.mynt = 60; await new Promise((r) => setTimeout(r, 1600)); return { lite, mycket: P.stegText(), upp: P.upplast('kvarnmotor') }; });
ut.push([`sparmålet säger hur mycket och till vad ("${spar1.lite}")`, /^Spara till kvarnmotorn · 20 \/ 50 kr$/.test(spar1.lite)]);
ut.push([`med pengarna är målet Köp och motorn upplåst ("${spar1.mycket}", upplåst ${spar1.upp})`, spar1.mycket === 'Köp kvarnmotorn' && spar1.upp]);
const allaSpar = await p.evaluate(() => { const P = window.__printahem, S = P.S, ut = []; const m0 = S.mynt; S.mynt = 0;
  for (let i = 0; i < P.STEG.length; i++) { const st = P.STEG[i]; if (!st.story || !(st.story.handling === 'kop' || st.story.las)) continue; const s0 = S.steg; S.steg = i; let t = ''; try { t = P.stegText(); } catch {} S.steg = s0; ut.push([st.id, t]); }
  S.mynt = m0; return ut; });
const utanSiffra = allaSpar.filter(([, t]) => (/^Spara till/.test(t) && !/\d+ \/ \d+/.test(t)) || /^Printa och sälj\b/.test(t) || /^Vänta/.test(t));
ut.push([`alla köpsteg och låsta steg dag 1–23 visar sparmål med siffra (${allaSpar.length} steg, utan siffra: ${utanSiffra.map((x) => x[0]).join(', ') || 'inga'})`, !utanSiffra.length]);
await p.evaluate(() => { const S = window.__printahem.S; S.kvarn.motor = true; });

// 2. Rolfs första träff: gården är städad → sopbilen stannar vid skjulet
await p.evaluate(() => { const P = window.__printahem, S = P.S; S.sackLagd = false; S.sackLandat = false; S.korg = false; S.ryggkorg = false; S.sackTagen = false; S.rolfKand = false; S.dialogSagt = (S.dialogSagt || []).filter((x) => !/^rolf|^duAvSkrap/.test(x));
  S.vet = Object.fromEntries(Object.entries(S.vet || {}).filter(([k]) => k !== 'kandRolf')); S.hant = Object.fromEntries(Object.entries(S.hant || {}).filter(([k]) => k !== 'rolfStannar')); S.post.lapp = null; S.lappar = S.lappar.filter((x) => x !== 'rolf:0'); S.rolf.i = 0;
  S.kvarnStar = true; S.steg = P.STEG.findIndex((x) => x.id === 'kopSack'); P.bil.fas = 'borta'; P.bil.t = -100; P.sopbil.position.set(-90, 0, 24); const sp = P.spelare; sp.pos.set(9, sp.pos.y, 15); sp.yaw = Math.PI; });
const mal0 = await p.evaluate(() => window.__printahem.stegText());
let stopp = false; for (let i = 0; i < 80 && !stopp; i++) { stopp = await p.evaluate(() => { const P = window.__printahem; P.simulera(0.5, 0.05); return P.bil.fas === 'rolfStopp'; }); }
const bilX = await p.evaluate(() => window.__printahem.sopbil.position.x);
ut.push([`sopbilen stannar vid skjulet (x ${bilX.toFixed(1)}, målet "${mal0}")`, stopp && Math.abs(bilX - 2.3 - 9) < 0.3 && !/^Vänta/.test(mal0)]);
await p.waitForTimeout(2500);
await p.screenshot({ path: new URL('./a122/rolf-rutan.png', import.meta.url).pathname });
let klar = false; for (let i = 0; i < 240 && !klar; i++) { await p.waitForTimeout(200); klar = await p.evaluate(() => { const P = window.__printahem; P.simulera(0.3, 0.05); return !!P.S.sackLandat; }); }
await p.waitForTimeout(1200);
await p.screenshot({ path: new URL('./a122/sackarna.png', import.meta.url).pathname });
const scen = await p.evaluate(() => { const P = window.__printahem, L = P.dialogLogg().map((x) => x.text), R = P.rostKallor();
  const ord = ['Tjena. Rolf.', 'Du har städat hela gården', 'Öj… ä dä du som printar', 'Ja. Av skräp.', 'Kolla postlådan vid grinden'].map((t) => L.findIndex((x) => x.includes(t)));
  const rolfRost = R.filter(([v]) => v === 'rolf').map((x) => [x[2].slice(0, 30), x[1]]);
  return { ord, rolfRost, mal: P.stegText(), sack: P.sackRulle.position.toArray(), synlig: P.sackRulle.visible }; });
ut.push([`alla fem repliker i ordning (${scen.ord.join(', ')})`, scen.ord.every((x, i) => x >= 0 && (i === 0 || x > scen.ord[i - 1]))]);
ut.push([`Rolf talar med sin röst (${scen.rolfRost.map((x) => x.join(': ')).join(' | ')})`, scen.rolfRost.length >= 4 && scen.rolfRost.every((x) => x[1] !== 'talsyntes')]);
ut.push([`säckarna ligger vid skjulet och målet är att ta dem ("${scen.mal}", säcken ${scen.sack.map((v) => v.toFixed(1)).join(' ')})`, scen.synlig && Math.abs(scen.sack[0] - 9) < 1.5 && scen.mal === 'Ta sopsäckarna']);
// ta säckarna, och brevet ligger i postlådan (Rolf går dit själv)
await p.evaluate(() => window.__printahem.taSackar());
await p.waitForTimeout(800);
let brev = false; for (let i = 0; i < 80 && !brev; i++) { brev = await p.evaluate(() => { const P = window.__printahem; P.simulera(0.5, 0.05); return P.S.post.lapp === 'rolf:0'; }); }
const efter = await p.evaluate(() => ({ korg: window.__printahem.antalInvNu('byggsats:korg') }));
ut.push([`säckarna i handen (${efter.korg}) och Rolfs första brev i postlådan (${brev})`, efter.korg >= 1 && brev]);
const sakB = await brott(['SAK FRÅN INGENSTANS', 'VÄNTA-MÅL', 'OKÄNT ORD', 'SAMMA SAK TVÅ GÅNGER', 'UPPREPAD PRESENTATION', 'SVAR FÖRE ORSAK']);
ut.push([`0 SAK FRÅN INGENSTANS, VÄNTA-MÅL, OKÄNT ORD, SAMMA SAK TVÅ GÅNGER, UPPREPAD PRESENTATION (${sakB.slice(0, 3).join(' · ') || 'inga'})`, !sakB.length]);

// 3. Alis bubbla är aldrig tom
const bub = await p.evaluate(async () => { const P = window.__printahem; const r = []; for (let i = 0; i < 4; i++) { P.oppnaMarknad(); await new Promise((x) => setTimeout(x, 500)); const e = document.querySelector('.dc-bubbla'); r.push(e ? (e.classList.contains('tom') ? 'dold' : e.textContent.trim()) : 'ingen'); await new Promise((x) => setTimeout(x, 300)); } return r; });
ut.push([`Alis bubbla är aldrig tom (${bub.map((x) => x.slice(0, 20)).join(' | ')})`, bub.every((x) => x === 'dold' || (x && x !== '…'))]);
await p.evaluate(() => { const o = window.__printahem.ui.butiksOverlay; if (o) o.hidden = true; });

// 4. kärran räknar skräp
const karra = await p.evaluate(() => { const P = window.__printahem, S = P.S; S.karraLast = Array(12).fill(0); const t = P.skrapMatt('karra'); S.karraLast = []; return t; });
ut.push([`kärran visar antal skräp ("${karra}")`, karra === '12 / 40 skräp']);

// 5. dagbytet: datum och rätt veckodag
await p.evaluate(() => { window.__printahem.S.dag = 1; });
const dag = await p.evaluate(async () => { const P = window.__printahem; window.__startaSpel(); await new Promise((r) => setTimeout(r, 500)); try { P.sov(); } catch (e) { return 'fel: ' + e.message; }
  let t = ''; for (let i = 0; i < 120; i++) { await new Promise((r) => setTimeout(r, 150)); const m = document.body.innerText.match(/(Måndag|Tisdag|Onsdag|Torsdag|Fredag|Lördag|Söndag)[^\n]{0,20}/); if (m) { t = m[0] + ' · ' + [...document.querySelectorAll('svg text')].map((x) => x.textContent).join(' '); break; } } return t; });
await p.screenshot({ path: new URL('./a122/dagbyte-dag2.png', import.meta.url).pathname });
ut.push([`dagbytet visar "Fredag 4 december" och inget dagnummer ("${dag.replace(/\s+/g, ' ').slice(0, 70)}")`, /Fredag 4 december/.test(dag) && !/DAG \d/.test(dag)]);
ut.push([`0 sidfel (${fel.slice(0, 3).join(' · ') || 'inga'})`, !fel.length]);
await b.close();
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
process.exit(ut.every((x) => x[1]) ? 0 : 1);
