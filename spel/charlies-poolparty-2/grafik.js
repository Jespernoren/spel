// =============================================================
//  Charlies Poolparty 2 – 3D-grafik (Three.js)
//  Spellogiken i spel.js räknar i pixlar (960×540). Här ritas samma värld i 3D.
//  1 enhet i 3D = 40 pixlar. Spelplanet ligger på z = 0, marken på y = 0.
// =============================================================
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const E = 40, MARK_Y = 490;
const X = (px) => px / E;
const Y = (py) => (MARK_Y - py) / E;
const V3 = THREE.Vector3;
const MARK_DJUP = 7.5, MARK_FRAM = 1.6; // marken går från z = -5.9 till z = 1.6

// ---------- Teman: färger, ljus och bakgrund ----------
const TEMAN = {
  stad: { himmel: ['#8f7cf0', '#d9c8ff', '#ffe3f1'], dimma: '#f1dcf6', sol: '#fff1c4', solV: 0.55, solH: 0.32, ljus: '#fff1dc', ljusI: 2.6, hemi: ['#efe6ff', '#9fdcb4'], mark: 'gras', bak: 'gras' },
  park: { himmel: ['#63b7f5', '#bfe3ff', '#fff0f6'], dimma: '#e6f2fb', sol: '#fff6d0', solV: -0.5, solH: 0.35, ljus: '#fff6e6', ljusI: 2.8, hemi: ['#e3f3ff', '#9fdcb4'], mark: 'gras', bak: 'gras', damm: true },
  glass: { himmel: ['#f39ac7', '#ffd1e6', '#fff1dc'], dimma: '#ffe6ef', sol: '#fff6d6', solV: 0.5, solH: 0.4, ljus: '#fff0e6', ljusI: 2.6, hemi: ['#fff0f8', '#ffd9c4'], mark: 'sten', bak: 'sten' },
  brygga: { himmel: ['#3f9fe8', '#a8dcff', '#eaf8ff'], dimma: '#dff2ff', sol: '#fff6d6', solV: 0.6, solH: 0.33, ljus: '#fffaf0', ljusI: 3.0, hemi: ['#dff2ff', '#8fd0e8'], mark: 'tra', bak: 'hav' },
  vattenpark: { himmel: ['#38b6f2', '#a6e6ff', '#fff2f9'], dimma: '#e4f6ff', sol: '#fff6d6', solV: -0.4, solH: 0.42, ljus: '#fffaf0', ljusI: 3.0, hemi: ['#e8f8ff', '#bfe9f5'], mark: 'kakel', bak: 'kakel', damm: true },
  strand: { himmel: ['#5a4fb0', '#f08fb0', '#ffc98a'], dimma: '#ffc4a4', sol: '#ffd27a', solV: 0.25, solH: 0.06, ljus: '#ffc49a', ljusI: 2.4, hemi: ['#ffd0e0', '#e8b07a'], mark: 'sand', bak: 'hav', solnedgang: true },
};

// ---------- Hjälpare ----------
const matCache = new Map();
function mat(farg, opt = {}) {
  const k = farg + '|' + Object.entries(opt).map(([a, b]) => a + b).join(',');
  if (!matCache.has(k)) matCache.set(k, new THREE.MeshStandardMaterial({ color: farg, roughness: 0.6, ...opt }));
  return matCache.get(k);
}
function texMat(tex, opt = {}) { return new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, ...opt }); }
function mesh(geo, material, x = 0, y = 0, z = 0, skugga = true) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.castShadow = skugga; m.receiveShadow = true;
  return m;
}
const KLOT = new THREE.SphereGeometry(1, 24, 16);
const KLOT_L = new THREE.SphereGeometry(1, 12, 8);
const in_ = (forald, barn) => { forald.add(barn); return barn; };
const hash = (i) => { const v = Math.sin(i * 127.1 + 31.7) * 43758.5453; return v - Math.floor(v); };

function canvasTex(w, h, rit, rep = [1, 1]) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  rit(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(rep[0], rep[1]); t.anisotropy = 8;
  return t;
}
function brusPrickar(g, w, h, farger, n, rmin, rmax) {
  for (let i = 0; i < n; i++) { g.fillStyle = farger[i % farger.length]; g.beginPath(); g.arc(Math.random() * w, Math.random() * h, rmin + Math.random() * (rmax - rmin), 0, 7); g.fill(); }
}
const TEX = {};
function texturer() {
  if (TEX.gras) return;
  TEX.gras = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#7fd394'; g.fillRect(0, 0, w, h); brusPrickar(g, w, h, ['#8fe0a3', '#6fc487', '#9be8ad', '#74c98d'], 900, 1, 4); });
  TEX.jord = canvasTex(256, 128, (g, w, h) => { g.fillStyle = '#9c7a8f'; g.fillRect(0, 0, w, h); brusPrickar(g, w, h, ['#8d6c80', '#ab889c', '#93738a'], 300, 2, 6); });
  TEX.sand = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#ffe1b3'; g.fillRect(0, 0, w, h); brusPrickar(g, w, h, ['#f7d3a0', '#ffe9c6', '#f0c995', '#fff1dc'], 1400, 0.6, 2.2); });
  TEX.tra = canvasTex(256, 256, (g, w, h) => {
    for (let i = 0; i < 8; i++) { g.fillStyle = ['#c9935f', '#bd8754', '#d39f6c', '#c48c58'][i % 4]; g.fillRect(i * 32, 0, 32, h); g.fillStyle = 'rgba(90,55,30,0.55)'; g.fillRect(i * 32, 0, 2, h); }
    g.strokeStyle = 'rgba(110,70,40,0.25)'; for (let i = 0; i < 60; i++) { const x = Math.random() * w; g.beginPath(); g.moveTo(x, Math.random() * h); g.lineTo(x + 2, Math.random() * h); g.stroke(); }
    g.fillStyle = 'rgba(70,45,25,0.6)'; for (let i = 0; i < 16; i++) { g.beginPath(); g.arc(i % 8 * 32 + 8, (i < 8 ? 20 : 230), 2, 0, 7); g.fill(); }
  });
  TEX.kakel = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#f4fbff'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { g.fillStyle = (x + y) % 5 === 0 ? '#c9ecfb' : '#ffffff'; g.fillRect(x * 32 + 1.5, y * 32 + 1.5, 29, 29); }
  });
  TEX.sten = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#f2d6cc'; g.fillRect(0, 0, w, h);
    const f = ['#ffe9de', '#fbdcd2', '#ffe3ea', '#f9e6d6'];
    for (let y = 0; y < 8; y++) for (let x = -1; x < 6; x++) { g.fillStyle = f[(x * 3 + y) & 3]; const ox = (y % 2) * 24; g.beginPath(); g.roundRect(x * 48 + ox + 2, y * 32 + 2, 44, 28, 9); g.fill(); }
  });
  TEX.fonster = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < 4; y++) for (let x = 0; x < 3; x++) { g.fillStyle = '#9fd6f5'; g.beginPath(); g.roundRect(14 + x * 38, 12 + y * 30, 24, 20, 4); g.fill(); g.fillStyle = 'rgba(255,255,255,0.7)'; g.fillRect(16 + x * 38, 14 + y * 30, 6, 16); }
  });
  TEX.vafflor = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#e2a868'; g.fillRect(0, 0, w, h); g.strokeStyle = '#b97d43'; g.lineWidth = 4;
    for (let i = -w; i < w * 2; i += 22) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + h, h); g.stroke(); g.beginPath(); g.moveTo(i, h); g.lineTo(i + h, 0); g.stroke(); }
  });
  TEX.rand = (a, b, n = 8) => canvasTex(256, 64, (g, w, h) => { for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? b : a; g.fillRect(i * w / n, 0, w / n + 1, h); } });
  TEX.boll = canvasTex(256, 128, (g, w, h) => { const f = ['#ff5f6d', '#ffffff', '#ffd23f', '#ffffff', '#3fa9ff', '#ffffff']; for (let i = 0; i < 6; i++) { g.fillStyle = f[i]; g.fillRect(i * w / 6, 0, w / 6 + 1, h); } g.fillStyle = '#fff'; g.fillRect(0, 0, w, 10); g.fillRect(0, h - 10, w, 10); });
  TEX.prickar = canvasTex(128, 128, (g, w, h) => { g.fillStyle = '#2ec4c0'; g.fillRect(0, 0, w, h); g.fillStyle = '#ffffff'; for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.beginPath(); g.arc(16 + x * 32 + (y % 2) * 16, 16 + y * 32, 5, 0, 7); g.fill(); } }, [2, 1]);
  TEX.lov = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#62b97a'; g.fillRect(0, 0, w, h); brusPrickar(g, w, h, ['#79cf8e', '#56a96d', '#8ddc9f', '#4f9f66'], 700, 4, 10); });
  TEX.glod = canvasTex(128, 128, (g, w, h) => { const r = g.createRadialGradient(64, 64, 0, 64, 64, 64); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.35, 'rgba(255,255,255,0.45)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, h); });
  TEX.glod.wrapS = TEX.glod.wrapT = THREE.ClampToEdgeWrapping;
}
const emojiCache = new Map();
function emojiTex(text, bakgrund = null) {
  const k = text + bakgrund;
  if (emojiCache.has(k)) return emojiCache.get(k);
  const t = canvasTex(128, 128, (g, w, h) => {
    if (bakgrund) { g.fillStyle = bakgrund; g.beginPath(); g.arc(64, 64, 60, 0, 7); g.fill(); g.strokeStyle = 'rgba(0,0,0,0.12)'; g.lineWidth = 4; g.stroke(); }
    g.font = '76px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, 64, 70);
  });
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  emojiCache.set(k, t); return t;
}
function textTex(text, bredd = 512, farg = '#6b3a6e') {
  const t = canvasTex(bredd, 96, (g, w, h) => {
    g.fillStyle = 'rgba(255,255,255,0.95)'; g.beginPath(); g.roundRect(4, 8, w - 8, h - 16, 36); g.fill();
    g.font = 'bold 46px "Trebuchet MS",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = farg; g.fillText(text, w / 2, h / 2 + 2);
  });
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t;
}
function sprite(tex, skala, x, y, z, additiv = false) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: additiv ? THREE.AdditiveBlending : THREE.NormalBlending }));
  s.scale.set(skala[0], skala[1], 1); s.position.set(x, y, z); return s;
}

// ---------- Shaders ----------
function himmelMaterial(f) {
  return new THREE.ShaderMaterial({
    uniforms: { uTopp: { value: new THREE.Color(f[0]) }, uMitt: { value: new THREE.Color(f[1]) }, uHor: { value: new THREE.Color(f[2]) } },
    vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform vec3 uTopp, uMitt, uHor; varying vec3 vD;
      void main(){ float h = vD.y; vec3 c = h > 0.08 ? mix(uMitt, uTopp, smoothstep(0.08, 0.7, h)) : mix(uHor, uMitt, smoothstep(-0.05, 0.08, h));
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
      }`,
    side: THREE.BackSide, depthWrite: false, fog: false,
  });
}
function vattenMaterial(nara, langt, hor) {
  return new THREE.ShaderMaterial({
    uniforms: { uTid: { value: 0 }, uNara: { value: new THREE.Color(nara) }, uLangt: { value: new THREE.Color(langt) }, uHor: { value: new THREE.Color(hor) }, uKam: { value: new V3() } },
    vertexShader: `uniform float uTid; varying vec3 vP; varying float vV;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0);
        float v = sin(w.x * 0.9 + uTid * 1.6) * 0.05 + sin(w.z * 1.3 - uTid * 1.2 + w.x * 0.35) * 0.05 + sin(w.x * 2.7 - uTid * 2.3) * 0.015;
        w.y += v; vV = v; vP = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `uniform float uTid; uniform vec3 uNara, uLangt, uHor, uKam; varying vec3 vP; varying float vV;
      void main(){
        float d = length(vP.xz - uKam.xz); float t = clamp((d - 10.0) / 110.0, 0.0, 1.0);
        vec3 c = mix(uNara, uLangt, sqrt(t));
        float r1 = sin(vP.x * 3.1 + uTid * 2.0 + sin(vP.z * 2.0 + uTid) * 1.5);
        float r2 = sin(vP.z * 4.3 - uTid * 1.4 + vP.x * 0.7);
        float glans = smoothstep(0.9, 1.0, r1 * r2) * (1.0 - t * 0.6);
        float kam = smoothstep(0.035, 0.08, vV) * 0.25;
        c += vV * 1.2 + glans * 0.6 + kam;
        c = mix(c, uHor, smoothstep(0.45, 1.0, t));
        gl_FragColor = vec4(c, 0.93);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    transparent: true, fog: false,
  });
}

// =============================================================
//  MODELLER
// =============================================================
function byggCharlie() {
  const rot = new THREE.Group();     // positioneras vid fötterna
  const kropp = new THREE.Group(); rot.add(kropp); // vänds och squashas
  const hud = mat('#ffd2b2', { roughness: 0.55 });
  const har = mat('#7a4522', { roughness: 0.42 });
  const D = {};
  // ben
  D.ben = [-1, 1].map(sx => {
    const piv = new THREE.Group(); piv.position.set(sx * 0.085, 0.37, 0);
    const b = mesh(new THREE.CapsuleGeometry(0.06, 0.2, 4, 10), hud, 0, -0.17, 0); piv.add(b);
    const sko = mesh(KLOT, mat('#ff7fb8', { roughness: 0.4 }), 0, -0.33, 0.035); sko.scale.set(0.075, 0.055, 0.11); piv.add(sko);
    kropp.add(piv); return { piv, b, sko };
  });
  // klänning
  D.klanning = new THREE.Group();
  const kl = mesh(new THREE.CylinderGeometry(0.12, 0.25, 0.38, 24), mat('#ff6fae', { roughness: 0.5 }), 0, 0.53, 0); D.klanning.add(kl);
  const kant = mesh(new THREE.TorusGeometry(0.245, 0.025, 8, 28), mat('#ffffff', { roughness: 0.5 }), 0, 0.36, 0); kant.rotation.x = Math.PI / 2; D.klanning.add(kant);
  const krage = mesh(new THREE.TorusGeometry(0.11, 0.025, 8, 20), mat('#ffffff'), 0, 0.71, 0); krage.rotation.x = Math.PI / 2; D.klanning.add(krage);
  kropp.add(D.klanning);
  // baddräkt
  D.baddrakt = new THREE.Group();
  const bd = mesh(new THREE.CapsuleGeometry(0.135, 0.17, 6, 18), texMat(TEX.prickar, { roughness: 0.35 }), 0, 0.54, 0); D.baddrakt.add(bd);
  const vol = mesh(new THREE.CylinderGeometry(0.15, 0.19, 0.07, 22), mat('#2ec4c0', { roughness: 0.35 }), 0, 0.42, 0); D.baddrakt.add(vol);
  kropp.add(D.baddrakt);
  // armar
  D.armar = [-1, 1].map(sx => {
    const piv = new THREE.Group(); piv.position.set(sx * 0.15, 0.67, 0);
    const a = mesh(new THREE.CapsuleGeometry(0.042, 0.17, 4, 8), hud, 0, -0.11, 0); piv.add(a);
    const hand = mesh(KLOT, hud, 0, -0.23, 0); hand.scale.setScalar(0.055); piv.add(hand);
    piv.rotation.z = sx * 0.25;
    kropp.add(piv); return piv;
  });
  // huvud
  const huv = new THREE.Group(); huv.position.set(0, 0.98, 0); kropp.add(huv); D.huvud = huv;
  const h = mesh(KLOT, hud); h.scale.set(0.27, 0.26, 0.255); huv.add(h);
  const harTopp = mesh(new THREE.SphereGeometry(0.285, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.42), har, 0, 0.012, -0.01); huv.add(harTopp);
  const harBak = mesh(new THREE.SphereGeometry(0.283, 32, 16, Math.PI, Math.PI, 0, Math.PI * 0.72), har, 0, 0.0, -0.012); huv.add(harBak);
  for (const [x, r] of [[-0.13, 0.5], [-0.03, 0.1], [0.08, -0.35], [0.17, -0.7]]) { // lugg
    const l = mesh(KLOT, har, x, 0.17, 0.19); l.scale.set(0.1, 0.07, 0.07); l.rotation.z = r; huv.add(l);
  }
  for (const sx of [-1, 1]) { const s = mesh(KLOT, har, sx * 0.25, -0.04, -0.02); s.scale.set(0.06, 0.16, 0.12); huv.add(s); }
  D.svans = new THREE.Group(); D.svans.position.set(0, 0.12, -0.25); huv.add(D.svans);
  const sv = mesh(KLOT, har, 0, -0.14, -0.06); sv.scale.set(0.1, 0.19, 0.1); D.svans.add(sv);
  const snodd = mesh(KLOT, mat('#ff5ea0'), 0, 0, -0.01); snodd.scale.setScalar(0.05); D.svans.add(snodd);
  // ansikte
  D.ogon = [-1, 1].map(sx => {
    const g = new THREE.Group(); g.position.set(sx * 0.095, 0.0, 0.225);
    const o = mesh(KLOT, mat('#2a1a22', { roughness: 0.2 }), 0, 0, 0, false); o.scale.set(0.042, 0.055, 0.03); g.add(o);
    const gl = mesh(KLOT_L, mat('#ffffff', { emissive: '#ffffff', emissiveIntensity: 0.6 }), 0.014, 0.018, 0.025, false); gl.scale.setScalar(0.014); g.add(gl);
    huv.add(g); return g;
  });
  for (const sx of [-1, 1]) { const k = mesh(KLOT_L, mat('#ff8fb0', { roughness: 0.8, transparent: true, opacity: 0.55 }), sx * 0.15, -0.075, 0.2, false); k.scale.set(0.05, 0.03, 0.02); huv.add(k); }
  const nasa = mesh(KLOT_L, hud, 0, -0.04, 0.255, false); nasa.scale.setScalar(0.02); huv.add(nasa);
  D.mun = mesh(new THREE.TorusGeometry(0.045, 0.011, 6, 16, Math.PI), mat('#c2405a'), 0, -0.08, 0.235, false); D.mun.rotation.z = Math.PI; huv.add(D.mun);
  D.munO = mesh(KLOT_L, mat('#c2405a'), 0, -0.1, 0.235, false); D.munO.scale.set(0.03, 0.035, 0.015); D.munO.visible = false; huv.add(D.munO);
  // rosett och blomma
  D.rosett = new THREE.Group(); D.rosett.position.set(0.15, 0.2, 0.08);
  for (const sx of [-1, 1]) { const r = mesh(KLOT, mat('#ff4f97', { roughness: 0.4 })); r.scale.set(0.07, 0.05, 0.03); r.position.x = sx * 0.055; r.rotation.z = sx * 0.4; D.rosett.add(r); }
  huv.add(D.rosett);
  D.blomma = new THREE.Group(); D.blomma.position.set(0.17, 0.19, 0.1);
  for (let i = 0; i < 5; i++) { const v = i / 5 * Math.PI * 2; const p = mesh(KLOT_L, mat('#ff8fc8', { roughness: 0.5 }), Math.cos(v) * 0.045, Math.sin(v) * 0.045, 0); p.scale.set(0.035, 0.035, 0.02); D.blomma.add(p); }
  const mitt = mesh(KLOT_L, mat('#ffd23f'), 0, 0, 0.01); mitt.scale.setScalar(0.025); D.blomma.add(mitt);
  huv.add(D.blomma);
  // badring (syns i poolen)
  D.badring = mesh(new THREE.TorusGeometry(0.3, 0.1, 14, 30), texMat(TEX.rand('#ff5f9e', '#ffffff', 12), { roughness: 0.3 }), 0, 0.5, 0);
  D.badring.rotation.x = Math.PI / 2; D.badring.visible = false; rot.add(D.badring);
  // skugga under fötterna
  D.skugga = new THREE.Mesh(new THREE.CircleGeometry(0.3, 24), new THREE.MeshBasicMaterial({ color: '#3a2050', transparent: true, opacity: 0.22, depthWrite: false }));
  D.skugga.rotation.x = -Math.PI / 2;
  return { rot, kropp, D, hud, legging: mat('#4a78b5', { roughness: 0.6 }), vand: 0.7, badklader: null };
}

function byggAnka(guld = false) {
  const g = new THREE.Group();
  const kr = guld ? mat('#ffc21a', { metalness: 0.55, roughness: 0.2, emissive: '#ffae00', emissiveIntensity: 0.35 }) : mat('#ffd52e', { roughness: 0.28 });
  const b = mesh(KLOT, kr); b.scale.set(0.32, 0.24, 0.26); g.add(b);
  const stj = mesh(new THREE.ConeGeometry(0.1, 0.18, 12), kr, -0.3, 0.1, 0); stj.rotation.z = Math.PI / 2 + 0.6; g.add(stj);
  const hu = mesh(KLOT, kr, 0.18, 0.27, 0); hu.scale.setScalar(0.17); g.add(hu);
  const nab = mesh(KLOT, mat('#ff8a1f', { roughness: 0.35 }), 0.35, 0.24, 0); nab.scale.set(0.1, 0.04, 0.08); g.add(nab);
  for (const sz of [-1, 1]) { const o = mesh(KLOT_L, mat('#1d1d1d', { roughness: 0.15 }), 0.27, 0.32, sz * 0.1, false); o.scale.setScalar(0.028); g.add(o); }
  const vinge = mesh(KLOT, kr, -0.02, 0.04, 0.2); vinge.scale.set(0.16, 0.1, 0.06); g.add(vinge);
  if (guld) {
    const krona = new THREE.Group(); krona.position.set(0.18, 0.43, 0);
    krona.add(mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.06, 16, 1, true), mat('#ffe14d', { metalness: 1, roughness: 0.2, side: THREE.DoubleSide })));
    for (let i = 0; i < 5; i++) { const v = i / 5 * Math.PI * 2; const sp = mesh(new THREE.ConeGeometry(0.025, 0.08, 6), mat('#ffe14d', { metalness: 1, roughness: 0.2 }), Math.cos(v) * 0.085, 0.06, Math.sin(v) * 0.085); krona.add(sp); }
    const juvel = mesh(KLOT_L, mat('#ff3d7f', { roughness: 0.1, emissive: '#ff3d7f', emissiveIntensity: 0.3 }), 0, 0.01, 0.09, false); juvel.scale.setScalar(0.025); krona.add(juvel);
    g.add(krona);
    const glod = sprite(TEX.glod, [1.8, 1.8], 0, 0.1, -0.1, true); glod.material.color.set('#ffd84a'); glod.material.opacity = 0.8; g.add(glod); g.userData.glod = glod;
  }
  g.rotation.y = -0.5;
  return g;
}

function byggKrabba() {
  const g = new THREE.Group();
  const rod = mat('#ff5d43', { roughness: 0.35 }), mork = mat('#e2452f', { roughness: 0.4 });
  const k = mesh(KLOT, rod, 0, 0.32, 0); k.scale.set(0.5, 0.3, 0.38); g.add(k);
  g.userData.ben = [];
  for (const sx of [-1, 1]) for (let j = 0; j < 3; j++) {
    const piv = new THREE.Group(); piv.position.set(sx * 0.3, 0.28, (j - 1) * 0.18);
    const b = mesh(new THREE.CylinderGeometry(0.035, 0.025, 0.4, 6), mork, sx * 0.14, -0.12, 0); b.rotation.z = sx * 0.9; piv.add(b);
    g.add(piv); g.userData.ben.push({ piv, sx, j });
  }
  g.userData.klor = [-1, 1].map(sx => {
    const piv = new THREE.Group(); piv.position.set(sx * 0.52, 0.5, 0.18);
    const arm = mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.25, 8), mork, 0, -0.08, 0); arm.rotation.z = sx * 0.6; piv.add(arm);
    const klo = mesh(KLOT, rod, sx * 0.05, 0.1, 0); klo.scale.set(0.16, 0.13, 0.1); piv.add(klo);
    const tand = mesh(KLOT, rod, sx * 0.1, 0.22, 0); tand.scale.set(0.08, 0.06, 0.06); piv.add(tand);
    g.add(piv); return piv;
  });
  g.userData.ogon = [-1, 1].map(sx => {
    const st = mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.2, 6), mork, sx * 0.13, 0.66, 0.15); g.add(st);
    const o = mesh(KLOT, mat('#ffffff', { roughness: 0.2 }), sx * 0.13, 0.8, 0.17); o.scale.setScalar(0.085); g.add(o);
    const p = mesh(KLOT_L, mat('#151515', { roughness: 0.1 }), sx * 0.13, 0.8, 0.245, false); p.scale.setScalar(0.04); g.add(p);
    return p;
  });
  const mun = mesh(new THREE.TorusGeometry(0.07, 0.015, 6, 14, Math.PI), mat('#8a1f2a'), 0, 0.3, 0.37, false); mun.rotation.z = Math.PI; g.add(mun);
  return g;
}
function byggBoll() {
  const g = new THREE.Group();
  const b = mesh(new THREE.SphereGeometry(0.47, 32, 20), texMat(TEX.boll, { roughness: 0.25 }), 0, 0.47, 0); g.add(b); g.userData.boll = b;
  return g;
}
function byggYrStjarnor() {
  const g = new THREE.Group();
  for (let i = 0; i < 3; i++) { const s = mesh(new THREE.OctahedronGeometry(0.09), mat('#ffd23f', { emissive: '#ffb800', emissiveIntensity: 0.6 }), 0, 0, 0, false); g.add(s); }
  g.visible = false; return g;
}

function byggPalm(h = 4, s = 1, solnedgang = false) {
  const g = new THREE.Group();
  const krok = 0.5 + hash(h * 13) * 0.6;
  const kurva = new THREE.QuadraticBezierCurve3(new V3(0, -0.2, 0), new V3(-krok, h * 0.55, 0), new V3(krok * 0.35, h, 0));
  g.add(mesh(new THREE.TubeGeometry(kurva, 14, 0.15, 8), mat('#a8794f', { roughness: 0.95 })));
  for (let i = 0; i < 6; i++) { const p = kurva.getPoint(i / 6); const r = mesh(new THREE.TorusGeometry(0.15, 0.03, 6, 12), mat('#8d6440', { roughness: 1 }), p.x, p.y, p.z, false); r.rotation.x = Math.PI / 2; g.add(r); }
  const topp = kurva.getPoint(1);
  const lov = mat(solnedgang ? '#3f9a7a' : '#4cbf7a', { roughness: 0.55, side: THREE.DoubleSide });
  const n = 8;
  for (let i = 0; i < n; i++) {
    const yaw = new THREE.Group(); yaw.position.copy(topp); yaw.rotation.y = i / n * Math.PI * 2 + hash(i + h) * 0.3;
    const droop = new THREE.Group(); droop.rotation.z = -0.35 - hash(i * 7 + h) * 0.35; yaw.add(droop);
    const blad = mesh(KLOT, lov, 1.0, -0.1, 0); blad.scale.set(1.15, 0.05, 0.3); blad.rotation.z = -0.25; droop.add(blad);
    g.add(yaw);
  }
  for (let i = 0; i < 3; i++) { const v = i / 3 * Math.PI * 2; in_(g, mesh(KLOT, mat('#7a5232', { roughness: 0.6 }), topp.x + Math.cos(v) * 0.14, topp.y - 0.15, topp.z + Math.sin(v) * 0.14)).scale.setScalar(0.12); }
  g.scale.setScalar(s);
  return g;
}
function byggMoln(s = 1) {
  const g = new THREE.Group();
  const m = mat('#ffffff', { roughness: 1, emissive: '#ffffff', emissiveIntensity: 0.35 });
  const n = 5 + Math.floor(hash(s * 99) * 3);
  for (let i = 0; i < n; i++) { const k = mesh(KLOT_L, m, (i - n / 2) * 1.1, Math.sin(i / n * Math.PI) * 0.7, hash(i + s) * 0.6, false); k.scale.setScalar(1 + Math.sin(i / n * Math.PI) * 0.9); g.add(k); }
  g.scale.setScalar(s); return g;
}
function byggHus(bredd, hojd, farg, tak = '#e2533a') {
  const g = new THREE.Group();
  const t = TEX.fonster.clone(); t.repeat.set(Math.max(1, Math.round(bredd / 2)), Math.max(1, Math.round(hojd / 2.5))); t.needsUpdate = true;
  const vagg = new THREE.MeshStandardMaterial({ map: t, color: farg, roughness: 0.75 });
  const kropp = mesh(new RoundedBoxGeometry(bredd, hojd, 3, 2, 0.15), vagg, 0, hojd / 2, 0);
  g.add(kropp);
  const tk = mesh(new THREE.ConeGeometry(Math.max(bredd, 3) * 0.78, 1.6, 4), mat(tak, { roughness: 0.7 }), 0, hojd + 0.8, 0); tk.rotation.y = Math.PI / 4; tk.scale.z = 0.75; g.add(tk);
  return g;
}

// =============================================================
//  GRAFIKMOTOR
// =============================================================
export function skapaGrafik(canvas) {
  texturer();
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.NeutralToneMapping; renderer.toneMappingExposure = 1.05;

  const scen = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scen.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scen.environmentIntensity = 0.45;

  const kamera = new THREE.PerspectiveCamera(38, 16 / 9, 0.1, 600);
  const himmel = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), himmelMaterial(TEMAN.stad.himmel));
  himmel.renderOrder = -10; scen.add(himmel);
  const hemi = new THREE.HemisphereLight('#ffffff', '#88cc99', 1.1); scen.add(hemi);
  const sol = new THREE.DirectionalLight('#ffffff', 2.6);
  sol.castShadow = true; sol.shadow.mapSize.set(2048, 2048);
  Object.assign(sol.shadow.camera, { left: -18, right: 18, top: 12, bottom: -8, near: 1, far: 80 });
  sol.shadow.bias = -0.0006; sol.shadow.normalBias = 0.02;
  scen.add(sol); scen.add(sol.target);
  const solSkiva = sprite(TEX.glod, [60, 60], 0, 0, 0, true); scen.add(solSkiva);
  const solKarna = sprite(TEX.glod, [22, 22], 0, 0, 0, true); scen.add(solKarna);
  solSkiva.material.fog = false; solKarna.material.fog = false;

  // partiklar (gnistor, plask, konfetti)
  const MAXP = 700;
  const pGeo = new THREE.SphereGeometry(1, 8, 6);
  const pMat = new THREE.MeshBasicMaterial({ color: '#ffffff', toneMapped: false });
  const partMesh = new THREE.InstancedMesh(pGeo, pMat, MAXP); partMesh.frustumCulled = false; scen.add(partMesh);
  const kGeo = new THREE.PlaneGeometry(1, 0.55);
  const kMat = new THREE.MeshBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide, toneMapped: false });
  const konfMesh = new THREE.InstancedMesh(kGeo, kMat, MAXP); konfMesh.frustumCulled = false; scen.add(konfMesh);
  const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpE = new THREE.Euler(), tmpS = new V3(), tmpP = new V3(), tmpC = new THREE.Color();
  for (let i = 0; i < MAXP; i++) { partMesh.setColorAt(i, tmpC.set('#fff')); konfMesh.setColorAt(i, tmpC); }

  const charlie = byggCharlie(); scen.add(charlie.rot); scen.add(charlie.D.skugga);

  let banGrupp = null, nu = null, vatten = [], tema = TEMAN.stad, malKamX = 0;

  function rensa(obj) {
    obj.traverse(o => {
      if (o.geometry && o.geometry !== KLOT && o.geometry !== KLOT_L) o.geometry.dispose();
      if (o.material) for (const m of [].concat(o.material)) { if (![...matCache.values()].includes(m)) { if (m.map && !Object.values(TEX).includes(m.map) && ![...emojiCache.values()].includes(m.map)) m.map.dispose(); m.dispose(); } }
    });
  }

  function markMaterial(typ, w, d) {
    const bas = { gras: TEX.gras, sand: TEX.sand, tra: TEX.tra, kakel: TEX.kakel, sten: TEX.sten }[typ];
    const t = bas.clone(); t.repeat.set(w / (typ === 'tra' ? 2.5 : 3), d / 3); if (typ === 'tra') t.rotation = 0; t.needsUpdate = true;
    return new THREE.MeshStandardMaterial({ map: t, roughness: typ === 'kakel' ? 0.25 : typ === 'tra' ? 0.7 : 0.95 });
  }

  // ---------------- Bygg en bana ----------------
  function byggBana(bana) {
    if (banGrupp) { scen.remove(banGrupp); rensa(banGrupp); }
    banGrupp = new THREE.Group(); scen.add(banGrupp);
    tema = TEMAN[bana.tema];
    nu = { ankor: [], flottar: [], ringar: [], dorrar: [], fiender: [], djur: [], moln: [], guld: null, badklader: null, buss: null, pool: null, batar: [] };
    vatten = [];

    // himmel, dimma, ljus
    himmel.material.uniforms.uTopp.value.set(tema.himmel[0]);
    himmel.material.uniforms.uMitt.value.set(tema.himmel[1]);
    himmel.material.uniforms.uHor.value.set(tema.himmel[2]);
    scen.fog = new THREE.Fog(tema.dimma, 45, 230);
    hemi.color.set(tema.hemi[0]); hemi.groundColor.set(tema.hemi[1]);
    sol.color.set(tema.ljus); sol.intensity = tema.ljusI;
    solSkiva.material.color.set(tema.sol); solKarna.material.color.set(tema.sol);
    solSkiva.material.opacity = tema.solnedgang ? 0.9 : 0.55;

    const B = X(bana.bredd);
    const mt = tema.mark;

    // bakgrundsmark/hav
    if (tema.bak === 'hav' || tema.damm) {
      const hav = new THREE.Mesh(new THREE.PlaneGeometry(tema.damm ? B + 80 : 900, tema.damm ? MARK_DJUP + 1.6 : 500, tema.damm ? 160 : 200, tema.damm ? 8 : 100),
        tema.solnedgang ? vattenMaterial('#3f8fd8', '#a97fd0', tema.dimma) : vattenMaterial(tema.damm && bana.tema === 'park' ? '#3fc0b0' : '#27a6e8', '#64c8f0', tema.dimma));
      hav.rotation.x = -Math.PI / 2;
      if (tema.damm) hav.position.set(B / 2, -0.38, -(MARK_DJUP - MARK_FRAM) / 2 + 0.2);
      else hav.position.set(B / 2, -0.38, -200);
      hav.receiveShadow = true; banGrupp.add(hav); vatten.push(hav);
      if (tema.damm || tema.bak === 'hav') { // botten under vattnet
        const botten = new THREE.Mesh(new THREE.PlaneGeometry(B + 80, 12), mat(bana.tema === 'vattenpark' ? '#7fd6f5' : '#1f6e9a', { roughness: 1 }));
        botten.rotation.x = -Math.PI / 2; botten.position.set(B / 2, -1.6, -3); banGrupp.add(botten);
      }
    }
    if (tema.bak !== 'hav') {
      const bakTyp = { gras: TEX.gras, sten: TEX.sten, kakel: TEX.kakel }[tema.bak];
      const t = bakTyp.clone(); t.repeat.set((B + 240) / 3, 70); t.needsUpdate = true;
      const golv = new THREE.Mesh(new THREE.PlaneGeometry(B + 240, 210), new THREE.MeshStandardMaterial({ map: t, roughness: 0.95 }));
      golv.rotation.x = -Math.PI / 2; golv.position.set(B / 2, -0.02, -(MARK_DJUP - MARK_FRAM) - 105 + (tema.damm ? 0 : MARK_DJUP)); golv.receiveShadow = true; banGrupp.add(golv);
    }

    // spelmark
    for (const m of bana.mark) {
      const w = X(m.w), cx = X(m.x) + w / 2, cz = MARK_FRAM - MARK_DJUP / 2;
      if (mt === 'tra') {
        const dack = mesh(new RoundedBoxGeometry(w, 0.45, 3.2, 2, 0.06), markMaterial('tra', w, 3.2), cx, -0.225, 0); banGrupp.add(dack);
        for (let px = X(m.x) + 0.3; px < X(m.x) + w - 0.2; px += 1.8) for (const pz of [-1.4, 1.4]) banGrupp.add(mesh(new THREE.CylinderGeometry(0.16, 0.18, 3.2, 10), mat('#7a5236', { roughness: 0.9 }), px, -1.7, pz));
        continue;
      }
      const sidaFarg = mt === 'gras' ? null : mt === 'sand' ? '#f2c890' : mt === 'kakel' ? '#e6f6ff' : '#f4cfc0';
      const sida = sidaFarg ? mat(sidaFarg, { roughness: 0.9 }) : (() => { const t = TEX.jord.clone(); t.repeat.set(w / 3, 1); t.needsUpdate = true; return new THREE.MeshStandardMaterial({ map: t, roughness: 1 }); })();
      banGrupp.add(mesh(new RoundedBoxGeometry(w, 3, MARK_DJUP, 3, 0.2), sida, cx, -1.62, cz));
      const topp = mesh(new RoundedBoxGeometry(w + 0.04, 0.3, MARK_DJUP + 0.04, 2, 0.12), markMaterial(mt, w, MARK_DJUP), cx, -0.15, cz);
      banGrupp.add(topp);
      if (mt === 'kakel') { const kant = mesh(new RoundedBoxGeometry(w + 0.1, 0.12, 0.25, 2, 0.05), mat('#3fb7ec', { roughness: 0.3 }), cx, 0.02, MARK_FRAM - 0.1); banGrupp.add(kant); }
    }
    // gräs och blommor längs framkanten
    if (mt === 'gras' || mt === 'sand') {
      const tuvor = [], blommor = [];
      for (const m of bana.mark) for (let x = X(m.x) + 0.3; x < X(m.x + m.w) - 0.3; x += 0.35) {
        const h = hash(x * 3.1);
        if (mt === 'gras') tuvor.push([x + h * 0.2, MARK_FRAM - 0.15 - hash(x) * 0.3]);
        if (h > 0.82) tuvor.push([x, -1 - hash(x * 7) * 4]);
        if (mt === 'gras' && h > 0.86) blommor.push([x, MARK_FRAM - 0.4 - hash(x * 5) * 0.6, Math.floor(hash(x * 9) * 4)]);
      }
      if (mt === 'gras') {
        const tg = new THREE.ConeGeometry(0.06, 0.32, 5);
        const im = new THREE.InstancedMesh(tg, mat('#5fbf7a', { roughness: 0.8 }), tuvor.length);
        tuvor.forEach(([x, z], i) => { tmpE.set(hash(i) * 0.4 - 0.2, 0, hash(i * 3) * 0.4 - 0.2); tmpQ.setFromEuler(tmpE); tmpM.compose(tmpP.set(x, 0.13, z), tmpQ, tmpS.set(1, 0.6 + hash(i * 5), 1)); im.setMatrixAt(i, tmpM); });
        banGrupp.add(im);
      }
      const bf = ['#ff8fc8', '#ffd23f', '#b48cff', '#ffffff'];
      for (const [x, z, f] of blommor) {
        banGrupp.add(mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.35, 4), mat('#4f9f66'), x, 0.17, z, false));
        for (let k = 0; k < 5; k++) { const v = k / 5 * Math.PI * 2; const p = mesh(KLOT_L, mat(bf[f], { roughness: 0.5 }), x + Math.cos(v) * 0.07, 0.37, z + Math.sin(v) * 0.07, false); p.scale.set(0.06, 0.03, 0.06); banGrupp.add(p); }
        const mm = mesh(KLOT_L, mat('#ffcf3a'), x, 0.38, z, false); mm.scale.setScalar(0.04); banGrupp.add(mm);
      }
      if (mt === 'sand') for (let i = 0; i < bana.bredd / 120; i++) { // snäckor och sjöstjärnor
        const x = hash(i * 4.7) * B, m = bana.mark.find(mm => X(mm.x) < x - 0.3 && X(mm.x + mm.w) > x + 0.3); if (!m) continue;
        const z = MARK_FRAM - 0.4 - hash(i) * 2;
        if (hash(i * 9) > 0.5) { const s = mesh(KLOT_L, mat(hash(i) > 0.5 ? '#ffc0d4' : '#fff1dc', { roughness: 0.4 }), x, 0.02, z); s.scale.set(0.14, 0.07, 0.12); banGrupp.add(s); }
        else { const st = new THREE.Group(); for (let k = 0; k < 5; k++) { const a = mesh(new THREE.ConeGeometry(0.05, 0.2, 5), mat('#ff8a5c', { roughness: 0.6 })); a.rotation.z = -Math.PI / 2; a.position.x = 0.09; const p = new THREE.Group(); p.rotation.y = k / 5 * Math.PI * 2; p.add(a); st.add(p); } st.position.set(x, 0.03, z); banGrupp.add(st); }
      }
    }

    // plattformar
    for (const p of bana.plattformar) banGrupp.add(byggPlattform(p, bana.tema));
    // flottar
    bana.flottar.forEach((f) => { const g = byggFlotte(f, bana.tema); banGrupp.add(g); nu.flottar.push(g); });
    // badringar
    const ringMat = texMat(TEX.rand('#ff4f93', '#ffffff', 16), { roughness: 0.25 });
    bana.ringar.forEach((r) => {
      const g = new THREE.Group(); g.position.set(X(r.x + 32), 0, 0);
      const t = mesh(new THREE.TorusGeometry(0.58, 0.24, 18, 40), ringMat, 0, 0.24, 0); t.rotation.x = Math.PI / 2; g.add(t);
      g.userData.t = t; banGrupp.add(g); nu.ringar.push(g);
    });
    // grindar
    bana.dorrar.forEach((d) => { const g = byggGrind(d, bana.tema); banGrupp.add(g); nu.dorrar.push(g); });
    // fiender
    bana.fiender.forEach((f) => {
      const g = f.typ === 'boll' ? byggBoll() : byggKrabba();
      g.userData.yr = byggYrStjarnor(); banGrupp.add(g.userData.yr);
      banGrupp.add(g); nu.fiender.push(g);
    });
    // ankor
    bana.ankor.forEach((a) => { const g = byggAnka(false); g.position.set(X(a.x + 15), Y(a.y + 14), 0); banGrupp.add(g); nu.ankor.push(g); });
    nu.guld = byggAnka(true); nu.guld.position.set(X(bana.guld.x + 15), Y(bana.guld.y + 14), 0); banGrupp.add(nu.guld);
    // badkläder
    if (bana.badklader) {
      const g = new THREE.Group(); g.position.set(X(bana.badklader.x + 16), Y(bana.badklader.y + 10), 0);
      const vaska = mesh(new RoundedBoxGeometry(0.62, 0.42, 0.25, 3, 0.08), texMat(TEX.prickar, { roughness: 0.4 }), 0, 0, 0); g.add(vaska);
      const handtag = mesh(new THREE.TorusGeometry(0.17, 0.035, 8, 20, Math.PI), mat('#ff6fae'), 0, 0.2, 0); g.add(handtag);
      const glod = sprite(TEX.glod, [1.6, 1.6], 0, 0, -0.2, true); glod.material.color.set('#ff9ad5'); g.add(glod);
      const skylt = sprite(textTex('👙 Badkläder!', 420), [1.9, 0.42], 0, 0.75, 0); g.add(skylt);
      banGrupp.add(g); nu.badklader = g;
    }
    // mål
    if (bana.mal.typ === 'buss') banGrupp.add(byggHallplats(X(bana.mal.x), 0));
    else { nu.pool = byggPool(X(bana.mal.x)); banGrupp.add(nu.pool); }
    nu.buss = byggBuss(); nu.buss.visible = false; banGrupp.add(nu.buss);
    // Charlies hus
    if (bana.tema === 'stad') { const hus = byggCharliesHus(); hus.position.set(X(190), 0, -2.6); banGrupp.add(hus); }

    byggBakgrund(bana, B);

    // fjärilar / måsar
    const hav = tema.bak === 'hav';
    for (let i = 0; i < 6; i++) {
      const g = new THREE.Group();
      if (hav) {
        const vm = mat('#ffffff', { roughness: 0.6 });
        for (const sx of [-1, 1]) { const piv = new THREE.Group(); const v = mesh(new THREE.BoxGeometry(0.5, 0.03, 0.14), vm, sx * 0.25, 0, 0, false); piv.add(v); g.add(piv); }
        const kr = mesh(KLOT_L, vm, 0, 0, 0, false); kr.scale.set(0.16, 0.07, 0.07); g.add(kr);
      } else {
        const f = ['#ff8fc8', '#ffd23f', '#8fd0ff', '#b48cff'][i % 4];
        const vm = mat(f, { roughness: 0.5, side: THREE.DoubleSide, emissive: f, emissiveIntensity: 0.2 });
        for (const sx of [-1, 1]) { const piv = new THREE.Group(); const v = mesh(new THREE.CircleGeometry(0.13, 10), vm, sx * 0.12, 0, 0, false); v.scale.set(1, 1.3, 1); piv.add(v); g.add(piv); }
      }
      g.userData = { x: hash(i * 3) * B, y: 3 + hash(i * 5) * 5, z: -2 - hash(i * 7) * 6, fas: hash(i) * 6, fart: 0.01 + hash(i * 11) * 0.015 };
      banGrupp.add(g); nu.djur.push(g);
    }
  }

  function byggPlattform(p, t) {
    const w = X(p.w), g = new THREE.Group(); g.position.set(X(p.x) + w / 2, Y(p.y), 0);
    if (t === 'glass') {
      const t2 = TEX.vafflor.clone(); t2.repeat.set(w, 1); t2.needsUpdate = true;
      g.add(mesh(new RoundedBoxGeometry(w, 0.5, 1.6, 3, 0.12), new THREE.MeshStandardMaterial({ map: t2, roughness: 0.8 }), 0, -0.27, 0));
      const f = ['#ffb3d1', '#fff1c9', '#b8e9d1', '#d3c1ff'][Math.floor(p.x / 100) % 4];
      const gm = mat(f, { roughness: 0.35 });
      g.add(mesh(new RoundedBoxGeometry(w + 0.1, 0.16, 1.7, 3, 0.07), gm, 0, -0.04, 0));
      for (let x = -w / 2 + 0.2; x < w / 2 - 0.1; x += 0.45) { const d = mesh(KLOT, gm, x, -0.15, 0.82); d.scale.set(0.11, 0.17 + hash(x * 9) * 0.12, 0.08); g.add(d); }
      for (let i = 0; i < 6; i++) { const s = mesh(new THREE.CapsuleGeometry(0.018, 0.07, 2, 4), mat(['#ff5f9e', '#ffd23f', '#5fc4f0', '#7fe0a3'][i % 4]), (hash(i + p.x) - 0.5) * w * 0.9, 0.06, (hash(i * 3 + p.x) - 0.5) * 1.2, false); s.rotation.z = hash(i * 5) * 3; s.rotation.x = Math.PI / 2; g.add(s); }
    } else if (t === 'brygga' || t === 'strand') {
      g.add(mesh(new RoundedBoxGeometry(w, 0.4, 1.8, 2, 0.06), markMaterial('tra', w, 1.8), 0, -0.2, 0));
      if (p.y > 400 && t === 'brygga') for (const z of [-0.6, 0.6]) g.add(mesh(new THREE.CylinderGeometry(0.13, 0.15, 3, 8), mat('#7a5236', { roughness: 0.9 }), 0, -1.8, z));
    } else if (t === 'vattenpark') {
      g.add(mesh(new RoundedBoxGeometry(w, 0.45, 1.8, 3, 0.12), mat('#ffffff', { roughness: 0.2 }), 0, -0.23, 0));
      g.add(mesh(new RoundedBoxGeometry(w + 0.06, 0.12, 1.86, 2, 0.05), mat('#3fb7ec', { roughness: 0.25 }), 0, -0.02, 0));
      for (let x = -w / 2 + 0.25; x < w / 2; x += 0.5) in_(g, mesh(KLOT_L, mat('#ffd23f', { emissive: '#ffb800', emissiveIntensity: 0.3 }), x, -0.3, 0.91, false)).scale.setScalar(0.05);
    } else {
      g.add(mesh(new RoundedBoxGeometry(w, 0.5, 1.8, 3, 0.14), mat(t === 'park' ? '#b98fd0' : '#c39ae0', { roughness: 0.6 }), 0, -0.27, 0));
      if (t === 'park') { const tg = TEX.gras.clone(); tg.repeat.set(w / 2, 1); tg.needsUpdate = true; g.add(mesh(new RoundedBoxGeometry(w + 0.08, 0.15, 1.88, 2, 0.07), new THREE.MeshStandardMaterial({ map: tg, roughness: 0.9 }), 0, -0.02, 0)); }
      else g.add(mesh(new RoundedBoxGeometry(w + 0.04, 0.12, 1.84, 2, 0.05), mat('#ead7f5', { roughness: 0.5 }), 0, -0.02, 0));
    }
    return g;
  }
  function byggFlotte(f, t) {
    const w = X(f.w), g = new THREE.Group();
    if (t === 'vattenpark' || t === 'glass') {
      const farg = t === 'glass' ? '#bfe6ff' : '#ff8fc8';
      g.add(mesh(new RoundedBoxGeometry(w, 0.4, 1.5, 4, 0.18), mat(farg, { roughness: 0.25 }), 0, -0.2, 0));
      g.add(mesh(new RoundedBoxGeometry(w - 0.3, 0.06, 1.1, 2, 0.03), mat('#ffffff', { roughness: 0.3, transparent: true, opacity: 0.6 }), 0, 0.01, 0));
      if (t === 'glass') for (let i = 0; i < 4; i++) { const m = mesh(KLOT_L, mat('#ffffff', { roughness: 1, emissive: '#ffffff', emissiveIntensity: 0.3 }), (i - 1.5) * 0.5, -0.45, 0, false); m.scale.setScalar(0.32); g.add(m); }
    } else {
      for (let z = -0.6; z <= 0.61; z += 0.3) { const s = mesh(new THREE.CylinderGeometry(0.16, 0.16, w, 10), mat(z === 0 ? '#b07a4c' : '#c48b59', { roughness: 0.85 }), 0, -0.16, z); s.rotation.z = Math.PI / 2; g.add(s); }
      for (const x of [-w / 2 + 0.25, w / 2 - 0.25]) g.add(mesh(new THREE.BoxGeometry(0.12, 0.08, 1.5), mat('#e0c08a', { roughness: 0.8 }), x, 0.0, 0));
    }
    return g;
  }
  function byggGrind(d, t) {
    const g = new THREE.Group(); g.position.set(X(d.x + 25), 0, 0);
    const H = 13;
    const vaggM = t === 'park' ? (() => { const tx = TEX.lov.clone(); tx.repeat.set(1, 8); tx.needsUpdate = true; return new THREE.MeshStandardMaterial({ map: tx, roughness: 0.9 }); })()
      : mat({ glass: '#ffc4dd', brygga: '#c99566', strand: '#d9a372', vattenpark: '#8fd8f7', stad: '#c7a6ec' }[t] || '#c7a6ec', { roughness: 0.6 });
    const vagg = mesh(new RoundedBoxGeometry(1.3, H, 2.4, 3, 0.2), vaggM, 0, H / 2, -0.1); g.add(vagg);
    if (t !== 'park') for (let y = 3.2; y < H - 0.5; y += 1.6) g.add(mesh(new RoundedBoxGeometry(1.36, 0.25, 2.46, 2, 0.08), mat('#ffffff', { roughness: 0.5, transparent: true, opacity: 0.6 }), 0, y, -0.1));
    const dorr = mesh(new RoundedBoxGeometry(1.0, 2.2, 0.2, 3, 0.08), mat('#a86d2c', { roughness: 0.55 }), 0, 1.1, 1.12); g.add(dorr);
    g.add(mesh(new RoundedBoxGeometry(0.82, 0.9, 0.08, 2, 0.04), mat('#8a5622', { roughness: 0.6 }), 0, 1.6, 1.22));
    g.add(mesh(new RoundedBoxGeometry(0.82, 0.7, 0.08, 2, 0.04), mat('#8a5622', { roughness: 0.6 }), 0, 0.55, 1.22));
    in_(g, mesh(KLOT, mat('#ffd23f', { metalness: 1, roughness: 0.25 }), 0.35, 1.1, 1.28)).scale.setScalar(0.07);
    const lass = sprite(emojiTex('🔒'), [0.55, 0.55], 0, 1.95, 1.4); g.add(lass);
    const skylt = sprite(emojiTex({ matte: '🔢', engelska: '🇬🇧', rakna: '🍦' }[d.typ], '#ffffff'), [1.15, 1.15], 0, 3.0, 1.3); g.add(skylt);
    g.userData.skylt = skylt;
    const hint = sprite(textTex('Gå fram till grinden! 👉', 560), [3.0, 0.52], -1.6, 4.2, 1.3); g.add(hint); g.userData.hint = hint;
    return g;
  }
  function byggHallplats(x) {
    const g = new THREE.Group(); g.position.set(x + 0.5, 0, -0.9);
    g.add(mesh(new THREE.CylinderGeometry(0.07, 0.07, 3.0, 10), mat('#9aa7b3', { metalness: 0.6, roughness: 0.3 }), 0, 1.5, 0));
    const skylt = sprite(emojiTex('🚌', '#0f86c9'), [1.1, 1.1], 0, 3.1, 0.1); g.add(skylt);
    g.add(mesh(new RoundedBoxGeometry(1.8, 0.12, 0.5, 2, 0.04), mat('#b07a4c'), 1.2, 0.55, 0));
    for (const bx of [0.5, 1.9]) g.add(mesh(new THREE.BoxGeometry(0.08, 0.55, 0.4), mat('#6d5a50'), bx, 0.27, 0));
    g.add(mesh(new RoundedBoxGeometry(2.2, 2.1, 0.08, 2, 0.04), mat('#bfe8ff', { transparent: true, opacity: 0.35, roughness: 0.05 }), 1.2, 1.15, -0.5));
    g.add(mesh(new RoundedBoxGeometry(2.4, 0.12, 0.9, 2, 0.04), mat('#0f86c9', { roughness: 0.4 }), 1.2, 2.25, -0.15));
    const t = sprite(textTex('🚏 Bussen!', 420, '#143a52'), [1.9, 0.42], 0.4, 3.95, 0.2); g.add(t);
    return g;
  }
  function byggBuss() {
    const g = new THREE.Group();
    g.add(mesh(new RoundedBoxGeometry(5.0, 1.75, 2.0, 4, 0.3), mat('#ffca28', { roughness: 0.35, metalness: 0.1 }), 0, 1.15, 0));
    g.add(mesh(new RoundedBoxGeometry(5.04, 0.35, 2.04, 2, 0.1), mat('#f08c00', { roughness: 0.4 }), 0, 0.45, 0));
    const glas = mat('#9fdcff', { roughness: 0.05, metalness: 0.2 });
    for (let i = 0; i < 4; i++) g.add(mesh(new RoundedBoxGeometry(0.85, 0.65, 0.06, 2, 0.05), glas, -1.85 + i * 1.05, 1.45, 1.0));
    g.add(mesh(new RoundedBoxGeometry(0.06, 0.8, 1.6, 2, 0.03), glas, 2.5, 1.4, 0));
    for (const wx of [-1.5, 1.5]) for (const wz of [-0.85, 0.85]) {
      const h = mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.3, 20), mat('#263238', { roughness: 0.8 }), wx, 0.38, wz); h.rotation.x = Math.PI / 2; g.add(h);
      const n = mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.32, 12), mat('#cfd8dc', { metalness: 0.8, roughness: 0.3 }), wx, 0.38, wz); n.rotation.x = Math.PI / 2; g.add(n);
    }
    in_(g, mesh(KLOT, mat('#fff7c2', { emissive: '#fff2a0', emissiveIntensity: 0.8 }), 2.5, 0.75, 0.6)).scale.setScalar(0.12);
    const skylt = sprite(textTex('POOLPARTY 🌴', 520, '#ff4f97'), [2.2, 0.4], -0.6, 0.85, 1.12); g.add(skylt);
    const passagerare = new THREE.Group(); passagerare.position.set(-0.8, 1.38, 0.6);
    const hu = mesh(KLOT, mat('#ffd2b2'), 0, 0, 0); hu.scale.setScalar(0.24); passagerare.add(hu);
    const hr = mesh(new THREE.SphereGeometry(0.255, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.45), mat('#7a4522'), 0, 0.02, 0); passagerare.add(hr);
    passagerare.visible = false; g.add(passagerare); g.userData.passagerare = passagerare;
    return g;
  }
  function byggPool(x) {
    const g = new THREE.Group(); g.position.set(x, 0, 0);
    // poolkant och vatten (poolen i 2D gick från mal.x-30 till mal.x+170)
    const cx = 1.75;
    const kant = mat('#f2f7fa', { roughness: 0.3 });
    for (const [w, d, x, z] of [[5.6, 0.3, cx, 1.25], [5.6, 0.3, cx, -1.65], [0.3, 2.6, cx - 2.65, -0.2], [0.3, 2.6, cx + 2.65, -0.2]]) g.add(mesh(new RoundedBoxGeometry(w, 0.42, d, 2, 0.1), kant, x, 0.21, z));
    const tk = TEX.kakel.clone(); tk.repeat.set(3, 1.5); tk.needsUpdate = true;
    g.add(mesh(new THREE.BoxGeometry(5.0, 0.04, 2.6), new THREE.MeshStandardMaterial({ map: tk, color: '#9fe6ff', roughness: 0.3 }), cx, 0.02, -0.2));
    const pv = new THREE.Mesh(new THREE.PlaneGeometry(5.0, 2.6, 40, 20), vattenMaterial('#2cc9f2', '#2cc9f2', '#8fe8ff'));
    pv.rotation.x = -Math.PI / 2; pv.position.set(cx, 0.3, -0.2); g.add(pv); vatten.push(pv);
    const stege = new THREE.Group(); for (const sx of [-0.2, 0.2]) { const r = mesh(new THREE.TorusGeometry(0.25, 0.03, 8, 16, Math.PI), mat('#cfd8dc', { metalness: 0.9, roughness: 0.2 }), sx, 0.42, 0); stege.add(r); } stege.position.set(cx - 2.0, 0, 1.25); g.add(stege);
    // parasoll
    const par = new THREE.Group(); par.position.set(cx + 2.4, 0, -1.2);
    par.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 3, 8), mat('#ffffff'), 0, 1.5, 0));
    par.add(mesh(new THREE.ConeGeometry(1.5, 0.6, 16, 1, true), texMat(TEX.rand('#ff5a5a', '#ffffff', 16), { side: THREE.DoubleSide, roughness: 0.6 }), 0, 3.0, 0));
    g.add(par);
    // ballonger
    g.userData.ballonger = [];
    ['#ff6fae', '#ffd23f', '#7fd4ff', '#b48cff', '#7fe0a3'].forEach((f, i) => {
      const b = new THREE.Group(); b.position.set(-1 + i * 1.2, 5 + hash(i) * 0.6, -1.2 - hash(i * 3) * 0.6);
      const k = mesh(KLOT, mat(f, { roughness: 0.15 })); k.scale.set(0.42, 0.52, 0.42); b.add(k);
      const snore = mesh(new THREE.CylinderGeometry(0.008, 0.008, 4, 3), mat('#ffffff'), 0, -2.4, 0, false); b.add(snore);
      g.add(b); g.userData.ballonger.push(b);
    });
    // ljusslinga
    for (let i = 0; i < 14; i++) { const t = i / 13, lx = -1.2 + t * 6.4, ly = 4.1 - Math.sin(t * Math.PI) * 0.7; const l = mesh(KLOT_L, mat(['#ff6fae', '#ffd23f', '#7fd4ff', '#7fe0a3'][i % 4], { emissive: ['#ff6fae', '#ffd23f', '#7fd4ff', '#7fe0a3'][i % 4], emissiveIntensity: 1.2 }), lx, ly, -1.6, false); l.scale.setScalar(0.08); g.add(l); }
    // flytande ankor
    g.userData.flyt = [0.3, 2.9, 3.4].map((ax, i) => { const a = byggAnka(i === 2); a.scale.setScalar(0.8); a.position.set(ax, 0.42, -0.5 + i * 0.3); g.add(a); return a; });
    g.userData.flyt[2].visible = false;
    const skylt = sprite(textTex('🏊 Poolpartyt!', 460, '#143a52'), [2.3, 0.45], cx, 6.6, -1.3); g.add(skylt);
    return g;
  }
  function byggCharliesHus() {
    const g = new THREE.Group();
    g.add(mesh(new RoundedBoxGeometry(4.2, 3.6, 3.2, 3, 0.15), mat('#ffe0b2', { roughness: 0.7 }), 0, 1.8, 0));
    const tak = mesh(new THREE.CylinderGeometry(0.01, 3.0, 1.8, 4, 1), mat('#e2533a', { roughness: 0.6 }), 0, 4.5, 0); tak.rotation.y = Math.PI / 4; tak.scale.set(1.15, 1, 0.82); g.add(tak);
    g.add(mesh(new THREE.BoxGeometry(0.45, 1.1, 0.45), mat('#ffffff'), 1.0, 4.9, -0.4));
    g.add(mesh(new RoundedBoxGeometry(1.0, 1.7, 0.15, 2, 0.05), mat('#7a4a3a', { roughness: 0.5 }), 0, 0.85, 1.62));
    in_(g, mesh(KLOT, mat('#ffd23f', { metalness: 1, roughness: 0.3 }), 0.32, 0.85, 1.72)).scale.setScalar(0.06);
    for (const wx of [-1.35, 1.35]) {
      g.add(mesh(new RoundedBoxGeometry(0.95, 0.95, 0.1, 2, 0.04), mat('#9fdcff', { roughness: 0.05, metalness: 0.2 }), wx, 2.3, 1.62));
      g.add(mesh(new THREE.BoxGeometry(0.06, 0.95, 0.14), mat('#ffffff'), wx, 2.3, 1.64)); g.add(mesh(new THREE.BoxGeometry(0.95, 0.06, 0.14), mat('#ffffff'), wx, 2.3, 1.64));
      g.add(mesh(new RoundedBoxGeometry(1.05, 0.25, 0.3, 2, 0.05), mat('#ff8fc8'), wx, 1.72, 1.7));
      for (let k = 0; k < 4; k++) in_(g, mesh(KLOT_L, mat(['#ff5f9e', '#ffd23f', '#ffffff', '#b48cff'][k]), wx - 0.35 + k * 0.23, 1.9, 1.75, false)).scale.setScalar(0.08);
    }
    const skylt = sprite(textTex('CHARLIE', 360, '#7a4a3a'), [1.4, 0.36], 0, 3.25, 1.7); g.add(skylt);
    return g;
  }

  // ---------------- Bakgrund per tema ----------------
  function byggBakgrund(bana, B) {
    const t = bana.tema;
    const lagg = (o, x, y, z) => { o.position.set(x, y, z); banGrupp.add(o); return o; };
    for (let i = 0; i < 14; i++) { const m = byggMoln(1.2 + hash(i * 3) * 1.4); lagg(m, -20 + hash(i * 5) * (B + 60), 13 + hash(i * 7) * 9, -45 - hash(i * 9) * 50); nu.moln.push(m); }
    if (t === 'stad') {
      const f = ['#cdb4f0', '#ffc6e3', '#b8e3ff', '#ffd9b8', '#c6f0e0', '#fff1b8'];
      for (let x = -14, i = 0; x < B + 20; x += 4.6 + hash(i) * 1.5, i++) {
        if (x > 2 && x < 9) continue; // plats för Charlies hus
        const h = byggHus(3.2 + hash(i * 2) * 1.2, 3 + hash(i * 3) * 3.5, f[i % f.length], ['#e2533a', '#9b6fd1', '#ff7fa8', '#5fa8d9'][i % 4]); lagg(h, x, 0, -8.5 - hash(i * 4) * 2);
      }
      for (let x = -20, i = 0; x < B + 30; x += 6 + hash(i) * 3, i++) { const h = byggHus(4 + hash(i) * 2, 6 + hash(i * 3) * 7, f[(i + 3) % f.length], '#b98fd0'); lagg(h, x, 0, -24 - hash(i * 5) * 8); }
      for (let x = 0, i = 0; x < B + 10; x += 5 + hash(i * 7) * 6, i++) lagg(byggPalm(3.5 + hash(i) * 1.5, 1), x, 0, -5 - hash(i * 3) * 1.5);
    } else if (t === 'park') {
      for (let i = 0; i < 18; i++) { const k = mesh(KLOT, mat(['#9fd9a8', '#b6e4b9', '#cdb9f0'][i % 3], { roughness: 1 }), -30 + i * ((B + 60) / 18), -6 - hash(i) * 3, -45 - hash(i * 3) * 30, false); k.scale.set(14 + hash(i) * 8, 10 + hash(i * 5) * 6, 10); banGrupp.add(k); }
      for (let x = -6, i = 0; x < B + 10; x += 3.2 + hash(i) * 2.8, i++) lagg(byggPalm(3.6 + hash(i * 2) * 1.8, 1), x, 0, -5 - hash(i * 3) * 9);
      for (let x = -6, i = 0; x < B + 10; x += 2.5 + hash(i) * 3, i++) { const b = new THREE.Group(); for (let k = 0; k < 4; k++) { const s = mesh(KLOT_L, mat('#5fb87c', { roughness: 0.9 }), (k - 1.5) * 0.4, 0.3, hash(k + i) * 0.3); s.scale.setScalar(0.45 + hash(k * 3 + i) * 0.2); b.add(s); } for (let k = 0; k < 5; k++) { const bl = mesh(KLOT_L, mat(['#ff8fc8', '#ffd23f', '#ffffff'][k % 3], { emissive: '#ffffff', emissiveIntensity: 0.1 }), (hash(k * 7 + i) - 0.5) * 1.4, 0.4 + hash(k + i * 3) * 0.4, 0.4, false); bl.scale.setScalar(0.08); b.add(bl); } lagg(b, x, 0, -4.6 - hash(i * 9) * 1); }
    } else if (t === 'glass') {
      const ft = [['#ff8fc0', '#ffffff'], ['#7fc8f5', '#ffffff'], ['#b48cff', '#ffffff'], ['#ffc46b', '#ffffff']];
      for (let x = -8, i = 0; x < B + 12; x += 6.5, i++) {
        const k = new THREE.Group();
        k.add(mesh(new RoundedBoxGeometry(4.2, 3.4, 2.4, 3, 0.15), mat('#fff6ef', { roughness: 0.6 }), 0, 1.7, 0));
        k.add(mesh(new RoundedBoxGeometry(3.4, 1.4, 0.1, 2, 0.05), mat('#a6dcf5', { roughness: 0.05, metalness: 0.2 }), 0, 2.0, 1.22));
        k.add(mesh(new RoundedBoxGeometry(4.4, 0.25, 0.8, 2, 0.08), mat('#ffffff'), 0, 1.15, 1.5));
        const m = mesh(new THREE.CylinderGeometry(0.75, 0.75, 4.6, 24, 1, true, 0, Math.PI), texMat(TEX.rand(ft[i % 4][0], ft[i % 4][1], 14), { side: THREE.DoubleSide, roughness: 0.6 }), 0, 3.4, 1.2);
        m.rotation.z = Math.PI / 2; m.rotation.y = 0; k.add(m);
        const sk = sprite(emojiTex(['🍦', '🍨', '🍧', '🍭'][i % 4], '#ffffff'), [1.2, 1.2], 0, 4.7, 1.2); k.add(sk);
        lagg(k, x, 0, -7.5);
        if (i % 2 === 0) { // jätteglass
          const jg = new THREE.Group();
          const strut = mesh(new THREE.ConeGeometry(0.9, 3.4, 24), new THREE.MeshStandardMaterial({ map: TEX.vafflor, roughness: 0.8 }), 0, 1.7, 0); strut.rotation.x = Math.PI; jg.add(strut);
          [['#ffb3d1', -0.45, 3.6], ['#fff1c9', 0.45, 3.6], ['#b8e9d1', 0, 4.3]].forEach(([f, x, y]) => { const k2 = mesh(KLOT, mat(f, { roughness: 0.4 }), x, y, 0); k2.scale.setScalar(0.85); jg.add(k2); });
          in_(jg, mesh(KLOT, mat('#ff2d55', { roughness: 0.15 }), 0, 5.2, 0)).scale.setScalar(0.28);
          lagg(jg, x + 3.3, 0, -5.4);
        }
      }
      for (let x = -10, i = 0; x < B + 20; x += 7, i++) { const h = byggHus(5, 7 + hash(i) * 5, ['#ffd9e8', '#ffe8cc', '#e0d4ff'][i % 3], '#ff8fb8'); lagg(h, x, 0, -22); }
      // vimplar
      for (let x = -4, i = 0; x < B + 6; x += 6.5, i++) {
        const kurva = new THREE.QuadraticBezierCurve3(new V3(x, 6.2, -4), new V3(x + 3.25, 5.2, -4), new V3(x + 6.5, 6.2, -4));
        banGrupp.add(mesh(new THREE.TubeGeometry(kurva, 12, 0.015, 4), mat('#ffffff'), 0, 0, 0, false));
        for (let k = 1; k < 8; k++) { const p = kurva.getPoint(k / 8); const v = mesh(new THREE.ConeGeometry(0.2, 0.45, 3), mat(['#ff8fc8', '#ffd23f', '#8fd0ff', '#b48cff'][(k + i) & 3], { side: THREE.DoubleSide, roughness: 0.6 }), p.x, p.y - 0.25, p.z, false); v.rotation.x = Math.PI; v.scale.z = 0.15; banGrupp.add(v); }
      }
    } else if (t === 'brygga' || t === 'strand') {
      // segelbåtar
      for (let i = 0; i < 8; i++) {
        const b = new THREE.Group();
        b.add(mesh(new RoundedBoxGeometry(2.6, 0.6, 0.9, 3, 0.25), mat(['#d76a8d', '#4f8fd6', '#ffffff'][i % 3], { roughness: 0.4 }), 0, 0.1, 0));
        b.add(mesh(new THREE.CylinderGeometry(0.04, 0.04, 3.4, 6), mat('#ffffff'), 0.1, 1.9, 0));
        const s1 = new THREE.Shape(); s1.moveTo(0, 0); s1.lineTo(0, 3); s1.lineTo(1.3, 0); s1.closePath();
        b.add(mesh(new THREE.ShapeGeometry(s1), mat('#ffffff', { side: THREE.DoubleSide, roughness: 0.7 }), 0.15, 0.5, 0));
        const s2 = new THREE.Shape(); s2.moveTo(0, 0); s2.lineTo(0, 2.4); s2.lineTo(-1, 0); s2.closePath();
        b.add(mesh(new THREE.ShapeGeometry(s2), mat(['#ffd0e6', '#ffe9a8', '#bfe9ff'][i % 3], { side: THREE.DoubleSide, roughness: 0.7 }), 0.05, 0.5, 0));
        b.scale.setScalar(1 + hash(i) * 0.8);
        lagg(b, -10 + hash(i * 3) * (B + 30), -0.3, -25 - hash(i * 5) * 50); nu.batar.push(b);
      }
      if (t === 'brygga') { // fyr på en ö
        const o = new THREE.Group();
        const ö = mesh(KLOT, mat('#9a8f7a', { roughness: 1 }), 0, -1.2, 0); ö.scale.set(7, 2.5, 5); o.add(ö);
        const fyr = mesh(new THREE.CylinderGeometry(0.7, 1.1, 7, 20), texMat((() => { const tx = TEX.rand('#ffffff', '#ff6f8f', 2); tx.rotation = Math.PI / 2; tx.repeat.set(1, 3); return tx; })(), { roughness: 0.5 }), 0, 4.5, 0); o.add(fyr);
        o.add(mesh(new THREE.CylinderGeometry(0.75, 0.75, 1, 16), mat('#fff6b0', { emissive: '#fff2a0', emissiveIntensity: 0.6, roughness: 0.1 }), 0, 8.5, 0));
        o.add(mesh(new THREE.ConeGeometry(0.95, 1, 16), mat('#ff6f8f'), 0, 9.5, 0));
        for (let k = 0; k < 3; k++) in_(o, byggPalm(4, 1)).position.set(-4 + k * 3, 0, 1);
        lagg(o, B * 0.55, 0, -70);
      } else { // strand: palmer, parasoll och solstolar på stranden bakom
        const strand = new THREE.Mesh(new THREE.PlaneGeometry(B + 120, 14), (() => { const tx = TEX.sand.clone(); tx.repeat.set((B + 120) / 3, 5); tx.needsUpdate = true; return new THREE.MeshStandardMaterial({ map: tx, roughness: 1 }); })());
        strand.rotation.x = -Math.PI / 2; strand.position.set(B / 2, -0.2, -14); strand.receiveShadow = true; banGrupp.add(strand);
        for (let x = -8, i = 0; x < B + 10; x += 4 + hash(i) * 4, i++) {
          if (i % 3 === 1) {
            const p = new THREE.Group(); const f = ['#ff6f8f', '#5fc4f0', '#ffd23f'][i % 3];
            p.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.6, 8), mat('#ffffff'), 0, 1.3, 0));
            p.add(mesh(new THREE.ConeGeometry(1.5, 0.6, 16, 1, true), texMat(TEX.rand(f, '#ffffff', 16), { side: THREE.DoubleSide }), 0, 2.6, 0));
            const st = mesh(new RoundedBoxGeometry(0.8, 0.12, 1.8, 2, 0.04), mat(f, { roughness: 0.6 }), 0.9, 0.35, 0.3); st.rotation.x = -0.15; p.add(st);
            lagg(p, x, -0.2, -11 - hash(i * 3) * 4);
          } else lagg(byggPalm(4 + hash(i) * 1.6, 1, true), x, -0.2, -10 - hash(i * 3) * 7);
        }
      }
    } else if (t === 'vattenpark') {
      const f = ['#ff6fae', '#ffd23f', '#5fd38b', '#9b7bff', '#3fb7ec'];
      for (let x = -6, i = 0; x < B + 10; x += 11, i++) {
        const torn = new THREE.Group();
        const th = 6 + hash(i) * 3;
        torn.add(mesh(new RoundedBoxGeometry(2, th, 2, 2, 0.12), mat('#e9f7ff', { roughness: 0.5 }), 0, th / 2, 0));
        torn.add(mesh(new RoundedBoxGeometry(2.6, 0.3, 2.6, 2, 0.1), mat(f[i % 5], { roughness: 0.4 }), 0, th, 0));
        in_(torn, mesh(new THREE.ConeGeometry(1.8, 1.2, 4), mat(f[(i + 2) % 5], { roughness: 0.5 }), 0, th + 0.9, 0)).rotation.y = Math.PI / 4;
        const pts = []; for (let k = 0; k <= 30; k++) { const tt = k / 30, v = tt * Math.PI * 3.2; pts.push(new V3(1.2 + Math.cos(v) * 1.8 + tt * 4, th - tt * (th - 0.4), Math.sin(v) * 1.8)); }
        const tub = mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 120, 0.38, 14), mat(f[(i + 1) % 5], { roughness: 0.2 }));
        torn.add(tub);
        lagg(torn, x, 0, -14 - hash(i * 3) * 6);
      }
      for (let x = -4, i = 0; x < B + 10; x += 5 + hash(i) * 4, i++) lagg(byggPalm(3.6 + hash(i) * 1.6, 1), x, 0, -6.5 - hash(i * 5) * 3);
      for (let x = 0, i = 0; x < B; x += 8, i++) { const s = new THREE.Group(); s.add(mesh(new RoundedBoxGeometry(0.8, 0.1, 1.8, 2, 0.04), mat(f[i % 5]), 0, 0.35, 0)); s.add(mesh(new THREE.BoxGeometry(0.7, 0.3, 0.06), mat('#ffffff'), 0, 0.15, 0.8)); lagg(s, x + 2, 0, -4.5); }
    }
  }

  // =============================================================
  //  RITA EN BILDRUTA
  // =============================================================
  let tid0 = performance.now();
  const forraKamera = new V3();
  function rita(d) {
    const { bana, s, kamX, tid, lage, partiklar, buss, fest, guldTagen, skak } = d;
    if (!nu) return;
    const t = (performance.now() - tid0) / 1000;
    const B = X(bana.bredd);

    // kamera (samma utsnitt som 2D-versionen: 24 × 13,5 enheter)
    const cx = X(kamX) + 12;
    const sk = skak > 0 ? (Math.random() - 0.5) * skak * 0.012 : 0;
    kamera.position.set(cx + sk, 6.4 + sk, 17.2);
    kamera.lookAt(cx, 4.7, 0);
    himmel.position.copy(kamera.position);
    const solRikt = new V3(tema.solV, tema.solH, -1).normalize();
    solSkiva.position.copy(kamera.position).addScaledVector(solRikt, 300);
    solKarna.position.copy(solSkiva.position);
    solSkiva.scale.setScalar(tema.solnedgang ? 120 : 80); solKarna.scale.setScalar(tema.solnedgang ? 46 : 30);
    sol.position.set(cx - 8 + tema.solV * 10, 20, 14);
    sol.target.position.set(cx, 0, 0);
    for (const v of vatten) { v.material.uniforms.uTid.value = t; v.material.uniforms.uKam.value.copy(kamera.position); }

    // Charlie
    const C = charlie, D = C.D;
    if (C.badklader !== s.badklader) {
      C.badklader = s.badklader;
      D.klanning.visible = !s.badklader; D.rosett.visible = !s.badklader;
      D.baddrakt.visible = s.badklader; D.blomma.visible = s.badklader;
      for (const b of D.ben) b.b.material = s.badklader ? C.hud : C.legging;
    }
    const synlig = s.synlig && !(s.osarbar > 0 && Math.floor(s.osarbar / 4) % 2 === 0 && lage === 'spel');
    C.rot.visible = synlig;
    C.rot.position.set(X(s.x + 13), Y(s.y + s.h) - (lage === 'fest' && fest.t > 50 ? 0.2 : 0), lage === 'fest' && fest.t > 50 ? -0.1 : 0);
    const malVand = lage === 'fest' && fest.t > 50 ? 0 : s.vand * 0.75;
    C.vand += (malVand - C.vand) * 0.2;
    C.kropp.rotation.y = C.vand;
    C.kropp.scale.set(s.sx, s.sy * (s.ducka ? 0.75 : 1), s.sx);
    const gar = Math.abs(s.vx) > 0.3 && s.paMark;
    const fas = s.gangFas;
    const luft = !s.paMark && !(lage === 'fest' && fest.t > 50);
    D.ben[0].piv.rotation.x = gar ? Math.sin(fas) * 0.7 : luft ? -0.5 : 0;
    D.ben[1].piv.rotation.x = gar ? -Math.sin(fas) * 0.7 : luft ? 0.3 : 0;
    D.armar[0].rotation.x = gar ? -Math.sin(fas) * 0.6 : 0; D.armar[1].rotation.x = gar ? Math.sin(fas) * 0.6 : 0;
    const armUpp = luft ? 2.3 : (lage === 'fest' && fest.t > 50) ? 2.6 + Math.sin(t * 6) * 0.3 : 0.25;
    D.armar[0].rotation.z = -armUpp; D.armar[1].rotation.z = armUpp;
    const gung = gar ? Math.abs(Math.sin(fas)) * 0.04 : s.paMark ? Math.sin(s.vila) * 0.012 : 0;
    D.huvud.position.y = 0.98 + gung; D.huvud.rotation.z = gar ? Math.sin(fas) * 0.04 : 0;
    D.svans.rotation.x = 0.3 + Math.sin(t * 5) * (gar ? 0.25 : 0.08) + (luft ? -s.vy * 0.04 : 0);
    D.svans.rotation.z = Math.sin(t * 3) * 0.1;
    const blink = s.blink > 0 || (lage === 'fest' && fest.t > 50 && Math.sin(t * 2) > 0.6);
    for (const o of D.ogon) o.scale.y = blink ? 0.15 : 1;
    D.mun.visible = s.knuff <= 0; D.munO.visible = s.knuff > 0;
    // skugga
    const pa = bana.mark.some(m => s.x + 13 > m.x && s.x + 13 < m.x + m.w) || s.flotte;
    D.skugga.visible = synlig && lage !== 'fest' && !!pa;
    let skuggY = 0.01; if (s.flotte) skuggY = Y(s.flotte.y) + 0.01;
    else for (const p of bana.plattformar) if (s.x + 13 > p.x && s.x + 13 < p.x + p.w && s.y + s.h <= p.y + 2) { skuggY = Math.max(skuggY, Y(p.y) + 0.01); }
    D.skugga.position.set(C.rot.position.x, skuggY, 0);
    const hojd = Math.max(0, C.rot.position.y - skuggY);
    D.skugga.scale.setScalar(Math.max(0.3, 1 - hojd * 0.15)); D.skugga.material.opacity = Math.max(0.05, 0.25 - hojd * 0.03);
    // poolen
    D.badring.visible = lage === 'fest' && fest.t > 50;

    // ankor
    bana.ankor.forEach((a, i) => { const g = nu.ankor[i]; if (!g) return; g.visible = !a.tagen; if (!a.tagen) { g.position.y = Y(a.y + 14) + Math.sin(t * 3 + a.x) * 0.06; g.rotation.y = -0.5 + Math.sin(t * 1.5 + a.x) * 0.35; } });
    nu.guld.visible = !guldTagen;
    if (!guldTagen) { nu.guld.rotation.y = t * 1.8; nu.guld.position.y = Y(bana.guld.y + 14) + Math.sin(t * 3) * 0.08; nu.guld.userData.glod.material.opacity = 0.55 + Math.sin(t * 5) * 0.25; }
    // badkläder
    if (nu.badklader) { nu.badklader.visible = !s.badklader; nu.badklader.position.y = Y(bana.badklader.y + 10) + Math.sin(t * 3) * 0.08; nu.badklader.children[0].rotation.y = Math.sin(t * 2) * 0.5; }
    // flottar
    bana.flottar.forEach((f, i) => { const g = nu.flottar[i]; g.position.set(X(f.x + f.w / 2), Y(f.y), 0); g.rotation.z = Math.sin(t * 2 + i) * 0.025; });
    // ringar
    bana.ringar.forEach((r, i) => { const g = nu.ringar[i]; const tr = r.tryck || 0; g.scale.set(1 + tr * 0.2, 1 - tr * 0.45, 1 + tr * 0.2); g.userData.t.rotation.z = t * 0.3; });
    // grindar
    bana.dorrar.forEach((dd, i) => {
      const g = nu.dorrar[i];
      const ease = dd.sank * dd.sank;
      g.position.y = -ease * 13.5; g.visible = dd.sank < 1;
      g.userData.hint.visible = !dd.lost && lage === 'spel' && Math.abs(s.x - dd.x) < 260 && s.x < dd.x;
      g.userData.hint.material.opacity = 0.65 + Math.sin(t * 5) * 0.3;
      g.userData.skylt.position.y = 3.0 + Math.sin(t * 2.5) * 0.08;
    });
    // fiender
    bana.fiender.forEach((f, i) => {
      const g = nu.fiender[i]; const yr = f.yr > 0;
      if (f.typ === 'boll') { g.position.set(X(f.x + 19), yr ? -0.06 : 0, 0); g.scale.set(1, yr ? 0.85 : 1, 1); g.userData.boll.rotation.z = -f.rot; }
      else {
        g.position.set(X(f.x + 22), 0, 0); g.rotation.y = yr ? Math.sin(t * 8) * 0.3 : f.riktning * 0.25;
        g.scale.set(1, yr ? 0.8 : 1, 1);
        g.userData.ben.forEach(({ piv, sx, j }) => { piv.rotation.x = yr ? 0 : Math.sin(t * 14 + j * 2 + sx) * 0.4; });
        g.userData.klor.forEach((k, ki) => { k.rotation.z = yr ? 0 : Math.sin(t * 5 + ki * 2) * 0.25; });
        g.userData.ogon.forEach(o => { o.position.x = Math.sign(o.position.x) * 0.13 + f.riktning * 0.015; });
      }
      const ys = g.userData.yr; ys.visible = yr;
      if (yr) { ys.position.set(g.position.x, f.typ === 'boll' ? 1.15 : 1.15, 0.2); ys.children.forEach((st, k) => { const v = t * 6 + k * 2.1; st.position.set(Math.cos(v) * 0.45, Math.sin(v * 2) * 0.05, Math.sin(v) * 0.45); st.rotation.y = t * 4; }); }
    });
    // buss
    if (lage === 'buss' || lage === 'klar') {
      nu.buss.visible = true; nu.buss.position.set(X(buss.x + 100), Math.abs(Math.sin(t * 8)) * 0.03, -0.6);
      nu.buss.userData.passagerare.visible = !s.synlig;
    } else nu.buss.visible = false;
    // pool
    if (nu.pool) {
      nu.pool.userData.ballonger.forEach((b, i) => { b.position.y = 5 + hash(i) * 0.6 + Math.sin(t * 1.3 + i) * 0.15; b.rotation.z = Math.sin(t + i) * 0.08; });
      nu.pool.userData.flyt.forEach((a, i) => { a.position.x = [0.3, 2.9, 3.4][i] + Math.sin(t * 0.6 + i * 2) * 0.35; a.rotation.y = Math.sin(t * 0.5 + i) * 0.8; a.position.y = 0.42 + Math.sin(t * 2 + i) * 0.03; });
      nu.pool.userData.flyt[2].visible = lage === 'fest' || d.finalKlar;
    }
    // moln, båtar, djur
    nu.moln.forEach((m, i) => { m.position.x += 0.004 + (i % 3) * 0.002; if (m.position.x > B + 50) m.position.x = -30; });
    nu.batar.forEach((b, i) => { b.position.y = -0.3 + Math.sin(t * 1.2 + i) * 0.08; b.rotation.z = Math.sin(t + i) * 0.04; });
    nu.djur.forEach((g) => {
      const u = g.userData; u.x += u.fart * 6; if (u.x > cx + 20) u.x = cx - 20; if (u.x < cx - 22) u.x = cx + 18;
      const vift = Math.sin(t * (tema.bak === 'hav' ? 5 : 16) + u.fas);
      g.position.set(u.x, u.y + Math.sin(t * 0.8 + u.fas) * 0.4, u.z);
      g.children.forEach((c, k) => { if (c.isGroup) c.rotation.z = (k === 0 ? 1 : -1) * vift * (tema.bak === 'hav' ? 0.35 : 1.1); });
      if (tema.bak !== 'hav') g.rotation.x = 0.6;
    });

    // partiklar
    let np = 0, nk = 0;
    for (const p of partiklar) {
      if (p.z === undefined) p.z = p.konfetti ? (Math.random() - 0.5) * 6 : 0.5;
      const alfa = Math.max(0, Math.min(1, p.liv / p.max * 1.5));
      if (p.konfetti) {
        if (nk >= MAXP) continue;
        tmpE.set(p.rot, p.rot * 0.7, p.rot * 1.3); tmpQ.setFromEuler(tmpE);
        tmpM.compose(tmpP.set(X(p.x), Y(p.y), p.z), tmpQ, tmpS.setScalar(p.r * 0.035));
        konfMesh.setMatrixAt(nk, tmpM); konfMesh.setColorAt(nk, tmpC.set(p.farg)); nk++;
      } else {
        if (np >= MAXP) continue;
        tmpM.compose(tmpP.set(X(p.x), Y(p.y), p.z), tmpQ.identity(), tmpS.setScalar(p.r * 0.022 * (0.4 + alfa * 0.6)));
        partMesh.setMatrixAt(np, tmpM); partMesh.setColorAt(np, tmpC.set(p.farg)); np++;
      }
    }
    partMesh.count = np; konfMesh.count = nk;
    partMesh.instanceMatrix.needsUpdate = true; konfMesh.instanceMatrix.needsUpdate = true;
    if (partMesh.instanceColor) partMesh.instanceColor.needsUpdate = true;
    if (konfMesh.instanceColor) konfMesh.instanceColor.needsUpdate = true;

    renderer.render(scen, kamera);
    // prestandaskydd: går det segt sänks upplösning och skuggor
    const nuT = performance.now(), dt = nuT - (rita.forra || nuT); rita.forra = nuT;
    rita.snitt = (rita.snitt || 16) * 0.97 + Math.min(dt, 100) * 0.03;
    if (!rita.sankt && rita.snitt > 34 && t > 4) {
      rita.sankt = true; renderer.setPixelRatio(1); sol.shadow.mapSize.set(1024, 1024); sol.shadow.map?.dispose(); sol.shadow.map = null; storlek();
    }
  }

  function storlek() {
    const r = canvas.getBoundingClientRect();
    if (!r.width) return;
    renderer.setSize(r.width, r.height, false);
    kamera.aspect = r.width / r.height; kamera.updateProjectionMatrix();
  }
  // Var på skärmen (0–960, 0–540) hamnar en punkt i spelet?
  function projicera(px, py) {
    const v = new V3(X(px), Y(py), 0).project(kamera);
    return { x: (v.x + 1) / 2 * 960, y: (1 - v.y) / 2 * 540 };
  }
  return { byggBana, rita, storlek, projicera, renderer, info: () => ({ ...renderer.info.render, geometrier: renderer.info.memory.geometries }) };
}
