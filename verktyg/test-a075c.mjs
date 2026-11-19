// A-075 tillägg 14:25: skyltar som syns. Arga skyltar bara på östra staketet, inga mot svackan, gruvskylten framför grinden,
// Alis skylt ovanför Ali, all text läsbar där man står (DOLD SKYLT). Kör: node verktyg/test-a075c.mjs [url] → verktyg/a075/skylt-*.png
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a075/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('f')) { sessionStorage.setItem('f', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test', introSett: true })); localStorage.setItem('printa-hem:vridKamera', 'av'); } });   // kameran nickar inte mot pilen under bilderna
await p.goto(url); await p.waitForTimeout(5000); await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())); await p.waitForTimeout(3000); await p.keyboard.press('Enter'); await p.waitForTimeout(1500);
const H = (f, a) => p.evaluate(f, a);
const vy = async (namn, x, z, yaw, pitch = 0) => { await H(([x, z, yaw, pitch]) => { const sp = window.__printahem.spelare; sp.pos.x = x; sp.pos.z = z; sp.yaw = yaw; sp.pitch = pitch; }, [x, z, yaw, pitch]); await p.waitForTimeout(900); await p.screenshot({ path: dir + 'skylt-' + namn + '.png' }); };
const start = await H(() => { const sp = window.__printahem.spelare; return [sp.pos.x, sp.pos.z, sp.yaw]; });
await vy('fran-start', ...start);
await vy('ostra-staketet', 14, 3, -Math.PI / 2);
await vy('norra-sidan', 5, -15, 0);
await vy('gruvskylten-vid-grinden', -12.6, -15.5, 0.25);
await vy('ali-fran-vagen', 9, 21.5, Math.PI, 0.05);
const k = await H(() => window.__printahem.skyltKoll());
ut.push([`skyltarna läsbara där man står: ${k.map((x) => `${x.namn} ${x.ok ? '✓' : '✗ ' + x.fel} (${x.px} px)`).join(' · ')}`, k.length >= 6 && k.every((x) => x.ok)]);
const arga = await H(() => { const ut = []; window.__printahem.scen.traverse((o) => { const ls = o.userData?.lasSkylt; if (ls && /PRIVAT|HMPF/.test(ls.namn)) ut.push(o.getWorldPosition(o.position.clone()).toArray().map((v) => +v.toFixed(1))); }); return ut; });
ut.push([`arga skyltar bara på östra staketet: ${arga.map((a) => `(${a[0]}, ${a[2]})`).join(' ')}`, arga.length >= 3 && arga.every((a) => a[0] > 20)]);
const g = await H(() => { const s = window.__printahem.gruvSkylt(); return s ? s.getWorldPosition(s.position.clone()).toArray() : null; });
ut.push([`gruvskylten framför grinden, på tomtens sida (z ${g && g[2].toFixed(1)} > -21)`, !!g && g[2] > -21]);
const ali = await H(() => { const a = window.__printahem.aliSkylt.getWorldPosition(window.__printahem.aliSkylt.position.clone()); return +a.y.toFixed(2); });
ut.push([`Alis skylt ovanför Ali (y ${ali} m > 2,3)`, ali > 2.3]);
const brott = await H(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'DOLD SKYLT').map((e) => e.text));
ut.push([`DOLD SKYLT: ${brott.length} ${brott.slice(0, 2).join(' · ')}`, !brott.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
