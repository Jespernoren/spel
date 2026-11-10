// =============================================================
//  Charlies Poolparty 2
//  Plattformsspel i 3D (Three.js, se grafik.js). Originalet ligger kvar i spel/charlies-poolparty/.
//  Här finns all spellogik: banor, fysik, frågor, ljud och sparning.
// =============================================================
import { skapaGrafik } from './grafik.js';

// ---------- JUSTERBARA VÄRDEN (lek gärna med dessa!) ----------
const GRAVITATION = 0.55;   // hur snabbt Charlie faller
const FART = 3.8;           // gånghastighet
const ACC_MARK = 0.7;       // hur snabbt hon kommer upp i fart på marken
const ACC_LUFT = 0.6;       // ... och i luften
const HOPP = 11.8;          // hoppkraft (håll inne hopp = högre hopp)
const RING_STUDS = 19;      // hur högt badringarna studsar
const KRABB_STUDS = 10;     // studs när man hoppar på en krabba
const KNUFF = 6;            // hur hårt krabbor knuffar (ingen skada, bara knuff)
const KOYOTE = 8;           // bildrutor man får hoppa efter att ha gått över en kant
const HOPP_BUFFERT = 9;     // bildrutor ett för tidigt hopp-tryck "kommer ihåg"
const SPELID = 'charlies-poolparty-2';

// ---------- Grund ----------
const W = 960, H = 540, MARK_Y = 490;
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const $ = (id) => document.getElementById(id);
const slump = (a, b) => a + Math.random() * (b - a);
const slumpHel = (a, b) => Math.floor(slump(a, b + 1));
const blanda = (lista) => lista.map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(v => v[1]);
const begransa = (v, a, b) => Math.max(a, Math.min(b, v));
const overlapp = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

let grafik = null;
try { grafik = skapaGrafik(document.getElementById('c3d')); }
catch (e) { console.error(e); document.getElementById('c3d').insertAdjacentHTML('afterend', '<div class="overlay">Din webbläsare kan inte visa 3D-grafik 😢</div>'); }
function anpassaStorlek() {
  if (grafik) grafik.storlek();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const r = canvas.getBoundingClientRect();
  canvas.width = Math.round(r.width * dpr);
  canvas.height = Math.round(r.height * dpr);
  ctx.setTransform(canvas.width / W, 0, 0, canvas.height / H, 0, 0);
}
addEventListener('resize', anpassaStorlek);

// =============================================================
//  BANOR
//  mark: markbitar (mellanrum = vatten/plask), plattformar: man kan hoppa upp underifrån,
//  flottar: rör sig (dx/dy = hur långt, fart), ringar: badringar som studsar,
//  fiender: krabbor/bollar som knuffar, dorrar: kluriga grindar med fråga
// =============================================================
const G = MARK_Y - 44; // y för ankor som står på marken
const BANOR = [
  {
    namn: 'Charlies hus', ikon: '🏠', tema: 'stad', bredd: 2300, niva: 1,
    mark: [{ x: 0, w: 2300 }],
    plattformar: [{ x: 380, y: 400, w: 130 }, { x: 555, y: 330, w: 130 }, { x: 730, y: 400, w: 140 }, { x: 1110, y: 250, w: 110 }],
    flottar: [], ringar: [{ x: 1030 }],
    fiender: [{ typ: 'boll', x: 1400, min: 1300, max: 1650 }],
    ankor: [{ x: 420, y: 360 }, { x: 600, y: 290 }, { x: 785, y: 360 }, { x: 1250, y: G }, { x: 1720, y: G }],
    guld: { x: 1150, y: 200 },
    dorrar: [{ x: 1880, typ: 'matte' }],
    mal: { x: 2120, typ: 'buss' },
    badklader: { x: 300, y: G + 10 },
    intro: 'Charlie har glömt sina badkläder! Hämta dem vid huset och spring till bussen.',
  },
  {
    namn: 'Palmparken', ikon: '🌴', tema: 'park', bredd: 2450, niva: 1, vatten: true,
    mark: [{ x: 0, w: 700 }, { x: 830, w: 590 }, { x: 1540, w: 910 }],
    plattformar: [{ x: 420, y: 400, w: 110 }, { x: 880, y: 380, w: 120 }, { x: 1050, y: 300, w: 120 }, { x: 1230, y: 370, w: 110 }, { x: 1700, y: 400, w: 120 }, { x: 1990, y: 215, w: 110 }],
    flottar: [], ringar: [{ x: 1900 }],
    fiender: [{ typ: 'krabba', x: 1000, min: 860, max: 1280 }],
    ankor: [{ x: 450, y: 360 }, { x: 920, y: 340 }, { x: 1090, y: 260 }, { x: 1270, y: 330 }, { x: 1740, y: 360 }, { x: 2180, y: G }],
    guld: { x: 2030, y: 168 },
    dorrar: [{ x: 2230, typ: 'engelska' }],
    mal: { x: 2340, typ: 'buss' },
    intro: 'Palmparken! Hoppa över dammen och se upp för krabban. Hoppa på den så blir den yr!',
  },
  {
    namn: 'Glasskiosken', ikon: '🍦', tema: 'glass', bredd: 2650, niva: 2,
    mark: [{ x: 0, w: 2650 }],
    plattformar: [{ x: 400, y: 400, w: 110 }, { x: 540, y: 330, w: 110 }, { x: 680, y: 260, w: 110 }, { x: 820, y: 330, w: 110 }, { x: 960, y: 400, w: 110 }, { x: 1400, y: 190, w: 100 }],
    flottar: [{ x: 1650, y: 330, w: 110, dx: 0, dy: 70, fart: 1.4 }],
    ringar: [{ x: 1300 }, { x: 1480 }],
    fiender: [{ typ: 'boll', x: 1900, min: 1800, max: 2150 }, { typ: 'boll', x: 600, min: 300, max: 1100, fart: 1.2 }],
    ankor: [{ x: 440, y: 360 }, { x: 580, y: 290 }, { x: 720, y: 220 }, { x: 860, y: 290 }, { x: 1000, y: 360 }, { x: 1690, y: 250 }, { x: 2000, y: G }],
    guld: { x: 1435, y: 145 },
    dorrar: [{ x: 2290, typ: 'rakna' }],
    mal: { x: 2480, typ: 'buss' },
    intro: 'Glasskiosken! Studsa på badringarna för att nå högt upp.',
  },
  {
    namn: 'Bryggan', ikon: '⛵', tema: 'brygga', bredd: 2850, niva: 2, vatten: true,
    mark: [{ x: 0, w: 520 }, { x: 900, w: 300 }, { x: 1600, w: 260 }, { x: 2250, w: 600 }],
    plattformar: [{ x: 1270, y: 440, w: 70 }, { x: 1440, y: 410, w: 70 }, { x: 1080, y: 245, w: 90 }],
    flottar: [{ x: 650, y: 470, w: 110, dx: 110, dy: 0, fart: 1.0 }, { x: 2000, y: 455, w: 110, dx: 120, dy: 0, fart: 1.0 }],
    ringar: [{ x: 960 }],
    fiender: [{ typ: 'krabba', x: 2350, min: 2270, max: 2560 }, { typ: 'krabba', x: 1650, min: 1610, max: 1800 }],
    ankor: [{ x: 300, y: G }, { x: 690, y: 400 }, { x: 1150, y: G }, { x: 1290, y: 395 }, { x: 1460, y: 365 }, { x: 1720, y: G }, { x: 2050, y: 395 }, { x: 2420, y: G }],
    guld: { x: 1112, y: 198 },
    dorrar: [{ x: 2620, typ: 'engelska' }],
    mal: { x: 2730, typ: 'buss' },
    intro: 'Bryggan! Hoppa på flottarna när de kommer nära. Ramlar du i blir det bara plask!',
  },
  {
    namn: 'Vattenparken', ikon: '🛝', tema: 'vattenpark', bredd: 2850, niva: 3, vatten: true,
    mark: [{ x: 0, w: 600 }, { x: 800, w: 400 }, { x: 1400, w: 300 }, { x: 1900, w: 950 }],
    plattformar: [{ x: 380, y: 270, w: 120 }, { x: 600, y: 175, w: 90 }, { x: 960, y: 240, w: 120 }, { x: 2040, y: 400, w: 110 }, { x: 2170, y: 330, w: 110 }],
    flottar: [{ x: 1245, y: 440, w: 110, dx: 0, dy: 40, fart: 1.3 }],
    ringar: [{ x: 300 }, { x: 520 }, { x: 900 }, { x: 1620 }],
    fiender: [{ typ: 'krabba', x: 1050, min: 820, max: 1180 }, { typ: 'boll', x: 2400, min: 2300, max: 2560 }],
    ankor: [{ x: 120, y: G }, { x: 420, y: 230 }, { x: 700, y: 300 }, { x: 1000, y: 200 }, { x: 1290, y: 380 }, { x: 1450, y: G }, { x: 1800, y: 300 }, { x: 2070, y: 360 }, { x: 2200, y: 290 }],
    guld: { x: 625, y: 128 },
    dorrar: [{ x: 2620, typ: 'matte' }],
    mal: { x: 2740, typ: 'buss' },
    intro: 'Vattenparken! Använd badringarna för att flyga över vattnet.',
  },
  {
    namn: 'Stranden', ikon: '🏖️', tema: 'strand', bredd: 3050, niva: 3, vatten: true, final: true,
    mark: [{ x: 0, w: 700 }, { x: 840, w: 500 }, { x: 1490, w: 410 }, { x: 2050, w: 1000 }],
    plattformar: [{ x: 400, y: 400, w: 110 }, { x: 545, y: 330, w: 110 }, { x: 990, y: 390, w: 120 }, { x: 1130, y: 310, w: 110 }, { x: 1660, y: 200, w: 90 }],
    flottar: [{ x: 1375, y: 450, w: 80, dx: 0, dy: 30, fart: 1.5 }, { x: 1930, y: 460, w: 90, dx: 40, dy: 0, fart: 1.3 }],
    ringar: [{ x: 1600 }],
    fiender: [{ typ: 'krabba', x: 300, min: 160, max: 650 }, { typ: 'krabba', x: 1100, min: 880, max: 1300 }, { typ: 'krabba', x: 2300, min: 2100, max: 2500, fart: 1.3 }],
    ankor: [{ x: 430, y: 360 }, { x: 585, y: 290 }, { x: 1030, y: 350 }, { x: 1170, y: 270 }, { x: 1400, y: 395 }, { x: 1550, y: G }, { x: 2200, y: G }, { x: 2470, y: G }, { x: 2700, y: G }],
    guld: { x: 1690, y: 152 },
    dorrar: [{ x: 1820, typ: 'engelska' }, { x: 2620, typ: 'matte' }],
    mal: { x: 2800, typ: 'pool' },
    intro: 'Sista banan! Poolpartyt väntar vid solnedgången. Två kluriga grindar kvar!',
  },
];

// ---------- Frågor ----------
const ORD = [
  { sv: 'hund', en: 'dog' }, { sv: 'katt', en: 'cat' }, { sv: 'sol', en: 'sun' }, { sv: 'blå', en: 'blue' },
  { sv: 'röd', en: 'red' }, { sv: 'fisk', en: 'fish' }, { sv: 'anka', en: 'duck' }, { sv: 'hus', en: 'house' },
  { sv: 'vatten', en: 'water' }, { sv: 'tre', en: 'three' }, { sv: 'båt', en: 'boat' }, { sv: 'krabba', en: 'crab' },
  { sv: 'boll', en: 'ball' }, { sv: 'glass', en: 'ice cream' }, { sv: 'hav', en: 'sea' }, { sv: 'gul', en: 'yellow' },
  { sv: 'simma', en: 'swim' }, { sv: 'träd', en: 'tree' }, { sv: 'fem', en: 'five' }, { sv: 'grön', en: 'green' },
  { sv: 'fågel', en: 'bird' }, { sv: 'stjärna', en: 'star' }, { sv: 'sand', en: 'sand' }, { sv: 'glad', en: 'happy' },
];
const RAKNA_SAKER = ['🍦', '🐚', '🦀', '🌺', '🍉', '⭐', '🦆', '🏐'];

function skapaFraga(typ, niva) {
  if (typ === 'matte') {
    const max = niva === 1 ? 10 : niva === 2 ? 15 : 20;
    let a, b, q, ans;
    if (Math.random() < 0.55) { a = slumpHel(1, max - 1); b = slumpHel(1, max - a); q = `${a} + ${b} = ?`; ans = a + b; }
    else { a = slumpHel(3, max); b = slumpHel(1, a - 1); q = `${a} − ${b} = ?`; ans = a - b; }
    const alt = new Set([ans]);
    while (alt.size < 3) { const o = ans + slumpHel(-3, 3); if (o >= 0) alt.add(o); }
    return { titel: '🔢 Matte-grind!', text: q, las: q.replace('−', 'minus').replace('+', 'plus').replace('= ?', 'är lika med?'), ratt: String(ans), alt: blanda([...alt].map(String)) };
  }
  if (typ === 'rakna') {
    const sak = RAKNA_SAKER[slumpHel(0, RAKNA_SAKER.length - 1)];
    const n = slumpHel(3, 5 + niva * 2);
    const alt = new Set([n]);
    while (alt.size < 3) { const o = n + slumpHel(-2, 2); if (o >= 1) alt.add(o); }
    return { titel: '🍦 Räkne-grind!', html: `<div class="emojirad">${sak.repeat(n).match(/./gu).map(e => `<span>${e}</span>`).join('')}</div>`, text: `Hur många?`, las: 'Hur många är det? Räkna!', ratt: String(n), alt: blanda([...alt].map(String)) };
  }
  const ord = ORD[slumpHel(0, ORD.length - 1)];
  const andra = blanda(ORD.filter(o => o.en !== ord.en)).slice(0, 2).map(o => o.en);
  return { titel: '🇬🇧 Engelska-grind!', text: `Vad heter "${ord.sv}" på engelska?`, las: `Vad heter ${ord.sv} på engelska?`, ratt: ord.en, alt: blanda([ord.en, ...andra]), engelska: true };
}

// =============================================================
//  LJUD (syntetiskt, inga filer behövs)
// =============================================================
let ac = null, ljudPa = true, musikTimer = null, musikSteg = 0, musikNasta = 0, musikLat = null, musikGain = null;
function initLjud() {
  if (!ac) {
    try { ac = new (window.AudioContext || window.webkitAudioContext)(); musikGain = ac.createGain(); musikGain.gain.value = 0.5; musikGain.connect(ac.destination); } catch (e) { ac = null; }
  }
  if (ac && ac.state === 'suspended') ac.resume();
}
const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);
function ton(frekv, langd, typ = 'square', vol = 0.06, till = null, start = 0, mal = null) {
  if (!ac || !ljudPa) return;
  const t = ac.currentTime + start;
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = typ; o.frequency.setValueAtTime(frekv, t);
  if (till) o.frequency.exponentialRampToValueAtTime(till, t + langd);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + langd);
  o.connect(g); g.connect(mal || ac.destination);
  o.start(t); o.stop(t + langd + 0.02);
}
function brus(langd, vol = 0.08, start = 0) {
  if (!ac || !ljudPa) return;
  const t = ac.currentTime + start, n = Math.floor(ac.sampleRate * langd);
  const buf = ac.createBuffer(1, n, ac.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
  const s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
  f.type = 'lowpass'; f.frequency.value = 1400; g.gain.value = vol;
  s.buffer = buf; s.connect(f); f.connect(g); g.connect(ac.destination); s.start(t);
}
function ljud(typ) {
  switch (typ) {
    case 'hopp': ton(520, 0.14, 'square', 0.05, 900); break;
    case 'anka': ton(988, 0.08, 'square', 0.05); ton(1319, 0.12, 'square', 0.05, null, 0.07); break;
    case 'guld': [1047, 1319, 1568, 2093].forEach((f, i) => ton(f, 0.16, 'triangle', 0.08, null, i * 0.07)); break;
    case 'studs': ton(220, 0.25, 'sine', 0.12, 660); break;
    case 'boing': ton(330, 0.2, 'triangle', 0.1, 140); break;
    case 'aj': ton(400, 0.12, 'sawtooth', 0.04, 200); break;
    case 'ratt': [784, 1047, 1319].forEach((f, i) => ton(f, 0.18, 'triangle', 0.08, null, i * 0.1)); break;
    case 'fel': ton(220, 0.25, 'sawtooth', 0.04, 160); break;
    case 'plask': brus(0.5, 0.15); ton(600, 0.3, 'sine', 0.05, 120); break;
    case 'klader': [659, 784, 988, 1319].forEach((f, i) => ton(f, 0.14, 'square', 0.05, null, i * 0.08)); break;
    case 'land': ton(150, 0.06, 'triangle', 0.06); break;
    case 'grind': ton(200, 0.6, 'sawtooth', 0.03, 90); brus(0.6, 0.05); break;
    case 'klar': [523, 659, 784, 1047, 784, 1047].forEach((f, i) => ton(f, 0.2, 'square', 0.05, null, i * 0.11)); break;
    case 'smack': brus(0.08, 0.12); break;
  }
}

// Melodier: 16 steg per varv. 0 = paus.
const LATAR = [
  { tempo: 0.15, mel: [72, 76, 79, 76, 72, 74, 76, 0, 77, 79, 81, 79, 77, 76, 74, 0], bas: [48, 0, 55, 0, 48, 0, 55, 0, 53, 0, 57, 0, 55, 0, 59, 0] },
  { tempo: 0.16, mel: [76, 0, 79, 81, 79, 76, 74, 0, 72, 0, 74, 76, 79, 76, 74, 72], bas: [48, 0, 52, 0, 53, 0, 55, 0, 48, 0, 52, 0, 55, 0, 55, 0] },
  { tempo: 0.14, mel: [79, 81, 79, 76, 72, 76, 79, 0, 81, 84, 81, 77, 74, 77, 81, 0], bas: [48, 0, 48, 55, 53, 0, 53, 57, 50, 0, 50, 57, 55, 0, 55, 59] },
  { tempo: 0.15, mel: [69, 72, 76, 72, 74, 77, 81, 77, 76, 79, 83, 79, 81, 79, 76, 74], bas: [45, 0, 52, 0, 50, 0, 57, 0, 52, 0, 59, 0, 57, 0, 52, 0] },
  { tempo: 0.13, mel: [72, 0, 72, 74, 76, 0, 79, 0, 77, 76, 74, 72, 74, 0, 67, 0], bas: [48, 48, 0, 48, 53, 53, 0, 53, 55, 55, 0, 55, 48, 0, 55, 0] },
  { tempo: 0.15, mel: [76, 79, 84, 79, 76, 72, 74, 76, 77, 81, 84, 81, 79, 77, 76, 74], bas: [48, 0, 55, 0, 45, 0, 52, 0, 53, 0, 57, 0, 55, 0, 59, 0] },
];
const FEST_LAT = { tempo: 0.12, mel: [72, 76, 79, 84, 79, 76, 72, 76, 74, 77, 81, 86, 81, 77, 74, 79], bas: [48, 48, 55, 55, 50, 50, 57, 57, 53, 53, 60, 60, 55, 55, 59, 59] };

function startaMusik(lat) {
  stoppaMusik();
  if (!ljudPa) return;
  initLjud(); if (!ac) return;
  musikLat = lat; musikSteg = 0; musikNasta = ac.currentTime + 0.05;
  musikTimer = setInterval(() => {
    while (musikNasta < ac.currentTime + 0.12) {
      const i = musikSteg % 16, d = musikNasta - ac.currentTime;
      const m = musikLat.mel[i], b = musikLat.bas[i];
      if (m) ton(midi(m), musikLat.tempo * 0.9, 'square', 0.035, null, d, musikGain);
      if (b) ton(midi(b), musikLat.tempo * 1.6, 'triangle', 0.07, null, d, musikGain);
      if (i % 4 === 2) ton(1800, 0.03, 'square', 0.008, null, d, musikGain);
      musikSteg++; musikNasta += musikLat.tempo;
    }
  }, 30);
}
function stoppaMusik() { if (musikTimer) { clearInterval(musikTimer); musikTimer = null; } }

// Uppläsning
function sag(text, sprak = 'sv-SE') {
  if (!ljudPa || !('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = sprak; u.rate = sprak.startsWith('en') ? 0.9 : 1.0; u.pitch = 1.12;
    const r = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith(sprak.slice(0, 2).toLowerCase()));
    if (r) u.voice = r;
    speechSynthesis.speak(u);
  } catch (e) { /* ingen röst, inget problem */ }
}

// =============================================================
//  SPARNING (stjärnor per bana)
// =============================================================
const SPAR_NYCKEL = SPELID + ':framsteg';
let framsteg = BANOR.map(() => ({ klar: false, stjarnor: 0, ankor: 0, guld: false }));
try { const s = JSON.parse(localStorage.getItem(SPAR_NYCKEL)); if (Array.isArray(s)) s.forEach((b, i) => { if (framsteg[i]) Object.assign(framsteg[i], b); }); } catch (e) { }
function spara() {
  try {
    localStorage.setItem(SPAR_NYCKEL, JSON.stringify(framsteg));
    localStorage.setItem('rekord:' + SPELID, String(totalStjarnor()));
  } catch (e) { }
}
const totalStjarnor = () => framsteg.reduce((s, b) => s + b.stjarnor, 0);
const banaOlast = (i) => i === 0 || framsteg[i].klar || framsteg[i - 1].klar;

// =============================================================
//  TILLSTÅND
// =============================================================
const tangent = { vanster: false, hoger: false, hopp: false, ned: false };
let lage = 'meny'; // meny | spel | quiz | buss | klar | fest | paus
let banIndex = 0, bana = null, tid = 0, kamX = 0, skak = 0;
let partiklar = [], meddelande = null, ankorTagna = 0, guldTagen = false, fragaNu = null, grindNu = null;
let buss = { x: 0, t: 0 }, fest = { t: 0 };
let hoppForra = false;

const s = { // spelaren (Charlie)
  x: 60, y: 300, w: 26, h: 42, vx: 0, vy: 0, paMark: false, ducka: false, vand: 1,
  badklader: false, gangFas: 0, vila: 0, sx: 1, sy: 1, koyote: 0, hoppBuffert: 0,
  flotte: null, knuff: 0, osarbar: 0, studsar: false, igenom: 0, saker: { x: 60 }, iLuften: false, plaskat: false, synlig: true, blink: 0,
};

// Bakgrundsdjur (fjärilar/fåglar/fiskar)
let djur = [];

function laddaBana(i) {
  banIndex = i;
  const mall = BANOR[i];
  bana = JSON.parse(JSON.stringify(mall)); // egen kopia som kan ändras
  bana.ankor.forEach(a => a.tagen = false);
  bana.fiender.forEach(f => { f.riktning = 1; f.yr = 0; f.fart = f.fart || 1; f.rot = 0; });
  bana.flottar.forEach(f => { f.bx = f.x; f.by = f.y; f.px = f.x; f.py = f.y; });
  bana.ringar.forEach(r => r.tryck = 0);
  bana.dorrar.forEach(d => { d.lost = false; d.sank = 0; });
  ankorTagna = 0; guldTagen = false; partiklar = []; meddelande = null; tid = 0;
  Object.assign(s, { x: 60, y: MARK_Y - 42, vx: 0, vy: 0, h: 42, paMark: true, ducka: false, vand: 1, sx: 1, sy: 1, koyote: 0, hoppBuffert: 0, flotte: null, knuff: 0, osarbar: 0, studsar: false, igenom: 0, saker: { x: 60 }, plaskat: false, synlig: true });
  s.badklader = i > 0;
  kamX = 0;
  djur = [];
  for (let k = 0; k < 5; k++) djur.push({ x: slump(0, W), y: slump(60, 220), fas: slump(0, 6), fart: slump(0.4, 0.9), farg: ['#ff8fc8', '#ffd23f', '#8fd0ff', '#b48cff'][k % 4] });
  if (grafik) grafik.byggBana(bana);
  $('ban-namn').textContent = `${mall.ikon} ${mall.namn}`;
  uppdateraHud();
  startaMusik(LATAR[i % LATAR.length]);
  visaMeddelande(`Bana ${i + 1}: ${mall.namn}`, 150);
  setTimeout(() => { if (lage === 'spel' && banIndex === i) sag(mall.intro); }, 300);
}

function uppdateraHud() {
  $('ank-antal').textContent = `${ankorTagna} / ${bana ? bana.ankor.length : 0}`;
  $('guld-ikon').classList.toggle('hittad', guldTagen);
}
function visaMeddelande(text, langd = 110) { meddelande = { text, t: langd, max: langd }; }

// =============================================================
//  OVERLAYS
// =============================================================
const OVERLAYS = ['ov-start', 'ov-banval', 'ov-quiz', 'ov-klar', 'ov-vinst', 'ov-paus'];
function visa(id) { OVERLAYS.forEach(o => $(o).classList.toggle('dold', o !== id)); }

function byggBanval() {
  const g = $('ban-grid'); g.innerHTML = '';
  BANOR.forEach((b, i) => {
    const k = document.createElement('button');
    const ol = banaOlast(i), f = framsteg[i];
    k.className = 'ban-kort' + (ol ? '' : ' last');
    k.innerHTML = `<span class="ikon">${ol ? b.ikon : '🔒'}</span><span>${i + 1}. ${b.namn}</span><span class="stj">${'⭐'.repeat(f.stjarnor)}${'<span style="opacity:.3">☆</span>'.repeat(3 - f.stjarnor)}</span>`;
    k.onclick = () => { if (!ol) { ljud('fel'); return; } initLjud(); startaBana(i); };
    g.appendChild(k);
  });
  $('total-stj').textContent = `⭐ ${totalStjarnor()} / ${BANOR.length * 3}`;
}
function oppnaBanval() { stoppaMusik(); lage = 'meny'; byggBanval(); visa('ov-banval'); }
function startaBana(i) { visa(null); lage = 'spel'; laddaBana(i); }

$('knapp-starta').onclick = () => {
  initLjud();
  const forsta = framsteg.findIndex(b => !b.klar);
  startaBana(forsta === -1 ? 0 : forsta);
};
$('knapp-start-banor').onclick = () => { initLjud(); oppnaBanval(); };
$('knapp-banor').onclick = () => { initLjud(); oppnaBanval(); };
$('knapp-paus').onclick = () => togglePaus();
$('knapp-ljud').onclick = () => {
  ljudPa = !ljudPa; $('knapp-ljud').textContent = ljudPa ? '🔊' : '🔇';
  if (!ljudPa) { stoppaMusik(); if ('speechSynthesis' in window) speechSynthesis.cancel(); }
  else if (lage === 'spel') startaMusik(LATAR[banIndex % LATAR.length]);
  else if (lage === 'fest') startaMusik(FEST_LAT);
};
$('knapp-fortsatt').onclick = () => togglePaus();
$('knapp-om').onclick = () => startaBana(banIndex);
$('knapp-paus-banor').onclick = () => oppnaBanval();
$('knapp-nasta').onclick = () => startaBana(Math.min(banIndex + 1, BANOR.length - 1));
$('knapp-igen').onclick = () => startaBana(banIndex);
$('knapp-klar-banor').onclick = () => oppnaBanval();
$('knapp-vinst-banor').onclick = () => oppnaBanval();
$('knapp-vinst-igen').onclick = () => startaBana(BANOR.length - 1);

function togglePaus() {
  if (lage === 'spel') { lage = 'paus'; stoppaMusik(); visa('ov-paus'); }
  else if (lage === 'paus') { lage = 'spel'; visa(null); startaMusik(LATAR[banIndex % LATAR.length]); }
}
document.addEventListener('visibilitychange', () => { if (document.hidden && lage === 'spel') togglePaus(); });

// ---------- Quiz ----------
function oppnaQuiz(grind) {
  lage = 'quiz'; grindNu = grind;
  for (const k in tangent) tangent[k] = false;
  fragaNu = skapaFraga(grind.typ, bana.niva);
  $('quiz-titel').textContent = fragaNu.titel;
  $('quiz-fraga').innerHTML = fragaNu.html ? fragaNu.html : '';
  if (!fragaNu.html) $('quiz-fraga').textContent = fragaNu.text;
  $('quiz-respons').textContent = '';
  const box = $('quiz-svar'); box.innerHTML = '';
  fragaNu.alt.forEach((alt, i) => {
    const b = document.createElement('button');
    b.innerHTML = `${alt}<small>${i + 1}</small>`;
    b.dataset.svar = alt;
    b.onclick = () => svara(b, alt);
    box.appendChild(b);
  });
  visa('ov-quiz');
  sag(fragaNu.las);
}
$('quiz-las').onclick = () => fragaNu && sag(fragaNu.las);
let svarLast = false;
function svara(knapp, alt) {
  if (svarLast) return;
  if (alt === fragaNu.ratt) {
    svarLast = true;
    knapp.classList.add('ratt'); ljud('ratt');
    $('quiz-respons').textContent = ['Rätt! 🎉', 'Snyggt! 🌟', 'Superbra! 💖', 'Ja! 🥳'][slumpHel(0, 3)];
    if (fragaNu.engelska) setTimeout(() => sag(alt, 'en-US'), 150); else sag('Rätt!');
    setTimeout(() => {
      svarLast = false;
      grindNu.lost = true; ljud('grind'); skak = 12;
      s.saker = { x: grindNu.x + 60 };
      visa(null); lage = 'spel';
    }, 900);
  } else {
    knapp.classList.add('fel'); ljud('fel');
    $('quiz-respons').textContent = 'Försök igen! 💪';
    setTimeout(() => knapp.classList.remove('fel'), 400);
  }
}

// ---------- Tangentbord ----------
const TANGENTER = { ArrowLeft: 'vanster', a: 'vanster', A: 'vanster', ArrowRight: 'hoger', d: 'hoger', D: 'hoger', ArrowUp: 'hopp', w: 'hopp', W: 'hopp', ' ': 'hopp', ArrowDown: 'ned', s: 'ned', S: 'ned' };
addEventListener('keydown', (e) => {
  if (lage === 'quiz' && /^[1-3]$/.test(e.key)) {
    const k = $('quiz-svar').children[Number(e.key) - 1]; if (k) k.click(); return;
  }
  if ((e.key === 'p' || e.key === 'P' || e.key === 'Escape') && (lage === 'spel' || lage === 'paus')) { togglePaus(); return; }
  if (e.key === 'Enter') {
    const prim = { meny: $('ov-start').classList.contains('dold') ? null : 'knapp-starta', klar: 'knapp-nasta', paus: 'knapp-fortsatt' }[lage];
    if (prim) { $(prim).click(); e.preventDefault(); return; }
  }
  const t = TANGENTER[e.key];
  if (t) { tangent[t] = true; e.preventDefault(); initLjud(); }
});
addEventListener('keyup', (e) => { const t = TANGENTER[e.key]; if (t) tangent[t] = false; });

// ---------- Touch ----------
function kopplaTouch(id, t) {
  const el = $(id);
  const pa = (e) => { e.preventDefault(); tangent[t] = true; el.classList.add('tryckt'); initLjud(); };
  const av = (e) => { e.preventDefault(); tangent[t] = false; el.classList.remove('tryckt'); };
  el.addEventListener('pointerdown', pa); el.addEventListener('pointerup', av);
  el.addEventListener('pointercancel', av); el.addEventListener('pointerleave', av);
}
kopplaTouch('t-v', 'vanster'); kopplaTouch('t-h', 'hoger'); kopplaTouch('t-hopp', 'hopp'); kopplaTouch('t-n', 'ned');
const arTouch = () => ('ontouchstart' in window) || matchMedia('(pointer: coarse)').matches;
function slaPaTouch() { $('touch').classList.remove('dold'); document.body.classList.add('touch'); setTimeout(anpassaStorlek, 50); }
if (arTouch()) slaPaTouch();
addEventListener('touchstart', slaPaTouch, { once: true, passive: true });

// =============================================================
//  UPPDATERING (60 gånger per sekund)
// =============================================================
const paMarkX = (x1, x2) => bana.mark.some(m => x2 > m.x && x1 < m.x + m.w);

function uppdatera() {
  tid++;
  if (meddelande && --meddelande.t <= 0) meddelande = null;
  if (skak > 0) skak--;
  uppdateraPartiklar();
  uppdateraDjur();
  bana.ringar.forEach(r => r.tryck *= 0.85);
  bana.dorrar.forEach(d => { if (d.lost && d.sank < 1) { d.sank = Math.min(1, d.sank + 0.025); if (tid % 4 === 0) damm(d.x + 25, MARK_Y - 4, '#e9d8ff'); } });

  // flottar rör sig
  for (const f of bana.flottar) {
    f.px = f.x; f.py = f.y;
    const t = tid / 60 * f.fart;
    f.x = f.bx + Math.sin(t) * f.dx; f.y = f.by + Math.sin(t) * f.dy;
  }
  // fiender
  for (const f of bana.fiender) {
    if (f.yr > 0) { f.yr--; continue; }
    const v = (f.typ === 'boll' ? 1.6 : 1.1) * f.fart;
    f.x += f.riktning * v; f.rot += f.riktning * v / 18;
    if (f.x < f.min) { f.x = f.min; f.riktning = 1; }
    if (f.x > f.max) { f.x = f.max; f.riktning = -1; }
  }

  if (lage === 'buss') { uppdateraBuss(); return; }
  if (lage === 'fest') { uppdateraFest(); return; }
  if (lage !== 'spel') return;

  // ---- Charlie ----
  const hoppTryck = tangent.hopp && !hoppForra; hoppForra = tangent.hopp;
  if (hoppTryck) s.hoppBuffert = HOPP_BUFFERT; else if (s.hoppBuffert > 0) s.hoppBuffert--;

  // hoppa ner genom plattform
  if (tangent.ned && s.paMark && s.paPlattform && s.igenom === 0) { s.igenom = 14; s.paMark = false; s.y += 2; }
  if (s.igenom > 0) s.igenom--;

  let mal = 0;
  if (tangent.vanster) mal -= FART;
  if (tangent.hoger) mal += FART;
  if (s.knuff > 0) { s.knuff--; mal *= 0.2; }
  const acc = s.paMark ? ACC_MARK : ACC_LUFT;
  s.vx += begransa(mal - s.vx, -acc, acc);
  if (mal !== 0) s.vand = Math.sign(mal);

  if (s.paMark) s.koyote = KOYOTE; else if (s.koyote > 0) s.koyote--;
  if (s.hoppBuffert > 0 && s.koyote > 0) {
    s.vy = -HOPP; s.koyote = 0; s.hoppBuffert = 0; s.paMark = false; s.flotte = null; s.studsar = false;
    ljud('hopp'); s.sx = 0.8; s.sy = 1.25;
  }
  // kort tryck = lägre hopp
  if (!tangent.hopp && s.vy < -3 && !s.studsar) s.vy += 0.7;
  s.vy = Math.min(s.vy + GRAVITATION, 14);

  // åk med flotten
  if (s.flotte) { s.x += s.flotte.x - s.flotte.px; s.y += s.flotte.y - s.flotte.py; }

  const forraBotten = s.y + s.h;
  s.x += s.vx; s.y += s.vy;
  s.x = begransa(s.x, 0, bana.bredd - s.w);

  const varILuften = !s.paMark;
  s.paMark = false; s.flotte = null; s.paPlattform = false;

  // sidväggar på markkanter (när man ramlat ner i vattnet)
  if (s.y + s.h > MARK_Y + 4) {
    for (const m of bana.mark) {
      if (s.x + s.w > m.x && s.x < m.x + m.w) {
        if (s.x + s.w / 2 < m.x + m.w / 2) s.x = m.x - s.w; else s.x = m.x + m.w;
      }
    }
  }
  const landaPa = (topp, x1, x2, tolerans = 2) =>
    s.vy >= 0 && s.x + s.w - 4 > x1 && s.x + 4 < x2 && forraBotten <= topp + tolerans && s.y + s.h >= topp;

  // marken
  for (const m of bana.mark) {
    if (landaPa(MARK_Y, m.x, m.x + m.w, 3)) { s.y = MARK_Y - s.h; s.vy = 0; s.paMark = true; }
  }
  // plattformar
  if (s.igenom === 0) {
    for (const p of bana.plattformar) {
      if (landaPa(p.y, p.x, p.x + p.w, 3)) { s.y = p.y - s.h; s.vy = 0; s.paMark = true; s.paPlattform = true; }
    }
    for (const f of bana.flottar) {
      if (landaPa(f.y, f.x, f.x + f.w, 6)) { s.y = f.y - s.h; s.vy = 0; s.paMark = true; s.flotte = f; s.paPlattform = true; }
    }
  }
  // badringar
  for (const r of bana.ringar) {
    const topp = MARK_Y - 20;
    if (s.vy > 0 && s.x + s.w > r.x + 4 && s.x < r.x + 60 && forraBotten <= topp + 8 && s.y + s.h >= topp) {
      s.y = topp - s.h; s.vy = -RING_STUDS; s.studsar = true; s.paMark = false; r.tryck = 1;
      s.sx = 0.75; s.sy = 1.35; ljud('studs');
      for (let k = 0; k < 10; k++) partiklar.push({ x: r.x + 30, y: topp, vx: slump(-3, 3), vy: slump(-4, -1), liv: 30, max: 30, farg: '#ffffff', g: 0.2, r: slump(2, 4) });
    }
  }

  if (s.paMark) {
    if (varILuften && s.iLuften) { s.sx = 1.3; s.sy = 0.72; ljud('land'); damm(s.x + s.w / 2, s.y + s.h); }
    s.studsar = false;
    if (!s.flotte && !s.paPlattform) s.saker = { x: s.x };
  }
  s.iLuften = !s.paMark;

  // ducka (bara för syns skull + plattformsknep)
  s.ducka = tangent.ned && s.paMark && !s.paPlattform;
  const nyH = s.ducka ? 30 : 42;
  if (nyH !== s.h) { s.y += s.h - nyH; s.h = nyH; }

  s.sx += (1 - s.sx) * 0.2; s.sy += (1 - s.sy) * 0.2;
  if (s.osarbar > 0) s.osarbar--;

  // plask i vattnet
  if (bana.vatten && !s.plaskat && s.y + s.h > MARK_Y + 26 && !paMarkX(s.x, s.x + s.w)) {
    s.plaskat = true; ljud('plask'); skak = 6;
    for (let k = 0; k < 26; k++) partiklar.push({ x: s.x + 13, y: MARK_Y + 22, vx: slump(-4, 4), vy: slump(-8, -2), liv: 40, max: 40, farg: k % 2 ? '#bfe9ff' : '#ffffff', g: 0.35, r: slump(2, 5) });
    visaMeddelande(['PLASK! 💦', 'Hoppsan! 💦', 'Blött! 💦'][slumpHel(0, 2)], 70);
  }
  if (s.y > H + 60) {
    // tillbaka till senaste säkra platsen
    let x = s.saker.x;
    if (!paMarkX(x, x + s.w)) x = 60;
    Object.assign(s, { x, y: MARK_Y - 42 - 30, vx: 0, vy: 0, plaskat: false, osarbar: 60, knuff: 0, studsar: false });
  }

  // grindar (väggar tills frågan är löst)
  for (const d of bana.dorrar) {
    if (d.lost) continue;
    const r = { x: d.x, y: 0, w: 50, h: MARK_Y };
    if (overlapp(s, r)) {
      if (s.x + s.w / 2 < d.x + 25) s.x = d.x - s.w - 1; else s.x = d.x + 51;
      s.vx = 0;
      if (s.paMark) { oppnaQuiz(d); return; }
    }
  }

  // fiender
  for (const f of bana.fiender) {
    const r = fiendeRuta(f);
    if (!overlapp(s, r)) continue;
    if (s.vy > 0 && forraBotten <= r.y + 10) {
      f.yr = 180; s.vy = -KRABB_STUDS; s.studsar = true; s.y = r.y - s.h;
      ljud('boing');
      for (let k = 0; k < 8; k++) partiklar.push({ x: r.x + r.w / 2, y: r.y, vx: slump(-3, 3), vy: slump(-4, -1), liv: 35, max: 35, farg: '#ffd23f', g: 0.15, r: 3, stjarna: true });
    } else if (f.yr === 0 && s.osarbar === 0) {
      const sida = (s.x + s.w / 2) < (r.x + r.w / 2) ? -1 : 1;
      s.vx = sida * KNUFF; s.vy = -6; s.knuff = 22; s.osarbar = 50; s.paMark = false; s.studsar = true;
      ljud('aj'); skak = 5;
    }
  }

  // badkläder
  if (bana.badklader && !s.badklader) {
    const r = { x: bana.badklader.x, y: bana.badklader.y, w: 32, h: 30 };
    if (overlapp(s, r)) {
      s.badklader = true; ljud('klader'); glitter(r.x + 16, r.y + 15, '#ff6fae', 22);
      visaMeddelande('👙 Badkläder på! Nu till bussen!', 140); sag('Badkläder på! Nu till bussen!');
    }
  }
  // ankor
  for (const a of bana.ankor) {
    if (a.tagen) continue;
    if (overlapp(s, { x: a.x, y: a.y, w: 30, h: 26 })) {
      a.tagen = true; ankorTagna++; uppdateraHud(); ljud('anka'); glitter(a.x + 15, a.y + 12, '#ffd23f', 12);
      if (ankorTagna === bana.ankor.length) { visaMeddelande('🦆 Alla ankor! ⭐', 110); }
    }
  }
  // guldanka
  if (!guldTagen && overlapp(s, { x: bana.guld.x, y: bana.guld.y, w: 30, h: 26 })) {
    guldTagen = true; uppdateraHud(); ljud('guld'); glitter(bana.guld.x + 15, bana.guld.y + 12, '#ffcf3a', 30);
    visaMeddelande('✨ GULDANKAN! ✨', 140); sag('Du hittade guldankan!');
  }

  // mål
  const m = bana.mal;
  if (overlapp(s, { x: m.x, y: MARK_Y - 110, w: 70, h: 110 })) {
    if (bana.badklader && !s.badklader) {
      if (!meddelande || meddelande.text[0] !== '👙') { visaMeddelande('👙 Hämta badkläderna först! De ligger vid huset.', 120); sag('Hämta badkläderna först!'); }
    } else if (m.typ === 'buss') { startaBuss(); return; }
    else { startaFest(); return; }
  }

  // animation
  if (Math.abs(s.vx) > 0.3 && s.paMark) s.gangFas += 0.22 * Math.abs(s.vx) / FART;
  if (!s.paMark) s.gangFas = 0;
  s.vila += 0.08;
  if (tid % 200 === 0) s.blink = 8; if (s.blink > 0) s.blink--;

  // kamera
  const malKam = begransa(s.x - W * 0.42 + s.vand * 40, 0, bana.bredd - W);
  kamX += (malKam - kamX) * 0.1;
}

function fiendeRuta(f) {
  return f.typ === 'boll' ? { x: f.x, y: MARK_Y - 38, w: 38, h: 38 } : { x: f.x, y: MARK_Y - 28, w: 44, h: 28 };
}

// ---------- Mål: buss & fest ----------
function stjarnorNu() { return 1 + (ankorTagna === bana.ankor.length ? 1 : 0) + (guldTagen ? 1 : 0); }
function sparaBana() {
  const f = framsteg[banIndex], st = stjarnorNu();
  f.klar = true; f.stjarnor = Math.max(f.stjarnor, st); f.ankor = Math.max(f.ankor, ankorTagna); f.guld = f.guld || guldTagen;
  spara();
  return st;
}
function startaBuss() {
  lage = 'buss'; stoppaMusik(); ljud('klar');
  buss = { x: kamX - 260, t: 0, stopp: bana.mal.x - 40 };
  sparaBana();
}
function uppdateraBuss() {
  buss.t++;
  const t = buss.t;
  if (t < 70) buss.x += (buss.stopp - buss.x) * 0.08;
  else if (t === 70) { s.synlig = false; glitter(s.x + 13, s.y + 20, '#ffffff', 10); }
  else if (t > 95) buss.x += (t - 95) * 0.5;
  kamX += (begransa(buss.stopp - W / 2 + 90, 0, bana.bredd - W) - kamX) * 0.08;
  if (t === 150) visaKlar();
}
function visaKlar() {
  lage = 'klar';
  const st = stjarnorNu();
  $('klar-titel').textContent = ['', '🎉 Bana klar!', '🌟 Jättebra!', '🏆 PERFEKT!'][st];
  $('klar-ankor').textContent = `🦆 Ankor: ${ankorTagna} / ${bana.ankor.length}` + (ankorTagna < bana.ankor.length ? '  (samla alla för en stjärna till!)' : ' ✅');
  $('klar-guld').textContent = guldTagen ? '✨ Guldankan: hittad! ✅' : '✨ Guldankan: gömd någonstans högt upp…';
  $('knapp-nasta').classList.toggle('dold', banIndex >= BANOR.length - 1);
  tandStjarnor('klar-stj', st);
  visa('ov-klar');
  sag(['', 'Bana klar!', 'Jättebra!', 'Perfekt! Alla stjärnor!'][st]);
}
function tandStjarnor(id, antal) {
  const sp = $(id).children;
  [...sp].forEach(e => e.classList.remove('tand'));
  for (let i = 0; i < antal; i++) setTimeout(() => { sp[i].classList.add('tand'); ton(880 + i * 220, 0.15, 'triangle', 0.08); }, 300 + i * 350);
}
function startaFest() {
  lage = 'fest'; sparaBana();
  fest = { t: 0, sx: s.x, sy: s.y, mx: bana.mal.x + 60, ballonger: [] };
  stoppaMusik(); ljud('klar');
  setTimeout(() => { if (lage === 'fest') startaMusik(FEST_LAT); }, 900);
}
function uppdateraFest() {
  fest.t++;
  const t = fest.t;
  // Charlie hoppar i poolen
  if (t < 50) {
    const p = t / 50;
    s.x = fest.sx + (fest.mx - fest.sx) * p;
    s.y = fest.sy - Math.sin(p * Math.PI) * 140 + (MARK_Y - 10 - fest.sy) * p;
    s.vand = 1; s.sy = 1.1; s.sx = 0.9;
  }
  if (t === 50) {
    ljud('plask'); skak = 14;
    for (let k = 0; k < 50; k++) partiklar.push({ x: fest.mx + 13, y: MARK_Y - 20, vx: slump(-6, 6), vy: slump(-12, -3), liv: 60, max: 60, farg: k % 2 ? '#8fdcff' : '#ffffff', g: 0.4, r: slump(2, 6) });
    sag('Plask! Välkommen till poolpartyt!');
  }
  if (t > 50) { s.y = MARK_Y - 44 + Math.sin(t / 12) * 3; s.sx = 1; s.sy = 1; s.vand = Math.sin(t / 60) > 0 ? 1 : -1; }
  if (t > 40 && t % 3 === 0) {
    const farger = ['#ff6fae', '#ffd23f', '#7fd4ff', '#9b7bff', '#7fe0a3', '#ff8a5c'];
    partiklar.push({ x: kamX + slump(0, W), y: -10, vx: slump(-1, 1), vy: slump(1, 3), liv: 200, max: 200, farg: farger[slumpHel(0, 5)], g: 0.02, r: slump(3, 6), konfetti: true, rot: slump(0, 6) });
  }
  if (t > 60 && t % 45 === 0) fyrverkeri(kamX + slump(150, W - 150), slump(80, 200));
  kamX += (begransa(fest.mx - W / 2, 0, bana.bredd - W) - kamX) * 0.06;
  if (t === 150) {
    const tot = totalStjarnor(), st = stjarnorNu();
    $('vinst-text').innerHTML = `Charlie klarade alla banor och hoppade i poolen! PLASK! 💦🩷<br><b>Totalt: ⭐ ${tot} / ${BANOR.length * 3}</b>` + (tot < BANOR.length * 3 ? '<br>Spela om banor för att hitta fler stjärnor!' : '<br>🏆 ALLA stjärnor! Du är poolpartyts drottning! 👑');
    tandStjarnor('vinst-stj', st);
    visa('ov-vinst');
  }
}

// ---------- Partiklar ----------
function glitter(x, y, farg, n = 12) { for (let i = 0; i < n; i++) partiklar.push({ x, y, vx: slump(-3, 3), vy: slump(-4.5, 1), liv: 32, max: 32, farg, g: 0.18, r: slump(2, 4.5), stjarna: i % 3 === 0 }); }
function damm(x, y, farg = '#ffffff') { for (let i = 0; i < 6; i++) partiklar.push({ x, y, vx: slump(-1.5, 1.5), vy: slump(-1.5, 0), liv: 18, max: 18, farg, g: 0.05, r: slump(2, 4) }); }
function fyrverkeri(x, y) {
  const farg = ['#ff6fae', '#ffd23f', '#7fd4ff', '#b48cff', '#7fe0a3'][slumpHel(0, 4)];
  ton(slump(500, 900), 0.4, 'sine', 0.04, 200); brus(0.3, 0.05, 0.1);
  for (let i = 0; i < 36; i++) { const v = (i / 36) * Math.PI * 2, f = slump(2.5, 4.5); partiklar.push({ x, y, vx: Math.cos(v) * f, vy: Math.sin(v) * f, liv: 55, max: 55, farg, g: 0.06, r: 2.6 }); }
}
function uppdateraPartiklar() {
  for (const p of partiklar) {
    p.x += p.vx; p.y += p.vy; p.vy += p.g; p.liv--;
    if (p.konfetti) { p.vx += Math.sin((tid + p.rot * 30) / 20) * 0.05; p.rot += 0.1; }
  }
  partiklar = partiklar.filter(p => p.liv > 0);
  if (partiklar.length > 600) partiklar.splice(0, partiklar.length - 600);
}
function uppdateraDjur() {
  for (const d of djur) {
    d.fas += 0.15; d.x += d.fart; d.y += Math.sin(d.fas * 0.3) * 0.4;
    if (d.x > W + 30) { d.x = -30; d.y = slump(60, 220); }
  }
}

// =============================================================
//  RITNING: 3D-världen ritas i grafik.js, text och karta ritas ovanpå här
// =============================================================
function rundRekt(x, y, w, h, r) {
  ctx.beginPath(); ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}
const ritData = {
  get bana() { return bana; }, spelare: null, get s() { return s; }, get kamX() { return kamX; }, get tid() { return tid; }, get lage() { return lage; },
  get partiklar() { return partiklar; }, get buss() { return buss; }, get fest() { return fest; }, get guldTagen() { return guldTagen; }, get skak() { return skak; },
  get finalKlar() { return banIndex === BANOR.length - 1 && framsteg[banIndex].klar; },
};
function rita() {
  if (!bana) return;
  if (grafik) grafik.rita(ritData);
  ctx.clearRect(0, 0, W, H);
  ritaFramsteg();
  if (meddelande) {
    const a = Math.min(1, meddelande.t / 20, (meddelande.max - meddelande.t + 1) / 10);
    ctx.save(); ctx.globalAlpha = a;
    ctx.font = 'bold 30px Trebuchet MS, sans-serif'; ctx.textAlign = 'center';
    const bw = ctx.measureText(meddelande.text).width + 50;
    const y = 70 - (1 - a) * 20;
    ctx.shadowColor = 'rgba(60,20,80,0.25)'; ctx.shadowBlur = 16; ctx.shadowOffsetY = 4;
    ctx.fillStyle = 'rgba(255,255,255,0.94)'; rundRekt(W / 2 - bw / 2, y - 32, bw, 48, 24); ctx.fill();
    ctx.shadowColor = 'transparent';
    ctx.fillStyle = '#6b3a6e'; ctx.fillText(meddelande.text, W / 2, y + 2);
    ctx.restore();
  }
}
function ritaFramsteg() {
  // liten karta högst upp: hur långt kvar till målet
  if (lage !== 'spel' && lage !== 'paus') return;
  const x0 = 24, y0 = 22, b = 190, p = begransa(s.x / (bana.mal.x || 1), 0, 1);
  ctx.save(); ctx.globalAlpha = 0.9;
  ctx.fillStyle = 'rgba(255,255,255,0.55)'; rundRekt(x0 - 6, y0 - 9, b + 40, 18, 9); ctx.fill();
  ctx.fillStyle = '#ff8fc8'; rundRekt(x0, y0 - 3, b * p, 6, 3); ctx.fill();
  for (const d of bana.dorrar) { const dx = x0 + b * begransa(d.x / bana.mal.x, 0, 1); ctx.fillStyle = d.lost ? '#7fe0a3' : '#a86d2c'; ctx.fillRect(dx - 2, y0 - 6, 4, 12); }
  ctx.font = '16px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(bana.mal.typ === 'pool' ? '🏊' : '🚌', x0 + b + 18, y0 + 1);
  ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(x0 + b * p, y0, 8, 0, 7); ctx.fill();
  ctx.fillStyle = '#7a4a22'; ctx.beginPath(); ctx.arc(x0 + b * p, y0 - 1, 6, Math.PI, 0); ctx.fill();
  ctx.fillStyle = '#ffd9b3'; ctx.beginPath(); ctx.arc(x0 + b * p, y0 + 1, 4.5, 0, Math.PI); ctx.fill();
  ctx.restore();
}
function ritaAnka(g, x, y, skala, gunga, guld) {
  g.save(); g.translate(x, y); g.scale(skala, skala);
  if (gunga) g.translate(0, Math.sin(Date.now() / 300 + x) * 2);
  if (guld) {
    const gl = 0.4 + Math.sin(Date.now() / 200) * 0.25;
    g.fillStyle = `rgba(255,230,120,${gl})`; g.beginPath(); g.arc(16, 12, 24, 0, 7); g.fill();
  }
  g.fillStyle = 'rgba(10,40,70,0.15)'; g.beginPath(); g.ellipse(14, 26, 12, 3, 0, 0, Math.PI * 2); g.fill();
  g.fillStyle = guld ? '#ffbf1f' : '#ffd23f';
  g.strokeStyle = guld ? 'rgba(170,100,0,0.8)' : 'rgba(160,110,0,0.5)'; g.lineWidth = 1.5;
  g.beginPath(); g.ellipse(14, 16, 13, 10, 0, 0, Math.PI * 2); g.fill(); g.stroke();
  g.beginPath(); g.arc(20, 7, 7, 0, Math.PI * 2); g.fill(); g.stroke();
  g.fillStyle = 'rgba(255,255,255,0.6)'; g.beginPath(); g.ellipse(11, 13, 4, 2.5, -0.5, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#ff9800'; g.beginPath(); g.moveTo(26, 6); g.lineTo(34, 8); g.lineTo(26, 11); g.fill();
  g.fillStyle = '#222'; g.beginPath(); g.arc(22, 5, 1.7, 0, Math.PI * 2); g.fill();
  if (guld) { // krona
    g.fillStyle = '#ffe14d'; g.strokeStyle = '#c98a00'; g.lineWidth = 1;
    g.beginPath(); g.moveTo(14, 0); g.lineTo(15, -8); g.lineTo(18, -3); g.lineTo(20, -9); g.lineTo(22, -3); g.lineTo(25, -8); g.lineTo(26, 0); g.closePath(); g.fill(); g.stroke();
    const t = Date.now() / 150;
    g.fillStyle = '#fff'; g.save(); g.translate(4 + Math.cos(t) * 2, 2); g.rotate(t); g.fillRect(-1, -4, 2, 8); g.fillRect(-4, -1, 8, 2); g.restore();
  }
  g.restore();
}

// =============================================================
//  HUVUDLOOP (fast 60 Hz-uppdatering, ritar så ofta skärmen vill)
// =============================================================
let forra = performance.now(), ack = 0;
function loop(nu) {
  ack += Math.min(100, nu - forra); forra = nu;
  while (ack >= 1000 / 60) {
    if (bana && lage !== 'paus' && lage !== 'quiz' && lage !== 'meny') uppdatera();
    else if (bana) { tid++; uppdateraPartiklar(); }
    ack -= 1000 / 60;
  }
  rita();
  requestAnimationFrame(loop);
}

// HUD-anka
ritaAnka($('ank-ikon').getContext('2d'), 2, 6, 1.6, false, false);

// Start: visa första banan bakom startmenyn
anpassaStorlek();
laddaBana(0); stoppaMusik(); meddelande = null; lage = 'meny';
requestAnimationFrame(loop);

// För automatiska tester
window.__poolparty2 = {
  get lage() { return lage; }, get bana() { return bana; }, get banIndex() { return banIndex; }, spelare: s, tangent, BANOR,
  startaBana, get ankor() { return ankorTagna; }, get guld() { return guldTagen; }, framsteg: () => framsteg,
  teleport: (x, y) => { s.x = x; s.y = y; s.vx = 0; s.vy = 0; },
  grafikInfo: () => grafik && grafik.info(),
  // testverktyg: kör en uppdatering, spara/återställ läget
  steg: () => uppdatera(),
  ogonblick: () => JSON.stringify({ s: { ...s, flotte: s.flotte ? bana.flottar.indexOf(s.flotte) : -1 }, bana, tid, ankorTagna, guldTagen, hoppForra }),
  aterstall: (o) => {
    const d = JSON.parse(o);
    bana = d.bana; tid = d.tid; ankorTagna = d.ankorTagna; guldTagen = d.guldTagen; hoppForra = d.hoppForra;
    Object.assign(s, d.s); s.flotte = d.s.flotte >= 0 ? bana.flottar[d.s.flotte] : null; lage = 'spel';
  },
};
