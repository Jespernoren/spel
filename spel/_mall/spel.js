// =============================================================
//  MALL – kopiera hela mappen till spel/<nytt-namn>/ och börja här
// =============================================================
import { THREE, skapaSpel, startaLoop, knappar, skapaHud, visaMeny, rekord, slump } from '../../delat/motor.js';

const SPEL_ID = 'nytt-spel'; // ÄNDRA till mappens namn (används för rekord)
const { scen, kamera, renderer } = skapaSpel({ bakgrund: 0x87ceeb });
const hud = skapaHud();
const mittRekord = rekord(SPEL_ID);

// --- Marken ---
const mark = new THREE.Mesh(
  new THREE.PlaneGeometry(300, 300),
  new THREE.MeshStandardMaterial({ color: 0x6abf69 })
);
mark.rotation.x = -Math.PI / 2;
mark.receiveShadow = true;
scen.add(mark);

// --- Spelaren (en kub) ---
const spelare = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xff5533 })
);
spelare.position.y = 0.5;
spelare.castShadow = true;
scen.add(spelare);

// --- Ett mynt att plocka ---
const mynt = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.5, 0.15, 24),
  new THREE.MeshStandardMaterial({ color: 0xffcf33, metalness: 0.6, roughness: 0.3 })
);
mynt.rotation.x = Math.PI / 2;
mynt.position.set(slump(-10, 10), 0.8, slump(-10, 10));
mynt.castShadow = true;
scen.add(mynt);

let poang = 0;
let igang = false;

function uppdatera(dt) {
  mynt.rotation.z += dt * 3;
  if (!igang) return;

  const fart = 8;
  if (knappar.vanster) spelare.position.x -= fart * dt;
  if (knappar.hoger) spelare.position.x += fart * dt;
  if (knappar.upp) spelare.position.z -= fart * dt;
  if (knappar.ner) spelare.position.z += fart * dt;

  if (spelare.position.distanceTo(mynt.position) < 1.2) {
    poang++;
    mynt.position.set(slump(-10, 10), 0.8, slump(-10, 10));
  }

  kamera.position.set(spelare.position.x, 8, spelare.position.z + 10);
  kamera.lookAt(spelare.position);
  hud(`Poäng: ${poang}<br>Rekord: ${mittRekord.hamta()}`);
  mittRekord.spara(poang);
}

kamera.lookAt(0, 0, 0);
visaMeny({
  titel: 'Nytt spel',
  text: 'Piltangenterna eller WASD för att röra dig. Plocka mynten!',
  onStart: () => { igang = true; },
});
startaLoop(uppdatera, { scen, kamera, renderer });
