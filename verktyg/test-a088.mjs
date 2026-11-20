// A-088: kapitelkortet dag 6 (ritpapperet med EN FABRIK), morgonkortets insats, röda tråden på kvällssidan och tillbakablicken dag 18.
// Kör: node verktyg/test-a088.mjs [url]   Skärmdumpar i verktyg/a088/.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a088/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const ut = [];
async function oppna(sparfil) {
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
  const spar = fs.readFileSync(new URL('./sparfiler/' + sparfil, import.meta.url), 'utf8');
  await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
  await p.goto(url); await p.waitForTimeout(4000);
  await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
  await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-dagbokkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
  return { p, fel };
}
/* dag 5 → sov → morgonen dag 6: kapitelkortet */
{
  const { p, fel } = await oppna('start-dag5.json');
  await p.evaluate(() => { const P = window.__printahem, S = P.S; S.kapRitSedd = []; S.kapVisad = [1]; const i = P.STEG.findIndex((x) => x.id === 'sov5'); S.steg = i; P.sov(); });
  let kort = null; for (let i = 0; i < 80 && !kort; i++) { await p.waitForTimeout(500); kort = await p.evaluate(() => { const k = document.querySelector('.ph-kapritn'); return k ? document.querySelector('.ph-dagbokkort')?.innerText.replace(/\s+/g, ' ').slice(0, 160) : null; }); if (!kort) { await p.evaluate(() => { const k = [...document.querySelectorAll('button')].find((b) => /^Hoppa över$/.test(b.textContent.trim()) && b.offsetParent); if (k) k.click(); const s2 = [...document.querySelectorAll('button')].find((b) => /BÖRJA|SÄLJ.*KAPITEL|Börja dagen|Fortsätt/i.test(b.textContent) && b.offsetParent && !b.closest('.ph-dagbokkort')); if (s2) s2.click(); }); } }
  await p.waitForTimeout(2200); await p.evaluate(() => document.querySelectorAll('.ph-telefon, .ph-foto').forEach((e) => e.closest('[class*="ph-"]')?.style && (e.style.display = 'none'))); await p.screenshot({ path: dir + 'kapitelkort-dag6.png' });
  ut.push([`kapitelkortet dag 6: ${kort}`, !!kort && /KAPITEL 2/.test(kort) && /Därför: en fabrik/.test(kort)]);
  await p.waitForTimeout(6500); const borta = await p.evaluate(() => !document.querySelector('.ph-kapritn'));
  ut.push([`kortet stängs själv efter 6 s (${borta})`, borta]);
  ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, !fel.length]);
  await p.close();
}
/* tillbakablicken dag 18 */
{
  const { p, fel } = await oppna('dag18.json');
  await p.evaluate(() => { const P = window.__printahem; P.S.blickar = []; P.S.steg = P.STEG.findIndex((x) => x.id === 'm18-gjut-grunden-huset'); });
  let syns = false; for (let i = 0; i < 90 && !syns; i++) { await p.waitForTimeout(300); syns = await p.evaluate(() => !!document.querySelector('.ph-blick.in')); }
  await p.waitForTimeout(700); await p.screenshot({ path: dir + 'tillbakablick-dag18.png' });
  await p.waitForTimeout(3500); const borta = await p.evaluate(() => !document.querySelector('.ph-blick'));
  ut.push([`tillbakablicken "Ett hem?" dag 18 syns (${syns}) och försvinner (${borta})`, syns && borta]);
  ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, !fel.length]);
  await p.close();
}
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
await b.close();
