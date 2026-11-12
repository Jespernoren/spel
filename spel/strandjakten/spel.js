// =============================================================
//  Strandjakten – en idé av Charlie
//  Mamma, barnet och bebisen i barnvagnen letar efter sina kläder
//  på stranden. När en hel sort är hittad kommer tjuven och man
//  spelar hänga gubbe. Gissar man fel tar tjuven bebisen. När allt
//  är hittat blir tjuven snäll, ger tillbaka bebisen och får vara
//  med på poolpartyt.
// =============================================================
import * as THREE from "three";

// ================= JUSTERBARA VÄRDEN =================
const GA_FART = 4.2;          // meter per sekund
const SPRING_FART = 7.0;      // med Shift
const SVANG_FART = 2.0;       // radianer per sekund
const PLOCK_AVSTAND = 2.6;    // hur nära gruppen måste vara för att plocka upp
const GRUPP_RADIE = 0.9;      // hur stor gruppen är när den krockar
const TJUV_FART = 6.5;
const TJUV_VANTAN = 3.5;      // sekunder efter en hel sort innan tjuven kommer
const GRANS = { minX: -38, maxX: 38, minZ: -26, maxZ: 38 };
// Två nivåer. Charlie klarade Lätt direkt, så Svår är standard.
const NIVAER = {
  latt: {
    namn: "Lätt",
    ordniva: [1, 2],       // vilken ordlista (se ORD) tjuv nr 1, 2, 3... använder
    fel: [8, 7],           // fel man får göra mot tjuv nr 1, 2, 3... (av 10 streck)
    tips: true,            // barnet säger till när något glittrar nära
    ledljusEfter: 30,      // sekunder utan fynd innan ett ljus visar närmaste plagg
    nedgravt: false,       // kläderna ligger nedgrävda i sanden
    minAvstand: 9,         // minsta avstånd mellan gömda kläder
    gomIgen: false,        // förlorar man gömmer tjuven den sortens kläder igen
  },
  svar: {
    namn: "Svår",
    ordniva: [2, 3, 3, 4],
    fel: [6, 6, 5, 5],
    tips: false,
    ledljusEfter: 90,
    nedgravt: true,
    minAvstand: 13,
    gomIgen: true,
  },
};
const KAMERA_BAKOM = 5.2;     // hur långt bakom gruppen kameran är
const KAMERA_HOJD = 4.4;
const SPEL_ID = "strandjakten";

const REGNBAGE = ["#ff4d4d", "#ff9f1c", "#ffd23f", "#3ecf6e", "#2f9bff", "#9b5cff"];
const KLADER = [
  { id: "mklanning", namn: "mammas rosa klänning", typ: "klanning", farg: "#ff7eb6" },
  { id: "bklanning", namn: "barnets regnbågsklänning", typ: "klanning", farg: "regnbage" },
  { id: "jacka", namn: "regnbågsjackan", typ: "jacka", farg: "regnbage" },
  { id: "mskor", namn: "mammas vita skor med stjärna", typ: "skor", farg: "#ffffff", stjarna: true },
  { id: "bskor", namn: "barnets regnbågsskor", typ: "skor", farg: "regnbage" },
];
const SORTNAMN = { klanning: "båda klänningarna", jacka: "jackan", skor: "båda paren skor" };
// Ordlistor från lätt (0) till svår (4)
const ORD = [
  [["SOL","Den lyser på himlen och gör det varmt."],["BIL","Den har fyra hjul och kör på vägen."],["BÅT","Den flyter på vattnet."],["MUS","Ett litet djur som gillar ost."],["TÅG","Det åker på räls och tutar."],["ÖGA","Det har du två av och ser med."],["UGN","Där inne bakar man kakor."]],
  [["KATT","Ett djur som säger mjau."],["HUND","Ett djur som säger voff."],["GRIS","Ett rosa djur som säger nöff."],["FISK","Den simmar i havet och har fenor."],["MÅNE","Den lyser på himlen på natten."],["KAKA","Något gott man bakar."],["SKOR","Dem har man på fötterna."],["HÄST","Ett djur man kan rida på."]],
  [["GLASS","Kall och god, man äter den på sommaren."],["BANAN","En gul frukt som apor gillar."],["ÄPPLE","En rund frukt, röd eller grön."],["PIZZA","Mat med ost och tomatsås."],["PENNA","Man ritar och skriver med den."],["SKOLA","Där går man och lär sig saker."],["TIGER","Ett randigt kattdjur i djungeln."],["BEBIS","Ett litet barn som åker i barnvagn."]],
  [["BLOMMA","Den växer i trädgården och luktar gott."],["KLOCKA","Den visar vad tiden är."],["HJÄRTA","Det slår i bröstet, och betyder kärlek."],["GIRAFF","Ett djur med jättelång hals."],["SNIGEL","Ett långsamt djur med ett hus på ryggen."],["KAMERA","Man tar kort med den."]],
  [["REGNBÅGE","Den har alla färger och syns när sol och regn möts."],["ELEFANT","Ett jättestort djur med snabel."],["PANNKAKA","Man äter den med sylt."],["ENHÖRNING","En magisk häst med ett horn."],["SNÖGUBBE","Man bygger honom av snö på vintern."],["STJÄRNA","Den blinkar på himlen på natten."]],
];
const ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("");

// ================= HJÄLP =================
const rnd = (a, b) => a + Math.random() * (b - a);
const valj = (l) => l[Math.floor(Math.random() * l.length)];
const $ = (id) => document.getElementById(id);
function saga(text) {
  try {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "sv-SE"; u.rate = 0.95; u.pitch = 1.1;
    const r = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith("sv"));
    if (r) u.voice = r;
    speechSynthesis.speak(u);
  } catch (e) {}
}
let meddTimer = 0;
function visa(text, sek = 4, uppl = true) {
  const m = $("medd"); m.textContent = text; m.classList.remove("osynlig");
  meddTimer = sek; if (uppl) saga(text);
}
const vinkelSkillnad = (a, b) => ((((b - a) % (Math.PI * 2)) + Math.PI * 3) % (Math.PI * 2)) - Math.PI;

// ================= LJUD (syntetiskt) =================
let ac = null, huvudvol = null;
function startaLjud() {
  if (ac) return;
  try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
  huvudvol = ac.createGain(); huvudvol.gain.value = 0.5; huvudvol.connect(ac.destination);
  const len = ac.sampleRate * 2, buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  const src = ac.createBufferSource(); src.buffer = buf; src.loop = true;
  const f = ac.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 500;
  const g = ac.createGain(); g.gain.value = 0.05;
  const lfo = ac.createOscillator(); lfo.frequency.value = 0.12; const lg = ac.createGain(); lg.gain.value = 0.04;
  lfo.connect(lg); lg.connect(g.gain); lfo.start();
  src.connect(f); f.connect(g); g.connect(huvudvol); src.start();
}
function ton(frek, start, dur, typ = "sine", vol = 0.25) {
  if (!ac) return;
  const t = ac.currentTime + start, o = ac.createOscillator(), g = ac.createGain();
  o.type = typ; o.frequency.setValueAtTime(frek, t);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(huvudvol); o.start(t); o.stop(t + dur + 0.05);
}
const ljud = {
  hitta() { [523, 659, 784, 1047].forEach((f, i) => ton(f, i * 0.08, 0.35, "triangle", 0.25)); },
  tjuv() { [392, 370, 349, 330].forEach((f, i) => ton(f, i * 0.22, 0.25, "square", 0.08)); },
  snall() { [392, 494, 587, 784].forEach((f, i) => ton(f, i * 0.15, 0.4, "triangle", 0.2)); },
  ratt() { ton(880, 0, 0.18, "triangle", 0.25); ton(1175, 0.08, 0.25, "triangle", 0.2); },
  fel() { ton(160, 0, 0.3, "sawtooth", 0.12); },
  vinst() { [523, 659, 784, 1047, 784, 1047].forEach((f, i) => ton(f, i * 0.12, 0.3, "triangle", 0.22)); },
  forlust() { [392, 330, 262, 196].forEach((f, i) => ton(f, i * 0.25, 0.4, "triangle", 0.18)); },
  plask() { ton(220, 0, 0.4, "sine", 0.2); ton(90, 0.05, 0.5, "sine", 0.25); },
};
let festMusik = null;
function startaFestMusik() {
  if (!ac || festMusik) return;
  const melodi = [523, 659, 784, 659, 587, 698, 880, 698, 523, 659, 784, 1047, 988, 784, 659, 587];
  const bas = [131, 131, 175, 175, 147, 147, 196, 196];
  let i = 0;
  festMusik = setInterval(() => {
    ton(melodi[i % melodi.length], 0, 0.22, "triangle", 0.12);
    if (i % 2 === 0) ton(bas[(i / 2) % bas.length], 0, 0.4, "sine", 0.18);
    if (i % 4 === 2) ton(2000, 0, 0.05, "square", 0.03);
    i++;
  }, 210);
}
function stoppaFestMusik() { if (festMusik) clearInterval(festMusik); festMusik = null; }

// ================= SVG-IKONER (HUD) =================
function ikon(k) {
  const id = "g" + Math.random().toString(36).slice(2, 8);
  const grad = `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">${REGNBAGE.map((c, i) => `<stop offset="${i / 6}" stop-color="${c}"/><stop offset="${(i + 1) / 6}" stop-color="${c}"/>`).join("")}</linearGradient></defs>`;
  const fyll = k.farg === "regnbage" ? `url(#${id})` : k.farg;
  const s = `stroke="#3a2a1c" stroke-width="1.6" stroke-linejoin="round"`;
  let p = "";
  if (k.typ === "klanning") p = `<path d="M9 2.5h6l.8 4-1.6 2.2L20 21H4l5.8-12.3L8.2 6.5z" fill="${fyll}" ${s}/>`;
  if (k.typ === "jacka") p = `<path d="M8 3l4 2.2L16 3l5.5 4.2-2.3 4.3-2-1.1V21H6.8V10.4l-2 1.1L2.5 7.2z" fill="${fyll}" ${s}/><path d="M12 5.2V21" stroke="#3a2a1c" stroke-width="1.4"/>`;
  if (k.typ === "skor") {
    const sko = (x, y) => `<path d="M${x} ${y}c0-3 .8-5 2.4-5 .8 1.6 2.4 2.4 4 2.4h.6c1.7 0 2.8 1 2.8 2.6v1.6H${x}z" fill="${fyll}" ${s}/>`;
    p = sko(1.5, 12) + sko(10, 19);
    if (k.stjarna) p += `<path d="M5.4 8.4l.6 1.3 1.4.2-1 1 .2 1.4-1.2-.7-1.2.7.2-1.4-1-1 1.4-.2z" fill="#ffd23f" stroke="#c99700" stroke-width=".5"/><path d="M13.9 15.4l.6 1.3 1.4.2-1 1 .2 1.4-1.2-.7-1.2.7.2-1.4-1-1 1.4-.2z" fill="#ffd23f" stroke="#c99700" stroke-width=".5"/>`;
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${grad}${p}</svg>`;
}

// ================= SCEN =================
const behallare = $("spel");
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
behallare.appendChild(renderer.domElement);
const scen = new THREE.Scene();
const kamera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.1, 400);
addEventListener("resize", () => { kamera.aspect = innerWidth / innerHeight; kamera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); });

function canvasTex(w, h, rita, rep) {
  const c = document.createElement("canvas"); c.width = w; c.height = h; rita(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); }
  return t;
}
scen.background = canvasTex(4, 256, (g, w, h) => {
  const gr = g.createLinearGradient(0, 0, 0, h);
  gr.addColorStop(0, "#3fa7e8"); gr.addColorStop(0.55, "#9fdcf5"); gr.addColorStop(1, "#ffe9c4");
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
});
scen.fog = new THREE.Fog(0xbfe6f2, 45, 140);
scen.add(new THREE.HemisphereLight(0xdff4ff, 0xf3d79c, 0.75 * Math.PI));
const solljus = new THREE.DirectionalLight(0xfff1d6, 0.95 * Math.PI);
solljus.position.set(-30, 50, 20); solljus.castShadow = true;
solljus.shadow.mapSize.set(1024, 1024);
Object.assign(solljus.shadow.camera, { left: -45, right: 45, top: 45, bottom: -45, near: 1, far: 140 });
scen.add(solljus);
const sol = new THREE.Mesh(new THREE.SphereGeometry(6, 20, 12), new THREE.MeshBasicMaterial({ color: 0xfff3a0, fog: false }));
sol.position.set(-60, 55, -160); scen.add(sol);

const m = (farg, extra = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: farg, roughness: 0.85 }, extra));
const regnbageTex = canvasTex(64, 96, (g, w, h) => { REGNBAGE.forEach((c, i) => { g.fillStyle = c; g.fillRect(0, h - (i + 1) * h / 6, w, h / 6 + 1); }); });
const regnbageMat = () => new THREE.MeshStandardMaterial({ map: regnbageTex, roughness: 0.7 });

const sandTex = canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = "#f3dba6"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 2600; i++) { g.fillStyle = valj(["#e9cc8d", "#fbe9c1", "#e3c182", "#fff3d9"]); g.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
}, [40, 40]);
const sand = new THREE.Mesh(new THREE.PlaneGeometry(260, 260), new THREE.MeshStandardMaterial({ map: sandTex, roughness: 1 }));
sand.rotation.x = -Math.PI / 2; sand.receiveShadow = true; scen.add(sand);
const havGeo = new THREE.PlaneGeometry(260, 110, 80, 30);
const hav = new THREE.Mesh(havGeo, new THREE.MeshStandardMaterial({ color: 0x19b6cf, roughness: 0.25, metalness: 0.1, transparent: true, opacity: 0.92 }));
hav.rotation.x = -Math.PI / 2; hav.position.set(0, 0.08, -84); scen.add(hav);
const havBas = havGeo.attributes.position.array.slice();
const skum = new THREE.Mesh(new THREE.PlaneGeometry(260, 1.4), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 }));
skum.rotation.x = -Math.PI / 2; skum.position.set(0, 0.1, -29.2); scen.add(skum);
const vatSand = new THREE.Mesh(new THREE.PlaneGeometry(260, 4), m(0xd8b77a));
vatSand.rotation.x = -Math.PI / 2; vatSand.position.set(0, 0.03, -28); scen.add(vatSand);

// ================= KROCKAR =================
const cirklar = [];    // {x,z,r}
const rektanglar = []; // {minX,maxX,minZ,maxZ}
const gomstallen = []; // {x,y,z,namn}
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
  p.x = Math.max(GRANS.minX, Math.min(GRANS.maxX, p.x));
  p.z = Math.max(GRANS.minZ, Math.min(GRANS.maxZ, p.z));
}
function skugga(o) { o.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } }); return o; }

// ================= STRANDEN =================
function palm(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const lut = rnd(-0.25, 0.25);
  g.rotation.y = rnd(0, Math.PI * 2);
  let px = 0, py = 0;
  for (let i = 0; i < 7; i++) {
    const s = new THREE.Mesh(new THREE.CylinderGeometry(0.22 - i * 0.012, 0.26 - i * 0.012, 0.9, 8), m(i % 2 ? 0x9b6b3d : 0x8a5c31));
    px += lut * 0.25 * i * 0.3; s.position.set(px, py + 0.45, 0); s.rotation.z = -lut * 0.3; g.add(s); py += 0.86;
  }
  const topp = new THREE.Group(); topp.position.set(px, py, 0); g.add(topp);
  const bladMat = m(0x2fae4f, { side: THREE.DoubleSide });
  for (let i = 0; i < 8; i++) {
    const b = new THREE.Mesh(new THREE.ConeGeometry(0.42, 3.2, 4), bladMat);
    b.scale.z = 0.25; b.rotation.order = "YXZ"; b.rotation.y = i / 8 * Math.PI * 2; b.rotation.x = 1.9;
    b.translateY(1.5); topp.add(b);
  }
  for (let i = 0; i < 3; i++) { const k = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), m(0x6b4423)); k.position.set(Math.cos(i * 2.1) * 0.25, -0.2, Math.sin(i * 2.1) * 0.25); topp.add(k); }
  scen.add(skugga(g)); cirklar.push({ x, z, r: 0.45 });
  const ut = rnd(0, Math.PI * 2);
  gomstallen.push({ x: x + Math.cos(ut) * 1.1, y: 0.35, z: z + Math.sin(ut) * 1.1, namn: "vid en palm" });
}
function parasoll(x, z, f1, f2) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const stang = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.5, 6), m(0xffffff)); stang.position.y = 1.25; g.add(stang);
  const tex = canvasTex(256, 8, (c, w, h) => { for (let i = 0; i < 8; i++) { c.fillStyle = i % 2 ? f1 : f2; c.fillRect(i * w / 8, 0, w / 8 + 1, h); } });
  const tak = new THREE.Mesh(new THREE.ConeGeometry(1.9, 0.7, 16, 1, true), new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, roughness: 0.8 }));
  tak.position.y = 2.5; g.add(tak);
  const handduk = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.03, 2), m(new THREE.Color(f1).lerp(new THREE.Color(0xffffff), 0.4)));
  handduk.position.set(0.7, 0.02, 0.2); handduk.rotation.y = 0.2; g.add(handduk);
  const vaska = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.45, 0.3), m(f2)); vaska.position.set(-0.8, 0.22, 0.5); vaska.rotation.y = 0.5; g.add(vaska);
  scen.add(skugga(g)); cirklar.push({ x, z, r: 0.2 }, { x: x - 0.8, z: z + 0.5, r: 0.35 });
  gomstallen.push({ x: x + 0.8, y: 0.35, z: z + 0.3, namn: "under ett parasoll" });
}
function sandslott(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const sm = m(0xd9b46c);
  const bas = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.25, 0.6, 12), sm); bas.position.y = 0.3; g.add(bas);
  const mitt = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 1.1, 10), sm); mitt.position.y = 1.1; g.add(mitt);
  const mt = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.6, 10), sm); mt.position.y = 1.95; g.add(mt);
  for (let i = 0; i < 4; i++) {
    const a = i / 4 * Math.PI * 2 + 0.4, t = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.8, 8), sm);
    t.position.set(Math.cos(a) * 0.85, 0.85, Math.sin(a) * 0.85); g.add(t);
    const k = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.35, 8), sm); k.position.set(t.position.x, 1.42, t.position.z); g.add(k);
  }
  const flagga = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.25), m(0xff6fae, { side: THREE.DoubleSide })); flagga.position.set(0.2, 2.5, 0); g.add(flagga);
  const pinne = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.6), m(0x6b4423)); pinne.position.set(0, 2.4, 0); g.add(pinne);
  const hink = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.17, 0.35, 10), m(0x2f9bff)); hink.position.set(1.6, 0.17, 0.7); g.add(hink);
  scen.add(skugga(g)); cirklar.push({ x, z, r: 1.2 });
  gomstallen.push({ x: x - 1.7, y: 0.35, z: z - 0.4, namn: "bakom ett sandslott" });
}
function sten(x, z, s) {
  const st = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), m(0x9a9a93, { flatShading: true }));
  st.position.set(x, s * 0.45, z); st.scale.y = 0.65; st.rotation.y = rnd(0, 6); scen.add(skugga(st));
  cirklar.push({ x, z, r: s * 0.9 });
  gomstallen.push({ x: x, y: 0.35, z: z - s - 0.6, namn: "bakom en sten" });
}
function bat(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = 0.6;
  const skrov = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.55, 3.4), m(0xe8483f)); skrov.position.y = 0.28; g.add(skrov);
  const inre = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.1, 3.0), m(0xf5efe0)); inre.position.y = 0.5; g.add(inre);
  const bank = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.08, 0.35), m(0x9b6b3d)); bank.position.set(0, 0.62, 0.4); g.add(bank);
  const fore = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.9, 4), m(0xe8483f)); fore.rotation.x = Math.PI / 2; fore.rotation.y = Math.PI / 4; fore.scale.set(1, 1, 0.45); fore.position.set(0, 0.32, 2.1); g.add(fore);
  scen.add(skugga(g)); cirklar.push({ x, z, r: 1.5 });
  gomstallen.push({ x: x, y: 0.95, z: z, namn: "i båten" });
}
function livraddartorn(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const ben = new THREE.Mesh(new THREE.BoxGeometry(0.15, 2.6, 0.15), m(0xf2f2f2)); ben.position.set(a * 0.9, 1.3, b * 0.9); g.add(ben); cirklar.push({ x: x + a * 0.9, z: z + b * 0.9, r: 0.15 }); }
  const golv = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.15, 2.3), m(0xe8483f)); golv.position.y = 2.6; g.add(golv);
  const hytt = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.2, 1.6), m(0xffffff)); hytt.position.y = 3.3; g.add(hytt);
  const tak = new THREE.Mesh(new THREE.ConeGeometry(1.6, 0.7, 4), m(0xe8483f)); tak.rotation.y = Math.PI / 4; tak.position.y = 4.25; g.add(tak);
  const k1 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.2, 0.02), m(0xe8483f)); k1.position.set(0, 3.3, 0.81); g.add(k1);
  const k2 = k1.clone(); k2.rotation.z = Math.PI / 2; g.add(k2);
  scen.add(skugga(g));
  gomstallen.push({ x: x + 1.6, y: 0.35, z: z, namn: "vid livräddartornet" });
}
function glasskiosk(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = Math.PI / 2;
  const lada = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.1, 1.1), m(0xffffff)); lada.position.y = 0.85; g.add(lada);
  const rand = new THREE.Mesh(new THREE.BoxGeometry(2.02, 0.25, 1.12), m(0xff6fae)); rand.position.y = 1.2; g.add(rand);
  for (const a of [-0.7, 0.7]) { const h = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.1, 14), m(0x333333)); h.rotation.x = Math.PI / 2; h.position.set(a, 0.3, 0.56); g.add(h); }
  [0xff9fc8, 0xfff1a8, 0x9fe3b0].forEach((c, i) => { const s = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), m(c)); s.position.set(-0.5 + i * 0.5, 1.75, 0); const k = new THREE.Mesh(new THREE.ConeGeometry(0.17, 0.4, 10), m(0xd99a4e)); k.rotation.x = Math.PI; k.position.set(s.position.x, 1.5, 0); g.add(s, k); });
  scen.add(skugga(g)); cirklar.push({ x, z, r: 1.15 });
  gomstallen.push({ x: x + 1.6, y: 0.35, z: z + 0.6, namn: "bakom glasskiosken" });
}
function strandboll(x, z) {
  const t = canvasTex(64, 32, (g, w, h) => { ["#ff4d4d", "#ffffff", "#2f9bff", "#ffffff", "#ffd23f", "#ffffff"].forEach((c, i) => { g.fillStyle = c; g.fillRect(i * w / 6, 0, w / 6 + 1, h); }); });
  const b = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 12), new THREE.MeshStandardMaterial({ map: t, roughness: 0.5 }));
  b.position.set(x, 0.35, z); b.rotation.set(rnd(0, 3), rnd(0, 3), 0); scen.add(skugga(b));
}

[[-20, -10], [-14, 5], [18, -14], [24, 6], [-30, 18], [30, 20], [-6, -18], [8, 12], [-26, -20], [33, -4], [-34, 0], [12, 30], [-12, 30], [3, -6]].forEach(p => palm(p[0], p[1]));
[[-10, -6, "#ff6fae", "#ffffff"], [12, -4, "#2f9bff", "#ffffff"], [-22, 8, "#ffd23f", "#ff9f1c"], [20, 14, "#3ecf6e", "#ffffff"], [4, -15, "#9b5cff", "#ffd23f"]].forEach(p => parasoll(...p));
[[-4, 4], [15, -21], [-17, -22], [27, -18]].forEach(p => sandslott(p[0], p[1]));
[[-34, -12, 1.4], [35, 10, 1.6], [-20, 24, 1.3], [22, 27, 1.2]].forEach(p => sten(...p));
bat(-29, -24); livraddartorn(0, -21); glasskiosk(-31, 6);
[[-8, 0], [6, 2], [16, 0], [-24, -4], [26, -8]].forEach(p => strandboll(p[0], p[1]));
// Öppna sandplatser: där kan kläder ligga nedgrävda (bara på Svår)
for (let forsok = 0, antal = 0; forsok < 400 && antal < 12; forsok++) {
  const x = rnd(-35, 35), z = rnd(-24, 21);
  if (cirklar.some(c => Math.hypot(c.x - x, c.z - z) < c.r + 2.5)) continue;
  if (gomstallen.some(g => Math.hypot(g.x - x, g.z - z) < 5)) continue;
  gomstallen.push({ x, y: 0.35, z, namn: "nedgrävt i sanden", sand: true }); antal++;
}
for (let i = 0; i < 60; i++) {
  const x = rnd(-36, 36), z = rnd(-26, 22);
  if (Math.random() < 0.5) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 4, 0, Math.PI * 2, 0, Math.PI / 2), m(valj([0xfff0f5, 0xffd1dc, 0xffe4b5]))); s.position.set(x, 0, z); scen.add(s); }
  else { const st = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.04, 5), m(0xff8a5c)); st.position.set(x, 0.02, z); scen.add(st); }
}

// ================= POOLEN =================
const POOL = { minX: -5, maxX: 5, minZ: 28, maxZ: 33 };
const DACK = { minX: -9.5, maxX: 9.5, minZ: 24.5, maxZ: 37 };
const kakelTex = canvasTex(64, 64, (g, w, h) => { g.fillStyle = "#ffffff"; g.fillRect(0, 0, w, h); g.strokeStyle = "#cfe6ee"; g.lineWidth = 3; g.strokeRect(0, 0, w, h); }, [19, 12.5]);
const dack = new THREE.Mesh(new THREE.PlaneGeometry(19, 12.5), new THREE.MeshStandardMaterial({ map: kakelTex, roughness: 0.6 }));
dack.rotation.x = -Math.PI / 2; dack.position.set(0, 0.04, 30.75); dack.receiveShadow = true; scen.add(dack);
const poolVatten = new THREE.Mesh(new THREE.PlaneGeometry(10, 5), new THREE.MeshStandardMaterial({ color: 0x3fd0f0, roughness: 0.1, metalness: 0.2, emissive: 0x0b5b70, emissiveIntensity: 0.25 }));
poolVatten.rotation.x = -Math.PI / 2; poolVatten.position.set(0, 0.07, 30.5); scen.add(poolVatten);
for (const [w, d, x, z] of [[10.6, 0.3, 0, 27.85], [10.6, 0.3, 0, 33.15], [0.3, 5.3, -5.15, 30.5], [0.3, 5.3, 5.15, 30.5]]) {
  const kant = new THREE.Mesh(new THREE.BoxGeometry(w, 0.18, d), m(0x9fd6e6)); kant.position.set(x, 0.09, z); scen.add(skugga(kant));
}
rektanglar.push({ minX: POOL.minX - 0.2, maxX: POOL.maxX + 0.2, minZ: POOL.minZ - 0.2, maxZ: POOL.maxZ + 0.2 });
function solstol(x, z, f) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const sits = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.1, 1.5), m(f)); sits.position.set(0, 0.35, 0); g.add(sits);
  const rygg = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.1, 0.8), m(f)); rygg.position.set(0, 0.6, -0.95); rygg.rotation.x = 0.8; g.add(rygg);
  scen.add(skugga(g)); cirklar.push({ x, z: z - 0.3, r: 0.7 });
}
solstol(-7.5, 30, 0xff6fae); solstol(-7.5, 33, 0xffd23f); solstol(7.5, 30, 0x2f9bff); solstol(7.5, 33, 0x3ecf6e);
const lampor = [];
const stolpar = [[-9, 25], [9, 25], [9, 36.5], [-9, 36.5]];
stolpar.forEach(([x, z]) => { const s = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.2), m(0xffffff)); s.position.set(x, 1.6, z); scen.add(s); cirklar.push({ x, z, r: 0.1 }); });
for (let i = 0; i < 4; i++) {
  const [ax, az] = stolpar[i], [bx, bz] = stolpar[(i + 1) % 4];
  for (let j = 0; j <= 12; j++) {
    const t = j / 12, l = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), new THREE.MeshBasicMaterial({ color: REGNBAGE[(i * 13 + j) % 6] }));
    l.position.set(ax + (bx - ax) * t, 3.1 - Math.sin(t * Math.PI) * 0.5, az + (bz - az) * t); scen.add(l); lampor.push(l);
  }
}
const ballonger = [];
for (let i = 0; i < 14; i++) {
  const b = new THREE.Group();
  const kula = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), m(REGNBAGE[i % 6], { roughness: 0.3 })); kula.scale.y = 1.15; b.add(kula);
  const snore = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1.2), m(0xffffff)); snore.position.y = -0.95; b.add(snore);
  const vinkel = i / 14 * Math.PI * 2;
  b.userData = { x: Math.cos(vinkel) * 8.2, z: 30.7 + Math.sin(vinkel) * 5.4, fas: rnd(0, 6) };
  b.position.set(b.userData.x, 2.2, b.userData.z); scen.add(b); ballonger.push(b);
}
const skyltTex = canvasTex(512, 128, (g, w, h) => { g.fillStyle = "#ff6fae"; g.fillRect(0, 0, w, h); g.fillStyle = "#fff"; g.font = "bold 78px Fredoka, system-ui, sans-serif"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("POOLEN", w / 2, h / 2 + 4); });
const skylt = new THREE.Group();
for (const [rot, z] of [[Math.PI, 24.62], [0, 24.58]]) { const s = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.2), new THREE.MeshBasicMaterial({ map: skyltTex })); s.rotation.y = rot; s.position.set(0, 3.6, z); skylt.add(s); }
scen.add(skylt);

// ================= FIGURER =================
function figur(o) {
  const g = new THREE.Group();
  const hud = m(o.hud || 0xf2c9a0), harMat = m(o.har || 0x6b4423);
  const del = {};
  const ben = (x) => {
    const p = new THREE.Group(); p.position.set(x, 0.75, 0);
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.72, 8), o.benMat || hud); b.position.y = -0.36; p.add(b);
    const sko = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.28), m(0xd8b67a)); sko.position.set(0, -0.71, 0.05); p.add(sko);
    const stjarna = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 5), new THREE.MeshBasicMaterial({ color: 0xffd23f })); stjarna.rotation.z = Math.PI / 2; stjarna.position.set(x < 0 ? -0.08 : 0.08, -0.7, 0.05); stjarna.visible = false; p.add(stjarna);
    p.userData = { sko, stjarna }; g.add(p); return p;
  };
  del.benV = ben(-0.11); del.benH = ben(0.11);
  del.kropp = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.2, 0.5, 12), o.kroppMat || m(o.baddrakt || 0x5ec8ff)); del.kropp.position.y = 0.98; g.add(del.kropp);
  del.kjol = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.62, 16, 1, true), m(0xffffff, { side: THREE.DoubleSide })); del.kjol.position.y = 0.72; del.kjol.visible = false; g.add(del.kjol);
  del.jacka = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.23, 0.46, 12), m(0xffffff)); del.jacka.position.y = 1.0; del.jacka.visible = false; g.add(del.jacka);
  const arm = (x) => {
    const p = new THREE.Group(); p.position.set(x, 1.2, 0);
    const a = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.05, 0.5, 8), hud); a.position.y = -0.25; p.add(a);
    const armel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.075, 0.34, 8), m(0xffffff)); armel.position.y = -0.15; armel.visible = false; p.add(armel);
    p.userData.arm = armel; p.rotation.z = x < 0 ? -0.12 : 0.12; g.add(p); return p;
  };
  del.armV = arm(-0.25); del.armH = arm(0.25);
  const huvud = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), hud); huvud.position.y = 1.43; g.add(huvud);
  const har = new THREE.Mesh(new THREE.SphereGeometry(0.215, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), harMat); har.position.set(0, 1.45, -0.02); g.add(har);
  const harBak = new THREE.Mesh(new THREE.BoxGeometry(0.36, o.langtHar ? 0.42 : 0.2, 0.12), harMat); harBak.position.set(0, o.langtHar ? 1.3 : 1.42, -0.14); g.add(harBak);
  for (const x of [-0.07, 0.07]) { const oga = new THREE.Mesh(new THREE.SphereGeometry(0.028, 8, 6), m(0x222222)); oga.position.set(x, 1.45, 0.18); g.add(oga); }
  const mun = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.013, 6, 12, Math.PI), m(0xc0392b)); mun.rotation.z = Math.PI; mun.position.set(0, 1.37, 0.185); g.add(mun);
  for (const x of [-0.12, 0.12]) { const kind = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), m(0xff9fb0)); kind.position.set(x, 1.39, 0.16); g.add(kind); }
  g.scale.setScalar(o.skala || 1);
  skugga(g);
  const f = {
    g, del, fas: 0, armarFram: false,
    klanning(mat) { if (mat) { del.kropp.material = mat; del.kjol.material = mat.clone(); del.kjol.material.side = THREE.DoubleSide; } else del.kropp.material = o.kroppMat || m(o.baddrakt || 0x5ec8ff); del.kjol.visible = !!mat; },
    jacka(mat) { del.jacka.visible = !!mat; for (const a of [del.armV, del.armH]) { a.userData.arm.visible = !!mat; if (mat) a.userData.arm.material = mat; } if (mat) del.jacka.material = mat; },
    skor(mat, stjarna) { for (const b of [del.benV, del.benH]) { b.userData.sko.material = mat || m(0xd8b67a); b.userData.stjarna.visible = !!stjarna; } },
    ga(dt, fart) {
      f.fas += dt * fart * 2.6; const s = Math.sin(f.fas) * Math.min(1, fart / 2) * 0.7;
      del.benV.rotation.x = s; del.benH.rotation.x = -s;
      if (f.armarFram) { del.armV.rotation.x = -1.15; del.armH.rotation.x = -1.15; }
      else { del.armV.rotation.x = -s * 0.8; del.armH.rotation.x = s * 0.8; }
      g.position.y = Math.abs(Math.sin(f.fas)) * 0.04 * Math.min(1, fart / 2);
    },
  };
  return f;
}

// --- Barnvagn med bebis (regnbågströja, regnbågsbyxor och regnbågsmössa) ---
function skapaBarnvagn() {
  const vagn = new THREE.Group();
  const ram = m(0x3a3f4a, { metalness: 0.4, roughness: 0.4 });
  const korg = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.32, 0.85), m(0xb8e6ff)); korg.position.set(0, 0.62, 0); vagn.add(korg);
  const insida = new THREE.Mesh(new THREE.BoxGeometry(0.47, 0.05, 0.77), m(0xffffff)); insida.position.set(0, 0.76, 0); vagn.add(insida);
  const sufflett = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 10, 0, Math.PI, 0, Math.PI / 2), m(0xff9fc8, { side: THREE.DoubleSide }));
  sufflett.rotation.y = -Math.PI / 2; sufflett.scale.set(1, 1, 0.9); sufflett.position.set(0, 0.78, -0.18); sufflett.rotation.order = "YXZ"; vagn.add(sufflett);
  for (const [x, z] of [[-0.27, 0.3], [0.27, 0.3], [-0.27, -0.3], [0.27, -0.3]]) {
    const hjul = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.04, 8, 16), m(0x222222)); hjul.rotation.y = Math.PI / 2; hjul.position.set(x, 0.17, z); vagn.add(hjul);
    const stag = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35), ram); stag.position.set(x * 0.9, 0.38, z * 0.8); vagn.add(stag);
  }
  for (const x of [-0.24, 0.24]) { const handtag = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.7), ram); handtag.position.set(x, 0.95, -0.55); handtag.rotation.x = -0.6; vagn.add(handtag); }
  const tvar = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.52), m(0x222222)); tvar.rotation.z = Math.PI / 2; tvar.position.set(0, 1.23, -0.75); vagn.add(tvar);

  const bebis = new THREE.Group();
  const trojaMat = regnbageMat(), byxMat = regnbageMat(), mossMat = regnbageMat();
  const troja = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.14, 4, 10), trojaMat); troja.rotation.x = Math.PI / 2; troja.position.set(0, 0, 0.02); bebis.add(troja);
  for (const x of [-0.13, 0.13]) { const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.1, 4, 8), trojaMat); arm.position.set(x, 0.04, 0.06); arm.rotation.z = x < 0 ? 0.9 : -0.9; bebis.add(arm); }
  for (const x of [-0.05, 0.05]) { const ben = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.14, 4, 8), byxMat); ben.rotation.x = Math.PI / 2; ben.position.set(x, 0, 0.22); bebis.add(ben); }
  const huvud = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 10), m(0xf2c9a0)); huvud.position.set(0, 0.03, -0.15); bebis.add(huvud);
  const mossa = new THREE.Mesh(new THREE.SphereGeometry(0.105, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), mossMat); mossa.rotation.x = -1.2; mossa.position.set(0, 0.04, -0.17); bebis.add(mossa);
  const tofs = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), m(0xffffff)); tofs.position.set(0, 0.07, -0.28); bebis.add(tofs);
  for (const x of [-0.035, 0.035]) { const oga = new THREE.Mesh(new THREE.SphereGeometry(0.014, 6, 4), m(0x222222)); oga.position.set(x, 0.12, -0.13); bebis.add(oga); }
  bebis.position.set(0, 0.86, 0.02);
  vagn.add(bebis);
  skugga(vagn);
  return { vagn, bebis };
}

const mamma = figur({ skala: 1.1, har: 0x5a3820, langtHar: true, baddrakt: 0xff9fc8 });
mamma.armarFram = true;
const barn = figur({ skala: 0.72, har: 0xc98a3e, langtHar: true, baddrakt: 0x5ec8ff });
const { vagn: barnvagn, bebis } = skapaBarnvagn();
// Gruppen: mamma kör barnvagnen till vänster, barnet går till höger. Alla svänger tillsammans.
const grupp = new THREE.Group();
mamma.g.position.set(-0.15, 0, 0); mamma.g.rotation.y = -0.35; grupp.add(mamma.g);
barnvagn.position.set(-0.95, 0, 0.85); grupp.add(barnvagn);
barn.g.position.set(0.8, 0, 0.3); grupp.add(barn.g);
scen.add(grupp);

const randTex = canvasTex(16, 64, (g, w, h) => { for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? "#1d1d1d" : "#f5f5f5"; g.fillRect(0, i * h / 8, w, h / 8); } });
const tjuv = figur({ skala: 1.05, har: 0x1d1d1d, kroppMat: new THREE.MeshStandardMaterial({ map: randTex }), benMat: m(0x26262e), hud: 0xe8b88f });
const tjuvDelar = {};
(() => {
  tjuvDelar.mask = new THREE.Mesh(new THREE.CylinderGeometry(0.205, 0.205, 0.07, 16, 1, true), m(0x111111, { side: THREE.DoubleSide })); tjuvDelar.mask.position.y = 1.46; tjuv.g.add(tjuvDelar.mask);
  const mossa = new THREE.Mesh(new THREE.SphereGeometry(0.225, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), m(0x222222)); mossa.position.y = 1.5; tjuv.g.add(mossa);
  tjuvDelar.sack = new THREE.Group();
  const sack = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), m(0xb08a5a)); sack.scale.y = 1.2; tjuvDelar.sack.add(sack);
  const knut = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.18, 8), m(0x8b6a40)); knut.position.y = 0.4; tjuvDelar.sack.add(knut);
  tjuvDelar.sack.position.set(0.1, 1.15, -0.32); tjuv.g.add(tjuvDelar.sack);
  for (const a of [tjuv.del.armV, tjuv.del.armH]) { a.userData.arm.visible = true; a.userData.arm.material = new THREE.MeshStandardMaterial({ map: randTex }); }
  skugga(tjuv.g);
})();
tjuv.g.visible = false; scen.add(tjuv.g);

// ================= KLÄDER I 3D =================
function plaggMat(k) { return k.farg === "regnbage" ? regnbageMat() : m(k.farg, { roughness: 0.6 }); }
function stjarnGeo() {
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) { const r = i % 2 ? 0.035 : 0.08, a = i / 10 * Math.PI * 2 - Math.PI / 2; i ? s.lineTo(Math.cos(a) * r, Math.sin(a) * r) : s.moveTo(Math.cos(a) * r, Math.sin(a) * r); }
  return new THREE.ExtrudeGeometry(s, { depth: 0.015, bevelEnabled: false });
}
function plaggModell(k) {
  const g = new THREE.Group(), mat = plaggMat(k);
  if (k.typ === "klanning") {
    const topp = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.38, 12), mat); topp.position.y = 0.55; g.add(topp);
    const kjol = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.75, 16, 1, true), mat.clone()); kjol.material.side = THREE.DoubleSide; kjol.position.y = 0.05; g.add(kjol);
    for (const x of [-0.12, 0.12]) { const band = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.18, 0.04), mat); band.position.set(x, 0.8, 0); g.add(band); }
    const rosett = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), m(0xffffff)); rosett.position.set(0, 0.42, 0.21); g.add(rosett);
  } else if (k.typ === "jacka") {
    const kropp = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.62, 0.26), mat); kropp.position.y = 0.3; g.add(kropp);
    for (const s of [-1, 1]) { const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.6, 10), mat); arm.position.set(s * 0.43, 0.3, 0); arm.rotation.z = s * 0.5; g.add(arm); }
    const dragkedja = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.6, 0.02), m(0xdddddd, { metalness: 0.6 })); dragkedja.position.set(0, 0.3, 0.14); g.add(dragkedja);
    const huva = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat); huva.position.set(0, 0.6, -0.08); huva.rotation.x = -0.4; g.add(huva);
  } else {
    for (const s of [-1, 1]) {
      const sko = new THREE.Group(); sko.position.set(s * 0.17, 0.08, 0); sko.rotation.y = s * 0.15;
      const sula = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.42), m(0xeeeeee)); sko.add(sula);
      const ovan = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.14, 0.34), mat); ovan.position.set(0, 0.09, -0.03); sko.add(ovan);
      const ta = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), mat); ta.scale.set(0.95, 0.75, 1); ta.position.set(0, 0.07, 0.15); sko.add(ta);
      if (k.stjarna) { const st = new THREE.Mesh(stjarnGeo(), new THREE.MeshBasicMaterial({ color: 0xffd23f })); st.position.set(s * 0.1, 0.1, 0); st.rotation.y = s * Math.PI / 2; sko.add(st); }
      g.add(sko);
    }
    g.scale.setScalar(1.6);
  }
  skugga(g);
  return g;
}
function glitter(antal, farg) {
  const geo = new THREE.BufferGeometry(), pos = new Float32Array(antal * 3);
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const p = new THREE.Points(geo, new THREE.PointsMaterial({ color: farg, size: 0.12, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
  p.userData.fas = Array.from({ length: antal }, () => [rnd(0, 6), rnd(0.4, 1), rnd(0.3, 1.2)]);
  return p;
}
function uppdateraGlitter(p, t) {
  const a = p.geometry.attributes.position.array;
  p.userData.fas.forEach(([f, r, h], i) => { const v = f + t * 1.4; a[i * 3] = Math.cos(v) * r; a[i * 3 + 1] = (h + t * 0.4 * (i % 3 + 1)) % 1.6; a[i * 3 + 2] = Math.sin(v) * r; });
  p.geometry.attributes.position.needsUpdate = true;
}
const sandHogMat = new THREE.MeshStandardMaterial({ color: 0xead09a, roughness: 1 });
const plagg = KLADER.map(k => {
  const g = new THREE.Group(), modell = plaggModell(k), gl = glitter(18, 0xfff6a0);
  g.add(modell, gl);
  const ljus = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 40, 12, 1, true), new THREE.MeshBasicMaterial({ color: 0xfff27a, transparent: true, opacity: 0.32, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
  ljus.position.y = 20; ljus.visible = false; g.add(ljus);
  const hog = new THREE.Mesh(new THREE.SphereGeometry(0.75, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), sandHogMat);
  hog.scale.y = 0.35; hog.position.y = -0.35; hog.visible = false; hog.receiveShadow = true; g.add(hog);
  g.visible = false; scen.add(g);
  return { k, g, modell, gl, ljus, hog, hittad: false, plats: null, flyg: 0, bas: 0 };
});
const poolLjus = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 40, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0xff9fd0, transparent: true, opacity: 0.28, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
poolLjus.position.set(0, 20, 26); poolLjus.visible = false; scen.add(poolLjus);

// ================= KONFETTI & PLASK =================
const konfettiAntal = 500;
const konfetti = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ size: 0.16, vertexColors: true, depthWrite: false }));
(() => {
  const pos = new Float32Array(konfettiAntal * 3), col = new Float32Array(konfettiAntal * 3);
  for (let i = 0; i < konfettiAntal; i++) { pos[i * 3] = rnd(-10, 10); pos[i * 3 + 1] = rnd(0, 12); pos[i * 3 + 2] = rnd(23, 38); const c = new THREE.Color(valj(REGNBAGE)); col.set([c.r, c.g, c.b], i * 3); }
  konfetti.geometry.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  konfetti.geometry.setAttribute("color", new THREE.BufferAttribute(col, 3));
})();
konfetti.visible = false; scen.add(konfetti);
const plask = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: 0xdff7ff, size: 0.18, transparent: true, opacity: 0.9, depthWrite: false }));
plask.geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(120 * 3), 3));
plask.userData.v = []; plask.visible = false; scen.add(plask);

// ================= STYRNING (bara tangentbord och pekknappar) =================
const spelare = { pos: new THREE.Vector3(0, 0, 16), yaw: Math.PI };
const tangent = {};
addEventListener("keydown", e => {
  tangent[e.code] = true;
  if (lage === "gubbe" && !e.repeat) { const b = e.key.toUpperCase(); if (ALFABET.includes(b)) gissa(b); }
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) e.preventDefault();
  if (e.code === "Escape" || e.code === "KeyP") { if (lage === "paus") fortsatt(); else pausa(); }
});
addEventListener("keyup", e => { tangent[e.code] = false; });
addEventListener("blur", () => { for (const k in tangent) tangent[k] = false; });
document.querySelectorAll("#pekplatta button").forEach(b => {
  const t = b.dataset.t;
  b.addEventListener("pointerdown", e => { e.preventDefault(); tangent[t] = true; });
  for (const ev of ["pointerup", "pointerleave", "pointercancel"]) b.addEventListener(ev, () => { tangent[t] = false; });
});

// ================= SPELLÄGE =================
let lage = "start", spelTid = 0, sedanFynd = 0, tjuvTimer = -1, tjuvNr = 0, hittadeAntal = 0, ledtipsTimer = 8, besegrade = 0;
let bebisTagen = false, tjuvSnall = false, festRedo = false, senasteSort = null;
let niva = (() => { try { return localStorage.getItem("niva:" + SPEL_ID) || "svar"; } catch (e) { return "svar"; } })();
if (!NIVAER[niva]) niva = "svar";
const N = () => NIVAER[niva];
function visaNiva() { document.querySelectorAll("[data-niva]").forEach(b => b.setAttribute("aria-pressed", b.dataset.niva === niva ? "true" : "false")); }
document.querySelectorAll("[data-niva]").forEach(b => b.onclick = () => { niva = b.dataset.niva; try { localStorage.setItem("niva:" + SPEL_ID, niva); } catch (e) {} visaNiva(); visaRekord(); });
visaNiva();
const hudEl = $("hud");
KLADER.forEach(k => { const d = document.createElement("div"); d.className = "plats"; d.id = "plats-" + k.id; d.title = k.namn; d.innerHTML = ikon(k); hudEl.appendChild(d); });
KLADER.forEach(k => { const d = document.createElement("div"); d.className = "plats"; d.innerHTML = ikon(k); $("startIkoner").appendChild(d); });

// rekord:strandjakten = antal poolpartyn på Svår (visas med 🏆 i spelhallen). Bästa tiden sparas per nivå.
function lasTid() { try { return Number(localStorage.getItem(`tid:${SPEL_ID}:${niva}`)) || 0; } catch (e) { return 0; } }
function sparaTid(t) { try { localStorage.setItem(`tid:${SPEL_ID}:${niva}`, String(Math.round(t))); } catch (e) {} }
function raknaPoolparty() { if (niva !== "svar") return; try { const k = "rekord:" + SPEL_ID; localStorage.setItem(k, String((Number(localStorage.getItem(k)) || 0) + 1)); } catch (e) {} }
function tidText(s) { s = Math.round(s); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }
function visaRekord() { const r = lasTid(); $("rekordText").textContent = r ? `Snabbaste poolparty på ${N().namn}: ${tidText(r)}` : ""; }
visaRekord();

function placera(p, s) {
  p.plats = s; p.hittad = false; p.flyg = 0; p.g.visible = true; p.ljus.visible = false; p.g.scale.setScalar(1);
  const ner = N().nedgravt && s.y < 0.5;   // på marken: halvt nedgrävt med en liten sandhög
  p.bas = ner ? -0.5 : 0;
  p.hog.visible = ner;
  p.gl.visible = true; p.gl.material.size = ner ? 0.07 : 0.12; p.gl.material.opacity = ner ? 0.55 : 0.9;
  p.g.position.set(s.x, s.y, s.z);
}
function gomPlagg(lista) {
  const upptagna = plagg.filter(p => !lista.includes(p) && !p.hittad).map(p => p.plats);
  const kandidater = gomstallen.filter(s => (N().nedgravt || !s.sand) && Math.hypot(s.x - spelare.pos.x, s.z - spelare.pos.z) > 10 && !upptagna.includes(s));
  const val = [];
  for (let minA = N().minAvstand; val.length < lista.length && minA >= 0; minA -= 3) {
    for (let forsok = 0; forsok < 300 && val.length < lista.length; forsok++) {
      const s = valj(kandidater);
      if (val.includes(s) || [...val, ...upptagna].some(v => Math.hypot(v.x - s.x, v.z - s.z) < minA)) continue;
      val.push(s);
    }
  }
  lista.forEach((p, i) => placera(p, val[i] || valj(kandidater)));
}
function gomKladerna() { gomPlagg(plagg); }
function klaAv(k) {
  if (k.id === "mklanning") mamma.klanning(null);
  if (k.id === "mskor") mamma.skor(null);
  if (k.id === "bklanning") barn.klanning(null);
  if (k.id === "jacka") barn.jacka(null);
  if (k.id === "bskor") barn.skor(null);
}
function lamnaBebisen() {
  bebisTagen = false; barnvagn.add(bebis); bebis.position.set(0, 0.86, 0.02); bebis.rotation.set(0, 0, 0); bebis.scale.setScalar(1);
}
function aterstall() {
  hittadeAntal = 0;
  barn.klanning(null); barn.jacka(null); barn.skor(null);
  mamma.klanning(null); mamma.skor(null);
  KLADER.forEach(k => $("plats-" + k.id).classList.remove("hittad"));
  lamnaBebisen();
  tjuvSnall = false; festRedo = false; tjuv.foljer = false; tjuv.flyr = null;
  tjuvDelar.mask.visible = true; tjuvDelar.sack.visible = true;
}
function starta() {
  startaLjud(); stoppaFestMusik();
  ["start", "fest", "paus", "gubbe"].forEach(id => $(id).classList.add("dold"));
  ["hud", "tid", "pekplatta"].forEach(id => $(id).classList.remove("dold"));
  spelare.pos.set(0, 0, 16); spelare.yaw = Math.PI;
  grupp.position.copy(spelare.pos); grupp.rotation.y = spelare.yaw;
  mamma.g.position.set(-0.15, 0, 0); mamma.g.rotation.set(0, -0.35, 0); mamma.armarFram = true; grupp.add(mamma.g);
  barnvagn.position.set(-0.95, 0, 0.85); barnvagn.rotation.set(0, 0, 0); grupp.add(barnvagn);
  barn.g.position.set(0.8, 0, 0.3); barn.g.rotation.set(0, 0, 0); grupp.add(barn.g);
  barn.del.armV.rotation.z = -0.12; barn.del.armH.rotation.z = 0.12;
  tjuv.g.visible = false;
  konfetti.visible = false; poolLjus.visible = false; plask.visible = false; skylt.visible = true;
  ballonger.forEach(b => b.position.set(b.userData.x, 2.2, b.userData.z));
  aterstall(); gomKladerna();
  spelTid = 0; sedanFynd = 0; tjuvTimer = -1; tjuvNr = 0; besegrade = 0; ledtipsTimer = 10;
  kameraMal = null;
  lage = "spel";
  setTimeout(() => visa(N().nedgravt ? "Hjälp mamma, barnet och bebisen att hitta fem kläder! Tjuven har grävt ner en del i sanden, leta efter små sandhögar som glittrar." : "Hjälp mamma, barnet och bebisen att hitta fem kläder på stranden! Gå fram till dem som glittrar.", 7), 300);
}
$("spelaKnapp").onclick = starta;
$("igenKnapp").onclick = starta;
let fortsattLage = "spel";
function pausa() { if (lage !== "spel" && lage !== "tjuvKommer") return; fortsattLage = lage; lage = "paus"; $("paus").classList.remove("dold"); }
function fortsatt() { lage = fortsattLage; $("paus").classList.add("dold"); }
$("fortsattKnapp").onclick = fortsatt;

function plockaUpp(p) {
  p.hittad = true; p.flyg = 0; hittadeAntal++; sedanFynd = 0; ljud.hitta();
  plagg.forEach(q => q.ljus.visible = false);
  const el = $("plats-" + p.k.id); el.classList.add("hittad", "pop"); setTimeout(() => el.classList.remove("pop"), 650);
  // alla tar på sig sina saker direkt
  if (p.k.id === "mklanning") mamma.klanning(plaggMat(p.k));
  if (p.k.id === "mskor") mamma.skor(plaggMat(p.k), true);
  if (p.k.id === "bklanning") barn.klanning(plaggMat(p.k));
  if (p.k.id === "jacka") barn.jacka(plaggMat(p.k));
  if (p.k.id === "bskor") barn.skor(plaggMat(p.k));
  const kvar = plagg.length - hittadeAntal;
  const sortKlar = plagg.filter(q => q.k.typ === p.k.typ).every(q => q.hittad);
  let text = `Du hittade ${p.k.namn}! `;
  if (!kvar) text += "Alla kläder är hittade!";
  else if (sortKlar) text += `Nu har ni ${SORTNAMN[p.k.typ]}. Akta er för tjuven!`;
  else text += kvar === 1 ? "En sak kvar." : `${kvar} saker kvar.`;
  visa(text, 4);
  if (sortKlar) { tjuvTimer = TJUV_VANTAN; tjuvSnall = kvar === 0; senasteSort = p.k.typ; }
}
function slappTjuven() {
  const vinkel = rnd(0, Math.PI * 2), p = spelare.pos;
  let x = p.x + Math.cos(vinkel) * 18, z = p.z + Math.sin(vinkel) * 18;
  x = Math.max(GRANS.minX, Math.min(GRANS.maxX, x)); z = Math.max(GRANS.minZ, Math.min(GRANS.maxZ, z));
  tjuv.g.position.set(x, 0, z); tjuv.g.visible = true; tjuv.flyr = null; tjuv.foljer = false;
  if (tjuvSnall) {
    lage = "snallTjuv"; ljud.snall();
    tjuvDelar.mask.visible = false;
    visa("Tjuven kommer, men han ser glad ut!", 3);
  } else {
    tjuvNr++;
    lage = "tjuvKommer"; $("tjuvvarning").classList.remove("dold"); ljud.tjuv();
    visa(tjuvNr === 1 ? "Akta! En tjuv kommer och vill ta bebisen!" : "Tjuven är tillbaka!", 3);
  }
}
function tjuvBlirSnall() {
  lage = "spel"; ljud.vinst();
  const hadeBebis = bebisTagen;
  if (bebisTagen) lamnaBebisen();
  tjuvDelar.sack.visible = false;
  tjuv.foljer = true; festRedo = true; poolLjus.visible = true;
  visa(hadeBebis
    ? "Tjuven blev snäll! Han ger tillbaka bebisen och vill vara med på poolpartyt. Följ det rosa ljuset till poolen!"
    : "Tjuven blev snäll och vill vara med på poolpartyt! Följ det rosa ljuset till poolen!", 7);
}

// ================= HÄNGA GUBBE =================
let gubbeOrd = "", gubbeLedtrad = "", gissat = new Set(), felAntal = 0, gubbeKlar = false;
const anvandaOrd = new Set();
function startaGubbe() {
  lage = "gubbe"; $("tjuvvarning").classList.add("dold");
  for (const k in tangent) tangent[k] = false;
  const idx = Math.min(tjuvNr, N().ordniva.length) - 1;
  const ordniva = N().ordniva[idx];
  const lista = ORD[ordniva].filter(o => !anvandaOrd.has(o[0]));
  const valt = valj(lista.length ? lista : ORD[ordniva]); anvandaOrd.add(valt[0]);
  gubbeOrd = valt[0]; gubbeLedtrad = valt[1]; gissat = new Set(); gubbeKlar = false;
  felAntal = 10 - N().fel[Math.min(idx, N().fel.length - 1)];
  $("gubbeRubrik").textContent = bebisTagen ? `Tjuv nummer ${tjuvNr} är tillbaka!` : `Tjuv nummer ${tjuvNr} vill ta bebisen!`;
  $("ledtradText").textContent = gubbeLedtrad;
  const bs = $("bokstaver"); bs.innerHTML = "";
  ALFABET.forEach(b => { const k = document.createElement("button"); k.textContent = b; k.id = "b-" + b; k.onclick = () => gissa(b); bs.appendChild(k); });
  $("gubbeSlut").classList.add("dold");
  ritaOrd(); ritaGubbe(); $("gubbe").classList.remove("dold");
  saga(`Gissa ordet så springer tjuven iväg. Ordet har ${gubbeOrd.length} bokstäver. Ledtråd: ${gubbeLedtrad}`);
}
$("lyssnaKnapp").onclick = () => saga(gubbeLedtrad);
function ritaOrd() {
  const o = $("ord"); o.innerHTML = "";
  for (const b of gubbeOrd) { const s = document.createElement("span"); s.textContent = gissat.has(b) || gubbeKlar ? b : ""; if (gubbeKlar && !gissat.has(b)) s.style.color = "#d6336c"; o.appendChild(s); }
  const kvar = 10 - felAntal;
  $("livText").textContent = gubbeKlar ? "" : `Du får gissa fel ${kvar} gång${kvar === 1 ? "" : "er"} till.`;
}
function ritaGubbe() {
  const c = $("gubbeRita"), g = c.getContext("2d"), W = c.width;
  g.clearRect(0, 0, W, W);
  g.fillStyle = "#f3dba6"; g.fillRect(0, W * 0.86, W, W * 0.14);
  g.lineCap = "round"; g.lineJoin = "round"; g.strokeStyle = "#3a2a1c"; g.lineWidth = 12;
  const linje = (a, b, c2, d) => { g.beginPath(); g.moveTo(a, b); g.lineTo(c2, d); g.stroke(); };
  const delar = [
    () => linje(60, 400, 240, 400), () => linje(110, 400, 110, 60), () => linje(110, 60, 310, 60), () => linje(310, 60, 310, 110),
    () => { g.beginPath(); g.arc(310, 145, 35, 0, Math.PI * 2); g.stroke(); },
    () => linje(310, 180, 310, 285), () => linje(310, 205, 260, 250), () => linje(310, 205, 360, 250),
    () => linje(310, 285, 270, 355), () => linje(310, 285, 350, 355),
  ];
  for (let i = 0; i < felAntal; i++) delar[i]();
}
function gissa(b) {
  if (lage !== "gubbe" || gubbeKlar || gissat.has(b)) return;
  gissat.add(b);
  const knapp = $("b-" + b); if (knapp) knapp.disabled = true;
  if (gubbeOrd.includes(b)) { ljud.ratt(); if (knapp) knapp.classList.add("ratt"); }
  else { ljud.fel(); felAntal++; if (knapp) knapp.classList.add("fel"); }
  if ([...gubbeOrd].every(x => gissat.has(x))) avslutaGubbe(true); else if (felAntal >= 10) avslutaGubbe(false);
  ritaOrd(); ritaGubbe();
}
function avslutaGubbe(vann) {
  gubbeKlar = true; ritaOrd();
  document.querySelectorAll("#bokstaver button").forEach(k => k.disabled = true);
  const t = $("gubbeSlutText");
  if (vann) {
    besegrade++; ljud.vinst();
    t.textContent = `Rätt, ${gubbeOrd}! Tjuven blev så förvånad att han sprang iväg.`;
  } else {
    ljud.forlust();
    const gomt = N().gomIgen && senasteSort ? ` Han gömde ${SORTNAMN[senasteSort]} igen!` : "";
    t.textContent = bebisTagen
      ? `Åh nej! Ordet var ${gubbeOrd}. Tjuven har fortfarande bebisen.${gomt} Hitta alla kläder så blir han snäll!`
      : `Åh nej! Ordet var ${gubbeOrd}. Tjuven tog bebisen!${gomt} Hitta alla kläder så blir han snäll och ger tillbaka den.`;
  }
  saga(t.textContent);
  $("gubbeSlut").classList.remove("dold"); $("gubbeSlut").dataset.vann = vann ? "1" : "0";
  setTimeout(() => $("gubbeVidare").focus(), 50);
}
$("gubbeVidare").onclick = () => {
  const vann = $("gubbeSlut").dataset.vann === "1";
  $("gubbe").classList.add("dold");
  if (!vann && !bebisTagen) {
    // tjuven tar bebisen och bär den i famnen
    bebisTagen = true; tjuv.g.add(bebis); bebis.position.set(0, 1.05, 0.28); bebis.rotation.set(-1.2, 0, 0); bebis.scale.setScalar(1 / 1.05);
  }
  if (!vann && N().gomIgen && senasteSort) {
    // tjuven gömmer den sortens kläder på nya ställen
    const igen = plagg.filter(p => p.k.typ === senasteSort);
    igen.forEach(p => { klaAv(p.k); $("plats-" + p.k.id).classList.remove("hittad"); });
    hittadeAntal -= igen.filter(p => p.hittad).length;
    gomPlagg(igen);
    setTimeout(() => { if (lage === "spel") visa(`Leta efter ${SORTNAMN[senasteSort]} igen!`, 4); }, 400);
  }
  const p = tjuv.g.position;
  tjuv.flyr = new THREE.Vector3(p.x + (p.x - spelare.pos.x) * 8, 0, p.z + (p.z - spelare.pos.z) * 8);
  sedanFynd = 0; lage = "spel";
};

// ================= FEST =================
let festTid = 0, barnHopp = null;
function startaFest() {
  lage = "fest"; festTid = 0;
  ["hud", "tid", "tjuvvarning", "pekplatta"].forEach(id => $(id).classList.add("dold"));
  $("medd").classList.add("osynlig");
  poolLjus.visible = false; konfetti.visible = true; skylt.visible = false;
  if (bebisTagen) lamnaBebisen();
  // ställ alla på pooldäcket
  grupp.position.set(0, 0, 0); grupp.rotation.y = 0;
  mamma.g.position.set(-1.6, 0, 26.6); mamma.g.rotation.y = Math.PI; mamma.armarFram = false;
  barnvagn.position.set(-2.9, 0, 26.4); barnvagn.rotation.y = Math.PI * 0.85;
  barn.g.position.set(0.6, 0, 26.6); barn.g.rotation.set(0, Math.PI, 0);
  tjuv.g.visible = true; tjuv.foljer = false; tjuv.flyr = null; tjuvDelar.mask.visible = false; tjuvDelar.sack.visible = false;
  tjuv.g.position.set(2.4, 0, 26.6); tjuv.g.rotation.y = Math.PI;
  barnHopp = null;
  ljud.vinst(); startaFestMusik();
  const r = lasTid(), nytt = !r || spelTid < r;
  if (nytt) sparaTid(spelTid);
  raknaPoolparty();
  $("festText").textContent = `Alla kläder hittade på ${tidText(spelTid)}! Ni slog tjuven ${besegrade} gång${besegrade === 1 ? "" : "er"} i hänga gubbe, och nu är han snäll och festar med er.${nytt ? " Nytt rekord!" : ""}`;
  setTimeout(() => { if (lage === "fest") { $("fest").classList.remove("dold"); saga("Poolparty! " + $("festText").textContent); } }, 5500);
}

// ================= LOOP =================
const klocka = new THREE.Clock();
let t = 0, kameraMal = null;
const tmp = new THREE.Vector3();
function rorTjuvMot(x, z, fart, dt, stopp) {
  const tp = tjuv.g.position, dx = x - tp.x, dz = z - tp.z, d = Math.hypot(dx, dz);
  if (d > stopp) { tp.x += dx / d * fart * dt; tp.z += dz / d * fart * dt; tjuv.g.rotation.y = Math.atan2(dx, dz); tjuv.ga(dt, fart); return false; }
  tjuv.ga(dt, 0); return true;
}
function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, klocka.getDelta()); t += dt;

  const a = havGeo.attributes.position.array;
  for (let i = 0; i < a.length; i += 3) a[i + 2] = Math.sin(havBas[i] * 0.15 + t * 1.3) * 0.12 + Math.cos(havBas[i + 1] * 0.25 + t) * 0.1;
  havGeo.attributes.position.needsUpdate = true;
  skum.position.z = -29.2 + Math.sin(t * 0.8) * 0.5;
  lampor.forEach((l, i) => l.material.color.set(REGNBAGE[(i + Math.floor(t * 3)) % 6]));
  plagg.forEach(p => {
    if (!p.g.visible) return;
    if (p.hittad) { p.hog.visible = false; p.flyg += dt; p.g.position.y += dt * 4; p.g.scale.setScalar(Math.max(0.01, 1 - p.flyg * 1.4)); if (p.flyg > 0.7) p.g.visible = false; return; }
    p.modell.rotation.y += dt * (p.bas ? 0.25 : 0.8); p.modell.position.y = p.bas + Math.sin(t * 2 + p.plats.x) * (p.bas ? 0.02 : 0.08);
    uppdateraGlitter(p.gl, t);
  });
  if (!bebisTagen) bebis.rotation.z = Math.sin(t * 1.5) * 0.08; // bebisen gungar lite

  const spelar = lage === "spel" || lage === "tjuvKommer" || lage === "snallTjuv";
  if (spelar) {
    spelTid += dt; sedanFynd += dt;
    $("tid").textContent = tidText(spelTid);
    const vanster = tangent.ArrowLeft || tangent.KeyA, hoger = tangent.ArrowRight || tangent.KeyD;
    if (vanster) spelare.yaw += SVANG_FART * dt;
    if (hoger) spelare.yaw -= SVANG_FART * dt;
    const fram = (tangent.KeyW || tangent.ArrowUp ? 1 : 0) - (tangent.KeyS || tangent.ArrowDown ? 0.6 : 0);
    const fart = (tangent.ShiftLeft || tangent.ShiftRight) ? SPRING_FART : GA_FART;
    const fx = Math.sin(spelare.yaw), fz = Math.cos(spelare.yaw);
    if (fram) { spelare.pos.x += fx * fram * fart * dt; spelare.pos.z += fz * fram * fart * dt; }
    krock(spelare.pos, GRUPP_RADIE);
    grupp.position.copy(spelare.pos); grupp.rotation.y = spelare.yaw;
    const rorelse = fram ? Math.abs(fram) * fart : (vanster || hoger ? 1.5 : 0);
    mamma.ga(dt, rorelse); barn.ga(dt, rorelse);
    barnvagn.children.forEach(c => { if (c.geometry && c.geometry.type === "TorusGeometry") c.rotation.x += fram * fart * dt / 0.15; });

    if (lage === "spel") {
      for (const p of plagg) {
        if (p.hittad || !p.g.visible) continue;
        if (Math.hypot(p.g.position.x - spelare.pos.x, p.g.position.z - spelare.pos.z) < PLOCK_AVSTAND) { plockaUpp(p); break; }
      }
      const kvar = plagg.filter(p => !p.hittad);
      if (kvar.length && sedanFynd > N().ledljusEfter) {
        const avst = p => Math.hypot(p.g.position.x - spelare.pos.x, p.g.position.z - spelare.pos.z);
        const narmast = kvar.reduce((x, y) => avst(x) < avst(y) ? x : y);
        if (!narmast.ljus.visible) { narmast.ljus.visible = true; visa("Titta! Ett ljus visar var något är gömt.", 4); }
      }
      ledtipsTimer -= dt;
      if (N().tips && ledtipsTimer < 0 && kvar.length) {
        const nara = kvar.find(p => Math.hypot(p.g.position.x - spelare.pos.x, p.g.position.z - spelare.pos.z) < 11);
        if (nara) { visa(`Barnet: Jag ser något som glittrar ${nara.plats.namn}!`, 4); ledtipsTimer = 18; } else ledtipsTimer = 5;
      }
      if (tjuvTimer > 0) { tjuvTimer -= dt; if (tjuvTimer <= 0) slappTjuven(); }
      if (festRedo && spelare.pos.z > DACK.minZ - 1 && Math.abs(spelare.pos.x) < DACK.maxX) startaFest();
    }
    if (lage === "tjuvKommer" && rorTjuvMot(spelare.pos.x, spelare.pos.z, TJUV_FART, dt, 2.4)) startaGubbe();
    if (lage === "snallTjuv" && rorTjuvMot(spelare.pos.x, spelare.pos.z, TJUV_FART * 0.7, dt, 2.4)) tjuvBlirSnall();
  }
  // tjuven springer iväg, eller följer med som snäll
  if (tjuv.g.visible && tjuv.flyr && lage !== "tjuvKommer") {
    const tp = tjuv.g.position;
    rorTjuvMot(tjuv.flyr.x, tjuv.flyr.z, TJUV_FART * 1.3, dt, 1);
    if (Math.hypot(tp.x - spelare.pos.x, tp.z - spelare.pos.z) > 35 || Math.hypot(tjuv.flyr.x - tp.x, tjuv.flyr.z - tp.z) < 1.2) { tjuv.g.visible = false; tjuv.flyr = null; }
  }
  if (tjuv.foljer && lage === "spel") {
    // den snälla tjuven går bredvid barnet
    const bx = spelare.pos.x + Math.cos(spelare.yaw) * 1.7 - Math.sin(spelare.yaw) * 0.2, bz = spelare.pos.z - Math.sin(spelare.yaw) * 1.7 - Math.cos(spelare.yaw) * 0.2;
    tmp.set(tjuv.g.position.x, 0, tjuv.g.position.z);
    const d = Math.hypot(bx - tmp.x, bz - tmp.z);
    rorTjuvMot(bx, bz, Math.min(d * 3, SPRING_FART + 1), dt, 0.3);
  }
  if (meddTimer > 0) { meddTimer -= dt; if (meddTimer <= 0) $("medd").classList.add("osynlig"); }

  // kamera
  if (lage === "fest") {
    festTid += dt;
    const v = festTid * 0.18;
    kamera.position.set(Math.sin(v) * 4.5, 2.5, 22.4 + (1 - Math.cos(v)) * 0.8);
    kamera.lookAt(0, 0.9, 28.2);
    ballonger.forEach(b => { b.position.y = 2.2 + Math.min(festTid * 0.6, 6) + Math.sin(t * 2 + b.userData.fas) * 0.2; b.position.x = b.userData.x + Math.sin(t + b.userData.fas) * 0.3; });
    const kp = konfetti.geometry.attributes.position.array;
    for (let i = 0; i < konfettiAntal; i++) { kp[i * 3 + 1] -= dt * (1.2 + (i % 5) * 0.3); kp[i * 3] += Math.sin(t * 3 + i) * dt * 0.4; if (kp[i * 3 + 1] < 0) kp[i * 3 + 1] = 12; }
    konfetti.geometry.attributes.position.needsUpdate = true;
    // mamma och tjuven dansar
    for (const [f, fas] of [[mamma, 0], [tjuv, 1.3]]) {
      f.g.position.y = Math.abs(Math.sin(t * 5 + fas)) * 0.15;
      f.del.armV.rotation.x = 0; f.del.armH.rotation.x = 0;
      f.del.armV.rotation.z = -2.6 + Math.sin(t * 8 + fas) * 0.3; f.del.armH.rotation.z = 2.6 - Math.sin(t * 8 + fas) * 0.3;
    }
    barnvagn.rotation.z = Math.sin(t * 3) * 0.03;
    if (festTid > 3 && !barnHopp) barnHopp = { t: 0, fran: barn.g.position.clone() };
    if (barnHopp && barnHopp.t < 1) {
      barnHopp.t = Math.min(1, barnHopp.t + dt * 0.9);
      const k = barnHopp.t;
      barn.g.position.set(barnHopp.fran.x + (0.5 - barnHopp.fran.x) * k, Math.sin(k * Math.PI) * 2.2 - k * 0.6, barnHopp.fran.z + (30.2 - barnHopp.fran.z) * k);
      barn.g.rotation.x = -k * 0.4;
      barn.del.armV.rotation.z = -2.8; barn.del.armH.rotation.z = 2.8;
      if (barnHopp.t >= 1) {
        ljud.plask(); plask.visible = true;
        const pa = plask.geometry.attributes.position.array; plask.userData.v = [];
        for (let i = 0; i < 120; i++) { pa[i * 3] = 0.5; pa[i * 3 + 1] = 0.1; pa[i * 3 + 2] = 30.2; plask.userData.v.push([rnd(-2, 2), rnd(3, 6), rnd(-2, 2)]); }
      }
    } else if (barnHopp) { barn.g.position.y = -0.6 + Math.sin(t * 2) * 0.08; barn.g.rotation.x = 0; }
    if (plask.visible) {
      const pa = plask.geometry.attributes.position.array;
      plask.userData.v.forEach((v, i) => { v[1] -= 9.8 * dt; pa[i * 3] += v[0] * dt; pa[i * 3 + 1] += v[1] * dt; pa[i * 3 + 2] += v[2] * dt; });
      plask.geometry.attributes.position.needsUpdate = true;
      if (plask.userData.v[0][1] < -8) plask.visible = false;
    }
  } else if (lage === "start") {
    const v = t * 0.05;
    kamera.position.set(Math.sin(v) * 26, 9, Math.cos(v) * 26 + 4); kamera.lookAt(0, 1, 0);
    grupp.position.set(0, 0, 16); grupp.rotation.y = t * 0.3;
  } else {
    // tredjeperson: kameran är bakom gruppen och svänger med den
    const fx = Math.sin(spelare.yaw), fz = Math.cos(spelare.yaw);
    tmp.set(spelare.pos.x - fx * KAMERA_BAKOM, KAMERA_HOJD, spelare.pos.z - fz * KAMERA_BAKOM);
    if (!kameraMal) { kameraMal = new THREE.Vector3(); kamera.position.copy(tmp); }
    kamera.position.lerp(tmp, Math.min(1, dt * 8));
    kameraMal.set(spelare.pos.x + fx * 3.2, 0.6, spelare.pos.z + fz * 3.2);
    kamera.lookAt(kameraMal);
  }
  renderer.render(scen, kamera);
}
loop();

// testkrokar
window.__strandjakten = {
  spelare, plagg, mamma, barn, bebis, barnvagn, tjuv, starta, gissa, slappTjuven, startaFest, plockaUpp,
  get lage() { return lage; }, get ord() { return gubbeOrd; }, get bebisTagen() { return bebisTagen; }, get festRedo() { return festRedo; }, get hittade() { return hittadeAntal; }, get tjuvNr() { return tjuvNr; },
};
