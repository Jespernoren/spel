// Inkorg 72 (A-127): mer från sonens inspelning – en sak i handen säljs med ett klick på Ali, ryggkorgen i tre mål,
// servetten aldrig på marken, "Hur var dagen?" bara smileys, TVÅ HANDLINGAR I MÅL.
// Kör: node verktyg/test-a127.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
import { STORY_STEG, tvaHandlingar } from '../spel/printa-hem/story.js';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
const mapp = new URL('./a127/', import.meta.url).pathname; fs.mkdirSync(mapp, { recursive: true });
async function oppna(fil) {
  const spar = fs.readFileSync(new URL('./sparfiler/' + fil, import.meta.url), 'utf8');
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(fil + ': ' + e.message));
  await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
  await p.goto(url); await p.waitForTimeout(5000);
  await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
  await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]), .ph-kapkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
  await p.waitForTimeout(1200); return p;
}

// 1. en pall i handen: Ali säger "Den köper jag. Ge hit." och ett klick på Ali säljer den
{ const p = await oppna('start-dag5.json');
  const r = await p.evaluate(async () => { const P = window.__printahem, S = P.S;
    const i = P.laggTill('pall'); if (typeof i === 'number') P.byt(i);
    P.spelare.pos.set(P.ALI.x + 1.5, P.spelare.pos.y, P.ALI.z + 1.5);
    await new Promise((x) => setTimeout(x, 1500));
    const sa = P.textLogg().some((e) => e.vem === 'ali' && e.text.includes(P.aliGeHit));
    const m0 = S.mynt, n0 = P.antalInvNu('pall'); P.aliKlick(); await new Promise((x) => setTimeout(x, 500));
    document.querySelector('.ui-stang, [data-stang]')?.click();
    return { sa, m0, m1: S.mynt, n0, n1: P.antalInvNu('pall') }; });
  ut.push([`pall i handen vid Ali: Ali säger "Den köper jag. Ge hit." (${r.sa})`, r.sa]);
  ut.push([`ett klick på Ali säljer pallen (${r.n0} → ${r.n1} st, ${r.m0} → ${r.m1} kr)`, r.n1 === r.n0 - 1 && r.m1 > r.m0]);
  await p.close(); }

// 2. ryggkorgen i tre mål: Printa → Ta på → kvittot
{ const i = STORY_STEG.findIndex((x) => x.id === 'ryggkorg'), a = STORY_STEG[i], b2 = STORY_STEG[i + 1];
  const G = { skrivare: () => [], antalInv: () => 0 };
  const m1 = typeof a.mal === 'function' ? a.mal({}, G) : a.mal;
  ut.push([`ryggkorgen: "${m1}" (pil ${a.pil}) → "${b2.mal}" → kvittot "${b2.kvitto}"`, m1 === 'Printa ryggkorgen' && a.pil === 'skrivare' && b2.id === 'ryggkorgPa' && b2.mal === 'Ta på ryggkorgen' && /^Nu bär jag sexton skräp\.$/.test(b2.kvitto)]); }

// 3. TVÅ HANDLINGAR I MÅL: 0 i story.js dag 1–23 (alla mål, båda lägena)
{ const hitt = []; const G = new Proxy({}, { get: () => () => 0 });
  for (const p of STORY_STEG) for (const S0 of [{ stat: {}, rolf: {}, ritningar: [], mynt: 0, kvarn: {}, kolf: {} }, { stat: {}, rolf: {}, ritningar: [], mynt: 99999, kvarn: {}, kolf: {} }]) {
    let m = ''; try { m = String(typeof p.mal === 'function' ? p.mal(S0, G) : p.mal); } catch { continue; } if (tvaHandlingar(m)) hitt.push(p.id + ': ' + m); }
  ut.push([`0 mål som säger två handlingar dag 1–23 (${[...new Set(hitt)].slice(0, 3).join(' · ') || 'inga'})`, !hitt.length]);
  ut.push([`lintens prov: "Bygg ryggkorgen – bär 10 skräp" fångas, "Ställ cykel och generator" släpps`, tvaHandlingar('Bygg ryggkorgen – bär 10 skräp') && !tvaHandlingar('Ställ cykel och generator')]); }

// 4. servetten går inte att lägga på marken; "Hur var dagen?" är bara fem smileys och ett klick går vidare
{ const p = await oppna('start-dag3.json');
  const r = await p.evaluate(async () => { const P = window.__printahem; const plac = P.arPlacerbar('byggsats:servett');
    P.hurVarDagen(3); await new Promise((x) => setTimeout(x, 300)); const el = document.querySelector('.ph-hurvar');
    const inne = { smileys: el?.querySelectorAll('[data-hv]').length, input: el?.querySelectorAll('input, textarea').length, knappar: el?.querySelectorAll('button:not([data-hv])').length };
    return { plac, inne }; });
  await p.screenshot({ path: mapp + 'hur-var-dagen.png' });
  await p.click('.ph-hurvar [data-hv="3"]'); await p.waitForTimeout(400);
  const efter = await p.evaluate(() => ({ kvar: !!document.querySelector('.ph-hurvar'), klar: window.__hvKlar || 0 }));
  ut.push([`servetten är inte placerbar – den kan inte hamna på marken (${r.plac})`, r.plac === false]);
  ut.push([`"Hur var dagen?": ${r.inne.smileys} smileys, ${r.inne.input} textrutor, ${r.inne.knappar} andra knappar`, r.inne.smileys === 5 && r.inne.input === 0 && r.inne.knappar === 0]);
  ut.push([`ett klick på en smiley sparar och går vidare till natten (rutan borta ${!efter.kvar}, vidare ${efter.klar})`, !efter.kvar && efter.klar === 1]);
  await p.close(); }

await b.close();
for (const [t, ok] of ut) console.log((ok ? '✅ ' : '❌ ') + t);
if (fel.length) console.log('sidfel:', fel.slice(0, 5));
process.exit(ut.every(([, ok]) => ok) && !fel.length ? 0 : 1);
