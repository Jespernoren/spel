// A-076 tillägg 13:20: bara nästa uppgift syns. Notisen dag 1 utan lista, du säger första uppgiften och rutan glider in,
// uppgiften blir grön och glider åt vänster till en bock, nästa glider in. Kör: node verktyg/test-a076f.mjs [url] → verktyg/a076/f-*.png
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
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())); await p.waitForTimeout(2500); await p.keyboard.press('Enter'); await p.waitForTimeout(2500);
for (let i = 0; i < 40 && !(await H(() => !!document.querySelector('.ph-dagbokkort'))); i++) await p.waitForTimeout(250);   /* A-076 14:22: morgonsidan är dagbokskortet */
const n1 = await H(() => ({ notis: document.querySelector('.ph-dagbokkort')?.textContent || '', lista: !!document.querySelector('.ph-dagbokkort .ph-dagmal'), uppgDold: document.body.classList.contains('dn-forsta') }));
await p.screenshot({ path: dir + 'f-notis-utan-lista.png' });
ut.push([`notisen dag 1 utan lista (${!n1.lista}): "${n1.notis.slice(0, 90)}" · uppgiftsrutan väntar (${n1.uppgDold})`, !n1.lista && /Ingen som tjatar/.test(n1.notis) && n1.uppgDold]);
await p.keyboard.press('Enter');   /* FORTSÄTT */
let in_ = false; for (let i = 0; i < 60 && !in_; i++) { await p.waitForTimeout(500); in_ = await H(() => !document.body.classList.contains('dn-forsta')); }
const l = await H(() => window.__printahem.textLogg().filter((e) => e.vem === 'du' && /Först ska jag spika upp skylten/.test(e.text)).length);
await p.waitForTimeout(1500); await p.screenshot({ path: dir + 'f-forsta-uppgiften.png' });
const t1 = await H(() => ({ topp: document.querySelector('.dn-topp').textContent, prickar: document.querySelectorAll('.dn-mal .c').length }));
ut.push([`du säger "Först ska jag spika upp skylten." (${l}) och rutan glider in (${in_}) · dagrutan: ${t1.prickar} bockar, ingen räknare (${!/Dagens mål|av \d+ · sedan/.test(t1.topp)})`, l > 0 && in_ && t1.prickar === 0 && !/Dagens mål|av \d+ · sedan/.test(t1.topp)]);
// skylten klar → grön, glider åt vänster, nästa glider in
await H(() => { const P = window.__printahem; P.hammarPaBrador.userData.interaktion.aktivera(); P.byt(P.S.hotbar.findIndex((x) => x?.typ === 'hammare')); P.bradhog.userData.interaktion.aktivera(); });
let k = null; for (let i = 0; i < 120 && !k; i++) { await p.waitForTimeout(150); k = await H(() => { for (const x of [...document.querySelectorAll('.ph-med button, .fp-knapp')]) if (x.offsetParent && /Fortsätt|Stäng|OK|Läst|Klar|Vidare/i.test(x.textContent)) x.click(); return !!document.querySelector('.dn-klar-kopia'); }); }
await p.screenshot({ path: dir + 'f-klar-gron.png' });
await p.waitForTimeout(800); await p.screenshot({ path: dir + 'f-glider-at-vanster.png' });
await p.waitForTimeout(1500); await p.screenshot({ path: dir + 'f-nasta-uppgift.png' });
const t2 = await H(() => ({ bockar: document.querySelectorAll('.dn-mal .c.klar').length, rub: document.querySelector('.dn-uppg .rub')?.textContent, framtida: window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'FRAMTIDA MÅL SYNS').map((e) => e.text) }));
ut.push([`uppgiften blev grön (${k}) och blev en bock (${t2.bockar}), nästa: "${t2.rub}" · FRAMTIDA MÅL SYNS: ${t2.framtida.length}`, k && t2.bockar >= 1 && !t2.framtida.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
