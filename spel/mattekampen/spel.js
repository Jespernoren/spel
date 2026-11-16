// =============================================================
//  MATTEKAMPEN 🚀 – familjens sifferquiz
//  Idé: Charlie och Beppe. Mamma och pappa får svåra tal, barnen enkla.
//  Svara rätt så åker din raket uppåt. 60 sekunder per omgång.
// =============================================================
import { FAMILJ, person, inloggad, loggaIn, bildSokvag, sparaRekord, hamtaRekord, familjensTopp } from '../../delat/familj.js';

// ---------- Lätt att leka med ----------
const SPEL_ID = 'mattekampen';
const SPELTID = 60;            // sekunder per omgång
const POANG_PER_RATT = 10;     // grundpoäng för ett rätt svar
const NIVA_BONUS = 5;          // extra poäng per nivå över 1
const SERIE_BONUS = 5;         // extra poäng från 3 rätt i rad
const NIVA_UPP_EFTER = 3;      // så många rätt i rad → svårare tal
const MAX_NIVA = 6;
const PAUS_EFTER_SVAR = 550;   // ms innan nästa tal visas
const RAKET_STEG = 34;         // px uppåt per rätt svar

// ---------- Hjälpare ----------
const $ = (id) => document.getElementById(id);
const slump = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const valj = (lista) => lista[Math.floor(Math.random() * lista.length)];
const blanda = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// =============================================================
//  TALEN – en nivåtrappa per spelare
//  Varje funktion ger { visa, saga, svar, (saker) }
// =============================================================
const SAKER = ['🍎', '⭐', '🐞', '🍓', '🎈', '🐟', '🌸', '🍪'];
const SAK_NAMN = { '🍎': 'äpplen', '⭐': 'stjärnor', '🐞': 'nyckelpigor', '🍓': 'jordgubbar', '🎈': 'ballonger', '🐟': 'fiskar', '🌸': 'blommor', '🍪': 'kakor' };

// Beppe (5 år): räkna saker, plus och minus med bilder
const BEPPE = [
  () => { const n = slump(1, 3), s = valj(SAKER); return { saker: s.repeat(n), visa: '', saga: `Hur många ${SAK_NAMN[s]}?`, svar: n, intervall: [1, 4] }; },
  () => { const n = slump(2, 5), s = valj(SAKER); return { saker: s.repeat(n), visa: '', saga: `Hur många ${SAK_NAMN[s]}?`, svar: n, intervall: [1, 6] }; },
  () => { const n = slump(3, 6), s = valj(SAKER); return { saker: s.repeat(n), visa: '', saga: `Räkna ${SAK_NAMN[s]}!`, svar: n, intervall: [1, 7] }; },
  () => { const a = slump(1, 3), b = 1, s = valj(SAKER); return { saker: `${s.repeat(a)} ➕ ${s}`, visa: `${a} + ${b}`, saga: `${a} plus ${b}`, svar: a + b, intervall: [1, 6] }; },
  () => { const a = slump(1, 3), b = slump(1, 2), s = valj(SAKER); return { saker: `${s.repeat(a)} ➕ ${s.repeat(b)}`, visa: `${a} + ${b}`, saga: `${a} plus ${b}`, svar: a + b, intervall: [1, 6] }; },
  () => { const a = slump(3, 5), b = slump(1, 2), s = valj(SAKER); return { saker: `${s.repeat(a - b)}${'💨'.repeat(b)}`, visa: `${a} − ${b}`, saga: `${a} minus ${b}`, svar: a - b, intervall: [0, 5] }; },
];

// Charlie (7 år, ettan): plus och minus upp till 20, sen tiotal
const CHARLIE = [
  () => { const a = slump(1, 6), b = slump(1, 10 - a); return tal(a, '+', b); },
  () => { const a = slump(4, 10), b = slump(1, a - 1); return tal(a, '−', b); },
  () => { const a = slump(11, 15), b = slump(1, 19 - a); return valj([tal(a, '+', b), tal(a + b, '−', b)]); },
  () => { const a = slump(6, 9), b = slump(11 - a, 9); return valj([tal(a, '+', b), tal(a + b, '−', b)]); },
  () => valj([
    () => { const a = slump(3, 9); return { visa: `${a} + ? = ${a + a}`, saga: `${a} plus vad blir ${a + a}`, svar: a }; },
    () => { const a = slump(4, 12), c = slump(a + 2, 20); return { visa: `${a} + ? = ${c}`, saga: `${a} plus vad blir ${c}`, svar: c - a }; },
    () => { const a = slump(2, 10); return { visa: `${a} + ${a}`, saga: `${a} plus ${a}`, svar: a * 2 }; },
  ])(),
  () => valj([
    () => { const a = slump(1, 6) * 10, b = slump(1, 9 - a / 10) * 10; return tal(a, '+', b); },
    () => { const a = slump(3, 9) * 10, b = slump(1, a / 10 - 1) * 10; return tal(a, '−', b); },
    () => { const a = slump(21, 45), b = slump(2, 9 - (a % 10) > 1 ? 9 - (a % 10) : 4); return tal(a, '+', b); },
  ])(),
];

// Mamma och pappa: svåra tal
const VUXEN = [
  () => { const a = slump(24, 79), b = slump(18, 69); return tal(a, '+', b); },
  () => { const a = slump(3, 9), b = slump(4, 9); return tal(a, '×', b); },
  () => { const a = slump(52, 98), b = slump(17, a - 11); return tal(a, '−', b); },
  () => { const a = slump(13, 49), b = slump(3, 9); return tal(a, '×', b); },
  () => valj([
    () => { const b = slump(3, 9), q = slump(6, 14); return tal(b * q, '÷', b); },
    () => { const p = valj([10, 20, 25, 50, 75]), t = slump(2, 16) * 20; return { visa: `${p} % av ${t}`, saga: `${p} procent av ${t}`, svar: (p * t) / 100 }; },
  ])(),
  () => valj([
    () => { const a = slump(12, 29), b = slump(11, 19); return tal(a, '×', b); },
    () => { const a = slump(11, 25); return { visa: `${a}²`, saga: `${a} i kvadrat`, svar: a * a }; },
    () => { const a = slump(120, 480), b = slump(150, 520); return tal(a, '+', b); },
  ])(),
];

const ORD = { '+': 'plus', '−': 'minus', '×': 'gånger', '÷': 'delat med' };
function tal(a, op, b) {
  const svar = op === '+' ? a + b : op === '−' ? a - b : op === '×' ? a * b : a / b;
  return { visa: `${a} ${op} ${b}`, saga: `${a} ${ORD[op]} ${b}`, svar };
}

const TRAPPA = { beppe: BEPPE, charlie: CHARLIE, mamma: VUXEN, pappa: VUXEN };

// Fyra svarsalternativ: rätt svar + rimliga felsvar i närheten
function alternativ(uppg) {
  const r = uppg.svar;
  const fel = new Set();
  const [lo, hi] = uppg.intervall || [0, Infinity];
  const spridning = r < 10 ? [1, 2, 3] : r < 30 ? [1, 2, 3, 10] : r < 200 ? [1, 2, 10, 5, 11] : [10, 1, 100, 20, 9];
  let forsok = 0;
  while (fel.size < 3 && forsok++ < 60) {
    const f = r + valj(spridning) * valj([-1, 1]);
    if (f !== r && f >= lo && f <= hi && f >= 0) fel.add(f);
  }
  for (let f = Math.max(0, lo); fel.size < 3; f++) if (f !== r) fel.add(f);
  return blanda([r, ...[...fel].slice(0, 3)]);
}

// =============================================================
//  LJUD OCH RÖST
// =============================================================
let ac;
function ton(f, langd = 0.12, typ = 'triangle', vol = 0.15, fordrojning = 0) {
  try {
    ac ||= new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + fordrojning;
    o.type = typ; o.frequency.setValueAtTime(f, t);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + langd);
    o.connect(g).connect(ac.destination); o.start(t); o.stop(t + langd);
  } catch {}
}
const ljudRatt = (serie) => { const bas = 520 + Math.min(serie, 8) * 40; ton(bas, 0.1); ton(bas * 1.5, 0.14, 'triangle', 0.15, 0.08); };
const ljudFel = () => ton(180, 0.25, 'sawtooth', 0.08);
const ljudSlut = () => [523, 659, 784, 1047].forEach((f, i) => ton(f, 0.3, 'triangle', 0.15, i * 0.12));

let svRost = null;
function hittaRost() { try { svRost = speechSynthesis.getVoices().find((v) => v.lang?.toLowerCase().startsWith('sv')) || null; } catch {} }
if ('speechSynthesis' in window) { hittaRost(); speechSynthesis.onvoiceschanged = hittaRost; }
function saga(text, fart = 1) {
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'sv-SE'; if (svRost) u.voice = svRost; u.rate = fart;
    speechSynthesis.speak(u);
  } catch {}
}

// =============================================================
//  SPELARE OCH SKÄRMAR
// =============================================================
let jag = inloggad();
const visa = (id) => ['spel', 'start', 'vem', 'slut'].forEach((s) => ($(s).hidden = s !== id));

function avatar(p, storlek) {
  return `<span class="avatar" style="--f:${p.farg};width:${storlek}px;height:${storlek}px;font-size:${storlek * 0.55}px">${p.emoji}<img src="${bildSokvag(p.id)}" alt="" onerror="this.remove()"></span>`;
}
const arBarn = () => jag && !jag.vuxen;

function visaVem() {
  visa('vem');
  $('familj').innerHTML = FAMILJ.map((p) => `<button data-id="${p.id}">${avatar(p, 86)}${p.namn}</button>`).join('');
  $('familj').querySelectorAll('button').forEach((b) => b.onclick = () => { jag = person(b.dataset.id); loggaIn(jag.id); ton(660); visaStart(); });
}

const START_TEXT = {
  beppe: 'Räkna saker och tryck på rätt siffra. Rösten läser upp! 🍎',
  charlie: 'Plus och minus! Svara rätt så åker raketen uppåt. ⭐',
  mamma: 'Svåra tal på tid. Fler rätt i rad = svårare tal och mer poäng.',
  pappa: 'Svåra tal på tid. Fler rätt i rad = svårare tal och mer poäng.',
};
function visaStart() {
  if (!jag) return visaVem();
  document.documentElement.style.setProperty('--f', jag.farg);
  $('pilot').innerHTML = `${jag.emoji}<img src="${bildSokvag(jag.id)}" alt="" onerror="this.remove()">`;
  const rek = hamtaRekord(SPEL_ID, jag.id);
  $('startSpelare').innerHTML = `${avatar(jag, 96)}<p style="margin-top:8px;font-weight:900;font-size:22px;color:#fff">${jag.namn}${rek ? ` · 🏆 ${rek}` : ''}</p>`;
  $('startText').textContent = START_TEXT[jag.id] + ` Du har ${SPELTID} sekunder.`;
  visa('start');
  satRaket(0);
}
$('startKnapp').onclick = () => starta();
$('bytKnapp').onclick = () => { ton(440); visaVem(); };
$('igenKnapp').onclick = () => { ton(660); visaStart(); };

// =============================================================
//  SPELET
// =============================================================
const S = { poang: 0, ratt: 0, fel: 0, serie: 0, niva: 1, tid: SPELTID, uppg: null, alt: [], lasa: false, igang: false, timer: null };

function starta() {
  Object.assign(S, { poang: 0, ratt: 0, fel: 0, serie: 0, niva: 1, tid: SPELTID, igang: true, lasa: false });
  $('spelare').innerHTML = avatar(jag, 46);
  $('poang').textContent = '0';
  $('serie').textContent = '';
  visa('spel');
  satRaket(0);
  ritaTid();
  if (arBarn()) saga(jag.id === 'beppe' ? 'Nu kör vi! Räkna!' : 'Nu kör vi!');
  nyUppgift();
  clearInterval(S.timer);
  S.timer = setInterval(() => {
    S.tid -= 1; ritaTid();
    if (S.tid <= 5 && S.tid > 0) ton(880, 0.06, 'square', 0.05);
    if (S.tid <= 0) slut();
  }, 1000);
}

function ritaTid() {
  $('tid').textContent = Math.max(0, S.tid);
  $('tidRing').style.strokeDashoffset = String(157 * (1 - Math.max(0, S.tid) / SPELTID));
  $('tidRing').style.stroke = S.tid <= 10 ? '#ff5a6e' : '#ffd43b';
}

function nyUppgift() {
  const trappa = TRAPPA[jag.id];
  let u;
  do { u = trappa[Math.min(S.niva, trappa.length) - 1](); } while (S.uppg && u.visa === S.uppg.visa && u.saker === S.uppg.saker);
  S.uppg = u;
  S.alt = alternativ(u);
  S.lasa = false;
  const harSaker = !!u.saker;
  $('fraga').innerHTML = `
    ${harSaker ? `<div class="saker">${u.saker}</div>` : ''}
    ${u.visa ? `<div class="tal">${u.visa}${harSaker ? '' : ' ='}</div>` : `<div class="liten">${u.saga}</div>`}
    ${arBarn() ? '<button class="lyssna" id="lyssna" aria-label="Lyssna">🔊</button>' : ''}`;
  if (arBarn()) {
    $('lyssna').onclick = () => saga(S.uppg.saga, 0.95);
    saga(u.saga, 0.95);
  }
  const prickar = jag.id === 'beppe';
  $('svar').innerHTML = S.alt.map((v, i) =>
    `<button data-i="${i}">${v}${prickar && v > 0 && v <= 7 ? `<span class="prickar">${'●'.repeat(v)}</span>` : ''}</button>`).join('');
  $('svar').querySelectorAll('button').forEach((b) => b.onclick = (e) => svara(+b.dataset.i, e));
}

function svara(i, e) {
  if (!S.igang || S.lasa) return;
  S.lasa = true;
  const knappar = $('svar').querySelectorAll('button');
  const rattIndex = S.alt.indexOf(S.uppg.svar);
  if (i === rattIndex) {
    S.ratt++; S.serie++;
    const fick = POANG_PER_RATT + NIVA_BONUS * (S.niva - 1) + (S.serie >= 3 ? SERIE_BONUS : 0);
    S.poang += fick;
    knappar[i].classList.add('ratt');
    ljudRatt(S.serie);
    plus(`+${fick}`, e);
    if (S.serie % NIVA_UPP_EFTER === 0 && S.niva < MAX_NIVA) S.niva++;
    $('serie').textContent = S.serie >= 3 ? `🔥 ${S.serie} i rad!` : '';
    satRaket(S.ratt);
  } else {
    S.fel++; S.serie = 0; S.niva = Math.max(1, S.niva - 1);
    knappar[i].classList.add('fel');
    knappar[rattIndex].classList.add('ratt');
    ljudFel();
    $('serie').textContent = '';
    if (arBarn()) saga(`Det blir ${S.uppg.svar}`);
  }
  $('poang').textContent = S.poang;
  setTimeout(() => { if (S.igang) nyUppgift(); }, i === rattIndex ? PAUS_EFTER_SVAR : PAUS_EFTER_SVAR * 2.2);
}

function plus(text, e) {
  const el = document.createElement('div');
  el.className = 'plus'; el.textContent = text;
  const x = e?.clientX ?? innerWidth / 2, y = e?.clientY ?? innerHeight / 2;
  el.style.left = `${x - 24}px`; el.style.top = `${y - 40}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

function satRaket(antal) {
  const max = innerHeight - 180;
  const h = Math.min(antal * RAKET_STEG, max);
  $('raket').style.transform = `translateY(${-h - 20}px)`;
  $('hojd').style.height = `${Math.min(100, (h / max) * 100)}%`;
  $('himmel').style.filter = `hue-rotate(${-antal * 4}deg)`;
}

function slut() {
  S.igang = false;
  clearInterval(S.timer);
  ljudSlut();
  const nytt = sparaRekord(SPEL_ID, jag.id, S.poang);
  visa('slut');
  $('slutPoang').textContent = S.poang;
  $('slutNytt').innerHTML = nytt && S.poang > 0 ? '<div class="nytt">⭐ Nytt rekord! ⭐</div>' : '';
  $('slutText').textContent = `${S.ratt} rätt${S.fel ? ` · ${S.fel} fel` : ''} · nådde nivå ${S.niva}`;
  const topp = familjensTopp(SPEL_ID);
  $('topplista').innerHTML = topp.length
    ? topp.map((p, i) => `<div class="${p.id === jag.id ? 'jag' : ''}">${['🥇', '🥈', '🥉', '4.'][i]} ${avatar(p, 32)} ${p.namn}<b>${p.poang}</b></div>`).join('')
    : '';
  if (nytt && S.poang > 0) { konfetti(); saga(`Nytt rekord, ${jag.namn}! ${S.poang} poäng!`); }
  else if (arBarn()) saga(`Bra kämpat! ${S.poang} poäng!`);
}

// ---------- Tangentbord (dator): 1–4 väljer svar ----------
addEventListener('keydown', (e) => {
  if (!$('spel').hidden && /^[1-4]$/.test(e.key)) svara(+e.key - 1);
  if (!$('start').hidden && (e.key === 'Enter' || e.key === ' ')) starta();
});

// ---------- Stjärnhimmel ----------
(function stjarnor() {
  const cv = $('stjarnor'), c = cv.getContext('2d');
  const rita = () => {
    cv.width = innerWidth; cv.height = innerHeight;
    for (let i = 0; i < 90; i++) {
      c.fillStyle = `rgba(255,255,255,${0.2 + Math.random() * 0.7})`;
      const r = Math.random() * 1.6;
      c.beginPath(); c.arc(Math.random() * cv.width, Math.random() * cv.height * 0.8, r, 0, 7); c.fill();
    }
  };
  rita(); addEventListener('resize', rita);
})();

// ---------- Konfetti ----------
function konfetti() {
  const cv = $('konfetti'), c = cv.getContext('2d');
  cv.width = innerWidth; cv.height = innerHeight;
  const f = ['#ffd43b', '#ff4fa3', '#3de3ff', '#9b5cff', '#4be38a'];
  const b = Array.from({ length: 120 }, () => ({ x: Math.random() * cv.width, y: -Math.random() * 300, vx: (Math.random() - .5) * 3, vy: 2 + Math.random() * 4, r: Math.random() * 6, s: 6 + Math.random() * 7, f: valj(f) }));
  const t0 = performance.now();
  (function steg(t) {
    c.clearRect(0, 0, cv.width, cv.height);
    for (const p of b) { p.x += p.vx; p.y += p.vy; p.r += .1; c.save(); c.translate(p.x, p.y); c.rotate(p.r); c.fillStyle = p.f; c.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); c.restore(); }
    if (t - t0 < 3500) requestAnimationFrame(steg); else c.clearRect(0, 0, cv.width, cv.height);
  })(t0);
}

// ---------- Start ----------
if (jag) visaStart(); else visaVem();

// Testkrok
window.__mattekampen = { S, svara, starta, slut, get jag() { return jag; }, satJag: (id) => { jag = person(id); loggaIn(id); visaStart(); }, TRAPPA, alternativ };
