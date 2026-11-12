// =============================================================
//  TROLLSTAVEN (spel/testrummet) 🪄 – idé: Beppe
//  Peka på en bok och tryck → den lyfts med magi och svävar runt staven.
//  Peka på rätt färghylla och tryck → böckerna seglar in.
//  Håll inne mot golvet → staven suger upp dammet.
//  Hitta gömda TROLLKRISTALLER → staven orkar lyfta fler böcker samtidigt.
// =============================================================
import { THREE, skapaSpel, startaLoop } from '../../delat/motor.js';
import { Spelare, Interaktor, Smuts, Sparning, Butik, ljud, FpUI, Gnistor, Trollstav, Levitation } from '../../delat/fp/index.js';

const SPEL_ID = 'testrummet';

// ---------- Inställningar (lek fritt med dessa) ----------
const RUM = 16;                 // rummets storlek (meter)
const VAGG_HOJD = 3.4;
const BOCKER_PER_FARG = 12;     // 4 färger × 12 = 48 böcker
const MYNT_PER_BOK = 3;
const RUTOR_PER_MYNT = 12;      // hur mycket damm man suger upp per mynt
const FLYGTID = 0.8;            // sekunder för en bok att flyga in i hyllan
const UPPLASNING = true;        // läs upp med svensk röst
const SOKAR_AVSTAND = 5;        // inom så här många meter börjar staven pinga för kristaller
// Hur många böcker staven orkar lyfta: start, efter 3, 6 och 9 kristaller
const KRAFT_NIVAER = [1, 3, 6, 10];
const FARGER = [
  { id: 'rod', namn: 'röd', namnBest: 'röda', hex: 0xe5484d },
  { id: 'bla', namn: 'blå', namnBest: 'blå', hex: 0x3b82f6 },
  { id: 'gron', namn: 'grön', namnBest: 'gröna', hex: 0x2fb36b },
  { id: 'gul', namn: 'gul', namnBest: 'gula', hex: 0xf5b82e },
];
// Tre omgångar med gömda kristaller. Första är lätt, sen lite klurigare.
const KRISTALL_OMGANGAR = [
  { namn: 'blå', farg: 0x6fd8ff, platser: [
    { id: 'k1', pos: [0, 0.98, -1.2], tips: 'på bordet' },
    { id: 'k2', pos: [0, 0.22, 7.2], tips: 'bakom dig vid väggen' },
    { id: 'k3', pos: [6.4, 0.22, -7.1], tips: 'vid blomkrukan' },
  ] },
  { namn: 'guld', farg: 0xffd447, platser: [
    { id: 'k4', pos: [-3, 2.32, -7.55], tips: 'uppe på en bokhylla' },
    { id: 'k5', pos: [-6.7, 0.62, 6.7], tips: 'i skattkistan' },
    { id: 'k6', pos: [6.9, 0.22, 7.0], tips: 'bakom fåtöljen' },
  ] },
  { namn: 'regnbåge', farg: 0xff7ae0, platser: [
    { id: 'k7', pos: [0.4, 0.22, -1.2], tips: 'under bordet' },
    { id: 'k8', pos: [7.55, 2.32, 0], tips: 'uppe på en annan hylla' },
    { id: 'k9', pos: [-6.6, 1.05, -6.6], tips: 'i blomkrukan' },
  ] },
];
const saga = (t) => { if (UPPLASNING) ljud.saga(t); };
const stor = (t) => t[0].toUpperCase() + t.slice(1);
const ORD = ['noll', 'en', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

// ---------- Scen ----------
const { scen, kamera, renderer, sol } = skapaSpel({ bakgrund: 0xdfe8f2, dimma: false });
kamera.near = 0.05; kamera.updateProjectionMatrix();
scen.add(kamera);
sol.position.set(4, 10, 3);
sol.intensity = 1.1;
scen.add(new THREE.AmbientLight(0xffffff, 0.35));

const golv = new THREE.Mesh(new THREE.PlaneGeometry(RUM, RUM), new THREE.MeshStandardMaterial({ color: 0xc8a27a, roughness: 0.8 }));
golv.rotation.x = -Math.PI / 2; golv.receiveShadow = true; scen.add(golv);
const vaggMat = new THREE.MeshStandardMaterial({ color: 0xece2f4, roughness: 0.95 });
for (const [x, z, ry] of [[0, -RUM / 2, 0], [0, RUM / 2, Math.PI], [-RUM / 2, 0, Math.PI / 2], [RUM / 2, 0, -Math.PI / 2]]) {
  const v = new THREE.Mesh(new THREE.PlaneGeometry(RUM, VAGG_HOJD), vaggMat);
  v.position.set(x, VAGG_HOJD / 2, z); v.rotation.y = ry; scen.add(v);
}
const tak = new THREE.Mesh(new THREE.PlaneGeometry(RUM, RUM), new THREE.MeshStandardMaterial({ color: 0x2b2550, emissive: 0x1a1640 }));
tak.rotation.x = Math.PI / 2; tak.position.y = VAGG_HOJD; scen.add(tak);
{
  const g = new THREE.BufferGeometry(), p = [];
  for (let i = 0; i < 320; i++) p.push((Math.random() - 0.5) * RUM, VAGG_HOJD - 0.02, (Math.random() - 0.5) * RUM);
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  scen.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xfff3c4, size: 0.05 })));
}
const lampa = new THREE.PointLight(0xfff1d6, 30, 24); lampa.position.set(0, VAGG_HOJD - 0.3, 0); scen.add(lampa);

// ---------- Spelare, interaktion, magi ----------
const spelare = new Spelare(kamera, renderer.domElement, {
  start: [0, 0, 3.5], granser: { minX: -RUM / 2, maxX: RUM / 2, minZ: -RUM / 2, maxZ: RUM / 2 },
  pilarSvanger: true,          // ← → svänger, ↑ ↓ går (lätt för barn)
});
const interaktor = new Interaktor(kamera, scen, { rackvidd: 3.5 });
const stav = new Trollstav(kamera);
const lev = new Levitation(kamera, { kapacitet: 1 });
const gnistor = new Gnistor(scen, { max: 1200 });
const spets = new THREE.Vector3();

// ---------- Inredning (att gömma kristaller vid) ----------
const traMorkt = new THREE.MeshStandardMaterial({ color: 0x6b4426, roughness: 0.8 });
const traLjust = new THREE.MeshStandardMaterial({ color: 0xa8743f, roughness: 0.7 });
function lada(w, h, d, x, y, z, mat, hinder = false) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; scen.add(m);
  if (hinder) spelare.hinder.push(new THREE.Box3().setFromObject(m));
  return m;
}
// matta
{
  const m = new THREE.Mesh(new THREE.CircleGeometry(2.6, 40), new THREE.MeshStandardMaterial({ color: 0x7b4fbf, roughness: 1 }));
  m.rotation.x = -Math.PI / 2; m.position.set(0, 0.012, 1.2); scen.add(m);
  const k = new THREE.Mesh(new THREE.RingGeometry(2.3, 2.45, 40), new THREE.MeshStandardMaterial({ color: 0xffd447 }));
  k.rotation.x = -Math.PI / 2; k.position.set(0, 0.014, 1.2); scen.add(k);
}
// bord
lada(1.6, 0.08, 1.0, 0, 0.78, -1.2, traLjust);
for (const [x, z] of [[-0.72, -1.62], [0.72, -1.62], [-0.72, -0.78], [0.72, -0.78]]) lada(0.08, 0.76, 0.08, x, 0.38, z, traLjust);
spelare.hinder.push(new THREE.Box3(new THREE.Vector3(-0.8, 0, -1.7), new THREE.Vector3(0.8, 0.82, -0.7)));
// skattkista (öppen)
lada(1.1, 0.55, 0.7, -6.7, 0.28, 6.7, traMorkt, true);
{
  const lock = lada(1.1, 0.08, 0.7, -6.7, 0.75, 6.42, traMorkt);
  lock.rotation.x = -1.1;
  const guld = new THREE.MeshStandardMaterial({ color: 0xd8a93a, metalness: 0.7, roughness: 0.35 });
  lada(1.12, 0.06, 0.72, -6.7, 0.42, 6.7, guld);
}
// fåtölj
{
  const tyg = new THREE.MeshStandardMaterial({ color: 0xc0405a, roughness: 0.9 });
  lada(1.2, 0.45, 1.0, 6.2, 0.23, 6.2, tyg, true);
  lada(1.2, 0.9, 0.25, 6.2, 0.7, 6.65, tyg);
  lada(0.22, 0.65, 1.0, 5.7, 0.55, 6.2, tyg); lada(0.22, 0.65, 1.0, 6.7, 0.55, 6.2, tyg);
}
// blomkrukor
function blomkruka(x, z) {
  const kruka = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.28, 0.7, 16), new THREE.MeshStandardMaterial({ color: 0xc8643c }));
  kruka.position.set(x, 0.35, z); scen.add(kruka);
  const jord = new THREE.Mesh(new THREE.CircleGeometry(0.34, 16), new THREE.MeshStandardMaterial({ color: 0x4a3020 }));
  jord.rotation.x = -Math.PI / 2; jord.position.set(x, 0.68, z); scen.add(jord);
  const blad = new THREE.MeshStandardMaterial({ color: 0x3f9e4d, roughness: 0.8 });
  for (let i = 0; i < 7; i++) {
    const b = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.9, 6), blad);
    const v = (i / 7) * Math.PI * 2;
    b.position.set(x + Math.cos(v) * 0.2, 1.05, z + Math.sin(v) * 0.2);
    b.rotation.set(Math.sin(v) * 0.5, 0, -Math.cos(v) * 0.5);
    scen.add(b);
  }
  spelare.hinder.push(new THREE.Box3(new THREE.Vector3(x - 0.4, 0, z - 0.4), new THREE.Vector3(x + 0.4, 1.4, z + 0.4)));
}
blomkruka(6.6, -6.6);
blomkruka(-6.6, -6.6);

// ---------- Smuts ----------
const smuts = new Smuts(RUM, RUM, { rutnat: 64, upplosning: 512 });
scen.add(smuts.mesh);

// ---------- Sparning och butik ----------
const spar = new Sparning(SPEL_ID, { mynt: 0, nivaer: {}, smuts: '', placerade: [], kristaller: [] }, 2);
const effekt = { radie: 0.45 };
const butik = new Butik(spar, [
  { id: 'virvel', namn: 'Större dammvirvel', ikon: '🌪️', beskrivning: 'Suger upp mer damm', priser: [15, 40, 90],
    effekt: (n) => { effekt.radie = [0.45, 0.65, 0.9, 1.2][n]; } },
  { id: 'kraft', namn: 'Längre magi', ikon: '✨', beskrivning: 'Nå böcker längre bort', priser: [25, 60],
    effekt: (n) => { interaktor.rackvidd = [3.5, 5, 7][n]; } },
  { id: 'skor', namn: 'Snabba skor', ikon: '👟', beskrivning: 'Gå snabbare', priser: [20, 60],
    effekt: (n) => { spelare.fart = [4, 5, 6.2][n]; } },
]);

// ---------- Hyllor ----------
const hyllor = [];
const HYLL_PLATS = [
  { x: -3, z: -RUM / 2 + 0.25, ry: 0 }, { x: 3, z: -RUM / 2 + 0.25, ry: 0 },
  { x: -RUM / 2 + 0.25, z: 0, ry: Math.PI / 2 }, { x: RUM / 2 - 0.25, z: 0, ry: -Math.PI / 2 },
];
FARGER.forEach((f, i) => {
  const p = HYLL_PLATS[i];
  const g = new THREE.Group();
  const B = 2.2, H = 2.1, D = 0.42;
  const del = (w, h, d, x, y, z, mat = traMorkt) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); m.castShadow = true; g.add(m); return m; };
  for (const y of [0.05, 0.73, 1.41]) del(B, 0.06, D, 0, y, 0);
  del(B, 0.06, D, 0, H, 0);
  del(0.06, H, D, -B / 2, H / 2, 0); del(0.06, H, D, B / 2, H / 2, 0); del(B, H, 0.03, 0, H / 2, -D / 2 + 0.015);
  const skyltMat = new THREE.MeshStandardMaterial({ color: f.hex, emissive: f.hex, emissiveIntensity: 0.25 });
  del(1.0, 0.24, 0.05, 0, H + 0.6, 0.1, skyltMat);
  g.position.set(p.x, 0, p.z); g.rotation.y = p.ry;
  scen.add(g);
  g.updateMatrixWorld(true);
  spelare.hinder.push(new THREE.Box3().setFromObject(g));
  const platser = [];
  for (const y of [0.08, 0.76, 1.44]) for (const x of [-0.72, -0.24, 0.24, 0.72]) platser.push(new THREE.Vector3(x, y + 0.2, 0.02));
  const hylla = { farg: f, grupp: g, platser, bocker: [], reserverade: 0, skyltMat };
  hyllor.push(hylla);
  interaktor.registrera(g, {
    text: () => {
      if (!lev.svavar) return '';
      const n = lev.saker.filter((b) => b.userData.farg.id === f.id).length;
      if (!n) return `Fel hylla – det här är den ${f.namnBest} hyllan`;
      return n === 1 ? `Skicka in den ${f.namnBest} boken ✨` : `Skicka in ${n} ${f.namnBest} böcker ✨`;
    },
    kanAktivera: () => lev.svavar,
    aktivera: () => skickaIn(hylla),
  });
});

// ---------- Böcker ----------
const bokGeo = new THREE.BoxGeometry(0.1, 0.38, 0.28);
const bokMat = {};
const bocker = [];
let fro = 11;
const rnd = () => ((fro = (fro * 9301 + 49297) % 233280) / 233280);
// inte på möbler eller precis vid väggarna
const ledigPlats = (x, z) => !spelare.hinder.some((b) => x > b.min.x - 0.3 && x < b.max.x + 0.3 && z > b.min.z - 0.3 && z < b.max.z + 0.3);

function registreraBok(b) {
  const f = b.userData.farg;
  interaktor.registrera(b, {
    text: () => `Lyft den ${f.namnBest} boken 🪄`,
    kanAktivera: () => !lev.full && b.parent === scen && !b.userData.placerad && !b.userData.flyger,
    aktivera: () => lyftBok(b),
  });
}

FARGER.forEach((f) => {
  bokMat[f.id] = new THREE.MeshStandardMaterial({ color: f.hex, roughness: 0.6 });
  for (let i = 0; i < BOCKER_PER_FARG; i++) {
    const b = new THREE.Mesh(bokGeo, bokMat[f.id]);
    b.castShadow = true;
    b.userData = { id: `${f.id}-${i}`, farg: f };
    let x, z, forsok = 0;
    do { x = (rnd() - 0.5) * (RUM - 3); z = (rnd() - 0.5) * (RUM - 3); } while (!ledigPlats(x, z) && ++forsok < 50);
    b.position.set(x, 0.05, z);
    b.rotation.set(0, rnd() * Math.PI * 2, Math.PI / 2);
    scen.add(b);
    bocker.push(b);
    registreraBok(b);
  }
});

const auraMat = new THREE.MeshBasicMaterial({ color: 0xc9a2ff, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide });
function glod(b, pa) {
  if (pa && !b.userData.aura) {
    const a = new THREE.Mesh(bokGeo, auraMat);
    a.scale.setScalar(1.35);
    b.add(a);
    b.userData.aura = a;
  } else if (!pa && b.userData.aura) {
    b.remove(b.userData.aura);
    b.userData.aura = null;
  }
}

function lyftBok(b) {
  if (!lev.lyft(b)) return;
  interaktor.avregistrera(b);
  glod(b, true);
  ljud.svav();
  gnistor.skjut(b.position, { antal: 40, fart: 1.2, spridning: 0.3, liv: 0.9 });
  if (lev.kapacitet === 1) saga(`${stor(b.userData.farg.namn)} bok!`);
  else if (lev.full) saga('Staven är full! Skicka in böckerna.');
}

function slappBok() {
  const b = lev.slapp();
  if (!b) return;
  const h = interaktor.traffa([smuts.mesh, golv], interaktor.rackvidd + 1);
  const mal = h ? h.point.clone() : b.position.clone().setY(0);
  mal.y = 0.05;
  b.userData.flyger = true;
  ljud.slapp();
  lev.flyg(b, {
    mal, rot: new THREE.Euler(0, Math.random() * Math.PI * 2, Math.PI / 2), tid: 0.5, hojd: 0.15,
    klar: () => {
      b.userData.flyger = false;
      glod(b, false);
      gnistor.skjut(b.position, { antal: 12, fart: 0.6, liv: 0.5, farger: [0xc58bff, 0xffffff] });
      registreraBok(b);
    },
  });
}

function placeraIHylla(bok, hylla, tyst = false) {
  const plats = hylla.platser[hylla.bocker.length];
  bok.userData.placerad = true;
  bok.position.copy(plats);
  bok.rotation.set(0, 0, (Math.random() - 0.5) * 0.06);
  hylla.grupp.add(bok);
  hylla.bocker.push(bok);
  hylla.reserverade = Math.max(hylla.reserverade, hylla.bocker.length);
  interaktor.avregistrera(bok);
  if (!tyst && hylla.bocker.length === hylla.platser.length) {
    ljud.klar();
    ui.toast(`Den ${hylla.farg.namnBest} hyllan är klar! ✨`, 'guld');
    saga(`Den ${hylla.farg.namnBest} hyllan är klar!`);
    const v = new THREE.Vector3(); hylla.grupp.getWorldPosition(v); v.y = 1.2;
    gnistor.skjut(v, { antal: 120, fart: 2.5, spridning: 1.2, liv: 1.4, gravitation: 1.5 });
  }
}

function skickaIn(hylla) {
  const ratt = lev.saker.filter((b) => b.userData.farg.id === hylla.farg.id);
  if (!ratt.length) {
    const fel = lev.saker[lev.saker.length - 1];
    ljud.fel();
    ui.toast('Fel hylla! Leta efter rätt färg.', 'fel');
    saga(lev.antal === 1
      ? `Oj, fel hylla. Boken är ${fel.userData.farg.namn}. Leta efter den ${fel.userData.farg.namnBest} hyllan.`
      : 'Oj, ingen av böckerna hör hemma här. Leta efter hyllan med samma färg.');
    lev.saker.forEach((b) => { b.userData.skak = 0.45; });
    return;
  }
  const lediga = hylla.platser.length - hylla.reserverade;
  if (lediga <= 0) { ui.toast('Hyllan är full!', 'fel'); return; }
  const skicka = ratt.slice(0, lediga);
  const rot = new THREE.Quaternion(); hylla.grupp.getWorldQuaternion(rot);
  skicka.forEach((b, i) => {
    const index = hylla.reserverade++;
    lev.slapp(b);
    b.userData.flyger = true;
    const mal = hylla.grupp.localToWorld(hylla.platser[index].clone());
    setTimeout(() => ljud.flyg(), i * 150);
    lev.flyg(b, {
      mal, rot, tid: FLYGTID, hojd: 0.5, fordrojning: i * 0.15,
      varjeBild: (pos) => gnistor.skjut(pos, { antal: 2, fart: 0.25, liv: 0.6, spridning: 0.15 }),
      klar: () => {
        b.userData.flyger = false;
        glod(b, false);
        placeraIHylla(b, hylla);
        spar.data.placerade.push(b.userData.id);
        ljud.landa();
        gnistor.skjut(mal, { antal: 25, fart: 1, liv: 0.7, spridning: 0.2 });
        butik.mynt += MYNT_PER_BOK; ljud.mynt();
        spar.spara();
      },
    });
  });
  ui.toast(`+${MYNT_PER_BOK * skicka.length} 🪙`, 'bra');
}

// ---------- Trollkristaller ----------
const kristaller = [];
const glodTextur = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.35, 'rgba(255,255,255,.5)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
})();
KRISTALL_OMGANGAR.forEach((omg, oi) => {
  omg.platser.forEach((pl) => {
    const g = new THREE.Group();
    const farg = oi === 2 ? 0xffffff : omg.farg;
    const mat = new THREE.MeshStandardMaterial({ color: farg, emissive: omg.farg, emissiveIntensity: 0.9, metalness: 0.2, roughness: 0.15, transparent: true, opacity: 0.92 });
    const k = new THREE.Mesh(new THREE.OctahedronGeometry(0.11), mat);
    k.scale.y = 1.7;
    const sken = new THREE.Sprite(new THREE.SpriteMaterial({ map: glodTextur, color: omg.farg, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    sken.scale.setScalar(0.65);
    // osynlig, större träffyta så att den är lätt att sikta på
    const traffyta = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 8), new THREE.MeshBasicMaterial());
    traffyta.visible = false;
    g.add(k, sken, traffyta);
    g.position.set(...pl.pos);
    g.userData = { id: pl.id, omgang: oi, kristall: k, mat, sken, bas: pl.pos[1], tips: pl.tips };
    g.visible = false;
    scen.add(g);
    kristaller.push(g);
  });
});
const kristallOmgang = () => Math.min(KRISTALL_OMGANGAR.length, Math.floor(spar.data.kristaller.length / 3));
const aktivaKristaller = () => kristaller.filter((k) => k.visible);

function visaKristaller() {
  const omg = kristallOmgang();
  for (const k of kristaller) {
    const hittad = spar.data.kristaller.includes(k.userData.id);
    const synlig = k.userData.omgang === omg && !hittad;
    if (synlig && !k.visible) {
      interaktor.registrera(k, { text: 'Ta trollkristallen 💎', aktivera: () => hittaKristall(k) });
    }
    k.visible = synlig;
  }
  lev.kapacitet = KRAFT_NIVAER[omg];
}

function hittaKristall(k) {
  interaktor.avregistrera(k);
  k.visible = false;
  spar.data.kristaller.push(k.userData.id);
  spar.spara(true);
  ljud.kristall();
  gnistor.skjut(k.position, { antal: 80, fart: 2, spridning: 0.2, liv: 1.1, farger: [KRISTALL_OMGANGAR[k.userData.omgang].farg, 0xffffff, 0xffe27a] });
  const kvar = aktivaKristaller().length;
  if (kvar > 0) {
    ui.toast(`💎 Trollkristall! ${3 - kvar}/3`, 'guld');
    saga(`Du hittade en trollkristall! ${stor(ORD[kvar])} kvar.`);
  } else {
    const fore = lev.kapacitet;
    visaKristaller();
    const nu = lev.kapacitet;
    ljud.stor();
    gnistor.skjut(spets.clone(), { antal: 200, fart: 2.5, liv: 1.6, spridning: 0.4, farger: [0xffe27a, 0xc58bff, 0x8fe8ff, 0xff7ae0] });
    ui.toast(`🪄 Staven är starkare! Lyft ${nu} böcker samtidigt`, 'guld');
    let text = `Wow! Staven blev starkare! Nu kan du lyfta ${ORD[nu] || nu} böcker samtidigt!`;
    if (kristallOmgang() < KRISTALL_OMGANGAR.length) text += ` Nya ${KRISTALL_OMGANGAR[kristallOmgang()].namn}kristaller har gömt sig i rummet. Staven plingar när du är nära.`;
    else text += ' Du har hittat alla trollkristaller!';
    if (nu > fore) setTimeout(() => saga(text), 900);
  }
  ritaKristallChip();
}

// ---------- Ladda sparning ----------
smuts.importera(spar.data.smuts);
for (const id of spar.data.placerade) {
  const b = bocker.find((x) => x.userData.id === id);
  const h = b && hyllor.find((x) => x.farg.id === b.userData.farg.id);
  if (b && h && !b.userData.placerad) { scen.remove(b); placeraIHylla(b, h, true); }
}

// ---------- UI ----------
let forstaStart = true;
const ui = new FpUI({
  titel: '🪄 Trollstaven',
  text: 'Du är en trollkarl! Lyft böckerna med trollstaven och skicka in dem på hyllan med samma färg. Håll inne mot golvet för att suga upp dammet. Hitta de gömda trollkristallerna 💎 så kan staven lyfta fler böcker samtidigt!',
  hjalp: 'Mus eller ← → titta · ↑ ↓ / WASD gå · Klick/E lyft och skicka · Håll inne: suga damm · Esc paus · B butik',
  spelare,
  escPausar: true,
  onStart: () => {
    if (forstaStart) {
      forstaStart = false;
      saga(spar.data.kristaller.length
        ? 'Välkommen tillbaka, trollkarl!'
        : 'Välkommen, trollkarl! Lyft böckerna och skicka in dem på hyllan med samma färg. Leta också efter tre gömda trollkristaller. Staven plingar när du är nära en!');
    }
  },
  onAnvand: (nere) => {
    anvandNere = nere;
    if (!nere) return;
    if (interaktor.hovrad) { interaktor.aktivera(); anvandNere = false; return; }
    if (lev.svavar) { slappBok(); anvandNere = false; }
  },
  onButik: () => ui.oppnaButik(butik),
  onNollstall: () => { spar.nollstall(); location.reload(); },
});
ui.mynt(butik.mynt);
spelare.onLasFel = () => ui.toast('Rör musen för att titta runt 🖱️', 'guld');

// chip med kristaller och stavens kraft
const kristallChip = document.createElement('div');
kristallChip.className = 'fp-chip';
document.querySelector('.fp-topp')?.appendChild(kristallChip);
function ritaKristallChip() {
  const omg = kristallOmgang();
  const igen = omg < KRISTALL_OMGANGAR.length;
  const hittade = spar.data.kristaller.length - omg * 3;
  kristallChip.innerHTML = `🪄 ×${lev.kapacitet}` + (igen ? ` &nbsp;💎 ${hittade}/3` : ' &nbsp;💎 Alla!');
  kristallChip.title = 'Hur många böcker staven orkar lyfta, och hittade trollkristaller';
}

visaKristaller();
ritaKristallChip();

// ---------- Spelloop ----------
let anvandNere = false, rutBank = 0, klar = false, tid = 0, pingTid = 0;
const placeradeTotalt = () => hyllor.reduce((s, h) => s + h.bocker.length, 0);
const ANTAL_BOCKER = FARGER.length * BOCKER_PER_FARG;
const DAMMFARGER = [0x8a7050, 0xb59a70, 0xffe27a, 0xc58bff];
const fot = new THREE.Vector3();

function uppdatera(dt) {
  tid += dt;
  spelare.uppdatera(dt);
  lev.uppdatera(dt);
  gnistor.uppdatera(dt);
  stav.spetsPos(spets);

  for (const b of lev.saker) if (b.userData.skak > 0) { b.userData.skak -= dt; b.position.x += Math.sin(tid * 60) * 0.02; }
  auraMat.opacity = 0.45 + Math.sin(tid * 5) * 0.15;

  // hyllans skylt pulserar när du har en bok i samma färg
  for (const h of hyllor) {
    const match = lev.saker.some((b) => b.userData.farg.id === h.farg.id);
    h.skyltMat.emissiveIntensity = match ? 0.6 + Math.sin(tid * 6) * 0.5 : 0.25;
  }

  // kristallerna snurrar och glittrar
  for (const k of kristaller) {
    if (!k.visible) continue;
    k.userData.kristall.rotation.y += dt * 1.8;
    k.position.y = k.userData.bas + Math.sin(tid * 2 + k.userData.bas * 3) * 0.05;
    k.userData.sken.scale.setScalar(0.55 + Math.sin(tid * 4) * 0.12);
    if (Math.random() < dt * 3) gnistor.skjut(k.position, { antal: 1, fart: 0.3, liv: 0.8, spridning: 0.25, farger: [0xffffff, 0xffe27a] });
  }

  if (!ui.igang) { stav.uppdatera(dt, 0); return; }

  // kristallsökare: staven plingar oftare ju närmare en kristall du är
  let narmast = Infinity;
  fot.set(spelare.pos.x, 0, spelare.pos.z);
  for (const k of aktivaKristaller()) narmast = Math.min(narmast, Math.hypot(k.position.x - fot.x, k.position.z - fot.z));
  let sokKraft = 0;
  if (narmast < SOKAR_AVSTAND) {
    sokKraft = 1 - narmast / SOKAR_AVSTAND;
    pingTid -= dt;
    if (pingTid <= 0) {
      ljud.ping(1 + sokKraft * 0.5);
      pingTid = 0.25 + (1 - sokKraft) * 1.4;
      gnistor.skjut(spets, { antal: 6, fart: 0.5, liv: 0.5, farger: [0xffffff, 0x8fe8ff] });
    }
  }

  interaktor.uppdatera();
  let text = interaktor.text;

  // magisk dammsugning
  let suger = false;
  if (!interaktor.hovrad && !lev.svavar) {
    const h = interaktor.traffa([smuts.mesh], interaktor.rackvidd);
    if (h && anvandNere) {
      suger = true;
      gnistor.skjut(h.point, { antal: 4, farger: DAMMFARGER, fart: 0.9, spridning: effekt.radie * 1.4, liv: 1.4, riktning: new THREE.Vector3(0, 1, 0), mal: spets, malRadie: 0.5 });
      const nya = smuts.borsta(h.point.x, h.point.z, effekt.radie);
      if (nya > 0) {
        ljud.dammsug();
        rutBank += nya;
        if (rutBank >= RUTOR_PER_MYNT) {
          const m = Math.floor(rutBank / RUTOR_PER_MYNT);
          rutBank -= m * RUTOR_PER_MYNT;
          butik.mynt += m;
        }
        spar.data.smuts = smuts.exportera();
        spar.spara();
      }
    } else if (h && !smuts.klar && !text) {
      text = 'Håll inne för att suga upp dammet';
    }
  }
  if (lev.svavar && !interaktor.hovrad) text = lev.full ? `Staven är full (${lev.antal}) – klicka på en hylla, eller här för att släppa` : 'Släpp boken här';
  ui.prompt(text);

  // glitterstråle från staven till böckerna som svävar
  for (const b of lev.saker) {
    if (Math.random() < 0.5 / Math.max(1, lev.antal * 0.5)) {
      gnistor.skjut(spets, { antal: 1, fart: 1, riktning: b.position.clone().sub(spets), liv: 0.5, spridning: 0.02 });
    }
  }
  stav.kraft += ((suger ? 1 : lev.svavar ? 0.45 : sokKraft * 0.7) - stav.kraft) * Math.min(1, dt * 8);
  stav.uppdatera(dt, spelare.rorelse);

  const pct = (smuts.procent / 100) * 50 + (placeradeTotalt() / ANTAL_BOCKER) * 50;
  ui.framsteg(pct, 'Rummet');
  ui.mynt(butik.mynt);

  if (!klar && smuts.klar && placeradeTotalt() === ANTAL_BOCKER) {
    klar = true;
    ljud.stor();
    saga('Hurra! Hela rummet är klart! Du är en riktig trollkarl!');
    gnistor.skjut(kamera.position.clone().add(new THREE.Vector3(0, 0.5, -1)), { antal: 300, fart: 3, liv: 2, gravitation: 2, spridning: 2 });
    setTimeout(() => {
      if (document.pointerLockElement) document.exitPointerLock();
      ui.visaStart('🎉 Rummet är klart!', 'Allt är rent och sorterat. Du är en riktig trollkarl!', 'Fortsätt trolla');
    }, 1500);
  }
}

// för automatiska tester
window.__testrummet = { spelare, interaktor, lev, stav, gnistor, smuts, butik, spar, bocker, hyllor, kristaller, ui, hittaKristall };

startaLoop(uppdatera, { scen, kamera, renderer });
