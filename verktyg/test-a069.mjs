// A-069: luckorna mot progressionskartan. Kör: node verktyg/test-a069.mjs [url]  → skärmdumpar i verktyg/a069/
// 1 bänken dag 3 utan tak · 2 strömdraget per linje · 3 trimsatser per linje · 4 guldskrivaren · 5 målen har id
import fs from 'node:fs';
import { execSync } from 'node:child_process';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a069/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
// 5. id: lint och kanon-tabellen
{ let ok = true, txt = ''; try { txt = execSync('node verktyg/lint-sekvens.mjs', { encoding: 'utf8' }); } catch (e) { ok = false; txt = String(e.stdout); } ut.push([`lint-sekvens (STEG UTAN ID): ${txt.trim().split('\n').pop()}`, ok]); }
{ const n = execSync(`grep -c "H.stegText() || ''" verktyg/sim-bot.js || true`, { encoding: 'utf8' }).trim(); ut.push([`AX-boten läser målet via steg-kanon.json (${Object.keys(JSON.parse(fs.readFileSync('verktyg/steg-kanon.json', 'utf8'))).length} id)`, /__stegKanon/.test(fs.readFileSync('verktyg/sim-bot.js', 'utf8')) ]); }
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
const spar = JSON.parse(fs.readFileSync('verktyg/sparfiler/dag18.json', 'utf8'));
await p.addInitScript((s) => { if (!sessionStorage.getItem('a069')) { sessionStorage.setItem('a069', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); } }, JSON.stringify(spar));
await p.goto(url); await p.waitForTimeout(5000);
for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) { await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|BÖRJA|Fortsätt|Starta|Hoppa|Vakna|Ny dag/i.test(k.textContent)) { k.click(); return; } } }); await p.waitForTimeout(1000); }
await p.waitForTimeout(800);
const H = (f, a) => p.evaluate(f, a);
// 5. alla mål har ett unikt id, och sparfilen hittade rätt mål (del#nr → id)
const id5 = await H(() => { const P = window.__printahem; const ids = P.STEG.map((s) => s.id); return { utan: ids.filter((x) => !x).length, unika: new Set(ids).size === ids.length, n: ids.length, nu: P.stegId(), dag: P.S.dag }; });
ut.push([`${id5.n} mål, ${id5.utan} utan id, alla unika: ${id5.unika} · sparfilen dag ${id5.dag} står på ${id5.nu}`, id5.utan === 0 && id5.unika && /^m18-|^sov17$/.test(id5.nu || '')]);
// 1. Rolfs bänk kvällen dag 3 utan tak
const b1 = await H(() => { const P = window.__printahem, S = P.S; const spara = { dag: S.dag, utsikt: S.utsikt, tak: S.hem?.tak, steg: S.steg };
  S.dag = 3; S.utsikt = undefined; S.hem = { ...(S.hem || {}), tak: false }; S.steg = P.STEG.findIndex((x) => x.id === 'sov3' || (x.sov && /Dag 3/.test(x.del))); P.kollaUtsikt(); const r = { utsikt: S.utsikt, steg: P.stegId() };
  S.dag = spara.dag; S.utsikt = spara.utsikt; S.hem.tak = spara.tak; S.steg = spara.steg; return r; });
ut.push([`bänken dag 3 utan tak: Rolf bjuder (${b1.utsikt}, mål ${b1.steg})`, b1.utsikt === 'bjuden']);
// 2. strömdraget kommer från balans.js och extraktorn drar
const s2 = await H(() => { const P = window.__printahem, B = P.B; const fore = P.stromBehov(); P.placerade.push({ id: 'testex', typ: 'extraktor', x: 0, z: 0 }); const med = P.stromBehov(); P.placerade.pop();
  return { drag: B.STROM_DRAG, ex: med - fore, guld: P.GEN[6]?.strom }; });
ut.push([`strömdraget: röd ${s2.drag.rod_kvarn}/s, kolfiber ${s2.drag.kolf_kvarn}/s, extraktorn ${s2.ex}/s, guldskrivaren ${s2.guld}/s`, s2.drag.rod_kvarn > 3 && s2.drag.kolf_kvarn === 14 && s2.ex === s2.drag.extraktor && s2.guld === s2.drag.guldskrivare]);
// 3. trimsatserna per linje: röd trim nivå 1 syns hos Ali först när röda skrivarkedjan har låst upp den
const t3 = await H(() => { const P = window.__printahem, S = P.S, f = P.flaskS(); const har = (k) => P.aliKopLista().some((x) => x.key === 't:' + k);
  const spara = { upp: [...f.upp], trim: { ...(S.trim || {}) }, kopt: { ...(S.trimKopt || {}) } }; S.trim = { ...S.trim, skrivare_rod: 0, skrivare_kolf: 0 }; S.trimKopt = { ...S.trimKopt, skrivare_rod: 0, skrivare_kolf: 0 };
  f.upp = f.upp.filter((x) => !/^trim_(rod|kolf)\d$/.test(x)); const fore = { rod: har('skrivare_rod'), kolf: har('skrivare_kolf') };
  f.upp.push('trim_rod1', 'trim_kolf1'); const efter = { rod: har('skrivare_rod'), kolf: har('skrivare_kolf') };
  f.upp = spara.upp; S.trim = spara.trim; S.trimKopt = spara.kopt; return { fore, efter, kedja: P.B.FLASK_KEDJA.skrivare_rod.concat(P.B.FLASK_KEDJA.skrivare_kolf) }; });
ut.push([`trim per linje: före upplåsning röd ${t3.fore.rod}/kolfiber ${t3.fore.kolf}, efter ${t3.efter.rod}/${t3.efter.kolf} · kedjorna ${t3.kedja.join(' ')}`, !t3.fore.rod && !t3.fore.kolf && t3.efter.rod && t3.efter.kolf]);
// 4. guldskrivaren: Guldstatyn går inte på en vanlig skrivare, men på guldskrivaren
const g4 = await H(() => { const P = window.__printahem, S = P.S; S.kvarn.kniv = 2; S.stat.maltNiva = { ...(S.stat.maltNiva || {}), 4: 1 }; S.ritningar.push('recept:n4_staty');
  const fore = P.MASKINER.guldskrivare.syns(); P.flaskS().upp.push('guldskrivare'); const syns = !fore && P.MASKINER.guldskrivare.syns(); P.laggTill('rulle4', 2);
  const bla = P.skrivare.find((x) => x.gen <= 3 && !x.jobb); if (bla) bla.fil = 9999; const paBla = bla ? P.startaDirekt(bla, { typ: 'n4_staty' }) : null;
  { const pl = P.nastaPlats('guldskrivare'); P.placera({ id: 'testguld', typ: 'guldskrivare', x: pl?.x ?? 0, z: pl?.z ?? 0, r: 0.6, plats: pl?.id }); } const g = P.skrivare.find((x) => x.gen === 6); if (g) g.fil = 9999; const paGuld = g ? P.startaDirekt(g, { typ: 'n4_staty' }) : null;
  return { syns, paBla, paGuld, finns: !!g, plats: g && [+g.mesh.position.x.toFixed(1), +g.mesh.position.z.toFixed(1)], i_scen: !!g?.mesh.parent, spel: [+P.spelare.pos.x.toFixed(1), +P.spelare.pos.z.toFixed(1)] }; });
ut.push([`guldskrivaren: låst tills skrivarflaskhalsen släpper den, sedan synlig: ${g4.syns}, Guldstatyn på blå skrivare ${g4.paBla}, på guldskrivaren ${g4.paGuld}`, g4.syns && g4.paBla === false && g4.paGuld === true]);
if (g4.plats) { await H(([x, z]) => { const P = window.__printahem; P.spelare.pos.set(x + 2.2, P.spelare.pos.y, z + 2.6); P.tittaMot?.(x, z, 0.1, { tvang: true, nyckel: 'a069' }); }, g4.plats); await p.waitForTimeout(2500); await p.screenshot({ path: dir + 'guldskrivaren.png' }); }
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
