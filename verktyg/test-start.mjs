// punkt 13: spelet ska starta i en helt tom webbläsare utan sidfel (kraschen före 49f1ea9 syntes bara så).
// Kör: node verktyg/test-start.mjs [url]   – kräver playwright-core och Chrome. Avslutar med kod 1 om något går fel.
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });   // ny profil: ingen localStorage, ingen sparfil, inget intro sett
const p = await ctx.newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
p.on('console', (m) => { if (m.type() === 'error' && !/favicon|Failed to load resource|firestore|firebase/i.test(m.text())) fel.push('konsol: ' + m.text()); });
await p.goto(url); await p.waitForTimeout(6000);
const steg = [];
steg.push(['sidan laddad', await p.evaluate(() => !!window.__printahem)]);
// startrutan → introt (hoppa över) → namnrutan → spelet. Klicka det som syns tills spelet är igång (max 60 s).
for (let i = 0; i < 60 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang)); i++) {
  const namn = await p.$('.ph-namn input');
  if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => {   // klicka den översta knappen som syns (Börja, Hoppa över, Starta)
    for (const k of document.querySelectorAll('button')) {
      const r = k.getBoundingClientRect(); if (!r.width || !r.height) continue;
      const top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
      if (top && (top === k || k.contains(top)) && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); return; }
    }
  });
  await p.waitForTimeout(1000);
}
steg.push(['spelet igång', await p.evaluate(() => !!window.__printahem?.ui?.igang)]);
await p.waitForTimeout(8000);
steg.push(['dag 1, första målet', await p.evaluate(() => window.__printahem.S.dag === 1 && !!window.__printahem.stegText())]);
for (const [t, ok] of steg) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel');
await b.close();
process.exit(fel.length || steg.some(([, ok]) => !ok) ? 1 : 0);
