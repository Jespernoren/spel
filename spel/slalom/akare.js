// ⛷️ Ledad skidåkare: knän, höft, överkropp, armar och stavar som rör sig
// skapaAkare({ jacka, byxor, hjalm, nummer }) → { grupp, uppdatera(pose, dt) }
//
// pose = {
//   huk: 0..1        0 = upprätt, 1 = djupt hukad (pumpa/tuck)
//   luta: -1..1      lutning in i svängen (− vänster, + höger)
//   kant: -1..1      hur mycket skidorna står på kant
//   luft: bool       i luften
//   grab: 0..1       greppa skidan i luften
//   lutning: rad     backens lutning framåt (skidorna följer marken)
//   tipp: rad        skidornas tipp i luften (+ = spetsarna upp)
//   fart: m/s        för armrörelser
//   vingel: 0..1     tappar balansen
// }
import { THREE } from '../../delat/extra.js';

const L_SKENBEN = 0.48, L_LAR = 0.48, L_OVERKROPP = 0.58;

export function skapaAkare({ jacka = 0xe63946, byxor = 0x1d3557, hjalm = 0xffffff, skidor = 0xff4f8b, nummer = 1 } = {}) {
  const m = (c, extra = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, metalness: 0.05, ...extra });
  const mJacka = m(jacka), mByxor = m(byxor), mHjalm = m(hjalm, { roughness: 0.3 }), mHud = m(0xffd6b0);
  const mSkida = m(skidor, { roughness: 0.35 }), mPjaxa = m(0x222831), mGlas = m(0xffb703, { roughness: 0.1, metalness: 0.6 });
  const mStav = m(0x9aa4b1, { metalness: 0.7, roughness: 0.3 });
  const mesh = (geo, mat, x = 0, y = 0, z = 0) => { const me = new THREE.Mesh(geo, mat); me.position.set(x, y, z); me.castShadow = true; return me; };

  const grupp = new THREE.Group();      // position + riktning (sätts av spelet)
  const kroppRot = new THREE.Group();   // lutning framåt/bakåt efter backen
  grupp.add(kroppRot);

  // --- skidor (en per ben, kan stå på kant) ---
  const skidPar = new THREE.Group();
  kroppRot.add(skidPar);
  const skidor_ = [];
  for (const sida of [-1, 1]) {
    const sk = new THREE.Group();
    sk.position.set(sida * 0.16, 0, 0);
    const bräda = mesh(new THREE.BoxGeometry(0.12, 0.04, 1.75), mSkida, 0, 0.02, -0.08);
    const spets = mesh(new THREE.BoxGeometry(0.12, 0.04, 0.22), mSkida, 0, 0.07, -1.02);
    spets.rotation.x = 0.45;
    const pjaxa = mesh(new THREE.BoxGeometry(0.15, 0.2, 0.3), mPjaxa, 0, 0.13, 0.02);
    sk.add(bräda, spets, pjaxa);
    skidPar.add(sk);
    skidor_.push(sk);
  }

  // --- ben: fotled → skenben → knä → lår → höft ---
  const ben = [];
  for (const sida of [-1, 1]) {
    const fot = new THREE.Group(); fot.position.set(sida * 0.16, 0.2, 0.02);
    const skenben = mesh(new THREE.BoxGeometry(0.15, L_SKENBEN, 0.17), mByxor, 0, L_SKENBEN / 2, 0);
    const kna = new THREE.Group(); kna.position.y = L_SKENBEN;
    const lar = mesh(new THREE.BoxGeometry(0.17, L_LAR, 0.2), mByxor, 0, L_LAR / 2, 0);
    kna.add(lar);
    fot.add(skenben, kna);
    kroppRot.add(fot);
    ben.push({ fot, kna });
  }

  // --- höft och överkropp (placeras där låren slutar) ---
  const hoft = new THREE.Group();
  kroppRot.add(hoft);
  const bal = new THREE.Group(); hoft.add(bal);
  const torso = mesh(new THREE.BoxGeometry(0.5, L_OVERKROPP, 0.3), mJacka, 0, L_OVERKROPP / 2, 0);
  // nummerlapp
  const c = document.createElement('canvas'); c.width = 128; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, 128, 128);
  g.fillStyle = '#111'; g.font = '900 86px system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(String(nummer), 64, 70);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const lapp = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.32), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 }));
  lapp.position.set(0, L_OVERKROPP * 0.52, 0.152);            // på ryggen (kameran ser bakifrån)
  const lapp2 = lapp.clone(); lapp2.position.z = -0.152; lapp2.rotation.y = Math.PI;
  bal.add(torso, lapp, lapp2);
  // huvud
  const nacke = new THREE.Group(); nacke.position.y = L_OVERKROPP; bal.add(nacke);
  nacke.add(mesh(new THREE.SphereGeometry(0.17, 16, 12), mHud, 0, 0.17, 0));
  const hj = mesh(new THREE.SphereGeometry(0.2, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.58), mHjalm, 0, 0.19, 0.01);
  nacke.add(hj);
  nacke.add(mesh(new THREE.BoxGeometry(0.3, 0.09, 0.06), mGlas, 0, 0.2, -0.17));
  // armar: axel → överarm → armbåge → underarm → hand + stav
  const armar = [];
  for (const sida of [-1, 1]) {
    const axel = new THREE.Group(); axel.position.set(sida * 0.31, L_OVERKROPP - 0.06, 0);
    axel.add(mesh(new THREE.BoxGeometry(0.12, 0.32, 0.13), mJacka, 0, -0.16, 0));
    const armbage = new THREE.Group(); armbage.position.y = -0.32;
    armbage.add(mesh(new THREE.BoxGeometry(0.11, 0.3, 0.12), mJacka, 0, -0.15, 0));
    const hand = new THREE.Group(); hand.position.y = -0.31;
    hand.add(mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), mPjaxa));
    const stav = mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.15, 6), mStav, 0, -0.5, 0.06);
    stav.rotation.x = 0.12;
    const trissa = mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 10), mPjaxa, 0, -1.02, 0.12);
    hand.add(stav, trissa);
    armbage.add(hand);
    axel.add(armbage);
    bal.add(axel);
    armar.push({ axel, armbage, hand });
  }

  // nuvarande (mjukat) läge
  const nu = { huk: 0.3, luta: 0, kant: 0, grab: 0, armSving: 0, landa: 0, tid: Math.random() * 10, tipp: 0, lutning: 0 };

  function uppdatera(pose, dt) {
    const k = (mal, hast) => 1 - Math.exp(-hast * dt);
    const mjuk = (namn, mal, hast) => { nu[namn] += (mal - nu[namn]) * k(mal, hast); };
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

    // hela kroppen följer backens lutning (+ tippar i luften)
    kroppRot.rotation.x = nu.lutning + nu.tipp;

    // skidor på kant + lite isär i svängar
    for (let i = 0; i < 2; i++) {
      const sida = i === 0 ? -1 : 1;
      skidor_[i].rotation.z = -nu.kant * 0.55;
      skidor_[i].position.x = sida * (0.16 + Math.abs(nu.kant) * 0.05);
      skidor_[i].position.y = (sida * nu.kant > 0 ? 0.04 : 0) * Math.abs(nu.kant); // innerskidan lite upp
    }

    // ben (vinkel kring x: negativt = framåt)
    const skenVinkel = -(0.25 + h * 0.65);
    const knaVinkel = 0.55 + h * 1.35;
    const sidLuta = -nu.luta * 0.5;
    for (let i = 0; i < 2; i++) {
      const { fot, kna } = ben[i];
      fot.rotation.set(skenVinkel, 0, sidLuta);
      fot.position.x = (i === 0 ? -1 : 1) * (0.16 + Math.abs(nu.kant) * 0.05);
      kna.rotation.x = knaVinkel;
    }
    // höftens position = fotled + skenben + lår (enkel framåtkinematik i ett plan)
    const a1 = skenVinkel, a2 = skenVinkel + knaVinkel;
    const hy = 0.2 + Math.cos(a1) * L_SKENBEN + Math.cos(a2) * L_LAR;
    const hz = 0.02 + Math.sin(a1) * L_SKENBEN + Math.sin(a2) * L_LAR;
    const hx = Math.sin(sidLuta) * -(L_SKENBEN + L_LAR) * 0.9;
    hoft.position.set(hx, hy, hz);
    // överkroppen lutar fram (mer i hukning), och in i svängen
    bal.rotation.set(-(0.35 + h * 0.75) + Math.sin(nu.tid * 28) * (pose.vingel || 0) * 0.2, 0, sidLuta * 0.6 + Math.sin(nu.tid * 23) * (pose.vingel || 0) * 0.35);
    nacke.rotation.x = 0.3 + h * 0.6; // titta framåt

    // armar – vinklarna anges mot världen (positivt = framåt för nedåtpekande delar)
    // och räknas om till leder: axel, armbåge, hand (stav)
    const fart = pose.fart || 0;
    const torsoVinkel = bal.rotation.x;
    for (let i = 0; i < 2; i++) {
      const sida = i === 0 ? -1 : 1;
      const { axel, armbage, hand } = armar[i];
      let U, F, P, ut;
      if (pose.luft) {
        const grab = i === 1 ? nu.grab : 0;
        U = 0.35 + grab * 0.35; F = 0.8 + grab * 0.2; P = -0.9; ut = sida * (0.75 - grab * 0.6);
      } else if (h > 0.7) {
        U = 1.15; F = 1.55; P = -1.35; ut = sida * 0.12;            // tuck: händerna framför
      } else {
        const inner = nu.luta * sida > 0.15 ? 1 : 0;                // stavisättning på innersidan
        const takt = Math.sin(nu.tid * (2 + fart * 0.15) + i * Math.PI) * 0.12;
        U = 0.45 + inner * 0.35 + takt; F = 0.85 + inner * 0.35; P = -0.45 + inner * 0.75; ut = sida * 0.28;
      }
      axel.rotation.set(U - torsoVinkel, 0, ut);
      armbage.rotation.x = F - U;
      hand.rotation.x = P - F;
    }
  }
  uppdatera({ huk: 0.3, luta: 0, kant: 0, luft: false, lutning: 0, fart: 0 }, 1);
  return { grupp, uppdatera };
}
