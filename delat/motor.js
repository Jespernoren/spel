// =============================================================
//  motor.js – delad grund för alla spel i repot
//  Importera i ett spel:  import { skapaSpel, ... } from '../../delat/motor.js';
// =============================================================
import * as THREE from 'three';
export { THREE };

// ---------- 1. Scen, kamera, ljus och renderare ----------
export function skapaSpel({ bakgrund = 0x87ceeb, dimma = [40, 140] } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);

  const scen = new THREE.Scene();
  scen.background = new THREE.Color(bakgrund);
  if (dimma) scen.fog = new THREE.Fog(bakgrund, dimma[0], dimma[1]);

  const kamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
  kamera.position.set(0, 6, 10);

  scen.add(new THREE.HemisphereLight(0xffffff, 0x8899aa, 1.4));
  const sol = new THREE.DirectionalLight(0xffffff, 2.0);
  sol.position.set(10, 20, 10);
  sol.castShadow = true;
  sol.shadow.mapSize.set(2048, 2048);
  Object.assign(sol.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 1, far: 80 });
  scen.add(sol, sol.target);

  window.addEventListener('resize', () => {
    kamera.aspect = window.innerWidth / window.innerHeight;
    kamera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return { scen, kamera, renderer, sol };
}

// ---------- 2. Spelloop ----------
// uppdatera(dt) körs varje bildruta. dt = sekunder sedan förra rutan.
export function startaLoop(uppdatera, { scen, kamera, renderer }) {
  const klocka = new THREE.Clock();
  function ruta() {
    const dt = Math.min(klocka.getDelta(), 0.05);
    uppdatera(dt);
    renderer.render(scen, kamera);
    requestAnimationFrame(ruta);
  }
  ruta();
}

// ---------- 3. Styrning: tangentbord + touch ----------
// Läs t.ex. knappar.vanster, knappar.hoger, knappar.upp, knappar.ner, knappar.hopp
export const knappar = { vanster: false, hoger: false, upp: false, ner: false, hopp: false };

const tangentKarta = {
  ArrowLeft: 'vanster', KeyA: 'vanster',
  ArrowRight: 'hoger', KeyD: 'hoger',
  ArrowUp: 'upp', KeyW: 'upp',
  ArrowDown: 'ner', KeyS: 'ner',
  Space: 'hopp',
};
window.addEventListener('keydown', (e) => {
  const k = tangentKarta[e.code];
  if (k) { knappar[k] = true; e.preventDefault(); }
});
window.addEventListener('keyup', (e) => {
  const k = tangentKarta[e.code];
  if (k) knappar[k] = false;
});

// Touch: vänster tredjedel = vänster, höger tredjedel = höger, mitten = hopp
function touchUppdatera(e) {
  knappar.vanster = knappar.hoger = knappar.hopp = false;
  for (const t of e.touches) {
    const x = t.clientX / window.innerWidth;
    if (x < 0.33) knappar.vanster = true;
    else if (x > 0.67) knappar.hoger = true;
    else knappar.hopp = true;
  }
}
['touchstart', 'touchmove', 'touchend', 'touchcancel'].forEach((typ) =>
  window.addEventListener(typ, touchUppdatera, { passive: true })
);

// ---------- 4. Skärm-text (HUD) ----------
export function skapaHud() {
  const el = document.createElement('div');
  el.className = 'hud';
  document.body.appendChild(el);
  return (html) => { el.innerHTML = html; };
}

// ---------- 5. Meny / startskärm / game over ----------
export function visaMeny({ titel, text = '', knapp = 'Starta', onStart }) {
  const el = document.createElement('div');
  el.className = 'meny';
  el.innerHTML = `
    <div class="meny-ruta">
      <h1>${titel}</h1>
      <p>${text}</p>
      <button>${knapp}</button>
      <a class="tillbaka" href="../../index.html">← Alla spel</a>
    </div>`;
  document.body.appendChild(el);
  const starta = () => {
    el.remove();
    window.removeEventListener('keydown', tangent);
    onStart?.();
  };
  const tangent = (e) => { if (e.code === 'Enter' || e.code === 'Space') starta(); };
  el.querySelector('button').addEventListener('click', starta);
  window.addEventListener('keydown', tangent);
}

// ---------- 6. Rekord (sparas i webbläsaren) ----------
export function rekord(spelNamn) {
  const nyckel = `rekord:${spelNamn}`;
  return {
    hamta() {
      try { return Number(localStorage.getItem(nyckel)) || 0; } catch { return 0; }
    },
    spara(poang) {
      try {
        if (poang > this.hamta()) { localStorage.setItem(nyckel, poang); return true; }
      } catch { /* ignorera */ }
      return false;
    },
  };
}

// ---------- 7. Hjälpare ----------
export const slump = (min, max) => min + Math.random() * (max - min);
export const begransa = (v, min, max) => Math.max(min, Math.min(max, v));
