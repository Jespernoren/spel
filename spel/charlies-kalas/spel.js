// =============================================================
//  Charlies Kalas – en idé av Charlie
//  Charlie fyller 7 år, men Beppe har inte kommit. Han skulle ta
//  med tårtan som hans mamma har bakat. En tjuv har tagit Beppe och
//  gömt honom uppe på det stora berget, och en annan tjuv har tagit
//  tårtan till kungens slott. Tjuvarna ville bara gå på kalaset!
//
//  Man spelar som Charlies mamma (i rosa och regnbågsfärgade
//  kalaskläder). Charlie följer med och letar.
//   1. Kalaset    – Beppe och tårtan saknas.
//   2. Letandet   – tre grupper med tre barn i varje släpper
//                   ballonger som visar vägen.
//   3. Berget     – regnbågstrappan försvinner steg för steg.
//                   Såpbubblor får tjuven att fnissa och tappa Beppe.
//   4. Slottet    – ge kungen godis och bjud honom på kalaset.
//   5. Disco      – alla dansar, även tjuvarna och kungen.
//  Hittar man alla presenter: godisregn och poolparty!
// =============================================================
import * as THREE from 'three';
import { skapaFigur, REGNBAGE } from '../../delat/figurer.js';

// ================= JUSTERBARA VÄRDEN =================
const GA_FART = 4.4;            // meter per sekund
const SPRING_FART = 7.0;        // med Shift
const HOPP_KRAFT = 8.0;         // hur högt man hoppar
const GRAVITATION = 21;
const LUFT_STYRNING = 0.55;     // fart i luften jämfört med på marken (lägre = lättare att landa på trappstegen)
const FORLATANDE_HOPP = 0.15;   // sekunder man kan hoppa efter att ha gått över kanten
const MUS_KANSLA = 0.0035;
const MUS_MJUKHET = 12;
const SVANG_FART = 2.0;         // pekknapparna ◀ ▶
// Regnbågstrappan: en vanlig trappa som man går uppför (Charlies önskan).
// Stegen bakom en försvinner när man har gått vidare till nästa steg.
const FORSVINN_BAKOM = 0.5;     // sekunder innan steget bakom en försvinner
const HJALP_EFTER_FALL = 3;
const ANTAL_STEG = 34;          // trappsteg upp till toppen
const STEG_HOJD = 0.35;         // hur mycket högre varje steg är
const STEG_AVSTAND = 0.94;      // hur långt det är mellan stegen
const STEG_DJUP = 0.98;         // hur djupt varje steg är
const STEG_BREDD = 2.8;         // hur brett varje steg är
const KLIV_HOJD = 0.45;         // så högt kan man kliva upp utan att hoppa
const KUNG_GODIS = 3;           // så mycket godis kungen vill ha
const BUBBEL_RACKVIDD = 8;      // hur nära tjuven man ska vara för att bubblorna ska nå
const KAMERA_AVSTAND = 6.0;
const KAMERA_HOJD = 4.4;
const SPEL_ID = 'charlies-kalas';

const BERG = { x: 0, z: -64, botten: 16, topp: 6.5, hojd: 12 };
const TRAPP_START = { x: 0, z: -26 };
const SLOTT_POS = new THREE.Vector3(300, 0, 0);
const DISCO_POS = new THREE.Vector3(-300, 0, 0);

// Grupperna med tre barn. farg = tröjor och ballong.
const GRUPPER = [
  { x: -24, z: 10, farg: '#ff4d4d', plats: 'vid dammen' },
  { x: 24, z: -4, farg: '#ffd23f', plats: 'vid lekplatsen' },
  { x: -16, z: -22, farg: '#9b5cff', plats: 'vid stenarna' },
];
const GRUPP_REPLIK = [
  'Hej! Vi har letat här {plats}, men Beppe är inte här. Följ vår ballong!',
  'Vi såg en tjuv springa förbi med ett barn i rosa tröja! Följ ballongen!',
  'Tjuven sprang upp på det stora berget! Titta, en regnbågstrappa!',
];
// Gömda presenter (x, z, y = höjd)
const PRESENTER = [
  { x: -31, z: 22, y: 0 }, { x: 33, z: 18, y: 0 }, { x: 30, z: -24, y: 0 },
  { x: -34, z: -8, y: 0 }, { x: 12, z: -40, y: 0 }, { x: -3, z: -66, y: 12 },
];

// ================= HJÄLP =================
const rnd = (a, b) => a + Math.random() * (b - a);
const valj = (l) => l[Math.floor(Math.random() * l.length)];
const $ = (id) => document.getElementById(id);
const vanta = (ms) => new Promise(r => setTimeout(r, ms));
const vinkelSkillnad = (a, b) => ((((b - a) % (Math.PI * 2)) + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
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
// visa('text') eller visa('text', sek, 'Vem')
function visa(text, sek = 4, vem = null) {
  const m = $('medd');
  m.innerHTML = vem ? `<span class="vem">${vem}:</span> ` : '';
  m.appendChild(document.createTextNode(text));
  m.classList.remove('osynlig');
  meddTimer = sek; saga(text);
}
async function tona(fn) {
  $('tona').classList.add('svart'); await vanta(480);
  fn(); await vanta(120);
  $('tona').classList.remove('svart');
}
function uppdrag(text) { $('uppdrag').textContent = text; }
function poppa(id) { const e = $(id); e.classList.remove('pop'); void e.offsetWidth; e.classList.add('pop'); }

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
function brus(start, dur, vol = 0.3) {
  if (!ac) return;
  const n = Math.floor(ac.sampleRate * dur), buf = ac.createBuffer(1, n, ac.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
  const s = ac.createBufferSource(), g = ac.createGain(); s.buffer = buf; g.gain.value = vol;
  s.connect(g); g.connect(huvudvol); s.start(ac.currentTime + start);
}
const ljud = {
  hitta() { [523, 659, 784, 1047].forEach((f, i) => ton(f, i * 0.08, 0.35, 'triangle', 0.25)); },
  godis() { ton(1046, 0, 0.12, 'triangle', 0.18); ton(1568, 0.06, 0.15, 'triangle', 0.15); },
  present() { [784, 988, 1175, 1568].forEach((f, i) => ton(f, i * 0.07, 0.3, 'triangle', 0.2)); },
  hopp() { if (!ac) return; const t = ac.currentTime, o = ac.createOscillator(), g = ac.createGain(); o.type = 'triangle'; o.frequency.setValueAtTime(380, t); o.frequency.exponentialRampToValueAtTime(760, t + 0.12); g.gain.setValueAtTime(0.15, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.18); o.connect(g); g.connect(huvudvol); o.start(t); o.stop(t + 0.2); },
  landa() { ton(160, 0, 0.08, 'sine', 0.15); },
  poff() { ton(520, 0, 0.12, 'sine', 0.12); ton(390, 0.05, 0.12, 'sine', 0.08); },
  studs() { [300, 420, 560].forEach((f, i) => ton(f, i * 0.09, 0.15, 'sine', 0.2)); },
  bubblor() { for (let i = 0; i < 6; i++) ton(rnd(900, 1500), i * 0.06, 0.08, 'sine', 0.08); },
  fnissa() { for (let i = 0; i < 8; i++) ton(700 + (i % 2) * 220, i * 0.09, 0.08, 'square', 0.05); },
  konfetti() { brus(0, 0.35, 0.5); brus(0.25, 0.35, 0.45); ton(90, 0, 0.3, 'sine', 0.4); },
  nej() { ton(300, 0, 0.15, 'triangle', 0.15); ton(240, 0.12, 0.2, 'triangle', 0.15); },
  trappa() { REGNBAGE.forEach((_, i) => ton(523 * Math.pow(2, i / 6), i * 0.1, 0.3, 'triangle', 0.15)); },
  vinst() { [523, 659, 784, 1047, 784, 1047].forEach((f, i) => ton(f, i * 0.12, 0.3, 'triangle', 0.22)); },
};
let musik = null;
function startaMusik() {
  if (!ac || musik) return;
  // "Ja må hon leva"-aktig glad slinga i disco-takt
  const melodi = [523, 523, 587, 523, 698, 659, 523, 523, 587, 523, 784, 698, 523, 523, 1047, 880, 698, 659, 587, 932, 932, 880, 698, 784, 698];
  const bas = [131, 131, 175, 175, 196, 196, 131, 131];
  let i = 0;
  musik = setInterval(() => {
    if (i % 2 === 0) ton(bas[(i / 2) % bas.length], 0, 0.3, 'square', 0.07);
    ton(melodi[i % melodi.length], 0, 0.2, 'triangle', 0.11);
    if (i % 2 === 0) ton(60, 0, 0.12, 'sine', 0.35);
    if (i % 4 === 2) ton(3000, 0, 0.04, 'square', 0.03);
    i++;
  }, 200);
}
function stoppaMusik() { if (musik) clearInterval(musik); musik = null; }

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
  s.scale.set(1.5 * bredd / 256, 0.42, 1); s.renderOrder = 10; return s;
}
function skylt(text, w, h, bak = '#ff6fae', farg = '#ffffff') {
  const px = 128;
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: canvasTex(Math.round(w * px), Math.round(h * px), (g, cw, ch) => {
    g.fillStyle = bak; g.fillRect(0, 0, cw, ch); g.fillStyle = farg;
    g.font = `bold ${Math.round(ch * 0.62)}px Fredoka, system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, cw / 2, ch / 2 + ch * 0.04);
  }) }));
}

const himmelDag = canvasTex(4, 256, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#4aa8e8'); gr.addColorStop(0.6, '#a9dcf5'); gr.addColorStop(1, '#ffe9f4'); g.fillStyle = gr; g.fillRect(0, 0, w, h); });
const hemiLjus = new THREE.HemisphereLight(0xdff4ff, 0x9ec77a, 0.8 * Math.PI); scen.add(hemiLjus);
const solljus = new THREE.DirectionalLight(0xfff1d6, 0.95 * Math.PI);
solljus.castShadow = true; solljus.shadow.mapSize.set(1024, 1024);
Object.assign(solljus.shadow.camera, { left: -38, right: 38, top: 38, bottom: -38, near: 1, far: 160 });
scen.add(solljus, solljus.target);

// ================= KROCKAR (per område) =================
const omraden = {
  varld: { cirklar: [], rektanglar: [], minX: -42, maxX: 42, minZ: -84, maxZ: 52, hinder: [] },
  slott: { cirklar: [], rektanglar: [], minX: SLOTT_POS.x - 7.4, maxX: SLOTT_POS.x + 7.4, minZ: -14.2, maxZ: 14.4, hinder: [] },
};
let omrade = 'varld';
function krock(p, r) {
  const o = omraden[omrade]; if (!o) return;
  for (const c of o.cirklar) {
    const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), min = c.r + r;
    if (d < min && d > 0.0001) { p.x = c.x + dx / d * min; p.z = c.z + dz / d * min; }
  }
  for (const q of o.rektanglar) {
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
  p.x = Math.max(o.minX + r, Math.min(o.maxX - r, p.x));
  p.z = Math.max(o.minZ + r, Math.min(o.maxZ - r, p.z));
}

// ================= VÄRLDEN =================
const varldGrupp = new THREE.Group(); scen.add(varldGrupp);
const V = omraden.varld;
let bergMesh;
(() => {
  const grasTex = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#7cc45a'; g.fillRect(0, 0, w, h); for (let i = 0; i < 2500; i++) { g.fillStyle = valj(['#6db84c', '#8fd06a', '#76be55', '#9bd977']); g.fillRect(Math.random() * w, Math.random() * h, 2, 3); } }, [40, 40]);
  const gras = new THREE.Mesh(new THREE.PlaneGeometry(260, 260), new THREE.MeshStandardMaterial({ map: grasTex, roughness: 1 }));
  gras.rotation.x = -Math.PI / 2; gras.receiveShadow = true; varldGrupp.add(gras);
  // stig från kalaset till berget
  const stig = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 52), m(0xe2d3b4)); stig.rotation.x = -Math.PI / 2; stig.position.set(0, 0.01, 0); stig.receiveShadow = true; varldGrupp.add(stig);

  // --- Charlies hus med kalaset ---
  const hus = new THREE.Group(); hus.position.set(0, 0, 44);
  const kropp = new THREE.Mesh(new THREE.BoxGeometry(14, 5, 8), m(0xffb3d1)); kropp.position.y = 2.5; hus.add(kropp);
  const tak = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 6, 3, 4, 1), m(0x9b5cff)); tak.rotation.y = Math.PI / 4; tak.scale.set(1.75, 1, 1.0); tak.position.y = 6.5; hus.add(tak);
  for (const x of [-4.5, 4.5]) { const f = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.6, 0.1), m(0xbfe6ff, { emissive: 0x335566, emissiveIntensity: 0.2 })); f.position.set(x, 2.8, -4.02); hus.add(f); }
  const dorr = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 0.12), m(0xffd23f)); dorr.position.set(0, 1.5, -4.04); hus.add(dorr);
  const banderoll = skylt('GRATTIS CHARLIE 7 ÅR!', 9, 1.1); banderoll.position.set(0, 4.3, -4.08); banderoll.rotation.y = Math.PI; hus.add(banderoll);
  varldGrupp.add(skugga(hus)); V.hinder.push(hus); V.rektanglar.push({ minX: -7, maxX: 7, minZ: 40, maxZ: 48 });
  // girlanger med flaggor
  for (let i = 0; i < 18; i++) {
    const f = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.45, 3), new THREE.MeshBasicMaterial({ color: REGNBAGE[i % 6] }));
    f.rotation.x = Math.PI; f.position.set(-7 + i * 0.82, 4.6 - Math.sin(i / 17 * Math.PI) * 0.6, 39.6); varldGrupp.add(f);
  }
  // kalasbordet med presenter men ingen tårta
  const bord = new THREE.Group(); bord.position.set(8, 0, 31);
  const skiva = new THREE.Mesh(new THREE.BoxGeometry(5, 0.12, 1.8), m(0xffffff)); skiva.position.y = 0.95; bord.add(skiva);
  for (const [x, z] of [[-2.3, -0.75], [2.3, -0.75], [-2.3, 0.75], [2.3, 0.75]]) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.95), m(0x9b6b3d)); b.position.set(x, 0.47, z); bord.add(b); }
  const fat = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.04, 20), m(0xffffff, { roughness: 0.3 })); fat.position.set(0, 1.03, 0); bord.add(fat);
  for (const [x, c] of [[-1.7, 0x2f9bff], [-1.1, 0x3ecf6e], [1.4, 0xff9f1c]]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.4, 0.45), m(c)); p.position.set(x, 1.21, 0.2); bord.add(p); }
  for (const x of [-2.5, 2.5]) for (let i = 0; i < 3; i++) {
    const bl = new THREE.Mesh(new THREE.SphereGeometry(0.32, 14, 10), m(REGNBAGE[(i * 2 + (x > 0)) % 6], { roughness: 0.3 })); bl.scale.y = 1.2;
    bl.position.set(x + (i - 1) * 0.35, 2.4 + i * 0.25, 0); bord.add(bl);
    const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1.5), m(0xffffff)); tr.position.set(x + (i - 1) * 0.17, 1.65, 0); bord.add(tr);
  }
  varldGrupp.add(skugga(bord)); V.rektanglar.push({ minX: 5.4, maxX: 10.6, minZ: 30, maxZ: 32 });

  // --- dammen ---
  const damm = new THREE.Mesh(new THREE.CircleGeometry(5, 32), m(0x4aa8e8, { roughness: 0.2, metalness: 0.1 })); damm.rotation.x = -Math.PI / 2; damm.position.set(-30, 0.02, 14); varldGrupp.add(damm);
  V.cirklar.push({ x: -30, z: 14, r: 4.6 });
  // --- lekplatsen ---
  const lek = new THREE.Group(); lek.position.set(30, 0, -8);
  for (const [x, z] of [[-1.2, -1.2], [1.2, -1.2], [-1.2, 1.2], [1.2, 1.2]]) { const s = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 3.2), m(0xffd23f)); s.position.set(x, 1.6, z); lek.add(s); V.cirklar.push({ x: 30 + x, z: -8 + z, r: 0.25 }); }
  const plan = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.15, 2.6), m(0x9b6b3d)); plan.position.y = 1.8; lek.add(plan);
  const lt = new THREE.Mesh(new THREE.ConeGeometry(2, 1.2, 4), m(0xff4d4d)); lt.rotation.y = Math.PI / 4; lt.position.y = 3.8; lek.add(lt);
  const ruts = new THREE.Mesh(new THREE.BoxGeometry(1, 0.1, 4), m(0x2f9bff)); ruts.position.set(0, 0.95, 3.1); ruts.rotation.x = 0.45; lek.add(ruts);
  varldGrupp.add(skugga(lek)); V.hinder.push(lek);
  // --- stenar ---
  const sten = (x, z, s) => { const st = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), m(0x8a8078, { flatShading: true })); st.position.set(x, s * 0.6, z); st.rotation.set(rnd(0, 3), rnd(0, 3), 0); varldGrupp.add(skugga(st)); V.cirklar.push({ x, z, r: s * 0.9 }); };
  sten(-22, -28, 1.6); sten(-12, -29, 1.2); sten(-25, -18, 1.0); sten(10, -44, 1.3); sten(-34, -12, 0.9); sten(28, -27, 1.1);
  // --- träd ---
  const trad = (x, z, s = 1) => {
    const g = new THREE.Group(); g.position.set(x, 0, z);
    const st = new THREE.Mesh(new THREE.CylinderGeometry(0.25 * s, 0.32 * s, 2.4 * s, 8), m(0x7a5230)); st.position.y = 1.2 * s; g.add(st);
    for (const [dx, dy, dz, r] of [[0, 3.2, 0, 1.6], [0.8, 2.8, 0.4, 1.1], [-0.7, 2.9, -0.3, 1.2]]) { const k = new THREE.Mesh(new THREE.SphereGeometry(r * s, 12, 10), m(0x3f9b3a)); k.position.set(dx * s, dy * s, dz * s); g.add(k); }
    varldGrupp.add(skugga(g)); V.hinder.push(g); V.cirklar.push({ x, z, r: 0.45 * s });
  };
  for (const [x, z, s] of [[-30, 26, 1.1], [32, 22, 1], [-36, 4, 1.2], [36, 6, 0.9], [-20, 32, 1], [20, 34, 1.1], [-34, -20, 1], [34, -20, 1.2], [-26, -40, 1.3], [26, -42, 1], [-14, -50, 1], [16, -54, 1.1], [-38, -60, 1.2], [36, -66, 1.2], [14, 12, 0.9], [-12, 18, 0.9]]) trad(x, z, s);
  // buskar
  const buske = (x, z) => { const b = new THREE.Mesh(new THREE.SphereGeometry(1.1, 12, 10), m(0x4caf50)); b.scale.y = 0.75; b.position.set(x, 0.6, z); varldGrupp.add(skugga(b)); V.cirklar.push({ x, z, r: 1.0 }); };
  buske(-32.5, 20); buske(31, 16); buske(28.5, -25); buske(-35.5, -6);
  // blommor
  for (let i = 0; i < 90; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 4), new THREE.MeshBasicMaterial({ color: valj(['#ff6fae', '#ffd23f', '#ffffff', '#9b5cff']) })); f.position.set(rnd(-40, 40), 0.08, rnd(-80, 50)); varldGrupp.add(f); }

  // --- det stora berget ---
  bergMesh = new THREE.Group(); bergMesh.position.set(BERG.x, 0, BERG.z);
  const kon = new THREE.Mesh(new THREE.CylinderGeometry(BERG.topp, BERG.botten, BERG.hojd, 20, 3), m(0x8a7a6e, { flatShading: true })); kon.position.y = BERG.hojd / 2; bergMesh.add(kon);
  const toppGras = new THREE.Mesh(new THREE.CylinderGeometry(BERG.topp + 0.05, BERG.topp + 0.05, 0.12, 24), m(0x7cc45a)); toppGras.position.y = BERG.hojd + 0.0; bergMesh.add(toppGras);
  // snöfläckar och stenar på sidan
  for (let i = 0; i < 14; i++) { const a = rnd(0, Math.PI * 2), y = rnd(1, 10), r = BERG.botten - (BERG.botten - BERG.topp) * y / BERG.hojd; const s = new THREE.Mesh(new THREE.DodecahedronGeometry(rnd(0.6, 1.4), 0), m(valj([0x6e625a, 0x9a8c80]), { flatShading: true })); s.position.set(Math.cos(a) * r, y, Math.sin(a) * r); bergMesh.add(s); }
  // staket runt toppen (utom framsidan där trappan kommer)
  for (let i = 0; i < 28; i++) {
    const a = i / 28 * Math.PI * 2; if (Math.abs(vinkelSkillnad(a, Math.PI / 2)) < 0.38) continue;
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.8), m(0xffffff)); p.position.set(Math.cos(a) * (BERG.topp - 0.4), BERG.hojd + 0.4, Math.sin(a) * (BERG.topp - 0.4)); bergMesh.add(p);
  }
  // bryggan längst upp där trappan slutar
  const brygga = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.3, 2.0), m(0xc08a50)); brygga.position.set(0, BERG.hojd - 0.15, 6.2); bergMesh.add(brygga);
  // ballongkuddar vid foten av trappan (mjuk landning)
  for (let i = 0; i < 26; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(rnd(0.45, 0.7), 12, 10), m(REGNBAGE[i % 6], { roughness: 0.3 })); b.position.set(rnd(-4, 4), 0.35, TRAPP_START.z - BERG.z - rnd(-1, 22)); bergMesh.add(b); }
  varldGrupp.add(skugga(bergMesh)); V.hinder.push(kon);
  V.cirklar.push({ x: BERG.x, z: BERG.z, r: BERG.botten - 0.3 });
})();

// --- regnbågstrappan och toppen (plattformar man kan stå på) ---
const plattformar = [];
const trappSteg = [];
for (let i = 0; i < ANTAL_STEG; i++) {
  const farg = REGNBAGE[i % 6];
  const g = new THREE.Mesh(new THREE.BoxGeometry(STEG_BREDD, 0.3, STEG_DJUP), m(farg, { emissive: farg, emissiveIntensity: 0.25, roughness: 0.4, transparent: true }));
  const x = 0, z = TRAPP_START.z - i * STEG_AVSTAND, topp = STEG_HOJD * (i + 1);
  g.position.set(x, topp - 0.15, z); skugga(g); varldGrupp.add(g);
  const s = { typ: 'steg', nr: i, g, x, z, b: STEG_BREDD, d: STEG_DJUP, topp, synlig: false, tid: null, visaOm: 0 };
  g.visible = false; trappSteg.push(s); plattformar.push(s);
}
// toppen av berget och bryggan
plattformar.push({ typ: 'topp', x: 0, z: BERG.z, b: 12, d: 12, topp: BERG.hojd, synlig: true });
plattformar.push({ typ: 'topp', x: 0, z: BERG.z + 5.6, b: 3.4, d: 2.2, topp: BERG.hojd, synlig: true });

// ================= SLOTTET =================
const slottGrupp = new THREE.Group(); slottGrupp.position.copy(SLOTT_POS); scen.add(slottGrupp); slottGrupp.visible = false;
const S = omraden.slott;
let tartFat, slottTarta;
(() => {
  const golvTex = canvasTex(128, 128, (g, w, h) => { for (let x = 0; x < 2; x++) for (let y = 0; y < 2; y++) { g.fillStyle = (x + y) % 2 ? '#e8e0d0' : '#c8bca8'; g.fillRect(x * 64, y * 64, 64, 64); } }, [8, 15]);
  const golv = new THREE.Mesh(new THREE.PlaneGeometry(16, 30), new THREE.MeshStandardMaterial({ map: golvTex, roughness: 0.5 })); golv.rotation.x = -Math.PI / 2; golv.receiveShadow = true; slottGrupp.add(golv);
  const matta = new THREE.Mesh(new THREE.PlaneGeometry(3, 26), m(0xc0392b)); matta.rotation.x = -Math.PI / 2; matta.position.set(0, 0.02, 1); slottGrupp.add(matta);
  const vagg = m(0xb8a890, { flatShading: true });
  for (const [w, h, d, x, z] of [[16.6, 9, 0.6, 0, -15.3], [0.6, 9, 31, -8.3, 0], [0.6, 9, 31, 8.3, 0], [16.6, 9, 0.6, 0, 15.3]]) {
    const v = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), vagg); v.position.set(x, 4.5, z); slottGrupp.add(v); S.hinder.push(v);
  }
  // fönster med ljus
  for (const z of [-9, -2, 5, 11]) for (const x of [-8, 8]) { const f = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 2.6), new THREE.MeshBasicMaterial({ color: 0xbfe6ff })); f.position.set(x * 0.995, 4.5, z); f.rotation.y = x < 0 ? Math.PI / 2 : -Math.PI / 2; slottGrupp.add(f); }
  // pelare
  for (const z of [-8, -1, 6]) for (const x of [-5, 5]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 9, 12), m(0xe8e0d0)); p.position.set(x, 4.5, z); slottGrupp.add(skugga(p)); S.cirklar.push({ x: SLOTT_POS.x + x, z, r: 0.65 }); S.hinder.push(p);
  }
  // fanor
  for (const x of [-6.5, 6.5]) { const f = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 3.2), m(0x5b3c88, { side: THREE.DoubleSide })); f.position.set(x, 5.5, -14.95); slottGrupp.add(f); const k = new THREE.Mesh(new THREE.CircleGeometry(0.5, 5), new THREE.MeshBasicMaterial({ color: 0xffd23f })); k.position.set(x, 5.8, -14.9); slottGrupp.add(k); }
  // tronen
  const tron = new THREE.Group(); tron.position.set(0, 0, -12.5);
  const steg = new THREE.Mesh(new THREE.BoxGeometry(4, 0.4, 3), m(0xc0392b)); steg.position.y = 0.2; tron.add(steg);
  const sits = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.9, 1.2), m(0xd4a017, { metalness: 0.6, roughness: 0.3 })); sits.position.y = 0.85; tron.add(sits);
  const rygg = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.6, 0.3), m(0xd4a017, { metalness: 0.6, roughness: 0.3 })); rygg.position.set(0, 2.0, -0.6); tron.add(rygg);
  const dyna = new THREE.Mesh(new THREE.BoxGeometry(1.3, 2.0, 0.1), m(0x9b2d6a)); dyna.position.set(0, 2.1, -0.43); tron.add(dyna);
  slottGrupp.add(skugga(tron)); S.rektanglar.push({ minX: SLOTT_POS.x - 2, maxX: SLOTT_POS.x + 2, minZ: -14, maxZ: -11.2 });
  // tårtan på ett guldigt fat på en pelare
  const pall = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 1.1, 16), m(0xffffff)); pall.position.set(3.4, 0.55, -11.5); slottGrupp.add(skugga(pall)); S.cirklar.push({ x: SLOTT_POS.x + 3.4, z: -11.5, r: 0.6 });
  tartFat = new THREE.Group(); tartFat.position.set(3.4, 1.1, -11.5); slottGrupp.add(tartFat);
  const guld = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.6, 0.08, 24), m(0xffc800, { metalness: 0.9, roughness: 0.2, emissive: 0x664400, emissiveIntensity: 0.4 })); guld.position.y = 0.04; tartFat.add(guld);
  slottTarta = skapaTarta(); slottTarta.position.y = 0.08; tartFat.add(slottTarta);
  const glans = new THREE.PointLight(0xffd040, 8, 5, 1.6); glans.position.set(0, 1.2, 0); tartFat.add(glans);
  // ljuskronor
  for (const z of [-6, 4]) { const l = new THREE.PointLight(0xffe0b0, 30, 18, 1.4); l.position.set(0, 7, z); slottGrupp.add(l); const k = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.08, 6, 16), m(0xd4a017, { metalness: 0.8 })); k.rotation.x = Math.PI / 2; k.position.set(0, 7, z); slottGrupp.add(k); }
})();
function skapaTarta() {
  const g = new THREE.Group();
  const botten = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.36, 24), m(0xff8fc0)); botten.position.y = 0.18; g.add(botten);
  const topp = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.28, 24), m(0xfff0f6)); topp.position.y = 0.5; g.add(topp);
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; const b = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 4), new THREE.MeshBasicMaterial({ color: REGNBAGE[i % 6] })); b.position.set(Math.cos(a) * 0.5, 0.36, Math.sin(a) * 0.5); g.add(b); }
  // sju ljus – Charlie fyller 7!
  for (let i = 0; i < 7; i++) {
    const a = i / 7 * Math.PI * 2;
    const l = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.2, 6), new THREE.MeshBasicMaterial({ color: REGNBAGE[i % 6] })); l.position.set(Math.cos(a) * 0.22, 0.74, Math.sin(a) * 0.22); g.add(l);
    const f = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 4), new THREE.MeshBasicMaterial({ color: 0xffb020 })); f.scale.y = 1.6; f.position.set(Math.cos(a) * 0.22, 0.88, Math.sin(a) * 0.22); g.add(f);
  }
  const jordgubbe = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), m(0xe8283c)); jordgubbe.position.y = 0.7; g.add(jordgubbe);
  return skugga(g);
}

// ================= DISCOT PÅ KALASET =================
const discoGrupp = new THREE.Group(); discoGrupp.position.copy(DISCO_POS); scen.add(discoGrupp); discoGrupp.visible = false;
const golvRutor = [], discoLjus = [];
let discoBoll, pool, discoTarta;
(() => {
  const gras = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), m(0x2f5a2a)); gras.rotation.x = -Math.PI / 2; gras.receiveShadow = true; discoGrupp.add(gras);
  for (let x = 0; x < 8; x++) for (let z = 0; z < 6; z++) {
    const r = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.1, 1.95), new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0x000000, roughness: 0.4 }));
    r.position.set(-7 + x * 2, 0.05, -5 + z * 2); r.receiveShadow = true; discoGrupp.add(r); golvRutor.push(r);
  }
  // huset bakom
  const hus = new THREE.Mesh(new THREE.BoxGeometry(18, 6, 2), m(0xffb3d1)); hus.position.set(0, 3, -8); discoGrupp.add(hus);
  const band = skylt('GRATTIS CHARLIE 7 ÅR!', 10, 1.3); band.position.set(0, 4.6, -6.9); discoGrupp.add(band);
  // ljusslingor
  for (let i = 0; i < 30; i++) { const l = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 4), new THREE.MeshBasicMaterial({ color: REGNBAGE[i % 6] })); l.position.set(-8.7 + i * 0.6, 5.6 - Math.sin(i / 29 * Math.PI) * 0.9, -6.85); discoGrupp.add(l); }
  // bordet med tårtan
  const bord = new THREE.Mesh(new THREE.BoxGeometry(3, 0.12, 1.4), m(0xffffff)); bord.position.set(0, 0.95, -5.6); discoGrupp.add(bord);
  for (const x of [-1.3, 1.3]) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.95), m(0x9b6b3d)); b.position.set(x, 0.47, -5.6); discoGrupp.add(b); }
  const fat = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.6, 0.08, 24), m(0xffc800, { metalness: 0.9, roughness: 0.2 })); fat.position.set(0, 1.05, -5.6); discoGrupp.add(fat);
  discoTarta = skapaTarta(); discoTarta.position.set(0, 1.09, -5.6); discoGrupp.add(discoTarta);
  // discokula
  discoBoll = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 2), new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.15, flatShading: true, emissive: 0x333333 }));
  discoBoll.position.set(0, 5.4, 0); discoGrupp.add(discoBoll);
  REGNBAGE.forEach(c => { const l = new THREE.PointLight(c, 25, 14, 1.5); l.position.set(0, 3.5, 0); discoGrupp.add(l); discoLjus.push(l); });
  // poolen (den hemliga överraskningen)
  pool = new THREE.Group(); pool.position.set(12, 0, 0);
  const kant = new THREE.Mesh(new THREE.BoxGeometry(8, 0.5, 10), m(0xffffff)); kant.position.y = 0.25; pool.add(kant);
  const vatten = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.1, 9.2), m(0x3ec8f0, { emissive: 0x0a6a9a, emissiveIntensity: 0.6, roughness: 0.1 })); vatten.position.y = 0.5; pool.add(vatten);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.22, 10, 20), m(0xff6fae)); ring.rotation.x = Math.PI / 2; ring.position.set(-1, 0.65, 1); pool.add(ring);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.22, 10, 20), m(0xffd23f)); ring2.rotation.x = Math.PI / 2; ring2.position.set(1.5, 0.65, -2); pool.add(ring2);
  const pl = new THREE.PointLight(0x3ec8f0, 20, 10, 1.5); pl.position.set(0, 1.5, 0); pool.add(pl);
  pool.visible = false; discoGrupp.add(pool);
})();
// godisregn
const GODISREGN = 220;
const regnGeo = new THREE.BufferGeometry(), regnPos = new Float32Array(GODISREGN * 3), regnFarg = new Float32Array(GODISREGN * 3);
for (let i = 0; i < GODISREGN; i++) { const c = new THREE.Color(valj(REGNBAGE)); regnFarg.set([c.r, c.g, c.b], i * 3); regnPos.set([rnd(-10, 18), rnd(0, 14), rnd(-6, 8)], i * 3); }
regnGeo.setAttribute('position', new THREE.BufferAttribute(regnPos, 3)); regnGeo.setAttribute('color', new THREE.BufferAttribute(regnFarg, 3));
const godisregn = new THREE.Points(regnGeo, new THREE.PointsMaterial({ size: 0.28, vertexColors: true })); godisregn.visible = false; discoGrupp.add(godisregn);

// ================= FIGURER =================
function partyhatt(f, farg) {
  const h = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.36, 12), m(farg));
  h.position.set(0, 1.78, 0); h.rotation.z = 0.15; f.g.add(h);
  const tofs = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), m(0xffd23f)); tofs.position.set(-0.03, 1.97, 0); f.g.add(tofs);
  f.hattDelar = [h, tofs];
}
function visaHatt(f, syns) { (f.hattDelar || []).forEach(d => d.visible = syns); }
// Mamma (spelaren): kalasklänning i regnbåge och rosa, rosa skor
const mamma = skapaFigur(THREE, { skala: 1.1, har: '#7a4a2a', langtHar: true, kropp: 'regnbage', armar: '#ff6fae', kjol: '#ff6fae', skor: '#ff6fae' });
// Charlie som fyller 7: regnbågsklänning och partyhatt
const charlie = skapaFigur(THREE, { skala: 0.72, har: '#f4d36b', langtHar: true, kropp: '#ff6fae', armar: 'regnbage', kjol: 'regnbage', skor: 'regnbage' });
partyhatt(charlie, 0x9b5cff);
// Beppe: blå byxor, rosa tröja, blå skor (samma sorts skor som mamma)
const beppe = skapaFigur(THREE, { skala: 0.66, har: '#c49a5a', kort: true, kropp: '#ff6fae', armar: '#ff6fae', ben: '#2f6fd6', skor: '#2f6fd6' });
// Beppes mamma som bakade tårtan
const beppesMamma = skapaFigur(THREE, { skala: 1.08, har: '#3a2a1c', langtHar: true, kropp: '#3ecf6e', armar: '#3ecf6e', kjol: '#2e7b4f', skor: '#ffffff' });
// Kungen
const kung = skapaFigur(THREE, { skala: 1.2, har: '#8a5a2a', kort: true, kropp: '#c0392b', armar: '#c0392b', ben: '#5b3c88', skor: '#3a2a1c' });
(() => {
  const krona = new THREE.Group(); krona.position.y = 1.62;
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.12, 16, 1, true), m(0xffc800, { metalness: 0.9, roughness: 0.25, side: THREE.DoubleSide })); krona.add(ring);
  for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; const s = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.14, 4), m(0xffc800, { metalness: 0.9, roughness: 0.25 })); s.position.set(Math.cos(a) * 0.19, 0.12, Math.sin(a) * 0.19); krona.add(s); const juvel = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 4), new THREE.MeshBasicMaterial({ color: REGNBAGE[i] })); juvel.position.set(Math.cos(a) * 0.205, 0, Math.sin(a) * 0.205); krona.add(juvel); }
  kung.g.add(krona);
  const skagg = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), m(0x8a5a2a)); skagg.scale.set(1.1, 0.9, 0.6); skagg.position.set(0, 1.28, 0.12); kung.g.add(skagg);
  const mantel = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.2, 16, 1, true, Math.PI * 0.6, Math.PI * 0.8), m(0x5b3c88, { side: THREE.DoubleSide })); mantel.position.set(0, 0.75, -0.02); kung.g.add(mantel);
  const kant = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.05, 6, 16), m(0xffffff)); kant.rotation.x = Math.PI / 2; kant.position.y = 1.22; kung.g.add(kant);
})();
skugga(kung.g);

// Tjuvarna
const randTex = canvasTex(16, 64, (g, w, h) => { for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#1d1d1d' : '#f5f5f5'; g.fillRect(0, i * h / 8, w, h / 8); } });
const randMat = new THREE.MeshStandardMaterial({ map: randTex });
function skapaTjuv(mossa) {
  const t = skapaFigur(THREE, { skala: 1.05, har: '#1d1d1d', kropp: randMat, armar: randMat, ben: '#26262e', hud: '#e8b88f', mossa });
  t.mask = new THREE.Mesh(new THREE.CylinderGeometry(0.205, 0.205, 0.07, 16, 1, true), m(0x111111, { side: THREE.DoubleSide })); t.mask.position.y = 1.46; t.g.add(t.mask);
  t.sack = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), m(0xb08a5a)); t.sack.position.set(0.1, 1.15, -0.32); t.sack.scale.y = 1.2; t.g.add(t.sack);
  t.snall = false;
  skugga(t.g); return t;
}
const tjuv1 = skapaTjuv('#222222');
const tjuv2 = skapaTjuv('#2a2a5a');
function blirSnall(t) { t.snall = true; t.mask.visible = false; t.sack.visible = false; if (!t.hattDelar) partyhatt(t, 0x3ecf6e); visaHatt(t, true); }

// Grupperna med tre barn i varje
const HARFARG = ['#f4d36b', '#6b4423', '#1d1d1d', '#b5541c', '#3a2a1c'];
const BYXFARG = ['#3b5b8c', '#26262e', '#7a7a7a', '#a0522d', '#2e7b4f'];
const grupper = GRUPPER.map((d, gi) => {
  const barn = [];
  for (let i = 0; i < 3; i++) {
    const f = skapaFigur(THREE, { skala: rnd(0.6, 0.7), har: valj(HARFARG), langtHar: Math.random() < 0.5, kort: Math.random() < 0.3, kropp: d.farg, armar: d.farg, ben: valj(BYXFARG), skor: valj(['#ffffff', '#26262e', '#e8483f']), kjol: Math.random() < 0.35 ? d.farg : null });
    const a = i / 3 * Math.PI * 2 + gi;
    f.hem = new THREE.Vector3(d.x + Math.cos(a) * 1.2, 0, d.z + Math.sin(a) * 1.2);
    f.g.position.copy(f.hem); varldGrupp.add(f.g); barn.push(f);
  }
  // ballongen de håller i
  const ballong = new THREE.Group();
  const kula = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 12), m(d.farg, { roughness: 0.25, emissive: d.farg, emissiveIntensity: 0.2 })); kula.scale.y = 1.2; ballong.add(kula);
  const snore = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 2.2), m(0xffffff)); snore.position.y = -1.7; ballong.add(snore);
  ballong.position.set(d.x, 3.2, d.z); varldGrupp.add(ballong);
  return { ...d, nr: gi, barn, ballong, besokt: false, flyg: null, ropat: false };
});

// godis och presenter
const godisar = [];
function skapaGodis(x, y, z, grupp) {
  const g = new THREE.Group(); const c = valj(REGNBAGE);
  const k = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), m(c, { emissive: c, emissiveIntensity: 0.3, roughness: 0.3 })); k.scale.x = 1.4; g.add(k);
  for (const s of [-1, 1]) { const v = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.2, 6), m(c, { roughness: 0.3 })); v.rotation.z = s * Math.PI / 2; v.position.x = s * 0.3; g.add(v); }
  g.position.set(x, y + 0.6, z); grupp.add(g);
  const o = { g, x, y, z, grupp, tagen: false, bas: y + 0.6, fas: rnd(0, 6) }; godisar.push(o); return o;
}
// godis i världen (en del längs vägen, en del i trappan)
for (const [x, z] of [[2, 18], [-14, 10], [-22, 2], [12, 2], [22, -12], [-10, -16], [3, -14], [-30, 28]]) skapaGodis(x, 0, z, varldGrupp);
// godis i slottet (världskoordinater)
for (const [x, z] of [[-3, 4], [4, -2], [-5, -6]]) skapaGodis(SLOTT_POS.x + x, 0, z, scen).ute = true;
godisar.filter(g => g.ute).forEach(g => { scen.remove(g.g); slottGrupp.add(g.g); g.g.position.x -= SLOTT_POS.x; });

const presenter = PRESENTER.map((p, i) => {
  const g = new THREE.Group(); const c = REGNBAGE[(i * 2) % 6];
  const ask = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.5, 0.6), m(c)); ask.position.y = 0.25; g.add(ask);
  const band1 = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.52, 0.12), m(0xffffff)); band1.position.y = 0.25; g.add(band1);
  const band2 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.52, 0.62), m(0xffffff)); band2.position.y = 0.25; g.add(band2);
  for (const s of [-1, 1]) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.035, 6, 12), m(0xffffff)); r.position.set(s * 0.09, 0.56, 0); r.rotation.y = Math.PI / 2; g.add(r); }
  g.position.set(p.x, p.y, p.z); varldGrupp.add(skugga(g));
  return { ...p, g, tagen: false };
});

// ================= EFFEKTER: bubblor, konfetti, ballonger =================
const bubblor = [];
const bubbelMat = new THREE.MeshStandardMaterial({ color: 0xcfefff, transparent: true, opacity: 0.45, roughness: 0.05, metalness: 0.3, emissive: 0x6a8aff, emissiveIntensity: 0.15, depthWrite: false });
const bubbelGeo = new THREE.SphereGeometry(1, 12, 10);
function blasBubblor(fran, yaw) {
  for (let i = 0; i < 14; i++) {
    const b = new THREE.Mesh(bubbelGeo, bubbelMat); const r = rnd(0.12, 0.3); b.scale.setScalar(r);
    b.position.copy(fran).add(new THREE.Vector3(rnd(-0.3, 0.3), rnd(-0.2, 0.3), rnd(-0.3, 0.3)));
    const fart = rnd(3.5, 6.5), sida = rnd(-0.35, 0.35);
    const v = new THREE.Vector3(Math.sin(yaw + sida) * fart, rnd(0.3, 1.6), Math.cos(yaw + sida) * fart);
    scen.add(b); bubblor.push({ b, v, liv: rnd(1.6, 2.6), fas: rnd(0, 6) });
  }
}
function uppdateraBubblor(dt) {
  for (let i = bubblor.length - 1; i >= 0; i--) {
    const u = bubblor[i]; u.liv -= dt; u.v.multiplyScalar(1 - dt * 0.9);
    u.b.position.addScaledVector(u.v, dt); u.b.position.y += Math.sin(t * 3 + u.fas) * dt * 0.3;
    if (u.liv <= 0) { scen.remove(u.b); bubblor.splice(i, 1); }
  }
}
const konfettier = [];
function konfettiSmall(pos, mangd = 160) {
  const geo = new THREE.BufferGeometry(), p = new Float32Array(mangd * 3), f = new Float32Array(mangd * 3), v = [];
  for (let i = 0; i < mangd; i++) { p.set([pos.x, pos.y, pos.z], i * 3); const c = new THREE.Color(valj(REGNBAGE)); f.set([c.r, c.g, c.b], i * 3); v.push([rnd(-3, 3), rnd(6, 12), rnd(-3, 3)]); }
  geo.setAttribute('position', new THREE.BufferAttribute(p, 3)); geo.setAttribute('color', new THREE.BufferAttribute(f, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.32, vertexColors: true })); scen.add(pts);
  konfettier.push({ pts, v, liv: 4 });
}
function uppdateraKonfetti(dt) {
  for (let k = konfettier.length - 1; k >= 0; k--) {
    const c = konfettier[k]; c.liv -= dt; const a = c.pts.geometry.attributes.position.array;
    c.v.forEach((v, i) => { v[1] = Math.max(-2.5, v[1] - 14 * dt); v[0] *= 1 - dt; v[2] *= 1 - dt; a[i * 3] += v[0] * dt; a[i * 3 + 1] += v[1] * dt; a[i * 3 + 2] += v[2] * dt; });
    c.pts.geometry.attributes.position.needsUpdate = true;
    if (c.liv <= 0) { scen.remove(c.pts); konfettier.splice(k, 1); }
  }
}
// konfettikanoner uppe på berget
const kanoner = [];
for (const x of [-3.2, 3.2]) {
  const g = new THREE.Group(); g.position.set(BERG.x + x, BERG.hojd, BERG.z - 2);
  const ror = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.32, 1.1, 12), m(x < 0 ? 0xff6fae : 0x2f9bff)); ror.rotation.x = -0.5; ror.position.y = 0.6; g.add(ror);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.05, 6, 14), m(0xffd23f)); ring.position.set(0, 1.1, 0.27); ring.rotation.x = Math.PI / 2 - 0.5; g.add(ring);
  varldGrupp.add(skugga(g)); kanoner.push(g);
}
// ballongen från kalaset som visar vägen till första gruppen
const ledBallong = (() => {
  const g = new THREE.Group();
  const kula = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 12), m(0xff6fae, { roughness: 0.25, emissive: 0xff6fae, emissiveIntensity: 0.25 })); kula.scale.y = 1.2; g.add(kula);
  const snore = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 2.2), m(0xffffff)); snore.position.y = -1.7; g.add(snore);
  varldGrupp.add(g); return g;
})();

// ================= STYRNING =================
const tangent = {};
const spelare = { yaw: Math.PI };
const kropp = { x: 0, y: 0, z: 24, vy: 0, mark: 'golv', sedanMark: 0 };
let hoppBuffer = 0;
addEventListener('keydown', e => {
  tangent[e.code] = true;
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
  if (e.code === 'Space' && !e.repeat) hoppBuffer = 0.16;
  if (e.code === 'KeyB' && !e.repeat) bubbelTryck = true;
  if (e.code === 'KeyP' || (e.code === 'Escape' && !musLast)) { if (lage === 'paus') fortsatt(); else pausa(); }
});
addEventListener('keyup', e => { tangent[e.code] = false; });
addEventListener('blur', () => { for (const k in tangent) tangent[k] = false; });
let bubbelTryck = false;
document.querySelectorAll('[data-t]').forEach(b => {
  const k = b.dataset.t;
  b.addEventListener('pointerdown', e => { e.preventDefault(); tangent[k] = true; if (k === 'Space') hoppBuffer = 0.16; if (k === 'KeyB') bubbelTryck = true; });
  for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) b.addEventListener(ev, () => { tangent[k] = false; });
});
let lastTid = 0, musLast = false, musMal = null, musX = 0.5, forvantadUpplasning = false;
const duk = renderer.domElement;
const styrbar = () => lage === 'spel';
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
  return { rx, rz, fart };
}

// ================= SPELLÄGE =================
// lage: start, spel, film (något händer, man styr inte), paus, disco
let lage = 'start', fortsattLage = 'spel';
let steg = 'leta';  // leta → trappa → berg → slott → klart
let besokta = 0, godis = 0, hittadePresenter = 0, fall = 0, spelTid = 0;
let trappaAktiv = false, paTrappan = false, sedanTips = 99, beppeHittad = false, kungKlar = false, kungVantar = 0;
const foljare = []; // följer mamma i fotspåren
const spar = [];

function lasRekord() { try { return Number(localStorage.getItem(`rekord:${SPEL_ID}`)) || 0; } catch (e) { return 0; } }
function visaRekord() { const r = lasRekord(); $('rekordText').textContent = r ? `Kalas firade: ${r}` : ''; }
visaRekord();
function tidText(s) { s = Math.round(s); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }

function uppdateraHud() {
  $('antalGrupper').textContent = `${besokta}/3`; $('chipGrupper').classList.toggle('klar', besokta >= 3);
  $('chipBeppe').textContent = beppeHittad ? 'Beppe ✓' : 'Beppe ❓'; $('chipBeppe').classList.toggle('klar', beppeHittad);
  $('chipTarta').textContent = kungKlar ? '🎂 ✓' : '🎂 ❓'; $('chipTarta').classList.toggle('klar', kungKlar);
  $('antalGodis').textContent = godis;
  $('antalPresent').textContent = `${hittadePresenter}/${presenter.length}`; $('chipPresent').classList.toggle('klar', hittadePresenter === presenter.length);
}
function sattOmrade(namn) {
  omrade = namn;
  varldGrupp.visible = namn === 'varld'; slottGrupp.visible = namn === 'slott'; discoGrupp.visible = namn === 'disco';
  if (namn === 'varld') {
    scen.background = himmelDag; scen.fog = new THREE.Fog(0xe4f2fb, 55, 150);
    hemiLjus.color.set(0xdff4ff); hemiLjus.groundColor.set(0x9ec77a); hemiLjus.intensity = 0.8 * Math.PI; solljus.intensity = 0.95 * Math.PI;
  } else if (namn === 'slott') {
    scen.background = new THREE.Color(0x2a1f30); scen.fog = null;
    hemiLjus.color.set(0xffe8d0); hemiLjus.groundColor.set(0x5a3a2a); hemiLjus.intensity = 0.65 * Math.PI; solljus.intensity = 0.3 * Math.PI;
  } else {
    scen.background = new THREE.Color(0x0c0820); scen.fog = null;
    hemiLjus.color.set(0x9a8cff); hemiLjus.groundColor.set(0x301050); hemiLjus.intensity = 0.55 * Math.PI; solljus.intensity = 0.15 * Math.PI;
    solljus.position.set(DISCO_POS.x, 30, DISCO_POS.z + 5); solljus.target.position.copy(DISCO_POS);
  }
}
function placeraSpelare(x, z, yaw) {
  kropp.x = x; kropp.y = 0; kropp.z = z; kropp.vy = 0; kropp.mark = 'golv'; kropp.sedanMark = 0;
  spelare.yaw = yaw; musMal = null; kameraMal = null; spar.length = 0;
  foljare.forEach((f, i) => { const sida = (i - (foljare.length - 1) / 2) * 1.1; f.g.position.set(x - Math.sin(yaw) * 1.8 + Math.cos(yaw) * sida, 0, z - Math.cos(yaw) * 1.8 - Math.sin(yaw) * sida); f.bas = 0; f.g.rotation.set(0, yaw, 0); });
}

function starta() {
  startaLjud(); stoppaMusik();
  ['start', 'slut', 'paus'].forEach(id => $(id).classList.add('dold'));
  ['hud', 'uppdrag', 'pekplatta', 'hoppKnapp', 'bubbelKnapp'].forEach(id => $(id).classList.remove('dold'));
  sattOmrade('varld');
  // nollställ allt
  steg = 'leta'; besokta = 0; godis = 0; hittadePresenter = 0; fall = 0; spelTid = 0;
  trappaAktiv = false; paTrappan = false; beppeHittad = false; kungKlar = false; kungVantar = 0; sedanTips = 99;
  godisar.forEach(g => { g.tagen = false; g.g.visible = true; });
  presenter.forEach(p => { p.tagen = false; p.g.visible = true; });
  trappSteg.forEach(s => { s.synlig = false; s.g.visible = false; s.tid = null; });
  grupper.forEach(gr => {
    gr.besokt = false; gr.flyg = null; gr.ropat = false; gr.ballong.visible = true; gr.ballong.position.set(gr.x, 3.2, gr.z);
    gr.barn.forEach(f => { varldGrupp.add(f.g); f.g.position.copy(f.hem); f.g.visible = true; f.bas = 0; f.g.scale.setScalar(f.g.scale.x); });
  });
  ledBallong.visible = true; ledBallong.position.set(4, 3.2, 26); ledBallongFlyg = null;
  // figurerna på sina platser
  scen.add(mamma.g); mamma.g.visible = true; mamma.g.rotation.set(0, 0, 0); mamma.bas = 0;
  scen.add(charlie.g); charlie.g.visible = true;
  varldGrupp.add(beppesMamma.g); beppesMamma.g.position.set(4.5, 0, 29.5); beppesMamma.g.rotation.set(0, Math.PI * 0.8, 0); beppesMamma.bas = 0; beppesMamma.ropat = false;
  // tjuv 1 uppe på berget med Beppe
  varldGrupp.add(tjuv1.g); tjuv1.snall = false; tjuv1.mask.visible = true; tjuv1.sack.visible = true;
  tjuv1.g.position.set(BERG.x + 1.2, BERG.hojd, BERG.z + 2.5); tjuv1.g.rotation.set(0, 0, 0); tjuv1.bas = BERG.hojd;
  tjuv1.g.add(beppe.g); beppe.g.position.set(0, 0.55, 0.3); beppe.g.rotation.set(-1.0, 0, 0); beppe.g.scale.setScalar(0.66 / 1.05); beppe.bas = 0.55;
  // slottet
  slottGrupp.add(kung.g); kung.g.position.set(0, 0.4, -12.6); kung.g.rotation.set(0, 0, 0); kung.bas = 0.4;
  slottGrupp.add(tjuv2.g); tjuv2.snall = false; tjuv2.mask.visible = true; tjuv2.sack.visible = true; tjuv2.g.position.set(4.8, 0, -10); tjuv2.g.rotation.set(0, -0.6, 0); tjuv2.bas = 0;
  tartFat.visible = true; slottTarta.visible = true; tartFat.position.set(3.4, 1.1, -11.5); tartFlyg = null;
  kung.glad = false; visaHatt(kung, false); visaHatt(tjuv1, false); visaHatt(tjuv2, false); tjuv1.fnissar = 0; tjuv2.fnissar = 0;
  konfettier.forEach(c => scen.remove(c.pts)); konfettier.length = 0;
  // Charlie följer med
  foljare.length = 0; foljare.push(charlie);
  placeraSpelare(0, 24, Math.PI);
  charlie.g.scale.setScalar(0.72); pool.visible = false; godisregn.visible = false;
  uppdateraHud();
  lage = 'spel'; lasMus(); $('musTips').classList.toggle('dold', musLast);
  uppdrag('Prata med Beppes mamma vid kalasbordet');
  setTimeout(() => visa('Charlie fyller 7 år! Men var är Beppe? Han skulle ta med tårtan. Prata med Beppes mamma vid bordet.', 7), 300);
}
$('spelaKnapp').onclick = starta;
$('igenKnapp').onclick = starta;
function pausa() { if (!styrbar()) return; fortsattLage = lage; lage = 'paus'; $('paus').classList.remove('dold'); slappMus(); for (const k in tangent) tangent[k] = false; }
function fortsatt() { lage = fortsattLage; $('paus').classList.add('dold'); musMal = null; lasMus(); }
$('fortsattKnapp').onclick = fortsatt;

// --- ballonger som visar vägen ---
let ledBallongFlyg = null;
function malForNasta() {
  const kvar = grupper.filter(g => !g.besokt);
  if (!kvar.length) return { x: TRAPP_START.x, z: TRAPP_START.z + 1, namn: 'trappan' };
  const n = kvar.reduce((a, b) => Math.hypot(a.x - kropp.x, a.z - kropp.z) < Math.hypot(b.x - kropp.x, b.z - kropp.z) ? a : b);
  return { x: n.x, z: n.z, namn: n.plats, grupp: n };
}
function skickaBallong(ballong, fran) {
  const mal = malForNasta();
  return { ballong, fran: fran.clone(), mal, t: 0 };
}
function flygBallong(f, dt) {
  if (!f) return;
  f.t = Math.min(1, f.t + dt / 4);
  const e = f.t * f.t * (3 - 2 * f.t);
  f.ballong.position.set(f.fran.x + (f.mal.x - f.fran.x) * e, f.fran.y + (7 - f.fran.y) * Math.min(1, f.t * 2) + Math.sin(t * 2) * 0.25 * f.t, f.fran.z + (f.mal.z - f.fran.z) * e);
  f.ballong.rotation.z = Math.sin(t * 1.7) * 0.15;
}

// --- Beppes mamma ---
async function prataBeppesMamma() {
  beppesMamma.ropat = true; lage = 'film';
  visa('Hej Charlie, grattis! Beppe skulle bära tårtan som jag har bakat, men han har inte kommit!', 5, 'Beppes mamma');
  await vanta(4600);
  visa('Barnen har delat upp sig i grupper om tre och letar. Följ ballongen så hittar du dem!', 5, 'Beppes mamma');
  ledBallongFlyg = skickaBallong(ledBallong, ledBallong.position);
  await vanta(2500);
  lage = 'spel'; uppdrag('Följ ballongen och fråga grupperna (0/3)');
}

// --- en grupp med tre barn ---
async function besokGrupp(gr) {
  gr.besokt = true; besokta++; lage = 'film'; ljud.hitta(); poppa('chipGrupper'); uppdateraHud();
  if (ledBallongFlyg && ledBallongFlyg.mal.grupp === gr) { ledBallong.visible = false; ledBallongFlyg = null; }
  grupper.forEach(g => { if (g.flyg && g.flyg.mal.grupp === gr) { g.ballong.visible = false; g.flyg = null; } });
  const text = GRUPP_REPLIK[besokta - 1].replace('{plats}', gr.plats);
  visa(text, 5.5, 'Barnen');
  await vanta(1600);
  gr.flyg = skickaBallong(gr.ballong, gr.ballong.position); ljud.poff();
  if (besokta === 3) {
    await vanta(2200);
    steg = 'trappa'; visaTrappa();
    await vanta(1600);
    visa('Följ ballongen till berget! Gå uppför regnbågstrappan. Stegen försvinner bakom dig!', 6);
    uppdrag('Gå uppför regnbågstrappan till toppen!');
  } else {
    await vanta(1600);
    uppdrag(`Följ ballongen och fråga grupperna (${besokta}/3)`);
  }
  lage = 'spel';
}
function visaTrappa() {
  trappaAktiv = true; ljud.trappa();
  trappSteg.forEach((s, i) => { s.visaOm = 0.05 + i * 0.05; s.tid = null; });
}
function aterstallTrappa() { trappSteg.forEach((s, i) => { s.synlig = false; s.g.visible = false; s.tid = null; s.visaOm = 0.3 + i * 0.05; }); }

// --- uppe på berget: såpbubblor på tjuven ---
async function tjuvFnissar(tj) {
  if (tj.fnissar) return; tj.fnissar = 1.6; ljud.fnissa();
  if (tj === tjuv1 && !tjuv1.snall) await raddaBeppe();
  else if (tj === tjuv2 && !tjuv2.snall) visa('Hihihi! Såpbubblor kittlas! Men det är kungen som bestämmer över tårtan.', 4, 'Tjuven');
  else visa('Hihihi! Det kittlas!', 2.5, 'Tjuven');
}
async function raddaBeppe() {
  lage = 'film'; steg = 'slott';
  visa('Hihihi! Hihi! Såpbubblorna kittlas!', 3, 'Tjuven');
  await vanta(1500);
  // tjuven tappar Beppe
  varldGrupp.add(beppe.g); beppe.g.scale.setScalar(0.66); beppe.g.rotation.set(0, Math.PI, 0);
  beppe.g.position.set(tjuv1.g.position.x + 1.5, BERG.hojd, tjuv1.g.position.z - 0.4); beppe.bas = BERG.hojd; ljud.landa();
  beppe.g.rotation.set(0, Math.atan2(kropp.x - beppe.g.position.x, kropp.z - beppe.g.position.z), 0);
  spelare.yaw = Math.atan2(beppe.g.position.x - kropp.x, beppe.g.position.z - kropp.z); musMal = null;
  await vanta(700);
  // konfettikanonerna smäller
  ljud.konfetti(); kanoner.forEach(k => { const p = new THREE.Vector3(); k.getWorldPosition(p); p.y += 1.3; konfettiSmall(p, 220); });
  beppeHittad = true; poppa('chipBeppe'); uppdateraHud(); ljud.vinst();
  visa('Pang! Konfettikanonerna smäller! Ni hittade Beppe!', 3.5);
  await vanta(3500);
  visa('Tack! Men en annan tjuv tog tårtan som min mamma bakade. Han sprang till kungens slott!', 5.5, 'Beppe');
  await vanta(5500);
  tjuv1.g.rotation.y = Math.atan2(kropp.x - tjuv1.g.position.x, kropp.z - tjuv1.g.position.z);
  visa('Förlåt... Jag ville bara gå på Charlies kalas.', 4, 'Tjuven');
  await vanta(4000);
  blirSnall(tjuv1); ljud.hitta();
  visa('Då får du följa med! Nu går vi till slottet och hämtar tårtan.', 4.5, 'Mamma');
  await vanta(4500);
  await tona(gaTillSlottet);
}
function gaTillSlottet() {
  sattOmrade('slott');
  [charlie, beppe, tjuv1].forEach(f => scen.add(f.g));
  beppe.g.scale.setScalar(0.66);
  foljare.length = 0; foljare.push(charlie, beppe, tjuv1);
  placeraSpelare(SLOTT_POS.x, 9, Math.PI);
  bubblor.forEach(u => scen.remove(u.b)); bubblor.length = 0;
  lage = 'spel'; uppdrag(`Samla godis och ge till kungen (minst ${KUNG_GODIS})`);
  visa(`Kungens slott! Tårtan står på ett guldigt fat. Kungen gillar godis. Gå fram och prata med honom.`, 6);
}

// --- kungen ---
async function prataMedKung() {
  lage = 'film';
  kung.g.rotation.y = Math.atan2(kropp.x - SLOTT_POS.x - kung.g.position.x, kropp.z - kung.g.position.z);
  visa('Nej, nej och NEJ! Tårtan är min! Jag är kungen och jag bestämmer!', 4, 'Kungen');
  ljud.nej();
  await vanta(4000);
  if (godis < KUNG_GODIS) {
    visa(`Fast... jag älskar godis. Kom tillbaka med minst ${KUNG_GODIS} godis! Du har ${godis}.`, 5, 'Kungen');
    await vanta(4000);
    kungVantar = 8; lage = 'spel'; uppdrag(`Samla godis till kungen (${godis}/${KUNG_GODIS})`);
    return;
  }
  visa(`Vill du ha godis, kungen? Här får du ${godis} godisar!`, 4, 'Mamma');
  ljud.godis(); await vanta(300); ljud.godis();
  godis = 0; uppdateraHud();
  await vanta(3800);
  visa('Mmm! Godis! Ni är snälla...', 3.5, 'Kungen');
  await vanta(3500);
  visa('Vill du komma på mitt kalas? Jag fyller sju år idag!', 4, 'Charlie');
  await vanta(4000);
  kungKlar = true; poppa('chipTarta'); uppdateraHud(); ljud.vinst(); uppdrag('Nu börjar kalaset!');
  if (!kung.hattDelar) partyhatt(kung, 0xff6fae); visaHatt(kung, true); kung.glad = true;
  visa('Ett kalas? För mig? JA! Här, ta tårtan. Jag kommer också!', 4.5, 'Kungen');
  // tårtan flyger till Beppe
  tartFlyg = { t: 0 };
  await vanta(4500);
  tjuv2.g.rotation.y = Math.atan2(kropp.x - SLOTT_POS.x - tjuv2.g.position.x, kropp.z - tjuv2.g.position.z);
  visa('Får jag också komma? Jag ville bara gå på kalas...', 4, 'Den andra tjuven');
  await vanta(4000);
  blirSnall(tjuv2);
  visa('Alla får komma! Nu börjar kalaset!', 3.5, 'Charlie');
  await vanta(3500);
  await tona(startaDisco);
}
let tartFlyg = null;

// --- discot ---
let discoTid = 0, alltKlart = false;
function startaDisco() {
  lage = 'disco'; slappMus(); stoppaMusik(); startaMusik();
  ['hud', 'uppdrag', 'pekplatta', 'hoppKnapp', 'bubbelKnapp', 'musTips'].forEach(id => $(id).classList.add('dold'));
  $('medd').classList.add('osynlig');
  sattOmrade('disco');
  alltKlart = hittadePresenter === presenter.length;
  pool.visible = alltKlart; godisregn.visible = alltKlart;
  const barn = grupper.flatMap(g => g.barn);
  const fram = [charlie, mamma, beppe, beppesMamma, kung];
  const mitt = [tjuv1, tjuv2];
  fram.forEach((f, i) => f.g.position.set(-4 + i * 2, 0, 2.2));
  mitt.forEach((f, i) => f.g.position.set(-5.5 + i * 11, 0, 0.6));
  barn.forEach((f, i) => f.g.position.set(-6 + (i % 9) * 1.5, 0, -1.6 + (i % 2) * 0.6));
  [...fram, ...mitt, ...barn].forEach(f => { discoGrupp.add(f.g); f.g.visible = true; f.bas = 0; f.g.rotation.set(0, 0, 0); });
  charlie.g.scale.setScalar(0.72); beppe.g.scale.setScalar(0.66);
  discoTid = 0;
  const r = lasRekord() + 1;
  try { localStorage.setItem(`rekord:${SPEL_ID}`, String(r)); } catch (e) {}
  const tidT = tidText(spelTid);
  if (alltKlart) {
    $('slutRubrik').textContent = 'Poolparty!';
    $('slutText').textContent = `Ni hittade alla ${presenter.length} presenter! Hemlig överraskning: godisregn och poolparty! Kungen och båda tjuvarna dansar med. Tid: ${tidT}.`;
  } else {
    $('slutRubrik').textContent = 'Grattis Charlie!';
    $('slutText').textContent = `Kalaset börjar! Kungen och båda tjuvarna dansar med. Ni hittade ${hittadePresenter} av ${presenter.length} presenter. Hitta alla nästa gång, så kommer en hemlig överraskning! Tid: ${tidT}.`;
  }
  setTimeout(() => saga(alltKlart ? 'Hurra! Grattis Charlie! Alla presenter hittade. Hemlig överraskning: godisregn och poolparty!' : 'Hurra! Grattis på födelsedagen Charlie! Nu börjar kalaset!'), 600);
  setTimeout(() => { if (lage === 'disco') { $('slut').classList.remove('dold'); } }, 7000);
}

// ================= LOOP =================
const klocka = new THREE.Clock();
let t = 0, kameraMal = null, kameraAvst = 7;
const stralen = new THREE.Raycaster();
const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3();
function rorMot(f, mal, fart, dt, stopp = 0.3) {
  const p = f.g.position, dx = mal.x - p.x, dz = mal.z - p.z, d = Math.hypot(dx, dz);
  if (d > stopp) { p.x += dx / d * Math.min(fart * dt, d); p.z += dz / d * Math.min(fart * dt, d); f.g.rotation.y = Math.atan2(dx, dz); f.ga(dt, fart); return false; }
  f.ga(dt, 0); return true;
}
function paPlattform(p, marg) { return Math.abs(kropp.x - p.x) <= p.b / 2 + marg && Math.abs(kropp.z - p.z) <= p.d / 2 + marg; }

function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, klocka.getDelta()); t += dt;
  hoppBuffer = Math.max(0, hoppBuffer - dt);
  if (meddTimer > 0) { meddTimer -= dt; if (meddTimer <= 0) $('medd').classList.add('osynlig'); }
  uppdateraBubblor(dt); uppdateraKonfetti(dt);

  if (lage === 'start') {
    const v = Math.sin(t * 0.15) * 0.5; kamera.position.set(Math.sin(v) * 9, 4.5, 22 - Math.cos(v) * 9); kamera.lookAt(1, 1.4, 26);
    mamma.g.position.set(-0.6, 0, 25); charlie.g.position.set(0.7, 0, 25.3); mamma.dansa(t, 0, 0.1); charlie.dansa(t, 1, 0.15);
    mamma.g.rotation.y = Math.PI + Math.sin(t * 0.5) * 0.4; charlie.g.rotation.y = Math.PI - Math.sin(t * 0.5) * 0.4;
  }
  if (lage === 'spel' || lage === 'film') uppdateraSpel(dt);
  if (lage === 'disco') uppdateraDisco(dt);
  renderer.render(scen, kamera);
}

function uppdateraSpel(dt) {
  const iVarld = omrade === 'varld';
  const bas = iVarld ? new THREE.Vector3() : SLOTT_POS;
  // ballonger
  flygBallong(ledBallongFlyg, dt);
  grupper.forEach(g => {
    flygBallong(g.flyg, dt);
    if (!g.flyg && !g.besokt) { g.ballong.position.y = 3.2 + Math.sin(t * 2 + g.nr) * 0.15; }
    g.barn.forEach((f, i) => {
      const d = Math.hypot(f.g.position.x - kropp.x, f.g.position.z - kropp.z);
      if (d < 7) { f.g.rotation.y = Math.atan2(kropp.x - f.g.position.x, kropp.z - f.g.position.z); if (g.besokt) f.vinka(t); else f.ga(dt, 0); }
      else { f.g.rotation.y = Math.sin(t * 0.6 + i * 2 + g.nr) * 1.2 + i * 2; f.ga(dt, 0); }
    });
  });
  if (!ledBallongFlyg && ledBallong.visible) ledBallong.position.y = 3.2 + Math.sin(t * 2) * 0.15;
  // godis snurrar
  for (const g of godisar) if (!g.tagen) { g.g.rotation.y += dt * 2; g.g.position.y = g.bas + Math.sin(t * 3 + g.fas) * 0.12; }
  for (const p of presenter) if (!p.tagen) { p.g.rotation.y += dt * 0.8; }
  // trappan: steg dyker upp, och försvinner när man stått på dem
  for (const s of trappSteg) {
    if (!trappaAktiv) break;
    if (!s.synlig && s.visaOm > 0) { s.visaOm -= dt; if (s.visaOm <= 0) { s.synlig = true; s.g.visible = true; s.g.material.opacity = 1; s.g.scale.set(0.2, 1, 0.2); } }
    if (s.synlig && s.g.scale.x < 1) s.g.scale.setScalar(Math.min(1, s.g.scale.x + dt * 4));
    if (s.synlig && s.tid !== null) {
      s.tid -= dt;
      s.g.material.opacity = s.tid < 0.6 ? 0.35 + 0.65 * (Math.sin(t * 30) > 0 ? 1 : 0.3) : 1;
      if (s.tid <= 0) { s.synlig = false; s.g.visible = false; s.tid = null; ljud.poff(); }
    }
  }
  // tjuvar och kungen
  if (tjuv1.fnissar) { tjuv1.fnissar -= dt; tjuv1.dansa(t * 2, 0, 0.12); if (tjuv1.fnissar <= 0) tjuv1.fnissar = 0; }
  else if (!tjuv1.snall && iVarld) { tjuv1.ga(dt, 0); tjuv1.g.rotation.y = Math.sin(t * 0.7) * 0.8; }
  if (tjuv2.fnissar) { tjuv2.fnissar -= dt; tjuv2.dansa(t * 2, 0, 0.12); if (tjuv2.fnissar <= 0) tjuv2.fnissar = 0; }
  if (!iVarld) {
    if (kung.glad) kung.dansa(t, 0, 0.08);
    else { kung.ga(dt, 0); kung.g.rotation.y = Math.sin(t * 2.5) * 0.25; }
  }
  if (tartFlyg) {
    tartFlyg.t = Math.min(1, tartFlyg.t + dt / 1.5);
    const fran = new THREE.Vector3(3.4, 1.1, -11.5), mal = new THREE.Vector3(beppe.g.position.x - SLOTT_POS.x, 1.0, beppe.g.position.z);
    tartFat.position.lerpVectors(fran, mal, tartFlyg.t); tartFat.position.y += Math.sin(tartFlyg.t * Math.PI) * 2;
    if (tartFlyg.t >= 1) tartFlyg = null;
  }
  if (iVarld && beppeHittad && beppe.g.parent === varldGrupp && lage === 'film') beppe.vinka(t);
  if (!beppesMamma.ropat || lage !== 'spel') beppesMamma.ga(dt, 0);
  if (iVarld && !beppeHittad && tjuv1.g.parent === varldGrupp) { /* Beppe i tjuvens famn sprattlar */ beppe.del.benV.rotation.x = Math.sin(t * 8) * 0.5; beppe.del.benH.rotation.x = -Math.sin(t * 8) * 0.5; }

  if (lage === 'spel') styrSpelare(dt, bas);
  else { mamma.ga(dt, 0); foljare.forEach(f => { if (f.g.parent && !(f === tjuv1 && tjuv1.fnissar)) f.ga(dt, 0); }); }
  mamma.g.position.x = kropp.x; mamma.g.position.z = kropp.z; if (!kropp.mark) mamma.g.position.y = kropp.y;
  kameraFoljer(dt);
}

function styrSpelare(dt, bas) {
  spelTid += dt; sedanTips += dt; kungVantar = Math.max(0, kungVantar - dt);
  titta(dt);
  const { rx, rz, fart } = riktning();
  // står man på något som försvann?
  if (kropp.mark && kropp.mark !== 'golv' && (!kropp.mark.synlig || !paPlattform(kropp.mark, 0.05))) kropp.mark = null;
  const styr = kropp.mark ? 1 : LUFT_STYRNING;
  kropp.x += rx * fart * styr * dt; kropp.z += rz * fart * styr * dt;
  // kliv upp på nästa trappsteg (som en vanlig trappa, inget hopp behövs)
  if (kropp.mark && omrade === 'varld') {
    const nu = kropp.mark === 'golv' ? 0 : kropp.mark.topp;
    let basta = null;
    for (const p of plattformar) {
      if (!p.synlig || p.topp <= nu + 0.01 || p.topp - nu > KLIV_HOJD || !paPlattform(p, 0.02)) continue;
      if (!basta || p.topp > basta.topp) basta = p;
    }
    if (basta) bytMark(basta);
  }
  if (kropp.mark && kropp.mark !== 'golv' && !paPlattform(kropp.mark, 0.05)) kropp.mark = null;
  const forraY = kropp.y;
  if (kropp.mark) { kropp.y = kropp.mark === 'golv' ? 0 : kropp.mark.topp; kropp.vy = 0; kropp.sedanMark = 0; }
  else { kropp.sedanMark += dt; kropp.vy -= GRAVITATION * dt; kropp.y += kropp.vy * dt; }
  // landa på steg eller toppen
  if (!kropp.mark && kropp.vy <= 0 && omrade === 'varld') {
    for (const p of plattformar) {
      if (!p.synlig) continue;
      if (forraY >= p.topp - 0.2 && kropp.y <= p.topp && paPlattform(p, 0.15)) {
        if (forraY > p.topp + 0.08) ljud.landa();
        bytMark(p);
        break;
      }
    }
  }
  // landa på marken
  if (!kropp.mark && kropp.vy <= 0 && kropp.y <= 0) {
    kropp.y = 0; kropp.vy = 0; kropp.mark = 'golv'; kropp.sedanMark = 0;
    if (forraY > 2.5 || paTrappan) landadeFranTrappan(forraY);
    else ljud.landa();
  }
  // hoppa (efter landningen, så att man alltid kan hoppa när man står på något)
  if (hoppBuffer > 0 && (kropp.mark || kropp.sedanMark < FORLATANDE_HOPP) && kropp.vy <= 0.01) {
    kropp.vy = HOPP_KRAFT; kropp.mark = null; kropp.sedanMark = 1; hoppBuffer = 0; ljud.hopp();
  }
  // inte gå rakt igenom steg från sidan
  if (omrade === 'varld') for (const p of plattformar) {
    if (!p.synlig || p.typ !== 'steg') continue;
    if (kropp.y < p.topp - KLIV_HOJD && kropp.y > p.topp - 1.6 && paPlattform(p, 0.25)) {
      const dx = kropp.x - p.x, dz = kropp.z - p.z, ox = p.b / 2 + 0.25 - Math.abs(dx), oz = p.d / 2 + 0.25 - Math.abs(dz);
      if (ox < oz) kropp.x += Math.sign(dx) * ox; else kropp.z += Math.sign(dz) * oz;
    }
  }
  // uppe på toppen: håll sig innanför staketet
  if (omrade === 'varld' && kropp.y > BERG.hojd - 0.5 && kropp.z < BERG.z + 7.4) {
    if (kropp.z > BERG.z + 5.2) kropp.x = Math.max(-1.5, Math.min(1.5, kropp.x));
    else { const dx = kropp.x - BERG.x, dz = kropp.z - BERG.z, d = Math.hypot(dx, dz), max = BERG.topp - 0.7; if (d > max && !(Math.abs(kropp.x) < 1.5 && dz > 0)) { kropp.x = BERG.x + dx / d * max; kropp.z = BERG.z + dz / d * max; } }
  }
  if (kropp.y < 0.6) krock(kropp, 0.55);

  // mamma-figuren
  const rorelse = Math.min(1, Math.hypot(rx, rz)) * fart;
  if (rorelse > 0.1) mamma.g.rotation.y += vinkelSkillnad(mamma.g.rotation.y, Math.atan2(rx, rz)) * Math.min(1, dt * 12);
  if (kropp.mark) { mamma.bas = kropp.y; mamma.ga(dt, rorelse); } else { mamma.bas = kropp.y; mamma.g.position.y = kropp.y; mamma.hoppa(); }
  // fotspår på marken som de andra följer
  if (kropp.mark === 'golv' && (!spar.length || Math.hypot(spar[spar.length - 1].x - kropp.x, spar[spar.length - 1].z - kropp.z) > 0.25)) { spar.push(new THREE.Vector3(kropp.x, 0, kropp.z)); if (spar.length > 80) spar.shift(); }
  foljare.forEach((f, i) => {
    const idx = spar.length - 1 - (i + 1) * 6;
    f.bas = 0;
    // inga fotspår än: stå kvar (annars går man in i mamma)
    const framme = idx < 0 ? (f.ga(dt, 0), true) : rorMot(f, spar[idx], fart * 1.15, dt, 0.5);
    if (framme && kropp.y > 1.5) { f.g.rotation.y = Math.atan2(kropp.x - f.g.position.x, kropp.z - f.g.position.z); f.vinka(t); }
  });

  if (omrade === 'varld') kollaVarld(dt); else kollaSlott(dt);
  if (bubbelTryck) { bubbelTryck = false; blas(); }
}

// byt vad man står på; stegen bakom en försvinner när man gått vidare uppåt
function bytMark(p) {
  const forra = kropp.mark;
  kropp.y = p.topp; kropp.vy = 0; kropp.mark = p; kropp.sedanMark = 0;
  if (p.typ === 'steg') paTrappan = true;
  if (p.typ === 'steg' || p.typ === 'topp') {
    const hojd = p.typ === 'steg' ? p.nr : ANTAL_STEG;
    for (const s of trappSteg) if (s.synlig && s.tid === null && s.nr < hojd) s.tid = FORSVINN_BAKOM;
  }
  if (forra === 'golv' && p.typ === 'steg' && p.nr === 0 && sedanTips > 6) { sedanTips = 0; visa('Gå uppför trappan! Stegen försvinner bakom dig, så gå inte baklänges.', 4.5); }
}
function blas() {
  if (blasPaus > performance.now()) return;
  blasPaus = performance.now() + 450;
  const fx = Math.sin(spelare.yaw), fz = Math.cos(spelare.yaw);
  const fran = new THREE.Vector3(kropp.x + fx * 0.6, kropp.y + 1.5, kropp.z + fz * 0.6);
  blasBubblor(fran, spelare.yaw); ljud.bubblor();
  for (const tj of [tjuv1, tjuv2]) {
    if (!tj.g.parent || !tj.g.parent.visible) continue;
    const p = new THREE.Vector3(); tj.g.getWorldPosition(p);
    const d = Math.hypot(p.x - kropp.x, p.z - kropp.z), dy = Math.abs(p.y - kropp.y);
    if (d < BUBBEL_RACKVIDD && dy < 3) setTimeout(() => { if (lage === 'spel' || lage === 'film') tjuvFnissar(tj); }, 500);
  }
}
let blasPaus = 0;

function landadeFranTrappan(fran) {
  paTrappan = false; fall++; ljud.studs();
  visa('Studs! Ballongerna tog emot dig. Trappan kommer tillbaka, försök igen!', 3.5);
  if (trappaAktiv) aterstallTrappa();
}

function kollaVarld(dt) {
  // Beppes mamma
  if (!beppesMamma.ropat && Math.hypot(beppesMamma.g.position.x - kropp.x, beppesMamma.g.position.z - kropp.z) < 3.5) { prataBeppesMamma(); return; }
  // godis
  for (const g of godisar) {
    if (g.tagen || g.ute) continue;
    if (Math.hypot(g.x - kropp.x, g.z - kropp.z) < 1.3 && Math.abs(g.y - kropp.y) < 1.5) { g.tagen = true; g.g.visible = false; godis++; ljud.godis(); poppa('chipGodis'); uppdateraHud(); }
  }
  // presenter
  for (const p of presenter) {
    if (p.tagen) continue;
    if (Math.hypot(p.x - kropp.x, p.z - kropp.z) < 1.4 && Math.abs(p.y - kropp.y) < 1.5) {
      p.tagen = true; p.g.visible = false; hittadePresenter++; ljud.present(); poppa('chipPresent'); uppdateraHud();
      visa(hittadePresenter === presenter.length ? 'Alla presenter hittade! Det blir en hemlig överraskning på kalaset!' : `En present! ${hittadePresenter} av ${presenter.length}.`, 3);
    }
  }
  // grupperna
  if (beppesMamma.ropat) for (const gr of grupper) {
    if (gr.besokt) continue;
    if (Math.hypot(gr.x - kropp.x, gr.z - kropp.z) < 3.4) { besokGrupp(gr); return; }
  }
  // vid berget innan trappan finns
  if (!trappaAktiv && Math.hypot(kropp.x - TRAPP_START.x, kropp.z - TRAPP_START.z) < 7 && sedanTips > 12) {
    sedanTips = 0; visa('Vilket stort berg! Men det finns ingen väg upp. Fråga grupperna med tre barn!', 4.5);
  }
  // uppe på toppen
  if (kropp.y > BERG.hojd - 0.5 && kropp.mark && kropp.mark !== 'golv' && kropp.mark.typ === 'topp') {
    paTrappan = false;
    if (!tjuv1.snall && sedanTips > 4) { sedanTips = 0; uppdrag('Blås såpbubblor på tjuven! (B eller 🫧)'); visa('Där är Beppe! Blås såpbubblor på tjuven, tryck B!', 5); }
  }
}
function kollaSlott(dt) {
  for (const g of godisar) {
    if (g.tagen || !g.ute) continue;
    if (Math.hypot(g.x - kropp.x, g.z - kropp.z) < 1.3) {
      g.tagen = true; g.g.visible = false; godis++; ljud.godis(); poppa('chipGodis'); uppdateraHud();
      if (!kungKlar) uppdrag(godis >= KUNG_GODIS ? 'Gå till kungen och ge honom godis!' : `Samla godis till kungen (${godis}/${KUNG_GODIS})`);
    }
  }
  if (!kungKlar && kungVantar <= 0 && Math.hypot(SLOTT_POS.x + kung.g.position.x - kropp.x, kung.g.position.z - kropp.z) < 3.6) prataMedKung();
}

function kameraFoljer(dt) {
  const o = omraden[omrade]; if (!o) return;
  const fx = Math.sin(spelare.yaw), fz = Math.cos(spelare.yaw);
  tmp2.set(kropp.x, kropp.y + 1.6, kropp.z);
  tmp.set(-fx * KAMERA_AVSTAND, KAMERA_HOJD - 1.6, -fz * KAMERA_AVSTAND);
  const langd = tmp.length(); tmp.normalize();
  stralen.set(tmp2, tmp); stralen.far = langd;
  const traff = stralen.intersectObjects(o.hinder, true)[0];
  const malAvst = traff ? Math.max(2.2, traff.distance - 0.4) : langd;
  kameraAvst += (malAvst - kameraAvst) * Math.min(1, dt * (malAvst < kameraAvst ? 14 : 3));
  tmp.multiplyScalar(kameraAvst).add(tmp2);
  tmp.y += (langd - kameraAvst) * 0.4;
  if (!kameraMal) { kameraMal = new THREE.Vector3(); kameraAvst = langd; tmp.set(-fx, (KAMERA_HOJD - 1.6) / KAMERA_AVSTAND, -fz).normalize().multiplyScalar(langd).add(tmp2); kamera.position.copy(tmp); }
  kamera.position.lerp(tmp, Math.min(1, dt * 10));
  const fram = 3.5 * kameraAvst / langd;
  kameraMal.set(kropp.x + fx * fram, kropp.y + 0.8, kropp.z + fz * fram); kamera.lookAt(kameraMal);
  // skuggan följer med
  if (omrade === 'varld') { solljus.position.set(kropp.x - 25, 50, kropp.z + 20); solljus.target.position.set(kropp.x, 0, kropp.z); }
  else { solljus.position.set(SLOTT_POS.x - 5, 30, 10); solljus.target.position.set(SLOTT_POS.x, 0, 0); }
}

function uppdateraDisco(dt) {
  discoTid += dt;
  const alla = [mamma, charlie, beppe, beppesMamma, kung, tjuv1, tjuv2, ...grupper.flatMap(g => g.barn)];
  alla.forEach((f, i) => f.dansa(t, i * 0.7, 0.15));
  golvRutor.forEach((r, i) => { const c = REGNBAGE[(i + Math.floor(t * 4)) % 6]; r.material.emissive.set(((i * 7 + Math.floor(t * 4)) % 3) ? 0x000000 : c); r.material.emissiveIntensity = 0.8; });
  discoBoll.rotation.y += dt * 1.2;
  discoLjus.forEach((l, i) => { const v = t * 1.3 + i / discoLjus.length * Math.PI * 2; l.position.set(Math.cos(v) * 5, 3.2, Math.sin(v) * 3.5); });
  if (godisregn.visible) {
    const a = regnGeo.attributes.position.array;
    for (let i = 0; i < GODISREGN; i++) { a[i * 3 + 1] -= dt * (2.5 + (i % 4)); if (a[i * 3 + 1] < 0.1) a[i * 3 + 1] = 14; }
    regnGeo.attributes.position.needsUpdate = true;
  }
  const v = discoTid * 0.15, mittX = alltKlart ? 3 : 0;
  kamera.position.set(DISCO_POS.x + mittX + Math.sin(v) * 3, 3.2, DISCO_POS.z + 11);
  kamera.lookAt(DISCO_POS.x + mittX, 1.2, DISCO_POS.z);
}

// figurerna på startskärmen
scen.add(mamma.g, charlie.g);
varldGrupp.add(beppesMamma.g); beppesMamma.g.position.set(4.5, 0, 29.5); beppesMamma.g.rotation.y = Math.PI * 0.8;
sattOmrade('varld');
loop();

// testkrokar (för automatiska tester)
window.__kalas = {
  kropp, spelare, grupper, godisar, presenter, trappSteg, plattformar, tjuv1, tjuv2, kung, beppe, charlie,
  starta, blas, startaDisco,
  get lage() { return lage; }, get steg() { return steg; }, get godis() { return godis; }, set godis(v) { godis = v; uppdateraHud(); },
  get besokta() { return besokta; }, get beppeHittad() { return beppeHittad; }, get kungKlar() { return kungKlar; }, get omrade() { return omrade; }, get fall() { return fall; },
  allaPresenter() { presenter.forEach(p => { p.tagen = true; p.g.visible = false; }); hittadePresenter = presenter.length; uppdateraHud(); },
  info() { const k = kropp; return [k.x.toFixed(2), k.z.toFixed(2), k.y.toFixed(2), k.vy.toFixed(1), k.mark === 'golv' ? 'G' : (k.mark ? (k.mark.typ === 'steg' ? 's' + k.mark.nr : 'T') : '-'), trappSteg.map(s => s.synlig ? 1 : 0).join(''), 'hb' + hoppBuffer.toFixed(2), 'sm' + k.sedanMark.toFixed(2)].join(' '); },
  flytta(x, z, y = 0) { kropp.x = x; kropp.z = z; kropp.y = y; kropp.vy = 0; kropp.mark = y > 0 ? null : 'golv'; },
};
