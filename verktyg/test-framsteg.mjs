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
// DB: en etikett över skrivaren – rad 1 mätare + procent för hela printen, rad 2 klartext. Pekar man på skrivaren visas ingen procent.
const r = await p.evaluate(async () => {
  const H = window.__printahem, fel = [];
  if (H.skrivare.length < 2 && H.placera) H.placera({ id: 'testM', typ: 'skrivare2', x: H.skrivare[0].mesh.position.x + 2.5, z: H.skrivare[0].mesh.position.z, r: 0, r8: 0 });
  const S0 = H.skrivare[0], M = H.skrivare[1]; H.S.strom = 999;
  S0.fil = 3000; H.startaJobb(S0, { maskin: 'grip' });
  if (M) { M.fil = 3000; H.startaJobb(M, { typ: 'nyckelring' }); }
  let forra = [-1, -1];
  for (let k = 0; k < 60 && (S0.jobb || (M && M.jobb)); k++) {
    H.simulera(0.25); H.ritaSkrivBarer?.();
    [S0, M].forEach((sk, i) => { if (!sk || !sk.jobb) return; const a = H.framsteg(sk).andel; if (a + 1e-9 < forra[i]) fel.push(`skrivare ${i}: ${forra[i]} → ${a}`); forra[i] = a;
      if (/%|kvar/.test(H.skrivarText(sk))) fel.push('procent i pekaretiketten: ' + H.skrivarText(sk)); });
  }
  const etiketter = [...document.querySelectorAll('.hud-skrivbar b')].map((x) => x.textContent);
  if (etiketter.some((t) => /…$/.test(t))) fel.push('avkortat namn: ' + etiketter.join(' | '));
  return { fel, etiketter, harM: !!M, ok: !fel.length };
}); console.log(JSON.stringify(r)); if (!r.ok) { console.log("✗ DB: etiketten över skrivaren"); process.exitCode = 1; } else console.log('✓ DB: procenten går bara uppåt, ingen procent när man pekar' + (r.harM ? ' (Skrivare S och M samtidigt)' : ''));
steg.push(['dag 1, första målet', await p.evaluate(() => window.__printahem.S.dag === 1 && !!window.__printahem.stegText())]);
for (const [t, ok] of steg) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel');
await b.close();
process.exit(fel.length || steg.some(([, ok]) => !ok) ? 1 : 0);
