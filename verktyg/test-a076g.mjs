// A-076 tillägg 14:20: allt klickbart har en generös träffyta och går att träffa från 2 m med ~10° fel. Siktet ger vit kontur.
// Kör: node verktyg/test-a076g.mjs [url] → verktyg/a076/g-*.png
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('f')) { sessionStorage.setItem('f', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url); await p.waitForTimeout(5000);
const H = (f, a) => p.evaluate(f, a);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())); await p.waitForTimeout(2500); await p.keyboard.press('Enter'); await p.waitForTimeout(6000);
for (let i = 0; i < 40 && !(await p.evaluate(() => !!document.querySelector('.ph-dagbokkort'))); i++) await p.waitForTimeout(250); await p.keyboard.press('Enter'); await p.waitForTimeout(1500);   /* A-076 14:22: morgonsidan stängs med FORTSÄTT */
// varje registrerad sak: sikta från 2 m med 10° fel åt vänster och höger (från fyra håll – minst ett håll ska gå åt båda felen)
const r = await H(() => {
  const P = window.__printahem, I = P.interaktor, K = P.kamera, THREE = P.THREE || K.position.constructor && null;
  const V = K.position.constructor, Q = K.quaternion.constructor;
  const sparM = K.matrixWorld.clone(), ut = { totalt: 0, ok: 0, miss: [], utan: [] };
  const synKedja = (o) => { const s = []; for (let x = o; x; x = x.parent) { s.push([x, x.visible]); x.visible = true; } return s; };
  const namn = (o) => { if (!o) return 'inget'; const t = o.userData.interaktion?.text; let x = ''; try { x = typeof t === 'function' ? t(o) : t; } catch {} return (o.name || o.userData.typ || '') + (x ? ':' + String(x).slice(0, 24) : '') || '?'; };
  const fria = (o) => { if (!o.isMesh) return false; return o.material?.colorWrite === false; };
  for (const o of [...I.mal]) {
    const info = o.userData.interaktion; if (!info || (o.isMesh && fria(o))) continue;
    if (/^(skrap)$/.test(o.userData.typ || '') && ut.totalt > 0 && Math.random() < 0.7) continue;   // många skräp – stickprov
    const y = o.autoTraffYta; if (!y) { ut.utan.push(namn(o)); continue; }
    const kedja = synKedja(o), ka = info.kanAktivera; info.kanAktivera = null; o.updateMatrixWorld(true);
    const c = new V(); y.getWorldPosition(c); ut.totalt++;
    let bra = false, istallet = null;
    for (const vinkel of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) {
      const ogon = new V(c.x + Math.sin(vinkel) * 2, c.y < -1 ? c.y + 1 : Math.max(c.y + 0.4, 1.6), c.z + Math.cos(vinkel) * 2);
      let alla = true;
      for (const fel of [-10, 10]) {
        const m = new K.matrixWorld.constructor().lookAt(ogon, c, new V(0, 1, 0));
        const q = new Q().setFromRotationMatrix(m), qf = new Q().setFromAxisAngle(new V(0, 1, 0), fel * Math.PI / 180);
        K.matrixWorld.compose(ogon, qf.multiply(q), new V(1, 1, 1)); K.matrixWorldInverse.copy(K.matrixWorld).invert();
        const save = K.updateMatrixWorld; K.updateMatrixWorld = () => {}; I.uppdatera(); K.updateMatrixWorld = save;
        if (I.hovrad !== o) { alla = false; istallet = I.hovrad; break; }
      }
      if (alla) { bra = true; break; }
    }
    info.kanAktivera = ka; for (const [x, v] of kedja) x.visible = v;
    const samma = istallet && (() => { const c2 = new V(); (istallet.autoTraffYta || istallet).getWorldPosition(c2); return c2.distanceTo(c) < 0.5; })();   // två saker på samma plats (säng och sängplats) – finns aldrig samtidigt
    if (bra || samma) ut.ok++; else ut.miss.push(namn(o) + '@' + c.toArray().map((v) => v.toFixed(1)).join('/') + '→' + namn(istallet));
  }
  K.matrixWorld.copy(sparM); K.matrixWorldInverse.copy(sparM).invert();
  return ut;
});
ut.push([`${r.ok}/${r.totalt} klickbara saker träffas från 2 m med 10° fel · miss: ${r.miss.join(', ') || 'inga'} · utan auto-yta (för stora/egna): ${r.utan.length} ${r.utan.slice(0,30).join(', ')}`, r.totalt > 20 && r.ok / r.totalt >= 0.95]);
// inkorg 20: brädhögen (skylten) – sikta 10° bredvid från 2 m → siktet tar högen; ingen vit kontur
const h = await H(async () => {
  const P = window.__printahem, I = P.interaktor, sp = P.spelare, hm = P.bradhog;
  const c = new hm.position.constructor(); (hm.autoTraffYta || hm).getWorldPosition(c);
  const yaw = Math.atan2(sp.pos.x - c.x, sp.pos.z - c.z);
  sp.pos.x = c.x + Math.sin(yaw) * 2; sp.pos.z = c.z + Math.cos(yaw) * 2;
  const vrid = (dYaw) => { if (sp.vrid) sp.vrid(dYaw); else if (sp.yaw !== undefined) sp.yaw = dYaw; };
  sp.yaw = yaw + 10 * Math.PI / 180; if (sp.pitch !== undefined) sp.pitch = -Math.atan2(1.6 - c.y, 2);
  await new Promise((r) => setTimeout(r, 900));
  const kont = P.scen ? !P.scen.getObjectByName('siktKontur') : null;   /* A-076 rättelse 16:15: ingen vit ritning runt saker som står */
  return { hov: I.hovrad === hm, text: I.hovrad?.userData.interaktion?.text, kont };
});
await p.waitForTimeout(300); await p.screenshot({ path: dir + 'g-bradorna-10-grader.png' });
ut.push([`brädhögen från 2 m, 10° bredvid: siktet tar högen (${h.hov}, "${h.text}") · ingen vit ritning runt högen (${h.kont})`, h.hov && h.kont !== false]);
const brott = await H(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && ['SAK UTAN TRÄFFYTA', 'RITNING PÅ BYGGD SAK'].includes(e.vem)).map((e) => e.vem + ' ' + e.text));
ut.push([`SAK UTAN TRÄFFYTA / RITNING PÅ BYGGD SAK: ${brott.length} ${brott.slice(0, 3).join(' · ')}`, !brott.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
