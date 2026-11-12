// =============================================================
//  TESTRUMMET – med trollstav 🪄 (idé: Beppe)
//  Peka på en bok och tryck → den lyfts med magi och svävar framför
//  staven. Peka på rätt färghylla och tryck → boken seglar in.
//  Håll inne mot golvet → staven suger upp dammet i glittervirvlar.
// =============================================================
import { THREE, skapaSpel, startaLoop } from '../../delat/motor.js';
import { Spelare, Interaktor, Smuts, Sparning, Butik, ljud, FpUI, Gnistor, Trollstav, Levitation } from '../../delat/fp/index.js';

const SPEL_ID = 'testrummet';

// ---------- Inställningar (lek fritt med dessa) ----------
const RUM = 14;                 // rummets storlek (meter)
const VAGG_HOJD = 3.2;
const BOCKER_PER_FARG = 6;
const MYNT_PER_BOK = 5;
const RUTOR_PER_MYNT = 12;      // hur mycket damm man suger upp per mynt
const FLYGTID = 0.8;            // sekunder för en bok att flyga in i hyllan
const UPPLASNING = true;        // läs upp instruktioner med svensk röst
const FARGER = [
  { id: 'rod', namn: 'röd', namnBest: 'röda', hex: 0xe5484d },
  { id: 'bla', namn: 'blå', namnBest: 'blå', hex: 0x3b82f6 },
  { id: 'gron', namn: 'grön', namnBest: 'gröna', hex: 0x2fb36b },
  { id: 'gul', namn: 'gul', namnBest: 'gula', hex: 0xf5b82e },
];
const saga = (t) => { if (UPPLASNING) ljud.saga(t); };

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
// stjärnor i taket
{
  const g = new THREE.BufferGeometry(), p = [];
  for (let i = 0; i < 260; i++) p.push((Math.random() - 0.5) * RUM, VAGG_HOJD - 0.02, (Math.random() - 0.5) * RUM);
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  scen.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xfff3c4, size: 0.05 })));
}
const lampa = new THREE.PointLight(0xfff1d6, 25, 20); lampa.position.set(0, VAGG_HOJD - 0.3, 0); scen.add(lampa);

// ---------- Spelare, interaktion, magi ----------
const spelare = new Spelare(kamera, renderer.domElement, {
  start: [0, 0, 3], granser: { minX: -RUM / 2, maxX: RUM / 2, minZ: -RUM / 2, maxZ: RUM / 2 },
});
const interaktor = new Interaktor(kamera, scen, { rackvidd: 3.5 });
const stav = new Trollstav(kamera);
const lev = new Levitation(kamera);
const gnistor = new Gnistor(scen, { max: 900 });
const spets = new THREE.Vector3();           // stavens spets i världen (uppdateras varje bild)

// ---------- Smuts ----------
const smuts = new Smuts(RUM, RUM, { rutnat: 64, upplosning: 512 });
scen.add(smuts.mesh);

// ---------- Sparning och butik ----------
const spar = new Sparning(SPEL_ID, { mynt: 0, nivaer: {}, smuts: '', placerade: [] });
const effekt = { radie: 0.4 };
const butik = new Butik(spar, [
  { id: 'virvel', namn: 'Större dammvirvel', ikon: '🌪️', beskrivning: 'Suger upp mer damm', priser: [15, 40, 90],
    effekt: (n) => { effekt.radie = [0.4, 0.6, 0.85, 1.15][n]; } },
  { id: 'kraft', namn: 'Starkare magi', ikon: '🪄', beskrivning: 'Lyft böcker längre bort', priser: [25, 60],
    effekt: (n) => { interaktor.rackvidd = [3.5, 5, 7][n]; } },
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
  const del = (w, h, d, x, y, z, mat = traMat) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); m.castShadow = true; g.add(m); return m; };
  del(B, 0.06, D, 0, 0.05, 0); del(B, 0.06, D, 0, 0.75, 0); del(B, 0.06, D, 0, 1.45, 0); del(B, 0.06, D, 0, H, 0);
  del(0.06, H, D, -B / 2, H / 2, 0); del(0.06, H, D, B / 2, H / 2, 0); del(B, H, 0.03, 0, H / 2, -D / 2 + 0.015);
  const skyltMat = new THREE.MeshStandardMaterial({ color: f.hex, emissive: f.hex, emissiveIntensity: 0.25 });
  del(0.9, 0.22, 0.05, 0, H + 0.2, 0.1, skyltMat);
  g.position.set(p.x, 0, p.z); g.rotation.y = p.ry;
  scen.add(g);
  g.updateMatrixWorld(true);
  spelare.hinder.push(new THREE.Box3().setFromObject(g));
  const platser = [];
  for (const y of [0.08, 0.78]) for (const x of [-0.5, 0, 0.5]) platser.push(new THREE.Vector3(x, y + 0.2, 0.02));
  const hylla = { farg: f, grupp: g, platser, bocker: [], reserverade: 0, skyltMat };
  hyllor.push(hylla);
  interaktor.registrera(g, {
    text: () => {
      const b = lev.obj;
      if (!b) return '';
      if (b.userData.farg.id !== f.id) return `Fel hylla – det här är ${f.namnBest} hyllan`;
      return `Skicka in den ${f.namnBest} boken ✨`;
    },
    kanAktivera: () => lev.svavar,
    aktivera: () => skickaIn(hylla),
  });
});

// ---------- Böcker ----------
const bokGeo = new THREE.BoxGeometry(0.1, 0.38, 0.28);
const bokMat = {};
const bocker = [];
let fro = 7;
const rnd = () => ((fro = (fro * 9301 + 49297) % 233280) / 233280);

function registreraBok(b) {
  const f = b.userData.farg;
  interaktor.registrera(b, {
    text: () => `Lyft den ${f.namnBest} boken 🪄`,
    kanAktivera: () => !lev.svavar && b.parent === scen && !b.userData.placerad && !b.userData.flyger,
    aktivera: () => lyftBok(b),
  });
}

FARGER.forEach((f) => {
  bokMat[f.id] = new THREE.MeshStandardMaterial({ color: f.hex, roughness: 0.6 });
  for (let i = 0; i < BOCKER_PER_FARG; i++) {
    const b = new THREE.Mesh(bokGeo, bokMat[f.id]);
    b.castShadow = true;
    b.userData = { id: `${f.id}-${i}`, farg: f };
    b.position.set((rnd() - 0.5) * (RUM - 3), 0.05, (rnd() - 0.5) * (RUM - 3));
    b.rotation.set(0, rnd() * Math.PI * 2, Math.PI / 2);
    scen.add(b);
    bocker.push(b);
    registreraBok(b);
  }
});

/** En lila aura runt boken medan den är förtrollad (bokens egen färg syns tydligt). */
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
  interaktor.avregistrera(b);
  glod(b, true);
  lev.lyft(b);
  ljud.svav();
  const f = b.userData.farg;
  saga(`${f.namn[0].toUpperCase() + f.namn.slice(1)} bok!`);
  gnistor.skjut(b.position, { antal: 40, fart: 1.2, spridning: 0.3, liv: 0.9 });
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
    const namn = hylla.farg.namnBest;
    ui.toast(`Den ${namn} hyllan är klar! ✨`, 'guld');
    saga(`Den ${namn} hyllan är klar!`);
    const v = new THREE.Vector3(); hylla.grupp.getWorldPosition(v); v.y = 1.2;
    gnistor.skjut(v, { antal: 120, fart: 2.5, spridning: 1.2, liv: 1.4, gravitation: 1.5 });
  }
}

function skickaIn(hylla) {
  const b = lev.obj;
  if (!b) return;
  if (b.userData.farg.id !== hylla.farg.id) {
    ljud.fel();
    ui.toast(`Fel hylla! Boken är ${b.userData.farg.namn}.`, 'fel');
    saga(`Oj, fel hylla. Boken är ${b.userData.farg.namn}. Leta efter den ${b.userData.farg.namnBest} hyllan.`);
    b.userData.skak = 0.45;
    return;
  }
  if (hylla.reserverade >= hylla.platser.length) { ui.toast('Hyllan är full!', 'fel'); return; }
  const index = hylla.reserverade++;
  lev.slapp();
  b.userData.flyger = true;
  const mal = hylla.grupp.localToWorld(hylla.platser[index].clone());
  const rot = new THREE.Quaternion(); hylla.grupp.getWorldQuaternion(rot);
  ljud.flyg();
  lev.flyg(b, {
    mal, rot, tid: FLYGTID, hojd: 0.5,
    varjeBild: (pos) => gnistor.skjut(pos, { antal: 2, fart: 0.25, liv: 0.6, spridning: 0.15 }),
    klar: () => {
      b.userData.flyger = false;
      glod(b, false);
      placeraIHylla(b, hylla);
      spar.data.placerade.push(b.userData.id);
      ljud.landa();
      gnistor.skjut(mal, { antal: 30, fart: 1, liv: 0.7, spridning: 0.2 });
      butik.mynt += MYNT_PER_BOK; ljud.mynt();
      ui.toast(`+${MYNT_PER_BOK} 🪙`, 'bra');
      spar.spara();
    },
  });
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
  text: 'Du är en trollkarl! Peka på en bok och tryck för att lyfta den med trollstaven. Skicka in den på hyllan med samma färg. Håll inne mot golvet för att suga upp dammet.',
  hjalp: 'WASD gå · Mus titta · Klick/E lyft och skicka · Håll inne: suga damm · Shift spring · B butik',
  spelare,
  onStart: () => {
    if (forstaStart) {
      forstaStart = false;
      saga('Välkommen, trollkarl! Peka på en bok och tryck för att lyfta den. Skicka in den på hyllan med samma färg. Håll inne mot golvet för att suga upp dammet.');
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

// ---------- Spelloop ----------
let anvandNere = false, rutBank = 0, klar = false, tid = 0;
const placeradeTotalt = () => hyllor.reduce((s, h) => s + h.bocker.length, 0);
const ANTAL_BOCKER = FARGER.length * BOCKER_PER_FARG;
const DAMMFARGER = [0x8a7050, 0xb59a70, 0xffe27a, 0xc58bff];

function uppdatera(dt) {
  tid += dt;
  spelare.uppdatera(dt);
  lev.uppdatera(dt);
  gnistor.uppdatera(dt);
  stav.spetsPos(spets);

  // skak när man försöker fel hylla
  const b = lev.obj;
  if (b?.userData.skak > 0) { b.userData.skak -= dt; b.position.x += Math.sin(tid * 60) * 0.02; }

  auraMat.opacity = 0.45 + Math.sin(tid * 5) * 0.15;

  // hyllans skylt pulserar när du bär en bok i samma färg (hjälp för den som letar)
  for (const h of hyllor) {
    const match = b && b.userData.farg.id === h.farg.id;
    h.skyltMat.emissiveIntensity = match ? 0.6 + Math.sin(tid * 6) * 0.5 : 0.25;
  }

  if (!ui.igang) { stav.uppdatera(dt, 0); return; }

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
  if (lev.svavar && !interaktor.hovrad) text = 'Släpp boken här';
  ui.prompt(text);

  // glitterstråle från staven till boken som svävar
  if (b && Math.random() < 0.6) {
    const dir = b.position.clone().sub(spets);
    gnistor.skjut(spets, { antal: 1, fart: 1, riktning: dir, liv: 0.5, spridning: 0.02 });
  }
  stav.kraft += ((suger ? 1 : b ? 0.45 : 0) - stav.kraft) * Math.min(1, dt * 8);
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
window.__testrummet = { spelare, interaktor, lev, stav, gnistor, smuts, butik, spar, bocker, hyllor, ui };

startaLoop(uppdatera, { scen, kamera, renderer });
