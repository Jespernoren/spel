// ⛷️ Slalom – Noréns spelhall (skicross-stil: kullar, branta partier, doserade kurvor och hopp)
// Bygger på delat/extra.js (paus-meny, touch-knappar, ljud). motor.js används inte här.
// Banan och fysiken finns i bana.js – där kan du ändra backarna!
import {
  THREE, skapaSpel, startaLoop, knappar, skapaHud, visaMeny, lyssnaPaus, tillHallen,
  hamta, spara, skapaLjud, begransa, el, slump,
} from '../../delat/extra.js';
import { BACKAR, BANBREDD, byggBana, fysik, botStyr, nyAkare, markY, cxVid, riktning } from './bana.js';

// ================= JUSTERBARA VÄRDEN =================
const SPEL_ID = 'slalom';
const STRAFF_MISS = 3;        // sekunder per missad port
const TRICK_BONUS = 0.5;      // sekunder avdrag per lyckad 360 från hopp
const LANDNING_BONUS = 0.4;   // sekunder avdrag för perfekt landning efter pop
const STOLP_BROMS = 0.75;     // farten multipliceras med detta när man kör på en stolpe
const POP_ZON = 7;            // meter grön pop-zon före hoppkanten (samma som POP_FONSTER i bana.js)
// ======================================================

const params = new URLSearchParams(location.search);
const BOT = params.has('bot'); // autopilot för test: ?bot=1&backe=bla&pop=0

const { renderer, scene, camera } = skapaSpel({ bakgrund: 0x9fd3ff });
scene.fog = new THREE.Fog(0xcfe8ff, 45, 190);
const ljud = skapaLjud();
const vind = ljud.loop(500);
const carveLjud = ljud.loop(2500);

const kontroll = knappar(
  {
    vanster: ['ArrowLeft', 'KeyA'],
    hoger: ['ArrowRight', 'KeyD'],
    fart: ['ArrowDown', 'KeyS'],
    hopp: ['Enter', 'NumpadEnter', 'Space', 'ArrowUp', 'KeyW'],
  },
  [
    { namn: 'vanster', text: '◀', sida: 'vanster' },
    { namn: 'hoger', text: '▶', sida: 'vanster' },
    { namn: 'fart', text: '⬇', sida: 'hoger', liten: true },
    { namn: 'hopp', text: '⏎', sida: 'hoger' },
  ],
);

// ---------- Banor (byggs en gång) och medaljgränser ----------
const banor = {};
const bana = (id) => (banor[id] = banor[id] || byggBana(id));
// Medaljer räknas från autopilotens bästa åk: guld = nästan perfekt
function botTid(b) {
  const a = nyAkare(b); a.fart = 4;
  let t = 0, port = 0, bonus = 0;
  const dt = 1 / 120;
  while (a.d < b.malD && t < 200) {
    const f = a.d;
    for (const e of fysik(a, b, botStyr(a, b, port), dt)) if (e.typ === 'landning' && e.kvalitet === 'perfekt') bonus += LANDNING_BONUS;
    const p = b.portar[port]; if (p && f < p.d && a.d >= p.d) port++;
    t += dt;
  }
  return t - bonus;
}
for (const id in BACKAR) {
  const t = botTid(bana(id));
  BACKAR[id].medalj = [Math.round((t + 0.8) * 10) / 10, Math.round(t * 1.2 * 10) / 10, Math.round(t * 1.5 * 10) / 10];
}

// ---------- Ljus ----------
scene.add(new THREE.HemisphereLight(0xdff1ff, 0x8aa0c0, 1.0));
const sol = new THREE.DirectionalLight(0xffffff, 1.8);
sol.castShadow = true;
sol.shadow.mapSize.set(1024, 1024);
Object.assign(sol.shadow.camera, { left: -22, right: 22, top: 22, bottom: -22, near: 1, far: 90 });
scene.add(sol, sol.target);

// ---------- Hjälpare ----------
const mat = (farg, extra = {}) => new THREE.MeshLambertMaterial({ color: farg, ...extra });
function textTextur(text, { bredd = 1024, hojd = 128, farg = '#fff', bak = '#e5383b', storlek = 96 } = {}) {
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
const bonusText = (b) => b.toString().replace('.', ',');

// ---------- Skidåkare ----------
function byggAkare(farg = 0xe63946) {
  const g = new THREE.Group();
  const kropp = new THREE.Group();
  g.add(kropp);
  const dela = (geo, m, x, y, z) => { const me = new THREE.Mesh(geo, m); me.position.set(x, y, z); me.castShadow = true; kropp.add(me); return me; };
  const jacka = mat(farg), byxor = mat(0x1d3557), hud = mat(0xffd6b0), hjalm = mat(0xffffff), glasogon = mat(0xffb703);
  const skidor = mat(0xff4f8b);
  for (const x of [-0.18, 0.18]) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.05, 1.8), skidor);
    s.position.set(x, 0.03, -0.1); s.castShadow = true; g.add(s);
    const spets = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.05, 0.2), skidor);
    spets.position.set(x, 0.09, -1.02); spets.rotation.x = 0.5; g.add(spets);
  }
  dela(new THREE.BoxGeometry(0.17, 0.6, 0.2), byxor, -0.17, 0.38, 0);
  dela(new THREE.BoxGeometry(0.17, 0.6, 0.2), byxor, 0.17, 0.38, 0);
  dela(new THREE.BoxGeometry(0.55, 0.6, 0.32), jacka, 0, 0.95, 0);
  dela(new THREE.SphereGeometry(0.2, 16, 12), hud, 0, 1.43, 0);
  const h = dela(new THREE.SphereGeometry(0.23, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), hjalm, 0, 1.46, 0);
  h.scale.set(1, 1.05, 1.05);
  dela(new THREE.BoxGeometry(0.34, 0.1, 0.08), glasogon, 0, 1.46, -0.19);
  for (const s of [-1, 1]) {
    const arm = dela(new THREE.BoxGeometry(0.13, 0.5, 0.14), jacka, s * 0.34, 0.95, -0.08);
    arm.rotation.x = -0.6;
    const stav = dela(new THREE.CylinderGeometry(0.02, 0.02, 1.2, 6), mat(0x333333), s * 0.42, 0.55, -0.1);
    stav.rotation.x = 0.35;
  }
  g.userData = { kropp };
  return g;
}
function spokMaterial(obj) {
  const m = new THREE.MeshBasicMaterial({ color: 0x9ad8ff, transparent: true, opacity: 0.35, depthWrite: false });
  obj.traverse((o) => { if (o.isMesh) { o.material = m; o.castShadow = false; } });
}

// ---------- Texturer ----------
function pistTextur() {
  const c = document.createElement('canvas'); c.width = 64; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#eef5ff'; g.fillRect(0, 0, 64, 64);
  g.fillStyle = '#dae8fb'; for (let i = 0; i < 64; i += 8) g.fillRect(i, 0, 3, 64);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}
const PIST_TEXTUR = pistTextur();

// Ett "band" som följer marken: från d0 till d1, från u0 till u1 (sidled från mittlinjen)
function band(b, d0, d1, u0, u1, material, { lyft = 0.03, stegD = 0.5, stegU = 8, uvSkala = null } = {}) {
  const rader = Math.max(1, Math.ceil((d1 - d0) / stegD));
  const pos = [], uv = [], idx = [];
  for (let r = 0; r <= rader; r++) {
    const d = d0 + (d1 - d0) * (r / rader);
    const cx = cxVid(b, d);
    for (let k = 0; k <= stegU; k++) {
      const u = u0 + (u1 - u0) * (k / stegU);
      const x = cx + u;
      pos.push(x, markY(b, x, d) + lyft, -d);
      if (uvSkala) uv.push(u / uvSkala[0], d / uvSkala[1]); else uv.push(k / stegU, r / rader);
    }
  }
  for (let r = 0; r < rader; r++) for (let k = 0; k < stegU; k++) {
    const a = r * (stegU + 1) + k, c = a + stegU + 1;
    idx.push(a, a + 1, c, a + 1, c + 1, c);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, material);
}

// ---------- Värld (byggs om för varje backe) ----------
let varld = null;
function byggBacke(id) {
  if (varld) { scene.remove(varld.grupp); varld.grupp.traverse((o) => { o.geometry && o.geometry.dispose(); }); }
  const b = bana(id);
  const r = slump(id.length * 7 + 3);
  const grupp = new THREE.Group();
  scene.add(grupp);
  const slutD = Math.min(b.langd - 5, b.malD + 120);

  // Snön runt omkring (bred, med vallar) + pistad bana i mitten
  const sno = band(b, -40, slutD, -60, 60, mat(0xf6faff), { lyft: -0.04, stegD: 1, stegU: 48 });
  sno.receiveShadow = true;
  grupp.add(sno);
  const pist = band(b, -40, slutD, -BANBREDD - 0.6, BANBREDD + 0.6, mat(0xffffff, { map: PIST_TEXTUR }), { lyft: 0.0, stegD: 0.5, stegU: 10, uvSkala: [1.2, 4] });
  pist.receiveShadow = true;
  grupp.add(pist);

  // Staket längs kanterna (orange nät)
  for (const sida of [-1, 1]) {
    const pts = [], idx = [];
    const n = Math.ceil((slutD + 30) / 2);
    for (let i = 0; i <= n; i++) {
      const d = -30 + i * 2;
      const x = cxVid(b, d) + sida * (BANBREDD + 0.8);
      const y = markY(b, x, d);
      pts.push(x, y, -d, x, y + 0.8, -d);
    }
    for (let i = 0; i < n; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    geo.setIndex(idx);
    grupp.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xff7a1a, transparent: true, opacity: 0.4, side: THREE.DoubleSide, depthWrite: false })));
  }

  // Granar
  const trad = [];
  for (let d = -25; d < slutD; d += 3.6) {
    for (const sida of [-1, 1]) {
      const antal = 1 + Math.floor(r() * 3);
      for (let j = 0; j < antal; j++) {
        const x = cxVid(b, d) + sida * (BANBREDD + 4 + r() * 40);
        const dd = d + r() * 3;
        trad.push([x, markY(b, x, dd), dd, 0.7 + r() * 0.9]);
      }
    }
  }
  const barr = new THREE.InstancedMesh(new THREE.ConeGeometry(1.6, 3.6, 7), mat(0x1f6f4a), trad.length * 2);
  const stammar = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.25, 0.3, 1.2, 6), mat(0x6b4226), trad.length);
  const toppar = new THREE.InstancedMesh(new THREE.ConeGeometry(0.8, 1.2, 7), mat(0xffffff), trad.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), pv = new THREE.Vector3();
  trad.forEach(([x, y, d, sk], i) => {
    sv.set(sk, sk, sk);
    m4.compose(pv.set(x, y + 0.6 * sk, -d), q, sv); stammar.setMatrixAt(i, m4);
    m4.compose(pv.set(x, y + 2.6 * sk, -d), q, sv); barr.setMatrixAt(i * 2, m4);
    sv.set(sk * 0.75, sk * 0.8, sk * 0.75);
    m4.compose(pv.set(x, y + 4.0 * sk, -d), q, sv); barr.setMatrixAt(i * 2 + 1, m4);
    sv.set(sk, sk, sk);
    m4.compose(pv.set(x, y + 5.1 * sk, -d), q, sv); toppar.setMatrixAt(i, m4);
  });
  barr.castShadow = true;
  grupp.add(barr, stammar, toppar);

  // Hopp: grön pop-zon, blå linje på kanten, röd linje där decket slutar (knuckle) + flaggor
  for (const h of b.hopp) {
    grupp.add(band(b, h.lapp - POP_ZON, h.lapp, -BANBREDD, BANBREDD, new THREE.MeshBasicMaterial({ color: 0x3ddc84, transparent: true, opacity: 0.32, depthWrite: false }), { lyft: 0.05, stegD: 0.5 }));
    grupp.add(band(b, h.lapp - 0.45, h.lapp, -BANBREDD, BANBREDD, new THREE.MeshBasicMaterial({ color: 0x1e6bff }), { lyft: 0.07, stegD: 0.45 }));
    grupp.add(band(b, h.deckSlut - 0.3, h.deckSlut + 0.1, -BANBREDD, BANBREDD, new THREE.MeshBasicMaterial({ color: 0xff4d4d, transparent: true, opacity: 0.6 }), { lyft: 0.07, stegD: 0.4 }));
    for (const sida of [-1, 1]) {
      const x = cxVid(b, h.lapp) + sida * (BANBREDD - 0.3);
      const y = markY(b, x, h.lapp);
      const st = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.8, 6), mat(0x1e6bff));
      st.position.set(x, y + 0.9, -h.lapp);
      const fl = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.55), mat(0x1e6bff, { side: THREE.DoubleSide }));
      fl.position.set(x - sida * 0.42, y + 1.5, -h.lapp);
      grupp.add(st, fl);
    }
  }

  // Portar
  const portar = b.portar.map((p) => ({ ...p, tagen: false, missad: false }));
  const stolpGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.1, 8);
  const flaggGeo = new THREE.PlaneGeometry(0.9, 0.7);
  for (const p of portar) {
    p.stolpar = [];
    for (const sida of [-1, 1]) {
      const x = p.x + sida * p.bredd / 2;
      const y = markY(b, x, p.d);
      const sg = new THREE.Group();
      sg.position.set(x, y, -p.d);
      const stolpe = new THREE.Mesh(stolpGeo, mat(p.farg));
      stolpe.position.y = 1.05; stolpe.castShadow = true;
      const flagga = new THREE.Mesh(flaggGeo, mat(p.farg, { side: THREE.DoubleSide }));
      flagga.position.set(-sida * 0.48, 1.65, 0);
      sg.add(stolpe, flagga);
      grupp.add(sg);
      p.stolpar.push({ grupp: sg, x, vingla: 0 });
    }
    const cx = cxVid(b, p.d);
    p.streck = band(b, p.d - 0.15, p.d + 0.15, p.x - cx - p.bredd / 2 + 0.15, p.x - cx + p.bredd / 2 - 0.15,
      new THREE.MeshBasicMaterial({ color: p.farg, transparent: true, opacity: 0.35, depthWrite: false }), { lyft: 0.06, stegD: 0.3, stegU: 4 });
    grupp.add(p.streck);
  }

  // Start- och målbåge
  const bage = (d, text, bak) => {
    const cx = cxVid(b, d);
    const y = Math.max(markY(b, cx - BANBREDD, d), markY(b, cx + BANBREDD, d));
    for (const sida of [-1, 1]) {
      const st = new THREE.Mesh(new THREE.BoxGeometry(0.5, 7.2, 0.5), mat(bak));
      st.position.set(cx + sida * (BANBREDD + 0.2), markY(b, cx + sida * BANBREDD, d) + 3.6, -d); st.castShadow = true; grupp.add(st);
    }
    const tex = textTextur(text, { bak: '#' + bak.toString(16).padStart(6, '0') });
    const skylt = new THREE.Mesh(new THREE.BoxGeometry(BANBREDD * 2 + 1, 1.4, 0.3),
      [mat(bak), mat(bak), mat(bak), mat(bak), new THREE.MeshBasicMaterial({ map: tex }), new THREE.MeshBasicMaterial({ map: tex })]);
    skylt.position.set(cx, y + 7.2, -d);
    grupp.add(skylt);
  };
  bage(0.5, 'START', 0x1e6bff);
  bage(b.malD, '🏁 MÅL 🏁', 0xe5383b);

  varld = { id, b, B: BACKAR[id], grupp, portar };
}

// ---------- Partiklar: snöspray, snöfall, konfetti ----------
const rundTextur = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,.8)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
})();
const SPRAY_MAX = 300;
const sprayGeo = new THREE.BufferGeometry();
const sprayPos = new Float32Array(SPRAY_MAX * 3);
sprayGeo.setAttribute('position', new THREE.BufferAttribute(sprayPos, 3));
const spray = new THREE.Points(sprayGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.35, map: rundTextur, transparent: true, depthWrite: false }));
spray.frustumCulled = false;
scene.add(spray);
const sprayData = Array.from({ length: SPRAY_MAX }, () => ({ liv: 0, vx: 0, vy: 0, vz: 0 }));
let sprayNasta = 0;
function sprutaSno(x, y, z, antal, kraft = 1, riktn = 0) {
  for (let i = 0; i < antal; i++) {
    const p = sprayData[sprayNasta]; const j = sprayNasta * 3;
    sprayNasta = (sprayNasta + 1) % SPRAY_MAX;
    sprayPos[j] = x + (Math.random() - 0.5) * 0.6; sprayPos[j + 1] = y + 0.1; sprayPos[j + 2] = z + Math.random() * 0.6;
    p.liv = 0.5 + Math.random() * 0.4;
    p.vx = riktn * (2 + Math.random() * 3) * kraft + (Math.random() - 0.5) * 2;
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
flingGeo.setAttribute('position', new THREE.BufferAttribute(flingPos, 3));
const flingor = new THREE.Points(flingGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.18, map: rundTextur, transparent: true, depthWrite: false }));
flingor.frustumCulled = false;
scene.add(flingor);

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
const hudTid = el('div', 'ruta'), hudPortar = el('div', 'ruta'), hudFart = el('div', 'ruta'), hudDelta = el('div', 'ruta');
hud.append(hudTid, hudPortar, hudFart, hudDelta);
const meddelande = el('div', 'meddelande');
document.body.appendChild(meddelande);
let meddelandeTimer = 0;
function visa(text, { klass = '', tid = 1.1, liten = false } = {}) {
  meddelande.textContent = text;
  meddelande.className = 'meddelande ' + klass + (liten ? ' liten' : '');
  meddelande.style.opacity = 1;
  meddelandeTimer = tid;
}
// Pop-mätare: visas när man närmar sig ett hopp
const TOUCH = window.matchMedia('(hover: none), (pointer: coarse)').matches;
const HOPP_KNAPP = TOUCH ? '⏎-knappen' : 'ENTER';
const popMatare = el('div', 'popmatare');
popMatare.innerHTML = '<div class="pop-text">' + (TOUCH ? 'Tryck ⏎ vid blå linjen!' : '⏎ ENTER vid blå linjen!') + '</div><div class="pop-bar"><div class="pop-zon"></div><div class="pop-pil"></div></div>';
document.body.appendChild(popMatare);
const popPil = popMatare.querySelector('.pop-pil');
const POP_SIKT = 28; // meter före kanten som mätaren syns

// ---------- Spelets tillstånd ----------
let lage = 'meny';      // meny | nedrakning | akning | mal | paus
let forePaus = null;
let backeId = 'gron';
let s = null;           // åkarens tillstånd (från bana.js)
const run = {};         // åkets räknare
let spokData = null;
let inspelning = null;

function nollstall() {
  const b = varld.b;
  s = nyAkare(b);
  Object.assign(run, { tid: 0, nedrakning: 3.5, missar: 0, bonus: 0, landningar: 0, nastaPort: 0, malTid: 0, forstaHopp: true });
  for (const p of varld.portar) { p.tagen = false; p.missad = false; p.stolpar.forEach((st) => (st.vingla = 0)); p.streck.material.opacity = 0.35; }
  inspelning = { pos: [], portTider: [] };
  spokData = hamta('spoke2:' + SPEL_ID + ':' + backeId, null);
  spoke.visible = !!spokData;
  hudDelta.style.display = 'none';
  konfetti.splice(0).forEach((m) => scene.remove(m));
  camera.position.set(0, s.y + 4, 9);
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
// Bästa tider per backe sparas under 'slalom:tider2'.
// 'rekord:slalom' (det spelhallen visar) = medaljpoäng: guld 3, silver 2, brons 1 per backe (max 9).
const rekord = () => hamta('slalom:tider2', {}) || {};
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
        <span><b>${B.namn}</b><span>${bana(id).hopp.length} hopp · ${bana(id).portar.length} portar · ${r[id] != null ? 'Rekord ' + tidText(r[id]) : 'Inget rekord än'}</span></span>
        <span class="medalj">${r[id] != null ? medaljFor(id, r[id]) : ''}</span>
      </button>`).join('')}</div>
    <div class="hjalp">◀ ▶ svänga · ⬇ huka för fart<br>
    <b>⏎ ${HOPP_KNAPP}</b> i gröna zonen före hoppet = pop! Tryck nära blå linjen för perfekt landning.<br>
    I luften: Enter igen = 360 · Missad port +${STRAFF_MISS} s · Esc = paus</div>`;
  const m = visaMeny({ titel: '⛷️ Slalom', text: 'Skicross – välj backe', html, knappar: [{ text: '🏠 Till spelhallen', gor: tillHallen }] });
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
  const total = run.tid + run.missar * STRAFF_MISS - run.bonus;
  const r = rekord();
  const gammalt = r[backeId];
  const nytt = gammalt == null || total < gammalt;
  if (nytt) {
    r[backeId] = Math.round(total * 100) / 100;
    spara('slalom:tider2', r);
    const poang = Object.entries(r).reduce((sum, [id, t]) => sum + ({ '🥇': 3, '🥈': 2, '🥉': 1 }[medaljFor(id, t)] || 0), 0);
    spara('rekord:' + SPEL_ID, poang);
    spara('spoke2:' + SPEL_ID + ':' + backeId, inspelning);
  }
  const medalj = medaljFor(backeId, total);
  const medaljNamn = { '🥇': 'Guld!', '🥈': 'Silver!', '🥉': 'Brons!', '🎿': 'I mål!' }[medalj];
  const nastaMal = medalj === '🥇' ? '' : `<p>Nästa medalj: ${medalj === '🥈' ? '🥇 under ' + tidText(B.medalj[0]) : medalj === '🥉' ? '🥈 under ' + tidText(B.medalj[1]) : '🥉 under ' + tidText(B.medalj[2])}</p>`;
  const html = `
    <div style="font-size:70px;line-height:1">${medalj}</div>
    ${nytt ? '<div class="nytt-rekord">⭐ Nytt rekord! ⭐</div>' : `<p>Rekord: ${tidText(gammalt)}</p>`}
    <table class="resultat">
      <tr><td>Åktid</td><td>${tidText(run.tid)}</td></tr>
      <tr><td>Missade portar (${run.missar})</td><td>+${tidText(run.missar * STRAFF_MISS)}</td></tr>
      ${run.bonus ? `<tr><td>Bonus (${run.landningar} perfekta landningar, trick)</td><td>−${tidText(run.bonus)}</td></tr>` : ''}
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

// ---------- Händelser från fysiken → ljud och text ----------
const logg = [];
function hantera(e) {
  if (BOT && (e.typ === 'landning' || e.typ === 'pop' || e.typ === 'avstamp')) logg.push(`${e.typ} ${e.kvalitet ?? ''} d=${s.d.toFixed(1)} v=${s.fart.toFixed(1)} luft=${(e.luftTid ?? 0).toFixed(2)}`);
  if (e.typ === 'pop') {
    if (e.kvalitet > 0.72) { visa('PERFEKT POP! 💥', { klass: 'gron', liten: true, tid: 0.8 }); ljud.ton(880, 0.1, 'square', 0.18); }
    else if (e.kvalitet > 0.4) { visa('Bra pop!', { liten: true, tid: 0.7 }); ljud.ton(700, 0.1, 'square', 0.15); }
    else { visa('Lite tidigt…', { liten: true, tid: 0.7 }); ljud.ton(500, 0.1, 'square', 0.12); }
  } else if (e.typ === 'avstamp') {
    ljud.ton(300, 0.4, 'sine', 0.2, 500);
    if (!e.poppade && run.forstaHopp) visa(TOUCH ? 'Glömde hoppa! ⏎' : 'Glömde Enter! ⏎', { klass: 'rod', liten: true, tid: 0.9 });
    run.forstaHopp = false;
  } else if (e.typ === 'ollie') {
    ljud.ton(400, 0.15, 'sine', 0.15, 200);
  } else if (e.typ === 'snurr') {
    ljud.brus(0.4, 0.2, 2500);
  } else if (e.typ === 'landning') {
    const b = varld.b;
    sprutaSno(s.x, markY(b, s.x, s.d), -s.d, e.luftTid > 0.5 ? 34 : 14, 1.1, 0);
    ljud.brus(0.25, e.kvalitet === 'hard' || e.kvalitet === 'knuckle' ? 0.45 : 0.25, 900);
    if (e.trick === 'klar') {
      run.bonus += TRICK_BONUS;
      visa(`🌀 360! −${bonusText(TRICK_BONUS)} s`, { klass: 'guld', liten: true });
      ljud.ton(660, 0.12, 'triangle', 0.2); setTimeout(() => ljud.ton(990, 0.2, 'triangle', 0.2), 110);
    }
    if (e.kvalitet === 'perfekt') {
      run.bonus += LANDNING_BONUS; run.landningar++;
      if (e.trick !== 'klar') visa(`Perfekt landning! −${bonusText(LANDNING_BONUS)} s`, { klass: 'gron', liten: true });
      ljud.ton(784, 0.1, 'triangle', 0.18); setTimeout(() => ljud.ton(1175, 0.15, 'triangle', 0.18), 90);
    } else if (e.kvalitet === 'knuckle') {
      visa('Knuckle! 😬 Poppa tidigare', { klass: 'rod', liten: true });
    } else if (e.kvalitet === 'hard') {
      visa('Hård landning! 💥', { klass: 'rod', liten: true, tid: 0.8 });
    } else if (e.trick === 'miss') {
      visa('Oj! 😅', { liten: true, tid: 0.8 });
    }
  } else if (e.typ === 'kant') {
    const b = varld.b;
    sprutaSno(s.x, markY(b, s.x, s.d), -s.d, 10, 0.8, -e.sida);
    ljud.brus(0.15, 0.25, 600);
  }
}

// ---------- Spelloop ----------
let forraSek = 4;
let spelTid = 0;
const camMal = new THREE.Vector3();
const titta = new THREE.Vector3();

function uppdatera(dt) {
  const V = varld, b = V.b, B = V.B;

  if (lage === 'nedrakning') {
    run.nedrakning -= dt;
    const sek = Math.ceil(run.nedrakning);
    if (sek !== forraSek && sek <= 3 && sek >= 1) {
      forraSek = sek;
      visa(String(sek), { tid: 0.9 });
      ljud.ton(520, 0.18, 'square', 0.2);
      ljud.tala(['Ett', 'Två', 'Tre'][sek - 1], { hastighet: 1.2 });
    }
    if (run.nedrakning <= 0) {
      lage = 'akning';
      visa('KÖR!', { klass: 'gron', tid: 0.8 });
      ljud.ton(880, 0.35, 'square', 0.25);
      ljud.tala('Kör!', { hastighet: 1.2 });
      s.fart = 5;
      kontroll.rensa();
    }
  }

  const akar = lage === 'akning';
  const imal = lage === 'mal';
  if (akar || imal) {
    let in_;
    if (akar && BOT) in_ = botStyr(s, b, run.nastaPort, { pop: params.get('pop') !== '0' });
    else if (akar) in_ = { styr: (kontroll.hoger ? 1 : 0) - (kontroll.vanster ? 1 : 0), huka: kontroll.fart, hopp: kontroll.tryckt('hopp'), aktiv: true };
    else in_ = { styr: 0, huka: false, hopp: false, aktiv: false };

    const forraD = s.d;
    // fysiken körs i små fasta steg så hoppen beter sig likadant oavsett bildfrekvens
    const n = Math.max(1, Math.ceil(dt / (1 / 120)));
    for (let k = 0; k < n; k++) {
      const steg = k === 0 ? in_ : { ...in_, hopp: false };
      if (BOT && akar && k > 0) Object.assign(steg, botStyr(s, b, run.nastaPort, { pop: params.get('pop') !== '0' }));
      for (const e of fysik(s, b, steg, dt / n)) hantera(e);
    }

    if (akar && BOT && Math.floor(s.d / 10) !== Math.floor(forraD / 10)) logg.push(`fart d=${Math.round(s.d)} v=${s.fart.toFixed(1)} x-cx=${(s.x - cxVid(b, s.d)).toFixed(1)}`);
    if (akar) {
      // portar
      const p = V.portar[run.nastaPort];
      if (p && forraD < p.d && s.d >= p.d) {
        if (Math.abs(s.x - p.x) <= p.bredd / 2) {
          p.tagen = true; p.streck.material.opacity = 0.85;
          ljud.ton(p.farg === 0xe5383b ? 784 : 988, 0.12, 'triangle', 0.18);
        } else {
          p.missad = true; run.missar++;
          visa(`Missad port! +${STRAFF_MISS} s`, { klass: 'rod', liten: true });
          ljud.ton(160, 0.35, 'sawtooth', 0.15, -60);
        }
        inspelning.portTider[run.nastaPort] = run.tid;
        if (spokData && spokData.portTider && spokData.portTider[run.nastaPort] != null) {
          const d = run.tid - spokData.portTider[run.nastaPort];
          hudDelta.style.display = '';
          hudDelta.innerHTML = `<small>mot rekord</small><span class="${d <= 0 ? 'delta-gron' : 'delta-rod'}">${deltaText(d)}</span>`;
        }
        run.nastaPort++;
      }
      // stolpar
      if (!s.luft || s.y - markY(b, s.x, s.d) < 1) {
        for (const pp of V.portar) {
          if (Math.abs(pp.d - s.d) > 1.5) continue;
          for (const st of pp.stolpar) {
            if (st.vingla <= 0 && Math.hypot(st.x - s.x, pp.d - s.d) < 0.45) {
              st.vingla = 1; s.fart *= STOLP_BROMS;
              if (BOT) logg.push(`STOLPE d=${s.d.toFixed(1)}`);
              ljud.ton(220, 0.12, 'square', 0.15);
            }
          }
        }
      }
      // mål
      if (s.d >= b.malD) {
        lage = 'mal';
        run.malTid = 0;
        skjutKonfetti(s.x, markY(b, s.x, s.d + 6), -(s.d + 6));
        ljud.brus(1.2, 0.35, 1500);
        [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => ljud.ton(f, 0.25, 'triangle', 0.22), i * 120));
        visa('MÅL!', { klass: 'guld', tid: 1.5 });
      }
      run.tid += dt;
      const sista = inspelning.pos[inspelning.pos.length - 1];
      if (inspelning.pos.length < 20000 && (!sista || run.tid - sista[0] >= 0.05)) {
        inspelning.pos.push([+run.tid.toFixed(2), +s.x.toFixed(2), +s.d.toFixed(2), +s.y.toFixed(2), +s.vinkel.toFixed(2), +s.snurr.toFixed(2)]);
      }
    }
    if (imal) {
      run.malTid += dt;
      if (run.malTid > 1.6 && run.malTid - dt <= 1.6) visaResultat();
    }

    // snöspray i svängar
    const rikt = riktning(b, s.d);
    const carve = Math.abs(s.vinkel - rikt) * s.fart;
    if (!s.luft && carve > 3 && Math.random() < carve / 25) {
      sprutaSno(s.x, markY(b, s.x, s.d), -s.d + 0.5, 2, Math.min(1.4, carve / 12), -Math.sign(s.vinkel - rikt));
    }
    if (imal && s.fart > 2) sprutaSno(s.x, markY(b, s.x, s.d), -s.d, 3, 1, Math.random() < 0.5 ? 1 : -1);
    vind.satt(Math.min(0.35, Math.pow(s.fart / 28, 2) * 0.3), 300 + s.fart * 40);
    carveLjud.satt(s.luft ? 0 : Math.min(0.2, carve / 120), 1800 + carve * 40);
  }

  // stolpar vinglar
  for (const p of V.portar) for (const st of p.stolpar) {
    if (st.vingla > 0) { st.vingla = Math.max(0, st.vingla - dt * 1.5); st.grupp.rotation.z = Math.sin(st.vingla * 25) * st.vingla * 0.5; }
  }

  // --- spöke ---
  if (spokData && spoke.visible && spokData.pos.length) {
    const t = lage === 'nedrakning' ? 0 : run.tid;
    const arr = spokData.pos;
    let i = Math.min(arr.length - 1, Math.floor(t / 0.05));
    while (i > 0 && arr[i][0] > t) i--;
    while (i < arr.length - 1 && arr[i + 1][0] <= t) i++;
    const a = arr[i], c = arr[Math.min(i + 1, arr.length - 1)];
    const f = c[0] > a[0] ? begransa((t - a[0]) / (c[0] - a[0]), 0, 1) : 0;
    const lp = (j) => a[j] + (c[j] - a[j]) * f;
    spoke.position.set(lp(1), lp(3), -lp(2));
    spoke.rotation.set(0, -lp(4) + lp(5) * Math.PI * 2, 0);
    spoke.userData.kropp.rotation.z = -lp(4) * 0.5;
  }

  // --- åkaren ---
  const mark = markY(b, s.x, s.d);
  const lutning = markY(b, s.x, s.d + 1) - markY(b, s.x, s.d - 1);
  akare.position.set(s.x, s.y, -s.d);
  akare.rotation.set(s.luft ? -s.vy * 0.03 : Math.atan(lutning / 2), -s.vinkel + s.snurr * Math.PI * 2, 0, 'YXZ');
  const kropp = akare.userData.kropp;
  const huka = lage === 'akning' && (kontroll.fart || BOT) && !s.luft;
  kropp.rotation.z = -(s.vinkel - riktning(b, s.d)) * 0.6 + Math.sin(spelTid * 30) * s.vingel * 0.3;
  kropp.rotation.x += ((huka ? 0.55 : s.luft ? 0.3 : 0.15) - kropp.rotation.x) * Math.min(1, dt * 8);
  kropp.position.y += ((huka ? -0.25 : 0) - kropp.position.y) * Math.min(1, dt * 8);
  skugga.position.set(s.x, mark + 0.05, -s.d);
  skugga.rotation.x = -Math.PI / 2 + Math.atan(lutning / 2);
  const hojd = s.y - mark;
  const ss = Math.max(0.35, 1 - hojd * 0.12);
  skugga.scale.set(ss, ss, ss);
  skugga.material.opacity = 0.25 * ss;

  // --- kamera: bakom åkaren, längs banans riktning ---
  const rikt = riktning(b, s.d);
  const bak = 8.5;
  const cd = s.d - Math.cos(rikt) * bak;
  const cxk = s.x * 0.75 + cxVid(b, cd) * 0.25 - Math.sin(rikt) * bak;
  camMal.set(cxk, Math.max(s.y - hojd * 0.5, markY(b, cxk, cd)) + 3.6, -cd);
  if (lage === 'meny') camMal.set(s.x + Math.sin(spelTid * 0.2) * 6, s.y + 5, -s.d + 12);
  camera.position.x += (camMal.x - camera.position.x) * Math.min(1, dt * 6);
  camera.position.y += (camMal.y - camera.position.y) * Math.min(1, dt * 5);
  camera.position.z += (camMal.z - camera.position.z) * Math.min(1, dt * 10);
  const fd = s.d + 10;
  titta.set(s.x * 0.6 + cxVid(b, fd) * 0.4, (s.y - hojd * 0.4) * 0.6 + markY(b, cxVid(b, fd), fd) * 0.4 + 0.8, -fd);
  camera.lookAt(titta);
  const fov = 60 + Math.min(1, s.fart / 30) * 16;
  if (Math.abs(camera.fov - fov) > 0.1) { camera.fov += (fov - camera.fov) * Math.min(1, dt * 3); camera.updateProjectionMatrix(); }

  sol.position.set(s.x + 10, s.y + 22, -s.d + 6);
  sol.target.position.set(s.x, s.y, -s.d - 5);

  // snöflingor runt kameran
  for (let i = 0; i < FLINGOR; i++) {
    const j = i * 3;
    flingPos[j + 1] -= dt * 1.5;
    flingPos[j] += Math.sin(spelTid + i) * dt * 0.3;
    if (flingPos[j + 2] > -s.d + 12 || flingPos[j + 1] < s.y - 6) {
      flingPos[j] = s.x + (Math.random() - 0.5) * 50;
      flingPos[j + 1] = s.y + Math.random() * 20;
      flingPos[j + 2] = -s.d - 10 - Math.random() * 55;
    }
  }
  flingGeo.attributes.position.needsUpdate = true;

  uppdateraSpray(dt);
  uppdateraKonfetti(dt);

  // --- pop-mätare ---
  const nasta = b.hopp[s.nastaHopp];
  const kvar = nasta ? nasta.lapp - s.d : 999;
  const visaPop = lage === 'akning' && nasta && kvar < POP_SIKT && kvar > -0.5 && !s.luft;
  popMatare.style.display = visaPop ? '' : 'none';
  if (visaPop) {
    popPil.style.left = `${begransa((1 - kvar / POP_SIKT) * 100, 0, 100)}%`;
    popMatare.classList.toggle('poppad', !!s.popHopp);
  }

  // --- HUD ---
  const visaHud = lage === 'akning' || lage === 'nedrakning' || lage === 'mal' || lage === 'paus';
  hud.style.display = visaHud ? '' : 'none';
  if (kontroll._touchElement) kontroll._touchElement.style.visibility = (lage === 'akning' || lage === 'nedrakning') ? 'visible' : 'hidden';
  const totalNu = run.tid + run.missar * STRAFF_MISS - run.bonus;
  hudTid.innerHTML = `<small>tid</small>${tidText(totalNu)}`;
  hudPortar.innerHTML = `<small>portar</small>${Math.min(run.nastaPort, V.portar.length)}/${V.portar.length}${run.missar ? ` <span class="delta-rod">✖${run.missar}</span>` : ''}`;
  hudFart.innerHTML = `<small>km/h</small>${Math.round(s.fart * 3.6)}`;
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
window.__slalom = { logg, get s() { return s; }, run, get lage() { return lage; }, BACKAR, get varld() { return varld; } };
