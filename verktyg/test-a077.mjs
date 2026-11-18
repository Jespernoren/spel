// A-077: en enda ritstil. Kör: node verktyg/test-a077.mjs [url]  → skärmdumpar i verktyg/a077/
// Konturerna dag 1 (skrivaren, kvarnen, cykeln och generatorn), en maskin som hålls och får plats / inte får plats,
// fönstret, boden och solcellsparken – allt som vita (eller röda) darriga linjer. Regelvakten: 0 FEL RITSTIL.
import fs from 'node:fs';
import { execSync } from 'node:child_process';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a077/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
{ const n = execSync(`grep -cE "spokMatOk|spokMatFel|bodMatOk\\.|0xffd43b, transparent: true, opacity: 0.45" spel/printa-hem/spel.js || true`, { encoding: 'utf8' }).trim(); ut.push([`grep: gröna/röda spökmaterial och den gula rutan används inte (${n} träffar på de gamla materialen)`, +n <= 2]); }
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const brott = [];
async function sida(spar) {
  const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
  p.on('pageerror', (e) => fel.push(e.message));
  await p.addInitScript((s) => { if (!sessionStorage.getItem('a077')) { sessionStorage.setItem('a077', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); } }, spar);
  await p.goto(url); await p.waitForTimeout(5000);
  for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) { await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Starta|Fortsätt|Vakna|Börja/i.test(k.textContent)) { k.click(); return; } } }); await p.waitForTimeout(1000); }
  await p.waitForTimeout(2500);
  return { p, fel, H: (f, a) => p.evaluate(f, a) };
}
const stang = (H) => H(() => { for (let i = 0; i < 6; i++) { const k = [...document.querySelectorAll('.fp-knapp, button')].find((x) => x.offsetParent && /Fortsätt|Stäng|OK|Läst|Klar|Vidare|Börja dagen/i.test(x.textContent)); if (!k) break; k.click(); } if (!window.__printahem.ui.igang) window.__printahem.ui.starta(true); });
const vy = async ({ p, H }, namn, [x, z], [tx, tz]) => { await stang(H); await H(([x, z, tx, tz]) => { const P = window.__printahem; P.spelare.pos.set(x, P.spelare.pos.y, z); P.tittaMot?.(tx, tz, 0.3, { tvang: true, nyckel: 'a077' + x + z }); }, [x, z, tx, tz]); await p.waitForTimeout(5000); await p.screenshot({ path: dir + namn + '.png' });
  const r = await H(() => window.__printahem.regelvaktKor().filter((t) => /^FEL RITSTIL|^GENERISK MARKERING/.test(t))); brott.push(...r.map((t) => `${namn}: ${t}`)); };
// dag 1: konturerna
{ const s = await sida(JSON.stringify({ introSett: true, spelarNamn: 'Test', dag1Sida: true, skyltUppe: true, skrivareLastad: true }));
  await vy(s, 'kontur-skrivaren', [-8, 18], [-12.8, 11.5]);
  await s.H(() => { const S = window.__printahem.S; S.skrivareStar = true; S.stromHjalp = true; });
  await vy(s, 'kontur-cykeln-och-generatorn', [-8, 18], [-12.6, 13.9]);
  await s.H(() => { const S = window.__printahem.S; S.cykelStar = S.generatorStar = S.cykelOmbyggd = true; S.kvarnKopt = true; });
  await vy(s, 'kontur-kvarnen', [-10, 18], [-16.3, 11.5]);
  ut.push([`dag 1 utan sidfel (${s.fel[0] || 'inga'})`, !s.fel.length]); }
// fönstret och boden (sparfilen dag 8), solcellsparken
{ const s = await sida(fs.readFileSync('verktyg/sparfiler/dag8.json', 'utf8'));
  await s.H(() => { const P = window.__printahem; const i = P.laggTill('byggsats:fonster'); if (typeof i === 'number') P.byt(i); });
  await vy(s, 'fonstret', [9, 12], [9, 7]);
  const f = await s.H(() => ({ syns: window.__printahem.fonsterSpoke.visible, ritning: !!window.__printahem.fonsterSpoke.userData.ritOk }));
  await s.H(() => { const P = window.__printahem; P.S.bod = false; const i = P.laggTill('byggsats:gamingbod'); if (typeof i === 'number') P.byt(i); });
  await vy(s, 'boden', [9, 9], [9, 2.4]);
  const bd = await s.H(() => ({ syns: window.__printahem.bodSpoke.visible, ritning: !!window.__printahem.bodSpoke.userData.ritOk }));
  await s.H(() => { const P = window.__printahem; const i = P.laggTill('byggsats:bank'); if (typeof i === 'number') P.byt(i); });
  await vy(s, 'haller-far-plats', [-4.4, -10.5], [-4.4, -14.4]); await s.H(() => { window.__printahem.spelare.pitch = -0.45; }); await s.p.waitForTimeout(4000); await s.p.screenshot({ path: dir + 'haller-far-plats.png' });
  const ok = await s.H(() => { const g = window.__printahem.spokeGrupp(); return g ? { syns: g.visible, vit: !!g.userData.ritOk?.visible } : null; });
  await vy(s, 'haller-far-inte-plats', [6, 4], [12, -2]); await s.H(() => { window.__printahem.spelare.pitch = -0.45; }); await s.p.waitForTimeout(4000); await s.p.screenshot({ path: dir + 'haller-far-inte-plats.png' });
  const fel = await s.H(() => { const g = window.__printahem.spokeGrupp(); return g ? { syns: g.visible, rod: !!g.userData.ritFel?.visible } : null; });
  ut.push([`batteribanken i handen som ritning: vit på sin plats (${JSON.stringify(ok)}), röd bredvid (${JSON.stringify(fel)})`, !!ok?.vit && !!fel?.rod]);
  await s.H(() => { const P = window.__printahem; const i = P.laggTill('byggsats:solpark'); if (typeof i === 'number') P.byt(i); });
  await vy(s, 'solcellsparken', [-24, 6], [-30, -1]);
  ut.push([`fönstret som ritning (${JSON.stringify(f)}), boden som ritning (${JSON.stringify(bd)})`, f.ritning && bd.ritning]);
  ut.push([`dag 8 utan sidfel (${s.fel[0] || 'inga'})`, !s.fel.length]); }
ut.push([`regelvakten: 0 FEL RITSTIL och 0 GENERISK MARKERING i alla vyer${brott.length ? ' – ' + brott.join(' · ') : ''}`, !brott.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
await b.close(); process.exit(ut.every((x) => x[1]) ? 0 : 1);
