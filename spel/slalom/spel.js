// ⛷️ Slalom – Noréns spelhall
// Bygger på delat/extra.js (paus-meny, touch-knappar, ljud). motor.js används inte här.
import {
  THREE, skapaSpel, startaLoop, knappar, skapaHud, visaMeny, lyssnaPaus, tillHallen,
  hamta, spara, skapaLjud, slump, begransa, el,
} from '../../delat/extra.js';

// ================= JUSTERBARA VÄRDEN =================
const SPEL_ID = 'slalom';
const BANBREDD = 11;          // halva bredden på pisten (meter)
const STRAFF_MISS = 3;        // sekunder per missad port
const TRICK_BONUS = 0.5;      // sekunder avdrag per lyckad 360 från hopp
const STOLP_BROMS = 0.55;     // farten multipliceras med detta när man kör på en stolpe
const SVANG_MAX = 0.8;        // max vinkel i svängen (radianer)
const SVANG_SNABBHET = 4.5;   // hur snabbt skidåkaren svänger
const ACCELERATION = 9;
const GRAVITATION = 16;
const OLLIE_FART = 4.5;       // uppåtfart när man hoppar själv
const KICKER_FART = 6.5;      // uppåtfart från en kicker
const SNURR_TID = 0.55;       // sekunder för en 360

// Backarna. medalj = [guld, silver, brons] i sekunder (total tid)
const BACKAR = {
  gron:  { namn: 'Gröna backen',  ikon: '🟢', fro: 11, portar: 12, avstand: 24, sidled: 3.0, portbredd: 5.2, lutning: 0.16, maxFart: 19, kickers: 0, medalj: [21.5, 25.5, 32] },
  bla:   { namn: 'Blå backen',    ikon: '🔵', fro: 22, portar: 18, avstand: 21, sidled: 4.4, portbredd: 4.3, lutning: 0.22, maxFart: 25, kickers: 2, medalj: [26.5, 31.5, 40] },
  svart: { namn: 'Svarta backen', ikon: '⚫', fro: 33, portar: 24, avstand: 19, sidled: 5.4, portbredd: 3.7, lutning: 0.28, maxFart: 31, kickers: 4, medalj: [34, 41, 52] },
};
// ======================================================

const params = new URLSearchParams(location.search);
const BOT = params.has('bot'); // autopilot för test

const { renderer, scene, camera } = skapaSpel({ bakgrund: 0x9fd3ff });
scene.fog = new THREE.Fog(0xcfe8ff, 40, 170);
const ljud = skapaLjud();
const vind = ljud.loop(500);
const carveLjud = ljud.loop(2500);

const kontroll = knappar(
  {
    vanster: ['ArrowLeft', 'KeyA'],
    hoger: ['ArrowRight', 'KeyD'],
    fart: ['ArrowDown', 'KeyS'],
    hopp: ['Space', 'ArrowUp', 'KeyW'],
  },
  [
    { namn: 'vanster', text: '◀', sida: 'vanster' },
    { namn: 'hoger', text: '▶', sida: 'vanster' },
    { namn: 'fart', text: '⬇', sida: 'hoger', liten: true },
    { namn: 'hopp', text: '⤴', sida: 'hoger' },
  ],
);

// ---------- Ljus ----------
scene.add(new THREE.HemisphereLight(0xdff1ff, 0x8aa0c0, 1.1));
const sol = new THREE.DirectionalLight(0xffffff, 1.6);
sol.castShadow = true;
sol.shadow.mapSize.set(1024, 1024);
Object.assign(sol.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 1, far: 80 });
scene.add(sol, sol.target);

// ---------- Hjälpare ----------
const mat = (farg, extra = {}) => new THREE.MeshLambertMaterial({ color: farg, ...extra });
function textTextur(text, { bredd = 512, hojd = 128, farg = '#fff', bak = '#e5383b', storlek = 80 } = {}) {
  const c = document.createElement('canvas');
  c.width = bredd; c.height = hojd;
  const g = c.getContext('2d');
  g.fillStyle = bak; g.fillRect(0, 0, bredd, hojd);
  g.fillStyle = farg; g.font = `900 ${storlek}px system-ui, sans-serif`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, bredd / 2, hojd / 2 + 4);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const tidText = (s) => s.toFixed(2).replace('.', ',') + ' s';
const deltaText = (d) => (d > 0 ? '+' : '−') + Math.abs(d).toFixed(2).replace('.', ',');

// ---------- Skidåkare ----------
function byggAkare(farg = 0xe63946) {
  const g = new THREE.Group();
  const kropp = new THREE.Group();
  g.add(kropp);
  const dela = (geo, m, x, y, z) => { const me = new THREE.Mesh(geo, m); me.position.set(x, y, z); me.castShadow = true; kropp.add(me); return me; };
  const jacka = mat(farg), byxor = mat(0x1d3557), hud = mat(0xffd6b0), hjalm = mat(0xffffff), glasogon = mat(0xffb703);
  const skidor = mat(0xff4f8b);
  // skidor (i g så de inte lutar med kroppen)
  for (const x of [-0.18, 0.18]) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.05, 1.8), skidor);
    s.position.set(x, 0.03, -0.1); s.castShadow = true; g.add(s);
    const spets = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.05, 0.2), skidor);
    spets.position.set(x, 0.09, -1.02); spets.rotation.x = 0.5; g.add(spets);
  }
  dela(new THREE.BoxGeometry(0.17, 0.6, 0.2), byxor, -0.17, 0.38, 0);
  dela(new THREE.BoxGeometry(0.17, 0.6, 0.2), byxor, 0.17, 0.38, 0);
  const overkropp = dela(new THREE.BoxGeometry(0.55, 0.6, 0.32), jacka, 0, 0.95, 0);
  dela(new THREE.SphereGeometry(0.2, 16, 12), hud, 0, 1.43, 0);
  const h = dela(new THREE.SphereGeometry(0.23, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), hjalm, 0, 1.46, 0);
  h.scale.set(1, 1.05, 1.05);
  dela(new THREE.BoxGeometry(0.34, 0.1, 0.08), glasogon, 0, 1.46, -0.19);
  // armar + stavar
  for (const s of [-1, 1]) {
    const arm = dela(new THREE.BoxGeometry(0.13, 0.5, 0.14), jacka, s * 0.34, 0.95, -0.08);
    arm.rotation.x = -0.6;
    const stav = dela(new THREE.CylinderGeometry(0.02, 0.02, 1.2, 6), mat(0x333333), s * 0.42, 0.55, -0.1);
    stav.rotation.x = 0.35;
  }
  g.userData = { kropp, overkropp };
  return g;
}

function spokMaterial(obj) {
  const m = new THREE.MeshBasicMaterial({ color: 0x9ad8ff, transparent: true, opacity: 0.35, depthWrite: false });
  obj.traverse((o) => { if (o.isMesh) { o.material = m; o.castShadow = false; } });
}

// ---------- Värld (byggs om för varje backe) ----------
let varld = null;

// Banans layout (samma frö = samma bana varje gång, så spöket stämmer)
function banLayout(id) {
  const B = BACKAR[id];
  const r = slump(B.fro);
  const portar = [];
  const kickers = [];
  let z = -32;
  let sida = r() < 0.5 ? -1 : 1;
  const kickerEfter = new Set();
  for (let i = 1; i <= B.kickers; i++) kickerEfter.add(Math.round((i * B.portar) / (B.kickers + 1)) - 1);
  const maxX = BANBREDD - B.portbredd / 2 - 0.8;
  for (let i = 0; i < B.portar; i++) {
    const x = begransa(sida * B.sidled * (0.65 + r() * 0.5), -maxX, maxX);
    portar.push({ x, z, bredd: B.portbredd, farg: i % 2 ? 0x1e6bff : 0xe5383b, tagen: false, missad: false });
    sida *= -1;
    let steg = B.avstand * (0.9 + r() * 0.2);
    if (kickerEfter.has(i)) {
      steg = B.avstand * 2.2;
      const nastaX = begransa(sida * B.sidled * 0.8, -maxX, maxX);
      kickers.push({ x: (x + nastaX) / 2 * 0.6, z: z - B.avstand * 0.75, bredd: 3.4, langd: 3.2, hojd: 0.9 });
    }
    z -= steg;
  }
  const malZ = z - 20;
  return { portar, kickers, malZ, r };
}


function byggBacke(id) {
  if (varld) { scene.remove(varld.grupp); varld.grupp.traverse((o) => { o.geometry && o.geometry.dispose(); }); }
  const B = BACKAR[id];
  const k = B.lutning;
  const markY = (x, z) => k * z;
  const grupp = new THREE.Group();
  scene.add(grupp);
  const { portar, kickers, malZ, r } = banLayout(id);
  const slutZ = malZ - 90;

  // Snö (mark med vallar på sidorna)
  const langd = -slutZ + 80;
  const markGeo = new THREE.PlaneGeometry(160, langd, 64, 120);
  markGeo.rotateX(-Math.PI / 2);
  markGeo.translate(0, 0, -langd / 2 + 40);
  const pos = markGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), zz = pos.getZ(i);
    const kant = Math.max(0, Math.abs(x) - BANBREDD - 1.5);
    pos.setY(i, markY(x, zz) + Math.pow(kant, 1.35) * 0.22 + Math.sin(x * 0.3 + zz * 0.07) * Math.min(kant, 3) * 0.15);
  }
  markGeo.computeVertexNormals();
  const mark = new THREE.Mesh(markGeo, mat(0xf4f9ff));
  mark.receiveShadow = true;
  grupp.add(mark);

  // Pistad yta (lite blåare ton)
  const pistGeo = new THREE.PlaneGeometry(BANBREDD * 2, langd, 1, 40);
  pistGeo.rotateX(-Math.PI / 2);
  pistGeo.translate(0, 0, -langd / 2 + 40);
  const pp = pistGeo.attributes.position;
  for (let i = 0; i < pp.count; i++) pp.setY(i, markY(0, pp.getZ(i)) + 0.01);
  const sparC = document.createElement('canvas'); sparC.width = 64; sparC.height = 64;
  const sg = sparC.getContext('2d');
  sg.fillStyle = '#eaf3ff'; sg.fillRect(0, 0, 64, 64);
  sg.fillStyle = '#d6e6fb'; for (let i = 0; i < 64; i += 8) sg.fillRect(i, 0, 3, 64);
  sg.fillStyle = '#dce9fb'; sg.fillRect(0, 0, 64, 2);
  const spar = new THREE.CanvasTexture(sparC);
  spar.wrapS = spar.wrapT = THREE.RepeatWrapping;
  spar.repeat.set(BANBREDD * 2 / 1.2, langd / 4);
  spar.anisotropy = 8;
  const pist = new THREE.Mesh(pistGeo, mat(0xffffff, { map: spar }));
  pist.receiveShadow = true;
  grupp.add(pist);

  // Staket (orange nät) längs kanterna
  for (const s of [-1, 1]) {
    const pts = [];
    const steg = 40;
    const geo = new THREE.BufferGeometry();
    for (let i = 0; i <= steg; i++) {
      const zz = 30 + (slutZ - 30) * (i / steg);
      const y = markY(0, zz);
      pts.push(s * (BANBREDD + 0.9), y, zz, s * (BANBREDD + 0.9), y + 1.1, zz);
    }
    const idx = [];
    for (let i = 0; i < steg; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    grupp.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xff7a1a, transparent: true, opacity: 0.55, side: THREE.DoubleSide })));
  }

  // Granar (instansierade)
  const tradPos = [];
  for (let zz = 25; zz > slutZ; zz -= 4.2) {
    for (const s of [-1, 1]) {
      const antal = 2 + Math.floor(r() * 3);
      for (let j = 0; j < antal; j++) {
        const x = s * (BANBREDD + 4 + r() * 38);
        const kant = Math.max(0, Math.abs(x) - BANBREDD - 1.5);
        tradPos.push([x, markY(x, zz) + Math.pow(kant, 1.35) * 0.22, zz + r() * 3, 0.7 + r() * 0.9]);
      }
    }
  }
  const kotte = new THREE.ConeGeometry(1.6, 3.6, 7);
  const stam = new THREE.CylinderGeometry(0.25, 0.3, 1.2, 6);
  const barr = new THREE.InstancedMesh(kotte, mat(0x1f6f4a), tradPos.length * 2);
  const stammar = new THREE.InstancedMesh(stam, mat(0x6b4226), tradPos.length);
  const snoTopp = new THREE.InstancedMesh(new THREE.ConeGeometry(0.8, 1.2, 7), mat(0xffffff), tradPos.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), pv = new THREE.Vector3();
  tradPos.forEach(([x, y, zz, s], i) => {
    sv.set(s, s, s);
    m4.compose(pv.set(x, y + 0.6 * s, zz), q, sv); stammar.setMatrixAt(i, m4);
    m4.compose(pv.set(x, y + 2.6 * s, zz), q, sv); barr.setMatrixAt(i * 2, m4);
    sv.set(s * 0.75, s * 0.8, s * 0.75);
    m4.compose(pv.set(x, y + 4.0 * s, zz), q, sv); barr.setMatrixAt(i * 2 + 1, m4);
    sv.set(s, s, s);
    m4.compose(pv.set(x, y + 5.1 * s, zz), q, sv); snoTopp.setMatrixAt(i, m4);
  });
  barr.castShadow = true;
  grupp.add(barr, stammar, snoTopp);

  // Portar: två stolpar med flaggor + streck i snön
  const stolpGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.1, 8);
  const flaggGeo = new THREE.PlaneGeometry(0.9, 0.7);
  for (const p of portar) {
    const y = markY(p.x, p.z);
    p.stolpar = [];
    for (const s of [-1, 1]) {
      const sg = new THREE.Group();
      sg.position.set(p.x + s * p.bredd / 2, y, p.z);
      const stolpe = new THREE.Mesh(stolpGeo, mat(p.farg));
      stolpe.position.y = 1.05; stolpe.castShadow = true;
      const flagga = new THREE.Mesh(flaggGeo, mat(p.farg, { side: THREE.DoubleSide }));
      flagga.position.set(-s * 0.48, 1.65, 0);
      sg.add(stolpe, flagga);
      grupp.add(sg);
      p.stolpar.push({ grupp: sg, x: p.x + s * p.bredd / 2, vingla: 0 });
    }
    const streck = new THREE.Mesh(new THREE.PlaneGeometry(p.bredd - 0.3, 0.25), new THREE.MeshBasicMaterial({ color: p.farg, transparent: true, opacity: 0.35 }));
    streck.rotation.x = -Math.PI / 2 - Math.atan(k);
    streck.position.set(p.x, y + 0.03, p.z);
    grupp.add(streck);
    p.streck = streck;
  }

  // Kickers (ramper)
  for (const kk of kickers) {
    const form = new THREE.Shape();
    form.moveTo(0, 0); form.lineTo(kk.langd, 0); form.lineTo(kk.langd, kk.hojd); form.quadraticCurveTo(kk.langd * 0.4, kk.hojd * 0.2, 0, 0);
    const geo = new THREE.ExtrudeGeometry(form, { depth: kk.bredd, bevelEnabled: false });
    geo.rotateY(Math.PI / 2);
    geo.translate(-kk.bredd / 2, 0, kk.langd / 2);
    const ramp = new THREE.Mesh(geo, mat(0xdbe9ff));
    ramp.position.set(kk.x, markY(kk.x, kk.z), kk.z);
    ramp.rotation.x = -Math.atan(k);
    ramp.castShadow = true; ramp.receiveShadow = true;
    grupp.add(ramp);
    // blå kant på läppen
    const kantLinje = new THREE.Mesh(new THREE.BoxGeometry(kk.bredd, 0.08, 0.15), mat(0x1e6bff));
    kantLinje.position.set(kk.x, markY(kk.x, kk.z - kk.langd / 2) + kk.hojd, kk.z - kk.langd / 2);
    grupp.add(kantLinje);
  }

  // Start- och målbåge
  const bage = (zz, text, bak) => {
    const g = new THREE.Group();
    const y = markY(0, zz);
    for (const s of [-1, 1]) {
      const st = new THREE.Mesh(new THREE.BoxGeometry(0.5, 7.2, 0.5), mat(bak));
      st.position.set(s * (BANBREDD - 0.5), y + 3.6, zz); st.castShadow = true; g.add(st);
    }
    const skylt = new THREE.Mesh(new THREE.BoxGeometry(BANBREDD * 2, 1.4, 0.3), [mat(bak), mat(bak), mat(bak), mat(bak),
      new THREE.MeshBasicMaterial({ map: textTextur(text, { bak: '#' + bak.toString(16).padStart(6, '0'), bredd: 1024, storlek: 96 }) }),
      new THREE.MeshBasicMaterial({ map: textTextur(text, { bak: '#' + bak.toString(16).padStart(6, '0'), bredd: 1024, storlek: 96 }) })]);
    skylt.position.set(0, y + 7.2, zz);
    g.add(skylt);
    grupp.add(g);
    return g;
  };
  bage(-1, 'START', 0x1e6bff);
  bage(malZ, '🏁 MÅL 🏁', 0xe5383b);

  varld = { id, B, grupp, portar, kickers, malZ, markY, k };
}

// ---------- Partiklar: snöspray och snöfall ----------
const rundTextur = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,.8)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
})();
const SPRAY_MAX = 260;
const sprayGeo = new THREE.BufferGeometry();
const sprayPos = new Float32Array(SPRAY_MAX * 3);
sprayGeo.setAttribute('position', new THREE.BufferAttribute(sprayPos, 3));
const spray = new THREE.Points(sprayGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.35, map: rundTextur, transparent: true, depthWrite: false }));
spray.frustumCulled = false;
scene.add(spray);
const sprayData = Array.from({ length: SPRAY_MAX }, () => ({ liv: 0, vx: 0, vy: 0, vz: 0 }));
let sprayNasta = 0;
function sprutaSno(x, y, z, antal, kraft = 1, riktning = 0) {
  for (let i = 0; i < antal; i++) {
    const p = sprayData[sprayNasta]; const j = sprayNasta * 3;
    sprayNasta = (sprayNasta + 1) % SPRAY_MAX;
    sprayPos[j] = x + (Math.random() - 0.5) * 0.6; sprayPos[j + 1] = y + 0.1; sprayPos[j + 2] = z + Math.random() * 0.6;
    p.liv = 0.5 + Math.random() * 0.4;
    p.vx = riktning * (2 + Math.random() * 3) * kraft + (Math.random() - 0.5) * 2;
    p.vy = (1.5 + Math.random() * 2.5) * kraft;
    p.vz = (Math.random() - 0.2) * 3;
  }
}
function uppdateraSpray(dt) {
  for (let i = 0; i < SPRAY_MAX; i++) {
    const p = sprayData[i]; const j = i * 3;
    if (p.liv <= 0) { sprayPos[j + 1] = -9999; continue; }
    p.liv -= dt; p.vy -= 9 * dt;
    sprayPos[j] += p.vx * dt; sprayPos[j + 1] += p.vy * dt; sprayPos[j + 2] += p.vz * dt;
  }
  sprayGeo.attributes.position.needsUpdate = true;
}

const FLINGOR = 500;
const flingGeo = new THREE.BufferGeometry();
const flingPos = new Float32Array(FLINGOR * 3);
for (let i = 0; i < FLINGOR; i++) { flingPos[i * 3] = (Math.random() - 0.5) * 50; flingPos[i * 3 + 1] = Math.random() * 25; flingPos[i * 3 + 2] = -Math.random() * 60; }
flingGeo.setAttribute('position', new THREE.BufferAttribute(flingPos, 3));
const flingor = new THREE.Points(flingGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.18, map: rundTextur, transparent: true, depthWrite: false }));
flingor.frustumCulled = false;
scene.add(flingor);

// Konfetti vid mål
const konfetti = [];
const konfettiGeo = new THREE.PlaneGeometry(0.25, 0.15);
function skjutKonfetti(x, y, z) {
  const farger = [0xff4f8b, 0xffd54a, 0x6cff9a, 0x4fc3ff, 0xb388ff, 0xff8a3d];
  for (let i = 0; i < 160; i++) {
    const m = new THREE.Mesh(konfettiGeo, new THREE.MeshBasicMaterial({ color: farger[i % farger.length], side: THREE.DoubleSide }));
    m.position.set(x + (Math.random() - 0.5) * 10, y + 4 + Math.random() * 3, z + (Math.random() - 0.5) * 6);
    m.userData = { vx: (Math.random() - 0.5) * 6, vy: Math.random() * 6 + 2, vz: (Math.random() - 0.5) * 6, rx: Math.random() * 10, ry: Math.random() * 10, liv: 4 };
    scene.add(m); konfetti.push(m);
  }
}
function uppdateraKonfetti(dt) {
  for (let i = konfetti.length - 1; i >= 0; i--) {
    const m = konfetti[i], d = m.userData;
    d.liv -= dt; d.vy -= 5 * dt; d.vx *= 0.99;
    m.position.x += d.vx * dt; m.position.y += Math.max(d.vy, -2.5) * dt; m.position.z += d.vz * dt;
    m.rotation.x += d.rx * dt; m.rotation.y += d.ry * dt;
    if (d.liv <= 0) { scene.remove(m); m.material.dispose(); konfetti.splice(i, 1); }
  }
}

// ---------- Åkare, skugga, spöke ----------
const akare = byggAkare();
scene.add(akare);
const skugga = new THREE.Mesh(new THREE.CircleGeometry(0.7, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25, depthWrite: false }));
skugga.rotation.x = -Math.PI / 2;
scene.add(skugga);
const spoke = byggAkare(0x9ad8ff);
spokMaterial(spoke);
spoke.visible = false;
scene.add(spoke);

// ---------- HUD ----------
const hud = skapaHud();
const hudTid = el('div', 'ruta'); const hudPortar = el('div', 'ruta'); const hudDelta = el('div', 'ruta');
hud.append(hudTid, hudPortar, hudDelta);
const meddelande = el('div', 'meddelande');
document.body.appendChild(meddelande);
let meddelandeTimer = 0;
function visa(text, { klass = '', tid = 1.1, liten = false } = {}) {
  meddelande.textContent = text;
  meddelande.className = 'meddelande ' + klass + (liten ? ' liten' : '');
  meddelande.style.opacity = 1;
  meddelandeTimer = tid;
}

// ---------- Spelets tillstånd ----------
let lage = 'meny';      // meny | nedrakning | akning | mal | paus
let forePaus = null;
let backeId = 'gron';
const s = {};           // åkarens tillstånd
let spokData = null;    // bästa åket för backen
let inspelning = null;

function nollstall() {
  Object.assign(s, {
    x: 0, z: 2, h: 0, vy: 0, fart: 0, vinkel: 0, tid: 0, nedrakning: 3.5,
    missar: 0, bonus: 0, nastaPort: 0, portTider: [], luft: false, franKicker: false,
    snurr: 0, snurrar: false, landningsVingel: 0, malTid: 0,
  });
  for (const p of varld.portar) { p.tagen = false; p.missad = false; p.stolpar.forEach((st) => (st.vingla = 0)); p.streck.material.opacity = 0.35; }
  inspelning = { pos: [], portTider: [] };
  try { spokData = JSON.parse(localStorage.getItem('spoke:' + SPEL_ID + ':' + backeId)); } catch { spokData = null; }
  spoke.visible = !!spokData;
  hudDelta.style.display = 'none';
  konfetti.splice(0).forEach((m) => scene.remove(m));
}

function startaBacke(id) {
  backeId = id;
  byggBacke(id);
  nollstall();
  lage = 'nedrakning';
  ljud.vakna();
  forraSek = 4;
}

// ---------- Menyer ----------
// Bästa tider per backe sparas under 'slalom:tider'.
// 'rekord:slalom' (det spelhallen visar) = medaljpoäng: guld 3, silver 2, brons 1 per backe (max 9).
const rekord = () => hamta('slalom:tider', {}) || {};
function medaljFor(id, tid) {
  if (tid == null) return '';
  const g = BACKAR[id].medalj;
  return tid <= g[0] ? '🥇' : tid <= g[1] ? '🥈' : tid <= g[2] ? '🥉' : '🎿';
}

function visaStartmeny() {
  lage = 'meny';
  const r = rekord();
  const html = `<div class="backval">${Object.entries(BACKAR).map(([id, B]) => `
      <button class="backe" data-id="${id}">
        <span class="symbol">${B.ikon}</span>
        <span><b>${B.namn}</b><span>${B.portar} portar${B.kickers ? ` · ${B.kickers} hopp` : ''} · ${r[id] != null ? 'Rekord ' + tidText(r[id]) : 'Inget rekord än'}</span></span>
        <span class="medalj">${r[id] != null ? medaljFor(id, r[id]) : ''}</span>
      </button>`).join('')}</div>
    <div class="hjalp">◀ ▶ svänga · ⬇ fart (hukande) · mellanslag hoppa · i luften: hoppa igen för en 360!<br>
    Åk mellan stolparna. Missad port = +${STRAFF_MISS} s · Esc = paus</div>`;
  const m = visaMeny({ titel: '⛷️ Slalom', text: 'Välj backe', html, knappar: [{ text: '🏠 Till spelhallen', gor: tillHallen }] });
  m.element.querySelectorAll('.backe').forEach((b) => b.addEventListener('click', () => { m.stang(); startaBacke(b.dataset.id); }));
  setTimeout(() => m.element.querySelector('.backe')?.focus(), 60);
  if (BOT) { m.stang(); startaBacke(params.get('backe') || 'gron'); }
}

function pausa() {
  if (lage !== 'nedrakning' && lage !== 'akning') return;
  forePaus = lage; lage = 'paus';
  vind.satt(0); carveLjud.satt(0);
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  visaPausmeny();
}
function visaPausmeny() {
  visaMeny({
    titel: '⏸ Paus',
    text: BACKAR[backeId].ikon + ' ' + BACKAR[backeId].namn,
    knappar: [
      { text: '▶ Fortsätt', primar: true, gor: () => { lage = forePaus; kontroll.rensa(); } },
      { text: '↻ Börja om', gor: () => startaBacke(backeId) },
      { text: '⛰ Byt backe', gor: visaStartmeny },
      { text: ljud.pa ? '🔊 Ljud: på' : '🔇 Ljud: av', gor: () => { ljud.vaxla(); visaPausmeny(); } },
      { text: '🏠 Till spelhallen', gor: tillHallen },
    ],
  });
}
lyssnaPaus(pausa);
document.addEventListener('visibilitychange', () => { if (document.hidden) pausa(); });

function visaResultat() {
  const B = BACKAR[backeId];
  const total = s.tid + s.missar * STRAFF_MISS - s.bonus;
  const r = rekord();
  const gammalt = r[backeId];
  const nytt = gammalt == null || total < gammalt;
  if (nytt) {
    r[backeId] = Math.round(total * 100) / 100;
    spara('slalom:tider', r);
    const poang = Object.entries(r).reduce((sum, [id, t]) => sum + ({ '🥇': 3, '🥈': 2, '🥉': 1 }[medaljFor(id, t)] || 0), 0);
    spara('rekord:' + SPEL_ID, poang);
    try { localStorage.setItem('spoke:' + SPEL_ID + ':' + backeId, JSON.stringify(inspelning)); } catch {}
  }
  const medalj = medaljFor(backeId, total);
  const medaljNamn = { '🥇': 'Guld!', '🥈': 'Silver!', '🥉': 'Brons!', '🎿': 'I mål!' }[medalj];
  const nastaMal = medalj === '🥇' ? '' : `<p>Nästa medalj: ${medalj === '🥈' ? '🥇 under ' + tidText(B.medalj[0]) : medalj === '🥉' ? '🥈 under ' + tidText(B.medalj[1]) : '🥉 under ' + tidText(B.medalj[2])}</p>`;
  const html = `
    <div style="font-size:70px;line-height:1">${medalj}</div>
    ${nytt ? '<div class="nytt-rekord">⭐ Nytt rekord! ⭐</div>' : `<p>Rekord: ${tidText(gammalt)}</p>`}
    <table class="resultat">
      <tr><td>Åktid</td><td>${tidText(s.tid)}</td></tr>
      <tr><td>Missade portar (${s.missar})</td><td>+${tidText(s.missar * STRAFF_MISS)}</td></tr>
      ${s.bonus ? `<tr><td>Trick-bonus 🌀</td><td>−${tidText(s.bonus)}</td></tr>` : ''}
      <tr class="total"><td>Total</td><td>${tidText(total)}</td></tr>
    </table>${nastaMal}`;
  ljud.tala(nytt ? 'Nytt rekord! ' + medaljNamn : medaljNamn);
  visaMeny({
    titel: B.ikon + ' ' + medaljNamn, html,
    knappar: [
      { text: '↻ Åk igen', primar: true, gor: () => startaBacke(backeId) },
      { text: '⛰ Byt backe', gor: visaStartmeny },
      { text: '🏠 Till spelhallen', gor: tillHallen },
    ],
  });
}

// ---------- Spelloop ----------
let forraSek = 4;
let spelTid = 0;
const tmpV = new THREE.Vector3();

function uppdatera(dt) {
  const V = varld, B = V.B;

  if (lage === 'nedrakning') {
    s.nedrakning -= dt;
    const sek = Math.ceil(s.nedrakning);
    if (sek !== forraSek && sek <= 3 && sek >= 1) {
      forraSek = sek;
      visa(String(sek), { tid: 0.9 });
      ljud.ton(520, 0.18, 'square', 0.2);
      ljud.tala(['Ett', 'Två', 'Tre'][sek - 1], { hastighet: 1.2 });
    }
    if (s.nedrakning <= 0) {
      lage = 'akning';
      visa('KÖR!', { klass: 'gron', tid: 0.8 });
      ljud.ton(880, 0.35, 'square', 0.25);
      ljud.tala('Kör!', { hastighet: 1.2 });
      s.fart = 4;
      kontroll.rensa();
    }
  }

  const akar = lage === 'akning';
  const imal = lage === 'mal';
  if (akar || imal) {
    // --- styrning ---
    let styr = 0;
    if (akar) {
      if (BOT) {
        const p = V.portar[s.nastaPort];
        const kk = V.kickers.find((k2) => k2.z - k2.langd / 2 < s.z && (!p || k2.z > p.z));
        const malX = kk ? kk.x : p ? p.x : 0;
        styr = begransa((malX - s.x) * 0.5 - s.vinkel * 1.5, -1, 1);
        if (Math.abs(styr) < 0.15) styr = 0;
      } else {
        styr = (kontroll.hoger ? 1 : 0) - (kontroll.vanster ? 1 : 0);
      }
    }
    const malVinkel = styr * SVANG_MAX;
    const svangKraft = s.luft ? 0.35 : 1;
    s.vinkel += (malVinkel - s.vinkel) * Math.min(1, dt * SVANG_SNABBHET * svangKraft);

    // --- fart ---
    const huka = akar && (kontroll.fart || BOT) && !s.luft;
    let topp = B.maxFart * (huka ? 1.18 : 1);
    if (imal) {
      s.fart *= Math.pow(0.35, dt); // plogar in i mål
    } else if (!s.luft) {
      const acc = ACCELERATION * (1 - s.fart / topp) - Math.abs(s.vinkel) * s.fart * 0.55;
      s.fart = Math.max(2, s.fart + acc * dt);
    }

    // --- rörelse ---
    s.x += Math.sin(s.vinkel) * s.fart * dt;
    const forraZ = s.z;
    s.z -= Math.cos(s.vinkel) * s.fart * dt;

    // kanterna
    const kant = BANBREDD - 0.4;
    if (Math.abs(s.x) > kant) {
      s.x = Math.sign(s.x) * kant;
      s.vinkel *= -0.3;
      s.fart *= 0.85;
      sprutaSno(s.x, V.markY(s.x, s.z), s.z, 10, 0.8, -Math.sign(s.x));
      ljud.brus(0.15, 0.25, 600);
    }

    // --- hopp & kickers ---
    for (const kk of V.kickers) {
      const inX = Math.abs(s.x - kk.x) < kk.bredd / 2;
      const framkant = kk.z + kk.langd / 2, lapp = kk.z - kk.langd / 2;
      if (!s.luft && inX && s.z < framkant && s.z > lapp) {
        s.h = kk.hojd * Math.pow((framkant - s.z) / kk.langd, 1.6);
      }
      if (!s.luft && inX && forraZ >= lapp && s.z < lapp) {
        s.luft = true; s.franKicker = true; s.vy = KICKER_FART + s.fart * 0.08;
        ljud.ton(300, 0.4, 'sine', 0.2, 500);
        if (akar) visa('Tryck hopp för 360!', { liten: true, tid: 0.9 });
      }
    }
    if (akar && kontroll.tryckt('hopp') || (BOT && s.luft && s.franKicker && !s.snurrar && s.snurr === 0)) {
      if (!s.luft) {
        s.luft = true; s.franKicker = false; s.vy = OLLIE_FART;
        ljud.ton(400, 0.15, 'sine', 0.15, 200);
      } else if (s.franKicker && !s.snurrar && s.snurr === 0) {
        s.snurrar = true;
        ljud.brus(0.4, 0.2, 2500);
      }
    }
    if (s.luft) {
      s.vy -= GRAVITATION * dt;
      s.h += s.vy * dt;
      if (s.snurrar) { s.snurr += dt / SNURR_TID; if (s.snurr >= 1) { s.snurr = 1; s.snurrar = false; } }
      if (s.h <= 0) {
        s.h = 0; s.luft = false;
        sprutaSno(s.x, V.markY(s.x, s.z), s.z, 30, 1.1, 0);
        ljud.brus(0.25, 0.3, 900);
        if (s.snurr > 0) {
          if (s.snurr >= 0.7) {
            s.bonus += TRICK_BONUS;
            visa(`🌀 360! −${TRICK_BONUS.toString().replace('.', ',')} s`, { klass: 'guld', liten: true });
            ljud.ton(660, 0.12, 'triangle', 0.2); setTimeout(() => ljud.ton(990, 0.2, 'triangle', 0.2), 110);
          } else {
            s.fart *= 0.75; s.landningsVingel = 1;
            visa('Oj! 😅', { liten: true, tid: 0.8 });
          }
          s.snurr = 0; s.snurrar = false;
        }
        s.franKicker = false;
      }
    } else if (!V.kickers.some((kk) => Math.abs(s.x - kk.x) < kk.bredd / 2 && s.z < kk.z + kk.langd / 2 && s.z > kk.z - kk.langd / 2)) {
      s.h = 0;
    }

    // --- portar ---
    if (akar) {
      const p = V.portar[s.nastaPort];
      if (p && forraZ >= p.z && s.z < p.z) {
        if (Math.abs(s.x - p.x) <= p.bredd / 2) {
          p.tagen = true;
          p.streck.material.opacity = 0.8;
          ljud.ton(p.farg === 0xe5383b ? 784 : 988, 0.12, 'triangle', 0.18);
        } else {
          p.missad = true; s.missar++;
          visa(`Missad port! +${STRAFF_MISS} s`, { klass: 'rod', liten: true });
          ljud.ton(160, 0.35, 'sawtooth', 0.15, -60);
        }
        s.portTider[s.nastaPort] = s.tid;
        inspelning.portTider[s.nastaPort] = s.tid;
        if (spokData && spokData.portTider && spokData.portTider[s.nastaPort] != null) {
          const d = s.tid - spokData.portTider[s.nastaPort];
          hudDelta.style.display = '';
          hudDelta.innerHTML = `<small>mot rekord</small><span class="${d <= 0 ? 'delta-gron' : 'delta-rod'}">${deltaText(d)}</span>`;
        }
        s.nastaPort++;
      }
      // stolpar
      if (s.h < 1) {
        for (const pp of V.portar) {
          if (Math.abs(pp.z - s.z) > 1.5) continue;
          for (const st of pp.stolpar) {
            if (st.vingla <= 0 && Math.hypot(st.x - s.x, pp.z - s.z) < 0.45) {
              st.vingla = 1; s.fart *= STOLP_BROMS;
              ljud.ton(220, 0.12, 'square', 0.15);
            }
          }
        }
      }
      // mål
      if (s.z <= V.malZ) {
        lage = 'mal';
        s.malTid = 0;
        skjutKonfetti(s.x, V.markY(s.x, s.z - 6), s.z - 6);
        ljud.brus(1.2, 0.35, 1500);
        [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => ljud.ton(f, 0.25, 'triangle', 0.22), i * 120));
        visa('MÅL!', { klass: 'guld', tid: 1.5 });
      }
      s.tid += dt;
      if (inspelning.pos.length < 20000 && (inspelning.pos.length === 0 || s.tid - inspelning.pos[inspelning.pos.length - 1][0] >= 0.05)) {
        inspelning.pos.push([+s.tid.toFixed(2), +s.x.toFixed(2), +s.z.toFixed(2), +s.h.toFixed(2), +s.vinkel.toFixed(2), +s.snurr.toFixed(2)]);
      }
    }
    if (imal) {
      s.malTid += dt;
      if (s.malTid > 1.6 && s.malTid - dt <= 1.6) visaResultat();
    }

    // snöspray i svängar
    const carve = Math.abs(s.vinkel) * s.fart;
    if (!s.luft && carve > 3 && Math.random() < carve / 25) {
      sprutaSno(s.x, V.markY(s.x, s.z), s.z + 0.5, 2, Math.min(1.4, carve / 12), -Math.sign(s.vinkel));
    }
    if (imal && s.fart > 2) sprutaSno(s.x, V.markY(s.x, s.z), s.z, 3, 1, Math.random() < 0.5 ? 1 : -1);
    vind.satt(Math.min(0.35, Math.pow(s.fart / B.maxFart, 2) * 0.3), 300 + s.fart * 40);
    carveLjud.satt(s.luft ? 0 : Math.min(0.2, carve / 120), 1800 + carve * 40);
  }

  // stolpar vinglar
  for (const p of V.portar) for (const st of p.stolpar) {
    if (st.vingla > 0) { st.vingla = Math.max(0, st.vingla - dt * 1.5); st.grupp.rotation.z = Math.sin(st.vingla * 25) * st.vingla * 0.5; }
  }
  s.landningsVingel = Math.max(0, s.landningsVingel - dt * 2);

  // --- spöke ---
  if (spokData && spoke.visible && spokData.pos.length) {
    const t = lage === 'nedrakning' ? 0 : s.tid;
    const arr = spokData.pos;
    let i = Math.min(arr.length - 1, Math.floor(t / 0.05));
    while (i > 0 && arr[i][0] > t) i--;
    while (i < arr.length - 1 && arr[i + 1][0] <= t) i++;
    const a = arr[i], b = arr[Math.min(i + 1, arr.length - 1)];
    const f = b[0] > a[0] ? begransa((t - a[0]) / (b[0] - a[0]), 0, 1) : 0;
    const lerp = (j) => a[j] + (b[j] - a[j]) * f;
    const sz = lerp(2);
    spoke.position.set(lerp(1), V.markY(0, sz) + lerp(3), sz);
    spoke.rotation.set(-Math.atan(V.k), -lerp(4) + lerp(5) * Math.PI * 2, 0);
    spoke.userData.kropp.rotation.z = -lerp(4) * 0.5;
  }

  // --- åkaren ---
  const y = V.markY(s.x, s.z);
  akare.position.set(s.x, y + s.h, s.z);
  akare.rotation.set(-Math.atan(V.k) * (s.luft ? 0.3 : 1), -s.vinkel + s.snurr * Math.PI * 2, 0);
  const kropp = akare.userData.kropp;
  const huka = (lage === 'akning' && (kontroll.fart || BOT) && !s.luft);
  kropp.rotation.z = -s.vinkel * 0.55 + Math.sin(spelTid * 30) * s.landningsVingel * 0.3;
  kropp.rotation.x += ((huka ? 0.55 : 0.15) - kropp.rotation.x) * Math.min(1, dt * 8);
  kropp.position.y += ((huka ? -0.25 : 0) - kropp.position.y) * Math.min(1, dt * 8);
  skugga.position.set(s.x, y + 0.04, s.z);
  const ss = Math.max(0.4, 1 - s.h * 0.15);
  skugga.scale.set(ss, ss, ss);
  skugga.material.opacity = 0.25 * ss;

  // --- kamera ---
  const fartAndel = s.fart / B.maxFart;
  const camMal = tmpV.set(s.x * 0.8, y + s.h * 0.5 + 3.4, s.z + 8.2);
  if (lage === 'meny') camMal.set(Math.sin(spelTid * 0.2) * 6, y + 5, s.z + 12);
  camera.position.x += (camMal.x - camera.position.x) * Math.min(1, dt * 5);
  camera.position.y += (camMal.y - camera.position.y) * Math.min(1, dt * 6);
  camera.position.z = lage === 'meny' ? camera.position.z + (camMal.z - camera.position.z) * Math.min(1, dt * 3) : camMal.z;
  camera.lookAt(s.x * 0.9, y + 0.6 + s.h * 0.4, s.z - 9);
  const fov = 60 + fartAndel * 16;
  if (Math.abs(camera.fov - fov) > 0.1) { camera.fov += (fov - camera.fov) * Math.min(1, dt * 3); camera.updateProjectionMatrix(); }

  sol.position.set(s.x + 8, y + 20, s.z + 6);
  sol.target.position.set(s.x, y, s.z - 4);

  // snöflingor runt kameran
  for (let i = 0; i < FLINGOR; i++) {
    const j = i * 3;
    flingPos[j + 1] -= dt * 1.5;
    flingPos[j] += Math.sin(spelTid + i) * dt * 0.3;
    if (flingPos[j + 2] > s.z + 12 || flingPos[j + 1] < y - 3) {
      flingPos[j] = s.x + (Math.random() - 0.5) * 50;
      flingPos[j + 1] = y + Math.random() * 20;
      flingPos[j + 2] = s.z - 10 - Math.random() * 55;
    }
  }
  flingGeo.attributes.position.needsUpdate = true;

  uppdateraSpray(dt);
  uppdateraKonfetti(dt);

  // --- HUD ---
  const visaHud = lage === 'akning' || lage === 'nedrakning' || lage === 'mal' || lage === 'paus';
  hud.style.display = visaHud ? '' : 'none';
  if (kontroll._touchElement) kontroll._touchElement.style.visibility = (lage === 'akning' || lage === 'nedrakning') ? 'visible' : 'hidden';
  const totalNu = s.tid + s.missar * STRAFF_MISS - s.bonus;
  hudTid.innerHTML = `<small>tid</small>${tidText(totalNu)}`;
  hudPortar.innerHTML = `<small>portar</small>${Math.min(s.nastaPort, V.portar.length)}/${V.portar.length}${s.missar ? ` <span class="delta-rod">✖${s.missar}</span>` : ''}`;
}

startaLoop((dt, t) => {
  spelTid = t;
  const steg = BOT ? Number(params.get('snabb') || 1) : 1;
  for (let i = 0; i < steg; i++) if (lage !== 'paus' && varld) uppdatera(dt);
  if (meddelandeTimer > 0) { meddelandeTimer -= dt; if (meddelandeTimer <= 0) meddelande.style.opacity = 0; }
  renderer.render(scene, camera);
});

// Start
byggBacke('gron');
nollstall();
visaStartmeny();

// För test
window.__slalom = { s, get lage() { return lage; }, BACKAR, get varld() { return varld; } };
