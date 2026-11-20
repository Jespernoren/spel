// A-071: nästa sak syns som kontur på sin plats, och inget fastnar i handen. Kör: node verktyg/test-a071.mjs [url]
// (Båda ordningarna för cykeln och generatorn testas i test-dag1-ordning.mjs: CYKEL_FORST=1 för cykeln först.)
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a071/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('a071')) { sessionStorage.setItem('a071', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true, spelarNamn: 'Test', dag1Sida: true })); } });
await p.goto(url); await p.waitForTimeout(5000);
for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) {
  await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|BÖRJA|Fortsätt|Starta|Hoppa/i.test(k.textContent)) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
const ut = [];
const H = (f, a) => p.evaluate(f, a);
const bild = async (namn, fran, mot) => { await H(([f, m]) => { const h = window.__printahem; h.spelare.pos.x = f[0]; h.spelare.pos.z = f[1]; h.tittaMot(m[0], m[1], m[2] ?? 0.4, { tvang: true }); }, [fran, mot]); await p.waitForTimeout(3200); await p.screenshot({ path: dir + namn + '.png' }); };
const kontur = () => H(() => window.__printahem.konturMal()?.[0] || '');

// 1. från start: ingen ring vid kvarnens plats
await H(() => { const h = window.__printahem; h.S.skyltUppe = true; h.ritaStart(); });
const k0 = await H(() => { const h = window.__printahem; return { ring: h.kvarnMark.visible, kvarn: h.kvarn.position.toArray() }; });
await bild('ingen-ring-fran-start', [k0.kvarn[0] + 4, k0.kvarn[2] + 3], [k0.kvarn[0], k0.kvarn[2], 0.2]);
ut.push(['ingen ring vid kvarnens plats från start', !k0.ring]);
// 2. skrivaren står, generatorn tagen: båda konturerna syns
await H(() => { const h = window.__printahem, S = h.S; S.skrivareLastad = true; S.skrivareStar = true; S.generatorTagen = true; h.laggTill('byggsats:generator'); S.steg = h.STEG.findIndex((x) => x.id === 'bygg'); h.ritaStart(); });
await p.waitForTimeout(1200);
let k = await kontur(); ut.push([`konturerna av cykeln och generatorn: ${k}`, /cykel@/.test(k) && /generator@/.test(k)]);
const C = await H(() => [window.__printahem.CYKEL_RUTA.x, window.__printahem.CYKEL_RUTA.z]);
await bild('cykel-och-generator', [C[0] + 3.2, C[1] + 2.6], [C[0], C[1] + 0.5, 0.4]);
// generatorn går att ställa ner (inget fastnar i handen)
const g = await H(() => { const h = window.__printahem, S = h.S, i = S.hotbar.findIndex((x) => x?.typ === 'byggsats:generator'); h.byt(i); h.ritaStart(); return { hall: h.valdTyp ? null : null, fast: h.fastIHanden('byggsats:generator') }; });
await H(() => { const h = window.__printahem; h.interaktor && h.ritaStart(); const reg = h.interaktor; const e = [...(reg.objekt || reg.lista || [])]; return e.length; });
await H(() => { const h = window.__printahem, S = h.S; S.generatorStar = true; const i = S.hotbar.findIndex((x) => x?.typ === 'byggsats:generator'); if (i >= 0) S.hotbar[i] = null; h.ritaStart(); });
await p.waitForTimeout(1200); k = await kontur();
ut.push([`generatorn står: bara cykelns kontur kvar (${k}), generatorn fastnar inte i handen`, /cykel@/.test(k) && !/generator@/.test(k) && !g.fast]);
await bild('generatorn-star', [C[0] + 3.2, C[1] + 2.6], [C[0], C[1] + 0.5, 0.4]);
// 3. cykeln står → monteras
await H(() => { const h = window.__printahem, S = h.S; S.cykelStar = true; h.ritaStart(); h.byggOmCykeln(); });
await p.waitForTimeout(3500);
ut.push(['båda står → generatorn monteras (cykeln ombyggd)', await H(() => !!window.__printahem.S.cykelOmbyggd)]);
// 4. kvarnens kontur före och efter
await H(() => { window.__printahem.S.kvarnKopt = true; });   /* sedan A-076 kommer kvarnen från Ali (giKvarn sätter kvarnKopt) – konturen visas först då */
await p.waitForTimeout(800); k = await kontur(); ut.push([`kvarnens kontur före: ${k}`, /kvarn/.test(k)]);
await bild('kvarn-fore', [k0.kvarn[0] + 4, k0.kvarn[2] + 3], [k0.kvarn[0], k0.kvarn[2], 0.6]);
await H(() => { const h = window.__printahem, S = h.S; S.kvarnKopt = true; S.kvarnStar = true; h.ritaStart(); });
await p.waitForTimeout(1200); k = await kontur(); ut.push([`kvarnens kontur borta när den står (${k || 'ingen'})`, !/kvarn@|^kvarn/.test(k)]);
await bild('kvarn-efter', [k0.kvarn[0] + 4, k0.kvarn[2] + 3], [k0.kvarn[0], k0.kvarn[2], 0.6]);
// 5. kvarnmotorn på kvarnen
await H(() => { const h = window.__printahem; const i = h.laggTill('byggsats:kvarnmotor'); if (typeof i === 'number') h.byt(i); });
await p.waitForTimeout(1200); k = await kontur(); ut.push([`kvarnmotorns kontur på kvarnen: ${k}`, /montera:byggsats:kvarnmotor/.test(k)]);
await H(() => { const h = window.__printahem; h.kamera.children.forEach((c) => { c.userData.__v = c.visible; c.visible = false; }); });
await bild('kvarnmotor-pa-kvarnen', [k0.kvarn[0] + 3.5, k0.kvarn[2] + 3], [k0.kvarn[0], k0.kvarn[2], 1.2]);
// 6. konturen syns genom en vägg (glöden ritas utan djuptest): titta på kvarnmotorns kontur bakifrån skjulet
await bild('genom-vagg', [k0.kvarn[0] - 6, k0.kvarn[2] - 6], [k0.kvarn[0], k0.kvarn[2], 1.0]);
// 7. sängens kontur i skjulet
const sang = await H(() => { const h = window.__printahem, sp = h.sangSpoke, v = sp.getWorldPosition(sp.position.clone()); return { syns: sp.visible, v: v.toArray() }; });
await bild('sangen-i-skjulet', [sang.v[0] + 2.2, sang.v[2] + 2.2], [sang.v[0], sang.v[2], 0.3]);
ut.push(['sängens kontur i skjulet', sang.syns]);
// 8. inget fastnar i handen: allt som kan hamna i handen dag 1–5
const fast = await H(() => { const h = window.__printahem, typer = new Set(['skrivareS', 'cykelS', 'byggsats:generator', 'byggsats:gammalkvarn']);
  h.STEG.slice(0, 70).forEach((st) => { try { const b = typeof st.bild === 'function' ? st.bild() : st.bild; if (b) typer.add(b); } catch {} });
  ['nyckelring', 'kruka', 'sang', 'pall', 'byggsats:grip', 'byggsats:korg', 'byggsats:kvarnmotor', 'byggsats:vindsnurra', 'byggsats:dorr', 'byggsats:bord', 'byggsats:skrivare2', 'byggsats:tak', 'karra'].forEach((t) => typer.add(t));
  return [...typer].filter((t) => h.fastIHanden(t)); });
ut.push([`0 FAST I HANDEN för sakerna dag 1–5${fast.length ? ': ' + fast.join(', ') : ''}`, !fast.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
