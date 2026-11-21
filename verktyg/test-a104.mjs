// Inkorg 49 (A-104): ingen HUD ovanpå en öppen ruta, på 1024×640 och 1920×1080.
// Kör: node verktyg/test-a104.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const ut = [], fel = [];
fs.mkdirSync(new URL('./a104/', import.meta.url), { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const RUTOR = {
  ryggsacken: (P) => P.oppnaInv(),
  butiken: (P) => P.oppnaMarknad(),
  dagboken: (P) => P.oppnaDagbok(),
  printkortet: (P) => { const sk = P.skrivareLista()[0]; if (!sk) return 'ingen skrivare'; P.oppnaPrintMeny(sk); },
  esc: (P) => { P.ui.visaStart('⏸️ Pausad', '', 'Fortsätt'); P.ui.pausad = true; },
};
for (const [fil, dag] of [['start-dag1.json', 1], ['dag8.json', 10], ['start-dag18.json', 19]]) for (const [w, h] of [[1024, 640], [1920, 1080]]) {
  const spar = fs.readFileSync(new URL('./sparfiler/' + fil, import.meta.url), 'utf8');
  const p = await b.newPage({ viewport: { width: w, height: h } }); p.on('pageerror', (e) => fel.push(e.message));
  await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
  await p.goto(url); await p.waitForTimeout(4000);
  await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
  await p.waitForTimeout(2500);
  for (let i = 0; i < 6; i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(300); }
  await p.waitForTimeout(1500);
  if (dag > 3 && w === 1024) { await p.waitForTimeout(3000); const kh = await p.evaluate(() => [...document.querySelectorAll('.ph-kontroll')].filter((e) => e.getClientRects().length && !e.hidden).map((e) => e.textContent).join(' | '));
    ut.push([`dag ${dag}: kontrollhjälpen för E syns inte i spelvyn ("${kh}")`, !/Ryggsäcken och kistan$|Ryggsäcken och kistan \|/.test(kh) || /full/.test(kh)]); }
  if (w === 1024) {   // bär en kruka: etiketten säger var, kontrollhjälpen hur – aldrig samma sak två gånger
    const r = await p.evaluate(async () => { const P = window.__printahem, S = P.S; P.laggTill('kruka', 1); const i = S.hotbar.findIndex((x) => x?.typ === 'kruka'); if (i > 0) P.byt(i); P.spelare.pitch = -0.6; await new Promise((r) => setTimeout(r, 2500));
      const pr = document.querySelector('.fp-prompt.syns')?.textContent || '', kh = [...document.querySelectorAll('.ph-kontroll')].filter((e) => e.getClientRects().length && !e.hidden).map((e) => e.textContent).join(' | ');
      const br = P.regelvakt.kor?.() || []; return { pr, kh, dubbel: P.textLogg().filter((e) => e.kalla === 'brott' && /DUBBEL HJÄLP/.test(e.vem)).length }; });
    await p.screenshot({ path: new URL(`./a104/dag${dag}-${w}-bar-kruka.png`, import.meta.url).pathname });
    ut.push([`dag ${dag}: bär en kruka – etikett "${r.pr}", kontrollhjälp "${r.kh}", 0 DUBBEL HJÄLP (${r.dubbel})`, !r.dubbel && !/\(R vrid/.test(r.pr)]);
    await p.evaluate(() => { const P = window.__printahem; P.byt(0); });
  }
  for (const [namn, f] of Object.entries(RUTOR)) {
    try {
      console.error('·', dag, w, namn);
      const hopp = await Promise.race([p.evaluate(`(${f.toString()})(window.__printahem)`), new Promise((_, n) => setTimeout(() => n(new Error('tidsgräns')), 8000))]);
      if (hopp) { ut.push([`dag ${dag} ${w}×${h} ${namn}: hoppas över (${hopp})`, true]); continue; }
      await p.waitForTimeout(900);
      const r = await Promise.race([p.evaluate(() => window.__printahem.hudOverRuta()), new Promise((_, n) => setTimeout(() => n(new Error('tidsgräns hud')), 8000))]);
      await p.screenshot({ path: new URL(`./a104/dag${dag}-${w}-${namn}.png`, import.meta.url).pathname });
      ut.push([`dag ${dag} ${w}×${h} ${namn}: ingen HUD ovanpå (${r.join(', ') || '–'})`, !r.length]);
    } catch (e) { ut.push([`dag ${dag} ${w}×${h} ${namn}: ${e.message.slice(0, 80)}`, false]); }
    await p.keyboard.press('Escape'); await p.waitForTimeout(300);
    await p.evaluate(() => { try { window.__printahem.ui.stangButik?.(); } catch {} });
    if (namn === 'esc') await p.evaluate(() => { const k = document.querySelector('.br-starta'); k?.click(); });
    await p.waitForTimeout(400);
  }
  await p.close();
}
ut.push([`0 sidfel (${fel.join(' | ') || 'inga'})`, !fel.length]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
await b.close(); process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
