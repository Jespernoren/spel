// Tillägg till motor.js (används av Slalom)
// Fristående från motor.js så att äldre spel inte påverkas.
// Innehåller: scen + loop, tangentbord med touch-knappar, meny med flera knappar,
// paus (Esc/P/⏸), väg tillbaka till spelhallen, rekord och ljud (WebAudio + svensk röst).
// Stil: delat/extra.css
import * as THREE from 'three';
export { THREE };

// ---------- 3D-scen ----------
export function skapaSpel({ bakgrund = 0x87ceeb, skuggor = true } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = skuggor;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(bakgrund);
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  return { renderer, scene, camera };
}

// Kör fn(dt, tid) varje bildruta. dt är max 0,05 s så spelet inte hoppar efter flikbyte.
export function startaLoop(fn) {
  let last = performance.now();
  function tick(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    fn(dt, now / 1000);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ---------- Kontroller (tangentbord + touch) ----------
// karta: { vanster: ['ArrowLeft','KeyA'], hopp: ['Space'] }
// touch: [{ namn:'vanster', text:'◀', sida:'vanster' }, ...]
export function knappar(karta, touch = []) {
  const state = {};
  const nyss = new Set();
  for (const namn in karta) state[namn] = false;

  const satt = (namn, pa) => {
    if (pa && !state[namn]) nyss.add(namn);
    state[namn] = pa;
  };
  const hitta = (code) => Object.keys(karta).filter((n) => karta[n].includes(code));

  window.addEventListener('keydown', (e) => {
    const namn = hitta(e.code);
    if (namn.length) { e.preventDefault(); namn.forEach((n) => satt(n, true)); }
  });
  window.addEventListener('keyup', (e) => hitta(e.code).forEach((n) => satt(n, false)));
  window.addEventListener('blur', () => Object.keys(state).forEach((n) => (state[n] = false)));

  if (touch.length) {
    const rad = { vanster: el('div', 'touchrad vanster'), hoger: el('div', 'touchrad hoger') };
    for (const t of touch) {
      const b = el('button', 'touchknapp' + (t.liten ? ' liten' : ''), t.text);
      b.setAttribute('aria-label', t.namn);
      const ner = (e) => { e.preventDefault(); b.classList.add('nere'); satt(t.namn, true); };
      const upp = (e) => { e.preventDefault(); b.classList.remove('nere'); satt(t.namn, false); };
      b.addEventListener('pointerdown', ner);
      b.addEventListener('pointerup', upp);
      b.addEventListener('pointercancel', upp);
      b.addEventListener('pointerleave', upp);
      rad[t.sida || 'hoger'].appendChild(b);
    }
    const wrap = el('div', 'touchknappar');
    wrap.append(rad.vanster, rad.hoger);
    document.body.appendChild(wrap);
    state._touchElement = wrap;
  }

  // Sant en gång per nedtryckning
  state.tryckt = (namn) => { const v = nyss.has(namn); nyss.delete(namn); return v; };
  state.rensa = () => nyss.clear();
  return state;
}

// ---------- HUD och menyer ----------
export function skapaHud() {
  const hud = el('div', 'hud');
  document.body.appendChild(hud);
  return hud;
}

// visaMeny({ titel, text, html, knappar:[{ text, primar, gor }] }) → { stang }
export function visaMeny({ titel = '', text = '', html = '', knappar: kn = [] } = {}) {
  const bak = el('div', 'meny-bakgrund');
  const ruta = el('div', 'meny');
  if (titel) ruta.appendChild(el('h1', '', titel));
  if (text) ruta.appendChild(el('p', '', text));
  if (html) { const d = el('div', 'meny-innehall'); d.innerHTML = html; ruta.appendChild(d); }
  const rad = el('div', 'meny-knappar');
  const stang = () => bak.remove();
  for (const k of kn) {
    const b = el('button', 'menyknapp' + (k.primar ? ' primar' : ''), k.text);
    b.addEventListener('click', () => { stang(); k.gor && k.gor(); });
    rad.appendChild(b);
  }
  ruta.appendChild(rad);
  bak.appendChild(ruta);
  document.body.appendChild(bak);
  const forsta = rad.querySelector('button');
  if (forsta) setTimeout(() => forsta.focus(), 50);
  return { stang, element: ruta };
}

// ---------- Paus (Esc / P / ⏸-knapp) ----------
export function lyssnaPaus(fn) {
  const knapp = el('button', 'pausknapp', '⏸');
  knapp.setAttribute('aria-label', 'Paus');
  knapp.addEventListener('click', (e) => { e.stopPropagation(); fn(); });
  document.body.appendChild(knapp);
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' || e.code === 'KeyP') { e.preventDefault(); fn(); }
  });
  return knapp;
}

export function tillHallen() {
  window.location.href = '../../index.html';
}

// ---------- Rekord ----------
// Valfri nyckel i localStorage (JSON). Spelhallen läser bara 'rekord:<mapp>' som ett tal.
export function hamta(nyckel, std = null) {
  try { const v = localStorage.getItem(nyckel); return v === null ? std : JSON.parse(v); } catch { return std; }
}
export function spara(nyckel, varde) {
  try { localStorage.setItem(nyckel, JSON.stringify(varde)); } catch {}
}

// ---------- Ljud (WebAudio, inga filer) ----------
export function skapaLjud() {
  let ctx = null;
  let master = null;
  let pa = true;
  try { pa = localStorage.getItem('spelhall:ljud') !== 'av'; } catch {}

  const vakna = () => {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = pa ? 0.6 : 0;
      master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  };
  window.addEventListener('pointerdown', vakna);
  window.addEventListener('keydown', vakna);

  const ton = (frekvens, langd = 0.15, typ = 'sine', volym = 0.3, glid = 0) => {
    const c = vakna(); if (!c) return;
    const o = c.createOscillator(); const g = c.createGain();
    o.type = typ; o.frequency.setValueAtTime(frekvens, c.currentTime);
    if (glid) o.frequency.exponentialRampToValueAtTime(Math.max(20, frekvens + glid), c.currentTime + langd);
    g.gain.setValueAtTime(volym, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + langd);
    o.connect(g); g.connect(master); o.start(); o.stop(c.currentTime + langd + 0.02);
  };

  const brusBuffer = () => {
    const c = vakna(); const b = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
    const d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  };
  let buf = null;
  const brus = (langd = 0.3, volym = 0.3, filter = 1200) => {
    const c = vakna(); if (!c) return;
    buf = buf || brusBuffer();
    const s = c.createBufferSource(); s.buffer = buf;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = filter;
    const g = c.createGain(); g.gain.setValueAtTime(volym, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + langd);
    s.connect(f); f.connect(g); g.connect(master); s.start(); s.stop(c.currentTime + langd);
  };

  // Ett ihållande brus vars styrka kan ändras (t.ex. vind som ökar med farten)
  const loop = (filter = 800) => {
    let g = null, f = null;
    return {
      satt(volym, frekvens) {
        const c = vakna(); if (!c) return;
        if (!g) {
          buf = buf || brusBuffer();
          const s = c.createBufferSource(); s.buffer = buf; s.loop = true;
          f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = filter;
          g = c.createGain(); g.gain.value = 0;
          s.connect(f); f.connect(g); g.connect(master); s.start();
        }
        g.gain.setTargetAtTime(volym, c.currentTime, 0.1);
        if (frekvens) f.frequency.setTargetAtTime(frekvens, c.currentTime, 0.1);
      },
    };
  };

  const tala = (text, { hastighet = 1 } = {}) => {
    if (!pa || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'sv-SE'; u.rate = hastighet;
      const rost = window.speechSynthesis.getVoices().find((v) => v.lang && v.lang.startsWith('sv'));
      if (rost) u.voice = rost;
      window.speechSynthesis.speak(u);
    } catch {}
  };

  return {
    ton, brus, loop, tala, vakna,
    get pa() { return pa; },
    vaxla() {
      pa = !pa;
      try { localStorage.setItem('spelhall:ljud', pa ? 'pa' : 'av'); } catch {}
      if (master) master.gain.value = pa ? 0.6 : 0;
      if (!pa && window.speechSynthesis) window.speechSynthesis.cancel();
      return pa;
    },
  };
}

// ---------- Hjälpare ----------
// Slump med frö: samma frö ger samma bana varje gång
export function slump(fro = 1) {
  let a = fro >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const begransa = (v, min, max) => Math.max(min, Math.min(max, v));

export function el(tagg, klass = '', text = '') {
  const e = document.createElement(tagg);
  if (klass) e.className = klass;
  if (text) e.textContent = text;
  return e;
}
