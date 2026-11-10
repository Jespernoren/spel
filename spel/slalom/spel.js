// =============================================================
//  SLALOM – åk nerför backen, ta portarna, undvik träden
// =============================================================
import { THREE, skapaSpel, startaLoop, knappar, skapaHud, visaMeny, rekord, slump, begransa } from '../../delat/motor.js';

const SPEL_ID = 'slalom';
const { scen, kamera, renderer, sol } = skapaSpel({ bakgrund: 0xbfd9f2, dimma: [30, 110] });
const hud = skapaHud();
const mittRekord = rekord(SPEL_ID);

// ---------- Inställningar (lek med dessa!) ----------
const BANBREDD = 14;        // hur långt åt sidan man kan åka
const STARTFART = 14;       // meter per sekund
const MAXFART = 38;
const ACCELERATION = 0.6;   // hur snabbt farten ökar
const SVANGFART = 12;
const TRAD_START = 1;       // träd per rad i början
const TRAD_MAX = 3;         // träd per rad när det är som svårast
const FRI_START = 70;       // meter utan träd i början
const PORT_AVSTAND = 28;    // meter mellan portarna
const PORT_BREDD = 3.2;

// ---------- Snö ----------
const snoMaterial = new THREE.MeshStandardMaterial({ color: 0xf7fbff, roughness: 0.95 });
const backe = new THREE.Mesh(new THREE.PlaneGeometry(120, 260), snoMaterial);
backe.rotation.x = -Math.PI / 2;
backe.receiveShadow = true;
scen.add(backe);

// ---------- Åkaren ----------
function skapaAkare() {
  const g = new THREE.Group();
  const jacka = new THREE.MeshStandardMaterial({ color: 0xff3b30 });
  const byxor = new THREE.MeshStandardMaterial({ color: 0x1c2b4a });
  const hud_ = new THREE.MeshStandardMaterial({ color: 0xffd7b5 });
  const skidMat = new THREE.MeshStandardMaterial({ color: 0xffcf33 });

  const ben = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.7, 0.4), byxor);
  ben.position.y = 0.45;
  const kropp = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.8, 0.45), jacka);
  kropp.position.y = 1.2;
  kropp.rotation.x = -0.25;
  const huvud = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 12), hud_);
  huvud.position.set(0, 1.85, -0.12);
  const mossa = new THREE.Mesh(new THREE.SphereGeometry(0.27, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), jacka);
  mossa.position.copy(huvud.position);
  for (const x of [-0.2, 0.2]) {
    const skida = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.06, 2.0), skidMat);
    skida.position.set(x, 0.05, -0.2);
    g.add(skida);
  }
  g.add(ben, kropp, huvud, mossa);
  g.traverse((d) => { if (d.isMesh) d.castShadow = true; });
  return g;
}
const akare = skapaAkare();
scen.add(akare);

// ---------- Träd ----------
const stamGeo = new THREE.CylinderGeometry(0.2, 0.25, 1, 8);
const stamMat = new THREE.MeshStandardMaterial({ color: 0x6b4a2b });
const barrGeo = new THREE.ConeGeometry(1.3, 3.2, 10);
const barrMat = new THREE.MeshStandardMaterial({ color: 0x1f6b3a, flatShading: true });

function skapaTrad(x, z) {
  const g = new THREE.Group();
  const stam = new THREE.Mesh(stamGeo, stamMat);
  stam.position.y = 0.5;
  const barr = new THREE.Mesh(barrGeo, barrMat);
  barr.position.y = 2.4;
  g.add(stam, barr);
  g.traverse((d) => { if (d.isMesh) d.castShadow = true; });
  const skala = slump(0.8, 1.3);
  g.scale.setScalar(skala);
  g.position.set(x, 0, z);
  g.userData.radie = 0.7 * skala; // lite snällare än det ser ut
  scen.add(g);
  return g;
}

// ---------- Portar ----------
const rodMat = new THREE.MeshStandardMaterial({ color: 0xe0242b });
const blaMat = new THREE.MeshStandardMaterial({ color: 0x1e5bd8 });
const gronMat = new THREE.MeshStandardMaterial({ color: 0x2ecc71 });
const stolpeGeo = new THREE.CylinderGeometry(0.07, 0.07, 1.8, 8);
const flaggGeo = new THREE.BoxGeometry(0.9, 0.6, 0.03);

function skapaPort(x, z, rod) {
  const g = new THREE.Group();
  const mat = rod ? rodMat : blaMat;
  for (const sida of [-1, 1]) {
    const stolpe = new THREE.Mesh(stolpeGeo, mat);
    stolpe.position.set(sida * PORT_BREDD, 0.9, 0);
    const flagga = new THREE.Mesh(flaggGeo, mat);
    flagga.position.set(sida * (PORT_BREDD - 0.5), 1.45, 0);
    g.add(stolpe, flagga);
  }
  g.traverse((d) => { if (d.isMesh) d.castShadow = true; });
  g.position.set(x, 0, z);
  g.userData = { tagen: false, passerad: false };
  scen.add(g);
  return g;
}

// ---------- Spelets tillstånd ----------
let trad = [];
let portar = [];
let fart, avstand, portPoang, igang, nastaRadZ, nastaPortZ, rodPort, svang;

function nollstall() {
  [...trad, ...portar].forEach((o) => scen.remove(o));
  trad = [];
  portar = [];
  fart = STARTFART;
  avstand = 0;
  portPoang = 0;
  svang = 0;
  akare.position.set(0, 0, 0);
  akare.rotation.set(0, 0, 0);
  nastaRadZ = -30;
  nastaPortZ = -40;
  rodPort = true;
  fyllPa();
}

// Skapa träd och portar framför åkaren
function fyllPa() {
  const horisont = akare.position.z - 130;
  while (nastaPortZ > horisont) {
    const x = slump(-BANBREDD + PORT_BREDD, BANBREDD - PORT_BREDD);
    portar.push(skapaPort(x, nastaPortZ, rodPort));
    rodPort = !rodPort;
    nastaPortZ -= PORT_AVSTAND;
  }
  while (nastaRadZ > horisont) {
    // fler träd ju längre man kommit (ett extra per 400 m)
    const antal = nastaRadZ > -FRI_START ? 0 : Math.min(TRAD_MAX, TRAD_START + Math.floor(-nastaRadZ / 400));
    for (let i = 0; i < antal; i++) {
      const x = slump(-BANBREDD, BANBREDD);
      // inga träd i portarna
      const iPort = portar.some((p) => Math.abs(p.position.z - nastaRadZ) < 5 && Math.abs(p.position.x - x) < PORT_BREDD + 1.5);
      if (!iPort) trad.push(skapaTrad(x, nastaRadZ));
    }
    // skogskant på sidorna
    trad.push(skapaTrad(-BANBREDD - slump(3, 8), nastaRadZ));
    trad.push(skapaTrad(BANBREDD + slump(3, 8), nastaRadZ));
    nastaRadZ -= slump(6, 10);
  }
}

// Ta bort sånt som åkts förbi
function stada() {
  const bakom = akare.position.z + 15;
  trad = trad.filter((t) => (t.position.z > bakom ? (scen.remove(t), false) : true));
  portar = portar.filter((p) => (p.position.z > bakom ? (scen.remove(p), false) : true));
}

function poang() {
  return Math.floor(avstand / 10) + portPoang * 10;
}

function kraschat() {
  igang = false;
  const p = poang();
  const nytt = mittRekord.spara(p);
  visaMeny({
    titel: nytt ? '🏆 Nytt rekord!' : 'Krasch! 🌲',
    text: `Poäng: <b>${p}</b><br>Portar: ${portPoang} · Sträcka: ${Math.floor(avstand)} m<br>Rekord: ${mittRekord.hamta()}`,
    knapp: 'Åk igen',
    onStart: () => { nollstall(); igang = true; },
  });
}

// ---------- Varje bildruta ----------
function uppdatera(dt) {
  if (igang) {
    fart = Math.min(MAXFART, fart + ACCELERATION * dt);

    // svängning med lite tröghet
    const mal = (knappar.hoger ? 1 : 0) - (knappar.vanster ? 1 : 0);
    svang += (mal - svang) * Math.min(1, dt * 8);
    akare.position.x = begransa(akare.position.x + svang * SVANGFART * dt, -BANBREDD, BANBREDD);
    akare.position.z -= fart * dt;
    avstand += fart * dt;

    // luta åkaren i svängen
    akare.rotation.z = -svang * 0.35;
    akare.rotation.y = -svang * 0.3;

    // krock med träd
    for (const t of trad) {
      const dx = t.position.x - akare.position.x;
      const dz = t.position.z - akare.position.z;
      if (Math.abs(dz) < 1.5 && Math.hypot(dx, dz) < t.userData.radie + 0.35) { kraschat(); break; }
    }

    // portar
    for (const p of portar) {
      if (!p.userData.passerad && akare.position.z < p.position.z) {
        p.userData.passerad = true;
        if (Math.abs(akare.position.x - p.position.x) < PORT_BREDD) {
          portPoang++;
          p.traverse((d) => { if (d.isMesh) d.material = gronMat; });
        }
      }
    }

    fyllPa();
    stada();
    hud(`Poäng: ${poang()}<br>Portar: ${portPoang}<br>${Math.round(fart * 3.6)} km/h`);
  }

  // marken, solen och kameran följer med
  backe.position.z = akare.position.z - 80;
  sol.position.set(akare.position.x + 10, 25, akare.position.z + 10);
  sol.target.position.set(akare.position.x, 0, akare.position.z - 10);
  kamera.position.set(akare.position.x * 0.7, 5.5, akare.position.z + 9);
  kamera.lookAt(akare.position.x * 0.85, 1, akare.position.z - 8);
}

nollstall();
visaMeny({
  titel: '⛷️ Slalom',
  text: '← → (eller A/D) för att svänga.<br>Åk genom portarna för +10 poäng. Undvik träden!<br>På mobil: tryck vänster/höger del av skärmen.',
  onStart: () => { igang = true; },
});
startaLoop(uppdatera, { scen, kamera, renderer });
