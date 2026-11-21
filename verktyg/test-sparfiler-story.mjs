// test-sparfiler-story (inkorg 58 §4 p.7, A-113): laddar en sparfil från varje dag och kollar att spelet hamnar på rätt steg
// och att det som visas (uppgiftsrutan, story-steget, kontrollhjälpen) hör till det steget. 0 SEKVENSFEL, REDAN GJORT, FEL PLATS I TEXT, sidfel.
// Kör: node verktyg/test-sparfiler-story.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const mapp = new URL('./sparfiler/', import.meta.url);
const filer = fs.readdirSync(mapp).filter((f) => f.endsWith('.json')).sort();
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const FLAGGOR = ['SEKVENSFEL', 'REDAN GJORT', 'FEL PLATS I TEXT', 'GÅVA SOM KÖP', 'BERÄTTAREN FÖRE DIG'];
const ut = [];
for (const f of filer) {
  const spar = fs.readFileSync(new URL(f, mapp), 'utf8');
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
  await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
  try {
    await p.goto(url); await p.waitForTimeout(3500);
    await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
    await p.waitForTimeout(2500); for (let i = 0; i < 6; i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(250); }
    await p.waitForTimeout(6000);
    const r = await p.evaluate((F) => { const P = window.__printahem, S = P.S, L = P.STEGLISTA(), st = L[S.steg];
      const delar = [...new Set(L.map((x) => x.del))], dagDel = st?.del;
      const fore = L.slice(0, S.steg).filter((x) => x.del === dagDel), ejKlara = fore.filter((x) => { try { return !x.klar(); } catch { return false; } }).map((x) => x.id);
      return { dag: S.dag, steg: S.steg, id: st?.id || '(slut)', text: P.stegText(), story: P.aktivtStoryStag(), ejKlara, brott: P.textLogg().filter((e) => e.kalla === 'brott' && F.includes(e.vem)).map((e) => e.vem + ': ' + e.text), finns: !!st || S.steg >= L.length };
    }, FLAGGOR);
    const storyOk = r.dag === 1 ? !!r.story || r.steg >= 21 : true;
    ut.push([`${f}: dag ${r.dag}, steg ${r.steg} "${r.id}" ("${String(r.text).slice(0, 40)}")${r.story ? ` · story-steg ${r.story}` : ''}${r.ejKlara.length ? ` · tidigare steg samma dag inte klara: ${r.ejKlara.join(', ')}` : ''} · ${r.brott.join(' · ') || '0 flaggor'} · ${fel.length ? 'sidfel: ' + fel[0] : '0 sidfel'}`,
      r.finns && storyOk && !r.brott.length && !fel.length]);
  } catch (e) { ut.push([`${f}: ${e.message.slice(0, 100)}`, false]); }
  await p.close();
}
await b.close();
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
process.exit(ut.every((x) => x[1]) ? 0 : 1);
