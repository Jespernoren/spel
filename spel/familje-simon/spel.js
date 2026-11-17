// =============================================================
//  FAMILJE-SIMON 🎵 – klassiska Simon med familjen som knappar
//  Knapparna lyser i en ordning – härma! Ordningen blir ett steg
//  längre varje runda. Poäng = så många steg du klarade.
// =============================================================
import { skapaRam, FAMILJ, avatar, ton, saga, buu, pling } from '../../delat/familjespel.js';

// ---------- Lätt att leka med ----------
const SPEL_ID = 'familje-simon';
const INSTALLNING = {               // per spelare
  beppe:   { blink: 800, liv: 3, sagNamn: true },
  charlie: { blink: 600, liv: 2, sagNamn: false },
  vuxen:   { blink: 480, liv: 1, sagNamn: false },
};
const SNABBARE_PER_RUNDA = 0.035;   // blinkningen blir 3,5 % kortare varje runda
const KORTASTE_BLINK = 220;         // ms
const PAUS_MELLAN = 0.35;           // paus mellan blinkningar (andel av blinktiden)
const TONER = [392, 330, 262, 196]; // klassiska Simon-toner (G, E, C, G)

// ---------- Tillstånd ----------
const $ = (id) => document.getElementById(id);
const knappar = [...document.querySelectorAll('.knapp')];
const S = { ordning: [], steg: 0, liv: 1, spelar: false, inst: null, igang: false };
const vanta = (ms) => new Promise((r) => setTimeout(r, ms));

// Knapparna = familjen
knappar.forEach((k, i) => {
  const p = FAMILJ[i];
  k.style.setProperty('--f', p.farg);
  k.innerHTML = `${avatar(p, 0)}<b>${p.namn}</b>`;
  k.addEventListener('pointerdown', (e) => { e.preventDefault(); tryck(i); });
});
function storlekAvatar() {
  const s = Math.round(knappar[0].getBoundingClientRect().width * 0.5);
  knappar.forEach((k) => { const a = k.querySelector('.fs-avatar'); a.style.width = a.style.height = `${s}px`; a.style.fontSize = `${s * 0.55}px`; });
}
addEventListener('resize', storlekAvatar);

function blinka(i, ms, medNamn) {
  const k = knappar[i];
  k.classList.add('lyser');
  ton(TONER[i], ms / 1000, 'triangle', 0.18);
  if (medNamn) saga(FAMILJ[i].namn, { fart: 1.2 });
  setTimeout(() => k.classList.remove('lyser'), ms);
}

const ram = skapaRam({
  id: SPEL_ID,
  titel: 'Familje-Simon 🎵',
  startText: (jag) => `Knapparna lyser i en ordning. Tryck samma ordning! Varje runda blir den ett steg längre. Du har ${(INSTALLNING[jag.id] || INSTALLNING.vuxen).liv} ${(INSTALLNING[jag.id] || INSTALLNING.vuxen).liv === 1 ? 'liv' : 'liv'}.`,
  onStart: starta,
  onMeny: () => { S.igang = false; $('bradet').classList.add('las'); },
});

function ritaTopp() {
  $('spelare').innerHTML = avatar(ram.jag, 40);
  $('runda').textContent = `Runda ${S.ordning.length}`;
  $('liv').textContent = '❤️'.repeat(S.liv) + '🤍'.repeat(Math.max(0, S.inst.liv - S.liv));
  $('mitt').textContent = S.ordning.length;
}

function starta(jag) {
  S.inst = INSTALLNING[jag.id] || INSTALLNING.vuxen;
  S.liv = S.inst.liv;
  S.ordning = [];
  S.igang = true;
  storlekAvatar();
  nyRunda();
}

function blinkTid() {
  return Math.max(KORTASTE_BLINK, S.inst.blink * (1 - SNABBARE_PER_RUNDA) ** (S.ordning.length - 1));
}

async function nyRunda() {
  S.ordning.push(Math.floor(Math.random() * 4));
  await spelaUpp();
}

async function spelaUpp() {
  if (!S.igang) return;
  S.spelar = true; S.steg = 0;
  $('bradet').classList.add('las');
  ritaTopp();
  $('status').textContent = 'Titta och lyssna… 👀';
  await vanta(700);
  const ms = blinkTid();
  for (const i of S.ordning) {
    if (!S.igang) return;
    blinka(i, ms, S.inst.sagNamn);
    await vanta(ms * (1 + PAUS_MELLAN) + (S.inst.sagNamn ? 250 : 0));
  }
  S.spelar = false;
  $('bradet').classList.remove('las');
  $('status').textContent = 'Din tur! 👆';
}

async function tryck(i) {
  if (!S.igang || S.spelar) return;
  const ratt = S.ordning[S.steg];
  if (i === ratt) {
    blinka(i, 220, false);
    S.steg++;
    if (S.steg === S.ordning.length) {
      S.spelar = true;                       // inga tryck räknas förrän nästa runda visats
      $('bradet').classList.add('las');
      $('status').textContent = ['Snyggt! ⭐', 'Rätt! 🎉', 'Bra minne! 🧠', 'Perfekt! ✨'][S.ordning.length % 4];
      setTimeout(pling, 250);
      await vanta(900);
      nyRunda();
    }
  } else {
    // fel knapp
    S.spelar = true;
    $('bradet').classList.add('las');
    buu(); navigator.vibrate?.(120);
    $('bradet').classList.add('fel'); setTimeout(() => $('bradet').classList.remove('fel'), 400);
    await vanta(300);
    blinka(ratt, 600, false); // visa vilken som var rätt
    S.liv--;
    ritaTopp();
    await vanta(900);
    if (S.liv > 0) {
      $('status').textContent = 'Oj! Vi tar samma igen 💪';
      if (!ram.jag.vuxen) saga('Oj! Vi försöker igen!');
      await vanta(1100);
      spelaUpp();
    } else {
      S.igang = false;
      const klarade = S.ordning.length - 1;
      ram.slut(klarade, `Du kom ihåg ${klarade} steg i rad!`, 'Slut på liv!');
    }
  }
}

// Tangentbord: 1–4 (eller pilar) på dator
addEventListener('keydown', (e) => {
  const k = { 1: 0, 2: 1, 3: 2, 4: 3, ArrowUp: 0, ArrowRight: 1, ArrowLeft: 2, ArrowDown: 3 }[e.key];
  if (k !== undefined) tryck(k);
});

// Testkrok
window.__familjesimon = { S, tryck, ram };
