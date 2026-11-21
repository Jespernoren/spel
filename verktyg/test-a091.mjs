// A-091 (inkorg 30): vit ram runt det siktet står på (bara när det går att använda), staketet runt tippen och inget glapp under tippen.
// Kör: node verktyg/test-a091.mjs [url]   Skärmdumpar i verktyg/a091/.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a091/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [];
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
const spar = fs.readFileSync(new URL('./sparfiler/start-dag2.json', import.meta.url), 'utf8');
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(5000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-dagbokkort, .ph-kapkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
await p.evaluate(() => { document.querySelectorAll('.ph-dagbokkort, .ph-notis').forEach((e) => e.remove()); });
// sikta på en sak: ställ spelaren 2,2 m bort och titta mot sakens mitt
const sikta = async (fn, namn, fil, kontur = false) => {
  const r = await p.evaluate(([src, kontur]) => {
    const P = window.__printahem, I = P.interaktorObj(), sp = P.spelare, o = (0, eval)(src)(P, I); if (!o) return { fel: 'hittade inte saken' };
    const V = sp.pos.constructor, c = new V(); (o.autoTraffYta || o).getWorldPosition(c);
    let bast = null;
    for (let i = 0; i < 16; i++) { const v = i * Math.PI / 8, d = 2.2; const x = c.x + Math.sin(v) * d, z = c.z + Math.cos(v) * d;
      sp.pos.set(x, sp.pos.y, z); sp.yaw = Math.atan2(-(c.x - x), -(c.z - z)); sp.pitch = Math.atan2(c.y - 1.6, d);
      P.kameraObj().position.set(x, 1.6, z); P.kameraObj().rotation.set(sp.pitch, sp.yaw, 0, 'YXZ'); P.kameraObj().updateMatrixWorld(true); P.uppdateraSikte();
      const h = I.hovrad; let ok = false; for (let x2 = h; x2; x2 = x2.parent) if (x2 === o) ok = true;
      if (ok) { bast = { hall: i, ram: I.ram.visible, kontur }; break; } }
    return bast || { fel: 'siktet tog aldrig saken' };
  }, [fn.toString(), kontur]);
  if (!r.fel) { await p.waitForTimeout(700); await p.screenshot({ path: dir + fil }); }
  return r;
};
const saker = [
  ['storebrors skrivare', (P) => P.skrivareLista()[0]?.mesh, 'sikte-skrivaren.png'],
  ['cykeln', (P) => P.cykelObj(), 'sikte-cykeln.png'],
  ['en pet-flaska', (P, I) => I.mal.find((o) => /flask/i.test(String((() => { try { return o.userData.interaktion.text(o); } catch { return ''; } })())) && o.visible), 'sikte-flaskan.png'],
  ['Alis disk', (P, I) => I.mal.find((o) => /Ali|butik|affär/i.test(String((() => { try { return o.userData.interaktion.text(o); } catch { return ''; } })())) && o.visible), 'sikte-alis-disk.png'],
];
for (const [namn, fn, fil] of saker) { const r = await sikta(fn, namn, fil); ut.push([`${namn}: ${r.fel || (r.ram ? 'vit ram syns' : 'INGEN ram')} (${fil})`, !r.fel && r.ram]); }
// tippen från fyra håll med staketet och grinden
for (const [namn, dx, dz] of [['oster', 1, 0], ['soder', 0, 1], ['sydvast', -0.7, 0.7], ['nordost', 0.7, -0.7]]) {
  await p.evaluate(([dx, dz]) => { const P = window.__printahem, sp = P.spelare, T = P.TIPP; const x = T.x + dx * 15, z = T.z + dz * 15; sp.pos.set(x, sp.pos.y, z); sp.yaw = Math.atan2(-(T.x - x), -(T.z - z)); sp.pitch = -0.12; }, [dx, dz]);
  await p.waitForTimeout(600); await p.screenshot({ path: `${dir}tippen-${namn}.png` });
}
// TIPP SVÄVAR för tippSteg 0, 3, 6, 9
for (const s of [0, 3, 6, 9]) { const f = await p.evaluate((s) => { const P = window.__printahem; P.sattTippStegNu(s); return P.tippSvavarKoll(64); }, s); ut.push([`TIPP SVÄVAR tippSteg ${s}: ${f.length} (${f.slice(0, 2).join(' · ') || 'inga'})`, !f.length]); }
// nästa saks kontur dag 1: lasta av skrivaren (som en spelare) och sikta på platsen där den ska stå
{ const p2 = await b.newPage({ viewport: { width: 1280, height: 720 } }); p2.on('pageerror', (e) => fel.push(e.message));
  const s1 = JSON.stringify({ spelarNamn: 'Test', introSett: true });   /* ett nytt spel, dag 1 */
  await p2.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, s1);
  await p2.goto(url); await p2.waitForTimeout(5000);
  await p2.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p2.evaluate(() => window.__startaSpel())).catch(() => {});
  await p2.waitForTimeout(3000); for (let i = 0; i < 20 && await p2.evaluate(() => !!document.querySelector('.ph-dagbokkort, .ph-kapkort')); i++) { await p2.keyboard.press('Enter'); await p2.waitForTimeout(400); }
  const r = await p2.evaluate(async () => {
    const P = window.__printahem, I = P.interaktorObj(), sp = P.spelare, V = sp.pos.constructor, vant = (ms) => new Promise((r) => setTimeout(r, ms));
    const mot = (o) => { const c = new V(); (o.autoTraffYta || o).getWorldPosition(c); for (let i = 0; i < 16; i++) { const v = i * Math.PI / 8, x = c.x + Math.sin(v) * 2.2, z = c.z + Math.cos(v) * 2.2; sp.pos.set(x, sp.pos.y, z); sp.yaw = Math.atan2(-(c.x - x), -(c.z - z)); sp.pitch = Math.atan2(c.y - 1.6, 2.2); P.kameraObj().position.set(x, 1.6, z); P.kameraObj().rotation.set(sp.pitch, sp.yaw, 0, 'YXZ'); P.kameraObj().updateMatrixWorld(true); P.uppdateraSikte(); let ok = false; for (let h = I.hovrad; h; h = h.parent) if (h === o) ok = true; if (ok) return true; } return false; };
    P.S.skyltUppe = true; await vant(1500);   /* skylten är uppe – nästa steg är att lasta av skrivaren */
    const txt = (o) => { try { const t = o.userData.interaktion.text; return String(typeof t === 'function' ? t(o) : t || ''); } catch { return ''; } }; const syn = (o) => { for (let x = o; x; x = x.parent) if (!x.visible) return false; return true; };
    const last = I.mal.find((o) => syn(o) && /skrivare|ta upp|lasta/i.test(txt(o)) && (!o.userData.interaktion.kanAktivera || o.userData.interaktion.kanAktivera(o))); if (!last) return { fel: 'hittade inte skrivaren på cykeln: ' + I.mal.filter(syn).map(txt).filter(Boolean).slice(0, 8).join(' | ') }; if (!mot(last)) return { fel: 'siktet tog inte skrivaren på cykeln' }; I.aktivera(); await vant(1500);
    const yta = I.mal.find((o) => syn(o) && o.userData.interaktion?.utanRam && (!o.userData.interaktion.kanAktivera || o.userData.interaktion.kanAktivera(o))); if (!yta) return { fel: 'ingen plats med kontur är aktiv · lastad ' + P.S.skrivareLastad + ' star ' + P.S.skrivareStar + ' syn ' + syn(P.startYta) + ' text ' + txt(last) };
    if (!mot(yta)) return { fel: 'siktet tog inte platsen' }; await vant(300); P.uppdateraSikte();
    return { ram: I.ram.visible, utanRam: !!yta.userData.interaktion?.utanRam };
  });
  if (!r.fel) await p2.screenshot({ path: dir + 'sikte-kontur.png' });
  ut.push([`platsen för storebrors skrivare: ${r.fel || (r.ram ? 'har en vit låda (fel)' : 'bara kontur, ingen låda')} (sikte-kontur.png)`, !r.fel && !r.ram]);
}
const brott = await p.evaluate(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && /OSYNLIGT SIKTE|TIPP SVÄVAR/.test(e.vem)).map((e) => e.vem + ': ' + e.text));
ut.push([`0 OSYNLIGT SIKTE och 0 TIPP SVÄVAR i regelvakten (${brott.slice(0, 2).join(' · ') || 'inga'})`, !brott.length]);
ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, !fel.length]);
await b.close();
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
