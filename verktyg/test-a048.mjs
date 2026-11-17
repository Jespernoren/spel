// A-048: bågarna i efterspelet, labbet blandar Tippium, första Tippium-printen är skylten till Rolfs veranda. Kör: node verktyg/test-a048.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
for (let i = 0; i < 25; i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); const top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); if (r.width && top && (top === k || k.contains(top)) && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); break; } } });
  await p.waitForTimeout(1000);
}
const ut = [];
await p.evaluate(() => { const h = window.__printahem, S = h.S; h.efterspelTest(); S.dag = 25; S.stat.maltNiva = { ...(S.stat.maltNiva || {}), 4: 1 }; S.gunBritt = 20; S.gunBrittKlar = true; h.kollaBagar(); });
await p.waitForTimeout(5000);
let r = await p.evaluate(() => { const S = window.__printahem.S; return { bage: { ...S.bage }, aktiva: window.__printahem.aktivaTradar().map((t) => t.id) }; });
ut.push([`storebrors båge startar i efterspelet (${Object.keys(r.bage).join(', ')}), aktiva trådar ${r.aktiva.length} ≤ 3`, !!r.bage.labb && r.aktiva.length <= 3]);
await p.evaluate(() => { const S = window.__printahem.S; S.labbVantar = Date.now() - 100000; window.__printahem.kollaLabb(); });
await p.waitForTimeout(1500);
r = await p.evaluate(() => { const h = window.__printahem, S = h.S; const ok = [];
  for (const t of ['rulle', 'rulle2', 'rulle3', 'rulle4']) { h.laggTill(t); const i = [...S.hotbar].findIndex((x) => x?.typ === t); if (i >= 0) h.byt(i); h.interaktor.hovrad = null; const yta = h.labb.children[h.labb.children.length - 1]; const reg = h.interaktor; ok.push(t + ':' + (h.valdTyp() === t)); reg.aktiveraObj ? reg.aktiveraObj(yta) : null; }
  return { byggt: S.labbByggt, synlig: h.labb.visible, ok }; });
ut.push([`labbet byggs av storebror och Ali (synligt: ${r.synlig})`, r.byggt && r.synlig]);
// lägg i rullarna via labbets egen aktivering
r = await p.evaluate(() => { const h = window.__printahem, S = h.S, yta = h.labb.children[h.labb.children.length - 1];
  const akt = (t) => { h.laggTill(t); const i = S.hotbar.findIndex((x) => x?.typ === t); if (i >= 0) h.byt(i); const reg = h.interaktor.registrerade?.get?.(yta) || yta.userData?.interaktion; (reg?.aktivera || (() => {}))(); };
  for (const t of ['rulle', 'rulle2', 'rulle3', 'rulle4']) akt(t); h.kollaLabb();
  const tip = h.antalInv('rulle5'); akt('rulle5'); return { tip, tippium: S.labb?.tippium || 0, skylt: !!S.verandaSkylt }; });
ut.push([`1 blå + 1 röd + 1 kolfiber + 1 guld → Tippium (${r.tippium} blandad, ${r.tip} i handen)`, r.tippium === 1 && r.tip >= 1]);
ut.push([`första Tippium-printen är skylten till Rolfs veranda (${r.skylt})`, r.skylt]);
await p.waitForTimeout(6000);
for (let i = 0; i < 25; i++) { await p.keyboard.press('Escape'); await p.waitForTimeout(400); await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { if (k.getBoundingClientRect().width && /^(Fortsätt|Stäng|OK|Läs)/.test(k.textContent.trim())) { k.click(); break; } } window.__printahem.kollaBagar(true); }); await p.waitForTimeout(600); }
r = await p.evaluate(() => { const h = window.__printahem, S = h.S; return { bage: Object.keys(S.bage), klar: Object.keys(S.bageKlar), aktiva: h.aktivaTradar().length, brott: h.textLogg().filter((x) => x.kalla === 'brott' && x.vem === 'FÖR MÅNGA TRÅDAR').length }; });
ut.push([`bågarna som startat: ${r.bage.join(', ')}; avslutade: ${r.klar.join(', ')}`, r.bage.includes('kajsa') && r.klar.includes('labb')]);
ut.push([`FÖR MÅNGA TRÅDAR: ${r.brott}`, r.brott === 0]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
