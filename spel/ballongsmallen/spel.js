// =============================================================
//  BALLONGSMÄLLEN 🎈 – smäll rätt ballonger på 60 sekunder
//  Beppe: rätt färg · Charlie: rätt bokstav · Mamma/pappa: rätt svar på ett tal
// =============================================================
import { FAMILJ, person, inloggad, loggaIn, bildSokvag, sparaRekord, hamtaRekord, familjensTopp } from '../../delat/familj.js';

// ---------- Lätt att leka med ----------
const SPEL_ID = 'ballongsmallen';
const SPELTID = 60;              // sekunder per omgång
const POANG_TRAFF = 10;          // rätt ballong
const POANG_GULD = 25;           // guldballong
const SERIE_BONUS = [0, 0, 0, 5, 5, 5, 10];   // extra poäng beroende på träffar i rad (index = serie, sista gäller sen)
const TRAFFAR_PER_UPPDRAG = 5;   // barnen: nytt uppdrag efter så här många träffar
const TRAFFAR_PER_NIVA = 6;      // svårare (snabbare, fler ballonger) efter så här många träffar
const MAX_NIVA = 6;
const GULD_CHANS = 0.035;        // chans att en ny ballong är guld
const MAL_ANDEL = 0.4;           // ungefär så stor andel av ballongerna är rätt
const BAS_FART = 70;             // px per sekund på nivå 1
const FART_PER_NIVA = 18;
const BAS_INTERVALL = 0.9;       // sekunder mellan nya ballonger på nivå 1
const INTERVALL_PER_NIVA = 0.08;
const BALLONG_STORLEK = 44;      // radie i px (mindre på små skärmar)

// ---------- Hjälpare ----------
const $ = (id) => document.getElementById(id);
const slump = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const valj = (a) => a[Math.floor(Math.random() * a.length)];

// =============================================================
//  UPPDRAG per spelare
// =============================================================
const FARGER = [
  { namn: 'röda', farg: '#ff4a5a' }, { namn: 'blå', farg: '#3d8bff' }, { namn: 'gula', farg: '#ffd21f' },
  { namn: 'gröna', farg: '#3fcf6a' }, { namn: 'lila', farg: '#a05cff' }, { namn: 'orange', farg: '#ff9a2e' },
];
const BOKSTAVER = 'ABDEFGHKLMNOPRSTUVÅÄÖ'.split(''); // inget I (ser ut som ett streck)
const LIKNANDE = { B: 'DPR', D: 'BOP', P: 'BRD', R: 'PBK', E: 'FB', F: 'EP', M: 'NW', N: 'MH', O: 'QDÖ', Å: 'AÄ', Ä: 'AÅÖ', Ö: 'OÄ', A: 'ÅÄ', L: 'TE', U: 'VO', V: 'UY' };

// Varje uppdrag: { rubrik (html), saga (text), arMal(ballong), nyBallong() → { farg, text } }
function uppdragBeppe(niva) {
  const antal = Math.min(3 + niva, FARGER.length);           // fler färger på högre nivå
  const palett = FARGER.slice(0, antal);
  const mal = valj(palett);
  return {
    rubrik: `Smäll <span class="malprick" style="background:${mal.farg}"></span> ${mal.namn.toUpperCase()}`,
    saga: `Smäll de ${mal.namn}!`,
    arMal: (b) => b.farg === mal.farg,
    nyBallong: (mal_) => ({ farg: mal_ ? mal.farg : valj(palett.filter((f) => f !== mal)).farg, text: '' }),
  };
}
function uppdragCharlie(niva) {
  const mal = valj(BOKSTAVER);
  const lurar = (niva >= 3 && LIKNANDE[mal]) ? LIKNANDE[mal].split('') : [];
  const andra = BOKSTAVER.filter((b) => b !== mal);
  return {
    rubrik: `Smäll alla <span class="malbokstav">${mal}</span>`,
    saga: `Smäll alla ${mal}`,
    arMal: (b) => b.text === mal,
    nyBallong: (mal_) => ({ farg: valj(FARGER).farg, text: mal_ ? mal : (lurar.length && Math.random() < 0.5 ? valj(lurar) : valj(andra)) }),
  };
}
function uppdragVuxen(niva) {
  const typ = valj(niva <= 2 ? ['x', '+'] : niva <= 4 ? ['x', '+', '−', '÷'] : ['x', '−', '÷', 'xx']);
  let visa, svar;
  if (typ === 'x') { const a = slump(3, 9), b = slump(4, 9); visa = `${a} × ${b}`; svar = a * b; }
  else if (typ === '+') { const a = slump(18, 69), b = slump(13, 49); visa = `${a} + ${b}`; svar = a + b; }
  else if (typ === '−') { const a = slump(52, 98), b = slump(14, a - 9); visa = `${a} − ${b}`; svar = a - b; }
  else if (typ === '÷') { const b = slump(3, 9), q = slump(6, 13); visa = `${b * q} ÷ ${b}`; svar = q; }
  else { const a = slump(12, 19), b = slump(3, 9); visa = `${a} × ${b}`; svar = a * b; }
  const nara = () => { let f; do { f = svar + valj([-10, -2, -1, 1, 2, 10, 11, -11, 9]); } while (f === svar || f < 0); return f; };
  return {
    rubrik: `${visa} = ?`,
    saga: null,
    arMal: (b) => b.text === String(svar),
    nyBallong: (mal_) => ({ farg: valj(FARGER).farg, text: String(mal_ ? svar : nara()) }),
    ettSvar: true,      // byt tal direkt efter rätt träff
  };
}
const UPPDRAG = { beppe: uppdragBeppe, charlie: uppdragCharlie, mamma: uppdragVuxen, pappa: uppdragVuxen };

// =============================================================
//  LJUD OCH RÖST
// =============================================================
let ac;
function ton(f, langd = 0.12, typ = 'triangle', vol = 0.15, fordrojning = 0, glid = 0) {
  try {
    ac ||= new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + fordrojning;
    o.type = typ; o.frequency.setValueAtTime(f, t);
    if (glid) o.frequency.exponentialRampToValueAtTime(Math.max(30, f + glid), t + langd);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + langd);
    o.connect(g).connect(ac.destination); o.start(t); o.stop(t + langd);
  } catch {}
}
function small(serie) { // "pang" = kort brus + ton
  try {
    ac ||= new (window.AudioContext || window.webkitAudioContext)();
    const len = 0.08, buf = ac.createBuffer(1, ac.sampleRate * len, ac.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) ** 2;
    const s = ac.createBufferSource(), g = ac.createGain(); s.buffer = buf; g.gain.value = 0.35;
    s.connect(g).connect(ac.destination); s.start();
  } catch {}
  ton(600 + Math.min(serie, 10) * 45, 0.12, 'triangle', 0.12, 0.02);
}
const pys = () => ton(320, 0.35, 'sine', 0.12, 0, -220);
const guldLjud = () => [784, 988, 1175, 1568].forEach((f, i) => ton(f, 0.18, 'triangle', 0.12, i * 0.06));
const slutLjud = () => [523, 659, 784, 1047].forEach((f, i) => ton(f, 0.3, 'triangle', 0.15, i * 0.12));

let svRost = null;
const hittaRost = () => { try { svRost = speechSynthesis.getVoices().find((v) => v.lang?.toLowerCase().startsWith('sv')) || null; } catch {} };
if ('speechSynthesis' in window) { hittaRost(); speechSynthesis.onvoiceschanged = hittaRost; }
function saga(text) {
  try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'sv-SE'; if (svRost) u.voice = svRost; speechSynthesis.speak(u); } catch {}
}

// =============================================================
//  RITYTAN
// =============================================================
const duk = $('duk'), ctx = duk.getContext('2d');
let B = 0, H = 0, dpr = 1, radie = BALLONG_STORLEK;
function storlek() {
  dpr = Math.min(2, devicePixelRatio || 1);
  B = innerWidth; H = innerHeight;
  duk.width = B * dpr; duk.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  radie = Math.max(34, Math.min(BALLONG_STORLEK, B / 9));
}
storlek(); addEventListener('resize', storlek);

// moln i bakgrunden
const moln = Array.from({ length: 5 }, (_, i) => ({ x: Math.random() * 500, y: 80 + i * 130 + Math.random() * 40, s: 0.6 + Math.random() * 0.8, v: 6 + Math.random() * 10 }));
function ritaMoln(dt) {
  ctx.fillStyle = 'rgba(255,255,255,.8)';
  for (const m of moln) {
    m.x += m.v * dt; if (m.x > B + 120) m.x = -160;
    const { x, y, s } = m;
    ctx.beginPath();
    ctx.arc(x, y, 26 * s, 0, 7); ctx.arc(x + 30 * s, y - 12 * s, 32 * s, 0, 7); ctx.arc(x + 64 * s, y, 24 * s, 0, 7);
    ctx.fill();
  }
}

function ljusare(hex, mangd) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.min(255, (n >> 16) + mangd), g = Math.min(255, ((n >> 8) & 255) + mangd), b = Math.min(255, (n & 255) + mangd);
  return `rgb(${r},${g},${b})`;
}

function ritaBallong(b, t) {
  const sv = Math.sin(t * 2 + b.fas) * 4;
  const x = b.x + sv, y = b.y;
  const r = b.r * (b.krymper ?? 1);
  // snöre
  ctx.strokeStyle = 'rgba(29,21,80,.45)'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(x, y + r * 1.18);
  ctx.bezierCurveTo(x - 8, y + r * 1.6, x + 8, y + r * 2.0, x - 2, y + r * 2.5); ctx.stroke();
  // kropp
  const farg = b.guld ? '#ffcf1f' : b.farg;
  const grad = ctx.createRadialGradient(x - r * 0.35, y - r * 0.45, r * 0.1, x, y, r * 1.2);
  grad.addColorStop(0, ljusare(farg, 90)); grad.addColorStop(0.5, farg); grad.addColorStop(1, ljusare(farg, -40));
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.ellipse(x, y, r * 0.88, r * 1.08, 0, 0, Math.PI * 2); ctx.fill();
  // knut
  ctx.fillStyle = ljusare(farg, -30);
  ctx.beginPath(); ctx.moveTo(x - 6, y + r * 1.16); ctx.lineTo(x + 6, y + r * 1.16); ctx.lineTo(x, y + r * 1.04); ctx.fill();
  // glans
  ctx.fillStyle = 'rgba(255,255,255,.55)';
  ctx.beginPath(); ctx.ellipse(x - r * 0.38, y - r * 0.45, r * 0.14, r * 0.26, -0.5, 0, 7); ctx.fill();
  // text
  if (b.text || b.guld) {
    ctx.font = `900 ${Math.round(r * (b.text.length > 2 ? 0.62 : 0.85))}px system-ui, sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.lineWidth = 5; ctx.strokeStyle = 'rgba(29,21,80,.55)'; ctx.fillStyle = '#fff';
    const txt = b.guld ? '★' : b.text;
    ctx.strokeText(txt, x, y + 2); ctx.fillText(txt, x, y + 2);
  }
}

// =============================================================
//  SPELARE OCH SKÄRMAR
// =============================================================
let jag = inloggad();
const visaMeny = (id) => ['start', 'vem', 'slut'].forEach((s) => ($(s).hidden = s !== id));
function avatar(p, s) {
  return `<span class="avatar" style="--f:${p.farg};width:${s}px;height:${s}px;font-size:${s * 0.55}px">${p.emoji}<img src="${bildSokvag(p.id)}" alt="" onerror="this.remove()"></span>`;
}
const START_TEXT = {
  beppe: 'Smäll ballongerna med rätt färg! Rösten säger vilken. 🎈',
  charlie: 'Smäll ballongerna med rätt bokstav. Se upp för lurbokstäver! 🔤',
  mamma: 'Smäll ballongen med rätt svar. Nytt tal efter varje träff, och allt går fortare.',
  pappa: 'Smäll ballongen med rätt svar. Nytt tal efter varje träff, och allt går fortare.',
};
function visaVem() {
  visaMeny('vem'); $('hud').hidden = true;
  $('familj').innerHTML = FAMILJ.map((p) => `<button data-id="${p.id}">${avatar(p, 86)}${p.namn}</button>`).join('');
  $('familj').querySelectorAll('button').forEach((b) => b.onclick = () => { jag = person(b.dataset.id); loggaIn(jag.id); ton(660); visaStart(); });
}
function visaStart() {
  if (!jag) return visaVem();
  $('hud').hidden = true;
  const rek = hamtaRekord(SPEL_ID, jag.id);
  $('startSpelare').innerHTML = `${avatar(jag, 96)}<p style="margin-top:8px;font-weight:900;font-size:22px">${jag.namn}${rek ? ` · 🏆 ${rek}` : ''}</p>`;
  $('startText').textContent = `${START_TEXT[jag.id]} Du har ${SPELTID} sekunder.`;
  visaMeny('start');
}
$('startKnapp').onclick = () => starta();
$('bytKnapp').onclick = () => { ton(440); visaVem(); };
$('igenKnapp').onclick = () => { ton(660); visaStart(); };

// =============================================================
//  SPELET
// =============================================================
const S = { igang: false, poang: 0, traffar: 0, fel: 0, serie: 0, basta: 0, niva: 1, tid: SPELTID, uppdrag: null, uppdragTraffar: 0, ballonger: [], bitar: [], texter: [], tillNasta: 0 };

function starta() {
  Object.assign(S, { igang: true, poang: 0, traffar: 0, fel: 0, serie: 0, basta: 0, niva: 1, tid: SPELTID, ballonger: [], bitar: [], texter: [], tillNasta: 0.2 });
  visaMeny(null); $('hud').hidden = false;
  $('spelare').innerHTML = avatar(jag, 44);
  $('poang').textContent = '0'; $('serie').textContent = '';
  nyttUppdrag();
  // några ballonger direkt så att det händer något
  for (let i = 0; i < 4; i++) { skapaBallong(i < 2); S.ballonger.at(-1).y = H * (0.55 + i * 0.12); }
}

function nyttUppdrag() {
  S.uppdrag = UPPDRAG[jag.id](S.niva);
  S.uppdragTraffar = 0;
  const el = $('uppdrag');
  el.innerHTML = S.uppdrag.rubrik;
  el.classList.remove('nytt'); void el.offsetWidth; el.classList.add('nytt');
  if (S.uppdrag.saga) saga(S.uppdrag.saga);
  // färgen/bokstaven i luften byter inte: gamla ballonger får vara kvar men räknas efter nya uppdraget
}

function skapaBallong(tvingaMal) {
  const mal = tvingaMal ?? Math.random() < MAL_ANDEL;
  const guld = !tvingaMal && Math.random() < GULD_CHANS;
  const { farg, text } = S.uppdrag.nyBallong(mal);
  const fart = (BAS_FART + FART_PER_NIVA * (S.niva - 1)) * (0.8 + Math.random() * 0.45);
  // hitta en x-plats som inte krockar med de senaste ballongerna
  let x, forsok = 0;
  do { x = radie + Math.random() * (B - radie * 2); } while (forsok++ < 8 && S.ballonger.some((b) => b.y > H - radie * 3 && Math.abs(b.x - x) < radie * 1.9));
  S.ballonger.push({ x, y: H + radie * 1.3, r: radie * (0.92 + Math.random() * 0.16), v: fart, farg, text, guld, fas: Math.random() * 6 });
}

function tryck(px, py) {
  if (!S.igang) return;
  // översta ballongen (ritas sist) först
  for (let i = S.ballonger.length - 1; i >= 0; i--) {
    const b = S.ballonger[i];
    if (b.krymper != null) continue;
    const dx = (px - b.x) / (b.r * 0.95), dy = (py - b.y) / (b.r * 1.15);
    if (dx * dx + dy * dy <= 1.25) { traffa(b, i); return; }
  }
}

function traffa(b, i) {
  if (b.guld) {
    S.ballonger.splice(i, 1);
    S.poang += POANG_GULD; guldLjud(); explodera(b, '#ffcf1f', 26); flytText(`+${POANG_GULD} ⭐`, b.x, b.y, '#c99400');
  } else if (S.uppdrag.arMal(b)) {
    S.ballonger.splice(i, 1);
    S.serie++; S.traffar++; S.uppdragTraffar++; S.basta = Math.max(S.basta, S.serie);
    const fick = POANG_TRAFF + SERIE_BONUS[Math.min(S.serie, SERIE_BONUS.length - 1)];
    S.poang += fick;
    small(S.serie); explodera(b, b.farg, 18); flytText(`+${fick}`, b.x, b.y);
    $('serie').textContent = S.serie >= 3 ? `🔥 ${S.serie} i rad!` : '';
    if (S.traffar % TRAFFAR_PER_NIVA === 0 && S.niva < MAX_NIVA) S.niva++;
    if (S.uppdrag.ettSvar || S.uppdragTraffar >= TRAFFAR_PER_UPPDRAG) {
      // ta bort gamla rätta ballonger så att det nya uppdraget blir tydligt
      nyttUppdrag();
      for (const o of S.ballonger) if (!o.guld && !o.krymper) { const ny = S.uppdrag.nyBallong(false); if (S.uppdrag.arMal(o)) { o.farg = ny.farg; o.text = ny.text; } }
      skapaBallong(true);
    }
  } else {
    // fel ballong: den pyser ihop, inga minuspoäng
    b.krymper = 1; S.serie = 0; S.fel++;
    pys(); $('serie').textContent = '';
    navigator.vibrate?.(60);
  }
  $('poang').textContent = S.poang;
}

function explodera(b, farg, antal) {
  for (let k = 0; k < antal; k++) {
    const vinkel = Math.random() * Math.PI * 2, fart = 120 + Math.random() * 260;
    S.bitar.push({ x: b.x, y: b.y, vx: Math.cos(vinkel) * fart, vy: Math.sin(vinkel) * fart - 60, liv: 0.7, farg: Math.random() < 0.3 ? '#fff' : farg, s: 4 + Math.random() * 6, rot: Math.random() * 6 });
  }
}
function flytText(text, x, y, farg = '#1d1550') { S.texter.push({ text, x, y, liv: 0.9, farg }); }

function slut() {
  S.igang = false;
  slutLjud();
  $('hud').hidden = true;
  const nytt = sparaRekord(SPEL_ID, jag.id, S.poang);
  visaMeny('slut');
  $('slutPoang').textContent = S.poang;
  $('slutNytt').innerHTML = nytt && S.poang > 0 ? '<div class="nytt-rekord">⭐ Nytt rekord! ⭐</div>' : '';
  $('slutText').textContent = `${S.traffar} träffar · bästa serie ${S.basta}${S.fel ? ` · ${S.fel} fel` : ''}`;
  const topp = familjensTopp(SPEL_ID);
  $('topplista').innerHTML = topp.map((p, i) => `<div class="${p.id === jag.id ? 'jag' : ''}">${['🥇', '🥈', '🥉', '4.'][i]} ${avatar(p, 32)} ${p.namn}<b>${p.poang}</b></div>`).join('');
  if (nytt && S.poang > 0) { saga(`Nytt rekord, ${jag.namn}! ${S.poang} poäng!`); for (let i = 0; i < 6; i++) setTimeout(() => explodera({ x: Math.random() * B, y: Math.random() * H * 0.6 }, valj(FARGER).farg, 24), i * 250); }
  else if (!jag.vuxen) saga(`Bra smällt! ${S.poang} poäng!`);
}

// ---------- Huvudloop ----------
let forra = performance.now(), tidAck = 0;
function loop(nu) {
  const dt = Math.min(0.05, (nu - forra) / 1000); forra = nu;
  const t = nu / 1000;
  ctx.clearRect(0, 0, B, H);
  ritaMoln(dt);

  if (S.igang) {
    tidAck += dt;
    if (tidAck >= 1) { tidAck -= 1; S.tid--; if (S.tid <= 5 && S.tid > 0) ton(880, 0.06, 'square', 0.04); if (S.tid <= 0) slut(); }
    $('tid').textContent = Math.max(0, S.tid);
    $('tidRing').style.strokeDashoffset = String(151 * (1 - Math.max(0, S.tid) / SPELTID));
    S.tillNasta -= dt;
    if (S.tillNasta <= 0) {
      skapaBallong();
      S.tillNasta = Math.max(0.35, BAS_INTERVALL - INTERVALL_PER_NIVA * (S.niva - 1)) * (0.7 + Math.random() * 0.6);
      // se till att det alltid finns minst en rätt ballong på väg
      if (!S.ballonger.some((b) => !b.guld && b.krymper == null && S.uppdrag.arMal(b))) skapaBallong(true);
    }
  }
  // ballonger
  for (const b of S.ballonger) {
    if (b.krymper != null) { b.krymper -= dt * 2.2; b.y += 40 * dt; b.x += Math.sin(t * 30) * 2; }
    else b.y -= b.v * dt;
  }
  S.ballonger = S.ballonger.filter((b) => b.y > -radie * 3 && (b.krymper == null || b.krymper > 0.15));
  for (const b of S.ballonger) ritaBallong(b, t);
  // bitar
  for (const p of S.bitar) {
    p.liv -= dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 500 * dt; p.rot += dt * 8;
    ctx.save(); ctx.globalAlpha = Math.max(0, p.liv / 0.7); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
    ctx.fillStyle = p.farg; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore();
  }
  S.bitar = S.bitar.filter((p) => p.liv > 0);
  // flygande poäng
  for (const f of S.texter) {
    f.liv -= dt; f.y -= 70 * dt;
    ctx.globalAlpha = Math.max(0, f.liv / 0.9);
    ctx.font = '900 28px system-ui, sans-serif'; ctx.textAlign = 'center';
    ctx.lineWidth = 5; ctx.strokeStyle = '#fff'; ctx.fillStyle = f.farg;
    ctx.strokeText(f.text, f.x, f.y); ctx.fillText(f.text, f.x, f.y);
    ctx.globalAlpha = 1;
  }
  S.texter = S.texter.filter((f) => f.liv > 0);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

// Tryck (ett finger eller flera samtidigt) och mus
duk.addEventListener('pointerdown', (e) => { e.preventDefault(); tryck(e.clientX, e.clientY); });

// ---------- Start ----------
if (jag) visaStart(); else visaVem();

// Testkrok
window.__ballongsmallen = { S, tryck, slut, satJag: (id) => { jag = person(id); loggaIn(id); visaStart(); } };
