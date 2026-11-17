// =============================================================
//  KRANGS KORVJAKT 🐶🌭 – klassiska "Snake" med hunden Krang
//  Svep åt det håll Krang ska springa. Ät korvar och bli längre!
//  Beppe: Krang kan inte krocka, 60 sekunder på sig.
//  Charlie: springer ut på ena sidan och in på den andra.
//  Mamma/pappa: väggarna tar stopp och det går allt fortare.
// =============================================================
import { skapaRam, avatar, ton, saga, buu } from '../../delat/familjespel.js';

// ---------- Lätt att leka med ----------
const SPEL_ID = 'krangs-korvjakt';
const KOLUMNER = 11;                 // rutor i bredd
const INSTALLNING = {
  beppe:   { fart: 3.6, okning: 0.05, vaggar: false, krock: false, tid: 60 },
  charlie: { fart: 5.0, okning: 0.12, vaggar: false, krock: true,  tid: 0 },
  vuxen:   { fart: 6.5, okning: 0.2,  vaggar: true,  krock: true,  tid: 0 },
};
const MAX_FART = 13;                 // steg per sekund
const POANG_KORV = 10, POANG_GULD = 30;
const GULD_CHANS = 0.12, GULD_SEKUNDER = 6;
const SVEP_MIN = 18;                 // px innan ett svep räknas

// ---------- Rityta ----------
const $ = (id) => document.getElementById(id);
const duk = $('duk'), ctx = duk.getContext('2d');
let RUTA = 30, RADER = 15, dpr = 1;
function storlek() {
  dpr = Math.min(2, devicePixelRatio || 1);
  const topp = 70, botten = 40;
  const maxB = Math.min(innerWidth - 16, 520), maxH = innerHeight - topp - botten;
  RUTA = Math.floor(maxB / KOLUMNER);
  RADER = Math.max(10, Math.min(20, Math.floor(maxH / RUTA)));
  duk.width = KOLUMNER * RUTA * dpr; duk.height = RADER * RUTA * dpr;
  duk.style.width = `${KOLUMNER * RUTA}px`; duk.style.height = `${RADER * RUTA}px`;
  duk.style.top = `${topp + Math.max(0, (maxH - RADER * RUTA) / 2)}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
storlek();

// ---------- Tillstånd ----------
const RIKTNING = { upp: [0, -1], ner: [0, 1], vanster: [-1, 0], hoger: [1, 0] };
const S = { igang: false, kropp: [], rikt: [1, 0], ko: [], korv: null, guld: null, poang: 0, korvar: 0, fart: 0, inst: null, ack: 0, start: 0, dog: false, mun: 0 };

const ram = skapaRam({
  id: SPEL_ID,
  titel: 'Krangs korvjakt 🐶',
  startText: (jag) => {
    const i = INSTALLNING[jag.id] || INSTALLNING.vuxen;
    if (jag.id === 'beppe') return `Svep med fingret så springer Krang åt det hållet. Ät så många korvar du kan på ${i.tid} sekunder! 🌭`;
    if (!i.vaggar) return 'Svep för att styra Krang. Ät korvar och bli längre, men spring inte in i dig själv! Kanterna tar dig till andra sidan.';
    return 'Svep för att styra. Väggarna och din egen svans tar stopp, och farten ökar för varje korv. 🌭';
  },
  onStart: starta,
  onMeny: () => { S.igang = false; $('topp').hidden = true; $('hjalp').textContent = ''; },
});

function starta(jag) {
  S.inst = INSTALLNING[jag.id] || INSTALLNING.vuxen;
  storlek();
  const mittY = Math.floor(RADER / 2);
  Object.assign(S, { igang: true, kropp: [[4, mittY], [3, mittY], [2, mittY]], rikt: [1, 0], ko: [], poang: 0, korvar: 0, fart: S.inst.fart, ack: 0, start: performance.now(), dog: false, guld: null });
  S.korv = nyPlats();
  $('topp').hidden = false;
  $('spelare').innerHTML = avatar(jag, 38);
  $('hjalp').textContent = '👆 Svep för att styra';
  ritaInfo();
  if (!jag.vuxen) saga('Spring Krang, spring!');
}

function nyPlats() {
  for (let f = 0; f < 200; f++) {
    const p = [Math.floor(Math.random() * KOLUMNER), Math.floor(Math.random() * RADER)];
    if (!S.kropp.some(([x, y]) => x === p[0] && y === p[1]) && !(S.korv && S.korv[0] === p[0] && S.korv[1] === p[1])) return p;
  }
  return [0, 0];
}

function ritaInfo() {
  $('poang').textContent = `${S.korvar} 🌭`;
  if (S.inst.tid) {
    const kvar = Math.max(0, Math.ceil(S.inst.tid - (performance.now() - S.start) / 1000));
    $('info').textContent = `⏱ ${kvar} s`;
  } else $('info').textContent = `${S.poang} p`;
}

// ---------- Styrning ----------
function styr(namn) {
  if (!S.igang) return;
  const ny = RIKTNING[namn];
  const sista = S.ko.length ? S.ko[S.ko.length - 1] : S.rikt;
  if (ny[0] === -sista[0] && ny[1] === -sista[1]) return;   // inte rakt bakåt
  if (ny[0] === sista[0] && ny[1] === sista[1]) return;
  if (S.ko.length < 2) S.ko.push(ny);
  $('hjalp').textContent = '';
}
let svepStart = null;
addEventListener('pointerdown', (e) => { if (S.igang) { svepStart = [e.clientX, e.clientY]; } }, { passive: true });
addEventListener('pointermove', (e) => {
  if (!svepStart) return;
  const dx = e.clientX - svepStart[0], dy = e.clientY - svepStart[1];
  if (Math.abs(dx) < SVEP_MIN && Math.abs(dy) < SVEP_MIN) return;
  styr(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'hoger' : 'vanster') : (dy > 0 ? 'ner' : 'upp'));
  svepStart = [e.clientX, e.clientY];           // kan svepa vidare utan att lyfta fingret
}, { passive: true });
addEventListener('pointerup', () => { svepStart = null; });
addEventListener('pointercancel', () => { svepStart = null; });
addEventListener('keydown', (e) => {
  const k = { ArrowUp: 'upp', ArrowDown: 'ner', ArrowLeft: 'vanster', ArrowRight: 'hoger', w: 'upp', s: 'ner', a: 'vanster', d: 'hoger' }[e.key];
  if (k) { e.preventDefault(); styr(k); }
});

// ---------- Ett steg ----------
function steg() {
  if (S.ko.length) S.rikt = S.ko.shift();
  const [hx, hy] = S.kropp[0];
  let nx = hx + S.rikt[0], ny = hy + S.rikt[1];
  if (S.inst.vaggar) {
    if (nx < 0 || ny < 0 || nx >= KOLUMNER || ny >= RADER) return doDog('Krang sprang in i staketet!');
  } else { nx = (nx + KOLUMNER) % KOLUMNER; ny = (ny + RADER) % RADER; }
  const ater = S.korv && nx === S.korv[0] && ny === S.korv[1];
  const guldAt = S.guld && nx === S.guld.p[0] && ny === S.guld.p[1];
  // svansen flyttar sig samtidigt, så den sista biten räknas inte som krock
  const kropp = ater || guldAt ? S.kropp : S.kropp.slice(0, -1);
  if (S.inst.krock && kropp.some(([x, y]) => x === nx && y === ny)) return doDog('Krang bet sig i svansen!');
  S.kropp.unshift([nx, ny]);
  if (ater || guldAt) {
    S.korvar++; S.mun = 1;
    S.poang += guldAt ? POANG_GULD : POANG_KORV;
    if (guldAt) { S.guld = null; ton(1175, 0.1); ton(1568, 0.14, 'triangle', 0.12, 0.08); }
    else { S.korv = nyPlats(); ton(523 + Math.min(S.korvar, 20) * 25, 0.08); ton(784, 0.08, 'triangle', 0.1, 0.05); }
    S.fart = Math.min(MAX_FART, S.fart + S.inst.okning * (S.fart < 8 ? 3 : 1));
    if (!S.guld && Math.random() < GULD_CHANS) S.guld = { p: nyPlats(), till: performance.now() + GULD_SEKUNDER * 1000 };
    navigator.vibrate?.(15);
  } else S.kropp.pop();
  ritaInfo();
}

function doDog(text) {
  S.igang = false; S.dog = true;
  buu(); navigator.vibrate?.(150);
  setTimeout(() => {
    $('topp').hidden = true;
    ram.slut(S.poang, `${S.korvar} korvar · ${text}`, 'Aj då! 🐶');
  }, 900);
}

function tidSlut() {
  S.igang = false;
  $('topp').hidden = true;
  ram.slut(S.poang, `Krang åt ${S.korvar} korvar!`, 'Tiden är slut!');
}

// ---------- Rita ----------
function rutaXY([x, y]) { return [x * RUTA + RUTA / 2, y * RUTA + RUTA / 2]; }
function ritaGras() {
  for (let y = 0; y < RADER; y++) for (let x = 0; x < KOLUMNER; x++) {
    ctx.fillStyle = (x + y) % 2 ? '#7fcf5a' : '#8ad965';
    ctx.fillRect(x * RUTA, y * RUTA, RUTA, RUTA);
  }
  if (S.inst?.vaggar) { ctx.strokeStyle = '#a0662c'; ctx.lineWidth = 6; ctx.strokeRect(3, 3, KOLUMNER * RUTA - 6, RADER * RUTA - 6); }
}
function ritaKorv(p, t, guld) {
  const [cx, cy] = rutaXY(p);
  const s = RUTA * (0.42 + Math.sin(t * 6) * 0.03);
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(-0.5);
  if (guld) { ctx.shadowColor = '#ffd43b'; ctx.shadowBlur = 14; }
  ctx.fillStyle = guld ? '#ffd43b' : '#f2c27b';                 // bröd
  ctx.beginPath(); ctx.ellipse(0, s * 0.18, s * 1.05, s * 0.42, 0, 0, 7); ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = guld ? '#e0a800' : '#c2410c';                 // korv
  ctx.beginPath(); ctx.ellipse(0, -s * 0.02, s * 1.15, s * 0.3, 0, 0, 7); ctx.fill();
  ctx.strokeStyle = '#ffd43b'; ctx.lineWidth = Math.max(1.5, s * 0.1); ctx.beginPath();   // senap
  ctx.moveTo(-s * 0.8, -s * 0.05); for (let i = 0; i < 6; i++) ctx.lineTo(-s * 0.8 + i * s * 0.32, -s * 0.05 + (i % 2 ? -s * 0.12 : s * 0.08)); ctx.stroke();
  ctx.restore();
}
function ritaKrang(t) {
  const n = S.kropp.length;
  // kropp (från svansen till halsen)
  for (let i = n - 1; i >= 1; i--) {
    const [cx, cy] = rutaXY(S.kropp[i]);
    const r = RUTA * (0.43 - (i / n) * 0.1);
    ctx.fillStyle = i % 3 === 0 ? '#8a5a2b' : '#a0703e';
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fill();
    if (i % 3 === 0) { ctx.fillStyle = '#6b4220'; ctx.beginPath(); ctx.arc(cx + r * 0.2, cy - r * 0.15, r * 0.3, 0, 7); ctx.fill(); }
  }
  // svans
  if (n > 1) {
    const [tx, ty] = rutaXY(S.kropp[n - 1]); const [px, py] = rutaXY(S.kropp[n - 2]);
    let dx = tx - px, dy = ty - py; const l = Math.hypot(dx, dy) || 1; dx /= l; dy /= l;
    if (l < RUTA * 1.5) {
      ctx.strokeStyle = '#8a5a2b'; ctx.lineWidth = RUTA * 0.16; ctx.lineCap = 'round';
      const v = Math.sin(t * 14) * 0.5;
      ctx.beginPath(); ctx.moveTo(tx, ty); ctx.quadraticCurveTo(tx + dx * RUTA * 0.5 - dy * RUTA * v * 0.4, ty + dy * RUTA * 0.5 + dx * RUTA * v * 0.4, tx + dx * RUTA * 0.7, ty + dy * RUTA * 0.7); ctx.stroke();
    }
  }
  // huvud
  const [hx, hy] = rutaXY(S.kropp[0]);
  const vinkel = Math.atan2(S.rikt[1], S.rikt[0]);
  const R = RUTA * 0.55;
  ctx.save(); ctx.translate(hx, hy); ctx.rotate(vinkel);
  ctx.fillStyle = '#6b4220';                                       // öron
  ctx.beginPath(); ctx.ellipse(-R * 0.35, -R * 0.82, R * 0.32, R * 0.5, -0.4, 0, 7); ctx.fill();
  ctx.beginPath(); ctx.ellipse(-R * 0.35, R * 0.82, R * 0.32, R * 0.5, 0.4, 0, 7); ctx.fill();
  ctx.fillStyle = '#b8864e';                                       // huvud
  ctx.beginPath(); ctx.arc(0, 0, R * 0.8, 0, 7); ctx.fill();
  ctx.fillStyle = '#d9b07a';                                       // nos
  ctx.beginPath(); ctx.ellipse(R * 0.55, 0, R * 0.45, R * 0.38, 0, 0, 7); ctx.fill();
  ctx.fillStyle = '#2a1c0e';
  ctx.beginPath(); ctx.arc(R * 0.92, 0, R * 0.14, 0, 7); ctx.fill();          // nos-tipp
  ctx.beginPath(); ctx.arc(R * 0.15, -R * 0.38, R * 0.12, 0, 7); ctx.fill();  // ögon
  ctx.beginPath(); ctx.arc(R * 0.15, R * 0.38, R * 0.12, 0, 7); ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.arc(R * 0.19, -R * 0.42, R * 0.04, 0, 7); ctx.fill();
  ctx.beginPath(); ctx.arc(R * 0.19, R * 0.34, R * 0.04, 0, 7); ctx.fill();
  if (S.mun > 0 || S.dog) {                                        // tunga / nöjd mun
    ctx.fillStyle = S.dog ? '#7a3b1a' : '#e57f8a';
    ctx.beginPath(); ctx.ellipse(R * 0.85, 0, R * 0.22, R * 0.14, 0, 0, 7); ctx.fill();
  }
  ctx.restore();
}

// ---------- Loop ----------
let forra = performance.now();
function loop(nu) {
  const dt = Math.min(0.1, (nu - forra) / 1000); forra = nu;
  ctx.clearRect(0, 0, duk.width, duk.height);
  ritaGras();
  if (S.kropp.length) {
    if (S.igang) {
      S.ack += dt;
      const intervall = 1 / S.fart;
      while (S.ack >= intervall && S.igang) { S.ack -= intervall; steg(); }
      if (S.inst.tid) { ritaInfo(); if ((nu - S.start) / 1000 >= S.inst.tid) tidSlut(); }
      if (S.guld && nu > S.guld.till) S.guld = null;
    }
    S.mun = Math.max(0, S.mun - dt * 3);
    if (S.korv) ritaKorv(S.korv, nu / 1000, false);
    if (S.guld) ritaKorv(S.guld.p, nu / 1000, true);
    ritaKrang(nu / 1000);
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
addEventListener('resize', () => { if (!S.igang) storlek(); });

// Testkrok
window.__krangskorvjakt = { S, styr, steg, ram };
