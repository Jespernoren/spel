// ⛷️ Skidåkare med riktig 3D-figur (Quaternius-mannekäng, CC0) – se modeller/LICENS.md
// Samma gränssnitt som akare.js: skapaAkare3D(...) → { grupp, uppdatera(pose, dt) }
// Skelettet styrs här i koden: varje ben riktas mot en önskad riktning varje bildruta.
import { THREE } from '../../delat/extra.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

let mall = null;
export async function laddaAkareModell(url) {
  const gltf = await new GLTFLoader().loadAsync(url);
  mall = gltf.scene;
  return true;
}

const UPP = new THREE.Vector3(0, 1, 0);
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3();
const _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _q3 = new THREE.Quaternion();
const _rull = new THREE.Quaternion();

// Rikta benet `ben` så att det pekar (mot sitt barn `barn`) i riktningen `dir` (i världskoordinater)
function rikta(ben, barn, dir) {
  ben.getWorldPosition(_a);
  barn.getWorldPosition(_b);
  _c.subVectors(_b, _a).normalize();
  _q.setFromUnitVectors(_c, dir);                 // vridning som behövs, i världen
  ben.getWorldQuaternion(_q2);
  _q2.premultiply(_q);                            // ny världsvridning
  ben.parent.getWorldQuaternion(_q3).invert();
  ben.quaternion.copy(_q3.multiply(_q2));         // tillbaka till förälderns rum
  ben.updateMatrixWorld(true);
}

export function skapaAkare3D({ jacka = 0xe63946, byxor = 0x1d3557, hjalm = 0xffffff, skidor = 0xff4f8b, nummer = 1 } = {}) {
  const std = (c, extra = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, metalness: 0.05, ...extra });
  const grupp = new THREE.Group();       // position + riktning (sätts av spelet)
  const kroppRot = new THREE.Group();    // följer backens lutning
  grupp.add(kroppRot);
  const faste = new THREE.Group();
  kroppRot.add(faste);

  // --- figuren ---
  const figur = SkeletonUtils.clone(mall);
  figur.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.frustumCulled = false;
      const huvud = o.material.name === 'M_Main';
      o.material = std(huvud ? jacka : byxor, { roughness: huvud ? 0.5 : 0.7 });
    }
  });
  faste.add(figur);
  const ben = {};
  figur.traverse((o) => { if (o.isBone) ben[o.name] = o; });

  // vänd figuren så att den tittar framåt (−Z) – räknas från foten (häl → tå)
  grupp.updateMatrixWorld(true);
  const fram = ben.ball_l.getWorldPosition(new THREE.Vector3()).sub(ben.foot_l.getWorldPosition(new THREE.Vector3()));
  faste.rotation.y = Math.PI - Math.atan2(fram.x, fram.z);
  grupp.updateMatrixWorld(true);
  // är vänster ben verkligen till vänster?
  const tv = ben.thigh_l.getWorldPosition(new THREE.Vector3()), th = ben.thigh_r.getWorldPosition(new THREE.Vector3());
  const spegla = tv.x > th.x; // i så fall heter "l" vår högra sida
  const sidor = spegla ? { v: 'r', h: 'l' } : { v: 'l', h: 'r' };

  // fingrarna göms i handskar (krymps ihop) – handskarna läggs på nedan
  for (const n in ben) if (/^(index|middle|ring|pinky|thumb)_01_/.test(n)) ben[n].scale.setScalar(0.35);
  // vilomått
  const vila = {};
  for (const n in ben) vila[n] = ben[n].quaternion.clone();
  const pos = (n) => ben[n].getWorldPosition(new THREE.Vector3());
  const L_LAR = pos('thigh_l').distanceTo(pos('calf_l'));
  const L_VAD = pos('calf_l').distanceTo(pos('foot_l'));
  const hoftMitt = pos('thigh_l').add(pos('thigh_r')).multiplyScalar(0.5);
  const bakenTillHoft = pos('pelvis').sub(hoftMitt);          // från höftleden upp till bäckenbenet
  const bakenVila = pos('pelvis');
  const hoftBredd = Math.abs(tv.x - th.x) / 2;
  const FOTLED = 0.13;                                         // fotledens höjd över skidan

  // --- hjälm, glasögon, nummerlapp ---
  const hjalmGrupp = new THREE.Group();
  const hj = new THREE.Mesh(new THREE.SphereGeometry(0.135, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.6), std(hjalm, { roughness: 0.25, metalness: 0.1 }));
  hj.position.y = 0.035; hj.castShadow = true;
  const glas = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.065, 0.06), std(0xffb703, { roughness: 0.1, metalness: 0.7 }));
  glas.position.set(0, 0.02, -0.11);
  const rem = new THREE.Mesh(new THREE.TorusGeometry(0.128, 0.012, 6, 24), std(0x222222));
  rem.rotation.x = Math.PI / 2; rem.position.y = 0.02;
  hjalmGrupp.add(hj, glas, rem);
  kroppRot.add(hjalmGrupp);

  const c = document.createElement('canvas'); c.width = 128; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#fff'; g.fillRect(0, 0, 128, 128);
  g.fillStyle = '#111'; g.font = '900 86px system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(String(nummer), 64, 70);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const lapp = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.26), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, side: THREE.DoubleSide }));
  kroppRot.add(lapp);

  // --- skidor och pjäxor (följer marken, inte benen) ---
  const mSkida = std(skidor, { roughness: 0.3 });
  const skidPar = [];
  for (const sida of [-1, 1]) {
    const sk = new THREE.Group();
    const bräda = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.035, 1.8), mSkida); bräda.position.set(0, 0.02, -0.12); bräda.castShadow = true;
    const spets = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.035, 0.22), mSkida); spets.position.set(0, 0.07, -1.1); spets.rotation.x = 0.45;
    const pjaxa = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.24, 0.38), std(0x222831, { roughness: 0.35 })); pjaxa.position.set(0, 0.13, -0.07); pjaxa.castShadow = true;
    const spanne = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.03, 0.08), std(skidor)); spanne.position.set(0, 0.2, -0.02);
    sk.add(spanne);
    sk.add(bräda, spets, pjaxa);
    kroppRot.add(sk);
    skidPar.push(sk);
  }
  // --- stavar ---
  const stavar = [];
  for (let i = 0; i < 2; i++) {
    const s = new THREE.Group();
    const r = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 1.15, 6), std(0x9aa4b1, { metalness: 0.7, roughness: 0.3 }));
    r.position.y = -0.55; r.castShadow = true;
    const trissa = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.015, 10), std(0x222831));
    trissa.position.y = -1.05;
    const handtag = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.12, 8), std(0x222831));
    const handske = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), std(0x222831, { roughness: 0.8 }));
    handske.scale.set(1, 1.2, 1.1); handske.castShadow = true;
    s.add(r, trissa, handtag, handske);
    kroppRot.add(s);
    stavar.push(s);
  }

  const nu = { huk: 0.3, luta: 0, kant: 0, grab: 0, landa: 0, tid: Math.random() * 10, tipp: 0, lutning: 0 };
  const d = () => new THREE.Vector3();
  const v = { lar: d(), vad: d(), fot: d(), rygg: d(), huvud: d(), ov: d(), un: d(), stav: d(), hoft: d(), tmp: d(), hand: d() };

  // riktning i åkarens rum → världen (med rullning för inlutning)
  const iVarlden = (vek) => vek.applyQuaternion(_rull).applyQuaternion(kroppRot.getWorldQuaternion(_q3)).normalize();

  function uppdatera(pose, dt) {
    const k = (hast) => 1 - Math.exp(-hast * dt);
    const mjuk = (namn, mal, hast) => { nu[namn] += (mal - nu[namn]) * k(hast); };
    nu.tid += dt;
    if (pose.landning) nu.landa = Math.min(1.2, nu.landa + pose.landning);
    nu.landa = Math.max(0, nu.landa - dt * 2.5);
    mjuk('huk', Math.min(1, pose.huk + nu.landa * 0.7), pose.luft ? 6 : 12);
    mjuk('luta', pose.luta, 7);
    mjuk('kant', pose.kant, 8);
    mjuk('grab', pose.grab || 0, 8);
    mjuk('tipp', pose.luft ? pose.tipp : 0, 6);
    mjuk('lutning', pose.lutning || 0, 10);
    const h = nu.huk;
    const vingel = pose.vingel || 0;
    kroppRot.rotation.x = nu.lutning + nu.tipp;

    // skidor
    for (let i = 0; i < 2; i++) {
      const sida = i === 0 ? -1 : 1;
      skidPar[i].position.set(sida * (0.13 + Math.abs(nu.kant) * 0.05), (sida * nu.kant > 0 ? 0.04 : 0) * Math.abs(nu.kant), 0);
      skidPar[i].rotation.z = -nu.kant * 0.55;
    }

    // vinklar (radianer). Framåt = −Z, bakåt = +Z.
    const vad = 0.25 + h * 0.65;                    // knät framför fotleden
    const lar = 0.3 + h * 0.7;                      // höften bakom knät
    const rygg = 0.35 + h * 0.75 + Math.sin(nu.tid * 28) * vingel * 0.15;
    const roll = -nu.luta * 0.45 + Math.sin(nu.tid * 23) * vingel * 0.25;
    _rull.setFromAxisAngle(_a.set(0, 0, 1), roll);

    // höftens läge räknat från fotleden (så fötterna hamnar på skidorna)
    v.hoft.set(0, FOTLED + Math.cos(vad) * L_VAD + Math.cos(lar) * L_LAR, -Math.sin(vad) * L_VAD + Math.sin(lar) * L_LAR);
    v.hoft.applyQuaternion(_rull);
    // nollställ skelettet och flytta figuren så bäckenet hamnar rätt
    for (const n in vila) ben[n].quaternion.copy(vila[n]);
    faste.position.set(0, 0, 0);
    faste.updateMatrixWorld(true);
    faste.position.copy(v.hoft).add(bakenTillHoft).sub(bakenVila);
    grupp.updateMatrixWorld(true);

    // rygg och huvud
    iVarlden(v.rygg.set(0, Math.cos(rygg), -Math.sin(rygg)));
    rikta(ben.spine_01, ben.spine_02, v.rygg);
    rikta(ben.spine_02, ben.spine_03, v.rygg);
    rikta(ben.spine_03, ben.neck_01, v.rygg);
    iVarlden(v.huvud.set(0, Math.cos(rygg * 0.3), -Math.sin(rygg * 0.3)));
    rikta(ben.neck_01, ben.Head, v.huvud);

    // ben: lår (höft → knä) och vad (knä → fotled), foten platt framåt
    for (const s of [sidor.v, sidor.h]) {
      iVarlden(v.lar.set(0, -Math.cos(lar), -Math.sin(lar)));
      rikta(ben['thigh_' + s], ben['calf_' + s], v.lar);
      iVarlden(v.vad.set(0, -Math.cos(vad), Math.sin(vad)));
      rikta(ben['calf_' + s], ben['foot_' + s], v.vad);
      iVarlden(v.fot.set(0, -0.35, -1));
      rikta(ben['foot_' + s], ben['ball_' + s], v.fot);
    }

    // armar (positivt = framåt för nedåtpekande delar) – samma logik som akare.js
    const fart = pose.fart || 0;
    for (let i = 0; i < 2; i++) {
      const sida = i === 0 ? -1 : 1;                 // −1 = vänster
      const s = sida < 0 ? sidor.v : sidor.h;
      let U, F, P, ut;
      if (pose.luft) {
        const grab = i === 1 ? nu.grab : 0;
        U = 0.35 + grab * 0.35; F = 0.8 + grab * 0.2; P = -0.9; ut = 0.75 - grab * 0.55;
      } else if (h > 0.7) {
        U = 1.15; F = 1.5; P = -1.35; ut = 0.18;
      } else {
        const inner = nu.luta * sida > 0.15 ? 1 : 0;
        const takt = Math.sin(nu.tid * (2 + fart * 0.15) + i * Math.PI) * 0.12;
        U = 0.45 + inner * 0.35 + takt; F = 0.85 + inner * 0.35; P = -0.45 + inner * 0.75; ut = 0.32;
      }
      iVarlden(v.ov.set(sida * Math.sin(ut), -Math.cos(ut) * Math.cos(U), -Math.cos(ut) * Math.sin(U)));
      rikta(ben['upperarm_' + s], ben['lowerarm_' + s], v.ov);
      iVarlden(v.un.set(sida * Math.sin(ut * 0.4), -Math.cos(F), -Math.sin(F)));
      rikta(ben['lowerarm_' + s], ben['hand_' + s], v.un);
      // staven sitter i handen
      ben['hand_' + s].getWorldPosition(v.hand);
      kroppRot.worldToLocal(v.hand);
      stavar[i].position.copy(v.hand);
      v.stav.set(sida * 0.05, -Math.cos(P), -Math.sin(P)).normalize();
      stavar[i].quaternion.setFromUnitVectors(_b.set(0, -1, 0), v.stav);
    }

    // hjälm på huvudet
    ben.Head.getWorldPosition(v.tmp);
    kroppRot.worldToLocal(v.tmp);
    v.huvud.set(0, Math.cos(rygg * 0.3), -Math.sin(rygg * 0.3)).applyQuaternion(_rull);
    hjalmGrupp.position.copy(v.tmp).addScaledVector(v.huvud, 0.1);
    hjalmGrupp.quaternion.setFromUnitVectors(UPP, v.huvud);
    // nummerlapp på ryggen
    ben.spine_03.getWorldPosition(v.tmp);
    kroppRot.worldToLocal(v.tmp);
    lapp.position.copy(v.tmp).add(_a.set(0, Math.sin(rygg), Math.cos(rygg)).applyQuaternion(_rull).multiplyScalar(0.13));
    lapp.rotation.set(-rygg, 0, roll);
  }
  uppdatera({ huk: 0.3, luta: 0, kant: 0, luft: false, lutning: 0, fart: 0 }, 1);
  return { grupp, uppdatera };
}
