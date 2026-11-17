// =============================================================
//  Familjespel – gemensam ram för familjens mobilspel
//  Ger start-skärm, "Vem spelar?", resultat med familjens topplista,
//  ljud, svensk röst och konfetti. Rekord sparas per person (delat/familj.js).
//
//  import { skapaRam, ton, saga, konfetti, avatar } from '../../delat/familjespel.js';
//  const ram = skapaRam({
//    id: 'familje-simon', titel: 'Familje-Simon 🎵',
//    startText: (jag) => 'Härma ordningen!',
//    onStart: (jag) => { ...starta spelet... },
//  });
//  ram.slut(poang, 'text under poängen');   // visar resultat, sparar rekord
//  Lägg <link rel="stylesheet" href="../../delat/familjespel.css"> i <head>.
// =============================================================
import { FAMILJ, person, inloggad, loggaIn, bildSokvag, sparaRekord, hamtaRekord, familjensTopp } from './familj.js';

export { FAMILJ, person, bildSokvag };

// ---------- Små hjälpare ----------
export function avatar(p, s) {
  return `<span class="fs-avatar" style="--f:${p.farg};width:${s}px;height:${s}px;font-size:${Math.round(s * 0.55)}px">${p.emoji}<img src="${bildSokvag(p.id)}" alt="" onerror="this.remove()"></span>`;
}

// ---------- Ljud ----------
let ac;
export function ljudkontext() {
  try { ac ||= new (window.AudioContext || window.webkitAudioContext)(); if (ac.state === 'suspended') ac.resume(); } catch {}
  return ac;
}
export function ton(f, langd = 0.12, typ = 'triangle', vol = 0.15, fordrojning = 0, glid = 0) {
  const a = ljudkontext(); if (!a) return;
  try {
    const o = a.createOscillator(), g = a.createGain(), t = a.currentTime + fordrojning;
    o.type = typ; o.frequency.setValueAtTime(f, t);
    if (glid) o.frequency.exponentialRampToValueAtTime(Math.max(30, f + glid), t + langd);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + langd);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + langd + 0.02);
  } catch {}
}
export const fanfar = () => [523, 659, 784, 1047].forEach((f, i) => ton(f, 0.3, 'triangle', 0.15, i * 0.12));
export const pling = () => { ton(660, 0.08); ton(990, 0.12, 'triangle', 0.12, 0.06); };
export const buu = () => ton(220, 0.35, 'sawtooth', 0.07, 0, -120);

// ---------- Röst ----------
let svRost = null;
const hittaRost = () => { try { svRost = speechSynthesis.getVoices().find((v) => v.lang?.toLowerCase().startsWith('sv')) || null; } catch {} };
if ('speechSynthesis' in window) { hittaRost(); speechSynthesis.onvoiceschanged = hittaRost; }
export function saga(text, { fart = 1, avbryt = true } = {}) {
  try {
    if (avbryt) speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'sv-SE'; if (svRost) u.voice = svRost; u.rate = fart;
    speechSynthesis.speak(u);
  } catch {}
}

// ---------- Konfetti ----------
export function konfetti() {
  let cv = document.getElementById('fs-konfetti');
  if (!cv) { cv = document.createElement('canvas'); cv.id = 'fs-konfetti'; document.body.appendChild(cv); }
  const c = cv.getContext('2d');
  cv.width = innerWidth; cv.height = innerHeight;
  const farger = ['#ffd43b', '#ff4fa3', '#3de3ff', '#9b5cff', '#4be38a'];
  const b = Array.from({ length: 130 }, () => ({ x: Math.random() * cv.width, y: -Math.random() * 300, vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 4, r: Math.random() * 6, s: 6 + Math.random() * 7, f: farger[Math.floor(Math.random() * farger.length)] }));
  const t0 = performance.now();
  (function steg(t) {
    c.clearRect(0, 0, cv.width, cv.height);
    for (const p of b) { p.x += p.vx; p.y += p.vy; p.r += 0.1; c.save(); c.translate(p.x, p.y); c.rotate(p.r); c.fillStyle = p.f; c.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); c.restore(); }
    if (t - t0 < 3500) requestAnimationFrame(steg); else c.clearRect(0, 0, cv.width, cv.height);
  })(t0);
}

// ---------- Ramen ----------
export function skapaRam({ id, titel, startText, onStart, onMeny }) {
  const div = document.createElement('div');
  div.innerHTML = `
    <section class="fs-meny" id="fs-start" hidden>
      <h1>${titel}</h1>
      <div id="fs-startSpelare"></div>
      <p id="fs-startText"></p>
      <button class="fs-stor" id="fs-startKnapp">Starta!</button>
      <button class="fs-lank" id="fs-bytKnapp">🔄 Byt spelare</button>
    </section>
    <section class="fs-meny" id="fs-vem" hidden>
      <h1>Vem spelar?</h1>
      <div class="fs-familj" id="fs-familj"></div>
    </section>
    <section class="fs-meny" id="fs-slut" hidden>
      <p id="fs-slutRubrik">Bra spelat!</p>
      <div class="fs-stort" id="fs-slutPoang">0</div>
      <div id="fs-slutNytt"></div>
      <p id="fs-slutText"></p>
      <div class="fs-topp" id="fs-topp"></div>
      <button class="fs-stor" id="fs-igenKnapp">Igen!</button>
    </section>`;
  document.body.append(...div.children);
  const $ = (x) => document.getElementById(x);
  let jag = inloggad();
  const visa = (vy) => ['fs-start', 'fs-vem', 'fs-slut'].forEach((s) => ($(s).hidden = s !== vy));

  function visaVem() {
    visa('fs-vem'); onMeny?.();
    $('fs-familj').innerHTML = FAMILJ.map((p) => `<button data-id="${p.id}">${avatar(p, 86)}${p.namn}</button>`).join('');
    $('fs-familj').querySelectorAll('button').forEach((b) => b.onclick = () => { jag = person(b.dataset.id); loggaIn(jag.id); pling(); visaStart(); });
  }
  function visaStart() {
    if (!jag) return visaVem();
    onMeny?.();
    const rek = hamtaRekord(id, jag.id);
    $('fs-startSpelare').innerHTML = `${avatar(jag, 96)}<p style="margin-top:8px;font-weight:900;font-size:22px">${jag.namn}${rek ? ` · 🏆 ${rek}` : ''}</p>`;
    $('fs-startText').textContent = startText(jag);
    visa('fs-start');
  }
  $('fs-startKnapp').onclick = () => { ljudkontext(); visa(null); onStart(jag); };
  $('fs-bytKnapp').onclick = () => { ton(440); visaVem(); };
  $('fs-igenKnapp').onclick = () => { pling(); visaStart(); };

  function slut(poang, text = '', rubrik = 'Bra spelat!') {
    const nytt = sparaRekord(id, jag.id, poang) && poang > 0;
    visa('fs-slut');
    $('fs-slutRubrik').textContent = rubrik;
    $('fs-slutPoang').textContent = poang;
    $('fs-slutNytt').innerHTML = nytt ? '<div class="fs-nytt">⭐ Nytt rekord! ⭐</div>' : '';
    $('fs-slutText').textContent = text;
    const topp = familjensTopp(id);
    $('fs-topp').innerHTML = topp.map((p, i) => `<div class="${p.id === jag.id ? 'jag' : ''}">${['🥇', '🥈', '🥉', '4.'][i]} ${avatar(p, 32)} ${p.namn}<b>${p.poang}</b></div>`).join('');
    fanfar();
    if (nytt) { konfetti(); saga(`Nytt rekord, ${jag.namn}! ${poang} poäng!`); }
    else if (!jag.vuxen) saga(`Bra kämpat! ${poang} poäng!`);
    return nytt;
  }

  // Första skärmen
  queueMicrotask(() => (jag ? visaStart() : visaVem()));
  return { get jag() { return jag; }, visaStart, visaVem, slut, satJag: (pid) => { jag = person(pid); loggaIn(pid); visaStart(); } };
}
