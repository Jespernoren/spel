// ⛷️ Slalom – Noréns spelhall
// Skicross mot tre datoråkare: kullar, doserade kurvor, hopp och portar.
//   Banan och fysiken: bana.js   ·   Den ledade åkaren: akare.js
// Bygger på delat/extra.js (paus-meny, touch-knappar, ljud). motor.js används inte här.
import {
  THREE, skapaSpel, startaLoop, knappar, skapaHud, visaMeny, lyssnaPaus, tillHallen,
  hamta, spara, skapaLjud, begransa, el, slump,
} from '../../delat/extra.js';
import { BACKAR, BANBREDD, byggBana, fysik, botStyr, nyAkare, markY, cxVid, riktning, bankVid } from './bana.js';
import { skapaAkare } from './akare.js';

// ================= JUSTERBARA VÄRDEN =================
const SPEL_ID = 'slalom';
const STRAFF_MISS = 3;        // sekunder per missad port
const TRICK_BONUS = 0.5;      // sekunder avdrag per lyckad 360 från hopp
const LANDNING_BONUS = 0.4;   // sekunder avdrag för perfekt landning efter pop
const STOLP_BROMS = 0.75;     // farten multipliceras med detta när man kör på en stolpe
const POP_ZON = 7;            // meter grön pop-zon före hoppkanten (samma som POP_FONSTER i bana.js)
const VANTA_EFTER_MAL = 7;    // sekunder vi väntar på datoråkarna efter att du gått i mål

// Datoråkarna. popFel: hur många meter före kanten de släpper (lägre = bättre)
const MOTSTANDARE = [
  { namn: 'Frost-Fia', farg: 0x2b7de9, byxor: 0x14213d, hjalm: 0xbde0fe, skidor: 0x00b4d8, popFel: [0.2, 1.4], pumpar: true },
  { namn: 'Turbo-Tage', farg: 0x2a9d8f, byxor: 0x264653, hjalm: 0xe9c46a, skidor: 0xf4a261, popFel: [0.4, 3.0], pumpar: true },
  { namn: 'Sigge Snabb', farg: 0xffb703, byxor: 0x3d2c1e, hjalm: 0x222222, skidor: 0xfb8500, popFel: [1.0, 5.0], pumpar: false },
];
// Hur snabba datoråkarna är i varje backe (luftmotstånd per åkare, 1 = som du, högre = långsammare)
const SVARIGHET = { gron: [1.3, 1.4, 1.5], bla: [1.12, 1.2, 1.3], svart: [1.0, 1.06, 1.14] };
const GUMMIBAND = 0.18;       // hjälper den som ligger efter lite (håller racet jämnt)
// ======================================================

const params = new URLSearchParams(location.search);
const BOT = params.has('bot'); // autopilot för test: ?bot=1&backe=bla&snabb=2

const { renderer, scene, camera } = skapaSpel({ bakgrund: 0x9fd3ff });
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
scene.fog = new THREE.Fog(0xd6ebff, 60, 260);
scene.add(camera);
const ljud = skapaLjud();
const vind = ljud.loop(500);
const carveLjud = ljud.loop(2500);

const kontroll = knappar(
  {
    vanster: ['ArrowLeft', 'KeyA'],
    hoger: ['ArrowRight', 'KeyD'],
    fart: ['ArrowDown', 'KeyS'],
    pump: ['Space', 'ArrowUp', 'KeyW'],
    hopp: ['Enter', 'NumpadEnter'],
  },
  [
    { namn: 'vanster', text: '◀', sida: 'vanster' },
    { namn: 'hoger', text: '▶', sida: 'vanster' },
    { namn: 'fart', text: '⬇', sida: 'hoger', liten: true },
    { namn: 'pump', text: '⏎', sida: 'hoger' },
  ],
);
const TOUCH = window.matchMedia('(hover: none), (pointer: coarse)').matches;
const KNAPP = TOUCH ? '⏎' : 'MELLANSLAG';

// ---------- Banor (byggs en gång per backe) ----------
const banor = {};
const bana = (id) => (banor[id] = banor[id] || byggBana(id));

// ---------- Ljus och himmel ----------
scene.add(new THREE.HemisphereLight(0xe3f2ff, 0x9fb3cf, 1.15));
const sol = new THREE.DirectionalLight(0xfff4e0, 2.4);
sol.castShadow = true;
sol.shadow.mapSize.set(2048, 2048);
sol.shadow.bias = -0.0005;
Object.assign(sol.shadow.camera, { left: -26, right: 26, top: 26, bottom: -26, near: 1, far: 100 });
scene.add(sol, sol.target);

const himmel = new THREE.Mesh(
  new THREE.SphereGeometry(500, 32, 16),
  new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { topp: { value: new THREE.Color(0x2f74d0) }, horisont: { value: new THREE.Color(0xd6ebff) } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 topp; uniform vec3 horisont; varying vec3 vP; void main(){ float h = clamp(vP.y*1.6+0.1,0.0,1.0); gl_FragColor = vec4(mix(horisont, topp, pow(h,0.8)),1.0); }',
  }),
);
himmel.renderOrder = -10;
scene.add(himmel);
const solSkiva = new THREE.Mesh(new THREE.CircleGeometry(18, 32), new THREE.MeshBasicMaterial({ color: 0xfff6d5, fog: false, transparent: true, opacity: 0.9 }));
scene.add(solSkiva);
// berg runt horisonten (följer kameran)
const berg = new THREE.Group();
{
  const r = slump(77);
  const bergMat = new THREE.MeshLambertMaterial({ color: 0x9db4d3, fog: false, flatShading: true });
  const toppMat = new THREE.MeshLambertMaterial({ color: 0xf4f8ff, fog: false, flatShading: true });
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2 + r() * 0.2;
    const h = 70 + r() * 90, rad = 50 + r() * 50;
    const kon = new THREE.Mesh(new THREE.ConeGeometry(rad, h, 6), bergMat);
    kon.position.set(Math.sin(a) * 360, h / 2 - 40, Math.cos(a) * 360);
    kon.rotation.y = r() * 3;
    const topp = new THREE.Mesh(new THREE.ConeGeometry(rad * 0.36, h * 0.36, 6), toppMat);
    topp.position.set(kon.position.x, h - 40 - h * 0.18 + 0.5, kon.position.z);
    topp.rotation.y = kon.rotation.y;
    berg.add(kon, topp);
  }
}
scene.add(berg);

// ---------- Hjälpare ----------
const lam = (farg, extra = {}) => new THREE.MeshLambertMaterial({ color: farg, ...extra });
const std = (farg, extra = {}) => new THREE.MeshStandardMaterial({ color: farg, roughness: 0.7, ...extra });
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
  t.anisotropy = 4;
  return t;
}
const tidText = (s) => s.toFixed(2).replace('.', ',') + ' s';
const bonusText = (b) => b.toString().replace('.', ',');
const placeringText = (p) => p + (p <= 2 ? ':a' : ':e');
const hex = (c) => '#' + c.toString(16).padStart(6, '0');

function pistTextur() {
  const c = document.createElement('canvas'); c.width = 64; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#eef5ff'; g.fillRect(0, 0, 64, 64);
  g.fillStyle = '#d9e7fb'; for (let i = 0; i < 64; i += 8) g.fillRect(i, 0, 3, 64);
  for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(255,255,255,${Math.random() * 0.6})`; g.fillRect(Math.random() * 64, Math.random() * 64, 1, 1); }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}
const PIST_TEXTUR = pistTextur();
// orange skicross-nät med maskor
const NAT_TEXTUR = (() => {
  const c = document.createElement('canvas'); c.width = 32; c.height = 32;
  const g = c.getContext('2d');
  g.strokeStyle = '#ff7a1a'; g.lineWidth = 3;
  g.beginPath(); g.moveTo(0, 0); g.lineTo(32, 32); g.moveTo(32, 0); g.lineTo(0, 32); g.stroke();
  g.fillStyle = '#ff7a1a'; g.fillRect(0, 0, 32, 3);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
})();
const REKLAM = ['NORÉNS SPELHALL', 'SKICROSS', 'HEJA HEJA!', '⛷️ FULL FART', 'POPPA RÄTT!', 'PUMPA! ⬇⬆', 'BEPPE ❤', 'CHARLIE ⭐'];
const REKLAM_FARGER = ['#e5383b', '#1e6bff', '#ff8a00', '#2a9d8f', '#8e44ad', '#111827'];
const reklamTexturer = REKLAM.map((t, i) => textTextur(t, { bak: REKLAM_FARGER[i % REKLAM_FARGER.length], storlek: 80, bredd: 768, hojd: 128 }));

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

  const sno = band(b, -40, slutD, -70, 70, std(0xf7fbff, { roughness: 0.95 }), { lyft: -0.04, stegD: 1, stegU: 56 });
  sno.receiveShadow = true;
  grupp.add(sno);
  const pist = band(b, -40, slutD, -BANBREDD - 0.6, BANBREDD + 0.6, std(0xffffff, { map: PIST_TEXTUR, roughness: 0.85 }), { lyft: 0.0, stegD: 0.5, stegU: 10, uvSkala: [1.2, 4] });
  pist.receiveShadow = true;
  grupp.add(pist);

  // Staket: stolpar + nät, reklamskyltar
  const stolpPos = [];
  for (const sida of [-1, 1]) {
    const pts = [], idx = [], uvs = [];
    const n = Math.ceil((slutD + 30) / 2);
    for (let i = 0; i <= n; i++) {
      const d = -30 + i * 2;
      const x = cxVid(b, d) + sida * (BANBREDD + 0.8);
      const y = markY(b, x, d);
      pts.push(x, y + 0.05, -d, x, y + 0.95, -d);
      uvs.push(i * 2 / 0.45, 0, i * 2 / 0.45, 2);
      if (i % 2 === 0) stolpPos.push([x, y, d]);
    }
    for (let i = 0; i < n; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(idx);
    grupp.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: NAT_TEXTUR, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide })));
    for (let d = 20; d < b.malD + 30; d += 28 + r() * 16) {
      const x = cxVid(b, d) + sida * (BANBREDD + 1.6);
      const y = markY(b, x, d);
      const skylt = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.9, 0.1), [lam(0xffffff), lam(0xffffff), lam(0xffffff), lam(0xffffff),
        new THREE.MeshBasicMaterial({ map: reklamTexturer[Math.floor(r() * reklamTexturer.length)] }),
        new THREE.MeshBasicMaterial({ map: reklamTexturer[Math.floor(r() * reklamTexturer.length)] })]);
      skylt.position.set(x, y + 0.75, -d);
      skylt.rotation.y = Math.PI / 2 * sida + riktning(b, d);
      skylt.castShadow = true;
      grupp.add(skylt);
    }
  }
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), pv = new THREE.Vector3();
  const stolpar = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.035, 0.035, 1, 5), lam(0x333333), stolpPos.length);
  stolpPos.forEach(([x, y, d], i) => { m4.compose(pv.set(x, y + 0.5, -d), q, sv.set(1, 1, 1)); stolpar.setMatrixAt(i, m4); });
  grupp.add(stolpar);

  // Granar
  const trad = [];
  for (let d = -25; d < slutD; d += 3.4) {
    for (const sida of [-1, 1]) {
      const antal = 1 + Math.floor(r() * 3);
      for (let j = 0; j < antal; j++) {
        const x = cxVid(b, d) + sida * (BANBREDD + 5 + r() * 48);
        const dd = d + r() * 3;
        trad.push([x, markY(b, x, dd), dd, 0.7 + r() * 1.0, r()]);
      }
    }
  }
  const barr = new THREE.InstancedMesh(new THREE.ConeGeometry(1.6, 3.6, 7), lam(0xffffff, { flatShading: true }), trad.length * 2);
  const stammar = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.25, 0.3, 1.2, 6), lam(0x6b4226), trad.length);
  const toppar = new THREE.InstancedMesh(new THREE.ConeGeometry(0.85, 1.3, 7), lam(0xffffff, { flatShading: true }), trad.length);
  const farg = new THREE.Color();
  trad.forEach(([x, y, d, sk, nyans], i) => {
    sv.set(sk, sk, sk);
    m4.compose(pv.set(x, y + 0.6 * sk, -d), q, sv); stammar.setMatrixAt(i, m4);
    m4.compose(pv.set(x, y + 2.6 * sk, -d), q, sv); barr.setMatrixAt(i * 2, m4);
    farg.setHSL(0.4 + nyans * 0.06, 0.45, 0.2 + nyans * 0.08); barr.setColorAt(i * 2, farg); barr.setColorAt(i * 2 + 1, farg);
    sv.set(sk * 0.75, sk * 0.8, sk * 0.75);
    m4.compose(pv.set(x, y + 4.0 * sk, -d), q, sv); barr.setMatrixAt(i * 2 + 1, m4);
    sv.set(sk, sk, sk);
    m4.compose(pv.set(x, y + 5.1 * sk, -d), q, sv); toppar.setMatrixAt(i, m4);
  });
  barr.castShadow = true;
  grupp.add(barr, stammar, toppar);

  // Hopp: grön pop-zon, blå linje på kanten, röd linje där decket slutar (knuckle) + flaggor
  for (const h of b.hopp) {
    grupp.add(band(b, h.lapp - POP_ZON, h.lapp, -BANBREDD, BANBREDD, new THREE.MeshBasicMaterial({ color: 0x3ddc84, transparent: true, opacity: 0.3, depthWrite: false }), { lyft: 0.05, stegD: 0.5 }));
    grupp.add(band(b, h.lapp - 0.45, h.lapp, -BANBREDD, BANBREDD, new THREE.MeshBasicMaterial({ color: 0x1e6bff }), { lyft: 0.07, stegD: 0.45 }));
    grupp.add(band(b, h.deckSlut - 0.3, h.deckSlut + 0.1, -BANBREDD, BANBREDD, new THREE.MeshBasicMaterial({ color: 0xff4d4d, transparent: true, opacity: 0.6 }), { lyft: 0.07, stegD: 0.4 }));
    for (const sida of [-1, 1]) {
      const x = cxVid(b, h.lapp) + sida * (BANBREDD - 0.3);
      const y = markY(b, x, h.lapp);
      const st = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.8, 6), lam(0x1e6bff));
      st.position.set(x, y + 0.9, -h.lapp);
      const fl = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.55), lam(0x1e6bff, { side: THREE.DoubleSide }));
      fl.position.set(x - sida * 0.42, y + 1.5, -h.lapp);
      grupp.add(st, fl);
    }
  }

  // Portar
  const portar = b.portar.map((p) => ({ ...p }));
  const stolpGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.1, 8);
  const flaggGeo = new THREE.PlaneGeometry(0.9, 0.7);
  for (const p of portar) {
    p.stolpar = [];
    for (const sida of [-1, 1]) {
      const x = p.x + sida * p.bredd / 2;
      const y = markY(b, x, p.d);
      const sg = new THREE.Group();
      sg.position.set(x, y, -p.d);
      const stolpe = new THREE.Mesh(stolpGeo, lam(p.farg));
      stolpe.position.y = 1.05; stolpe.castShadow = true;
      const flagga = new THREE.Mesh(flaggGeo, lam(p.farg, { side: THREE.DoubleSide }));
      flagga.position.set(-sida * 0.48, 1.65, 0);
      sg.add(stolpe, flagga);
      grupp.add(sg);
      p.stolpar.push({ grupp: sg, flagga, x, vingla: 0 });
    }
    const cx = cxVid(b, p.d);
    p.streck = band(b, p.d - 0.15, p.d + 0.15, p.x - cx - p.bredd / 2 + 0.15, p.x - cx + p.bredd / 2 - 0.15,
      new THREE.MeshBasicMaterial({ color: p.farg, transparent: true, opacity: 0.35, depthWrite: false }), { lyft: 0.06, stegD: 0.3, stegU: 4 });
    grupp.add(p.streck);
  }

  // Startkur med fyra startluckor
  {
    const d0 = -2.5, cx = cxVid(b, d0), y = markY(b, cx, d0);
    const kur = new THREE.Group();
    const vagg = std(0x1e3a8a), tak = std(0xe5383b);
    const golv = new THREE.Mesh(new THREE.BoxGeometry(12, 0.4, 5), std(0xdfe7f2));
    golv.position.set(0, -0.15, 2); kur.add(golv);
    for (const sida of [-1, 1]) { const v = new THREE.Mesh(new THREE.BoxGeometry(0.4, 3.2, 5), vagg); v.position.set(sida * 6, 1.6, 2); kur.add(v); }
    const bakv = new THREE.Mesh(new THREE.BoxGeometry(12.4, 3.2, 0.4), vagg); bakv.position.set(0, 1.6, 4.4); kur.add(bakv);
    const t = new THREE.Mesh(new THREE.BoxGeometry(13, 0.5, 5.8), tak); t.position.set(0, 3.4, 2); t.rotation.x = -0.08; kur.add(t);
    const skylt = new THREE.Mesh(new THREE.BoxGeometry(8, 1, 0.2), [tak, tak, tak, tak, new THREE.MeshBasicMaterial({ map: textTextur('START') }), tak]);
    skylt.position.set(0, 4.2, -0.6); kur.add(skylt);
    const luckor = [];
    for (let i = 0; i < 4; i++) {
      const l = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.9, 0.12), std(0xffcc00, { metalness: 0.3 }));
      l.position.set(-4.2 + i * 2.8, 0.45, -0.2);
      kur.add(l); luckor.push(l);
    }
    kur.position.set(cx, y, -d0);
    kur.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    grupp.add(kur);
    grupp.userData.luckor = luckor;
  }

  // Målbåge och mållinje
  {
    const d = b.malD, cx = cxVid(b, d);
    const y = Math.max(markY(b, cx - BANBREDD, d), markY(b, cx + BANBREDD, d));
    for (const sida of [-1, 1]) {
      const st = new THREE.Mesh(new THREE.BoxGeometry(0.6, 7.4, 0.6), std(0xe5383b));
      st.position.set(cx + sida * (BANBREDD + 0.2), markY(b, cx + sida * BANBREDD, d) + 3.7, -d); st.castShadow = true; grupp.add(st);
    }
    const tex = textTextur('🏁 MÅL 🏁');
    const skylt = new THREE.Mesh(new THREE.BoxGeometry(BANBREDD * 2 + 1, 1.5, 0.3),
      [std(0xe5383b), std(0xe5383b), std(0xe5383b), std(0xe5383b), new THREE.MeshBasicMaterial({ map: tex }), new THREE.MeshBasicMaterial({ map: tex })]);
    skylt.position.set(cx, y + 7.3, -d);
    grupp.add(skylt);
    grupp.add(band(b, d - 0.3, d + 0.3, -BANBREDD, BANBREDD, new THREE.MeshBasicMaterial({ color: 0xe5383b }), { lyft: 0.07, stegD: 0.3 }));
  }

  // Publik vid målet (studsar och hejar när du kommer)
  const PUBLIK = 70;
  const kroppar = new THREE.InstancedMesh(new THREE.CapsuleGeometry(0.28, 0.7, 4, 8), lam(0xffffff), PUBLIK);
  const huvuden = new THREE.InstancedMesh(new THREE.SphereGeometry(0.2, 10, 8), lam(0xffd6b0), PUBLIK);
  const mossor = new THREE.InstancedMesh(new THREE.SphereGeometry(0.22, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), lam(0xffffff), PUBLIK);
  const publik = [];
  const pfarger = [0xe63946, 0x2b7de9, 0xffb703, 0x2a9d8f, 0x8e44ad, 0xff4f8b, 0x111827, 0xf4a261];
  for (let i = 0; i < PUBLIK; i++) {
    const sida = i % 2 ? 1 : -1;
    const d = b.malD - 45 + r() * 55;
    const x = cxVid(b, d) + sida * (BANBREDD + 2.6 + r() * 5);
    publik.push({ x, y: markY(b, x, d), d, fas: r() * 6, takt: 4 + r() * 4 });
    farg.setHex(pfarger[Math.floor(r() * pfarger.length)]); kroppar.setColorAt(i, farg);
    farg.setHex(pfarger[Math.floor(r() * pfarger.length)]); mossor.setColorAt(i, farg);
  }
  grupp.add(kroppar, huvuden, mossor);

  varld = { id, b, B: BACKAR[id], grupp, portar, publik, kroppar, huvuden, mossor };
}

const _m4 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _sv = new THREE.Vector3(1, 1, 1), _pv = new THREE.Vector3();
function uppdateraPublik(t) {
  const V = varld;
  const nara = forare[0].s && forare[0].s.d > V.b.malD - 120;
  V.publik.forEach((p, i) => {
    const hopp = nara ? Math.max(0, Math.sin(t * p.takt + p.fas)) * 0.35 : 0;
    _m4.compose(_pv.set(p.x, p.y + 0.63 + hopp, -p.d), _q, _sv); V.kroppar.setMatrixAt(i, _m4);
    _m4.compose(_pv.set(p.x, p.y + 1.25 + hopp, -p.d), _q, _sv); V.huvuden.setMatrixAt(i, _m4);
    _m4.compose(_pv.set(p.x, p.y + 1.3 + hopp, -p.d), _q, _sv); V.mossor.setMatrixAt(i, _m4);
  });
  V.kroppar.instanceMatrix.needsUpdate = V.huvuden.instanceMatrix.needsUpdate = V.mossor.instanceMatrix.needsUpdate = true;
}

// ---------- Partiklar: snöspray, snöfall, fartlinjer, konfetti ----------
const rundTextur = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,.75)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
})();
const SPRAY_MAX = 900;
const sprayGeo = new THREE.BufferGeometry();
const sprayPos = new Float32Array(SPRAY_MAX * 3);
sprayGeo.setAttribute('position', new THREE.BufferAttribute(sprayPos, 3));
const spray = new THREE.Points(sprayGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.42, map: rundTextur, transparent: true, depthWrite: false }));
spray.frustumCulled = false;
scene.add(spray);
const sprayData = Array.from({ length: SPRAY_MAX }, () => ({ liv: 0, vx: 0, vy: 0, vz: 0 }));
let sprayNasta = 0;
function sprutaSno(x, y, z, antal, kraft = 1, riktn = 0, bakat = 0) {
  for (let i = 0; i < antal; i++) {
    const p = sprayData[sprayNasta]; const j = sprayNasta * 3;
    sprayNasta = (sprayNasta + 1) % SPRAY_MAX;
    sprayPos[j] = x + (Math.random() - 0.5) * 0.7; sprayPos[j + 1] = y + 0.1; sprayPos[j + 2] = z + Math.random() * 0.6;
    p.liv = 0.45 + Math.random() * 0.5;
    p.vx = riktn * (2 + Math.random() * 4) * kraft + (Math.random() - 0.5) * 2.5 * kraft;
    p.vy = (1.5 + Math.random() * 3) * kraft;
    p.vz = (Math.random() - 0.3) * 3 + bakat;
  }
}
function uppdateraSpray(dt) {
  for (let i = 0; i < SPRAY_MAX; i++) {
    const p = sprayData[i]; const j = i * 3;
    if (p.liv <= 0) { sprayPos[j + 1] = -9999; continue; }
    p.liv -= dt; p.vy -= 9 * dt; p.vx *= 0.98;
    sprayPos[j] += p.vx * dt; sprayPos[j + 1] += p.vy * dt; sprayPos[j + 2] += p.vz * dt;
  }
  sprayGeo.attributes.position.needsUpdate = true;
}
const FLINGOR = 600;
const flingGeo = new THREE.BufferGeometry();
const flingPos = new Float32Array(FLINGOR * 3);
flingGeo.setAttribute('position', new THREE.BufferAttribute(flingPos, 3));
const flingor = new THREE.Points(flingGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.16, map: rundTextur, transparent: true, depthWrite: false }));
flingor.frustumCulled = false;
scene.add(flingor);

// fartlinjer (sitter fast i kameran)
const LINJER = 70;
const linjeGeo = new THREE.BufferGeometry();
const linjePos = new Float32Array(LINJER * 6);
linjeGeo.setAttribute('position', new THREE.BufferAttribute(linjePos, 3));
const linjeMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false, fog: false });
const fartlinjer = new THREE.LineSegments(linjeGeo, linjeMat);
fartlinjer.frustumCulled = false;
camera.add(fartlinjer);
function nyLinje(l, slumpa = false) {
  const a = Math.random() * Math.PI * 2, r = 2.2 + Math.random() * 3.5;
  l.x = Math.cos(a) * r; l.y = Math.sin(a) * r * 0.65; l.z = slumpa ? -5 - Math.random() * 30 : -35; l.len = 1 + Math.random() * 2.5;
  return l;
}
const linjeData = Array.from({ length: LINJER }, () => nyLinje({}, true));
function uppdateraFartlinjer(dt, fart) {
  const styrka = begransa((fart - 14) / 14, 0, 1);
  linjeMat.opacity = styrka * 0.55;
  linjeData.forEach((l, i) => {
    l.z += fart * 1.6 * dt;
    if (l.z > -1) nyLinje(l);
    const j = i * 6;
    linjePos[j] = l.x; linjePos[j + 1] = l.y; linjePos[j + 2] = l.z;
    linjePos[j + 3] = l.x * 1.02; linjePos[j + 4] = l.y * 1.02; linjePos[j + 5] = l.z + l.len * (0.5 + styrka);
  });
  linjeGeo.attributes.position.needsUpdate = true;
}

const konfetti = [];
const konfettiGeo = new THREE.PlaneGeometry(0.25, 0.15);
function skjutKonfetti(x, y, z) {
  const farger = [0xff4f8b, 0xffd54a, 0x6cff9a, 0x4fc3ff, 0xb388ff, 0xff8a3d];
  for (let i = 0; i < 180; i++) {
    const m = new THREE.Mesh(konfettiGeo, new THREE.MeshBasicMaterial({ color: farger[i % farger.length], side: THREE.DoubleSide }));
    m.position.set(x + (Math.random() - 0.5) * 12, y + 4 + Math.random() * 4, z + (Math.random() - 0.5) * 6);
    m.userData = { vx: (Math.random() - 0.5) * 6, vy: Math.random() * 6 + 2, vz: (Math.random() - 0.5) * 6, rx: Math.random() * 10, ry: Math.random() * 10, liv: 4.5 };
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

// ---------- Åkarna ----------
const skuggGeo = new THREE.CircleGeometry(0.75, 20);
function skapaForare(def, nr) {
  const modell = skapaAkare({ jacka: def.farg, byxor: def.byxor, hjalm: def.hjalm, skidor: def.skidor, nummer: nr });
  scene.add(modell.grupp);
  const skugga = new THREE.Mesh(skuggGeo, new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25, depthWrite: false }));
  scene.add(skugga);
  const skylt = el('div', 'namnskylt');
  skylt.innerHTML = `<span style="background:${hex(def.farg)}"></span>${def.namn}`;
  skylt.style.display = 'none';
  document.body.appendChild(skylt);
  return { ...def, nr, modell, skugga, skylt, s: null, run: null };
}
const forare = [
  skapaForare({ namn: 'Du', farg: 0xe63946, byxor: 0x1d3557, hjalm: 0xffffff, skidor: 0xff4f8b, spelare: true }, 1),
  ...MOTSTANDARE.map((m, i) => skapaForare(m, i + 2)),
];
const spelaren = () => forare[0];
const STARTSPAR = [-1.4, -4.2, 1.4, 4.2]; // du startar i spår 2

// ---------- HUD ----------
const hud = skapaHud();
const hudPlats = el('div', 'ruta plats'), hudTid = el('div', 'ruta'), hudFart = el('div', 'ruta');
hud.append(hudPlats, hudTid, hudFart);
const meddelande = el('div', 'meddelande');
document.body.appendChild(meddelande);
let meddelandeTimer = 0;
function visa(text, { klass = '', tid = 1.1, liten = false } = {}) {
  meddelande.textContent = text;
  meddelande.className = 'meddelande ' + klass + (liten ? ' liten' : '');
  meddelande.style.opacity = 1;
  meddelandeTimer = tid;
}
const popMatare = el('div', 'popmatare');
popMatare.innerHTML = `<div class="pop-text">${TOUCH ? 'Håll ⏎ … släpp vid blå linjen!' : 'Håll MELLANSLAG … släpp vid blå linjen!'}</div><div class="pop-bar"><div class="pop-zon"></div><div class="pop-pil"></div></div>`;
document.body.appendChild(popMatare);
const popPil = popMatare.querySelector('.pop-pil');
const POP_SIKT = 28;
const stapel = el('div', 'positionsstapel');
stapel.innerHTML = '<div class="stapel-mal">🏁</div>' + forare.map((f) => `<div class="stapel-prick" style="background:${hex(f.farg)}">${f.spelare ? '★' : ''}</div>`).join('');
document.body.appendChild(stapel);
const prickar = [...stapel.querySelectorAll('.stapel-prick')];
const pumpTips = el('div', 'pumptips');
document.body.appendChild(pumpTips);

// ---------- Spelets tillstånd ----------
let lage = 'meny';      // meny | nedrakning | akning | mal | resultat | paus
let forePaus = null;
let backeId = 'gron';
let racetid = 0, nedrakning = 0, efterMal = 0, malOrdning = [];
let kamSkak = 0;
let haller = 0, forraPump = false; // hur länge mellanslag hållits

function nollstall() {
  const b = varld.b;
  const sv = SVARIGHET[backeId];
  forare.forEach((f, i) => {
    f.s = nyAkare(b, cxVid(b, 2) + STARTSPAR[i], 2);
    f.run = { tid: 0, missar: 0, bonus: 0, landningar: 0, nastaPort: 0, klar: false, total: null, popFel: 1, hopp: -1, krock: -9, landa: 0, popVisa: 0 };
    f.motstand = f.spelare ? 1 : sv[i - 1];
  });
  for (const p of varld.portar) p.stolpar.forEach((st) => (st.vingla = 0));
  racetid = 0; nedrakning = 3.5; efterMal = 0; malOrdning = [];
  konfetti.splice(0).forEach((m) => scene.remove(m));
  varld.grupp.userData.luckor.forEach((l) => { l.rotation.x = 0; l.position.y = 0.45; });
  const s = spelaren().s;
  camera.position.set(s.x, s.y + 4, -s.d + 9);
  haller = 0; forraPump = false;
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
// Bästa tid och bästa placering per backe. 'rekord:slalom' (spelhallen) = medaljpoäng (max 9).
const tider = () => hamta('slalom:tider3', {}) || {};
const platser = () => hamta('slalom:platser', {}) || {};
const MEDALJ = ['', '🥇', '🥈', '🥉', '🎿'];

function visaStartmeny() {
  lage = 'meny';
  const t = tider(), p = platser();
  const html = `<div class="backval">${Object.entries(BACKAR).map(([id, B]) => `
      <button class="backe" data-id="${id}">
        <span class="symbol">${B.ikon}</span>
        <span><b>${B.namn}</b><span>${bana(id).hopp.length} hopp · ${bana(id).portar.length} portar · ${t[id] != null ? 'Bästa ' + tidText(t[id]) : 'Inte åkt än'}</span></span>
        <span class="medalj">${p[id] ? MEDALJ[p[id]] : ''}</span>
      </button>`).join('')}</div>
    <div class="hjalp">Tävla mot <b>Frost-Fia</b>, <b>Turbo-Tage</b> och <b>Sigge Snabb</b>!<br>
    ◀ ▶ svänga · ⬇ huka för fart<br>
    <b>HÅLL ${KNAPP}</b> nerför kullarna = pumpa, släpp uppför<br>
    <b>SLÄPP</b> vid blå linjen = perfekt pop · i luften: tryck igen = 360 · Esc = paus</div>`;
  const m = visaMeny({ titel: '⛷️ Skicross', text: 'Välj backe', html, knappar: [{ text: '🏠 Till spelhallen', gor: tillHallen }] });
  m.element.querySelectorAll('.backe').forEach((b) => b.addEventListener('click', () => { m.stang(); startaBacke(b.dataset.id); }));
  setTimeout(() => m.element.querySelector('.backe')?.focus(), 60);
  if (BOT) { m.stang(); startaBacke(params.get('backe') || 'gron'); }
}

function pausa() {
  if (lage !== 'nedrakning' && lage !== 'akning' && lage !== 'mal') return;
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
      { text: '▶ Fortsätt', primar: true, gor: () => { lage = forePaus; kontroll.rensa(); forraPump = !!kontroll.pump; } },
      { text: '↻ Börja om', gor: () => startaBacke(backeId) },
      { text: '⛰ Byt backe', gor: visaStartmeny },
      { text: ljud.pa ? '🔊 Ljud: på' : '🔇 Ljud: av', gor: () => { ljud.vaxla(); visaPausmeny(); } },
      { text: '🏠 Till spelhallen', gor: tillHallen },
    ],
  });
}
lyssnaPaus(pausa);
document.addEventListener('visibilitychange', () => { if (document.hidden) pausa(); });

function resultatLista() {
  const klara = forare.filter((f) => f.run.klar).sort((a, b) => a.run.total - b.run.total);
  const ej = forare.filter((f) => !f.run.klar).sort((a, b) => b.s.d - a.s.d);
  return [...klara, ...ej];
}

function visaResultat() {
  lage = 'resultat';
  const B = BACKAR[backeId];
  const lista = resultatLista();
  const jag = spelaren();
  const plats = lista.indexOf(jag) + 1;
  const total = jag.run.total;
  const t = tider(), p = platser();
  const nyTid = t[backeId] == null || total < t[backeId];
  if (nyTid) { t[backeId] = Math.round(total * 100) / 100; spara('slalom:tider3', t); }
  if (!p[backeId] || plats < p[backeId]) {
    p[backeId] = plats; spara('slalom:platser', p);
    spara('rekord:' + SPEL_ID, Object.values(p).reduce((sum, x) => sum + Math.max(0, 4 - x), 0));
  }
  const rubrik = { 1: 'Du vann! 🏆', 2: 'Andra plats!', 3: 'Tredje plats!', 4: 'Fjärde plats' }[plats];
  const rader = lista.map((f, i) => `<tr class="${f.spelare ? 'jag' : ''}"><td>${MEDALJ[i + 1] || ''} ${i + 1}. <span class="prick" style="background:${hex(f.farg)}"></span>${f.namn}</td><td>${tidText(f.run.total)}</td></tr>`).join('');
  const html = `
    <div style="font-size:70px;line-height:1">${MEDALJ[plats]}</div>
    ${nyTid ? '<div class="nytt-rekord">⭐ Ny bästa tid! ⭐</div>' : `<p>Bästa tid: ${tidText(t[backeId])}</p>`}
    <table class="resultat">${rader}</table>
    <p class="detaljer">Åktid ${tidText(jag.run.tid)}${jag.run.missar ? ` · ${jag.run.missar} missade portar (+${jag.run.missar * STRAFF_MISS} s)` : ''}${jag.run.bonus ? ` · bonus −${tidText(jag.run.bonus)} (${jag.run.landningar} perfekta landningar)` : ''}</p>`;
  ljud.tala(plats === 1 ? 'Du vann! Grattis!' : rubrik.replace('!', ''));
  visaMeny({
    titel: B.ikon + ' ' + rubrik, html,
    knappar: [
      { text: '↻ Åk igen', primar: true, gor: () => startaBacke(backeId) },
      { text: '⛰ Byt backe', gor: visaStartmeny },
      { text: '🏠 Till spelhallen', gor: tillHallen },
    ],
  });
}

// ---------- Händelser från fysiken (bara din åkare visar text) ----------
const logg = [];
function hantera(f, e) {
  const s = f.s;
  const b = varld.b;
  if (e.typ === 'landning') {
    sprutaSno(s.x, markY(b, s.x, s.d), -s.d, e.luftTid > 0.5 ? 40 : 12, 1.2, 0, 2);
    f.run.landa = Math.max(f.run.landa, Math.min(1, e.luftTid * 0.6));
    if (e.kvalitet === 'perfekt') { f.run.bonus += LANDNING_BONUS; f.run.landningar++; }
    if (e.trick === 'klar') f.run.bonus += TRICK_BONUS;
  }
  if (e.typ === 'pop') f.run.popVisa = 0.35;
  if (!f.spelare) return;
  if (BOT && (e.typ === 'landning' || e.typ === 'pop' || e.typ === 'avstamp')) logg.push(`${e.typ} ${e.kvalitet ?? ''} d=${s.d.toFixed(1)} v=${s.fart.toFixed(1)} luft=${(e.luftTid ?? 0).toFixed(2)}`);
  if (e.typ === 'pop') {
    if (e.kvalitet > 0.72) { visa('PERFEKT POP! 💥', { klass: 'gron', liten: true, tid: 0.8 }); ljud.ton(880, 0.1, 'square', 0.18); }
    else if (e.kvalitet > 0.4) { visa('Bra pop!', { liten: true, tid: 0.7 }); ljud.ton(700, 0.1, 'square', 0.15); }
    else { visa('Lite tidigt…', { liten: true, tid: 0.7 }); ljud.ton(500, 0.1, 'square', 0.12); }
  } else if (e.typ === 'avstamp') {
    ljud.ton(300, 0.4, 'sine', 0.2, 500);
    if (!e.poppade) visa(TOUCH ? 'Släpp ⏎ vid blå linjen!' : 'Släpp mellanslag vid blå linjen!', { klass: 'rod', liten: true, tid: 1 });
  } else if (e.typ === 'ollie') {
    ljud.ton(400, 0.15, 'sine', 0.15, 200);
  } else if (e.typ === 'snurr') {
    ljud.brus(0.4, 0.2, 2500);
  } else if (e.typ === 'landning') {
    kamSkak = Math.max(kamSkak, Math.min(1, e.luftTid * 0.45 + (e.kvalitet === 'hard' || e.kvalitet === 'knuckle' ? 0.5 : 0)));
    ljud.brus(0.25, e.kvalitet === 'hard' || e.kvalitet === 'knuckle' ? 0.45 : 0.25, 900);
    if (e.trick === 'klar') {
      visa(`🌀 360! −${bonusText(TRICK_BONUS)} s`, { klass: 'guld', liten: true });
      ljud.ton(660, 0.12, 'triangle', 0.2); setTimeout(() => ljud.ton(990, 0.2, 'triangle', 0.2), 110);
    }
    if (e.kvalitet === 'perfekt') {
      if (e.trick !== 'klar') visa(`Perfekt landning! −${bonusText(LANDNING_BONUS)} s`, { klass: 'gron', liten: true });
      ljud.ton(784, 0.1, 'triangle', 0.18); setTimeout(() => ljud.ton(1175, 0.15, 'triangle', 0.18), 90);
    } else if (e.kvalitet === 'knuckle') {
      visa('Knuckle! 😬 Släpp närmare kanten', { klass: 'rod', liten: true });
    } else if (e.kvalitet === 'hard') {
      visa('Hård landning! 💥', { klass: 'rod', liten: true, tid: 0.8 });
    } else if (e.trick === 'miss') {
      visa('Oj! 😅', { liten: true, tid: 0.8 });
    }
  } else if (e.typ === 'kant') {
    sprutaSno(s.x, markY(b, s.x, s.d), -s.d, 12, 0.9, -e.sida);
    ljud.brus(0.15, 0.25, 600);
    kamSkak = Math.max(kamSkak, 0.3);
  }
}

// ---------- Styrning för varje åkare ----------
function indata(f, dt, forsta) {
  const b = varld.b, s = f.s;
  if (f.run.klar) return { styr: 0, huka: false, aktiv: false };
  if (f.spelare && !BOT) {
    if (!forsta) return { ...f._in, slapp: false, tryck: false, hopp: false };
    const pump = !!kontroll.pump;
    const slapp = forraPump && !pump;
    const tryck = !forraPump && pump;
    const holdTid = haller;
    haller = pump ? haller + dt : 0;
    forraPump = pump;
    f._in = { styr: (kontroll.hoger ? 1 : 0) - (kontroll.vanster ? 1 : 0), huka: !!kontroll.fart && !pump, pump, slapp, tryck, holdTid, hopp: kontroll.tryckt('hopp'), aktiv: true };
    return f._in;
  }
  // datoråkare (och autopiloten i test)
  if (s.nastaHopp !== f.run.hopp) {
    f.run.hopp = s.nastaHopp;
    const [lo, hi] = f.popFel || [0.3, 0.5];
    f.run.popFel = lo + Math.random() * (hi - lo);
  }
  let undvik = 0;
  for (const o of forare) {
    if (o === f || o.run.klar) continue;
    const fram = o.s.d - s.d, dx = s.x - o.s.x;
    if (fram > 0 && fram < 7 && Math.abs(dx) < 1.4) undvik += (dx >= 0 ? 1 : -1) * 1.6;
  }
  const spar = STARTSPAR[forare.indexOf(f)] * 0.35;
  const in_ = botStyr(s, b, f.run.nastaPort, { pop: true, offset: spar, popFel: f.spelare ? 0.4 : f.run.popFel, pumpa: !!(f.spelare || f.pumpar), undvik });
  if (!f.spelare) {
    const gap = s.d - spelaren().s.d;
    in_.motstand = f.motstand * (1 + begransa(gap / 40, -1, 1) * GUMMIBAND);
    in_.styr = begransa(in_.styr + Math.sin(racetid * (1.3 + f.nr * 0.4)) * 0.08, -1, 1);
  }
  return in_;
}

// ---------- Spelloop ----------
let forraSek = 4;
let spelTid = 0;
const camMal = new THREE.Vector3();
const titta = new THREE.Vector3();
const projicera = new THREE.Vector3();

function uppdatera(dt) {
  const V = varld, b = V.b;
  const jag = spelaren();

  if (lage === 'nedrakning') {
    nedrakning -= dt;
    const sek = Math.ceil(nedrakning);
    if (sek !== forraSek && sek <= 3 && sek >= 1) {
      forraSek = sek;
      visa(String(sek), { tid: 0.9 });
      ljud.ton(520, 0.18, 'square', 0.2);
      ljud.tala(['Ett', 'Två', 'Tre'][sek - 1], { hastighet: 1.2 });
    }
    if (nedrakning <= 0) {
      lage = 'akning';
      visa('KÖR!', { klass: 'gron', tid: 0.8 });
      ljud.ton(880, 0.35, 'square', 0.25);
      ljud.tala('Kör!', { hastighet: 1.2 });
      forare.forEach((f) => (f.s.fart = 5));
      kontroll.rensa();
      forraPump = !!kontroll.pump;
    }
  }
  if (lage !== 'nedrakning') V.grupp.userData.luckor.forEach((l) => { l.rotation.x += (Math.PI / 2 - l.rotation.x) * Math.min(1, dt * 10); l.position.y += (0.05 - l.position.y) * Math.min(1, dt * 10); });

  if (lage === 'akning' || lage === 'mal') {
    racetid += dt;
    const n = Math.max(1, Math.ceil(dt / (1 / 120)));
    for (const f of forare) {
      const forraD = f.s.d;
      for (let k = 0; k < n; k++) {
        const in_ = indata(f, dt, k === 0);
        for (const e of fysik(f.s, b, in_, dt / n)) hantera(f, e);
      }
      if (f.run.klar) continue;
      f.run.tid += dt;
      const s = f.s;
      // portar
      const p = V.portar[f.run.nastaPort];
      if (p && forraD < p.d && s.d >= p.d) {
        const tagen = Math.abs(s.x - p.x) <= p.bredd / 2;
        if (!tagen) f.run.missar++;
        if (f.spelare) {
          if (tagen) ljud.ton(p.farg === 0xe5383b ? 784 : 988, 0.12, 'triangle', 0.18);
          else { visa(`Missad port! +${STRAFF_MISS} s`, { klass: 'rod', liten: true }); ljud.ton(160, 0.35, 'sawtooth', 0.15, -60); }
          p.streck.material.opacity = tagen ? 0.85 : 0.12;
        }
        f.run.nastaPort++;
      }
      // stolpar
      if (!s.luft || s.y - markY(b, s.x, s.d) < 1) {
        for (const pp of V.portar) {
          if (Math.abs(pp.d - s.d) > 1.5) continue;
          for (const st of pp.stolpar) {
            if (st.vingla <= 0.5 && Math.hypot(st.x - s.x, pp.d - s.d) < 0.45) {
              st.vingla = 1; s.fart *= STOLP_BROMS;
              if (f.spelare) ljud.ton(220, 0.12, 'square', 0.15);
            }
          }
        }
      }
      // mål
      if (s.d >= b.malD) {
        f.run.klar = true;
        f.run.total = f.run.tid + f.run.missar * STRAFF_MISS - f.run.bonus;
        malOrdning.push(f);
        if (f.spelare) {
          lage = 'mal';
          const plats = malOrdning.length;
          skjutKonfetti(s.x, markY(b, s.x, s.d + 8), -(s.d + 8));
          ljud.brus(1.2, 0.35, 1500);
          [523, 659, 784, 1047].forEach((fr, i) => setTimeout(() => ljud.ton(fr, 0.25, 'triangle', 0.22), i * 120));
          visa(plats === 1 ? 'MÅL! Först! 🏆' : `MÅL! ${placeringText(plats)} i mål`, { klass: 'guld', tid: 1.8 });
        } else if (!jag.run.klar) {
          visa(`${f.namn} i mål!`, { liten: true, tid: 1 });
        }
      }
    }

    // krockar mellan åkare
    for (let i = 0; i < forare.length; i++) for (let j = i + 1; j < forare.length; j++) {
      const a = forare[i], c = forare[j];
      if (a.run.klar || c.run.klar) continue;
      const dd = a.s.d - c.s.d, dx = a.s.x - c.s.x;
      if (Math.abs(dd) < 1.3 && Math.abs(dx) < 0.95 && Math.abs(a.s.y - c.s.y) < 1.2) {
        const over = 0.95 - Math.abs(dx);
        const sida = dx >= 0 ? 1 : -1;
        a.s.x += sida * over * 0.5; c.s.x -= sida * over * 0.5;
        a.s.glid += sida * 2; c.s.glid -= sida * 2;
        const bak = dd < 0 ? a : c;
        if (racetid - bak.run.krock > 0.6) {
          bak.s.fart *= 0.94; bak.run.krock = racetid;
          if (a.spelare || c.spelare) {
            visa('Krock! 💥', { klass: 'rod', liten: true, tid: 0.6 });
            ljud.brus(0.2, 0.35, 400); kamSkak = Math.max(kamSkak, 0.5);
          }
        }
      }
    }

    if (lage === 'mal') {
      efterMal += dt;
      if (efterMal > 1.8 && (malOrdning.length === forare.length || efterMal > VANTA_EFTER_MAL)) {
        forare.forEach((f) => { if (!f.run.klar) { f.run.klar = true; f.run.total = f.run.tid + (b.malD - f.s.d) / Math.max(8, f.s.fart) + f.run.missar * STRAFF_MISS - f.run.bonus; } });
        visaResultat();
      }
    }
  }

  // stolpar och flaggor rör sig
  for (const p of V.portar) for (const st of p.stolpar) {
    if (st.vingla > 0) { st.vingla = Math.max(0, st.vingla - dt * 1.5); st.grupp.rotation.z = Math.sin(st.vingla * 25) * st.vingla * 0.5; }
    st.flagga.rotation.y = Math.sin(spelTid * 3 + st.x) * 0.25;
  }

  // --- åkarna: modell, skugga, snöspray ---
  const ar = lage === 'akning' || lage === 'mal';
  for (const f of forare) {
    const s = f.s;
    const mark = markY(b, s.x, s.d);
    const rikt = riktning(b, s.d);
    const lutning = Math.atan((markY(b, s.x, s.d + 1) - markY(b, s.x, s.d - 1)) / 2);
    const sving = begransa((s.vinkel - rikt) * 2.2 - bankVid(b, s.d) * 1.5, -1, 1);
    f.run.popVisa = Math.max(0, f.run.popVisa - dt);
    const tuck = f.spelare ? (kontroll.fart && lage === 'akning') : (ar && !f.run.klar && s.fart > 12);
    const huk = s.luft ? 0.6 : f.run.popVisa > 0 ? 0.1 : s.pumpar ? 0.95 : tuck ? 0.75 : f.run.klar ? 0.12 : 0.35;
    f.modell.grupp.position.set(s.x, s.y, -s.d);
    f.modell.grupp.rotation.set(0, -s.vinkel + s.snurr * Math.PI * 2, 0);
    f.modell.uppdatera({
      huk, luta: s.luft ? 0 : sving, kant: s.luft ? 0 : sving, luft: s.luft,
      grab: s.luft && (s.snurrar || s.luftTid > 0.35) ? 1 : 0,
      lutning: s.luft ? 0 : lutning, tipp: begransa(s.vy * 0.025, -0.35, 0.3),
      fart: s.fart, vingel: s.vingel, landning: f.run.landa,
    }, dt);
    f.run.landa = 0;
    f.skugga.position.set(s.x, mark + 0.05, -s.d);
    f.skugga.rotation.set(-Math.PI / 2 + lutning, 0, 0);
    const hojd = s.y - mark;
    const ss = Math.max(0.3, 1 - hojd * 0.12);
    f.skugga.scale.set(ss, ss * 1.6, ss);
    f.skugga.material.opacity = 0.28 * ss;
    if (!s.luft && ar) {
      const carve = Math.abs(sving) * s.fart;
      if (carve > 4 && Math.random() < carve / 18) sprutaSno(s.x, mark, -s.d + 0.6, 3, Math.min(1.6, carve / 12), -Math.sign(sving), 1.5);
      if (s.fart > 12 && Math.random() < 0.3) sprutaSno(s.x, mark, -s.d + 0.9, 1, 0.4, 0, 2);
      if (f.run.klar && s.fart > 2) sprutaSno(s.x, mark, -s.d, 4, 1.2, Math.random() < 0.5 ? 1 : -1);
    }
  }

  // --- kamera: bakom dig, längs banans riktning ---
  const s = jag.s;
  const rikt = riktning(b, s.d);
  const mark = markY(b, s.x, s.d);
  const hojd = s.y - mark;
  const bak = 7.5 + Math.min(1, s.fart / 30) * 2.5;
  const cd = s.d - Math.cos(rikt) * bak;
  const cxk = s.x * 0.75 + cxVid(b, cd) * 0.25 - Math.sin(rikt) * bak;
  camMal.set(cxk, Math.max(s.y - hojd * 0.55, markY(b, cxk, cd)) + 3.3, -cd);
  if (lage === 'meny') camMal.set(s.x + Math.sin(spelTid * 0.2) * 6, s.y + 5, -s.d + 12);
  camera.position.x += (camMal.x - camera.position.x) * Math.min(1, dt * 6);
  camera.position.y += (camMal.y - camera.position.y) * Math.min(1, dt * 5);
  camera.position.z += (camMal.z - camera.position.z) * Math.min(1, dt * 10);
  kamSkak = Math.max(0, kamSkak - dt * 2.5);
  const skak = kamSkak * kamSkak * 0.35;
  camera.position.x += (Math.random() - 0.5) * skak;
  camera.position.y += (Math.random() - 0.5) * skak;
  const fd = s.d + 10;
  titta.set(s.x * 0.6 + cxVid(b, fd) * 0.4, (s.y - hojd * 0.4) * 0.6 + markY(b, cxVid(b, fd), fd) * 0.4 + 0.8, -fd);
  camera.lookAt(titta);
  camera.rotateZ(bankVid(b, s.d) * 0.5 - (s.vinkel - rikt) * 0.08); // lutar med doseringen
  const fov = 62 + Math.min(1, s.fart / 30) * 16;
  if (Math.abs(camera.fov - fov) > 0.1) { camera.fov += (fov - camera.fov) * Math.min(1, dt * 3); camera.updateProjectionMatrix(); }

  himmel.position.copy(camera.position);
  berg.position.set(camera.position.x, camera.position.y - 20, camera.position.z);
  solSkiva.position.set(camera.position.x + 160, camera.position.y + 140, camera.position.z - 330);
  solSkiva.lookAt(camera.position);
  sol.position.set(s.x + 12, s.y + 26, -s.d + 4);
  sol.target.position.set(s.x, s.y, -s.d - 6);

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
  uppdateraFartlinjer(dt, lage === 'akning' ? s.fart : 0);
  uppdateraPublik(spelTid);
  if (ar) {
    vind.satt(Math.min(0.35, Math.pow(s.fart / 28, 2) * 0.3), 300 + s.fart * 40);
    carveLjud.satt(s.luft ? 0 : Math.min(0.2, Math.abs(s.vinkel - rikt) * s.fart / 60), 1800 + s.fart * 40);
  }

  // --- pop-mätare ---
  const nasta = b.hopp[s.nastaHopp];
  const kvar = nasta ? nasta.lapp - s.d : 999;
  const visaPop = lage === 'akning' && nasta && kvar < POP_SIKT && kvar > -0.5 && !s.luft;
  popMatare.style.display = visaPop ? '' : 'none';
  if (visaPop) {
    popPil.style.left = `${begransa((1 - kvar / POP_SIKT) * 100, 0, 100)}%`;
    popMatare.classList.toggle('poppad', !!s.popHopp);
    popMatare.classList.toggle('haller', !!s.pumpar && !s.popHopp);
  }
  // pump-tips på kullarna
  const iKullar = lage === 'akning' && !visaPop && !s.luft && b.TYP[Math.round(s.d / 0.5)] === 'vagor';
  pumpTips.style.display = iKullar ? '' : 'none';
  if (iKullar) {
    pumpTips.className = 'pumptips ' + (s.pumpBra > 0 ? 'bra' : s.pumpBra < 0 ? 'fel' : '');
    pumpTips.textContent = s.pumpBra > 0 ? '⬇ PUMPA! +fart' : s.pumpBra < 0 ? '⬆ släpp uppför!' : `Håll ${KNAPP} nerför kullen`;
  }

  // --- namnskyltar över datoråkarna ---
  for (const f of forare) {
    const syns = !f.spelare && (ar || lage === 'nedrakning') && Math.abs(f.s.d - s.d) < 70;
    if (syns) {
      projicera.set(f.s.x, f.s.y + 2.3, -f.s.d).project(camera);
      const pa = projicera.z < 1 && Math.abs(projicera.x) < 1.1 && Math.abs(projicera.y) < 1.1;
      f.skylt.style.display = pa ? '' : 'none';
      if (pa) f.skylt.style.transform = `translate(${(projicera.x * 0.5 + 0.5) * innerWidth}px, ${(-projicera.y * 0.5 + 0.5) * innerHeight}px) translate(-50%,-100%)`;
    } else f.skylt.style.display = 'none';
  }

  // --- HUD ---
  const visaHud = lage === 'akning' || lage === 'nedrakning' || lage === 'mal' || lage === 'paus';
  hud.style.display = visaHud ? '' : 'none';
  stapel.style.display = visaHud ? '' : 'none';
  if (kontroll._touchElement) kontroll._touchElement.style.visibility = (lage === 'akning' || lage === 'nedrakning') ? 'visible' : 'hidden';
  const ordning = [...forare].sort((a, c) => (a.run.klar && c.run.klar ? malOrdning.indexOf(a) - malOrdning.indexOf(c) : a.run.klar ? -1 : c.run.klar ? 1 : c.s.d - a.s.d));
  const plats = ordning.indexOf(jag) + 1;
  hudPlats.innerHTML = `<small>plats</small><span class="p${plats}">${placeringText(plats)}</span>`;
  const totalNu = jag.run.klar ? jag.run.total : jag.run.tid + jag.run.missar * STRAFF_MISS - jag.run.bonus;
  hudTid.innerHTML = `<small>tid</small>${tidText(totalNu)}`;
  hudFart.innerHTML = `<small>km/h</small>${Math.round(s.fart * 3.6)}`;
  forare.forEach((f, i) => { prickar[i].style.bottom = `${begransa(f.s.d / b.malD, 0, 1) * 92}%`; });
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
window.__slalom = { logg, forare, get s() { return spelaren().s; }, get run() { return spelaren().run; }, get lage() { return lage; }, BACKAR, get varld() { return varld; } };
