// =============================================================
//  FAMILJENS SPEL – mobilspelhallen (app på telefonen)
//
//  Spelen kommer från ../spel-lista.js. Alla spel med status "klar"
//  syns här, utom de som har  mobil: false  (bara för dator).
//
//  Poäng: spelen sparar sitt rekord i localStorage som 'rekord:<mapp>'.
//  Appen kollar rekordet före och efter varje spelomgång. Blev det högre
//  får den som är inloggad poängen. Spelen behöver alltså inte ändras.
// =============================================================
import { molnPa, koa, skicka, hamta as hamtaMoln } from './moln.js';
import { FAMILJ } from '../delat/familj.js';

// ---------- Familjen (namn, färger, bilder) finns i ../delat/familj.js ----------
const STJARNOR_FOR_PLATS = [3, 2, 1];   // etta, tvåa, trea i ett spel
const CACHE_NAMN = 'familjens-spel-v1'; // samma namn som i ../sw.js

// ---------- Små hjälpare ----------
const $ = (id) => document.getElementById(id);
const las = (n, std) => { try { const v = localStorage.getItem(n); return v === null ? std : JSON.parse(v); } catch { return std; } };
const skriv = (n, v) => { try { localStorage.setItem(n, JSON.stringify(v)); } catch {} };
const rekordFor = (mapp) => { try { return Number(localStorage.getItem('rekord:' + mapp)) || 0; } catch { return 0; } };
// Spel som vet vem som spelar sparar också 'rekord:<mapp>:<id>' (se delat/familj.js)
const rekordPerson = (mapp, pid) => { try { return Number(localStorage.getItem(`rekord:${mapp}:${pid}`)) || 0; } catch { return 0; } };
const person = (id) => FAMILJ.find((p) => p.id === id);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Säger till spelhallen (../index.html) att skicka tillbaka hit efter ett spel
try { sessionStorage.setItem('familjens-spel', '1'); localStorage.setItem('familjens-spel:installerad', '1'); } catch {}

const SPEL = (window.SPEL || []).filter((s) => s.status === 'klar' && s.mobil !== false);

// Ett id per telefon, så att "antal spelade" kan räknas ihop från flera telefoner
let enhet = las('familj:enhet', null);
if (!enhet) { enhet = Math.random().toString(36).slice(2, 10); skriv('familj:enhet', enhet); }

// ---------- Data: lokalt + molnet ----------
// poang:  { <mapp>: { <personId>: { poang, tid } } }
// spelat: { <personId>: { <mapp>: { <enhet>: antal } } }
let data = { poang: las('familj:poang', {}), spelat: las('familj:spelat', {}) };

function slaIhop(moln) {
  if (!moln) return;
  for (const [mapp, folk] of Object.entries(moln.poang || {})) {
    data.poang[mapp] ||= {};
    for (const [pid, v] of Object.entries(folk || {})) {
      const lokal = data.poang[mapp][pid];
      if (!lokal || (v?.poang || 0) > lokal.poang) data.poang[mapp][pid] = v;
    }
  }
  for (const [pid, spel] of Object.entries(moln.spelat || {})) {
    data.spelat[pid] ||= {};
    for (const [mapp, enheter] of Object.entries(spel || {})) {
      data.spelat[pid][mapp] ||= {};
      for (const [e, n] of Object.entries(enheter || {})) {
        if (e !== enhet) data.spelat[pid][mapp][e] = n; // vår egen siffra är alltid färskast lokalt
      }
    }
  }
  sparaLokalt();
}
function sparaLokalt() { skriv('familj:poang', data.poang); skriv('familj:spelat', data.spelat); }

function antalSpelat(pid, mapp) {
  const e = data.spelat[pid]?.[mapp] || {};
  return Object.values(e).reduce((a, b) => a + b, 0);
}

async function synka() {
  await skicka();
  slaIhop(await hamtaMoln());
  ritaAllt();
}

// ---------- Ligan ----------
function ligan() {
  const stj = Object.fromEntries(FAMILJ.map((p) => [p.id, 0]));
  for (const s of SPEL) {
    const folk = Object.entries(data.poang[s.mapp] || {}).filter(([pid, v]) => person(pid) && v.poang > 0)
      .sort((a, b) => b[1].poang - a[1].poang);
    let plats = 0;
    folk.forEach(([pid, v], i) => {
      if (i > 0 && v.poang < folk[i - 1][1].poang) plats = i; // lika poäng = samma plats
      stj[pid] += STJARNOR_FOR_PLATS[plats] || 0;
    });
  }
  return FAMILJ.map((p) => ({ ...p, stjarnor: stj[p.id] })).sort((a, b) => b.stjarnor - a.stjarnor);
}
function ledareFor(mapp) {
  const folk = Object.entries(data.poang[mapp] || {}).filter(([pid, v]) => person(pid) && v.poang > 0)
    .sort((a, b) => b[1].poang - a[1].poang);
  return folk.length ? { ...person(folk[0][0]), poang: folk[0][1].poang } : null;
}

// ---------- Profilbild (bilder/<id>.jpg, annars emoji) ----------
function avatar(p, storlek = 48) {
  return `<span class="avatar" style="--f:${p.farg};width:${storlek}px;height:${storlek}px;font-size:${storlek * 0.55}px">
    <span>${p.emoji}</span>
    <img src="bilder/${p.id}.jpg" alt="" onerror="this.remove()">
  </span>`;
}

// ---------- Röst ----------
let rostPa = las('familj:rost', true);
function saga(text) {
  if (!rostPa || !('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'sv-SE';
    const sv = speechSynthesis.getVoices().find((v) => v.lang?.toLowerCase().startsWith('sv'));
    if (sv) u.voice = sv;
    u.rate = 1.05;
    speechSynthesis.speak(u);
  } catch {}
}

let ac;
function pling(hog = false) {
  try {
    ac ||= new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'square';
    o.frequency.setValueAtTime(hog ? 880 : 660, ac.currentTime);
    o.frequency.setValueAtTime(hog ? 1320 : 990, ac.currentTime + 0.07);
    g.gain.setValueAtTime(0.07, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.2);
    o.connect(g).connect(ac.destination);
    o.start(); o.stop(ac.currentTime + 0.2);
  } catch {}
}

// ---------- Vem är du? ----------
let jag = person(las('familj:jag', null));

function visaVem() {
  $('app').hidden = true;
  $('vem').hidden = false;
  const lag = ligan();
  const ettor = lag.filter((p) => p.stjarnor > 0 && p.stjarnor === lag[0].stjarnor).map((p) => p.id);
  $('familj').innerHTML = FAMILJ.map((p) => `
    <button class="medlem" data-id="${p.id}" style="--f:${p.farg}">
      ${ettor.includes(p.id) ? '<span class="krona">👑</span>' : ''}
      ${avatar(p, 112)}
      <b>${p.namn}</b>
    </button>`).join('');
  $('familj').querySelectorAll('.medlem').forEach((b) => b.onclick = () => {
    pling(true);
    jag = person(b.dataset.id);
    skriv('familj:jag', jag.id);
    filter = jag.filter ? 'mina' : 'alla';
    saga(`Hej ${jag.namn}! Vad vill du spela?`);
    visaApp();
  });
}

// ---------- Appen ----------
let filter = jag?.filter ? 'mina' : 'alla';
let flik = 'spel';

function visaApp() {
  $('vem').hidden = true;
  $('app').hidden = false;
  ritaAllt();
}

function ritaAllt() {
  if (!jag || $('app').hidden) return;
  $('jag').innerHTML = `${avatar(jag, 40)}<span>${esc(jag.namn)}</span>`;
  const lag = ligan();
  const ledande = lag.filter((p) => p.stjarnor > 0 && p.stjarnor === lag[0].stjarnor);
  $('ledare').innerHTML = !ledande.length ? 'Ingen leder än – spela!'
    : ledande.length === 1 ? `👑 ${avatar(ledande[0], 26)} <b>${esc(ledande[0].namn)}</b> leder`
    : `👑 ${ledande.map((p) => avatar(p, 24)).join('')} <b>Delad ledning!</b>`;
  ritaChips();
  ritaLista();
  ritaTopplista(lag);
}

function ritaChips() {
  const val = jag.filter
    ? [['mina', `${jag.emoji} Mina spel`], ['alla', '🎮 Alla spel']]
    : [['alla', '🎮 Alla spel'], ['Beppe', '🧙 Beppes'], ['Charlie', '🦄 Charlies']];
  if (!val.some(([k]) => k === filter)) filter = val[0][0];
  $('chips').innerHTML = val.map(([k, t]) => `<button data-k="${k}" class="${k === filter ? 'vald' : ''}">${t}</button>`).join('');
  $('chips').querySelectorAll('button').forEach((b) => b.onclick = () => { filter = b.dataset.k; pling(); ritaChips(); ritaLista(); });
}

function synligaSpel() {
  const vem = filter === 'mina' ? jag.filter : filter;
  return SPEL.filter((s) => vem === 'alla' || s.spelare.includes(vem) || s.spelare.includes('Alla'));
}

function ritaLista() {
  const lista = $('lista');
  const urval = synligaSpel();
  lista.innerHTML = urval.map((s, i) => {
    const led = ledareFor(s.mapp);
    const mitt = data.poang[s.mapp]?.[jag.id]?.poang;
    return `
    <a class="kort" href="../spel/${s.mapp}/index.html" data-mapp="${s.mapp}" style="--g1:${s.farg[0]};--g2:${s.farg[1]};animation-delay:${i * 40}ms">
      ${s.ny ? '<span class="ny">Ny!</span>' : ''}
      <div class="omslag"><span class="ikon">${s.ikon}</span></div>
      <div class="info">
        <h3>${esc(s.namn)}</h3>
        <div class="fot">
          ${led ? `<span class="led">👑 ${avatar(led, 22)} ${led.poang}</span>` : ''}
          ${mitt ? `<span class="mitt">Du: ${mitt}</span>` : ''}
        </div>
      </div>
    </a>`;
  }).join('') || '<p class="tom">Inga spel här än.</p>';
  lista.querySelectorAll('.kort').forEach((a) => a.onclick = (e) => {
    e.preventDefault();
    startaSpel(a.dataset.mapp, a.href);
  });
}

function startaSpel(mapp, href) {
  pling(true);
  // Kom ihåg rekordet före spelet, så vi ser om det blev nytt
  skriv('familj:pagaende', { mapp, pid: jag.id, fore: rekordFor(mapp), foreEgen: rekordPerson(mapp, jag.id), tid: Date.now() });
  // Räkna spelomgången
  data.spelat[jag.id] ||= {};
  data.spelat[jag.id][mapp] ||= {};
  const n = (data.spelat[jag.id][mapp][enhet] || 0) + 1;
  data.spelat[jag.id][mapp][enhet] = n;
  sparaLokalt();
  koa(`spelat/${jag.id}/${mapp}/${enhet}`, n);
  skicka();
  setTimeout(() => (location.href = href), 150);
}

// ---------- Tillbaka från ett spel: nytt rekord? ----------
function kollaPagaende() {
  const p = las('familj:pagaende', null);
  if (!p) return;
  localStorage.removeItem('familj:pagaende');
  const egenEfter = rekordPerson(p.mapp, p.pid);
  const efter = egenEfter > (p.foreEgen || 0) ? egenEfter : rekordFor(p.mapp);
  if (efter <= p.fore && egenEfter <= (p.foreEgen || 0)) return;
  const vem = person(p.pid);
  const forut = data.poang[p.mapp]?.[p.pid]?.poang || 0;
  if (!vem || efter <= forut) return;
  const ledareFore = ledareFor(p.mapp);
  data.poang[p.mapp] ||= {};
  data.poang[p.mapp][p.pid] = { poang: efter, tid: Date.now() };
  sparaLokalt();
  koa(`poang/${p.mapp}/${p.pid}`, data.poang[p.mapp][p.pid]);
  skicka();
  const spel = SPEL.find((s) => s.mapp === p.mapp);
  const ledare = ledareFor(p.mapp);
  const tarLedningen = ledare?.id === p.pid && ledareFore?.id !== p.pid;
  fira(vem, spel, efter, tarLedningen);
}

function fira(vem, spel, poang, tarLedningen) {
  const el = $('firande');
  el.innerHTML = `
    <div class="ruta" style="--f:${vem.farg}">
      ${avatar(vem, 120)}
      <h2>${tarLedningen ? '👑 Du leder!' : '🎉 Nytt rekord!'}</h2>
      <p>${esc(vem.namn)} fick <b>${poang}</b> i ${esc(spel?.namn || '')}</p>
      <button class="knapp">Yes! 🙌</button>
    </div>`;
  el.hidden = false;
  el.querySelector('button').onclick = () => { el.hidden = true; pling(); };
  konfetti();
  saga(tarLedningen
    ? `Grattis ${vem.namn}! Du leder nu i ${spel?.namn || 'spelet'}!`
    : `Nytt rekord, ${vem.namn}! ${poang} poäng!`);
}

// ---------- Topplista ----------
function ritaTopplista(lag) {
  // Pallen: 2:a – 1:a – 3:a, fyran under
  const ordning = [lag[1], lag[0], lag[2]];
  $('pall').innerHTML = ordning.map((p, i) => {
    const plats = [2, 1, 3][i];
    return `<div class="plats p${plats}" style="--f:${p.farg}">
      ${p.stjarnor > 0 && p.stjarnor === lag[0].stjarnor ? '<span class="krona">👑</span>' : ''}
      ${avatar(p, plats === 1 ? 84 : 64)}
      <b>${esc(p.namn)}</b>
      <span class="stj">⭐ ${p.stjarnor}</span>
      <div class="block">${plats}</div>
    </div>`;
  }).join('') + `<div class="fyra" style="--f:${lag[3].farg}">4. ${avatar(lag[3], 30)} <b>${esc(lag[3].namn)}</b> <span>⭐ ${lag[3].stjarnor}</span></div>`;

  // Per spel
  const medPoang = SPEL.filter((s) => Object.values(data.poang[s.mapp] || {}).some((v) => v.poang > 0));
  const utan = SPEL.filter((s) => !medPoang.includes(s));
  $('perSpel').innerHTML = medPoang.map((s) => {
    const folk = Object.entries(data.poang[s.mapp]).filter(([pid, v]) => person(pid) && v.poang > 0)
      .sort((a, b) => b[1].poang - a[1].poang);
    return `<div class="spelrad" style="--g1:${s.farg[0]};--g2:${s.farg[1]}">
      <div class="spelnamn"><span class="miniikon">${s.ikon}</span>${esc(s.namn)}</div>
      ${folk.map(([pid, v], i) => `<div class="placering">${['🥇', '🥈', '🥉', '4.'][i]} ${avatar(person(pid), 28)} <span>${esc(person(pid).namn)}</span><b>${v.poang}</b></div>`).join('')}
    </div>`;
  }).join('') || '<p class="tom">Inga rekord än. Spela ett spel med 🏆 så hamnar du här!</p>';

  // Mest spelat (alla spel räknas, även de utan poäng)
  const totalt = FAMILJ.map((p) => ({ p, n: SPEL.reduce((a, s) => a + antalSpelat(p.id, s.mapp), 0) }))
    .sort((a, b) => b.n - a.n);
  if (totalt[0].n > 0) {
    $('perSpel').innerHTML += `<div class="spelrad mest"><div class="spelnamn"><span class="miniikon">🎮</span>Flest spelomgångar</div>
      ${totalt.map(({ p, n }) => `<div class="placering">${avatar(p, 28)} <span>${esc(p.namn)}</span><b>${n}</b></div>`).join('')}</div>`;
  }
  if (utan.length) {
    $('perSpel').innerHTML += `<p class="forklaring">Ingen topplista än: ${utan.map((s) => s.ikon).join(' ')}</p>`;
  }

  $('molnstatus').textContent = molnPa()
    ? (navigator.onLine ? '☁️ Hela familjens poäng, alla telefoner' : '📴 Offline – skickas när internet finns')
    : '📱 Visar poäng från den här telefonen';
}

// ---------- Flikar ----------
document.querySelectorAll('.botten button').forEach((b) => b.onclick = () => {
  flik = b.dataset.flik;
  pling();
  document.querySelectorAll('.botten button').forEach((x) => x.classList.toggle('vald', x === b));
  $('flik-spel').hidden = flik !== 'spel';
  $('flik-topp').hidden = flik !== 'topp';
  if (flik === 'topp') synka();
});
$('jag').onclick = () => { pling(); visaVem(); };

// ---------- Inställningar: installera, offline, röst ----------
let installHandelse = null;
addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installHandelse = e; $('installRad').hidden = false; });
$('installera').onclick = async () => {
  if (!installHandelse) return;
  installHandelse.prompt();
  await installHandelse.userChoice;
  installHandelse = null;
  $('installRad').hidden = true;
};
$('installningar').onclick = () => { pling(); $('meny').showModal(); raknaOffline(); };
$('stangMeny').onclick = () => $('meny').close();
const ritaRost = () => ($('rostKnapp').textContent = rostPa ? '🔊 På' : '🔇 Av');
ritaRost();
$('rostKnapp').onclick = () => { rostPa = !rostPa; skriv('familj:rost', rostPa); ritaRost(); if (rostPa) saga('Rösten är på'); };

async function filLista() {
  try { return await (await fetch('filer.json', { cache: 'no-store' })).json(); } catch { return null; }
}
async function raknaOffline() {
  if (!('caches' in window)) { $('offlineText').textContent = 'Offline stöds inte i den här webbläsaren'; return; }
  const c = await caches.open(CACHE_NAMN);
  let sparade = 0;
  for (const s of SPEL) if (await c.match(new URL(`../spel/${s.mapp}/index.html`, location.href).href)) sparade++;
  $('offlineText').textContent = `Spel sparade för offline: ${sparade} av ${SPEL.length}`;
  $('offlineStapel').style.width = `${(sparade / Math.max(1, SPEL.length)) * 100}%`;
}
$('laddaNer').onclick = async () => {
  const knapp = $('laddaNer');
  const filer = await filLista();
  if (!filer) { knapp.textContent = '📴 Behöver internet'; return; }
  knapp.disabled = true;
  const c = await caches.open(CACHE_NAMN);
  let klara = 0, fel = 0;
  const ko = [...filer];
  const arbetare = Array.from({ length: 4 }, async () => {
    while (ko.length) {
      const f = ko.shift();
      const url = new URL(f, location.href).href;
      try {
        const r = await fetch(url, { cache: 'reload', mode: url.startsWith(location.origin) ? 'same-origin' : 'cors' });
        if (r.ok) await c.put(url, r); else fel++;
      } catch { fel++; }
      klara++;
      knapp.textContent = `⬇️ ${Math.round((klara / filer.length) * 100)} %`;
      $('offlineStapel').style.width = `${(klara / filer.length) * 100}%`;
    }
  });
  await Promise.all(arbetare);
  knapp.disabled = false;
  knapp.textContent = fel ? `⚠️ Klart, ${fel} filer saknas – försök igen` : '✅ Alla spel sparade!';
  raknaOffline();
};

// ---------- Konfetti ----------
function konfetti() {
  const cv = $('konfetti');
  const ctx = cv.getContext('2d');
  cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio;
  cv.style.display = 'block';
  const farger = ['#ffd43b', '#ff4fa3', '#3de3ff', '#9b5cff', '#5cff8d'];
  const bitar = Array.from({ length: 140 }, () => ({
    x: Math.random() * cv.width, y: -Math.random() * cv.height * 0.5,
    vx: (Math.random() - 0.5) * 4, vy: 3 + Math.random() * 5, r: Math.random() * 6,
    s: (6 + Math.random() * 8) * devicePixelRatio, f: farger[Math.floor(Math.random() * farger.length)],
  }));
  const start = performance.now();
  (function steg(t) {
    ctx.clearRect(0, 0, cv.width, cv.height);
    for (const b of bitar) {
      b.x += b.vx; b.y += b.vy * devicePixelRatio; b.r += 0.1;
      ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.r);
      ctx.fillStyle = b.f; ctx.fillRect(-b.s / 2, -b.s / 4, b.s, b.s / 2); ctx.restore();
    }
    if (t - start < 3500) requestAnimationFrame(steg); else cv.style.display = 'none';
  })(start);
}

// ---------- Offline-stöd (service worker ligger i spelhallens rot) ----------
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js', { scope: '../', updateViaCache: 'none' })
    .then((reg) => reg.update()).catch(() => {});
  // Ny version av appen installerad → ladda om en gång så att nya spel syns
  let laddarOm = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (laddarOm || !navigator.serviceWorker.controller) return;
    laddarOm = true; location.reload();
  });
}

// ---------- Start ----------
// Personliga rekord som sparats i spelen (även när spelet inte startades från appen)
function lasPersonligaRekord() {
  let andrat = false;
  for (const s of SPEL) for (const p of FAMILJ) {
    const v = rekordPerson(s.mapp, p.id);
    if (v > (data.poang[s.mapp]?.[p.id]?.poang || 0)) {
      data.poang[s.mapp] ||= {};
      data.poang[s.mapp][p.id] = { poang: v, tid: Date.now() };
      koa(`poang/${s.mapp}/${p.id}`, data.poang[s.mapp][p.id]);
      andrat = true;
    }
  }
  if (andrat) sparaLokalt();
}

function start() {
  kollaPagaende();
  lasPersonligaRekord();
  if (jag) visaApp(); else visaVem();
  synka();
}
start();
// Android "tillbaka"-knappen visar sidan från minnet – kolla poängen igen
addEventListener('pageshow', (e) => { if (e.persisted) { kollaPagaende(); lasPersonligaRekord(); ritaAllt(); synka(); } });
addEventListener('online', synka);

// Testkrok
window.__familjensSpel = { data, FAMILJ, SPEL, ligan, fira, kollaPagaende, get jag() { return jag; } };
