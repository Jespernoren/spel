// =============================================================
//  TESTRUMMET – teknikdemo för förstapersonsmotorn (delat/fp)
//  Visar: gå runt, plocka/bära, sortera på hyllor, borsta smuts,
//  mynt, butik med uppgraderingar, sparning och touchstyrning.
// =============================================================
import { THREE, skapaSpel, startaLoop } from '../../delat/motor.js';
import { Spelare, Interaktor, Hand, Smuts, Sparning, Butik, ljud, FpUI } from '../../delat/fp/index.js';

const SPEL_ID = 'testrummet';

// ---------- Inställningar ----------
const RUM = 14;                 // rummets storlek (meter)
const VAGG_HOJD = 3.2;
const BOCKER_PER_FARG = 6;
const MYNT_PER_BOK = 5;
const RUTOR_PER_MYNT = 12;      // hur mycket man borstar per mynt
const FARGER = [
  { id: 'rod', namn: 'röd', hex: 0xe5484d },
  { id: 'bla', namn: 'blå', hex: 0x3b82f6 },
  { id: 'gron', namn: 'grön', hex: 0x2fb36b },
  { id: 'gul', namn: 'gul', hex: 0xf5b82e },
];

// ---------- Scen ----------
const { scen, kamera, renderer, sol } = skapaSpel({ bakgrund: 0xdfe8f2, dimma: false });
kamera.near = 0.05; kamera.updateProjectionMatrix();
scen.add(kamera);
sol.position.set(4, 10, 3);
sol.intensity = 1.2;
scen.add(new THREE.AmbientLight(0xffffff, 0.35));

// golv, väggar, tak
const golv = new THREE.Mesh(new THREE.PlaneGeometry(RUM, RUM), new THREE.MeshStandardMaterial({ color: 0xc8a27a, roughness: 0.8 }));
golv.rotation.x = -Math.PI / 2; golv.receiveShadow = true; scen.add(golv);
const vaggMat = new THREE.MeshStandardMaterial({ color: 0xf3ead8, roughness: 0.95 });
for (const [x, z, ry] of [[0, -RUM / 2, 0], [0, RUM / 2, Math.PI], [-RUM / 2, 0, Math.PI / 2], [RUM / 2, 0, -Math.PI / 2]]) {
  const v = new THREE.Mesh(new THREE.PlaneGeometry(RUM, VAGG_HOJD), vaggMat);
  v.position.set(x, VAGG_HOJD / 2, z); v.rotation.y = ry; scen.add(v);
}
const tak = new THREE.Mesh(new THREE.PlaneGeometry(RUM, RUM), new THREE.MeshStandardMaterial({ color: 0xffffff }));
tak.rotation.x = Math.PI / 2; tak.position.y = VAGG_HOJD; scen.add(tak);
const lampa = new THREE.PointLight(0xfff1d6, 25, 20); lampa.position.set(0, VAGG_HOJD - 0.3, 0); scen.add(lampa);

// ---------- Spelare, interaktion, hand ----------
const spelare = new Spelare(kamera, renderer.domElement, {
  start: [0, 0, 3], granser: { minX: -RUM / 2, maxX: RUM / 2, minZ: -RUM / 2, maxZ: RUM / 2 },
});
const interaktor = new Interaktor(kamera, scen, { rackvidd: 3 });
const hand = new Hand(kamera, scen, { kapacitet: 1 });

// borste som syns i handen när den är tom
const borste = new THREE.Group();
const skaft = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.5), new THREE.MeshStandardMaterial({ color: 0x8b5a2b }));
skaft.rotation.x = -0.9; skaft.position.set(0, 0, -0.1);
const huvud = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.05, 0.06), new THREE.MeshStandardMaterial({ color: 0xf5b82e }));
huvud.position.set(0, -0.19, -0.26);
borste.add(skaft, huvud);
borste.position.set(0.3, -0.28, -0.45);
kamera.add(borste);

// ---------- Smuts ----------
const smuts = new Smuts(RUM, RUM, { rutnat: 64, upplosning: 512 });
scen.add(smuts.mesh);

// ---------- Sparning och butik ----------
const spar = new Sparning(SPEL_ID, { mynt: 0, nivaer: {}, smuts: '', placerade: [] });
const effekt = { radie: 0.35 };
const butik = new Butik(spar, [
  { id: 'borste', namn: 'Större borste', ikon: '🧹', beskrivning: 'Borsta bredare', priser: [15, 40, 90],
    effekt: (n) => { effekt.radie = [0.35, 0.55, 0.8, 1.1][n]; huvud.scale.x = 1 + n * 0.6; } },
  { id: 'bara', namn: 'Bär fler böcker', ikon: '📚', beskrivning: 'Fler i famnen', priser: [10, 35, 80],
    effekt: (n) => { hand.kapacitet = [1, 3, 6, 10][n]; } },
  { id: 'skor', namn: 'Snabba skor', ikon: '👟', beskrivning: 'Gå snabbare', priser: [20, 60],
    effekt: (n) => { spelare.fart = [4, 5, 6.2][n]; } },
]);

// ---------- Hyllor ----------
const hyllor = [];
const traMat = new THREE.MeshStandardMaterial({ color: 0x7a5232, roughness: 0.8 });
const HYLL_PLATS = [
  { x: -3, z: -RUM / 2 + 0.25, ry: 0 }, { x: 3, z: -RUM / 2 + 0.25, ry: 0 },
  { x: -RUM / 2 + 0.25, z: 0, ry: Math.PI / 2 }, { x: RUM / 2 - 0.25, z: 0, ry: -Math.PI / 2 },
];
FARGER.forEach((f, i) => {
  const p = HYLL_PLATS[i];
  const g = new THREE.Group();
  const B = 1.8, H = 2.0, D = 0.42;
  const del = (w, h, d, x, y, z, mat = traMat) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); m.castShadow = true; g.add(m); };
  del(B, 0.06, D, 0, 0.05, 0); del(B, 0.06, D, 0, 0.75, 0); del(B, 0.06, D, 0, 1.45, 0); del(B, 0.06, D, 0, H, 0);
  del(0.06, H, D, -B / 2, H / 2, 0); del(0.06, H, D, B / 2, H / 2, 0); del(B, H, 0.03, 0, H / 2, -D / 2 + 0.015);
  // färgskylt överst
  del(0.9, 0.22, 0.05, 0, H + 0.2, 0.1, new THREE.MeshStandardMaterial({ color: f.hex, emissive: f.hex, emissiveIntensity: 0.25 }));
  g.position.set(p.x, 0, p.z); g.rotation.y = p.ry;
  scen.add(g);
  g.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(g);
  spelare.hinder.push(box);
  // platser för böcker: 3 per hyllplan, 2 plan
  const platser = [];
  for (const y of [0.08, 0.78]) for (const x of [-0.5, 0, 0.5]) platser.push(new THREE.Vector3(x, y + 0.2, 0.02));
  const hylla = { farg: f, grupp: g, platser, bocker: [] };
  hyllor.push(hylla);
  interaktor.registrera(g, {
    text: () => {
      const b = hand.overst;
      if (!b) return '';
      if (b.userData.farg.id !== f.id) return `Det här är ${f.namn} hylla`;
      return `Ställ in ${f.namn} bok`;
    },
    kanAktivera: () => !hand.tom,
    aktivera: () => stallIn(hylla),
  });
});

// ---------- Böcker ----------
const bokGeo = new THREE.BoxGeometry(0.1, 0.38, 0.28);
const bocker = [];
let fro = 7;
const rnd = () => ((fro = (fro * 9301 + 49297) % 233280) / 233280);
FARGER.forEach((f) => {
  const mat = new THREE.MeshStandardMaterial({ color: f.hex, roughness: 0.6 });
  for (let i = 0; i < BOCKER_PER_FARG; i++) {
    const b = new THREE.Mesh(bokGeo, mat);
    b.castShadow = true;
    b.userData = { id: `${f.id}-${i}`, farg: f };
    // på golvet, liggande, slumpad plats (samma varje gång)
    b.position.set((rnd() - 0.5) * (RUM - 3), 0.05, (rnd() - 0.5) * (RUM - 3));
    b.rotation.set(0, rnd() * Math.PI * 2, Math.PI / 2);
    b.userData.golvPos = b.position.clone();
    b.userData.golvRot = b.rotation.clone();
    scen.add(b);
    bocker.push(b);
    interaktor.registrera(b, {
      text: () => (hand.full ? 'Händerna är fulla' : `Plocka upp ${f.namn} bok`),
      kanAktivera: () => b.parent === scen && !b.userData.placerad,
      aktivera: () => {
        if (hand.full) { ui.toast('Händerna är fulla!', 'fel'); ljud.fel(); return; }
        scen.remove(b); interaktor.avregistrera(b); hand.plocka(b); ljud.plock();
      },
    });
  }
});

function placeraIHylla(bok, hylla, tyst = false) {
  const plats = hylla.platser[hylla.bocker.length];
  bok.userData.placerad = true;
  bok.position.copy(plats);
  bok.rotation.set(0, 0, (Math.random() - 0.5) * 0.06);
  hylla.grupp.add(bok);
  hylla.bocker.push(bok);
  interaktor.avregistrera(bok);
  if (!tyst && hylla.bocker.length === hylla.platser.length) {
    ljud.klar(); ui.toast(`${hylla.farg.namn[0].toUpperCase() + hylla.farg.namn.slice(1)} hylla klar! ✨`, 'guld');
  }
}

function stallIn(hylla) {
  let antal = 0;
  while (hand.overst && hand.overst.userData.farg.id === hylla.farg.id && hylla.bocker.length < hylla.platser.length) {
    const b = hand.lagg();
    placeraIHylla(b, hylla);
    spar.data.placerade.push(b.userData.id);
    antal++;
  }
  if (antal) {
    ljud.placera();
    butik.mynt += MYNT_PER_BOK * antal; ljud.mynt();
    ui.toast(`+${MYNT_PER_BOK * antal} 🪙`, 'bra');
    spar.spara();
  } else {
    ljud.fel(); ui.toast(`Fel hylla! Boken är ${hand.overst.userData.farg.namn}.`, 'fel');
  }
}

// ---------- Ladda sparning ----------
smuts.importera(spar.data.smuts);
for (const id of spar.data.placerade) {
  const b = bocker.find((x) => x.userData.id === id);
  const h = b && hyllor.find((x) => x.farg.id === b.userData.farg.id);
  if (b && h) { scen.remove(b); placeraIHylla(b, h, true); }
}

// ---------- UI ----------
const ui = new FpUI({
  titel: '🧪 Testrummet',
  text: 'Borsta golvet rent och sortera böckerna på rätt färghylla. Tjäna mynt och köp uppgraderingar i butiken.',
  spelare,
  onAnvand: (nere) => {
    anvandNere = nere;
    if (nere && interaktor.hovrad) { interaktor.aktivera(); anvandNere = false; }
  },
  onButik: () => ui.oppnaButik(butik),
  onNollstall: () => { spar.nollstall(); location.reload(); },
});
ui.mynt(butik.mynt);

// ---------- Spelloop ----------
let anvandNere = false, rutBank = 0, klar = false, borstTid = 0;
const placeradeTotalt = () => hyllor.reduce((s, h) => s + h.bocker.length, 0);
const ANTAL_BOCKER = FARGER.length * BOCKER_PER_FARG;

function uppdatera(dt) {
  spelare.uppdatera(dt);
  hand.uppdatera(dt, spelare.rorelse);
  if (!ui.igang) return;

  interaktor.uppdatera();
  ui.prompt(interaktor.text);
  borste.visible = hand.tom;

  // borsta när man håller inne "använd" och inte tittar på något
  let borstar = false;
  if (anvandNere && !interaktor.hovrad) {
    const h = interaktor.traffa([smuts.mesh], 3.2);
    if (h) {
      borstar = true;
      const nya = smuts.borsta(h.point.x, h.point.z, effekt.radie);
      if (nya > 0) {
        ljud.borsta();
        rutBank += nya;
        if (rutBank >= RUTOR_PER_MYNT) {
          const m = Math.floor(rutBank / RUTOR_PER_MYNT);
          rutBank -= m * RUTOR_PER_MYNT;
          butik.mynt += m;
        }
        spar.data.smuts = smuts.exportera();
        spar.spara();
      }
    }
  }
  borstTid += borstar ? dt * 18 : 0;
  borste.rotation.z = borstar ? Math.sin(borstTid) * 0.25 : 0;
  borste.position.z = -0.45 + (borstar ? Math.sin(borstTid * 0.5) * 0.04 : 0);

  const pct = (smuts.procent / 100) * 50 + (placeradeTotalt() / ANTAL_BOCKER) * 50;
  ui.framsteg(pct, 'Rummet');
  ui.mynt(butik.mynt);

  if (!klar && smuts.klar && placeradeTotalt() === ANTAL_BOCKER) {
    klar = true;
    ljud.stor();
    if (document.pointerLockElement) document.exitPointerLock();
    ui.visaStart('🎉 Rummet är klart!', 'Allt är rent och sorterat. Bra jobbat!', 'Fortsätt titta runt');
  }
}

// för automatiska tester
window.__testrummet = { spelare, interaktor, hand, smuts, butik, spar, bocker, hyllor, ui };

startaLoop(uppdatera, { scen, kamera, renderer });
