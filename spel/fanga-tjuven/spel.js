// =============================================================
//  FÅNGA TJUVEN 🦹 – klassiska "Whac-a-mole" på stranden
//  Tjuven från Strandjakten tittar upp ur sandhålen. Tryck på honom!
//  Men tryck inte på bebisen. Guldtjuven med säcken ger extra.
// =============================================================
import { skapaRam, avatar, ton, saga, buu } from '../../delat/familjespel.js';

// ---------- Lätt att leka med ----------
const SPEL_ID = 'fanga-tjuven';
const SPELTID = 45;                 // sekunder
const INSTALLNING = {               // per spelare: hur länge figuren syns (ms), tid mellan figurer (ms), bebis-chans
  beppe:   { uppe: 1700, mellan: 950, bebis: 0,    max: 1 },
  charlie: { uppe: 1250, mellan: 720, bebis: 0.18, max: 2 },
  vuxen:   { uppe: 900,  mellan: 520, bebis: 0.25, max: 3 },
};
const SNABBARE_TILL_SLUT = 0.4;     // på slutet är allt 40 % snabbare
const GULD_CHANS = 0.07;
const POANG_TJUV = 10, POANG_GULD = 25, MINUS_BEBIS = 15;
const SERIE_BONUS = 2;              // extra poäng per tjuv i rad (efter 3 i rad), max +10

// ---------- Figurerna (egna SVG:er) ----------
const TJUV = (guld) => `
<svg viewBox="0 0 100 110">
  <path d="M14 110 C14 78 30 70 50 70 C70 70 86 78 86 110 Z" fill="#222"/>
  <path d="M20 84 H80 M17 96 H83 M15 108 H85" stroke="#fff" stroke-width="6"/>
  <circle cx="50" cy="46" r="27" fill="#f2c39b"/>
  <path d="M22 40 C22 16 78 16 78 40 Z" fill="${guld ? '#ffcf1f' : '#c92a2a'}"/>
  <rect x="20" y="36" width="60" height="7" rx="3" fill="${guld ? '#e0a800' : '#a51d1d'}"/>
  <circle cx="50" cy="15" r="6" fill="${guld ? '#fff3b0' : '#fff'}"/>
  <rect x="24" y="44" width="52" height="13" rx="6" fill="#111"/>
  <circle cx="38" cy="50" r="4.5" fill="#fff"/><circle cx="62" cy="50" r="4.5" fill="#fff"/>
  <circle cx="39" cy="51" r="2.2" fill="#111"/><circle cx="63" cy="51" r="2.2" fill="#111"/>
  <path d="M36 63 Q50 74 64 63" stroke="#7a3b1a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M58 64 l3 4 l2 -4" fill="#fff"/>
  ${guld ? '<g transform="translate(70 66)"><path d="M0 14 C-4 30 30 30 26 14 C24 6 18 4 13 4 C8 4 2 6 0 14 Z" fill="#c9a227"/><path d="M8 4 Q13 -4 18 4" stroke="#8a6a12" stroke-width="3" fill="none"/><text x="13" y="24" font-size="13" font-weight="900" text-anchor="middle" fill="#fff">$</text></g>' : ''}
</svg>`;
const BEBIS = `
<svg viewBox="0 0 100 110">
  <path d="M18 110 C18 80 32 74 50 74 C68 74 82 80 82 110 Z" fill="#ffb3d1"/>
  <circle cx="50" cy="50" r="28" fill="#ffe0c2"/>
  <path d="M50 22 q6 -8 2 -14" stroke="#e8a66d" stroke-width="4" fill="none" stroke-linecap="round"/>
  <circle cx="40" cy="48" r="4" fill="#333"/><circle cx="60" cy="48" r="4" fill="#333"/>
  <circle cx="33" cy="58" r="5" fill="#ffb3b3" opacity=".7"/><circle cx="67" cy="58" r="5" fill="#ffb3b3" opacity=".7"/>
  <ellipse cx="50" cy="64" rx="9" ry="6" fill="#ff8fab"/><ellipse cx="50" cy="64" rx="5" ry="3.5" fill="#fff"/>
</svg>`;

// ---------- Tillstånd ----------
const $ = (id) => document.getElementById(id);
const HAL = 9;
const S = { igang: false, poang: 0, tjuvar: 0, bebisar: 0, serie: 0, basta: 0, tid: SPELTID, start: 0, inst: null, uppe: new Map(), nastaVid: 0 };

$('falt').innerHTML = Array.from({ length: HAL }, (_, i) => `
  <div class="hal" data-i="${i}">
    <div class="vall"></div>
    <div class="grop"></div>
    <div class="ficka"><div class="figur"></div></div>
    <div class="kant"></div>
  </div>`).join('');
const hal = [...document.querySelectorAll('.hal')];
hal.forEach((h, i) => h.addEventListener('pointerdown', (e) => { e.preventDefault(); tryck(i, e); }));

const ram = skapaRam({
  id: SPEL_ID,
  titel: 'Fånga tjuven 🦹',
  startText: (jag) => jag.id === 'beppe'
    ? 'Tjuven tittar upp ur sanden. Tryck på honom snabbt! 🏖️'
    : `Tryck på tjuven när han tittar upp, men inte på bebisen! 👶 Guldtjuven ger extra poäng. Du har ${SPELTID} sekunder.`,
  onStart: starta,
  onMeny: () => { S.igang = false; $('topp').hidden = true; hal.forEach((h) => h.classList.remove('uppe')); },
});

function starta(jag) {
  S.inst = INSTALLNING[jag.id] || INSTALLNING.vuxen;
  Object.assign(S, { igang: true, poang: 0, tjuvar: 0, bebisar: 0, serie: 0, basta: 0, tid: SPELTID, start: performance.now(), nastaVid: performance.now() + 600 });
  S.uppe.clear();
  hal.forEach((h) => h.classList.remove('uppe'));
  $('topp').hidden = false;
  $('spelare').innerHTML = avatar(jag, 40);
  $('poang').textContent = '0'; $('serie').textContent = '';
  if (!jag.vuxen) saga('Fånga tjuven!');
}

function fart() { // 1 → 1 + SNABBARE_TILL_SLUT under omgången
  const andel = Math.min(1, (performance.now() - S.start) / (SPELTID * 1000));
  return 1 + SNABBARE_TILL_SLUT * andel;
}

function visaFigur() {
  const lediga = hal.map((_, i) => i).filter((i) => !S.uppe.has(i));
  if (!lediga.length || S.uppe.size >= S.inst.max) return;
  const i = lediga[Math.floor(Math.random() * lediga.length)];
  const typ = Math.random() < S.inst.bebis ? 'bebis' : Math.random() < GULD_CHANS ? 'guld' : 'tjuv';
  const h = hal[i];
  h.querySelector('.figur').innerHTML = typ === 'bebis' ? BEBIS : TJUV(typ === 'guld');
  // låt webbläsaren rita figuren nere innan den åker upp
  requestAnimationFrame(() => h.classList.add('uppe'));
  S.uppe.set(i, { typ, nerVid: performance.now() + S.inst.uppe / fart() + (typ === 'guld' ? -150 : 0) });
  if (typ !== 'bebis') ton(typ === 'guld' ? 880 : 440, 0.06, 'square', 0.04);
}

function gomFigur(i) {
  S.uppe.delete(i);
  hal[i].classList.remove('uppe');
}

function tryck(i, e) {
  if (!S.igang || !S.uppe.has(i)) return;
  const { typ } = S.uppe.get(i);
  gomFigur(i);
  const h = hal[i];
  h.classList.add('traff'); setTimeout(() => h.classList.remove('traff'), 250);
  if (typ === 'bebis') {
    S.poang = Math.max(0, S.poang - MINUS_BEBIS); S.serie = 0; S.bebisar++;
    buu(); navigator.vibrate?.(120);
    plus(`Oj! −${MINUS_BEBIS} 👶`, e, true);
    $('serie').textContent = 'Inte bebisen! 🍼';
  } else {
    S.serie++; S.tjuvar++; S.basta = Math.max(S.basta, S.serie);
    const bonus = S.serie >= 3 ? Math.min(10, (S.serie - 2) * SERIE_BONUS) : 0;
    const fick = (typ === 'guld' ? POANG_GULD : POANG_TJUV) + bonus;
    S.poang += fick;
    ton(typ === 'guld' ? 1175 : 660 + Math.min(S.serie, 8) * 40, 0.1, 'triangle', 0.15);
    ton(typ === 'guld' ? 1568 : 990, 0.08, 'triangle', 0.1, 0.06);
    plus(`+${fick}`, e);
    $('serie').textContent = S.serie >= 3 ? `🔥 ${S.serie} i rad!` : '';
  }
  $('poang').textContent = S.poang;
}

function plus(text, e, minus = false) {
  const el = document.createElement('div');
  el.className = 'plus' + (minus ? ' minus' : '');
  el.textContent = text;
  el.style.left = `${(e?.clientX ?? innerWidth / 2) - 30}px`;
  el.style.top = `${(e?.clientY ?? innerHeight / 2) - 50}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

function slut() {
  S.igang = false;
  [...S.uppe.keys()].forEach(gomFigur);
  $('topp').hidden = true;
  ram.slut(S.poang, `${S.tjuvar} tjuvar fångade · bästa serie ${S.basta}${S.bebisar ? ` · ${S.bebisar} bebis-oj` : ''}`, 'Tiden är slut!');
}

// ---------- Huvudloop ----------
function loop(nu) {
  if (S.igang) {
    const kvar = Math.max(0, SPELTID - (nu - S.start) / 1000);
    const hela = Math.ceil(kvar);
    if (hela !== S.tid) { S.tid = hela; if (hela <= 5 && hela > 0) ton(880, 0.05, 'square', 0.04); }
    $('tid').textContent = S.tid;
    $('tidRing').style.strokeDashoffset = String(151 * (1 - kvar / SPELTID));
    for (const [i, f] of S.uppe) if (nu >= f.nerVid) { gomFigur(i); if (f.typ !== 'bebis') S.serie = 0; }
    if (nu >= S.nastaVid) {
      visaFigur();
      S.nastaVid = nu + (S.inst.mellan / fart()) * (0.6 + Math.random() * 0.8);
    }
    if (kvar <= 0) slut();
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

// Tangentbord: siffrorna 1–9 som en mobilknappsats (7 8 9 / 4 5 6 / 1 2 3)
addEventListener('keydown', (e) => {
  const karta = { 7: 0, 8: 1, 9: 2, 4: 3, 5: 4, 6: 5, 1: 6, 2: 7, 3: 8 };
  if (e.key in karta) tryck(karta[e.key]);
});

// Testkrok
window.__fangatjuven = { S, tryck, ram };
