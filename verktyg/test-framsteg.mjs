// BT: läser framsteget för samma skrivare från alla vyer (mätaren, rutan när man pekar) och stoppar om de skiljer sig.
// Kör: node verktyg/test-framsteg.mjs [url]
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
const r = await p.evaluate(async () => { const H = window.__printahem; const sk = H.skrivare[0]; sk.fil = 3000; H.S.strom = 999; H.startaJobb(sk, { maskin: "grip" }); H.simulera(3); const f = H.framsteg(sk); const hov = H.skrivarText(sk); const bar = [...document.querySelectorAll(".hud-skrivbar span")].map((x) => x.textContent); const pct = Math.floor(f.andel * 100) + " %"; return { f, hov, bar, ok: hov.includes(pct) && bar.filter(Boolean).every((b) => b.startsWith(pct)) }; }); console.log(JSON.stringify(r)); if (!r.ok) { console.log("✗ framstegen skiljer sig mellan vyerna"); process.exitCode = 1; } else console.log("✓ samma framsteg i alla vyer");
steg.push(['dag 1, första målet', await p.evaluate(() => window.__printahem.S.dag === 1 && !!window.__printahem.stegText())]);
for (const [t, ok] of steg) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel');
await b.close();
process.exit(fel.length || steg.some(([, ok]) => !ok) ? 1 : 0);
