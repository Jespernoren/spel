// DK: en gammal sparfil från kapitel 3 byggs om tyst. Kör: node verktyg/test-pirra.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
for (let i = 0; i < 60 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang)); i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
const H = (f, a) => p.evaluate(f, a); const ut = [];
await p.waitForTimeout(2000);
await H(() => { const h = window.__printahem, S = h.S; S.kapitel = 3; S.pappaBesok = true; S.sackkarra = true; S.kvarn.stor = true; S.kvarn.jet = true; S.kvarn.turbo = true; S.kvarn.kniv = 2; S.kvarn.motor = true;
  S.auto = { ...(S.auto || {}), band: true, lastarm: true, arm: true, lada: true, ko: [] }; S.petg = { ...S.petg, band: true };
  S.hotbar[5] = { typ: 'byggsats:petgband', n: 1 }; S.hotbar[6] = { typ: 'byggsats:stortratt', n: 1 }; S.hotbar[7] = { typ: 'fynd5', n: 2 };   /* A-044: titanfynd i gammal sparfil */
  for (let i = 0; i < 20; i++) h.laggSkrap(-28 + (i % 5) * 0.2, 12 + Math.floor(i / 5) * 0.2, h.variantFor(i % 2 ? 'kajak' : 'tunna'), 0);
  S.karraLast = [h.variantFor('tunna'), h.variantFor('tunna'), h.variantFor('tunna')];
  h.placera({ id: 'tk7', typ: 'kolfkvarn', x: -16.3, z: 10, r: 0, r8: 0 }); h.placera({ id: 'tk8', typ: 'kolfskrivare', x: -10.5, z: 10, r: 0, r8: 0 });   /* kolfiberlinjen i sparfilen kraschade laddningen (FIL_FARG före definitionen) */
  h.spar.spara(true); });
await p.reload(); await p.waitForTimeout(8000);
const m = await H(() => { const h = window.__printahem, S = h.S, k = h.skrapLista.filter((x) => x.userData.sort === 'kajak'), t = h.skrapLista.filter((x) => x.userData.tung && x.userData.sort !== 'kajak');
  let krock = 0; const st = h.skrapLista.filter((x) => x.userData.tung); for (let i = 0; i < st.length; i++) for (let j = i + 1; j < st.length; j++) if (Math.hypot(st[i].position.x - st[j].position.x, st[i].position.z - st[j].position.z) < 0.9) krock++;
  const inv = JSON.stringify([S.hotbar, S.ryggsack, S.kistan]);
  return { inv, band: S.petg.band, cont: S.petg.container, stor: S.kvarn.stor, jet: S.kvarn.jet, turbo: S.kvarn.turbo, kniv: S.kvarn.kniv, auto: [S.auto.band, S.auto.lastarm, S.auto.arm], lada: S.auto.lada, kajak: k.length, tunga: t.length, krock, pirra: S.karraLast.length, petgband: inv.includes('petgband'), stortratt: inv.includes('stortratt'), contInv: inv.includes('petgcontainer') }; });
console.log(JSON.stringify(m));
ut.push(['tunga rullbandet → stor container (även byggsatsen)', !m.band && m.cont && !m.petgband && m.contInv]);
ut.push(['sparfilen med kolfiberlinjen laddas', await H(() => !!window.__printahem.kolfKvarn?.() && window.__printahem.skrivare.some((x) => x.gen === 5))]);
ut.push(['stora tratten borta', !m.stor && !m.stortratt]);
ut.push(['jet/turbo på blå kvarnen → turbon i handen (EO 35)', !m.jet && !m.turbo && /turbomotor/.test(m.inv)]);
ut.push(['knivarna på blå kvarnen borta', !m.kniv]);
ut.push(['rullband, lastarm och slangfördelare på linje 1 borta (leveranslådan kvar)', !m.auto.some(Boolean) && m.lada]);
ut.push([`högst 8 kajaker och 14 tunga (${m.kajak}, ${m.tunga})`, m.kajak <= 8 && m.tunga <= 14]);
ut.push([`inga stora saker inuti varandra (${m.krock})`, m.krock === 0]);
ut.push(['A-044: titanfynd byts tyst mot guldfynd', !/fynd5/.test(m.inv || '') ]);
ut.push([`pirran har en sak (${m.pirra})`, m.pirra === 1]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
