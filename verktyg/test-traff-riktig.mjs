// Jesper 18:36 "allt saknar hitboxes": spela som en människa – ny profil, STARTA, introt, och sedan BARA riktig mus och tangentbord.
// Muslåsning nekas (som i claude.ai:s ram) med LAS=nej (standard) eller tillåts med LAS=ja.
// Mäter: vad pekrutan visar när siktet står på skrivaren på cykeln, och om ett riktigt klick tar upp den.
// Kör: node verktyg/test-traff-riktig.mjs [url]   Skärmdumpar i verktyg/traff-riktig/.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const las = (process.env.LAS || 'nej') === 'ja';
const dir = new URL('./traff-riktig/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });
const p = await ctx.newPage(); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
if (!las) await p.addInitScript(() => { Element.prototype.requestPointerLock = function () { setTimeout(() => document.dispatchEvent(new Event('pointerlockerror')), 10); return Promise.reject(new Error('nekad')); }; });
await p.goto(url); await p.waitForTimeout(5000);
await p.click('.br-starta'); await p.waitForTimeout(1200);
const namn = await p.$('input[placeholder*="namn"]'); if (namn) { await namn.fill('Testaren'); await p.keyboard.press('Enter'); } await p.waitForTimeout(2500);
for (let i = 0; i < 40 && !(await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort'))); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(1500); }
await p.keyboard.press('Enter'); await p.waitForTimeout(2500);
for (let i = 0; i < 6 && (await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort'))); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(800); }
await p.mouse.move(640, 360); await p.mouse.click(640, 360); await p.waitForTimeout(800);   /* första klicket: låser musen eller startar reservläget */
const info = () => p.evaluate(() => { const P = window.__printahem, sp = P.spelare, h = P.interaktor.hovrad; const pek = document.querySelector('.fp-pek, .ph-pek, .pekruta, [class*="pek"]'); return { las: document.pointerLockElement ? 'låst' : (sp.lasFel ? 'reservläge' : 'olåst'), hov: h ? (h.userData.interaktion?.text?.(h) || '(utan text)') : null, pek: pek ? pek.textContent.trim().slice(0, 60) : '(ingen pekruta)', yaw: +sp.yaw.toFixed(2), pitch: +sp.pitch.toFixed(2), skrivareIHand: !!P.S.skrivareTagen || (P.S.hand === 'skrivareS') }; });
const ut = []; ut.push(['efter första klicket', await info()]);
ut.push(['under musen', await p.evaluate(() => [[640, 360], [300, 360], [1000, 500], [640, 650]].map(([x, y]) => { const e = document.elementFromPoint(x, y); return `${x},${y}: ${e?.tagName}.${String(e?.className || '').slice(0, 40)}${e?.id ? '#' + e.id : ''}`; }))]);
const y0 = await info(); await p.mouse.move(640, 360); await p.mouse.move(900, 360, { steps: 8 }); await p.waitForTimeout(300); ut.push(['svep 260 px åt höger', { fore: y0.yaw, efter: (await info()).yaw }]);
ut.push(['avstånd', await p.evaluate(() => { const P = window.__printahem, sp = P.spelare, I = P.interaktor; const o = I.mal.find((m) => { try { return /skrivare/i.test(m.userData.interaktion.text(m) || ''); } catch { return false; } }); if (!o) return 'ingen sak med skrivare i texten'; const v = o.getWorldPosition(new P.THREE.Vector3()); return { avst: +Math.hypot(v.x - sp.pos.x, v.z - sp.pos.z).toFixed(1), rackvidd: I.rackvidd, text: o.userData.interaktion.text(o) }; })]);
/* gå fram till cykeln (teleport 2,5 m från den, vänd 25° fel) – sedan bara riktig mus */
const mal = await p.evaluate(() => { const P = window.__printahem, sp = P.spelare, I = P.interaktor; const akt = I.mal.filter((m) => { try { const inf = m.userData.interaktion; return m.visible !== false && (!inf.kanAktivera || inf.kanAktivera(m)) && (inf.text?.(m) || ''); } catch { return false; } }); const lista = akt.map((m) => { const v = m.getWorldPosition(new P.THREE.Vector3()); return { t: m.userData.interaktion.text(m), x: v.x, y: v.y, z: v.z, d: Math.hypot(v.x - sp.pos.x, v.z - sp.pos.z) }; }).sort((a, b) => a.d - b.d); const m = lista.find((o) => /skrivare|cykel|lasta|ta upp/i.test(o.t)) || lista[0]; const vx = sp.pos.x - m.x, vz = sp.pos.z - m.z, L = Math.hypot(vx, vz); sp.pos.x = m.x + vx / L * 2.5; sp.pos.z = m.z + vz / L * 2.5; sp.yaw = Math.atan2(vx, vz) + 0.45; sp.pitch = -0.1; return { mal: m.t, lista: lista.slice(0, 6).map((o) => o.t.slice(0, 40) + ' ' + o.d.toFixed(1)) }; });
ut.push(['närmaste klickbara', mal]);
await p.waitForTimeout(600);
let fann = null; const spar = [];
await p.mouse.move(1100, 360, { steps: 3 });
for (let k = 0; k < 50 && !fann; k++) {
  await p.mouse.move(1100 - (k + 1) * 18, 360, { steps: 2 }); await p.waitForTimeout(200);
  const i = await info(); spar.push(`${i.yaw}:${i.hov ? i.hov.slice(0, 25) : '-'}`); if (i.hov) fann = i;
}
ut.push(['svep', spar.join(' | ')]);
ut.push(['siktet mot skrivaren på cykeln', fann]);
await p.screenshot({ path: dir + (las ? 'last' : 'reserv') + '-siktet.png' });
const fore = await p.evaluate(() => JSON.stringify(window.__printahem.S.hand || null));
await p.mouse.down(); await p.mouse.up(); await p.waitForTimeout(1200);
const efter = await p.evaluate(() => ({ hand: window.__printahem.S.hand || null, steg: window.__printahem.STEG?.[window.__printahem.S.steg]?.id }));
ut.push(['riktigt klick', { fore, efter }]);
await p.screenshot({ path: dir + (las ? 'last' : 'reserv') + '-efter-klick.png' });
ut.push(['sidfel', fel.slice(0, 3)]);
for (const [t, v] of ut) console.log(t, JSON.stringify(v));
await b.close();
