// =============================================================
//  TROLLSTAVEN – BOKLABYRINTEN (spel/testrummet) 🪄 – idé: Beppe
//  Peka på en bok och tryck → den lyfts med magi och svävar runt staven.
//  Peka på rätt färghylla och tryck → böckerna seglar in.
//  Håll inne mot golvet → staven suger upp dammet.
//  Hitta trollkristaller (4, sen 5, sen 6) → staven blir starkare (och snyggare!).
//  Högar, kistor, vaser och väggskåp kan gömma saker – eller vara tomma.
// =============================================================
import { THREE, skapaSpel, startaLoop } from '../../delat/motor.js';
import { Spelare, Interaktor, Smuts, Sparning, Butik, ljud, FpUI, Gnistor, Trollstav, Levitation } from '../../delat/fp/index.js';

const SPEL_ID = 'testrummet';

// ---------- Inställningar (lek fritt med dessa) ----------
// Labyrinten: # = vägg/bokhylla, . = gång, h = hög, k = skattkista, v = vas, s = skåp i väggen
// Varje tecken är en ruta på RUTA × RUTA meter. Norr (överst) är bort från start.
const KARTA = [
  'h..k#.s#....',
  '.##.#..#.##.',
  '.#s..#.v.#h.',
  '.#.###.###.#',
  's..#.....#v.',
  '##.#.....#s#',
  'h..#....v#.k',
  's###.##.##.#',
  '...#s#...#v.',
  'v#.#.#.#s##.',
  '.#h..#.#.s..',
  'k...##k##..h',
];
const START = [6, 6];                 // rad, kolumn där man börjar
const RUTA = 2;                       // meter per ruta (gångarnas bredd)
const VAGG_HOJD = 3.4;
const BOCKER_PER_FARG = 12;           // 4 färger × 12 = 48 böcker
const MYNT_PER_BOK = 3;
const MYNT_I_PASE = 10;               // en myntpåse i ett gömställe
const RUTOR_PER_MYNT = 12;            // hur mycket damm man suger upp per mynt
const FLYGTID = 0.8;                  // sekunder för en bok att flyga in i hyllan
const UPPLASNING = true;              // läs upp med svensk röst
const SOKAR_AVSTAND = 6;              // inom så här många meter börjar staven pinga
// Per omgång (blå, guld, regnbåge): så många kristaller göms...
const KRISTALLER_PER_OMGANG = [6, 8, 9];
// ...och så många behöver man hitta för att staven ska bli starkare (svårare för varje omgång)
const KRISTALLER_KRAV = [4, 5, 6];
const krav = () => KRISTALLER_KRAV[Math.min(spar.data.niva, KRISTALLER_KRAV.length - 1)];
// Hur många böcker staven orkar lyfta: start, sen efter varje omgång
const KRAFT_NIVAER = [1, 3, 6, 10];
const OMGANGAR = [
  { namn: 'blå', farg: 0x6fd8ff },
  { namn: 'guld', farg: 0xffd447 },
  { namn: 'regnbåge', farg: 0xff7ae0 },
];
const FARGER = [
  { id: 'rod', namn: 'röd', namnBest: 'röda', hex: 0xe5484d },
  { id: 'bla', namn: 'blå', namnBest: 'blå', hex: 0x3b82f6 },
  { id: 'gron', namn: 'grön', namnBest: 'gröna', hex: 0x2fb36b },
  { id: 'gul', namn: 'gul', namnBest: 'gula', hex: 0xf5b82e },
];
// Vad som göms i gömställena (utöver kristallerna, som flyttar runt varje omgång).
// {} = falskt gömställe, tomt
const INNEHALL = {
  h: () => ({ bocker: 2 }),
  k: () => ({ bocker: 3, mynt: true }),
  v: (i) => [{ bocker: 1 }, { mynt: true }, {}][i % 3],
  s: (i) => [{ bocker: 1 }, {}, { mynt: true }][i % 3],
};

const RADER = KARTA.length, KOLUMNER = KARTA[0].length;
const BREDD = KOLUMNER * RUTA, DJUP = RADER * RUTA;
const rutX = (kol) => -BREDD / 2 + RUTA * (kol + 0.5);
const rutZ = (rad) => -DJUP / 2 + RUTA * (rad + 0.5);
const rutaVid = (x, z) => {
  const kol = Math.floor((x + BREDD / 2) / RUTA), rad = Math.floor((z + DJUP / 2) / RUTA);
  return rad < 0 || kol < 0 || rad >= RADER || kol >= KOLUMNER ? '#' : KARTA[rad][kol];
};
const arVagg = (r, k) => r < 0 || k < 0 || r >= RADER || k >= KOLUMNER || KARTA[r][k] === '#';
// Fyra färgade delar av labyrinten, samma färg som hyllan i det hörnet. Mitten är neutral.
const arMitten = (r, k) => r >= 4 && r <= 6 && k >= 4 && k <= 8;
const zonFarg = (r, k) => (arMitten(r, k) ? null : FARGER[(r < RADER / 2 ? 0 : 2) + (k < KOLUMNER / 2 ? 0 : 1)]);
const saga = (t) => { if (UPPLASNING) ljud.saga(t); };
const stor = (t) => t[0].toUpperCase() + t.slice(1);
const ORD = ['noll', 'en', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
const hex = (h) => '#' + h.toString(16).padStart(6, '0');
let fro = 11;
const rnd = () => ((fro = (fro * 9301 + 49297) % 233280) / 233280);

// ---------- Scen ----------
const { scen, kamera, renderer, sol } = skapaSpel({ bakgrund: 0xdfe8f2, dimma: false });
kamera.near = 0.05; kamera.updateProjectionMatrix();
// lite lägre upplösning på skärmar med väldigt tät pixeltäthet = jämnare bildflöde
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.shadowMap.type = THREE.PCFShadowMap;
scen.add(kamera);
sol.position.set(4, 10, 3);
sol.intensity = 0.9;
scen.add(new THREE.AmbientLight(0xffffff, 0.5));

// golvet: trägolv som är färgat i varje del av labyrinten
const golvMesh = (() => {
  const P = 64, c = document.createElement('canvas'); c.width = KOLUMNER * P; c.height = RADER * P;
  const x = c.getContext('2d');
  for (let r = 0; r < RADER; r++) for (let k = 0; k < KOLUMNER; k++) {
    const z = zonFarg(r, k);
    const f = new THREE.Color(0xc8a27a);
    if (z) f.lerp(new THREE.Color(z.hex), 0.55);
    x.fillStyle = '#' + f.getHexString(); x.fillRect(k * P, r * P, P, P);
    x.fillStyle = 'rgba(0,0,0,.08)';
    for (let i = 1; i < 4; i++) x.fillRect(k * P, r * P + i * 16, P, 2);   // plankor
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const golv = new THREE.Mesh(new THREE.PlaneGeometry(BREDD, DJUP), new THREE.MeshStandardMaterial({ map: t, roughness: 0.8 }));
  golv.rotation.x = -Math.PI / 2; golv.receiveShadow = true; scen.add(golv);
  return golv;
})();

// bokryggar som tapet på väggarna (det är ett magiskt bibliotek)
function bokryggTextur(ljus = false) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 512;
  const x = c.getContext('2d');
  x.fillStyle = ljus ? '#cbb8a0' : '#4a2f1b'; x.fillRect(0, 0, 256, 512);
  // ljus variant = grå/vita bokryggar, så att zonfärgen syns tydligt på labyrintens väggar
  const farger = ljus ? ['#ffffff', '#e6e6e6', '#cfcfcf', '#f2f2f2', '#bdbdbd', '#dcdcdc']
    : ['#7d3b3b', '#3b5a7d', '#4d6e45', '#8a7a3b', '#5e3f73', '#8a5a3b', '#3f6b6b', '#6b6b6b'];
  let s = 7; const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  for (let hylla = 0; hylla < 4; hylla++) {
    const y0 = hylla * 128 + 14;
    x.fillStyle = ljus ? '#7a6048' : '#2e1c10'; x.fillRect(0, y0 + 104, 256, 10);
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
const guldMat = new THREE.MeshStandardMaterial({ color: 0xd8a93a, metalness: 0.7, roughness: 0.35 });

// ytterväggar
for (const [x, z, ry, langd] of [[0, -DJUP / 2, 0, BREDD], [0, DJUP / 2, Math.PI, BREDD], [-BREDD / 2, 0, Math.PI / 2, DJUP], [BREDD / 2, 0, -Math.PI / 2, DJUP]]) {
  const t = ryggTex.clone(); t.wrapS = THREE.RepeatWrapping; t.repeat.set(langd / RUTA, 1); t.needsUpdate = true;
  const v = new THREE.Mesh(new THREE.PlaneGeometry(langd, VAGG_HOJD), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }));
  v.position.set(x, VAGG_HOJD / 2, z); v.rotation.y = ry; scen.add(v);
}
// labyrintens väggar: bokhyllor i varje #-ruta, färgade efter vilken del av labyrinten de står i
const vaggRutor = [];
KARTA.forEach((rad, r) => [...rad].forEach((t, k) => { if (t === '#') vaggRutor.push([r, k]); }));
const sidaMat = new THREE.MeshStandardMaterial({ map: bokryggTextur(true), roughness: 0.9 });
const toppMat = new THREE.MeshStandardMaterial({ color: 0x8a6a4a, roughness: 0.8 });
const vaggar = new THREE.InstancedMesh(new THREE.BoxGeometry(RUTA, VAGG_HOJD, RUTA), [sidaMat, sidaMat, toppMat, toppMat, sidaMat, sidaMat], vaggRutor.length);
{
  const m = new THREE.Matrix4(), f = new THREE.Color();
  vaggRutor.forEach(([r, k], i) => {
    m.makeTranslation(rutX(k), VAGG_HOJD / 2, rutZ(r)); vaggar.setMatrixAt(i, m);
    const z = zonFarg(r, k);
    f.set(0xd9c4a8); if (z) f.set(z.hex).lerp(new THREE.Color(0xffffff), 0.15);
    vaggar.setColorAt(i, f);
  });
  vaggar.castShadow = true; vaggar.receiveShadow = true;
  scen.add(vaggar);
  // lysande färgad list högst upp på väggarna, syns på långt håll
  const list = new THREE.InstancedMesh(new THREE.BoxGeometry(RUTA + 0.04, 0.18, RUTA + 0.04), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.25 }), vaggRutor.length);
  vaggRutor.forEach(([r, k], i) => {
    m.makeTranslation(rutX(k), VAGG_HOJD - 0.12, rutZ(r)); list.setMatrixAt(i, m);
    const z = zonFarg(r, k);
    list.setColorAt(i, f.set(z ? z.hex : 0xd8a93a));
  });
  scen.add(list);
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
  start: [rutX(START[1]), 0, rutZ(START[0]) + 0.4], granser: { minX: -BREDD / 2, maxX: BREDD / 2, minZ: -DJUP / 2, maxZ: DJUP / 2 },
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
  && !spelare.hinder.some((b) => b.min.y < 0.5 && x > b.min.x - marg && x < b.max.x + marg && z > b.min.z - marg && z < b.max.z + marg);

// ---------- Inredning i mitten ----------
function lada(w, h, d, x, y, z, mat, hinder = false, foralder = scen) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; foralder.add(m);
  if (hinder) spelare.hinder.push(new THREE.Box3().setFromObject(m));
  return m;
}
const BORD = { x: 1, z: -3 };
{
  const m = new THREE.Mesh(new THREE.CircleGeometry(2.2, 40), new THREE.MeshStandardMaterial({ color: 0x7b4fbf, roughness: 1 }));
  m.rotation.x = -Math.PI / 2; m.position.set(1, 0.012, -1); scen.add(m);
  const k = new THREE.Mesh(new THREE.RingGeometry(1.95, 2.08, 40), new THREE.MeshStandardMaterial({ color: 0xffd447 }));
  k.rotation.x = -Math.PI / 2; k.position.set(1, 0.014, -1); scen.add(k);
}
lada(1.6, 0.08, 1.0, BORD.x, 0.78, BORD.z, traLjust);
for (const [x, z] of [[-0.72, -0.42], [0.72, -0.42], [-0.72, 0.42], [0.72, 0.42]]) lada(0.08, 0.76, 0.08, BORD.x + x, 0.38, BORD.z + z, traLjust);
spelare.hinder.push(new THREE.Box3(new THREE.Vector3(BORD.x - 0.8, 0, BORD.z - 0.5), new THREE.Vector3(BORD.x + 0.8, 0.82, BORD.z + 0.5)));
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
const spar = new Sparning(SPEL_ID, { mynt: 0, nivaer: {}, smuts: '', placerade: [], oppnade: [], niva: 0, hittade: [], omgangar: [] }, 4);
const effekt = { radie: 0.45 };
const butik = new Butik(spar, [
  { id: 'virvel', namn: 'Större dammvirvel', ikon: '🌪️', beskrivning: 'Suger upp mer damm', priser: [15, 40, 90],
    effekt: (n) => { effekt.radie = [0.45, 0.65, 0.9, 1.2][n]; } },
  { id: 'kraft', namn: 'Längre magi', ikon: '✨', beskrivning: 'Nå böcker längre bort', priser: [25, 60],
    effekt: (n) => { interaktor.rackvidd = [3.5, 5, 7][n]; } },
  { id: 'skor', namn: 'Snabba skor', ikon: '👟', beskrivning: 'Gå snabbare', priser: [20, 60],
    effekt: (n) => { spelare.fart = [4, 5, 6.2][n]; } },
]);

// ---------- Färghyllor (i labyrintens fyra hörn) ----------
const hyllor = [];
const HYLL_PLATS = [
  { x: -8, z: -DJUP / 2 + 0.25, ry: 0 }, { x: 8, z: -DJUP / 2 + 0.25, ry: 0 },
  { x: -8, z: DJUP / 2 - 0.25, ry: Math.PI }, { x: 8, z: DJUP / 2 - 0.25, ry: Math.PI },
];
FARGER.forEach((f, i) => {
  const p = HYLL_PLATS[i];
  const g = new THREE.Group();
  const B = 1.9, H = 2.1, D = 0.42;
  // hela hyllan har sin färg, så den syns på långt håll
  const hyllMat = new THREE.MeshStandardMaterial({ color: f.hex, roughness: 0.6 });
  const bakMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(f.hex).lerp(new THREE.Color(0xffffff), 0.45), roughness: 0.8 });
  const del = (w, h, d, x, y, z, mat = hyllMat) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); m.castShadow = true; g.add(m); return m; };
  for (const y of [0.05, 0.73, 1.41]) del(B, 0.06, D, 0, y, 0);
  del(B, 0.06, D, 0, H, 0);
  del(0.06, H, D, -B / 2, H / 2, 0); del(0.06, H, D, B / 2, H / 2, 0); del(B, H, 0.03, 0, H / 2, -D / 2 + 0.015, bakMat);
  const skyltMat = new THREE.MeshStandardMaterial({ color: f.hex, emissive: f.hex, emissiveIntensity: 0.25 });
  del(1.0, 0.24, 0.05, 0, H + 0.6, 0.1, skyltMat);
  g.position.set(p.x, 0, p.z); g.rotation.y = p.ry;
  scen.add(g);
  g.updateMatrixWorld(true);
  spelare.hinder.push(new THREE.Box3().setFromObject(g));   // bara själva hyllan är ett hinder
  // färgad matta framför hyllan (läggs till efteråt, så man kan gå på den)
  const matta = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 1.1), new THREE.MeshStandardMaterial({ color: f.hex, roughness: 1 }));
  matta.rotation.x = -Math.PI / 2; matta.position.set(0, 0.013, 0.85); g.add(matta);
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

// ---------- Gömställen: högar, skattkistor, vaser och skåp i väggarna ----------
const behallare = [];
const HOG_FARGER = [0xf4a7b9, 0xa7d8f4, 0xf9e2a2, 0xc7b3f2, 0xb8e6c1, 0xf6c39b];
const VAS_FARGER = [0x2f8f9d, 0x3b5bdb, 0xc2563a, 0x7a4fbf, 0x2b8a3e];
const RIKTNINGAR = [[-1, 0], [0, 1], [1, 0], [0, -1]];   // norr, öster, söder, väster (rad, kol)
const raknare = { h: 0, k: 0, v: 0, s: 0 };
KARTA.forEach((rad, r) => [...rad].forEach((t, k) => {
  if (!'hkvs'.includes(t)) return;
  const nr = raknare[t]++;
  let x = rutX(k), z = rutZ(r);
  const vagg = RIKTNINGAR.find(([dr, dk]) => arVagg(r + dr, k + dk)) || [0, 1];
  const g = new THREE.Group(); scen.add(g);
  const typ = { h: 'hog', k: 'kista', v: 'vas', s: 'skap' }[t];
  const inn = INNEHALL[t](nr);
  const b = { id: `${t}${r}-${k}`, typ, x, z, grupp: g, bocker: [], oppen: false, mynt: !!inn.mynt, antalBocker: inn.bocker || 0 };
  if (typ === 'hog') {
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
    g.position.set(x, 0, z);
    b.hinder = new THREE.Box3(new THREE.Vector3(x - 0.75, 0, z - 0.75), new THREE.Vector3(x + 0.75, 0.9, z + 0.75));
    b.kristallPos = new THREE.Vector3(x, 0.22, z);
    b.utPos = new THREE.Vector3(x, 0.4, z);
  } else if (typ === 'kista') {
    // skattkista med lock som kan öppnas
    lada(1.1, 0.55, 0.7, 0, 0.28, 0, traMorkt, false, g);
    lada(1.12, 0.06, 0.72, 0, 0.42, 0, guldMat, false, g);
    b.lock = new THREE.Group(); b.lock.position.set(0, 0.55, -0.35); g.add(b.lock);
    lada(1.1, 0.2, 0.7, 0, 0.1, 0.35, traMorkt, false, b.lock);
    lada(0.16, 0.16, 0.05, 0, 0.0, 0.71, guldMat, false, b.lock);
    g.position.set(x, 0, z);
    b.hinder = new THREE.Box3(new THREE.Vector3(x - 0.6, 0, z - 0.4), new THREE.Vector3(x + 0.6, 0.8, z + 0.4));
    b.kristallPos = new THREE.Vector3(x, 0.62, z);
    b.utPos = new THREE.Vector3(x, 0.6, z);
  } else if (typ === 'vas') {
    // stor vas med lock, ställd mot en vägg
    x += vagg[1] * 0.5; z += vagg[0] * 0.5; b.x = x; b.z = z;
    const profil = [[0.0, 0], [0.28, 0], [0.38, 0.18], [0.42, 0.45], [0.34, 0.75], [0.24, 0.9], [0.26, 0.98]].map(([a, y]) => new THREE.Vector2(a, y));
    const vasMat = new THREE.MeshStandardMaterial({ color: VAS_FARGER[nr % VAS_FARGER.length], roughness: 0.35, metalness: 0.1 });
    const kropp = new THREE.Mesh(new THREE.LatheGeometry(profil, 20), vasMat); kropp.castShadow = true; g.add(kropp);
    const rand = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.025, 8, 20), guldMat); rand.rotation.x = Math.PI / 2; rand.position.y = 0.45; g.add(rand);
    b.lock = new THREE.Group(); b.lock.position.y = 0.98; g.add(b.lock);
    const lockDel = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.29, 0.06, 20), vasMat); b.lock.add(lockDel);
    const knopp = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), guldMat); knopp.position.y = 0.07; b.lock.add(knopp);
    g.position.set(x, 0, z);
    b.hinder = new THREE.Box3(new THREE.Vector3(x - 0.42, 0, z - 0.42), new THREE.Vector3(x + 0.42, 1.0, z + 0.42));
    b.kristallPos = new THREE.Vector3(x, 1.12, z);
    b.utPos = new THREE.Vector3(x, 1.05, z);
  } else {
    // skåp med två dörrar, uppsatt på väggen (en hylla i väggen där saker står gömda)
    const zf = zonFarg(r, k) || FARGER[nr % 4];
    const ram = new THREE.MeshStandardMaterial({ color: new THREE.Color(zf.hex).multiplyScalar(0.75), roughness: 0.6 });
    const inne = new THREE.MeshStandardMaterial({ color: 0x3a2617, roughness: 0.9 });
    const W = 1.0, H = 0.9, D = 0.34;
    lada(W, H, 0.03, 0, 0, -D / 2 + 0.015, inne, false, g);          // bakstycke
    lada(W, 0.05, D, 0, -H / 2, 0, ram, false, g); lada(W, 0.05, D, 0, H / 2, 0, ram, false, g);
    lada(0.05, H, D, -W / 2, 0, 0, ram, false, g); lada(0.05, H, D, W / 2, 0, 0, ram, false, g);
    lada(W, 0.03, D, 0, 0, 0, ram, false, g);                         // hyllplan i mitten
    // små trolldrycker som pynt på övre hyllan
    for (const [px, f] of [[-0.3, 0x58d68d], [0.32, 0xf06292]]) {
      const flaska = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), new THREE.MeshStandardMaterial({ color: f, emissive: f, emissiveIntensity: 0.4, transparent: true, opacity: 0.85 }));
      flaska.position.set(px, 0.08, 0); g.add(flaska);
    }
    const dorrMat = new THREE.MeshStandardMaterial({ color: zf.hex, roughness: 0.55 });
    b.dorrar = [-1, 1].map((sida) => {
      const led = new THREE.Group(); led.position.set(sida * W / 2, 0, D / 2); g.add(led);
      lada(W / 2 - 0.01, H - 0.02, 0.04, -sida * W / 4, 0, 0.02, dorrMat, false, led);
      lada(0.05, 0.05, 0.04, -sida * (W / 2 - 0.09), 0, 0.06, guldMat, false, led);
      led.userData.sida = sida;
      return led;
    });
    // skåpet sitter på väggens yta, med framsidan mot gången
    const ut = RUTA / 2 - D / 2;
    x += vagg[1] * ut; z += vagg[0] * ut; b.x = x; b.z = z;
    g.position.set(x, 1.2, z);
    g.rotation.y = Math.atan2(-vagg[1], -vagg[0]);
    const bx = Math.abs(vagg[1]) ? D / 2 : W / 2, bz = Math.abs(vagg[0]) ? D / 2 : W / 2;
    b.hinder = new THREE.Box3(new THREE.Vector3(x - bx, 0.72, z - bz), new THREE.Vector3(x + bx, 1.68, z + bz));
    g.updateMatrixWorld(true);
    b.kristallPos = g.localToWorld(new THREE.Vector3(0, -0.28, 0.02));
    b.utPos = g.localToWorld(new THREE.Vector3(0, 0.15, 0.2));
  }
  spelare.hinder.push(b.hinder);
  behallare.push(b);
  interaktor.registrera(g, {
    text: { hog: 'Trolla bort högen ✨', kista: 'Öppna skattkistan 🗝️', vas: 'Lyft locket ✨', skap: 'Öppna skåpet ✨' }[typ],
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
KARTA.forEach((rad, r) => [...rad].forEach((t, k) => { if (t === '.' && !(r === START[0] && k === START[1])) friaRutor.push([r, k]); }));
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
  const gomstalle = behallare.find((c) => c.bocker.length < c.antalBocker);
  if (gomstalle) {
    gomstalle.bocker.push(b);
    b.visible = false;
    b.position.copy(gomstalle.utPos);
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
  const h = interaktor.traffa([smuts.mesh, golvMesh, vaggar], interaktor.rackvidd + 1);
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
  for (let f = 0; f < 30; f++) {
    const v = (i * 2.1 + f * 0.9), r = 0.9 + (f % 3) * 0.25;
    const x = c.x + Math.cos(v) * r, z = c.z + Math.sin(v) * r;
    if (friPunkt(x, z, 0.2)) return new THREE.Vector3(x, 0.05, z);
  }
  return spelare.pos.clone().setY(0.05);
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
    else if (c.typ === 'kista') c.lock.rotation.x = -1.9;
    else if (c.typ === 'vas') c.grupp.remove(c.lock);
    else c.dorrar.forEach((d) => { d.rotation.y = d.userData.sida * 1.9; });
    c.bocker.forEach((b, i) => {
      if (b.userData.placerad) return;
      b.visible = true;
      b.position.copy(spridPlats(c, i));
      registreraBok(b);
    });
    return;
  }
  if (!spar.data.oppnade.includes(c.id)) spar.data.oppnade.push(c.id);
  spar.spara(true);
  ljud.magi();
  gnistor.skjut(c.utPos, { antal: 120, fart: 2.2, spridning: 0.5, liv: 1.2, farger: [0xffe27a, 0xc58bff, 0xffffff] });
  if (c.typ === 'hog') {
    const fart = c.delar.map((d) => new THREE.Vector3(d.position.x * 3, 2 + Math.random() * 2, d.position.z * 3));
    animera(0.8, (p, dt) => c.delar.forEach((d, i) => {
      d.position.addScaledVector(fart[i], dt);
      d.rotation.y += dt * 6;
      d.scale.multiplyScalar(1 - dt * 3);
    }), () => scen.remove(c.grupp));
  } else if (c.typ === 'kista') {
    animera(0.6, (p) => { c.lock.rotation.x = -1.9 * (1 - (1 - p) ** 3); });
  } else if (c.typ === 'vas') {
    animera(0.9, (p) => { c.lock.position.set(p * 0.5, 0.98 + Math.sin(p * Math.PI) * 0.5, 0); c.lock.rotation.z = -p * 1.5; c.lock.scale.setScalar(1 - p * 0.9); },
      () => c.grupp.remove(c.lock));
  } else {
    animera(0.6, (p) => c.dorrar.forEach((d) => { d.rotation.y = d.userData.sida * 1.9 * (1 - (1 - p) ** 3); }));
  }
  let n = 0;
  c.bocker.forEach((b, i) => {
    if (b.userData.placerad) return;
    b.visible = true;
    b.userData.flyger = true;
    b.position.copy(c.utPos);
    setTimeout(() => ljud.svav(), 250 + n * 150);
    lev.flyg(b, {
      mal: spridPlats(c, i), rot: new THREE.Euler(0, Math.random() * Math.PI * 2, Math.PI / 2), tid: 0.7, hojd: 1.0, fordrojning: 0.25 + n++ * 0.15,
      klar: () => { b.userData.flyger = false; registreraBok(b); },
    });
  });
  if (c.mynt) {
    setTimeout(() => {
      butik.mynt += MYNT_I_PASE; spar.spara();
      ljud.mynt(); setTimeout(() => ljud.mynt(), 120); setTimeout(() => ljud.mynt(), 240);
      gnistor.skjut(c.utPos, { antal: 60, fart: 1.6, liv: 1, spridning: 0.3, farger: [0xffd447, 0xffe27a, 0xffffff] });
      ui.toast(`+${MYNT_I_PASE} 🪙`, 'guld');
    }, 400);
  }
  const harKristall = kristaller.some((k) => k.userData.plats.behallare === c && !k.userData.hittad);
  visaKristaller();
  if (harKristall) setTimeout(() => saga('Där är en trollkristall!'), 700);
  else if (n) setTimeout(() => saga(n === 1 ? 'En bok var gömd här!' : `${stor(ORD[n])} böcker var gömda här!`), 700);
  else if (c.mynt) setTimeout(() => saga('Mynt!'), 700);
  else setTimeout(() => { saga('Tomt! Leta vidare.'); ui.toast('Tomt! 🤷', 'fel'); }, 700);
}

// ---------- Trollkristaller ----------
// Platser där en kristall kan ligga: alla gömställen + några öppna ställen.
const kristallPlatser = behallare.map((c) => ({ id: c.id, behallare: c, pos: c.kristallPos }));
kristallPlatser.push(
  { id: 'bord', pos: new THREE.Vector3(BORD.x, 0.98, BORD.z) },
  { id: 'underbord', pos: new THREE.Vector3(BORD.x + 0.35, 0.22, BORD.z) },
  ...HYLL_PLATS.map((p, i) => ({ id: `hylltopp${i}`, pos: new THREE.Vector3(p.x, 2.32, p.z + Math.sign(-p.z) * 0.1) })),
);
const platsMedId = (id) => kristallPlatser.find((p) => p.id === id);
// hur många steg det är att gå till en ruta från start (för att välja lätta platser först)
const stegFranStart = (() => {
  const d = new Map([[START.join(','), 0]]), ko = [START];
  while (ko.length) {
    const [r, k] = ko.shift();
    for (const [dr, dk] of RIKTNINGAR) {
      const n = [r + dr, k + dk];
      if (!arVagg(...n) && !d.has(n.join(','))) { d.set(n.join(','), d.get(`${r},${k}`) + 1); ko.push(n); }
    }
  }
  return (x, z) => d.get(`${Math.floor((z + DJUP / 2) / RUTA)},${Math.floor((x + BREDD / 2) / RUTA)}`) ?? 99;
})();

// välj var omgångens kristaller göms (sparas, så de ligger kvar på samma ställen)
function platserForOmgang(n) {
  if (spar.data.omgangar[n]) return spar.data.omgangar[n].map(platsMedId).filter(Boolean);
  const anvanda = new Set(spar.data.omgangar.flat());
  const oppnade = new Set(spar.data.oppnade);
  let val;
  if (n === 0) {
    // första omgången: nära mitten, så att man lär sig hur det funkar
    const narmast = kristallPlatser.filter((p) => p.behallare && !oppnade.has(p.id))
      .sort((a, b) => stegFranStart(a.pos.x, a.pos.z) - stegFranStart(b.pos.x, b.pos.z));
    val = [platsMedId('bord'), ...narmast.slice(0, KRISTALLER_PER_OMGANG[0] - 1)];
  } else {
    let s = 100 + n * 37; const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    const prio = (p) => (p.behallare && !oppnade.has(p.id) ? 0 : p.behallare ? 2 : 1) + r();
    val = kristallPlatser.filter((p) => !anvanda.has(p.id)).map((p) => [prio(p), p]).sort((a, b) => a[0] - b[0]).slice(0, KRISTALLER_PER_OMGANG[n]).map(([, p]) => p);
  }
  spar.data.omgangar[n] = val.map((p) => p.id);
  spar.spara(true);
  return val;
}

const glodTextur = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.35, 'rgba(255,255,255,.5)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
})();
let kristaller = [];
function skapaKristall(plats, omg) {
  const farg = OMGANGAR[omg].farg;
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: omg === 2 ? 0xffffff : farg, emissive: farg, emissiveIntensity: 0.9, metalness: 0.2, roughness: 0.15, transparent: true, opacity: 0.92 });
  const k = new THREE.Mesh(new THREE.OctahedronGeometry(0.11), mat);
  k.scale.y = 1.7;
  const sken = new THREE.Sprite(new THREE.SpriteMaterial({ map: glodTextur, color: farg, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  sken.scale.setScalar(0.65);
  // osynlig, större träffyta så att den är lätt att sikta på
  const traffyta = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 8), new THREE.MeshBasicMaterial());
  traffyta.visible = false;
  g.add(k, sken, traffyta);
  g.position.copy(plats.pos);
  g.userData = { id: plats.id, plats, omgang: omg, kristall: k, sken, mat, bas: plats.pos.y, hittad: spar.data.hittade.includes(plats.id) };
  g.visible = false;
  scen.add(g);
  return g;
}

function startaOmgang() {
  for (const k of kristaller) { interaktor.avregistrera(k); scen.remove(k); }
  kristaller = [];
  const n = spar.data.niva;
  if (n < OMGANGAR.length) kristaller = platserForOmgang(n).map((p) => skapaKristall(p, n));
  visaKristaller();
}

function visaKristaller() {
  for (const k of kristaller) {
    const c = k.userData.plats.behallare;
    const synlig = !k.userData.hittad && (!c || c.oppen);
    if (synlig && !k.visible) interaktor.registrera(k, { text: 'Ta trollkristallen 💎', aktivera: () => hittaKristall(k) });
    if (!synlig && k.visible) interaktor.avregistrera(k);
    k.visible = synlig;
  }
  lev.kapacitet = KRAFT_NIVAER[Math.min(KRAFT_NIVAER.length - 1, spar.data.niva)];
  stav.sattNiva(spar.data.niva);
  ritaHud();
}

function hittaKristall(k) {
  if (k.userData.hittad) return;
  k.userData.hittad = true;
  spar.data.hittade.push(k.userData.id);
  spar.spara(true);
  ljud.kristall();
  gnistor.skjut(k.position, { antal: 80, fart: 2, spridning: 0.2, liv: 1.1, farger: [OMGANGAR[k.userData.omgang].farg, 0xffffff, 0xffe27a] });
  const antal = spar.data.hittade.length;
  if (antal < krav()) {
    visaKristaller();
    pulsaHud();
    const kvar = krav() - antal;
    ui.toast('💎'.repeat(antal) + '◇'.repeat(kvar), 'guld');
    saga(`Trollkristall! ${stor(ORD[kvar])} kvar.`);
    return;
  }
  // tre hittade: staven blir starkare och nästa omgång börjar
  spar.data.niva++;
  spar.data.hittade = [];
  spar.spara(true);
  // de kristaller som var kvar i omgången försvinner med ett glitter
  for (const rest of kristaller) if (rest.visible && rest !== k) gnistor.skjut(rest.position, { antal: 30, fart: 1, liv: 0.8 });
  startaOmgang();
  const nu = lev.kapacitet;
  ljud.stor();
  gnistor.skjut(spets.clone(), { antal: 220, fart: 2.5, liv: 1.6, spridning: 0.4, farger: [0xffe27a, 0xc58bff, 0x8fe8ff, 0xff7ae0] });
  visaUppgradering(nu);
  let text = `Wow! Staven blev starkare! Nu kan du lyfta ${ORD[nu] || nu} böcker samtidigt!`;
  if (spar.data.niva < OMGANGAR.length) text += ` Nya ${OMGANGAR[spar.data.niva].namn}kristaller har gömt sig. Hitta ${ORD[krav()]}!`;
  else text += ' Du har den starkaste trollstaven av alla!';
  setTimeout(() => saga(text), 900);
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
  text: 'Du är en trollkarl i ett magiskt bibliotek! Lyft böckerna med trollstaven och skicka in dem på hyllan med samma färg – följ golvets färg till rätt hörn. Hitta trollkristaller 💎 så blir staven starkare. Högar, kistor, vaser och skåp kan gömma saker, men en del är tomma!',
  hjalp: 'Mus eller ← → titta · ↑ ↓ / WASD gå · Klick/E lyft, skicka, öppna · Håll inne: suga damm · M karta · Esc paus · B butik',
  spelare,
  escPausar: true,
  onStart: () => {
    if (!forstaStart) return;
    forstaStart = false;
    saga(spar.data.niva || spar.data.hittade.length
      ? 'Välkommen tillbaka, trollkarl! Leta efter fler trollkristaller.'
      : 'Välkommen till boklabyrinten, trollkarl! Skicka in böckerna på hyllan med samma färg. Följ golvets färg! Och hitta fyra trollkristaller, så blir staven starkare. Den första ligger på bordet.');
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

// Kristall-mätaren: tre platser som fylls (syns även för den som inte kan läsa)
const kristallKort = document.createElement('div');
Object.assign(kristallKort.style, {
  position: 'fixed', top: '64px', left: '50%', transform: 'translateX(-50%)', zIndex: 30, pointerEvents: 'none',
  background: 'rgba(20,26,51,.82)', color: '#fff', padding: '6px 16px', borderRadius: '999px',
  font: '800 26px system-ui, sans-serif', whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(0,0,0,.25)',
  display: 'flex', alignItems: 'center', gap: '10px', transition: 'transform .25s',
});
document.body.appendChild(kristallKort);
const nivaChip = document.createElement('div');
nivaChip.className = 'fp-chip'; nivaChip.style.whiteSpace = 'nowrap';
nivaChip.title = 'Hur många böcker staven orkar lyfta';
document.querySelector('.fp-topp')?.appendChild(nivaChip);
const STAV_IKON = ['🪄', '🪄🔵', '🪄🟡', '🪄🌈'];
function ritaHud() {
  const n = spar.data.niva;
  nivaChip.textContent = `${STAV_IKON[Math.min(3, n)]} 📚${lev.kapacitet}`;
  if (n >= OMGANGAR.length) { kristallKort.innerHTML = '🌈🪄 <span style="font-size:18px">Starkaste staven!</span>'; return; }
  const hittade = spar.data.hittade.length;
  const filter = ['', 'hue-rotate(185deg) saturate(2.5) brightness(1.2)', 'hue-rotate(110deg) saturate(2)'][n];
  let html = '';
  for (let i = 0; i < krav(); i++) {
    html += `<span style="filter:${i < hittade ? filter || 'none' : 'grayscale(1) opacity(.3)'}">💎</span>`;
  }
  html += `<span style="font-size:20px;opacity:.85">➜</span><span style="font-size:20px">${STAV_IKON[n + 1]} 📚${KRAFT_NIVAER[n + 1]}</span>`;
  kristallKort.innerHTML = html;
}
function pulsaHud() {
  kristallKort.style.transform = 'translateX(-50%) scale(1.3)';
  setTimeout(() => { kristallKort.style.transform = 'translateX(-50%)'; }, 300);
}
// stor bild när staven blir starkare: ny stav + så många böcker man kan lyfta
const uppgradering = document.createElement('div');
Object.assign(uppgradering.style, {
  position: 'fixed', left: '50%', top: '42%', transform: 'translate(-50%,-50%) scale(.6)', zIndex: 40, pointerEvents: 'none',
  background: 'rgba(20,26,51,.9)', color: '#fff', padding: '18px 28px', borderRadius: '24px', textAlign: 'center',
  font: '800 22px system-ui, sans-serif', boxShadow: '0 10px 40px rgba(0,0,0,.4)', opacity: 0, transition: 'opacity .3s, transform .3s', maxWidth: '80vw',
});
document.body.appendChild(uppgradering);
function visaUppgradering(kapacitet) {
  uppgradering.innerHTML = `<div style="font-size:64px;line-height:1.1">${STAV_IKON[Math.min(3, spar.data.niva)]}</div>`
    + `<div style="font-size:30px;margin:6px 0;letter-spacing:2px">${'📖'.repeat(kapacitet)}</div>`
    + `<div>Staven lyfter ${kapacitet} böcker!</div>`;
  uppgradering.style.opacity = 1; uppgradering.style.transform = 'translate(-50%,-50%) scale(1)';
  setTimeout(() => { uppgradering.style.opacity = 0; uppgradering.style.transform = 'translate(-50%,-50%) scale(.6)'; }, 3200);
}

startaOmgang();

// ---------- Minikarta (uppe till vänster, M visar/döljer) ----------
const KARTA_PX = Math.min(180, Math.round(Math.min(innerWidth, innerHeight) * 0.28));
const skala = KARTA_PX / Math.max(BREDD, DJUP);
const minikarta = document.createElement('canvas');
minikarta.width = minikarta.height = KARTA_PX * 2;   // skarp på täta skärmar
Object.assign(minikarta.style, {
  position: 'fixed', left: '12px', top: '12px', width: KARTA_PX + 'px', height: KARTA_PX + 'px', zIndex: 30,
  pointerEvents: 'none', borderRadius: '12px', border: '3px solid rgba(255,255,255,.85)', boxShadow: '0 4px 14px rgba(0,0,0,.3)',
});
document.body.appendChild(minikarta);
const mk = minikarta.getContext('2d');
const tillPx = (x, z) => [(x + BREDD / 2) * skala * 2, (z + DJUP / 2) * skala * 2];
// fast bakgrund: färgade gångar, väggar och hyllor (ritas en gång)
const kartBakgrund = document.createElement('canvas');
kartBakgrund.width = kartBakgrund.height = KARTA_PX * 2;
{
  const g = kartBakgrund.getContext('2d'), R = RUTA * skala * 2;
  for (let r = 0; r < RADER; r++) for (let k = 0; k < KOLUMNER; k++) {
    const z = zonFarg(r, k);
    const f = new THREE.Color(0xf1e6d2); if (z) f.lerp(new THREE.Color(z.hex), 0.4);
    g.fillStyle = arVagg(r, k) ? '#5b3a22' : '#' + f.getHexString();
    g.fillRect(k * R, r * R, R + 0.5, R + 0.5);
  }
  for (const h of hyllor) {
    const p = new THREE.Vector3(); h.grupp.getWorldPosition(p);
    const [x, y] = tillPx(p.x, p.z);
    g.fillStyle = hex(h.farg.hex);
    g.fillRect(x - R * 0.55, y - R * 0.3, R * 1.1, R * 0.6);
  }
}
let kartTid = 0, visaKarta = true;
function ritaMinikarta(dt) {
  // karta och kristallmätare syns bara medan man spelar (inte ovanpå menyn)
  const synlig = ui.igang ? '' : 'none';
  minikarta.style.display = visaKarta ? synlig : 'none';
  kristallKort.style.display = synlig === '' ? 'flex' : 'none';
  kartTid -= dt;
  if (kartTid > 0 || !visaKarta || !ui.igang) return;
  kartTid = 0.08;
  const R = RUTA * skala * 2;
  mk.drawImage(kartBakgrund, 0, 0);
  // gömställen som inte är öppnade
  for (const c of behallare) {
    if (c.oppen) continue;
    const [x, y] = tillPx(c.x, c.z);
    mk.fillStyle = { hog: '#b48be0', kista: '#c8902e', vas: '#2f8f9d', skap: '#7a5230' }[c.typ];
    mk.beginPath(); mk.arc(x, y, R * 0.22, 0, Math.PI * 2); mk.fill();
  }
  // lösa böcker som små prickar i sin färg
  for (const b of bocker) {
    if (!b.visible || b.userData.placerad || b.parent !== scen) continue;
    const [x, y] = tillPx(b.position.x, b.position.z);
    mk.fillStyle = hex(b.userData.farg.hex); mk.strokeStyle = '#fff'; mk.lineWidth = 1.5;
    mk.fillRect(x - 3, y - 3, 6, 6); mk.strokeRect(x - 3, y - 3, 6, 6);
  }
  // du = en pil som pekar dit du tittar
  const [px, py] = tillPx(spelare.pos.x, spelare.pos.z);
  mk.save();
  mk.translate(px, py);
  mk.rotate(-spelare.yaw);
  mk.fillStyle = '#7b3fe4'; mk.strokeStyle = '#fff'; mk.lineWidth = 3;
  mk.beginPath(); mk.moveTo(0, -R * 0.55); mk.lineTo(R * 0.38, R * 0.38); mk.lineTo(0, R * 0.18); mk.lineTo(-R * 0.38, R * 0.38); mk.closePath();
  mk.fill(); mk.stroke();
  mk.restore();
}
addEventListener('keydown', (e) => {
  if (e.code === 'KeyM') { visaKarta = !visaKarta; kartTid = 0; }
});

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

  // kristallerna snurrar och glittrar (regnbågskristaller byter färg)
  for (const k of kristaller) {
    if (!k.visible) continue;
    k.userData.kristall.rotation.y += dt * 1.8;
    k.position.y = k.userData.bas + Math.sin(tid * 2 + k.userData.bas * 3) * 0.05;
    k.userData.sken.scale.setScalar(0.55 + Math.sin(tid * 4) * 0.12);
    if (k.userData.omgang === 2) {
      const f = (tid * 0.3 + k.userData.bas) % 1;
      k.userData.mat.emissive.setHSL(f, 0.9, 0.55); k.userData.sken.material.color.setHSL(f, 0.9, 0.6);
    }
    if (Math.random() < dt * 3) gnistor.skjut(k.position, { antal: 1, fart: 0.3, liv: 0.8, spridning: 0.25, farger: [0xffffff, 0xffe27a] });
  }

  ritaMinikarta(dt);
  if (!ui.igang) { stav.uppdatera(dt, 0); return; }

  // kristallsökare: staven plingar oftare ju närmare en kristall du är
  let sokKraft = 0, narmast = null, avst = Infinity;
  for (const k of kristaller) {
    if (k.userData.hittad) continue;
    const a = Math.hypot(k.position.x - spelare.pos.x, k.position.z - spelare.pos.z);
    if (a < avst) { avst = a; narmast = k; }
  }
  if (narmast && avst < SOKAR_AVSTAND) {
    sokKraft = 1 - avst / SOKAR_AVSTAND;
    pingTid -= dt;
    if (pingTid <= 0) {
      ljud.ping(1 + sokKraft * 0.5);
      pingTid = 0.25 + (1 - sokKraft) * 1.4;
      gnistor.skjut(spets, { antal: 6, fart: 0.5, liv: 0.5, farger: [0xffffff, 0x8fe8ff] });
      // gömstället glittrar lite när man är nära
      const c = narmast.userData.plats.behallare;
      if (c && !c.oppen && sokKraft > 0.45) gnistor.skjut(c.utPos, { antal: 10, fart: 0.6, liv: 0.9, spridning: 0.4, farger: [OMGANGAR[narmast.userData.omgang].farg, 0xffffff] });
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
window.__testrummet = {
  spelare, interaktor, lev, stav, gnistor, smuts, butik, spar, bocker, hyllor, behallare, ui, oppna, KARTA, renderer, scen,
  get kristaller() { return kristaller; }, hittaKristall,
};

startaLoop(uppdatera, { scen, kamera, renderer });
