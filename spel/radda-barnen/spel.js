// =============================================================
//  Rädda Barnen – en idé av Charlie
//  Tjuven från Strandjakten har tagit mammas tre barn på förskolan.
//  Mamma och storasyster letar bland alla barnen. Mammas barn har
//  regnbågspyjamas och regnbågsskor. Hittar man ett barn tar tjuven
//  det till en lavabana: hoppa på stenar, en flotte och en snabb bro.
//  Ramlar man i lavan börjar banan om. När alla tre är räddade blir
//  det disco hemma med hela familjen.
// =============================================================
import * as THREE from 'three';
import { skapaFigur, regnbageMat, REGNBAGE } from '../../delat/figurer.js';

// ================= JUSTERBARA VÄRDEN =================
const GA_FART = 4.2;           // meter per sekund
const SPRING_FART = 6.8;       // med Shift
const HOPP_KRAFT = 7.8;        // hur högt man hoppar
const GRAVITATION = 21;
const LUFT_STYRNING = 0.85;    // hur mycket man kan styra i luften (0–1)
const FORLATANDE_HOPP = 0.14;  // sekunder man kan hoppa efter att ha gått över kanten
const MUS_KANSLA = 0.0035;     // hur mycket musen svänger vyn
const MUS_MJUKHET = 12;
const SVANG_FART = 2.0;        // pekknapparna
const ANDRA_BARN = 16;         // hur många andra barn som leker på förskolegården
const LEDLJUS_EFTER = 40;      // sekunder utan fynd innan ett ljus visar närmaste barn
const HJARTA_AVSTAND = 9;      // hur nära man ska vara för att mammas barn ropar och visar ett hjärta
const HJALP_EFTER_FALL = 4;    // efter så många fall går bron och flotten lite långsammare
const SPEL_ID = 'radda-barnen';

// Mammas tre barn: alla har regnbågspyjamas och regnbågsskor
const MINA_BARN = [
  { id: 'blond', namn: 'det blonda barnet', har: '#f4d36b', har2: null },
  { id: 'brun', namn: 'det brunhåriga barnet', har: '#6b4423', har2: null },
  { id: 'blandat', namn: 'barnet med blandat hår', har: '#6b4423', har2: '#f4d36b' },
];

// Lavabanorna. Allt räknas från banans start. x = åt sidan, z = framåt.
// sten: { x, z, b (bredd), d (djup) }
// flotte/bro: åker fram och tillbaka mellan fran och till (z), fart i m/s, paus i sekunder vid ändarna
const BANOR = [
  [ // bana 1: kort, med en flotte
    { typ: 'start', x: 0, z: 0, b: 4, d: 4 },
    { typ: 'sten', x: 0, z: 4.6, b: 2.2, d: 2.2 },
    { typ: 'flotte', x: 0, fran: 8.6, till: 15, b: 2.4, d: 2.4, fart: 2.4, paus: 1.4 },
    { typ: 'sten', x: 0, z: 18.6, b: 2.2, d: 2.2 },
    { typ: 'mal', x: 0, z: 23, b: 4, d: 4 },
  ],
  [ // bana 2: flotte och en snabb bro
    { typ: 'start', x: 0, z: 0, b: 4, d: 4 },
    { typ: 'flotte', x: 0, fran: 4.6, till: 10.5, b: 2.4, d: 2.4, fart: 2.6, paus: 1.3 },
    { typ: 'sten', x: -1.2, z: 14, b: 2, d: 2 },
    { typ: 'sten', x: 1.2, z: 17.4, b: 2, d: 2 },
    { typ: 'bro', x: 0, fran: 21.4, till: 29, b: 1.6, d: 3, fart: 6.5, paus: 1.0 },
    { typ: 'mal', x: 0, z: 33.2, b: 4, d: 4 },
  ],
  [ // bana 3: lite längre
    { typ: 'start', x: 0, z: 0, b: 4, d: 4 },
    { typ: 'sten', x: 0, z: 4.4, b: 2, d: 2 },
    { typ: 'bro', x: 0, fran: 8.2, till: 15, b: 1.6, d: 3, fart: 6.5, paus: 1.0 },
    { typ: 'sten', x: 1.4, z: 18.8, b: 1.8, d: 1.8 },
    { typ: 'sten', x: -1.0, z: 22, b: 1.8, d: 1.8 },
    { typ: 'flotte', x: 0, fran: 25.8, till: 31, b: 2.4, d: 2.4, fart: 2.8, paus: 1.2 },
    { typ: 'sten', x: 0, z: 34.2, b: 2, d: 2 },
    { typ: 'bro', x: 0, fran: 38, till: 45, b: 1.6, d: 3, fart: 7, paus: 1.0 },
    { typ: 'mal', x: 0, z: 49.2, b: 4, d: 4 },
  ],
];
const BANA_POS = new THREE.Vector3(300, 0, 0);   // var lavagrottan ligger i världen
const DISCO_POS = new THREE.Vector3(-300, 0, 0); // var huset med discot ligger
const GARD = { minX: -29, maxX: 29, minZ: -11, maxZ: 25 };

// ================= HJÄLP =================
const rnd = (a, b) => a + Math.random() * (b - a);
const valj = (l) => l[Math.floor(Math.random() * l.length)];
const $ = (id) => document.getElementById(id);
const vanta = (ms) => new Promise(r => setTimeout(r, ms));
function saga(text) {
  try {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'sv-SE'; u.rate = 0.95; u.pitch = 1.1;
    const r = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith('sv'));
    if (r) u.voice = r;
    speechSynthesis.speak(u);
  } catch (e) {}
}
let meddTimer = 0;
function visa(text, sek = 4, uppl = true) {
  const m = $('medd'); m.textContent = text; m.classList.remove('osynlig');
  meddTimer = sek; if (uppl) saga(text);
}
async function tona(fn) {
  $('tona').classList.add('svart'); await vanta(480);
  fn(); await vanta(120);
  $('tona').classList.remove('svart');
}

// ================= LJUD =================
let ac = null, huvudvol = null;
function startaLjud() {
  if (ac) return;
  try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
  huvudvol = ac.createGain(); huvudvol.gain.value = 0.5; huvudvol.connect(ac.destination);
}
function ton(frek, start, dur, typ = 'sine', vol = 0.25) {
  if (!ac) return;
  const t = ac.currentTime + start, o = ac.createOscillator(), g = ac.createGain();
  o.type = typ; o.frequency.setValueAtTime(frek, t);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(huvudvol); o.start(t); o.stop(t + dur + 0.05);
}
const ljud = {
  hitta() { [523, 659, 784, 1047].forEach((f, i) => ton(f, i * 0.08, 0.35, 'triangle', 0.25)); },
  tjuv() { [392, 370, 349, 330].forEach((f, i) => ton(f, i * 0.22, 0.25, 'square', 0.08)); },
  hopp() { if (!ac) return; const t = ac.currentTime, o = ac.createOscillator(), g = ac.createGain(); o.type = 'triangle'; o.frequency.setValueAtTime(380, t); o.frequency.exponentialRampToValueAtTime(760, t + 0.12); g.gain.setValueAtTime(0.15, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.18); o.connect(g); g.connect(huvudvol); o.start(t); o.stop(t + 0.2); },
  landa() { ton(160, 0, 0.08, 'sine', 0.15); },
  lava() { ton(140, 0, 0.5, 'sawtooth', 0.12); ton(90, 0.1, 0.6, 'sawtooth', 0.1); },
  nej() { ton(300, 0, 0.15, 'triangle', 0.15); ton(240, 0.12, 0.2, 'triangle', 0.15); },
  vinst() { [523, 659, 784, 1047, 784, 1047].forEach((f, i) => ton(f, i * 0.12, 0.3, 'triangle', 0.22)); },
};
let musik = null;
function startaDisco() {
  if (!ac || musik) return;
  const melodi = [659, 784, 880, 784, 659, 587, 523, 587, 659, 784, 988, 880, 784, 659, 587, 659];
  const bas = [110, 110, 147, 147, 131, 131, 165, 165];
  let i = 0;
  musik = setInterval(() => {
    if (i % 2 === 0) ton(bas[(i / 2) % bas.length], 0, 0.3, 'square', 0.07);
    ton(melodi[i % melodi.length], 0, 0.18, 'triangle', 0.11);
    if (i % 2 === 0) ton(60, 0, 0.12, 'sine', 0.35);           // trumma
    if (i % 4 === 2) ton(3000, 0, 0.04, 'square', 0.03);       // virvel
    i++;
  }, 190);
}
function stoppaMusik() { if (musik) clearInterval(musik); musik = null; }

// ================= BARNIKON (HUD) =================
function barnIkon(b) {
  const id = 'r' + Math.random().toString(36).slice(2, 7);
  const grad = `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">${REGNBAGE.map((c, i) => `<stop offset="${i / 6}" stop-color="${c}"/><stop offset="${(i + 1) / 6}" stop-color="${c}"/>`).join('')}</linearGradient>`;
  const har2 = b.har2 ? `<path d="M19 13c2-5 6-7 10-7" stroke="${b.har2}" stroke-width="3" fill="none"/><path d="M33 9c3 2 5 6 4 12" stroke="${b.har2}" stroke-width="3" fill="none"/><path d="M15 20c0-4 1-7 3-9" stroke="${b.har2}" stroke-width="3" fill="none"/>` : '';
  return `<svg viewBox="0 0 50 60" aria-hidden="true"><defs>${grad}</defs>
    <path d="M12 26c-1-12 6-20 13-20s14 8 13 20l-1 8H13z" fill="${b.har}" stroke="#3a2a1c" stroke-width="1.5"/>${har2}
    <circle cx="25" cy="22" r="10" fill="#f2c9a0" stroke="#3a2a1c" stroke-width="1.5"/>
    <circle cx="21.5" cy="21" r="1.4" fill="#222"/><circle cx="28.5" cy="21" r="1.4" fill="#222"/>
    <path d="M21.5 26q3.5 3 7 0" stroke="#c0392b" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M14 34h22l2 16H12z" fill="url(#${id})" stroke="#3a2a1c" stroke-width="1.5"/>
    <rect x="15" y="49" width="8" height="8" fill="url(#${id})" stroke="#3a2a1c" stroke-width="1.5"/><rect x="27" y="49" width="8" height="8" fill="url(#${id})" stroke="#3a2a1c" stroke-width="1.5"/>
  </svg>`;
}
MINA_BARN.forEach(b => {
  const d = document.createElement('div'); d.className = 'barnplats'; d.id = 'plats-' + b.id; d.title = b.namn;
  d.innerHTML = barnIkon(b) + '<span class="bock">✓</span>'; $('hud').appendChild(d);
  const s = document.createElement('div'); s.innerHTML = `<div class="barnplats">${barnIkon(b)}</div>`; $('startBarn').appendChild(s);
});

// ================= SCEN =================
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
$('spel').appendChild(renderer.domElement);
const scen = new THREE.Scene();
const kamera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.1, 400);
addEventListener('resize', () => { kamera.aspect = innerWidth / innerHeight; kamera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); });

function canvasTex(w, h, rita, rep) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; rita(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); }
  return t;
}
const m = (farg, extra = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: farg, roughness: 0.85 }, extra));
function skugga(o) { o.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } }); return o; }
function textSprite(text, farg = '#3a2a1c', bak = '#fffaf0') {
  const bredd = Math.max(256, text.length * 24 + 40);
  const t = canvasTex(bredd, 72, (g, w, h) => {
    g.fillStyle = bak; g.strokeStyle = farg; g.lineWidth = 6;
    g.beginPath(); g.roundRect(4, 4, w - 8, h - 8, 22); g.fill(); g.stroke();
    g.fillStyle = farg; g.font = '600 38px Fredoka, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, w / 2, h / 2 + 2);
  });
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false }));
  s.scale.set(1.5 * bredd / 256, 0.42, 1); s.userData.bredd = bredd / 256; s.renderOrder = 10; return s;
}

const himmelDag = canvasTex(4, 256, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#4aa8e8'); gr.addColorStop(0.6, '#a9dcf5'); gr.addColorStop(1, '#e8f6ff'); g.fillStyle = gr; g.fillRect(0, 0, w, h); });
const himmelLava = canvasTex(4, 256, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#1a0a12'); gr.addColorStop(0.6, '#4a1410'); gr.addColorStop(1, '#a8320c'); g.fillStyle = gr; g.fillRect(0, 0, w, h); });
const hemiLjus = new THREE.HemisphereLight(0xdff4ff, 0x9ec77a, 0.8 * Math.PI); scen.add(hemiLjus);
const solljus = new THREE.DirectionalLight(0xfff1d6, 0.95 * Math.PI);
solljus.castShadow = true; solljus.shadow.mapSize.set(1024, 1024);
Object.assign(solljus.shadow.camera, { left: -40, right: 40, top: 40, bottom: -40, near: 1, far: 140 });
scen.add(solljus, solljus.target);
function sattOmrade(namn) {
  if (namn === 'gard') {
    scen.background = himmelDag; scen.fog = new THREE.Fog(0xcfeaf7, 45, 130);
    hemiLjus.color.set(0xdff4ff); hemiLjus.groundColor.set(0x9ec77a); hemiLjus.intensity = 0.8 * Math.PI; solljus.intensity = 0.95 * Math.PI;
    solljus.position.set(-25, 45, 20); solljus.target.position.set(0, 0, 0);
  } else if (namn === 'bana') {
    scen.background = himmelLava; scen.fog = new THREE.Fog(0x3a120c, 30, 90);
    hemiLjus.color.set(0xffc9a0); hemiLjus.groundColor.set(0xff5a1a); hemiLjus.intensity = 0.75 * Math.PI; solljus.intensity = 0.6 * Math.PI;
    solljus.position.set(BANA_POS.x - 15, 40, BANA_POS.z + 10); solljus.target.position.set(BANA_POS.x, 0, BANA_POS.z + 20);
  } else {
    scen.background = new THREE.Color(0x0c0820); scen.fog = null;
    hemiLjus.color.set(0x9a8cff); hemiLjus.groundColor.set(0x301050); hemiLjus.intensity = 0.55 * Math.PI; solljus.intensity = 0.15 * Math.PI;
    solljus.position.set(DISCO_POS.x, 30, DISCO_POS.z + 5); solljus.target.position.copy(DISCO_POS);
  }
}

// ================= FÖRSKOLEGÅRDEN =================
const cirklar = [], rektanglar = [];
const gomstallen = [];
function krock(p, r) {
  for (const c of cirklar) {
    const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), min = c.r + r;
    if (d < min && d > 0.0001) { p.x = c.x + dx / d * min; p.z = c.z + dz / d * min; }
  }
  for (const q of rektanglar) {
    const nx = Math.max(q.minX, Math.min(p.x, q.maxX)), nz = Math.max(q.minZ, Math.min(p.z, q.maxZ));
    const dx = p.x - nx, dz = p.z - nz, d = Math.hypot(dx, dz);
    if (d < r) {
      if (d > 0.0001) { p.x = nx + dx / d * r; p.z = nz + dz / d * r; }
      else {
        const val = [[p.x - q.minX, -1, 0], [q.maxX - p.x, 1, 0], [p.z - q.minZ, 0, -1], [q.maxZ - p.z, 0, 1]].sort((a, b) => a[0] - b[0])[0];
        if (val[1]) p.x = val[1] < 0 ? q.minX - r : q.maxX + r; else p.z = val[2] < 0 ? q.minZ - r : q.maxZ + r;
      }
    }
  }
  p.x = Math.max(GARD.minX + r, Math.min(GARD.maxX - r, p.x));
  p.z = Math.max(GARD.minZ + r, Math.min(GARD.maxZ - r, p.z));
}
const gardGrupp = new THREE.Group(); scen.add(gardGrupp);
(() => {
  const grasTex = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#7cc45a'; g.fillRect(0, 0, w, h); for (let i = 0; i < 2500; i++) { g.fillStyle = valj(['#6db84c', '#8fd06a', '#76be55', '#9bd977']); g.fillRect(Math.random() * w, Math.random() * h, 2, 3); } }, [30, 30]);
  const gras = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshStandardMaterial({ map: grasTex, roughness: 1 }));
  gras.rotation.x = -Math.PI / 2; gras.receiveShadow = true; gardGrupp.add(gras);
  // gångväg
  const gang = new THREE.Mesh(new THREE.PlaneGeometry(4, 24), m(0xd9cbb0)); gang.rotation.x = -Math.PI / 2; gang.position.set(0, 0.01, 12); gang.receiveShadow = true; gardGrupp.add(gang);
  // staket
  const stMat = m(0xffffff);
  const staket = (x1, z1, x2, z2) => {
    const len = Math.hypot(x2 - x1, z2 - z1), n = Math.floor(len / 0.6);
    for (let i = 0; i <= n; i++) { const t = i / n, s = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.1, 0.08), stMat); s.position.set(x1 + (x2 - x1) * t, 0.55, z1 + (z2 - z1) * t); s.rotation.y = Math.atan2(x2 - x1, z2 - z1) + Math.PI / 2; gardGrupp.add(s); }
    const rail = new THREE.Mesh(new THREE.BoxGeometry(len, 0.08, 0.06), stMat); rail.position.set((x1 + x2) / 2, 0.8, (z1 + z2) / 2); rail.rotation.y = -Math.atan2(z2 - z1, x2 - x1); gardGrupp.add(rail);
  };
  staket(-30, -12, -30, 26); staket(30, -12, 30, 26); staket(-30, 26, -2.5, 26); staket(2.5, 26, 30, 26);
  // förskolan
  const hus = new THREE.Group(); hus.position.set(0, 0, -17);
  const kropp = new THREE.Mesh(new THREE.BoxGeometry(26, 5, 10), m(0xc8463a)); kropp.position.y = 2.5; hus.add(kropp);
  const tak = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 7.5, 3, 4, 1), m(0x3a3f4a)); tak.rotation.y = Math.PI / 4; tak.scale.set(1.9, 1, 0.75); tak.position.y = 6.5; hus.add(tak);
  for (const x of [-10, -6, 6, 10]) { const f = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.6, 0.1), m(0xbfe6ff, { emissive: 0x335566, emissiveIntensity: 0.2 })); f.position.set(x, 2.8, 5.02); hus.add(f); const k = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.9, 0.06), m(0xffffff)); k.position.set(x, 2.8, 5.0); hus.add(k); }
  const dorr = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 0.12), m(0xffd23f)); dorr.position.set(0, 1.5, 5.04); hus.add(dorr);
  const skylt = new THREE.Mesh(new THREE.PlaneGeometry(8, 1.2), new THREE.MeshBasicMaterial({ map: canvasTex(512, 76, (g, w, h) => { g.fillStyle = '#fffaf0'; g.fillRect(0, 0, w, h); g.fillStyle = '#3a2a1c'; g.font = 'bold 50px Fredoka, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('FÖRSKOLAN', w / 2, h / 2 + 3); }) }));
  skylt.position.set(0, 4.3, 5.06); hus.add(skylt);
  REGNBAGE.forEach((c, i) => { const b = new THREE.Mesh(new THREE.TorusGeometry(1.4 - i * 0.12, 0.06, 6, 24, Math.PI), new THREE.MeshBasicMaterial({ color: c })); b.position.set(0, 3.3, 5.05); hus.add(b); });
  gardGrupp.add(skugga(hus)); rektanglar.push({ minX: -13, maxX: 13, minZ: -22, maxZ: -12 });
  gomstallen.push({ x: 3, z: -10, namn: 'vid dörren till förskolan' });
  // sandlåda
  const sl = new THREE.Group(); sl.position.set(11, 0, 7);
  const sand = new THREE.Mesh(new THREE.BoxGeometry(5, 0.2, 5), m(0xf0d9a0)); sand.position.y = 0.1; sl.add(sand);
  for (const [x, z, w, d] of [[0, 2.5, 5.3, 0.3], [0, -2.5, 5.3, 0.3], [2.5, 0, 0.3, 5], [-2.5, 0, 0.3, 5]]) { const k = new THREE.Mesh(new THREE.BoxGeometry(w, 0.35, d), m(0x9b6b3d)); k.position.set(x, 0.17, z); sl.add(k); }
  const hink = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.18, 0.4, 10), m(0xff4d4d)); hink.position.set(1, 0.4, -1); sl.add(hink);
  gardGrupp.add(skugga(sl)); gomstallen.push({ x: 11, z: 7, namn: 'i sandlådan' });
  // gungor
  const gu = new THREE.Group(); gu.position.set(-13, 0, 4);
  const ram = m(0x2f9bff);
  for (const x of [-2.5, 2.5]) for (const z of [-0.9, 0.9]) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.2), ram); b.position.set(x, 1.5, z * 0.6); b.rotation.x = z > 0 ? -0.3 : 0.3; gu.add(b); cirklar.push({ x: -13 + x, z: 4, r: 0.3 }); }
  const topp = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 5.2), ram); topp.rotation.z = Math.PI / 2; topp.position.y = 3; gu.add(topp);
  for (const x of [-1.2, 1.2]) { for (const s of [-0.25, 0.25]) { const k = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 2.3), m(0x666666)); k.position.set(x + s, 1.85, 0); gu.add(k); } const sits = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.08, 0.35), m(0xff6fae)); sits.position.set(x, 0.7, 0); gu.add(sits); }
  gardGrupp.add(skugga(gu)); gomstallen.push({ x: -13, z: 6.6, namn: 'vid gungorna' });
  // klätterställning med rutschkana
  const kl = new THREE.Group(); kl.position.set(-1, 0, -3);
  for (const [x, z] of [[-1.2, -1.2], [1.2, -1.2], [-1.2, 1.2], [1.2, 1.2]]) { const s = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 3.2), m(0xffd23f)); s.position.set(x, 1.6, z); kl.add(s); cirklar.push({ x: -1 + x, z: -3 + z, r: 0.25 }); }
  const plan = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.15, 2.6), m(0x9b6b3d)); plan.position.y = 1.8; kl.add(plan);
  const takk = new THREE.Mesh(new THREE.ConeGeometry(2, 1.2, 4), m(0x3ecf6e)); takk.rotation.y = Math.PI / 4; takk.position.y = 3.8; kl.add(takk);
  const ruts = new THREE.Mesh(new THREE.BoxGeometry(1, 0.1, 4), m(0xff4d4d)); ruts.position.set(0, 0.95, 3.1); ruts.rotation.x = 0.45; kl.add(ruts);
  gardGrupp.add(skugga(kl)); gomstallen.push({ x: 1.6, z: 1.8, namn: 'vid rutschkanan' });
  // lekstuga
  const ls = new THREE.Group(); ls.position.set(19, 0, -6);
  const lk = new THREE.Mesh(new THREE.BoxGeometry(3, 2.2, 3), m(0xffe0a8)); lk.position.y = 1.1; ls.add(lk);
  const lt = new THREE.Mesh(new THREE.ConeGeometry(2.4, 1.4, 4), m(0x2f9bff)); lt.rotation.y = Math.PI / 4; lt.position.y = 2.9; ls.add(lt);
  const ld = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.5, 0.08), m(0xff6fae)); ld.position.set(0, 0.75, 1.52); ls.add(ld);
  gardGrupp.add(skugga(ls)); rektanglar.push({ minX: 17.5, maxX: 20.5, minZ: -7.5, maxZ: -4.5 });
  gomstallen.push({ x: 19, z: -3.3, namn: 'vid lekstugan' });
  // förråd
  const fr = new THREE.Mesh(new THREE.BoxGeometry(4, 2.6, 3), m(0x8a6a4a)); fr.position.set(-21, 1.3, -6); gardGrupp.add(skugga(fr)); rektanglar.push({ minX: -23, maxX: -19, minZ: -7.5, maxZ: -4.5 });
  gomstallen.push({ x: -17.8, z: -6, namn: 'vid förrådet' });
  // träd och buskar
  const trad = (x, z, s = 1) => {
    const g = new THREE.Group(); g.position.set(x, 0, z);
    const st = new THREE.Mesh(new THREE.CylinderGeometry(0.25 * s, 0.32 * s, 2.4 * s, 8), m(0x7a5230)); st.position.y = 1.2 * s; g.add(st);
    for (const [dx, dy, dz, r] of [[0, 3.2, 0, 1.6], [0.8, 2.8, 0.4, 1.1], [-0.7, 2.9, -0.3, 1.2]]) { const k = new THREE.Mesh(new THREE.SphereGeometry(r * s, 12, 10), m(0x3f9b3a)); k.position.set(dx * s, dy * s, dz * s); g.add(k); }
    gardGrupp.add(skugga(g)); cirklar.push({ x, z, r: 0.45 * s });
  };
  trad(22, 15); trad(-24, 18, 1.2); trad(-25, 8); trad(24, 3, 0.9);
  gomstallen.push({ x: 20.6, z: 16, namn: 'under ett träd' });
  const buske = (x, z) => { const b = new THREE.Mesh(new THREE.SphereGeometry(1.1, 12, 10), m(0x4caf50)); b.scale.y = 0.75; b.position.set(x, 0.6, z); gardGrupp.add(skugga(b)); cirklar.push({ x, z, r: 1.0 }); };
  buske(-18, 15); buske(-16.4, 16.2); buske(15, 21);
  gomstallen.push({ x: -17.2, z: 13.2, namn: 'bakom buskarna' });
  // bänk
  const bank = new THREE.Mesh(new THREE.BoxGeometry(3, 0.12, 0.7), m(0x9b6b3d)); bank.position.set(-8, 0.5, 18); gardGrupp.add(skugga(bank)); cirklar.push({ x: -8, z: 18, r: 0.8 });
  gomstallen.push({ x: -8, z: 19.5, namn: 'vid bänken' });
  // bollar och blommor
  for (let i = 0; i < 40; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 4), new THREE.MeshBasicMaterial({ color: valj(['#ff6fae', '#ffd23f', '#ffffff', '#9b5cff']) })); f.position.set(rnd(-28, 28), 0.08, rnd(-10, 25)); gardGrupp.add(f); }
  for (const [x, z, c] of [[6, 12, 0xff4d4d], [-5, 8, 0x2f9bff], [15, -1, 0xffd23f]]) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.35, 14, 10), m(c, { roughness: 0.4 })); b.position.set(x, 0.35, z); gardGrupp.add(skugga(b)); }
})();

// ================= FIGURER =================
const mamma = skapaFigur(THREE, { skala: 1.1, har: '#7a4a2a', langtHar: true, kropp: '#ff7eb6', kjol: '#ff7eb6', skor: '#ffffff', stjarnor: true });
const storasyster = skapaFigur(THREE, { skala: 0.8, har: '#f4d36b', langtHar: true, kropp: 'regnbage', armar: 'regnbage', kjol: 'regnbage', skor: 'regnbage' });
const grupp = new THREE.Group();
mamma.g.position.set(-0.45, 0, 0); storasyster.g.position.set(0.5, 0, 0.2);
grupp.add(mamma.g, storasyster.g); scen.add(grupp);

const minaBarn = MINA_BARN.map(b => {
  const f = skapaFigur(THREE, { skala: 0.6, har: b.har, har2: b.har2, langtHar: b.id !== 'brun', kropp: 'regnbage', armar: 'regnbage', ben: 'regnbage', skor: 'regnbage' });
  scen.add(f.g);
  const hjarta = textSprite('💗 Mamma!', '#d6336c'); hjarta.position.y = 2.3 / 0.6; hjarta.scale.set(2.6 * hjarta.userData.bredd / 0.6, 0.73 / 0.6, 1); hjarta.visible = false; f.g.add(hjarta);
  const ljus = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 40, 12, 1, true), new THREE.MeshBasicMaterial({ color: 0xff9fd0, transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
  ljus.position.y = 20 / 0.6; ljus.scale.setScalar(1 / 0.6); ljus.visible = false; f.g.add(ljus);
  return { ...b, f, hjarta, ljus, raddad: false, ropat: false, plats: null };
});

const KLADFARG = ['#e8483f', '#2f9bff', '#3ecf6e', '#ffd23f', '#9b5cff', '#ff9f1c', '#14a6c4', '#ff6fae', '#ffffff'];
const BYXFARG = ['#3b5b8c', '#26262e', '#7a7a7a', '#a0522d', '#5b3c88', '#2e7b4f'];
const HARFARG = ['#f4d36b', '#6b4423', '#1d1d1d', '#b5541c', '#3a2a1c'];
const andraBarn = [];
for (let i = 0; i < ANDRA_BARN; i++) {
  const kropp = valj(KLADFARG);
  const f = skapaFigur(THREE, { skala: rnd(0.55, 0.65), har: valj(HARFARG), langtHar: Math.random() < 0.5, kort: Math.random() < 0.3, kropp, armar: Math.random() < 0.5 ? kropp : null, ben: valj(BYXFARG), skor: valj(['#ffffff', '#26262e', '#e8483f', '#2f9bff']), kjol: Math.random() < 0.3 ? valj(KLADFARG) : null, mossa: Math.random() < 0.25 ? valj(KLADFARG) : null });
  f.g.position.set(rnd(-25, 25), 0, rnd(-8, 22));
  scen.add(f.g);
  andraBarn.push({ f, mal: null, vila: rnd(0, 3), sagt: 0 });
}

const randTex = canvasTex(16, 64, (g, w, h) => { for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#1d1d1d' : '#f5f5f5'; g.fillRect(0, i * h / 8, w, h / 8); } });
const randMat = new THREE.MeshStandardMaterial({ map: randTex });
function skapaTjuv() {
  const t = skapaFigur(THREE, { skala: 1.05, har: '#1d1d1d', kropp: randMat, armar: randMat, ben: '#26262e', hud: '#e8b88f', mossa: '#222222' });
  t.mask = new THREE.Mesh(new THREE.CylinderGeometry(0.205, 0.205, 0.07, 16, 1, true), m(0x111111, { side: THREE.DoubleSide })); t.mask.position.y = 1.46; t.g.add(t.mask);
  t.sack = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), m(0xb08a5a)); t.sack.position.set(0.1, 1.15, -0.32); t.sack.scale.y = 1.2; t.g.add(t.sack);
  skugga(t.g); return t;
}
const tjuv = skapaTjuv(); tjuv.g.visible = false; scen.add(tjuv.g);

// ================= LAVAGROTTAN =================
const banaGrupp = new THREE.Group(); banaGrupp.position.copy(BANA_POS); scen.add(banaGrupp);
const lavaTex = canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#ff5a14'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 160; i++) { g.fillStyle = valj(['#ffb020', '#ff7a1a', '#e8380c', '#ffd23f', '#c8260a']); g.beginPath(); g.ellipse(Math.random() * w, Math.random() * h, rnd(6, 26), rnd(4, 14), rnd(0, 3), 0, Math.PI * 2); g.fill(); }
}, [10, 14]);
const lava = new THREE.Mesh(new THREE.PlaneGeometry(80, 110), new THREE.MeshStandardMaterial({ map: lavaTex, emissive: 0xff4a10, emissiveMap: lavaTex, emissiveIntensity: 0.9, roughness: 0.6 }));
lava.rotation.x = -Math.PI / 2; lava.position.set(0, 0, 25); banaGrupp.add(lava);
// grottväggar
for (let i = 0; i < 26; i++) {
  const a = i / 26 * Math.PI * 2, r = rnd(26, 32);
  const s = new THREE.Mesh(new THREE.ConeGeometry(rnd(4, 8), rnd(10, 22), 6), m(0x3a2622, { flatShading: true }));
  s.position.set(Math.cos(a) * r * 0.8, 4, 25 + Math.sin(a) * r * 1.4); banaGrupp.add(s);
}
const lavaLjus = new THREE.PointLight(0xff6a20, 60, 60, 1.6); lavaLjus.position.set(0, 4, 20); banaGrupp.add(lavaLjus);
// gnistor
const gnistGeo = new THREE.BufferGeometry(), gnistPos = new Float32Array(160 * 3);
for (let i = 0; i < 160; i++) { gnistPos[i * 3] = rnd(-14, 14); gnistPos[i * 3 + 1] = rnd(0, 8); gnistPos[i * 3 + 2] = rnd(-4, 52); }
gnistGeo.setAttribute('position', new THREE.BufferAttribute(gnistPos, 3));
const gnistor = new THREE.Points(gnistGeo, new THREE.PointsMaterial({ color: 0xffc040, size: 0.14, transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending }));
banaGrupp.add(gnistor);
// skugga under spelaren så man ser var man landar
const fotSkugga = new THREE.Mesh(new THREE.CircleGeometry(0.42, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.45, depthWrite: false }));
fotSkugga.rotation.x = -Math.PI / 2; banaGrupp.add(fotSkugga);
// plask i lavan
const plask = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: 0xffa020, size: 0.2, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
plask.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(60 * 3), 3)); plask.userData.v = []; plask.visible = false; banaGrupp.add(plask);

let plattformar = [], banaObjekt = [];
const PLATT_TOPP = 1.0;
function byggBana(nr) {
  banaObjekt.forEach(o => banaGrupp.remove(o)); banaObjekt = []; plattformar = [];
  for (const d of BANOR[nr]) {
    const g = new THREE.Group();
    const rorlig = d.typ === 'flotte' || d.typ === 'bro';
    const z = rorlig ? d.fran : d.z;
    g.position.set(d.x, 0, z);
    if (d.typ === 'flotte') {
      for (let i = 0; i < 5; i++) { const s = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, d.b, 10), m(0x9b6b3d)); s.rotation.z = Math.PI / 2; s.position.set(0, PLATT_TOPP - 0.24, -d.d / 2 + 0.24 + i * (d.d - 0.48) / 4); g.add(s); }
      const tvar = new THREE.Mesh(new THREE.BoxGeometry(d.b * 0.9, 0.06, d.d * 0.9), m(0xb07a45)); tvar.position.y = PLATT_TOPP - 0.02; g.add(tvar);
    } else if (d.typ === 'bro') {
      const plank = new THREE.Mesh(new THREE.BoxGeometry(d.b, 0.25, d.d), m(0xc08a50)); plank.position.y = PLATT_TOPP - 0.125; g.add(plank);
      for (let i = 0; i < 6; i++) { const l = new THREE.Mesh(new THREE.BoxGeometry(d.b + 0.02, 0.02, 0.06), m(0x7a5230)); l.position.set(0, PLATT_TOPP + 0.005, -d.d / 2 + 0.25 + i * (d.d - 0.5) / 5); g.add(l); }
      for (const x of [-d.b / 2, d.b / 2]) { const rep = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, d.d), m(0xe8d0a0)); rep.rotation.x = Math.PI / 2; rep.position.set(x, PLATT_TOPP + 0.5, 0); g.add(rep); for (const z2 of [-d.d / 2, d.d / 2]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.5), m(0x7a5230)); p.position.set(x, PLATT_TOPP + 0.25, z2); g.add(p); } }
    } else {
      const sten = new THREE.Mesh(new THREE.BoxGeometry(d.b, 1.6, d.d), m(d.typ === 'sten' ? 0x5a4a44 : 0x6a5a50, { flatShading: true }));
      sten.position.y = PLATT_TOPP - 0.8; g.add(sten);
      const topp = new THREE.Mesh(new THREE.BoxGeometry(d.b - 0.1, 0.05, d.d - 0.1), m(d.typ === 'sten' ? 0x7a6a62 : 0x8a7a6a)); topp.position.y = PLATT_TOPP; g.add(topp);
      if (d.typ === 'start') {
        for (let i = 0; i < 3; i++) { const pil = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.6, 3), new THREE.MeshBasicMaterial({ color: 0xffd23f })); pil.rotation.x = Math.PI / 2; pil.rotation.z = Math.PI; pil.position.set(0, PLATT_TOPP + 0.05, -0.8 + i * 0.75); pil.scale.y = 0.15; g.add(pil); }
      }
      if (d.typ === 'mal') {
        const flagga = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.6), new THREE.MeshBasicMaterial({ color: 0x3ecf6e, side: THREE.DoubleSide })); flagga.position.set(1.4, PLATT_TOPP + 1.9, -1.4); g.add(flagga);
        const pinne = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.2), m(0xffffff)); pinne.position.set(0.95, PLATT_TOPP + 1.1, -1.4); g.add(pinne);
      }
    }
    // kantlist: grön = stilla (hoppa nu!), gul = åker
    let list = null;
    if (rorlig) {
      list = new THREE.Mesh(new THREE.BoxGeometry(d.b + 0.12, 0.08, d.d + 0.12), new THREE.MeshBasicMaterial({ color: 0x3ecf6e }));
      list.position.y = PLATT_TOPP - (d.typ === 'bro' ? 0.2 : 0.42); g.add(list);
    }
    skugga(g); banaGrupp.add(g); banaObjekt.push(g);
    plattformar.push({ ...d, g, list, rorlig, x: d.x, z, topp: PLATT_TOPP, s: 0, rikt: 1, pausT: d.paus || 0, dx: 0, dz: 0, stilla: true });
  }
}
function uppdateraPlattformar(dt) {
  const fartFaktor = fall >= HJALP_EFTER_FALL ? 0.7 : 1;
  for (const p of plattformar) {
    p.dx = 0; p.dz = 0;
    if (!p.rorlig) continue;
    const forra = p.z;
    if (p.pausT > 0) { p.pausT -= dt; p.stilla = true; }
    else {
      p.stilla = false;
      const len = Math.abs(p.till - p.fran);
      p.s += p.rikt * (p.fart * fartFaktor) * dt / len;
      if (p.s >= 1) { p.s = 1; p.rikt = -1; p.pausT = p.paus; }
      if (p.s <= 0) { p.s = 0; p.rikt = 1; p.pausT = p.paus; }
    }
    p.z = p.fran + (p.till - p.fran) * p.s;
    p.dz = p.z - forra;
    p.g.position.z = p.z;
    if (p.list) p.list.material.color.set(p.stilla ? 0x3ecf6e : 0xffb020);
  }
}

// ================= DISCOT HEMMA =================
const discoGrupp = new THREE.Group(); discoGrupp.position.copy(DISCO_POS); scen.add(discoGrupp);
const golvRutor = [];
const discoLjus = [];
let discoBoll;
(() => {
  for (let x = 0; x < 8; x++) for (let z = 0; z < 6; z++) {
    const r = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.1, 1.95), new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0x000000, roughness: 0.4 }));
    r.position.set(-7 + x * 2, 0.05, -5 + z * 2); r.receiveShadow = true; discoGrupp.add(r); golvRutor.push(r);
  }
  const vagg = m(0xffe8f4);
  for (const [w, h, d, x, y, z] of [[16.4, 5, 0.3, 0, 2.5, -6.2], [0.3, 5, 12.4, -8.2, 2.5, 0], [0.3, 5, 12.4, 8.2, 2.5, 0]]) { const v = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), vagg); v.position.set(x, y, z); discoGrupp.add(v); }
  const tak = new THREE.Mesh(new THREE.BoxGeometry(16.4, 0.2, 12.4), m(0x2a1a40)); tak.position.y = 5.1; discoGrupp.add(tak);
  // banderoll
  const band = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.2), new THREE.MeshBasicMaterial({ map: canvasTex(768, 100, (g, w, h) => { g.fillStyle = '#ff6fae'; g.fillRect(0, 0, w, h); g.fillStyle = '#fff'; g.font = 'bold 66px Fredoka, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('VÄLKOMNA HEM!', w / 2, h / 2 + 4); }) }));
  band.position.set(0, 4, -6); discoGrupp.add(band);
  // discokula
  discoBoll = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 2), new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.15, flatShading: true, emissive: 0x333333 }));
  discoBoll.position.set(0, 4.2, 0); discoGrupp.add(discoBoll);
  const tråd = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.8), m(0x888888)); tråd.position.set(0, 4.8, 0); discoGrupp.add(tråd);
  REGNBAGE.forEach((c, i) => { const l = new THREE.PointLight(c, 25, 14, 1.5); l.position.set(0, 3.5, 0); discoGrupp.add(l); discoLjus.push(l); });
})();
// familjen på discot
const FAMILJ = [
  { namn: 'Mormor', o: { skala: 1.0, har: '#c8c8c8', langtHar: true, kropp: '#9b5cff', kjol: '#9b5cff', glasogon: true } },
  { namn: 'Morfar', o: { skala: 1.08, har: '#e8e8e8', kort: true, kropp: '#2f9bff', ben: '#3b3b48', glasogon: true } },
  { namn: 'Farmor', o: { skala: 1.0, har: '#b8b0a8', langtHar: true, kropp: '#3ecf6e', kjol: '#2e7b4f' } },
  { namn: 'Farfar', o: { skala: 1.08, har: '#d8d8d8', kort: true, kropp: '#ff9f1c', ben: '#5b4632', mossa: '#a0522d' } },
  { namn: 'Gammelmormor', o: { skala: 0.95, har: '#ffffff', langtHar: true, kropp: '#ff6fae', kjol: '#c2185b', glasogon: true, kapp: true } },
  { namn: 'Gammelmorfar', o: { skala: 1.0, har: '#ffffff', kort: true, kropp: '#14a6c4', ben: '#26262e', glasogon: true, kapp: true } },
];
const familj = FAMILJ.map(d => { const f = skapaFigur(THREE, d.o); const s = textSprite(d.namn); s.position.y = 2.0 / (d.o.skala || 1); s.scale.set(1.25 * s.userData.bredd / (d.o.skala || 1), 0.36 / (d.o.skala || 1), 1); f.g.add(s); f.g.visible = false; discoGrupp.add(f.g); return f; });

// ================= STYRNING =================
const tangent = {};
const spelare = { pos: new THREE.Vector3(0, 0, 20), yaw: Math.PI };
addEventListener('keydown', e => {
  tangent[e.code] = true;
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
  if (e.code === 'Space' && !e.repeat) hoppBuffer = 0.16;
  if (e.code === 'KeyP' || (e.code === 'Escape' && !musLast)) { if (lage === 'paus') fortsatt(); else pausa(); }
});
addEventListener('keyup', e => { tangent[e.code] = false; });
addEventListener('blur', () => { for (const k in tangent) tangent[k] = false; });
document.querySelectorAll('[data-t]').forEach(b => {
  const t = b.dataset.t;
  b.addEventListener('pointerdown', e => { e.preventDefault(); tangent[t] = true; if (t === 'Space') hoppBuffer = 0.16; });
  for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) b.addEventListener(ev, () => { tangent[t] = false; });
});
let lastTid = 0, musLast = false, musMal = null, musX = 0.5, forvantadUpplasning = false;
const duk = renderer.domElement;
const styrbar = () => lage === 'gard' || lage === 'bana';
function lasMus() { if (!duk.requestPointerLock || musLast) return; try { const r = duk.requestPointerLock(); if (r && r.catch) r.catch(() => {}); } catch (e) {} }
function slappMus() { if (document.pointerLockElement) { forvantadUpplasning = true; document.exitPointerLock(); } }
duk.addEventListener('click', () => { if (styrbar()) lasMus(); });
document.addEventListener('pointerlockchange', () => {
  musLast = document.pointerLockElement === duk; lastTid = performance.now();
  $('musTips').classList.toggle('dold', musLast || !styrbar());
  if (!musLast && !forvantadUpplasning && styrbar()) pausa();
  forvantadUpplasning = false;
});
document.addEventListener('pointerlockerror', () => { $('musTips').textContent = 'Flytta musen till kanten av skärmen för att titta åt sidan'; });
addEventListener('mousemove', e => {
  if (!musLast) musX = e.clientX / innerWidth;
  if (!musLast || !styrbar()) return;
  if (performance.now() - lastTid < 250) return;
  const dx = Math.max(-80, Math.min(80, e.movementX || 0));
  if (musMal === null) musMal = spelare.yaw;
  musMal -= dx * MUS_KANSLA;
});
function titta(dt) {
  if (tangent.SvangV) { spelare.yaw += SVANG_FART * dt; musMal = null; }
  if (tangent.SvangH) { spelare.yaw -= SVANG_FART * dt; musMal = null; }
  if (!musLast && !tangent.SvangV && !tangent.SvangH && matchMedia('(pointer:fine)').matches) {
    if (musX < 0.08) spelare.yaw += 1.6 * dt * (1 - musX / 0.08);
    if (musX > 0.92) spelare.yaw -= 1.6 * dt * ((musX - 0.92) / 0.08);
  }
  if (musMal !== null) { spelare.yaw += (musMal - spelare.yaw) * Math.min(1, dt * MUS_MJUKHET); if (Math.abs(musMal - spelare.yaw) < 0.0005) musMal = null; }
}
function riktning() {
  const fram = (tangent.KeyW || tangent.ArrowUp ? 1 : 0) - (tangent.KeyS || tangent.ArrowDown ? 0.7 : 0);
  const sida = (tangent.KeyD || tangent.ArrowRight ? 1 : 0) - (tangent.KeyA || tangent.ArrowLeft ? 1 : 0);
  const fx = Math.sin(spelare.yaw), fz = Math.cos(spelare.yaw);
  let rx = fx * fram - fz * sida * 0.85, rz = fz * fram + fx * sida * 0.85;
  const len = Math.hypot(rx, rz); if (len > 1) { rx /= len; rz /= len; }
  const fart = (tangent.ShiftLeft || tangent.ShiftRight) ? SPRING_FART : GA_FART;
  return { rx, rz, fart, fram };
}

// ================= SPELLÄGE =================
let lage = 'start', spelTid = 0, sedanFynd = 0, raddade = 0, fall = 0, fallTotalt = 0, aktivtBarn = null, fortsattLage = 'gard';
let hoppBuffer = 0;
const kropp = { x: 0, y: PLATT_TOPP, z: 0, vy: 0, mark: null, sedanMark: 0 }; // storasysters kropp på lavabanan (räknat i banans koordinater)
const foljare = []; // räddade barn som går efter
const spar = [];    // gruppens fotspår så barnen kan följa

function lasRekord() { try { return Number(localStorage.getItem(`tid:${SPEL_ID}`)) || 0; } catch (e) { return 0; } }
function tidText(s) { s = Math.round(s); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
function visaRekord() { const r = lasRekord(); $('rekordText').textContent = r ? `Snabbaste räddning: ${tidText(r)}` : ''; }
visaRekord();

function placeraMinaBarn() {
  const val = [];
  for (let f = 0; f < 400 && val.length < 3; f++) {
    const s = valj(gomstallen);
    if (val.includes(s) || val.some(v => Math.hypot(v.x - s.x, v.z - s.z) < 12)) continue;
    if (Math.hypot(s.x - spelare.pos.x, s.z - spelare.pos.z) < 10) continue;
    val.push(s);
  }
  while (val.length < 3) { const s = valj(gomstallen); if (!val.includes(s)) val.push(s); }
  minaBarn.forEach((b, i) => {
    b.plats = val[i]; b.raddad = false; b.ropat = false;
    b.f.g.visible = true; b.f.g.position.set(val[i].x, 0, val[i].z); b.f.g.rotation.set(0, rnd(0, 6), 0); b.f.bas = 0;
    b.ljus.visible = false; b.hjarta.visible = false;
    if (b.f.g.parent !== scen) scen.add(b.f.g);
    $('plats-' + b.id).classList.remove('raddad');
  });
}
function starta() {
  startaLjud(); stoppaMusik();
  ['start', 'slut', 'paus'].forEach(id => $(id).classList.add('dold'));
  ['hud', 'tid', 'pekplatta'].forEach(id => $(id).classList.remove('dold'));
  sattOmrade('gard'); gardGrupp.visible = true;
  spelare.pos.set(0, 0, 21); spelare.yaw = Math.PI; musMal = null;
  grupp.position.copy(spelare.pos); grupp.visible = true;
  grupp.add(mamma.g, storasyster.g); mamma.g.position.set(-0.45, 0, 0); storasyster.g.position.set(0.5, 0, 0.2); mamma.g.rotation.set(0, 0, 0); storasyster.g.rotation.set(0, 0, 0); mamma.bas = 0; storasyster.bas = 0;
  familj.forEach(f => f.g.visible = false);
  foljare.length = 0; spar.length = 0;
  tjuv.g.visible = false; tjuv.mask.visible = true; tjuv.sack.visible = true; tjuv.g.parent !== scen && scen.add(tjuv.g);
  andraBarn.forEach(b => { b.f.g.visible = true; b.f.g.position.set(rnd(-25, 25), 0, rnd(-8, 22)); b.mal = null; });
  placeraMinaBarn();
  spelTid = 0; sedanFynd = 0; raddade = 0; fallTotalt = 0; aktivtBarn = null;
  lage = 'gard'; lasMus(); $('musTips').classList.toggle('dold', musLast);
  setTimeout(() => visa('Tjuven har tagit mammas tre barn! Leta efter barnen i regnbågspyjamas.', 6), 300);
}
$('spelaKnapp').onclick = starta;
$('igenKnapp').onclick = starta;
function pausa() { if (!styrbar()) return; fortsattLage = lage; lage = 'paus'; $('paus').classList.remove('dold'); slappMus(); for (const k in tangent) tangent[k] = false; }
function fortsatt() { lage = fortsattLage; $('paus').classList.add('dold'); musMal = null; lasMus(); }
$('fortsattKnapp').onclick = fortsatt;

// --- hittat ett av mammas barn: tjuven tar det till lavagrottan ---
async function hittaBarn(b) {
  lage = 'tagen'; aktivtBarn = b; ljud.hitta(); b.hjarta.visible = false; b.ljus.visible = false;
  visa(`Där är ${b.namn}! Men titta, tjuven kommer!`, 3);
  await vanta(900);
  ljud.tjuv();
  const v = Math.atan2(b.f.g.position.x - spelare.pos.x, b.f.g.position.z - spelare.pos.z);
  tjuv.g.position.set(b.f.g.position.x + Math.sin(v) * 6, 0, b.f.g.position.z + Math.cos(v) * 6);
  tjuv.g.visible = true; tjuv.bas = 0; tjuv.springTill = b.f.g.position.clone();
  await vanta(1400);
  visa('Tjuven tog barnet till lavagrottan! Storasyster, spring efter!', 3.5);
  tjuv.g.add(b.f.g); b.f.g.position.set(0, 0.55, 0.3); b.f.g.rotation.set(-1.0, 0, 0); b.f.g.scale.setScalar(0.6 / 1.05);
  tjuv.springTill = new THREE.Vector3(tjuv.g.position.x * 2.5, 0, -40);
  await vanta(2200);
  await tona(() => startaBana(raddade));
}
function startaBana(nr) {
  lage = 'bana'; fall = 0; hoppBuffer = 0;
  sattOmrade('bana'); gardGrupp.visible = false; grupp.visible = false;
  andraBarn.forEach(b => b.f.g.visible = false); minaBarn.forEach(b => { if (!b.raddad && b !== aktivtBarn) b.f.g.visible = false; }); foljare.forEach(f => f.f.g.visible = false);
  byggBana(nr);
  // storasyster är spelaren, mamma hejar vid starten
  banaGrupp.add(storasyster.g, mamma.g);
  storasyster.g.rotation.set(0, 0, 0); storasyster.bas = 0;
  mamma.g.position.set(-1.6, PLATT_TOPP, 1.1); mamma.g.rotation.set(0, 0, 0); mamma.bas = PLATT_TOPP;
  const mal = plattformar[plattformar.length - 1];
  banaGrupp.add(aktivtBarn.f.g); aktivtBarn.f.g.position.set(mal.x - 0.6, PLATT_TOPP, mal.z + 0.6); aktivtBarn.f.g.rotation.set(0, Math.PI, 0); aktivtBarn.f.g.scale.setScalar(0.6); aktivtBarn.f.bas = PLATT_TOPP; aktivtBarn.f.g.visible = true;
  banaGrupp.add(tjuv.g); tjuv.g.visible = true; tjuv.springTill = null; tjuv.g.position.set(mal.x + 0.9, PLATT_TOPP, mal.z + 0.8); tjuv.g.rotation.set(0, Math.PI, 0); tjuv.bas = PLATT_TOPP;
  tillStart();
  $('banskylt').textContent = `Lavabana ${nr + 1} av 3`; $('banskylt').classList.remove('dold');
  $('hoppKnapp').classList.remove('dold');
  visa(nr === 0 ? 'Hoppa över lavan och rädda barnet! Mellanslag = hoppa. Hoppa på flotten när kanten är grön.' : 'Hoppa över lavan! Bron är snabb, hoppa på när kanten är grön.', 6);
}
function tillStart() {
  kropp.x = 0; kropp.y = PLATT_TOPP; kropp.z = 0; kropp.vy = 0; kropp.mark = plattformar[0]; kropp.sedanMark = 0;
  spelare.yaw = 0; musMal = null; kameraMal = null;
}
async function iLavan() {
  lage = 'lavafall'; ljud.lava(); fall++; fallTotalt++;
  plask.visible = true; const a = plask.geometry.attributes.position.array; plask.userData.v = [];
  for (let i = 0; i < 60; i++) { a[i * 3] = kropp.x; a[i * 3 + 1] = 0.2; a[i * 3 + 2] = kropp.z; plask.userData.v.push([rnd(-2, 2), rnd(3, 7), rnd(-2, 2)]); }
  visa(fall === HJALP_EFTER_FALL ? 'Aj, varmt! Nu går flotten och bron lite långsammare. Försök igen!' : 'Aj, varmt! Försök igen från början.', 3);
  await vanta(900);
  await tona(() => { tillStart(); lage = 'bana'; });
}
async function raddaBarn() {
  lage = 'raddat'; ljud.vinst();
  const b = aktivtBarn; b.raddad = true; raddade++; sedanFynd = 0;
  const el = $('plats-' + b.id); el.classList.add('raddad', 'pop'); setTimeout(() => el.classList.remove('pop'), 650);
  tjuv.springTill = new THREE.Vector3(tjuv.g.position.x + 6, PLATT_TOPP, tjuv.g.position.z + 14);
  visa(raddade < 3 ? `Räddad! Tjuven springer iväg. ${3 - raddade === 1 ? 'Ett barn kvar!' : 'Två barn kvar!'}` : 'Alla tre barnen är räddade! Nu åker vi hem på disco!', 4);
  await vanta(2600);
  if (raddade < 3) await tona(tillbakaTillGarden);
  else await tona(startaDisco3D);
}
function tillbakaTillGarden() {
  $('banskylt').classList.add('dold'); $('hoppKnapp').classList.add('dold');
  sattOmrade('gard'); gardGrupp.visible = true; grupp.visible = true;
  grupp.add(mamma.g, storasyster.g); mamma.g.position.set(-0.45, 0, 0); storasyster.g.position.set(0.5, 0, 0.2); mamma.g.rotation.set(0, 0, 0); storasyster.g.rotation.set(0, 0, 0); mamma.bas = 0; storasyster.bas = 0;
  scen.add(tjuv.g); tjuv.g.visible = false; tjuv.springTill = null; tjuv.bas = 0;
  andraBarn.forEach(b => b.f.g.visible = true);
  minaBarn.forEach(b => { if (!b.raddad) b.f.g.visible = true; });
  const b = aktivtBarn; scen.add(b.f.g); b.f.bas = 0; b.f.g.scale.setScalar(0.6);
  b.f.g.position.set(spelare.pos.x - Math.sin(spelare.yaw) * 1.5, 0, spelare.pos.z - Math.cos(spelare.yaw) * 1.5);
  foljare.push(b); foljare.forEach(f => f.f.g.visible = true); spar.length = 0;
  spelare.yaw = Math.atan2(0 - spelare.pos.x, 8 - spelare.pos.z); musMal = null; // titta ut mot gården så inget står i vägen
  aktivtBarn = null; kameraMal = null; lage = 'gard'; lasMus();
}
function startaDisco3D() {
  lage = 'disco'; slappMus(); stoppaMusik(); startaDisco();
  ['hud', 'tid', 'pekplatta', 'banskylt', 'musTips', 'hoppKnapp'].forEach(id => $(id).classList.add('dold'));
  $('medd').classList.add('osynlig');
  sattOmrade('disco'); gardGrupp.visible = false;
  // alla i en ring på dansgolvet
  const alla = [mamma, storasyster, ...minaBarn.map(b => b.f), ...familj, tjuv];
  // främre raden: mamma, storasyster och de tre barnen. Bakre raden: släkten och tjuven.
  const fram = alla.slice(0, 5), bak = alla.slice(5);
  fram.forEach((f, i) => { f.g.position.set(-2.6 + i * 1.3, 0, 1.6); });
  bak.forEach((f, i) => { f.g.position.set(-5.4 + i * 1.8, 0, -1.4 + (i % 2) * 0.5); });
  alla.forEach(f => { discoGrupp.add(f.g); f.g.visible = true; f.bas = 0; f.g.rotation.set(0, 0, 0); });
  minaBarn.forEach(b => b.f.g.scale.setScalar(0.6));
  tjuv.mask.visible = false; tjuv.sack.visible = false;
  discoTid = 0;
  const r = lasRekord(), nytt = !r || spelTid < r;
  try { if (nytt) localStorage.setItem(`tid:${SPEL_ID}`, String(Math.round(spelTid))); localStorage.setItem(`rekord:${SPEL_ID}`, String((Number(localStorage.getItem(`rekord:${SPEL_ID}`)) || 0) + 1)); } catch (e) {}
  $('slutText').textContent = `Alla tre barnen räddade på ${tidText(spelTid)}! Hela familjen har kommit: mormor, morfar, farmor, farfar, gammelmormor och gammelmorfar. Till och med tjuven blev snäll och dansar med.${nytt ? ' Nytt rekord!' : ''}`;
  setTimeout(() => { if (lage === 'disco') { $('slut').classList.remove('dold'); saga('Disco! ' + $('slutText').textContent); } }, 6000);
}

// ================= LOOP =================
const klocka = new THREE.Clock();
let t = 0, kameraMal = null, discoTid = 0;
const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3();
function rorMot(f, mal, fart, dt, stopp = 0.3) {
  const p = f.g.position, dx = mal.x - p.x, dz = mal.z - p.z, d = Math.hypot(dx, dz);
  if (d > stopp) { p.x += dx / d * Math.min(fart * dt, d); p.z += dz / d * Math.min(fart * dt, d); f.g.rotation.y = Math.atan2(dx, dz); f.ga(dt, fart); return false; }
  f.ga(dt, 0); return true;
}
function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, klocka.getDelta()); t += dt;
  hoppBuffer = Math.max(0, hoppBuffer - dt);
  if (meddTimer > 0) { meddTimer -= dt; if (meddTimer <= 0) $('medd').classList.add('osynlig'); }

  if (lage === 'gard' || lage === 'tagen') uppdateraGard(dt);
  if (lage === 'bana' || lage === 'lavafall' || lage === 'raddat') uppdateraBana(dt);
  if (lage === 'disco') uppdateraDisco(dt);
  if (lage === 'start') {
    const v = t * 0.05; kamera.position.set(Math.sin(v) * 30, 11, Math.cos(v) * 30 + 6); kamera.lookAt(0, 1, 4);
    grupp.position.set(0, 0, 14); grupp.rotation.y = t * 0.3;
    for (const b of andraBarn) vandra(b, dt);
  }
  if (lage === 'gard' || lage === 'tagen' || lage === 'paus' && fortsattLage === 'gard') {
    const fx = Math.sin(spelare.yaw), fz = Math.cos(spelare.yaw);
    tmp.set(spelare.pos.x - fx * 5.6, 4.6, spelare.pos.z - fz * 5.6);
    if (!kameraMal) { kameraMal = new THREE.Vector3(); kamera.position.copy(tmp); }
    kamera.position.lerp(tmp, Math.min(1, dt * 8));
    kameraMal.set(spelare.pos.x + fx * 3.5, 0.6, spelare.pos.z + fz * 3.5); kamera.lookAt(kameraMal);
  }
  renderer.render(scen, kamera);
}
function vandra(b, dt) {
  const p = b.f.g.position;
  if (b.vila > 0) { b.vila -= dt; b.f.ga(dt, 0); return; }
  if (!b.mal) b.mal = new THREE.Vector3(rnd(-26, 26), 0, rnd(-9, 23));
  const fore = p.clone();
  if (rorMot(b.f, b.mal, 1.3, dt, 0.4)) { b.mal = null; b.vila = rnd(1, 4); }
  krock(p, 0.3);
  if (p.distanceTo(fore) < 0.001 && b.mal) { b.mal = null; b.vila = rnd(0.5, 2); }
}
function uppdateraGard(dt) {
  for (const b of andraBarn) vandra(b, dt);
  // mammas barn som väntar: vinkar och ropar när man är nära
  for (const b of minaBarn) {
    if (b.raddad || b === aktivtBarn) continue;
    const d = Math.hypot(b.f.g.position.x - spelare.pos.x, b.f.g.position.z - spelare.pos.z);
    const nara = d < HJARTA_AVSTAND;
    b.hjarta.visible = nara;
    if (nara) { b.f.g.rotation.y = Math.atan2(spelare.pos.x - b.f.g.position.x, spelare.pos.z - b.f.g.position.z); b.f.vinka(t); b.f.g.position.y = Math.abs(Math.sin(t * 4)) * 0.08; }
    else b.f.ga(dt, 0);
    if (nara && !b.ropat && lage === 'gard') { b.ropat = true; visa(`Mamma! Här är jag! (${b.plats.namn})`, 3); }
  }
  if (lage === 'tagen') {
    if (tjuv.springTill) rorMot(tjuv, tjuv.springTill, 7, dt, 0.8);
    mamma.ga(dt, 0); storasyster.ga(dt, 0);
    return;
  }
  spelTid += dt; sedanFynd += dt; $('tid').textContent = tidText(spelTid);
  titta(dt);
  const { rx, rz, fart } = riktning();
  spelare.pos.x += rx * fart * dt; spelare.pos.z += rz * fart * dt;
  krock(spelare.pos, 0.85);
  grupp.position.copy(spelare.pos); grupp.rotation.y = spelare.yaw;
  const rorelse = Math.min(1, Math.hypot(rx, rz)) * fart;
  mamma.ga(dt, rorelse); storasyster.ga(dt, rorelse);
  // räddade barn följer efter i fotspåren
  if (!spar.length || spar[spar.length - 1].distanceTo(spelare.pos) > 0.25) { spar.push(spelare.pos.clone()); if (spar.length > 60) spar.shift(); }
  foljare.forEach((f, i) => {
    const mal = spar[Math.max(0, spar.length - 1 - (i + 1) * 6)] || spelare.pos;
    rorMot(f.f, mal, fart * 1.1, dt, 0.5);
  });
  // gick fram till ett barn?
  for (const b of minaBarn) {
    if (b.raddad) continue;
    if (Math.hypot(b.f.g.position.x - spelare.pos.x, b.f.g.position.z - spelare.pos.z) < 2.0) { hittaBarn(b); return; }
  }
  for (const b of andraBarn) {
    if (Math.hypot(b.f.g.position.x - spelare.pos.x, b.f.g.position.z - spelare.pos.z) < 1.4 && t - b.sagt > 8) {
      b.sagt = t; ljud.nej();
      visa(valj(['Det där är inte vårt barn. Våra har regnbågspyjamas!', 'Hej! Jag är inte ert barn. Leta efter regnbågspyjamas!', 'Nej, mitt barn har regnbågsskor!']), 3);
    }
  }
  // ledljus om det tar tid
  const kvar = minaBarn.filter(b => !b.raddad);
  if (kvar.length && sedanFynd > LEDLJUS_EFTER) {
    const n = kvar.reduce((a, b) => Math.hypot(a.f.g.position.x - spelare.pos.x, a.f.g.position.z - spelare.pos.z) < Math.hypot(b.f.g.position.x - spelare.pos.x, b.f.g.position.z - spelare.pos.z) ? a : b);
    if (!n.ljus.visible) { n.ljus.visible = true; visa('Titta! Ett rosa ljus visar var ett av barnen är.', 4); }
  }
}
function uppdateraBana(dt) {
  uppdateraPlattformar(dt);
  lava.material.map.offset.y = (t * 0.02) % 1; lava.material.emissiveIntensity = 0.85 + Math.sin(t * 2) * 0.1;
  lavaLjus.intensity = 55 + Math.sin(t * 3) * 8;
  const ga = gnistGeo.attributes.position.array;
  for (let i = 0; i < 160; i++) { ga[i * 3 + 1] += dt * (0.6 + (i % 5) * 0.2); if (ga[i * 3 + 1] > 9) ga[i * 3 + 1] = 0; }
  gnistGeo.attributes.position.needsUpdate = true;
  if (plask.visible) {
    const a = plask.geometry.attributes.position.array;
    plask.userData.v.forEach((v, i) => { v[1] -= 15 * dt; a[i * 3] += v[0] * dt; a[i * 3 + 1] += v[1] * dt; a[i * 3 + 2] += v[2] * dt; });
    plask.geometry.attributes.position.needsUpdate = true; if (plask.userData.v[0][1] < -12) plask.visible = false;
  }
  mamma.vinka(t); mamma.g.position.y = PLATT_TOPP + Math.abs(Math.sin(t * 4)) * 0.06;
  if (aktivtBarn) { aktivtBarn.f.vinka(t); }
  if (tjuv.springTill && lage === 'raddat') rorMot(tjuv, tjuv.springTill, 6, dt, 0.5); else if (lage !== 'raddat') tjuv.dansa(t * 0.6, 0, 0.05);

  if (lage === 'bana') {
    spelTid += dt; $('tid').textContent = tidText(spelTid);
    titta(dt);
    const { rx, rz, fart } = riktning();
    // åk med plattformen man står på
    if (kropp.mark) { kropp.x += kropp.mark.dx; kropp.z += kropp.mark.dz; }
    const styr = kropp.mark ? 1 : LUFT_STYRNING;
    kropp.x += rx * fart * styr * dt; kropp.z += rz * fart * styr * dt;
    const forraY = kropp.y;
    if (kropp.mark && !paPlattform(kropp.mark, 0.05)) kropp.mark = null;
    if (kropp.mark) { kropp.y = kropp.mark.topp; kropp.vy = 0; kropp.sedanMark = 0; }
    else { kropp.sedanMark += dt; kropp.vy -= GRAVITATION * dt; kropp.y += kropp.vy * dt; }
    if (hoppBuffer > 0 && (kropp.mark || kropp.sedanMark < FORLATANDE_HOPP) && kropp.vy <= 0.01) {
      kropp.vy = HOPP_KRAFT; kropp.mark = null; kropp.sedanMark = 1; hoppBuffer = 0; ljud.hopp();
    }
    // landa
    if (!kropp.mark && kropp.vy <= 0) {
      for (const p of plattformar) {
        if (forraY >= p.topp - 0.15 && kropp.y <= p.topp && paPlattform(p, 0.12)) { kropp.y = p.topp; kropp.vy = 0; kropp.mark = p; ljud.landa(); break; }
      }
    }
    // inte gå igenom stenar från sidan
    for (const p of plattformar) {
      if (kropp.y < p.topp - 0.2 && paPlattform(p, 0.25)) {
        const dx = kropp.x - p.x, dz = kropp.z - p.z, ox = p.b / 2 + 0.25 - Math.abs(dx), oz = p.d / 2 + 0.25 - Math.abs(dz);
        if (ox < oz) kropp.x += Math.sign(dx) * ox; else kropp.z += Math.sign(dz) * oz;
      }
    }
    kropp.x = Math.max(-12, Math.min(12, kropp.x));
    if (kropp.y < 0.3) { iLavan(); }
    const mal = plattformar[plattformar.length - 1];
    if (kropp.mark === mal) raddaBarn();
    // figuren
    storasyster.g.position.set(kropp.x, kropp.y, kropp.z);
    const rorelse = Math.min(1, Math.hypot(rx, rz)) * fart;
    if (rorelse > 0.1) storasyster.g.rotation.y += vinkelSkillnad(storasyster.g.rotation.y, Math.atan2(rx, rz)) * Math.min(1, dt * 12);
    if (kropp.mark) { storasyster.bas = kropp.y; storasyster.ga(dt, rorelse); } else storasyster.hoppa();
  } else if (lage === 'raddat') {
    storasyster.dansa(t, 0, 0.2); storasyster.bas = PLATT_TOPP;
  }
  // skugga under fötterna
  let golv = 0.02;
  for (const p of plattformar) if (paPlattform(p, 0) && p.topp <= kropp.y + 0.01) golv = Math.max(golv, p.topp + 0.02);
  fotSkugga.position.set(kropp.x, golv, kropp.z);
  fotSkugga.material.opacity = Math.max(0.15, 0.5 - (kropp.y - golv) * 0.08);
  // kamera bakom storasyster
  const fx = Math.sin(spelare.yaw), fz = Math.cos(spelare.yaw);
  tmp.set(BANA_POS.x + kropp.x - fx * 6, BANA_POS.y + Math.max(kropp.y, PLATT_TOPP) + 3.6, BANA_POS.z + kropp.z - fz * 6);
  if (!kameraMal) { kameraMal = new THREE.Vector3(); kamera.position.copy(tmp); }
  kamera.position.lerp(tmp, Math.min(1, dt * 7));
  kameraMal.set(BANA_POS.x + kropp.x + fx * 4, BANA_POS.y + PLATT_TOPP, BANA_POS.z + kropp.z + fz * 4); kamera.lookAt(kameraMal);
}
function paPlattform(p, marg) { return Math.abs(kropp.x - p.x) <= p.b / 2 + marg && Math.abs(kropp.z - p.z) <= p.d / 2 + marg; }
const vinkelSkillnad = (a, b) => ((((b - a) % (Math.PI * 2)) + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
function uppdateraDisco(dt) {
  discoTid += dt;
  const alla = [mamma, storasyster, ...minaBarn.map(b => b.f), ...familj, tjuv];
  alla.forEach((f, i) => f.dansa(t, i * 0.7, f === familj[4] || f === familj[5] ? 0.06 : 0.15));
  golvRutor.forEach((r, i) => { const c = REGNBAGE[(i + Math.floor(t * 4)) % 6]; r.material.emissive.set(((i * 7 + Math.floor(t * 4)) % 3) ? 0x000000 : c); r.material.emissiveIntensity = 0.8; });
  discoBoll.rotation.y += dt * 1.2;
  discoLjus.forEach((l, i) => { const v = t * 1.3 + i / discoLjus.length * Math.PI * 2; l.position.set(Math.cos(v) * 5, 3.2, Math.sin(v) * 3.5); });
  const v = discoTid * 0.15;
  kamera.position.set(DISCO_POS.x + Math.sin(v) * 2.5, 2.8, DISCO_POS.z + 8.4);
  kamera.lookAt(DISCO_POS.x, 1.1, DISCO_POS.z);
}
sattOmrade('gard');
loop();

// testkrokar
window.__raddabarnen = {
  spelare, kropp, minaBarn, andraBarn, tjuv, get plattformar() { return plattformar; }, starta, hittaBarn, startaBana, startaDisco3D,
  get lage() { return lage; }, get raddade() { return raddade; }, get fall() { return fallTotalt; },
};
