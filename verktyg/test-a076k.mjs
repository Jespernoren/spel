// A-076 tillägg 15:30: Menyerna v3 och "Hur var dagen?". Skärmdumpar i verktyg/a076/meny/ av alla sidor,
// och Esc mitt i ett dagbokskort, en replik och en kontrollhjälp: bara menyn syns, allt kommer tillbaka efter Fortsätt.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/meny/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message)); p.on('dialog', (d) => d.accept());
await p.addInitScript(() => { if (!sessionStorage.getItem('f')) { sessionStorage.setItem('f', 1); localStorage.clear(); } });
await p.goto(url); await p.waitForTimeout(5000);
const H = (f, a) => p.evaluate(f, a);
const syns = () => H(() => { const v = (sel) => [...document.querySelectorAll(sel)].some((e) => { const s = getComputedStyle(e); return !e.hidden && !e.closest('[hidden]') && s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0' && e.getBoundingClientRect().width > 0; }); return { meny: !document.querySelector('.fp-overlay')?.hidden && !!document.querySelector('.br3'), kort: v('.ph-med'), kontroll: v('.ph-kontroll'), notis: v('.ph-notis, .fp-toast.syns, .ph-bubbla'), tal: (() => { try { return speechSynthesis.speaking && !speechSynthesis.paused; } catch { return false; } })() }; });
// 1. start första gången
const s1 = await H(() => ({ starta: /STARTA/.test(document.querySelector('.br-starta')?.textContent || ''), rader: [...document.querySelectorAll('.br3-rad b')].map((x) => x.textContent), spara: !!document.querySelector('[data-sida="spara"]') }));
await p.screenshot({ path: dir + '1-start-forsta-gangen.png' });
ut.push([`start första gången: STARTA (${s1.starta}), rader ${s1.rader.join(' + ')}, ingen Spara och ladda (${!s1.spara})`, s1.starta && s1.rader.join() === 'Inställningar,Hjälp oss' && !s1.spara]);
// sidorna från startmenyn
for (const [sida, namn] of [['installningar', '4-installningar-ljud'], ['hjalp', '6-hjalp-oss']]) {
  await H((s) => document.querySelector(`[data-sida="${s}"]`).click(), sida); await p.waitForTimeout(400); await p.screenshot({ path: dir + namn + '.png' });
  if (sida === 'installningar') { await H(() => document.querySelector('[data-flik="kontroller"]').click()); await p.waitForTimeout(300); await p.screenshot({ path: dir + '5-installningar-kontroller.png' }); }
  await p.keyboard.press('Escape'); await p.waitForTimeout(300);
}
const tillbaka = await H(() => document.querySelector('.br3')?.dataset.sida);
ut.push([`Esc i en undersida går tillbaka till startsidan (${tillbaka})`, tillbaka === 'hem']);
// starta (namn), introt hoppas över
await p.click('.br-starta'); await p.waitForTimeout(800);
await H(() => { const f = document.querySelector('.ph-namn-falt'); if (f) { f.value = 'Test'; f.closest('.ph-namn')?.querySelector('.fp-knapp')?.click(); } });
await p.waitForTimeout(2500); await p.keyboard.press('Enter');
for (let i = 0; i < 40 && !(await H(() => !!document.querySelector('.ph-dagbokkort'))); i++) await p.waitForTimeout(250);
// 2. Esc mitt i dagbokskortet
await p.waitForTimeout(600); await p.keyboard.press('Escape'); await p.waitForTimeout(500);
const e1 = await syns(); await p.screenshot({ path: dir + '7-esc-i-dagbokskortet.png' });
await H(() => document.querySelector('.br-starta').click()); await p.waitForTimeout(600);
const e1b = await syns();
ut.push([`Esc i dagbokskortet: bara menyn (meny ${e1.meny}, kort ${e1.kort}, tal ${e1.tal}) · Fortsätt: kortet tillbaka (${e1b.kort})`, e1.meny && !e1.kort && !e1.tal && e1b.kort && !e1b.meny]);
await p.keyboard.press('Enter'); await p.waitForTimeout(1500);
// 3. Esc-menyn i spelet + Spara och ladda + Börja om
let fore = await syns(); for (let i = 0; i < 20 && !fore.kontroll; i++) { await p.waitForTimeout(300); fore = await syns(); }
await p.keyboard.press('Escape'); await p.waitForTimeout(500);
const pm = await H(() => ({ paus: /PAUSAD/.test(document.querySelector('.br3-paus')?.textContent || ''), dag: document.querySelector('.br3-paus span')?.textContent, fort: /FORTSÄTT/.test(document.querySelector('.br-starta')?.textContent || ''), spara: !!document.querySelector('[data-sida="spara"]') }));
const e2 = await syns(); await p.screenshot({ path: dir + '2-esc-menyn.png' });
ut.push([`Esc-menyn: PAUSAD ${pm.dag}, FORTSÄTT + Spara och ladda (${pm.spara}), inget annat syns (kontroll ${e2.kontroll}, notis ${e2.notis})`, pm.paus && pm.fort && pm.spara && !e2.kontroll && !e2.notis]);
await H(() => document.querySelector('[data-sida="spara"]').click()); await p.waitForTimeout(1200); await p.screenshot({ path: dir + '3-spara-och-ladda.png' });
await H(() => document.querySelector('[data-borjaom]').click()); await p.waitForTimeout(400); await p.screenshot({ path: dir + '3b-borja-om-fragan.png' });
const fraga = await H(() => document.querySelector('.br-bekrafta')?.textContent || '');
ut.push([`Börja om frågar först: "${fraga.slice(0, 70)}"`, /Vill du spara först/.test(fraga)]);
await H(() => document.querySelector('.br-bekrafta [data-nej]').click()); await p.keyboard.press('Escape'); await p.waitForTimeout(300);
await H(() => document.querySelector('.br-starta').click()); await p.waitForTimeout(800);
const efterK = await syns(); ut.push([`Esc i en kontrollhjälp: den syntes före (${fore.kontroll}), dold i menyn, tillbaka efter Fortsätt (${efterK.kontroll})`, fore.kontroll && efterK.kontroll]);
// 4. Esc mitt i en replik och en kontrollhjälp
await H(() => { const P = window.__printahem; P.prata?.('du', 'Det här är en lång replik som pågår när menyn öppnas, och den ska vänta.', 'STORY', { direkt: true }); });
await p.waitForTimeout(500); await p.keyboard.press('Escape'); await p.waitForTimeout(500);
const e3 = await syns(); await p.screenshot({ path: dir + '8-esc-i-replik.png' });
await H(() => document.querySelector('.br-starta').click()); await p.waitForTimeout(500);
const e3b = await H(() => !!document.querySelector('.fp-overlay')?.hidden);
ut.push([`Esc i en replik: menyn (${e3.meny}), talet pausat (${!e3.tal}) · Fortsätt (${e3b})`, e3.meny && !e3.tal && e3b]);
// 5. "Hur var dagen?"
await H(() => { const P = window.__printahem, S = P.S; S.sang = true; S.steg = P.STEG.findIndex((x) => x.sov); P.sov(); });
let hv = false; for (let i = 0; i < 60 && !hv; i++) { await p.waitForTimeout(250); hv = await H(() => !!document.querySelector('.ph-hurvar')); }
await p.waitForTimeout(300); await p.screenshot({ path: dir + '9-hur-var-dagen.png' });
const hvText = await H(() => document.querySelector('.ph-hurvar b')?.textContent || '');
await H(() => document.querySelector('.ph-hurvar [data-hv="3"]').click()); await H(() => document.querySelector('.ph-hurvar [data-klar]').click());
let kort = false; for (let i = 0; i < 20 && !kort; i++) { await p.waitForTimeout(150); kort = await H(() => !!document.querySelector('.ph-dagbokkort')); }
const sparat = await H(() => window.__printahem.textLogg().filter((e) => e.kalla === 'känsla').map((e) => e.text));
ut.push([`"${hvText}" med fem ansikten, svaret sparas (${sparat.slice(-1)[0] || '–'}), sedan morgonsidan (${kort})`, /Hur var dag \d+\?/.test(hvText) && sparat.length > 0 && kort]);
await p.keyboard.press('Enter'); await p.waitForTimeout(3000); await p.reload(); await p.waitForTimeout(6000);
const ms = await H(() => document.querySelector('.br-starta')?.innerText || ''); await p.screenshot({ path: dir + '1b-start-med-sparning.png' });
ut.push([`start med sparning: "${ms.replace(/\s+/g, ' ')}" och Spara och ladda bredvid`, /FORTSÄTT/i.test(ms) && /Dag \d/i.test(ms)]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
