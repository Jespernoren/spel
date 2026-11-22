// Inkorg 64 (A-119): varje MONTERA-mål med riktig mus. Saken i handen, siktet på målet (spelets egen stråle),
// ett klick – saken monteras, eller spelet säger varför inte. KLICK UTAN SVAR får inte komma.
// Kör: node verktyg/test-a119-montera.mjs [url] [sparfil]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const sparfil = process.argv[3] || new URL('./sparfiler/start-dag3.json', import.meta.url);
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
const spar = fs.readFileSync(sparfil, 'utf8');
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(5000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]), .ph-kapkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
await p.waitForTimeout(1500);
const nycklar = (await p.evaluate(() => Object.keys(window.__printahem.MONTERA))).filter((t) => !process.env.TYP || new RegExp(process.env.TYP).test(t));
const tabell = [];
for (const typ of nycklar) {
  const r = await p.evaluate((typ) => {
    const P = window.__printahem, S = P.S, M = P.MONTERA[typ], T = P.THREE;
    let mal = []; try { mal = (M.mal?.() || []).filter((o) => o && o.visible !== false); } catch {}
    if (!mal.length) return { typ, lage: 'inget mål i världen än' };
    for (const a of [S.hotbar, S.ryggsack, S.kistan]) a?.forEach((x, i) => { if (x?.typ === typ) a[i] = null; });
    S.hotbar.forEach((x, i) => { if (i > 1 && x && !/hammare|generator/.test(x.typ)) S.hotbar[i] = null; });   // plats i raden
    P.laggTillInv(typ); if (P.valdTypNu() !== typ) return { typ, lage: 'kom inte i handen' };
    const sp = P.spelare, I = P.interaktorObj(), k = P.kameraObj();
    const inne = (h, o) => { for (let x = h; x; x = x.parent) if (x === o) return true; return false; };
    for (const o of mal) { o.updateMatrixWorld(true); const c = new T.Box3().setFromObject(o).getCenter(new T.Vector3());
      for (const d of [1.6, 2.4, 3.2, 1.1]) for (const hy of [0, 0.3, -0.3, 0.8]) for (let i = 0; i < 24; i++) { const v = i * Math.PI / 12, x = c.x + Math.sin(v) * d, z = c.z + Math.cos(v) * d;
        const my = (() => { try { return Math.max(P.markY(x, z) || 0, P.tippHojd?.(x, z) || 0); } catch { return 0; } })(); sp.pos.set(x, my, z); sp.vy = 0; sp.yaw = Math.atan2(-(c.x - x), -(c.z - z)); sp.pitch = Math.atan2(c.y + hy - (my + 1.6), d);   // stå på marken där du står (tippen är en kulle)
        k.position.set(x, my + 1.6, z); k.rotation.set(sp.pitch, sp.yaw, 0, 'YXZ'); k.updateMatrixWorld(true); P.uppdateraSikte?.();
        const txt = (() => { try { const t = I.hovrad?.userData?.interaktion?.text; return String(typeof t === 'function' ? t() : t || ''); } catch { return ''; } })();
        const h = (() => { try { return M.hinder?.() || ''; } catch { return ''; } })();
        if (I.hovrad && inne(I.hovrad, o) && (txt.includes(M.namn) || (h && txt.includes(h)) || /monter|sätt|koppla|lägg|isolera|bygg|ställ in/i.test(txt))) return { typ, lage: 'siktat', hinder: h, fore: P.antalInvNu(typ), n0: P.textLogg().length }; } }
    return { typ, lage: 'siktet når inte målet' };
  }, typ);
  if (r.lage !== 'siktat') { tabell.push([typ, r.lage, r.lage === 'inget mål i världen än' ? null : false]); continue; }
  if (process.env.TYP) console.log('före klick', JSON.stringify(await p.evaluate(() => ({ lock: !!document.pointerLockElement, lasFel: window.__printahem.spelare.lasFel, aktiv: window.__printahem.spelare.aktiv, el: document.elementFromPoint(640, 360)?.className?.toString?.().slice(0, 40), hov: window.__printahem.interaktorObj().hovrad?.userData?.typ || !!window.__printahem.interaktorObj().hovrad, L: window.__printahem.kanalLage() }))));
  if (!await p.evaluate(() => !!document.pointerLockElement)) { await p.mouse.click(640, 360); await p.waitForTimeout(400); }   // efter en scen tar webbläsaren tillbaka musen med första klicket (kräver en användargest) – det klicket är inte monteringen
  await p.mouse.move(640, 360); await p.mouse.down(); await p.waitForTimeout(120); await p.mouse.up(); await p.waitForTimeout(2500);
  const efter = await p.evaluate(({ typ, n0, dbg }) => { const P = window.__printahem, L = P.textLogg().slice(n0); return { monterat: L.some((e) => e.kalla === 'monterat' && e.text === typ), kvar: P.antalInvNu(typ), alla: dbg ? L.map((e) => e.kalla + ':' + e.text).slice(0, 15) : null, svar: L.filter((e) => ['monterat', 'toast', 'tanke', 'nej', 'info'].includes(e.kalla) || /nej/.test(e.kalla)).map((e) => `${e.kalla}:${e.text}`).slice(0, 3), utan: L.some((e) => e.kalla === 'brott' && e.vem === 'KLICK UTAN SVAR') }; }, { ...r, dbg: !!process.env.TYP });
  if (process.env.TYP) console.log(JSON.stringify(efter.alla));
  const ok = efter.kvar < r.fore || efter.monterat ? 'monterad' : efter.svar.length && !efter.utan ? 'svar: ' + efter.svar[0] : 'INGET HÄNDE';
  tabell.push([typ, ok, ok !== 'INGET HÄNDE']);
  for (let i = 0; i < 40 && await p.evaluate(() => { const L = window.__printahem.kanalLage(); return L.scen || L.anim || L.butik || L.med || !!window.__printahem.kameraAk(); }); i++) { await p.evaluate(() => { const o = document.querySelector('.ph-med:not([hidden]) button, .ph-kapkort button'); o?.click(); }); await p.waitForTimeout(500); }   // scenen (kameran över tippen) får ta slut
  if (await p.evaluate(() => window.__printahem.kanalLage().butik)) await p.keyboard.press('Escape').catch(() => {});   // bara butiken stängs – Esc annars öppnar menyn await p.waitForTimeout(200); await p.evaluate(() => { const o = document.querySelector('.ph-med:not([hidden])'); if (o) o.querySelector('button')?.click(); });
}
for (const [t, l, ok] of tabell) ut.push([`${t}: ${l}`, ok !== false]);
ut.push([`minst 5 mål monterade med riktig mus (${tabell.filter((x) => x[1] === 'monterad').length})`, tabell.filter((x) => x[1] === 'monterad').length >= 5]);
const utan = await p.evaluate(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'KLICK UTAN SVAR').map((e) => e.text));
ut.push([`0 KLICK UTAN SVAR (${utan.join(' · ') || 'inga'})`, !utan.length]);
ut.push([`0 sidfel (${fel.join(' | ') || 'inga'})`, !fel.length]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
await b.close(); process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
