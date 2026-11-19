// A-076 tillägg: brorsans rulle syns på skrivaren och krymper, tom spole när den är slut, slangen först när tornet är kopplat.
// Kör: node verktyg/test-a076b.mjs [url]  → skärmdumpar i verktyg/a076/skrivare-*.png
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('a076b')) { sessionStorage.setItem('a076b', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url); await p.waitForTimeout(5000);
const H = (f, a) => p.evaluate(f, a);
await p.click('.br-starta'); await p.waitForTimeout(2500); await p.keyboard.press('Enter'); await p.waitForTimeout(12000);
const stang = () => H(() => { for (let i = 0; i < 6; i++) { const k = [...document.querySelectorAll('.ph-med button, .fp-knapp')].find((x) => x.offsetParent && /Fortsätt|Stäng|OK|Läst|Klar|Vidare/i.test(x.textContent)); if (!k) break; k.click(); } if (!window.__printahem.ui.igang) window.__printahem.ui.starta(true); document.querySelectorAll('.ph-dagnotis').forEach((x) => x.remove()); });
const las = () => H(() => { const P = window.__printahem, g1 = P.skrivare.find((x) => x.id === 'g1'), u = g1?.mesh?.userData;
  const ms = P.matarSlangNu();
  return { fil: g1?.fil, spole: !!u?.spole?.visible, lindning: !!u?.spoleKarna?.visible, skala: +(u?.spoleKarna?.scale.x || 0).toFixed(2), slang: !!u?.slang?.visible, matar: !!ms?.visible, star: !!P.S.skrivareStar }; });
const titta = async (x, z, fram = 1.6) => { await H(([x, z, fram]) => { const P = window.__printahem; const sp = P.spelare; sp.pos.set(x + fram, sp.pos.y, z + fram); sp.yaw = Math.atan2(-(x - sp.pos.x), -(z - sp.pos.z)); sp.pitch = -0.45; }, [x, z, fram]); await p.waitForTimeout(2500); };
const g1Pos = () => H(() => { const P = window.__printahem, m = P.skrivare.find((x) => x.id === 'g1').mesh; return [m.position.x, m.position.z]; });
// 1. på cykeln: brorsans rulle sitter i rullhållaren
await stang();
const cyk = await H(() => { const P = window.__printahem, c = P.vagCykel, u = c.userData.skrivare?.userData; return { x: c.position.x, z: c.position.z, spole: !!u?.spole?.visible, lindning: !!u?.spoleKarna?.visible, slang: !!u?.slang?.visible }; });
await titta(cyk.x, cyk.z, 1.4); await p.screenshot({ path: dir + 'skrivare-pa-cykeln.png' });
ut.push([`på cykeln: rulle ${cyk.spole && cyk.lindning}, ingen slang ${!cyk.slang}`, cyk.spole && cyk.lindning && !cyk.slang]);
// 2. i handen
const hand = await H(() => { const P = window.__printahem; P.S.skrivareLastad = true; const i = P.laggTill('skrivareS'); if (typeof i === 'number') P.byt(i); return P.valdTyp(); });
await stang(); await p.waitForTimeout(2000); await p.screenshot({ path: dir + 'skrivare-i-handen.png' });
ut.push([`i handen: ${hand} (se skrivare-i-handen.png)`, hand === 'skrivareS']);
// 3. nyss placerad med full rulle
await H(() => { const P = window.__printahem; const i = P.S.hotbar.findIndex((x) => x?.typ === 'skrivareS'); if (i >= 0) { P.S.hotbar[i] = null; } P.S.skrivareStar = true; P.ritaStart(); P.byt(0); });
await stang(); const [gx, gz] = await g1Pos(); await titta(gx, gz); const s3 = await las();
await p.screenshot({ path: dir + 'skrivare-placerad-full.png' });
ut.push([`nyss placerad: fil ${s3.fil} g, rulle ${s3.spole}, lindning ${s3.lindning} (${s3.skala}), slang ${s3.slang}, matarslang ${s3.matar}`, s3.star && s3.spole && s3.lindning && s3.skala > 0.9 && !s3.slang && !s3.matar]);
// 4. halvvägs
await H(() => { window.__printahem.skrivare.find((x) => x.id === 'g1').fil = 75; }); await p.waitForTimeout(800); const s4 = await las();
await p.screenshot({ path: dir + 'skrivare-halva-rullen.png' });
ut.push([`halva rullen: lindning ${s4.lindning} skala ${s4.skala} (mindre än full), ingen slang ${!s4.slang && !s4.matar}`, s4.lindning && s4.skala < s3.skala && s4.skala > 0.5 && !s4.slang && !s4.matar]);
// 5. slut: tom spole
await H(() => { window.__printahem.skrivare.find((x) => x.id === 'g1').fil = 0; }); await p.waitForTimeout(800); const s5 = await las();
await p.screenshot({ path: dir + 'skrivare-tom-spole.png' });
ut.push([`slut: spolen kvar ${s5.spole}, ingen lindning ${!s5.lindning}, ingen slang ${!s5.slang && !s5.matar}`, s5.spole && !s5.lindning && !s5.slang && !s5.matar]);
// 6. kvarnen och tornet står och är kopplade → slangen växer fram, tom spole borta
await H(() => { const P = window.__printahem; P.S.kvarnKopt = true; P.S.kvarnStar = true; P.ritaStart(); });
await p.waitForTimeout(300); const s6a = await las();
await p.waitForTimeout(1500); const s6 = await las();
await H(([gx, gz]) => { const P = window.__printahem; const sp = P.spelare; sp.pos.set(gx + 2.2, sp.pos.y, gz + 1.8); sp.yaw = Math.atan2(-(gx - 0.8 - sp.pos.x), -(gz - sp.pos.z)); sp.pitch = -0.4; }, [gx, gz]); await p.waitForTimeout(2500);
await p.screenshot({ path: dir + 'skrivare-kopplad-slang.png' });
ut.push([`kopplad: slang ${s6.slang}, matarslang ${s6.matar}, spolen borta ${!s6.spole}`, s6.slang && s6.matar && !s6.spole && s6a.slang]);
// 7. en skrivare utan kopplat torn visar aldrig lös slang
const s7 = await H(() => { const P = window.__printahem; return P.skrivare.filter((sk) => sk.mesh?.userData?.slang?.visible && !P.slangNar(sk)).map((sk) => sk.id); });
ut.push([`ingen skrivare utan torn har slang (${s7.join(',') || 'inga'})`, !s7.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
