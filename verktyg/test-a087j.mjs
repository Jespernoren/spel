// Inkorg 24b p.4–5 och 24c p.3: stormen dag 17 och julafton.
// Stormen: taket ligger på marken, tanken räknar samma dagar som morgonkortet. Julafton: enda uppgiften är skylten på dörren,
// mamma kommer när skylten sitter uppe, hon stannar, och brevet ligger i julklappen (mammajul → Hedersmedborgare går att få).
// Kör: node verktyg/test-a087j.mjs [url]   Skärmdumpar i verktyg/a087/.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a087/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const spar = fs.readFileSync(new URL('./sparfiler/dag18.json', import.meta.url), 'utf8');
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const sidfel = []; p.on('pageerror', (e) => sidfel.push(e.message));
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(4000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-dagbokkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
await p.waitForTimeout(1500);
const ut = [];
// stormen
await p.evaluate(() => { const P = window.__printahem, sp = P.spelare, Sk = P.SKJUL; if (sp && Sk) { sp.pos.set(Sk.x + Sk.b / 2 + 9, sp.pos.y, Sk.z + 7); sp.yaw = Math.atan2(-(Sk.x - sp.pos.x), -(Sk.z - sp.pos.z)); sp.pitch = -0.12; } });
await p.waitForTimeout(800); await p.screenshot({ path: dir + 'stormen-fore.png' });
const st = await p.evaluate(() => { const P = window.__printahem, S = P.S; S.storm = 0; S.flyttatIn = false; S.hem = { ...(S.hem || {}), tak: true }; S.dag = 17; P.handelse('morgonkortStangt', { dag: 17 }); return { storm: S.storm }; });
await p.waitForTimeout(9000);
const st2 = await p.evaluate(() => { const L = window.__printahem.textLogg(); return { tanke: (L.find((e) => /tillbaka där jag började/.test(String(e.text))) || {}).text || '', rolf: !!L.find((e) => /plåten låg på marken/.test(String(e.text))) }; });
ut.push([`stormen dag 17: S.storm=${st.storm}, tanken "${st2.tanke}", Rolfs sms ${st2.rolf}`, st.storm === 17 && /^Fem dagar kvar/.test(st2.tanke)]);
await p.evaluate(() => { const P = window.__printahem, sp = P.spelare, Sk = P.SKJUL; if (sp && Sk) { sp.pos.set(Sk.x + Sk.b / 2 + 9, sp.pos.y, Sk.z + 7); sp.yaw = Math.atan2(-(Sk.x - sp.pos.x), -(Sk.z - sp.pos.z)); sp.pitch = -0.12; } });
await p.waitForTimeout(800);
await p.screenshot({ path: dir + 'stormen.png' });
// julafton
await p.evaluate(() => { const P = window.__printahem, S = P.S; S.dag = 22; S.julFirad = false; S.dorrSkylt = false; S.skyltTand = false; S.julSms = false; S.steg = P.STEG ? P.STEG.findIndex((x) => x.id === 'm22-tand-skylten') : S.steg; });
await p.waitForTimeout(3500);
const j0 = 0;
const j1 = await p.evaluate(() => { const P = window.__printahem; const k = P.interaktor.mal.find((o) => /Sätt upp skylten med ditt namn/.test((() => { try { return String(o.userData.interaktion?.text?.(o) || ''); } catch { return ''; } })())); const t = k ? k.userData.interaktion.text() : ''; if (k) k.userData.interaktion.aktivera(); const L = P.textLogg(); return { t, sms: (L.find((e) => /kl 15/.test(String(e.text))) || {}).text || '', dorr: !!P.S.dorrSkylt }; });
for (let i = 0; i < 40 && !(await p.evaluate(() => !!window.__printahem.S.julBilKom)); i++) await p.waitForTimeout(500);
await p.waitForTimeout(2500);
const j2 = await p.evaluate(() => { const P = window.__printahem; const g = P.interaktor.mal.find((o) => o.visible && /Ta emot mamma/.test((() => { try { return String(o.userData.interaktion?.text?.(o) || ''); } catch { return ''; } })())); if (g) g.userData.interaktion.aktivera(); return !!g; });
ut.push([`julafton: pekrutan "${j1.t}", mammas sms "${j1.sms}", skylten sitter ${j1.dorr}, mamma vid grinden ${j2}`, /Sätt upp skylten/.test(j1.t) && /kl 15/.test(j1.sms) && j1.dorr && j2]);
for (let i = 0; i < 60 && await p.evaluate(() => !!document.querySelector('.ph-jul')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(250); }
await p.waitForTimeout(9000);
for (let i = 0; i < 10 && await p.evaluate(() => !!document.querySelector('.ph-dagbokkort')); i++) { await p.screenshot({ path: dir + 'julklappen.png' }); await p.keyboard.press('Enter'); await p.waitForTimeout(500); }
const j3 = await p.evaluate(() => { const P = window.__printahem, S = P.S, L = P.textLogg(); return { fir: !!S.julFirad, brev: S.lappar.includes('mammajul'), stannar: !!L.find((e) => /Vi stannar/.test(String(e.text))), post: S.post?.lapp || null }; });
ut.push([`julen firad ${j3.fir}, mamma stannar ${j3.stannar}, brevet i julklappen ${j3.brev}, inget brev i postlådan (${j3.post})`, j3.fir && j3.brev && j3.stannar && j3.post !== 'mammajul']);
ut.push([`${sidfel.length} sidfel ${sidfel.slice(0, 3).join(' · ')}`, !sidfel.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
await b.close();
