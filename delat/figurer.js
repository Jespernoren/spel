// =============================================================
//  Figurer i 3D (Three.js): människor i Strandjakten-stil.
//  Används av Rädda Barnen. Exempel:
//    import { skapaFigur, regnbageMat } from '../../delat/figurer.js';
//    const mamma = skapaFigur(THREE, { skala: 1.1, har: '#6b4423', langtHar: true,
//      kropp: '#ff7eb6', kjol: '#ff7eb6', skor: '#ffffff', stjarnor: true });
//  Färger kan vara '#rrggbb', 'regnbage' eller ett färdigt material.
//  figur.ga(dt, fart) animerar gång, figur.dansa(t) dans, figur.vinka(t) vinkar.
// =============================================================

export const REGNBAGE = ['#ff4d4d', '#ff9f1c', '#ffd23f', '#3ecf6e', '#2f9bff', '#9b5cff'];

const texCache = new Map();
function regnbageTex(THREE) {
  if (texCache.has(THREE)) return texCache.get(THREE);
  const c = document.createElement('canvas'); c.width = 64; c.height = 96;
  const g = c.getContext('2d');
  REGNBAGE.forEach((f, i) => { g.fillStyle = f; g.fillRect(0, c.height - (i + 1) * c.height / 6, c.width, c.height / 6 + 1); });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  texCache.set(THREE, t); return t;
}
export function regnbageMat(THREE) { return new THREE.MeshStandardMaterial({ map: regnbageTex(THREE), roughness: 0.7 }); }
function mat(THREE, f, extra = {}) {
  if (f && f.isMaterial) return f;
  if (f === 'regnbage') return regnbageMat(THREE);
  return new THREE.MeshStandardMaterial(Object.assign({ color: f, roughness: 0.85 }, extra));
}

/**
 * o: skala, hud, har, har2 (andra hårfärg = slingor), langtHar, kort (kort hår),
 *    kropp, armar (ärmar, annars hud), ben (byxor, annars hud), skor, stjarnor,
 *    kjol (färg eller null), glasogon, kapp (käpp), mossa
 */
export function skapaFigur(THREE, o = {}) {
  const g = new THREE.Group();
  const hud = mat(THREE, o.hud || '#f2c9a0');
  const harMat = mat(THREE, o.har || '#6b4423');
  const har2Mat = o.har2 ? mat(THREE, o.har2) : null;
  const del = {};

  const ben = (x) => {
    const p = new THREE.Group(); p.position.set(x, 0.75, 0);
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.72, 8), o.ben ? mat(THREE, o.ben) : hud); b.position.y = -0.36; p.add(b);
    const sko = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.28), mat(THREE, o.skor || '#d8b67a')); sko.position.set(0, -0.71, 0.05); p.add(sko);
    if (o.stjarnor) {
      const st = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 5), new THREE.MeshBasicMaterial({ color: 0xffd23f }));
      st.rotation.z = Math.PI / 2; st.position.set(x < 0 ? -0.08 : 0.08, -0.7, 0.05); p.add(st);
    }
    g.add(p); return p;
  };
  del.benV = ben(-0.11); del.benH = ben(0.11);
  del.kropp = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.2, 0.5, 12), mat(THREE, o.kropp || '#5ec8ff')); del.kropp.position.y = 0.98; g.add(del.kropp);
  if (o.kjol) {
    const km = mat(THREE, o.kjol).clone(); km.side = THREE.DoubleSide;
    del.kjol = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.62, 16, 1, true), km); del.kjol.position.y = 0.72; g.add(del.kjol);
  }
  const arm = (x) => {
    const p = new THREE.Group(); p.position.set(x, 1.2, 0);
    const a = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.05, 0.5, 8), hud); a.position.y = -0.25; p.add(a);
    if (o.armar) { const armel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.075, 0.36, 8), mat(THREE, o.armar)); armel.position.y = -0.16; p.add(armel); }
    p.rotation.z = x < 0 ? -0.12 : 0.12; g.add(p); return p;
  };
  del.armV = arm(-0.25); del.armH = arm(0.25);
  const huvud = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), hud); huvud.position.y = 1.43; g.add(huvud);
  const har = new THREE.Mesh(new THREE.SphereGeometry(0.215, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), harMat); har.position.set(0, 1.45, -0.02); g.add(har);
  if (!o.kort) {
    const harBak = new THREE.Mesh(new THREE.BoxGeometry(0.36, o.langtHar ? 0.42 : 0.2, 0.12), harMat);
    harBak.position.set(0, o.langtHar ? 1.3 : 1.42, -0.14); g.add(harBak);
  }
  if (har2Mat) { // slingor i en annan färg (blandat hår)
    for (const [x, z, r] of [[-0.12, 0.06, 0.3], [0.1, 0.08, -0.3], [0, -0.1, 0], [-0.15, -0.08, 0.4], [0.15, -0.06, -0.4]]) {
      const s = new THREE.Mesh(new THREE.BoxGeometry(0.06, o.langtHar ? 0.42 : 0.24, 0.05), har2Mat);
      s.position.set(x, o.langtHar ? 1.38 : 1.48, z - 0.06); s.rotation.z = r * 0.3; g.add(s);
    }
  }
  for (const x of [-0.07, 0.07]) { const oga = new THREE.Mesh(new THREE.SphereGeometry(0.028, 8, 6), mat(THREE, '#222222')); oga.position.set(x, 1.45, 0.18); g.add(oga); }
  const mun = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.013, 6, 12, Math.PI), mat(THREE, '#c0392b')); mun.rotation.z = Math.PI; mun.position.set(0, 1.37, 0.185); g.add(mun);
  for (const x of [-0.12, 0.12]) { const k = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), mat(THREE, '#ff9fb0')); k.position.set(x, 1.39, 0.16); g.add(k); }
  if (o.glasogon) {
    for (const x of [-0.075, 0.075]) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.01, 6, 14), mat(THREE, '#333333')); r.position.set(x, 1.45, 0.19); g.add(r); }
  }
  if (o.mossa) { const m = new THREE.Mesh(new THREE.SphereGeometry(0.225, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), mat(THREE, o.mossa)); m.position.y = 1.5; g.add(m); }
  if (o.kapp) {
    del.kapp = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.95), mat(THREE, '#6b4423'));
    del.kapp.position.set(0.32, 0.47, 0.12); g.add(del.kapp);
  }
  g.scale.setScalar(o.skala || 1);
  g.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });

  const f = {
    g, del, fas: 0,
    ga(dt, fart) {
      f.fas += dt * fart * 2.6; const s = Math.sin(f.fas) * Math.min(1, fart / 2) * 0.7;
      del.benV.rotation.x = s; del.benH.rotation.x = -s;
      del.armV.rotation.x = -s * 0.8; del.armH.rotation.x = s * 0.8;
      del.armV.rotation.z = -0.12; del.armH.rotation.z = 0.12;
      g.position.y = (f.bas || 0) + Math.abs(Math.sin(f.fas)) * 0.04 * Math.min(1, fart / 2);
    },
    dansa(t, fas = 0, hojd = 0.15) {
      g.position.y = (f.bas || 0) + Math.abs(Math.sin(t * 5 + fas)) * hojd;
      del.armV.rotation.x = 0; del.armH.rotation.x = 0;
      del.armV.rotation.z = -2.6 + Math.sin(t * 8 + fas) * 0.3; del.armH.rotation.z = 2.6 - Math.sin(t * 8 + fas) * 0.3;
      del.benV.rotation.x = Math.sin(t * 5 + fas) * 0.3; del.benH.rotation.x = -Math.sin(t * 5 + fas) * 0.3;
    },
    vinka(t) {
      del.armH.rotation.x = 0; del.armH.rotation.z = 2.5 + Math.sin(t * 9) * 0.35;
      del.armV.rotation.z = -0.12;
    },
    hoppa() { del.armV.rotation.z = -2.4; del.armH.rotation.z = 2.4; del.benV.rotation.x = -0.6; del.benH.rotation.x = 0.4; },
  };
  return f;
}
