// =============================================================
//  TROLLSTAVEN – BOKLABYRINTEN (spel/testrummet) 🪄 – idé: Beppe
//  Peka på en bok och tryck → den lyfts med magi och svävar runt staven.
//  Peka på rätt färghylla och tryck → böckerna seglar in.
//  Håll inne mot golvet → staven suger upp dammet.
//  Hitta trollkristallerna, en i taget → staven orkar lyfta fler böcker.
//  Högar och skattkistor kan gömma både böcker och kristaller.
// =============================================================
import { THREE, skapaSpel, startaLoop } from '../../delat/motor.js';
import { Spelare, Interaktor, Smuts, Sparning, Butik, ljud, FpUI, Gnistor, Trollstav, Levitation } from '../../delat/fp/index.js';

const SPEL_ID = 'testrummet';

// ---------- Inställningar (lek fritt med dessa) ----------
// Labyrinten: # = vägg, . = gång, h = hög (trolla bort), k = skattkista (öppna)
// Varje tecken är en ruta på RUTA × RUTA meter. Norr (överst) är bort från start.
const KARTA = [
  'h..k#..#....',
  '.##.#..#.##.',
  '.#...#...#h.',
  '.#.###.###.#',
  '...#.....#..',
  '##.#.....#.#',
  'h..#.....#.k',
  '.###.##.##.#',
  '...#.#...#..',
  '.#.#.#.#.##.',
  '.#h..#.#....',
  'k...##.##..h',
];
const RUTA = 2;                       // meter per ruta (gångarnas bredd)
const VAGG_HOJD = 3.4;
const BOCKER_PER_FARG = 12;           // 4 färger × 12 = 48 böcker
const BOCKER_I_HOG = 2;               // böcker gömda i varje hög
const BOCKER_I_KISTA = 3;             // böcker gömda i varje skattkista
const MYNT_PER_BOK = 3;
const RUTOR_PER_MYNT = 12;            // hur mycket damm man suger upp per mynt
const FLYGTID = 0.8;                  // sekunder för en bok att flyga in i hyllan
const UPPLASNING = true;              // läs upp med svensk röst
const SOKAR_AVSTAND = 6;              // inom så här många meter börjar staven pinga
// Hur många böcker staven orkar lyfta: start, efter 3, 6 och 9 kristaller
const KRAFT_NIVAER = [1, 3, 6, 10];
const FARGER = [
  { id: 'rod', namn: 'röd', namnBest: 'röda', hex: 0xe5484d },
  { id: 'bla', namn: 'blå', namnBest: 'blå', hex: 0x3b82f6 },
  { id: 'gron', namn: 'grön', namnBest: 'gröna', hex: 0x2fb36b },
  { id: 'gul', namn: 'gul', namnBest: 'gula', hex: 0xf5b82e },
];
// Kristallerna kommer en i taget, i den här ordningen. Var tredje gör staven starkare.
// rad/kol = ruta i KARTA. y = höjd. Ligger kristallen i en hög eller kista syns den först när den är öppnad.
const KRISTALLER = [
  { id: 'k1', rad: 4, kol: 6, y: 0.98, tips: 'på bordet i mitten' },
  { id: 'k2', rad: 11, kol: 6, y: 0.22, tips: 'längst bort i en korridor' },
  { id: 'k3', rad: 6, kol: 0, y: 0.22, tips: 'i en hög. Trolla bort högen!' },
  { id: 'k4', rad: 11, kol: 0, y: 0.62, tips: 'i en skattkista. Öppna den!' },
  { id: 'k5', x: 8, z: -11.6, y: 2.32, tips: 'högt uppe. Titta upp på hyllorna!' },
  { id: 'k6', rad: 2, kol: 10, y: 0.22, tips: 'i en hög' },
  { id: 'k7', rad: 10, kol: 2, y: 0.22, tips: 'i en hög' },
  { id: 'k8', rad: 6, kol: 11, y: 0.62, tips: 'i en skattkista' },
  { id: 'k9', rad: 0, kol: 0, y: 0.22, tips: 'i högen längst bort i ett hörn' },
];
const KRISTALL_FARGER = [0x6fd8ff, 0xffd447, 0xff7ae0];   // blå, guld, regnbåge (per omgång)
const OMGANG_NAMN = ['blå', 'guld', 'regnbåge'];

const RADER = KARTA.length, KOLUMNER = KARTA[0].length;
const BREDD = KOLUMNER * RUTA, DJUP = RADER * RUTA;
const rutX = (kol) => -BREDD / 2 + RUTA * (kol + 0.5);
const rutZ = (rad) => -DJUP / 2 + RUTA * (rad + 0.5);
const rutaVid = (x, z) => {
  const kol = Math.floor((x + BREDD / 2) / RUTA), rad = Math.floor((z + DJUP / 2) / RUTA);
  return rad < 0 || kol < 0 || rad >= RADER || kol >= KOLUMNER ? '#' : KARTA[rad][kol];
};
const saga = (t) => { if (UPPLASNING) ljud.saga(t); };
const stor = (t) => t[0].toUpperCase() + t.slice(1);
const ORD = ['noll', 'en', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
let fro = 11;
const rnd = () => ((fro = (fro * 9301 + 49297) % 233280) / 233280);

// ---------- Scen ----------
const { scen, kamera, renderer, sol } = skapaSpel({ bakgrund: 0xdfe8f2, dimma: false });
kamera.near = 0.05; kamera.updateProjectionMatrix();
scen.add(kamera);
sol.position.set(4, 10, 3);
sol.intensity = 0.9;
scen.add(new THREE.AmbientLight(0xffffff, 0.5));

const golv = new THREE.Mesh(new THREE.PlaneGeometry(BREDD, DJUP), new THREE.MeshStandardMaterial({ color: 0xc8a27a, roughness: 0.8 }));
golv.rotation.x = -Math.PI / 2; golv.receiveShadow = true; scen.add(golv);

// bokryggar som tapet på väggarna (det är ett magiskt bibliotek)
function bokryggTextur() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 512;
  const x = c.getContext('2d');
  x.fillStyle = '#4a2f1b'; x.fillRect(0, 0, 256, 512);
  const farger = ['#7d3b3b', '#3b5a7d', '#4d6e45', '#8a7a3b', '#5e3f73', '#8a5a3b', '#3f6b6b', '#6b6b6b'];
  let s = 7; const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  for (let hylla = 0; hylla < 4; hylla++) {
    const y0 = hylla * 128 + 14;
    x.fillStyle = '#2e1c10'; x.fillRect(0, y0 + 104, 256, 10);
    for (let px = 6; px < 250;) {
      const w = 8 + r() * 14, h = 70 + r() * 30;
      x.fillStyle = farger[Math.floor(r() * farger.length)];
      x.fillRect(px, y0 + 104 - h, w - 1.5, h);
      x.fillStyle = 'rgba(255,255,255,.18)'; x.fillRect(px + 2, y0 + 104 - h + 10, w - 5, 3);
      px += w;
    }
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const ryggTex = bokryggTextur();
const traMorkt = new THREE.MeshStandardMaterial({ color: 0x6b4426, roughness: 0.8 });
const traLjust = new THREE.MeshStandardMaterial({ color: 0xa8743f, roughness: 0.7 });

// ytterväggar
for (const [x, z, ry, langd] of [[0, -DJUP / 2, 0, BREDD], [0, DJUP / 2, Math.PI, BREDD], [-BREDD / 2, 0, Math.PI / 2, DJUP], [BREDD / 2, 0, -Math.PI / 2, DJUP]]) {
  const t = ryggTex.clone(); t.wrapS = THREE.RepeatWrapping; t.repeat.set(langd / RUTA, 1); t.needsUpdate = true;
  const v = new THREE.Mesh(new THREE.PlaneGeometry(langd, VAGG_HOJD), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }));
  v.position.set(x, VAGG_HOJD / 2, z); v.rotation.y = ry; scen.add(v);
}
// labyrintens väggar: bokhyllor i varje #-ruta
const vaggRutor = [];
KARTA.forEach((rad, r) => [...rad].forEach((t, k) => { if (t === '#') vaggRutor.push([r, k]); }));
const sidaMat = new THREE.MeshStandardMaterial({ map: ryggTex, roughness: 0.9 });
const vaggar = new THREE.InstancedMesh(new THREE.BoxGeometry(RUTA, VAGG_HOJD, RUTA), [sidaMat, sidaMat, traMorkt, traMorkt, sidaMat, sidaMat], vaggRutor.length);
{
  const m = new THREE.Matrix4();
  vaggRutor.forEach(([r, k], i) => { m.makeTranslation(rutX(k), VAGG_HOJD / 2, rutZ(r)); vaggar.setMatrixAt(i, m); });
  vaggar.castShadow = true; vaggar.receiveShadow = true;
  scen.add(vaggar);
}
const tak = new THREE.Mesh(new THREE.PlaneGeometry(BREDD, DJUP), new THREE.MeshStandardMaterial({ color: 0x2b2550, emissive: 0x1a1640 }));
tak.rotation.x = Math.PI / 2; tak.position.y = VAGG_HOJD; scen.add(tak);
{
  const g = new THREE.BufferGeometry(), p = [];
  for (let i = 0; i < 600; i++) p.push((Math.random() - 0.5) * BREDD, VAGG_HOJD - 0.02, (Math.random() - 0.5) * DJUP);
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  scen.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xfff3c4, size: 0.05 })));
}
scen.add(new THREE.HemisphereLight(0xfff4e0, 0x6b4a30, 0.6));
{ const l = new THREE.PointLight(0xfff1d6, 30, 16); l.position.set(1, VAGG_HOJD - 0.4, -1); scen.add(l); }

// ---------- Spelare, interaktion, magi ----------
const spelare = new Spelare(kamera, renderer.domElement, {
  start: [1, 0, 1.4], granser: { minX: -BREDD / 2, maxX: BREDD / 2, minZ: -DJUP / 2, maxZ: DJUP / 2 },
  pilarSvanger: true,          // ← → svänger, ↑ ↓ går (lätt för barn)
});
for (const [r, k] of vaggRutor) {
  spelare.hinder.push(new THREE.Box3(new THREE.Vector3(rutX(k) - RUTA / 2, 0, rutZ(r) - RUTA / 2), new THREE.Vector3(rutX(k) + RUTA / 2, VAGG_HOJD, rutZ(r) + RUTA / 2)));
}
const interaktor = new Interaktor(kamera, scen, { rackvidd: 3.5 });
interaktor.blockerare.push(vaggar);           // man kan inte trolla genom väggar
const stav = new Trollstav(kamera);
const lev = new Levitation(kamera, { kapacitet: 1 });
const gnistor = new Gnistor(scen, { max: 1400 });
const spets = new THREE.Vector3();

// fri plats på golvet? (inte i vägg, inte i möbler)
const friPunkt = (x, z, marg = 0.3) =>
  [[0, 0], [marg, 0], [-marg, 0], [0, marg], [0, -marg]].every(([dx, dz]) => rutaVid(x + dx, z + dz) !== '#')
  && !spelare.hinder.some((b) => x > b.min.x - marg && x < b.max.x + marg && z > b.min.z - marg && z < b.max.z + marg);

// ---------- Inredning i mitten ----------
function lada(w, h, d, x, y, z, mat, hinder = false, foralder = scen) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; foralder.add(m);
  if (hinder) spelare.hinder.push(new THREE.Box3().setFromObject(m));
  return m;
}
{
  const m = new THREE.Mesh(new THREE.CircleGeometry(2.2, 40), new THREE.MeshStandardMaterial({ color: 0x7b4fbf, roughness: 1 }));
  m.rotation.x = -Math.PI / 2; m.position.set(1, 0.012, -1); scen.add(m);
  const k = new THREE.Mesh(new THREE.RingGeometry(1.95, 2.08, 40), new THREE.MeshStandardMaterial({ color: 0xffd447 }));
  k.rotation.x = -Math.PI / 2; k.position.set(1, 0.014, -1); scen.add(k);
}
lada(1.6, 0.08, 1.0, 1, 0.78, -3, traLjust);
for (const [x, z] of [[0.28, -3.42], [1.72, -3.42], [0.28, -2.58], [1.72, -2.58]]) lada(0.08, 0.76, 0.08, x, 0.38, z, traLjust);
spelare.hinder.push(new THREE.Box3(new THREE.Vector3(0.2, 0, -3.5), new THREE.Vector3(1.8, 0.82, -2.5)));
function blomkruka(x, z) {
  const kruka = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.28, 0.7, 16), new THREE.MeshStandardMaterial({ color: 0xc8643c }));
  kruka.position.set(x, 0.35, z); scen.add(kruka);
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
blomkruka(-2.6, -3.6);
blomkruka(4.6, -3.6);

// ---------- Smuts ----------
const smuts = new Smuts(BREDD, DJUP, { rutnat: 96, upplosning: 1024 });
scen.add(smuts.mesh);

// ---------- Sparning och butik ----------
const spar = new Sparning(SPEL_ID, { mynt: 0, nivaer: {}, smuts: '', placerade: [], kristaller: [], oppnade: [] }, 3);
const effekt = { radie: 0.45 };
const butik = new Butik(spar, [
  { id: 'virvel', namn: 'Större dammvirvel', ikon: '🌪️', beskrivning: 'Suger upp mer damm', priser: [15, 40, 90],
    effekt: (n) => { effekt.radie = [0.45, 0.65, 0.9, 1.2][n]; } },
  { id: 'kraft', namn: 'Längre magi', ikon: '✨', beskrivning: 'Nå böcker längre bort', priser: [25, 60],
    effekt: (n) => { interaktor.rackvidd = [3.5, 5, 7][n]; } },
  { id: 'skor', namn: 'Snabba skor', ikon: '👟', beskrivning: 'Gå snabbare', priser: [20, 60],
    effekt: (n) => { spelare.fart = [4, 5, 6.2][n]; } },
]);

// ---------- Hyllor (i labyrintens fyra hörn) ----------
const hyllor = [];
const HYLL_PLATS = [
  { x: -8, z: -DJUP / 2 + 0.25, ry: 0 }, { x: 8, z: -DJUP / 2 + 0.25, ry: 0 },
  { x: -8, z: DJUP / 2 - 0.25, ry: Math.PI }, { x: 8, z: DJUP / 2 - 0.25, ry: Math.PI },
];
FARGER.forEach((f, i) => {
  const p = HYLL_PLATS[i];
  const g = new THREE.Group();
  const B = 1.9, H = 2.1, D = 0.42;
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
  for (const y of [0.08, 0.76, 1.44]) for (const x of [-0.66, -0.22, 0.22, 0.66]) platser.push(new THREE.Vector3(x, y + 0.2, 0.02));
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

// ---------- Högar och skattkistor (gömställen) ----------
const behallare = [];
const HOG_FARGER = [0xf4a7b9, 0xa7d8f4, 0xf9e2a2, 0xc7b3f2, 0xb8e6c1, 0xf6c39b];
const guldMat = new THREE.MeshStandardMaterial({ color: 0xd8a93a, metalness: 0.7, roughness: 0.35 });
KARTA.forEach((rad, r) => [...rad].forEach((t, k) => {
  if (t !== 'h' && t !== 'k') return;
  const x = rutX(k), z = rutZ(r);
  const g = new THREE.Group(); g.position.set(x, 0, z); scen.add(g);
  const b = { id: `${t}${r}-${k}`, typ: t === 'h' ? 'hog' : 'kista', x, z, grupp: g, bocker: [], oppen: false };
  if (b.typ === 'hog') {
    // en mjuk hög med kuddar och tyg
    b.delar = [];
    for (let i = 0; i < 20; i++) {
      const v = rnd() * Math.PI * 2, a = 0.6 * Math.sqrt(rnd());
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.28 + rnd() * 0.12, 12, 8),
        new THREE.MeshStandardMaterial({ color: HOG_FARGER[i % HOG_FARGER.length], roughness: 0.95 }));
      m.scale.set(1.2, 0.55, 0.9);
      m.position.set(Math.cos(v) * a, 0.12 + (0.6 - a) * 0.75, Math.sin(v) * a);
      m.rotation.set(rnd() - 0.5, rnd() * 3, rnd() - 0.5);
      m.castShadow = true;
      g.add(m); b.delar.push(m);
    }
    b.hinder = new THREE.Box3(new THREE.Vector3(x - 0.75, 0, z - 0.75), new THREE.Vector3(x + 0.75, 0.9, z + 0.75));
  } else {
    // skattkista med lock som kan öppnas
    lada(1.1, 0.55, 0.7, 0, 0.28, 0, traMorkt, false, g);
    lada(1.12, 0.06, 0.72, 0, 0.42, 0, guldMat, false, g);
    b.lock = new THREE.Group(); b.lock.position.set(0, 0.55, -0.35); g.add(b.lock);
    lada(1.1, 0.2, 0.7, 0, 0.1, 0.35, traMorkt, false, b.lock);
    lada(0.16, 0.16, 0.05, 0, 0.0, 0.71, guldMat, false, b.lock);
    b.hinder = new THREE.Box3(new THREE.Vector3(x - 0.6, 0, z - 0.4), new THREE.Vector3(x + 0.6, 0.8, z + 0.4));
  }
  spelare.hinder.push(b.hinder);
  behallare.push(b);
  interaktor.registrera(g, {
    text: b.typ === 'hog' ? 'Trolla bort högen ✨' : 'Öppna skattkistan 🗝️',
    kanAktivera: () => !b.oppen && !lev.svavar,
    aktivera: () => oppna(b),
  });
}));

// ---------- Böcker ----------
const bokGeo = new THREE.BoxGeometry(0.1, 0.38, 0.28);
const bokMat = {};
const bocker = [];

function registreraBok(b) {
  const f = b.userData.farg;
  interaktor.registrera(b, {
    text: () => `Lyft den ${f.namnBest} boken 🪄`,
    kanAktivera: () => !lev.full && b.parent === scen && !b.userData.placerad && !b.userData.flyger,
    aktivera: () => lyftBok(b),
  });
}

// blanda färgerna så att gömda böcker får olika färger
const bokFarger = [];
FARGER.forEach((f) => { bokMat[f.id] = new THREE.MeshStandardMaterial({ color: f.hex, roughness: 0.6 }); for (let i = 0; i < BOCKER_PER_FARG; i++) bokFarger.push([f, i]); });
for (let i = bokFarger.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [bokFarger[i], bokFarger[j]] = [bokFarger[j], bokFarger[i]]; }
const friaRutor = [];
KARTA.forEach((rad, r) => [...rad].forEach((t, k) => { if (t === '.' && !(r === 6 && k === 6)) friaRutor.push([r, k]); }));
for (let i = friaRutor.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [friaRutor[i], friaRutor[j]] = [friaRutor[j], friaRutor[i]]; }

let rutIndex = 0;
bokFarger.forEach(([f, i]) => {
  const b = new THREE.Mesh(bokGeo, bokMat[f.id]);
  b.castShadow = true;
  b.userData = { id: `${f.id}-${i}`, farg: f };
  b.rotation.set(0, rnd() * Math.PI * 2, Math.PI / 2);
  scen.add(b);
  bocker.push(b);
  // först fylls gömställena, sen läggs resten ut i gångarna
  const gomstalle = behallare.find((c) => c.bocker.length < (c.typ === 'hog' ? BOCKER_I_HOG : BOCKER_I_KISTA));
  if (gomstalle) {
    gomstalle.bocker.push(b);
    b.visible = false;
    b.position.set(gomstalle.x, 0.3, gomstalle.z);
    return;
  }
  let x, z, forsok = 0;
  do {
    const [r, k] = friaRutor[rutIndex++ % friaRutor.length];
    x = rutX(k) + (rnd() - 0.5) * 1.1; z = rutZ(r) + (rnd() - 0.5) * 1.1;
  } while (!friPunkt(x, z, 0.2) && ++forsok < 40);
  b.position.set(x, 0.05, z);
  registreraBok(b);
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

const framat = new THREE.Vector3();
function slappBok() {
  const b = lev.slapp();
  if (!b) return;
  const h = interaktor.traffa([smuts.mesh, golv, vaggar], interaktor.rackvidd + 1);
  let mal;
  if (h && h.object !== vaggar && friPunkt(h.point.x, h.point.z, 0.15)) mal = h.point.clone();
  else {
    // pekar man på en vägg landar boken framför fötterna
    kamera.getWorldDirection(framat); framat.y = 0; framat.normalize();
    mal = spelare.pos.clone().addScaledVector(framat, 0.7);
    if (!friPunkt(mal.x, mal.z, 0.1)) mal.copy(spelare.pos);
  }
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
  bok.visible = true;
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

// ---------- Små animationer ----------
const animationer = [];
const animera = (tid, steg, klar) => animationer.push({ t: 0, tid, steg, klar });

// var böckerna landar när ett gömställe öppnas (runt gömstället, på fri plats)
function spridPlats(c, i) {
  for (let f = 0; f < 24; f++) {
    const v = (i * 2.1 + f * 0.9), r = 1.0 + (f % 3) * 0.25;
    const x = c.x + Math.cos(v) * r, z = c.z + Math.sin(v) * r;
    if (friPunkt(x, z, 0.2)) return new THREE.Vector3(x, 0.05, z);
  }
  return new THREE.Vector3(c.x, 0.05, c.z + 0.9);
}

function oppna(c, direkt = false) {
  if (c.oppen) return;
  c.oppen = true;
  interaktor.avregistrera(c.grupp);
  if (c.typ === 'hog') {
    const i = spelare.hinder.indexOf(c.hinder);
    if (i >= 0) spelare.hinder.splice(i, 1);
  }
  if (direkt) {
    if (c.typ === 'hog') scen.remove(c.grupp);
    else c.lock.rotation.x = -1.9;
    c.bocker.forEach((b, i) => {
      if (b.userData.placerad) return;
      b.visible = true;
      b.position.copy(spridPlats(c, i));
      registreraBok(b);
    });
  } else {
    if (!spar.data.oppnade.includes(c.id)) spar.data.oppnade.push(c.id);
    spar.spara(true);
    ljud.magi();
    const mitt = new THREE.Vector3(c.x, 0.5, c.z);
    gnistor.skjut(mitt, { antal: 120, fart: 2.2, spridning: 0.6, liv: 1.2, farger: [0xffe27a, 0xc58bff, 0xffffff] });
    if (c.typ === 'hog') {
      const fart = c.delar.map((d) => new THREE.Vector3(d.position.x * 3, 2 + Math.random() * 2, d.position.z * 3));
      animera(0.8, (p, dt) => c.delar.forEach((d, i) => {
        d.position.addScaledVector(fart[i], dt);
        d.rotation.y += dt * 6;
        d.scale.multiplyScalar(1 - dt * 3);
      }), () => scen.remove(c.grupp));
    } else {
      animera(0.6, (p) => { c.lock.rotation.x = -1.9 * (1 - (1 - p) ** 3); });
    }
    let n = 0;
    c.bocker.forEach((b, i) => {
      if (b.userData.placerad) return;
      b.visible = true;
      b.userData.flyger = true;
      b.position.set(c.x, 0.4, c.z);
      setTimeout(() => ljud.svav(), 250 + n * 150);
      lev.flyg(b, {
        mal: spridPlats(c, i), rot: new THREE.Euler(0, Math.random() * Math.PI * 2, Math.PI / 2), tid: 0.7, hojd: 1.2, fordrojning: 0.25 + n++ * 0.15,
        klar: () => { b.userData.flyger = false; registreraBok(b); },
      });
    });
    const k = aktuellKristall();
    if (k && k.userData.gomstalle === c) setTimeout(() => saga('Där är trollkristallen!'), 700);
    else if (n) setTimeout(() => saga(n === 1 ? 'En bok var gömd här!' : `${stor(ORD[n])} böcker var gömda här!`), 700);
    else setTimeout(() => saga('Tomt! Leta vidare.'), 700);
    visaKristaller();
  }
}

// ---------- Trollkristaller (en i taget) ----------
const kristaller = [];
const glodTextur = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.35, 'rgba(255,255,255,.5)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
})();
KRISTALLER.forEach((kd, i) => {
  const omg = Math.floor(i / 3);
  const fargOmg = KRISTALL_FARGER[omg];
  const x = kd.x ?? rutX(kd.kol), z = kd.z ?? rutZ(kd.rad);
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: omg === 2 ? 0xffffff : fargOmg, emissive: fargOmg, emissiveIntensity: 0.9, metalness: 0.2, roughness: 0.15, transparent: true, opacity: 0.92 });
  const k = new THREE.Mesh(new THREE.OctahedronGeometry(0.11), mat);
  k.scale.y = 1.7;
  const sken = new THREE.Sprite(new THREE.SpriteMaterial({ map: glodTextur, color: fargOmg, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  sken.scale.setScalar(0.65);
  // osynlig, större träffyta så att den är lätt att sikta på
  const traffyta = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 8), new THREE.MeshBasicMaterial());
  traffyta.visible = false;
  g.add(k, sken, traffyta);
  g.position.set(x, kd.y, z);
  const gomstalle = behallare.find((c) => Math.hypot(c.x - x, c.z - z) < 0.9) || null;
  g.userData = { id: kd.id, nr: i, omgang: omg, kristall: k, sken, bas: kd.y, tips: kd.tips, gomstalle };
  g.visible = false;
  scen.add(g);
  kristaller.push(g);
});
const hittadeAntal = () => spar.data.kristaller.length;
const aktuellKristall = () => kristaller[hittadeAntal()] || null;

function visaKristaller() {
  const nu = aktuellKristall();
  for (const k of kristaller) {
    const synlig = k === nu && (!k.userData.gomstalle || k.userData.gomstalle.oppen);
    if (synlig && !k.visible) interaktor.registrera(k, { text: 'Ta trollkristallen 💎', aktivera: () => hittaKristall(k) });
    if (!synlig && k.visible) interaktor.avregistrera(k);
    k.visible = synlig;
  }
  lev.kapacitet = KRAFT_NIVAER[Math.min(KRAFT_NIVAER.length - 1, Math.floor(hittadeAntal() / 3))];
  ritaHud();
}

function hittaKristall(k) {
  if (k !== aktuellKristall()) return;
  spar.data.kristaller.push(k.userData.id);
  spar.spara(true);
  ljud.kristall();
  gnistor.skjut(k.position, { antal: 80, fart: 2, spridning: 0.2, liv: 1.1, farger: [KRISTALL_FARGER[k.userData.omgang], 0xffffff, 0xffe27a] });
  const fore = lev.kapacitet;
  visaKristaller();
  const nu = lev.kapacitet, nasta = aktuellKristall();
  if (nu > fore) {
    ljud.stor();
    gnistor.skjut(spets.clone(), { antal: 200, fart: 2.5, liv: 1.6, spridning: 0.4, farger: [0xffe27a, 0xc58bff, 0x8fe8ff, 0xff7ae0] });
    ui.toast(`🪄 Staven är starkare! Lyft ${nu} böcker samtidigt`, 'guld');
    let text = `Wow! Staven blev starkare! Nu kan du lyfta ${ORD[nu] || nu} böcker samtidigt!`;
    if (nasta) text += ` Nästa utmaning: en ${OMGANG_NAMN[nasta.userData.omgang]}kristall. Den är gömd ${nasta.userData.tips}`;
    else text += ' Du har hittat alla trollkristaller!';
    setTimeout(() => saga(text), 900);
  } else {
    ui.toast(`💎 Trollkristall! ${hittadeAntal() % 3}/3`, 'guld');
    saga(`Du hittade en trollkristall! Nästa är gömd ${nasta.userData.tips}`);
  }
}

// ---------- Ladda sparning ----------
smuts.importera(spar.data.smuts);
for (const [r, k] of vaggRutor) smuts.raknaSomRen(rutX(k) - RUTA / 2, rutZ(r) - RUTA / 2, rutX(k) + RUTA / 2, rutZ(r) + RUTA / 2);
for (const id of spar.data.placerade) {
  const b = bocker.find((x) => x.userData.id === id);
  const h = b && hyllor.find((x) => x.farg.id === b.userData.farg.id);
  if (b && h && !b.userData.placerad) { interaktor.avregistrera(b); placeraIHylla(b, h, true); }
}
for (const c of behallare) if (spar.data.oppnade.includes(c.id)) oppna(c, true);

// ---------- UI ----------
let forstaStart = true;
const ui = new FpUI({
  titel: '🪄 Trollstaven – Boklabyrinten',
  text: 'Du är en trollkarl i ett magiskt bibliotek! Lyft böckerna med trollstaven och skicka in dem på hyllan med samma färg. Hyllorna står i labyrintens hörn. Hitta trollkristallerna 💎 en i taget, så kan staven lyfta fler böcker. Högar och skattkistor kan gömma saker!',
  hjalp: 'Mus eller ← → titta · ↑ ↓ / WASD gå · Klick/E lyft, skicka, öppna · Håll inne: suga damm · Esc paus · B butik',
  spelare,
  escPausar: true,
  onStart: () => {
    if (!forstaStart) return;
    forstaStart = false;
    const k = aktuellKristall();
    const tips = k ? ` Första utmaningen: hitta trollkristallen. Den ligger ${k.userData.tips}` : '';
    saga(hittadeAntal() ? `Välkommen tillbaka, trollkarl!${k ? ' Nästa kristall är gömd ' + k.userData.tips : ''}`
      : `Välkommen till boklabyrinten, trollkarl! Skicka in böckerna på hyllan med samma färg.${tips}`);
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

// chip med stavens kraft + kort med aktuell utmaning
const kristallChip = document.createElement('div');
kristallChip.className = 'fp-chip';
kristallChip.title = 'Hur många böcker staven orkar lyfta';
document.querySelector('.fp-topp')?.appendChild(kristallChip);
const utmaning = document.createElement('div');
Object.assign(utmaning.style, {
  position: 'fixed', top: '62px', left: '50%', transform: 'translateX(-50%)', zIndex: 30, pointerEvents: 'none',
  background: 'rgba(20,26,51,.82)', color: '#fff', padding: '7px 16px', borderRadius: '999px',
  font: '600 15px system-ui, sans-serif', whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(0,0,0,.25)',
});
document.body.appendChild(utmaning);
function ritaHud() {
  kristallChip.textContent = `🪄 ×${lev.kapacitet}`;
  const k = aktuellKristall();
  utmaning.textContent = k
    ? `💎 Utmaning ${k.userData.nr + 1} av ${KRISTALLER.length}: kristallen är ${k.userData.tips.split('.')[0]}`
    : '💎 Alla trollkristaller hittade!';
}

visaKristaller();

// ---------- Spelloop ----------
let anvandNere = false, rutBank = 0, klar = false, tid = 0, pingTid = 0;
// golvet under väggarna räknas som rent, så räkna bort det i procenten
const VAGG_ANDEL = (vaggRutor.length * RUTA * RUTA) / (BREDD * DJUP) * 100;
const dammProcent = () => Math.max(0, (smuts.procent - VAGG_ANDEL) / (100 - VAGG_ANDEL) * 100);
const placeradeTotalt = () => hyllor.reduce((s, h) => s + h.bocker.length, 0);
const ANTAL_BOCKER = FARGER.length * BOCKER_PER_FARG;
const DAMMFARGER = [0x8a7050, 0xb59a70, 0xffe27a, 0xc58bff];

function uppdatera(dt) {
  tid += dt;
  spelare.uppdatera(dt);
  lev.uppdatera(dt);
  gnistor.uppdatera(dt);
  stav.spetsPos(spets);
  for (let i = animationer.length - 1; i >= 0; i--) {
    const a = animationer[i];
    a.t += dt;
    const p = Math.min(1, a.t / a.tid);
    a.steg(p, dt);
    if (p >= 1) { animationer.splice(i, 1); a.klar?.(); }
  }

  for (const b of lev.saker) if (b.userData.skak > 0) { b.userData.skak -= dt; b.position.x += Math.sin(tid * 60) * 0.02; }
  auraMat.opacity = 0.45 + Math.sin(tid * 5) * 0.15;

  // hyllans skylt pulserar när du har en bok i samma färg
  for (const h of hyllor) {
    const match = lev.saker.some((b) => b.userData.farg.id === h.farg.id);
    h.skyltMat.emissiveIntensity = match ? 0.6 + Math.sin(tid * 6) * 0.5 : 0.25;
  }

  // kristallen snurrar och glittrar
  const nu = aktuellKristall();
  if (nu && nu.visible) {
    nu.userData.kristall.rotation.y += dt * 1.8;
    nu.position.y = nu.userData.bas + Math.sin(tid * 2) * 0.05;
    nu.userData.sken.scale.setScalar(0.55 + Math.sin(tid * 4) * 0.12);
    if (Math.random() < dt * 3) gnistor.skjut(nu.position, { antal: 1, fart: 0.3, liv: 0.8, spridning: 0.25, farger: [0xffffff, 0xffe27a] });
  }

  if (!ui.igang) { stav.uppdatera(dt, 0); return; }

  // kristallsökare: staven plingar oftare ju närmare kristallen du är
  let sokKraft = 0;
  if (nu) {
    const avst = Math.hypot(nu.position.x - spelare.pos.x, nu.position.z - spelare.pos.z);
    if (avst < SOKAR_AVSTAND) {
      sokKraft = 1 - avst / SOKAR_AVSTAND;
      pingTid -= dt;
      if (pingTid <= 0) {
        ljud.ping(1 + sokKraft * 0.5);
        pingTid = 0.25 + (1 - sokKraft) * 1.4;
        gnistor.skjut(spets, { antal: 6, fart: 0.5, liv: 0.5, farger: [0xffffff, 0x8fe8ff] });
        // gömstället glittrar lite när man är nära
        const c = nu.userData.gomstalle;
        if (c && !c.oppen && sokKraft > 0.5) gnistor.skjut(new THREE.Vector3(c.x, 0.9, c.z), { antal: 10, fart: 0.6, liv: 0.9, spridning: 0.4, farger: [KRISTALL_FARGER[nu.userData.omgang], 0xffffff] });
      }
    }
  }

  interaktor.uppdatera();
  let text = interaktor.text;

  // magisk dammsugning
  let suger = false;
  if (!interaktor.hovrad && !lev.svavar) {
    const h = interaktor.traffa([smuts.mesh, vaggar], interaktor.rackvidd);
    if (h && h.object === smuts.mesh && anvandNere) {
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
    } else if (h && h.object === smuts.mesh && !smuts.klar && !text) {
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

  const pct = (dammProcent() / 100) * 50 + (placeradeTotalt() / ANTAL_BOCKER) * 50;
  ui.framsteg(pct, 'Biblioteket');
  ui.mynt(butik.mynt);

  if (!klar && smuts.klar && placeradeTotalt() === ANTAL_BOCKER) {
    klar = true;
    ljud.stor();
    saga('Hurra! Hela biblioteket är klart! Du är en riktig trollkarl!');
    gnistor.skjut(kamera.position.clone().add(new THREE.Vector3(0, 0.5, -1)), { antal: 300, fart: 3, liv: 2, gravitation: 2, spridning: 2 });
    setTimeout(() => {
      if (document.pointerLockElement) document.exitPointerLock();
      ui.visaStart('🎉 Biblioteket är klart!', 'Allt är rent och sorterat. Du är en riktig trollkarl!', 'Fortsätt trolla');
    }, 1500);
  }
}

// för automatiska tester
window.__testrummet = { spelare, interaktor, lev, stav, gnistor, smuts, butik, spar, bocker, hyllor, kristaller, behallare, ui, hittaKristall, oppna, aktuellKristall, KARTA, renderer, scen, smutsTex: smuts.textur };

startaLoop(uppdatera, { scen, kamera, renderer });
