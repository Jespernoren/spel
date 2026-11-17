// =============================================================
//  FAMILJE-MEMORY 🃏 – vänd kort och hitta par
//  Korten är familjen och figurer från våra egna spel.
//  Poäng (max 1000): få drag och snabb tid. Alla kan få 1000,
//  för barnen har färre kort.
// =============================================================
import { skapaRam, FAMILJ, avatar, bildSokvag, ton, saga, pling } from '../../delat/familjespel.js';

// ---------- Lätt att leka med ----------
const SPEL_ID = 'familje-memory';
const PAR = { beppe: 3, charlie: 6, vuxen: 10 };          // antal par per spelare
const KOLUMNER = { 3: 2, 6: 3, 8: 4, 10: 4 };              // hur många kort i bredd
const VISA_FEL_MS = 900;                                   // hur länge två fel kort syns
const POANG_DRAG = 600;                                    // max-poäng för få drag
const POANG_TID = 400;                                     // max-poäng för snabb tid
const SEKUNDER_PER_PAR = 6;                                // tid per par som ger 0 tidspoäng... gånger 2 (se nedan)

// Figurer från familjens spel (namnen läses upp för Beppe)
const FIGURER = [
  { id: 'krang', emoji: '🐶', namn: 'Krang' },
  { id: 'tjuven', emoji: '🦹', namn: 'Tjuven' },
  { id: 'majisto', emoji: '🧙', namn: 'Majisto' },
  { id: 'enhorning', emoji: '🦄', namn: 'Enhörningen' },
  { id: 'ballong', emoji: '🎈', namn: 'Ballongen' },
  { id: 'raket', emoji: '🚀', namn: 'Raketen' },
  { id: 'popcorn', emoji: '🍿', namn: 'Popcorn' },
  { id: 'skoldpadda', emoji: '🐢', namn: 'Sköldpaddan' },
  { id: 'fjaril', emoji: '🦋', namn: 'Fjärilen' },
  { id: 'palm', emoji: '🌴', namn: 'Palmen' },
  { id: 'bebis', emoji: '👶', namn: 'Bebisen' },
];

// ---------- Hjälpare ----------
const $ = (id) => document.getElementById(id);
const blanda = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const S = { kort: [], vanda: [], par: 0, antalPar: 0, drag: 0, start: 0, timer: null, las: false, igang: false };

const ram = skapaRam({
  id: SPEL_ID,
  titel: 'Familje-Memory 🃏',
  startText: (jag) => `Vänd två kort i taget och hitta alla ${PAR[jag.id] || PAR.vuxen} par. Ju färre drag och ju snabbare, desto mer poäng (max 1000).`,
  onStart: starta,
  onMeny: () => { S.igang = false; clearInterval(S.timer); },
});

function starta(jag) {
  const n = PAR[jag.id] || PAR.vuxen;
  // Alltid med familjen (4 kort), resten figurer. Beppe får 3 par: 2 familj + 1 figur.
  const familj = blanda(FAMILJ).slice(0, Math.min(4, Math.ceil(n / 2)));
  const figurer = blanda(FIGURER).slice(0, n - familj.length);
  const motiv = [
    ...familj.map((p) => ({ nyckel: p.id, bild: bildSokvag(p.id), emoji: p.emoji, namn: p.namn, farg: p.farg })),
    ...figurer.map((f) => ({ nyckel: f.id, emoji: f.emoji, namn: f.namn })),
  ];
  S.kort = blanda([...motiv, ...motiv]).map((m, i) => ({ ...m, i, klar: false }));
  Object.assign(S, { vanda: [], par: 0, antalPar: n, drag: 0, las: false, igang: true, start: 0 });
  $('spelare').innerHTML = avatar(jag, 40);
  ritaBord();
  ritaTopp();
  $('meddelande').textContent = 'Vänd ett kort! 👆';
  clearInterval(S.timer);
  S.timer = setInterval(ritaTopp, 500);
}

function ritaBord() {
  const n = S.kort.length;
  const kol = KOLUMNER[S.antalPar] || 4;
  const rader = Math.ceil(n / kol);
  // största kortet som får plats
  const bredd = Math.min(innerWidth - 24, 520), hojd = innerHeight - 140;
  const gap = 10;
  const k = Math.floor(Math.min((bredd - gap * (kol - 1)) / kol, (hojd - gap * (rader - 1)) / rader));
  const bord = $('bord');
  bord.style.gridTemplateColumns = `repeat(${kol}, ${k}px)`;
  bord.style.setProperty('--k', `${k}px`);
  bord.innerHTML = S.kort.map((c) => `
    <button class="kort${c.klar ? ' klar' : ''}" data-i="${c.i}" style="width:${k}px;height:${k}px">
      <div class="inre">
        <div class="sida baksida"></div>
        <div class="sida framsida" ${c.farg ? `style="background:${c.farg}"` : ''}>
          <span class="emoji">${c.emoji}</span>
          ${c.bild ? `<img src="${c.bild}" alt="" onerror="this.remove()">` : ''}
          <span class="namn">${c.namn}</span>
        </div>
      </div>
    </button>`).join('');
  bord.querySelectorAll('.kort').forEach((el) => el.addEventListener('pointerdown', (e) => { e.preventDefault(); vand(+el.dataset.i); }));
}
addEventListener('resize', () => { if (S.igang) ritaBord(); });

function ritaTopp() {
  const sek = S.start ? Math.floor((Date.now() - S.start) / 1000) : 0;
  $('par').textContent = `${S.par} / ${S.antalPar} par`;
  $('drag').textContent = `${S.drag} drag`;
  $('tid').textContent = `${sek} s`;
}

function vand(i) {
  if (!S.igang || S.las) return;
  const c = S.kort[i];
  if (c.klar || S.vanda.includes(i)) return;
  if (!S.start) S.start = Date.now();
  S.vanda.push(i);
  document.querySelector(`.kort[data-i="${i}"]`).classList.add('vand');
  ton(520 + S.vanda.length * 120, 0.07);
  if (!ram.jag.vuxen) saga(c.namn, { fart: 1.15 });
  if (S.vanda.length < 2) return;

  S.drag++;
  const [a, b] = S.vanda.map((x) => S.kort[x]);
  if (a.nyckel === b.nyckel) {
    a.klar = b.klar = true;
    S.par++;
    S.vanda.forEach((x) => document.querySelector(`.kort[data-i="${x}"]`).classList.add('klar'));
    S.vanda = [];
    setTimeout(pling, 150);
    $('meddelande').textContent = ['Ett par! ⭐', 'Snyggt! 🎉', 'Rätt! ✨', 'Bra minne! 🧠'][S.par % 4];
    if (S.par === S.antalPar) setTimeout(klar, 700);
  } else {
    S.las = true;
    $('meddelande').textContent = 'Inte samma… 🤔';
    setTimeout(() => {
      S.vanda.forEach((x) => document.querySelector(`.kort[data-i="${x}"]`).classList.remove('vand'));
      S.vanda = []; S.las = false;
      $('meddelande').textContent = '';
    }, VISA_FEL_MS);
  }
  ritaTopp();
}

function poangFor(drag, sek, par) {
  const dragPoang = POANG_DRAG * Math.min(1, par / drag);                 // perfekt = lika många drag som par
  const tidPoang = POANG_TID * Math.max(0, 1 - sek / (par * SEKUNDER_PER_PAR * 2));
  return Math.round(dragPoang + tidPoang);
}

function klar() {
  S.igang = false;
  clearInterval(S.timer);
  const sek = Math.max(1, Math.round((Date.now() - S.start) / 1000));
  const poang = poangFor(S.drag, sek, S.antalPar);
  ram.slut(poang, `${S.antalPar} par på ${S.drag} drag och ${sek} sekunder`, 'Alla par hittade! 🎉');
}

// Testkrok
window.__familjememory = { S, vand, poangFor, ram };
