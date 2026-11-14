// =============================================================
//  PRINTA HEM – kapitel 1: Tältet (sprint 1)
//  Allt du äger är ett gammalt skjul och en gammal 3D-skrivare.
//  Städa skräp → mal till filament → trampa ström → printa →
//  sälj hos Ali → köp ritningar → printa maskiner → bygg lägret.
// =============================================================
import { THREE, skapaSpel, startaLoop } from '../../delat/motor.js';
import { Spelare, Interaktor, Hand, Sparning, ljud, FpUI } from '../../delat/fp/index.js';

import { INTRO_BILDER, kalender as kalenderSvg } from './intro-bilder.js';
import { byggMiljo } from './miljo.js';
import { IKON, ik, portratt, rens, knapp, ruta as uiRuta, grid, sektion, detalj, resurs, panel, rad, UI_CSS } from './ui-kit.js';
import { logo, BRAND_CSS, malaSkylt, NAMN, FARG } from './brand.js';
import { ansikte as hudAnsikte, hjarta as hudHjarta, HUD_CSS, matarFarg } from './hud.js';
{ const st = document.createElement('style'); st.textContent = UI_CSS; document.head.appendChild(st); }
const SPEL_ID = 'printa-hem';
const KAMERA_FOV = 80;             // synfält i grader – högre = mer vidvinkel (var 60)
const SPEL_TITEL = 'Soptippsvägen 1';   // spelets namn (mappen och sparnyckeln heter fortfarande printa-hem)
let batteriKlart = false;

// ---------- Molnsparning (när spelet körs som artefakt i Claude) ----------
// Webbläsarens lagring fungerar inte alltid i artefakt-rutan, så där sparas
// framstegen även i artefaktens egen databas, privat för varje spelare.
async function laddaMoln() {
  try {
    if (!window.claude?.use) return null;
    const vanta = (ms) => new Promise((r) => setTimeout(() => r(null), ms));
    return await Promise.race([(async () => {
      const db = await window.claude.use('db');
      const user = await window.claude.use('user');
      if (!db || !user) return null;
      const id = await user.id();
      if (!id) return null;
      const ref = db.doc(`data/users/${id}/printahem`);
      const snap = await ref.get();
      let data = null;
      try { data = snap.exists ? JSON.parse(snap.data()?.spar || 'null') : null; } catch { data = null; }
      return { ref, data, db, id };
    })(), vanta(7000)]);
  } catch { return null; }
}
const MOLN = await laddaMoln();

// ---------- Inställningar (lek fritt med dessa) ----------
const TOMT = 21;                 // tomten går från -TOMT till +TOMT (meter)
const ANTAL_SKRAP = 50;          // skräp på själva tomten från start
const GARD_KVAR = 3;             // så här få skräp får ligga kvar på gården när den räknas som städad
const LAGER = { x: -13, z: -12 };                    // ditt läger: tomtens bakre vänstra hörn, mot soptippen
const TIPP = { x: -TOMT - 9, z: TOMT - 8, r: 7 };  // soptippen bredvid tomten (låst tills Rolf ger dig nyckeln)
const ALI = { x: 5, z: TOMT + 7.8 };                // Alis marknad på andra sidan vägen
const TIPP_START = 55;           // skräp på tippen från start
const MAX_SKRAP = 170;           // mer än så ligger aldrig ute samtidigt
const SOPBIL_FORSTA = 45;        // sekunder tills första sopbilen kommer
const SOPBIL_VAR = 80;           // sekunder mellan sopbilarna
const SOPBIL_LAST = 15;          // skräp per last
const RULLE = 1000;              // 1 filamentrulle = 1000 g. Allt visas i rullar.
// Skräp ger olika mycket: påse 15 g, flaska 25 g, en stor dunk (sällsynt) 100 g
// Grundenhet: 5 flaskor = 1 rulle → en flaska = 20 % av en rulle. Allt räknas i hela 10 %.
// sort: [namn, filament i gram, andel av skräpet i %]
const SKRAP_SORTER = {
  flaska: { namn: 'PET-flaska', gram: 200, andel: 41 },
  burk: { namn: 'Yoghurtburk', gram: 100, andel: 19 },
  pase: { namn: 'Plastpåse', gram: 100, andel: 17 },
  dunk: { namn: 'Plastdunk', gram: 500, andel: 13 },
  back: { namn: 'Ölback', gram: 1000, andel: 5 },   // sällsynt fynd – en hel rulle!
  tunna: { namn: 'Regntunna', gram: 1500, andel: 3, tung: true },   // tungt – kräver skottkärra
  kajak: { namn: 'Plastkajak', gram: 2500, andel: 2, tung: true },
};
const TRATT_MAX = 12;
const BINGE_MAX = 60;            // matarbandets binge rymmer så här många skräp
const BAND_TID = 0.9;            // sekunder per skräp som bandet flyttar till tratten            // hur många skräp kvarnens tratt rymmer
const KARRA_KAP = 8000;          // skottkärran rymmer så här många gram skräp (8 rullar) – massor av smått eller ett par stora
const FART_UTAN = 5.2, FART_KARRA = 3.2, FART_KARRA_FULL = 2.3;   // gångfart (m/s) utan kärra, med tom kärra och med full kärra
const HOTBAR = 8;                // platser i verktygsraden (plats 1 = verktyget/famnen)
const KISTA_RACKVIDD = 3.2;
const KISTA_PLATSER = 18, STACK = 20;   // kistan har 18 platser, max 20 av samma sak per plats      // så nära kistan måste man stå för att flytta saker
const MATTNAD = 0.8, MATTNAD_GOLV = 0.25;   // varje såld vara samma dag sänker Alis pris 20 % (lägst 25 %) – nollställs på morgonen
const SALJ_TILLBAKA = 0.1;       // kr per gram när man säljer tillbaka en byggsats till Ali
const VEV_TID = 0.7;             // sekunder att veva per flaska (0,2 rulle) – större skräp tar längre
const MOTOR_TID = 1.6;
const motorFart = () => S.kvarn.jet ? 6 : S.kvarn.turbo ? 2.5 : 1;     // turbo 2,5× · jet 6×
const motorStrom = () => S.kvarn.jet ? 3 : S.kvarn.turbo ? 1.6 : 1;           // sekunder per flaska när motorn mal
const MOTOR_STROM = 1;           // ström per sekund när motorn mal
const STROM_BAS = 100;           // batteriet vid skrivaren rymmer så här mycket
const BANK_PLUS = 100;           // varje batteribank lagrar så här mycket mer
const TRAMP_PER_S = 12;          // ström per sekund när man trampar
const SOL_PER_S = 2.5;           // ström per sekund per solpanel
// Verktygsnivåer för skräp: 0 = händer, 1 = skräpgrip, 2 = magnetpistol.
// Varje nivå: bär mer, behöver sikta mindre noga, och plockar på längre håll.
const BARA_SKRAP = [4, 8, 14, 22];      // händer, grip, grip + ryggkorg, magnet
const SKRAP_TRAFF = [0.3, 0.8, 0.9, 1.3];  // träffytans storlek (meter) – små = måste sikta noga
const SKRAP_RACKVIDD = [2.0, 3.2, 3.4, 3.4]; // hur långt bort man når att plocka
const AUTO_PLOCK_NIVA = [0, 0, 0, 1.5];      // bara magneten plockar upp av sig själv – gripen styr du själv
const MAGNET_RACKVIDD = 10;             // magnetpistolen drar skräp så här långt bort
const MAGNET_VINKEL = 0.35;             // hur bred magnetstrålen är (radianer)
const MAGNET_FART = 7;                  // meter per sekund som skräpet flyger
const RACKVIDD_BYGG = 6;
         // hur långt bort man kan ställa saker
const TRIVSEL_MAL = 150;

// Saker man kan printa och sälja (gram filament, tid i sekunder på Gen 1, pris hos Ali)
const VAROR = {
  olhallare: { namn: 'Ölhållare med kylklamp', ikon: '🍺', gram: 300, tid: 12, pris: 0, gava: true },  // gåvor till Rolf
  flaskoppnare: { namn: 'Flasköppnare med magnet', ikon: '🍾', gram: 200, tid: 8, pris: 0, gava: true },
  grillspade: { namn: 'Grillspade', ikon: '🍖', gram: 600, tid: 16, pris: 0, gava: true },
  tomte: { namn: 'Trädgårdstomte till flaket', ikon: '🎅', gram: 800, tid: 22, pris: 0, gava: true },
  // Alis prototyper – byggs av Ali själv, en av varje, går inte att printa
  m_turbo: { namn: 'Prototyp: Turbofläkt till skrivare', ikon: '', gram: 0, tid: 0, pris: 0, proto: { pris: 6000, lar: 4, mod: true }, beskr: 'Monteras på EN skrivare: den printar dubbelt så fort.' },
  a_holo: { namn: 'Prototyp: Hologramskylt', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 150, unik: true, proto: { pris: 9000, lar: 5 }, beskr: 'En skylt som svävar i luften och byter färg. Trivsel +150.' },
  m_snal: { namn: 'Prototyp: Kvantmunstycke', ikon: '', gram: 0, tid: 0, pris: 0, proto: { pris: 12000, lar: 6, mod: true }, beskr: 'Monteras på EN skrivare: den drar 35 % mindre filament.' },
  m_nano: { namn: 'Prototyp: Nanokvarn', ikon: '', gram: 0, tid: 0, pris: 0, proto: { pris: 18000, lar: 8 }, beskr: 'Byggs in i kvarnen direkt: den mal 60 % fortare.' },
  m_grav: { namn: 'Prototyp: Gravitationsbädd', ikon: '', gram: 0, tid: 0, pris: 0, proto: { pris: 30000, lar: 10, mod: true }, beskr: 'Monteras på EN skrivare: den kan printa en storlek större (S blir M, M blir L).' },
  m_fusion: { namn: 'Prototyp: Fickfusionsbatteri', ikon: '', gram: 0, tid: 0, pris: 0, proto: { pris: 45000, lar: 12 }, beskr: 'Kopplas in direkt: +600 ström i batteriet och det laddar sig självt.' },
  a_robot: { namn: 'Prototyp: Alis AI-robot', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 250, unik: true, proto: { pris: 80000, lar: 14 }, beskr: 'Alis dröm. En liten robot som piper och blinkar. Trivsel +250.' },
  tapet_1: { namn: 'Tapet: grön med guldprickar', ikon: '', gram: 0, tid: 0, pris: 0, tapet: 1 },
  tapet_2: { namn: 'Tapet: blå ränder', ikon: '', gram: 0, tid: 0, pris: 0, tapet: 2 },
  tapet_3: { namn: 'Tapet: rosa blommor', ikon: '', gram: 0, tid: 0, pris: 0, tapet: 3 },
  tapet_4: { namn: 'Tapet: vitt tegel', ikon: '', gram: 0, tid: 0, pris: 0, tapet: 4 },
  tapet_5: { namn: 'Tapet: gamer, svart med neon', ikon: '', gram: 0, tid: 0, pris: 0, tapet: 5 },
  tapet_0: { namn: 'Tapet: 70-tal (brun och orange)', ikon: '', gram: 0, tid: 0, pris: 0, tapet: 0 },
  // presenter du köper hos Ali och lägger i Rolfs postlåda
  p_sexpack: { namn: 'Sexpack lättöl till Rolf', ikon: '', gram: 0, tid: 0, pris: 0, present: 300 },
  p_korv: { namn: 'Grillkorv till lördagen', ikon: '', gram: 0, tid: 0, pris: 0, present: 600 },
  p_kajsa: { namn: 'Kattmat och leksak till Kajsa', ikon: '', gram: 0, tid: 0, pris: 0, present: 1100 },
  p_fiske: { namn: 'Fiskespö till Rolf', ikon: '', gram: 0, tid: 0, pris: 0, present: 2500 },
  p_trummor: { namn: 'Nya trumstockar och trumskinn', ikon: '', gram: 0, tid: 0, pris: 0, present: 4500 },
  p_konsert: { namn: 'Biljetter till dansbandskonsert', ikon: '', gram: 0, tid: 0, pris: 0, present: 8000 },
  p_resa: { namn: 'Resa till Kanarieöarna', ikon: '', gram: 0, tid: 0, pris: 0, present: 20000 },
  // Rolfs tacksamhetssaker – kan inte köpas, bara få
  // filament nivå 2–5: låses upp med respekt. Kommer från tungt skräp (tunnor, kajaker) och från Rolf.
  rulle2: { namn: 'Filament nivå 2 – röd PETG', ikon: '', gram: 0, tid: 0, pris: 0, fil: 2 },
  fynd2: { namn: 'Röd PETG-back (från Rolf)', ikon: '', gram: 0, tid: 0, pris: 0, malTill: 2, beskr: 'Råmaterial: riktigt bra plast. Kvarnen behöver härdade knivar (Ali) – sen blir den en rulle röd PETG, filament nivå 2.' },
  fynd3: { namn: 'Kolfiberrester (från Rolf)', ikon: '', gram: 0, tid: 0, pris: 0, malTill: 3, beskr: 'Råmaterial. Kräver härdade kvarnknivar – blir en rulle kolfiber, nivå 3.' },
  fynd4: { namn: 'Guldglittrig plastdunk (från Rolf)', ikon: '', gram: 0, tid: 0, pris: 0, malTill: 4, beskr: 'Råmaterial. Kräver diamantkvarn – blir en rulle guldkomposit, nivå 4.' },
  fynd5: { namn: 'Titanspån i en hink (från Rolf)', ikon: '', gram: 0, tid: 0, pris: 0, malTill: 5, beskr: 'Råmaterial. Kräver diamantkvarn – blir en rulle titanblandning, nivå 5.' },
  rulle3: { namn: 'Filament nivå 3 – grön kolfiber', ikon: '', gram: 0, tid: 0, pris: 0, fil: 3 },
  rulle4: { namn: 'Filament nivå 4 – guldkomposit', ikon: '', gram: 0, tid: 0, pris: 0, fil: 4 },
  rulle5: { namn: 'Filament nivå 5 – titanblandning', ikon: '', gram: 0, tid: 0, pris: 0, fil: 5 },
  n2_neon: { namn: 'Neonskylt i blå PETG', ikon: '', gram: 1500, tid: 40, pris: 1800, trivsel: 50, placerbar: true, radie: 0.35, niva: 2 },
  n3_stol: { namn: 'Kolfiberstol', ikon: '', gram: 3000, tid: 70, pris: 5200, trivsel: 90, placerbar: true, radie: 0.4, niva: 3 },
  n4_staty: { namn: 'Guldstaty av Rolf', ikon: '', gram: 5000, tid: 110, pris: 14000, trivsel: 180, placerbar: true, radie: 0.45, niva: 4 },
  n5_drake: { namn: 'Titandrake', ikon: '', gram: 8000, tid: 160, pris: 38000, trivsel: 350, placerbar: true, radie: 0.6, niva: 5 },
  // mammas burkar som pappa lämnar – helt oanvändbara, tar bara plats
  burk_honung: { namn: 'Burk honung från mamma', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_lingon: { namn: 'Burk lingonsylt från mamma', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_saft: { namn: 'Flaska hemgjord rabarbersaft', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_vante: { namn: 'Virkade grytvantar (lila)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_sill: { namn: 'Burk inlagd sill från mamma', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_sockor: { namn: 'Stickade raggsockor (för små)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_duk: { namn: 'Virkad duk från mamma', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.25, burk: true },
  burk_toarulle: { namn: 'Virkat toarullsskydd (en dam i krinolin)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_porslin: { namn: 'Porslinshund från mormors dödsbo', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_tavla: { namn: 'Broderad tavla: Borta bra men hemma bäst (häng på väggen)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.25, burk: true },
  burk_tavla2: { namn: 'Korsstygnstavla: Ett glatt hjärta (häng på väggen)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.25, burk: true },
  burk_tavla3: { namn: 'Mammas egen oljemålning: Älg i solnedgång (häng på väggen)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.3, burk: true },
  burk_blomma: { namn: 'Blommor i vas från mamma (vissnar)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_vissen: { namn: 'Vissna blommor (luktar unket)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: -10, radie: 0.2, burk: true },
  burk_kompott: { namn: 'Matlåda: Mammas kompott (rotfruktsgratäng – potatisen var slut)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_raggmunk: { namn: 'Raggmunksrester i folie', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_mogel_kompott: { namn: 'Möglig kompott (luktar illa!)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: -20, radie: 0.2, burk: true },
  burk_mogel_raggmunk: { namn: 'Mögliga raggmunkar (luktar illa!)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: -20, radie: 0.2, burk: true },
  r_tv: { namn: 'Gammal tjock-TV från ett dödsbo', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 60, unik: true, rolf: true },
  r_affisch: { namn: 'Affisch: Rolfs Rockers 1987', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 40, unik: true, rolf: true },
  r_gardin: { namn: 'Birgittas stickade gardiner', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 45, unik: true, rolf: true },
  r_klocka: { namn: 'Rolfs guldklocka (30 år på jobbet)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 55, unik: true, rolf: true },
  r_fatolj: { namn: 'Läderfåtölj från dödsbo', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 80, unik: true, rolf: true },
  r_discokula: { namn: 'Discokula från 1987', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 70, unik: true, rolf: true },
  r_jukebox: { namn: 'Jukebox från dödsbo', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 120, unik: true, rolf: true },
  trumstockar: { namn: 'Rolfs trumstockar från 1987', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 40, unik: true },
  nyckelkopia: { namn: 'Kopia av chefens nyckel', ikon: '', gram: 150, tid: 8, pris: 0, gava: true },   // Rolfs skumma jobb
  stangdskylt: { namn: 'Skylt: TIPPEN STÄNGD', ikon: '', gram: 700, tid: 16, pris: 0, gava: true },
  termoslock: { namn: 'Termoslock med lönnfack', ikon: '', gram: 400, tid: 12, pris: 0, gava: true },
  stampel: { namn: 'Kopia av chefens stämpel', ikon: '', gram: 350, tid: 12, pris: 0, gava: true },
  tillstand: { namn: 'Parkeringstillstånd för husvagn', ikon: '', gram: 250, tid: 10, pris: 0, gava: true },
  sang: { storlek: 1, namn: 'Säng', ikon: '🛏️', gram: 1200, tid: 20, pris: 0, hem: true },          // 2 rullar. Kräver instruktionen hos Ali. Säljs inte.
  nyckelring: { namn: 'Nyckelring', ikon: '🔑', gram: 100, tid: 4, pris: 15 },      // 10 % rulle = en halv flaska
  kruka: { namn: 'Blomkruka', ikon: '🪴', gram: 400, tid: 18, pris: 30, trivsel: 5, placerbar: true, radie: 0.3 },
  pall: { namn: 'Pall', ikon: '🪑', gram: 1000, tid: 32, pris: 60, trivsel: 10, placerbar: true, radie: 0.35 },
  rulle: { namn: 'Filamentrulle', ikon: '🧵', gram: 1000, tid: 0, pris: 0, rulle: true },   // bärs från extrudern till skrivaren
  // recept: köps hos Ali – dyra, men betalar mer per rulle ju längre man kommer
  mobilstall: { namn: 'Mobilställ', ikon: '📱', gram: 300, tid: 12, pris: 20, recept: 100, syns: () => S.sang },
  // receptstegen: nästa recept syns när du köpt det förra – varje steg ger mer per rulle
  fagelholk: { namn: 'Fågelholk', ikon: '🐦', gram: 800, tid: 26, pris: 60, recept: 300, trivsel: 6, placerbar: true, radie: 0.3, syns: () => S.rolf.i >= 1 || harRecept('mobilstall') },
  lampskarm: { namn: 'Lampskärm', ikon: '💡', gram: 1200, tid: 34, pris: 100, recept: 600, syns: () => S.dag >= 3 || S.rolf.i >= 2 || harRecept('fagelholk') },
  dronare: { namn: 'Drönarram', ikon: '🛸', gram: 1500, tid: 40, pris: 150, recept: 1000, syns: () => S.rolf.i >= 3 || harRecept('lampskarm') },
  skateboard: { namn: 'Skateboard', ikon: '🛹', gram: 2000, tid: 50, pris: 240, recept: 1500, syns: () => harRecept('dronare') },
  gitarr: { namn: 'Elgitarr', ikon: '🎸', gram: 3000, tid: 64, pris: 420, recept: 2500, syns: () => harRecept('skateboard') },
  cykelram: { namn: 'Cykelram', ikon: '🚲', gram: 5000, tid: 80, pris: 800, recept: 4500, syns: () => harRecept('gitarr') },
  pkajak: { namn: 'Printad kajak', ikon: '🛶', gram: 12000, tid: 120, pris: 2200, recept: 10000, syns: () => harRecept('cykelram') },
};
// dyra saker man köper hos Ali (printas inte) – det är dessa man sparar till
Object.assign(VAROR, {
  gamingstol: { namn: 'Gamingstol', ikon: '🪑', recept: 900, pris: 0, gram: 3000, tid: 50, trivsel: 10, placerbar: true, radie: 0.35, syns: () => S.sang, lyx: 'Alis AI-modell nr 7. Han skrev prompten på en servett.' },
  hogtalare: { namn: 'Högtalare', ikon: '🔊', recept: 700, pris: 0, gram: 1500, tid: 30, trivsel: 8, placerbar: true, radie: 0.2, syns: () => S.sang, lyx: 'Lådan printar du – Ali lägger med högtalarelementen.' },
  r_radio: { namn: 'Rörradio från jordkällaren (spelar dansband)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 45, unik: true, radie: 0.3 },
  ra_flipper: { namn: 'Gammalt flipperspel (Rolfs hemliga ställe)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 90, unik: true, radie: 0.5 },
  ra_kiosk: { namn: 'Röd telefonkiosk', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 100, unik: true, radie: 0.55 },
  ra_moped: { namn: 'Gammal moped (startar ibland)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 80, unik: true, radie: 0.55 },
  ra_bensin: { namn: 'Bensinpump från 1962', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 70, unik: true, radie: 0.4 },
  ra_emalj: { namn: 'Emaljskylt: MJÖLK & GRÄDDE', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 35, unik: true, radie: 0.3 },
  ra_fatgrill: { namn: 'Grill av ett oljefat', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 45, unik: true, radie: 0.4 },
  kamin: { namn: 'Vedkamin', ikon: '🔥', recept: 900, pris: 0, gram: 4000, tid: 60, trivsel: 25, placerbar: true, radie: 0.35, syns: () => S.dag >= 8, lyx: 'Gjutjärnslook. Ställ den i skjulet så fryser du inte i vinter.' },
  kyl: { namn: 'Minikylskåp', ikon: '🧊', recept: 1200, pris: 0, gram: 4000, tid: 60, trivsel: 10, placerbar: true, radie: 0.3, syns: () => S.rolf.i >= 1, lyx: 'Skalet printar du – kylaggregatet följer med ritningen.' },
  gamingbord: { namn: 'Gamingbord med skärm', ikon: '🖥️', recept: 1800, pris: 0, gram: 5000, tid: 70, trivsel: 15, placerbar: true, radie: 0.6, syns: () => S.rolf.i >= 1, lyx: 'Bordet och skärmramen printar du – panelen ingår.' },
  soffa: { namn: 'Soffa', ikon: '🛋️', recept: 2200, pris: 0, gram: 7000, tid: 80, trivsel: 15, placerbar: true, radie: 0.8, syns: () => S.rolf.i >= 2, lyx: 'Alis stolthet. Han har aldrig suttit i den.' },
  ledpinne: { namn: 'RGB-ljuspinne', ikon: '🌈', recept: 500, pris: 0, gram: 600, tid: 16, trivsel: 6, placerbar: true, radie: 0.15, syns: () => S.kapitelKlart, lyx: 'AI:n föreslog ”mer RGB”. Den har rätt. Alltid mer RGB.' },
  akustik: { namn: 'Akustikpaneler', ikon: '🔲', recept: 600, pris: 0, gram: 1500, tid: 24, trivsel: 6, placerbar: true, radie: 0.3, syns: () => S.kapitelKlart, lyx: 'Ljudisolering. Så mamma inte hör när du skriker i Discord.' },
  neonskylt: { namn: 'Neonskylt GAME ON', ikon: '💡', recept: 900, pris: 0, gram: 800, tid: 20, trivsel: 8, placerbar: true, radie: 0.3, syns: () => S.kapitelKlart, lyx: 'Lyser rosa. Gör allt 40 % coolare. Vetenskapligt bevisat (av mig).' },
  figurhylla: { namn: 'Hylla med figurer', ikon: '🗿', recept: 1200, pris: 0, gram: 2500, tid: 36, trivsel: 10, placerbar: true, radie: 0.35, syns: () => S.kapitelKlart, lyx: 'Samlarfigurer. Du printar dem själv. Ingen behöver veta.' },
  projektor: { namn: 'Projektor + duk', ikon: '📽️', recept: 2500, pris: 0, gram: 3000, tid: 44, trivsel: 15, placerbar: true, radie: 0.5, syns: () => S.kapitelKlart, lyx: 'Bio i boden. Jag har aldrig varit på bio. Pappas butik.' },
  arkad: { namn: 'Arkadmaskin', ikon: '🕹️', recept: 3000, pris: 0, gram: 9000, tid: 80, trivsel: 18, placerbar: true, radie: 0.45, syns: () => S.kapitelKlart, lyx: 'En riktig arkadmaskin. AI:n gjorde den retro. Med flit.' },
  simrig: { namn: 'Racingsimulator', ikon: '🏎️', recept: 4500, pris: 0, gram: 10000, tid: 90, trivsel: 22, placerbar: true, radie: 0.7, syns: () => S.kapitelKlart, lyx: 'Racingstol, ratt och pedaler. Snabbare än sopbilen.' },
  biljard: { namn: 'Biljardbord', ikon: '🎱', recept: 5000, pris: 0, gram: 15000, tid: 110, trivsel: 20, placerbar: true, radie: 1.1, syns: () => S.kapitelKlart, lyx: 'Rolf säger att han är ”proffs”. Han är inte proffs.' },
  jacuzzi: { namn: 'Jacuzzi', ikon: '🛁', recept: 8000, pris: 0, gram: 20000, tid: 140, trivsel: 30, placerbar: true, radie: 1.1, syns: () => S.kapitelKlart, lyx: 'Varmt bubbelbad vid soptippen. Lyx är relativt.' },
  dator: { namn: 'Gamingdator med RGB', ikon: '💻', recept: 3500, pris: 0, gram: 2500, tid: 60, trivsel: 20, placerbar: true, radie: 0.25, syns: () => S.rolf.i >= 2, lyx: 'Chassit printar du – Ali har en låda med begagnade datordelar.' },
});
const GAMER = ['gamingstol', 'gamingbord', 'dator', 'hogtalare', 'ledpinne', 'akustik', 'neonskylt', 'figurhylla', 'projektor', 'arkad', 'simrig', 'biljard', 'soffa', 'kyl'];
const gamerSaker = () => placerade.filter((p) => GAMER.includes(p.typ)).length;
const harRecept = (id) => !VAROR[id]?.recept || S.ritningar.includes('recept:' + id);
// Maskiner: köp ritningen hos Ali, printa delarna, bygg ihop
const MASKINER = {
  kvarnmotor: { namn: 'Kvarnmotor', ikon: '⚙️', ritning: 50, delar: 1, gram: 500, tid: 10, beskr: 'Batteridriven – kvarnen mal själv, du slipper veva', monteras: true, syns: () => true },
  bank: { namn: 'Batteribank', ikon: '🔋', syns: () => harPlacerat('sol'), ritning: 120, delar: 2, gram: 600, tid: 12, beskr: `Lagrar ${BANK_PLUS} ström till – första banken fördubblar batteriet. Bygg flera när solen inte räcker`, trivsel: 2, radie: 0.45 },
  korg: { namn: 'Ryggkorg', ikon: '🎒', syns: () => S.grip && S.sang, ritning: 90, delar: 2, gram: 500, tid: 12, beskr: `Bär ${BARA_SKRAP[2]} skräp på ryggen i stället för ${BARA_SKRAP[1]}`, verktyg: true },
  karra: { namn: 'Skottkärra', ikon: '🛒', syns: () => false, ritning: 200, delar: 3, gram: 900, tid: 16, beskr: 'Lyft tungt skräp: regntunnor och kajaker – värda flera rullar', verktyg: true },
  magnet: { namn: 'Magnetpistol', ikon: '🧲', syns: () => S.korg && S.karra && ((S.stat.tungMalt || 0) >= 3 || S.dag >= 4), ritning: 300, delar: 3, gram: 1000, tid: 16, beskr: `Klicka och håll, sikta – suger till sig skräp. Bär ${BARA_SKRAP[3]}`, verktyg: true },
  turbomotor: { namn: 'Turbomotor', ikon: '🔥', syns: () => S.kvarn.motor && S.rolf.i >= 1 && S.dag >= 4, ritning: 400, delar: 3, gram: 800, tid: 14, monteras: true, beskr: 'Kvarnen mal 2,5× snabbare. Drar lite mer ström. Röda ränder ingår' },
  jetmotor: { namn: 'Jetmotor med efterbrännare', ikon: '🚀', syns: () => S.kvarn.turbo && S.rolf.i >= 3, ritning: 1500, delar: 4, gram: 1200, tid: 18, monteras: true, beskr: 'Kvarnen mal 6× snabbare. Med ELD. Drar mycket ström' },
  spolhallare: { namn: 'Stor spolhållare', ikon: '', syns: () => (S.stat.laddat || 0) >= 3 || S.rolf.i >= 1, ritning: 120, delar: 2, gram: 400, tid: 10, monteras: true, beskr: 'Monteras på en skrivare – rymmer 7 rullar i stället för 3. Välj den och klicka på skrivaren' },
  spolhallare2: { namn: 'Spolhållare XL', ikon: '', syns: () => skrivare.some((x) => (x.spolNiva || 0) >= 1), ritning: 400, delar: 3, gram: 700, tid: 12, monteras: true, beskr: 'Bygger på den stora spolhållaren: 12 rullar' },
  spolhallare3: { namn: 'Spoltorn', ikon: '', syns: () => skrivare.some((x) => (x.spolNiva || 0) >= 2), ritning: 1500, delar: 4, gram: 900, tid: 14, monteras: true, beskr: 'Ett torn med 20 rullar – behövs för riktigt stora prints som biljardbord och jacuzzi' },
  matarband: { namn: 'Skräpcontainer – extra kapacitet', ikon: '🗑️', syns: () => S.kvarn.motor && S.rolf.i >= 1, ritning: 220, delar: 3, gram: 700, tid: 14, beskr: `En container som står BAKOM kvarnen. Töm allt skräp i den (60 st) – ett litet band matar kvarnens tratt automatiskt. Montera: välj den och klicka på kvarnen`, monteras: true },
  rullstall: { namn: 'Rullställ vid extrudern', ikon: '', syns: () => (S.stat.hamtat || 0) >= 3 || S.rolf.i >= 1, ritning: 180, delar: 2, gram: 500, tid: 12, beskr: 'Ställs bredvid extrudern och lagrar 4 rullar till – kvarnen kan mala längre utan att stanna. Upp till tre ställ.', monteras: true },
  hardkniv: { namn: 'Härdade kvarnknivar', ikon: '', syns: () => S.respekt >= 25 || ['fynd2', 'fynd3'].some((f) => antalInv(f)), ritning: 300, delar: 2, gram: 600, tid: 12, monteras: true, beskr: 'Knivar av härdat stål. Utan dem klarar kvarnen inte Rolfs fynd – med dem blir röd PETG och kolfiberrester till filament nivå 2 och 3.' },
  diamantkniv: { namn: 'Diamantkvarn', ikon: '', syns: () => (S.kvarn.kniv || 0) >= 1 && (S.respekt >= 110 || ['fynd4', 'fynd5'].some((f) => antalInv(f))), ritning: 1500, delar: 3, gram: 1000, tid: 16, monteras: true, beskr: 'Diamantbelagda knivar. Klarar guldkomposit och titanspån – filament nivå 4 och 5.' },
  stortratt: { namn: 'Stor kvarntratt', ikon: '🪣', syns: () => S.karra, ritning: 150, delar: 2, gram: 600, tid: 12, beskr: 'Bred tratt med kross – nu får regntunnor och kajaker plats i kvarnen', monteras: true },
  // bygg ut skjulet till ett riktigt hem – printa delarna, välj dem och klicka på skjulet för att montera
  dorr: { namn: 'Dörr', ikon: '🚪', hem: true, monteras: true, syns: () => S.sang, ritning: 120, delar: 2, gram: 800, tid: 14, trivsel: 8, beskr: 'En riktig dörr – slut på drag och nyfikna katter' },
  vaggar: { namn: 'Isolerskiva (vägg)', ikon: '🧱', hem: true, monteras: true, syns: () => S.sang, ritning: 220, delar: 1, gram: 700, tid: 16, trivsel: 4, beskr: 'En vägg i taget – fyra skivor behövs (bak, vänster, höger, fram). Sen läcker kylan inte in längre' },
  tak: { namn: 'Plåttak', ikon: '🏠', hem: true, monteras: true, syns: () => S.rolf.i >= 1, ritning: 260, delar: 3, gram: 800, tid: 16, trivsel: 12, beskr: 'Korrugerade takplåtar över hålet – inget mer regn på kudden' },
  fonster: { namn: 'Fönster', ikon: '🪟', hem: true, monteras: true, syns: () => S.rolf.i >= 1, ritning: 150, delar: 2, gram: 700, tid: 14, trivsel: 8, beskr: 'Ljus in i skjulet. Sätt det var du vill på en plan vägg – du kan ha flera (max 4)' },
  golv: { namn: 'Trägolv', ikon: '🪵', hem: true, monteras: true, syns: () => S.rolf.i >= 2, ritning: 140, delar: 3, gram: 800, tid: 14, trivsel: 8, beskr: 'Varma golvplankor i stället för kall jord' },
  taklampa: { namn: 'Taklampa', ikon: '💡', hem: true, monteras: true, syns: () => S.rolf.i >= 2, ritning: 90, delar: 1, gram: 400, tid: 10, trivsel: 6, beskr: 'Mysigt gult ljus om kvällarna' },
  tapeter: { namn: 'Tapeter', ikon: '🧻', hem: true, monteras: true, syns: () => S.kapitelKlart, ritning: 400, delar: 4, gram: 500, tid: 12, trivsel: 20, beskr: 'Riktiga tapeter på insidan – mamma kan inte klaga längre. Kräver tätade väggar' },
  gamingbod: { namn: 'Gamingbod (tillbyggnad)', ikon: '', flik: 'hem', monteras: true, syns: () => S.kapitelKlart, ritning: 2500, delar: 6, gram: 2000, tid: 20, trivsel: 25, beskr: 'En egen bod bredvid skjulet – med RGB i taket. Plats för hela gamingsetupen' },
  grip: { namn: 'Skräpgrip', ikon: '🦾', ritning: 50, delar: 1, gram: 400, tid: 10, syns: () => true, beskr: `Bär ${BARA_SKRAP[1]} skräp, lättare att sikta, plockar upp när du går nära`, verktyg: true },
  bord: { namn: 'Arbetsbord', ikon: '🪵', syns: () => S.rolf.i >= 2 && S.dag >= 4, ritning: 120, delar: 3, gram: 700, tid: 14, beskr: 'Bordsyta för en skrivare till', trivsel: 8, radie: 1.0 },
  sol: { namn: 'Solpanel', ikon: '☀️', syns: () => S.rolf.i >= 2 && S.dag >= 4, ritning: 180, delar: 3, gram: 800, tid: 14, beskr: 'Laddar ström av sig själv', trivsel: 6, radie: 0.8 },
  rullband: { namn: 'Rullband från tippen', ikon: '', syns: () => S.kvarn.band && S.kapitelKlart, ritning: 1200, delar: 4, gram: 900, tid: 16, monteras: true, beskr: 'Går från tippen till containern bakom kvarnen. Lägg skräp på bandets inmatning vid tippen – du slipper gå hela vägen. Drar lite ström.' },
  lastarm: { namn: 'Lastarm vid tippen', ikon: '', syns: () => !!S.auto?.band, ritning: 1800, delar: 4, gram: 1000, tid: 18, monteras: true, beskr: 'Plockar skräp från tippen och lägger det på bandet åt dig. Orkar bara lätta saker i början – trimma den hos Ali för att lyfta tyngre.' },
  robotarm: { namn: 'Rulladdare (robotarm)', ikon: '', syns: () => !!S.auto?.lastarm, ritning: 2000, delar: 4, gram: 1000, tid: 18, monteras: true, beskr: 'Står vid extrudern. Tar varje färdig rulle och laddar den skrivare som har minst filament.' },
  utlada: { namn: 'Leveranslåda + autoprint', ikon: '', syns: () => !!S.auto?.arm, ritning: 2500, delar: 3, gram: 800, tid: 16, monteras: true, beskr: 'Skrivarna kan printa samma sak om och om igen. Allt hamnar i lådan, och Ali hämtar den varje morgon och betalar.' },
  skrivare3: { namn: 'Skrivare L', ikon: '', syns: () => S.kapitelKlart && harPlacerat('skrivare2'), ritning: 3000, delar: 6, gram: 1200, tid: 20, beskr: 'Stor byggvolym: soffa, kajak, arkadmaskin, jacuzzi. 4× snabbare än S. Står på golvet.', trivsel: 25 },
  skrivare2: { namn: 'Skrivare M', ikon: '🖨️', syns: () => harPlacerat('bord'), ritning: 500, delar: 5, gram: 900, tid: 18, beskr: 'Dubbelt så stor byggvolym och 2,5× snabbare. Printar drönare, gitarr och gamingstol. Måste stå på ett arbetsbord.', trivsel: 15, kraverBord: true },
};
// vad varje del heter – det är de här som printas en i taget
const DEL_NAMN = {
  kvarnmotor: ['Motorhus', 'Fläkthjul'], bank: ['Batterilåda', 'Lock med kontakter'], korg: ['Korg', 'Axelremmar'],
  karra: ['Korg', 'Hjul', 'Handtag'], magnet: ['Pistolkropp', 'Magnetspole', 'Batterilucka'], stortratt: ['Tratt', 'Krosskäftar'], hardkniv: ['Knivhållare', 'Härdade knivar'], diamantkniv: ['Knivtrumma', 'Diamantknivar', 'Lager'],
  grip: ['Käftar', 'Skaft med avtryckare'], bord: ['Bordsskiva', 'Ben', 'Ben'], sol: ['Panelram', 'Solceller', 'Stativ'],
  skrivare2: ['Ram', 'Byggbädd', 'Skrivhuvud', 'Extruder', 'Styrkort'],
  spolhallare3: ['Torn', 'Axlar', 'Fot', 'Hylsor'],
  rullband: ['Motorrulle', 'Bandsektioner', 'Ben', 'Styrlåda'], lastarm: ['Fot', 'Vridled', 'Lyftarm', 'Gripklo'], robotarm: ['Bas', 'Axel', 'Underarm', 'Gripklo'], utlada: ['Låda', 'Lock', 'Rutschkana'],
  skrivare3: ['Stålram', 'Stor byggbädd', 'Linjärskenor', 'Dubbelt skrivhuvud', 'Kapsling', 'Styrkort'],
};
// Ali betalar runt 60 kr per rulle i början – ritningar och lyxsaker (från 150 kr) är skalade efter det
const PRIS_SKALA = 0.6;
for (const v of Object.values(MASKINER)) if (v.ritning >= 150) v.ritning = Math.round(v.ritning * PRIS_SKALA / 10) * 10;
for (const v of Object.values(VAROR)) if (v.lyx && v.recept >= 150) v.recept = Math.round(v.recept * PRIS_SKALA / 10) * 10;
// ---------- Ali får in nytt i lagom takt: högst två nyheter per dag ----------
// Saker som behövs för dagens uppdrag släpps alltid direkt (annars kan man fastna).
// Övrigt (uppgraderingar, recept, lyx) släpps billigast först, två om dagen – en naturlig progression.
const SLAPP_PER_DAG = 2;
const SLAPP_FRI = new Set(['grip', 'kvarnmotor', 'sang', 'dorr', 'vaggar', 'tak', 'fonster', 'golv', 'taklampa', 'tapeter', 'stortratt', 'bord', 'sol', 'skrivare2', 'gamingbod', 'karra', 'hardkniv', 'diamantkniv', 'mobilstall', 'skrivare3', 'jacuzzi', 'gamingstol', 'hogtalare', 'ledpinne']);
const SLAPP_ORIG = {};
const slappPris = (id) => MASKINER[id]?.ritning ?? VAROR[id]?.recept ?? 0;
for (const [id, v] of [...Object.entries(MASKINER), ...Object.entries(VAROR)]) {
  if (typeof v.syns !== 'function' || SLAPP_FRI.has(id)) continue;
  SLAPP_ORIG[id] = v.syns;
  v.syns = () => SLAPP_ORIG[id]() && (!S.slappt || S.slappt.includes(id));
}
function slappNya() {
  const kandidater = Object.keys(SLAPP_ORIG).filter((id) => !S.slappt?.includes(id) && SLAPP_ORIG[id]());
  if (!S.slappt) { S.slappt = kandidater; S.slapptDag = {}; return; }   // äldre sparning: allt som redan syns stannar
  if (!kandidater.length) return;
  S.slapptDag = S.slapptDag || {};
  const idag = S.slapptDag[S.dag] || 0; if (idag >= SLAPP_PER_DAG) return;
  kandidater.sort((a, b) => slappPris(a) - slappPris(b));
  const ny = kandidater.slice(0, SLAPP_PER_DAG - idag);
  S.slappt.push(...ny); S.slapptDag[S.dag] = idag + ny.length; sparaSnart();
}
Object.assign(DEL_NAMN, { turbomotor: ['Turbin', 'Insugsrör', 'Röda ränder'], jetmotor: ['Kompressor', 'Brännkammare', 'Munstycke', 'Efterbrännare'] });
Object.assign(DEL_NAMN, { tapeter: ['Tapetrulle 1', 'Tapetrulle 2', 'Tapetrulle 3', 'Tapetrulle 4'], gamingbod: ['Golv', 'Bakvägg', 'Sidvägg', 'Sidvägg', 'Tak', 'Dörr och fönster'] });
Object.assign(DEL_NAMN, { rullstall: ['Ställning', 'Spolaxlar'], spolhallare: ['Ställning', 'Spolaxlar'], spolhallare2: ['Hög ställning', 'Spolaxlar', 'Kullager'] });
Object.assign(DEL_NAMN, { matarband: ['Container', 'Matarband', 'Drivrulle'] });
Object.assign(DEL_NAMN, { dorr: ['Dörrblad', 'Gångjärn och handtag'], vaggar: ['Isolerskiva'],
  tak: ['Takplåt 1', 'Takplåt 2', 'Takplåt 3'], fonster: ['Fönsterkarm', 'Ruta'], golv: ['Golvplankor 1', 'Golvplankor 2', 'Golvlister'], taklampa: ['Lampa med sladd'] });
const delNamn = (m, i) => DEL_NAMN[m]?.[i] || `del ${i + 1}`;
const GEN = { 1: { fart: 1, strom: 4, namn: 'S', storlek: 1, mm: 180 }, 2: { fart: 2.5, strom: 8, namn: 'M', storlek: 2, mm: 350 }, 3: { fart: 4, strom: 14, namn: 'L', storlek: 3, mm: 1000 } };
// skrivarens storlek bestämmer vad den kan printa: S små saker, M mellanstora, L stora (soffa, kajak, jacuzzi …)
const SKRIVARTYP = { skrivare2: 2, skrivare3: 3 };
const STORLEK_NAMN = { 1: 'S', 2: 'M', 3: 'L' };
const storlekFor = (typ) => { const v = VAROR[typ]; if (!v) return 1; if (v.storlek) return v.storlek; return v.gram <= 1200 ? 1 : v.gram <= 5000 ? 2 : 3; };
 const skrivStorlek = (sk) => Math.min(3, GEN[sk.gen].storlek + (sk.mod === 'm_grav' ? 1 : 0));
const storlekRuta = (id, maskin) => (maskin ? (MASKINER[id]?.storlek || 1) : storlekFor(id));
const storstaSkrivare = () => Math.max(1, ...skrivare.map((x) => x.gen));  // strom = ström per sekund när den printar
const SANG_INSTRUKTION = 60;    // kr – sängen låses upp efter första uppgraderingen
const SPOL_MAX = [3000, 7000, 12000, 20000];   // rullar per skrivare: vanlig 3 · stor 7 · XL 12 · torn 20 – varje rulle syns i stället
const SPOL_NIVA = { spolhallare: 1, spolhallare2: 2, spolhallare3: 3 };
const maxFil = (sk) => SPOL_MAX[sk.spolNiva || 0];
const FILAMENT_KOP = { gram: 1000, pris: 150 };  // en hel rulle – dyrare än du får för prints (≈60–180 kr/rulle)

// verktygsnivå för skräp: magnetpistolen gäller bara när den är vald i verktygsraden – annars gripen (ryggkorgen ger mer plats)
const niva = () => (S.magnet && S.hotbar?.[S.vald]?.typ === 'magnet') ? 3 : S.korg ? 2 : S.grip ? 1 : 0;
const skrapLage = () => S.vald === 0 || S.hotbar?.[S.vald]?.typ === 'magnet';
// Alis trimningar: oändliga uppgraderingar – varje nivå kostar mer (exponentiellt), effekten växer linjärt
const TRIM = {
  kvarn: { namn: 'Kvarntrim', ikon: '⚙️', bas: 300, vaxt: 1.6, beskr: (l) => `Kvarnen mal ${l * 25} % snabbare` },
  skrivare: { namn: 'Skrivartrim', ikon: '🖨️', bas: 400, vaxt: 1.6, beskr: (l) => `Skrivarna printar ${l * 20} % snabbare` },
  pris: { namn: 'Säljsnack', ikon: '🪙', bas: 500, vaxt: 1.7, beskr: (l) => `Ali betalar ${l * 10} % mer för prints` },
  sopbil: { namn: 'Mutor till Rolf', ikon: '🚛', bas: 250, vaxt: 1.5, beskr: (l) => `Sopbilen tippar ${l * 3} skräp extra varje gång` },
  batteri: { namn: 'Batteritrim', ikon: '🔋', bas: 200, vaxt: 1.5, beskr: (l) => `+${l * 100} ström i batteriet` },
  utlager: { namn: 'Rullhållare vid extrudern', ikon: '', bas: 120, vaxt: 1.9, tidig: true, syns: () => S.kvarn.motor || (S.stat.hamtat || 0) >= 2, beskr: (l) => `Rymmer ${utlagerKap(l)} färdiga rullar innan kvarnen måste stanna` },
  band: { namn: 'Bandtrim', ikon: '', bas: 600, vaxt: 1.6, syns: () => !!S.auto?.band, beskr: (l) => `Bandet går ${Math.round((1.25 ** l - 1) * 100)} % fortare och rymmer ${BAND_BAS + l * 3} saker` },
  arm: { namn: 'Armtrim', ikon: '', bas: 700, vaxt: 1.65, syns: () => !!S.auto?.lastarm, beskr: (l) => `Lastarmen lyfter ${(armMax(l) / 1000).toLocaleString('sv-SE', { maximumFractionDigits: 1 })} kg och är ${Math.round((1 / 0.85 ** l - 1) * 100)} % snabbare` },
};
const trimNiva = (k) => S.trim?.[k] || 0;
const utlagerKap = (l = trimNiva('utlager')) => ([1, 2, 5, 10, 20][l] ?? 20 + (l - 4) * 10) + 4 * Math.min(3, S.rullstall || 0);
const extruderFull = () => S.kvarn.ut >= utlagerKap() * RULLE;
const trimPris = (k) => Math.round(TRIM[k].bas * TRIM[k].vaxt ** trimNiva(k));
const harProto = (id) => (S.proto || []).includes(id);
const stromMax = () => STROM_BAS + placerade.filter((p) => p.typ === 'bank').length * BANK_PLUS + trimNiva('batteri') * 100 + (harProto('m_fusion') ? 600 : 0);

// filament visas som procent av en rulle: 20 %, 1 rulle 40 %, 3 rullar
const rullar = (g) => {
  const hela = Math.floor(g / RULLE + 1e-6), rest = Math.round((g - hela * RULLE) / (RULLE / 100));
  if (!hela) return `${rest} % rulle`;
  return `${hela} ${hela === 1 ? 'rulle' : 'rullar'}` + (rest ? ` ${rest} %` : '');
};

// ---------- Story-lappar ----------
const LAPPAR = {
  skylt: ['📔 Dagbok', 'Spikade ihop en skylt av lösa bräder från tippen och målade på den. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT.'],
  start: ['📔 Dagbok', 'Dag 1. Inget mer tjat. Här står jag, vid soptippen, med storebrors gamla 3D-skrivare och ett skjul som luktar mus. Men skräp är plast – och plast är filament. Plan: 1) en säng. 2) städa gården. 3) bygga om skjulet till en riktig fristad – med gamingsetup.'],
  sang: ['📔 Dagbok', 'Första natten i en riktig säng. Jag printade den själv.'],
  mammaslut: ['💌 Brev från mamma – det första som kommit hit', 'Kära du!\n\nGrattis till nya huset!! Pappa och jag åkte förbi i söndags. Oj vad STÄDAT och fint det är. Jag är imponerad. Jag grät lite i bilen. Pappa sa "aha, vad lugnt då" – och han log.\n\nNu kan jag äntligen skicka post till dig. Det första kommer på tisdag: fyra burkar lingonsylt.\n\nKram, mamma ❤️\n\nPS. Rolf vinkade från sopbilen. Han hade en tomte på flaket.'],
  polett: ['📔 Dagbok', 'Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste marken och tippen vara min, och Rolf behöver ett riktigt hus.'],
  hem: ['📔 Dagbok', 'Fabriken har kommit igång. Nu vill jag sova i en riktig säng i skjulet i stället för på det kalla golvet.'],
  sopbil: ['📔 Dagbok', 'Sopbilen tippade en ny last. All den plasten – och grinden är låst.'],
  rolf: ['🚛 Lapp från Rolf', 'ÖJ! Är de du som printar grejer?? Ja önskar mig en ölhållare me kylklamp. Lägg den i min postlåda vid grinden så får du nyckeln till tippen. Kall öl e viktigt. /Rolf (sopbilen)'],
  nyckel: ['🚛 Lapp från Rolf', 'TACK för hållarn!! Ölen e iskall. Nyckeln e din. La me en gammal lur också, så ja kan sms:a dig. /Rolf'],
  malt: ['📔 Dagbok', 'Kvarnen funkar. Soptippen är en gruva.'],
  motor: ['📔 Dagbok', 'Grip OCH motor. Nu går det undan.'],
  printat: ['📱 Storebror', 'VA FAN?! Fick du den att FUNKA?? Jag gav upp efter två veckor, det var för jävla krångligt att installera allt. Grym du är 🤙 Gå och visa butiken över vägen. Ali köper allt som är printat.'],
  salt: ['🧺 Ali', 'Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita åt mig: en skräpgrip och en kvarnmotor. Kom och titta.'],
  ritning: ['📔 Dagbok', 'Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner.'],
  sol: ['📔 Dagbok', 'Slut på trampandet. Nästan.'],
  skrivare2: ['📱 Storebror', 'VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥'],
  klart: ['📔 Dagbok', 'Det börjar kännas som ett hem. På riktigt. Mamma kommer på söndag…'],
  gard: ['📔 Dagbok', 'Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det.'],
};

// brev från Rolf heter 'rolf:0', 'rolftack:0' osv
// ROLF definieras längre ner – läs den försiktigt så att tidig migrering inte kraschar
const rolfText = (n, falt) => { try { return rolfDialekt(ROLF?.[n]?.[falt] || '', false); } catch { return ''; } };
// Rolf kommer från bonnvischan – det ska synas och höras. På sms skriver han med ett finger, så det blir lite fel.
const ROLF_ORD = { inte: 'int', här: 'hä', där: 'dä', mig: 'mej', dig: 'dej', sig: 'sej', också: 'oxå', något: 'nåt', någon: 'nån', några: 'nåra', sådan: 'sån', sådana: 'såna', säga: 'säja', det: 'de', jag: 'ja', är: 'e', med: 'me', mycket: 'mycke', ingenting: 'inget', kommer: 'kömmer', vad: 'va', nu: 'nu', väl: 'väl', titta: 'titta', pojke: 'pôjk', flicka: 'jänta', sedan: 'sen', säger: 'säjer', vet: 'vet' };
const ROLF_IN = ['ÖJ! ', 'Hörru. ', 'Jo jo. ', 'Nämen. ', '', '', '', 'Tjo. '];
const hashTal = (t) => { let h = 2166136261; for (let i = 0; i < t.length; i++) h = Math.imul(h ^ t.charCodeAt(i), 16777619); return h >>> 0; };
function rolfDialekt(t, skrivfel) {
  if (!t || t.includes('\u200b')) return t;          // redan omskriven
  const h = hashTal(t);
  let u = t.replace(/[A-Za-zÅÄÖåäö]+/g, (w) => { const l = w.toLowerCase(), r = ROLF_ORD[l]; if (!r) return w; if (w.length > 1 && w === w.toUpperCase()) return r.toUpperCase(); return w[0] === w[0].toUpperCase() && w[0] !== w[0].toLowerCase() ? r[0].toUpperCase() + r.slice(1) : r; });
  if (!/^(ÖJ|Hörru|Rolf|Jo|Tjo|Nämen|NÄMEN|VA|Va )/.test(u)) u = ROLF_IN[h % ROLF_IN.length] + u;
  if (skrivfel) {
    const ord = u.split(' '), kand = ord.map((w, i) => [w, i]).filter(([w]) => /^[a-zåäö]{6,}$/.test(w));
    if (kand.length && h % 3 === 0) {            // två bokstäver byter plats … och han rättar sig
      const [w, i] = kand[(h >>> 4) % kand.length], k = 1 + ((h >>> 8) % (w.length - 2));
      ord[i] = w.slice(0, k) + w[k + 1] + w[k] + w.slice(k + 2); u = ord.join(' ') + '\n*' + w;
    } else if (h % 3 === 1) u = u.replace(/\. /, '.. ').replace(/!$/, '!!');
    if (h % 5 === 0) u = u.replace(/\/R(olf)?$/, 'MVH ROLF');
  }
  return u + '\u200b';
}
const lappInfo = (id) => id.startsWith('rolf:') ? ['✉️ Brev från Rolf', rolfText(+id.split(':')[1], 'brev')]
  : id.startsWith('rolftack:') ? ['✉️ Brev från Rolf', rolfText(+id.split(':')[1], 'tack')] : LAPPAR[id];

// ---------- Mål-guiden (stödet) ----------
const harSang = () => S.sang || antalInv('sang') > 0 || skrivare.some((x) => x.klar === 'sang' || x.jobb?.typ === 'sang');
const forstaUpp = () => S.grip || S.kvarn.motor;
const rolfSteg = (i, del) => {
  // ROLF definieras längre ner – läs den först när stegen körs
  const v = () => ROLF[i].vara, nm = () => VAROR[v()].namn.toLowerCase();
  return [
    { del, text: 'Läs brevet i Rolfs postlåda', klar: () => S.rolf.i > i || (S.rolf.i === i && (S.rolf.aktiv || S.post.tillRolf === v())), startPost: 'rolf:' + i },
    { del, text: () => `Köp 3D-modellen: ${nm()} (Ali)`, klar: () => S.rolf.i > i || harGava(v()) || S.ritningar.includes('gava:' + v()) },
    { del, text: () => `Printa ${nm()}`, klar: () => S.rolf.i > i || harGava(v()) },
    { del, text: () => `Lägg ${nm()} i Rolfs postlåda`, klar: () => S.rolf.i > i || S.post.tillRolf === v() },
    { del, text: 'Vänta på Rolfs sopbil', klar: () => S.rolf.i > i },
    { del, text: 'Hämta Rolfs paket i postlådan', klar: () => S.rolf.i > i + 1 || (S.rolf.i > i && !S.post.tillMig.length) },
  ];
};
const sovSteg = (dag, del) => ({ del, sov: true, text: 'Klart för idag – sov i skjulet', klar: () => S.dag > dag });
const K2 = 'Kapitel 2 – Ett riktigt hem';
const KAP1_NAMN = 'Ett hem att bo i', KAP1_MAL = 'Bygg ett hem där du inte fryser – och som är lite trevligt.';
const D1 = 'Dag 1 – Kom igång', N1 = 'Dag 2 – Städa gården', N2 = 'Dag 3 – Skottkärran', N3 = 'Dag 4 – Bygg ut fabriken', N4 = 'Dag 5 – Printfarmen';
const KAP1_DELAR = [D1, N1, N2, N3, N4];   // en dag = en nivå – du sover dig vidare
// enkla upplästa instruktioner för dag 1 (för den som inte läser så mycket) – index = steg
const STEG_TAL = {
  0: 'Plocka upp skräp på gården. Klicka på en flaska.',
  1: 'Bär skräpet till kvarnen och lägg det i tratten.',
  2: 'Ta tag i veven på kvarnens framsida – klicka och håll inne tills rullen är full.',
  3: 'Rullen är klar! Ta den vid extrudern.',
  4: 'Bär rullen till skrivaren och klicka på den.',
  5: 'Trampa cykeln för att få ström – klicka på pedalerna och håll inne.',
  6: 'Klicka på skrivaren och printa en nyckelring.',
  7: 'Gå över vägen till Ali och sälj nyckelringen.',
  8: 'Tjäna femtio kronor. Köp sedan en gripklo eller en kvarnmotor hos Ali.',
  9: 'Printa det du köpte på skrivaren.',
  10: 'Köp 3D-modellen till en säng hos Ali.',
  11: 'Printa sängen på skrivaren.',
  12: 'Ställ sängen i skjulet och sov.',
};
const STEG = [
  { del: D1, text: 'Plocka upp skräp', klar: () => S.stat.plockat >= 1 },
  { del: D1, text: 'Lägg skräpet i kvarnen', klar: () => S.stat.ilagt >= 1 || S.kvarn.ut >= RULLE || S.stat.hamtat >= 1 },
  { del: D1, text: () => `Veva kvarnen · ${Math.round(Math.min(S.kvarn.ut, RULLE) / RULLE * 100)} %`, klar: () => S.kvarn.ut >= RULLE || S.stat.hamtat >= 1 },
  { del: D1, text: 'Ta rullen vid extrudern', klar: () => S.stat.hamtat >= 1, lapp: 'malt' },
  { del: D1, text: 'Ladda rullen i skrivaren', klar: () => (S.stat.laddat || 0) >= 1 || S.stat.printat >= 1 },
  { del: D1, text: 'Trampa cykeln för ström', klar: () => S.stat.trampat >= 20 || S.stat.printat >= 1 },
  { del: D1, text: 'Printa en nyckelring', klar: () => S.stat.printat >= 1, lapp: 'printat' },
  { del: D1, text: 'Sälj den hos Ali, över vägen', klar: () => S.stat.salt >= 1, lapp: 'salt' },
  { del: D1, text: () => `Tjäna 50 kr (${Math.min(S.mynt, 50)}/50) · köp grip eller motor`, klar: () => S.ritningar.includes('grip') || S.ritningar.includes('kvarnmotor') || forstaUpp(), lapp: 'ritning' },
  { del: D1, text: () => { const n = S.ritningar.includes('grip') && !S.grip ? 'skräpgrip' : 'kvarnmotor'; return skrivare.some((x) => x.klar === 'byggsats:' + (n === 'skräpgrip' ? 'grip' : 'kvarnmotor')) ? `Ta ${n === 'skräpgrip' ? 'skräpgripen' : 'kvarnmotorn'} ur skrivaren` : `Printa din ${n}`; }, klar: () => forstaUpp() },
  { del: D1, text: () => S.mynt >= SANG_INSTRUKTION ? `Köp sängens 3D-modell hos Ali (${SANG_INSTRUKTION} kr)` : `Printa och sälj mer · ${S.mynt}/${SANG_INSTRUKTION} kr till sängen`, klar: () => S.ritningar.includes('sang') || S.sang, startLapp: 'hem' },
  { del: D1, text: 'Printa sängen', klar: () => antalInv('sang') > 0 || S.sang },
  { del: D1, text: 'Ställ sängen i skjulet och sov', klar: () => S.sang && S.dag >= 2, lapp: 'sang',
    sms: ['mamma', 'Har du sovit nåt? Du har väl tandborste?? Och äter du?? Svara inte, jag vet att du är arg. ❤️ /Mamma'] },
  { del: N1, text: () => `Städa gården · ${gardSkrap()} kvar`, klar: () => gardSkrap() <= GARD_KVAR || S.rolf.i >= 1 || S.post.tillRolf, lapp: 'gard',
    sms: ['mamma', 'Rolf på sopbilen ringde. Han säger att du STÄDAR?! Vem är du och vad har du gjort med mitt barn? ❤️'] },
  ...rolfSteg(0, N1),
  { del: N1, text: 'Hämta 5 skräp på soptippen', klar: () => S.stat.tipp >= 5 },
  { del: N1, text: 'Bygg en dörr till skjulet', klar: () => S.hem?.dorr || S.dag > 2 },
  sovSteg(2, N1),
  ...rolfSteg(1, N2),
  { del: N2, text: 'Lyft en tunna med skottkärran', klar: () => S.stat.tunga >= 1 },
  { del: N2, text: 'Bygg en stor kvarntratt', klar: () => S.kvarn.stor || S.dag > 3 },
  { del: N2, text: 'Mal tunnan i kvarnen', klar: () => (S.stat.tungMalt || 0) >= 1 || S.dag > 3 },
  { del: N2, text: 'Lägg plåttak på skjulet', klar: () => S.hem?.tak || S.dag > 3 },
  sovSteg(3, N2),
  ...rolfSteg(2, N3),
  { del: N3, text: 'Bygg ett arbetsbord', klar: () => harPlacerat('bord') },
  { del: N3, text: 'Bygg en solpanel', klar: () => harPlacerat('sol'), lapp: 'sol' },
  { del: N3, text: () => `Isolera väggarna · ${S.hem?.vagg || 0}/4`, klar: () => S.hem?.vaggar || S.dag > 4 },
  sovSteg(4, N3),
  ...rolfSteg(3, N4),
  { del: N4, text: 'Bygg Skrivare M på bordet', klar: () => harPlacerat('skrivare2'), lapp: 'skrivare2' },
  { del: N4, text: () => `Gör det mysigt · trivsel ${trivsel()}/${TRIVSEL_MAL}`, klar: () => trivsel() >= TRIVSEL_MAL, lapp: 'klart' },
  { del: K2, text: 'Tapetsera skjulet', klar: () => !!S.hem?.tapeter },
  { del: K2, text: 'Bygg en gamingbod', klar: () => !!S.bod },
  { del: K2, text: () => `Inred boden · ${Math.min(3, gamerSaker())}/3 gamer-saker`, klar: () => gamerSaker() >= 3 },
  { del: K2, text: 'Bygg Skrivare L', klar: () => harPlacerat('skrivare3') || harPlacerat('jacuzzi') },
  { del: K2, text: 'Printa och ställ ut en jacuzzi', klar: () => harPlacerat('jacuzzi') },
  { del: K2, text: () => `Världens bästa fristad · ${trivsel()}/300`, klar: () => trivsel() >= 300 },
];
// gården räknas som städad när skräpet är borta – tunga saker räknas först när du har kärran, och högen vid kvarnen (när den är full) är ditt lager
const gardSkrap = () => {
  let k = null; try { k = kvarnPunkt(0.9, 0, 0.6); } catch { /* kvarnen finns inte än */ }
  return skrapLista.filter((x) => (!x.userData.tung || S.karra) && !paTippen(x.position.x, x.position.z) && Math.abs(x.position.x) <= TOMT && Math.abs(x.position.z) <= TOMT
    && !(k && Math.hypot(x.position.x - k.x, x.position.z - k.z) < 1.3)).length;
};
const stegText = (st) => typeof st.text === 'function' ? st.text() : st.text;

// ---------- Sparning ----------
// VIKTIGT: ändra ALDRIG SPAR_VERSION – då försvinner spelarens framsteg.
// Ny funktion = lägg till ett standardvärde här och/eller en rad i migrera() nedan.
const SPAR_VERSION = 7;
const spar = new Sparning(SPEL_ID, {
  kvarn: { tratt: 0, trattGram: 0, prog: 0, ut: 600, motor: false }, forrad: {},
  mynt: 0, filament: 0, strom: 0, ritningar: [], grip: false, steg: 0,
  stat: { plockat: 0, malt: 0, trampat: 0, printat: 0, salt: 0 },
  lappar: [], placerade: [], skrap: null, hand: [], skrivare: {}, nastaId: 1, kapitelKlart: false,
}, SPAR_VERSION);
if (MOLN?.data && (MOLN.data.sparadTid || 0) > (spar.data.sparadTid || 0)) {
  spar.data = { ...structuredClone(spar.standard), ...MOLN.data };
}
// varje sparning: stämpla tiden, spara lokalt och (lite mer sällan) i molnet
{
  const lokalt = spar.spara.bind(spar);
  let senast = '', skriver = false, nasta = 0;
  spar.spara = (direkt) => {
    spar.data.sparadTid = Date.now();
    lokalt(direkt);
    if (!MOLN?.ref) return;
    if (skriver) return direkt ? spar.molnSkrivning?.then(() => spar.spara(true)) : undefined;
    if (!direkt && performance.now() < nasta) return;
    const json = JSON.stringify(spar.data);
    if (json === senast) return Promise.resolve();
    skriver = true; nasta = performance.now() + 3000;
    return (spar.molnSkrivning = MOLN.ref.set({ spar: json, tid: Date.now() }).then(() => { senast = json; }).catch(() => {}).finally(() => { skriver = false; }));
  };
}
const S = spar.data;
S.stat = { tipp: 0, plockat: 0, ilagt: 0, malt: 0, hamtat: 0, trampat: 0, printat: 0, salt: 0, ...S.stat };
S.kvarn = { tratt: 0, trattGram: 0, prog: 0, ut: 0, motor: false, ...S.kvarn };
S.post = { tillRolf: null, tillMig: [], lapp: null, ...S.post };
S.rolf = { i: 0, aktiv: false, nasta: null, extra: 0, ...S.rolf };
// Respekt (hjärtat): hur andra ser på dig. Trivsel = hur du själv mår. Gamla sparfiler får respekt för det de redan gjort.
if (S.respekt == null) S.respekt = (S.rolf.heder || 0) * 8 + Math.min(S.rolf.i || 0, 12) * 4 + (S.kapitelKlart ? 10 : 0) + (S.rolf.presenter || 0) * 10;
S.sms = S.sms || []; S.olasta = 0; S.mobil = true; S.dag = S.dag || (S.sang ? 2 : 1); S.speltid = S.speltid || 0; S.aliSett = S.aliSett || null;
if (S.tippNyckel && S.rolf.i === 0) { S.rolf.i = 1; S.rolf.aktiv = false; }
if (S.rolf.i >= 2 && !S.karra) S.karra = true;   // äldre sparningar: flasköppnaren redan levererad
if (S.gavaLamnad && !S.tippNyckel && !S.post.tillRolf) S.post.tillRolf = 'olhallare';
if (S.lappar?.includes('rolf') && S.rolf.i === 0 && !S.post.tillRolf) S.rolf.aktiv = true;
if (S.post.lapp === 'rolf') S.post.lapp = 'rolf:0';
// migrering: städa bort sånt som inte finns längre så att gamla sparningar fungerar efter uppdateringar
(function migrera() {
  const finns = (t) => !!(VAROR[t] || MASKINER[t] || (t?.startsWith?.('byggsats:') && MASKINER[t.split(':')[1]]));
  S.forrad = Object.fromEntries(Object.entries(S.forrad || {}).filter(([t, n]) => finns(t) && n > 0));
  S.ritningar = (S.ritningar || []).filter((m) => MASKINER[m] || m === 'sang' || VAROR[m.split(':')[1]]?.recept);
  S.placerade = (S.placerade || []).filter((p) => finns(p.typ));
  S.hand = (S.hand || []).filter((t) => t.startsWith('skrap') || finns(t));
  S.lappar = (S.lappar || []).filter((l) => lappInfo(l));
  if (!Array.isArray(S.hotbar)) S.hotbar = [];
  S.hotbar = Array.from({ length: HOTBAR }, (_, i) => (i > 0 && S.hotbar[i]?.n > 0 && (finns(S.hotbar[i].typ))) ? S.hotbar[i] : null);
  S.vald = S.hotbar[S.vald] || S.vald === 0 ? (S.vald || 0) : 0;
  S.karraLast = Array.isArray(S.karraLast) ? S.karraLast : [];
  if (S.hem?.vaggar && !S.hem.vagg) S.hem.vagg = 4;
  if (S.hem?.fonster === true) S.hem.fonster = [{ vagg: 'vanster', u: 0.25 }];
  for (const [id, sk] of Object.entries(S.skrivare || {})) {
    if (sk?.klar && !finns(sk.klar)) sk.klar = null;
    if (sk?.jobb && !(sk.jobb.maskin ? MASKINER[sk.jobb.maskin] : VAROR[sk.jobb.typ])) { sk.jobb = null; sk.prog = 0; }
  }
  if (S.steg > STEG.length) S.steg = STEG.length;
})();

// ---------- Scen ----------
const { scen, kamera, renderer, sol } = skapaSpel({ bakgrund: 0xbfdcf0, dimma: [30, 75] });
kamera.near = 0.05; kamera.far = 200; kamera.fov = KAMERA_FOV; kamera.updateProjectionMatrix();
scen.add(kamera);
sol.position.set(14, 24, 8);
Object.assign(sol.shadow.camera, { left: -28, right: 28, top: 28, bottom: -28 }); sol.shadow.camera.updateProjectionMatrix();

const FIL1 = 0x2f86ff;   // filament nivå 1: blå (nivå 2 röd, 3 grön, 4 guld, 5 titan)
const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, ...extra });
const box = (w, h, d, m) => { const x = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); x.castShadow = x.receiveShadow = true; return x; };
const cyl = (rt, rb, h, m, seg = 16) => { const x = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m); x.castShadow = x.receiveShadow = true; return x; };
const at = (o, x, y, z) => { o.position.set(x, y, z); return o; };
// osynlig träffyta så att det är lätt att sikta på smala saker
const traffMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false });
const traffYta = (g, w, h, d, x = 0, y = h / 2, z = 0) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), traffMat); m.position.set(x, y, z); g.add(m); return m; };

const tomtYta = new THREE.Mesh(new THREE.PlaneGeometry(TOMT * 2, TOMT * 2), mat(0x9a8a62));
tomtYta.rotation.x = -Math.PI / 2; tomtYta.position.y = 0.01; tomtYta.receiveShadow = true; scen.add(tomtYta);
const vag = new THREE.Mesh(new THREE.PlaneGeometry(160, 5), mat(0x55585e));
vag.rotation.x = -Math.PI / 2; vag.position.set(0, 0.02, TOMT + 3); vag.receiveShadow = true; scen.add(vag);

// skogen och marken runt tomten (miljo.js): flera trädsorter, buskar, stenar, gräs och blommor
const BAS_GRANS = { minX: TIPP.x - TIPP.r - 3, maxX: TOMT + 0.6, minZ: -TOMT - 0.6, maxZ: TOMT + 10 };   // där spelaren får gå innan man köpt mer mark
const miljo = byggMiljo({ scen, TOMT, TIPP, ALI, grans: BAS_GRANS });
const mark = miljo.mark;

// soptippen: en låg kulle av grus och sopor
const tippHojd = (x, z) => { const d = Math.hypot(x - TIPP.x, z - TIPP.z) / TIPP.r; return d < 1 ? 0.45 * (1 - d * d) : 0; };
{
  const geo = new THREE.CircleGeometry(TIPP.r + 1.5, 40); geo.rotateX(-Math.PI / 2);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) p.setY(i, tippHojd(p.getX(i) + TIPP.x, p.getZ(i) + TIPP.z) + 0.015);
  geo.computeVertexNormals();
  const kulle = new THREE.Mesh(geo, mat(0x7b7466)); kulle.position.set(TIPP.x, 0, TIPP.z); kulle.receiveShadow = true; scen.add(kulle);
}
// stängsel runt hela tippen, med en låst grind mot tomten
const TS = { x1: TIPP.x - TIPP.r - 1, x2: TIPP.x + TIPP.r + 1, z1: TIPP.z - TIPP.r - 1, z2: TIPP.z + TIPP.r + 1, grind: 1.4 };
const tippHinder = [];
function stangsel(xa, za, xb, zb) {
  const l = Math.hypot(xb - xa, zb - za), n = Math.max(1, Math.round(l / 1.8));
  for (let i = 0; i <= n; i++) { const st = cyl(0.05, 0.05, 1.5, mat(0x8a8a8a), 6); st.position.set(xa + (xb - xa) * i / n, 0.75, za + (zb - za) * i / n); scen.add(st); }
  for (const y of [0.5, 1.0, 1.4]) { const r = box(l, 0.04, 0.04, mat(0x9a9a9a)); r.position.set((xa + xb) / 2, y, (za + zb) / 2); r.rotation.y = -Math.atan2(zb - za, xb - xa); scen.add(r); }
  tippHinder.push(new THREE.Box3(new THREE.Vector3(Math.min(xa, xb) - 0.1, 0, Math.min(za, zb) - 0.1), new THREE.Vector3(Math.max(xa, xb) + 0.1, 1.6, Math.max(za, zb) + 0.1)));
}
const BOM = 2.0;   // halva bredden på sopbilens infart
stangsel(TS.x1, TS.z1, TS.x2, TS.z1); stangsel(TS.x1, TS.z2, TIPP.x - BOM, TS.z2); stangsel(TIPP.x + BOM, TS.z2, TS.x2, TS.z2); stangsel(TS.x1, TS.z1, TS.x1, TS.z2);
// bommen vid infarten – bara sopbilen kommer in där
tippHinder.push(new THREE.Box3(new THREE.Vector3(TIPP.x - BOM, 0, TS.z2 - 0.15), new THREE.Vector3(TIPP.x + BOM, 1.6, TS.z2 + 0.15)));
const bom = new THREE.Group();
{
  const stolpe = box(0.25, 1.0, 0.25, mat(0x555555)); stolpe.position.set(0, 0.5, 0); bom.add(stolpe);
  const arm = new THREE.Group(); arm.position.set(0, 0.95, 0);
  for (let i = 0; i < 6; i++) arm.add(at(box(0.66, 0.1, 0.08, mat(i % 2 ? 0xffffff : 0xe74c3c)), 0.33 + i * 0.66, 0, 0));
  bom.add(arm); bom.userData.arm = arm;
  bom.position.set(TIPP.x - BOM, 0, TS.z2); scen.add(bom);
}
stangsel(TS.x2, TS.z1, TS.x2, TIPP.z - TS.grind); stangsel(TS.x2, TIPP.z + TS.grind, TS.x2, TS.z2);
const grind = new THREE.Group();
{
  const gm = mat(0xd9a400);
  for (const y of [0.4, 0.8, 1.2]) grind.add(at(box(0.05, 0.06, TS.grind * 2 - 0.1, gm), 0, y, TS.grind - 0.05));
  for (const z of [0.05, TS.grind, TS.grind * 2 - 0.1]) grind.add(at(box(0.05, 1.3, 0.06, gm), 0, 0.65, z));
  const las = box(0.12, 0.16, 0.1, mat(0xc0392b)); las.position.set(0.06, 0.8, TS.grind * 2 - 0.25); grind.add(las); grind.userData.las = las;
  grind.position.set(TS.x2, 0, TIPP.z - TS.grind); scen.add(grind);
}
const grindHinder = new THREE.Box3(new THREE.Vector3(TS.x2 - 0.15, 0, TIPP.z - TS.grind), new THREE.Vector3(TS.x2 + 0.15, 1.6, TIPP.z + TS.grind));

// skylt med text
function skylt(text, w = 1.4, h = 0.4, bg = '#2b2118', fg = '#ffe9b0') {
  text = String(text).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '').trim();
  const c = document.createElement('canvas'); c.width = 512; c.height = Math.round(512 * h / w);
  const g = c.getContext('2d');
  malaSkylt(g, c.width, c.height, bg, fg, text, { skruvar: w >= 0.5, rost: w >= 0.4 });   // printat & skrotigt (brand.js)
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t }));
}

{ const t = skylt('SOPTIPP · ROLFS GRIND', 2.2, 0.4, '#3d3d3d', '#ffd43b'); t.position.set(TS.x2 + 0.08, 1.85, TIPP.z); t.rotation.y = Math.PI / 2; scen.add(t); }
// Rolfs postlåda vid grinden
const postlada = new THREE.Group();
postlada.add(at(cyl(0.04, 0.04, 1.1, mat(0x555555), 6), 0, 0.55, 0));
postlada.add(at(box(0.28, 0.02, 0.45, mat(0x2e8b57)), 0, 1.08, 0));
postlada.add(at(box(0.28, 0.02, 0.45, mat(0x2e8b57)), 0, 1.32, 0));
postlada.add(at(box(0.28, 0.25, 0.02, mat(0x2e8b57)), 0, 1.2, -0.215));
postlada.add(at(box(0.28, 0.25, 0.02, mat(0x2e8b57)), 0, 1.2, 0.215));
postlada.add(at(box(0.02, 0.25, 0.45, mat(0x2e8b57)), -0.14, 1.2, 0));
// luckan mot tomten (öppnas utåt-nedåt)
const postLucka = new THREE.Group(); postLucka.position.set(0.15, 1.075, 0);
postLucka.add(at(box(0.02, 0.25, 0.45, mat(0x3aa66b)), 0, 0.125, 0));
postLucka.add(at(box(0.03, 0.03, 0.08, mat(0xdddddd)), 0.02, 0.2, 0));
postlada.add(postLucka);
const postInne = new THREE.Group(); postInne.position.set(0, 1.12, 0); postlada.add(postInne);
let postLuckaMal = 0;
{
  // flaggan sitter på sidan: uppe = det finns något i lådan, nere = tom
  const fl = new THREE.Group(); fl.position.set(0.05, 1.15, 0.235);
  fl.add(at(box(0.025, 0.32, 0.02, mat(0x333333)), 0, 0.16, 0));
  fl.add(at(box(0.15, 0.1, 0.015, mat(0xe74c3c)), 0.075, 0.27, 0));
  const nit = cyl(0.02, 0.02, 0.03, mat(0x888888), 8); nit.rotation.x = Math.PI / 2; fl.add(nit);
  postlada.add(fl); postlada.userData.flagga = fl; postlada.userData.flaggMal = -Math.PI / 2;
}
{ const t = skylt('ROLF', 0.28, 0.1, '#2e8b57', '#fff'); t.position.set(0, 1.2, 0.226); postlada.add(t); }
postlada.position.set(TS.x2 + 0.9, 0, TIPP.z + TS.grind + 0.8); scen.add(postlada);
// övergångsställe vid Alis marknad
for (let i = 0; i < 6; i++) { const r = box(2.6, 0.02, 0.45, mat(0xf5f5f5)); r.position.set(ALI.x, 0.03, TOMT + 1.0 + i * 0.85); r.receiveShadow = true; scen.add(r); }
for (const z of [TOMT + 0.3, TOMT + 5.7]) {
  const stolpe = cyl(0.04, 0.04, 2.2, mat(0x777777), 6); stolpe.position.set(ALI.x + 1.8, 1.1, z); scen.add(stolpe);
  const sk = skylt('🚶', 0.45, 0.45, '#1e6fd9', '#fff'); sk.position.set(ALI.x + 1.8, 2.1, z + (z < TOMT + 3 ? -0.03 : 0.03)); sk.rotation.y = z < TOMT + 3 ? Math.PI : 0; scen.add(sk);
  const sk2 = sk.clone(); sk2.rotation.y += Math.PI; sk2.position.z = z + (z < TOMT + 3 ? 0.03 : -0.03); scen.add(sk2);
}

// ---------- Spelare, interaktion, hand ----------
const spelare = new Spelare(kamera, renderer.domElement, {
  start: [LAGER.x, 0, LAGER.z + 5], fart: 4.5,
  granser: { ...BAS_GRANS },
});
// ställ spelaren där hen var senast
if (!S.lagerFlyttat) { S.pos = null; S.lagerFlyttat = true; }   // lägret flyttade till hörnet – börja vid skjulet
if (Array.isArray(S.pos) && S.pos.every(Number.isFinite)) {
  spelare.pos.set(S.pos[0], 0, S.pos[1]); spelare.yaw = S.pos[2]; spelare.pitch = S.pos[3];
}
const interaktor = new Interaktor(kamera, scen, { rackvidd: 3.2 });
const hand = new Hand(kamera, scen, { kapacitet: 1 });

// skräpgripen syns i högerkanten när du har den: ett skaft med en tång längst fram.
// Käftarna sitter i ett gångjärn och nyper ihop i spetsen.
const gripVerktyg = new THREE.Group();
{
  const gm = mat(0xf28c28), sv = mat(0x2b2b2b), stal = mat(0x9aa9b8, { metalness: 0.5, roughness: 0.35 });
  const skaft = new THREE.Group(); skaft.rotation.x = -0.35; gripVerktyg.add(skaft);
  const stav = cyl(0.014, 0.014, 0.62, stal, 8); stav.rotation.x = Math.PI / 2; stav.position.z = -0.25; skaft.add(stav);
  const handtag = box(0.045, 0.13, 0.05, gm); handtag.position.set(0, -0.06, 0.06); handtag.rotation.x = 0.4; skaft.add(handtag);
  const avtryck = box(0.02, 0.06, 0.03, sv); avtryck.position.set(0, -0.04, 0.0); skaft.add(avtryck);
  const led = cyl(0.025, 0.025, 0.06, sv, 10); led.rotation.z = Math.PI / 2; led.position.z = -0.56; skaft.add(led);
  const kaft = (sida) => {
    const g = new THREE.Group(); g.position.set(0, 0, -0.56);          // gångjärnet
    const arm = box(0.016, 0.018, 0.13, sv); arm.position.set(sida * 0.012, 0, -0.065); g.add(arm);
    const tand = box(0.02, 0.03, 0.02, mat(0xd63031)); tand.position.set(-sida * 0.004, 0, -0.13); g.add(tand);
    skaft.add(g); return g;
  };
  gripVerktyg.userData.kaftar = [kaft(-1), kaft(1)];
  gripVerktyg.position.set(0.34, -0.3, -0.42);
  gripVerktyg.visible = false; kamera.add(gripVerktyg);
}
const KAFT_OPPEN = 0.32, KAFT_STANGD = 0.02;
// kraftfältet: skräpet magneten bär svävar i en blå bubbla på vänster arm
const kraftfalt = new THREE.Group();
{
  const yttre = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 1), new THREE.MeshBasicMaterial({ color: 0x5ad1ff, wireframe: true, transparent: true, opacity: 0.55, depthWrite: false }));
  const inre = new THREE.Mesh(new THREE.SphereGeometry(0.19, 20, 14), new THREE.MeshBasicMaterial({ color: 0x3da8ff, transparent: true, opacity: 0.14, depthWrite: false, blending: THREE.AdditiveBlending }));
  kraftfalt.add(yttre, inre); kraftfalt.userData = { yttre, inre };
  kraftfalt.visible = false; kamera.add(kraftfalt);
}

// klick-animation: stöt fram, käftarna slår ihop i spetsen, fjädrar tillbaka
let gripAnim = 0;
function gripKlick() {
  if (!gripVerktyg.visible) return;
  gripAnim = 1;
  const c = lac; if (!c) return;
  // ett torrt CLICK: kort brusknäpp + ett litet plastigt "tock"
  const t = c.currentTime;
  if (!gripBrus) { gripBrus = c.createBuffer(1, c.sampleRate * 0.05, c.sampleRate); const d = gripBrus.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 6); }
  const n = c.createBufferSource(); n.buffer = gripBrus;
  const hp = c.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 2500;
  const gn = c.createGain(); gn.gain.value = 0.35;
  n.connect(hp).connect(gn).connect(c.destination); n.start(t + 0.07);
  const o = c.createOscillator(), go = c.createGain();
  o.type = 'triangle'; o.frequency.setValueAtTime(320, t + 0.07); o.frequency.exponentialRampToValueAtTime(180, t + 0.1);
  go.gain.setValueAtTime(0.06, t + 0.07); go.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
  o.connect(go).connect(c.destination); o.start(t + 0.07); o.stop(t + 0.13);
}
let gripBrus = null;
function gripSlapp() {
  const c = lac; if (!c) return;
  const t = c.currentTime, o = c.createOscillator(), g = c.createGain();
  o.type = 'triangle'; o.frequency.setValueAtTime(240, t); o.frequency.exponentialRampToValueAtTime(150, t + 0.05);
  g.gain.setValueAtTime(0.035, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
  o.connect(g).connect(c.destination); o.start(t); o.stop(t + 0.08);
}
let gripHaller = false, gripStangd = 0, gripStot = 0, gripPlockTid = 0;
function animeraGrip(dt) {
  const [k1, k2] = gripVerktyg.userData.kaftar;
  // stäng snabbt när knappen trycks, håll stängt så länge den hålls, fjädra upp när den släpps
  const mal = gripHaller || gripAnim > 0.6 ? 1 : 0;
  gripStangd += (mal - gripStangd) * Math.min(1, dt * (mal ? 28 : 10));
  gripAnim = Math.max(0, gripAnim - dt * 3.5);
  gripStot += ((gripHaller ? 0.6 : gripAnim > 0 ? Math.sin((1 - gripAnim) * Math.PI) : 0) - gripStot) * Math.min(1, dt * 14);
  gripVerktyg.position.z = -0.42 - gripStot * 0.14;
  gripVerktyg.position.y = -0.3 + gripStot * 0.04;
  const v = KAFT_OPPEN + (KAFT_STANGD - KAFT_OPPEN) * gripStangd;
  k1.rotation.y = v; k2.rotation.y = -v;
}

// magnetpistolen
const magnetVerktyg = new THREE.Group();
{
  const kropp = box(0.09, 0.1, 0.32, mat(0x2d6cdf)); kropp.position.z = -0.1; magnetVerktyg.add(kropp);
  const grepp = box(0.06, 0.16, 0.07, mat(0x333333)); grepp.position.set(0, -0.1, 0.02); grepp.rotation.x = 0.3; magnetVerktyg.add(grepp);
  const u1 = box(0.035, 0.035, 0.12, mat(0xd63031)); u1.position.set(-0.04, 0, -0.32); magnetVerktyg.add(u1);
  const u2 = box(0.035, 0.035, 0.12, mat(0xd63031)); u2.position.set(0.04, 0, -0.32); magnetVerktyg.add(u2);
  for (const x of [-0.04, 0.04]) { const t = box(0.036, 0.036, 0.03, mat(0xdfe6e9)); t.position.set(x, 0, -0.39); magnetVerktyg.add(t); }
  magnetVerktyg.position.set(0.3, -0.27, -0.45);
  magnetVerktyg.visible = false; kamera.add(magnetVerktyg);
}
const magnetStrale = new THREE.Mesh(new THREE.ConeGeometry(Math.tan(MAGNET_VINKEL) * MAGNET_RACKVIDD, MAGNET_RACKVIDD, 24, 1, true),
  new THREE.MeshBasicMaterial({ color: 0x8fd3ff, transparent: true, opacity: 0.08, depthWrite: false, side: THREE.DoubleSide }));
magnetStrale.geometry.translate(0, -MAGNET_RACKVIDD / 2, 0); magnetStrale.geometry.rotateX(-Math.PI / 2);
magnetStrale.position.set(0.3, -0.27, -0.85); magnetStrale.visible = false; kamera.add(magnetStrale);

// ---------- Fasta saker i lägret ----------
const fasta = []; // { x, z, radie, box }
const husHinder = [];   // väggar, trappa och loft i huset på ängen
function fast(grupp, x, z, radie, rot = 0) {
  grupp.position.set(x, 0, z); grupp.rotation.y = rot; scen.add(grupp);
  grupp.updateMatrixWorld(true);
  fasta.push({ x, z, radie, box: new THREE.Box3().setFromObject(grupp) });
  return grupp;
}

// ett gammalt plåtskjul – man kan gå in, och där inne finns plats för en säng
const SKJUL = { x: LAGER.x, z: LAGER.z - 4.5, b: 3.6, d: 3.0, h: 2.4, dorr: 1.1 };
const kista = new THREE.Group(), kistLock = new THREE.Group();
let skjulLampa = null;
const talt = new THREE.Group();
const skjulHinder = [];
{
  // gamla gråa plankor i lite olika nyanser, några skeva, några saknas
  let f = 3;
  const r = () => ((f = (f * 9301 + 49297) % 233280) / 233280);
  const tra = [0x7a6a58, 0x6e5f4f, 0x857360, 0x5e5246, 0x8a7a66].map((c) => mat(c, { roughness: 1 }));
  const rost = mat(0x8f4f2a, { roughness: 0.9, metalness: 0.2 });
  const { b: B, d: D, h: H, dorr } = SKJUL;
  const PL = 0.2;   // plankans bredd
  // vägg av stående plankor längs x (z fast) eller längs z (x fast)
  function plankvagg(fran, till, fast, langsX, hopp = []) {
    for (let p = fran + PL / 2; p < till; p += PL) {
      if (hopp.some(([a, b]) => p > a && p < b)) continue;
      const saknas = r() < 0.06, kort = r() < 0.12;
      if (saknas) continue;
      const h = kort ? H * (0.55 + r() * 0.3) : H - r() * 0.15;
      const pl = box(langsX ? PL - 0.025 : 0.05, h, langsX ? 0.05 : PL - 0.025, tra[Math.floor(r() * tra.length)]);
      pl.position.set(langsX ? p : fast, h / 2, langsX ? fast : p);
      pl.userData.plank = { vagg: langsX ? (fast < 0 ? 'bak' : 'fram') : (fast < 0 ? 'vanster' : 'hoger'), u: p, h, w: PL - 0.025, langsX, fast };
      pl.rotation[langsX ? 'z' : 'x'] = (r() - 0.5) * 0.06;
      talt.add(pl);
    }
    // tvärslåar
    for (const y of [0.35, H - 0.4]) {
      const sl = box(langsX ? till - fran : 0.06, 0.1, langsX ? 0.06 : till - fran, tra[3]);
      sl.position.set(langsX ? (fran + till) / 2 : fast + (fast > 0 ? -0.05 : 0.05), y, langsX ? fast + (fast > 0 ? -0.05 : 0.05) : (fran + till) / 2);
      talt.add(sl);
    }
  }
  plankvagg(-B / 2, B / 2, -D / 2, true);
  plankvagg(-D / 2, D / 2, -B / 2, false); plankvagg(-D / 2, D / 2, B / 2, false);
  plankvagg(-B / 2, B / 2, D / 2, true, [[-dorr / 2, dorr / 2]]);
  const overliggare = box(dorr + 0.2, 0.14, 0.08, tra[2]); overliggare.position.set(0, 2.0, D / 2); talt.add(overliggare);
  // hörnstolpar
  for (const [x, z] of [[-B / 2, -D / 2], [B / 2, -D / 2], [-B / 2, D / 2], [B / 2, D / 2]]) { const st = box(0.12, H + 0.1, 0.12, tra[3]); st.position.set(x, (H + 0.1) / 2, z); talt.add(st); }
  // sjunket tak av plankor med ett hål, plus en rostig plåtlapp
  const tak = new THREE.Group(); tak.position.set(0, H + 0.05, 0); tak.rotation.x = -0.1; tak.rotation.z = 0.04; talt.add(tak);
  for (let z = -D / 2 - 0.25; z < D / 2 + 0.25; z += PL) {
    if (z > -0.4 && z < 0.0) continue;   // hålet i taket
    const t = box(B + 0.4, 0.05, PL - 0.02, tra[Math.floor(r() * tra.length)]); t.position.set(0, (r() - 0.5) * 0.04, z); t.rotation.z = (r() - 0.5) * 0.05; tak.add(t);
  }
  const lapp = box(1.2, 0.03, 0.9, rost); lapp.position.set(0.8, 0.05, 0.6); lapp.rotation.y = 0.15; tak.add(lapp);
  const golv = box(B - 0.1, 0.04, D - 0.1, mat(0x5a4b3a)); golv.position.y = 0.02; talt.add(golv);
  // bråte i hörnet
  // kistan: förrådet för det man inte bär
  kista.add(at(box(0.55, 0.42, 0.9, mat(0x7a4f2a)), 0, 0.21, 0));
  for (const z of [-0.3, 0.3]) kista.add(at(box(0.57, 0.44, 0.05, mat(0x3b3b3b, { metalness: 0.5 })), 0, 0.22, z));
  kistLock.position.set(0.28, 0.42, 0); kista.add(kistLock);
  const lock = box(0.57, 0.1, 0.92, mat(0x8a5a30)); lock.position.set(-0.28, 0.05, 0); kistLock.add(lock);
  kistLock.add(at(box(0.04, 0.08, 0.1, mat(0xd4a017, { metalness: 0.7 })), -0.57, 0.0, 0));
  const kSkylt = skylt('FÖRRÅD', 0.42, 0.11, '#3b2a1a', '#ffe9b0'); kSkylt.position.set(-0.282, 0.25, 0); kSkylt.rotation.y = -Math.PI / 2; kista.add(kSkylt);
  kista.position.set(B / 2 - 0.4, 0, D / 2 - 0.85); talt.add(kista);
  const lampa2 = new THREE.PointLight(0xffc27a, 4, 5); lampa2.position.set(0, H - 0.3, 0); talt.add(lampa2); skjulLampa = lampa2;
  talt.position.set(SKJUL.x, 0, SKJUL.z); scen.add(talt);
  // väggarna som hinder (dörröppningen är fri)
  const X = SKJUL.x, Z = SKJUL.z, b3 = (x1, z1, x2, z2) => skjulHinder.push(new THREE.Box3(new THREE.Vector3(X + x1, 0, Z + z1), new THREE.Vector3(X + x2, H, Z + z2)));
  b3(-B / 2, -D / 2 - 0.05, B / 2, -D / 2 + 0.05); b3(-B / 2 - 0.05, -D / 2, -B / 2 + 0.05, D / 2); b3(B / 2 - 0.05, -D / 2, B / 2 + 0.05, D / 2);
  b3(-B / 2, D / 2 - 0.05, -dorr / 2, D / 2 + 0.05); b3(dorr / 2, D / 2 - 0.05, B / 2, D / 2 + 0.05);
  fasta.push({ x: X, z: Z, radie: 2.4, box: new THREE.Box3() });
}
const HEM_DELAR = {}, vaggMatRef = {};
const FONSTER = { b: 0.9, h: 0.7, y: 1.35, kant: 0.55, max: 4 };
function fonsterModell(spoke = false) {
  const f = new THREE.Group(), ram = spoke ? null : mat(0xf5f5f5);
  const m = (w, h, d, x, y, mm) => f.add(at(box(w, h, d, mm || ram), x, y, 0));
  if (spoke) { f.add(at(box(FONSTER.b + 0.08, FONSTER.h + 0.08, 0.22, new THREE.MeshBasicMaterial({ color: 0x7dffb0, transparent: true, opacity: 0.35, depthWrite: false })), 0, 0, 0)); return f; }
  m(FONSTER.b + 0.1, 0.08, 0.3, 0, -FONSTER.h / 2); m(FONSTER.b + 0.1, 0.08, 0.3, 0, FONSTER.h / 2);
  for (const x of [-FONSTER.b / 2, 0, FONSTER.b / 2]) m(0.07, FONSTER.h, 0.3, x, 0);
  m(FONSTER.b - 0.05, FONSTER.h - 0.06, 0.02, 0, 0, new THREE.MeshStandardMaterial({ color: 0xcfeaff, transparent: true, opacity: 0.18, roughness: 0.05, metalness: 0.1, depthWrite: false }));
  return f;
}
// väggarna i skjulets egna koordinater: var de står, hur långa de är och hur fönstret ska vridas
const VAGGAR = {
  bak: { axel: 'z', varde: -SKJUL.d / 2, langd: SKJUL.b, rot: 0 },
  fram: { axel: 'z', varde: SKJUL.d / 2, langd: SKJUL.b, rot: 0, dorr: true },
  vanster: { axel: 'x', varde: -SKJUL.b / 2, langd: SKJUL.d, rot: Math.PI / 2 },
  hoger: { axel: 'x', varde: SKJUL.b / 2, langd: SKJUL.d, rot: Math.PI / 2 },
};
{
  const B = SKJUL.b, D = SKJUL.d, H = SKJUL.h;
  const g = (id) => { const x = new THREE.Group(); HEM_DELAR[id] = x; return x; };
  // dörr: öppen ut åt höger
  { const d = g('dorr'); const blad = new THREE.Group(); blad.position.set(SKJUL.dorr / 2, 0, D / 2 + 0.03); d.add(blad);
    blad.add(at(box(SKJUL.dorr - 0.02, 1.95, 0.05, mat(0x8a5a30)), -(SKJUL.dorr - 0.02) / 2, 0.98, 0));
    for (const y of [0.4, 1.55]) blad.add(at(box(SKJUL.dorr - 0.08, 0.08, 0.06, mat(0x6b4426)), -(SKJUL.dorr - 0.02) / 2, y, 0));
    blad.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), mat(0xd4a017, { metalness: 0.7 })), -SKJUL.dorr + 0.12, 1.0, 0.05));
    blad.rotation.y = 1.85; }
  // tätade väggar: släta isolerskivor på insidan
  { const v = g('vaggar'), m = mat(0xe8dcc0, { roughness: 0.95 }); vaggMatRef.m = m; const _ = 0, i = 0.09, del = () => { const x = new THREE.Group(); v.add(x); return x; };
    del().add(at(box(B - 0.2, H - 0.1, 0.03, m), 0, H / 2, -D / 2 + i));
    del().add(at(box(0.03, H - 0.1, D - 0.2, m), -B / 2 + i, H / 2, 0));
    del().add(at(box(0.03, H - 0.1, D - 0.2, m), B / 2 - i, H / 2, 0));
    const fram = del(), sida = (B - SKJUL.dorr) / 2 - 0.1;
    for (const x of [-1, 1]) fram.add(at(box(sida, H - 0.1, 0.03, m), x * (SKJUL.dorr / 2 + sida / 2), H / 2, D / 2 - i));
    fram.add(at(box(SKJUL.dorr, H - 2.05, 0.03, m), 0, 2.05 + (H - 2.05) / 2, D / 2 - i)); }
  // plåttak: korrugerade plåtar som täcker hålet
  { const t = g('tak'); t.position.set(0, H + 0.13, 0); t.rotation.x = -0.1; t.rotation.z = 0.04;
    const plat = mat(0x9aa4ad, { metalness: 0.6, roughness: 0.45 });
    for (let x = -B / 2 - 0.25; x <= B / 2 + 0.25; x += 0.12) { const k = box(0.1, 0.025, D + 0.7, plat); k.position.set(x, Math.round((x + 5) / 0.12) % 2 ? 0.02 : 0, 0); t.add(k); } }
  // fönster (modellen – placeras fritt på väggarna, se fonsterModell)
  g('fonster').add(fonsterModell());
  // trägolv
  { const gl = g('golv'); for (let z = -D / 2 + 0.12; z < D / 2 - 0.05; z += 0.2) gl.add(at(box(B - 0.18, 0.03, 0.19, mat([0xc8955a, 0xb9844b, 0xd4a26a][Math.round(z * 10) % 3 >= 0 ? Math.abs(Math.round(z * 10)) % 3 : 0])), 0, 0.055, z)); }
  // taklampa
  { const l = g('taklampa'); l.add(at(cyl(0.006, 0.006, 0.45, mat(0x222222), 4), 0, H - 0.25, 0.2));
    const skarm = skapaVara('lampskarm'); skarm.rotation.x = Math.PI; skarm.position.set(0, H - 0.36, 0.2); skarm.visible = !!S.hem?.skarm; l.add(skarm); l.userData.skarm = skarm;
    const sk = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.16, 16, 1, true), mat(0x2f6b4f, { side: THREE.DoubleSide })); sk.position.set(0, H - 0.52, 0.2); sk.visible = !S.hem?.skarm; l.add(sk); l.userData.kon = sk;
    l.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), mat(0xfff3c4, { emissive: 0xffd27a, emissiveIntensity: 2 })), 0, H - 0.58, 0.2)); }
  for (const [id, grupp] of Object.entries(HEM_DELAR)) {
    grupp.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    grupp.visible = id !== 'fonster' && (!!S.hem?.[id] || (id === 'vaggar' && (S.hem?.vagg || 0) > 0)); talt.add(grupp);
    // spöke som visar var delen hamnar när man håller den
    const sp = grupp.clone(true); sp.traverse((o) => { if (o.isMesh) { o.material = new THREE.MeshBasicMaterial({ color: 0x7dffb0, transparent: true, opacity: 0.32, depthWrite: false }); o.castShadow = false; } });
    sp.visible = false; talt.add(sp); grupp.userData.spoke = sp;
  }
}
const skjulSkylt = skylt('MITT SKJUL', 0.9, 0.22, '#5e5246', '#ffe9b0'); skjulSkylt.position.set(0, 2.2, SKJUL.d / 2 + 0.06); skjulSkylt.rotation.z = -0.06; talt.add(skjulSkylt);
// adressen: Soptippsvägen 1 – du spikar själv ihop skylten av lösa bräder från tippen.
// Inte mycket för världen, men det är MITT. (S.skyltUppe)
// där du kliver ur bilden första gången – brädhögen ligger vid fötterna, skylten vänd mot dig
const SKYLT_POS = [LAGER.x - 0.6 - SKJUL.x, LAGER.z + 0.2 - SKJUL.z];
function malaFarg(text, W, H, farg, storlek, { lut = 0, x = W / 2, y = H / 2 } = {}) {
  const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  g.translate(x, y); g.rotate(lut); g.font = `900 ${storlek}px "Arial Black",Impact,system-ui`; g.textBaseline = 'middle';
  // varje bokstav lite snett och ojämnt – målat för hand
  let bredd = 0; for (const ch of text) bredd += g.measureText(ch).width * 0.96;
  let px = -bredd / 2, h = 7;
  for (const ch of text) {
    h = (h * 9301 + 49297) % 233280; const r = h / 233280;
    g.save(); g.translate(px, (r - 0.5) * storlek * 0.12); g.rotate((r - 0.5) * 0.16);
    g.fillStyle = 'rgba(0,0,0,.25)'; g.fillText(ch, 3, 4); g.fillStyle = farg; g.fillText(ch, 0, 0);
    if (r > 0.72) { g.fillRect(g.measureText(ch).width * 0.4, storlek * 0.3, storlek * 0.05, storlek * (0.15 + r * 0.3)); }   // färgen rann
    g.restore(); px += g.measureText(ch).width * 0.96;
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const adressSkylt = new THREE.Group();
{
  const brada = (w, h, f) => box(w, h, 0.035, mat(f));
  const stolpe = brada(0.1, 2.25, 0x6d5434); stolpe.position.set(0, 1.12, -0.03); stolpe.rotation.z = 0.035; adressSkylt.add(stolpe);
  const B = [[1.3, 0.2, 0x8a6a3f, 0.62, 2.08, -0.03], [1.18, 0.18, 0x7a5c36, 0.55, 1.88, 0.025], [0.42, 0.36, 0x9a7a4a, 1.32, 1.98, -0.06]];
  for (const [w, h, f, x, y, rz] of B) {
    const m = brada(w, h, f); m.position.set(x, y, 0.02); m.rotation.z = rz; adressSkylt.add(m);
    for (const sx of [-w / 2 + 0.05, w / 2 - 0.05]) { const sp = cyl(0.012, 0.012, 0.01, mat(0x3a3a3a), 6); sp.rotation.x = Math.PI / 2; sp.position.set(x + sx * Math.cos(rz), y + sx * Math.sin(rz), 0.04); adressSkylt.add(sp); }
  }
  const text = new THREE.Mesh(new THREE.PlaneGeometry(1.25, 0.4), new THREE.MeshBasicMaterial({ map: malaFarg('SOPTIPPSVÄGEN', 1024, 328, FARG.papper, 120, { lut: -0.01 }), transparent: true }));
  text.position.set(0.6, 1.98, 0.045); adressSkylt.add(text);
  const ett = new THREE.Mesh(new THREE.PlaneGeometry(0.38, 0.38), new THREE.MeshBasicMaterial({ map: malaFarg('1', 256, 256, FARG.falu, 210, { lut: 0.1 }), transparent: true }));
  ett.position.set(1.32, 1.98, 0.045); adressSkylt.add(ett);
  adressSkylt.position.set(SKYLT_POS[0] - 0.4, 0, SKYLT_POS[1]); talt.add(adressSkylt);
}
// brädhögen + hammaren där skylten ska stå
const bradhog = new THREE.Group();
{
  const F = [0x8a6a3f, 0x7a5c36, 0x9a7a4a, 0x6d5434];
  // en ordentlig hög: plankor i kors på två bockar + ett par som lutar – syns på håll
  [[1.6, 0.2, 0.0, 0.3], [1.4, 0.18, 0.05, -0.25], [1.5, 0.22, 0.1, 0.15], [0.5, 0.4, 0.15, 0.9], [2.0, 0.12, 0.2, -0.05], [1.2, 0.2, 0.25, 0.4]].forEach(([w, d, y, r], i) => { const m = box(w, 0.05, d, mat(F[i % 4])); m.position.set(0.5, 0.12 + y, 0.06 * i); m.rotation.y = r; bradhog.add(m); });
  for (const x of [0.0, 1.0]) bradhog.add(at(box(0.12, 0.12, 0.5, mat(0x5a4630)), x, 0.06, 0.1));
  for (const [x, rz] of [[1.45, 0.35], [1.6, 0.5]]) { const m = box(0.2, 1.3, 0.04, mat(0x8a6a3f)); m.position.set(x, 0.6, -0.1); m.rotation.z = rz; bradhog.add(m); }
  const skaft = box(0.03, 0.03, 0.32, mat(0x6b4a2a)); skaft.position.set(1.05, 0.2, 0.2); skaft.rotation.y = 0.5; bradhog.add(skaft);
  const huvud = box(0.12, 0.05, 0.05, mat(0x444444)); huvud.position.set(1.12, 0.2, 0.34); huvud.rotation.y = 0.5; bradhog.add(huvud);
  bradhog.position.set(SKYLT_POS[0] - 0.3, 0, SKYLT_POS[1]); talt.add(bradhog);
}
// kapitelkort: stor rubrik mitt i bild några sekunder – säger vad kapitlet går ut på, inget mer
function visaKapitelKort(nr, namn, mal) {
  document.querySelector('.ph-kapkort')?.remove();
  const d = document.createElement('div'); d.className = 'ph-kapkort';
  d.innerHTML = `<small>KAPITEL ${nr}</small><b>${rens(namn)}</b><span>${rens(mal)}</span>`;
  document.body.appendChild(d); setTimeout(() => d.classList.add('ut'), 5200); setTimeout(() => d.remove(), 6000);
}
function visaAdressSkylt() { adressSkylt.visible = !!S.skyltUppe; bradhog.visible = !S.skyltUppe; }
let spikar = false;
function spikaSkylt() {
  if (S.skyltUppe || spikar) return; spikar = true;
  ui.toast('Spikar…');
  [0, 380, 700, 1150, 1450].forEach((t) => setTimeout(() => ljud.placera(), t));
  setTimeout(() => {
    spikar = false; S.skyltUppe = true; visaAdressSkylt(); ljud.klar();
    visaLapp('skylt'); sparaSnart();
  }, 1800);
}
interaktor.registrera(bradhog, { text: () => 'Spika ihop en skylt av brädorna – det här är MITT', aktivera: spikaSkylt });

// kvarnen (plast → filament)
const plastFargerTidig = [0x7fc8f8, 0x6ad48a, 0xf5f5f5];
const kvarn = new THREE.Group();
kvarn.add(at(box(0.7, 0.8, 0.7, mat(0x6d7b8a)), 0, 0.4, 0));
const tratt = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.15, 0.45, 12, 1, true), mat(0x9aa9b8, { side: THREE.DoubleSide }));
tratt.position.y = 1.02; kvarn.add(tratt);
// veven sitter på framsidan – stor, faluröd med ljus handtagsknopp så att den syns och ber om att bli greppad
const vev = new THREE.Group();
{ const nav = cyl(0.07, 0.07, 0.04, mat(0x2b2b2b), 14); nav.rotation.x = Math.PI / 2; nav.position.z = 0.02; vev.add(nav); }
{ const axel = cyl(0.03, 0.03, 0.14, mat(0x777777, { metalness: 0.6 }), 8); axel.rotation.x = Math.PI / 2; axel.position.z = 0.07; vev.add(axel); }
vev.add(at(box(0.06, 0.3, 0.04, mat(0xb23a2a)), 0, 0.13, 0.14));
{ const handtag = cyl(0.035, 0.035, 0.16, mat(0xf4ecd8), 10); handtag.rotation.x = Math.PI / 2; handtag.position.set(0, 0.27, 0.23); vev.add(handtag);
  const knopp = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), mat(0x4cc9f0)); knopp.position.set(0, 0.27, 0.32); vev.add(knopp); }
vev.position.set(0.2, 0.34, 0.35); kvarn.add(vev);
const kvarnSkylt = skylt('KVARN', 0.6, 0.18); kvarnSkylt.position.set(0, 0.66, 0.36); kvarn.add(kvarnSkylt);
// flaskor som syns i tratten
const trattFlaskor = [];
for (let i = 0; i < 6; i++) {
  const f = cyl(0.06, 0.06, 0.26, mat(plastFargerTidig[i % 3], { transparent: true, opacity: 0.85 }), 8);
  const a = (i / 6) * Math.PI * 2;
  f.position.set(Math.cos(a) * 0.17, 0.95 + (i % 2) * 0.08, Math.sin(a) * 0.17); f.rotation.set(0.6, a, 0.4);
  f.visible = false; kvarn.add(f); trattFlaskor.push(f);
}
// utlopp + bricka där filamentrullen hamnar
const utlopp = box(0.16, 0.12, 0.2, mat(0x4a5562)); utlopp.position.set(-0.18, 0.3, 0.42); kvarn.add(utlopp);
const bricka = box(0.42, 0.04, 0.36, mat(0x4a5562)); bricka.position.set(-0.18, 0.02, 0.62); kvarn.add(bricka);
const rulle = filamentSpole(FIL1, 0.15, 0.12, { emissive: FIL1, emissiveIntensity: 0.35 });
const rulleMat = rulle.userData.lindning.material, rulleKarna = rulle.userData.lindning;
rulle.position.set(-0.18, 0.2, 0.62); kvarn.add(rulle);
// extra färdiga rullar staplas bredvid
const extraRullar = [];
for (let i = 0; i < 3; i++) {
  const r = filamentSpole(FIL1, 0.15, 0.12); r.userData.lindning.material = rulleMat;
  r.scale.setScalar(1.2); r.visible = false; kvarn.add(r); extraRullar.push(r);
}
extraRullar.forEach((r, i) => r.position.set(-0.55, 0.2 + i * 0.36, 0.62));
traffYta(rulle, 0.4, 0.4, 0.4, 0, 0, 0);
extraRullar.forEach((r) => { r.visible = false; });
// rullhållaren: en hylsa per plats, fyllda rullar syns – växer när man trimmar den
const utlager = { g: null, kap: -1, rullar: [], visar: -1 };
function ritaUtlager() {
  const kap = utlagerKap();
  if (utlager.kap !== kap) {
    if (utlager.g) kvarn.remove(utlager.g);
    const g = new THREE.Group(), ram = mat(0x555555), platser = kap - 1, perRad = 2, rader = Math.max(1, Math.ceil(platser / perRad));
    utlager.rullar = [];
    if (platser > 0) {
      const h = 0.15 + rader * 0.34;
      for (const z of [-0.2, 0.2]) g.add(at(box(0.04, h, 0.04, ram), 0, h / 2, z));
      for (let i = 0; i < platser; i++) {
        const rad = Math.floor(i / perRad), kol = i % perRad, y = 0.2 + rad * 0.34, x = -kol * 0.36;
        const nav = cyl(0.03, 0.03, 0.42, mat(0x999999), 8); nav.rotation.x = Math.PI / 2; nav.position.set(x, y, 0); g.add(nav);
        const r = extraRullar[0].clone(); r.visible = false; r.position.set(x, y, 0); g.add(r); utlager.rullar.push(r);
      }
    }
    g.position.set(-1.7, 0, 0.45); kvarn.add(g); utlager.g = g; utlager.kap = kap; utlager.visar = -1;
  }
  const n = Math.max(0, helaRullar() - 1);
  if (utlager.visar !== n) { utlager.visar = n; utlager.rullar.forEach((r, i) => { r.visible = i < n; }); }
}
// motorn (syns när den är monterad)
const motor = new THREE.Group();
// turbon: röda ränder + insugsrör · jetten: motorgondol med efterbrännare och eld
const turboDel = new THREE.Group(), jetDel = new THREE.Group(), jetEld = new THREE.Group();
turboDel.userData.tagg = 'turbo'; jetDel.userData.tagg = 'jet';
motor.add(at(box(0.3, 0.26, 0.3, mat(0xf1c40f)), 0, 0.13, 0));
const flakt = box(0.32, 0.03, 0.05, mat(0x333333)); flakt.position.y = 0.3; motor.add(flakt);
motor.position.set(0.48, 0.0, -0.1);
{
  const rod = mat(0xd63031);
  for (const y of [0.08, 0.18]) turboDel.add(at(box(0.31, 0.03, 0.31, rod), 0, y, 0));
  const ror = cyl(0.05, 0.05, 0.25, mat(0xb0b8c0, { metalness: 0.7, roughness: 0.3 }), 10); ror.rotation.z = Math.PI / 2; ror.position.set(0.25, 0.2, 0); turboDel.add(ror);
  turboDel.add(at(cyl(0.07, 0.05, 0.05, mat(0x333333), 10), 0.38, 0.2, 0));
  motor.add(turboDel); turboDel.visible = !!S.kvarn.turbo;
  const gondol = cyl(0.13, 0.11, 0.55, mat(0x8a949e, { metalness: 0.7, roughness: 0.35 }), 16); gondol.rotation.z = Math.PI / 2; gondol.position.set(0.15, 0.45, 0); jetDel.add(gondol);
  const intag = cyl(0.135, 0.135, 0.04, mat(0x222222), 16); intag.rotation.z = Math.PI / 2; intag.position.set(-0.13, 0.45, 0); jetDel.add(intag);
  const munst = cyl(0.09, 0.11, 0.12, mat(0x3a3a3a, { metalness: 0.8 }), 16); munst.rotation.z = Math.PI / 2; munst.position.set(0.48, 0.45, 0); jetDel.add(munst);
  for (const z of [-0.08, 0.08]) jetDel.add(at(box(0.04, 0.2, 0.04, mat(0x555555)), 0.15, 0.3, z));
  const eldYttre = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.5, 14, 1, true), new THREE.MeshBasicMaterial({ color: 0xff7a1a, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  const eldInre = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.32, 12, 1, true), new THREE.MeshBasicMaterial({ color: 0xbfe6ff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  for (const e of [eldYttre, eldInre]) { e.rotation.z = Math.PI / 2; jetEld.add(e); }
  eldYttre.position.x = 0.25; eldInre.position.x = 0.16;
  jetEld.position.set(0.55, 0.45, 0); jetEld.visible = false; jetDel.add(jetEld);
  const eldLjus = new THREE.PointLight(0xff8a3a, 0, 3); eldLjus.position.set(0.8, 0.45, 0); jetDel.add(eldLjus); jetDel.userData.ljus = eldLjus;
  motor.add(jetDel); jetDel.visible = !!S.kvarn.jet;
}
// stor osynlig träffyta på veven så att den är lätt att sikta på
const vevYta = traffYta(kvarn, 0.5, 0.6, 0.45, 0.2, 0.4, 0.55);
// extrudern: smälter plastkrosset från kvarnen och spolar upp det till filament
const extruder = new THREE.Group();
extruder.add(at(box(0.55, 0.62, 0.5, mat(0xd9822b)), 0, 0.31, 0));
extruder.add(at(box(0.57, 0.05, 0.52, mat(0x5b3a1a)), 0, 0.64, 0));
const extrTratt = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.06, 0.2, 10, 1, true), mat(0x9aa9b8, { side: THREE.DoubleSide })); extrTratt.position.set(0.1, 0.76, -0.05); extruder.add(extrTratt);
const varmMat = mat(0xff5a2a, { emissive: 0xff3a10, emissiveIntensity: 0.4 });
const pipa = cyl(0.07, 0.07, 0.5, mat(0x777777, { metalness: 0.6, roughness: 0.4 }), 12); pipa.rotation.z = Math.PI / 2; pipa.position.set(0, 0.45, 0.28); extruder.add(pipa);
for (const x of [-0.12, 0.05]) { const ring = cyl(0.085, 0.085, 0.06, varmMat, 12); ring.rotation.z = Math.PI / 2; ring.position.set(x, 0.45, 0.28); extruder.add(ring); }
const munstyckeE = cyl(0.03, 0.05, 0.08, mat(0xc9a227, { metalness: 0.7 }), 8); munstyckeE.rotation.x = Math.PI / 2; munstyckeE.position.set(-0.27, 0.45, 0.32); extruder.add(munstyckeE);
const extrSkylt = skylt('EXTRUDER', 0.48, 0.13, '#5b3a1a', '#ffe9b0'); extrSkylt.position.set(0, 0.22, 0.252); extruder.add(extrSkylt);
extruder.position.set(-1.05, 0, 0.05); kvarn.add(extruder);
// rullställ bredvid extrudern (köps hos Ali, printas, ställs ut av sig självt) – visar rullarna som väntar
function byggRullstall(n) {
  const g = new THREE.Group(), tra = mat(0x8a6a3f), mork = mat(0x5a4630);
  for (const x of [-0.22, 0.22]) g.add(at(box(0.05, 0.9, 0.3, tra), x, 0.45, 0));
  g.add(at(box(0.5, 0.04, 0.3, mork), 0, 0.02, 0));
  for (let i = 0; i < 2; i++) { const ax = cyl(0.015, 0.015, 0.46, mat(0x999999, { metalness: 0.6 }), 6); ax.rotation.z = Math.PI / 2; ax.position.y = 0.3 + i * 0.4; g.add(ax); }
  g.userData.spolar = [];
  for (let i = 0; i < n; i++) { const sp = filamentSpole(FIL1, 0.11, 0.09); sp.rotation.y = Math.PI / 2; sp.position.set(i % 2 ? 0.09 : -0.09, 0.3 + Math.floor(i / 2) * 0.4, 0); sp.visible = false; g.add(sp); g.userData.spolar.push(sp); }
  return g;
}
const rullstallar = [];
function ritaRullstall() {
  while (rullstallar.length < Math.min(3, S.rullstall || 0)) { const g = byggRullstall(4); g.position.set(-0.75 - rullstallar.length * 0.55, 0, 0.1); kvarn.add(g); rullstallar.push(g); }
}
function visaRullstall() {
  // rullarna utöver de som får plats i extrudern syns i ställen
  let extra = Math.max(0, helaRullar() - [1, 2, 5, 10, 20][Math.min(4, trimNiva('utlager'))]);
  for (const g of rullstallar) for (const sp of g.userData.spolar) { sp.visible = extra > 0; extra--; }
}
// röret från kvarnens utlopp upp till extruderns tratt
const ror = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
  new THREE.Vector3(-0.3, 0.3, 0.3), new THREE.Vector3(-0.55, 0.55, 0.25), new THREE.Vector3(-0.85, 0.95, 0.05), new THREE.Vector3(-0.95, 0.88, 0.0),
]), 20, 0.04, 8), mat(0x6b7682)); ror.castShadow = true; kvarn.add(ror);
utlopp.position.set(-0.36, 0.3, 0.3);
bricka.position.set(-1.25, 0.02, 0.6);
rulle.position.set(-1.25, 0.2, 0.6);
extraRullar.forEach((r, i) => r.position.set(-1.62, 0.2 + i * 0.36, 0.5));
// stora tratten (monteras ovanpå kvarnen)
const storTratt = new THREE.Group();
const st1 = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.35, 0.55, 14, 1, true), mat(0x7b8794, { side: THREE.DoubleSide, metalness: 0.4, roughness: 0.6 }));
st1.position.y = 1.5; storTratt.add(st1);
for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2, t = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.16, 5), mat(0xb8c2cc, { metalness: 0.7 })); t.position.set(Math.cos(a) * 0.3, 1.28, Math.sin(a) * 0.3); t.rotation.x = Math.PI; storTratt.add(t); }
for (const x of [-0.3, 0.3]) storTratt.add(at(box(0.06, 0.5, 0.06, mat(0x555555)), x, 1.1, 0.3));
storTratt.visible = !!S.kvarn.stor; kvarn.add(storTratt);
// matarbandet: binge bakom kvarnen + lutande rullband upp till tratten
const matarband = new THREE.Group();
{
  const gron = mat(0x3f7f5a), sv = mat(0x222222);
  const binge = new THREE.Group(); binge.position.set(0, 0, -1.35); matarband.add(binge);
  binge.add(at(box(1.0, 0.08, 0.8, gron), 0, 0.04, 0));
  for (const [x, z, w, d] of [[0, -0.4, 1.0, 0.06], [0, 0.4, 1.0, 0.06], [-0.5, 0, 0.06, 0.8], [0.5, 0, 0.06, 0.8]]) binge.add(at(box(w, 0.6, d, gron), x, 0.3, z));
  const hog = new THREE.Group(); binge.add(hog); matarband.userData.hog = hog;
  for (let i = 0; i < 24; i++) { const k = box(0.12 + Math.random() * 0.1, 0.1, 0.12 + Math.random() * 0.1, mat([0x7fc8f8, 0x6ad48a, 0xf5f5f5, 0xe0a050, 0x2e86de][i % 5])); k.position.set((Math.random() - 0.5) * 0.8, 0.12 + Math.floor(i / 8) * 0.12, (Math.random() - 0.5) * 0.6); k.rotation.y = Math.random() * 3; k.visible = false; hog.add(k); }
  const band = new THREE.Group(); band.position.set(0, 0.55, -0.85); band.rotation.x = -0.55; matarband.add(band);
  band.add(at(box(0.36, 0.04, 1.05, sv), 0, 0, 0));
  const ranta = new THREE.Group(); band.add(ranta); matarband.userData.ranta = ranta;
  for (let z = -0.5; z <= 0.5; z += 0.12) ranta.add(at(box(0.34, 0.012, 0.03, mat(0x555555)), 0, 0.03, z));
  for (const x of [-0.2, 0.2]) band.add(at(box(0.04, 0.08, 1.05, gron), x, 0.03, 0));
  for (const z of [-0.5, 0.5]) { const r2 = cyl(0.04, 0.04, 0.4, mat(0x999999), 10); r2.rotation.z = Math.PI / 2; r2.position.z = z; band.add(r2); }
  for (const z of [-1.6, -1.05]) for (const x of [-0.45, 0.45]) matarband.add(at(box(0.05, 0.3, 0.05, sv), x, 0.15, z));
  matarband.add(at(box(0.05, 0.85, 0.05, sv), 0.15, 0.42, -0.45));
}
matarband.visible = !!S.kvarn.band; kvarn.add(matarband);
const containerSpoke = matarband.clone(true);
containerSpoke.traverse((o) => { if (o.isMesh) o.material = new THREE.MeshBasicMaterial({ color: 0x7dffb0, transparent: true, opacity: 0.3, depthWrite: false }); if (o.isSprite) o.visible = false; });
containerSpoke.visible = false; kvarn.add(containerSpoke);
// skylt ovanför bingen som visar hur full den är och om bandet går
const bandSkyltCanvas = document.createElement('canvas'); bandSkyltCanvas.width = 256; bandSkyltCanvas.height = 96;
const bandSkyltTex = new THREE.CanvasTexture(bandSkyltCanvas); bandSkyltTex.colorSpace = THREE.SRGBColorSpace;
const bandSkylt = new THREE.Sprite(new THREE.SpriteMaterial({ map: bandSkyltTex, depthTest: false }));
bandSkylt.scale.set(0.9, 0.34, 1); bandSkylt.position.set(0, 1.25, -1.35); bandSkylt.renderOrder = 996; matarband.add(bandSkylt);
let bandSkyltText = '';
function ritaBandSkylt(rad1, rad2, farg) {
  const t = rad1 + rad2 + farg; if (t === bandSkyltText) return; bandSkyltText = t;
  const c = bandSkyltCanvas.getContext('2d');
  c.clearRect(0, 0, 256, 96); c.fillStyle = 'rgba(10,15,36,.85)'; c.beginPath(); c.roundRect(4, 4, 248, 88, 16); c.fill();
  c.fillStyle = farg; c.fillRect(4, 80, 248 * Math.min(1, S.kvarn.binge.length / BINGE_MAX), 12);
  c.fillStyle = '#fff'; c.font = '700 26px system-ui'; c.textAlign = 'center'; c.fillText(rad1, 128, 38);
  c.font = '500 19px system-ui'; c.fillStyle = farg; c.fillText(rad2, 128, 66);
  bandSkyltTex.needsUpdate = true;
}
S.kvarn.binge = S.kvarn.binge || [];
fast(kvarn, LAGER.x + (-3), LAGER.z + (-1.5), 0.6);
kvarn.scale.x = -1;   // spegelvänd: extrudern till höger, containern till vänster
matarband.rotation.y = -Math.PI / 2; containerSpoke.rotation.y = -Math.PI / 2;   // containern på kvarnens vänstra sida
kvarn.traverse((o) => { if (o.isMesh && o.material?.map && o.geometry?.type === 'PlaneGeometry') o.scale.x *= -1; });   // skyltar ska inte bli spegelvända
const bingePunkt = (y = 0.7, dx = 0, dz = 0) => matarband.localToWorld(new THREE.Vector3(dx, y, -1.35 + dz));

// cykelgenerator (ström)
const cykel = new THREE.Group();
const ram = mat(0x2d6cdf);
cykel.add(at(box(0.12, 0.08, 1.2, ram), 0, 0.35, 0));
cykel.add(at(box(0.08, 0.7, 0.08, ram), 0, 0.65, -0.25));
cykel.add(at(box(0.3, 0.06, 0.18, mat(0x222222)), 0, 1.0, -0.25));
cykel.add(at(box(0.08, 0.8, 0.08, ram), 0, 0.7, 0.45));
cykel.add(at(box(0.5, 0.05, 0.05, mat(0x222222)), 0, 1.1, 0.45));
const hjul = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.05, 8, 20), mat(0x222222));
hjul.rotation.y = Math.PI / 2; hjul.position.set(0, 0.35, 0.45); cykel.add(hjul);
const pedaler = new THREE.Group();
pedaler.add(box(0.04, 0.4, 0.04, mat(0x999999)));
pedaler.position.set(0, 0.4, 0); cykel.add(pedaler);
const generator = box(0.3, 0.3, 0.3, mat(0xf1c40f)); generator.position.set(0.35, 0.15, 0.1); cykel.add(generator);
const blixt = skylt('⚡', 0.22, 0.22, '#f1c40f', '#222'); blixt.position.set(0.35, 0.15, 0.26); cykel.add(blixt);
traffYta(cykel, 0.7, 1.2, 1.4);
fast(cykel, LAGER.x + (4.35), LAGER.z + (-1.5), 0.7);

// lådan + den gamla skrivaren
const lada = box(0.9, 0.7, 0.7, mat(0x9b6b3d)); lada.position.y = 0.35;
const ladGrupp = new THREE.Group(); ladGrupp.add(lada);
fast(ladGrupp, LAGER.x + (2.8), LAGER.z + (-1.5), 0.6);

// kort kabel: cykelns generator → batteriet → skrivaren (en enhet)
{
  const kurva = new THREE.CatmullRomCurve3([
    new THREE.Vector3(4.7, 0.1, -1.4), new THREE.Vector3(4.2, 0.03, -0.75), new THREE.Vector3(3.75, 0.1, -0.85),
  ].map((v) => v.add(new THREE.Vector3(LAGER.x, 0, LAGER.z))));
  const kabel = new THREE.Mesh(new THREE.TubeGeometry(kurva, 40, 0.025, 6), mat(0x222222));
  kabel.castShadow = true; scen.add(kabel);
}
const batteri = new THREE.Group();
batteri.add(at(box(0.3, 0.45, 0.2, mat(0x2b2f36)), 0, 0.225, 0));
const battFyll = box(0.22, 0.37, 0.02, mat(0x7dffb0, { emissive: 0x7dffb0, emissiveIntensity: 0.6 }));
battFyll.position.set(0, 0.04, 0.105); battFyll.geometry.translate(0, 0.185, 0); batteri.add(battFyll);
const battSkylt = skylt('⚡', 0.14, 0.1, '#2b2f36', '#ffd43b'); battSkylt.position.set(0, 0.5, 0.0); battSkylt.rotation.x = -0.3; batteri.add(battSkylt);
batteri.position.set(LAGER.x + 3.55, 0, LAGER.z - 0.95); scen.add(batteri);
batteriKlart = true;

// marknaden hos Ali
const marknad = new THREE.Group();
marknad.add(at(box(2.2, 0.9, 0.8, mat(0xa0703f)), 0, 0.45, 0));
for (const x of [-1, 1]) marknad.add(at(box(0.08, 2.3, 0.08, mat(0x6b4a2f)), x, 1.15, -0.3));
const tak = box(2.6, 0.08, 1.4, mat(0xd9534f)); tak.position.set(0, 2.3, 0.1); tak.rotation.x = 0.18; marknad.add(tak);
const aliSkylt = skylt('ALIS MARKNAD', 1.8, 0.35); aliSkylt.position.set(0, 1.85, -0.25); marknad.add(aliSkylt);
// ansikte: ögon, ögonbryn och näsa på ett huvud som tittar mot +z
let figurFel = false;   // figurernas animation får aldrig stoppa spelet
const FIGURER = [];   // { vem, huvud, ogon, mun, grupp } – animeras i uppdateraFigurer
function ansikte(g, y, { bryn = 0, brynFarg = 0x222222, nasa = 0xb06a45, nasaStor = 0.045, vem = null, munFarg = 0x5a2a20 } = {}) {
  const svart = mat(0x111111), vitt = mat(0xffffff), ogon = [];
  for (const x of [-0.065, 0.065]) {
    const oga = new THREE.Group(); oga.position.set(x, y + 0.03, 0); g.add(oga); ogon.push(oga);
    oga.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), vitt), 0, 0, 0.15));
    oga.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.017, 8, 6), svart), 0, 0, 0.172));
    const b = box(0.075, 0.022, 0.02, mat(brynFarg)); b.position.set(x, y + 0.085, 0.16); b.rotation.z = x < 0 ? -bryn : bryn; g.add(b);
  }
  g.add(at(new THREE.Mesh(new THREE.SphereGeometry(nasaStor, 8, 6), mat(nasa)), 0, y - 0.01, 0.17));
  const mun = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 6), mat(munFarg)); mun.scale.set(1.3, 0.25, 0.4); mun.position.set(0, y - 0.1, 0.16); g.add(mun);
  if (vem) FIGURER.push({ vem, huvud: g, ogon, mun, blink: 1 + Math.random() * 3 });
}
let pratarVem = null, pratarTill = 0;
function uppdateraFigurer(dt) {
  const nu = performance.now();
  for (const f of FIGURER) {
    if (!f.huvud.parent || !f.huvud.visible) continue;
    // blinka var 2–5:e sekund
    f.blink -= dt; const blund = f.blink < 0.12 && f.blink > 0;
    if (f.blink <= 0) f.blink = 2 + Math.random() * 3;
    for (const o of f.ogon) o.scale.y = blund ? 0.12 : 1;
    // munnen går när figuren pratar
    const pratar = pratarVem === f.vem && nu < pratarTill;
    f.mun.scale.y = pratar ? 0.25 + Math.abs(Math.sin(nu / 70 + Math.sin(nu / 230) * 2)) * 0.9 : 0.25;
    // huvudet vänder sig mot dig när du är nära
    const hp = f.huvud.getWorldPosition(new THREE.Vector3()), d = Math.hypot(spelare.pos.x - hp.x, spelare.pos.z - hp.z);
    // andas: kroppen höjs och sänks lite, var och en i egen takt
    const kropp = f.huvud.parent;
    if (f.fas == null) { f.fas = Math.random() * 6; f.basY = kropp.scale.y; f.titta = 0; f.tittaT = 2 + Math.random() * 3; }
    if (kropp.userData.ejAndas !== true) kropp.scale.y = f.basY * (1 + Math.sin(nu / 1000 * 1.7 + f.fas) * 0.012);
    // står man långt bort tittar de sig omkring ibland
    f.tittaT -= dt; if (f.tittaT <= 0) { f.tittaT = 2.5 + Math.random() * 4; f.titta = Math.random() < 0.4 ? 0 : (Math.random() - 0.5) * 1.2; }
    let mal = d < 9 ? 0 : f.titta;
    if (d < 9) {
      const kropp = f.huvud.parent.getWorldQuaternion(new THREE.Quaternion());
      const lokal = new THREE.Vector3(spelare.pos.x - hp.x, 0, spelare.pos.z - hp.z).applyQuaternion(kropp.invert());
      mal = Math.max(-0.9, Math.min(0.9, Math.atan2(lokal.x, lokal.z)));
    }
    f.huvud.rotation.y += (mal - f.huvud.rotation.y) * Math.min(1, dt * 4);
    f.huvud.rotation.z = pratar ? Math.sin(nu / 300) * 0.06 : f.huvud.rotation.z * 0.9 + Math.sin(nu / 2300 + f.fas) * 0.004;
    // pratar: nickar i takt med orden och gungar lite i kroppen
    const nick = pratar ? Math.sin(nu / 170) * 0.07 + Math.sin(nu / 410) * 0.04 : Math.sin(nu / 1900 + f.fas) * 0.025;
    f.huvud.rotation.x += (nick - f.huvud.rotation.x) * Math.min(1, dt * 8);
    if (pratar) { kropp.rotation.z = Math.sin(nu / 520) * 0.025; f.gungat = true; } else if (f.gungat) { kropp.rotation.z = 0; f.gungat = false; }
    // vinkar när du kommer fram (högst en gång i minuten)
    const arm = kropp.userData.arm;
    if (arm?.position && arm.rotation) {
      if (d < 5 && !f.nara && nu > (f.vinkatTill || 0) + 60000) { f.vinkStart = nu; f.vinkatTill = nu; }
      f.nara = d < 5.5;
      const vt = (nu - (f.vinkStart || -1e9)) / 1000;
      if (vt < 1.8) { arm.rotation.z = Math.sign(arm.position.x || 1) * (2.3 + Math.sin(vt * 11) * 0.35) * Math.min(1, vt * 4, (1.8 - vt) * 4); f.vinkar = true; }
      else if (f.vinkar) { arm.rotation.z = 0; f.vinkar = false; }
    }
  }
}
// Ali: säljaren som aldrig är ledig – mustasch, trötta ögonbryn, armarna i kors
const ali = new THREE.Group();
{
  const hud = mat(0xb07a4e), skjorta = mat(0xe8dcc0), forkl = mat(0x2f6b4f), har = mat(0x8a8580);   // gråsprängd – snart pension
  ali.add(at(cyl(0.2, 0.27, 0.8, skjorta), 0, 1.1, 0));                 // kropp (lite mage)
  ali.add(at(box(0.36, 0.62, 0.05, forkl), 0, 1.02, 0.22));             // förkläde
  ali.add(at(box(0.14, 0.05, 0.02, mat(0xffffff)), 0, 1.18, 0.25));     // ficka med penna
  ali.add(at(cyl(0.08, 0.09, 0.1, hud), 0, 1.53, 0));                   // hals
  const huvud = new THREE.Group(); huvud.position.set(0, 1.72, 0); ali.add(huvud);
  huvud.add(new THREE.Mesh(new THREE.SphereGeometry(0.18, 14, 12), hud));
  const harTopp = new THREE.Mesh(new THREE.SphereGeometry(0.185, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.45), har); harTopp.position.y = 0.02; huvud.add(harTopp);
  ansikte(huvud, 0.0, { bryn: 0.35, brynFarg: 0x6a6560, nasa: 0x9c6640, nasaStor: 0.05, vem: 'ali' });
  // den stora mustaschen
  for (const x of [-1, 1]) { const m = new THREE.Mesh(new THREE.CapsuleGeometry(0.03, 0.09, 4, 8), har); m.rotation.z = Math.PI / 2 + x * 0.35; m.position.set(x * 0.055, -0.055, 0.155); huvud.add(m); }

  for (const x of [-0.18, 0.18]) huvud.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), hud), x, 0, 0));  // öron
  // läsglasögon långt ner på näsan
  { const gm = mat(0x3a2a1a); for (const x of [-0.055, 0.055]) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.032, 0.006, 6, 16), gm); r.position.set(x, -0.005, 0.172); huvud.add(r); } huvud.add(at(box(0.04, 0.006, 0.006, gm), 0, 0.0, 0.176)); for (const x of [-0.09, 0.09]) huvud.add(at(box(0.006, 0.006, 0.16, gm), x, 0.0, 0.1)); }
  // armarna i kors
  for (const [y, z, rz] of [[1.28, 0.24, 0.15], [1.22, 0.27, -0.15]]) { const a = box(0.5, 0.11, 0.11, skjorta); a.position.set(0, y, z); a.rotation.z = rz; ali.add(a); }
  for (const x of [-0.25, 0.25]) ali.add(at(box(0.11, 0.3, 0.11, skjorta), x, 1.38, 0.08));
  ali.userData.huvud = huvud;
}
ali.traverse((o) => { if (o.isMesh) o.castShadow = true; });
ali.position.set(0, 0, -0.75); marknad.add(ali);
// stängt-skylten och luckan
const aliStangt = new THREE.Group();
aliStangt.add(at(box(2.25, 0.95, 0.05, mat(0x6b4a2f)), 0, 1.4, 0.38));
const stSkylt = skylt('STÄNGT · ÖPPNAR 08:00', 1.5, 0.28, '#b03a2e', '#fff'); stSkylt.position.set(0, 1.4, 0.41); aliStangt.add(stSkylt);
aliStangt.visible = false; marknad.add(aliStangt);
for (const [x, c] of [[-0.7, 0xe67e22], [-0.3, 0x2ecc71], [0.4, 0x9b59b6]]) marknad.add(at(box(0.2, 0.2, 0.2, mat(c)), x, 1.0, 0.1));
traffYta(marknad, 2.4, 2, 1.8, 0, 1, -0.3);
fast(marknad, ALI.x, ALI.z, 1.3, Math.PI);

// ---------- Modeller för saker ----------
const plastFarger = [0x7fc8f8, 0x6ad48a, 0xf5f5f5, 0xffb3c1, 0x8fd3ff];
const FLASK_TYPER = [
  { kropp: 0x9fd8ff, kork: 0x1e6fd9, etikett: 0xffffff, langd: 0.3, r: 0.07, opak: false },   // vattenflaska
  { kropp: 0x7fd18b, kork: 0x1b7a2e, etikett: 0xe74c3c, langd: 0.32, r: 0.075, opak: false }, // läsk
  { kropp: 0xc9a46a, kork: 0xf1c40f, etikett: 0x8e44ad, langd: 0.42, r: 0.09, opak: false },  // 1,5-liters
  { kropp: 0xff9ec4, kork: 0xffffff, etikett: 0xffe066, langd: 0.24, r: 0.07, opak: true },   // schampo
];
const skrapSort = (variant) => {
  let v = ((variant % 100) + 100) % 100;
  for (const [sort, x] of Object.entries(SKRAP_SORTER)) { if (v < x.andel) return sort; v -= x.andel; }
  return 'flaska';
};
function skapaSkrap(variant) {
  const g = new THREE.Group();
  const sort = skrapSort(variant);
  const lagg = (o) => { o.castShadow = true; g.add(o); return o; };
  if (sort === 'flaska') {
    const t = FLASK_TYPER[variant % FLASK_TYPER.length];
    const m = mat(t.kropp, t.opak ? { roughness: 0.4 } : { transparent: true, opacity: 0.75, roughness: 0.15, metalness: 0.1 });
    const f = new THREE.Group();
    f.add(at(cyl(t.r, t.r * 0.92, t.langd, m, 14), 0, 0, 0));
    f.add(at(new THREE.Mesh(new THREE.CylinderGeometry(t.r * 0.35, t.r, t.langd * 0.25, 14), m), 0, t.langd * 0.62, 0));
    f.add(at(cyl(t.r * 0.36, t.r * 0.36, 0.035, mat(t.kork), 10), 0, t.langd * 0.78, 0));
    f.add(at(cyl(t.r * 1.03, t.r * 1.03, t.langd * 0.35, mat(t.etikett, { roughness: 0.7 }), 14), 0, 0.02, 0));
    f.rotation.z = Math.PI / 2 + (variant % 7 - 3) * 0.04; f.position.y = t.r;
    f.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    g.add(f);
  } else if (sort === 'burk') {
    const farg = [0xffffff, 0xfff3d6, 0xe8f6ff][variant % 3];
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.06, 0.13, 14), mat(farg, { roughness: 0.5 }));
    b.rotation.z = Math.PI / 2 * (variant % 2); b.position.y = variant % 2 ? 0.08 : 0.065; lagg(b);
    const lock = cyl(0.088, 0.088, 0.008, mat([0xe74c3c, 0x3498db, 0x2ecc71][variant % 3], { metalness: 0.6, roughness: 0.3 }), 14);
    if (variant % 2) { lock.rotation.z = Math.PI / 2; lock.position.set(0.068, 0.08, 0); } else lock.position.y = 0.135;
    lagg(lock);
  } else if (sort === 'pase') {
    const geo = new THREE.IcosahedronGeometry(0.18, 1);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) { const k = 0.75 + (((i * 7919 + variant * 31) % 100) / 100) * 0.45; pos.setXYZ(i, pos.getX(i) * k, pos.getY(i) * k * 0.55, pos.getZ(i) * k); }
    geo.computeVertexNormals();
    const p = new THREE.Mesh(geo, mat([0xf4f4f4, 0x6fa8dc, 0xf6b26b][variant % 3], { roughness: 0.45, flatShading: true }));
    p.position.y = 0.09; lagg(p);
    lagg(at(box(0.05, 0.02, 0.12, p.material), 0.17, 0.04, 0));
  } else if (sort === 'dunk') {
    const dm = mat([0x2f80ed, 0xf2f2f2, 0xe67e22][variant % 3], { roughness: 0.5 });
    lagg(at(box(0.32, 0.42, 0.22, dm), 0, 0.21, 0));
    lagg(at(cyl(0.045, 0.045, 0.06, mat(0xf2c94c), 10), 0.09, 0.45, 0));
    lagg(at(box(0.04, 0.08, 0.04, dm), -0.12, 0.45, 0));
    lagg(at(box(0.14, 0.035, 0.04, dm), -0.06, 0.49, 0));
    lagg(at(box(0.04, 0.08, 0.04, dm), 0.0, 0.45, 0));
  } else if (sort === 'tunna') {
    const tm = mat([0x2d6cdf, 0x27ae60, 0x34495e][variant % 3], { roughness: 0.55 });
    const t = cyl(0.32, 0.32, 0.9, tm, 18); t.rotation.z = Math.PI / 2; t.position.y = 0.32; lagg(t);
    for (const x of [-0.3, 0.3]) { const r = cyl(0.335, 0.335, 0.05, mat(0x1c2833), 18); r.rotation.z = Math.PI / 2; r.position.set(x, 0.32, 0); lagg(r); }
  } else if (sort === 'kajak') {
    const km = mat([0xf1c40f, 0xe74c3c, 0x16a085][variant % 3], { roughness: 0.4 });
    const k = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 12), km); k.scale.set(1.35, 0.22, 0.33); k.position.y = 0.2; lagg(k);
    const sits = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.06, 16), mat(0x222222)); sits.scale.set(1.6, 1, 1); sits.position.set(0, 0.42, 0); lagg(sits);
  } else {
    // ölback: ram av lister
    const bm = mat([0xd63031, 0xf1c40f, 0x27ae60][variant % 3], { roughness: 0.6 });
    const B = 0.42, D = 0.3, H = 0.26;
    lagg(at(box(B, 0.03, D, bm), 0, 0.015, 0));
    for (const y of [0.09, 0.18, 0.25]) { lagg(at(box(B, 0.035, 0.025, bm), 0, y, D / 2)); lagg(at(box(B, 0.035, 0.025, bm), 0, y, -D / 2)); lagg(at(box(0.025, 0.035, D, bm), B / 2, y, 0)); lagg(at(box(0.025, 0.035, D, bm), -B / 2, y, 0)); }
    for (const [x, z] of [[-B / 2, -D / 2], [B / 2, -D / 2], [-B / 2, D / 2], [B / 2, D / 2]]) lagg(at(box(0.03, H, 0.03, bm), x, H / 2, z));
  }
  const stor = sort === 'kajak' ? 2.6 : sort === 'tunna' ? 1.6 : sort === 'dunk' || sort === 'back' ? 1.3 : 1;
  g.userData.traff = traffYta(g, stor, 0.5, stor);  // träffytan skalas efter verktygsnivå
  g.userData.typ = 'skrap'; g.userData.variant = variant; g.userData.sort = sort; g.userData.gram = SKRAP_SORTER[sort].gram; g.userData.tung = !!SKRAP_SORTER[sort].tung;
  return g;
}
const printFarg = { nyckelring: 0xff6b6b, kruka: 0xe07a3f, pall: 0x4ea3ff, del: 0xb0b8c4 };
function skapaVara(typ) {
  const g = new THREE.Group();
  if (typ === 'nyckelkopia') {
    const m = mat(0xd9b44a);
    g.add(at(new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.012, 8, 16), m), 0, 0.12, 0));
    g.add(at(box(0.016, 0.12, 0.01, m), 0, 0.04, 0)); g.add(at(box(0.03, 0.012, 0.01, m), 0.02, 0.0, 0)); g.add(at(box(0.024, 0.012, 0.01, m), 0.017, 0.025, 0));
  } else if (typ === 'stangdskylt') {
    g.add(at(box(0.04, 0.9, 0.04, mat(0x6b4a2b)), 0, 0.45, 0));
    g.add(at(box(0.6, 0.3, 0.03, mat(0xd63a2f)), 0, 0.78, 0.03));
    g.add(at(box(0.5, 0.06, 0.035, mat(0xffffff)), 0, 0.82, 0.03)); g.add(at(box(0.36, 0.05, 0.035, mat(0xffffff)), 0, 0.72, 0.03));
  } else if (typ === 'termoslock') {
    g.add(at(cyl(0.09, 0.09, 0.08, mat(0x2f5f8f)), 0, 0.04, 0)); g.add(at(cyl(0.07, 0.07, 0.04, mat(0x9fb3c8)), 0, 0.1, 0));
    g.add(at(box(0.06, 0.02, 0.06, mat(0xc49a6c)), 0, 0.13, 0));
  } else if (typ === 'stampel') {
    g.add(at(box(0.12, 0.03, 0.08, mat(0x333333)), 0, 0.015, 0)); g.add(at(cyl(0.02, 0.02, 0.1, mat(0x8a5a2b)), 0, 0.08, 0));
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), mat(0x8a5a2b)), 0, 0.14, 0));
  } else if (typ === 'tillstand') {
    g.add(at(box(0.2, 0.13, 0.01, mat(0x2d5cbf)), 0, 0.07, 0)); g.add(at(box(0.16, 0.03, 0.012, mat(0xffffff)), 0, 0.09, 0)); g.add(at(box(0.06, 0.04, 0.012, mat(0xf1c40f)), 0.05, 0.04, 0));
  } else if (typ.startsWith('tapet_')) {
    const rl = cyl(0.07, 0.07, 0.5, new THREE.MeshStandardMaterial({ map: tapetTex(+typ.split('_')[1]) })); rl.rotation.z = Math.PI / 2; rl.position.y = 0.08; g.add(rl);
  } else if (typ === 'a_holo') {
    g.add(at(cyl(0.2, 0.25, 0.08, mat(0x222831)), 0, 0.04, 0));
    const h = new THREE.Mesh(new THREE.TorusKnotGeometry(0.18, 0.05, 64, 8), new THREE.MeshBasicMaterial({ color: 0x3de3ff, transparent: true, opacity: 0.7 })); h.position.y = 0.6; h.userData.snurra = true; g.add(h);
  } else if (typ === 'a_robot') {
    const v = mat(0xe8eef5), sv = mat(0x222831);
    g.add(at(box(0.36, 0.42, 0.28, v), 0, 0.35, 0)); g.add(at(box(0.3, 0.24, 0.24, v), 0, 0.7, 0)); g.add(at(box(0.24, 0.14, 0.02, mat(0x3de3ff)), 0, 0.71, 0.125));
    for (const x of [-0.12, 0.12]) g.add(at(cyl(0.07, 0.07, 0.06, sv), x, 0.07, 0).rotateZ(Math.PI / 2));
    g.add(at(box(0.02, 0.14, 0.02, sv), 0, 0.89, 0)); g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3c3c })), 0, 0.97, 0));
  } else if (typ.startsWith('m_')) {
    // prototyp i en glänsande låda med blå glöd
    g.add(at(box(0.34, 0.22, 0.26, new THREE.MeshStandardMaterial({ color: 0xb8c4d2, metalness: 0.8, roughness: 0.25 })), 0, 0.11, 0));
    g.add(at(box(0.36, 0.03, 0.28, new THREE.MeshBasicMaterial({ color: 0x3de3ff })), 0, 0.12, 0));
  } else if (typ.startsWith('p_')) {
    // inslagen present med rosett
    const f = [0xd63a2f, 0x2d7fd6, 0x2e8b57, 0xf28c28, 0x8e44ad][Object.keys(ROLF_TACK).indexOf(typ) % 5];
    g.add(at(box(0.32, 0.24, 0.26, mat(f)), 0, 0.12, 0)); g.add(at(box(0.34, 0.03, 0.06, mat(0xffd43b)), 0, 0.245, 0)); g.add(at(box(0.06, 0.03, 0.28, mat(0xffd43b)), 0, 0.245, 0));
    for (const x of [-0.05, 0.05]) { const o = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.012, 6, 12), mat(0xffd43b)); o.position.set(x, 0.28, 0); o.rotation.y = x * 20; g.add(o); }
  } else if (typ === 'burk_sill') {
    g.add(at(cyl(0.1, 0.1, 0.2, new THREE.MeshStandardMaterial({ color: 0xe8e0c0, transparent: true, opacity: 0.6, roughness: 0.1 })), 0, 0.1, 0));
    for (let i = 0; i < 4; i++) g.add(at(box(0.03, 0.14, 0.01, mat(0xc0c8d0)), -0.05 + i * 0.033, 0.1, 0).rotateZ(0.2 * (i % 2 ? 1 : -1)));
    g.add(at(cyl(0.105, 0.105, 0.04, mat(0xc8a030)), 0, 0.22, 0));
  } else if (typ === 'burk_sockor') {
    for (const x of [-0.07, 0.07]) { g.add(at(box(0.09, 0.05, 0.26, mat(0xb03030)), x, 0.025 + (x > 0 ? 0.05 : 0), 0)); g.add(at(box(0.095, 0.052, 0.04, mat(0xf0f0f0)), x, 0.025 + (x > 0 ? 0.05 : 0), -0.06)); }
  } else if (typ === 'burk_duk') {
    g.add(at(cyl(0.28, 0.28, 0.01, mat(0xf8f4ea), 18), 0, 0.006, 0));
    for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; g.add(at(cyl(0.025, 0.025, 0.012, mat(0xf8f4ea), 6), Math.cos(a) * 0.29, 0.006, Math.sin(a) * 0.29)); }
  } else if (typ === 'burk_toarulle') {
    g.add(at(new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.22, 12), mat(0xf28cb8)), 0, 0.11, 0));
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), mat(0xf3d6b8)), 0, 0.26, 0));
    g.add(at(cyl(0.07, 0.07, 0.02, mat(0xf28cb8)), 0, 0.3, 0));
  } else if (typ === 'burk_porslin') {
    g.add(at(box(0.08, 0.14, 0.1, mat(0xf4f4f0, { roughness: 0.2 })), 0, 0.07, 0));
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), mat(0xf4f4f0, { roughness: 0.2 })), 0, 0.17, 0.03));
    for (const x of [-0.035, 0.035]) g.add(at(box(0.02, 0.06, 0.03, mat(0x8a5a30)), x, 0.2, 0.01));
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.012, 6, 4), mat(0x111111)), 0, 0.17, 0.08));
  } else if (typ === 'burk_tavla' || typ === 'burk_tavla2' || typ === 'burk_tavla3') {
    // tavlor hänger på väggen (ställ dem dikt mot en vägg i skjulet eller boden)
    const [w, h, txt, bg, fg] = { burk_tavla: [0.44, 0.34, 'BORTA BRA MEN HEMMA BÄST', '#f6eedc', '#b03050'], burk_tavla2: [0.36, 0.36, '♥ ETT GLATT HJÄRTA ♥', '#fff4f4', '#c03040'], burk_tavla3: [0.62, 0.44, null] }[typ];
    g.add(at(box(w, h, 0.03, mat(typ === 'burk_tavla3' ? 0xc8a040 : 0x8a6a3f)), 0, 1.45, 0));
    if (txt) { const sk = skylt(txt, w - 0.06, h - 0.06, bg, fg); sk.position.set(0, 1.45, 0.017); g.add(sk); }
    else {   // älg i solnedgång, målad av mamma (inte så bra)
      g.add(at(box(w - 0.06, h - 0.06, 0.005, mat(0xf08a3a)), 0, 1.45, 0.016));
      g.add(at(new THREE.Mesh(new THREE.CircleGeometry(0.07, 14), mat(0xffd84a)), 0.12, 1.5, 0.02));
      g.add(at(box(w - 0.06, 0.12, 0.006, mat(0x2a4a2a)), 0, 1.31, 0.02));
      g.add(at(box(0.14, 0.07, 0.006, mat(0x3a2a1a)), -0.1, 1.4, 0.022)); g.add(at(box(0.05, 0.06, 0.006, mat(0x3a2a1a)), -0.02, 1.45, 0.022));
      for (const x of [-0.15, -0.06]) g.add(at(box(0.015, 0.07, 0.006, mat(0x3a2a1a)), x, 1.34, 0.022));
    }
    g.add(at(cyl(0.006, 0.006, 0.04, mat(0x777777), 4), 0, 1.45 + h / 2 + 0.03, -0.01).rotateX(Math.PI / 2));
  } else if (typ === 'burk_kompott' || typ === 'burk_mogel_kompott') {
    const mog = typ === 'burk_mogel_kompott';
    g.add(at(box(0.26, 0.09, 0.18, new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, roughness: 0.2 })), 0, 0.045, 0));
    for (let i = 0; i < 9; i++) g.add(at(box(0.05, 0.04, 0.05, mat(mog ? [0x5a6a3a, 0x7a8a5a, 0x4a4a3a][i % 3] : [0xd88a30, 0xc0503a, 0xe8c050][i % 3])), -0.09 + (i % 3) * 0.09, 0.05, -0.05 + Math.floor(i / 3) * 0.05));
    g.add(at(box(0.27, 0.015, 0.19, mat(0x3a7ad0)), 0.02, 0.1, 0).rotateZ(0.08));
    const et = skylt('MAMMAS KOMPOTT', 0.18, 0.05, '#fff8e8', '#6a3a1a'); et.position.set(0, 0.06, 0.092); g.add(et);
    if (mog) mogel(g, 0.12);
  } else if (typ === 'burk_raggmunk' || typ === 'burk_mogel_raggmunk') {
    const mog = typ === 'burk_mogel_raggmunk';
    g.add(at(box(0.3, 0.015, 0.24, mat(0xd8dce0, { metalness: 0.6, roughness: 0.35 })), 0, 0.008, 0));
    for (let i = 0; i < 3; i++) g.add(at(cyl(0.07, 0.07, 0.02, mat(mog ? 0x6a6a40 : 0xa8742f), 10), -0.07 + i * 0.07, 0.025 + i * 0.012, 0.02 * (i % 2)));
    if (mog) mogel(g, 0.06);
  } else if (typ === 'burk_vissen') {
    g.add(at(cyl(0.06, 0.05, 0.16, mat(0x3a7ab0, { roughness: 0.2 })), 0, 0.08, 0));
    for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; const st = at(cyl(0.006, 0.006, 0.2, mat(0x6a6a30), 4), Math.cos(a) * 0.05, 0.22, Math.sin(a) * 0.05); st.rotation.set(Math.sin(a) * 0.9, 0, -Math.cos(a) * 0.9); g.add(st); g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.03, 5, 4), mat(0x6a4a2a)), Math.cos(a) * 0.14, 0.2, Math.sin(a) * 0.14)); }
    for (let i = 0; i < 4; i++) g.add(at(box(0.03, 0.004, 0.02, mat(0x7a5a3a)), Math.random() * 0.3 - 0.15, 0.003, Math.random() * 0.3 - 0.15));
    mogel(g, 0.25, true);
  } else if (typ === 'burk_blomma') {
    g.add(at(cyl(0.06, 0.05, 0.16, mat(0x3a7ab0, { roughness: 0.2 })), 0, 0.08, 0));
    for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; g.add(at(cyl(0.006, 0.006, 0.2, mat(0x3a8a3a), 4), Math.cos(a) * 0.03, 0.24, Math.sin(a) * 0.03)); for (let k = 0; k < 5; k++) { const kb = k / 5 * Math.PI * 2; g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.018, 5, 4), mat([0xff4fa0, 0xffe040, 0xffffff][i % 3])), Math.cos(a) * 0.04 + Math.cos(kb) * 0.022, 0.35, Math.sin(a) * 0.04 + Math.sin(kb) * 0.022)); } g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.014, 5, 4), mat(0xffc020)), Math.cos(a) * 0.04, 0.355, Math.sin(a) * 0.04)); }   // riktiga blommor – de vissnar
  } else if (typ === 'burk_saft') {
    g.add(at(cyl(0.08, 0.09, 0.32, new THREE.MeshStandardMaterial({ color: 0xd65a6a, transparent: true, opacity: 0.85, roughness: 0.15 })), 0, 0.16, 0));
    g.add(at(cyl(0.03, 0.06, 0.08, new THREE.MeshStandardMaterial({ color: 0xd65a6a, transparent: true, opacity: 0.85 })), 0, 0.36, 0));
    g.add(at(cyl(0.035, 0.035, 0.03, mat(0xf0f0f0)), 0, 0.41, 0));
    const et = skylt('SAFT', 0.12, 0.07, '#fff8e8', '#8a1a2a'); et.position.set(0, 0.16, 0.092); g.add(et);
  } else if (typ === 'burk_vante') {
    for (const x of [-0.09, 0.09]) { g.add(at(box(0.15, 0.03, 0.2, mat(0x9b59b6)), x, 0.015 + (x > 0 ? 0.03 : 0), 0).rotateY(x * 2)); g.add(at(box(0.06, 0.03, 0.08, mat(0xf1c40f)), x + 0.07, 0.02 + (x > 0 ? 0.03 : 0), 0.06)); }
  } else if (typ.startsWith('burk_')) {
    const h = typ === 'burk_honung';
    g.add(at(cyl(0.11, 0.1, 0.24, new THREE.MeshStandardMaterial({ color: h ? 0xe0a020 : 0x9a1a2a, transparent: true, opacity: 0.88, roughness: 0.2 })), 0, 0.12, 0));
    g.add(at(cyl(0.115, 0.115, 0.05, mat(h ? 0xd8c070 : 0xd0d0d0)), 0, 0.265, 0));
    g.add(at(cyl(0.16, 0.12, 0.02, mat(0xffffff)), 0, 0.29, 0));   // rutigt tygskynke … nästan
    const et = skylt(h ? 'HONUNG' : 'LINGON', 0.16, 0.08, '#fff8e8', '#6a3a1a'); et.position.set(0, 0.13, 0.112); g.add(et);
  } else if (typ === 'r_tv') {
    g.add(at(box(0.62, 0.5, 0.5, mat(0x5a4632)), 0, 0.25, 0)); g.add(at(box(0.44, 0.36, 0.02, mat(0x2a3a3a)), -0.05, 0.27, 0.255));
    for (const y of [0.32, 0.22]) g.add(at(cyl(0.025, 0.025, 0.03, mat(0xc0c0c0)), 0.24, y, 0.255).rotateX(Math.PI / 2));
    g.add(at(box(0.04, 0.2, 0.01, mat(0x888888)), 0.05, 0.6, 0).rotateZ(0.5)); g.add(at(box(0.04, 0.2, 0.01, mat(0x888888)), -0.05, 0.6, 0).rotateZ(-0.5));
  } else if (typ === 'r_affisch') {
    // hänger på väggen i skjulet, som tavlorna
    g.add(at(box(0.58, 0.78, 0.02, mat(0x14081f)), 0, 1.45, 0));
    const sk = skylt('ROLFS ROCKERS 1987', 0.55, 0.75, '#1b1030', '#ff5fa2'); sk.position.set(0, 1.45, 0.012); g.add(sk);
  } else if (typ === 'r_gardin') {
    g.add(at(box(1.0, 0.03, 0.03, mat(0x8a6a3f)), 0, 1.6, 0));
    for (const x of [-0.3, 0.3]) { const gd = box(0.38, 1.4, 0.03, mat(0xe9a0b8)); gd.position.set(x, 0.9, 0.02); g.add(gd); for (let y = 0.4; y < 1.5; y += 0.25) g.add(at(box(0.38, 0.03, 0.035, mat(0xffffff)), x, y, 0.02)); }
  } else if (typ === 'r_klocka') {
    g.add(at(box(0.3, 0.06, 0.2, mat(0x3b2a1c)), 0, 0.03, 0));
    const k = cyl(0.07, 0.07, 0.02, mat(0xd9b44a)); k.rotation.x = Math.PI / 2; k.position.set(0, 0.16, 0); g.add(k);
    g.add(at(cyl(0.06, 0.06, 0.021, mat(0xfff6dc)), 0, 0.16, 0.002).rotateX(Math.PI / 2)); g.add(at(box(0.02, 0.12, 0.02, mat(0xd9b44a)), 0, 0.07, 0));
  } else if (typ === 'r_fatolj') {
    const l = mat(0x6b3a1f); g.add(at(box(0.85, 0.42, 0.8, l), 0, 0.21, 0)); g.add(at(box(0.85, 0.6, 0.2, l), 0, 0.6, -0.3)); for (const x of [-0.37, 0.37]) g.add(at(box(0.14, 0.25, 0.75, l), x, 0.53, 0));
  } else if (typ === 'r_discokula') {
    g.add(at(box(0.03, 0.6, 0.03, mat(0x777777)), 0, 1.6, 0));
    const k = new THREE.Mesh(new THREE.IcosahedronGeometry(0.22, 1), new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 1, roughness: 0.15, flatShading: true })); k.position.y = 1.15; g.add(k);
    g.add(at(box(0.5, 0.04, 0.5, mat(0x555555)), 0, 0.02, 0)); g.add(at(box(0.04, 1.9, 0.04, mat(0x555555)), 0.23, 0.95, 0)); g.add(at(box(0.25, 0.04, 0.04, mat(0x555555)), 0.11, 1.9, 0));
  } else if (typ === 'r_jukebox') {
    g.add(at(box(0.8, 1.2, 0.55, mat(0x8b1e1e)), 0, 0.6, 0));
    const topp = cyl(0.4, 0.4, 0.55, mat(0xd9b44a), 20, 1, false, 0, Math.PI); topp.rotation.z = Math.PI / 2; topp.rotation.y = Math.PI / 2; topp.position.y = 1.2; g.add(topp);
    g.add(at(box(0.6, 0.35, 0.02, mat(0xffd98a)), 0, 0.85, 0.28)); for (let i = 0; i < 5; i++) g.add(at(box(0.08, 0.6, 0.02, mat([0xff5fa2, 0x3de3ff, 0x7dffb0, 0xffd43b, 0xc77dff][i])), -0.24 + i * 0.12, 0.35, 0.28));
  } else if (typ === 'trumstockar') {
    for (const x of [-0.03, 0.03]) { const st = cyl(0.012, 0.016, 0.4, mat(0xe0c08a)); st.rotation.z = Math.PI / 2; st.rotation.y = x * 4; st.position.set(0, 0.02, x); g.add(st); }
  } else if (typ === 'nyckelring') {
    const r = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 8, 20), mat(printFarg.nyckelring));
    r.position.y = 0.07; r.castShadow = true; g.add(r);
    g.add(at(box(0.05, 0.08, 0.015, mat(printFarg.nyckelring)), 0, -0.01, 0));
  } else if (typ === 'kruka') {
    g.add(at(cyl(0.16, 0.11, 0.26, mat(printFarg.kruka)), 0, 0.13, 0));
    const vaxt = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), mat(0x3f9b4b));
    vaxt.position.y = 0.36; vaxt.castShadow = true; g.add(vaxt);
  } else if (typ === 'pall') {
    g.add(at(cyl(0.22, 0.22, 0.05, mat(printFarg.pall)), 0, 0.45, 0));
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2, b = cyl(0.03, 0.03, 0.44, mat(printFarg.pall), 6);
      b.position.set(Math.cos(a) * 0.14, 0.22, Math.sin(a) * 0.14); g.add(b);
    }
  } else if (typ === 'sang') {
    const tra = mat(0xc49a6c), madr = mat(0xf2efe6), tacke = mat(0x4a7bd1);
    g.add(at(box(0.9, 0.18, 1.9, tra), 0, 0.15, 0));
    g.add(at(box(0.84, 0.12, 1.84, madr), 0, 0.3, 0));
    g.add(at(box(0.86, 0.06, 1.1, tacke), 0, 0.38, 0.35));
    g.add(at(box(0.5, 0.1, 0.3, mat(0xffffff)), 0, 0.41, -0.7));
    g.add(at(box(0.9, 0.5, 0.06, tra), 0, 0.3, -0.95));
  } else if (typ === 'olhallare') {
    g.add(at(cyl(0.11, 0.1, 0.22, mat(0x2d6cdf)), 0, 0.11, 0));
    g.add(at(cyl(0.085, 0.085, 0.01, mat(0x1b3f8f)), 0, 0.225, 0));
    g.add(at(box(0.03, 0.14, 0.06, mat(0x2d6cdf)), 0.14, 0.12, 0));
    g.add(at(box(0.05, 0.06, 0.22, mat(0x7fd6ff, { emissive: 0x7fd6ff, emissiveIntensity: 0.3 })), -0.12, 0.12, 0));
  } else if (typ === 'flaskoppnare') {
    g.add(at(box(0.05, 0.02, 0.2, mat(0xf1c40f)), 0, 0.02, 0));
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.012, 6, 14), mat(0xf1c40f)); ring.rotation.x = Math.PI / 2; ring.position.set(0, 0.02, -0.11); g.add(ring);
  } else if (typ === 'grillspade') {
    g.add(at(box(0.14, 0.015, 0.14, mat(0x95a5a6, { metalness: 0.6, roughness: 0.3 })), 0, 0.02, -0.12));
    g.add(at(box(0.03, 0.02, 0.28, mat(0x6b4a2f)), 0, 0.03, 0.08));
  } else if (typ === 'tomte') {
    g.add(at(cyl(0.08, 0.1, 0.16, mat(0x2e86de)), 0, 0.08, 0));
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), mat(0xf5cba7)), 0, 0.2, 0));
    g.add(at(new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.16, 10), mat(0xc0392b)), 0, 0.32, 0));
    g.add(at(new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.1, 8), mat(0xffffff)), 0, 0.15, 0.04));
  } else if (/^fynd[2-5]$/.test(typ)) {
    const n = +typ.slice(-1), f = FIL_FARG[n];
    const m = mat(f, { roughness: 0.5, metalness: n >= 4 ? 0.6 : 0.05, emissive: f, emissiveIntensity: 0.12 });
    if (n === 2) { g.add(at(box(0.4, 0.22, 0.28, m), 0, 0.11, 0)); for (const x of [-0.12, 0, 0.12]) g.add(at(box(0.06, 0.12, 0.29, mat(0x8a1f18)), x, 0.13, 0)); }
    else if (n === 5) { g.add(at(cyl(0.13, 0.11, 0.24, mat(0x777777)), 0, 0.12, 0)); g.add(at(cyl(0.12, 0.12, 0.03, m), 0, 0.25, 0)); }
    else { g.add(at(box(0.24, 0.3, 0.18, m), 0, 0.15, 0)); g.add(at(cyl(0.04, 0.04, 0.06, mat(0x222222)), 0.05, 0.33, 0)); }
  } else if (/^rulle[2-5]$/.test(typ)) {
    const sp = filamentSpole(FIL_FARG[typ.slice(-1)], 0.16, 0.12); sp.position.y = 0.16; sp.rotation.y = 0.5; g.add(sp);
    const sk = skylt(typ.slice(-1), 0.08, 0.08, '#ffffff', '#111111'); sk.position.set(0, 0.16, 0.067); sp.add(sk); sk.position.set(0, 0, 0.066);
  } else if (typ === 'r_radio') {
    g.add(at(box(0.5, 0.35, 0.25, mat(0x6a4a2a)), 0, 0.18, 0), at(box(0.3, 0.2, 0.01, mat(0xd8c890)), -0.06, 0.2, 0.126));
    for (const x of [0.15, 0.19]) g.add(at(cyl(0.025, 0.025, 0.02, mat(0xd0b060)), x, 0.2, 0.13).rotateX(Math.PI / 2));
  } else if (typ === 'ra_flipper') {
    g.add(at(box(0.6, 0.15, 1.1, mat(0x8a1a2a)), 0, 0.85, 0).rotateX(-0.08), at(box(0.62, 0.7, 0.12, mat(0x8a1a2a)), 0, 1.2, -0.52), at(box(0.5, 0.5, 0.02, new THREE.MeshStandardMaterial({ color: 0xffc040, emissive: 0xff8020, emissiveIntensity: 0.8 })), 0, 1.2, -0.45));
    for (const [x, z] of [[-0.26, 0.5], [0.26, 0.5], [-0.26, -0.45], [0.26, -0.45]]) g.add(at(box(0.05, 0.8, 0.05, mat(0x222222)), x, 0.4, z));
  } else if (typ === 'ra_kiosk') {
    const r = mat(0xc01a1a);
    g.add(at(box(0.9, 2.3, 0.9, r), 0, 1.15, 0), at(box(0.95, 0.12, 0.95, r), 0, 2.35, 0));
    for (const z of [0.452, -0.452]) for (let y = 0; y < 4; y++) g.add(at(box(0.6, 0.3, 0.01, mat(0xbfe0ff, { emissive: 0x223344 })), 0, 0.8 + y * 0.38, z));
    const sk = skylt('TELEFON', 0.7, 0.14, '#111', '#fff'); sk.position.set(0, 2.15, 0.46); g.add(sk);
  } else if (typ === 'ra_moped') {
    g.add(at(box(0.25, 0.3, 1.1, mat(0x2a6ab0)), 0, 0.55, 0), at(box(0.2, 0.08, 0.35, mat(0x222222)), 0, 0.75, -0.15), at(box(0.5, 0.04, 0.04, mat(0x999999)), 0, 1.0, 0.5));
    for (const z of [-0.45, 0.45]) g.add(at(cyl(0.25, 0.25, 0.08, mat(0x1a1a1a), 16), 0, 0.25, z).rotateZ(Math.PI / 2));
  } else if (typ === 'ra_bensin') {
    g.add(at(box(0.5, 1.5, 0.35, mat(0xe8b020)), 0, 0.75, 0), at(new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 10), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffe0a0, emissiveIntensity: 0.5 })), 0, 1.65, 0), at(box(0.3, 0.25, 0.02, mat(0xffffff)), 0, 1.1, 0.18));
  } else if (typ === 'ra_emalj') {
    g.add(at(box(0.04, 1.3, 0.04, mat(0x555555)), 0, 0.65, 0)); const sk = skylt('MJÖLK & GRÄDDE', 0.7, 0.4, '#1a4a8a', '#ffffff'); sk.position.set(0, 1.2, 0.03); g.add(sk);
  } else if (typ === 'ra_fatgrill') {
    g.add(at(cyl(0.3, 0.3, 0.6, mat(0x2a4a2a), 16), 0, 0.75, 0).rotateZ(Math.PI / 2));
    for (const x of [-0.25, 0.25]) for (const z of [-0.2, 0.2]) g.add(at(box(0.04, 0.5, 0.04, mat(0x333333)), x, 0.25, z));
  } else if (typ === 'kamin') {
    const j = mat(0x2a2a2a, { metalness: 0.5, roughness: 0.6 });
    g.add(at(box(0.55, 0.7, 0.45, j), 0, 0.45, 0), at(box(0.6, 0.06, 0.5, j), 0, 0.83, 0), at(cyl(0.07, 0.07, 1.4, j, 10), 0, 1.55, -0.1));
    for (const [x, z] of [[-0.22, -0.18], [0.22, -0.18], [-0.22, 0.18], [0.22, 0.18]]) g.add(at(box(0.05, 0.1, 0.05, j), x, 0.05, z));
    g.add(at(box(0.3, 0.25, 0.01, new THREE.MeshStandardMaterial({ color: 0xff7a20, emissive: 0xff5a10, emissiveIntensity: 1.4 })), 0, 0.45, 0.226));
  } else if (typ === 'n2_neon') {
    g.add(at(box(0.7, 0.05, 0.05, mat(0x333333)), 0, 0.03, 0));
    for (const [x, y, w, h] of [[-0.25, 0.35, 0.05, 0.5], [0, 0.6, 0.55, 0.05], [0.25, 0.35, 0.05, 0.5], [0, 0.35, 0.3, 0.05]]) g.add(at(box(w, h, 0.04, new THREE.MeshStandardMaterial({ color: 0x3aa0ff, emissive: 0x3aa0ff, emissiveIntensity: 1.2 })), x, y, 0));
  } else if (typ === 'n3_stol') {
    const k = mat(0x1a1a1a, { metalness: 0.4, roughness: 0.3 });
    g.add(at(box(0.5, 0.05, 0.5, k), 0, 0.45, 0), at(box(0.5, 0.6, 0.05, k), 0, 0.75, -0.23));
    for (const [x, z] of [[-0.22, -0.22], [0.22, -0.22], [-0.22, 0.22], [0.22, 0.22]]) g.add(at(box(0.04, 0.45, 0.04, k), x, 0.22, z));
  } else if (typ === 'n4_staty') {
    const gu = mat(0xd4a017, { metalness: 0.9, roughness: 0.25 });
    g.add(at(box(0.5, 0.2, 0.5, mat(0x777777)), 0, 0.1, 0), at(box(0.3, 0.5, 0.2, gu), 0, 0.45, 0), at(new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 10), gu), 0, 0.82, 0), at(cyl(0.16, 0.16, 0.03, gu), 0, 0.93, 0), at(box(0.05, 0.3, 0.05, gu), 0.2, 0.75, 0).rotateZ(-0.6));
  } else if (typ === 'n5_drake') {
    const ti = mat(0x9a8ab8, { metalness: 0.85, roughness: 0.3 });
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), ti), 0, 0.45, 0)); g.children[g.children.length - 1].scale.set(1.4, 0.8, 0.8);
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), ti), 0.45, 0.7, 0), at(new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.5, 6), ti), -0.5, 0.4, 0).rotateZ(Math.PI / 2));
    for (const z of [-1, 1]) g.add(at(new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.6, 3), mat(0x6a5a90, { metalness: 0.6 })), 0, 0.75, z * 0.3).rotateX(z * 1.1));
    for (const [x, z] of [[-0.2, -0.15], [0.2, -0.15], [-0.2, 0.15], [0.2, 0.15]]) g.add(at(box(0.07, 0.25, 0.07, ti), x, 0.12, z));
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 4), mat(0xff3030, { emissive: 0xff3030 })), 0.57, 0.75, 0.07));
  } else if (typ === 'rulle') {
    const sp = filamentSpole(FIL1, 0.16, 0.12); sp.position.y = 0.16; sp.rotation.y = 0.5; g.add(sp);
  } else if (typ === 'mobilstall') {
    const m = mat(0x2ecc71);
    g.add(at(box(0.14, 0.02, 0.1, m), 0, 0.01, 0));
    const rygg = box(0.12, 0.16, 0.015, m); rygg.position.set(0, 0.08, -0.03); rygg.rotation.x = -0.35; g.add(rygg);
    g.add(at(box(0.12, 0.025, 0.02, m), 0, 0.03, 0.035));
  } else if (typ === 'fagelholk') {
    const t = mat(0xd4a373), tak2 = mat(0x8e5a2e);
    g.add(at(box(0.22, 0.28, 0.22, t), 0, 0.14, 0));
    for (const x of [-1, 1]) { const tk = box(0.17, 0.02, 0.28, tak2); tk.position.set(x * 0.07, 0.32, 0); tk.rotation.z = -x * 0.65; g.add(tk); }
    const hal = cyl(0.04, 0.04, 0.02, mat(0x1a1a1a), 12); hal.rotation.x = Math.PI / 2; hal.position.set(0, 0.18, 0.111); g.add(hal);
    const pinne = cyl(0.008, 0.008, 0.07, t, 6); pinne.rotation.x = Math.PI / 2; pinne.position.set(0, 0.11, 0.14); g.add(pinne);
  } else if (typ === 'lampskarm') {
    const sk = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.2, 0.24, 18, 1, true), mat(0xfff3c4, { side: THREE.DoubleSide, emissive: 0xffd27a, emissiveIntensity: 0.35 }));
    sk.position.y = 0.14; sk.castShadow = true; g.add(sk);
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; const l = box(0.01, 0.24, 0.01, mat(0xe0a050)); l.position.set(Math.cos(a) * 0.155, 0.14, Math.sin(a) * 0.155); l.rotation.z = Math.cos(a) * 0.35; l.rotation.x = -Math.sin(a) * 0.35; g.add(l); }
  } else if (typ === 'dronare') {
    const sv = mat(0x2b2b2b), or = mat(0xff7a1a);
    for (const rz of [Math.PI / 4, -Math.PI / 4]) { const a = box(0.55, 0.025, 0.05, sv); a.rotation.y = rz; a.position.y = 0.04; g.add(a); }
    g.add(at(box(0.12, 0.05, 0.16, or), 0, 0.05, 0));
    for (const [x, z] of [[0.19, 0.19], [-0.19, 0.19], [0.19, -0.19], [-0.19, -0.19]]) { const ring = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.008, 6, 18), or); ring.rotation.x = Math.PI / 2; ring.position.set(x, 0.06, z); g.add(ring); g.add(at(cyl(0.02, 0.02, 0.04, sv, 8), x, 0.05, z)); }
  } else if (typ === 'gamingstol') {
    const sv = mat(0x1d1d22), rod = mat(0xd63031);
    g.add(at(cyl(0.04, 0.04, 0.35, sv, 8), 0, 0.22, 0));
    for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2, b = box(0.28, 0.03, 0.04, sv); b.position.set(Math.cos(a) * 0.14, 0.05, Math.sin(a) * 0.14); b.rotation.y = -a; g.add(b); }
    g.add(at(box(0.5, 0.09, 0.48, sv), 0, 0.44, 0));
    const rygg = box(0.48, 0.75, 0.08, sv); rygg.position.set(0, 0.85, -0.22); rygg.rotation.x = -0.12; g.add(rygg);
    const rand = box(0.12, 0.7, 0.085, rod); rand.position.set(0, 0.86, -0.215); rand.rotation.x = -0.12; g.add(rand);
    for (const x of [-0.26, 0.26]) g.add(at(box(0.05, 0.04, 0.32, rod), x, 0.6, 0));
  } else if (typ === 'hogtalare') {
    g.add(at(box(0.25, 0.42, 0.25, mat(0x1d1d22)), 0, 0.21, 0));
    for (const [y, r2] of [[0.28, 0.08], [0.12, 0.05]]) { const c = cyl(r2, r2, 0.02, mat(0x444444), 16); c.rotation.x = Math.PI / 2; c.position.set(0, y, 0.126); g.add(c); }
    g.add(at(box(0.26, 0.015, 0.26, mat(0x7d5fff, { emissive: 0x7d5fff, emissiveIntensity: 0.8 })), 0, 0.005, 0));
  } else if (typ === 'kyl') {
    g.add(at(box(0.5, 0.85, 0.5, mat(0xf2f2f2)), 0, 0.425, 0));
    g.add(at(box(0.03, 0.3, 0.03, mat(0x999999)), 0.19, 0.55, 0.26));
    g.add(at(box(0.5, 0.01, 0.01, mat(0xcccccc)), 0, 0.62, 0.252));
    g.add(at(box(0.12, 0.08, 0.01, mat(0xff6b6b)), -0.1, 0.72, 0.252));   // magnet på dörren
  } else if (typ === 'gamingbord') {
    const sv = mat(0x1d1d22);
    g.add(at(box(1.2, 0.05, 0.6, sv), 0, 0.74, 0));
    for (const x of [-0.55, 0.55]) g.add(at(box(0.05, 0.72, 0.5, sv), x, 0.36, 0));
    g.add(at(box(1.2, 0.012, 0.01, mat(0x3de3ff, { emissive: 0x3de3ff, emissiveIntensity: 1 })), 0, 0.72, 0.3));
    g.add(at(box(0.06, 0.25, 0.06, sv), 0, 0.88, -0.18));
    g.add(at(box(0.85, 0.45, 0.04, sv), 0, 1.15, -0.2));
    g.add(at(box(0.8, 0.4, 0.01, mat(0x2d6cdf, { emissive: 0x3a6cff, emissiveIntensity: 0.7 })), 0, 1.15, -0.178));
    g.add(at(box(0.45, 0.02, 0.15, mat(0x333333)), -0.05, 0.775, 0.1));
    g.add(at(box(0.07, 0.025, 0.11, mat(0x333333)), 0.3, 0.775, 0.1));
  } else if (typ === 'soffa') {
    const tyg = mat(0x2a8c8c), mork = mat(0x1f6b6b);
    g.add(at(box(1.6, 0.25, 0.75, mork), 0, 0.2, 0));
    for (const x of [-0.39, 0.39]) g.add(at(box(0.76, 0.14, 0.6, tyg), x, 0.39, 0.06));
    g.add(at(box(1.6, 0.5, 0.18, mork), 0, 0.55, -0.3));
    for (const x of [-0.8, 0.8]) g.add(at(box(0.16, 0.42, 0.75, mork), x, 0.38, 0));
    g.add(at(box(0.35, 0.28, 0.1, mat(0xffd43b)), -0.5, 0.58, -0.17));   // kudde
  } else if (typ === 'dator') {
    g.add(at(box(0.22, 0.48, 0.45, mat(0x1d1d22)), 0, 0.24, 0));
    g.add(at(box(0.005, 0.42, 0.4, mat(0xb07dff, { emissive: 0xb07dff, emissiveIntensity: 0.9, transparent: true, opacity: 0.8 })), 0.112, 0.24, 0));
    for (const y of [0.12, 0.3]) { const f = cyl(0.06, 0.06, 0.01, mat(0x3de3ff, { emissive: 0x3de3ff, emissiveIntensity: 1 }), 16); f.rotation.z = Math.PI / 2; f.position.set(0.105, y, 0.1); g.add(f); }
  } else if (typ === 'skateboard') {
    const deck = box(0.8, 0.03, 0.22, mat(0xff6b6b)); deck.position.y = 0.1; g.add(deck);
    for (const x of [-0.27, 0.27]) for (const z of [-0.08, 0.08]) { const w = cyl(0.035, 0.035, 0.03, mat(0xffd43b), 10); w.rotation.x = Math.PI / 2; w.position.set(x, 0.04, z); g.add(w); }
  } else if (typ === 'gitarr') {
    const kropp = mat(0x2d6cdf);
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 10), kropp), 0, 0.22, 0)); g.children[g.children.length - 1].scale.set(1, 1, 0.25);
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.15, 14, 10), kropp), 0, 0.45, 0)); g.children[g.children.length - 1].scale.set(1, 1, 0.25);
    g.add(at(box(0.06, 0.6, 0.03, mat(0x6b4a2f)), 0, 0.85, 0)); g.add(at(box(0.1, 0.12, 0.03, mat(0x1d1d22)), 0, 1.2, 0));
  } else if (typ === 'cykelram') {
    const r2 = mat(0x7dffb0), stang = (a, b2) => { const v = new THREE.Vector3().subVectors(b2, a); const m = cyl(0.02, 0.02, v.length(), r2, 6); m.position.copy(a).add(b2).multiplyScalar(0.5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.normalize()); g.add(m); };
    const A = new THREE.Vector3(-0.35, 0.35, 0), B2 = new THREE.Vector3(0.05, 0.3, 0), C = new THREE.Vector3(0.0, 0.75, 0), D = new THREE.Vector3(0.45, 0.75, 0), E = new THREE.Vector3(0.5, 0.35, 0);
    stang(A, B2); stang(B2, C); stang(C, A); stang(C, D); stang(D, B2); stang(D, E);
  } else if (typ === 'pkajak') {
    const k = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 10), mat(0xff9f43)); k.scale.set(4, 0.6, 1); k.position.y = 0.2; k.castShadow = true; g.add(k);
    g.add(at(box(0.6, 0.06, 0.35, mat(0x1d1d22)), 0, 0.38, 0));
  } else if (typ === 'ledpinne') {
    g.add(at(cyl(0.08, 0.1, 0.05, mat(0x1d1d22), 12), 0, 0.025, 0));
    const ror = cyl(0.03, 0.03, 1.3, mat(0xff4dd2, { emissive: 0xff4dd2, emissiveIntensity: 1.2 }), 10); ror.position.y = 0.7; ror.userData.rgb = true; g.add(ror);
  } else if (typ === 'akustik') {
    for (let i = 0; i < 6; i++) { const p = box(0.28, 0.28, 0.05, mat([0x1d1d22, 0x2d6cdf, 0x1d1d22][i % 3])); p.position.set((i % 3 - 1) * 0.3, 0.6 + Math.floor(i / 3) * 0.3, 0); g.add(p); }
    g.add(at(box(0.05, 1.0, 0.05, mat(0x333333)), 0, 0.5, -0.04));
  } else if (typ === 'neonskylt') {
    g.add(at(box(0.05, 1.1, 0.05, mat(0x222222)), 0, 0.55, -0.04));
    const s2 = skylt('GAME ON', 0.8, 0.3, '#14051a', '#ff4dd2'); s2.position.set(0, 1.2, 0); s2.material = s2.material.clone(); s2.material.emissive?.set?.(0xff4dd2); g.add(s2);
    const glod = box(0.86, 0.36, 0.02, mat(0xff4dd2, { emissive: 0xff4dd2, emissiveIntensity: 0.6, transparent: true, opacity: 0.35 })); glod.position.set(0, 1.2, -0.02); g.add(glod);
  } else if (typ === 'figurhylla') {
    const tra = mat(0x3b2a1a);
    for (const y of [0.05, 0.55, 1.05, 1.5]) g.add(at(box(0.9, 0.04, 0.3, tra), 0, y, 0));
    for (const x of [-0.44, 0.44]) g.add(at(box(0.03, 1.5, 0.3, tra), x, 0.77, 0));
    for (let i = 0; i < 9; i++) { const f = cyl(0.04, 0.05, 0.16, mat([0xff6b6b, 0x3de3ff, 0xffd43b, 0x7dffb0, 0xb07dff][i % 5]), 8); f.position.set((i % 3 - 1) * 0.25, 0.15 + Math.floor(i / 3) * 0.5, 0); g.add(f); g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), f.material), f.position.x, f.position.y + 0.12, 0)); }
  } else if (typ === 'projektor') {
    g.add(at(box(1.4, 0.04, 0.06, mat(0x333333)), 0, 1.9, 0));
    g.add(at(box(1.3, 0.8, 0.01, mat(0xf2f2f2, { emissive: 0x6a7dff, emissiveIntensity: 0.25 })), 0, 1.45, 0.02));
    for (const x of [-0.65, 0.65]) g.add(at(box(0.04, 1.9, 0.04, mat(0x333333)), x, 0.95, 0));
    g.add(at(box(0.25, 0.1, 0.2, mat(0x1d1d22)), 0, 0.45, 0.6)); g.add(at(box(0.05, 0.4, 0.05, mat(0x333333)), 0, 0.2, 0.6));
  } else if (typ === 'arkad') {
    const kropp = mat(0x2d1b69);
    g.add(at(box(0.7, 1.7, 0.7, kropp), 0, 0.85, 0));
    g.add(at(box(0.6, 0.45, 0.04, mat(0x3de3ff, { emissive: 0x3de3ff, emissiveIntensity: 0.6 })), 0, 1.3, 0.34));
    const panel = box(0.66, 0.06, 0.3, mat(0x1d1d22)); panel.position.set(0, 1.0, 0.42); panel.rotation.x = 0.3; g.add(panel);
    g.add(at(cyl(0.02, 0.02, 0.1, mat(0xff4d4d), 8), -0.15, 1.08, 0.44));
    for (const x of [0.05, 0.13, 0.21]) g.add(at(cyl(0.025, 0.025, 0.02, mat([0xffd43b, 0x7dffb0, 0xff6b6b][Math.round(x * 10) % 3]), 10), x, 1.06, 0.44));
    g.add(at(box(0.66, 0.18, 0.04, mat(0xff4dd2, { emissive: 0xff4dd2, emissiveIntensity: 0.8 })), 0, 1.62, 0.34));
  } else if (typ === 'simrig') {
    const sv = mat(0x1d1d22), rod = mat(0xd63031);
    g.add(at(box(0.6, 0.08, 1.4, sv), 0, 0.04, 0));
    g.add(at(box(0.5, 0.12, 0.5, sv), 0, 0.35, 0.3)); const rygg = box(0.5, 0.75, 0.1, rod); rygg.position.set(0, 0.75, 0.55); rygg.rotation.x = -0.25; g.add(rygg);
    g.add(at(box(0.08, 0.6, 0.08, sv), 0, 0.35, -0.35));
    const ratt = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.025, 8, 20), sv); ratt.position.set(0, 0.7, -0.3); ratt.rotation.x = -0.4; g.add(ratt);
    g.add(at(box(0.9, 0.5, 0.04, mat(0x2d6cdf, { emissive: 0x3a6cff, emissiveIntensity: 0.6 })), 0, 1.0, -0.65));
  } else if (typ === 'biljard') {
    g.add(at(box(2.0, 0.12, 1.1, mat(0x5b3a1a)), 0, 0.78, 0)); g.add(at(box(1.84, 0.02, 0.94, mat(0x1f7a45)), 0, 0.85, 0));
    for (const [x, z] of [[-0.85, -0.4], [0.85, -0.4], [-0.85, 0.4], [0.85, 0.4]]) g.add(at(box(0.12, 0.75, 0.12, mat(0x3b2a1a)), x, 0.375, z));
    for (let i = 0; i < 6; i++) g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), mat([0xffffff, 0xffd43b, 0xd63031, 0x2d6cdf, 0x1d1d22, 0xff9f43][i])), -0.2 + i * 0.08, 0.89, (i % 2) * 0.06));
  } else if (typ === 'jacuzzi') {
    const kant = mat(0xe8e8e8);
    g.add(at(cyl(1.0, 1.0, 0.75, mat(0x6b4a2f), 24), 0, 0.375, 0));
    g.add(at(cyl(1.05, 1.05, 0.08, kant, 24), 0, 0.78, 0));
    const vatten = cyl(0.9, 0.9, 0.04, mat(0x3de3ff, { emissive: 0x2aa8ff, emissiveIntensity: 0.5, transparent: true, opacity: 0.85 }), 24); vatten.position.y = 0.72; vatten.userData.vatten = true; g.add(vatten);
    for (let i = 0; i < 10; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 5), mat(0xffffff, { transparent: true, opacity: 0.8 })); b.position.set(Math.cos(i * 2.4) * 0.6 * Math.random(), 0.75, Math.sin(i * 2.4) * 0.6 * Math.random()); b.userData.bubbla = i; g.add(b); }
  } else if (typ === 'del') {
    const k = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.035, 6, 8), mat(printFarg.del));
    k.rotation.x = Math.PI / 2; k.position.y = 0.04; k.castShadow = true; g.add(k);
  }
  g.userData.typ = typ;
  return g;
}
function skapaByggsats(m) {
  const riktig = skapaRiktig(m);
  if (riktig) { riktig.userData.typ = 'byggsats:' + m; return riktig; }
  const g = new THREE.Group();
  g.add(at(box(0.45, 0.32, 0.45, mat(0xc49a6c)), 0, 0.16, 0));
  const s = skylt(MASKINER[m].ikon, 0.3, 0.3, '#c49a6c', '#222'); s.position.set(0, 0.16, 0.228); g.add(s);
  const s2 = s.clone(); s2.rotation.x = -Math.PI / 2; s2.position.set(0, 0.325, 0); g.add(s2);
  g.userData.typ = 'byggsats:' + m;
  return g;
}
// verktygen och maskindelarna ser ut som de riktiga sakerna
function skapaRiktig(m) {
  let g = null;
  const kopia = (o) => { const c = o.clone(true); c.visible = true; c.position.set(0, 0, 0); c.rotation.set(0, 0, 0); c.traverse((x) => { x.visible = x.material !== traffMat; }); return c; };
  if (m === 'grip') { g = new THREE.Group(); const c = kopia(gripVerktyg); c.rotation.y = Math.PI / 2; g.add(c); }
  else if (m === 'magnet') { g = new THREE.Group(); const c = kopia(magnetVerktyg); c.rotation.y = Math.PI / 2; g.add(c); }
  else if (m === 'kvarnmotor' || m === 'turbomotor' || m === 'jetmotor') {
    g = new THREE.Group(); const c = kopia(motor);
    const bort = []; c.traverse((x) => { if ((x.userData.tagg === 'turbo' && m === 'kvarnmotor') || (x.userData.tagg === 'jet' && m !== 'jetmotor') || x.isLight) bort.push(x); });
    bort.forEach((x) => x.parent?.remove(x));
    if (m === 'jetmotor') c.traverse((x) => { if (x === c) return; if (x.isMesh && x.material?.blending === THREE.AdditiveBlending) x.visible = true; });
    g.add(c);
  }
  else if (SPOL_NIVA[m]) {
    const fejk = { mesh: new THREE.Group(), spolNiva: SPOL_NIVA[m], fil: SPOL_MAX[SPOL_NIVA[m]] }; fejk.mesh.userData.sk = 1;
    ritaSpolstall(fejk); g = new THREE.Group(); fejk.spolstall.position.set(0, 0, 0); g.add(fejk.spolstall);
  }
  else if (m === 'gamingbod') { g = new THREE.Group(); byggBod(g); g.traverse((x) => { if (x.isLight) x.parent.remove(x); }); }
  else if (m === 'matarband') { g = new THREE.Group(); const c = kopia(matarband); c.traverse((x) => { if (x.isSprite) x.visible = false; if (x.parent === c.userData?.hog) x.visible = true; }); c.position.z = 1.0; g.add(c); }
  else if (m === 'stortratt') { g = new THREE.Group(); const c = kopia(storTratt); c.position.y = -1.0; g.add(c); }
  else if (m === 'rullstall') { g = byggRullstall(4); }
  else if (m === 'korg') {
    g = new THREE.Group();
    const flata = mat(0xb5824a), mork = mat(0x6b4a2f);
    g.add(at(box(0.36, 0.46, 0.22, flata), 0, 0.23, 0));
    for (let y = 0.06; y < 0.46; y += 0.08) g.add(at(box(0.37, 0.02, 0.23, mork), 0, y, 0));
    for (const x of [-0.1, 0.1]) { const rem = box(0.04, 0.42, 0.02, mat(0x333333)); rem.position.set(x, 0.24, 0.12); g.add(rem); }
    g.add(at(box(0.38, 0.03, 0.24, mork), 0, 0.47, 0));
  } else if (m === 'vaggar') {
    // en enda isolerskiva, inte hela huset
    g = new THREE.Group();
    g.add(at(box(0.62, 0.9, 0.06, mat(0xe8dcc0, { roughness: 0.95 })), 0, 0.45, 0));
    for (const y of [0.22, 0.45, 0.68]) g.add(at(box(0.63, 0.012, 0.062, mat(0xcdbf9f)), 0, y, 0));
    g.add(at(box(0.012, 0.9, 0.062, mat(0xcdbf9f)), 0, 0.45, 0));
  } else if (MASKINER[m]?.hem && HEM_DELAR[m]) { g = new THREE.Group(); const c = HEM_DELAR[m].clone(true); c.visible = true; c.position.set(0, 0, 0); c.rotation.set(0, 0, 0); c.traverse((x) => { x.visible = true; }); g.add(c);
  } else if (m === 'karra' || m === 'bord' || m === 'sol' || m === 'bank' || SKRIVARTYP[m]) g = skapaMaskin(m);
  return g;
}
function skapaSkrivare(gen) {
  const g = new THREE.Group();
  const f = mat([0x2d7fd6, 0xf28c28, 0xd63a2f][gen - 1]);
  const sk = [1, 1.35, 1.9][gen - 1];
  const B = 0.5 * sk;
  g.add(at(box(B, 0.08, B, mat(0x333333)), 0, 0.04, 0));
  for (const x of [-B / 2 + 0.03, B / 2 - 0.03]) g.add(at(box(0.05, 0.6 * sk, 0.05, f), x, 0.3 * sk, -B / 2 + 0.05));
  const brygga = box(B, 0.05, 0.06, f); brygga.position.set(0, 0.58 * sk, -B / 2 + 0.05); g.add(brygga);
  const arm = new THREE.Group();
  arm.add(box(B - 0.06, 0.04, 0.04, f));
  const munstycke = box(0.07, 0.09, 0.07, mat(gen === 1 ? 0x555555 : 0x222222));
  munstycke.position.y = -0.05; arm.add(munstycke);
  arm.position.set(0, 0.4 * sk, 0); g.add(arm);
  const bad = new THREE.Group(); bad.position.set(0, 0.1, 0); g.add(bad);
  const badPlatta = box(B * 0.8, 0.02, B * 0.8, mat(gen === 1 ? 0x1f1f1f : 0x2a2a3a)); badPlatta.position.y = 0.09; g.add(badPlatta);
  { const s = skylt('SKRIVARE ' + STORLEK_NAMN[gen], 0.3 * sk, 0.08 * sk, ['#2d7fd6', '#f28c28', '#d63a2f'][gen - 1], '#fff'); s.position.set(0, 0.06, B / 2 + 0.002); g.add(s); }
  const ledMat = new THREE.MeshStandardMaterial({ color: 0x333333, emissive: 0x000000, emissiveIntensity: 1.5 });
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.025 * sk, 10, 8), ledMat); led.position.set(B / 2 - 0.03, 0.62 * sk, -B / 2 + 0.05); g.add(led);
  traffYta(g, B, 0.62 * sk, B);
  g.userData = { arm, munstycke, bad, sk, gen, ledMat };
  return g;
}
function skapaMaskin(m) {
  const g = new THREE.Group();
  if (m === 'bord') {
    g.add(at(box(1.8, 0.08, 0.9, mat(0xc9a36b)), 0, 0.8, 0));
    for (const [x, z] of [[-0.82, -0.38], [0.82, -0.38], [-0.82, 0.38], [0.82, 0.38]]) g.add(at(box(0.07, 0.8, 0.07, mat(0x8a6a3f)), x, 0.4, z));
  } else if (m === 'sol') {
    g.add(at(box(0.08, 0.9, 0.08, mat(0x777777)), 0, 0.45, 0));
    const panel = box(1.4, 0.05, 0.9, mat(0x1c3f8c, { roughness: 0.3, metalness: 0.4 }));
    panel.position.y = 0.95; panel.rotation.x = -0.5; g.add(panel);
    const ram2 = box(1.45, 0.03, 0.95, mat(0xcccccc)); ram2.position.y = 0.93; ram2.rotation.x = -0.5; g.add(ram2);
  } else if (m === 'bank') {
    g.add(at(box(0.6, 0.9, 0.45, mat(0x2b2f36)), 0, 0.45, 0));
    for (let i = 0; i < 3; i++) g.add(at(box(0.12, 0.6, 0.02, mat(0x7dffb0, { emissive: 0x7dffb0, emissiveIntensity: 0.5 })), -0.17 + i * 0.17, 0.45, 0.23));
    g.add(at(box(0.62, 0.05, 0.47, mat(0xf1c40f)), 0, 0.92, 0));
  } else if (SKRIVARTYP[m]) {
    return skapaSkrivare(SKRIVARTYP[m]);
  } else if (m === 'karra') {
    const gron = mat(0x2f8f4e), stal = mat(0x8a949e, { metalness: 0.5, roughness: 0.5 });
    const korg = new THREE.Group();
    korg.add(at(box(0.62, 0.05, 0.78, gron), 0, 0.42, 0));
    for (const x of [-0.33, 0.33]) { const v = box(0.05, 0.32, 0.8, gron); v.position.set(x, 0.56, 0); v.rotation.z = x > 0 ? -0.25 : 0.25; korg.add(v); }
    const fram = box(0.7, 0.32, 0.05, gron); fram.position.set(0, 0.56, -0.42); fram.rotation.x = 0.35; korg.add(fram);
    korg.add(at(box(0.7, 0.28, 0.05, gron), 0, 0.55, 0.4));
    g.add(korg);
    const hjul = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.06, 8, 18), mat(0x222222)); hjul.rotation.y = Math.PI / 2; hjul.position.set(0, 0.2, -0.62); hjul.castShadow = true; g.add(hjul); g.userData.hjul = hjul;
    for (const x of [-0.24, 0.24]) {
      const h = box(0.04, 0.04, 1.4, stal); h.position.set(x, 0.38, 0.05); h.rotation.x = -0.12; g.add(h);
      g.add(at(box(0.05, 0.05, 0.16, mat(0x333333)), x, 0.45, 0.74));
      const ben = box(0.04, 0.34, 0.04, stal); ben.position.set(x, 0.17, 0.28); g.add(ben);
    }
    g.userData.last = new THREE.Group(); g.userData.last.position.set(0, 0.5, 0); g.add(g.userData.last);
  }
  g.userData.typ = m;
  return g;
}
function skapaSak(typ) {
  if (typ === 'skrap') return skapaSkrap(0);
  if (typ === 'karra') return skapaMaskin('karra');
  if (typ === 'magnet') { const m = skapaRiktig('magnet'); m.userData.typ = 'magnet'; return m; }
  if (typ.startsWith('byggsats:')) return skapaByggsats(typ.split(':')[1]);
  if (VAROR[typ] || typ === 'del') return skapaVara(typ);
  return skapaMaskin(typ);
}
const arPlacerbar = (typ) => typ?.startsWith('byggsats:') && !MASKINER[typ.split(':')[1]].verktyg && !MASKINER[typ.split(':')[1]].monteras || !!VAROR[typ]?.placerbar;
const placeringsTyp = (typ) => typ.startsWith('byggsats:') ? typ.split(':')[1] : typ;
const info = (typ) => VAROR[typ] || MASKINER[typ];

// ---------- Skräp på tomten ----------
const skrapLista = [];
function skalaTraff(s) { const t = SKRAP_TRAFF[niva()]; s.userData.traff.scale.set(t, 1, t); }
function uppdateraSkrapTraff() { skrapLista.forEach(skalaTraff); }
function laggSkrap(x, z, variant, rot) {
  const s = skapaSkrap(variant);
  s.position.set(x, 0.01 + tippHojd(x, z), z); s.rotation.y = rot;
  s.userData.skrap = [x, z, variant, rot];
  scen.add(s); skrapLista.push(s); skalaTraff(s);
  interaktor.registrera(s, {
    text: () => !kanLyfta(s) ? `🔒 ${SKRAP_SORTER[s.userData.sort].namn} (${rullar(s.userData.gram)}) – för tung! Du behöver en skottkärra` : s.userData.tung ? (valdKarra() && karraFull(s.userData.gram) ? 'Kärran är full' : `🛒 Lasta ${SKRAP_SORTER[s.userData.sort].namn.toLowerCase()} i skottkärran (${rullar(s.userData.gram)})`) : valdKarra() ? (karraFull(s.userData.gram) ? 'Kärran är full' : `🛒 Lasta i kärran (${rullar(s.userData.gram)})`) : (hand.full ? 'Fullt i famnen' : niva() === 3 ? 'Håll inne – magneten drar' : `Plocka ${SKRAP_SORTER[s.userData.sort].namn.toLowerCase()} (${rullar(s.userData.gram)})`),
    kanAktivera: () => (S.tippNyckel || !paTippen(s.position.x, s.position.z)) && kamera.position.distanceTo(s.position) <= SKRAP_RACKVIDD[niva()] + 1.6,
    aktivera: () => plockaSkrap(s),
  });
}
const slumpVariant = () => Math.floor(Math.random() * 1000);
function slumpPlats() {
  for (let f = 0; f < 50; f++) {
    const x = (Math.random() * 2 - 1) * (TOMT - 1), z = (Math.random() * 2 - 1) * (TOMT - 1);
    if (Math.hypot(x - LAGER.x, z - LAGER.z + 1.5) < 7) continue;
    return [x, z];
  }
  return [TOMT - 2, TOMT - 2];
}
function tippPlats() {
  const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * (TIPP.r - 0.5);
  return [TIPP.x + Math.cos(a) * r, TIPP.z + Math.sin(a) * r];
}
const paTippen = (x, z) => Math.hypot(x - TIPP.x, z - TIPP.z) < TIPP.r + 0.5;
if (Array.isArray(S.skrap)) S.skrap.forEach(([x, z, v, r]) => laggSkrap(x, z, v, r));
else {
  for (let i = 0; i < ANTAL_SKRAP; i++) { const [x, z] = slumpPlats(); laggSkrap(x, z, slumpVariant(), Math.random() * 6.3); }
  for (let i = 0; i < TIPP_START; i++) { const [x, z] = tippPlats(); laggSkrap(x, z, slumpVariant(), Math.random() * 6.3); }
}

const skrapMarkMat = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'); g.fillStyle = '#ffd43b'; g.beginPath(); g.moveTo(32, 60); g.lineTo(8, 18); g.lineTo(56, 18); g.closePath(); g.fill();
  g.strokeStyle = '#7a5a00'; g.lineWidth = 4; g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return new THREE.SpriteMaterial({ map: t, depthTest: false });
})();
const skrapMarkorer = [];
function uppdateraSkrapMarkorer() {
  const visa = STEG[S.steg]?.text === STEG.find((x) => x.lapp === 'gard')?.text && gardSkrap() <= 10;
  const lista = visa ? skrapLista.filter((x) => !paTippen(x.position.x, x.position.z) && Math.abs(x.position.x) <= TOMT && Math.abs(x.position.z) <= TOMT) : [];
  while (skrapMarkorer.length < lista.length) { const sp = new THREE.Sprite(skrapMarkMat); sp.scale.setScalar(0.5); sp.renderOrder = 997; scen.add(sp); skrapMarkorer.push(sp); }
  const t = performance.now() / 1000;
  skrapMarkorer.forEach((sp, i) => { const s2 = lista[i]; sp.visible = !!s2; if (s2) sp.position.set(s2.position.x, 1.1 + Math.sin(t * 3 + i) * 0.12, s2.position.z); });
}
function autoPlock() {
  if (!skrapLage()) return;
  if (hand.saker.length >= BARA_SKRAP[niva()]) return;
  for (const s of skrapLista) {
    if (!S.tippNyckel && paTippen(s.position.x, s.position.z)) continue;
    if (!kanLyfta(s)) continue;
    if (Math.hypot(s.position.x - spelare.pos.x, s.position.z - spelare.pos.z) < AUTO_PLOCK_NIVA[niva()]) { plockaSkrap(s, true); return; }
  }
}
const karraGram = () => S.karraLast.reduce((a, v) => a + SKRAP_SORTER[skrapSort(v)].gram, 0);
const karraFull = (g = 0) => karraGram() + Math.max(g, 1) > KARRA_KAP;
const kanLyfta = (s) => !s.userData.tung || S.karra;
function plockaSkrap(s, tyst = false) {
  if (!kanLyfta(s)) { if (!tyst) varna('tung'); return; }
  if (s.userData.tung && !valdKarra()) {
    if (tyst) return;
    if (!valjTyp('karra')) { ui.toast('🛒 Skottkärran ligger i kistan i skjulet – lägg den i verktygsraden', 'fel'); ljud.fel(); return; }
  }
  if (valdKarra()) {
    if (karraFull(s.userData.gram)) { if (!tyst) varna('karra'); return; }
    scen.remove(s); interaktor.avregistrera(s);
    skrapLista.splice(skrapLista.indexOf(s), 1);
    if (paTippen(s.position.x, s.position.z)) S.stat.tipp++;
    if (s.userData.tung) S.stat.tunga = (S.stat.tunga || 0) + 1;
    S.karraLast.push(s.userData.variant ?? 0); ritaKarraLast(); ljud.stor();
    S.stat.plockat++; sparaSnart(); return;
  }
  if (!skrapLage()) { if (tyst) return; byt(0); }
  hand.kapacitet = BARA_SKRAP[niva()];
  if (hand.full) { if (!tyst) varna('full'); return; }
  scen.remove(s); interaktor.avregistrera(s);
  skrapLista.splice(skrapLista.indexOf(s), 1);
  if (paTippen(s.position.x, s.position.z)) S.stat.tipp++;
  if (s.userData.tung) S.stat.tunga = (S.stat.tunga || 0) + 1;
  hand.plocka(s); ljud.plock();
  S.stat.plockat++; sparaSnart(); plockPop(s.userData.gram);
}

// ---------- Förrådet (inventory) ----------
const namnFor = (typ) => typ.startsWith('byggsats:') ? MASKINER[typ.split(':')[1]].namn : (VAROR[typ] || MASKINER[typ])?.namn || typ;
const ikonFor = (typ) => typ.startsWith('byggsats:') ? MASKINER[typ.split(':')[1]].ikon : (VAROR[typ] || MASKINER[typ])?.ikon || '❔';
const antalIForrad = () => Object.values(S.forrad).reduce((a, b) => a + b, 0);
const antalInv = (typ) => (S.forrad[typ] || 0) + S.hotbar.reduce((a, p) => a + (p?.typ === typ ? p.n : 0), 0);
const valdTyp = () => S.vald > 0 ? S.hotbar[S.vald]?.typ || null : null;
const valdKarra = () => valdTyp() === 'karra';
const forbrukbar = (typ) => typ !== 'karra';
const kistPlatser = (f = S.forrad) => Object.values(f).reduce((a, n) => a + Math.ceil(n / STACK), 0);
const kistanRymmer = (typ, n = 1) => kistPlatser({ ...S.forrad, [typ]: (S.forrad[typ] || 0) + n }) <= KISTA_PLATSER;
const radenRymmer = (typ) => S.hotbar.some((x, j) => j > 0 && (!x || x.typ === typ));
const harRumFor = (typ, n = 1) => radenRymmer(typ) || kistanRymmer(typ, n);
function laggIForrad(typ, n = 1, tvinga = false) {
  if (!tvinga && !kistanRymmer(typ, n)) return false;
  S.forrad[typ] = (S.forrad[typ] || 0) + n; sparaSnart(); ritaHotbar(); return true;
}
// nya saker hamnar i verktygsraden – är den full går de till kistan i skjulet
function laggTill(typ, n = 1) {
  let i = S.hotbar.findIndex((x, j) => j > 0 && x?.typ === typ);
  if (i < 0) i = S.hotbar.findIndex((x, j) => j > 0 && !x);
  if (i < 0) { if (!laggIForrad(typ, n, typ === 'karra' || typ === 'magnet')) { ui.toast('📦 Både verktygsraden och kistan är fulla – sälj eller ställ ut något', 'fel'); ljud.fel(); return 'full'; } return 'kista'; }
  if (!S.hotbar[i]) S.hotbar[i] = { typ, n: 0 };
  S.hotbar[i].n += n;
  ritaHand(); ritaHotbar(); sparaSnart();
  return i;
}
// ta bort en sak: helst från den valda platsen, sedan verktygsraden, sist kistan
function taBortInv(typ, n = 1) {
  if (antalInv(typ) < n) return false;
  const ordning = [S.vald, ...S.hotbar.keys()];
  for (const i of ordning) {
    const p = S.hotbar[i];
    while (n > 0 && p?.typ === typ && p.n > 0) { p.n--; n--; }
    if (p && p.n <= 0) S.hotbar[i] = null;
  }
  while (n > 0 && S.forrad[typ]) { S.forrad[typ]--; n--; if (!S.forrad[typ]) delete S.forrad[typ]; }
  if (!S.hotbar[S.vald]) S.vald = 0;
  ritaHand(); ritaHotbar(); sparaSnart();
  return true;
}
const taBortVald = () => { const t = valdTyp(); return t ? taBortInv(t) : false; };
// välj en plats i verktygsraden – det valda syns i handen
function byt(i) {
  i = Math.max(0, Math.min(HOTBAR - 1, i));
  if (i === S.vald) return;
  S.vald = i; tomhant = false;
  hand.kapacitet = BARA_SKRAP[niva()]; uppdateraSkrapTraff();
  if (valdKarra() && hand.saker.length) {
    let n = 0;
    while (hand.saker.length && !karraFull(hand.overst.userData.gram)) { const x = hand.lagg(); S.karraLast.push(x.userData.variant ?? 0); n++; }
    if (n) ui.toast(`🛒 ${n} skräp från famnen i kärran`, 'bra');
  }
  ritaHand(); ritaHotbar(); ljud.plock(); sparaSnart();
  visaHotbarNamn();
}
function bytSteg(d) {
  if (!S.tipsHjul) { S.tipsHjul = true; document.querySelector('.hud-hjultips')?.remove(); sparaSnart(); }
  for (let k = 1; k <= HOTBAR; k++) {
    const i = (S.vald + d * k + HOTBAR * 4) % HOTBAR;
    if (i === 0 || S.hotbar[i]) { byt(i); return; }
  }
}
const valjTyp = (typ) => { const i = S.hotbar.findIndex((x) => x?.typ === typ); if (i > 0) byt(i); return i > 0; };

// det valda föremålet i handen (verktyget/famnen visas av sig själv)
const foremal = new THREE.Group(); foremal.position.set(0.34, -0.3, -0.75); kamera.add(foremal);
// skottkärran rullar på riktigt i världen: handtagen följer händerna, hjulet släpar efter och kärran svänger runt hjulet
const karraFP = skapaMaskin('karra');
const karraPivot = new THREE.Group(); karraPivot.rotation.order = 'YXZ'; karraPivot.add(karraFP);
karraFP.position.set(0, -0.2, 0.62);            // hjulaxeln i pivotens origo
karraPivot.visible = false; scen.add(karraPivot);
Object.defineProperty(karraFP, 'visible', { get: () => karraPivot.visible, set: (v) => { if (v && !karraPivot.visible) karraStart = true; karraPivot.visible = v; } });
let karraStart = true;
const KARRA_LANGD = 1.25, KARRA_LYFT = -0.24, KARRA_STYR = 4.5;   // styr = hur snabbt armarna vrider kärran rätt (rad/s)
const karraHjul = new THREE.Vector3();
function uppdateraKarra(dt) {
  if (!karraPivot.visible) return;
  const fram = spelare.riktning(new THREE.Vector3()); fram.y = 0; fram.normalize();
  const hander = new THREE.Vector3(spelare.pos.x + fram.x * 0.45, 0, spelare.pos.z + fram.z * 0.45);
  if (karraStart) { karraHjul.copy(hander).addScaledVector(fram, KARRA_LANGD); karraStart = false; }
  const forut = karraHjul.clone();
  // kärran följer med när du svänger – med lite eftersläp så att den känns tung
  const d = karraHjul.clone().sub(hander); d.y = 0; if (d.lengthSq() < 1e-6) d.copy(fram); d.normalize();
  const vinkel = Math.atan2(d.x * fram.z - d.z * fram.x, d.dot(fram));
  const vrid = Math.sign(vinkel) * Math.min(Math.abs(vinkel), KARRA_STYR * dt * (1 + Math.abs(vinkel) * 2));
  d.applyAxisAngle(new THREE.Vector3(0, 1, 0), -vrid);
  karraHjul.copy(hander).addScaledVector(d, KARRA_LANGD);
  const rull = karraHjul.distanceTo(forut);
  karraFP.userData.hjul.rotation.x += rull / 0.2 * Math.sign(d.dot(karraHjul.clone().sub(forut)) || 1);
  karraPivot.position.set(karraHjul.x, 0.2, karraHjul.z);
  karraPivot.rotation.y = Math.atan2(-d.x, -d.z);
  karraPivot.rotation.x = KARRA_LYFT + Math.sin(performance.now() / 180) * 0.012 * spelare.rorelse;
}
function passaIn(m, storlek) {
  m.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(m), v = b.getSize(new THREE.Vector3());
  m.scale.multiplyScalar(storlek / Math.max(v.x, v.y, v.z, 0.01));
  m.updateMatrixWorld(true);
  const c = new THREE.Box3().setFromObject(m).getCenter(new THREE.Vector3());
  m.position.sub(c);
  const yttre = new THREE.Group(); yttre.add(m); yttre.userData.typ = m.userData.typ;
  return yttre;
}
let tomhant = false;
function ritaHand() {
  while (foremal.children.length) foremal.remove(foremal.children[0]);
  const t = tomhant ? null : valdTyp();
  hand.grupp.visible = skrapLage() && !tomhant;
  karraFP.visible = t === 'karra';
  if (t && t !== 'karra' && t !== 'magnet') {
    // storleken i famnen följer sakens riktiga storlek – stora saker skymmer sikten och får bökas runt
    const sak = skapaSak(t); sak.updateMatrixWorld(true);
    const v = new THREE.Box3().setFromObject(sak).getSize(new THREE.Vector3()), dim = Math.max(v.x, v.y, v.z);
    const st = Math.max(0.16, Math.min(0.85, dim * 0.75)), stor = st > 0.4;
    const m = passaIn(sak, st); m.rotation.set(stor ? 0.1 : 0.25, stor ? 0.25 : 0.5, 0); foremal.add(m);
    foremal.position.set(stor ? 0.16 : 0.34, stor ? -0.36 : -0.3, stor ? -0.82 : -0.75);
  }
  ritaKarraLast();
}
function ritaKarraLast() {
  const g = karraFP.userData.last;
  while (g.children.length) g.remove(g.children[0]);
  S.karraLast.forEach((v, i) => {
    // verklig storlek – en kajak sticker ut ordentligt
    const m = skapaSkrap(v), tung = SKRAP_SORTER[skrapSort(v)].tung;
    m.traverse((o) => { if (o.material === traffMat) o.visible = false; });
    if (tung) { m.position.set(0, 0.05 + i * 0.03, 0); m.rotation.y = Math.PI / 2 + (i % 2) * 0.3; }
    else { m.position.set((i % 3 - 1) * 0.17, 0.02 + Math.floor(i / 9) * 0.1, (Math.floor(i / 3) % 3 - 1) * 0.22); m.rotation.y = i * 1.3; }
    g.add(m);
  });
}

// ikoner som riktiga små bilder av sakerna, ritade en gång
const ikonCache = {};
let ikonR = null, ikonScen = null, ikonKam = null;
function ikonBild(typ) {
  if (ikonCache[typ] !== undefined) return ikonCache[typ];
  try {
    if (!ikonR) {
      ikonR = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true }); ikonR.setSize(96, 96);
      ikonScen = new THREE.Scene();
      ikonScen.add(new THREE.HemisphereLight(0xffffff, 0x445566, 2.2));
      const l = new THREE.DirectionalLight(0xffffff, 2); l.position.set(2, 3, 2); ikonScen.add(l);
      ikonKam = new THREE.PerspectiveCamera(30, 1, 0.01, 50);
    }
    const m = passaIn(skapaSak(typ), 1);
    m.traverse((o) => { if (o.material === traffMat) o.visible = false; });
    m.rotation.y = typ === 'karra' ? 2.4 : 0.6;
    ikonScen.add(m);
    ikonKam.position.set(1.5, 1.2, 1.9); ikonKam.lookAt(0, 0, 0);
    ikonR.render(ikonScen, ikonKam);
    ikonCache[typ] = ikonR.domElement.toDataURL();
    ikonScen.remove(m);
  } catch { ikonCache[typ] = null; }
  return ikonCache[typ];
}
const ikonHtml = (typ, stor = 50) => { const b = ikonBild(typ); return b ? `<img src="${b}" width="${stor}" height="${stor}" alt="">` : ik('lada'); };

// ---------- Placerade saker (fritt bygge) ----------
const placerade = []; // { id, typ, x, z, r, pa, mesh }
const skrivare = [];  // { id, gen, mesh, jobb, prog, klar, visning }

function harPlacerat(typ) { return placerade.some((p) => p.typ === typ); }

// ytor: småsaker kan ställas ovanpå (kruka på pallen, högtalare på bordet …)
const YTOR = { pall: 0.475, bord: 0.84, kyl: 0.85, gamingbord: 0.765 };
const SMASAK = (typ) => !!VAROR[typ] && (VAROR[typ].radie || 0.4) <= 0.35 && !YTOR[typ];
function placera(p, nytt = true) {
  const typ = p.typ;
  const mesh = SKRIVARTYP[typ] ? skapaSkrivare(SKRIVARTYP[typ]) : (VAROR[typ] ? skapaVara(typ) : skapaMaskin(typ));
  if (p.pa) {
    const bord = placerade.find((b) => b.id === p.pa);
    if (!bord) return null;
    bord.mesh.add(mesh); mesh.position.set(0, YTOR[bord.typ] ?? 0.84, 0); mesh.rotation.y = vinkel(p); bord.har = p.id;
  } else {
    mesh.position.set(p.x, p.hy || 0, p.z); mesh.rotation.y = vinkel(p); scen.add(mesh);
  }
  // fågelholken sitter uppe på en stolpe – fåglarna vill ha det högt
  if (typ === 'fagelholk' && !p.pa) {
    mesh.children.forEach((c) => { c.position.y += 1.25; });
    const st = box(0.07, 1.3, 0.07, mat(0x7a5a3a, { roughness: 0.9 })); st.position.y = 0.65; mesh.add(st);
    const fot = box(0.22, 0.04, 0.22, mat(0x5a4029)); fot.position.y = 0.02; mesh.add(fot);
  }
  p.mesh = mesh;
  placerade.push(p);
  if (SKRIVARTYP[typ]) {
    laggTillSkrivare(p.id, SKRIVARTYP[typ], mesh, S.skrivare[p.id]);
  } else {
    interaktor.registrera(mesh, {
      text: () => typ === 'kyl' && KYLBAR.has(valdTyp()) ? `🧊 Ställ in ${info(valdTyp()).namn.toLowerCase()} i kylen (den möglar inte där)` : typ === 'kyl' && kylAntal() && !valdTyp()?.startsWith('burk_') ? `Kylen · ${kylAntal()} matlådor inne · ta ut en (eller plocka upp kylen när den är tom)` : p.har ? `${info(typ).namn} (det står något på den)` : `Plocka upp ${info(typ).namn.toLowerCase()}`,
      aktivera: () => { if (typ === 'kyl' && KYLBAR.has(valdTyp())) return stallIKyl(); if (typ === 'kyl' && kylAntal()) return taUrKyl(); plockaUppPlacerad(p); },
    });
  }
  if (nytt) { S.placerade.push(sparbar(p)); sparaSnart(); }
  uppdateraHinder();
  return p;
}
const sparbar = (p) => ({ id: p.id, typ: p.typ, x: p.x, z: p.z, r: p.r, r8: p.r8 ?? null, pa: p.pa || null, ...(p.hy ? { hy: p.hy } : {}) });
const vinkel = (p) => (p.r8 != null ? p.r8 * Math.PI / 4 : (p.r || 0) * Math.PI / 2);

function plockaUppPlacerad(p) {
  if (!harRumFor(VAROR[p.typ] ? p.typ : 'byggsats:' + p.typ)) { ui.toast('📦 Ingen plats – verktygsraden och kistan är fulla', 'fel'); ljud.fel(); return; }
  if (p.har) { ui.toast('Ta bort det som står ovanpå först', 'fel'); ljud.fel(); return; }
  if (p.pa && !SKRIVARTYP[p.typ]) { const yta = placerade.find((b) => b.id === p.pa); if (yta) yta.har = null; }
  if (SKRIVARTYP[p.typ]) {
    const sk = skrivare.find((s) => s.id === p.id);
    if (sk.jobb || sk.klar) { ui.toast('Skrivaren jobbar – vänta tills den är tom', 'fel'); ljud.fel(); return; }
    if (sk.fil >= RULLE) { const n = Math.floor(sk.fil / RULLE); if (laggTill('rulle', n) === 'full') laggIForrad('rulle', n, true); }
    skrivare.splice(skrivare.indexOf(sk), 1); delete S.skrivare[p.id];
    const bord = placerade.find((b) => b.id === p.pa); if (bord) bord.har = null;
  }
  p.mesh.parent.remove(p.mesh); interaktor.avregistrera(p.mesh);
  placerade.splice(placerade.indexOf(p), 1);
  S.placerade = S.placerade.filter((x) => x.id !== p.id);
  const t = VAROR[p.typ] ? p.typ : 'byggsats:' + p.typ;
  const vart = laggTill(t); ljud.plock(); if (vart === 'kista') ui.toast(vart === 'kista' ? `📦 ${namnFor(t)} → kistan i skjulet (raden är full)` : `${ikonFor(t)} ${namnFor(t)} i verktygsraden`, 'bra');
  uppdateraHinder(); sparaSnart();
}

// sladdar: allt som drar eller ger ström kopplas till batteriet vid cykeln
const ELDRIVNA = { sol: 0.35, bank: 0.5, skrivare2: 0.9, skrivare3: 1.3 };
const kablar = [];
const kabelMat = mat(0x1e1e1e);
function uppdateraKablar() {
  kablar.forEach((k) => { scen.remove(k); k.geometry.dispose(); }); kablar.length = 0;
  const batt = batteri.position;
  for (const p of placerade) {
    if (!(p.typ in ELDRIVNA)) continue;
    const fran = new THREE.Vector3(p.x, ELDRIVNA[p.typ], p.z);
    const mot = new THREE.Vector3(batt.x - fran.x, 0, batt.z - fran.z).normalize();
    const punkter = [
      fran,
      new THREE.Vector3(fran.x + mot.x * 0.3, 0.03, fran.z + mot.z * 0.3),
      new THREE.Vector3((fran.x + batt.x) / 2 + mot.z * 0.6, 0.03, (fran.z + batt.z) / 2 - mot.x * 0.6),
      new THREE.Vector3(batt.x - mot.x * 0.35, 0.03, batt.z - mot.z * 0.35),
      new THREE.Vector3(batt.x, 0.3, batt.z),
    ];
    const k = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(punkter), 48, 0.022, 6), kabelMat);
    k.castShadow = true; scen.add(k); kablar.push(k);
  }
}
function uppdateraHinder() {
  if (batteriKlart) uppdateraKablar();
  spelare.stegHojd = 0.3;   // man kliver upp för trappsteg (huset på ängen)
  spelare.hinder = [...fasta.map((f) => f.box), ...tippHinder, ...skjulHinder, ...(S.tippNyckel ? [] : [grindHinder]), ...(S.mark?.agt?.includes('huset') ? husHinder : [])];
  for (const p of placerade) {
    if (p.pa || !['bord', 'sol', 'bank'].includes(p.typ)) continue;
    p.mesh.updateMatrixWorld(true);
    spelare.hinder.push(new THREE.Box3().setFromObject(p.mesh));
  }
}

// ---------- Skrivare ----------
// spolstället bredvid skrivaren: fler spolar ju större hållare
const SPOL_FARG = [FIL1];
// en riktig filamentspole: svarta gavlar, lindat filament i färg (med lindningsränder) och nav med hål
function filamentSpole(farg, R = 0.09, B = 0.07, extra = {}) {
  const g = new THREE.Group();
  for (const z of [-B / 2, B / 2]) { const f = cyl(R, R, 0.008, mat(0x2a2a2e, { roughness: 0.5 }), 20); f.rotation.x = Math.PI / 2; f.position.z = z; g.add(f); }
  const c = document.createElement('canvas'); c.width = 64; c.height = 64; const x = c.getContext('2d');
  x.fillStyle = '#' + new THREE.Color(farg).getHexString(); x.fillRect(0, 0, 64, 64);
  for (let i = 0; i < 64; i += 4) { x.fillStyle = 'rgba(0,0,0,.18)'; x.fillRect(0, i, 64, 1.5); x.fillStyle = 'rgba(255,255,255,.12)'; x.fillRect(0, i + 2, 64, 1); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const lind = cyl(R * 0.86, R * 0.86, B - 0.01, new THREE.MeshStandardMaterial({ map: t, roughness: 0.45, ...extra }), 20); lind.rotation.x = Math.PI / 2; g.add(lind);
  const nav = cyl(R * 0.32, R * 0.32, B + 0.004, mat(0xd8d8d8), 12); nav.rotation.x = Math.PI / 2; g.add(nav);
  const hal = cyl(R * 0.14, R * 0.14, B + 0.01, mat(0x111111), 10); hal.rotation.x = Math.PI / 2; g.add(hal);
  g.userData.lindning = lind;
  return g;
}
function ritaSpolstall(sk) {
  if (sk.spolstall) sk.mesh.remove(sk.spolstall);
  const platser = SPOL_MAX[sk.spolNiva || 0] / RULLE, perRad = 4, rader = Math.ceil(platser / perRad);
  const g = new THREE.Group(), B = 0.5 * (sk.mesh.userData.sk || 1), ram = mat(0x555555);
  const h = 0.25 + rader * 0.21;
  for (const z of [-0.36, 0.36]) g.add(at(box(0.04, h, 0.04, ram), 0, h / 2, z));
  g.add(at(box(0.3, 0.03, 0.8, ram), 0, 0.015, 0));
  const spolar = [];
  for (let i = 0; i < platser; i++) {
    const rad = Math.floor(i / perRad), kol = i % perRad, y = 0.2 + rad * 0.21, z = -0.27 + kol * 0.18;
    if (kol === 0) { const ax = cyl(0.012, 0.012, 0.74, mat(0x999999), 6); ax.rotation.x = Math.PI / 2; ax.position.y = y; g.add(ax); }
    const sp = filamentSpole(SPOL_FARG[i % SPOL_FARG.length]); sp.position.set(0, y, z); g.add(sp);
    spolar.push(sp);
  }
  g.userData.spolar = spolar; g.userData.visar = -1;
  g.position.set(B / 2 + 0.32, 0, 0); sk.mesh.add(g); sk.spolstall = g;
  visaSpolar(sk);
}
// varje rulle i skrivaren syns på stället – den sista krymper när den förbrukas
function visaSpolar(sk) {
  const g = sk.spolstall; if (!g || g.userData.visar === sk.fil) return; g.userData.visar = sk.fil;
  g.userData.spolar.forEach((sp, i) => {
    const kvar = Math.max(0, Math.min(1, sk.fil / RULLE - i));
    sp.visible = kvar > 0.02; const r = 0.4 + 0.6 * kvar; sp.userData.lindning.scale.set(r, 1, r);
  });
}
function laggTillSkrivare(id, gen, mesh, sparat) {
  const sk = { id, gen, mesh, jobb: null, prog: 0, klar: null, visning: null, vantar: '', fil: 0 };
  if (sparat) Object.assign(sk, { jobb: sparat.jobb, prog: sparat.prog || 0, klar: sparat.klar, fil: sparat.fil || 0, spolNiva: sparat.spolNiva || 0, upprepa: sparat.upprepa || null, mod: sparat.mod || null });
  // spolen på skrivarens sida: tjock när den är full, krymper medan den printar
  const spole = new THREE.Group(), B = 0.5 * (mesh.userData.sk || 1);
  const helSpole = filamentSpole(FIL1, 0.13, 0.1); helSpole.rotation.y = Math.PI / 2; spole.add(helSpole);
  const karna = helSpole.userData.lindning;
  spole.position.set(B / 2 + 0.09, 0.45 * (mesh.userData.sk || 1), -B / 4); mesh.add(spole); sk.spole = spole; sk.spoleKarna = karna;
  ritaSpolstall(sk);
  skrivare.push(sk);
  if (sk.klar) visaPaBadd(sk, sk.klar, 1);
  else if (sk.jobb) visaPaBadd(sk, sk.jobb.maskin ? 'del' : sk.jobb.typ, sk.prog);
  interaktor.registrera(mesh, {
    text: () => SPOL_NIVA[(valdTyp() || '').replace('byggsats:', '')] ? `🧵 Montera ${namnFor(valdTyp()).toLowerCase()} på skrivaren (${(sk.spolNiva || 0) >= (valdTyp().endsWith('2') ? 2 : 1) ? 'har redan' : 'nu ' + maxFil(sk) / RULLE + ' rullar'})` : valdTyp() === 'rulle' && !sk.klar && maxFil(sk) - sk.fil >= RULLE ? `🧵 Ladda ${Math.min(S.hotbar[S.vald].n, Math.floor((maxFil(sk) - sk.fil) / RULLE)) > 1 ? Math.min(S.hotbar[S.vald].n, Math.floor((maxFil(sk) - sk.fil) / RULLE)) + ' rullar' : 'rullen'} i skrivaren` : skrivarText(sk),
    aktivera: () => anvandSkrivare(sk),
  });
  return sk;
}
function visaPaBadd(sk, typ, prog) {
  if (sk.visning && sk.visning.userData.typ !== typ) { sk.mesh.userData.bad.remove(sk.visning); sk.visning = null; }
  if (!sk.visning) {
    const inre = typ.startsWith('byggsats:') ? skapaByggsats(typ.split(':')[1]) : skapaVara(typ);
    inre.updateMatrixWorld(true);
    const b = new THREE.Box3().setFromObject(inre);
    sk.visning = new THREE.Group(); sk.visning.add(inre); sk.visning.userData.typ = typ;
    inre.position.y -= b.min.y;
    const s = Math.min([0.55, 0.75, 1.1][sk.gen - 1], [0.28, 0.42, 0.85][sk.gen - 1] / Math.max(b.max.x - b.min.x, b.max.z - b.min.z, 0.01));
    sk.visning.scale.setScalar(s); sk.visning.userData.s = s;
    sk.mesh.userData.bad.add(sk.visning);
  }
  sk.visning.scale.y = sk.visning.userData.s * Math.max(0.03, prog);
}
function tomBadd(sk) { if (sk.visning) sk.mesh.userData.bad.remove(sk.visning); sk.visning = null; }

function skrivarText(sk) {
  const namn = 'Skrivare ' + GEN[sk.gen].namn + ` (${sk.fil > 0 ? rullar(sk.fil) : 'tom – ladda en rulle'})`;
  if (sk.klar) return `Ta ut ${namnPa(sk.klar)}`;
  if (sk.jobb) {
    const j = sk.jobb, vad = j.maskin ? `${MASKINER[j.maskin].namn}: ${delNamn(j.maskin, j.del - 1).toLowerCase()} (del ${j.del}/${MASKINER[j.maskin].delar})` : VAROR[j.typ].namn;
    return `${vad} – ${Math.floor(sk.prog * 100)} %${sk.vantar ? ' · ' + sk.vantar : ''}`;
  }
  return `Använd skrivaren (${namn})`;
}
const namnPa = (typ) => typ.startsWith('byggsats:') ? MASKINER[typ.split(':')[1]].namn.toLowerCase() : VAROR[typ].namn.toLowerCase();

function laddaSkrivare(sk) {
  const har = S.hotbar[S.vald]?.n || 0, plats = Math.max(0, Math.floor((maxFil(sk) - sk.fil) / RULLE));
  const n = Math.min(har, plats);
  if (!n) { oppnaPrintMeny(sk); return; }   // full spolhållare: öppna menyn så du kan printa i stället
  taBortInv('rulle', n); sk.fil += n * RULLE; S.stat.laddat = (S.stat.laddat || 0) + n;
  ljud.stor(); ui.toast(`${n > 1 ? n + ' rullar' : 'En rulle'} laddad – skrivare ${GEN[sk.gen].namn} har ${rullar(sk.fil)}`, 'guld'); sparaSkrivare();
}
function anvandSkrivare(sk) {
  if (valdTyp() === 'rulle' && !sk.klar) { laddaSkrivare(sk); return; }
  if (VAROR[valdTyp()]?.proto?.mod) {
    const id = valdTyp();
    if (sk.mod) { ui.toast(`Den här skrivaren har redan ${VAROR[sk.mod].namn.replace('Prototyp: ', '').toLowerCase()} – en prototyp per skrivare`, 'fel'); ljud.fel(); return; }
    taBortVald(); sk.mod = id; ljud.stor(); konfetti(40);
    ui.toast(`${VAROR[id].namn.replace('Prototyp: ', '')} monterad på skrivare ${GEN[sk.gen].namn}!`, 'guld'); sparaSkrivare(); return;
  }
  if (SPOL_NIVA[(valdTyp() || '').split(':')[1]] && valdTyp().startsWith('byggsats:')) {
    const id = valdTyp().split(':')[1], ny = SPOL_NIVA[id], nu = sk.spolNiva || 0;
    if (nu >= ny) { ui.toast('Den här skrivaren har redan den spolhållaren', 'fel'); ljud.fel(); return; }
    if (nu < ny - 1) { ui.toast(`${MASKINER[id].namn} byggs på ${MASKINER[Object.keys(SPOL_NIVA)[ny - 2]].namn.toLowerCase()} – montera den först`, 'fel'); ljud.fel(); return; }
    taBortVald(); sk.spolNiva = ny; ritaSpolstall(sk);
    ljud.stor(); ui.toast(`${MASKINER[id].namn} monterad – skrivaren rymmer nu ${maxFil(sk) / RULLE} rullar!`, 'guld'); sparaSkrivare(); return;
  }
  if (sk.klar && !['byggsats:grip', 'byggsats:korg', 'byggsats:karra', 'byggsats:magnet', 'byggsats:kvarnmotor', 'byggsats:stortratt', 'byggsats:rullstall'].includes(sk.klar) && !harRumFor(sk.klar)) {
    ui.toast('📦 Ingen plats – verktygsraden och kistan är fulla. Sälj eller ställ ut något först.', 'fel'); ljud.fel(); return;
  }
  if (sk.klar) {
    const typ = sk.klar; sk.klar = null; tomBadd(sk);
    if (typ === 'byggsats:grip') {
      S.grip = true; uppdateraSkrapTraff(); ljud.stor(); ui.toast(`🦾 Skräpgripen sitter! Bär ${BARA_SKRAP[1]}, lättare att sikta, plockar när du går nära.`, 'guld');
    } else if (typ === 'byggsats:korg') {
      S.korg = true; uppdateraSkrapTraff(); ljud.stor(); ui.toast(`🎒 Ryggkorgen sitter! Du bär ${BARA_SKRAP[2]} skräp nu.`, 'guld');
    } else if (typ === 'byggsats:karra') {
      S.karra = true; const i = laggTill('karra'); if (typeof i === 'number') byt(i); ljud.stor(); ui.toast('🛒 Skottkärran är klar! Nu kan du lyfta regntunnor och kajaker.', 'guld');
    } else if (typ === 'byggsats:magnet') {
      S.magnet = true; const mi = laggTill('magnet'); if (typeof mi === 'number') byt(mi); uppdateraSkrapTraff(); ljud.stor(); ui.toast(`🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1.`, 'guld');
    } else if (typ === 'byggsats:kvarnmotor') {
      monteraMotor();
    } else if (typ === 'byggsats:stortratt') {
      monteraTratt();
    } else if (typ === 'byggsats:rullstall') {
      S.rullstall = Math.min(3, (S.rullstall || 0) + 1); ritaRullstall(); ljud.stor(); sparaSnart();
      ui.toast(`Rullställ ${S.rullstall} står vid extrudern – rullhållaren rymmer nu ${utlagerKap()} rullar`, 'guld');
    } else if (['byggsats:rullband', 'byggsats:lastarm', 'byggsats:robotarm', 'byggsats:utlada'].includes(typ)) {
      monteraAuto(typ.split(':')[1]);
    } else {
      const vart = laggTill(typ); ljud.plock();
      if (typeof vart === 'number') byt(vart);
      if (vart === 'kista') ui.toast(`📦 ${namnFor(typ)} → kistan i skjulet (raden är full)`, 'bra');
    }
    sparaSkrivare(); return;
  }
  if (sk.jobb) { ui.toast(skrivarText(sk)); return; }
  oppnaPrintMeny(sk);
}

function startaJobb(sk, val) {
  if (val.maskin) {
    const m = MASKINER[val.maskin];
    if (sk.fil < 1) return false;
    sk.jobb = { maskin: val.maskin, del: 1 };
    visaPaBadd(sk, 'byggsats:' + val.maskin, 0);
  } else {
    const v = VAROR[val.typ];
    if (storlekFor(val.typ) > skrivStorlek(sk)) return false;
    if (sk.fil < 1) return false;
    if (v.niva) {   // kräver en rulle av rätt nivå (förbrukas när utskriften startar)
      if (!antalInv('rulle' + v.niva)) { setTimeout(() => ui.toast(`Kräver en rulle ${VAROR['rulle' + v.niva].namn.toLowerCase()} i verktygsraden eller kistan`, 'fel'), 50); return false; }
      taBortInv('rulle' + v.niva);
    }
    sk.jobb = { typ: val.typ };
    visaPaBadd(sk, val.typ, 0);
  }
  sk.prog = 0; sparaSkrivare();
  return true;
}

let stromVarnad = 0;
function uppdateraSkrivare(sk, dt) {
  const ud = sk.mesh.userData;
  if (!sk.jobb) { ud.arm.position.x = 0; return false; }
  const j = sk.jobb, g = GEN[sk.gen];
  const tid = j.maskin ? MASKINER[j.maskin].tid : VAROR[j.typ].tid;
  // väntar på filament till nästa del?
  if (j.vantarFilament) { j.vantarFilament = false; }   // gamla sparningar: filamentet dras nu medan den printar
  const behov = g.strom * dt * (S.dag === 1 ? 0.4 : 1);   // dag 1: lite trampande räcker långt
  if (S.strom < behov) {
    sk.vantar = 'ingen ström!';
    return false;
  }
  sk.vantar = '';
  S.strom -= behov;
  let dp = (dt * g.fart * (1 + trimNiva('skrivare') * 0.2) * (sk.mod === 'm_turbo' ? 2 : 1)) / tid;
  const gram = (j.maskin ? MASKINER[j.maskin].gram : VAROR[j.typ].gram) * (sk.mod === 'm_snal' ? 0.65 : 1), behovFil = gram * Math.min(dp, 1 - sk.prog);
  if (sk.fil < behovFil) {
    if (sk.fil < 0.5) { sk.vantar = 'filamentet tog slut – ladda en rulle'; if (!sk.slutVarnad) { sk.slutVarnad = true; ui.toast(`Skrivare ${g.namn}: filamentet tog slut på ${Math.round(sk.prog * 100)} % – ladda en rulle så fortsätter den`, 'fel'); } S.strom += behov; return false; }
    dp = sk.fil / gram; sk.fil = 0;
  } else sk.fil -= behovFil;
  sk.slutVarnad = false;
  sk.prog += dp;
  // munstycket rör sig
  const t = performance.now() / 1000 * (4 + sk.gen * 2);
  ud.arm.position.x = Math.sin(t) * 0.12 * ud.sk;
  ud.arm.position.z = Math.cos(t * 0.7) * 0.08 * ud.sk;
  ud.arm.position.y = (0.18 + sk.prog * 0.12) * ud.sk + 0.08;
  visaPaBadd(sk, j.maskin ? 'byggsats:' + j.maskin : j.typ, sk.prog);
  if (sk.prog >= 1) {
    sk.prog = 0;
    if (j.maskin) {
      const m = MASKINER[j.maskin];
      if (j.del < m.delar) {
        /* del klar: syns på skrivaren */
        j.del++; ljud.placera();
      } else {
        sk.jobb = null; sk.klar = 'byggsats:' + j.maskin;
        // ritningen är förbrukad – vill du ha en till får du köpa den igen (väggskivor och fönster räknas upp till max)
        if (!['vaggar', 'fonster'].includes(j.maskin) || arKlar(j.maskin, 1)) S.ritningar = S.ritningar.filter((x) => x !== j.maskin);
        aliStolt(j.maskin, m.namn, true);
        visaPaBadd(sk, sk.klar, 1); ljud.klar();
        
      }
    } else if (S.auto?.lada && sk.upprepa === j.typ && VAROR[j.typ]?.pris > 0) {
      sk.jobb = null; tomBadd(sk); S.stat.printat++;
      S.auto.innehall = { ...(S.auto.innehall || {}), [j.typ]: (S.auto.innehall?.[j.typ] || 0) + 1 };
      ladaPaket(sk, j.typ); ljud.placera();
    } else {
      sk.jobb = null; sk.klar = j.typ; ljud.klar();
      if (VAROR[j.typ]?.lyx) S.ritningar = S.ritningar.filter((x) => x !== 'recept:' + j.typ);   // Alis fina ritningar räcker till en
      aliStolt(j.typ, VAROR[j.typ]?.namn, !!VAROR[j.typ]?.recept);
      S.stat.printat++;
      if (S.stat.printat === 1) forstaPrintWow(sk);
      /* klar: grön skylt ovanför skrivaren */
    }
    sparaSkrivare();
  }
  return true;
}
// ---------- Automation: rullband från tippen → container → kvarn → robotarm laddar skrivare → autoprint → leveranslåda → Ali ----------
S.auto = { band: false, lastarm: false, arm: false, lada: false, innehall: {}, ko: [], ...S.auto };
// Kedjan och dess flaskhalsar: lastarm (lyftkraft, tempo) → band (fart, platser) → container → kvarn → rulladdare → skrivare → låda
const BAND_BAS = 5, KO_MAX = 16, BAND_LUCKA = 0.7;
const bandFart = () => 0.7 * 1.25 ** trimNiva('band');
const bandPlatser = () => BAND_BAS + trimNiva('band') * 3;
const armMax = (l = trimNiva('arm')) => Math.round(400 * 1.7 ** l);
const armTid = () => 4 * 0.85 ** trimNiva('arm');
const AUTO = { armTid: 2.5 };
const auto = { byggd: false, band: null, paket: [], bandT: 0, arm: null, armT: 0, armAnim: 0, lastarm: null, lastT: 0, lastAnim: 0, lada: null, skylt: null, flode: { arm: [], band: [] }, vantarPaTung: false };
function monteraAuto(id) {
  S.auto[{ rullband: 'band', lastarm: 'lastarm', robotarm: 'arm', utlada: 'lada' }[id]] = true; byggAuto(); ljud.stor(); sparaSnart();
  ui.toast({ rullband: 'Rullbandet står klart! Bär skräp till inmatningen vid tippen – bandet tar det till containern.', lastarm: 'Lastarmen sitter vid tippen och lägger skräp på bandet åt dig. Den orkar bara lätta saker – trimma den hos Ali.', robotarm: 'Robotarmen sitter vid extrudern – färdiga rullar laddas in i skrivarna automatiskt.', utlada: 'Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon.' }[id], 'guld');
}
function byggAuto() {
  kvarn.updateMatrixWorld(true);
  if (S.auto.band && !auto.band) {
    const B = bingePunkt(0), dir = new THREE.Vector3(TIPP.x - B.x, 0, TIPP.z - B.z), len0 = dir.length(); dir.normalize();
    const A = B.clone().addScaledVector(dir, len0 - TIPP.r + 1.5);
    const g = new THREE.Group(), L = A.distanceTo(B), sv = mat(0x222222), gul = mat(0xf1c40f);
    g.position.copy(A); g.lookAt(B.x, A.y, B.z);
    const ranta = new THREE.Group(); g.add(ranta);
    const lut = Math.atan2(0.55, L);
    const banan = new THREE.Group(); banan.rotation.x = -lut; banan.position.y = 0.45; g.add(banan);
    banan.add(at(box(0.5, 0.05, L, sv), 0, 0, L / 2));
    for (const x of [-0.27, 0.27]) banan.add(at(box(0.04, 0.12, L, gul), x, 0.04, L / 2));
    for (let z = 0.3; z < L; z += 0.6) { const k = box(0.46, 0.012, 0.08, mat(0x444444)); k.position.set(0, 0.03, z); banan.add(k); ranta.add(k); }
    for (let z = 0.5; z < L; z += 2.2) g.add(at(box(0.06, 0.45 + z / L * 0.55, 0.06, mat(0x777777)), 0, (0.45 + z / L * 0.55) / 2, z));
    g.add(at(box(0.6, 0.5, 0.5, mat(0x2d5cbf)), 0, 0.25, -0.2));
    scen.add(g); auto.band = { g, A: A.clone().setY(0.6), B: B.clone().setY(1.0), ranta: [...banan.children].filter((x) => x.geometry?.parameters?.depth === 0.08) };
    interaktor.registrera(g, { text: () => `Rullbandet · ${S.kvarn.binge.length}/${BINGE_MAX} i containern${S.strom < 1 ? ' · ingen ström!' : ''}${skrapLista.some((x) => paTippen(x.position.x, x.position.z)) ? '' : ' · tippen är tom – vänta på sopbilen'}`, aktivera: () => {} });
  }
  if (S.auto.band && auto.band && !auto.band.inmat) {
    // inmatningen vid tippen: en låda man lägger skräpet i
    const b = auto.band, im = new THREE.Group();
    im.add(at(box(0.9, 0.55, 0.9, mat(0x2d5cbf)), 0, 0.275, 0));
    im.add(at(box(1.1, 0.08, 1.1, mat(0xf1c40f)), 0, 0.6, 0));
    const sk = skylt('LÄGG SKRÄP HÄR', 1.0, 0.18, '#2b2118', '#ffe9b0'); sk.position.set(0, 0.85, 0); sk.rotation.y = Math.atan2(b.B.x - b.A.x, b.B.z - b.A.z) + Math.PI; im.add(sk);
    im.position.set(b.A.x, 0, b.A.z); scen.add(im); b.inmat = im;
    interaktor.registrera(im, {
      text: () => (skrapLage() && hand.saker.length) || (valdKarra() && S.karraLast.length) ? `Lägg skräpet på bandet (${S.auto.ko.length + auto.paket.length}/${KO_MAX + bandPlatser()} väntar)` : `Bandets inmatning · ${S.auto.ko.length} i kö · ${auto.paket.length}/${bandPlatser()} på bandet`,
      aktivera: () => lastaPaBand(),
    });
  }
  if (S.auto.lastarm && !auto.lastarm && auto.band) {
    const a = armModell(0x2d9cdb); const b = auto.band, dir = b.B.clone().sub(b.A).setY(0).normalize();
    a.g.position.set(b.A.x - dir.z * 1.1, 0, b.A.z + dir.x * 1.1); scen.add(a.g); auto.lastarm = a;
    interaktor.registrera(a.g, { text: () => `Lastarmen · lyfter max ${(armMax() / 1000).toLocaleString('sv-SE', { maximumFractionDigits: 1 })} kg · ett lyft var ${armTid().toFixed(1)} s${auto.vantarPaTung ? ' · det som är kvar är för tungt – trimma armen' : ''}`, aktivera: () => {} });
  }
  if (S.auto.arm && !auto.arm) {
    const a = armModell(0xff8c1a);
    const p0 = kvarnPunkt(-1.05, 0, 0.75); a.g.position.set(p0.x, 0, p0.z); scen.add(a.g);
    auto.arm = a; const g = a.g;
    interaktor.registrera(g, { text: () => `Robotarmen · laddar färdiga rullar i skrivaren med minst filament`, aktivera: () => {} });
  }
  if (S.auto.lada && !auto.lada) {
    const sk0 = skrivare.find((x) => x.id === 'g1') || skrivare[0]; if (!sk0) return;
    const p0 = sk0.mesh.getWorldPosition(new THREE.Vector3());
    const g = new THREE.Group(), tra = mat(0xb5864f);
    g.add(at(box(0.8, 0.5, 0.6, tra), 0, 0.25, 0));
    for (const y of [0.12, 0.38]) g.add(at(box(0.82, 0.05, 0.62, mat(0x8a6a3f)), 0, y, 0));
    const sk = skylt('LÅDA 0', 0.6, 0.18, '#2b2118', '#ffe9b0'); sk.position.set(0, 0.3, 0.305); g.add(sk);
    g.position.set(p0.x + 1.1, 0, p0.z + 0.6); scen.add(g);
    auto.lada = { g, sk };
    interaktor.registrera(g, { text: () => { const n = Object.values(S.auto.innehall || {}).reduce((a, b) => a + b, 0); return `Leveranslådan · ${n} saker · Ali hämtar den i morgon bitti och betalar`; }, aktivera: () => {} });
  }
  auto.byggd = true; uppdateraHinder?.();
}
function armModell(farg) {
  const g = new THREE.Group(), gul = mat(farg), sv = mat(0x333333);
  g.add(at(cyl(0.18, 0.22, 0.12, sv), 0, 0.06, 0));
  const vrid = new THREE.Group(); vrid.position.y = 0.12; g.add(vrid);
  vrid.add(at(box(0.12, 0.6, 0.12, gul), 0, 0.3, 0));
  const ovre = new THREE.Group(); ovre.position.y = 0.6; vrid.add(ovre);
  ovre.add(at(box(0.1, 0.1, 0.55, gul), 0, 0, 0.27));
  for (const x of [-0.05, 0.05]) ovre.add(at(box(0.02, 0.12, 0.04, sv), x, -0.06, 0.55));
  return { g, vrid, ovre };
}
// lägg det man bär (händer eller kärra) i bandets kö
function lastaPaBand() {
  let n = 0, tungt = 0;
  const plats = () => S.auto.ko.length < KO_MAX;
  if (valdKarra() && S.karraLast.length) {
    const kvar = [];
    for (const v of S.karraLast) { if (!plats()) { kvar.push(v); continue; } const so = SKRAP_SORTER[skrapSort(v)]; S.auto.ko.push([so.gram, so.tung ? 1 : 0, v]); n++; }
    S.karraLast = kvar; ritaKarraLast();
  } else {
    while (hand.overst && hand.overst.userData.typ === 'skrap' && plats()) {
      const g = hand.overst.userData.gram || SKRAP_SORTER.flaska.gram, v = hand.overst.userData.variant ?? 0;
      const fran = hand.overst.getWorldPosition(new THREE.Vector3()), x = hand.lagg();
      skickaSkrap(x, fran, auto.band.A.clone().setY(0.7), { dur: 0.5, tratt: true });
      S.auto.ko.push([g, 0, v]); n++;
    }
  }
  if (!n) { ui.toast(plats() ? 'Bär hit skräp från tippen' : 'Inmatningen är full – bandet hinner inte med (trimma bandet hos Ali)', plats() ? '' : 'fel'); if (!plats()) ljud.fel(); return; }
  S.stat.ilagt += n; ljud.placera(); ui.toast(`${n} st på bandet`, 'bra'); sparaSnart();
}
function ritaLadSkylt() {
  if (!auto.lada) return;
  const n = Object.values(S.auto.innehall || {}).reduce((a, b) => a + b, 0);
  if (auto.lada.n === n) return; auto.lada.n = n;
  const ny = skylt(`LÅDA ${n}`, 0.6, 0.18, '#2b2118', '#ffe9b0'); ny.position.copy(auto.lada.sk.position); auto.lada.g.remove(auto.lada.sk); auto.lada.g.add(ny); auto.lada.sk = ny;
}
function ladaPaket(sk, typ) {
  if (!auto.lada) return;
  const m = skapaVara(typ); m.scale.multiplyScalar(0.6);
  skickaSkrap(m, sk.mesh.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.4, 0)), auto.lada.g.position.clone().add(new THREE.Vector3(0, 0.55, 0)), { dur: 1.1, tratt: true });
}
function aliHamtarLadan() {
  const inn = S.auto?.innehall || {}, typer = Object.keys(inn).filter((t) => inn[t] > 0);
  if (!typer.length) return;
  let summa = 0, antal = 0;
  for (const t of typer) { summa += summaFor(t, inn[t]); S.saltIdag[t] = (S.saltIdag[t] || 0) + inn[t]; antal += inn[t]; }
  S.mynt += summa; S.stat.salt += antal; S.auto.innehall = {};
  setTimeout(() => sms('ali', `Ali här. Hämtade lådan klockan sex. ${antal} saker. ${summa.toLocaleString('sv-SE')} kr på ditt konto. Jag bar den själv. Den var tung.`), 2500);
}
function uppdateraAuto(dt) {
  if (!auto.byggd || (S.auto.band && !auto.band) || (S.auto.arm && !auto.arm) || (S.auto.lada && !auto.lada)) { if (S.auto.band || S.auto.arm || S.auto.lada) byggAuto(); }
  // lastarmen vid tippen: plockar det lättaste skräpet den orkar och lägger det i bandets kö
  if (auto.lastarm) {
    const la = auto.lastarm; auto.lastT += dt; auto.lastAnim = Math.max(0, auto.lastAnim - dt);
    la.vrid.rotation.y = auto.lastAnim > 0 ? Math.sin(auto.lastAnim * 3) * 1.4 : la.vrid.rotation.y * 0.95;
    la.ovre.rotation.x = auto.lastAnim > 0 ? -0.5 + Math.sin(auto.lastAnim * 5) * 0.3 : 0;
    if (auto.lastT >= armTid() && S.strom > 1 && S.auto.ko.length < KO_MAX) {
      auto.lastT = 0;
      const pa = skrapLista.filter((x) => paTippen(x.position.x, x.position.z));
      const kan = pa.filter((x) => (x.userData.gram || 200) <= armMax()).sort((a, c) => a.position.distanceTo(la.g.position) - c.position.distanceTo(la.g.position));
      auto.vantarPaTung = pa.length > 0 && !kan.length;
      const x = kan[0];
      if (x) {
        scen.remove(x); interaktor.avregistrera(x); skrapLista.splice(skrapLista.indexOf(x), 1);
        const m = skapaSkrap(x.userData.variant ?? 0); m.scale.multiplyScalar(x.userData.tung ? 0.45 : 0.8);
        skickaSkrap(m, x.position.clone().setY(0.4), auto.band.A.clone().setY(0.7), { dur: 0.8, tratt: true });
        S.auto.ko.push([x.userData.gram || 200, x.userData.tung ? 1 : 0, x.userData.variant ?? 0]);
        S.strom = Math.max(0, S.strom - 0.6); S.stat.tipp++; auto.lastAnim = 1.0; auto.flode.arm.push([performance.now() / 1000, x.userData.gram || 200]); sparaSnart();
      }
    }
  }
  // rullbandet: tar saker från kön så länge det finns plats på bandet, kör dem till containern
  if (auto.band) {
    const b = auto.band, L = b.A.distanceTo(b.B), kor = S.strom > 1 && S.kvarn.binge.length < BINGE_MAX;
    if (kor && (auto.paket.length || S.auto.ko.length)) {
      S.strom = Math.max(0, S.strom - 0.25 * dt);
      for (const k of b.ranta) { k.position.z += dt * bandFart(); if (k.position.z > L) k.position.z -= L - 0.3; }
      const sista = auto.paket[auto.paket.length - 1];
      if (S.auto.ko.length && auto.paket.length < bandPlatser() && (!sista || sista.t * L > BAND_LUCKA)) {
        const [gram, tung, v] = S.auto.ko.shift();
        const m = skapaSkrap(v); m.scale.multiplyScalar(tung ? 0.45 : 0.8); m.position.copy(b.A); scen.add(m);
        auto.paket.push({ m, t: 0, gram, tung: !!tung });
      }
    }
    for (let i = auto.paket.length - 1; i >= 0; i--) {
      const pk = auto.paket[i]; if (kor) pk.t += dt * bandFart() / L;
      pk.m.position.copy(b.A).lerp(b.B, Math.min(1, pk.t)); pk.m.position.y += 0.12; pk.m.rotation.y += dt;
      if (pk.t >= 1) { scen.remove(pk.m); auto.paket.splice(i, 1); S.kvarn.binge.push(pk.tung ? -pk.gram : pk.gram); auto.flode.band.push([performance.now() / 1000, pk.gram]); }
    }
  }
  // robotarmen
  if (auto.arm) {
    auto.armT += dt; auto.armAnim = Math.max(0, auto.armAnim - dt);
    auto.arm.vrid.rotation.y = auto.armAnim > 0 ? Math.sin(auto.armAnim * 4) * 1.2 : auto.arm.vrid.rotation.y * 0.95;
    auto.arm.ovre.rotation.x = auto.armAnim > 0 ? -0.4 + Math.sin(auto.armAnim * 6) * 0.2 : 0;
    if (auto.armT >= AUTO.armTid && helaRullar() > 0) {
      auto.armT = 0;
      const mal = skrivare.filter((x) => x.fil + RULLE <= maxFil(x)).sort((a, c) => a.fil - c.fil)[0];
      if (mal) {
        S.kvarn.ut -= RULLE; mal.fil += RULLE; auto.armAnim = 1.2; sparaSkrivare();
        const m = skapaVara('rulle'); m.scale.multiplyScalar(0.7);
        skickaSkrap(m, kvarnPunkt(-1.05, 0.9, 0.3), mal.mesh.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.6, 0)), { dur: 1.2, tratt: false });
      }
    }
  }
  // autoprint: skrivare med Autoprint på startar om när de är tomma
  if (S.auto.lada) for (const sk of skrivare) {
    if (sk.upprepa && !sk.jobb && !sk.klar && VAROR[sk.upprepa] && !VAROR[sk.upprepa].niva && sk.fil >= VAROR[sk.upprepa].gram && storlekFor(sk.upprepa) <= skrivStorlek(sk)) startaJobb(sk, { typ: sk.upprepa });
  }
  ritaLadSkylt();
}
function sparaSkrivare() {
  for (const sk of skrivare) S.skrivare[sk.id] = { jobb: sk.jobb, prog: sk.prog, klar: sk.klar, fil: sk.fil, spolNiva: sk.spolNiva || 0, upprepa: sk.upprepa || null, mod: sk.mod || null };
  sparaSnart();
}

// ---------- Skrivarljud (stegmotorer) ----------
let lac = null;
function ljudCtx() {
  if (!lac) { try { lac = new (window.AudioContext || window.webkitAudioContext)(); } catch { return null; } }
  if (lac.state === 'suspended') lac.resume();
  return lac;
}
const SKRIVARE_VOLYM = 0.035;   // hur högt skrivarna surrar (0 = tyst)
function stoppLjud(sk) {
  const c = ljudCtx(); if (!c) return;
  const o = c.createOscillator(), g = c.createGain(), t = c.currentTime;
  o.type = 'sawtooth'; o.frequency.setValueAtTime(420, t); o.frequency.exponentialRampToValueAtTime(60, t + 0.7);
  const vol = 0.09 * ljudVolym(sk);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.75);
  o.connect(g).connect(c.destination); o.start(t); o.stop(t + 0.8);
}
function ljudVolym(sk) {
  const p = new THREE.Vector3(); sk.mesh.getWorldPosition(p);
  return Math.max(0, 1 - p.distanceTo(kamera.position) / 18);
}
// ---------- Ljudnivåer ----------
const MASKIN_VOLYM = 0.3;   // skrivare, laddning, Rolfs bil – bakgrundsljud ska inte störa
let _maskinBus = null;
function maskinBus() { const c = ljudCtx(); if (!_maskinBus) { _maskinBus = c.createGain(); _maskinBus.gain.value = MASKIN_VOLYM; _maskinBus.connect(c.destination); } return _maskinBus; }
// lugn, mysig bakgrundsmusik (Web Audio, inga filer): mjuka el-piano-ackord, gles melodi, tyst bas. Duckar när någon pratar.
const MUSIK_VOLYM = 0.16;
const bakMusik = (() => {
  let timer = null, master = null, nasta = 0, steg = 0;
  const BPM = 68, ST = 60 / BPM / 2, hz = (n) => 440 * 2 ** ((n - 69) / 12);
  const ACK = [[53, 57, 60, 64], [52, 55, 59, 62], [50, 53, 57, 60], [48, 52, 55, 59]];   // Fmaj7 Em7 Dm7 Cmaj7
  const MEL = [72, null, 71, null, 69, null, null, 67, 69, null, 72, null, 74, null, 72, null];
  function not(c, f, t, d, vol, typ, attack) {
    const o = c.createOscillator(), g = c.createGain(), lp = c.createBiquadFilter(); o.type = typ; o.frequency.value = f; lp.type = 'lowpass'; lp.frequency.value = 1800;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(lp).connect(g).connect(master); o.start(t); o.stop(t + d + 0.05);
  }
  function schema() {
    const c = ljudCtx(); if (!c || !master) return;
    const tal = pratarTill > performance.now();
    master.gain.setTargetAtTime(tal ? MUSIK_VOLYM * 0.35 : MUSIK_VOLYM, c.currentTime, 0.4);
    while (nasta < c.currentTime + 0.4) {
      const takt = Math.floor(steg / 16), i = steg % 16, ack = ACK[takt % 4], t = nasta;
      if (i === 0) for (const n of ack) { not(c, hz(n), t, ST * 15, 0.05, 'sine', 0.9); not(c, hz(n + 12), t + 0.02, ST * 6, 0.012, 'triangle', 0.02); }
      if (i === 0 || i === 10) not(c, hz(ack[0] - 12), t, ST * 6, 0.07, 'sine', 0.05);
      if (takt % 8 >= 2 && i % 2 === 0) { const m = MEL[(i / 2 + takt * 3) % MEL.length]; if (m && Math.random() < 0.7) not(c, hz(m), t, ST * 5, 0.022, 'sine', 0.03); }
      nasta += ST; steg++;
    }
  }
  return {
    start() { const c = ljudCtx(); if (!c || timer || S.musik === false) return; master = c.createGain(); master.gain.setValueAtTime(0.0001, c.currentTime); master.gain.exponentialRampToValueAtTime(MUSIK_VOLYM, c.currentTime + 6); master.connect(c.destination); nasta = c.currentTime + 0.2; steg = 0; timer = setInterval(schema, 150); },
    stopp() { if (!timer) return; clearInterval(timer); timer = null; const c = ljudCtx(), m = master; master = null; try { m.gain.setTargetAtTime(0.0001, c.currentTime, 0.6); setTimeout(() => m.disconnect(), 3000); } catch {} },
    get pa() { return !!timer; },
  };
})();
function skrivarLjud(sk, kor, dt) {
  const c = lac; // startas först när spelaren tryckt Starta
  const ud = sk.mesh.userData;
  // lampan: grön = printar, blinkande röd = stannat, gul = klar, av = ledig
  const blink = Math.floor(performance.now() / 300) % 2;
  const farg = kor ? 0x2ecc71 : (sk.jobb ? (blink ? 0xff3b3b : 0x330000) : (sk.klar ? 0xffd43b : 0x222222));
  ud.ledMat.color.set(farg); ud.ledMat.emissive.set(farg);
  if (sk.korde && !kor && sk.jobb) stoppLjud(sk);   // stannade mitt i – låt det märkas
  sk.korde = kor;
  if (!c) return;
  // ett lågt surr: motorbrum + ett svagt stegmotorpip som glider mjukt i fart
  if (!sk.ljud && kor) {
    const brum = c.createOscillator(), pip = c.createOscillator(), lp = c.createBiquadFilter(), bp = c.createBiquadFilter(), g = c.createGain(), gPip = c.createGain();
    brum.type = 'sawtooth'; brum.frequency.value = 95 * [1, 1.2, 0.8][sk.gen - 1];
    lp.type = 'lowpass'; lp.frequency.value = 380; lp.Q.value = 0.7;
    pip.type = 'triangle'; pip.frequency.value = 520;
    bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 6;
    gPip.gain.value = 0.25;
    brum.connect(lp).connect(g); pip.connect(bp).connect(gPip).connect(g);
    g.gain.value = 0; g.connect(maskinBus());
    brum.start(); pip.start();
    sk.ljud = { brum, pip, g, tid: 0 };
  }
  if (!sk.ljud) return;
  const L = sk.ljud, t = c.currentTime;
  const vol = kor && ui.igang ? SKRIVARE_VOLYM * ljudVolym(sk) : 0;
  L.g.gain.setTargetAtTime(vol, t, 0.12);
  if (kor) {
    L.tid -= dt;
    if (L.tid <= 0) {
      // stegmotorerna byter fart lite då och då – mjukt, inte pipigt
      L.tid = 0.5 + Math.random() * 1.2;
      const f = [1, 1.2, 0.8][sk.gen - 1];
      L.brum.frequency.setTargetAtTime((85 + Math.random() * 30) * f, t, 0.25);
      L.pip.frequency.setTargetAtTime((420 + Math.random() * 220) * f, t, 0.3);
    }
  }
}

// laddljud när man trampar: elektriskt surr som stiger i ton med batteriet
const LADD_VOLYM = 0.05;
let ladd = null;
function laddLjud(pa) {
  const c = lac; if (!c) return;
  if (!ladd && pa) {
    const brum = c.createOscillator(), surr = c.createOscillator(), bp = c.createBiquadFilter(), g = c.createGain(), gs = c.createGain();
    brum.type = 'sine'; brum.frequency.value = 110;
    surr.type = 'sawtooth'; surr.frequency.value = 220;
    bp.type = 'bandpass'; bp.frequency.value = 1400; bp.Q.value = 4; gs.gain.value = 0.35;
    brum.connect(g); surr.connect(bp).connect(gs).connect(g);
    g.gain.value = 0; g.connect(maskinBus()); brum.start(); surr.start();
    ladd = { brum, surr, bp, g };
  }
  if (!ladd) return;
  const t = c.currentTime, niva = Math.min(1, S.strom / stromMax());
  ladd.g.gain.setTargetAtTime(pa ? LADD_VOLYM : 0, t, pa ? 0.08 : 0.15);
  if (pa) {
    const f = 100 + niva * 160;
    ladd.brum.frequency.setTargetAtTime(f, t, 0.1);
    ladd.surr.frequency.setTargetAtTime(f * 2, t, 0.1);
    ladd.bp.frequency.setTargetAtTime(1100 + niva * 1500 + Math.random() * 150, t, 0.05);
  }
}

// den gamla skrivaren på lådan
const gammal = skapaSkrivare(1);
gammal.position.set(LAGER.x + 2.8, 0.7, LAGER.z - 1.5); scen.add(gammal);
laggTillSkrivare('g1', 1, gammal, S.skrivare.g1);

// återställ placerade saker (bord först så att skrivare kan stå på dem)
[...S.placerade].sort((a, b) => (a.pa ? 1 : 0) - (b.pa ? 1 : 0)).forEach((p) => placera({ ...p }, false));
S.placerade = placerade.map(sparbar);

// återställ det man bar
hand.kapacitet = 99;
for (const typ of S.hand) {
  if (typ.startsWith('skrap')) hand.plocka(skapaSkrap(Number(typ.split(':')[1]) || 0));
  else laggTill(typ);   // äldre sparningar: saken i händerna flyttar in i verktygsraden
}
hand.kapacitet = BARA_SKRAP[niva()];
if (S.karra && !antalInv('karra')) laggTill('karra');
if (S.magnet && !antalInv('magnet')) laggTill('magnet');
if (S.filament > 0) {
  const n = Math.floor(S.filament / RULLE), rest = S.filament - n * RULLE;
  if (n) { const v = laggTill('rulle', n); if (v === 'full') laggIForrad('rulle', n, true); }
  const g1 = skrivare.find((x) => x.id === 'g1'); if (g1) g1.fil += rest;
  S.filament = 0; sparaSkrivare();
}
ritaHand();

// ---------- Interaktion: kvarn, cykel, marknad ----------
function raknaOmSteg() {
  S.steg = 0;
  while (S.steg < STEG.length && STEG[S.steg].klar()) S.steg++;
  const st = STEG[S.steg];
  if (st?.startPost && !S.lappar.includes(st.startPost)) S.post.lapp = st.startPost;
}
if (S.kvarn.motor) kvarn.add(motor);
let malAnimation = 0;
const harMotorsats = () => valdTyp() === 'byggsats:kvarnmotor';
const trattTyp = () => valdTyp() === 'byggsats:stortratt';
const bandTyp = () => valdTyp() === 'byggsats:matarband';
// lägg skräp i tratten – är den full hamnar resten i bingen (om matarbandet finns)
function iTratten(gram, tung) {
  if (S.kvarn.tratt < TRATT_MAX) { S.kvarn.tratt++; S.kvarn.trattGram += gram; if (tung) { S.stat.tungMalt = (S.stat.tungMalt || 0) + 1; tungtFilament(); } return 'tratt'; }
  if (S.kvarn.band && S.kvarn.binge.length < BINGE_MAX) { S.kvarn.binge.push(tung ? -gram : gram); return 'binge'; }
  return false;
}
// ---------- Skräp som flyger ner i tratten – stora saker åker ner uppifrån som i en tecknad film ----------
const flygSkrap = [];
const kvarnPunkt = (x, y, z) => kvarn.localToWorld(new THREE.Vector3(x, y, z));
const trattTopp = () => kvarnPunkt(0, S.kvarn.stor ? 1.75 : 1.25, 0);
const variantFor = (() => { const cache = {}; return (sort) => { if (cache[sort] === undefined) { for (let v = 0; v < 1000; v++) if (skrapSort(v) === sort) { cache[sort] = v; break; } } return cache[sort] ?? 0; }; })();
function skickaSkrap(mesh, fran, mal, { dur = 0.7, via = null, tratt = true } = {}) {
  mesh.traverse((o) => { if (o.material === traffMat) o.visible = false; });
  mesh.position.copy(fran); mesh.userData.basSkala = mesh.scale.x; scen.add(mesh);
  const tung = !!mesh.userData.tung;
  flygSkrap.push({ m: mesh, fran: fran.clone(), via: via?.clone(), mal: mal.clone(), t: 0, dur: tung ? dur * 2.4 : dur, tratt, tung, spin: (Math.random() - 0.5) * 8 });
}
function knaster(tung) {
  const c = ljudCtx(); if (!c) return;
  const len = tung ? 0.5 : 0.18, buf = c.createBuffer(1, c.sampleRate * len, c.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (Math.random() < 0.3 ? 1 : 0.3) * (1 - i / d.length);
  const n = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain(); n.buffer = buf; f.type = 'bandpass'; f.frequency.value = tung ? 500 : 1400; g.gain.value = tung ? 0.25 : 0.12;
  n.connect(f).connect(g).connect(c.destination); n.start();
  if (tung) ton(70, 0.4, 0.15, 'sawtooth');
}
function uppdateraFlygSkrap(dt) {
  for (let i = flygSkrap.length - 1; i >= 0; i--) {
    const f = flygSkrap[i]; f.t += dt;
    const k = Math.min(1, f.t / f.dur), m = f.m, bas = m.userData.basSkala;
    const fas1 = f.tratt ? 0.62 : 1;   // först flyga fram, sedan (i tratten) sjunka ner
    if (k < fas1) {
      const u = k / fas1;
      if (f.via) { const a = f.fran.clone().lerp(f.via, u), b = f.via.clone().lerp(f.mal, u); m.position.copy(a.lerp(b, u)); }
      else { m.position.copy(f.fran).lerp(f.mal, u); m.position.y += Math.sin(u * Math.PI) * (f.tung ? 1.4 : 0.7); }
      if (f.tung) { m.rotation.x = u * Math.PI / 2; m.rotation.y += dt * 1.5; } else { m.rotation.x += dt * f.spin; m.rotation.z += dt * f.spin * 0.7; }
    } else {
      // tecknad-film-sjunk: ner genom tratten, kläms ihop och vickar
      const u = (k - fas1) / (1 - fas1);
      m.position.copy(f.mal); m.position.y -= u * (f.tung ? 1.4 : 0.6);
      const kram = 1 - u * 0.75;
      m.scale.set(bas * kram, bas * (1 + u * 0.4), bas * kram);
      m.rotation.z = Math.sin(u * 30) * 0.25 * (1 - u);
      if (!f.knas && u > 0.35) { f.knas = true; knaster(f.tung); malAnimation = Math.max(malAnimation, f.tung ? 0.8 : 0.25); }
    }
    if (k >= 1) { scen.remove(m); flygSkrap.splice(i, 1); }
  }
}
interaktor.registrera(kvarn, {
  text: () => {
    if (harMotorsats()) return 'Montera kvarnmotorn';
    if (trattTyp()) return 'Montera den stora tratten';
    if (bandTyp()) return '🗑️ Montera skräpcontainern bakom kvarnen';
    if (valdTyp() === 'byggsats:turbomotor') return S.kvarn.motor ? '🔥 Skruva fast turbon på motorn' : 'Kvarnen behöver en vanlig motor först';
    if (valdTyp() === 'byggsats:jetmotor') return S.kvarn.turbo ? '🚀 Montera JETMOTORN' : 'Jetmotorn kräver turbon först';
    if (valdTyp()?.startsWith('burk_')) return `Mal ${VAROR[valdTyp()].namn.toLowerCase()} till filament (pappa avråder starkt · respekt −${BURK_RESPEKT})`;
    if (valdKarra() && S.karraLast.length) return `Töm kärran i tratten (${S.karraLast.length} st ≈ ${rullar(S.karraLast.reduce((a, v) => a + SKRAP_SORTER[skrapSort(v)].gram, 0))})`;
    const n = hand.saker.filter((s) => s.userData.typ === 'skrap').length;
    if (n) return `Lägg i tratten (${n} st ≈ ${rullar(hand.saker.reduce((a, x) => a + (x.userData.gram || 0), 0))})`;
    return `Kvarnen · tratten: ${S.kvarn.tratt}/${TRATT_MAX}` + (S.kvarn.band ? ` · containern: ${S.kvarn.binge.length}/${BINGE_MAX}` : '');
  },
  aktivera: () => {
    if (harMotorsats()) {
      taBortVald(); monteraMotor(); return;
    }
    if (trattTyp()) { taBortVald(); monteraTratt(); return; }
    if (valdTyp() === 'byggsats:turbomotor' && S.kvarn.motor) { taBortVald(); S.kvarn.turbo = true; turboDel.visible = true; ljud.stor(); ui.toast('🔥 TURBO! Kvarnen mal 2,5× snabbare.', 'guld'); sparaSnart(); return; }
    if (valdTyp() === 'byggsats:jetmotor' && S.kvarn.turbo) { taBortVald(); S.kvarn.jet = true; jetDel.visible = true; ljud.stor(); ui.toast('🚀 JETMOTOR MED EFTERBRÄNNARE! Kvarnen mal 6× snabbare.', 'guld'); sparaSnart(); return; }
    if (valdTyp()?.startsWith('burk_')) { malBurk(); return; }
    if (valdTyp() === 'byggsats:hardkniv' || valdTyp() === 'byggsats:diamantkniv') {
      const n = valdTyp() === 'byggsats:hardkniv' ? 1 : 2;
      if ((S.kvarn.kniv || 0) >= n) { ui.toast('De knivarna sitter redan i kvarnen', 'fel'); return; }
      if (n === 2 && !S.kvarn.kniv) { ui.toast('Sätt i de härdade knivarna först', 'fel'); return; }
      taBortVald(); S.kvarn.kniv = n; ljud.stor(); sparaSnart();
      ui.toast(n === 1 ? 'Härdade knivar i kvarnen! Nu klarar den röd PETG och kolfiber.' : 'Diamantkvarnen sitter! Guld och titan – kom an.', 'guld'); return;
    }
    if (VAROR[valdTyp()]?.malTill) { malFynd(); return; }
    if (bandTyp()) { taBortVald(); S.kvarn.band = true; matarband.visible = true; ljud.stor(); ui.toast('🗑️ Skräpcontainern står bakom kvarnen! Töm allt skräp i den – bandet matar kvarnen själv.', 'guld'); sparaSnart(); return; }
    let n = 0;
    if (valdKarra() && S.karraLast.length) {
      const kvar = [];
      let tung = false;
      for (const v of S.karraLast) {
        const so = SKRAP_SORTER[skrapSort(v)];
        if (so.tung && !S.kvarn.stor) { tung = true; kvar.push(v); continue; }
        const vart = iTratten(so.gram, so.tung); if (!vart) { kvar.push(v); continue; }
        const m = skapaSkrap(v), fran = karraPivot.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.6, 0));
        setTimeout(() => skickaSkrap(m, fran, vart === 'tratt' ? trattTopp() : bingePunkt(), { dur: 0.7, tratt: vart === 'tratt' }), n * 250);
        n++;
      }
      S.karraLast = kvar; ritaKarraLast();
      if (tung) varna('litenTratt');
      if (!n) { if (!tung) varna(extruderFull() ? 'rulle' : 'tratt'); return; }
      S.stat.ilagt += n; ljud.stor(); ui.toast(`${n} st från kärran i tratten`, 'bra'); sparaSnart(); return;
    }
    let vantan = 0;
    while (hand.overst && hand.overst.userData.typ === 'skrap') {
      const vart = iTratten(hand.overst.userData.gram || SKRAP_SORTER.flaska.gram, false); if (!vart) break;
      const fran = hand.overst.getWorldPosition(new THREE.Vector3()), x = hand.lagg(); n++;
      const d = vantan; vantan += 0.08;
      setTimeout(() => skickaSkrap(x, fran, vart === 'tratt' ? trattTopp() : bingePunkt(), { dur: 0.6, tratt: vart === 'tratt' }), d * 1000);
    }
    if (!n) {
      if (hand.overst?.userData.typ === 'skrap') { slappVidKvarn(); varna(extruderFull() ? 'rulle' : 'tratt'); }
      else ui.toast('Bär hit plastskräp från tomten');
      return;
    }
    S.stat.ilagt += n; ljud.placera();
    ui.toast(S.kvarn.motor ? `${n} st i tratten – motorn mal` : `${n} st i tratten – veva nu!`, 'bra');
    sparaSnart();
  },
});
interaktor.registrera(vevYta, {
  text: () => S.kvarn.tratt ? `✋ Klicka och håll – veva · ${S.kvarn.tratt} kvar i tratten` : 'Veven – tratten är tom',
  kanAktivera: () => !S.kvarn.motor && !harMotorsats() && !trattTyp() && !(valdKarra() && S.karraLast.length),   // veva går även med skräp i händerna
  aktivera: () => { if (!S.kvarn.tratt) ui.toast('Lägg plastskräp i tratten först'); },
});
// rullen vid kvarnen fylls bit för bit – den går bara att ta när den är hel
const helaRullar = () => Math.floor(S.kvarn.ut / RULLE);
// hur många rullar du kan bära: 1 i början – resten får ligga i kvarnens rullhållare och skrivaren. Det driver dig att printa.
const rulleMax = () => 1 + (S.korg ? 2 : 0) + (S.dag >= 4 ? 2 : 0) + (S.karra ? 1 : 0);
const rullePlats = () => Math.max(0, rulleMax() - antalInv('rulle'));
interaktor.registrera(rulle, {
  text: () => helaRullar() ? (helaRullar() === 1 ? 'Ta filamentrullen (1 rulle klar)' : `Ta filamentrullarna (${helaRullar()} rullar klara)`) : `Filamentrullen fylls: ${Math.round(S.kvarn.ut / RULLE * 100)} % – mala mer skräp`,
  aktivera: () => {
    const n = Math.min(helaRullar(), rullePlats());
    if (!helaRullar()) { ui.toast(`Rullen är ${Math.round(S.kvarn.ut / RULLE * 100)} % full – den måste vara hel`, ''); return; }
    if (!n) { varna('barRulle'); return; }
    if (!harRumFor('rulle', n)) { ui.toast('📦 Ingen plats för rullarna – töm verktygsraden eller kistan', 'fel'); ljud.fel(); return; }
    const vart = laggTill('rulle', n); S.kvarn.ut -= n * RULLE;
    if (typeof vart === 'number' && !valdTyp()) byt(vart);
    ui.toast(`🧵 ${n > 1 ? n + ' rullar' : 'En rulle'} filament i verktygsraden – bär ${n > 1 ? 'dem' : 'den'} till skrivaren och klicka för att ladda`, 'bra');
    S.stat.hamtat++; ljud.mynt(); sparaSnart();
  },
});
const motorKabel = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
  new THREE.Vector3(3.4, 0.1, -0.95), new THREE.Vector3(2.0, 0.03, 0.4), new THREE.Vector3(-0.5, 0.03, 0.6), new THREE.Vector3(-2.2, 0.03, -0.6), new THREE.Vector3(-2.5, 0.15, -1.45),
].map((v) => v.add(new THREE.Vector3(LAGER.x, 0, LAGER.z))).map((v, i, a) => i === a.length - 1 ? v.setX(2 * (LAGER.x - 3) - v.x) : v)), 50, 0.022, 6), mat(0x222222));
motorKabel.visible = !!S.kvarn.motor; scen.add(motorKabel);
function monteraTratt() {
  S.kvarn.stor = true; storTratt.visible = true;
  ljud.stor(); ui.toast('🪣 Stora tratten sitter! Nu får tunnor och kajaker plats.', 'guld'); sparaSnart();
}
function monteraMotor() {
  motorKabel.visible = true;
  S.kvarn.motor = true; kvarn.add(motor);
  ljud.stor(); ui.toast('⚙️ Motorn sitter på kvarnen! Nu mal den själv.', 'guld'); sparaSnart();
}
let rullKlarTid = 0;
const malLogg = [];   // [tid, gram] – för att räkna ut hur fort kvarnen mal
const malInfo = { sprite: null, txt: '', t: 0 };
// var stockar det sig? den första station som har kö framför sig, eller som står still fast det finns att göra
function flaskhals() {
  if (!S.auto?.band) return '';
  const tippen = skrapLista.some((x) => paTippen(x.position.x, x.position.z));
  const skrivFulla = skrivare.length && skrivare.every((x) => x.fil + RULLE > maxFil(x));
  if (S.kvarn.ut >= 3 * RULLE && (!S.auto.arm || skrivFulla)) return S.auto.arm ? 'skrivarna är fulla – printa mer eller större spolhållare' : 'rullarna ligger kvar – bygg en rulladdare';
  if (extruderFull()) return 'rullhållaren vid extrudern är full – ta rullarna eller köp större';
  if (S.kvarn.binge.length >= BINGE_MAX - 2) return 'kvarnen mal för långsamt – trimma kvarnen';
  if (S.auto.ko.length >= KO_MAX - 2) return 'bandet hinner inte med – trimma bandet';
  if (S.auto.lastarm && auto.vantarPaTung) return 'det som ligger kvar är för tungt för armen – trimma armen';
  if (S.auto.lastarm && !tippen) return 'tippen är tom – vänta på sopbilen eller trimma sopbilen';
  if (!S.auto.lastarm && tippen && !S.auto.ko.length && !auto.paket.length) return 'du – bandet väntar på skräp (bygg en lastarm)';
  return '';
}
// en stor gul pil som studsar över det du ska göra härnäst (bara i början)
const malPil = new THREE.Group();
{ const gul = new THREE.MeshBasicMaterial({ color: 0xffd43b, depthTest: false, transparent: true, opacity: 0.95 });
  const kon = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.5, 4), gul); kon.rotation.x = Math.PI; kon.position.y = 0.25; malPil.add(kon);
  const stav = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.45, 0.12), gul); stav.position.y = 0.72; malPil.add(stav);
  malPil.traverse((o) => { o.renderOrder = 10; }); malPil.visible = false; scen.add(malPil); }
function malPunkt() {
  if (S.steg > 12) return null;
  const v = new THREE.Vector3();
  const gripbart = () => skrapLista.filter((x) => !x.userData.tung && !paTippen(x.position.x, x.position.z)).sort((a, b) => a.position.distanceTo(spelare.pos) - b.position.distanceTo(spelare.pos))[0];
  if (!S.skyltUppe && S.steg <= 1) return bradhog.getWorldPosition(v).setY(0.2);
  switch (S.steg) {
    case 0: { const x = gripbart(); return x ? x.getWorldPosition(v).setY(0.3) : null; }
    case 1: return hand.saker.length ? trattTopp().clone() : (gripbart()?.getWorldPosition(v).setY(0.3) || null);
    case 2: return vevYta.getWorldPosition(v);
    case 3: return rulle.getWorldPosition(v);
    case 4: case 6: case 9: case 11: return skrivare[0]?.mesh.getWorldPosition(v).setY(0.9) || null;
    case 5: return cykel.getWorldPosition(v).setY(1.0);
    case 7: case 8: case 10: return new THREE.Vector3(ALI.x, 1.4, ALI.z - 1.2);
    case 12: return new THREE.Vector3(SANG_PLATS.x, 0.6, SANG_PLATS.z);
  }
  return null;
}
let senastTalSteg = -1, sagtBygg = false;
const ALI_ROP = 'Hallå! Du där borta med skrivaren! Kom över vägen, jag köper sånt där!';
// blicken glider mot en punkt under en stund (tutorial: "titta, där är Ali")
let blickMal = null;
function tittaMot(x, z, tid = 1.4) { blickMal = { x, z, kvar: tid }; }
function uppdateraBlick(dt) {
  if (!blickMal) return;
  const mal = Math.atan2(-(blickMal.x - spelare.pos.x), -(blickMal.z - spelare.pos.z));
  let d = mal - spelare.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
  spelare.yaw += d * Math.min(1, dt * 3.5); spelare.pitch += (0.02 - spelare.pitch) * Math.min(1, dt * 3);
  blickMal.kvar -= dt; if (blickMal.kvar <= 0) blickMal = null;
}
let aliHarRopat = false;
function aliRopar() { if (aliHarRopat) return; aliHarRopat = true; tittaMot(ALI.x, ALI.z, 1.6); setTimeout(() => prata('ali', ALI_ROP), 500); }
const DU_SANG = `3D-modellen till sängen kostar ${SANG_INSTRUKTION} spänn hos Ali. Okej – dags att starta printfabriken och tjäna stålar!`;
const DU_BYGG = 'Okej. Låt oss bygga. Först en skylt, så att alla vet vem som bor här.';
function uppdateraMalPil() {
  const p = malPunkt();
  if (!p || !ui.igang) { malPil.visible = false; }
  else { const stor = !S.skyltUppe && S.steg <= 1; malPil.scale.setScalar(stor ? 1.3 : 1); malPil.visible = true; malPil.position.copy(p).add(new THREE.Vector3(stor ? 0.65 : 0, (stor ? 0.75 : 0.6) + Math.abs(Math.sin(performance.now() / 300)) * 0.35, 0)); malPil.rotation.y += 0.04; }
  // din egen röst när dagboken är läst: dags att spika skylten
  if (!S.skyltUppe && S.steg <= 1 && !sagtBygg && ui.igang && medEl2.hidden && !medKo.length && !dagbokLas) { sagtBygg = true; bud(() => { if (!S.skyltUppe) { if (!S.kap1Visad) { S.kap1Visad = true; visaKapitelKort(1, KAP1_NAMN, KAP1_MAL); sparaSnart(); } prata('du', DU_BYGG); } }); }
  // instruktionen läses först när dagboken är läst och (i ett nytt spel) skylten är uppe
  if (STEG_TAL[S.steg] && senastTalSteg !== S.steg && ui.igang && medEl2.hidden && !medKo.length && !dagbokLas && ui.butiksOverlay.hidden && !spikar && (S.skyltUppe || S.steg > 1)) { senastTalSteg = S.steg; const st = S.steg; if (st === 7) bud(aliRopar); else if (st === 10) bud(() => { if (S.steg === st) prata('du', DU_SANG); }); else bud(() => { if (S.steg === st) prata('berattare', STEG_TAL[st]); }); }
}
function uppdateraMalSkylt(dt) {
  malInfo.t -= dt; if (malInfo.t > 0) return; malInfo.t = 0.5;
  const pos = kvarnPunkt(0, 3.0, 0), avst = Math.hypot(spelare.pos.x - pos.x, spelare.pos.z - pos.z), nara = avst < 8 && avst > 2.2;
  if (!nara) { if (malInfo.sprite) malInfo.sprite.visible = false; return; }
  const nu = performance.now() / 1000;
  while (malLogg.length && malLogg[0][0] < nu - 60) malLogg.shift();
  const perMin = malLogg.reduce((a, x) => a + x[1], 0) / RULLE;
  const r1 = (g) => (g / RULLE).toLocaleString('sv-SE', { maximumFractionDigits: 1 });
  // kort: bara rullarna – resten syns på mätaren, stoppskyltarna och flaskhalsrutan
  const rader = [`Kvarnen · ${helaRullar()}/${utlagerKap()} rullar`];
  const txt = rader.join('|');
  if (txt !== malInfo.txt) {
    malInfo.txt = txt;
    const c = document.createElement('canvas'); c.width = 900; c.height = 40 + rader.length * 50; const x = c.getContext('2d');
    x.fillStyle = 'rgba(20,24,34,.85)'; x.beginPath(); x.roundRect(0, 0, c.width, c.height, 24); x.fill();
    x.textAlign = 'center'; rader.forEach((t, i) => { x.fillStyle = t.startsWith('Flaskhals') ? '#ff9a5a' : i ? '#fff' : '#ffd43b'; let f = i ? 32 : 36; do { x.font = `${i ? 600 : 900} ${f}px system-ui`; f -= 2; } while (x.measureText(t).width > 860 && f > 16); x.fillText(t, 450, 50 + i * 50); });
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    if (!malInfo.sprite) { malInfo.sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true })); malInfo.sprite.renderOrder = 5; scen.add(malInfo.sprite); }
    else { malInfo.sprite.material.map.dispose(); malInfo.sprite.material.map = tex; }
    malInfo.sprite.scale.set(1.8, 1.8 * c.height / c.width, 1);
  }
  malInfo.sprite.position.copy(pos); malInfo.sprite.visible = true;
}
const nastaGram = () => (S.kvarn.tratt ? S.kvarn.trattGram / S.kvarn.tratt : 200);
// en flaska klar i kvarnen
function flaskaMald() {
  const g = Math.round(S.kvarn.trattGram / S.kvarn.tratt) || SKRAP_SORTER.flaska.gram;
  S.kvarn.tratt--; S.kvarn.trattGram = Math.max(0, S.kvarn.trattGram - g); S.kvarn.prog = 0;
  const forut = Math.floor(S.kvarn.ut / RULLE);
  S.kvarn.ut += g; S.stat.malt++; malLogg.push([performance.now() / 1000, g]);
  ljud.placera();
  const nu = Math.floor(S.kvarn.ut / RULLE);
  if (nu > forut) { rullKlarTid = performance.now() + 900; ljud.klar(); }
  sparaSnart();
}
interaktor.registrera(cykel, { text: () => S.strom >= stromMax() - 0.5 ? `🔋 Batteriet är fullt (${stromMax()}) – bygg en batteribank för att lagra mer` : `✋ Klicka och håll – trampa · ⚡ ${Math.floor(S.strom)}/${stromMax()}`, aktivera: () => {} });
interaktor.registrera(marknad, {
  text: () => aliOppen() ? 'Gå fram till Alis disk – köp och sälj' : '🔒 Alis marknad har stängt (öppnar 08:00) – gå hem och sov',
  aktivera: () => { if (aliOppen()) { aliSagt = ''; oppnaMarknad(); } else { const t = ALI_STANGT[Math.floor(Math.random() * ALI_STANGT.length)]; ljud.fel(); prata('ali', t); ui.toast(`🧔🏽 Ali (bakom luckan): ”${t}”`, 'fel'); } },
});
// fönster: sikta på en plan vägg – grönt spöke där det får plats
const fonsterGrupp = new THREE.Group(); talt.add(fonsterGrupp);
const fonsterSpoke = fonsterModell(true); fonsterSpoke.visible = false; talt.add(fonsterSpoke);
const fonsterVal = { ok: false, vagg: null, u: 0 };
const fonsterLista = () => Array.isArray(S.hem?.fonster) ? S.hem.fonster : [];
function placeraFonsterMesh(m, vagg, u) {
  const v = VAGGAR[vagg];
  if (v.axel === 'z') m.position.set(u, FONSTER.y, v.varde); else m.position.set(v.varde, FONSTER.y, u);
  m.rotation.y = v.rot;
}
// skär hål: plankor som går där ett fönster sitter delas i en bit under och en bit över fönstret
const plankor = []; talt.traverse((o) => { if (o.userData.plank) plankor.push(o); });
const halBitar = new THREE.Group(); talt.add(halBitar);
const fonsterLjus = [];
function skarHal() {
  while (halBitar.children.length) halBitar.remove(halBitar.children[0]);
  const y0 = FONSTER.y - FONSTER.h / 2, y1 = FONSTER.y + FONSTER.h / 2;
  for (const pl of plankor) {
    const d = pl.userData.plank;
    const traff = fonsterLista().some((f) => f.vagg === d.vagg && Math.abs(f.u - d.u) < FONSTER.b / 2 + d.w / 2 - 0.02);
    pl.visible = !traff;
    if (!traff) continue;
    const bit = (ya, yb) => { if (yb - ya < 0.02) return; const b2 = box(d.langsX ? d.w : 0.05, yb - ya, d.langsX ? 0.05 : d.w, pl.material); b2.position.set(d.langsX ? d.u : d.fast, (ya + yb) / 2, d.langsX ? d.fast : d.u); halBitar.add(b2); };
    bit(0, y0); bit(y1, d.h);
  }
  // isolerskivorna byggs om runt fönster (och dörren)
  const B = SKJUL.b, D = SKJUL.d, H = SKJUL.h, i = 0.09, m = vaggMatRef.m;
  const namn = ['bak', 'vanster', 'hoger', 'fram'];
  HEM_DELAR.vaggar.children.forEach((grupp, k) => {
    while (grupp.children.length) grupp.remove(grupp.children[0]);
    const v = namn[k], L = v === 'bak' || v === 'fram' ? B - 0.2 : D - 0.2;
    const hal = fonsterLista().filter((f) => f.vagg === v).map((f) => [f.u - FONSTER.b / 2, f.u + FONSTER.b / 2, y0, y1]);
    if (v === 'fram') hal.push([-SKJUL.dorr / 2, SKJUL.dorr / 2, 0, 2.05]);
    hal.sort((a, b2) => a[0] - b2[0]);
    const lagg = (ua, ub, ya, yb) => {
      if (ub - ua < 0.02 || yb - ya < 0.02) return;
      const w = ub - ua, uc = (ua + ub) / 2, yc = (ya + yb) / 2;
      const mesh = v === 'bak' || v === 'fram' ? box(w, yb - ya, 0.03, m) : box(0.03, yb - ya, w, m);
      if (v === 'bak') mesh.position.set(uc, yc, -D / 2 + i); else if (v === 'fram') mesh.position.set(uc, yc, D / 2 - i);
      else if (v === 'vanster') mesh.position.set(-B / 2 + i, yc, uc); else mesh.position.set(B / 2 - i, yc, uc);
      grupp.add(mesh);
    };
    let u = -L / 2;
    for (const [a, b2, ya, yb] of hal) { lagg(u, a, 0.05, H - 0.05); lagg(a, b2, 0.05, ya); lagg(a, b2, yb, H - 0.05); u = b2; }
    lagg(u, L / 2, 0.05, H - 0.05);
  });
  // dagsljus genom fönstren
  fonsterLjus.forEach((l) => talt.remove(l)); fonsterLjus.length = 0;
  for (const f of fonsterLista()) {
    const l = new THREE.PointLight(0xfff1d6, 0, 4.5), v = VAGGAR[f.vagg], in2 = 0.7;
    if (v.axel === 'z') l.position.set(f.u, FONSTER.y, v.varde + (v.varde < 0 ? in2 : -in2)); else l.position.set(v.varde + (v.varde < 0 ? in2 : -in2), FONSTER.y, f.u);
    talt.add(l); fonsterLjus.push(l);
  }
}
function ritaFonster() {
  skarHal();
  while (fonsterGrupp.children.length) fonsterGrupp.remove(fonsterGrupp.children[0]);
  for (const f of fonsterLista()) { const m = fonsterModell(); placeraFonsterMesh(m, f.vagg, f.u); m.traverse((o) => { if (o.isMesh) o.castShadow = true; }); fonsterGrupp.add(m); }
}
ritaFonster();
const fonsterRay = new THREE.Raycaster();
function uppdateraFonsterSpoke() {
  fonsterVal.ok = false; fonsterSpoke.visible = false;
  if (tomhant || valdTyp() !== 'byggsats:fonster' || fonsterLista().length >= FONSTER.max) return;
  fonsterRay.setFromCamera(new THREE.Vector2(0, 0), kamera);
  // strålen i skjulets koordinater
  const o = fonsterRay.ray.origin.clone().sub(talt.position), d = fonsterRay.ray.direction;
  let bast = null;
  for (const [namn, v] of Object.entries(VAGGAR)) {
    const i = v.axel === 'z' ? 'z' : 'x', j = v.axel === 'z' ? 'x' : 'z';
    if (Math.abs(d[i]) < 1e-4) continue;
    const t = (v.varde - o[i]) / d[i]; if (t < 0.2 || t > 4.5) continue;
    const u = o[j] + d[j] * t, y = o.y + d.y * t;
    if (Math.abs(u) > v.langd / 2 || y < 0 || y > SKJUL.h) continue;
    if (!bast || t < bast.t) bast = { namn, v, u, y, t };
  }
  if (!bast) return;
  const u = Math.round(bast.u * 10) / 10, v = bast.v;
  const iKant = Math.abs(u) > v.langd / 2 - FONSTER.kant;
  const iDorr = v.dorr && Math.abs(u) < SKJUL.dorr / 2 + FONSTER.b / 2 + 0.1;
  const krock = fonsterLista().some((f) => f.vagg === bast.namn && Math.abs(f.u - u) < FONSTER.b + 0.15);
  fonsterVal.ok = !iKant && !iDorr && !krock; fonsterVal.vagg = bast.namn; fonsterVal.u = u;
  fonsterVal.varfor = iDorr ? 'för nära dörren' : iKant ? 'för nära hörnet' : krock ? 'krockar med ett annat fönster' : '';
  placeraFonsterMesh(fonsterSpoke, bast.namn, u); fonsterSpoke.visible = true;
  fonsterSpoke.children[0].material.color.set(fonsterVal.ok ? 0x7dffb0 : 0xff5c5c);
}
// montera husdelar: välj delen i verktygsraden och klicka på skjulet
const valdHemDel = () => { const t = valdTyp(); const id = t?.startsWith('byggsats:') ? t.split(':')[1] : null; return id && MASKINER[id]?.hem ? id : null; };
const skjulYta = traffYta(talt, SKJUL.b + 0.4, SKJUL.h + 0.6, SKJUL.d + 0.4, 0, (SKJUL.h + 0.6) / 2, 0);
skjulYta.material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false, side: THREE.DoubleSide });  // går att sikta på inifrån också
interaktor.registrera(skjulYta, {
  text: () => valdTyp() === 'lampskarm' ? '💡 Sätt lampskärmen på taklampan' : valdHemDel() === 'fonster' ? (fonsterVal.ok ? '🪟 Sätt fönstret här' : fonsterVal.vagg ? `🔒 Inte här – ${fonsterVal.varfor}` : 'Sikta på en plan vägg') : valdHemDel() === 'vaggar' ? `🔨 Montera isolerskiva ${(S.hem?.vagg || 0) + 1} av 4 (${['bakväggen', 'vänster vägg', 'höger vägg', 'framsidan'][Math.min(3, S.hem?.vagg || 0)]})` : `🔨 Montera ${MASKINER[valdHemDel()].namn.toLowerCase()} på skjulet`,
  kanAktivera: () => (valdTyp() === 'lampskarm' && !!S.hem?.taklampa && !S.hem?.skarm) || !!valdHemDel() && (valdHemDel() === 'fonster' ? fonsterLista().length < FONSTER.max : !S.hem?.[valdHemDel()]),
  aktivera: () => {
    if (valdTyp() === 'lampskarm' && S.hem?.taklampa && !S.hem?.skarm) {
      taBortVald(); S.hem = { ...S.hem, skarm: true };
      HEM_DELAR.taklampa.userData.skarm.visible = true; HEM_DELAR.taklampa.userData.kon.visible = false;
      ljud.stor(); ui.toast('💡 Lampskärmen sitter på taklampan – så mysigt! Trivsel +6', 'guld'); uppdateraSkjul(); sparaSnart(); return;
    }
    const id = valdHemDel(); if (!id) return;
    if (id === 'fonster') {
      if (!fonsterVal.ok) { ljud.fel(); ui.toast(fonsterVal.vagg ? `Fönstret får inte plats där – ${fonsterVal.varfor}` : 'Sikta på en plan vägg på skjulet', 'fel'); return; }
      taBortVald();
      S.hem = { ...(S.hem || {}), fonster: [...fonsterLista(), { vagg: fonsterVal.vagg, u: fonsterVal.u }] }; ritaFonster();
      ljud.stor(); ui.toast(`🪟 Fönster ${fonsterLista().length} på plats! Trivsel +${MASKINER.fonster.trivsel}`, 'guld'); uppdateraSkjul(); sparaSnart(); return;
    }
    if (id === 'tapeter' && !S.hem?.vaggar) { ljud.fel(); ui.toast('Täta väggarna först – tapeter fastnar inte på springor', 'fel'); return; }
    taBortVald();
    if (id === 'vaggar') {
      const n = Math.min(4, (S.hem?.vagg || 0) + 1);
      S.hem = { ...(S.hem || {}), vagg: n, ...(n >= 4 ? { vaggar: true } : {}) }; HEM_DELAR.vaggar.visible = true;
      ljud.stor(); ui.toast(n >= 4 ? '🧱 Fjärde väggen sitter – skjulet är tätt! Ingen kyla läcker in längre.' : `🧱 Vägg ${n} av 4 på plats (${['bakväggen', 'vänster vägg', 'höger vägg'][n - 1]}). ${4 - n} kvar.`, 'guld');
    } else {
      S.hem = { ...(S.hem || {}), [id]: true }; if (HEM_DELAR[id]) HEM_DELAR[id].visible = true;
      ljud.stor(); ui.toast(id === 'tapeter' ? 'Tapeterna sitter! Klassisk 70-talstapet … Ali säljer snyggare mönster.' : `${MASKINER[id].namn} på plats! Trivsel +${MASKINER[id].trivsel}`, 'guld');
    }
    uppdateraSkjul(); sparaSnart();
  },
});
// tapetmönster (ritas en gång var på en canvas). 0 = fula 70-talstapeten man får först
const TAPETER = [
  { namn: '70-talstapet (brun och orange)', pris: 0, rita: (g) => { g.fillStyle = '#8a5a2b'; g.fillRect(0, 0, 128, 128); for (let y = 0; y < 128; y += 32) for (let x = 0; x < 128; x += 32) { g.fillStyle = '#e07b2a'; g.beginPath(); g.arc(x + 16, y + 16, 12, 0, 7); g.fill(); g.fillStyle = '#f2c14e'; g.beginPath(); g.arc(x + 16, y + 16, 6, 0, 7); g.fill(); } } },
  { namn: 'Grön med guldprickar', pris: 500, rita: (g) => { g.fillStyle = '#2f5d50'; g.fillRect(0, 0, 128, 128); g.fillStyle = '#3d7565'; for (let x = 0; x < 128; x += 32) g.fillRect(x, 0, 14, 128); g.fillStyle = '#e8c27a'; for (let y = 16; y < 128; y += 32) for (let x = 7; x < 128; x += 32) { g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill(); } } },
  { namn: 'Blå ränder', pris: 900, rita: (g) => { g.fillStyle = '#dfe9f5'; g.fillRect(0, 0, 128, 128); g.fillStyle = '#3a6ea5'; for (let x = 0; x < 128; x += 24) g.fillRect(x, 0, 9, 128); } },
  { namn: 'Rosa blommor', pris: 1500, rita: (g) => { g.fillStyle = '#fbe3ea'; g.fillRect(0, 0, 128, 128); for (let y = 0; y < 128; y += 32) for (let x = (y / 32) % 2 * 16; x < 128; x += 32) { g.fillStyle = '#e66a8d'; for (let k = 0; k < 5; k++) { const a = k * 1.256; g.beginPath(); g.arc(x + 16 + Math.cos(a) * 6, y + 16 + Math.sin(a) * 6, 4, 0, 7); g.fill(); } g.fillStyle = '#f9d65c'; g.beginPath(); g.arc(x + 16, y + 16, 3, 0, 7); g.fill(); } } },
  { namn: 'Vitt tegel', pris: 3000, rita: (g) => { g.fillStyle = '#f2efe9'; g.fillRect(0, 0, 128, 128); g.strokeStyle = '#c9c3b8'; g.lineWidth = 2; for (let y = 0; y < 128; y += 16) { g.beginPath(); g.moveTo(0, y); g.lineTo(128, y); g.stroke(); for (let x = (y / 16) % 2 * 16; x < 128; x += 32) { g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + 16); g.stroke(); } } } },
  { namn: 'Gamer: svart med neon', pris: 6000, rita: (g) => { g.fillStyle = '#0e0f1a'; g.fillRect(0, 0, 128, 128); g.strokeStyle = '#3de3ff'; g.lineWidth = 2; for (let x = -128; x < 128; x += 32) { g.beginPath(); g.moveTo(x, 128); g.lineTo(x + 128, 0); g.stroke(); } g.strokeStyle = '#ff3cac'; for (let x = 0; x < 256; x += 32) { g.beginPath(); g.moveTo(x, 128); g.lineTo(x - 128, 0); g.stroke(); } } },
];
const tapetCache = {};
const tapetTex = (i = 0) => tapetCache[i] || (tapetCache[i] = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128; TAPETER[i].rita(c.getContext('2d'));
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(6, 4); return t;
})());
const bodVaggRef = {};
function sattTapet(m, i) { if (!m) return; m.map = tapetTex(i); m.color.set(0xffffff); m.needsUpdate = true; }
function visaTapeter() {
  if (S.hem?.tapeter) sattTapet(vaggMatRef.m, S.hem.tapet ?? 0);
  if (S.bod && S.bodTapet != null) sattTapet(bodVaggRef.m, S.bodTapet);
}
// sätt upp ett nytt tapetmönster: där du står – i boden eller i skjulet
const iBoden = () => { if (!S.bod) return false; const v = bodGrupp.worldToLocal(spelare.pos.clone()); return Math.abs(v.x) < BOD.b / 2 && Math.abs(v.z) < BOD.d / 2; };
const iSkjulet = () => Math.abs(spelare.pos.x - SKJUL.x) < SKJUL.b / 2 && Math.abs(spelare.pos.z - SKJUL.z) < SKJUL.d / 2;
function tapetsera(typ) {
  const i = +typ.split('_')[1];
  if (iBoden()) { S.bodTapet = i; }
  else if (iSkjulet()) { if (!S.hem?.tapeter) { ui.toast('Skjulet behöver tapeter först (3D-modell hos Ali)', 'fel'); ljud.fel(); return; } S.hem = { ...S.hem, tapet: i }; }
  else { ui.toast('Gå in i skjulet eller gamingboden och klicka där', 'fel'); ljud.fel(); return; }
  taBortVald(); visaTapeter(); ljud.stor(); konfetti(30); ui.toast(`Ny tapet: ${TAPETER[i].namn.toLowerCase()}!`, 'guld'); sparaSnart();
}
function uppdateraSkjul() {
  visaTapeter();
  const n = Object.keys(S.hem || {}).filter((k) => k !== 'vagg').length;
  if (skjulLampa) skjulLampa.userData.bas = S.hem?.taklampa ? 9 : 4;
  const namn = n >= 5 ? 'MIN FRISTAD' : n >= 3 ? 'MITT HEM' : 'MITT SKJUL';
  if (skjulSkylt.userData.namn !== namn) {
    const ny = skylt(namn, 0.9, 0.22, n >= 3 ? '#2f6b4f' : '#5e5246', '#ffe9b0');
    skjulSkylt.material = ny.material; skjulSkylt.userData.namn = namn;
  }
}
// ---------- Gamingboden: en tillbyggnad bredvid skjulet ----------
// gamingboden är ett eget hus (ett skal) som man ställer var man vill på tomten
const BOD = { x: S.bodPos?.x ?? SKJUL.x - 3.95, z: S.bodPos?.z ?? SKJUL.z - 0.4, r: S.bodPos?.r ?? 0, b: 3.2, d: 2.8, h: 2.5, dorr: 1.0 };
const bodGrupp = new THREE.Group(); bodGrupp.position.set(BOD.x, 0, BOD.z); bodGrupp.rotation.y = BOD.r * Math.PI / 2; scen.add(bodGrupp);
const bodHinder = [];
let bodRgb = [];
function byggBod(grupp, spokeMat) {
  const { b: B, d: D, h: H, dorr } = BOD, m = (c, e = {}) => spokeMat || mat(c, e);
  const vagg = m(0x2b2f3a), golv = m(0x3a3a44), tak = m(0x1d1d22);
  if (!spokeMat && grupp === bodGrupp) bodVaggRef.m = vagg;
  grupp.add(at(box(B, 0.06, D, golv), 0, 0.03, 0));
  grupp.add(at(box(B, H, 0.1, vagg), 0, H / 2, -D / 2));
  grupp.add(at(box(0.1, H, D, vagg), -B / 2, H / 2, 0));
  grupp.add(at(box(0.1, H, D, vagg), B / 2, H / 2, 0));
  const sida = (B - dorr) / 2;
  for (const x of [-1, 1]) grupp.add(at(box(sida, H, 0.1, vagg), x * (dorr / 2 + sida / 2), H / 2, D / 2));
  grupp.add(at(box(dorr, H - 2.1, 0.1, vagg), 0, 2.1 + (H - 2.1) / 2, D / 2));
  grupp.add(at(box(B + 0.3, 0.12, D + 0.3, tak), 0, H + 0.06, 0));
  if (!spokeMat) {
    grupp.add(at(box(0.12, 0.7, 1.2, mat(0xa8dcff, { transparent: true, opacity: 0.5, emissive: 0x6ab8ff, emissiveIntensity: 0.3 })), -B / 2, 1.5, 0));
    const s2 = skylt('GAMINGBODEN', 1.1, 0.22, '#14051a', '#3de3ff'); s2.position.set(0, H - 0.25, D / 2 + 0.06); grupp.add(s2);
    bodRgb = [];
    for (const [w, d2, x, z] of [[B - 0.3, 0.03, 0, -D / 2 + 0.08], [B - 0.3, 0.03, 0, D / 2 - 0.08], [0.03, D - 0.3, -B / 2 + 0.08, 0], [0.03, D - 0.3, B / 2 - 0.08, 0]]) {
      const l = box(w, 0.03, d2, mat(0xff4dd2, { emissive: 0xff4dd2, emissiveIntensity: 1.2 })); l.position.set(x, H - 0.08, z); grupp.add(l); bodRgb.push(l);
    }
    const ljus = new THREE.PointLight(0xb07dff, 6, 6); ljus.position.set(0, H - 0.4, 0); grupp.add(ljus); bodRgb.ljus = ljus;
  }
}
function bodKlar() {
  while (bodGrupp.children.length) bodGrupp.remove(bodGrupp.children[0]);
  byggBod(bodGrupp);
  bodGrupp.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  bodGrupp.position.set(BOD.x, 0, BOD.z); bodGrupp.rotation.y = BOD.r * Math.PI / 2; bodGrupp.updateMatrixWorld(true);
  const { b: B, d: D, h: H, dorr } = BOD;
  const b3 = (x1, z1, x2, z2) => { const a = bodGrupp.localToWorld(new THREE.Vector3(x1, 0, z1)), c = bodGrupp.localToWorld(new THREE.Vector3(x2, H, z2)); bodHinder.push(new THREE.Box3(a.clone().min(c), a.clone().max(c))); };
  for (const h of bodHinder) { const i = skjulHinder.indexOf(h); if (i >= 0) skjulHinder.splice(i, 1); }
  bodHinder.length = 0;
  b3(-B / 2, -D / 2 - 0.05, B / 2, -D / 2 + 0.05); b3(-B / 2 - 0.05, -D / 2, -B / 2 + 0.05, D / 2); b3(B / 2 - 0.05, -D / 2, B / 2 + 0.05, D / 2);
  b3(-B / 2, D / 2 - 0.05, -dorr / 2, D / 2 + 0.05); b3(dorr / 2, D / 2 - 0.05, B / 2, D / 2 + 0.05);
  skjulHinder.push(...bodHinder); uppdateraHinder();
  visaTapeter();
}
if (S.bod) bodKlar();
const bodSpoke = new THREE.Group(); bodSpoke.position.copy(bodGrupp.position);
const bodVal = { ok: false, x: 0, z: 0, r: 0 };
const bodMatOk = new THREE.MeshBasicMaterial({ color: 0x7dffb0, transparent: true, opacity: 0.25, depthWrite: false }), bodMatFel = new THREE.MeshBasicMaterial({ color: 0xff5c5c, transparent: true, opacity: 0.25, depthWrite: false });
// spökboden följer siktet – R vrider 90°, grönt = får plats
// flytta en färdig gamingbod: G nära boden – allt som står inne följer med
let flyttarBod = null;
const iBodYta = (p, x0, z0, r0) => { const v = new THREE.Vector3(p.x - x0, 0, p.z - z0).applyAxisAngle(new THREE.Vector3(0, 1, 0), -r0 * Math.PI / 2); return Math.abs(v.x) < BOD.b / 2 && Math.abs(v.z) < BOD.d / 2; };
function startaBodFlytt() {
  flyttarBod = { inne: placerade.filter((p) => !p.pa && iBodYta(p, BOD.x, BOD.z, BOD.r)) };
  spoke.rot = BOD.r * 2; ui.toast('Sikta dit boden ska stå · R vrider · klicka för att ställa ner', 'guld');
}
function uppdateraBodSpoke() {
  bodSpoke.visible = (!tomhant && valdTyp() === 'byggsats:gamingbod' && !S.bod) || !!flyttarBod;
  if (!bodSpoke.visible) return;
  markRay.setFromCamera(new THREE.Vector2(0, 0), kamera);
  const h = markRay.intersectObject(mark)[0];
  if (!h || h.distance > 14) { bodSpoke.visible = false; bodVal.ok = false; return; }
  const r = Math.floor(spoke.rot / 2) % 4, x = Math.round(h.point.x * 2) / 2, z = Math.round(h.point.z * 2) / 2;
  const hx = (r % 2 ? BOD.d : BOD.b) / 2, hz = (r % 2 ? BOD.b : BOD.d) / 2;
  const inom = paMarkRekt(x, z, hx + 0.3, hz + 0.3);
  if (flyttarBod) { bodGrupp.visible = false; }
  const skjulFritt = Math.abs(x - SKJUL.x) >= hx + SKJUL.b / 2 + 0.4 || Math.abs(z - SKJUL.z) >= hz + SKJUL.d / 2 + 0.4;
  const fritt = fasta.every((f) => Math.abs(f.x - x) >= hx + f.radie || Math.abs(f.z - z) >= hz + f.radie)
    && placerade.every((p) => p.pa || flyttarBod?.inne.includes(p) || Math.abs(p.x - x) >= hx + 0.3 || Math.abs(p.z - z) >= hz + 0.3)
    && (Math.abs(spelare.pos.x - x) >= hx + 0.3 || Math.abs(spelare.pos.z - z) >= hz + 0.3);
  Object.assign(bodVal, { ok: inom && skjulFritt && fritt, x, z, r });
  bodSpoke.position.set(x, 0, z); bodSpoke.rotation.y = r * Math.PI / 2;
  const m = bodVal.ok ? bodMatOk : bodMatFel; bodSpoke.traverse((o) => { if (o.isMesh && o !== bodYta) o.material = m; });
  ui.prompt(bodVal.ok ? 'Klicka för att bygga gamingboden här · R vrider' : 'Gamingboden får inte plats här – sikta på en fri yta (R vrider)');
}
function byggBodHar() {
  if (!bodVal.ok) { ljud.fel(); ui.toast('Gamingboden får inte plats där', 'fel'); return; }
  if (flyttarBod) {
    // flytta allt som stod inne med samma förflyttning och vridning
    const dr = (bodVal.r - BOD.r + 4) % 4, ax = new THREE.Vector3(0, 1, 0);
    for (const p of flyttarBod.inne) {
      const v = new THREE.Vector3(p.x - BOD.x, 0, p.z - BOD.z).applyAxisAngle(ax, dr * Math.PI / 2);
      p.x = Math.round((bodVal.x + v.x) * 100) / 100; p.z = Math.round((bodVal.z + v.z) * 100) / 100;
      p.r8 = ((p.r8 ?? (p.r || 0) * 2) + dr * 2) % 8; p.r = Math.round(p.r8 / 2) % 4;
      p.mesh.position.set(p.x, p.mesh.position.y, p.z); p.mesh.rotation.y = vinkel(p); delete fotCache[p.id];
    }
    flyttarBod = null; S.bodPos = { x: bodVal.x, z: bodVal.z, r: bodVal.r }; Object.assign(BOD, S.bodPos);
    bodGrupp.visible = true; bodKlar(); bodSpoke.visible = false; S.placerade = placerade.map(sparbar); ljud.stor(); ui.toast('Gamingboden är flyttad – med allt som stod i den.', 'guld'); sparaSnart(); return;
  }
  taBortVald(); S.bod = true; S.bodPos = { x: bodVal.x, z: bodVal.z, r: bodVal.r }; Object.assign(BOD, S.bodPos); bodKlar(); bodSpoke.visible = false;
  ljud.stor(); konfetti(60); ui.toast('Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den.', 'guld'); sparaSnart();
}
byggBod(bodSpoke, new THREE.MeshBasicMaterial({ color: 0x7dffb0, transparent: true, opacity: 0.25, depthWrite: false })); bodSpoke.visible = false; scen.add(bodSpoke);
const bodYta = traffYta(bodSpoke, BOD.b + 1, BOD.h + 1, BOD.d + 1, 0, (BOD.h + 1) / 2, 0);
bodYta.material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false, side: THREE.DoubleSide });
interaktor.registrera(bodYta, {
  kanAktivera: () => false,
  text: () => '',
  aktivera: () => byggBodHar(),
});
// gamingboden kan flyttas: stå utanför med tom hand och klicka på väggen (eller G)
const utanforBod = () => !iBodYta(spelare.pos, BOD.x, BOD.z, BOD.r);
interaktor.registrera(bodGrupp, {
  kanAktivera: () => S.bod && !flyttarBod && !valdTyp() && utanforBod(),
  text: () => S.bod && !flyttarBod && utanforBod() ? (valdTyp() ? 'Gamingboden · ta tom hand (H) för att flytta den' : 'Flytta gamingboden · klicka (R vrider)') : '',
  aktivera: () => startaBodFlytt(),
});
// sängplatsen inne i skjulet: en genomskinlig säng + markering på golvet visar var den ska stå
const SANG_PLATS = { x: SKJUL.x - 0.55, z: SKJUL.z - 0.95, rot: Math.PI / 2 };
const tältSäng = skapaVara('sang'); tältSäng.position.set(SANG_PLATS.x - SKJUL.x, 0.04, SANG_PLATS.z - SKJUL.z); tältSäng.rotation.y = SANG_PLATS.rot;
tältSäng.visible = !!S.sang; talt.add(tältSäng);
const sangSpoke = skapaVara('sang');
sangSpoke.traverse((o) => { if (o.isMesh) { o.material = new THREE.MeshBasicMaterial({ color: 0x7dffb0, transparent: true, opacity: 0.28, depthWrite: false }); o.castShadow = false; } });
sangSpoke.position.copy(tältSäng.position); sangSpoke.rotation.y = SANG_PLATS.rot; talt.add(sangSpoke);
const sangRam = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 1.1), new THREE.MeshBasicMaterial({ color: 0xffd43b, transparent: true, opacity: 0.35, depthWrite: false }));
sangRam.rotation.x = -Math.PI / 2; sangRam.position.set(tältSäng.position.x, 0.05, tältSäng.position.z); talt.add(sangRam);
const sangSkylt = skylt('🛏️ HÄR SKA SÄNGEN STÅ', 1.3, 0.22, '#ffd43b', '#222'); sangSkylt.position.set(tältSäng.position.x, 1.5, -SKJUL.d / 2 + 0.06); talt.add(sangSkylt);
traffYta(sangSpoke, 1.0, 0.8, 2.0);
function visaSangPlats() { const v = !S.sang; sangSpoke.visible = v; sangRam.visible = v; sangSkylt.visible = v; tältSäng.visible = !!S.sang; }
visaSangPlats();
const harSangIHand = () => antalInv('sang') > 0;
interaktor.registrera(sangSpoke, {
  text: () => harSangIHand() ? '🛏️ Ställ sängen här och sov' : 'Här ska sängen stå – just nu sover du på det kalla golvet',
  kanAktivera: () => !S.sang,
  aktivera: () => {
    if (!harSangIHand()) { ui.toast(S.ritningar.includes('sang') ? 'Printa sängen på skrivaren först' : 'Köp 3D-modellen till sängen hos Ali', 'fel'); return; }
    taBortInv('sang');
    S.sang = true; visaSangPlats(); ljud.placera(); sparaSnart(); sov();
  },
});
const sangKvall = () => !S.sang && STEG[S.steg] && S.steg >= 10 && STEG[S.steg].del === STEG[0].del && (skrivare.some((x) => x.jobb?.typ === 'sang' || x.klar === 'sang') || antalInv('sang') > 0);
const MIN_VAKEN = 210;   // sekunder du måste ha varit vaken innan kvällen kommer (dag 2+)
const kvallKlar = () => (S.vakenTid || 0) >= MIN_VAKEN;
const sovDags = () => (!!STEG[S.steg]?.sov && kvallKlar()) || (!STEG[S.steg] && (S.dagTid || 0) >= DAG_LANGD);
interaktor.registrera(tältSäng, {
  text: () => sovDags() ? '🌙 Sov till nästa dag' : 'Din säng – det är inte kväll än. Gör klart dagens jobb först',
  kanAktivera: () => !!S.sang,
  aktivera: () => { if (sovDags()) sov(); else ui.toast('Det är inte kväll än – gör klart dagens jobb först'); },
});
// ---------- Kväll → natt → morgon ----------
const KVALL = { himmel: 0xf0a878, sol: 0xffa96b, solStyrka: 1.1 }, DAG = { himmel: 0xbfdcf0, sol: 0xffffff, solStyrka: 2.0 };
function satLjus(l) { scen.background.set(l.himmel); scen.fog.color.set(l.himmel); sol.color.set(l.sol); sol.intensity = l.solStyrka; }
satLjus(DAG);
// skymning: när dagens jobb är klart sjunker solen, himlen blir orange-lila och skjulet lyser varmt
const SKYMNING = { himmel: 0x6e5a8e, horisont: 0xf08a5a, sol: 0xff7a3a, solStyrka: 0.55 };
const hemiLjus = scen.children.find((o) => o.isHemisphereLight);
let skymning = 0, sover = false, skymningSagd = false;
const fA = new THREE.Color(), fB = new THREE.Color();
function uppdateraSkymning(dt) {
  if (sover) return;
  // när sängen börjar printas första kvällen sjunker solen – det börjar bli sovdags
  const mal = sovDags() ? 1 : sangKvall() ? 0.75 : 0;
  skymning += (mal - skymning) * Math.min(1, dt * 0.35);
  if (Math.abs(mal - skymning) < 0.002) skymning = mal;
  const k = skymning;
  // först orange vid horisonten, sedan djupare lila
  fA.set(DAG.himmel).lerp(fB.set(SKYMNING.horisont), Math.min(1, k * 1.6));
  if (k > 0.6) fA.lerp(fB.set(SKYMNING.himmel), (k - 0.6) / 0.4);
  scen.background.copy(fA); scen.fog.color.copy(fA);
  sol.color.set(DAG.sol).lerp(fB.set(SKYMNING.sol), k);
  sol.intensity = DAG.solStyrka + (SKYMNING.solStyrka - DAG.solStyrka) * k;
  sol.position.set(14, 24 - 18 * k, 8 + 10 * k);
  if (hemiLjus) hemiLjus.intensity = 1.4 - 0.85 * k;
  if (skjulLampa) skjulLampa.intensity = (skjulLampa.userData.bas || 4) + 10 * k;
  fonsterLjus.forEach((l) => { l.intensity = 6 * (1 - k); });
  document.body.style.setProperty('--skymning', k.toFixed(3));
  if (mal === 1 && !skymningSagd && k > 0.15) {   // (kvällen när sängen printas, mal 0.75, ska inte pinga)
    skymningSagd = true; ljud.klar();
    notis('🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen.', 'guld', { titel: 'Kväll', tid: 9000 });
  }
  if (mal < 1) skymningSagd = false;
}
function sov() {
  sover = true;
  spelare.aktiv = false;
  if (document.pointerLockElement) document.exitPointerLock();
  const forsta = !S.lappar.includes('sang');
  const natt = S.dag;
  const sl = document.createElement('div');
  sl.style.cssText = 'position:fixed;inset:0;z-index:40;background:#05070f;opacity:0;transition:opacity 1.2s;display:grid;place-items:center;color:#fff;font:700 28px system-ui,sans-serif;text-align:center';
  sl.innerHTML = `<div>🌙 Natt ${natt}<br><span style="font-size:18px;opacity:.7">zzz…${forsta ? ' i en riktig säng' : ''}</span></div>`;
  document.body.appendChild(sl);
  ljud.klar();
  requestAnimationFrame(() => { sl.style.opacity = '1'; });
  satLjus(KVALL);
  setTimeout(() => {
    // gårdagens rapport (visas på morgonrutan): sålt, printat och dagens flaskhals
    const fl = S.flask && S.flask.dag === natt ? Object.entries(S.flask.tid).sort((x, y) => y[1] - x[1])[0] : null;
    S.igar = { salt: Object.values(S.saltIdag || {}).reduce((x, y) => x + y, 0), printat: S.stat.printat - (S.dagPrintat ?? S.stat.printat), flask: fl && fl[1] >= 20 ? (FLASK_NAMN[fl[0]] || fl[0]) : null, fix: fl && fl[1] >= 20 ? FLASK_FIX[fl[0]]?.() : null };
    S.dagPrintat = S.stat.printat;
    kollaKyla(); S.dag = natt + 1; S.saltIdag = {}; S.dagTid = 0; S.vakenTid = 0; aliHamtarLadan(); sparaSnart(); ruttnaOverNatten(); uppdateraArstid();
    // morgonens meddelanden väntar tills du klickat "Börja dagen" – sen kommer de ett i taget
    morgonKo = () => { familjSms(); kollaMarkTips(); kollaPolett(); kollaResa(); morgonRolf(); };
    const morgonRolf = () => { if (S.dag === 5 && !(S.filGava || []).includes(0) && !(S.filGava || []).includes(2)) { S.filGava = [...(S.filGava || []), 0]; S.post.tillMig = [...S.post.tillMig, 'sak:fynd2']; visaPostInne(); setTimeout(() => sms('rolf', 'La en röd back i lådan. Hitta den i en tunna. Riktigt bra plast – PETG. Din kvarn biter inte på den, Ali har härdade knivar. Sen blir det röd filament, bättre grejer. Mer sånt när folk börjar respektera dej. /R'), 1500); } };
    setTimeout(sparaDagBokmarke, 1500);
    skymning = 0; sover = false; sol.position.set(14, 24, 8); if (hemiLjus) hemiLjus.intensity = 1.4; if (skjulLampa) skjulLampa.intensity = skjulLampa.userData.bas || 4;
    satLjus(DAG); sl.innerHTML = `<div><svg viewBox="0 0 160 120" style="width:min(340px,70vw);display:block;margin:0 auto 10px">${kalenderSvg('DAG ' + S.dag, 40, 14, 'DAG ' + natt)}</svg>☀️ ${['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'][(S.dag - 1) % 7]}</div>`; ljud.plock(); setTimeout(() => ljud.stor(), 900);
  }, 2600);
  setTimeout(() => { sl.style.opacity = '0'; if (forsta) visaLapp('sang'); }, 5000);
  setTimeout(() => {
    sl.remove();
    while (S.steg < STEG.length && STEG[S.steg].klar()) S.steg++;
    const nasta = STEG[S.steg];
    if (nasta?.startPost && !S.lappar.includes(nasta.startPost)) { S.post.lapp = nasta.startPost; visaPostInne(); }
    const del = nasta?.del || 'Fritt bygge';
    const ig = S.igar, rapport = ig ? `<span class="br-rapport">Igår: ${ig.printat} printat · ${ig.salt} sålt${ig.flask ? `<br>Flaskhals: ${ig.flask}${ig.fix ? ` → ${ig.fix}` : ''}` : ''}</span>` : '';
    ui.visaStart(`☀️ Dag ${S.dag}`, `<b>${del.replace(/^Dag \d+ – /, '')}</b>${nasta?.startPost ? '<br>✉️ Brev i Rolfs postlåda' : ''}${rapport}${[2, 4].includes(S.dag) && !(S.betygDag || []).includes(natt) ? snabbBetygHtml(natt) : ''}`, 'Börja dagen');
    kopplaSnabbBetyg(natt);
    const vanta = setInterval(() => { if (!ui.igang) return; clearInterval(vanta); const f = morgonKo; morgonKo = null; if (f) setTimeout(f, 2500); }, 300);
  }, 5500);
}
let morgonKo = null;

// ---------- Spökbild för att placera saker ----------
// saker som hänger på väggen: snäpps mot närmaste vägg i skjulet och vänds in mot rummet
const VAGGSAK = new Set(['r_affisch', 'burk_tavla', 'burk_tavla2', 'burk_tavla3']);
const spoke = { grupp: null, typ: null, rot: 0, ok: false, x: 0, z: 0, bord: null };
const spokMatOk = new THREE.MeshBasicMaterial({ color: 0x5cff8a, transparent: true, opacity: 0.45, depthWrite: false });
const spokMatFel = new THREE.MeshBasicMaterial({ color: 0xff5c5c, transparent: true, opacity: 0.45, depthWrite: false });
const ruta = new THREE.Mesh(new THREE.RingGeometry(0.0, 1, 32), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25, depthWrite: false }));
ruta.rotation.x = -Math.PI / 2; ruta.visible = false; scen.add(ruta);

function byggSpoke(typ) {
  if (spoke.grupp) scen.remove(spoke.grupp);
  spoke.grupp = null; spoke.typ = typ;
  if (!typ) return;
  const g = SKRIVARTYP[typ] ? skapaSkrivare(SKRIVARTYP[typ]) : (VAROR[typ] ? skapaVara(typ) : skapaMaskin(typ));
  g.traverse((o) => { if (o.isMesh) { o.material = spokMatOk; o.castShadow = false; o.receiveShadow = false; } });
  g.visible = false; scen.add(g); spoke.grupp = g;
  g.rotation.set(0, 0, 0); g.updateMatrixWorld(true);
  const bb = new THREE.Box3().setFromObject(g), sz = bb.getSize(new THREE.Vector3());
  spoke.hx = Math.max(0.05, sz.x / 2); spoke.hz = Math.max(0.05, sz.z / 2);
}
const markRay = new THREE.Raycaster();
// R vrider: stor tangent ovanför verktygsraden när du håller något att ställa ut – tills du vridit några gånger (klickbar på touch)
const VRID_LARA = 3;
const vridTips = document.createElement('button'); vridTips.className = 'ph-vrid'; vridTips.hidden = true;
vridTips.innerHTML = '<kbd>R</kbd><span>vrid</span>';
vridTips.onclick = (e) => { e.stopPropagation(); spoke.rot = (spoke.rot + (bodSpoke.visible ? 2 : 1)) % 8; S.vridit = (S.vridit || 0) + 1; };
document.body.appendChild(vridTips);
function ritaVridTips() {
  const placerar = !!(spoke.grupp?.visible || bodSpoke.visible);
  const visa = placerar && ((S.vridit || 0) < VRID_LARA || matchMedia('(pointer: coarse)').matches);
  if (vridTips.hidden === !visa) return;
  vridTips.hidden = !visa;
  if (visa && !(S.forsta || []).includes('vrid')) { S.forsta = [...(S.forsta || []), 'vrid']; sparaSnart(); bud(() => prata('du', VARN.vrid)); }
}
function uppdateraSpoke() {
  const t = tomhant ? null : valdTyp();
  const hovYta = interaktor.hovrad && placerade.some((q) => q.mesh === interaktor.hovrad && YTOR[q.typ] !== undefined);
  const typ = (!interaktor.hovrad || (hovYta && SMASAK(t))) && arPlacerbar(t) ? placeringsTyp(t) : null;
  if (typ !== spoke.typ) byggSpoke(typ);
  ruta.visible = false;
  if (!typ) return;
  markRay.setFromCamera(new THREE.Vector2(0, 0), kamera);
  const g = spoke.grupp;
  if (MASKINER[typ]?.kraverBord) {
    const bordMesh = placerade.filter((p) => p.typ === 'bord').map((p) => p.mesh);
    const h = markRay.intersectObjects(bordMesh, true)[0];
    if (h && h.distance < RACKVIDD_BYGG) {
      let o = h.object; while (o && !bordMesh.includes(o)) o = o.parent;
      const bord = placerade.find((p) => p.mesh === o);
      g.visible = true;
      g.position.copy(bord.mesh.position).add(new THREE.Vector3(0, 0.84, 0));
      g.rotation.y = bord.mesh.rotation.y;
      spoke.ok = !bord.har; spoke.bord = bord;
    } else {
      // visa var man siktar men rött
      const hm = markRay.intersectObject(mark)[0];
      g.visible = !!(hm && hm.distance < RACKVIDD_BYGG);
      if (hm) g.position.set(hm.point.x, 0, hm.point.z);
      spoke.ok = false; spoke.bord = null;
    }
  } else if (VAGGSAK.has(typ)) {
    // tavlor och affischer: sikta på en innervägg i skjulet
    const o = markRay.ray.origin, d = markRay.ray.direction, VAGG = 0.07;
    const w = SKJUL.b / 2 - VAGG - 0.06, dd = SKJUL.d / 2 - VAGG - 0.06;
    let bast = null;
    for (const [axel, varde, rot] of [['x', SKJUL.x + w, 6], ['x', SKJUL.x - w, 2], ['z', SKJUL.z + dd, 4], ['z', SKJUL.z - dd, 0]]) {
      if (Math.abs(d[axel]) < 1e-4) continue;
      const t = (varde - o[axel]) / d[axel]; if (t <= 0.2 || t > RACKVIDD_BYGG + 1) continue;
      const pt = o.clone().addScaledVector(d, t);
      const ok = axel === 'x' ? Math.abs(pt.z - SKJUL.z) < dd - 0.25 : Math.abs(pt.x - SKJUL.x) < w - 0.25;
      if (ok && pt.y > 0.6 && pt.y < 2.3 && (!bast || t < bast.t)) bast = { t, pt, rot };
    }
    const inne = Math.abs(spelare.pos.x - SKJUL.x) < SKJUL.b / 2 && Math.abs(spelare.pos.z - SKJUL.z) < SKJUL.d / 2;
    if (!bast || !inne) { g.visible = false; spoke.ok = false; spoke.vaggFel = true; return; }
    spoke.vaggFel = false; spoke.rot = bast.rot;
    spoke.hy = Math.max(-0.4, Math.min(0.45, bast.pt.y - 1.45));
    g.visible = true; g.position.set(bast.pt.x, spoke.hy, bast.pt.z); g.rotation.y = spoke.rot * Math.PI / 4;
    spoke.x = bast.pt.x; spoke.z = bast.pt.z; spoke.bord = null; spoke.ok = true; ruta.visible = false;
  } else {
    // sikta på en ledig yta (pall, bord, kyl) med en småsak → ställ den ovanpå
    if (SMASAK(typ)) {
      const ytor = placerade.filter((q) => YTOR[q.typ] !== undefined && !q.pa);
      const h = markRay.intersectObjects(ytor.map((q) => q.mesh), true)[0];
      if (h && h.distance < RACKVIDD_BYGG) {
        let o = h.object; while (o && !ytor.some((q) => q.mesh === o)) o = o.parent;
        const yta = ytor.find((q) => q.mesh === o);
        if (yta) {
          g.visible = true; g.position.copy(yta.mesh.position); g.position.y = YTOR[yta.typ]; g.rotation.y = yta.mesh.rotation.y + spoke.rot * Math.PI / 4;
          spoke.ok = !yta.har; spoke.bord = yta; ruta.visible = false;
          g.traverse((x) => { if (x.isMesh) x.material = spoke.ok ? spokMatOk : spokMatFel; });
          return;
        }
      }
    }
    const hm = markRay.intersectObject(mark)[0];
    if (!hm || hm.distance > RACKVIDD_BYGG) { g.visible = false; spoke.ok = false; return; }
    const r = info(typ).radie || 0.4;
    // fotavtrycket som en roterad rektangel – så att en hylla kan stå mot väggen
    const v = spoke.rot * Math.PI / 4, c = Math.abs(Math.cos(v)), sn = Math.abs(Math.sin(v));
    const ex = c * (spoke.hx || r) + sn * (spoke.hz || r), ez = sn * (spoke.hx || r) + c * (spoke.hz || r);
    const VAGG = 0.07;   // väggens tjocklek inåt
    const ix = SKJUL.b / 2 - VAGG - ex, iz = SKJUL.d / 2 - VAGG - ez;
    // inne i skjulet: finare rutnät (10 cm), och nära en vägg glider saken intill den
    const iSkjul = !!VAROR[typ] && Math.abs(hm.point.x - SKJUL.x) < SKJUL.b / 2 && Math.abs(hm.point.z - SKJUL.z) < SKJUL.d / 2 && ix > 0 && iz > 0;
    const steg = iSkjul ? 10 : 2;
    let x = Math.round(hm.point.x * steg) / steg, z = Math.round(hm.point.z * steg) / steg;
    if (iSkjul) {
      const dx = x - SKJUL.x, dz = z - SKJUL.z;
      x = SKJUL.x + Math.max(-ix, Math.min(ix, Math.abs(Math.abs(dx) - ix) < 0.25 ? Math.sign(dx) * ix : dx));
      z = SKJUL.z + Math.max(-iz, Math.min(iz, Math.abs(Math.abs(dz) - iz) < 0.25 ? Math.sign(dz) * iz : dz));
    }
    spoke.vaggFel = false;
    const kp = kistPos();
    const ledigtISkjul = !iSkjul || ((!S.sang || Math.abs(x - SANG_PLATS.x) >= 1.05 + ex || Math.abs(z - SANG_PLATS.z) >= 0.55 + ez) && (Math.abs(x - kp.x) >= 0.3 + ex || Math.abs(z - kp.z) >= 0.5 + ez));
    g.visible = true; g.position.set(x, 0, z); g.rotation.y = v;
    spoke.x = x; spoke.z = z; spoke.bord = null;
    const inom = paMarkRekt(x, z, r, r);
    const fritt = ledigtISkjul && fasta.every((f) => (iSkjul && f.x === SKJUL.x && f.z === SKJUL.z) || Math.hypot(f.x - x, f.z - z) > f.radie + r) &&
      placerade.every((p) => p.pa || (iSkjul ? !rektKrock(p, x, z, ex, ez) : Math.hypot(p.x - x, p.z - z) > (info(p.typ).radie || 0.4) + r)) &&
      Math.hypot(spelare.pos.x - x, spelare.pos.z - z) > r + 0.4;
    spoke.ok = inom && fritt;
    // mat och vissna blommor: komposteras på gräset utanför tomten (inte på tippen eller vägen)
    spoke.kompost = KOMPOST.has(typ) && !paMark(x, z) && !paTippen(x, z) && Math.abs(z - VAG_Z) > 3 && Math.hypot(spelare.pos.x - x, spelare.pos.z - z) > 0.6;
    if (spoke.kompost) spoke.ok = true;
    ruta.visible = true; ruta.position.set(x, 0.03, z); ruta.scale.setScalar(r);
    ruta.material.color.set(spoke.ok ? 0x5cff8a : 0xff5c5c);
  }
  g.traverse((o) => { if (o.isMesh) o.material = spoke.ok ? spokMatOk : spokMatFel; });
}
// överlappar två fotavtryck? (placerad sak p mot ny sak i x,z med halvbredder ex,ez)
const fotCache = {};
function rektKrock(p, x, z, ex, ez) {
  if (!fotCache[p.id]) { p.mesh.updateMatrixWorld(true); const bb = new THREE.Box3().setFromObject(p.mesh); fotCache[p.id] = { hx: (bb.max.x - bb.min.x) / 2, hz: (bb.max.z - bb.min.z) / 2, cx: (bb.max.x + bb.min.x) / 2, cz: (bb.max.z + bb.min.z) / 2 }; }
  const f = fotCache[p.id];
  return Math.abs(f.cx - x) < f.hx + ex - 0.02 && Math.abs(f.cz - z) < f.hz + ez - 0.02;
}
function stallNer() {
  const t = valdTyp();
  if (!arPlacerbar(t) || !spoke.grupp?.visible) return false;
  const typ = placeringsTyp(t);
  if (!spoke.ok) {
    ljud.fel();
    ui.toast(MASKINER[typ]?.kraverBord ? 'Skrivaren måste stå på ett ledigt arbetsbord' : 'Det får inte plats där', 'fel');
    return true;
  }
  if (spoke.kompost) { taBortVald(); kompostera(typ, spoke.x, spoke.z); return true; }
  taBortVald();
  const p = { id: 'p' + (S.nastaId++), typ, x: spoke.x, z: spoke.z, r: Math.round(spoke.rot / 2) % 4, r8: spoke.rot, ...(VAGGSAK.has(typ) && spoke.hy ? { hy: spoke.hy } : {}) };
  if (spoke.bord) { p.pa = spoke.bord.id; p.x = spoke.bord.x; p.z = spoke.bord.z; }
  placera(p);
  ljud.placera(); ui.toast(`${info(typ).ikon} ${info(typ).namn} på plats!${info(typ).trivsel ? ` 😊 +trivsel` : ''}`, 'bra');
  return true;
}
addEventListener('keydown', (e) => {
  if (e.code === 'KeyK' && ui.igang && ui.butiksOverlay.hidden) { oppnaSparplatser(); return; }
  if (e.code === 'KeyG' && ui.igang && ui.butiksOverlay.hidden && S.bod && !flyttarBod && Math.hypot(spelare.pos.x - BOD.x, spelare.pos.z - BOD.z) < 7) { startaBodFlytt(); return; }
  if (e.code === 'Escape' && flyttarBod) { flyttarBod = null; bodGrupp.visible = true; bodSpoke.visible = false; ui.toast('Flytten avbruten', ''); return; }
  if (e.code === 'KeyM' && ui.igang && S.mobil) {
    e.preventDefault();
    if (ui.butiksOverlay.hidden) oppnaInkorg(); else ui.stangButik();
    return;
  }
  if ((e.code === 'KeyI' || e.code === 'Tab') && ui.igang) {
    e.preventDefault();
    if (ui.butiksOverlay.hidden) oppnaForrad(); else ui.stangButik();
    return;
  }
  if (!ui.igang || !ui.butiksOverlay.hidden || pausad) return;
  if (/^Digit[1-8]$/.test(e.code)) { byt(Number(e.code.slice(5)) - 1); return; }
  if (e.code === 'KeyR') { spoke.rot = (spoke.rot + (bodSpoke.visible ? (e.shiftKey ? 6 : 2) : (e.shiftKey ? 7 : 1))) % 8;   // boden vrids 90°, annat 45°
    if ((spoke.grupp?.visible || bodSpoke.visible) && (S.vridit || 0) < VRID_LARA) { S.vridit = (S.vridit || 0) + 1; sparaSnart(); } }   // 45° per tryck, Shift+R åt andra hållet
  if (e.code === 'KeyQ' && valdKarra() && S.karraLast.length) {
    const v = S.karraLast.pop(); ritaKarraLast();
    const fram = spelare.riktning(new THREE.Vector3()); fram.y = 0; fram.normalize();
    laggSkrap(spelare.pos.x + fram.x * 2.2, spelare.pos.z + fram.z * 2.2, v, Math.random() * 6.3);
    S.stat.plockat--; ljud.placera(); sparaSnart(); return;
  }
  if (e.code === 'KeyQ' && e.shiftKey && skrapLage() && hand.saker.length) {
    const n = hand.saker.length;
    for (let i = 0; i < n; i++) {
      const s = hand.lagg(); scen.remove(s);
      const a = (i / n) * Math.PI * 2 + Math.random() * 0.5, rr = 1.2 + Math.random() * 1.2;
      laggSkrap(spelare.pos.x + Math.cos(a) * rr, spelare.pos.z + Math.sin(a) * rr, s.userData.variant ?? 0, Math.random() * 6.3);
      S.stat.plockat--;
    }
    ljud.stor(); ui.toast(`💥 Du släppte allt – ${n} skräp utspritt runt dig`, ''); sparaSnart(); return;
  }
  if (e.code === 'KeyH' || e.code === 'Digit0') { tomhant = !tomhant; ritaHand(); ui.toast(tomhant ? '🙌 Tomhänt' : 'Händerna fulla igen', ''); return; }
  if (e.code === 'KeyQ' && skrapLage() && hand.overst?.userData.typ === 'skrap') {
    const s = hand.lagg();
    const fram = spelare.riktning(new THREE.Vector3()); fram.y = 0; fram.normalize();
    scen.remove(s);
    laggSkrap(spelare.pos.x + fram.x * 2, spelare.pos.z + fram.z * 2, s.userData.variant ?? 0, Math.random() * 6.3);
    S.stat.plockat--; ljud.placera();
  }
});

// ---------- Rolf, postlådan och önskningarna ----------
const ROLF = [
  { vara: 'olhallare', belo: ['nyckel'],
    brev: 'ÖJ! Ja såg att du städa HELA gården. Respekt. Ingen städar här. Är de du som printar grejer oxå?? Ja önskar mig en ölhållare me kylklamp. Lägg den i min postlåda så får du nyckeln till tippen. Kall öl e viktigt. /Rolf (sopbilen)',
    tack: 'TACK för hållarn!! Ölen e iskall. Nyckeln till tippen ligger i lådan. Ta så mycket plast du vill.\n\nEn sak. Mina fingrar e stela – artros. Doktorn säger att ja ska skriva mindre för hand. Lägg en lapp me ditt telefonnummer i lådan så sms:ar ja istället. Sms:a inte efter tio. /Rolf' },
  { vara: 'flaskoppnare', belo: ['karra', 'mynt:120'],
    brev: 'Gomorron! Rolf här. Kajsa (katten) knuffa ner min flasköppnare i tippen 😩 Printar du en ny? Me magnet så den sitter på flaket. Ja har en gammal skottkärra som bara står o skräpar – den e din om du fixar öppnarn. Me kärran kan du bära dom TUNGA grejerna i tippen, tunnor o kajaker. Massor me plast i dom! /Rolf',
    tack: 'PERFEKT öppnare!!! Kärran e din, o lite stålar. Nu kan du lyfta tunnorna o kajakerna i tippen – de e MYCKET plast i dom! /Rolf' },
  { vara: 'grillspade', belo: ['mynt:250', 'extra'],
    brev: 'Ska grilla på lördag. Ensam som vanligt, Kajsa äter inte korv. Ingen grillspade. Min gamla smälte. Lång historia. Fixar du? 250 spänn o ja tippar dubbelt nästa gång. /Rolf 🍖',
    tack: 'Grillspaden e ju KONST. Pengar i lådan. Ses på lördag. Eller inte. Vi får se. /Rolf' },
  { vara: 'tomte', belo: ['mynt:400', 'extra'],
    brev: 'Flaket e så trist. Folk vinkar aldrig åt sopbilen. Med en tomte på flaket kanske dom gör det. En sån me luva o skägg. 400 spänn + dubbel last! /Rolf 🎅',
    tack: 'Tomten sitter på flaket nu. Vi vinkar åt alla. ALLA. Pengar + dubbel last. /Rolf' },
];
// Rolf lämnar något i lådan och sms:ar om det (när han har ditt nummer)
const LADAN_SMS = ['Ja la nåt i lådan. /R', 'Kolla lådan. /R', 'Lådan. Nu. Innan Kajsa hittar de. /R', 'De ligger nåt i postlådan. Ja säger inte vad. Jo. Pengar. /R', 'Lådan! Ja va där me bilen nyss. /R'];
function rolfLadeILadan() { if (S.rolfNummer) setTimeout(() => sms('rolf', LADAN_SMS[Math.floor(Math.random() * LADAN_SMS.length)]), 4000); }
// ---------- Rolfs skumma jobb: när hans önskningar är klara ber han om saker som är lite olagliga ----------
// Säger man ja får man mycket pengar (men chefen märker ibland). Säger man nej får man lite – och heder.
const ROLF_JOBB = [
  { vara: 'nyckelkopia', ja: 1200, nej: 150,
    brev: 'Chefen (också Rolf) har en espressomaskin på kontoret. Vi andra får automatkaffe som smakar däck. Ja har ett avtryck av hans nyckel i en tvål. Printar du en kopia? Ingen behöver veta. 1 200 spänn. /R',
    tackJa: 'ESPRESSO. Ja grät lite. Pengarna ligger i lådan. Du har aldrig sett mig. /R',
    tackNej: 'Nej?? …Okej. Du har rätt. Däckkaffe en dag till. Här e en slant för ärligheten. /R' },
  { vara: 'stangdskylt', ja: 1800, nej: 220,
    brev: 'Gäddorna nappar i morgon. Om de sitter en skylt på grinden – TIPPEN STÄNGD PGA RÅTTOR – så kan ja fiska hela dan. Ingen dör av en stängd tipp. Nästan ingen. 1 800. /R',
    tackJa: 'Fyra gäddor! Kajsa åt en hel. Skylten sitter. Pengarna ligger i lådan. /R',
    tackNej: 'Ja jobbar då. Gäddorna får vänta. Du e för snäll för den här världen. Ta en slant. /R' },
  { vara: 'termoslock', ja: 2500, nej: 300,
    brev: 'Chefen har en burk med finkakor. Han RÄKNAR dom. Ja behöver ett termoslock med lönnfack så ja kan smuggla ut två om dan. Två! Han märker inget. 2 500. /R',
    tackJa: 'Lönnfacket funkar. Kakorna har mandel. Livet e gott. Pengar i lådan. /R',
    tackNej: 'Okej, okej. Ja köper egna kakor. Dom e sämre. Du e en bra människa. Här. /R' },
  { vara: 'stampel', ja: 3500, nej: 400,
    brev: 'Chefens stämpel: GODKÄNT. Me en kopia kan ja godkänna min egen övertid. 31 år utan övertidsersättning – de e inte stöld, de e rättvisa. Typ. 3 500. /R',
    tackJa: 'GODKÄNT. GODKÄNT. GODKÄNT. Ja stämplade en servett också. Pengar i lådan. /R',
    tackNej: 'Du har rätt. Ja ska prata me facket istället. Har vi ett fack? Ja kollar. Här, ta lite. /R' },
  { vara: 'tillstand', ja: 5000, nej: 550,
    brev: 'Husvagnen står på tippens mark. Utan tillstånd. Sen 2009. Kommunen har börjat fråga. Printa ett tillstånd. Ett som ser OFFICIELLT ut. Me stjärnor. 5 000. /R',
    tackJa: 'Tillståndet sitter i rutan. Kommunen gick därifrån. Kajsa o ja bor kvar. Tack. /R',
    tackNej: 'Ja ringde kommunen själv. Dom va snälla. Ja får söka på riktigt. Ingen hade frågat förut. Tack. /R' },
];
const jobbNu = () => { const n = S.rolf.jobbNr || 0, j = ROLF_JOBB[n % ROLF_JOBB.length], f = 1 + Math.floor(n / ROLF_JOBB.length) * 0.6; return { ...j, n, ja: Math.round(j.ja * f / 50) * 50, nej: Math.round(j.nej * f / 10) * 10 }; };
// present → vad Rolf ger tillbaka, och vad han skriver
const ROLF_TACK = {
  p_sexpack: { ger: 'r_tv', text: 'Ett sexpack. Till MIG. Ingen har gett mig nåt sen 2009. Ja la en TV i lådan. Från ett dödsbo ja rensade. Den funkar om man slår på den. Hårt. /R' },
  p_korv: { ger: 'r_affisch', text: 'Korv! Ja grillade, Kajsa åt tre. Här – min gamla affisch från Rolfs Rockers 1987. Ja hade hår då. Ta den. Ja kan inte titta på den. /R' },
  p_kajsa: { ger: 'r_gardin', text: 'Kajsa spinner som en motor. Ja la Birgittas gardiner i lådan. Hon stickade dom. Sen gick hon. Ja vill inte ha dom. Du får dom. Dom e fina. Fan. /R' },
  p_fiske: { ger: 'r_klocka', text: 'Ett riktigt fiskespö. Ja … ja vet inte vad ja ska säga. Ta min guldklocka. Fick den efter 30 år på bilen. Ingen har frågat vad klockan e sen dess. /R' },
  p_trummor: { ger: 'r_fatolj', text: 'Ja spelade i två timmar i går. Grannen ringde polisen. VÄRT DET. Här, fåtöljen från dödsbot på Granvägen. Läder. Bara lite sprucken. /R' },
  p_konsert: { ger: 'r_discokula', text: 'Ja dansade. Med en tant som heter Gun. Ja e skyldig dig för resten av livet. Ta discokulan från 1987. Den har sett saker. /R' },
  p_resa: { ger: 'r_jukebox', text: 'KANARIEÖARNA?! Ja har aldrig varit utomlands. Ja grät på flygplatsen. Ta jukeboxen från dödsbot. Den spelar bara dansband. Perfekt. Ja står i skuld till dig för alltid. /R' },
};
const aliKunskap = () => (S.aliStolt || []).length;
const PROTO_SVAR = {
  m_turbo: 'Turbofläkten. AI:n sa att den var omöjlig. Jag sa: håll tyst. Nu snurrar den.',
  a_holo: 'Hologrammet. Jag tittade på det i tre timmar i natt. Min fru tror jag har en affär. Med ett hologram.',
  m_snal: 'Kvantmunstycket. Jag vet inte riktigt hur det fungerar. Det gör inte AI:n heller. Men det fungerar.',
  m_nano: 'Nanokvarnen. Den maler så fort att den låter som min mamma när hon pratar.',
  m_grav: 'Gravitationsbädden. Om du ser något sväva i skjulet: det är normalt. Tror jag.',
  m_fusion: 'Fusionsbatteriet. Håll det borta från Rolf. Och från katter. Och från mig.',
  a_robot: 'Roboten. Den har mitt ansikte på skärmen. Den säger "öppet till nio". Jag har aldrig varit så stolt.',
};
const presentNu = () => Object.keys(ROLF_TACK).find((id) => !(S.rolf.fatt || []).includes(id));
const CHEFEN = ['Hej. Rolf här – chefen. Någon har druckit min espresso. Rolf säger att det var ”ungen vid tippen”. Böter.', 'Chefen igen. Det har varit en skylt på grinden. Och mina kakor är färre. Jag vet att du är inblandad. Böter.', 'Chefen. Jag har hittat en servett stämplad GODKÄNT. Den var inte godkänd. Böter.'];
const gavaRitningPris = (id) => Math.max(20, Math.min(S.mynt, Math.round((VAROR[id]?.gram || 300) / 10)));   // aldrig dyrare än du har
const aktivGava = () => (S.rolf.jobb != null ? jobbNu().vara : S.rolf.aktiv && ROLF[S.rolf.i] ? ROLF[S.rolf.i].vara : null);
function oppnaJobbVal() {
  const j = jobbNu();
  const kropp = `<div class="ph-jobbbrev">${rens(j.brev)}</div>` + sektion('Vad gör du?') + `<div class="ph-jobbval">`
    + rad({ bild: tumme(j.vara), titel: `Gör det – printa ${VAROR[j.vara].namn.toLowerCase()}`, text: `Lägg den i postlådan. Rolf betalar ${j.ja.toLocaleString('sv-SE')} kr. Chefen kan märka det.`, hoger: knapp({ text: `+${j.ja.toLocaleString('sv-SE')} kr`, typ: 'plus', attr: 'data-ja', ikon: 'mynt' }) })
    + rad({ bild: `<span class="ui-headik" style="width:54px;height:54px">${IKON.hjarta}</span>`, titel: 'Säg nej', text: `Rolf blir besviken – men respekterar dig. Du får ${j.nej} kr direkt. Respekt +8.`, hoger: knapp({ text: `+${j.nej} kr`, typ: 'neutral', attr: 'data-nej', ikon: 'hjarta' }) })
    + '</div>';
  oppnaRuta(panel({ portrattVem: 'rolf', titel: 'En lapp från Rolf', sub: 'Lite olagligt. Bara lite.', resurser: resurserHtml() + resurs('hjarta', `Respekt ${S.respekt}`), kropp }), (el) => {
    el.querySelector('[data-stang]').onclick = () => { S.post.lapp = 'jobb'; visaPostInne(); ui.stangButik(); };   // bestäm dig senare
    el.querySelector('[data-ja]').onclick = () => {
      S.rolf.jobb = j.n; ljud.plock(); ui.stangButik();
      ui.toast(`Printa ${VAROR[j.vara].namn.toLowerCase()} (fliken Gåvor på skrivaren) och lägg den i Rolfs postlåda`, 'guld'); sparaSnart();
    };
    el.querySelector('[data-nej]').onclick = () => {
      S.rolf.jobb = null; S.rolf.heder = (S.rolf.heder || 0) + 1; S.rolf.jobbNr = j.n + 1; S.mynt += j.nej; ljud.mynt(); ui.stangButik(); andraRespekt(8, 'Sa nej till Rolfs skumma jobb');
      setTimeout(() => sms('rolf', j.tackNej), 1200);
      if (S.rolf.heder === 3) { S.post.tillMig = [...S.post.tillMig, 'mynt:2500', 'heder']; visaPostInne(); setTimeout(() => sms('rolf', 'Tre gånger har du sagt nej. Ingen har sagt nej till mig sen Birgitta. Ja la nåt i lådan. Behåll det. /R'), 4000); }
      sparaSnart();
    };
  });
}
const harGava = (id) => S.post.tillRolf === id || antalInv(id) > 0 || skrivare.some((x) => x.klar === id || x.jobb?.typ === id);
const harOl = () => S.rolf.i > 0 || harGava('olhallare');
const beloTextExtra = (b) => (b.startsWith('sak:') ? VAROR[b.slice(4)].namn : b.startsWith('tack:') ? '' : null);
const BELONING_NAMN = { nyckel: '🔑 nyckel till tippen', karra: '🛒 Rolfs gamla skottkärra', extra: '🚛 dubbel last på tippen nästa gång', heder: 'Rolfs gamla trumstockar från 1987', jobb: 'betalt för jobbet' };
const beloText = (b) => b.startsWith('mynt:') ? `${b.split(':')[1]} kr` : beloTextExtra(b) ?? BELONING_NAMN[b];

const postMarkor = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'); g.fillStyle = '#ffd43b'; g.beginPath(); g.arc(64, 64, 58, 0, Math.PI * 2); g.fill();
  g.font = '700 74px system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('✉️', 64, 70);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false })); sp.scale.setScalar(0.55); sp.renderOrder = 998;
  sp.position.set(0, 2.05, 0); sp.visible = false; postlada.add(sp); return sp;
})();
const postLapp = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.2), new THREE.MeshBasicMaterial({ color: 0xfff8e1, side: THREE.DoubleSide }));
postLapp.position.set(0.17, 1.28, 0.05); postLapp.rotation.set(0, Math.PI / 2, 0.25); postLapp.visible = false; postlada.add(postLapp);
function visaPostInne() {
  postInne.clear();
  postLapp.visible = !!S.post.lapp;
  postMarkor.visible = !!S.post.lapp || (S.post.tillMig.length > 0);
  if (S.post.tillRolf) { const m = skapaVara(S.post.tillRolf); m.scale.setScalar(0.6); m.position.set(-0.03, 0, 0); postInne.add(m); }
  if (S.post.tillMig.length) { const p = box(0.18, 0.08, 0.14, mat(0xc49a6c)); p.position.set(0.02, 0.04, 0.05); postInne.add(p); postInne.add(at(box(0.19, 0.012, 0.03, mat(0xf1c40f)), 0.02, 0.085, 0.05)); }
  postlada.userData.flaggMal = S.post.tillRolf || S.post.tillMig.length || S.post.lapp ? 0 : -Math.PI / 2;
}
visaPostInne();

// något flyger från händerna in i postlådan
const flygTillLada = [];
function flygIn(typ) {
  const m = skapaVara(typ); m.scale.setScalar(0.6);
  const fran = new THREE.Vector3(0.3, -0.3, -0.7).applyMatrix4(kamera.matrixWorld);
  const till = new THREE.Vector3(); postlada.localToWorld(till.set(0.1, 1.2, 0));
  m.position.copy(fran); scen.add(m);
  flygTillLada.push({ m, fran, till, t: 0 });
}

interaktor.registrera(postlada, {
  text: () => {
    if (S.post.lapp === 'jobb') return 'Rolf har lagt en hemlig lapp i postlådan – läs den';
    if (S.post.lapp) return '✉️ Läs lappen i postlådan';
    if (S.post.tillMig.length) return `Öppna postlådan – Rolf har lämnat: ${S.post.tillMig.map(beloText).join(' + ')}`;
    if (vantarPaNummer()) return '📝 Lägg en lapp med ditt telefonnummer i Rolfs postlåda';
    const v = aktivGava();
    if (S.post.tillRolf) return 'Gåvan ligger i lådan – Rolf hämtar den när sopbilen kommer';
    if (valdTyp() && ROLF_TACK[valdTyp()]) return `Lägg ${VAROR[valdTyp()].namn.toLowerCase()} i Rolfs postlåda`;
    if (v && antalInv(v)) return valdTyp() === v ? `🎁 Lägg ${VAROR[v].namn.toLowerCase()} i Rolfs postlåda` : (S.hotbar.some((x) => x?.typ === v) ? `Ta fram ${VAROR[v].namn.toLowerCase()} och lägg den i postlådan` : `${VAROR[v].namn} ligger i kistan i skjulet – hämta den`);
    if (v) return `Rolfs postlåda – ${S.rolf.jobb != null ? 'jobbet' : 'han önskar sig'}: ${VAROR[v].namn.toLowerCase()}`;
    return 'Rolfs postlåda (tom)';
  },
  aktivera: () => {
    postLuckaMal = 1; luckaStangTid = performance.now() + 1500;
    if (S.post.lapp === 'jobb') { S.post.lapp = null; visaPostInne(); ljud.plock(); oppnaJobbVal(); return; }
    if (S.post.lapp) { const l = S.post.lapp; S.post.lapp = null; visaLapp(l); if (l.startsWith('rolf')) S.rolf.aktiv = true; visaPostInne(); ljud.plock(); sparaSnart(); return; }
    if (S.post.tillMig.length) { hamtaBeloning(); return; }
    if (vantarPaNummer()) { geRolfNummer(); return; }
    const pv = valdTyp(); if (pv && ROLF_TACK[pv] && !S.post.tillRolf) {
      taBortVald(); flygIn(pv); S.post.tillRolf = pv;
      setTimeout(() => { visaPostInne(); ljud.placera(); }, 650);
      ui.toast('Presenten ligger i lådan. Rolf hämtar den när sopbilen kommer.', 'guld');
      if (bil.fas === 'borta') if (bil.t < -12) bil.t = -12;
      sparaSnart(); return;
    }
    const v = aktivGava();
    if (!v || S.post.tillRolf) return;
    if (!antalInv(v)) { ui.toast(`Printa ${VAROR[v].namn.toLowerCase()} först`, 'fel'); ljud.fel(); return; }
    if (valdTyp() !== v) {
      if (valjTyp(v)) { ui.toast(`${VAROR[v].ikon} Du tar fram ${VAROR[v].namn.toLowerCase()} – tryck igen för att lägga i`, ''); return; }
      ui.toast(`${VAROR[v].namn} ligger i kistan i skjulet – lägg den i verktygsraden`, 'fel'); ljud.fel(); return;
    }
    taBortVald();
    flygIn(v);
    S.post.tillRolf = v; if (S.rolf.jobb == null) S.rolf.aktiv = false;
    setTimeout(() => { visaPostInne(); ljud.placera(); }, 650);
    ui.toast('🎁 Gåvan ligger i lådan. Rolf kommer snart med sopbilen.', 'guld');
    if (bil.fas === 'borta') if (bil.t < -12) bil.t = -12;
    sparaSnart();
  },
});
let luckaStangTid = 0;
function hamtaBeloning() {
  const lista = S.post.tillMig; S.post.tillMig = [];
  for (const b of lista) {
    if (b === 'nyckel') { S.tippNyckel = true; oppnaGrind(); }
    else if (b === 'karra') { S.karra = true; const i = laggTill('karra'); if (typeof i === 'number') byt(i); }
    else if (b === 'extra') S.rolf.extra++;
    else if (b.startsWith('mynt:')) S.mynt += Number(b.split(':')[1]);
    else if (b === 'heder') { const i = laggTill('trumstockar'); }
    else if (b.startsWith('sak:')) laggTill(b.slice(4));
  }
  ljud.stor(); sparaSnart();
  // visa vad som låg i lådan – resten (sms, respekt) kommer när du klickat OK
  visaFynd(lista, () => efterBeloning(lista));
}
// fyndrutan: varje sak poppar fram en i taget, OK för att gå vidare
function visaFynd(lista, efter) {
  const kort = lista.filter((b) => b !== 'jobb' && !b.startsWith('tack:')).map((b) => {
    const typ = b.startsWith('sak:') ? b.slice(4) : b === 'karra' ? 'karra' : b === 'heder' ? 'trumstockar' : null;
    const bild = b.startsWith('mynt:') ? `<span class="ph-fynd-mynt">${IKON.mynt}</span>` : typ ? ikonHtml(typ, 96) : `<span class="ph-fynd-mynt">${IKON.lada}</span>`;
    const besk = typ ? (info(typ)?.beskr || '') : b.startsWith('mynt:') ? 'Kontanter. Rolf litar inte på banker.' : '';
    return { bild, namn: beloText(b), besk };
  });
  if (!kort.length) { efter(); return; }
  // slå ihop likadana
  const ihop = []; for (const k of kort) { const f = ihop.find((x) => x.namn === k.namn); if (f) f.n++; else ihop.push({ ...k, n: 1 }); }
  const kropp = `<div class="ph-fynd">${ihop.map((k, i) => `<div class="ph-fynd-kort" style="animation-delay:${0.15 + i * 0.35}s"><div class="bild">${k.bild}${k.n > 1 ? `<em>×${k.n}</em>` : ''}</div><b>${k.namn}</b>${k.besk ? `<p>${k.besk}</p>` : ''}</div>`).join('')}</div>`;
  oppnaRuta(panel({ portrattVem: 'rolf', titel: 'Rolfs postlåda', sub: 'Det här låg i lådan', kropp, fot: knapp({ text: 'OK', typ: 'primar', attr: 'data-fynd-ok' }) }), null);
  ljud.klar?.();
  let klar = false; const fardig = () => { if (klar) return; klar = true; efter(); };
  ui.butiksOverlay.querySelector('[data-fynd-ok]').onclick = () => { ui.stangButik(); fardig(); };
  const t = setInterval(() => { if (ui.butiksOverlay.hidden) { clearInterval(t); fardig(); } }, 300);
}
function efterBeloning(lista) {
  const nr = S.rolf.i - 1;
  for (const b of lista) if (b.startsWith('tack:')) { if (!S.rolfNummer) setTimeout(() => sms('rolf', ROLF_TACK[b.slice(5)].text), 1200); S.rolf.presenter = (S.rolf.presenter || 0) + 1; andraRespekt(Math.round(6 + VAROR[b.slice(5)].present / 400), 'Gav Rolf en present'); setTimeout(() => ui.toast(`Rolf kommer nu oftare med lass – var ${Math.round(sopbilVar())} s och ${SOPBIL_LAST + sopbilExtra()} skräp per lass`, 'guld'), 2500); }
  if (lista.includes('jobb')) andraRespekt(-3, 'Gjorde ett skumt jobb åt Rolf');
  const ovrigt = lista.includes('jobb') || lista.includes('heder') || lista.some((b) => b.startsWith('tack:'));
  if (lista.includes('jobb')) sms('rolf', ROLF_JOBB[S.rolf.jobbTack % ROLF_JOBB.length].tackJa);
  if (lista.includes('heder')) setTimeout(() => sms('mamma', 'Det ringde en Rolf. Han sa att du är den ärligaste människan han känner. VEM ÄR ROLF?? Men… bra. Jag är stolt. Säg inte att jag sa det.'), 6000);
  if (ovrigt) { visaPostInne(); sparaSnart(); return; }
  andraRespekt(4, 'Fixade det Rolf bad om');
  if (nr === 0) visaLapp('rolftack:0');          // första gången: ett brev (med hans nummer)
  else sms('rolf', ROLF[nr].tack);               // sedan sms:ar han
  visaPostInne(); sparaSnart();
}
function oppnaGrind(direkt = false) {
  grind.userData.las.visible = false;
  if (direkt) grind.rotation.y = -1.6; else grind.userData.oppnar = true;
  uppdateraHinder();
}
if (S.tippNyckel) oppnaGrind(true);

// ---------- SMS (när du har mobilen) ----------
const AVSANDARE = { chefen: { namn: 'Rolf (chefen)', farg: '#7a3030' }, mamma: { namn: 'Mamma', farg: '#b8456a' }, pappa: { namn: 'Pappa', farg: '#4f5b6a' }, rolf: { namn: 'Rolf', farg: '#2e7b4f' }, ali: { namn: 'Ali', farg: '#2d5cbf' }, bror: { namn: 'Storebror', farg: '#7a3a9a' } };
// Rolf ber om ditt nummer i första tackbrevet (artros i fingrarna)
if (S.rolfNummer == null) S.rolfNummer = S.rolf.i >= 2;
const vantarPaNummer = () => !S.rolfNummer && S.rolf.i >= 1 && S.lappar.includes('rolftack:0');
function geRolfNummer() {
  S.rolfNummer = true; ljud.placera(); visaPostInne(); sparaSnart();
  ui.toast('📝 Lappen med ditt nummer ligger i Rolfs postlåda.', 'bra');
  setTimeout(() => sms('rolf', 'Rolf hä!! Funkar de?? ja skrivr me EN fingr. de tar sin tid men de e int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R'), 15000);
  const vantar = S.rolfVantar || []; S.rolfVantar = [];
  vantar.forEach(([t, id], i) => setTimeout(() => sms('rolf', t, id), 40000 + i * 30000));
}
function sms(fran, text, id) {
  // Rolf skriver brev tills du lagt ditt nummer i hans postlåda – sms:en väntar så länge
  if ((fran === 'rolf') && !S.rolfNummer) { S.rolfVantar = [...(S.rolfVantar || []), [text, id]].slice(-3); return; }
  if (fran === 'rolf') text = rolfDialekt(text, true);
  senasteSms = performance.now();
  if (!S.mobil) return;
  // sms med svarsalternativ måste besvaras – de öppnas direkt. Övriga kommer som en notis du klickar på för att läsa och höra.
  const maSvara = SMS_POOL.find((x) => x.id === id)?.svar && S.smsSvar?.[id] == null;
  if (maSvara) { S.sms.push({ fran, text }); S.sms = S.sms.slice(-40); sparaSnart(); bud(() => medKo.push({ typ: 'sms', fran, text, id })); return; }
  // storyn i ordning: har du ett oläst sms från samma person väntar nästa tills du läst det
  if (S.sms.some((m) => m.ny && m.fran === fran)) { S.smsVantar = [...(S.smsVantar || []), [fran, text, id]]; sparaSnart(); return; }
  smsFram(fran, text, id);
}
function smsFram(fran, text, id) {
  // syns direkt som en bubbla i inkorgen uppe till höger – uppläsningen väntar på sin tur i kön
  const m = { fran, text, ny: true }; S.sms.push(m); S.sms = S.sms.slice(-40); S.olasta = S.sms.filter((x) => x.ny).length; sparaSnart();
  inkorg({ vem: fran, titel: AVSANDARE[fran]?.namn || fran, text, smsId: id, klar: () => { m.ny = false; smsLast(fran); } });
}
function triTon() {
  try { const c = ljudCtx(); if (!c) return; [[1318.5, 0], [1046.5, 0.13], [1568, 0.26]].forEach(([f, d]) => {
    const o = c.createOscillator(), g = c.createGain(), t = c.currentTime + d; o.type = 'sine'; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + 0.4); }); } catch {}
  vibrera();
}
function vibrera() {
  const c = lac; if (!c) return;
  for (const d of [0, 0.22]) {
    const o = c.createOscillator(), g = c.createGain(), t = c.currentTime + d;
    o.type = 'square'; o.frequency.value = 150; g.gain.setValueAtTime(0.03, t); g.gain.setValueAtTime(0, t + 0.15);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + 0.16);
  }
}
// Ali hör av sig när en ny instruktion dyker upp
// Ali blir nästan glad ibland – men bara nästan
const ALI_SPECIAL = {
  magnet: 'Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt.',
  turbomotor: 'Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap.',
  jetmotor: 'Ali här. 🚀 Jetmotor. Med efterbrännare. Till en KVARN. Jag vet inte varför. Jag kunde inte sluta rita. Min fru frågade om jag mår bra. Jag har aldrig mått bättre. Ring inte brandkåren.',
  matarband: 'Ali här. 🗑️ Skräpcontainer med matarband. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck.',
  korg: 'Ali här. 🎒 Ryggkorg. Min första modell med två delar som passar ihop. Jag dansade lite i lagret. Ingen såg. Säg inget.',
  skrivare2: 'Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998.',
  skrivare3: 'Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan.',
  sol: 'Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen.',
};
const ALI_STOLT = [
  (n) => `Ali här. Du printade min ${n}. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. Jag gråter inte. Det är damm i butiken.`,
  (n) => `${n} – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "ja ja".`,
  (n) => `Jag såg din ${n} på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vacker ändå.`,
  (n) => `Ali här. Ännu en ritning som blev på riktigt: ${n}. Semesterkassan växer. Livet växer.`,
];
// Ali skriver inte direkt – han hör av sig efter 5–10 minuter, när det är lugnt (inget annat meddelande eller meny öppen)
S.aliKo = S.aliKo || []; S.smsKo = S.smsKo || [];
let senasteSms = 0;
function aliSenare(text) { S.aliKo.push({ text, nar: S.speltid + 300 + Math.random() * 300 }); sparaSnart(); }
function kollaAliKo() {
  const f = S.aliKo[0]; if (!f || S.speltid < f.nar) return;
  if (S.dag <= 1 && S.steg < 9) return;
  if (pausad || !ui.butiksOverlay.hidden || !medEl2.hidden || medKo.length || performance.now() - senasteSms < 60000 || sovDags()) return;
  S.aliKo.shift(); if (S.aliKo[0]) S.aliKo[0].nar = Math.max(S.aliKo[0].nar, S.speltid + 120 + Math.random() * 180);
  sms('ali', f.text); sparaSnart();
}
function kollaSmsKo() {
  const f = S.smsKo?.[0]; if (!f || S.speltid < f.nar) return;
  if (S.dag <= 1 && S.steg < 9) return;   // dag 1 är en träningsrunda: inga sms från familjen förrän du sålt hos Ali
  if (pausad || !ui.butiksOverlay.hidden || !medEl2.hidden || medKo.length || performance.now() - senasteSms < 25000) return;
  S.smsKo.shift(); sms(f.vem, f.text, f.id); sparaSnart();
}
setInterval(() => { slappNya(); kollaAliKo(); kollaSmsKo(); }, 3000);
function aliStolt(id, namn, arAlis) {
  if (!arAlis || !namn) return;
  S.aliStolt = S.aliStolt || [];
  if (S.aliStolt.includes(id)) return;
  S.aliStolt.push(id);
  if (S.aliStolt.length > 6 && S.aliStolt.length % 3) return;   // inte varje gång efter de första
  aliSenare(ALI_STOLT[(S.aliStolt.length - 1) % ALI_STOLT.length](namn.toLowerCase()));
}
function kollaAli() {
  const synliga = Object.entries(MASKINER).filter(([, m]) => m.syns()).map(([id]) => id).concat(forstaUpp() ? ['sang'] : []);
  if (!S.aliSett) { S.aliSett = synliga; return; }
  for (const id of synliga) if (!S.aliSett.includes(id)) {
    S.aliSett.push(id);
    const m = id === 'sang' ? { ikon: '🛏️', namn: 'Säng' } : MASKINER[id];
    if (ALI_SPECIAL[id]) { aliSenare(ALI_SPECIAL[id]); continue; }
    aliSenare([`Ali här. Satt uppe med AI:n hela natten. ${m.ikon} ${m.namn} är klar. Kom innan nio, då stänger jag och promptar nästa.`, `Ali här. Ny instruktion inne: ${m.ikon} ${m.namn}. Kom innan nio. Jag stänger nio. Inte en minut senare.`,
      `${m.ikon} ${m.namn} har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt.`,
      `Ny grej: ${m.ikon} ${m.namn}. Köp den så jag slipper titta på den.`][Math.floor(Math.random() * 3)]);
  }
}

// ---------- Rolf själv ----------
const rolfGubbe = new THREE.Group();
const rolfBen = [];
{
  const orange = mat(0xff7a1a), refl = mat(0xf5f5f5, { emissive: 0x999999 }), byx = mat(0x2c3e50), hud = mat(0xd9a07a);
  for (const x of [-0.1, 0.1]) { const ben = new THREE.Group(); ben.position.set(x, 0.85, 0); ben.add(at(box(0.15, 0.85, 0.17, byx), 0, -0.42, 0)); rolfGubbe.add(ben); rolfBen.push(ben); }
  rolfGubbe.add(at(box(0.5, 0.65, 0.3, orange), 0, 1.2, 0));
  // ölmagen
  const mage = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 12), orange); mage.scale.set(1, 0.9, 0.85); mage.position.set(0, 1.1, 0.1); rolfGubbe.add(mage);
  const navel = new THREE.Mesh(new THREE.SphereGeometry(0.29, 16, 12, 0, Math.PI * 2, Math.PI * 0.62, Math.PI * 0.2), mat(0xf0e6d8)); navel.scale.set(1, 0.9, 0.86); navel.position.set(0, 1.1, 0.11); navel.rotation.x = -Math.PI / 2 + 0.3; rolfGubbe.add(navel); // linnet som inte räcker hela vägen
  for (const y of [1.0, 1.28]) { const r2 = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.025, 6, 20), refl); r2.rotation.x = Math.PI / 2; r2.scale.set(1, 0.85, 1); r2.position.set(0, y, 0.08); rolfGubbe.add(r2); }
  for (const x of [-0.13, 0.13]) rolfGubbe.add(at(box(0.06, 0.5, 0.03, orange), x, 1.45, 0.17)); // hängslen
  const huvud = new THREE.Group(); huvud.position.set(0, 1.72, 0); rolfGubbe.add(huvud);
  huvud.add(new THREE.Mesh(new THREE.SphereGeometry(0.18, 14, 12), hud));
  const skagg = new THREE.Mesh(new THREE.SphereGeometry(0.183, 14, 10, 0.2, Math.PI - 0.4, Math.PI * 0.55, Math.PI * 0.4), mat(0x6e6a64)); skagg.position.z = 0.005; huvud.add(skagg); // skäggstubb
  ansikte(huvud, 0.01, { bryn: -0.1, brynFarg: 0x5a554e, nasa: 0xe0605a, nasaStor: 0.06, vem: 'rolf' });   // röd potatisnäsa
  huvud.add(at(box(0.36, 0.08, 0.36, mat(0x2e8b57)), 0, 0.13, 0.02));
  huvud.add(at(box(0.3, 0.03, 0.18, mat(0x2e8b57)), 0, 0.1, 0.22));
  for (const x of [-0.18, 0.18]) huvud.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), hud), x, 0, 0));
  rolfGubbe.add(at(box(0.12, 0.55, 0.12, orange), -0.31, 1.2, 0));
  const hogerArm = new THREE.Group(); hogerArm.position.set(0.31, 1.45, 0);
  hogerArm.add(at(box(0.12, 0.55, 0.12, orange), 0, -0.25, 0));
  hogerArm.add(at(cyl(0.035, 0.035, 0.12, mat(0xc0c7ce, { metalness: 0.7, roughness: 0.3 })), 0, -0.55, 0.05)); // ölburk
  rolfGubbe.add(hogerArm); rolfGubbe.userData.arm = hogerArm;
}
rolfGubbe.traverse((o) => { if (o.isMesh) o.castShadow = true; });
const pappaGubbe = new THREE.Group(), pappaBen = [];
{
  const jacka = mat(0x6b7a5a), byx = mat(0x3a4a6a), hud = mat(0xe0b08a), har = mat(0x9a9590);
  for (const x of [-0.1, 0.1]) { const ben = new THREE.Group(); ben.position.set(x, 0.85, 0); ben.add(at(box(0.15, 0.85, 0.17, byx), 0, -0.42, 0)); pappaGubbe.add(ben); pappaBen.push(ben); }
  pappaGubbe.add(at(box(0.48, 0.7, 0.28, jacka), 0, 1.2, 0));
  for (const x of [-0.3, 0.3]) pappaGubbe.add(at(box(0.11, 0.6, 0.11, jacka), x, 1.2, 0.02));
  pappaGubbe.add(at(cyl(0.07, 0.08, 0.1, hud), 0, 1.6, 0));
  const huvud = new THREE.Group(); huvud.position.set(0, 1.78, 0); pappaGubbe.add(huvud);
  huvud.add(new THREE.Mesh(new THREE.SphereGeometry(0.17, 14, 12), hud));
  const flint = new THREE.Mesh(new THREE.SphereGeometry(0.175, 14, 10, 0, Math.PI * 2, Math.PI * 0.25, Math.PI * 0.3), har); huvud.add(flint);   // hår runt flinten
  ansikte(huvud, 0.0, { bryn: 0, brynFarg: 0x77736e, vem: 'pappa' });
  for (const x of [-0.065, 0.065]) { const glas = new THREE.Mesh(new THREE.TorusGeometry(0.038, 0.007, 6, 14), mat(0x222222)); glas.position.set(x, 0.03, 0.17); huvud.add(glas); }
  huvud.add(at(box(0.06, 0.008, 0.008, mat(0x222222)), 0, 0.03, 0.17));
  const tumme = new THREE.Group(); tumme.position.set(0.3, 1.45, 0.05); tumme.add(at(box(0.11, 0.5, 0.11, jacka), 0, -0.22, 0)); tumme.add(at(box(0.04, 0.09, 0.04, hud), 0, -0.52, 0.06)); pappaGubbe.add(tumme);
  pappaGubbe.userData.arm = tumme;
}
pappaGubbe.traverse((o) => { if (o.isMesh) o.castShadow = true; });
pappaGubbe.visible = false; scen.add(pappaGubbe);
const rolfBesok = rolfGubbe.clone(); rolfBesok.visible = false; scen.add(rolfBesok);
{ // klonen behöver ett eget levande ansikte
  const o = FIGURER.find((f) => f.vem === 'rolf'), oi = rolfGubbe.children.indexOf(o.huvud), h = rolfBesok.children[oi];
  FIGURER.push({ vem: 'rolf', huvud: h, ogon: o.ogon.map((e) => h.children[o.huvud.children.indexOf(e)]), mun: h.children[o.huvud.children.indexOf(o.mun)], blink: 2 });
}
// pratbubblor ovanför huvudet
function bubbla(grupp, text) {
  if (grupp.userData.bubbla) { grupp.remove(grupp.userData.bubbla); grupp.userData.bubbla = null; }
  if (!text) return;
  const c = document.createElement('canvas'); c.width = 512; c.height = 128; const x = c.getContext('2d');
  x.fillStyle = '#fff'; x.beginPath(); x.roundRect(4, 4, 504, 96, 30); x.fill(); x.beginPath(); x.moveTo(230, 100); x.lineTo(256, 126); x.lineTo(282, 100); x.fill();
  x.fillStyle = '#222'; x.textAlign = 'center'; let f = 44; do { x.font = `700 ${f}px system-ui`; f -= 2; } while (x.measureText(text).width > 470 && f > 20); x.fillText(text, 256, 66);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false })); sp.scale.set(1.6, 0.4, 1); sp.position.y = 2.35; sp.renderOrder = 6; grupp.add(sp); grupp.userData.bubbla = sp;
}
// Pappa: alltid glad, obrydd, stockholmsslang. Bryr sig om motorer och sport. Allt känslosamt = "Aha, vad lugnt då."
const PAPPA_SCEN = [
  ['pappa', 'Nämen tjenare! Tjena Rolf!'], ['rolf', 'Tjena.'], ['pappa', 'Scania va? Vilken årsmodell?'], ['rolf', 'Nittioåtta. V8.'],
  ['pappa', 'Oj oj oj. Vilken kärra. Låter som en dröm.'], ['rolf', 'Den lurar på.'], ['pappa', 'Såg du hockeyn igår? Tradigt värre.'], ['rolf', 'Ja knoppa i andra perioden.'],
  ['pappa', 'Smart. Man ska lurva när man kan.'], ['pappa', 'Tjenare! Vilket ställe du har!', 'du'], ['du', 'Pappa … jag bor på en soptipp.'],
  ['pappa', 'Aha, vad lugnt då!', 'du'], ['du', 'Mamma är jätteorolig.'], ['pappa', 'Aha, vad lugnt då. Hon har alltid nåt.', 'du'],
  ['pappa', 'Mamma skicka med lite grejer.', 'burkar'], ['pappa', 'Ja gör bara som hon säger. Då blir de lugnt hemma.'], ['pappa', 'Och va du än gör: mal dom inte. Då tror hon att du ätit upp allt. Då gör hon mer.', 'du'], ['pappa', 'Fint jobbat!', 'du'], ['pappa', 'Nä, nu ska ja blada. Ska tjacka vurre på macken.'], ['pappa', 'Mamma hälsar!', 'du'],
];
// senare besök: pappa kommer ensam, kuckelurar lite, ställer ner burkar och bladar
const PAPPA_KORT = [
  [['pappa', 'Tjenare! Bara åkte förbi.', 'du'], ['pappa', 'Hört att Djurgår\'n tjacka en ny back. Bra grej.'], ['du', 'Jag har inte sovit på två dagar.'], ['pappa', 'Aha, vad lugnt då!', 'du']],
  [['pappa', 'Tjena tjena! Nya doser, kolla.', 'du'], ['pappa', 'Fick dom på rea. Sköna som tofflor. Riktiga pjuck.'], ['du', 'Jag saknar er ibland.'], ['pappa', 'Aha, vad lugnt då!', 'du']],
  [['pappa', 'Hallå där! Ja kör runt med nya jonnen idag.', 'du'], ['pappa', 'Ingen motor. Tradigt. Men nyttigt säger mamma.'], ['du', 'Jag är lite ledsen idag.'], ['pappa', 'Aha, vad lugnt då. Ät en vurre.', 'du']],
  [['pappa', 'Tjenare! Mamma sa att ja skulle kolla läget.', 'du'], ['pappa', 'Läget e bra. Nu har ja kollat.'], ['du', 'Har du saknat mig?'], ['pappa', 'Aha, vad lugnt då! Bra snöre hit förresten.', 'du']],
  [['pappa', 'Tjena! Såg Formel 1 i natt. Vilket race!', 'du'], ['pappa', 'Verstappen var en räv bakom örat.'], ['du', 'Jag har ingen säng, pappa.'], ['pappa', 'Aha, vad lugnt då! Kvarta på golvet, de e bra för ryggen.', 'du']],
  [['pappa', 'Hallå! Plurret e varmt idag, ja har badat.', 'du'], ['du', 'Mamma grät i telefon.'], ['pappa', 'Aha, vad lugnt då. Hon gråter på Bingolotto oxå.', 'du']],
  [['pappa', 'Tjenare! Bara åkte förbi.', 'du'], ['pappa', 'Du, en sak. Varför har du inte kommit längre?'], ['du', 'Va? Jag har byggt allt det här själv.'], ['pappa', 'Aha, vad lugnt då. Grannens grabb har två lägenheter.', 'du']],
  [['pappa', 'Hallå! Skjulet lutar lite va?', 'du'], ['pappa', 'Hade du inte tänkt ha ett riktigt hus vid det här laget?'], ['du', 'Jag gör så gott jag kan.'], ['pappa', 'Aha, vad lugnt då! Ja hade körkort och Volvo när ja var i din ålder.', 'du']],
  [['pappa', 'Tjena! Ska du bo här i vinter oxå?', 'du'], ['du', 'Jag vet inte, pappa.'], ['pappa', 'Aha, vad lugnt då. Långrör, de e grejen. Mamma köper.', 'du']],
  [['pappa', 'Tjenare! Fila nötterna gör du va?', 'du'], ['du', 'Ibland.'], ['pappa', 'Aha, vad lugnt då!', 'du'], ['pappa', 'Kolla smulan. Ny. AIK-färger. Fast ja e för Djurgår\'n.']],
];
// när man malt mammas saker: mamma tjatar hemma och pappa mår sämre. Han blir dryg.
const PAPPA_DRYG = [
  [['pappa', 'Tjena.', 'du'], ['pappa', 'Mamma har kokat sylt i tre dagar. Hon tror att du äter upp allt.'], ['du', 'Förlåt, pappa.'], ['pappa', 'Ja SA ju de. Mal dom inte. Aha, vad lugnt då. För dig.', 'du']],
  [['pappa', 'Jaha. Här står du.', 'du'], ['pappa', 'Ja har inte sett hockeyn på en vecka. Mamma pratar över den.'], ['pappa', 'Om grytvantar.']],
  [['pappa', 'Tjena.', 'du'], ['pappa', 'Ja knoppar i garaget nu. De e lugnare där.'], ['du', 'Är det så illa?'], ['pappa', 'Aha, vad lugnt då. Säger du. Som maler sylt.', 'du']],
  [['pappa', 'Hej.', 'du'], ['pappa', 'Hon har köpt en egen frys. Till sylten.'], ['pappa', 'Ja varnade dig. Men vad vet ja. Ja e bara pappa.']],
];
const PAPPA_DRYG_SLUT = [['pappa', 'Mamma skicka med lite grejer. MAL INTE dom.', 'burkar'], ['pappa', 'Ja ska blada nu.'], ['pappa', 'Mamma hälsar. Typ.', 'du']];
const PAPPA_SLUT = [['pappa', 'Mamma skicka med lite grejer.', 'burkar'], ['pappa', 'Ja gör bara som hon säger. Då blir de lugnt hemma.'], ['pappa', 'Och va du än gör: mal dom inte. Då tror hon att du ätit upp allt. Då gör hon mer.', 'du'], ['pappa', 'Fint jobbat!', 'du'], ['pappa', 'Nä, nu ska ja blada.'], ['pappa', 'Mamma hälsar!', 'du']];
const pappaBesok = { aktiv: false, t: 0, steg: 0, fas: '', scen: PAPPA_SCEN, medRolf: true };
// pappa ställer ner 2–4 burkar vid skjulet. De tar plats. Ali vill inte ha dem. Tacka mamma.
// mögel och stank: gröna tussar och lukt som stiger
function mogel(g, h, bara = false) {
  if (!bara) for (let i = 0; i < 6; i++) g.add(at(new THREE.Mesh(new THREE.IcosahedronGeometry(0.025 + Math.random() * 0.02, 0), mat([0x8aa860, 0xd8e0c8, 0x5a7a40][i % 3])), Math.random() * 0.2 - 0.1, h * 0.6, Math.random() * 0.14 - 0.07));
  const lm = new THREE.MeshBasicMaterial({ color: 0x9ac040, transparent: true, opacity: 0.35, depthWrite: false });
  for (let i = 0; i < 4; i++) { const l = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 4), lm); l.userData.lukt = { fas: i / 4, x: Math.random() * 0.1 - 0.05, h }; g.add(l); }
}
function uppdateraLukt(t) {
  for (const p of placerade) {
    if (!p.typ.startsWith('burk_mogel') && p.typ !== 'burk_vissen') continue;
    for (const o of p.mesh.children) { const L = o.userData.lukt; if (!L) continue; const f = (t * 0.35 + L.fas) % 1; o.position.set(L.x + Math.sin(f * 9 + L.fas * 6) * 0.05, L.h + f * 0.7, 0); o.scale.setScalar(0.6 + f * 1.6); o.material.opacity = 0.35 * (1 - f); }
  }
}
// mat och blommor från mamma ruttnar över natten – och drar ner trivseln
const RUTTNAR = { burk_kompott: 'burk_mogel_kompott', burk_raggmunk: 'burk_mogel_raggmunk', burk_blomma: 'burk_vissen' };
function ruttnaOverNatten() {
  let n = 0;
  for (const p of [...placerade]) {
    const ny = RUTTNAR[p.typ]; if (!ny) continue;
    p.mesh.parent.remove(p.mesh); interaktor.avregistrera(p.mesh); placerade.splice(placerade.indexOf(p), 1);
    const sp = S.placerade.find((x) => x.id === p.id); if (sp) sp.typ = ny;
    placera({ ...sparbar(p), typ: ny }, false); n++;
  }
  for (const x of S.hotbar) if (x && RUTTNAR[x.typ]) { x.typ = RUTTNAR[x.typ]; n++; }
  for (const [t, ny] of Object.entries(RUTTNAR)) if (S.forrad[t]) { S.forrad[ny] = (S.forrad[ny] || 0) + S.forrad[t]; delete S.forrad[t]; n++; }
  if (n) { ritaHotbar(); ritaHand(); setTimeout(() => ui.toast('🤢 Något luktar … Mammas mat har möglat och blommorna har vissnat. Trivseln sjunker.', 'fel'), 6500); sparaSnart(); }
}
// kylen: färsk mat möglar inte där inne
const KYLBAR = new Set(['burk_kompott', 'burk_raggmunk', 'burk_sill']);
S.kylen = S.kylen || {};
const kylAntal = () => Object.values(S.kylen).reduce((a, n) => a + n, 0);
const KYL_MAX = 12;
function stallIKyl() {
  if (kylAntal() >= KYL_MAX) { ui.toast('Kylen är full. Mamma har överträffat kylen.', 'fel'); ljud.fel(); return; }
  const t = valdTyp(); taBortVald(); S.kylen[t] = (S.kylen[t] || 0) + 1; ljud.placera();
  ui.toast(`🧊 ${info(t).namn} står i kylen (${kylAntal()}/${KYL_MAX}). Den möglar inte – men ingen kommer att äta den heller.`, 'bra'); sparaSnart();
}
function taUrKyl() {
  const t = Object.keys(S.kylen).find((k) => S.kylen[k] > 0); if (!t || !harRumFor(t)) { ljud.fel(); return; }
  S.kylen[t]--; if (!S.kylen[t]) delete S.kylen[t]; laggTill(t); ljud.plock(); sparaSnart();
}
// kompost: mat och vissna blommor slängs på gräset ute i skogen. Ingen respekt försvinner – det är ju natur.
const KOMPOST = new Set(['burk_kompott', 'burk_raggmunk', 'burk_mogel_kompott', 'burk_mogel_raggmunk', 'burk_blomma', 'burk_vissen']);
const kompostHogar = [];
function kompostera(typ, x, z) {
  const hog = new THREE.Group();
  for (let i = 0; i < 5; i++) hog.add(at(new THREE.Mesh(new THREE.IcosahedronGeometry(0.06 + Math.random() * 0.05, 0), mat([0x5a4030, 0x6a5a30, 0x4a6a30][i % 3])), Math.random() * 0.2 - 0.1, 0.04, Math.random() * 0.2 - 0.1));
  hog.position.set(x, 0, z); scen.add(hog); kompostHogar.push({ g: hog, t: 0 });
  S.komposterat = (S.komposterat || 0) + 1; ljud.placera();
  ui.toast(`🌱 Du komposterade ${info(typ).namn.toLowerCase().replace(/ \(.*\)/, '')}. Naturen tar hand om det.`, 'bra');
  if (S.komposterat === 3) setTimeout(() => sms('rolf', 'Såg att du slänger mat i skogen. Smart. Grävlingen äter vad som helst. Han heter Göran. /R'), 5000);
  sparaSnart();
}
function uppdateraKompost(dt) {
  for (let i = kompostHogar.length - 1; i >= 0; i--) { const k = kompostHogar[i]; k.t += dt; if (k.t > 20) { k.g.scale.setScalar(Math.max(0.01, 1 - (k.t - 20) / 10)); if (k.t > 30) { scen.remove(k.g); kompostHogar.splice(i, 1); } } }
}
// mammas skit: mest burkar och saft, men också sånt man ALDRIG bett om
const MAMMA_SAKER = ['burk_lingon', 'burk_lingon', 'burk_honung', 'burk_saft', 'burk_sill', 'burk_kompott', 'burk_kompott', 'burk_raggmunk', 'burk_blomma', 'burk_vante', 'burk_sockor', 'burk_duk', 'burk_toarulle', 'burk_porslin', 'burk_tavla', 'burk_tavla2', 'burk_tavla3'];
function stallBurkar() {
  const n = 2 + Math.floor(Math.random() * 5) + Math.min(6, Math.floor((S.burkMalda || 0) / 3));   // 2–6 st – fler ju mer du maler (mamma tror att du äter upp allt)
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, r = 0.6 + Math.random() * 1.1;
    const x = pappaGubbe.position.x + Math.cos(a) * r, z = pappaGubbe.position.z + Math.sin(a) * r;
    placera({ id: 'p' + (S.nastaId++), typ: MAMMA_SAKER[Math.floor(Math.random() * MAMMA_SAKER.length)], x, z, r: 0, r8: Math.floor(Math.random() * 8) });
  }
  S.burkar = (S.burkar || 0) + n;
  ui.toast(`🍯 Pappa ställde ner ${n} saker från mamma. Totalt ${S.burkar}. Ingen av dem behövs.`, '');
}
function startaPappaBesok(kort = !!S.pappaBesok) {
  pappaBesok.medRolf = !kort;
  const dryg = (S.burkMalda || 0) >= 2;
  pappaBesok.scen = !kort ? PAPPA_SCEN : dryg ? [...PAPPA_DRYG[(S.pappaGang || 0) % PAPPA_DRYG.length], ...PAPPA_DRYG_SLUT] : [...PAPPA_KORT[(S.pappaGang || 0) % PAPPA_KORT.length], ...PAPPA_SLUT];
  S.pappaGang = (S.pappaGang || 0) + (kort ? 1 : 0);
  const P = new THREE.Vector3(SKJUL.x + 3.2, 0, SKJUL.z + 4.2);
  Object.assign(pappaBesok, { aktiv: true, t: 0, steg: 0, fas: 'kommer', P, start: new THREE.Vector3(P.x + 1, 0, TOMT + 2), rolfStart: new THREE.Vector3(TIPP.x + 6, 0, TIPP.z - 4) });
  pappaGubbe.position.copy(pappaBesok.start); pappaGubbe.visible = true;
  rolfBesok.position.copy(pappaBesok.rolfStart); rolfBesok.visible = pappaBesok.medRolf;
  ui.toast(kort ? 'Pappa kommer gående. Han bär på en kasse …' : 'Någon kommer gående på vägen …', '');
}
function gaMot(g, mal, dt, ben, fart = 1.4) {
  const d = mal.clone().sub(g.position); d.y = 0; const L = d.length();
  if (L < 0.05) { ben.forEach((b) => { b.rotation.x *= 0.8; }); return true; }
  g.position.addScaledVector(d.normalize(), Math.min(L, fart * dt)); g.rotation.y = Math.atan2(d.x, d.z);
  const sv = Math.sin(performance.now() / 160) * 0.5; ben[0].rotation.x = sv; ben[1].rotation.x = -sv; return false;
}
function vand(g, mot) { g.rotation.y = Math.atan2(mot.x - g.position.x, mot.z - g.position.z); }
function uppdateraPappa(dt) {
  if (!pappaBesok.aktiv) {
    const dags = !S.pappaBesok ? (S.kapitelKlart && S.dag >= 6) : S.dag >= (S.pappaNasta || 0);
    if (dags && ui.igang && !pausad && !sover && Math.hypot(spelare.pos.x - SKJUL.x, spelare.pos.z - SKJUL.z) < 14 && Math.random() < dt / 20) startaPappaBesok();
    return;
  }
  const b = pappaBesok, P = b.P, R = P.clone().add(new THREE.Vector3(1.3, 0, 0.3));
  if (b.fas === 'kommer') {
    const a = gaMot(pappaGubbe, P, dt, pappaBen), c = !b.medRolf || gaMot(rolfBesok, R, dt, [rolfBesok.children[0], rolfBesok.children[1]], 1.1);
    if (a && c) { b.fas = 'pratar'; b.t = 0; b.steg = 0; vand(pappaGubbe, rolfBesok.position); vand(rolfBesok, pappaGubbe.position); }
  } else if (b.fas === 'pratar') {
    b.t -= dt;
    if (b.t <= 0) {
      bubbla(pappaGubbe, null); bubbla(rolfBesok, null);
      const rad = b.scen[b.steg++];
      if (!rad) { b.fas = 'gar'; S.pappaBesok = true; S.pappaNasta = S.dag + 2 + Math.floor(Math.random() * 2); sparaSnart(); pappaGubbe.userData.arm.rotation.x = 0; return; }
      const [vem, text, till] = rad;
      if (vem === 'du') { vand(pappaGubbe, spelare.pos); ui.toast('Du: ' + text, ''); prata('du', text); b.t = 1.4 + text.length * 0.06; return; }
      const g = vem === 'pappa' ? pappaGubbe : rolfBesok;
      pappaGubbe.userData.arm.rotation.x = 0;
      if (till === 'du') { vand(pappaGubbe, spelare.pos); if (text.startsWith('Fint jobbat')) { pappaGubbe.userData.arm.rotation.x = -2.6; andraRespekt(2, 'Pappa sa "fint jobbat"'); } }
      if (till === 'burkar') stallBurkar();
      bubbla(g, text); if (text !== '…') prata(vem, text);
      b.t = text === '…' ? 2.2 : 1.6 + text.length * 0.06;
    }
  } else if (b.fas === 'gar') {
    const a = gaMot(pappaGubbe, b.start, dt, pappaBen), c = !b.medRolf || gaMot(rolfBesok, b.rolfStart, dt, [rolfBesok.children[0], rolfBesok.children[1]], 1.1);
    if (a) pappaGubbe.visible = false; if (c) rolfBesok.visible = false;
    if (a && c) b.aktiv = false;
  }
}
rolfGubbe.visible = false; scen.add(rolfGubbe);
const ROLF_FART = 2.0;
const rolfVag = () => [
  new THREE.Vector3(TIPP.x + 2.3, 0, TOMT + 1.6),
  new THREE.Vector3(postlada.position.x + 0.75, 0, TOMT + 1.6),
  new THREE.Vector3(postlada.position.x + 0.75, 0, postlada.position.z),
];
const arende = { aktiv: false, steg: 'gar', i: 0, t: 0, bak: false };
function startaArende() { Object.assign(arende, { aktiv: true, steg: 'gar', i: 1, t: 0, bak: false }); rolfGubbe.position.copy(rolfVag()[0]); rolfGubbe.visible = true; }
function uppdateraRolf(dt) {
  const vag = rolfVag();
  arende.t += dt;
  const tt = performance.now() / 1000;
  rolfGubbe.rotation.z = Math.sin(tt * 2.3) * 0.09;           // vinglar lite
  if (arende.steg === 'gar') {
    const mal = vag[arende.i];
    const d = mal.clone().sub(rolfGubbe.position); d.y = 0;
    const l = d.length();
    if (l < 0.05) {
      if (!arende.bak && arende.i === vag.length - 1) { arende.steg = 'lada'; arende.t = 0; rolfGubbe.rotation.y = -Math.PI / 2; return; }
      if (arende.bak && arende.i === 0) { arende.aktiv = false; rolfGubbe.visible = false; return; }
      arende.i += arende.bak ? -1 : 1; return;
    }
    const steg = Math.min(l, ROLF_FART * dt);
    rolfGubbe.position.addScaledVector(d.normalize(), steg);
    const sida = new THREE.Vector3(-d.z, 0, d.x).multiplyScalar(Math.sin(tt * 1.7) * 0.25 * dt);   // lite sicksack
    rolfGubbe.position.add(sida);
    rolfGubbe.rotation.y = Math.atan2(d.x, d.z);
    rolfBen[0].rotation.x = Math.sin(tt * 8) * 0.5; rolfBen[1].rotation.x = -Math.sin(tt * 8) * 0.5;
  } else if (arende.steg === 'lada') {
    rolfBen.forEach((b) => (b.rotation.x = 0));
    rolfGubbe.userData.arm.rotation.x = arende.t < 1.6 ? -1.1 : 0;
    if (arende.t > 0.2) postLuckaMal = 1;
    if (arende.t > 0.9 && !arende.bytt) {
      arende.bytt = true;
      const onskan = ROLF[S.rolf.i];
      if (ROLF_TACK[S.post.tillRolf]) {
        const id = S.post.tillRolf; S.post.tillRolf = null;
        S.rolf.fatt = [...(S.rolf.fatt || []), id]; S.rolf.tack = (S.rolf.tack || 0) + 1;
        S.post.tillMig = [...S.post.tillMig, 'sak:' + ROLF_TACK[id].ger, 'tack:' + id];
        ljud.placera(); sparaSnart();
        // först blir han överraskad och rörd – sen berättar han vad han lagt i lådan
        if (S.rolfNummer) setTimeout(() => sms('rolf', ROLF_TACK[id].text), 3000);
      } else if (S.rolf.jobb != null && S.post.tillRolf === jobbNu().vara) {
        const j = jobbNu(); S.post.tillRolf = null; S.post.tillMig = [...S.post.tillMig, `mynt:${j.ja}`, 'jobb'];
        S.rolf.jobb = null; S.rolf.jobbNr = j.n + 1; S.rolf.ja = (S.rolf.ja || 0) + 1; S.rolf.jobbTack = j.n; rolfLadeILadan();
        if (S.rolf.ja % 2 === 0) S.rolf.boter = Math.round(j.ja * 0.4 / 50) * 50;    // chefen märker vartannat jobb
        ljud.placera(); sparaSnart();
      } else if (onskan && S.post.tillRolf === onskan.vara) {
        S.post.tillRolf = null;
        S.post.tillMig = [...onskan.belo];
        S.rolf.i++; S.rolf.aktiv = false; if (S.rolf.i > 1) rolfLadeILadan();
        ljud.placera(); sparaSnart();
      }
      visaPostInne();
    }
    if (arende.t > 1.8) postLuckaMal = 0;
    if (arende.t > 2.3) { arende.steg = 'gar'; arende.bak = true; arende.i = vag.length - 2; arende.bytt = false; }
  }
}

// ---------- Sopbilen ----------
// Kör in längs vägen → stannar (Rolf går till postlådan om det ligger något där) →
// svänger → backar in genom bommen → tippar flaket bakåt → kör ut → fortsätter.
const VAG_Z = TOMT + 3;
const sopbil = new THREE.Group();
const flak = new THREE.Group();
{
  const gron = mat(0x2e8b57), vit = mat(0xeeeeee), svart = mat(0x1c1c1c);
  sopbil.add(at(box(1.6, 1.5, 2.1, vit), 2.3, 1.15, 0));          // hytt (fram = +x)
  sopbil.add(at(box(0.05, 0.6, 1.7, mat(0x9fd8ff, { metalness: 0.3, roughness: 0.1 })), 3.11, 1.45, 0));
  sopbil.add(at(box(5.4, 0.3, 2.0, svart), 0, 0.55, 0));          // chassi
  for (const x of [-1.8, -0.6, 2.2]) for (const z of [-1.0, 1.0]) {
    const h = cyl(0.45, 0.45, 0.3, svart, 14); h.rotation.x = Math.PI / 2; h.position.set(x, 0.45, z); sopbil.add(h);
  }
  // flaket har gångjärnet längst bak och tippar bakåt
  const korg = box(3.6, 1.6, 2.1, gron); korg.position.set(1.8, 0.8, 0); flak.add(korg);
  for (const z of [-1.06, 1.06]) { const l = skylt('♻️', 0.9, 0.9, '#2e8b57', '#fff'); l.position.set(1.8, 0.8, z); l.rotation.y = z > 0 ? 0 : Math.PI; flak.add(l); }
  flak.position.set(-2.4, 0.7, 0); sopbil.add(flak);
}
sopbil.traverse((o) => { if (o.isMesh) o.castShadow = true; });
sopbil.position.set(-90, 0, VAG_Z); scen.add(sopbil);
const bil = { fas: 'borta', t: -SOPBIL_FORSTA, fart: 0 };
// varje present till Rolf: han kommer oftare (−13 % väntan per present, minst 30 s) och tippar lite mer
const sopbilVar = () => Math.max(30, SOPBIL_VAR / (1 + 0.15 * (S.rolf.presenter || 0)));
const sopbilExtra = () => Math.min(8, S.rolf.presenter || 0);
const flygande = [];
function ton(f, d, vol, typ = 'square', fordrojning = 0) {
  const c = ljudCtx(); if (!c) return;
  const o = c.createOscillator(), g = c.createGain(), t = c.currentTime + fordrojning;
  o.type = typ; o.frequency.value = f; g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  o.connect(g).connect(c.destination); o.start(t); o.stop(t + d + 0.02);
}
const bilVolym = () => Math.max(0, 1 - sopbil.position.distanceTo(kamera.position) / 70) ** 2;
function tuta() { const v = 0.02 + 0.12 * bilVolym(); ton(392, 0.25, v); ton(330, 0.25, v, 'square', 0.28); }
// motorljud: en gammal diesel som brummar, skakar och spruttar – hörs tydligare ju närmare bilen är
let bilMotor = null, bilPutt = 0;
function brunBrus(c, sek = 2) {   // mörkt brus (som ett avgasrör)
  const b = c.createBuffer(1, c.sampleRate * sek, c.sampleRate), d = b.getChannelData(0); let v = 0;
  for (let i = 0; i < d.length; i++) { v = (v + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = v * 3.5; }
  return b;
}
function motorLjud() {
  const c = lac; if (!c) return;
  if (!bilMotor) {
    const ut = c.createGain(); ut.gain.value = 0; ut.connect(maskinBus());
    // 1) cylindrarna: brus som pulseras i takt med tändningarna
    const brus = c.createBufferSource(); brus.buffer = brunBrus(c); brus.loop = true;
    const bp = c.createBiquadFilter(); bp.type = 'lowpass'; bp.frequency.value = 380; bp.Q.value = 0.8;
    const puls = c.createGain(); puls.gain.value = 0.5;
    const tand = c.createOscillator(); tand.type = 'sawtooth'; tand.frequency.value = 22;
    const djup = c.createGain(); djup.gain.value = 0.5; tand.connect(djup); djup.connect(puls.gain);
    brus.connect(bp); bp.connect(puls); puls.connect(ut);
    // 2) mullret: låg grundton + en halvton under (ojämn gammal motor)
    const mull = c.createOscillator(); mull.type = 'triangle'; mull.frequency.value = 44;
    const mull2 = c.createOscillator(); mull2.type = 'sine'; mull2.frequency.value = 22;
    const mg = c.createGain(); mg.gain.value = 0.35; mull.connect(mg); mull2.connect(mg);
    const mlp = c.createBiquadFilter(); mlp.type = 'lowpass'; mlp.frequency.value = 160; mg.connect(mlp); mlp.connect(ut);
    // 3) skrammel: lite ljust brus från plåten
    const skr = c.createBufferSource(); skr.buffer = brunBrus(c, 1); skr.loop = true; skr.playbackRate.value = 4;
    const hp = c.createBiquadFilter(); hp.type = 'bandpass'; hp.frequency.value = 1800; hp.Q.value = 2;
    const sg = c.createGain(); sg.gain.value = 0.05; skr.connect(hp); hp.connect(sg); sg.connect(ut);
    // ojämnt varv: en långsam vobbel på tändningen
    const vob = c.createOscillator(); vob.frequency.value = 0.7; const vg = c.createGain(); vg.gain.value = 1.5; vob.connect(vg); vg.connect(tand.frequency);
    for (const n of [brus, tand, mull, mull2, skr, vob]) n.start();
    bilMotor = { ut, tand, mull, mull2, bp, sg };
  }
  const t = c.currentTime, pa = bil.fas !== 'borta' && ui.igang, vol = pa ? bilVolym() : 0, fart = Math.abs(bil.fart);
  bilMotor.ut.gain.setTargetAtTime(0.32 * vol, t, 0.25);
  const varv = 20 + fart * 2.2;                                   // tändningar per sekund
  bilMotor.tand.frequency.setTargetAtTime(varv, t, 0.4);
  bilMotor.mull.frequency.setTargetAtTime(varv * 2, t, 0.4); bilMotor.mull2.frequency.setTargetAtTime(varv, t, 0.4);
  bilMotor.bp.frequency.setTargetAtTime(300 + fart * 45, t, 0.4);
  bilMotor.sg.gain.setTargetAtTime(0.03 + Math.min(0.06, fart * 0.006), t, 0.3);
  // sprutt: ibland en feltändning – en smäll i avgasröret
  if (vol > 0.02 && t > bilPutt) {
    bilPutt = t + 0.6 + Math.random() * (fart > 1 ? 1.5 : 3.5);
    const ant = Math.random() < 0.3 ? 3 : 1;
    for (let k = 0; k < ant; k++) {
      const src = c.createBufferSource(); src.buffer = brunBrus(c, 0.12);
      const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 160 + Math.random() * 220; f.Q.value = 1.5;
      const g = c.createGain(), t0 = t + k * (0.07 + Math.random() * 0.05);
      g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(0.9 * vol, t0 + 0.005); g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.11);
      src.connect(f); f.connect(g); g.connect(maskinBus()); src.start(t0); src.stop(t0 + 0.13);
    }
  }
}
function tippaLast() {
  ljud.borsta(); ljud.placera();
  const ggr = S.rolf.extra > 0 ? 2 : 1;
  if (S.rolf.extra > 0) S.rolf.extra--;
  const plats = MAX_SKRAP - skrapLista.length;
  const bak = new THREE.Vector3(); flak.localToWorld(bak.set(-0.2, 1.4, 0));
  for (let i = 0; i < Math.min(SOPBIL_LAST * ggr + trimNiva('sopbil') * 3 + sopbilExtra(), plats); i++) {
    const [x, z] = tippPlats();
    laggSkrap(x, z, slumpVariant(), Math.random() * 6.3);
    const sk = skrapLista[skrapLista.length - 1];
    const fran = bak.clone().add(new THREE.Vector3((Math.random() - 0.5) * 1.6, 0, (Math.random() - 0.5) * 0.6));
    flygande.push({ s: sk, fran, till: sk.position.clone(), t: -i * 0.05 });
    sk.position.copy(fran);
  }
  if (Math.hypot(spelare.pos.x - TIPP.x, spelare.pos.z - TIPP.z) < 30) ui.toast(ggr > 1 ? '🚛 Rolf tippade DUBBEL last på soptippen!' : '🚛 Sopbilen tippade en ny last på soptippen!', 'guld');
  if (!S.lappar.includes('sopbil') && !S.tippNyckel) visaLapp('sopbil');
}
let backPip = 0;
function uppdateraSopbil(dt) {
  const inne = TIPP.z + 4.2;     // där bilen stannar när den backat in
  bil.t += dt;
  if (bil.fas === 'borta') {
    bil.fart = 0;
    if (S.dag < 2 && bil.t > -SOPBIL_FORSTA) bil.t = -SOPBIL_FORSTA;   // sopbilen börjar komma dag 2 – dag 1 handlar om skrivaren och Ali
    if (bil.t >= 0) { bil.fas = 'in'; bil.t = 0; sopbil.position.set(-90, 0, VAG_Z); sopbil.rotation.y = 0; tuta(); }
  } else if (bil.fas === 'in') {
    const kvar = TIPP.x - sopbil.position.x;
    bil.fart = Math.min(10, 1 + kvar * 0.6);
    sopbil.position.x = Math.min(TIPP.x, sopbil.position.x + bil.fart * dt);
    if (kvar < 0.01) { bil.fart = 0; bil.t = 0; bil.fas = S.post.tillRolf ? 'rolf' : 'svang'; if (bil.fas === 'rolf') startaArende(); }
  } else if (bil.fas === 'rolf') {
    uppdateraRolf(dt);
    if (!arende.aktiv) { bil.fas = 'svang'; bil.t = 0; }
  } else if (bil.fas === 'svang') {
    bil.fart = 1.5;
    sopbil.rotation.y = -Math.min(1, bil.t / 1.4) * Math.PI / 2;    // bakänden mot tippen
    if (bil.t > 1.4) { bil.fas = 'backa'; bil.t = 0; }
  } else if (bil.fas === 'backa') {
    bom.userData.arm.rotation.z = Math.min(1.35, bom.userData.arm.rotation.z + dt * 1.5);
    if (bil.t > 0.8) {
      bil.fart = -2.5;
      sopbil.position.z = Math.max(inne, sopbil.position.z - 2.5 * dt);
      backPip += dt; if (backPip > 0.55) { backPip = 0; if (bilVolym() > 0.4) ton(1050, 0.18, 0.012 + 0.03 * bilVolym()); }
      if (sopbil.position.z <= inne) { bil.fas = 'tippar'; bil.t = 0; bil.tippat = false; bil.fart = 0; }
    }
  } else if (bil.fas === 'tippar') {
    flak.rotation.z = Math.min(1, bil.t / 1.4) * 0.85;
    if (bil.t > 1.3 && !bil.tippat) { bil.tippat = true; tippaLast(); }
    if (bil.t > 3) flak.rotation.z = Math.max(0, 0.85 - (bil.t - 3) * 0.6);
    if (bil.t > 4.5) { flak.rotation.z = 0; bil.fas = 'framat'; bil.t = 0; }
  } else if (bil.fas === 'framat') {
    bil.fart = 3;
    sopbil.position.z = Math.min(VAG_Z, sopbil.position.z + 3 * dt);
    if (sopbil.position.z >= VAG_Z) { bil.fas = 'svang2'; bil.t = 0; }
  } else if (bil.fas === 'svang2') {
    bom.userData.arm.rotation.z = Math.max(0, bom.userData.arm.rotation.z - dt * 1.5);
    sopbil.rotation.y = -Math.PI / 2 + Math.min(1, bil.t / 1.4) * Math.PI / 2;
    if (bil.t > 1.4) { bil.fas = 'ut'; bil.t = 0; tuta(); }
  } else if (bil.fas === 'ut') {
    bom.userData.arm.rotation.z = Math.max(0, bom.userData.arm.rotation.z - dt * 1.5);
    bil.fart = Math.min(10, 2 + bil.t * 3);
    sopbil.position.x += bil.fart * dt;
    if (sopbil.position.x > 90) { bil.fas = 'borta'; bil.t = -sopbilVar(); }
  }
  motorLjud();
  if (grind.userData.oppnar && grind.rotation.y > -1.6) grind.rotation.y -= dt * 1.2;
  for (let i = flygande.length - 1; i >= 0; i--) {
    const f = flygande[i]; f.t += dt * 1.4;
    if (f.t < 0) continue;
    const k = Math.min(1, f.t);
    f.s.position.lerpVectors(f.fran, f.till, k); f.s.position.y += Math.sin(k * Math.PI) * 1.2;
    f.s.rotation.x = k * 6;
    if (k >= 1) { f.s.position.copy(f.till); f.s.rotation.x = 0; flygande.splice(i, 1); }
  }
  // postlådans lucka och saker som flyger in i den
  if (performance.now() > luckaStangTid && !(bil.fas === 'rolf' && arende.steg === 'lada')) postLuckaMal = 0;
  postLucka.rotation.z += ((-1.35 * postLuckaMal) - postLucka.rotation.z) * Math.min(1, dt * 8);
  postInne.visible = postLucka.rotation.z < -0.3;
  { const f = postlada.userData.flagga, m = postlada.userData.flaggMal; f.rotation.z += (m - f.rotation.z) * Math.min(1, dt * 5); }
  if (postMarkor.visible) postMarkor.position.y = 2.05 + Math.sin(performance.now() / 300) * 0.08;
  for (let i = flygTillLada.length - 1; i >= 0; i--) {
    const f = flygTillLada[i]; f.t += dt / 0.6;
    const k = Math.min(1, f.t);
    f.m.position.lerpVectors(f.fran, f.till, k); f.m.position.y += Math.sin(k * Math.PI) * 0.4; f.m.rotation.y += dt * 8;
    if (k >= 1) { scen.remove(f.m); flygTillLada.splice(i, 1); }
  }
  // Rolfs nästa önskan kommer som sms en stund efter förra
  S.speltid += dt; if (ui.igang) S.vakenTid = (S.vakenTid || 0) + dt;
  aliTimer += dt; if (aliTimer > 0.5) { aliTimer = 0; kollaAli(); kollaVarningar(); }
}
let aliTimer = 0;

// ---------- Trivsel ----------
// ---------- Årstider och kyla ----------
const arstid = (d = S.dag) => d < 10 ? 'sommar' : d < 20 ? 'host' : 'vinter';
const ARSTID_NAMN = { sommar: 'Sommar ☀️', host: 'Höst 🍂', vinter: 'Vinter ❄️' };
// hur varmt är det i skjulet? tak 2, dörr 1, väggar 1 st per vägg, golv 1, kamin 3
function varme() {
  const h = S.hem || {}, kamin = placerade.some((p) => p.typ === 'kamin' && Math.hypot(p.x - SKJUL.x, p.z - SKJUL.z) < 7);
  return (h.tak ? 2 : 0) + (h.dorr ? 1 : 0) + Math.min(4, h.vagg || 0) + (h.golv ? 1 : 0) + (kamin ? 3 : 0);
}
const VARME_KRAV = { sommar: 0, host: 4, vinter: 9 };
function kollaKyla() {     // körs när man somnar
  const a = arstid(), krav = VARME_KRAV[a], v = varme();
  if (v >= krav) { if (a !== 'sommar' && !S.varmVisad?.[a]) { S.varmVisad = { ...(S.varmVisad || {}), [a]: true }; setTimeout(() => ui.toast(`🔥 Varmt och skönt i skjulet trots ${a === 'host' ? 'hösten' : 'vintern'}.`, 'bra'), 7000); } return; }
  S.frusDag = S.dag + 1; S.frusit = (S.frusit || 0) + 1;
  const vad = [!S.hem?.tak && 'tak', !S.hem?.dorr && 'dörr', (S.hem?.vagg || 0) < 4 && 'fler väggar', !S.hem?.golv && 'golv', a === 'vinter' && !placerade.some((p) => p.typ === 'kamin') && 'en vedkamin (ritning hos Ali)'].filter(Boolean);
  setTimeout(() => ui.toast(`🥶 Du frös i natt! Trivsel −40 idag. Skjulet behöver: ${vad.join(', ')}.`, 'fel'), 7000);
  const r = [['mamma', 'Pappa säger att det var minusgrader i natt. Har du LÅNGKALSONGER?? Jag stickar ett par. Två par.'], ['bror', 'Mamma har googlat "hypotermi". Hon har skickat länken till mig fyra gånger. Skaffa en kamin, för min skull.'], ['mamma', 'Jag har lagt raggsockor i en kasse. Och en filt. Och sylt. Pappa kör i morgon.']][S.frusit % 3];
  setTimeout(() => sms(r[0], r[1]), 15000);
}
let kallVarnadDag = 0;
function varnaKyla(k) {
  const a = arstid(); if (a === 'sommar' || k == null || k < 17 * 60 || kallVarnadDag === S.dag || varme() >= VARME_KRAV[a]) return;
  kallVarnadDag = S.dag; ui.toast(`🌡️ Det blir kallt i natt. Värmen i skjulet: ${varme()}/${VARME_KRAV[a]} – ${a === 'vinter' ? 'tak, dörr, fyra väggar, golv och en vedkamin' : 'tak, dörr och någon vägg'} behövs.`, 'fel');
}
let visadArstid = null;
function uppdateraArstid() {
  const a = arstid(); if (a === visadArstid) return;
  const forsta = visadArstid === null; visadArstid = a; miljo.satArstid(a);
  if (!forsta && a !== 'sommar') ui.toast(a === 'host' ? '🍂 Hösten är här. Nätterna blir kalla – se till att skjulet håller värmen.' : '❄️ Vintern är här! Utan vedkamin och hela väggar fryser du.', 'guld');
}

// ---------- Respekt ----------
const BURK_RESPEKT = 4;
const RESPEKT_NIVAER = [[25, 'Filament nivå 2 – röd PETG'], [60, 'Filament nivå 3 – grön kolfiber'], [110, 'Filament nivå 4 – guldkomposit'], [180, 'Filament nivå 5 – titanblandning']];
const FIL_FARG = { 1: FIL1, 2: 0xd63a2f, 3: 0x2fbf5a, 4: 0xd4a017, 5: 0x9a8ab8 };
const nivaUpplast = (n) => n <= 1 || S.respekt >= RESPEKT_NIVAER[n - 2][0];
const hogstaNiva = () => [5, 4, 3, 2].find((n) => nivaUpplast(n)) || 1;
// tungt skräp (tunnor, kajaker) kan ge filament av högre nivå när kvarnen mal det
function tungtFilament() {
  for (const [n, chans] of [[5, 0.03], [4, 0.07], [3, 0.15], [2, 0.35]]) {
    if (!nivaUpplast(n) || Math.random() > chans) continue;
    laggTill('rulle' + n); ljud.stor();
    ui.toast(`✨ Det tunga skräpet gav en rulle ${VAROR['rulle' + n].namn.toLowerCase()}!`, 'guld'); return;
  }
}
// liten siffra som flyter upp från en mätare (+5) – i stället för en notis i hörnet
function flytSiffra(matare, text) {
  const m = document.querySelector(`[data-hud="${matare}"]`); if (!m) return;
  const e = document.createElement('i'); e.className = 'hud-flyt' + (String(text).startsWith('-') ? ' ner' : ''); e.textContent = text; m.appendChild(e);
  setTimeout(() => e.remove(), 1500);
}
// ---------- Små belöningar hela tiden ----------
// plocka: "+20 %" poppar vid siktet, snabba plock i rad ger kombo med stigande ton
let komboN = 0, komboT = 0, aliBonus = false;
// Ali ger lite extra ibland: alltid första gången, sen slumpvis upp till tre gånger dag 1 – en liten kick
const ALI_BONUS_FORSTA = 'Du får bonus! Första kunden som printar själv på 25 år. 40 kr extra.';
const ALI_BONUS_RAD = [[10, 'Du får bonus! 10 kr extra. Du ser hungrig ut.'], [15, 'Du får bonus! 15 kr extra. Pappa hade gillat dig.'], [20, 'Du får bonus! 20 kr extra. Säg inget till min fru.'], [25, 'Du får bonus! 25 kr extra. Kvalitet. Nästan.']];
function giAliBonus() {
  let kr = 0, rad = '';
  if (!S.valkomst) { S.valkomst = true; kr = 40; rad = ALI_BONUS_FORSTA; }
  else if (S.dag === 1 && (S.aliBonusDag1 || 0) < 3 && Math.random() < 0.4) { S.aliBonusDag1 = (S.aliBonusDag1 || 0) + 1; [kr, rad] = ALI_BONUS_RAD[Math.floor(Math.random() * ALI_BONUS_RAD.length)]; }
  if (!kr) return;
  S.mynt += kr; setTimeout(() => myntRegn(kr), 700); aliBonus = rad;
}
// första printen: en liten show – konfetti, skrivaren studsar och en stor text
function forstaPrintWow(sk) {
  try { konfetti(90); } catch {}
  const m = sk.mesh, bas = m.scale.clone(), t0 = performance.now();
  const studs = () => { const t = (performance.now() - t0) / 700; if (t >= 1) { m.scale.copy(bas); return; } const k = 1 + Math.sin(t * Math.PI * 3) * 0.12 * (1 - t); m.scale.set(bas.x * k, bas.y * (2 - k), bas.z * k); requestAnimationFrame(studs); };
  studs();
  const e = document.createElement('i'); e.className = 'hud-pop stor'; e.textContent = 'Din första print!';
  document.body.appendChild(e); setTimeout(() => e.remove(), 1900);
  // sen vänds blicken mot Ali – där säljer man
  if (S.dag === 1) bud(() => setTimeout(aliRopar, 2200));   // i kön – brorsans sms kommer efter, inte samtidigt
}
function plockPop(gram = 200) {
  const nu = performance.now(); komboN = nu - komboT < 2500 ? komboN + 1 : 1; komboT = nu;
  const e = document.createElement('i'); e.className = 'hud-pop';
  e.textContent = `+${Math.round(gram / RULLE * 100)} %`;
  document.body.appendChild(e); setTimeout(() => e.remove(), 1100);
}
// sälja: mynt flyger upp mot plånboken och siffran räknas upp
function myntRegn(summa) {
  const mal = document.querySelector('.ph-klocka')?.parentElement || document.querySelector('.fp-chip');
  const r = mal?.getBoundingClientRect() || { left: 330, top: 20, width: 80, height: 30 };
  const n = Math.min(14, 3 + Math.floor(summa / 15));
  for (let i = 0; i < n; i++) {
    const m = document.createElement('i'); m.className = 'hud-mynt';
    m.style.left = (innerWidth / 2 + (Math.random() - 0.5) * 160) + 'px'; m.style.top = (innerHeight / 2 + (Math.random() - 0.5) * 80) + 'px';
    document.body.appendChild(m);
    const dx = r.left + r.width / 2 - parseFloat(m.style.left), dy = r.top + r.height / 2 - parseFloat(m.style.top);
    m.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${dx * 0.4}px,${dy * 0.2 - 60}px) scale(1.2)`, opacity: 1, offset: 0.35 }, { transform: `translate(${dx}px,${dy}px) scale(.6)`, opacity: 0.9 }], { duration: 650 + i * 45, easing: 'cubic-bezier(.5,0,.6,1)' }).onfinish = () => m.remove();
  }
}
// ---------- Korta varningar – visas vid siktet och läses upp med din egen röst ----------
const VARN = { vrid: 'Tryck R för att vrida.',
  full: 'Fullt i händerna.',
  tung: 'För tungt. Jag behöver en skottkärra.',
  karra: 'Kärran är full.',
  tratt: 'Tratten är full. Veva först.',
  rulle: 'Rullen är full. Ta den först.',
  litenTratt: 'Får inte plats. Jag behöver en större tratt.',
  skrivFull: 'Skrivaren är full. Printa något först.',
  barRulle: 'Jag orkar bara bära en rulle. Ladda skrivaren först.',
  allaFullt: 'Allt är fullt. Dags att printa och sälja!',
};
const varnadTid = {};
function varna(id) {
  const t = VARN[id]; ui.toast(t, 'fel'); ljud.fel();
  if (performance.now() - (varnadTid[id] || -1e9) > 6000 && !pratarVem) { varnadTid[id] = performance.now(); prata('du', t); }
}
// tratten full men händerna fulla av skräp: lägg skräpet i en hög bredvid kvarnen i stället för att stå och vänta
function slappVidKvarn() {
  const bas = kvarnPunkt(0.9, 0, 0.6); let n = 0;
  while (hand.overst?.userData.typ === 'skrap') {
    const sk = hand.lagg(); scen.remove(sk);
    const a = Math.random() * Math.PI, r = 0.3 + Math.random() * 0.5;
    laggSkrap(bas.x + Math.cos(a) * r, bas.z + Math.sin(a) * r, sk.userData.variant ?? 0, Math.random() * 6.3);
    S.stat.plockat--; n++;
  }
  if (n) { ljud.placera(); ritaHand?.(); sparaSnart(); }
}
function andraRespekt(d, varfor) {
  const fore = S.respekt; S.respekt = Math.max(0, S.respekt + d);
  S.respektLogg = [[d, varfor, S.dag], ...(S.respektLogg || [])].slice(0, 12);
  flytSiffra('respekt', (d > 0 ? '+' : '') + d);
  respChip.classList.remove('puls'); void respChip.offsetWidth; respChip.classList.add(d > 0 ? 'puls' : 'puls-ner');
  RESPEKT_NIVAER.forEach(([g, namn], i) => {
    if (!(fore < g && S.respekt >= g)) return;
    const n = i + 2; if ((S.filGava || []).includes(n)) return;
    S.filGava = [...(S.filGava || []), n];
    S.post.tillMig = [...S.post.tillMig, 'sak:fynd' + n, 'sak:fynd' + n, 'sak:fynd' + n]; visaPostInne();
    const fynd = VAROR['fynd' + n].namn.replace(' (från Rolf)', '').toLowerCase();
    setTimeout(() => sms('rolf', `Folk pratar gott om dej. Ja hitta tre ${n === 2 ? 'röda backar av riktigt bra plast' : fynd} på tippen. Sånt ger ja bara folk me respekt. Ligger i brevlådan vid grinden. Din kvarn biter inte på sånt. Ali har ${n <= 3 ? 'härdade knivar' : 'en diamantkvarn'} – sen blir det ${namn.split('– ')[1]}. /R`), 800);
  });
  sparaSnart();
}
// Rolfs fynd: special-plast som kvarnen gör till filament av högre nivå
function malFynd() {
  const t = valdTyp(), n = VAROR[t].malTill, kravs = n <= 3 ? 1 : 2;
  if ((S.kvarn.kniv || 0) < kravs) {
    ui.toast(`Knivarna biter inte på ${VAROR[t].namn.replace(' (från Rolf)', '').toLowerCase()} – köp ${kravs === 1 ? 'Härdade kvarnknivar' : 'Diamantkvarn'} hos Ali och sätt i dem`, 'fel'); ljud.fel(); return;
  }
  taBortVald();
  const m = skapaVara(t), fran = hand.grupp ? hand.grupp.getWorldPosition(new THREE.Vector3()) : kamera.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, -0.3, 0));
  skickaSkrap(m, fran, trattTopp(), { dur: 0.7, tratt: false });
  ljud.stor(); ritaHotbar?.();
  setTimeout(() => {
    laggTill('rulle' + n); ritaHotbar?.();
    ui.toast(`Kvarnen gav en rulle ${VAROR['rulle' + n].namn.toLowerCase()}! Den behövs för de finare recepten.`, 'guld');
    if (!S.fyndForklarat) { S.fyndForklarat = true; inkorg({ vem: 'du', titel: 'Tanke', lapp: true, text: `${VAROR['rulle' + n].namn.split('– ')[1]}. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig.` }); }
  }, 900);
}
// Mal mammas saker till filament. Det funkar. Men mamma får veta.
// mamma tar inte hintsen: hon tror att man har ätit upp allt och skickar MER
const MAMMA_BURK_ARG = [
  'Pappa säger att lingonsylten är slut redan?! Vad bra att du äter ordentligt!! Jag kokar mer ikväll ❤️',
  'Har du ätit upp HONUNGEN också?? Jag ringde Gunnar. Han har tre kilo till. Pappa kör dit på lördag.',
  'Du gillar verkligen mina grytvantar! Jag har börjat virka i dubbel takt. Lila och orange den här gången.',
  'Jag har köpt 40 kilo socker. Kassörskan frågade om jag driver ett bageri. Jag sa: Nej. Jag har ett barn som ÄTER.',
  'Pappa säger att jag ska sluta. Men du har ju ätit upp allt! Det betyder att du tycker om det. Så enkelt är det.',
  'Jag har gjort en lista: 30 burkar lingon, 20 honung, 15 saft, 12 par grytvantar. Pappa får köra två vändor.',
];
function malBurk() {
  const t = valdTyp();
  const vart = iTratten(350, false);
  if (!vart) { varna(extruderFull() ? 'rulle' : 'tratt'); return; }
  taBortVald();
  const m = skapaVara(t), fran = hand.grupp ? hand.grupp.getWorldPosition(new THREE.Vector3()) : kamera.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, -0.3, 0));
  skickaSkrap(m, fran, vart === 'tratt' ? trattTopp() : bingePunkt(), { dur: 0.7, tratt: vart === 'tratt' });
  S.burkMalda = (S.burkMalda || 0) + 1; S.stat.ilagt++;
  ljud.stor(); ritaHotbar?.();
  andraRespekt(-BURK_RESPEKT, 'Malde mammas ' + VAROR[t].namn.replace(/ från mamma| \(lila\)/, '').toLowerCase());
  const n = S.burkMalda;
  if (n === 1 || n === 3 || n === 6 || n === 10 || n === 15 || n === 22) setTimeout(() => sms('mamma', MAMMA_BURK_ARG[[1, 3, 6, 10, 15, 22].indexOf(n)]), 6000 + Math.random() * 8000);
  if (n === 4) setTimeout(() => sms('bror', 'Mamma tror att du äter upp allt. Hon har kokat sylt i tre dygn. Pappa vet vad du gör. Pappa säger inget. Han suckar bara.'), 15000);
  if (n === 8) setTimeout(() => sms('rolf', 'Hörde att du mal din mammas sylt. Även ja har gränser. /R'), 12000);
}

function trivsel() {
  const antal = {};
  const saker = (S.bod ? MASKINER.gamingbod.trivsel : 0) + placerade.reduce((s, p) => { const n = antal[p.typ] = (antal[p.typ] || 0) + 1; return s + (info(p.typ).trivsel || 0) * 0.6 ** (n - 1); }, 0) + Object.keys(S.hem || {}).reduce((s, id) => s + (id === 'vaggar' ? 0 : id === 'skarm' ? 6 : id === 'fonster' ? fonsterLista().length * MASKINER.fonster.trivsel : MASKINER[id]?.trivsel || 0), 0) + (S.hem?.vagg || 0) * MASKINER.vaggar.trivsel;
  const ren = Math.max(0, 1 - skrapLista.filter((x) => !paTippen(x.position.x, x.position.z)).length / ANTAL_SKRAP);
  return Math.round(saker + ren * 30 + (S.bodTapet ? 15 + S.bodTapet * 5 : 0) + (S.hem?.tapet ? S.hem.tapet * 5 : 0) + (S.skyltUppe ? 5 : 0) + (agerMark('egen') ? 40 : 0) + (agerMark('huset') ? 150 : 0) - (S.frusDag === S.dag ? 40 : 0));
}

// ---------- Menyer (använder FpUI:s butiksruta) ----------
let kistaOppen = false;
let menyOppnad = 0;
function oppnaRuta(html, bind, klass = '') {
  spelare.aktiv = false; kistaOppen = false;
  if (ui.butiksOverlay.hidden) menyOppnad = performance.now();
  ui.butiksOverlay.hidden = false;
  if (document.pointerLockElement) document.exitPointerLock();
  const scroll = ui.butiksOverlay.querySelector('.ui-kropp')?.scrollTop || 0;
  ui.butiksOverlay.innerHTML = rens(html.includes('ui-panel') ? html : `<div class="fp-ruta ph-ruta ${klass}">${html}<button class="fp-knapp" data-stang>Klar</button></div>`);
  const kr = ui.butiksOverlay.querySelector('.ui-kropp'); if (kr) kr.scrollTop = scroll;
  ui.butiksOverlay.querySelectorAll('[data-stang]').forEach((k) => { k.onclick = () => ui.stangButik(); });
  bind?.(ui.butiksOverlay);
}
addEventListener('keydown', (e) => {
  if (ui.butiksOverlay.hidden || !medEl2.hidden) return;
  if ((e.code === 'Escape' || e.code === 'KeyE') && performance.now() - menyOppnad > 250) { e.preventDefault(); e.stopImmediatePropagation(); ui.stangButik(); }
}, true);
const resurserHtml = () => resurs('mynt', `${S.mynt.toLocaleString('sv-SE')} kr`) + resurs('rulle', `${antalInv('rulle')} ${antalInv('rulle') === 1 ? 'rulle' : 'rullar'}`);
const tumme = (typ, st = 54) => ikonBild(typ) ? `<img src="${ikonBild(typ)}" width="${st}" height="${st}" alt="">` : ik('lada');
const rullKort = (g) => (g / RULLE).toLocaleString('sv-SE', { maximumFractionDigits: 1 });
const vara = (ik, namn, under, knapp, attr, av) =>
  `<div class="fp-vara"><span class="ik">${ik}</span><div class="tx"><b>${namn}</b><small>${under}</small></div><button ${attr} ${av ? 'disabled' : ''}>${knapp}</button></div>`;

let printFlik = null, printVald = null;
// en maskin/uppgradering som redan är byggd (eller printad så många som behövs) kan inte köpas/printas igen
function arKlar(m, extra = 0) {
  const fler = ['bord', 'bank', 'sol', 'skrivare2', 'skrivare3'];
  if (fler.includes(m)) return false;
  return (m === 'grip' && S.grip) || (m === 'magnet' && S.magnet) || (m === 'korg' && S.korg) || (m === 'karra' && S.karra) || (m === 'kvarnmotor' && S.kvarn.motor)
    || (m === 'rullband' && S.auto?.band) || (m === 'lastarm' && S.auto?.lastarm) || (m === 'robotarm' && S.auto?.arm) || (m === 'utlada' && S.auto?.lada)
    || (m === 'rullstall' && (S.rullstall || 0) >= 3) || (m === 'stortratt' && S.kvarn.stor) || (m === 'hardkniv' && (S.kvarn.kniv || 0) >= 1) || (m === 'diamantkniv' && (S.kvarn.kniv || 0) >= 2) || (m === 'matarband' && S.kvarn.band) || (m === 'turbomotor' && S.kvarn.turbo) || (m === 'jetmotor' && S.kvarn.jet) || (m === 'gamingbod' && S.bod)
    || (m === 'spolhallare' && skrivare.every((x) => (x.spolNiva || 0) >= 1)) || (m === 'spolhallare2' && skrivare.every((x) => (x.spolNiva || 0) >= 2)) || (m === 'spolhallare3' && skrivare.every((x) => (x.spolNiva || 0) >= 3))
    || (MASKINER[m]?.hem && m !== 'fonster' && m !== 'vaggar' && !!S.hem?.[m])
    || (m === 'fonster' && fonsterLista().length + antalInv('byggsats:fonster') + extra >= FONSTER.max)
    || (m === 'vaggar' && (S.hem?.vagg || 0) + antalInv('byggsats:vaggar') + extra >= 4)
    || (!!MASKINER[m]?.monteras && antalInv('byggsats:' + m) > 0 && !m.startsWith('spolhallare'));
}
function oppnaPrintMeny(sk) {
  const g = GEN[sk.gen];
  // alla saker skrivaren kan göra, sorterade i flikar – som Minecrafts creative-meny
  const saker = [];
  const lagg = (flik, id, attr, ikon, namn, gram, tid, info, pris) => saker.push({ flik, id, attr, ikon, namn, gram, tid, info, pris });
  for (const [id, v] of Object.entries(VAROR)) {
    if (v.kop) continue;
    if (v.pris > 0 && harRecept(id) && (!v.niva || nivaUpplast(v.niva))) lagg('salj', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid,
      `🪙 ${prisNu(id)} kr hos Ali idag${prisNu(id) < v.pris ? ` (fullpris ${v.pris} – marknaden är mättad)` : ` · ${Math.round(v.pris / v.gram * RULLE)} kr per rulle`}${v.trivsel ? ' · kan också ställas ut' : ''}`, prisNu(id));
    else if (v.lyx && harRecept(id)) lagg('hem', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid, `✨ Trivsel +${v.trivsel} · ställ den i din fristad`);
    else if (id === 'sang' && S.ritningar.includes('sang') && !harSang()) lagg('hem', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid, '🛏️ En riktig säng till skjulet');
    else if (v.gava && id === aktivGava() && !harGava(id) && S.ritningar.includes('gava:' + id)) lagg('gava', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid, `🎁 Rolfs önskan – lägg den i hans postlåda`);
  }
  const klarMaskin = (m) => arKlar(m);
  const _gammal = (m) => (m === 'grip' && S.grip) || (m === 'magnet' && S.magnet) || (m === 'korg' && S.korg) || (m === 'karra' && S.karra) || (m === 'kvarnmotor' && S.kvarn.motor) || (m === 'stortratt' && S.kvarn.stor) || (m === 'matarband' && S.kvarn.band) || (m === 'turbomotor' && S.kvarn.turbo) || (m === 'gamingbod' && S.bod) || (m === 'spolhallare' && skrivare.every((x) => (x.spolNiva || 0) >= 1)) || (m === 'spolhallare2' && skrivare.every((x) => (x.spolNiva || 0) >= 2)) || (m === 'spolhallare3' && skrivare.every((x) => (x.spolNiva || 0) >= 3)) || (m === 'jetmotor' && S.kvarn.jet) || (MASKINER[m].hem && m !== 'fonster' && S.hem?.[m]) || (m === 'fonster' && fonsterLista().length + antalInv('byggsats:fonster') >= FONSTER.max) || (m === 'vaggar' && (S.hem?.vagg || 0) + antalInv('byggsats:vaggar') >= 4);
  for (const m of S.ritningar) {
    const x = MASKINER[m]; if (!x || klarMaskin(m)) continue;
    lagg(x.hem || x.flik === 'hem' ? 'hem' : 'maskin', m, `data-maskin="${m}"`, ikonHtml('byggsats:' + m, 54), x.namn, x.gram * x.delar, x.tid * x.delar,
      `${x.beskr}<br>Printas i ${x.delar} delar: ${(DEL_NAMN[m] || []).join(', ').toLowerCase()} (${rullar(x.gram)} per del)`);
  }
  const FLIKAR = [['maskin', 'kugghjul', 'Maskiner'], ['hem', 'hus', 'Hemmet'], ['salj', 'salj', 'Att sälja'], ['gava', 'gava', 'Gåvor – Rolfs önskan']].filter(([f]) => saker.some((x) => x.flik === f));
  // allt på en sida: maskiner, hemmet, att sälja och gåvor under varandra – ingen flik döljer något
  const vald = saker.find((x) => x.id === printVald) || saker[0];
  const behov = (x) => (x.attr.startsWith('data-maskin') ? MASKINER[x.id].gram : x.gram);
  const forStor = (x) => !x.attr.startsWith('data-maskin') && storlekFor(x.id) > skrivStorlek(sk);
  const kanInte = (x) => forStor(x) || sk.fil < 1;
  const helaISkrivare = Math.floor((sk.fil || 0) / RULLE);
  const taAv = helaISkrivare >= 1 && !sk.jobb ? `<div class="ph-saljallt">${knapp({ text: `Ta av en rulle (${helaISkrivare} hel${helaISkrivare > 1 ? 'a' : ''} i skrivaren)`, typ: 'neutral', attr: 'data-taav', ikon: 'rulle' })}<span>Hamnar i verktygsraden – bra om du vill flytta filament till en annan skrivare</span></div>` : '';
  const kropp = taAv + (FLIKAR.length ? FLIKAR.map(([fl, , namn]) => sektion(namn, fl === 'salj' ? 'grön siffra = vad Ali betalar idag' : 'siffran = rullar filament') + grid(saker.filter((x) => x.flik === fl).sort((a, b) => (forStor(a) || kanInte(a)) - (forStor(b) || kanInte(b))).map((x) => uiRuta({ bild: tumme(x.attr.startsWith('data-maskin') ? 'byggsats:' + x.id : x.id), attr: `data-pval="${x.id}"`, vald: x === vald, dyr: !forStor(x) && kanInte(x), last: forStor(x), storlek: storlekRuta(x.id, x.attr.startsWith('data-maskin')), pris: VAROR[x.id]?.pris && !x.attr.startsWith('data-maskin') ? '+' + prisNu(x.id) : rullKort(x.gram), prisTyp: VAROR[x.id]?.pris && !x.attr.startsWith('data-maskin') ? 'plus' : 'fil', titel: x.namn, etikett: true })))).join('')
    + (antalInv('rulle') ? `<p class="ui-tom">${ik('rulle')} Du bär ${antalInv('rulle')} ${antalInv('rulle') === 1 ? 'rulle' : 'rullar'} – välj den i verktygsraden och klicka på skrivaren för att ladda.</p>` : '')
    : `<p class="ui-tom">Inget att printa just nu – köp ritningar och recept hos Ali.</p>`);
  const fot = vald ? detalj({ bild: tumme(vald.attr.startsWith('data-maskin') ? 'byggsats:' + vald.id : vald.id, 72), titel: vald.namn, text: rens(vald.info).replace(/<br>/g, ' · '),
    faktaLista: [VAROR[vald.id]?.pris && !vald.attr.startsWith('data-maskin') ? ['mynt', `Ali betalar ${prisNu(vald.id)} kr idag${prisNu(vald.id) < saljPris(vald.id) ? ` (vanligt ${saljPris(vald.id)})` : ''}`, 'plus'] : null, VAROR[vald.id]?.pris && !vald.attr.startsWith('data-maskin') ? ['oandlig', `${Math.round(prisNu(vald.id) / (vald.gram / RULLE))} kr per rulle`, 'plus'] : null, sk.fil > 0 && sk.fil < behov(vald) && !forStor(vald) ? ['varning', `Laddat räcker till ${Math.floor(sk.fil / behov(vald) * 100)} % – den pausar sedan tills du laddar mer`, 'varn'] : null, ['klocka', `${Math.round(vald.tid / g.fart)} s`], ['rulle', `${rullar(vald.gram)}${vald.attr.startsWith('data-maskin') ? ` (${rullar(behov(vald))} per del)` : ''}`]],
    knappar: [S.auto?.lada && !vald.attr.startsWith('data-maskin') && VAROR[vald.id]?.pris > 0 ? { text: sk.upprepa === vald.id ? 'Autoprint: PÅ' : 'Autoprint: AV', typ: sk.upprepa === vald.id ? 'plus' : 'neutral', attr: `data-upprepa="${vald.id}"`, ikon: 'oandlig' } : null, { text: forStor(vald) ? `Kräver skrivare ${STORLEK_NAMN[storlekFor(vald.id)]}` : kanInte(vald) ? 'Ladda mer filament' : 'Printa', typ: 'plus', attr: vald.attr + ' data-printa', av: kanInte(vald), ikon: forStor(vald) ? 'las' : 'skrivare' }].filter(Boolean) }) : detalj({});
  const html = panel({ ikon: 'skrivare', titel: `Skrivare ${g.namn} · byggvolym ${g.mm} mm${sk.mod ? ' · ' + VAROR[sk.mod].namn.replace('Prototyp: ', '') : ''}`, sub: S.strom < 20 ? 'Lite ström – trampa cykeln så att skrivaren orkar' : 'Välj vad du vill printa', resurser: resurs('rulle', `${rullar(sk.fil)} laddat`) + resurs('blixt', Math.floor(S.strom), S.strom < 20 ? 'varn' : ''),
    kropp, fot });
  oppnaRuta(html, (el) => {
    coachLapp(el, 'print');
    el.querySelectorAll('[data-flik]').forEach((k) => { k.onclick = () => { printFlik = k.dataset.flik; printVald = null; ljud.plock(); oppnaPrintMeny(sk); }; });
    el.querySelector('[data-taav]')?.addEventListener('click', () => {
      if ((sk.fil || 0) < RULLE || sk.jobb) return;
      if (!rullePlats()) { varna('barRulle'); return; }
      if (!harRumFor('rulle')) { ui.toast('Ingen plats i verktygsraden eller kistan', 'fel'); ljud.fel(); return; }
      sk.fil -= RULLE; laggTill('rulle'); sk.spolstall && (sk.spolstall.userData.visar = -1); visaSpolar(sk); sparaSkrivare(); ljud.plock(); oppnaPrintMeny(sk);
    });
    el.querySelectorAll('[data-pval]').forEach((k) => {
      k.onclick = () => { printVald = k.dataset.pval; ljud.plock(); oppnaPrintMeny(sk); };
      k.ondblclick = () => el.querySelector('[data-printa]')?.click();
    });
    el.querySelectorAll('[data-upprepa]').forEach((k) => { k.onclick = () => {
      const t = k.dataset.upprepa; sk.upprepa = sk.upprepa === t ? null : t; sparaSkrivare(); ljud.plock();
      if (sk.upprepa) ui.toast(`Autoprint: skrivaren printar ${VAROR[t].namn.toLowerCase()} om och om igen – allt hamnar i leveranslådan`, 'guld');
      oppnaPrintMeny(sk);
    }; });
    el.querySelectorAll('[data-printa]').forEach((k) => {
      k.onclick = () => {
        const ok = startaJobb(sk, k.dataset.vara ? { typ: k.dataset.vara } : { maskin: k.dataset.maskin });
        if (ok) { ljud.kop(); ui.stangButik(); ui.toast('Skrivaren surrar igång…', 'bra'); }
        else { ljud.fel(); ui.toast(k.dataset.vara && storlekFor(k.dataset.vara) > skrivStorlek(sk) ? `För stor – kräver skrivare ${STORLEK_NAMN[storlekFor(k.dataset.vara)]}` : 'För lite filament i skrivaren', 'fel'); }
      };
    });
  });
}

// Ali såg 3D-skrivare på YouTube och blev nyfiken – men har ingen tid att printa och mecka själv (butiken!).
// På nätterna låter han en AI generera modeller. Du är den första som printar dem. Han hatar butiken och sparar till en semester han aldrig tar.
// Ali växer: först bara snack, sedan klickar det (AI + att du inspirerar honom), till sist blommar han ut
const ALI_KLICKAR = [
  'Du vet vad? Jag har pratat om att göra något i trettio år. Du bara gör. Det är irriterande. På ett bra sätt.',
  'Jag visade AI:n din skrivare. Den sa: bygg något eget, Ali. Jag sa: jag är femtioåtta. Den sa: och?',
  'Jag gick upp en timme tidigare idag. Inte för butiken. För mig. Jag ritade en lampa.',
  'Min fru säger att jag pratar annorlunda. Snabbare. Hon är orolig. Jag är inte orolig. Jag är vaken.',
];
const ALI_BLOMMAR = [
  'Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi!',
  'Jag har sålt min första egna ritning. Till en man i Örebro. Han skrev bra lampa. Jag har ramat in mejlet.',
  'Förut drev jag butiken. Nu bygger jag något. Det är skillnad. Du lärde mig det. Säg inget. Det blir pinsamt.',
  'Jag ska lära ut AI på pensionärsföreningen. Tisdagar. De är rädda. Jag var också rädd.',
];
const aliSteg = () => aliKunskap() >= 9 ? 3 : aliKunskap() >= 4 ? 2 : 1;
let aliStegVisat = null;
function kollaAliSteg() {
  const st = aliSteg(); if (aliStegVisat === null) { aliStegVisat = S.aliStegSett || st; return; }
  if (st <= (S.aliStegSett || 1)) return;
  S.aliStegSett = st; aliStegVisat = st; sparaSnart();
  if (st === 2) { aliSenare('Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen.'); andraRespekt(5, 'Ali säger att du inspirerar honom'); }
  if (st === 3) { aliSenare('Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget.'); andraRespekt(8, 'Ali blommar ut tack vare dig'); }
}
const ALI_HEJ = ['Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst.', 'Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte.', 'Pappa sa: driv butiken, Ali. Så jag driver butiken. På nätterna promptar jag. Det är mitt riktiga jobb.', 'Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid.',
  'Du är den enda här som vet vad en tolerans är. Det värmer. Lite. Inte mycket.', 'Kunder, kunder. Ingen ingenjör. Förutom du kanske.',
  'Semesterkassan: 340 kr. Köp nåt, min vän.', 'Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet.','Jag har stått här sedan sex i morse. Vad vill du?', 'Ledig? Vad är det? Har aldrig hört talas om det.', 'Köp nåt eller gå, min vän. Mina fötter värker.', 'Min fru säger att jag bor här. Hon har rätt.',
  'Salam. Ja, ja, jag har nya grejer. Som vanligt. Varje dag.', 'Semester? Jag hade semester 2009. Det regnade.', 'Du igen. Bra. Du är den enda som köper nåt.'];
const ALI_STANGT = ['STÄNGT. Jag har jobbat i femton timmar. Gå hem och sov!', 'Klockan är nio. Jag är inte här. Kom tillbaka i morgon.', 'Nej. Nej nej nej. Stängt. Godnatt.'];
const aliOppen = () => !sovDags();
// spelklockan: dagen går från 08:00 till 20:00 i takt med dagens mål – 21:00 stänger Ali och det är dags att sova
// i det oändliga bygget går klockan på riktig tid: en dag = DAG_LANGD sekunder, 08:00 → 21:00, sedan natt
const DAG_LANGD = 480;
function klockan() {
  const st = STEG[S.steg];
  if (!st) return Math.min(21 * 60, Math.round((8 * 60 + (S.dagTid || 0) / DAG_LANGD * 13 * 60) / 15) * 15);
  if (st.sov) return kvallKlar() ? 21 * 60 : Math.round((14 * 60 + (S.vakenTid || 0) / MIN_VAKEN * 7 * 60) / 15) * 15;
  if (sangKvall()) return 20 * 60;
  const forsta = STEG.findIndex((x) => x.del === st.del), sista = STEG.length - 1 - [...STEG].reverse().findIndex((x) => x.del === st.del);
  const andel = Math.max(0, Math.min(1, (S.steg - forsta) / Math.max(1, sista - forsta)));
  return Math.round((8 * 60 + andel * 12 * 60) / 15) * 15;
}
const klockText = (m) => `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
// Ali köper (nästan) allt: prints fullpris, byggsatser och delar för sitt plastvärde, dyra köp för halva priset
const saljPris = (typ) => {
  if (VAROR[typ]?.pris > 0) return Math.round(VAROR[typ].pris * (1 + trimNiva('pris') * 0.1));
  if (VAROR[typ]?.lyx) return Math.round(VAROR[typ].gram * 0.1);
  if (typ === 'rulle') return S.dag >= 3 ? 40 : 0;   // från dag 3 printar Ali själv och vill köpa rullar                                    // Ali köper rullar billigt (och säljer för 150) – printa hellre
  const m = typ.startsWith('byggsats:') && MASKINER[typ.split(':')[1]];
  if (m) return Math.max(20, Math.round(m.gram * m.delar * SALJ_TILLBAKA));
  if (VAROR[typ]?.gram) return Math.max(10, Math.round(VAROR[typ].gram * 0.06));   // gåvor, säng m.m. – Ali tar det mesta, men snålt
  return 0;
};
// marknaden mättas: samma vara blir billigare ju fler du säljer samma dag
const saltIdag = (t) => (S.saltIdag || {})[t] || 0;
const prisNu = (t, extra = 0) => { const b = saljPris(t); return t.startsWith('byggsats:') || VAROR[t]?.lyx ? b : Math.max(1, Math.round(b * Math.max(MATTNAD_GOLV, MATTNAD ** (saltIdag(t) + extra)))); };
const summaFor = (t, n) => { let s2 = 0; for (let i = 0; i < n; i++) s2 += prisNu(t, i); return s2; };
let aliRepl = '', aliFlik = 'kop';
let aliVald = null;
const ALI_FORSTA = 'Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar.';
function aliKopLista() {
  const L = [];
  const add = (sekt, key, bild, namn, text, pris, faktaLista, kop) => L.push({ sekt, key, bild, namn, text, pris, faktaLista, kop, storlek: key.startsWith('m:') ? storlekRuta(key.slice(2), true) : key.startsWith('r:') ? storlekFor(key.slice(2)) : key === 'sang' ? 1 : 0 });
  add('Material', 'filament', tumme('rulle'), 'Filamentrulle', 'En hel rulle. Dyrare än att mala skräp – men du slipper vänta.', FILAMENT_KOP.pris, [['rulle', '1 rulle']], () => {
    if (!harRumFor('rulle')) { aliRepl = 'Var ska du bära den? Fickorna är fulla.'; return false; }
    if (!rullePlats()) { aliRepl = 'Du bär redan så många du orkar. Printa först.'; return false; }
    laggTill('rulle'); aliRepl = 'En rulle. Nyspolad. Ta den.'; return true;
  });
  // Rolfs önskan: Ali har ritningen (billig – det ska aldrig vara pengarna som stoppar dig)
  { const gv = aktivGava(); if (gv && !harGava(gv) && !S.ritningar.includes('gava:' + gv)) {
    const v = VAROR[gv], pris = gavaRitningPris(gv);
    add('Rolfs önskan', 'g:' + gv, tumme(gv), '3D-modell: ' + v.namn, `Det Rolf bad om. Printa den och lägg den i hans brevlåda vid grinden.`, pris, [['rulle', rullar(v.gram)]], () => { S.ritningar.push('gava:' + gv); aliRepl = gv === 'olhallare' ? 'Ölhållare? Till sopgubben? Ja ja. Den är bra. Kylklampen var min idé.' : 'Till Rolf igen? Han borde betala mig direkt.'; return true; });
  } }
  if ((forstaUpp() || S.ritningar.includes('sang')) && !S.ritningar.includes('sang') && !harSang())
    add('Bygg ut hemmet', 'sang', tumme('sang'), '3D-modell: Säng', 'En riktig säng till skjulet. Slut på det kalla golvet.', SANG_INSTRUKTION, [['rulle', '2 rullar']], () => { S.ritningar.push('sang'); aliRepl = 'Sov gott, min vän.'; return true; });
  if (S.hem?.tapeter || S.bod) for (let i = 0; i < TAPETER.length; i++) {
    const id = 'tapet_' + i, pris = TAPETER[i].pris || 200;
    add('Tapeter – för skjulet och boden', 't_' + id, tumme(id), TAPETER[i].namn, 'Ställ dig i skjulet eller gamingboden, välj tapetrullen och klicka. Den sitter direkt.', pris,
      [['hus', 'Funkar i skjulet och boden']], () => { if (!harRumFor(id)) { aliRepl = 'Fickorna är fulla.'; return false; } laggTill(id); aliRepl = i === 0 ? 'Den fula igen? Okej. Smaken är som baken.' : 'Bra tapet. Min fru valde samma. Jag hatar den.'; return true; });
  }
  if (S.kapitelKlart) for (const [id, v] of Object.entries(VAROR)) {
    if (!v.proto || (S.proto || []).includes(id)) continue;
    const last = aliKunskap() < v.proto.lar;
    add('Alis prototyper – en av varje', 'pt:' + id, tumme(id), v.namn, last ? `Ali har inte lärt sig bygga den än. Printa fler av hans ritningar (${aliKunskap()}/${v.proto.lar}).` : v.beskr, v.proto.pris,
      [['stjarna', 'Unik – går inte att printa'], last ? ['las', `Låst: Ali behöver ${v.proto.lar - aliKunskap()} till`, 'varn'] : null].filter(Boolean),
      () => { if (last) { aliRepl = 'Inte än. Jag lär mig fortfarande. Printa mina ritningar så lär jag mig fortare.'; return false; } if (!harRumFor(id)) { aliRepl = 'Fickorna är fulla.'; return false; }
        S.proto = [...(S.proto || []), id]; laggTill(id); aliRepl = PROTO_SVAR[id];
        if (id === 'm_nano' || id === 'm_fusion') { taBortInv(id, 1); ui.toast(id === 'm_nano' ? 'Nanokvarnen sitter i kvarnen – den mal 60 % fortare' : 'Fusionsbatteriet är inkopplat: +600 ström och självladdning', 'guld'); }
        else if (v.proto.mod) ui.toast('Välj prototypen och klicka på en skrivare för att montera den', 'guld');
        return true; });
  }
  const pr = presentNu();
  if (pr && S.rolf.i >= ROLF.length && !antalInv(pr) && S.post.tillRolf !== pr) add('Present till Rolf', 'pr:' + pr, tumme(pr), VAROR[pr].namn, 'Rolf blir tacksam – och ger dig något du inte kan köpa. Lägg presenten i hans postlåda.', VAROR[pr].present,
    [['gava', 'Rolf ger något tillbaka'], ['hjarta', 'Unik inredning']],
    () => { if (!harRumFor(pr)) { aliRepl = 'Var ska du ha den? Fickorna är fulla.'; return false; } laggTill(pr); aliRepl = ['En present till sopgubben? Du är en konstig människa. Bra. Men konstig.', 'Jag slår in den. Gratis. Säg inte det till nån.', 'Rolf… han köper bara lättöl här. Och kattmat. Ge honom det här.'][Math.floor(Math.random() * 3)]; return true; });
  for (const [id, m] of Object.entries(MASKINER)) {
    if (S.ritningar.includes(id) || !m.syns() || arKlar(id)) continue;
    add(m.hem ? 'Bygg ut hemmet' : 'Uppgraderingar – bär mer, gör snabbare', 'm:' + id, tumme('byggsats:' + id), '3D-modell: ' + m.namn, m.beskr, m.ritning,
      [['rulle', `${rullKort(m.gram * m.delar)} rullar totalt`], ['kugghjul', `${m.delar} delar: ${(DEL_NAMN[id] || []).join(', ').toLowerCase()}`]],
      () => { S.ritningar.push(id); aliRepl = 'Bra val. 3D-modellen är din. Den räcker till en.'; ui.toast(`3D-modell köpt – printa ${m.namn.toLowerCase()} på skrivaren`, 'guld'); return true; });
  }
  for (const [id, v] of Object.entries(VAROR)) {
    if (!v.recept || harRecept(id) || !v.syns()) continue;
    if (v.lyx && (placerade.some((x) => x.userData?.typ === id || x.typ === id) || S.placerade?.some((x) => x.typ === id) || antalInv(id))) continue;   // redan printad
    if (v.lyx) add('Inredning', 'r:' + id, tumme(id), '3D-modell: ' + v.namn, `”${v.lyx}”`, v.recept, [['hjarta', `Trivsel +${v.trivsel}`], ['rulle', `${rullKort(v.gram)} rullar`], ['skrivare', `Skrivare ${STORLEK_NAMN[storlekFor(id)]}`, storlekFor(id) > storstaSkrivare() ? 'varn' : '']],
      () => { S.ritningar.push('recept:' + id); aliRepl = `Min ${v.namn.toLowerCase()}… AI:n och jag gjorde den i natt. Printa den. Snälla.`; return true; });
    else add('Recept att sälja', 'r:' + id, tumme(id), 'Recept: ' + v.namn, 'Printa hur många du vill och sälj till Ali. Säljer du många samma dag sjunker priset.', v.recept,
      [['mynt', `Ali betalar ${v.pris} kr`, 'plus'], ['rulle', `${Math.round(v.pris / v.gram * RULLE)} kr per rulle`], ['skrivare', `Skrivare ${STORLEK_NAMN[storlekFor(id)]}`, storlekFor(id) > storstaSkrivare() ? 'varn' : '']],
      () => { S.ritningar.push('recept:' + id); aliRepl = `${v.namn}? Bra val. Folk köper sånt. Jag vet inte varför.`; return true; });
  }
  for (const [k, t] of Object.entries(TRIM)) {
    if (!t.tidig && !(S.kapitelKlart || S.rolf.i >= 3)) continue;
    if (t.syns && !t.syns()) continue;
    add('Trimning – tar aldrig slut', 't:' + k, trimBild(k), `${t.namn} nivå ${trimNiva(k) + 1}`, t.beskr(trimNiva(k) + 1) + (trimNiva(k) ? ` (nu: ${t.beskr(trimNiva(k)).toLowerCase()})` : ''), trimPris(k), [['oandlig', `Nivå ${trimNiva(k)} → ${trimNiva(k) + 1}`]],
      () => { S.trim = { ...(S.trim || {}), [k]: trimNiva(k) + 1 }; aliRepl = ['AI:n och jag optimerade hela natten. Ingen sömn. Värt det.', 'Trimmad. Snabbare än min pappa någonsin var.', 'Nästa nivå kostar mer. Så funkar teknik. Och mitt liv.'][Math.floor(Math.random() * 3)]; ui.toast(`${t.namn} nivå ${trimNiva(k)}: ${t.beskr(trimNiva(k))}`, 'guld'); return true; });
  }
  return L;
}
// trimningens bild: saken som blir bättre + en bricka med vad som händer
const TRIM_BILD = { kvarn: [null, '+25 % fart', 'kvarn'], skrivare: ['skrivare2', '+20 % fart'], pris: [null, '+10 % kr', 'mynt'], sopbil: [null, '+3 skräp', 'lastbil'], batteri: ['bank', '+100 ström'], utlager: ['rulle', 'fler rullar'], band: ['matarband', 'snabbare band'], arm: ['lastarm', 'lyfter mer'] };
function trimBild(k) {
  const [typ, txt, ikon] = TRIM_BILD[k] || [null, '', 'trim'];
  let bild = ''; try { bild = typ ? tumme(typ, 50) : ''; } catch { bild = ''; }
  if (!bild || bild.includes('ui-ik')) bild = `<span class="ph-trim-ik">${IKON[ikon] || IKON.trim}</span>`;
  return `<span class="ph-trimbild">${bild}<i>${txt}</i></span>`;
}
function aliSaljLista() {
  const ager = {};
  for (const p of S.hotbar) if (p) ager[p.typ] = (ager[p.typ] || 0) + p.n;
  for (const [t, n] of Object.entries(S.forrad)) ager[t] = (ager[t] || 0) + n;
  return Object.entries(ager).filter(([t, n]) => n > 0 && saljPris(t)).map(([t, n]) => ({ key: 's:' + t, typ: t, n, pris: prisNu(t), bas: saljPris(t) }));
}
let aliSagt = '';
function oppnaMarknad() {
  // en vy, två nivåer som alltid syns: SÄLJ (grönt – du får pengar) överst, KÖP (rött – det kostar) under
  const kopL = aliKopLista(), saljL = aliSaljLista();
  const hitta = (k) => k?.startsWith('s:') ? saljL.find((x) => 's:' + x.key === k) : k?.startsWith('k:') ? kopL.find((x) => 'k:' + x.key === k) : null;
  if (!hitta(aliVald)) aliVald = saljL[0] ? 's:' + saljL[0].key : kopL[0] ? 'k:' + kopL[0].key : null;
  const vald = hitta(aliVald), iKop = aliVald?.startsWith('k:');
  if (!S.aliMott) { S.aliMott = true; aliRepl = ALI_FORSTA; sparaSnart(); }
  const pool = aliSteg() === 3 ? ALI_BLOMMAR : aliSteg() === 2 ? ALI_KLICKAR : ALI_HEJ;
  const bubbla = aliRepl || pool[Math.floor(Math.random() * pool.length)];
  let kropp = '', fot = '';
  // SÄLJ
  const allt = saljL.reduce((a, x) => a + summaFor(x.typ, x.n), 0);
  kropp += `<div class="ali-niva salj"><div class="ali-niva-rub"><span>${ik('salj')} Sälj till Ali</span><small>du får pengar</small>${saljL.length ? knapp({ text: `Sälj allt  +${allt.toLocaleString('sv-SE')} kr`, typ: 'plus', attr: 'data-saljallt' }) : ''}</div>`
    + (saljL.length ? grid(saljL.map((x) => uiRuta({ bild: tumme(x.typ), attr: `data-val="s:${x.key}"`, vald: 's:' + x.key === aliVald, antal: x.n, pris: 'Sälj +' + summaFor(x.typ, x.n), prisTyp: 'plus', titel: namnFor(x.typ), etikett: true })))
      : '<p class="ui-tom">Du har inget att sälja. Printa saker på skrivaren – de hamnar i din verktygsrad.</p>') + '</div>';
  // Rolfs önskan finns inte hos Ali – den printar du själv
  { const gv = aktivGava(); if (gv && !harGava(gv)) kropp += `<div class="ali-tips">${ik('gava')} <span><b>Rolfs önskan: ${VAROR[gv]?.namn || gv}</b> – ${S.ritningar.includes('gava:' + gv) ? 'du har 3D-modellen. Printa den på skrivaren under <b>Gåvor</b>' : 'köp 3D-modellen här nere under <b>Rolfs önskan</b>, printa den på skrivaren'} och lägg den i Rolfs brevlåda vid grinden.</span></div>`; }
  // KÖP
  kropp += `<div class="ali-niva kop"><div class="ali-niva-rub"><span>${ik('kop')} Köp av Ali</span><small>det kostar pengar</small></div>`;
  {
    // unika fynd: finns bara en gång och försvinner när du köpt dem – egen guldram överst
    const UNIKA = ['Rolfs önskan', 'Present till Rolf', 'Alis prototyper – en av varje'];
    const alla = [...new Set(kopL.map((x) => x.sekt))], unika = alla.filter((x) => UNIKA.includes(x)), sekts = alla.filter((x) => !UNIKA.includes(x));
    const rutaK = (x) => uiRuta({ bild: x.bild, attr: `data-val="k:${x.key}"`, vald: 'k:' + x.key === aliVald, dyr: S.mynt < x.pris, pris: '−' + (x.pris >= 1000 ? Math.round(x.pris / 100) / 10 + 'k' : x.pris), prisTyp: S.mynt < x.pris ? 'minus' : 'plus', prisIkon: 'kop', titel: x.namn, storlek: x.storlek, etikett: true });
    if (unika.length) kropp += `<div class="ali-unik"><div class="ali-unik-rub"><span>★ Unika fynd</span><small>finns bara en gång – sen är de borta</small></div>${unika.map((sk) => `<div class="ali-unik-grupp"><b>${sk.replace(' – en av varje', '')}</b>${grid(kopL.filter((x) => x.sekt === sk).sort((a, b) => (S.mynt < a.pris) - (S.mynt < b.pris)).map(rutaK))}</div>`).join('')}</div>`;
    kropp += sekts.map((sk) => sektion(sk) + grid(kopL.filter((x) => x.sekt === sk).sort((a, b) => (S.mynt < a.pris) - (S.mynt < b.pris)).map((x) => uiRuta({ bild: x.bild, attr: `data-val="k:${x.key}"`, vald: 'k:' + x.key === aliVald, dyr: S.mynt < x.pris, pris: '−' + (x.pris >= 1000 ? Math.round(x.pris / 100) / 10 + 'k' : x.pris), prisTyp: S.mynt < x.pris ? 'minus' : 'plus', prisIkon: 'kop', titel: x.namn, storlek: x.storlek, etikett: true })))).join('')
      + (Object.values(MASKINER).some((m) => !m.syns()) ? `<p class="ui-tom">${ik('las')} Fler 3D-modeller dyker upp när du kommer vidare – Ali sitter uppe med AI:n varje natt.</p>` : '');
  }
  kropp += '</div>';
  if (vald && iKop) {
    fot = vald ? detalj({ bild: vald.bild, titel: vald.namn, text: vald.text, faktaLista: vald.faktaLista,
      knappar: [{ text: S.mynt >= vald.pris ? `Köp för ${vald.pris.toLocaleString('sv-SE')} kr` : `Saknar ${(vald.pris - S.mynt).toLocaleString('sv-SE')} kr`, typ: S.mynt >= vald.pris ? 'plus' : 'minus', attr: 'data-kop', av: S.mynt < vald.pris, ikon: 'kop' }] }) : detalj({});
  } else if (vald) {
    if (vald) {
      const bygg = vald.typ.startsWith('byggsats:') || !!VAROR[vald.typ]?.lyx, mattad = !bygg && vald.pris < vald.bas;
      fot = detalj({ bild: tumme(vald.typ), titel: `${namnFor(vald.typ)} × ${vald.n}`, text: bygg ? 'Ali köper tillbaka den till begagnat pris.' : mattad ? `Ali har redan köpt ${saltIdag(vald.typ)} st idag – priset är ${Math.round(vald.pris / vald.bas * 100)} % av det vanliga. Imorgon är det fullpris igen.` : 'Ali säljer den vidare i butiken.',
        faktaLista: [['mynt', `${vald.pris} kr styck`, 'plus'], mattad ? ['varning', 'Marknaden är mättad', 'varn'] : null],
        knappar: [{ text: `Sälj 1  +${vald.pris} kr`, typ: 'plus', attr: 'data-salj1', ikon: 'salj' }, vald.n > 1 ? { text: `Sälj alla  +${summaFor(vald.typ, vald.n).toLocaleString('sv-SE')} kr`, typ: 'plus', attr: 'data-saljalla' } : null].filter(Boolean) });
    }
  } else fot = detalj({ tom: 'Välj något att sälja eller köpa.' });
  const html = panel({ portrattVem: 'ali', titel: 'Alis marknad', sub: `<span class="ui-bubbla">${bubbla}</span>`, resurser: resurserHtml(), kropp, fot, klass: 'ph-ali-panel' });
  // säg bara repliken om den är ny – annars börjar Ali om varje gång du klickar på en sak
  if (bubbla !== aliSagt) prata('ali', bubbla);
  aliSagt = bubbla;
  aliRepl = '';
  oppnaRuta(html, (el) => {
    coachLapp(el, 'ali');
    el.querySelectorAll('[data-flik]').forEach((k) => { k.onclick = () => { aliFlik = k.dataset.flik; aliVald = null; aliRepl = aliFlik === 'salj' ? 'Visa vad du har. Snabbt.' : 'Titta gärna. Rör inte.'; ljud.plock(); oppnaMarknad(); }; });
    el.querySelectorAll('[data-val]').forEach((k) => {
      // sälj-rutor: ett klick säljer allt av den saken direkt (inget bekräfta)
      k.onclick = () => { aliVald = k.dataset.val; if (aliVald.startsWith('s:')) { salj1(Infinity); return; } if (aliVald.startsWith('k:')) { const x = kopL.find((y) => 'k:' + y.key === aliVald); if (x && S.mynt >= x.pris) { kopDirekt(x); return; } if (x) { aliRepl = `Den kostar ${x.pris} kr. Du har ${S.mynt}. Printa och sälj mer.`; ljud.fel(); oppnaMarknad(); return; } } aliRepl = bubbla; ljud.plock(); oppnaMarknad(); };
      k.ondblclick = () => el.querySelector('[data-kop],[data-salj1]')?.click();
    });
    function kopDirekt(x) {
      const forut = S.mynt; S.mynt -= x.pris;
      if (x.kop() === false) { S.mynt = forut; ljud.fel(); oppnaMarknad(); return; }
      ljud.kop(); sparaSnart(); oppnaMarknad();
    }
    const kb = el.querySelector('[data-kop]');
    if (kb) kb.onclick = () => {
      const x = kopL.find((y) => 'k:' + y.key === aliVald); if (!x || S.mynt < x.pris) return;
      const forut = S.mynt; S.mynt -= x.pris;
      if (x.kop() === false) { S.mynt = forut; ljud.fel(); oppnaMarknad(); return; }
      ljud.kop(); sparaSnart(); oppnaMarknad();
    };
    const salj1 = (n) => {
      const x = saljL.find((y) => 's:' + y.key === aliVald); if (!x) return;
      const t = x.typ; n = Math.min(n, antalInv(t)); if (!n) return;
      const summa = summaFor(t, n); taBortInv(t, n);
      if (!t.startsWith('byggsats:') && !VAROR[t]?.lyx) S.saltIdag = { ...(S.saltIdag || {}), [t]: saltIdag(t) + n };
      S.mynt += summa; S.stat.salt += n; ljud.mynt(); myntRegn(summa);
      giAliBonus();
      const nm = namnFor(t).toLowerCase();
      aliRepl = saltIdag(t) >= 4 ? `${saltIdag(t)} ${nm} idag?! Vem ska köpa alla? Här, ${summa} kr. Gör nåt annat imorgon.` : n > 1 ? `${n} st. Okej. ${summa} kr. Säljer de inte är det ditt fel.` : `${nm[0].toUpperCase() + nm.slice(1)}. Okej. ${summa} kr.`;
      if (aliBonus) { aliRepl = aliBonus; aliBonus = false; }
      sparaSnart(); oppnaMarknad();
    };
    const s1 = el.querySelector('[data-salj1]'); if (s1) s1.onclick = () => salj1(1);
    const sx = el.querySelector('[data-saljallt]'); if (sx) sx.onclick = () => {
      let summa = 0, antal = 0;
      for (const x of saljL) { const n = antalInv(x.typ); if (!n) continue; const su = summaFor(x.typ, n); taBortInv(x.typ, n); if (!x.typ.startsWith('byggsats:') && !VAROR[x.typ]?.lyx) S.saltIdag = { ...(S.saltIdag || {}), [x.typ]: saltIdag(x.typ) + n }; summa += su; antal += n; }
      S.mynt += summa; S.stat.salt += antal; ljud.mynt(); myntRegn(summa);
      giAliBonus();
      aliRepl = antal === 1 ? `Okej. ${summa} kr.` : `Allt?! ${antal} saker. Jag behöver ett större lager. Här: ${summa.toLocaleString('sv-SE')} kr.`;
      if (aliBonus) { aliRepl = aliBonus; aliBonus = false; }
      ritaHotbar(); ritaHand(); sparaSnart(); oppnaMarknad();
    };
    const sa = el.querySelector('[data-saljalla]'); if (sa) sa.onclick = () => salj1(999);
  });
}

interaktor.registrera(kista, { text: () => `📦 Öppna kistan – ${antalIForrad()} saker i förvar`, aktivera: () => oppnaForrad() });
interaktor.registrera(matarband, {
  kanAktivera: () => !!S.kvarn.band,
  text: () => {
    const n = S.vald === 0 || niva() === 3 ? hand.saker.length : 0;
    if (n) return `Töm ${n} skräp i containern – bandet matar kvarnen åt dig`;
    return `🗑️ Skräpcontainern: ${S.kvarn.binge.length}/${BINGE_MAX} skräp · ` + (!S.kvarn.binge.length ? 'tom – töm skräp här' : S.kvarn.tratt >= TRATT_MAX ? 'väntar – tratten är full' : S.strom <= 0.5 ? '⚠️ står still – ingen ström!' : 'rullar skräp till tratten');
  },
  aktivera: () => {
    let n = 0;
    while (hand.overst?.userData.typ === 'skrap' && S.kvarn.binge.length < BINGE_MAX) {
      const fran = hand.overst.getWorldPosition(new THREE.Vector3()), x = hand.lagg(); S.kvarn.binge.push(x.userData.gram || 200);
      setTimeout(() => skickaSkrap(x, fran, bingePunkt(0.45, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.4), { dur: 0.55, tratt: false }), n * 80); n++;
    }
    if (valdKarra()) { while (S.karraLast.length && S.kvarn.binge.length < BINGE_MAX) { const v = S.karraLast.pop(); const so = SKRAP_SORTER[skrapSort(v)]; if (so.tung && !S.kvarn.stor) { S.karraLast.push(v); break; } S.kvarn.binge.push(so.tung ? -so.gram : so.gram); n++; } ritaKarraLast(); }
    if (n) { S.stat.ilagt += n; ljud.stor(); ui.toast(`🗑️ ${n} skräp i containern – bandet sköter resten`, 'bra'); sparaSnart(); }
    else ui.toast(S.kvarn.binge.length >= BINGE_MAX ? 'Containern är full!' : 'Bär hit skräp och töm det här', '');
  },
});
interaktor.registrera(extruder, { text: () => `🔥 Extrudern smälter plastkrosset till filament · rullen ${helaRullar() ? 'är full – ta den!' : Math.round(S.kvarn.ut % RULLE / RULLE * 100) + ' %'}`, aktivera: () => {} });
const kistPos = () => kista.getWorldPosition(new THREE.Vector3());
const naraKista = () => { const k = kistPos(); return Math.hypot(spelare.pos.x - k.x, spelare.pos.z - k.z) < KISTA_RACKVIDD; };
let kistVald = null;
function oppnaForrad() {
  const nara = naraKista();
  const ritStatus = (id) => ['grip', 'magnet', 'korg', 'karra'].includes(id) ? (S[id] ? 'Klar och används' : 'Köpt – printa den')
    : id === 'kvarnmotor' ? (S.kvarn.motor ? 'Monterad på kvarnen' : 'Köpt – printa den')
    : id === 'vaggar' ? `${S.hem?.vagg || 0} av 4 väggar monterade` : id === 'fonster' ? `${fonsterLista().length} av ${FONSTER.max} fönster uppsatta`
    : antalInv('byggsats:' + id) ? 'Printad – välj den och montera' : 'Köpt – printa den';
  const nyckel = [];
  const hb = S.hotbar.map((p, i) => i === 0
    ? uiRuta({ bild: verktygIkon(46), attr: 'data-k="hb:0"', vald: kistVald === 'hb:0' || (!kistVald && S.vald === 0), antal: hand.saker.length || '', titel: 'Verktyget', liten: false })
    : p ? uiRuta({ bild: tumme(p.typ), attr: `data-k="hb:${i}"`, vald: kistVald === 'hb:' + i, antal: p.n, titel: namnFor(p.typ) }) : uiRuta({ tom: true }));
  const kistRutor = [];
  for (const [t, n] of Object.entries(S.forrad).filter(([, n]) => n > 0)) for (let k = n, j = 0; k > 0; k -= STACK, j++) kistRutor.push(uiRuta({ bild: tumme(t), attr: `data-k="k:${t}"`, vald: kistVald === 'k:' + t, antal: Math.min(STACK, k), titel: namnFor(t) }));
  while (kistRutor.length < KISTA_PLATSER) kistRutor.push(uiRuta({ tom: true }));
  const rits = S.ritningar.filter((id) => MASKINER[id]).map((id) => uiRuta({ bild: tumme('byggsats:' + id), attr: `data-k="r:${id}"`, vald: kistVald === 'r:' + id, titel: MASKINER[id].namn }));
  const kropp = sektion('Verktygsraden', nara ? 'klicka på en sak och välj vad du vill göra' : '') + grid(hb)
    + sektion(`Kistan · ${kistPlatser()}/${KISTA_PLATSER} platser`, nara ? '' : 'gå till kistan i skjulet för att flytta saker') + grid(kistRutor)
    + (rits.length ? sektion('3D-modeller du har köpt', 'printas på skrivaren') + grid(rits) : '');
  // detaljrutan för det valda
  let fot = detalj({ tom: 'Klicka på en ruta.' });
  const [typ2, id2] = (kistVald || '').split(/:(.*)/s);
  if (typ2 === 'hb') {
    const i = +id2, p = S.hotbar[i];
    if (i === 0) fot = detalj({ bild: verktygIkon(60), titel: niva() === 3 ? 'Magnetpistolen' : S.grip ? 'Skräpgripen' : 'Händerna', text: `Bär ${BARA_SKRAP[niva()]} skräp. ${hand.saker.length ? `Du bär ${hand.saker.length} nu.` : ''}`, knappar: [{ text: 'Håll i handen', typ: 'primar', attr: 'data-hall="0"', ikon: 'hand' }] });
    else if (p) fot = detalj({ bild: tumme(p.typ, 72), titel: `${namnFor(p.typ)} × ${p.n}`, text: tipsFor(p.typ),
      knappar: [{ text: 'Håll i handen', typ: 'primar', attr: `data-hall="${i}"`, ikon: 'hand' }, nara ? { text: 'Lägg i kistan', typ: 'neutral', attr: `data-tillkista="${i}"`, ikon: 'kista', av: !kistanRymmer(p.typ, p.n) } : null].filter(Boolean) });
  } else if (typ2 === 'k' && S.forrad[id2]) {
    fot = detalj({ bild: tumme(id2, 72), titel: `${namnFor(id2)} × ${S.forrad[id2]}`, text: tipsFor(id2),
      knappar: [{ text: nara ? 'Ta till verktygsraden' : 'Gå till kistan först', typ: 'primar', attr: `data-tillrad="${id2}"`, ikon: 'pil', av: !nara || !radenRymmer(id2) }] });
  } else if (typ2 === 'r' && MASKINER[id2]) {
    fot = detalj({ bild: tumme('byggsats:' + id2, 72), titel: MASKINER[id2].namn, text: MASKINER[id2].beskr, faktaLista: [['recept', ritStatus(id2)], ['rulle', `${rullKort(MASKINER[id2].gram * MASKINER[id2].delar)} rullar`]] });
  }
  const html = panel({ ikon: 'kista', titel: nara ? 'Kistan' : 'Dina saker', sub: nara ? 'Flytta saker mellan kistan och verktygsraden' : `I handen: ${valdTyp() ? namnFor(valdTyp()) : 'verktyget'}`, resurser: resurserHtml(), kropp, fot });
  oppnaRuta(html, (el) => {
    el.querySelectorAll('[data-k]').forEach((k) => {
      k.onclick = () => { kistVald = k.dataset.k; ljud.plock(); oppnaForrad(); };
      k.ondblclick = () => el.querySelector('[data-hall],[data-tillrad]')?.click();
    });
    el.querySelectorAll('[data-hall]').forEach((k) => { k.onclick = () => { byt(+k.dataset.hall); ui.stangButik(); }; });
    el.querySelectorAll('[data-tillkista]').forEach((k) => { k.onclick = () => {
      const i = +k.dataset.tillkista, p = S.hotbar[i]; if (!p || !kistanRymmer(p.typ, p.n)) return;
      laggIForrad(p.typ, p.n, true); S.hotbar[i] = null; if (S.vald === i) S.vald = 0; kistVald = 'k:' + p.typ; ritaHand(); ritaHotbar(); ljud.plock(); oppnaForrad();
    }; });
    el.querySelectorAll('[data-tillrad]').forEach((k) => { k.onclick = () => {
      const t = k.dataset.tillrad, n = S.forrad[t]; if (!nara || !n || !radenRymmer(t)) return;
      delete S.forrad[t]; const i = laggTill(t, n); if (typeof i === 'number') { byt(i); kistVald = 'hb:' + i; } ljud.plock(); oppnaForrad();
    }; });
  });
  kistaOppen = nara;
}
// en kort förklaring om vad man gör med en sak
function tipsFor(t) {
  if (t === 'rulle') return 'Bär rullen till en skrivare och klicka för att ladda den.';
  if (t === 'karra') return 'Välj kärran för att lasta tungt skräp. Q tippar ur.';
  if (t === 'magnet') return 'Håll inne och sikta – suger till sig skräp.';
  if (t === 'sang') return 'Gå in i skjulet och ställ den på den markerade platsen.';
  if (VAROR[t]?.gava) return 'Lägg den i Rolfs postlåda vid tippens grind.';
  if (t.startsWith('byggsats:')) { const m = MASKINER[t.split(':')[1]]; if (m?.hem) return 'Välj den och klicka på skjulet för att montera.'; if (m?.monteras) return 'Välj den och klicka där den ska monteras.'; return 'Välj den och klicka på marken för att ställa ut.'; }
  if (VAROR[t]?.placerbar) return `Ställ ut den (trivsel +${VAROR[t].trivsel || 0}) – eller sälj den hos Ali.`;
  if (VAROR[t]?.pris) return `Sälj den hos Ali (${prisNu(t)} kr idag).`;
  return '';
}

const vemAvSms = (f) => ({ mamma: 'mamma', pappa: 'pappa', rolf: 'rolf', ali: 'ali', bror: 'bror' }[f] || 'du');
// ett sms är läst: släpp nästa i kön från samma person
function smsLast(fran) {
  S.olasta = S.sms.filter((m) => m.ny).length;
  const i = (S.smsVantar || []).findIndex(([f]) => f === fran); if (i < 0) return;
  const [f, t, id] = S.smsVantar.splice(i, 1)[0]; sparaSnart();
  setTimeout(() => sms(f, t, id), 14000);   // nästa från samma person: lite andrum först
}
function oppnaInkorg() {
  // alla meddelanden på en sida, nyast först – klicka Läs upp för att höra ett igen
  const olasta = S.sms.filter((m) => m.ny).length;
  const kropp = S.sms.length ? S.sms.slice().reverse().map((m, i) => rad({ bild: portratt(vemAvSms(m.fran), 40), titel: AVSANDARE[m.fran]?.namn || m.fran, text: m.text, ny: !!m.ny,
    hoger: knapp({ text: 'Läs upp', typ: 'neutral', attr: `data-lasupp="${S.sms.length - 1 - i}"`, ikon: 'pil' }) })).join('') : `<p class="ui-tom">Inga meddelanden än.</p>`;
  oppnaRuta(panel({ ikon: 'telefon', titel: 'Meddelanden', sub: olasta ? `${olasta} nya – de läses upp en i taget` : 'Allt läst', flikar: [['sms', 'telefon', 'Meddelanden'], ['dagbok', 'bok', 'Min dagbok'], ['mal', 'mal', 'Mål'], ['brev', 'brev', 'Brev'], ['spel', 'kugghjul', 'Spelet']], aktivFlik: 'sms', kropp }), (el) => {
    el.querySelectorAll('[data-flik]').forEach((k) => { if (k.dataset.flik !== 'sms') k.onclick = () => { dagbokFlik = k.dataset.flik; ljud.plock(); oppnaDagbok(); }; });
    el.querySelectorAll('[data-lasupp]').forEach((k) => { k.onclick = () => { const m = S.sms[+k.dataset.lasupp]; if (m) prata(m.fran, m.text); }; });
  });
}

// ---------- Sparplatser: spara läget, börja om, ladda tillbaka ----------
const PLATSER = 5;
const platsNyckel = (n) => `spar:printa-hem:plats${n}`;
const platsDoc = (n) => MOLN?.db && MOLN?.id ? MOLN.db.doc(`data/users/${MOLN.id}/printahem_plats${n}`) : null;
async function lasPlats(n) {
  let bast = null;
  try { const l = localStorage.getItem(platsNyckel(n)); if (l) bast = JSON.parse(l); } catch {}
  try { const d = platsDoc(n); if (d) { const snap = await d.get(); if (snap.exists) { const m = JSON.parse(snap.data()?.spar || 'null'); if (m && (!bast || (m.sparadTid || 0) > (bast.sparadTid || 0))) bast = m; } } } catch {}
  return bast;
}
async function sparaPlats(n, namn) {
  spar.spara(true);
  if (namn == null) { try { namn = (await lasPlats(n))?.platsNamn; } catch {} }
  const data = { ...S, sparadTid: Date.now(), platsNamn: namn || '' }, json = JSON.stringify(data);
  try { localStorage.setItem(platsNyckel(n), json); } catch {}
  try { await platsDoc(n)?.set({ spar: json, tid: Date.now() }); } catch {}
}
// döp om en sparning utan att ändra den
async function dopPlats(n, namn) {
  const d = await lasPlats(n); if (!d) return;
  d.platsNamn = namn; const json = JSON.stringify(d);
  try { localStorage.setItem(platsNyckel(n), json); } catch {}
  try { await platsDoc(n)?.set({ spar: json, tid: Date.now() }); } catch {}
}
const platsTitel = (d, n) => (d?.platsNamn || '').trim() || `Plats ${n}`;
async function laddaPlats(n) {
  const d = await lasPlats(n); if (!d) return;
  d.sparadTid = Date.now(); spar.data = d; spar.spara(true);
  try { await MOLN?.ref?.set({ spar: JSON.stringify(d), tid: Date.now() }); } catch {}
  location.reload();
}
let platsVald = 1;
// nytt spel: spara det nuvarande på en ledig plats (eller den äldsta) så att inget försvinner
async function sparaPaLedigPlats() {
  const info = []; for (let n = 1; n <= PLATSER; n++) info.push(await lasPlats(n));
  let plats = info.findIndex((d) => !d) + 1;
  if (!plats) plats = info.map((d, i) => [d.sparadTid || 0, i + 1]).sort((a, b) => a[0] - b[0])[0][1];
  if ((S.speltid || 0) > 60) { await sparaPlats(plats); ui.toast(`Ditt spel sparades på plats ${plats}`, 'bra'); }
}
async function borjaOm() {
  try { await sparaPaLedigPlats(); } catch {}
  spar.nollstall(); try { await MOLN?.ref?.delete(); } catch {}
  setTimeout(() => location.reload(), 600);
}
async function oppnaSparplatser() {
  oppnaRuta(panel({ ikon: 'spara', titel: 'Sparplatser', sub: 'Läser in…', kropp: '' }));
  const info = [];
  for (let n = 1; n <= PLATSER; n++) info.push(await lasPlats(n));
  const besk = (d) => d ? `Dag ${d.dag || 1} · ${(d.mynt || 0).toLocaleString('sv-SE')} kr · sparad ${new Date(d.sparadTid || 0).toLocaleString('sv-SE', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}` : 'Tom plats';
  const kropp = sektion('Dina sparplatser', 'spelet sparar alltid automatiskt – här kan du spara en kopia') + grid(info.map((d, i) => uiRuta({ bild: ik(d ? 'spara' : 'ny'), attr: `data-plats="${i + 1}"`, vald: platsVald === i + 1, antal: i + 1, titel: d ? platsTitel(d, i + 1) : `Plats ${i + 1}`, etikett: true })));
  const d = info[platsVald - 1];
  const namnFalt = `<span class="ph-platsnamn"><input data-namn maxlength="28" placeholder="Döp sparningen…" value="${rens(d?.platsNamn || '')}">${d ? '<button data-dop>Döp om</button>' : ''}</span>`;
  const fot = detalj({ bild: ik(d ? 'spara' : 'ny'), titel: d ? platsTitel(d, platsVald) : `Plats ${platsVald}`, text: besk(d) + namnFalt,
    knappar: [{ text: d ? 'Spara över' : 'Spara här', typ: 'primar', attr: 'data-spara', ikon: 'spara' }, d ? { text: 'Ladda', typ: 'neutral', attr: 'data-ladda', ikon: 'pil' } : null].filter(Boolean) })
    + `<div style="padding:0 16px 14px;display:flex;gap:8px;flex-wrap:wrap">${knapp({ text: 'Dagar (bokmärken)', typ: 'neutral', attr: 'data-dagar', ikon: 'bok' })}${knapp({ text: 'Börja om från början', typ: 'minus', attr: 'data-nytt', ikon: 'varning' })}</div>`;
  oppnaRuta(panel({ ikon: 'spara', titel: 'Sparplatser', sub: 'Spara, börja om och kom tillbaka', kropp, fot }), (el) => {
    el.querySelectorAll('[data-plats]').forEach((k) => { k.onclick = () => { platsVald = +k.dataset.plats; ljud.plock(); oppnaSparplatser(); }; });
    el.querySelector('[data-spara]').onclick = async (e) => {
      if (info[platsVald - 1] && !confirm(`Skriva över plats ${platsVald}?`)) return;
      e.currentTarget.disabled = true; const nm = el.querySelector('[data-namn]')?.value.trim(); await sparaPlats(platsVald, nm || undefined); ui.toast(`Sparat: ${nm || 'plats ' + platsVald}`, 'bra'); oppnaSparplatser();
    };
    const ld = el.querySelector('[data-ladda]'); if (ld) ld.onclick = async () => {
      if (!confirm('Ladda den sparningen? Det du har nu ersätts (spara det först om du vill ha kvar det).')) return;
      ld.disabled = true; await laddaPlats(platsVald);
    };
    const nf = el.querySelector('[data-namn]'); if (nf) { nf.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') el.querySelector('[data-dop]')?.click(); }); nf.addEventListener('keyup', (e) => e.stopPropagation()); }
    const db = el.querySelector('[data-dop]'); if (db) db.onclick = async () => { await dopPlats(platsVald, nf.value.trim()); ljud.plock(); ui.toast('Sparningen döptes om', 'bra'); oppnaSparplatser(); };
    el.querySelector('[data-dagar]').onclick = () => oppnaBokmarken();
    el.querySelector('[data-nytt]').onclick = async () => {
      if (!confirm('Börja om från början? Det du har nu sparas automatiskt på en ledig sparplats först, så du kan ladda det igen.')) return;
      borjaOm();
    };
  });
}
let dagbokFlik = 'mal';
function oppnaDagbok() {
  let kropp = '';
  if (dagbokFlik === 'mal') {
    const st = STEG[S.steg], del = st?.del;
    const iDel = STEG.map((x, i) => [x, i]).filter(([x]) => x.del === del);
    kropp = sektion(del || 'Oändligt bygge') + (st ? iDel.map(([x, i]) => rad({ bild: `<span class="ui-headik" style="width:30px;height:30px;color:${i < S.steg ? '#3ccf73' : i === S.steg ? '#ffb84d' : '#5d667a'}">${i < S.steg ? IKON.bock : i === S.steg ? IKON.pil : IKON.mal}</span>`, titel: rens(stegText(x)), text: i === S.steg ? 'Ditt mål just nu' : '' })).join('')
      : rad({ bild: `<span class="ui-headik" style="width:30px;height:30px">${IKON.oandlig}</span>`, titel: `Nästa mål: trivsel ${Math.ceil((trivsel() + 1) / 100) * 100}`, text: 'Trimma maskinerna hos Ali, printa inredning och bygg vidare. Det tar aldrig slut.' }))
      + sektion('Trivsel') + `<div class="ui-fakta"><span>${ik('hjarta')}${trivsel()} trivsel</span><span>${ik('klocka')}Dag ${S.dag}</span><span>${ik('mynt')}${S.mynt.toLocaleString('sv-SE')} kr</span></div>`;
  } else if (dagbokFlik === 'dagbok') {
    // det du själv har skrivit – nyast först, läses upp med din egen röst
    const mina = S.lappar.slice().reverse().filter((l) => /Dagbok/.test(lappInfo(l)[0]));
    kropp = sektion('Min dagbok', 'Det jag har skrivit, nyast först') + (mina.length ? mina.map((l) => rad({ bild: portratt('du', 40), titel: '', text: `<span style="font-size:15px;color:#f2f2f2">${rens(lappInfo(l)[1])}</span>`, hoger: knapp({ text: 'Läs upp', typ: 'neutral', attr: `data-las="${l}"`, ikon: 'pil' }) })).join('') : '<p class="ui-tom">Inget skrivet än.</p>');
  } else if (dagbokFlik === 'brev') {
    const brev = S.lappar.slice().reverse().filter((l) => !/Dagbok/.test(lappInfo(l)[0])).map((l) => { const [t, x] = lappInfo(l); return rad({ bild: portratt(vemAvTitel(t), 40), titel: rens(t), text: x }); });
    kropp = brev.length ? brev.join('') : '<p class="ui-tom">Inga brev än.</p>';
  } else {
    kropp = sektion('Spelet') + `<div class="ui-grid" style="gap:10px">${knapp({ text: 'Se introt igen', typ: 'neutral', attr: 'data-intro', ikon: 'film' })}${knapp({ text: 'Sparplatser', typ: 'neutral', attr: 'data-sparplatser', ikon: 'spara' })}${knapp({ text: `Musik: ${S.musik === false ? 'av' : 'på'}`, typ: 'neutral', attr: 'data-musik', ikon: 'rost' })}${knapp({ text: `Röster: ${{ rost: 'riktiga röster', prat: 'pratljud', tal: 'datorns talsyntes', av: 'av' }[rostLage()]}`, typ: 'neutral', attr: 'data-roster', ikon: 'rost' })}</div>`
      + sektion('Styrning') + `<p class="ui-tom">WASD gå · mus titta · klick/E använd · klicka och håll = veva, trampa, gripa · hjulet/1–8 byt sak · H tomhänt · Shift+Q släpp allt · R vrid · I dina saker · M meddelanden · B dagbok · V röster</p>`;
  }
  oppnaRuta(panel({ ikon: 'bok', titel: 'Dagbok', sub: `Dag ${S.dag}`, resurser: resurserHtml(), flikar: [['sms', 'telefon', 'Meddelanden' + (S.olasta ? ` (${S.olasta})` : '')], ['dagbok', 'bok', 'Min dagbok'], ['mal', 'mal', 'Mål'], ['brev', 'brev', 'Brev'], ['spel', 'kugghjul', 'Spelet']], aktivFlik: dagbokFlik, kropp }), (el) => {
    el.querySelector('[data-flik="sms"]')?.addEventListener('click', (e) => { e.stopImmediatePropagation(); ljud.plock(); oppnaInkorg(); }, true);
    el.querySelectorAll('[data-las]').forEach((k) => { k.onclick = () => prata('du', lappInfo(k.dataset.las)[1]); });
    el.querySelectorAll('[data-flik]').forEach((k) => { k.onclick = () => { dagbokFlik = k.dataset.flik; ljud.plock(); oppnaDagbok(); }; });
    el.querySelector('[data-intro]')?.addEventListener('click', () => { ui.stangButik(); if (document.pointerLockElement) document.exitPointerLock(); visaIntro(); });
    el.querySelector('[data-sparplatser]')?.addEventListener('click', () => oppnaSparplatser());
    el.querySelector('[data-musik]')?.addEventListener('click', () => { S.musik = S.musik === false; if (S.musik === false) bakMusik.stopp(); else bakMusik.start(); sparaSnart(); oppnaDagbok(); });
    el.querySelector('[data-roster]')?.addEventListener('click', () => { dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyV' })); setTimeout(oppnaDagbok, 50); });
  });
}

// ---------- UI ----------
const ui = new FpUI({
  titel: logo({ bredd: 440 }),
  text: '<p>Allt du äger är ett gammalt skjul och storebrors 3D-skrivare.</p><p>Tomten är full av skräp. Men skräp är plast, och plast är filament.</p><p class="br-slogan">Printa dig ett hem.</p>',
  hjalp: 'WASD gå · Mus titta · Klick/E använd · Klicka och håll = veva/trampa/gripa · B dagbok & sparplatser<br>Hjulet / 1–8 byt sak · H tomhänt · Shift+Q släpp allt · V röster · I dina saker · B dagbok · M meddelanden · K sparplatser · G flytta gamingboden · R vrid · Q släpp skräp · Shift spring',
  spelare,
  onAnvand: (nere) => {
    if (dagbokLas) { if (nere) dagbokHoppa = true; anvandNere = false; return; }   // klick = hoppa över dagboken (barn klickar direkt)
    anvandNere = nere;
    if (gripVerktyg.visible && !nere && gripHaller) gripSlapp();
    gripHaller = nere && gripVerktyg.visible;
    if (!nere) return;
    gripKlick();
    if (interaktor.hovrad === cykel || interaktor.hovrad === vevYta) return;
    if (niva() === 3 && (!interaktor.hovrad || interaktor.hovrad.userData.typ === 'skrap')) return;
    if (bodSpoke.visible) { byggBodHar(); return; }
    if (VAROR[valdTyp()]?.tapet != null) { tapetsera(valdTyp()); return; }
    if (interaktor.hovrad && !(spoke.grupp?.visible && spoke.bord && SMASAK(valdTyp()))) { interaktor.aktivera(); return; }
    stallNer();
  },
  onButik: () => oppnaDagbok(),
  onNollstall: () => borjaOm(),
  onSparplatser: () => oppnaSparplatser(),
  onStart: () => { ljudCtx(); setTimeout(() => bakMusik.start(), 4000); setTimeout(familjSms, 2000);
    // Alis bakgrund – även till den som redan sålt sin första sak innan storyn fanns
    if (S.lappar.includes('salt') && !S.aliStoryVisad) { S.aliStoryVisad = true; setTimeout(() => sms('ali', lappInfo('salt')[1]), 9000); } if (!S.lappar.includes('start')) visaLapp('start'); else { const st = STEG[S.steg]; if (st?.startLapp && !S.lappar.includes(st.startLapp)) visaLapp(st.startLapp); } },
});

{ const _p = ui.prompt.bind(ui); ui.prompt = (t) => _p(rens(t)); ui.visaStart = startRuta; if (!ui.igang && !ui.overlay.hidden) startRuta(); }
// startrutan: logga, luftig ingress, STARTA först – sparplatser och börja om bredvid varandra under, alla spel längst ner
function startRuta(titel = ui.o.titel, text = ui.o.text, knappText = 'Starta') {
  ui.igang = false; spelare.aktiv = false;
  const t = rens(titel), ar = t.includes('<svg');
  // har du spelat en stund visas din resa i stället för ingressen: kapitel för kapitel, vad som är klart
  const delar = []; STEG.forEach((x, i) => { const kn = KAP1_DELAR.includes(x.del) ? 'Kapitel 1 – ' + KAP1_NAMN : x.del; let d = delar.find((y) => y.namn === kn); if (!d) delar.push(d = { namn: kn, tot: 0, klara: 0 }); d.tot++; if (i < S.steg) d.klara++; });
  const totPct = Math.round(Math.min(S.steg, STEG.length) / STEG.length * 100);
  const resa = ar && S.steg > 0 ? `<div class="br-resa"><div class="br-resa-topp"><b>Din resa</b><span>Dag ${S.dag} · ${totPct} % av storyn</span></div><div class="br-resa-bar"><i style="width:${totPct}%"></i></div>
    <div class="br-delar">${delar.map((d) => { const klar = d.klara === d.tot, nu = !klar && d.klara > 0 || (!klar && delar.find((y) => y.klara < y.tot) === d); return `<div class="br-del ${klar ? 'klar' : nu ? 'nu' : 'last'}"><span class="b">${klar ? '✓' : nu ? '▶' : ''}</span><span class="n">${rens(d.namn)}</span><span class="r">${klar ? 'Klart' : nu ? `${d.klara}/${d.tot}` : ''}</span></div>`; }).join('')}</div></div>` : '';
  ui.overlay.innerHTML = `<div class="fp-ruta br-start">${ar ? t : `<h1>${t}</h1>`}${resa || `<div class="br-ingress">${rens(text)}</div>`}${resa ? prestHtml() : ''}
    <button class="fp-knapp br-starta">${rens(knappText)}</button>
    <div class="br-val"><button class="br-valknapp" data-sparplatser>${ik('spara')}<span>Sparplatser</span></button><button class="br-valknapp" data-kontroller>${ik('hand')}<span>Kontroller</span></button><button class="br-valknapp" data-noll>${ik('omstart')}<span>Börja om</span></button></div>
    <button class="br-tyck" data-tyck>${ik('brev')} Tyck till om spelet</button>
    <a class="fp-tillbaka" href="../../index.html">← Alla spel</a></div>`;
  ui.overlay.hidden = false;
  ui.overlay.querySelector('.br-starta').onclick = () => ui.starta();
  ui.overlay.querySelector('[data-sparplatser]').onclick = () => ui.o.onSparplatser?.();
  { const ty = ui.overlay.querySelector('[data-tyck]'); if (ty) ty.onclick = () => oppnaTyckTill(ui.overlay.querySelector('.br-start')); }
  ui.overlay.querySelector('[data-kontroller]').onclick = () => {
    const pop = document.createElement('div'); pop.className = 'br-bekrafta';
    const K = [['W A S D', 'Gå'], ['Mus', 'Titta'], ['Klick / E', 'Använd, plocka upp'], ['Klicka och håll', 'Veva, trampa, gripa'], ['Shift', 'Spring'], ['Mellanslag', 'Hoppa'], ['Hjulet / 1–8', 'Byt sak i handen'], ['H', 'Tomhänt'], ['Q', 'Släpp skräp'], ['Shift + Q', 'Släpp allt'], ['R', 'Vrid det du ställer ut'], ['G', 'Flytta gamingboden'], ['I', 'Dina saker'], ['B', 'Dagbok och mål'], ['M', 'Alla sms i efterhand'], ['K', 'Sparplatser'], ['V', 'Byt röster'], ['Esc', 'Paus och den här menyn']];
    pop.innerHTML = `<div class="br-bekrafta-ruta br-kontroller"><b>Kontroller</b><div class="br-tangenter">${K.map(([t, v]) => `<kbd>${t}</kbd><span>${v}</span>`).join('')}</div><p style="margin-top:10px!important">På mobil och surfplatta: dra för att gå, svep för att titta och tryck på handen för att använda.</p><div class="br-val" style="max-width:200px"><button class="br-valknapp" data-nej>Stäng</button></div></div>`;
    ui.overlay.querySelector('.br-start').appendChild(pop);
    pop.querySelector('[data-nej]').onclick = () => pop.remove(); pop.onclick = (e) => { if (e.target === pop) pop.remove(); };
  };
  const noll = ui.overlay.querySelector('[data-noll]');
  noll.onclick = () => {
    // bekräftelse som egen popup ovanpå startrutan
    const ruta = ui.overlay.querySelector('.br-start');
    const pop = document.createElement('div'); pop.className = 'br-bekrafta';
    pop.innerHTML = `<div class="br-bekrafta-ruta"><div class="br-bekrafta-ik">${ik('omstart')}</div><b>Börja om från början?</b><p>Du börjar om på dag 1 med tomt skjul och skräp på gården.<br>Ditt nuvarande spel sparas först på en ledig sparplats, så du kan ladda det igen.</p>
      <div class="br-val" style="max-width:360px"><button class="br-valknapp" data-nej>Nej, fortsätt spela</button><button class="br-valknapp farlig" data-ja>${ik('omstart')}<span>Ja, börja om</span></button></div></div>`;
    ruta.appendChild(pop);
    pop.querySelector('[data-nej]').onclick = () => pop.remove();
    pop.querySelector('[data-ja]').onclick = () => ui.o.onNollstall?.();
    pop.onclick = (e) => { if (e.target === pop) pop.remove(); };
  };
}
// egna HUD-delar: filament, ström, mål-guide, lapp
const css = document.createElement('style');
css.textContent = `
.ph-mal{position:fixed;left:max(14px,env(safe-area-inset-left));top:72px;z-index:21;pointer-events:none;
  background:rgba(10,15,36,.78);color:#fff;border-radius:14px;padding:10px 14px;max-width:300px;font:600 14px/1.4 system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.25)}
.ph-mal small{display:block;opacity:.6;font-weight:800;letter-spacing:.06em;font-size:11px;margin-bottom:2px}
.ph-lapp-ruta{position:fixed;right:max(14px,env(safe-area-inset-right));top:80px;z-index:21;pointer-events:none;max-width:290px;
  background:#fff8e1;color:#3a2e1a;border-radius:12px;padding:12px 14px;font:500 15px/1.45 system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.3);
  transform:rotate(1.5deg) translateX(120%);transition:transform .45s cubic-bezier(.2,.9,.3,1.2)}
.ph-lapp-ruta.syns{transform:rotate(1.5deg) translateX(0)}
.ph-lapp-ruta b{display:block;font-size:13px;opacity:.7;margin-bottom:3px}
.ph-ruta{max-height:86vh;overflow:auto}
.ph-lappar{text-align:left;max-height:40vh;overflow:auto;margin-bottom:14px}
.ph-lapp{background:rgba(255,255,255,.07);border-radius:10px;padding:8px 10px;margin-bottom:8px;font-size:14px}
.fp-topp .fp-chip{white-space:nowrap}
.ph-larm{animation:phLarm .8s infinite}@keyframes phLarm{50%{background:rgba(200,40,40,.85)}}
.ph-vev{position:fixed;left:50%;top:calc(50% + 74px);transform:translateX(-50%);z-index:21;pointer-events:none;width:min(340px,70vw);
  background:rgba(10,15,36,.8);border-radius:14px;padding:9px 12px;color:#fff;font:700 13px system-ui,sans-serif;opacity:0;transition:opacity .2s}
.ph-vev.syns{opacity:1}
.ph-vev .rad{display:flex;justify-content:space-between;margin-bottom:6px}
.ph-vev .bar{height:14px;border-radius:999px;background:rgba(255,255,255,.15);overflow:hidden}
.ph-vev .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#3de3ff,#7dffb0)}
.ph-vev.full .bar i{background:linear-gradient(90deg,#ffd43b,#fff3a0)}
.ph-rolfrad{margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,.15);font-size:13px;color:#ffd99a}
.ph-rolfrad:empty{display:none}
.ph-mobil{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:84px;z-index:22;width:250px;border-radius:22px;background:#111;border:4px solid #2a2a2a;
  box-shadow:0 12px 30px rgba(0,0,0,.45);overflow:hidden;pointer-events:none;font:500 14px/1.4 system-ui,sans-serif;color:#222;transform:translateY(140%);opacity:0;transition:transform .45s cubic-bezier(.2,.9,.3,1.15),opacity .3s}
.ph-mobil.syns{transform:translateY(0);opacity:1}
.ph-mobil-topp{color:#fff;font-weight:800;padding:9px 14px;font-size:14px}
.ph-mobil-bubbla{background:#e9e9ef;margin:12px;padding:10px 12px;border-radius:16px 16px 16px 4px}
.ph-mobil-skriver{color:#aaa;margin:14px;font-weight:700}
.ph-mobil-skriver span{animation:phPrick 1s infinite}.ph-mobil-skriver span:nth-child(2){animation-delay:.2s}.ph-mobil-skriver span:nth-child(3){animation-delay:.4s}
@keyframes phPrick{50%{opacity:.2}}
.ph-notiser{position:fixed;right:max(14px,env(safe-area-inset-right));top:74px;z-index:22;width:310px;display:flex;flex-direction:column;gap:8px;pointer-events:none}
.ph-hoger{position:fixed;right:max(14px,env(safe-area-inset-right));top:74px;z-index:22;width:310px;display:flex;flex-direction:column;gap:8px;pointer-events:none}
.ph-hoger .ph-notiser{position:static;width:auto}
.ph-varningar{display:flex;flex-direction:column;gap:8px}
.ph-varningar .ph-notis{border-left-color:#ff4d4d;background:rgba(60,12,16,.94);animation:phVarn 1.6s infinite}
@keyframes phVarn{50%{box-shadow:0 0 0 2px rgba(255,77,77,.6),0 8px 22px rgba(0,0,0,.35)}}
.fp-hjalp{bottom:84px!important}
.ph-meddelanden{right:auto;left:max(14px,env(safe-area-inset-left));top:auto;bottom:150px;width:300px}
.ph-meddelanden .ph-notis{transform:translateX(-120%);border-left:none;border-right:5px solid #9fb3c8}
.ph-meddelanden .ph-notis.in{transform:translateX(0)}
.ph-meddelanden .ph-notis.ut{transform:translateX(-40%)}
.ph-meddelanden .ph-notis.sms{border-right-color:#4da3ff}.ph-meddelanden .ph-notis.lapp{border-right-color:#c49a6c}
.ph-notis{background:rgba(14,19,40,.92);color:#fff;border-radius:14px;padding:10px 12px 10px 14px;font:500 14px/1.4 system-ui,sans-serif;box-shadow:0 8px 22px rgba(0,0,0,.35);
  border-left:5px solid #9fb3c8;transform:translateX(120%);opacity:0;transition:transform .4s cubic-bezier(.2,.9,.3,1.15),opacity .3s,max-height .3s,margin .3s,padding .3s;max-height:200px;overflow:hidden}
.ph-notis.in{transform:translateX(0);opacity:1}
.ph-notis.ut{opacity:0;transform:translateX(40%);max-height:0;padding-top:0;padding-bottom:0;margin-top:-8px}
.ph-notis .rubrik{display:flex;justify-content:space-between;font-size:12px;font-weight:800;opacity:.75;margin-bottom:2px;letter-spacing:.02em}
.ph-notis.bra{border-left-color:#5ee08f}.ph-notis.guld{border-left-color:#ffd43b}.ph-notis.fel{border-left-color:#ff6b6b}
.ph-notis.sms{border-left-color:#4da3ff;pointer-events:auto;cursor:pointer}
.ph-notis .las{font-size:11px;opacity:.6;margin-top:4px}.ph-notis.lapp{background:#fff8e1;color:#3a2e1a;border-left-color:#c49a6c}
.ph-notis.lapp .rubrik{opacity:.65}
.ph-notis .prickar span{animation:phPrick 1s infinite}.ph-notis .prickar span:nth-child(2){animation-delay:.2s}.ph-notis .prickar span:nth-child(3){animation-delay:.4s}
.ph-med{position:fixed;inset:0;z-index:40;display:grid;place-items:center;background:rgba(6,9,22,.72);backdrop-filter:blur(5px);font-family:system-ui,sans-serif}
.ph-med[hidden]{display:none}
.ph-telefon{width:min(340px,90vw);border-radius:34px;background:#0d0d0f;border:6px solid #2a2a2e;box-shadow:0 30px 80px rgba(0,0,0,.6);overflow:hidden;padding-bottom:18px;text-align:center;animation:phIn .45s cubic-bezier(.2,.9,.3,1.2)}
.ph-saljallt{display:flex;align-items:center;gap:12px;margin:2px 0 6px}.ph-saljallt span{opacity:.7;font-size:13px}
.ph-jobbbrev{background:#fff8e1;color:#3a2a10;font-family:'Comic Sans MS','Chalkboard SE',cursive;font-size:16px;line-height:1.5;padding:16px 18px;border-radius:6px;transform:rotate(-0.6deg);box-shadow:0 3px 0 #d8c58f;margin:4px 0 6px}
.ph-tel-svar{display:flex;flex-direction:column;gap:8px;padding:0 16px 12px}
.ph-svarknapp{border:2px solid #2d7fd6;background:#fff;color:#2d7fd6;border-radius:18px;padding:9px 14px;font:700 15px system-ui;cursor:pointer;text-align:left}
.ph-svarknapp:hover{background:#2d7fd6;color:#fff}
.ph-tel-bubbla.du{align-self:flex-end;background:#2d7fd6;color:#fff;margin-left:auto;width:fit-content;display:block}
.ph-tel-topp{color:#fff;font-weight:800;font-size:17px;padding:12px 16px;display:flex;align-items:center;justify-content:center;gap:10px}
.ph-pap-titel{display:flex;align-items:center;justify-content:center;gap:10px}
.ph-slot{background:#8b8b8b!important;border:3px solid!important;border-color:#5a5a5a #e6e6e6 #e6e6e6 #5a5a5a!important;border-radius:0!important;color:#222}
.ph-slot.vald{background:#ffd98a!important;border-color:#b07a00 #fff2c8 #fff2c8 #b07a00!important;box-shadow:0 0 0 2px #ffb84d}
.ph-slot .ui-ik{width:30px;height:30px}
.ph-bar-namn{font-weight:700;opacity:.8}
.ph-lastbar{display:inline-block;width:70px;height:9px;border-radius:5px;background:rgba(255,255,255,.18);overflow:hidden;vertical-align:middle;margin:0 6px}
.ph-lastbar i{display:block;height:100%;width:0;background:#7dffb0;transition:width .2s}
.fp-chip .ui-ik{width:20px;height:20px}
.ph-resp-chip.puls{animation:respPuls .7s}.ph-resp-chip.puls-ner{animation:respNer .7s}
@keyframes respPuls{40%{transform:scale(1.25);background:rgba(255,107,138,.6)}}@keyframes respNer{30%{transform:translateX(-5px);background:rgba(120,20,30,.8)}60%{transform:translateX(5px)}}
.ph-resp-rad{padding:6px 2px;border-bottom:1px solid rgba(0,0,0,.08);font-size:15px}.ph-resp-rad b{margin-right:8px}.ph-resp-rad b.plus{color:#2e8b57}.ph-resp-rad b.minus{color:#c43d5c}.ph-resp-rad small{opacity:.55;margin-left:6px}
.ph-notis .rubrik .ui-ik{width:14px;height:14px;vertical-align:-2px}
.ph-tel-kropp{background:#f4f4f7;min-height:170px;padding:18px 14px;text-align:left}
.ph-tel-bubbla{display:inline-block;background:#e3e3ea;color:#222;padding:12px 14px;border-radius:18px 18px 18px 5px;font-size:17px;line-height:1.45;max-width:92%}
.ph-tel-bubbla.skriver span{font-size:26px;animation:phPrick 1s infinite}.ph-tel-bubbla.skriver span:nth-child(2){animation-delay:.2s}.ph-tel-bubbla.skriver span:nth-child(3){animation-delay:.4s}
.ph-telefon .fp-knapp{margin-top:16px}.ph-telefon .fp-knapp:disabled{opacity:.4}
.ph-rostknapp{position:absolute;top:10px;right:10px;border:0;background:rgba(0,0,0,.1);border-radius:999px;height:34px;padding:0 12px 0 9px;display:flex;align-items:center;gap:6px;font:700 13px system-ui;color:#333;cursor:pointer}
.ph-rostknapp.av{background:#ffdede;color:#a33}
.ph-rostknapp svg{width:18px;height:18px}
.ph-telefon,.ph-papper{position:relative}
.ph-papper{width:min(420px,90vw);background:#fff8e1;color:#3a2e1a;border-radius:6px;padding:26px 28px;box-shadow:0 30px 80px rgba(0,0,0,.6);transform:rotate(-1.5deg);animation:phIn .45s cubic-bezier(.2,.9,.3,1.2);text-align:center}
.ph-pap-titel{font-weight:800;opacity:.6;margin-bottom:10px}
.ph-pap-text{font:500 21px/1.5 "Comic Sans MS","Chalkboard SE","Segoe Print",system-ui,sans-serif;text-align:left;margin-bottom:18px}
@keyframes phIn{from{transform:scale(.8) translateY(40px);opacity:0}}
body::after{content:'';position:fixed;inset:0;pointer-events:none;z-index:5;opacity:var(--skymning,0);background:radial-gradient(ellipse at center,transparent 45%,rgba(40,10,60,.55) 100%)}
.ph-hotbar{position:fixed;left:50%;bottom:max(10px,env(safe-area-inset-bottom));transform:translateX(-50%);z-index:21;display:flex;gap:4px;padding:5px;background:rgba(10,12,20,.6);border-radius:12px;pointer-events:auto;box-shadow:0 6px 18px rgba(0,0,0,.3)}
.ph-hotbar[hidden]{display:none}
.ph-slot{position:relative;width:56px;height:56px;border-radius:8px;background:rgba(255,255,255,.07);border:2px solid rgba(255,255,255,.14);display:grid;place-items:center;cursor:pointer;transition:transform .12s}
.ph-slot.vald{border-color:#ffd43b;background:rgba(255,212,59,.2);transform:translateY(-4px)}
.ph-slot img{width:48px;height:48px;pointer-events:none}
.ph-slot .em,.ph-ruta-sak .em{font-size:28px;line-height:1}
.ph-slot .n,.ph-ruta-sak .n{position:absolute;right:4px;bottom:1px;font:800 14px system-ui;color:#fff;text-shadow:0 1px 2px #000,0 0 3px #000}
.ph-slot .k{position:absolute;left:4px;top:1px;font:700 10px system-ui;color:rgba(255,255,255,.5)}
.ph-hb-namn{position:fixed;left:50%;bottom:84px;transform:translateX(-50%);z-index:21;color:#fff;font:800 16px system-ui;text-shadow:0 1px 3px #000;opacity:0;transition:opacity .3s;pointer-events:none;white-space:nowrap}
.ph-hb-namn.syns{opacity:1}
.ph-rubrik{text-align:left;margin:14px 0 8px;font-size:15px}.ph-rubrik small{opacity:.6;font-weight:500}
.ph-rad{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px}
.ph-ruta-sak{position:relative;width:62px;height:62px;border-radius:9px;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.15);display:grid;place-items:center;cursor:pointer;padding:0;color:#fff}
.ph-ruta-sak:hover:not(:disabled){border-color:#7dffb0}.ph-ruta-sak.vald{border-color:#ffd43b}.ph-ruta-sak:disabled{opacity:.55;cursor:default}
.ph-ruta-sak img{width:46px;height:46px}
.ph-kistgrid{display:grid;grid-template-columns:repeat(9,62px);gap:6px;background:rgba(0,0,0,.25);padding:8px;border-radius:10px;width:max-content;max-width:100%}
.ph-ruta-sak.tom{background:rgba(255,255,255,.04);border-style:dashed;cursor:default}
.ph-butik{width:min(860px,94vw)!important;max-width:none!important;padding:0!important;overflow:auto;background:#2b1d12!important;color:#3a2a1a}
.ph-butik>.fp-knapp{margin:12px 0 18px}
.ph-disk-topp{display:flex;align-items:center;gap:14px;padding:16px 20px;background:linear-gradient(#d9534f 0 50%,#f4efe6 50% 100%);background-size:100% 36px;color:#222}
.ph-ali{font-size:56px;filter:drop-shadow(0 4px 4px rgba(0,0,0,.3))}
.ph-bubbla{flex:1;background:#fff;border-radius:16px 16px 16px 4px;padding:10px 14px;font:600 16px/1.35 system-ui;text-align:left;box-shadow:0 3px 10px rgba(0,0,0,.2)}
.ph-pung{background:#fff3c4;border-radius:12px;padding:8px 12px;font:600 14px/1.5 system-ui;text-align:left;box-shadow:0 3px 10px rgba(0,0,0,.2)}
.ph-printruta{width:min(760px,94vw)!important;max-width:none!important;background:#1e2230!important}
.ph-pmeny{text-align:left}
.ph-ptopp{display:flex;justify-content:space-between;align-items:center;font-size:18px;margin-bottom:10px}.ph-ptopp span{font-size:14px;opacity:.85}
.ph-pflikar{display:flex;gap:4px;margin-bottom:-2px}
.ph-pflikar button{border:2px solid #4a5068;border-bottom:none;background:#2c3142;color:#cfd6e6;font:700 14px system-ui;padding:9px 14px;border-radius:10px 10px 0 0;cursor:pointer}
.ph-pflikar button.pa{background:#c6c6c6;color:#222;border-color:#c6c6c6}
.ph-pgrid{display:grid;grid-template-columns:repeat(auto-fill,76px);gap:6px;background:#c6c6c6;padding:10px;border-radius:0 10px 10px 10px;min-height:170px;max-height:42vh;overflow:auto;align-content:start}
.ph-ptile{position:relative;width:76px;height:76px;background:#8b8b8b;border:3px solid;border-color:#5a5a5a #fff #fff #5a5a5a;display:grid;place-items:center;cursor:pointer;padding:0}
.ph-ptile:hover{background:#a5a5a5}.ph-ptile.vald{background:#ffe17a;border-color:#b08a00 #fff6c8 #fff6c8 #b08a00}
.ph-ptile.dyr{opacity:.5}
.ph-ptile img{width:54px;height:54px}.ph-ptile .em{font-size:34px}
.ph-ptile .r{position:absolute;right:3px;bottom:1px;font:800 12px system-ui;color:#fff;text-shadow:0 1px 2px #000,0 0 2px #000}
.ph-ptile .kr{position:absolute;left:3px;top:1px;font:800 11px system-ui;color:#ffe17a;text-shadow:0 1px 2px #000,0 0 2px #000}
.ph-pinfo{display:flex;gap:14px;align-items:center;margin-top:12px;background:#2c3142;border-radius:12px;padding:12px}
.ph-pinfo .bild img{width:64px;height:64px}.ph-pinfo .tx{flex:1;display:flex;flex-direction:column;gap:4px}.ph-pinfo small{opacity:.8;font-size:13px}
.ph-pinfo .fp-knapp{margin:0}
.ph-pforklaring{font-size:12px;opacity:.7;margin:0 0 6px}
.ph-ladda{margin-top:10px;font-size:14px;color:#7dffb0}
.ph-flikar{display:flex;gap:0;background:#5b3a1a;padding:8px 16px 0}
.ph-flikar button{flex:1;border:0;padding:12px;font:800 16px system-ui;background:#7a5230;color:#f4e3c3;border-radius:12px 12px 0 0;cursor:pointer;margin-right:6px}
.ph-flikar button.pa{background:#c9935a;color:#2b1d12}
.ph-flikar span{background:#d63031;color:#fff;border-radius:999px;padding:1px 8px;font-size:13px;margin-left:4px}
.ph-hylla{background:repeating-linear-gradient(#7a5230 0 6px,#6b4626 6px 8px);padding:12px 16px 4px}
.ph-hylla h3,.ph-disken h3{color:#ffe9b0;text-align:left;margin:4px 0 10px;font-size:16px;text-shadow:0 1px 2px #000}
.ph-disken{background:linear-gradient(#c9935a,#a8743f);border-top:10px solid #5b3a1a;padding:12px 16px 8px}
.ph-rutnat{display:grid;grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:10px;margin-bottom:10px}
.ph-kort{background:#fbf6ea;border-radius:12px;padding:10px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:3px;box-shadow:0 4px 0 rgba(0,0,0,.25);color:#2b1d12}
.ph-kort .bild{height:66px;display:grid;place-items:center}.ph-kort .bild .em{font-size:38px}
.ph-instr{position:relative;display:inline-block}.ph-instr i{position:absolute;right:-10px;bottom:-4px;font-size:24px;font-style:normal}
.ph-kort b{font-size:14px}.ph-kort small{font-size:12px;opacity:.7;line-height:1.3;flex:1}
.ph-kort .knappar{display:flex;gap:5px;margin-top:6px;flex-wrap:wrap;justify-content:center}
.ph-kort button{border:0;border-radius:999px;padding:7px 12px;font:800 13px system-ui;background:#2f9e5b;color:#fff;cursor:pointer}
.ph-kort button[data-saljalla]{background:#1f7a45}
.ph-hylla .ph-kort button{background:#d63031}.ph-hylla .ph-kort button::before{content:'Köp −'}
.ph-hylla .ph-kort button:disabled{background:#a88}
.ph-disken .ph-kort button{background:#2f9e5b}
.ph-kort button:disabled{background:#999;cursor:default}
.ph-kort.av{opacity:.75}
.ph-las{color:#ffe9b0;font-size:13px;opacity:.85;text-align:left;margin:4px 0 8px}
.ph-strom{width:70px;height:10px;border-radius:999px;background:rgba(255,255,255,.18);overflow:hidden}
.ph-strom i{display:block;height:100%;background:linear-gradient(90deg,#ffd43b,#fff3a0)}
`;
document.head.appendChild(css);
const topp = document.querySelector('.fp-topp');
const verktygIkon = (st) => !S.grip ? ik('hand') : ikonHtml(niva() === 3 ? 'byggsats:magnet' : 'byggsats:grip', st);
function ritaHotbar() {
  // första gången du har två saker: visa att hjulet byter sak (försvinner när du har rullat)
  if (!S.tipsHjul && S.hotbar.filter(Boolean).length >= 2 && !document.querySelector('.hud-hjultips')) {
    document.body.insertAdjacentHTML('beforeend', `<div class="hud-hjultips"><span class="mus"><i></i></span><div><b>Rulla på hjulet</b> för att byta sak i handen<br><small>eller tryck 1–8 · H = tomhänt</small></div></div>`);
  }
  const el = document.querySelector('.ph-hotbar'); if (!el) return;
  el.innerHTML = S.hotbar.map((p, i) => i === 0
    ? `<div class="ph-slot ${S.vald === 0 ? 'vald' : ''}" data-i="0" data-niva="${S.grip ? 1 : 0}" title="Verktyget"><span class="k">1</span>${verktygIkon(48)}<span class="n ph-hb-skrap"></span></div>`
    : `<div class="ph-slot ${S.vald === i ? 'vald' : ''}" data-i="${i}" title="${p ? namnFor(p.typ) : ''}"><span class="k">${i + 1}</span>${p ? ikonHtml(p.typ, 48) : ''}${p?.typ === 'karra' ? '<span class="n ph-hb-karra"></span>' : p?.n > 1 ? `<span class="n">${p.n}</span>` : ''}</div>`).join('');
}
let namnTimer = 0;
function visaHotbarNamn() {
  const el = document.querySelector('.ph-hb-namn'); if (!el) return;
  const t = valdTyp();
  el.textContent = t ? `${namnFor(t)}${t === 'byggsats:gamingbod' ? ' – gå till vänster om skjulet och klicka på det gröna spöket' : t?.startsWith('byggsats:spolhallare') ? ' – klicka på en skrivare för att montera' : t === 'byggsats:matarband' ? ' – gå till kvarnen: den ska stå bakom (grönt spöke)' : t === 'rulle' ? ' – klicka på en skrivare för att ladda' : t === 'magnet' ? ' – håll inne och sikta: suger till sig skräp' : t === 'karra' ? ' – lasta tungt skräp, Q tippar ur' : arPlacerbar(t) ? (VAROR[t]?.pris ? ' – sikta och klicka för att ställa ut (även i skjulet) eller sälj hos Ali' : ' – sikta och klicka för att ställa ut') : VAROR[t]?.gava ? ' – lägg i Rolfs postlåda' : VAROR[t]?.pris ? ' – sälj hos Ali' : ''}` : ['✋ Händerna', '🦾 Skräpgripen', '🎒 Grip + ryggkorg', '🧲 Magnetpistolen'][niva()];
  el.textContent = rens(el.textContent); el.classList.add('syns'); clearTimeout(namnTimer); namnTimer = setTimeout(() => el.classList.remove('syns'), 1800);
}
topp.insertAdjacentHTML('beforeend', `<div class="fp-chip ph-resp-chip" title="Respekt – hur andra ser på dig" style="pointer-events:auto;cursor:pointer">${ik('hjarta')}<span class="ph-resp">0</span></div><div class="fp-chip">${ik('rulle')}<span class="ph-fil">0</span></div>
  <div class="fp-chip ph-dag-chip" title="Dagen är din nivå – klicka för bokmärken" style="pointer-events:auto;cursor:pointer">${ik('klocka')}<span class="ph-klocka"></span></div>
  <div class="fp-chip" style="display:none"><span class="ph-forrad">0</span></div>
  <div class="fp-chip ph-sms-chip" style="display:none;pointer-events:auto;cursor:pointer">${ik('telefon')}<span class="ph-sms-n">0</span></div>
  <div class="fp-chip ph-bar-chip"><span class="ph-grip-ikon">${ik('hand')}</span><span class="ph-bar-namn">Bär</span><span class="ph-lastbar"><i></i></span><span class="ph-bar">0/2</span></div>
  <div class="fp-chip ph-strom-chip">${ik('blixt')}<div class="ph-strom"><i></i></div></div>`);
document.querySelector('.fp-mynt').insertAdjacentText('afterend', ' kr');
{ const mc = document.querySelector('.fp-mynt').parentElement; for (const n of [...mc.childNodes]) if (n.nodeType === 3 && /\S/.test(n.textContent) && !/kr/.test(n.textContent)) n.remove(); mc.insertAdjacentHTML('afterbegin', ik('mynt')); }
document.body.insertAdjacentHTML('beforeend', '<div class="ph-hotbar" hidden></div><div class="ph-hb-namn"></div>');
document.querySelector('.ph-hotbar').onclick = (e) => { const k = e.target.closest('[data-i]'); if (k) byt(Number(k.dataset.i)); };
let hjulTid = 0;
addEventListener('wheel', (e) => {
  if (!ui.igang || !ui.butiksOverlay.hidden || pausad || Math.abs(e.deltaY) < 4) return;
  const nu = performance.now(); if (nu - hjulTid < 110) return; hjulTid = nu;
  bytSteg(e.deltaY > 0 ? 1 : -1);
}, { passive: true });
document.body.insertAdjacentHTML('beforeend', '<div class="ph-mal"><small class="ph-mal-del">NÄSTA MÅL</small><span class="ph-mal-text"></span><div class="ph-rolfrad"></div></div><div class="ph-mobil"></div><div class="ph-hoger"><div class="hud-inkorg"></div><div class="ph-varningar"></div><div class="ph-notiser"></div></div><div class="ph-notiser ph-meddelanden"></div><div class="ph-lapp-ruta"></div><div class="ph-vev"><div class="rad"><span class="ph-vev-t"></span><span class="ph-vev-p"></span></div><div class="bar"><i></i></div></div>');
const vevEl = document.querySelector('.ph-vev'), vevFyll = vevEl.querySelector('i'), vevT = vevEl.querySelector('.ph-vev-t'), vevP = vevEl.querySelector('.ph-vev-p');
const rolfRad = document.querySelector('.ph-rolfrad'), mobilEl = document.querySelector('.ph-mobil');
const malDel = document.querySelector('.ph-mal-del'), malText = document.querySelector('.ph-mal-text'), lappRuta = document.querySelector('.ph-lapp-ruta');
const smsChip = document.querySelector('.ph-sms-chip'), smsN = document.querySelector('.ph-sms-n');
smsChip.onclick = () => oppnaInkorg();
const respChip = document.querySelector('.ph-resp-chip'), respText = document.querySelector('.ph-resp');
// ---------- Statuspanelen (hud.js): klocka, trivsel-gubbe, respekt-hjärta, uppdragslista ----------
document.body.insertAdjacentHTML('beforeend', `<div class="hud-status">
  <div class="hud-klocka" title="Dagen är din nivå – klicka för bokmärken"><span class="dag">DAG 1</span><span class="tid">08:00</span><span class="arstid"></span></div>
  <div class="hud-matare" data-hud="trivsel" title="Trivsel – hur du har det hemma"><div class="hud-ikon"></div><div class="hud-m"><div class="rad"><span>Trivsel</span><b></b></div><div class="hud-bar"><i></i></div></div></div>
  <div class="hud-matare" data-hud="respekt" title="Respekt – hur andra ser på dig"><div class="hud-ikon"></div><div class="hud-m"><div class="rad"><span>Respekt</span><b></b></div><div class="hud-bar"><i></i></div></div></div>
  <div class="hud-matare hud-el" data-hud="el" title="El – trampa cykeln för att ladda"><div class="hud-ikon hud-el-ik">${ik('blixt')}</div><div class="hud-m"><div class="rad"><span>El</span><b></b></div><div class="hud-bar"><i></i></div></div></div>
</div>`);
const hudEl = document.querySelector('.hud-status');
document.body.insertAdjacentHTML('beforeend', '<div class="hud-hand" hidden><b></b><span><i></i></span></div>');
const hudHand = document.querySelector('.hud-hand');
// meddelanden och dagbok: två egna ikonknappar uppe till höger
document.body.insertAdjacentHTML('beforeend', `<div class="hud-flikar"><button class="hud-flik hud-sms-knapp" data-flik-sms title="Meddelanden (M)">${ik("brev")}<span class="sms-txt">Meddelanden</span><kbd>M</kbd><em hidden></em></button></div>`);
const hudSms = document.querySelector('[data-flik-sms]');
// pengar och rullar uppe till höger, bredvid meddelandeknappen
function placeraTopp() { const tp = document.querySelector('.fp-topp'), fl = document.querySelector('.hud-flikar'); if (tp && fl) tp.style.right = (innerWidth - fl.getBoundingClientRect().left + 8) + 'px'; }
addEventListener('resize', placeraTopp); setTimeout(placeraTopp, 0); setTimeout(placeraTopp, 1500);
hudSms.onclick = () => oppnaInkorg();
// Tab öppnar meddelandena (samma som M) – listan går att klicka i, Läs upp spelar igen

// träningsdagen: första sms:et lär dig Tab
function visaTabTips() {
  return;
  if (S.tipsTab || document.querySelector('.hud-tabtips')) return;
  document.body.insertAdjacentHTML('beforeend', `<div class="hud-hjultips hud-tabtips"><kbd class="stor">Tab</kbd><div><b>Alla dina sms</b><br><small>Tryck Tab för att läsa dem igen</small></div></div>`);
}
hudEl.querySelector('.hud-klocka').onclick = () => oppnaBokmarken();
hudEl.querySelector('[data-hud="respekt"]').onclick = () => oppnaRespekt();
hudEl.querySelector('[data-hud="trivsel"]').onclick = () => { dagbokFlik = 'mal'; oppnaDagbok(); };
{ const m = document.querySelector('.ph-mal'); m.classList.add('hud-uppdrag'); m.querySelector('.ph-mal-text').insertAdjacentHTML('afterend', '<ul class="hud-lista"></ul>'); m.insertAdjacentHTML('afterbegin', '<em class="hud-antal"></em>'); }
const hudCache = {};
function hudMatare(namn, niva, ikonFn, varde, andel) {
  const el = hudEl.querySelector(`[data-hud="${namn}"]`), ik2 = el.querySelector('.hud-ikon');
  if (hudCache[namn] !== niva) { const forr = hudCache[namn]; hudCache[namn] = niva; ik2.innerHTML = ikonFn(niva); ik2.className = `hud-ikon niva${niva}`; if (forr != null) { void ik2.offsetWidth; ik2.classList.add('studs'); } }
  const b = el.querySelector('b'); if (b.textContent !== String(varde)) b.textContent = varde;
  const i = el.querySelector('i'); const w = Math.round(Math.max(0.03, Math.min(1, andel)) * 100) + '%';
  if (i.style.width !== w) { i.style.width = w; i.style.backgroundColor = matarFarg(andel); }
}
let hudListaNyckel = '', hudSenastKlar = -1, hudForraText = '', hudForraSteg = S.steg, hudForraSkylt = !!S.skyltUppe;
// klarat uppdrag: grönt, bock, konfetti – sedan stryks det och glider bort
function firaUppdrag(text) {
  const mEl = malText.parentElement;
  const k = document.createElement('div'); k.className = 'hud-klarad';
  k.innerHTML = `<span class="b">✓</span><span class="t">${rens(text)}</span>`;
  malText.before(k);
  const F = [FARG.fil, FARG.falu, '#ffd43b', '#7dffb0', FARG.papper, '#ff8fa0'];
  for (let i = 0; i < 22; i++) {
    const c = document.createElement('i'); c.className = 'hud-konfetti'; c.style.background = F[i % F.length];
    c.style.left = (10 + Math.random() * 80) + '%'; k.appendChild(c);
    const vx = (Math.random() - 0.5) * 160, vy = -40 - Math.random() * 70;
    c.animate([{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: `translate(${vx}px,${vy}px) rotate(${Math.random() * 540}deg)`, opacity: 1, offset: 0.6 }, { transform: `translate(${vx * 1.2}px,${vy + 60}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }], { duration: 1100 + Math.random() * 400, easing: 'cubic-bezier(.2,.7,.4,1)' });
  }
  ljud.klar?.();
  setTimeout(() => k.classList.add('stryk'), 650);
  setTimeout(() => k.classList.add('bort'), 1350);
  setTimeout(() => k.remove(), 1900);
}
// ---------- Kretsloppet: skräp → kvarn → rulle → skrivare → Ali → uppgradering ----------
// Syns dag 1–2 överst i uppdragsrutan. Det du håller på med lyser – så man förstår hela loopen, inte bara nästa steg.
const LOOP = [[null, 'Skräp', 'du'], ['kvarn', 'Kvarn'], ['rulle', 'Rulle'], ['skrivare', 'Printa'], [null, 'Sälj', 'ali'], ['kop', 'Uppgradera']];
function loopSteg() {
  // vad är rätt nästa sak just nu? räknas ut från läget, inte bara från uppdragssteget
  const harRulle = antalInv('rulle') > 0, harVara = S.hotbar.some((x) => x && VAROR[x.typ] && !VAROR[x.typ].hem && VAROR[x.typ].pris > 0 && !x.typ.startsWith('rulle'));
  const skrivKlar = skrivare.some((x) => x.klar), skrivJobb = skrivare.some((x) => x.jobb), skrivFil = skrivare.some((x) => x.fil >= 100);
  if (harVara) return 4;
  if (skrivKlar || skrivJobb) return 3;
  if (harRulle || helaRullar() > 0) return skrivFil ? 3 : 2;
  if (skrivFil) return 3;
  if (hand.saker.length || S.kvarn.tratt > 0) return 1;
  if (S.mynt >= 50 && !forstaUpp()) return 5;
  return 0;
}
const loopEl = document.createElement('div'); loopEl.className = 'hud-loop';
function ritaLoop(mEl) {
  const visa = S.dag <= 2 && S.skyltUppe;
  if (!visa) { if (loopEl.parentNode) loopEl.remove(); return; }
  if (loopEl.parentNode !== mEl) malDel.after(loopEl);
  const nu = loopSteg(), h = LOOP.map(([ikon, t, vem], i) => `<span class="${i === nu ? 'nu' : ''}">${vem ? portratt(vem, 20) : ik(ikon)}<em>${t}</em></span>`).join('<i>›</i>');
  if (loopEl.dataset.h !== h) { loopEl.dataset.h = h; loopEl.innerHTML = h; }
}
// ---------- Nästa grej: en ikon och några ord – det du ska göra NU ----------
// Står något i vägen (slut på filament, rullen sitter kvar i kvarnen ...) visas det i stället för uppdraget.
function nastaAtgard(text) {
  const st = STEG[S.steg];
  if (!st?.sov && skrivare.some((x) => x.klar)) return ['bock', 'Ta ut det som är klart ur skrivaren'];
  const vilPrinta = /^(Printa|Gör det mysigt|Inred|Isolera|Bygg|Lägg plåttak|Tapetsera)/i.test(text) || /^Printa/.test(text);
  const harFil = skrivare.some((x) => x.fil >= 100 || x.jobb);
  if (vilPrinta && !harFil) {
    if (antalInv('rulle')) return ['rulle', 'Ladda en rulle i skrivaren'];
    if (helaRullar() > 0) return ['rulle', 'Ta rullen vid kvarnen'];
    if (hand.saker.length || S.karraLast?.length) return ['kvarn', 'Lägg skräpet i kvarnen'];
    if (S.kvarn.tratt > 0) return ['kvarn', 'Veva kvarnen'];
    return ['hand', gardSkrap() > 0 ? 'Plocka skräp till kvarnen' : 'Hämta skräp på tippen'];
  }
  const ik2 = /^Printa/.test(text) ? 'skrivare' : /Sälj|Ali|Köp|CAD|Tjäna/.test(text) ? 'kop' : /Rolf|postlåd|brev/i.test(text) ? 'brev' : /sov|kväll|Klart för idag/i.test(text) ? 'klocka'
    : /Städa|Plocka|skräp/i.test(text) ? 'hand' : /kvarn|Veva|tratt|tunna/i.test(text) ? 'kvarn' : /rulle|Ladda/i.test(text) ? 'rulle' : /cykel|Trampa/i.test(text) ? 'blixt'
    : /Bygg|Isolera|plåttak|dörr|skylt/i.test(text) ? 'hus' : /mysigt|Inred|Tapet|fristad|jacuzzi/i.test(text) ? 'soffa' : 'mal';
  return [ik2, text];
}
let malRaw = '';
function ritaNasta() {
  const text = malRaw; const [ikon, t] = nastaAtgard(text);
  const h = `<span class="nasta-ik">${ik(ikon)}</span><span class="nasta-t">${rens(t)}</span>`;
  if (malText.dataset.h !== h || !malText.firstElementChild) { malText.dataset.h = h; malText.innerHTML = h; malText.classList.add('nasta'); }
}
// ---------- Första gången: kort genomgång av varje nytt moment ----------
// Blicken vänds dit, din röst säger vad du ska göra – en gång. Menyer får en liten pulserande hjälplapp första gången.
const FORSTA = {
  gava: { rost: 'Klart! Nu lägger jag den i Rolfs brevlåda vid grinden.', titta: () => postlada.position, nar: () => { const g = aktivGava(); return g && antalInv(g) > 0 && !S.post.tillRolf; } },
  post: { rost: 'Rolf har lagt något i brevlådan. Jag går och hämtar det.', titta: () => postlada.position, nar: () => S.post.tillMig.length > 0 },
  uppgradera: { rost: 'Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare.', titta: () => ALI, nar: () => S.dag >= 3 && S.mynt >= 90 && Object.entries(MASKINER).some(([id, m]) => !m.hem && m.syns?.() !== false && m.ritning <= S.mynt && !S.ritningar.includes(id)) },
  karra: { rost: 'En skottkärra! Jag väljer den med hjulet och kör fram till en tunna.', nar: () => !!S.karra && antalInv('karra') > 0 },
};
function kollaForsta() {
  if (!ui.igang || sover || !ui.butiksOverlay.hidden) return;
  S.forsta = S.forsta || [];
  for (const [id, f] of Object.entries(FORSTA)) {
    if (S.forsta.includes(id)) continue;
    let ok = false; try { ok = f.nar(); } catch {}
    if (!ok) continue;
    S.forsta.push(id); sparaSnart();
    bud(() => { const p = f.titta?.(); if (p) tittaMot(p.x, p.z, 1.6); setTimeout(() => prata('du', f.rost), p ? 600 : 0); });
    return;
  }
}
setInterval(kollaForsta, 1000);
let fullPuffT = -1e9;
setInterval(() => {
  if (!ui.igang || sover || !ui.butiksOverlay.hidden || S.dag > 3) return;
  const fullt = extruderFull() && (hand.saker.length > 0 || S.kvarn.tratt >= 2) && antalInv('rulle') >= rulleMax();
  if (!fullt || performance.now() - fullPuffT < 180000) return;
  fullPuffT = performance.now();
  bud(() => { const sk = skrivare[0]; if (sk) { const v = sk.mesh.getWorldPosition(new THREE.Vector3()); tittaMot(v.x, v.z, 1.6); } setTimeout(() => prata('du', VARN.allaFullt), 600); });
}, 2000);
// hjälplapp i en meny första gången den öppnas
const COACH = { ali: 'Klicka på en sak för att sälja den. Klicka i Köp för att köpa.', print: 'Välj vad du vill printa och klicka på det.' };
function coachLapp(el, id) {
  S.forsta = S.forsta || [];
  if (S.forsta.includes('meny:' + id)) return;
  S.forsta.push('meny:' + id); sparaSnart();
  const kropp = el.querySelector('.ui-panel-kropp, .ui-kropp') || el.querySelector('.ui-panel') || el;
  const d = document.createElement('div'); d.className = 'ph-coach'; d.innerHTML = `${ik('hand')}<span>${COACH[id]}</span>`;
  kropp.prepend(d);
  // vänta tills Ali (eller någon annan) pratat klart, och bara om menyn fortfarande är öppen
  const sag = () => { if (ui.butiksOverlay.hidden) return; if (performance.now() < pratarTill) { setTimeout(sag, 300); return; } prata('du', COACH[id]); };
  setTimeout(sag, 600);
}
function ritaHud() {
  // klockan
  const k = klockan(), tidEl = hudEl.querySelector('.tid');
  const dagT = `DAG ${S.dag}`, tidT = k == null ? '--:--' : klockText(Math.min(k, 21 * 60)), arT = ARSTID_NAMN[arstid()] || '';
  if (hudCache.dag !== dagT) { hudCache.dag = dagT; hudEl.querySelector('.dag').textContent = dagT; }
  if (hudCache.tid !== tidT) { hudCache.tid = tidT; tidEl.textContent = tidT; tidEl.classList.toggle('natt', k != null && k >= 21 * 60); }
  if (hudCache.ar !== arT) { hudCache.ar = arT; hudEl.querySelector('.arstid').textContent = rens(arT); }
  // trivsel: gubben följer hur bra du har det, mätaren går mot nästa mål
  const t = trivsel(), tMal = t < TRIVSEL_MAL ? TRIVSEL_MAL : t < 300 ? 300 : Math.ceil((t + 1) / 100) * 100;
  hudMatare('trivsel', t < 20 ? 0 : t < 60 ? 1 : t < 120 ? 2 : t < 220 ? 3 : 4, hudAnsikte, t, t / tMal);
  // respekt: hjärtat mot nästa filamentnivå
  const r = S.respekt || 0, nasta = RESPEKT_NIVAER.find(([g]) => r < g), forra = [...RESPEKT_NIVAER].reverse().find(([g]) => r >= g);
  hudMatare('respekt', r < 5 ? 0 : r < 25 ? 1 : r < 60 ? 2 : r < 110 ? 3 : 4, hudHjarta, r, nasta ? (r - (forra?.[0] || 0)) / (nasta[0] - (forra?.[0] || 0)) : 1);
  // uppdraget hamnar under statuspanelen
  // uppdraget sitter högst upp i mitten – på smala skärmar under statuspanelen
  const mEl = malText.parentElement, smal = innerWidth < 1100, topp = smal ? Math.round(hudEl.getBoundingClientRect().bottom + 8) + 'px' : '';
  if (mEl.style.top !== topp) mEl.style.top = topp; mEl.classList.toggle('smal', smal);
  ritaLoop(mEl);
  // uppdragslistan: det som är klart (bockat), det du gör nu och vad som kommer
  const lista = mEl.querySelector('.hud-lista');
  const iSteg = S.steg < STEG.length && !(S.folkbokMal && !S.folkbokford && S.steg >= STEG.length);
  const nyckel = `${S.steg}|${S.skyltUppe ? 1 : 0}|${iSteg}`;
  if (nyckel === hudListaNyckel) { hudForraText = malText.textContent; return; }
  const framat = hudListaNyckel && (S.steg > hudForraSteg || (S.skyltUppe && !hudForraSkylt));
  if (framat && hudForraText) firaUppdrag(hudForraText);
  hudListaNyckel = nyckel; hudForraSteg = S.steg; hudForraSkylt = !!S.skyltUppe; hudForraText = malText.textContent;
  if (!iSteg) { lista.innerHTML = ''; lista.style.display = 'none'; mEl.querySelector('.hud-antal').textContent = ''; return; }
  lista.style.display = '';
  const del = STEG[S.steg].del, idx = STEG.map((x, i) => [x, i]).filter(([x]) => x.del === del);
  const poster = idx.map(([x, i]) => ({ text: rens(typeof x.text === 'function' ? '' : x.text) || rens(stegText(x)), klar: i < S.steg, nu: i === S.steg, i }));
  if (S.steg <= 1 && del === STEG[0].del) poster.unshift({ text: 'Spika upp adresskylten', klar: !!S.skyltUppe, nu: !S.skyltUppe, i: -1 });
  if (!S.skyltUppe && S.steg <= 1) poster.forEach((p) => { if (p.i >= 0) p.nu = false; });
  const nuI = poster.findIndex((p) => p.nu);
  const visa = poster.slice(Math.max(0, nuI - 2), nuI + 3);
  const klara = poster.filter((p) => p.klar).length;
  mEl.querySelector('.hud-antal').textContent = `${klara}/${poster.length}`;
  const kommer = poster.slice(nuI + 1, nuI + 2);
  lista.innerHTML = kommer.length ? kommer.map((p) => `<li class="${p.klar ? 'klar' : p.nu ? 'nu' : ''}${p.klar && p.i === S.steg - 1 && hudSenastKlar !== S.steg ? ' precis' : ''}"><span class="b">${p.klar ? '✓' : ''}</span><span>${p.text}</span></li>`).join('') : '';
  hudSenastKlar = S.steg;
}
respChip.onclick = () => oppnaRespekt();
document.querySelector('.ph-dag-chip').onclick = () => oppnaBokmarken();
function oppnaRespekt() {
  const nasta = RESPEKT_NIVAER.find(([g]) => S.respekt < g);
  const kropp = sektion('Respekt är hur andra ser på dig. Trivsel är hur du själv mår.')
    + RESPEKT_NIVAER.map(([g, namn], i) => rad({ bild: `<span class="ui-headik" style="width:44px;height:44px;opacity:${S.respekt >= g ? 1 : 0.35}">${IKON.hjarta}</span>`, titel: namn, text: (S.respekt >= g ? 'Upplåst' : `Kräver ${g} i respekt (${g - S.respekt} kvar)`) + ` · tunnor och kajaker ger sånt filament · printa ${VAROR[['n2_neon', 'n3_stol', 'n4_staty', 'n5_drake'][i]].namn.toLowerCase()} · du har ${antalInv('rulle' + (i + 2))} rullar` })).join('')
    + sektion('Senast') + ((S.respektLogg || []).map(([d, v, dag]) => `<div class="ph-resp-rad"><b class="${d > 0 ? 'plus' : 'minus'}">${d > 0 ? '+' : ''}${d}</b> ${v} <small>dag ${dag}</small></div>`).join('') || '<div class="ph-resp-rad">Inget än. Ge Rolf något, säg nej till skumma jobb.</div>');
  oppnaRuta(panel({ ikon: 'hjarta', titel: `Respekt ${S.respekt}`, sub: nasta ? `Nästa: ${nasta[1]} vid ${nasta[0]}` : 'Alla nivåer upplåsta', kropp }));
}
const lastNamn = document.querySelector('.ph-bar-namn'), lastBar = document.querySelector('.ph-lastbar i');
const stromChip = document.querySelector('.ph-strom-chip'), barText = document.querySelector('.ph-bar'), gripIkon = document.querySelector('.ph-grip-ikon'), forradText = document.querySelector('.ph-forrad'), filText = document.querySelector('.ph-fil'), stromBar = document.querySelector('.ph-strom i');

// ---------- Notiser: korten trillar in överst i en hög till höger ----------
const varnEl = document.querySelector('.ph-varningar');
const notisEl = document.querySelector('.ph-hoger .ph-notiser'), medEl = document.querySelector('.ph-meddelanden');
const NOTIS_MAX = 2;
const RUBRIK = { bra: 'Klart', guld: 'Nytt', fel: 'Obs', '': 'Info', sms: 'Meddelande', lapp: 'Dagbok' };
const RUBRIK_IKON = { bra: 'bock', guld: 'stjarna', fel: 'varning', '': 'info', sms: 'telefon', lapp: 'bok' };
function notis(text, typ = '', o = {}) {
  // samma text igen inom kort: förnya kortet i stället för att lägga ett nytt
  const el = typ === 'sms' || typ === 'lapp' ? medEl : notisEl;   // meddelanden till vänster, notiser till höger
  const finns = [...el.children].find((k) => k.dataset.text === text && !k.classList.contains('ut'));
  if (finns) { clearTimeout(finns._t); finns._t = setTimeout(() => taBort(finns), o.tid || 7000); finns.animate([{ transform: 'scale(1.04)' }, { transform: 'scale(1)' }], { duration: 200 }); return finns; }
  const k = document.createElement('div');
  k.className = 'ph-notis ' + typ; k.dataset.text = text;
  k.innerHTML = `<div class="rubrik"><span>${ik(RUBRIK_IKON[typ] || 'info')} ${rens(o.titel || RUBRIK[typ] || 'Info')}</span><span>nu</span></div><div class="kropp">${rens(text)}</div>`;
  if (o.klick) { k.classList.add('klickbar'); k.insertAdjacentHTML('beforeend', '<div class="las"><kbd>Tab</kbd> läs och lyssna</div>'); k.onclick = (e) => { e.stopPropagation(); taBort(k); o.klick(); }; }
  el.prepend(k);
  requestAnimationFrame(() => k.classList.add('in'));
  const ut = [...el.children].filter((x) => !x.classList.contains('ut'));
  ut.slice(el === medEl ? 3 : NOTIS_MAX).forEach(taBort);
  k._t = setTimeout(() => taBort(k), o.tid || 7000);
  return k;
}
// fasta varningar: ligger kvar tills problemet är löst
const varningar = {};
function varning(id, aktiv, text) {
  const k = varningar[id];
  if (aktiv && !k) {
    const n = document.createElement('div');
    n.className = 'ph-notis fel';
    n.innerHTML = `<div class="rubrik"><span>⚠️ Måste fixas</span><span>📌</span></div><div class="kropp">${text}</div>`;
    varnEl.prepend(n); requestAnimationFrame(() => n.classList.add('in'));
    varningar[id] = n; ljud.fel();
  } else if (aktiv && k && k.querySelector('.kropp').textContent !== text) {
    k.querySelector('.kropp').textContent = text;
  } else if (!aktiv && k) {
    taBort(k); delete varningar[id];
  }
}
function kollaVarningar() {
  const stromStopp = skrivare.some((x) => x.jobb && x.vantar === 'ingen ström!');
  varning('strom', false && stromStopp, '⚡ Batteriet är tomt – skrivaren står still. Trampa cykeln vid skrivaren!');
  const filStopp = skrivare.some((x) => x.jobb && /filament/.test(x.vantar || ''));
  varning('filament', false && filStopp, `🧵 Slut på filament mitt i en byggsats – ladda en rulle i skrivaren (du bär ${antalInv('rulle')})`);
  const motorStopp = S.kvarn.motor && S.kvarn.tratt > 0 && S.strom < 1;
  varning('motor', false && motorStopp, '⚙️ Kvarnmotorn står still – batteriet är tomt');
  const fullKvarn = S.kvarn.tratt >= TRATT_MAX && !S.kvarn.motor;
  varning('tratt', false && fullKvarn, '🫙 Kvarnens tratt är full – veva så att det blir plats');
}
// ---------- Puffar: har du missat något viktigt en stund kommer en egen tanke och blicken vänds dit ----------
const PUFFAR = [
  { id: 'brev', efter: 40, text: 'Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev?', villkor: () => !!(S.post.lapp || S.post.tillMig.length), mal: () => postlada },
  { id: 'rulle', efter: 60, text: 'Rullhållaren vid kvarnen är full. Jag borde ta rullarna innan kvarnen stannar.', villkor: () => extruderFull() && helaRullar() >= 1, mal: () => rulle },
];
const puffTid = {}, puffSenast = {};
const puffV = new THREE.Vector3();
function kollaPuffar(dt) {
  if (!ui.igang || pausad) return;
  for (const p of PUFFAR) {
    if (!p.villkor()) { puffTid[p.id] = 0; continue; }
    puffTid[p.id] = (puffTid[p.id] || 0) + dt;
    const nu = performance.now();
    if (puffTid[p.id] < p.efter || nu - (puffSenast[p.id] || -1e9) < 150000 || budKo.length) continue;
    puffSenast[p.id] = nu; puffTid[p.id] = 0;
    inkorg({ vem: 'du', titel: 'Tanke', text: p.text, fore: () => { const o = p.mal(); if (o) { o.getWorldPosition(puffV); tittaMot(puffV.x, puffV.z, 1.4); } } });
  }
}
// ---------- Räddningsnät: du ska aldrig kunna fastna utan plast och utan pengar ----------
// räcker inte allt du har (rullar, filament i skrivarna, kvarnen, skräp du når) till nästa sak och du inte har råd
// med en rulle, tippar sopbilen lite plast innanför staketet.
let raddTid = 0, raddSenast = -1e9;
function kollaRaddning(dt) {
  raddTid += dt; if (raddTid < 10 || !ui.igang) return; raddTid = 0;
  if (S.mynt >= FILAMENT_KOP.pris || performance.now() - raddSenast < 240000) return;
  const behov = (VAROR[aktivGava()]?.gram || 200) * 1.3;
  const nar = skrapLista.filter((x) => !x.userData.tung && (S.tippNyckel || !paTippen(x.position.x, x.position.z))).reduce((a, x) => a + (x.userData.gram ?? 200), 0);
  const har = antalInv('rulle') * RULLE + skrivare.reduce((a, x) => a + (x.fil || 0), 0) + (S.kvarn.ut || 0) + (S.kvarn.trattGram || 0) + nar;
  if (har >= behov) return;
  raddSenast = performance.now();
  for (let i = 0; i < 8; i++) laggSkrap(TS.x2 + 2 + Math.random() * 3, TIPP.z + (Math.random() - 0.5) * 6, slumpVariant(), Math.random() * 6.3);
  ui.toast('Sopbilen tippade lite extra plast innanför staketet vid grinden', 'guld');
}
// ---------- Budkön: ett meddelande i taget, med andrum emellan ----------
// sms, Alis rop, berättaren och dagboken körs aldrig samtidigt: nästa väntar tills ingen pratar,
// inget meddelande är öppet och det gått en stund sedan förra.
const BUD_PAUS = 9000, BUD_TYST = 2500;   // ms mellan två bud · ms tystnad innan nästa
const budKo = []; let budSenast = -1e9, senastPrat = 0;
function bud(fn) { budKo.push(fn); }
function korBud() {
  const nu = performance.now();
  if (pratarTill > nu || dagbokLas || spikar || !ui.butiksOverlay.hidden) senastPrat = nu;   // i en meny: vänta, och ge lite andrum efteråt
  if (!budKo.length || !ui.igang || pausad || !medEl2.hidden || medKo.length || dagbokLas || !ui.butiksOverlay.hidden) return;
  const paus = S.dag <= 3 ? BUD_PAUS * 1.6 : BUD_PAUS;   // de första dagarna: en sak i taget, gott om andrum   // dag 1: en sak i taget, gott om andrum
  if (nu - senastPrat < BUD_TYST || nu - budSenast < paus) return;
  budSenast = nu; const fn = budKo.shift();
  try { fn(); } catch (e) { console.warn(e); }
}
// ---------- Stoppskyltar: står en maskin still visas VARFÖR och VAD du gör, direkt ovanför maskinen ----------
const stoppEl = document.createElement('div'); stoppEl.className = 'hud-stopplager'; document.body.appendChild(stoppEl);
const stoppPool = [], stoppV = new THREE.Vector3(), stoppK = new THREE.Vector3();
function maskinStopp() {
  const L = [];
  for (const sk of skrivare) {
    const namn = 'Skrivare ' + GEN[sk.gen].namn;
    if (sk.jobb && sk.vantar === 'ingen ström!') L.push({ obj: sk.mesh, y: 1.0, typ: 'stopp', rub: `${namn} står still`, varfor: 'Batteriet är tomt', fix: 'Trampa cykeln för att ladda', kort: 'Trampa cykeln', ikon: 'blixt' });
    else if (sk.jobb && /filament/.test(sk.vantar || '')) L.push({ obj: sk.mesh, y: 1.0, typ: 'stopp', rub: `${namn} står still`, varfor: 'Slut på filament', fix: antalInv('rulle') ? 'Klicka på skrivaren med en rulle i handen' : 'Mal skräp till en rulle – eller köp en hos Ali', kort: antalInv('rulle') ? 'Ladda en rulle' : 'Slut – mal en rulle', ikon: 'rulle' });
    else if (sk.klar) L.push({ obj: sk.mesh, y: 1.0, typ: 'klar', rub: `${namn} är klar`, varfor: namnFor(sk.klar), fix: 'Klicka på skrivaren och ta den', kort: 'Klar – ta ut', ikon: 'bock' });
  }
  if (S.kvarn.motor && S.kvarn.tratt > 0 && S.strom < 1) L.push({ obj: kvarn, y: 1.6, typ: 'stopp', rub: 'Kvarnen står still', varfor: 'Motorn har ingen ström', fix: 'Trampa cykeln för att ladda batteriet', kort: 'Trampa cykeln', ikon: 'blixt' });
  else if (S.kvarn.tratt > 0 && extruderFull()) L.push({ obj: kvarn, y: 1.6, typ: 'stopp', rub: 'Kvarnen står still', varfor: 'Rullhållaren är full', fix: 'Ta rullarna vid extrudern', kort: 'Ta rullen', ikon: 'rulle' });
  else if (!S.kvarn.motor && S.kvarn.tratt >= TRATT_MAX) L.push({ obj: kvarn, y: 1.6, typ: 'stopp', rub: 'Tratten är full', varfor: 'Ingen plats för mer skräp', fix: 'Veva kvarnen – klicka och håll på veven', kort: 'Veva kvarnen', ikon: 'kvarn' });
  if (L.some((x) => /ström/.test(x.varfor) || /Batteriet/.test(x.varfor))) L.push({ obj: cykel, y: 1.5, typ: 'hit', rub: 'Trampa här!', varfor: `Batteri ${Math.floor(S.strom)}/${stromMax()}`, fix: 'Klicka och håll på cykeln', kort: 'Trampa här!', ikon: 'blixt' });
  return L;
}
// ---------- Mätning och spelarfeedback ----------
// Allt är anonymt: ett slumpat spelar-id, var i spelet man är och hur länge man spelat.
// Skickas till artifactens databas (när spelet körs som artifact) och till ett Google-formulär om FEEDBACK_FORM är satt.
// Google-formulär: två stycke-fält ("typ" och "data"). Fyll i formResponse-adressen och fältens entry-id här.
const FEEDBACK_FORM = null;   // t.ex. { url: 'https://docs.google.com/forms/d/e/XXX/formResponse', typ: 'entry.111', data: 'entry.222' }
const spelarId = (() => { try { let v = localStorage.getItem('printa-hem:spelare'); if (!v) { v = Math.random().toString(36).slice(2, 10); localStorage.setItem('printa-hem:spelare', v); } return v; } catch { return 'okand'; } })();
const sessionId = spelarId + '_' + Date.now().toString(36);
const sessionStart = Date.now();
let dbP = null;
const hamtaDb = () => dbP || (dbP = (async () => { try { return window.claude?.use ? await window.claude.use('db') : null; } catch { return null; } })());
async function skickaData(typ, data, id) {
  const rad = { ...data, spelare: spelarId, tid: new Date().toISOString(), version: 'v' + (document.querySelector('script[src*="spel.js"]')?.src.split('v=')[1] || 'artifact') };
  try { const db = await hamtaDb(); if (db) await db.collection(typ).doc(id || (spelarId + '_' + Date.now().toString(36))).set(rad); } catch {}
  try { if (FEEDBACK_FORM) { const f = new FormData(); f.append(FEEDBACK_FORM.typ, typ); f.append(FEEDBACK_FORM.data, JSON.stringify(rad)); fetch(FEEDBACK_FORM.url, { method: 'POST', mode: 'no-cors', body: f }).catch(() => {}); } } catch {}
}
// mätning: var spelaren är, uppdateras när ett steg klaras och när fliken stängs (högst var 20:e sekund)
let senastMatt = 0, senastSteg = -1;
function matning(tvinga = false) {
  if (!tvinga && (S.steg === senastSteg || Date.now() - senastMatt < 20000)) return;
  senastSteg = S.steg; senastMatt = Date.now();
  skickaData('matning', { steg: S.steg, stegText: S.steg < STEG.length ? String(stegText(STEG[S.steg])).slice(0, 60) : 'klar', dag: S.dag, minuter: Math.round((Date.now() - sessionStart) / 60000), totalMin: Math.round((S.speltid || 0) / 60), rang: RANGER[S.rang || 0]?.namn, prestationer: (S.prest || []).length, mynt: S.mynt, skarm: innerWidth + 'x' + innerHeight, mobil: matchMedia('(pointer:coarse)').matches }, sessionId);
}
setInterval(() => { if (ui.igang) matning(); }, 5000);
addEventListener('pagehide', () => matning(true));
document.addEventListener('visibilitychange', () => { if (document.hidden) matning(true); });
// snabbbetyg på morgonen: ett klick
const BETYG = [[hudAnsikte(0), 'Tråkigt'], [hudAnsikte(2), 'Okej'], [hudAnsikte(3), 'Kul'], [hudAnsikte(4), 'Superkul']];
const snabbBetygHtml = (natt) => `<div class="br-betyg" data-betyg-natt="${natt}"><span>Hur var dag ${natt}?</span>${BETYG.map(([e, t], i) => `<button data-betyg="${i}" title="${t}">${e}</button>`).join('')}</div>`;
function kopplaSnabbBetyg(natt) {
  ui.overlay.querySelectorAll('[data-betyg]').forEach((b) => b.onclick = (e) => {
    e.stopPropagation(); S.betygDag = [...(S.betygDag || []), natt]; sparaSnart();
    skickaData('feedback', { sort: 'snabb', dag: natt, betyg: +b.dataset.betyg, betygText: BETYG[+b.dataset.betyg][1], steg: S.steg });
    const r = ui.overlay.querySelector('.br-betyg'); if (r) r.innerHTML = '<span>Tack!</span>';
  });
}
// tyck till: tre korta frågor
function oppnaTyckTill(foralder) {
  const pop = document.createElement('div'); pop.className = 'br-bekrafta';
  pop.innerHTML = `<div class="br-bekrafta-ruta br-tyckruta"><b>Tyck till</b>
    <div class="br-betyg">${BETYG.map(([e, t], i) => `<button data-v="${i}" title="${t}">${e}</button>`).join('')}</div>
    <label>Vad var kul?<textarea data-f="kul" rows="2" maxlength="400"></textarea></label>
    <label>Vad var tråkigt eller krångligt?<textarea data-f="trakigt" rows="2" maxlength="400"></textarea></label>
    <label>Något annat?<textarea data-f="annat" rows="2" maxlength="400"></textarea></label>
    <div class="br-val" style="max-width:360px"><button class="br-valknapp" data-nej>Avbryt</button><button class="br-valknapp" data-skicka>${ik('brev')}<span>Skicka</span></button></div></div>`;
  (foralder || document.body).appendChild(pop);
  let betyg = null;
  pop.querySelectorAll('[data-v]').forEach((b) => b.onclick = () => { betyg = +b.dataset.v; pop.querySelectorAll('[data-v]').forEach((x) => x.classList.toggle('vald', x === b)); });
  pop.querySelector('[data-nej]').onclick = () => pop.remove();
  pop.querySelector('[data-skicka]').onclick = () => {
    const f = Object.fromEntries([...pop.querySelectorAll('[data-f]')].map((t) => [t.dataset.f, t.value.trim()]));
    if (betyg == null && !f.kul && !f.trakigt && !f.annat) { pop.remove(); return; }
    skickaData('feedback', { sort: 'formular', betyg, betygText: betyg == null ? null : BETYG[betyg][1], ...f, steg: S.steg, dag: S.dag, minuter: Math.round((Date.now() - sessionStart) / 60000) });
    pop.querySelector('.br-bekrafta-ruta').innerHTML = '<b>Tack!</b><p>Jesper läser allt.</p>';
    setTimeout(() => pop.remove(), 1600);
  };
  pop.onclick = (e) => { if (e.target === pop) pop.remove(); };
  pop.addEventListener('keydown', (e) => e.stopPropagation());
}
// ---------- Rangstege och prestationer (se claude/printa-hem-rangstege.md) ----------
var RANGER_KLAR = false;
// Rangen följer storyn med fasta krav. Prestationerna är hemliga ("???") tills du klarar dem och ger lite respekt.
const RANGER = [
  { namn: 'Utslängd', under: 'av mamma, med ryggsäck', krav: () => true },
  { namn: 'Skjulbo', under: 'med säng!', krav: () => S.lappar.includes('sang') },
  { namn: 'Nyckelringsmagnat', under: 'lokalt känd hos Ali', krav: () => S.stat.salt >= 10 },
  { namn: 'Kvarnkapitalist', under: 'produktionsmedlen är dina', krav: () => S.kvarn.motor && skrivare.length >= 2 },
  { namn: 'Lagfaren', under: 'Bengt-Åke sålde. Motvilligt.', krav: () => S.mark.agt.length >= 1 },
  { namn: 'Mantalsskriven', under: 'posten hittar hit nu', krav: () => !!S.folkbokford },
  { namn: 'Tippgodsägare', under: 'all mark, alla stubbar', krav: () => S.mark.agt.length >= MARK_TOMTER.length },
  { namn: 'Sopbaron', under: 'respekterad i tre postnummer', krav: () => S.respekt >= 180 },
  { namn: 'Brukspatron', under: 'på Soptippsvägen', krav: () => trivsel() >= 500 && (S.kvarn.kniv || 0) >= 2 },
  { namn: 'Hedersmedborgare', under: 'motvilligt', krav: () => S.respekt >= 250 && trivsel() >= 600 },
];
const PRESTATIONER = [
  { id: 'mitt', resp: 0, namn: 'MITT!', rad: 'Inte mycket för världen.', test: () => S.skyltUppe },
  { id: 'lever', resp: 0, namn: 'Den lever!', rad: 'Storebror gav upp efter två veckor.', test: () => S.stat.printat >= 1 },
  { id: 'forstaSalj', resp: 0, namn: 'Affärsman', rad: 'Ali betalade. Kontant. Med en suck.', test: () => S.stat.salt >= 1 },
  { id: 'nycklar', namn: 'Ingen behöver så många nycklar', rad: 'Sälj 50 saker hos Ali.', test: () => S.stat.salt >= 50 },
  { id: 'sang', resp: 0, namn: 'Det luktar frihet', rad: 'Första natten i skjulet.', test: () => S.lappar.includes('sang') },
  { id: 'present', namn: 'Kall öl är viktigt', rad: 'Första presenten till Rolf.', test: () => (S.rolf.presenter || 0) >= 1 },
  { id: 'rolfVan', namn: 'Rolfs enda vän', rad: 'Fem presenter till Rolf.', test: () => (S.rolf.presenter || 0) >= 5 },
  { id: 'trampa', namn: 'Trampat till Hudiksvall', rad: 'Rolfs Rockers spelade där 1987.', test: () => S.stat.trampat >= 3000 },
  { id: 'stada', namn: 'Städtokig', rad: 'Plocka 500 skräp.', test: () => S.stat.plockat >= 500 },
  { id: 'kajak', namn: 'Kajakmalaren', rad: 'Mal 10 tunga fynd.', test: () => (S.stat.tungMalt || 0) >= 10 },
  { id: 'jet', namn: 'Efterbrännare på en kvarn', rad: 'Ring inte brandkåren.', test: () => !!S.kvarn.jet },
  { id: 'rod', namn: 'Röd tråd', rad: 'Mal Rolfs PETG till röd filament.', test: () => !!S.fyndForklarat },
  { id: 'garage', namn: 'Pappa sover i garaget', rad: 'Mal 10 av mammas saker.', test: () => (S.burkMalda || 0) >= 10 },
  { id: 'kalrot', namn: 'Kålrot frivilligt', rad: 'Kompostera 10 av mammas matlådor.', test: () => (S.komposterat || 0) >= 10 },
  { id: 'arlig', namn: 'Ärlig som fan', rad: 'Säg nej till Rolfs fiffel tre gånger.', test: () => (S.rolf.heder || 0) >= 3 },
  { id: 'fiffel', namn: 'Fiffelkungen', rad: 'Chefen (också Rolf) vet.', test: () => (S.rolf.ja || 0) >= 3 },
  { id: 'holk', namn: 'Fåglarna flyttar in', rad: 'Sätt upp en fågelholk.', test: () => harPlacerat('fagelholk') },
  { id: 'rocker', namn: 'Rock på väggen', rad: 'Häng upp Rolfs Rockers-affischen.', test: () => harPlacerat('r_affisch') },
  { id: 'tomt', namn: 'HMPF', rad: 'Bengt-Åke säljer sin första tomt.', test: () => S.mark.agt.length >= 1 },
  { id: 'folkbok', namn: 'Posten hittar hit', rad: 'Folkbokförd på Soptippsvägen 1.', test: () => !!S.folkbokford },
  { id: 'frusen', namn: 'Frusen pinne', rad: 'Frys en natt.', test: () => !!S.frusit },
  { id: 'kap1', namn: 'Ett hem att bo i', rad: 'Klara kapitel 1.', test: () => !!S.kapitelKlart },
  { id: 'trivsel', namn: 'Mysigt värre', rad: 'Trivsel 300.', test: () => trivsel() >= 300 },
  { id: 'rik', namn: 'Tusenlappen', rad: 'Ha 1 000 kr på fickan.', test: () => S.mynt >= 1000 },
  { id: 'tjat', namn: 'Inget mer tjat', rad: 'Spela 30 dagar.', test: () => S.dag >= 30 },
];
const PREST_RESPEKT = 3;   // de första småsakerna dag 1 ger ingen respekt alls – respekt förtjänas
const rangNu = () => { let r = 0; RANGER.forEach((x, i) => { if (i === r + 1 && x.krav()) r = i; }); return Math.max(r, S.rang || 0); };
function visaFirande(kicker, titel, rad, stor = false) {
  const d = document.createElement('div'); d.className = 'ph-prest' + (stor ? ' stor' : '');
  d.innerHTML = `<small>${rens(kicker)}</small><b>${rens(titel)}</b><span>${rens(rad)}</span>`;
  document.body.appendChild(d); try { konfetti(stor ? 120 : 50); } catch {}
  ljud.klar?.(); setTimeout(() => d.classList.add('ut'), stor ? 5200 : 3800); setTimeout(() => d.remove(), stor ? 6000 : 4600);
}
const firaKo = []; let firarTill = 0;
function kollaPrestationer() {
  if (!ui.igang || sover) return;
  // äldre sparning: det du redan klarat räknas tyst (ingen flod av popups eller gratis respekt)
  if (!S.prest && S.steg > 1) { S.prest = PRESTATIONER.filter((p) => { try { return p.test(); } catch { return false; } }).map((p) => p.id); S.rang = rangNu(); sparaSnart(); }
  S.prest = S.prest || [];
  for (const p of PRESTATIONER) {
    if (S.prest.includes(p.id)) continue;
    let ok = false; try { ok = p.test(); } catch {}
    if (!ok) continue;
    const rp = p.resp ?? PREST_RESPEKT; S.prest.push(p.id); if (rp) andraRespekt(rp, 'Prestation: ' + p.namn);
    firaKo.push(() => visaFirande(rp ? `Prestation · +${rp} respekt` : 'Prestation', p.namn, p.rad));
  }
  const r = rangNu();
  if (r > (S.rang || 0)) { S.rang = r; const x = RANGER[r]; firaKo.push(() => visaFirande('Ny rang', x.namn, `(${x.under})`, true)); }
  if (firaKo.length && performance.now() > firarTill && ui.butiksOverlay.hidden && (forstaUpp() || S.dag > 1)) { firarTill = performance.now() + 5200; firaKo.shift()(); sparaSnart(); }
  ritaRang();
}
const rangEl = document.createElement('div'); rangEl.className = 'hud-rang'; rangEl.title = 'Din rang – nästa steg låser upp sig när du kommer längre';
function ritaRang() {
  if (!rangEl.parentNode) { const h = document.querySelector('.hud-status'); if (h) h.appendChild(rangEl); }
  const x = RANGER[S.rang || 0], t = `<b>${rens(x.namn)}</b><span>(${rens(x.under)})</span>`;
  if (rangEl.dataset.t !== t) { rangEl.dataset.t = t; rangEl.innerHTML = t; }
}
setInterval(kollaPrestationer, 1500); RANGER_KLAR = true;
// kapitel 2 får också sitt kort när det börjar
setInterval(() => {
  if (S.kap2Visad || !ui.igang || !ui.butiksOverlay.hidden || sover) return;
  if (STEG[S.steg]?.del !== K2) return;
  S.kap2Visad = true; visaKapitelKort(2, 'Ett riktigt hem', 'Gör stället till något du vill visa mamma.'); sparaSnart();
}, 2000);
// prestationslistan i menyn: klarade med namn, oklarade hemliga
function prestHtml() {
  if (!RANGER_KLAR) return '';   // startskärmen kan ritas innan listorna finns
  const klara = S.prest || [];
  return `<div class="br-prest"><div class="br-resa-topp"><b>Rang: ${rens(RANGER[S.rang || 0].namn)}</b><span>Prestationer ${klara.length}/${PRESTATIONER.length}</span></div><div class="br-prest-lista">${PRESTATIONER.map((p) => klara.includes(p.id) ? `<span class="ok" title="${rens(p.rad)}">${rens(p.namn)}</span>` : '<span>???</span>').join('')}</div></div>`;
}
// ---------- Flaskhalsen: vad stoppar oftast? ----------
// Varje sekund en maskin står still räknas på orsaken. Det som stoppar mest idag visas under uppdragen,
// med vad du kan bygga för att slippa det – så du vet vad som är värt att fixa härnäst.
const FLASK_FIX = {
  'Batteriet är tomt': () => harPlacerat('sol') ? 'Fler solpaneler' : 'Bygg en solpanel',
  'Motorn har ingen ström': () => harPlacerat('sol') ? 'Fler solpaneler' : 'Bygg en solpanel',
  'Slut på filament': () => (S.rullstall || 0) < 3 ? 'Bygg ett rullställ' : 'Mal mer i förväg',
  'Rullhållaren är full': () => (S.rullstall || 0) < 3 ? 'Bygg ett rullställ' : 'Hämta rullarna oftare',
  'Ingen plats för mer skräp': () => S.kvarn.motor ? 'Större tratt (Ali)' : 'Kvarnmotor (Ali)',
};
const FLASK_NAMN = { 'Batteriet är tomt': 'Ström till skrivaren', 'Motorn har ingen ström': 'Ström till kvarnen', 'Slut på filament': 'Filament till skrivaren', 'Rullhållaren är full': 'Fulla rullar vid kvarnen', 'Ingen plats för mer skräp': 'Full tratt' };
let flaskT = 0, flaskForra = new Set();
const flaskEl = document.createElement('div'); flaskEl.className = 'hud-flask'; flaskEl.style.display = 'none'; document.body.appendChild(flaskEl);
function matFlaskhals(dt) {
  flaskT += dt; if (flaskT < 0.25) return; const steg = flaskT; flaskT = 0;
  if (!S.flask || S.flask.dag !== S.dag) S.flask = { dag: S.dag, tid: {}, ggr: {} };
  const L = ui.igang ? maskinStopp().filter((x) => x.typ === 'stopp') : [];
  const nu = new Set();
  for (const x of L) {
    const k = x.varfor; nu.add(x.rub + '|' + k);
    S.flask.tid[k] = (S.flask.tid[k] || 0) + steg;
    if (!flaskForra.has(x.rub + '|' + k)) S.flask.ggr[k] = (S.flask.ggr[k] || 0) + 1;
  }
  flaskForra = nu;
  // panel: det som står still just nu + dagens största flaskhals
  const topp = Object.entries(S.flask.tid).sort((a, b) => b[1] - a[1])[0];
  const visaTopp = topp && topp[1] >= 20 && (S.dag || 1) >= 2 || topp && topp[1] >= 45;
  let h = '';
  if (L.length) h += `<div class="nu"><b>⛔ Står still</b>${L.slice(0, 2).map((x) => `<div>${rens(x.rub.replace(' står still', ''))}: ${rens(x.varfor.toLowerCase())}</div>`).join('')}</div>`;
  if (visaTopp) {
    const min = topp[1] / 60, tidT = min >= 1 ? `${Math.round(min)} min` : `${Math.round(topp[1])} s`;
    h += `<div class="topp"><b>🍾 Flaskhals idag</b><div>${rens(FLASK_NAMN[topp[0]] || topp[0])} · stod still ${tidT} (${S.flask.ggr[topp[0]] || 1} ggr)</div><em>Fixa: ${rens(FLASK_FIX[topp[0]]?.() || '')}</em></div>`;
  }
  if (flaskEl.dataset.h !== h) { flaskEl.dataset.h = h; flaskEl.innerHTML = h; }
  flaskEl.style.display = h ? '' : 'none';
  const mEl = innerWidth < 1100 ? malText.parentElement : hudEl, r = mEl.getBoundingClientRect(), topPx = Math.round((r.height ? r.bottom : 200) + 8) + 'px';
  if (flaskEl.style.top !== topPx) flaskEl.style.top = topPx;
}
// ---------- Progress över varje skrivare: bara vad den printar och hur långt den kommit ----------
const skrivBarLager = document.createElement('div'); skrivBarLager.className = 'hud-stopplager'; document.body.appendChild(skrivBarLager);
const skrivBarV = new THREE.Vector3(), skrivBarK = new THREE.Vector3();
function ritaSkrivBarer() {
  const stopp = new Set(ui.igang ? maskinStopp().filter((x) => x.typ !== 'hit').map((x) => x.obj) : []);
  skrivare.forEach((sk, i) => {
    let d = skrivBarLager.children[i];
    if (!d) { d = document.createElement('div'); d.className = 'hud-skrivbar'; d.innerHTML = '<div class="rad"><b></b><span></span></div><div class="bar"><i></i></div>'; skrivBarLager.appendChild(d); }
    const j = sk.jobb;
    if (!ui.igang || !j || stopp.has(sk.mesh) || !sk.mesh.parent) { d.style.display = 'none'; return; }
    sk.mesh.getWorldPosition(skrivBarV); skrivBarV.y += 0.6 * (sk.mesh.userData.sk || 1) + 0.2;
    const avst = skrivBarV.distanceTo(kamera.getWorldPosition(skrivBarK));
    skrivBarV.project(kamera);
    if (skrivBarV.z > 1 || avst > 14 || Math.abs(skrivBarV.x) > 1.1) { d.style.display = 'none'; return; }
    d.style.display = '';
    const namn = j.maskin ? `${MASKINER[j.maskin].namn}${MASKINER[j.maskin].delar > 1 ? ` ${j.del}/${MASKINER[j.maskin].delar}` : ''}` : VAROR[j.typ].namn;
    const pct = Math.floor(sk.prog * 100) + ' %';
    const b = d.querySelector('b'), sp = d.querySelector('span');
    if (b.textContent !== namn) b.textContent = rens(namn);
    if (sp.textContent !== pct) sp.textContent = pct;
    d.querySelector('i').style.width = (sk.prog * 100).toFixed(1) + '%';
    const sc = Math.max(0.65, Math.min(1, 6 / avst));
    d.style.transform = `translate(${(skrivBarV.x * 0.5 + 0.5) * innerWidth}px,${(-skrivBarV.y * 0.5 + 0.5) * innerHeight}px) translate(-50%,-100%) scale(${sc.toFixed(2)})`;
  });
  while (skrivBarLager.children.length > skrivare.length) skrivBarLager.lastChild.remove();
}
function ritaStopp() {
  // skyltarna trappas ner när du lärt dig: dag 1 allt, dag 2 kortare, dag 3–4 bara röda stopp, sedan inga
  const dagN = S.dag || 1;
  let L = ui.igang ? maskinStopp() : [];   // röda stopp syns alltid tills problemet är löst
  if (dagN >= 3) L = L.filter((x) => x.typ === 'stopp').map((x) => ({ ...x, rub: '', fix: '' }));
  else if (dagN === 2) L = L.map((x) => ({ ...x, rub: '' }));
  while (stoppPool.length < L.length) { const d = document.createElement('div'); d.className = 'hud-stopp'; d.innerHTML = '<b></b><span></span><em></em>'; stoppEl.appendChild(d); stoppPool.push(d); }
  stoppPool.forEach((d, i) => {
    const x = L[i]; if (!x) { d.style.display = 'none'; return; }
    x.obj.getWorldPosition(stoppV); stoppV.y += x.y;
    const avst = stoppV.distanceTo(kamera.getWorldPosition(stoppK)); stoppV.project(kamera);
    if (stoppV.z > 1 || avst > 32 || Math.abs(stoppV.x) > 1.1 || Math.abs(stoppV.y) > 1.1) { d.style.display = 'none'; return; }
    d.style.display = ''; d.className = 'hud-stopp ' + x.typ;
    const t = [x.kort || x.rub, '', ''];   // en rad: bara vad du ska göra
    { const ie = d.querySelector('i.stopp-ik') || d.insertBefore(Object.assign(document.createElement('i'), { className: 'stopp-ik' }), d.firstChild); if (ie.dataset.ik !== x.ikon) { ie.dataset.ik = x.ikon || ''; ie.innerHTML = x.ikon ? ik(x.ikon) : ''; } } ['b', 'span', 'em'].forEach((q, j) => { const e = d.querySelector(':scope > ' + q); if (e.textContent !== t[j]) e.textContent = t[j]; e.style.display = t[j] ? '' : 'none'; });
    const sk = Math.max(0.6, Math.min(1, 7 / avst));
    d.style.transform = `translate(${(stoppV.x * 0.5 + 0.5) * innerWidth}px,${(-stoppV.y * 0.5 + 0.5) * innerHeight}px) translate(-50%,-100%) scale(${sk.toFixed(2)})`;
  });
}
function taBort(k) { if (k.classList.contains('ut')) return; k.classList.add('ut'); setTimeout(() => k.remove(), 400); }
// meddelanden som hör till något du just gjorde visas där du gjorde det – vid saken du klickade på, inte i hörnet
let aktionObj = null, aktionTid = 0, klickTid = -1e9;
addEventListener('mousedown', () => { klickTid = performance.now(); }, true);
addEventListener('mouseup', () => { klickTid = performance.now(); }, true);
addEventListener('keydown', () => { klickTid = performance.now(); }, true);
// inga "random" pling: korta ljudeffekter spelas bara som svar på något du själv gör (klick, tangent, hålla in).
// Saker som händer av sig själva visas i stället med skylt eller pil vid saken.
for (const namn of ['klar', 'plock', 'fel', 'stor', 'mynt', 'kop', 'placera', 'borsta']) {
  const orig = ljud[namn]?.bind(ljud); if (!orig) continue;
  ljud[namn] = (...a) => { if (performance.now() - klickTid < 1500 || anvandNere) return orig(...a); };
}
function korsToast(text, typ = '') {
  document.querySelector('.hud-kors-lapp')?.remove();
  const d = document.createElement('div'); d.className = 'hud-plats hud-kors-lapp ' + typ; d.textContent = rens(text);
  document.body.appendChild(d); setTimeout(() => { d.style.opacity = '0'; }, 2000); setTimeout(() => d.remove(), 2500);
}
{ const _a = interaktor.aktivera.bind(interaktor); interaktor.aktivera = (...x) => { aktionObj = interaktor.hovrad; aktionTid = performance.now(); try { return _a(...x); } finally { setTimeout(() => { if (performance.now() - aktionTid > 40) aktionObj = null; }, 60); } }; }
const platsLappar = [], platsV = new THREE.Vector3(), platsK = new THREE.Vector3();
function platsToast(text, obj, typ = '') {
  platsLappar.forEach((l) => { if (l.obj === obj) l.slut = 0; });
  const d = document.createElement('div'); d.className = 'hud-plats ' + typ; d.textContent = rens(text);
  document.body.appendChild(d);
  const l = { d, obj, start: performance.now(), slut: performance.now() + 2600 }; platsLappar.push(l);
}
function ritaPlatsLappar() {
  const nu = performance.now();
  for (let i = platsLappar.length - 1; i >= 0; i--) {
    const l = platsLappar[i];
    if (nu > l.slut || !l.obj?.parent) { l.d.remove(); platsLappar.splice(i, 1); continue; }
    l.obj.getWorldPosition(platsV); platsV.y += 0.6 + (nu - l.start) / 4000;
    const avst = platsV.distanceTo(kamera.getWorldPosition(platsK)); platsV.project(kamera);
    if (platsV.z > 1) { l.d.style.display = 'none'; continue; }
    l.d.style.display = ''; l.d.style.opacity = Math.min(1, (l.slut - nu) / 500);
    l.d.style.transform = `translate(${(platsV.x * 0.5 + 0.5) * innerWidth}px,${(-platsV.y * 0.5 + 0.5) * innerHeight}px) translate(-50%,-100%) scale(${Math.max(0.7, Math.min(1, 5 / avst)).toFixed(2)})`;
  }
}
ui.toast = (text, typ) => {
  // under en handling (klick på en sak) och saken finns kvar: visa vid saken
  if (aktionObj && performance.now() - aktionTid < 400 && aktionObj.parent) { platsToast(text, aktionObj, typ); return; }
  // fel och svar på det du nyss gjorde (klick, grip): mitt framför siktet
  if (typ === 'fel' || performance.now() - klickTid < 400) { korsToast(text, typ); return; }
  if (typ === 'guld') notis(text.length > 70 ? text.slice(0, 68).replace(/\s+\S*$/, '') + '…' : text, typ, { tid: 4500 });   // övrigt brus i hörnet stryks – skyltar och pilar vid sakerna visar resten
};
// ---------- Inkorgen uppe till höger: sms och dagbok syns direkt, läses upp en i taget ----------
// block = du kan gå och titta men inte använda något förrän den är uppläst (dag 1 och skylten)
let dagbokLas = false, dagbokHoppa = false;   // klick under uppläsningen hoppar över den
const INKORG_MAX = 3; let inkorgVantar = 0;
function inkorg({ vem, titel, text, lapp = false, block = false, klar, fore, smsId }) {
  const lista = document.querySelector('.hud-inkorg');
  // sms ser ut som en iPhone-notis högst upp i mitten; dagbok och tankar som bubblor till höger
  const ios = !lapp && titel !== 'Tanke';
  const el = document.createElement('div'); el.className = ios ? 'hud-ios' : 'hud-bubbla' + (lapp ? ' lapp' : '') + ' vantar';
  el.innerHTML = ios
    ? `<div class="app">${IKON.telefon}</div><div class="inne"><div class="topp"><span>MEDDELANDEN</span><span class="nu">nu</span></div><div class="fran">${portratt(vemAvSms(vem), 20)}<b>${rens(titel)}</b></div><div class="txt">${rens(text)}</div><div class="hud-bubbla-bar"><i></i></div></div>`
    : `<div class="rub">${portratt(lapp ? "du" : vemAvSms(vem), 28)}<b>${rens(titel)}</b><em>i kö</em></div><div class="txt">${rens(text)}</div><div class="hud-bubbla-bar"><i></i></div>`;
  inkorgVantar++;
  const lasUpp = () => {
    inkorgVantar--; fore?.();
    // sms: iPhone-notis högst upp som läses upp direkt – en i taget, i den ordning de kom
    if (ios) triTon(); else ljud.plock();
    lista.prepend(el);   // sms och dagbok i samma hörn uppe till höger
    requestAnimationFrame(() => el.classList.add('in'));
    [...lista.children].slice(INKORG_MAX).forEach((x) => { x.classList.add('ut'); setTimeout(() => x.remove(), 500); });
    el.classList.remove('vantar'); el.classList.add('laser'); const em = el.querySelector('em'); if (em) em.textContent = block ? 'klicka = hoppa' : 'läser…';
    if (block) { dagbokLas = true; dagbokHoppa = false; anvandNere = false; }
    const start = performance.now(); prata(lapp ? 'du' : vem, text);
    const bar = el.querySelector('.hud-bubbla-bar i');
    const tick = () => {
      const nu = performance.now(), slut = Math.max(start + 2500, pratarTill || 0);
      bar.style.width = Math.min(100, (nu - start) / Math.max(1, slut - start) * 100) + '%';
      if (nu < slut && !(block && dagbokHoppa)) { requestAnimationFrame(tick); return; }
      if (block) { if (dagbokHoppa) { tystna(); pratarTill = 0; } dagbokLas = false; dagbokHoppa = false; }
      el.classList.remove('laser'); const em2 = el.querySelector('em'); if (em2) em2.textContent = ''; klar?.();
      setTimeout(() => { el.classList.add('ut'); setTimeout(() => el.remove(), 500); }, ios ? 6000 : 14000);
    };
    requestAnimationFrame(tick);
  };
  if (block) budKo.unshift(lasUpp); else bud(lasUpp);
}
function visaLapp(id) {
  if (!S.lappar.includes(id)) S.lappar.push(id);
  const [titel, text] = lappInfo(id);
  if (/Storebror/.test(titel)) { sms('bror', text); sparaSnart(); return; }
  if (/^🧺 Ali/.test(titel)) { if (id === 'salt') S.aliStoryVisad = true; sms('ali', text); sparaSnart(); return; }
  // de stora dagboksögonblicken (dag 1, skylten) visas på pausad skärm och läses upp med din röst – innan någon instruktion
  if (titel.includes('Dagbok')) inkorg({ vem: 'du', titel: 'Dagbok', text, lapp: true, block: id === 'start' || id === 'skylt' });
  else medKo.push({ typ: 'lapp', titel, text });
  sparaSnart();
}

// ---------- Familjen sms:ar: mamma är arg och orolig, pappa skriver bara för att mamma tjatar, storebror bryr sig (men säger det inte) ----------
const FAMILJ = {
  1: [['mamma', 'HUR KUNDE DU BARA GÅ?!?! Är du ok?? SVARA NÄR JAG RINGER!!'], ['mamma', 'Var är du??'], ['mamma', 'Pappa hälsar. Han sa inte det, men jag såg på honom att han ville.']],
  2: [['bror', 'Hörde att du tog min gamla skrivare. Bra. Den har varit med om mycket. Säg till om den krånglar.'], ['bror', 'Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂']],
};
// ---------- Levande sms: varje meddelande kommer bara en gång, en del beror på hur långt du kommit,
// och på en del kan du svara – svaret styr vad som händer sen ----------
const SMS_POOL = [
  // mamma: panik i alla former
  { id: 'm_mack', vem: 'mamma', nar: () => S.dag >= 3, text: 'Jag har städat ditt rum. Det tog TRE DAGAR. Jag hittade en macka från i somras. EN MACKA.' },
  { id: 'm_strumpor', vem: 'mamma', nar: () => S.dag >= 3, text: 'Har du VARMA STRUMPOR?? Det ska bli kallt!!', svar: [['Ja mamma.', 'Bra. Vilka då? De bruna? De bruna har hål. Jag VET att de har hål.'], ['Nej.', 'Jag skickar ett paket. Med strumpor. Och en mössa. Och sju mackor.']] },
  { id: 'm_masar', vem: 'mamma', nar: () => S.dag >= 4, text: 'Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det MÅSAR där??', svar: [['Bara en katt.', 'En KATT?! Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka.'], ['Massor av måsar.', 'JAG KOMMER OCH HÄMTAR DIG. … Pappa vill inte köra. Pappa säger att måsar är ok.']] },
  { id: 'm_ali', vem: 'mamma', nar: () => S.stat.salt >= 3, text: 'Vem är den där Ali? Är han snäll? Betalar han dig ORDENTLIGT?', svar: [['Han är snäll. Typ.', 'Typ?? Jag ringer honom. Vad heter butiken? Jag hittar den.'], ['Han är sur.', 'Sur men ärlig? Det är bra. Pappa är sur men ärlig. Fast mest tyst.']] },
  { id: 'm_rolf', vem: 'mamma', nar: () => S.rolf.i >= 1, text: 'Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem ÄR det?? Varför har han mitt nummer??' },
  { id: 'm_tva', vem: 'mamma', nar: () => skrivare.length >= 2, text: 'Din bror säger att du har TVÅ skrivare nu. Är du med i en sekt? Du kan berätta för mig om du är med i en sekt.' },
  { id: 'm_pengar', vem: 'mamma', nar: () => S.mynt >= 3000, text: 'Din bror säger att du har PENGAR. Du har aldrig haft pengar. Har du sålt en njure??', svar: [['Jag säljer saker jag printar.', 'Printar. Vad är printar. Är det lagligt? Säg att det är lagligt.'], ['Ja, en njure.', 'DET ÄR INTE ROLIGT. … Pappa skrattade. Första gången sen 1998.']] },
  { id: 'm_sover', vem: 'mamma', nar: () => S.dag >= 5, text: 'Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag VET.' },
  { id: 'm_jul', vem: 'mamma', nar: () => S.dag >= 7, text: 'Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den ligger i frysen och tittar på mig.', svar: [['Klart jag kommer.', 'Jag gråter. Pappa har gått ut i garaget. Det betyder att han också gråter.'], ['Kanske.', 'KANSKE. Jag har skrivit upp det. Det står "kanske" i kalendern nu. Med röd penna.']] },
  { id: 'm_mormor', vem: 'mamma', nar: () => S.dag >= 6, text: 'Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad.' },
  { id: 'm_bod', vem: 'mamma', nar: () => !!S.bod, text: 'Bygger du ett HUS TILL?! Du har inte ens dammsugit ditt rum här hemma på fyra år.' },
  { id: 'm_facebook', vem: 'mamma', nar: () => S.dag >= 9, text: 'Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?"' },
  { id: 'm_tandborste', vem: 'mamma', nar: () => S.dag >= 2, text: 'Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms.', svar: [['Ja.', 'Bra. Jag tror dig. Nästan.'], ['…nej.', 'Jag VISSTE det. Ali säljer väl tandborstar? Köp en. Köp tre.']] },
  { id: 'm_pappa_tv', vem: 'mamma', nar: () => S.dag >= 8, text: 'Jag sa till pappa att du bor på en SOPTIPP. Han sa "aha, vad lugnt då" och satte på Formel 1. LUGNT?!' },
  // brorsan: bryr sig men säger det inte, och har koll på pappa
  { id: 'b_pappa_bil', vem: 'bror', nar: () => S.dag >= 3, text: 'Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var.' },
  { id: 'b_gym', vem: 'bror', nar: () => S.dag >= 4, text: 'Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget.', svar: [['Okej, jag säger inget.', 'Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ.'], ['Jag säger det.', 'Då säger jag att din bästa kompis är en sopgubbe. Vi är kvitt.']] },
  { id: 'b_pappa_yt', vem: 'bror', nar: () => S.dag >= 5, text: 'Pappa har en spellista på Youtube som heter "Sopbilar". 34 videor. Han säger att en Scania V8 är "ren musik".' },
  { id: 'b_munstycke', vem: 'bror', nar: () => skrivare.length >= 2, text: 'Tips: håll munstycket rent. Och prata med skrivaren ibland. Inte för att den hör. Men ändå.' },
  { id: 'b_airbnb', vem: 'bror', nar: () => trivsel() >= 150, text: 'Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot.' },
  { id: 'b_bod', vem: 'bror', nar: () => !!S.bod, text: 'En GAMINGBOD?! Jag bor i en etta med mögel. Kan jag flytta in? Skämtar. Typ.', svar: [['Klart du får.', 'Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack.'], ['Nej.', 'Hårt. Rättvist. Men hårt.']] },
  { id: 'b_facebook', vem: 'bror', nar: () => S.dag >= 7, text: 'Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till konstiga ställen". Hon är admin nu.' },
  { id: 'b_laddare', vem: 'bror', nar: () => S.dag >= 4, text: 'Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar det eller nåt.' },
  { id: 'b_pappa_mjolk', vem: 'bror', nar: () => S.dag >= 6, text: 'Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd.' },
  { id: 'b_polare', vem: 'bror', nar: () => S.dag >= 8, text: 'Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt.' },
  // Rolf: vanor och gammalt bagage
  { id: 'r_bulle', vem: 'rolf', nar: () => S.rolf.i >= 1, text: 'Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R' },
  { id: 'r_kajsa', vem: 'rolf', nar: () => S.rolf.i >= 1, text: 'Kajsa la en död mus på min kudde. De e kärlek. Hon får lax ikväll. /R' },
  { id: 'r_kopp', vem: 'rolf', nar: () => S.rolf.i >= 2, text: 'Hittade Birgittas gamla kaffekopp under sängen i husvagnen. Ja dricker inte ur den. Ja bara tittar på den. /R' },
  { id: 'r_mazarin', vem: 'rolf', nar: () => S.rolf.i >= 2, text: 'Konditoriet på Storgatan har slutat me mazariner. Ja har skrivit ett klagomål. På papper. Me frimärke. /R' },
  { id: 'r_hudik', vem: 'rolf', nar: () => S.rolf.i >= 3, text: 'Rolfs Rockers spelade en gång i Folkets park i Hudiksvall. 14 pers. 3 dansade. Bästa kvällen i mitt liv. /R' },
  { id: 'r_maskin', vem: 'rolf', nar: () => S.rolf.i >= 3, text: 'Chefen har köpt en kaffemaskin som pratar. Den sa "god morgon Rolf". Ja litar inte på den. /R' },
  { id: 'r_backa', vem: 'rolf', nar: () => S.rolf.i >= 4, text: '31 år på bilen och ja har aldrig backat in i nåt. Utom en gång. En brevlåda. Den hade det kommit. /R' },
  { id: 'm_burk1', vem: 'mamma', nar: () => (S.burkar || 0) >= 2, text: 'Fick du burkarna?? Honungen är från Gunnars bigårdar och lingonen plockade jag SJÄLV. Ät upp allt!', svar: [['Tack mamma ❤️', 'Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren.'], ['Jag har ingenstans att ställa dem.', 'Ställ dem i kylen. Har du ingen KYL?? Jag skickar fler så du har något att äta.']] },
  { id: 'm_burk2', vem: 'mamma', nar: () => (S.burkar || 0) >= 8, text: 'Har du ätit upp honungen? Pappa säger att han såg den på golvet. Den ska stå SVALT.' },
  { id: 'm_kompott', vem: 'mamma', nar: () => (S.burkar || 0) >= 4, text: 'Fick du kompotten? Det är rotfruktsgratäng. Potatisen var slut så jag tog kålrot, palsternacka och lite selleri. Värm i ugnen! Har du ugn??', svar: [['Jag har ingen ugn.', 'INGEN UGN. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då.'], ['Den var god!', 'Jag VISSTE det! Pappa sa att ingen äter kålrot frivilligt. Jag skickar två till.']] },
  { id: 'r_lukt', vem: 'rolf', nar: () => placerade.some((p) => p.typ.startsWith('burk_mogel')), text: 'Ja kände lukten från sopbilen. FRÅN SOPBILEN. Vad har du där borta? /R' },
  { id: 'b_burk', vem: 'bror', nar: () => (S.burkar || 0) >= 6, text: 'Mamma har gjort lingonsylt i tre dagar. Hela köket är rött. Hon säger att det är till dig. Lycka till.' },
  { id: 'r_burk', vem: 'rolf', nar: () => (S.burkar || 0) >= 10, text: 'Såg alla burkar vid ditt skjul. Försökte ge Kajsa honung. Hon vill inte heller ha den. /R' },
  { id: 'b_pappa_dryg1', vem: 'bror', nar: () => (S.burkMalda || 0) >= 2, text: 'Mamma pratar bara om sylten. Pappa har slutat säga "aha, vad lugnt då". Han säger bara "mm". Det är värre.' },
  { id: 'b_pappa_dryg2', vem: 'bror', nar: () => (S.burkMalda || 0) >= 5, text: 'Pappa sover i garaget. Han säger att det är för att lyssna på motorn. Bilen är avstängd.', svar: [['Säg att jag är ledsen.', 'Jag sa det. Han sa "aha". Sen gick han ut i garaget igen.'], ['Det är inte mitt fel.', 'Okej. Säg det till mamma då. Lycka till.']] },
  { id: 'm_pappa_dryg', vem: 'mamma', nar: () => (S.burkMalda || 0) >= 3, text: 'Pappa är så trött. Han säger att han inte orkar köra fler burkar. Men du har ju ätit upp allt! Han får skärpa sig.' },
  { id: 'r_morgon', vem: 'rolf', nar: () => S.dag >= 4 && S.rolfNummer, text: 'Kommer direkt från morgonkontoret. Lasse har köpt en ny termos. De va dagens nyhet. Gunnar sa ingenting. Som vanligt. /R' },
  { id: 'r_morgon2', vem: 'rolf', nar: () => S.dag >= 8 && S.rolfNummer, text: 'Gunnar sa ett helt ord på morgonkontoret idag. "Regn." Lasse tappa kaffet. Historisk dag. /R' },
  { id: 'r_prinsess', vem: 'rolf', nar: () => S.dag >= 6 && S.rolfNummer, text: 'Tryckte i mej en HEL prinsesstårta i ett svagt ögonblick. Ont i magen nu. Birgitta o ja brukade dela en bit på fredagar. Ja glömde att man ska dela. /R', svar: [['Hur mår du?', 'Magen e dålig. Resten e ok. Tack för att du fråga. De gör int så många. /R'], ['En hel?!', 'En hel. Me marsipanrosen. Ja ångrar ingenting. Jo. Lite. /R']] },
  { id: 'r_bengt1', vem: 'rolf', nar: () => S.dag >= 3 && S.rolfNummer, text: 'Akta dej för Bengt-Åke. Han äger all mark runt hä. Han sköt mot en älg som stod på hans gräsmatta. Missa. Älgen e fortfarande rädd. Gå int över staketet. /R' },
  { id: 'r_bengt2', vem: 'rolf', nar: () => S.dag >= 5 && S.rolfNummer && (S.bengtSkrik || 0) >= 1, text: 'Bengt-Åke ringde mej. Han sa att nån "smyger vid staketet". Ja sa att de va en grävling. Han sa att han skjuter grävlingar oxå. Håll dej borta från kanten ett tag. /R' },
  { id: 'r_bengt3', vem: 'rolf', nar: () => S.dag >= 6 && S.rolfNummer && S.respekt >= 15, text: 'Bengt-Åke frågade om dej. Ja sa att du e en bra unge som städar. Han sa "HMPF". De e bra. Förra gången sa han nåt mycke värre. Ja jobbar på honom. /R' },
  { id: 'b_bengt', vem: 'bror', nar: () => (S.bengtSkrik || 0) >= 2, text: 'Mamma såg på Facebook att en gubbe vid soptippen jagat bort en hemtjänstbil med en kratta. Säg att det inte är din granne.', svar: [['Det är min granne.', 'Okej. Mamma har bokat ett pepparsprej på nätet. Till dig.'], ['Ingen aning.', 'Bra. Jag säger till mamma att det var en annan soptipp.']] },
  { id: 'r_pappa', vem: 'rolf', nar: () => !!S.pappaBesok, text: 'Din farsa e en bra karl. Vi snacka Scania o hockey. Han säger "blada" istället för gå. Ja ska börja me det. /R' },
  // mamma och brorsan efter pappas besök
  { id: 'm_pappa_besok', vem: 'mamma', nar: () => !!S.pappaBesok, text: 'Var pappa DÄR?! Han sa att han skulle köpa mjölk! Han kom hem och sa "aha, vad lugnt dom har det". LUGNT?!' },
  { id: 'b_pappa_besok', vem: 'bror', nar: () => !!S.pappaBesok, text: 'Pappa kom hem och sa att Rolf var "en riktig räv bakom örat". Sen satte han på hockeyn. Det var allt.' },
];
// när man svarar: svaret visas som en egen bubbla och följdsvaret kommer en stund senare
function svaraSms(id, i) {
  const m = SMS_POOL.find((x) => x.id === id); if (!m) return;
  S.smsSvar = { ...(S.smsSvar || {}), [id]: i };
  const [, foljd] = m.svar[i];
  S.smsKo.unshift({ vem: m.vem, text: foljd, nar: S.speltid + 40 + Math.random() * 60 });
  sparaSnart();
}
const BROR_IBLAND = ['Allt lugnt? Bara undrar. Inte för att jag bryr mig.', 'Mamma gråter inte längre när hon går förbi ditt rum. Framsteg.', 'Om du behöver nåt så… ja. Du vet.', 'Kolla mig, jag skriver till dig. Känn dig speciell.'];
const MAMMA_IBLAND = ['Äter du ordentligt?? Inte bara nudlar!!', 'Jag ringde tre gånger. TRE. Svara!', 'Pappa saknar dig. Han säger det inte men jag vet.', 'Har du borstat tänderna idag? Ljug inte.'];
// Rolf, 58: kört sopbilen i 31 år, bor i en husvagn bakom tippen med katten Kajsa. Trummis i dansbandet
// ”Rolfs Rockers” 1987. Ensam sedan Birgitta flyttade. Samlar ”skatter” ur lassen. Älskar att grilla – men har ingen att grilla med.
const ROLF_IBLAND = [
  'Rolf här. Kajsa (katten) fångade en råtta i husvagnen. Hon e bättre på sitt jobb än ja. /R',
  'Hittade ett trumset i lasset idag. Spela lite på rasten. Rolfs Rockers 1987. Vi va STORA i Hudiksvall. /R',
  '31 år i sopbilen idag. Ingen tårta. Köpte en själv. Den va god. /R',
  'Birgitta ringde. Fel nummer sa hon. Kan va så. /R',
  'Ja har en låda med skatter i husvagnen. Mest skruvar. En tand. Inte min. /R',
  'ÖJ. Rolf här. Hittade en hel soffa i lasset idag. Ingen plast i den tyvärr. Satt i den på rasten. /R',
  'Tippar extra plast i eftermiddag. Säg inte till chefen. Han heter också Rolf. Förvirrande. /R',
  'Ölhållarn funkar fortfarande. Den e min bästa vän. Ni e delad etta. /R',
  'Såg din skorsten ryka. Eller va de grillen? Hoppas de va grillen. /R',
  'Fick en kajak i lasset. Ingen paddel. Typiskt. Ja la den vid grinden åt dig. /R',
];
function familjSms() {
  const d = S.dag || 1;
  if ((S.familjDag || 0) >= d) return;
  S.familjDag = d;

  if (S.rolf.boter) { const b = Math.min(S.mynt, S.rolf.boter), t = CHEFEN[((S.rolf.ja / 2) - 1) % CHEFEN.length]; S.rolf.boter = 0; setTimeout(() => { S.mynt -= b; sms('chefen', `${t} ${b} kr. /Rolf (chefen)`); ui.toast(`Böter: −${b} kr`, 'fel'); sparaSnart(); }, 7000); }
  if (S.rolf.i >= ROLF.length && S.rolf.jobb == null && !S.post.lapp && !S.post.tillRolf && !S.post.tillMig.length && S.rolf.jobbDag !== d && (d - (S.rolf.jobbDag || 0)) >= 2) {
    S.rolf.jobbDag = d; S.post.lapp = 'jobb'; visaPostInne();
    setTimeout(() => sms('rolf', (S.rolf.jobbNr || 0) === 0 ? 'Rolf här. Ja har en grej. Lite känslig. Ja la en lapp i postlådan. Läs den o bränn den sen. /R' : 'Ny lapp i lådan. Du vet vad de betyder. /R'), 3500);
  }
  // dagens meddelanden: de fasta för dag 1–2, sedan 2–3 nya ur poolen som passar läget (aldrig samma två gånger)
  const sett = new Set(S.smsSett || []);
  let lista = FAMILJ[d] ? [...FAMILJ[d]] : [];
  if (!FAMILJ[d]) {
    const kandidat = SMS_POOL.filter((m) => !sett.has(m.id) && m.vem !== 'rolf' && (() => { try { return m.nar(); } catch { return false; } })());
    kandidat.sort(() => Math.random() - 0.5);
    for (const m of kandidat.slice(0, 2 + (Math.random() < 0.4 ? 1 : 0))) { lista.push([m.vem, m.text, m.id]); sett.add(m.id); }
    if (S.rolf.i >= 1 && d % 2 === 1) { const r2 = SMS_POOL.find((m) => m.vem === 'rolf' && !sett.has(m.id) && (() => { try { return m.nar(); } catch { return false; } })()); if (r2) { lista.push(['rolf', r2.text, r2.id]); sett.add(r2.id); } }
    S.smsSett = [...sett];
  }
  // första dagen: vänta tills man har kommit igång; sedan glest och oregelbundet (2–5 min mellan)
  let t = S.speltid + (d === 1 ? 240 : 60) + Math.random() * 120;
  for (const [vem, text, id] of lista) { S.smsKo.push({ vem, text, id, nar: t }); t += 50 + Math.random() * 70; }
  sparaSnart();
}

// ---------- Röster: brev, sms och repliker läses upp på svenska ----------
// Varje figur har sin egen röst (tonhöjd och tempo). Bästa svenska rösten på datorn väljs automatiskt.
const ROSTER = {
  rolf: { pitch: 0.55, rate: 0.82, kon: 'm' },     // mörk och släpig
  ali: { pitch: 0.8, rate: 0.9, kon: 'm' },        // trött
  mamma: { pitch: 1.3, rate: 1.08, kon: 'k' },     // ljus och snabb
  bror: { pitch: 1.05, rate: 1.15, kon: 'm' },
  pappa: { pitch: 0.7, rate: 0.95, kon: 'm' },     // platt och kort
  du: { pitch: 1.15, rate: 1.0, kon: 'm' },
  berattare: { pitch: 1.0, rate: 0.95, kon: 'k' },
};
let roster = [];
const laddaRoster = () => { try { roster = speechSynthesis.getVoices().filter((v) => /^sv/i.test(v.lang)); } catch { roster = []; } };
try { laddaRoster(); speechSynthesis.onvoiceschanged = laddaRoster; } catch {}
// naturliga/premium-röster låter mycket bättre – välj dem först om datorn har dem
const rostKvalitet = (v) => (/natural|neural|premium|enhanced|förbättrad|online/i.test(v.name) ? 10 : 0) + (v.localService ? 0 : 1);
function valjRost(kon) {
  if (!roster.length) return null;
  roster.sort((a, b) => rostKvalitet(b) - rostKvalitet(a));
  const man = /oskar|bengt|alvar|male|man\b|herr/i, kvinna = /alva|klara|hedvig|female|kvinna|google svenska/i;
  return roster.find((v) => (kon === 'm' ? man : kvinna).test(v.name)) || roster[0];
}
// pratljud: varje figur har ett eget "babbel" (som i Animal Crossing) i stället för en AI-röst
const PRATLJUD = {
  rolf: { f: 95, typ: 'sawtooth', tempo: 0.15, spann: 0.25, glid: -0.35, vol: 0.09 },      // grumligt, släpigt mummel
  ali: { f: 125, typ: 'triangle', tempo: 0.14, spann: 0.15, glid: -0.2, vol: 0.12, suck: true }, // trött, suckar först
  mamma: { f: 330, typ: 'square', tempo: 0.075, spann: 0.45, glid: 0.15, vol: 0.05 },      // snabbt, upprört kvitter
  bror: { f: 210, typ: 'triangle', tempo: 0.09, spann: 0.35, glid: 0.1, vol: 0.1 },
  pappa: { f: 110, typ: 'sine', tempo: 0.2, spann: 0.05, glid: 0, vol: 0.16, max: 2 },      // två platta ljud. Klart.
  du: { f: 250, typ: 'sine', tempo: 0.1, spann: 0.3, glid: 0.05, vol: 0.12 },
  berattare: { f: 180, typ: 'sine', tempo: 0.11, spann: 0.2, glid: 0, vol: 0.08 },
};
let pratStopp = 0;
function pratljud(vem, text) {
  const c = ljudCtx(); if (!c) return;
  const p = PRATLJUD[vem] || PRATLJUD.berattare;
  const ord = String(text).replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean);
  const stavelser = Math.min(p.max || 60, Math.round(ord.length * 1.6));
  const arg = /!/.test(text) ? 1.25 : 1, fraga = /\?/.test(text);
  const id = ++pratStopp;
  let t = c.currentTime + 0.05;
  if (p.suck) {   // en trött suck
    const len = 0.5, buf = c.createBuffer(1, c.sampleRate * len, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / d.length) * 0.5;
    const n = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain(); n.buffer = buf; f.type = 'lowpass'; f.frequency.value = 900; g.gain.value = 0.12;
    n.connect(f).connect(g).connect(c.destination); n.start(t); t += len + 0.1;
  }
  for (let i = 0; i < stavelser; i++) {
    if (id !== pratStopp) return;
    const o = c.createOscillator(), g = c.createGain(), filt = c.createBiquadFilter();
    const slut = fraga && i > stavelser - 3 ? 1.3 : 1;
    const f = p.f * arg * slut * (1 + (Math.random() * 2 - 1) * p.spann);
    const d = p.tempo * (0.7 + Math.random() * 0.6);
    o.type = p.typ; o.frequency.setValueAtTime(f, t); o.frequency.linearRampToValueAtTime(f * (1 + p.glid), t + d);
    filt.type = 'bandpass'; filt.frequency.value = f * (2 + Math.random() * 2); filt.Q.value = 1.2;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(p.vol * arg, t + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, t + d * 0.9);
    o.connect(filt).connect(g).connect(c.destination); o.start(t); o.stop(t + d);
    t += d + (Math.random() < 0.15 ? p.tempo * 1.2 : 0.012);   // små pauser mellan "orden"
  }
}
// rösterna: 'prat' = pratljud (standard), 'tal' = datorns talsyntes, 'av'
if (!S.rostMig) { S.rostMig = true; if (!S.rostLage || S.rostLage === 'prat') S.rostLage = 'rost'; }
const rostLage = () => S.rost === false ? 'av' : (S.rostLage || 'rost');
// riktiga röster: förgenererade med en neural svensk talmodell (verktyg/roster.py), en klang per figur
const ROST_FIGURER = ['rolf', 'ali', 'pappa', 'bror', 'chefen', 'du', 'mamma', 'berattare'];
let rostIndex = null, rostLjud = null;
const rostPack = {};
const rostKlar = fetch('roster/index.json').then((x) => x.json()).then((a) => { rostIndex = a; hamtaPack('du');
  const pk = [...new Set(Object.values(a).map((v) => v[0]))]; let i = 0; const nasta = () => { if (i >= pk.length) return; hamtaPack(pk[i++]).finally(() => setTimeout(nasta, 800)); }; setTimeout(nasta, 3000);
}).catch(() => {});
const hamtaPack = (namn) => rostPack[namn] || (rostPack[namn] = fetch(`roster/${namn}.mp3`).then((x) => x.arrayBuffer()));
function rostNyckel(t) {
  const ren = String(t).replace(/<[^>]+>/g, ' ').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
  let h = 0x811c9dc5;
  for (let i = 0; i < ren.length; i++) { h ^= ren.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0');
}
function rostKlipp(vem, text) {
  if (!rostIndex) return null;
  const k = `${ROST_FIGURER.includes(vem) ? vem : 'berattare'}-${rostNyckel(text)}`;
  return rostIndex[k] || null;
}
function prata(vem, text) {
  pratarVem = vem; pratarTill = performance.now() + Math.min(9000, 600 + String(text).length * 62);
  if (rostLage() === 'av' || !text || !/[\p{L}]/u.test(rens(text))) return;
  if (rostLage() === 'rost') {
    tystna();
    const klipp = rostKlipp(vem, text);
    if (!klipp) return;   // ingen inspelad replik: tyst (texten syns ändå) – inget pip-babbel
    const nr = pratStopp, [pk, fran, langd] = klipp;
    hamtaPack(pk).then((buf) => {
      if (nr !== pratStopp) return;   // något annat har börjat prata
      const url = URL.createObjectURL(new Blob([buf.slice(fran, fran + langd)], { type: 'audio/mpeg' }));
      rostLjud = new Audio(url); rostLjud.volume = 0.95; rostLjud.onended = () => { URL.revokeObjectURL(url); if (pratarVem === vem) pratarTill = 0; };
      { const lj = rostLjud; lj.onloadedmetadata = () => { if (pratarVem === vem && isFinite(lj.duration)) pratarTill = performance.now() + lj.duration * 1000; }; }
      rostLjud.play().catch(() => {});
    }).catch(() => {});
    return;
  }
  if (rostLage() === 'prat') { tystna(); pratljud(vem, text); return; }
  try {
    const ren = String(text).replace(/<[^>]+>/g, ' ').replace(/\p{Extended_Pictographic}|\uFE0F|\u200D/gu, '').replace(/\s\/(\w+)/g, '. $1').replace(/\s+/g, ' ').trim();
    if (!ren) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(ren), r = ROSTER[vem] || ROSTER.berattare;
    u.lang = 'sv-SE'; u.pitch = r.pitch; u.rate = r.rate; u.volume = 0.9;
    const v = valjRost(r.kon); if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch {}
}
const tystna = () => { pratStopp++; try { speechSynthesis.cancel(); } catch {} try { rostLjud?.pause(); } catch {} rostLjud = null; };
const vemAvTitel = (t = '') => /Rolf/.test(t) ? 'rolf' : /Ali/.test(t) ? 'ali' : /Mamma/.test(t) ? 'mamma' : /Storebror/.test(t) ? 'bror' : /Dagbok/.test(t) ? 'du' : 'berattare';
addEventListener('keydown', (e) => {
  if (e.code !== 'KeyV' || !ui.igang && medEl2.hidden) return;
  const ny = { rost: 'prat', prat: 'tal', tal: 'av', av: 'rost' }[rostLage()];
  S.rost = ny !== 'av'; S.rostLage = ny === 'av' ? S.rostLage : ny; sparaSnart(); tystna();
  ui.toast({ rost: 'Riktiga röster – varje figur har sin egen röst (V byter)', prat: 'Pratljud – figurerna babblar som i ett spel (V byter)', tal: 'Datorns talsyntes (V byter)', av: 'Inga röster (V byter)' }[ny], '');
  if (ny !== 'av') prata('mamma', 'Hallå? Hör du mig?!');
});

// ---------- Meddelanden i helskärm: spelet pausar tills du läst ----------
const medKo = [];
let pausad = false;
const medEl2 = document.createElement('div');
medEl2.className = 'ph-med'; medEl2.hidden = true;
document.body.appendChild(medEl2);
function visaNastaMeddelande() {
  const m = medKo.shift(); if (!m) return;
  if (m.typ === 'smsval') {
    // som en notis på telefonen: lyssna nu eller spara till senare (spelet pausar så länge)
    pausad = true; ui.igang = false; spelare.aktiv = false; anvandNere = false;
    if (document.pointerLockElement) document.exitPointerLock();
    triTon();
    const namn = AVSANDARE[m.fran]?.namn || m.fran;
    medEl2.innerHTML = `<div class="ph-smsval"><div class="hud-ios in statisk"><div class="app">${IKON.telefon}</div><div class="inne"><div class="topp"><span>MEDDELANDEN</span><span class="nu">nu</span></div><div class="fran">${portratt(vemAvSms(m.fran), 20)}<b>${rens(namn)}</b></div><div class="txt">${rens(m.text)}</div></div></div>
      <div class="ph-smsval-knappar"><button class="fp-knapp" data-spara>OK <kbd>E</kbd></button></div></div>`;
    medEl2.hidden = false;
    // texten syns och läses upp direkt – OK stänger, rösten läser klart medan du spelar vidare
    m.klar?.(); setTimeout(() => prata(m.fran, m.text), 300);
    medEl2._lyssna = () => medEl2._spara?.();
    medEl2._spara = () => {
      medEl2._lyssna = medEl2._spara = null; medEl2.hidden = true; medEl2.innerHTML = ''; pausad = false; ui.igang = true; visaTabTips();
      if (medKo.length) { setTimeout(visaNastaMeddelande, 250); return; }
      spelare.aktiv = true; spelare.lasMus();
    };
    medEl2.querySelector('[data-spara]').onclick = () => medEl2._spara?.();
    return;
  }
  pausad = true; ui.igang = false; spelare.aktiv = false; anvandNere = false;
  if (document.pointerLockElement) document.exitPointerLock();
  const sms2 = m.typ === 'sms', a = sms2 ? AVSANDARE[m.fran] : null;
  medEl2.innerHTML = sms2
    ? `<div class="ph-telefon"><div class="ph-tel-topp" style="background:${a.farg}">${portratt(m.fran, 34)}<span>${a.namn}</span></div>
        <div class="ph-tel-kropp"><div class="ph-tel-bubbla skriver"><span>.</span><span>.</span><span>.</span></div></div>
        ${SMS_POOL.find((x) => x.id === m.id)?.svar && S.smsSvar?.[m.id] == null ? `<div class="ph-tel-svar">${SMS_POOL.find((x) => x.id === m.id).svar.map(([t], i) => `<button class="ph-svarknapp" data-svar="${i}" disabled>${t}</button>`).join('')}</div>` : ''}
        <button class="fp-knapp" disabled>Läst</button></div>`
    : `<div class="ph-papper"><div class="ph-pap-titel">${portratt(vemAvTitel(m.titel), 34)}<span>${rens(m.titel)}</span></div><div class="ph-pap-text">${rens(m.text)}</div><button class="fp-knapp">Läst</button></div>`;
  medEl2.hidden = false;
  const knapp = medEl2.querySelector('button.fp-knapp');
  if (sms2) {
    vibrera();
    const svarK = [...medEl2.querySelectorAll('[data-svar]')];
    setTimeout(() => {
      const bb = medEl2.querySelector('.ph-tel-bubbla'); bb.classList.remove('skriver'); bb.textContent = rens(m.text); ljud.plock(); prata(m.fran, m.text);
      if (svarK.length) { knapp.hidden = true; svarK.forEach((k) => { k.disabled = false; }); } else knapp.disabled = false;
    }, 1100);
    svarK.forEach((k) => { k.onclick = (e) => {
      e.stopPropagation(); svaraSms(m.id, +k.dataset.svar);
      const du = document.createElement('div'); du.className = 'ph-tel-bubbla du'; du.textContent = k.textContent;
      medEl2.querySelector('.ph-tel-kropp').appendChild(du); medEl2.querySelector('.ph-tel-svar').remove();
      knapp.hidden = false; knapp.disabled = false; ljud.plock();
    }; });
  } else { ljud.plock(); prata(vemAvTitel(m.titel), m.text); }
  // röst på/av – valet sparas och gäller alla meddelanden tills man klickar igen
  const ljudKnapp = document.createElement('button'); ljudKnapp.className = 'ph-rostknapp';
  const ritaLjud = () => { const pa = S.rost !== false; ljudKnapp.innerHTML = `${pa ? IKON.rost : IKON.tyst}<span>${pa ? 'Röst på' : 'Tyst'}</span>`; ljudKnapp.title = pa ? 'Stäng av uppläsningen' : 'Slå på uppläsningen'; ljudKnapp.classList.toggle('av', !pa); };
  ljudKnapp.onclick = (e) => {
    e.stopPropagation();
    if (S.rost === false) { S.rost = true; prata(sms2 ? m.fran : vemAvTitel(m.titel), m.text); } else { S.rost = false; tystna(); }
    ritaLjud(); sparaSnart();
  };
  ritaLjud();
  medEl2.firstElementChild.appendChild(ljudKnapp);
  knapp.onclick = stangMeddelande;
}
// muslåset kan beviljas en stund efter klicket på Starta – kommer det när ett meddelande visas släpper vi det så att man kan klicka Läst
document.addEventListener('pointerlockchange', () => { if (document.pointerLockElement && !medEl2.hidden) document.exitPointerLock(); });
function stangMeddelande() {
  const k = medEl2.querySelector('button.fp-knapp'); if (!k || k.disabled || k.hidden) return;
  medEl2.hidden = true; medEl2.innerHTML = ''; tystna();
  pausad = false; ui.igang = true;
  if (medKo.length) { setTimeout(visaNastaMeddelande, 250); return; }
  spelare.aktiv = true; spelare.lasMus();
}
addEventListener('keydown', (e) => {
  if (medEl2.hidden) return;
  if (medEl2._lyssna) {
    if (['KeyE', 'Enter', 'Space'].includes(e.code)) { e.preventDefault(); e.stopImmediatePropagation(); medEl2._lyssna(); }
    else if (['Tab', 'Escape'].includes(e.code)) { e.preventDefault(); e.stopImmediatePropagation(); medEl2._spara(); }
    return;
  }
  if (['KeyE', 'Enter', 'Space'].includes(e.code)) { e.preventDefault(); e.stopImmediatePropagation(); stangMeddelande(); }
}, true);

// ---------- Sparning ----------
let sparaFlagga = false;
function sparaSnart() { sparaFlagga = true; }
function samlaOchSpara(direkt = false) {
  S.skrap = skrapLista.map((s) => s.userData.skrap);
  S.hand = hand.saker.map((s) => 'skrap:' + (s.userData.variant ?? 0));
  S.placerade = placerade.map(sparbar);
  const nyPos = [+spelare.pos.x.toFixed(2), +spelare.pos.z.toFixed(2), +spelare.yaw.toFixed(3), +spelare.pitch.toFixed(3)];
  if (!S.pos || Math.hypot(nyPos[0] - S.pos[0], nyPos[1] - S.pos[1]) > 0.5 || Math.abs(nyPos[2] - S.pos[2]) > 0.3) { S.pos = nyPos; sparaFlagga = true; }
  for (const sk of skrivare) S.skrivare[sk.id] = { jobb: sk.jobb, prog: sk.prog, klar: sk.klar, fil: sk.fil, spolNiva: sk.spolNiva || 0, upprepa: sk.upprepa || null, mod: sk.mod || null };
  let p = null;
  if (direkt || sparaFlagga || skrivare.some((s) => s.jobb)) p = spar.spara(direkt);
  sparaFlagga = false;
  return p;
}
setInterval(() => samlaOchSpara(), 2000);
// spara direkt när man lämnar spelet: stänger fliken, byter flik eller klickar ”Alla spel”
addEventListener('pagehide', () => samlaOchSpara(true));
document.addEventListener('visibilitychange', () => { if (document.hidden) samlaOchSpara(true); });
document.addEventListener('click', (e) => {
  const a = e.target.closest?.('a[href]'); if (!a) return;
  e.preventDefault();
  const p = samlaOchSpara(true);
  ui.toast('Sparar…', '');
  Promise.race([p || Promise.resolve(), new Promise((ok) => setTimeout(ok, 2500))]).then(() => { location.href = a.href; });
}, true);

// ---------- Spelloop ----------
let bandTid = 0;
let anvandNere = false, skrapTimer = 0, trampTid = 0, fullVarnad = false;
function uppdatera(dt) {
  if (!pausad && medKo.length && ui.igang && ui.butiksOverlay.hidden && ui.overlay.hidden) visaNastaMeddelande();
  if (pausad) return;
  spelare.uppdatera(dt);
  hand.uppdatera(dt, spelare.rorelse);
  hand.grupp.position.x -= 0.68;   // skräpet i vänster hand – gripen i höger

  // skrivarna jobbar även när menyn är öppen
  for (const sk of skrivare) {
    skrivarLjud(sk, uppdateraSkrivare(sk, dt), dt);
    const a = Math.min(1, sk.fil / RULLE); sk.spole.visible = sk.fil > 0; sk.spoleKarna.scale.set(0.3 + a * 0.7, 1, 0.3 + a * 0.7);
    if (sk.jobb && !sk.vantar) sk.spole.rotation.x += dt * 2;
  }
  // solpaneler
  const antalSol = placerade.filter((p) => p.typ === 'sol').length;
  S.strom = Math.min(stromMax(), S.strom + antalSol * SOL_PER_S * dt);

  if (ui.igang && ui.butiksOverlay.hidden) {
    uppdateraFonsterSpoke();
    interaktor.uppdatera();
    const staplar = spoke.grupp?.visible && spoke.bord && SMASAK(valdTyp());
    ui.prompt(staplar ? (spoke.ok ? `Ställ ${info(spoke.typ).namn.toLowerCase()} på ${info(spoke.bord.typ).namn.toLowerCase()}n (R vrid)` : `Det står redan något på ${info(spoke.bord.typ).namn.toLowerCase()}n`) : interaktor.text || (spoke.grupp?.visible ? (spoke.bord && !MASKINER[spoke.typ]?.kraverBord ? `Ställ ${info(spoke.typ).namn.toLowerCase()} på ${info(spoke.bord.typ).namn.toLowerCase()}n` : (VAGGSAK.has(spoke.typ) ? (spoke.vaggFel ? `${info(spoke.typ).namn} hänger man på väggen – gå in i skjulet` : `Häng ${info(spoke.typ).namn.toLowerCase()} på väggen`) : `Ställ ${info(spoke.typ).namn.toLowerCase()} här (R vrid)`)) : ''));
    uppdateraSpoke(); ritaVridTips();

    // trampa
    const trampar = anvandNere && interaktor.hovrad === cykel;
    laddLjud(trampar && S.strom < stromMax() - 0.01);
    if (trampar && S.strom >= stromMax() - 0.01) {
      if (!fullVarnad) { fullVarnad = true; ljud.klar(); ui.toast(`🔋 Batteriet är fullt! (${stromMax()})`, 'guld'); }
    } else if (trampar) {
      S.strom = Math.min(stromMax(), S.strom + TRAMP_PER_S * (S.dag <= 2 ? 2 : 1) * dt);   // dag 1–2: trampa går dubbelt så fort
      if (S.strom < stromMax() - 5) fullVarnad = false;
      S.stat.trampat += TRAMP_PER_S * dt;
      trampTid += dt;
      pedaler.rotation.x += dt * 9; hjul.rotation.x += dt * 14;
      if (trampTid > 0.25) { trampTid = 0; ljud.borsta(); }
    }

    autoPlock();
    // håll inne gripklon och svep över skräpet
    gripPlockTid -= dt;
    if (gripHaller && gripPlockTid <= 0 && interaktor.hovrad?.userData.typ === 'skrap') { gripPlockTid = 0.18; interaktor.aktivera(); }
    // magnetpistolen: håll inne och sikta
    const magnetPa = niva() === 3 && anvandNere && (!interaktor.hovrad || interaktor.hovrad.userData.typ === 'skrap') && !hand.full;
    magnetStrale.visible = magnetPa;
    if (magnetPa) {
      const fram = spelare.riktning(new THREE.Vector3());
      const oga = kamera.position;
      for (const s of [...skrapLista]) {
        if (!S.tippNyckel && paTippen(s.position.x, s.position.z)) continue;
        if (!kanLyfta(s)) continue;
        const d = s.position.clone().sub(oga); const len = d.length();
        if (len > MAGNET_RACKVIDD || d.normalize().angleTo(fram) > MAGNET_VINKEL) continue;
        const mal = new THREE.Vector3(spelare.pos.x, 0.01, spelare.pos.z);
        const steg = mal.sub(s.position); const avst = steg.length();
        if (avst < 1.0) { plockaSkrap(s, true); if (hand.full) break; continue; }
        s.position.addScaledVector(steg.normalize(), Math.min(avst, MAGNET_FART * dt));
        s.position.y = tippHojd(s.position.x, s.position.z) + 0.16 + Math.sin(performance.now() / 80 + len) * 0.05;   // följer kullen i stället för att sjunka in i den
        s.rotation.y += dt * 6;
        s.userData.skrap[0] = s.position.x; s.userData.skrap[1] = s.position.z;
      }
      if (Math.random() < dt * 6) ljud.borsta();
    }
    // veva kvarnen
    const vevar = anvandNere && interaktor.hovrad === vevYta && S.kvarn.tratt > 0 && !extruderFull();
    if (anvandNere && interaktor.hovrad === vevYta && extruderFull() && !fullVarnad) { fullVarnad = true; varna('rulle'); }
    if (vevar) {
      S.kvarn.prog += dt * (S.dag === 1 ? 1.6 : 1) * (1 + trimNiva('kvarn') * 0.25) * (harProto('m_nano') ? 1.6 : 1) / (VEV_TID * nastaGram() / 200);
      vev.rotation.z -= dt * 10; malAnimation = 0.15;
      if (Math.random() < dt * 8) ljud.borsta();
      if (S.kvarn.prog >= 1) flaskaMald();
    }


    // mål-guiden
    while (S.steg < STEG.length && STEG[S.steg].klar()) {
      const st = STEG[S.steg]; S.steg++;
      ljud.klar();
      if (st.lapp && !S.lappar.includes(st.lapp)) visaLapp(st.lapp);
      if (st.sms && !(S.smsSkickat || []).includes(st.lapp || st.sms[1])) { S.smsSkickat = [...(S.smsSkickat || []), st.lapp || st.sms[1]]; sms(st.sms[0], st.sms[1]); }
      const nasta = STEG[S.steg];
      if (nasta?.startLapp && !S.lappar.includes(nasta.startLapp)) { visaLapp(nasta.startLapp); }
      if (nasta?.startPost && !S.lappar.includes(nasta.startPost)) { S.post.lapp = nasta.startPost; visaPostInne(); ui.toast('✉️ Något har hamnat i postlådan vid soptippen…', 'guld'); }
      sparaSnart();
    }
    if (S.steg >= STEG.findIndex((x) => x.del === K2) && !S.kapitelKlart) {
      S.kapitelKlart = true; andraRespekt(10, 'Byggde en riktig fristad'); spar.spara(true);
      kapitelSlut();
    }
  }

  if (ui.igang) uppdateraSopbil(dt);
  uppdateraSkymning(dt);
  uppdateraSkrapMarkorer();
  uppdateraKarra(dt);
  uppdateraFlygSkrap(dt);
  spelare.fart = valdKarra() ? FART_KARRA + (FART_KARRA_FULL - FART_KARRA) * Math.min(1, karraGram() / KARRA_KAP) : FART_UTAN;
  uppdateraFonsterSpoke();
  containerSpoke.visible = !tomhant && valdTyp() === 'byggsats:matarband' && !S.kvarn.band;
  uppdateraBodSpoke();
  { const t = performance.now() / 1000;
    bodRgb.forEach((l, i) => l.material.emissive.setHSL((t * 0.15 + i * 0.1) % 1, 1, 0.5));
    if (bodRgb.ljus) bodRgb.ljus.color.setHSL((t * 0.15) % 1, 0.8, 0.6);
    for (const p of placerade) if (p.typ === 'ledpinne' || p.typ === 'jacuzzi') p.mesh.traverse((o) => {
      if (o.userData.rgb) o.material.emissive.setHSL((t * 0.2 + p.x * 0.1) % 1, 1, 0.5);
      if (o.userData.bubbla !== undefined) { o.position.y = 0.74 + ((t * 0.6 + o.userData.bubbla * 0.13) % 1) * 0.12; }
    }); }
  { const id = valdHemDel(); for (const [k, gr] of Object.entries(HEM_DELAR)) gr.userData.spoke.visible = k !== 'fonster' && k === id && !S.hem?.[k];
    const nv = S.hem?.vagg || 0; HEM_DELAR.vaggar.children.forEach((c, i) => { c.visible = i < nv; }); HEM_DELAR.vaggar.userData.spoke.children.forEach((c, i) => { c.visible = i === nv; }); }
  {
    const oppen = aliOppen();
    ali.visible = oppen; aliStangt.visible = !oppen;
    if (oppen) ali.userData.huvud.rotation.y = Math.sin(performance.now() / 2300) * 0.35;
    const k = klockan(); varnaKyla(k); const kt = `Dag ${S.dag} · ${ARSTID_NAMN[arstid()]}` + (k == null ? '' : (k >= 21 * 60 ? ' · 21:00 · Ali har stängt' : ` · ${klockText(k)}`));
    const ke = document.querySelector('.ph-klocka'), kt2 = rens(kt); if (ke && ke.textContent !== kt2) { ke.textContent = kt2; ke.parentElement.style.display = kt2 ? '' : 'none'; }
  }
  // motorn mal av sig själv (även när menyn är öppen)
  const motorKor = S.kvarn.motor && S.kvarn.tratt > 0 && !extruderFull() && S.strom >= MOTOR_STROM * motorStrom() * dt;
  jetEld.visible = !!S.kvarn.jet && motorKor;
  if (jetEld.visible) { const f = 0.8 + Math.random() * 0.5; jetEld.scale.set(f, 1, 1); jetDel.userData.ljus.intensity = 2 + Math.random() * 2; if (Math.random() < dt * 10) ljud.borsta(); } else jetDel.userData.ljus.intensity = 0;
  if (motorKor) {
    S.strom -= MOTOR_STROM * motorStrom() * dt * (S.dag <= 2 ? 0.3 : 1);   // dag 1–2: motorn snålar så skrivaren inte svälter
    S.kvarn.prog += dt * motorFart() * (1 + trimNiva('kvarn') * 0.25) * (harProto('m_nano') ? 1.6 : 1) / (MOTOR_TID * nastaGram() / 200);
    flakt.rotation.y += dt * 20; vev.rotation.z -= dt * 6; malAnimation = 0.1;
    if (S.kvarn.prog >= 1) flaskaMald();
  }
  // matarbandet flyttar skräp från bingen till tratten (drar lite ström)
  if (!STEG[S.steg] && !sover) { const fore = S.dagTid || 0; S.dagTid = Math.min(DAG_LANGD, fore + dt); if (Math.floor(fore / 30) !== Math.floor(S.dagTid / 30)) sparaSnart(); }
  if (harProto('m_fusion')) S.strom = Math.min(stromMax(), S.strom + dt * 0.8);
  uppdateraAuto(dt); uppdateraMalSkylt(dt); try { uppdateraFigurer(dt); } catch (e) { if (!figurFel) { figurFel = true; console.warn('figurer', e); } } uppdateraPappa(dt); miljo.uppdatera(performance.now() / 1000); uppdateraLukt(performance.now() / 1000); uppdateraKompost(dt); miljo.uppdateraSno(dt, kamera); kollaTillgang(dt); kollaBengt(dt); kollaAliSteg(); uppdateraBlick(dt); uppdateraMalPil(); ritaStopp(); ritaSkrivBarer(); matFlaskhals(dt); ritaPlatsLappar(); korBud(); kollaPuffar(dt); visaRullstall(); kollaRaddning(dt); for (const sk of skrivare) visaSpolar(sk);
  if (S.kvarn.band) {
    const kor = S.kvarn.binge.length > 0 && S.kvarn.tratt < TRATT_MAX && S.strom > 0.5;
    if (kor) {
      bandTid += dt; S.strom = Math.max(0, S.strom - 0.3 * dt);
      matarband.userData.ranta.children.forEach((k) => { k.position.z += dt * 0.35; if (k.position.z > 0.5) k.position.z -= 1.08; });
      if (bandTid >= BAND_TID) {
        bandTid = 0; const g = S.kvarn.binge.shift(); iTratten(Math.abs(g), g < 0); sparaSnart();
        const sort = g < 0 ? (Math.abs(g) >= 5000 ? 'kajak' : 'tunna') : (Math.abs(g) >= 1000 ? 'back' : Math.abs(g) >= 500 ? 'dunk' : 'flaska');
        const m = skapaSkrap(variantFor(sort)); if (g >= 0) m.scale.multiplyScalar(0.8);
        skickaSkrap(m, kvarnPunkt(0, 0.75, -1.3), trattTopp(), { dur: BAND_TID * 1.6, via: kvarnPunkt(0, 1.3, -0.45), tratt: true });
      }
    }
    const status = !S.kvarn.binge.length ? ['tom – töm skräp här', '#9fb3c8'] : S.kvarn.tratt >= TRATT_MAX ? ['väntar på tratten', '#ffd43b'] : S.strom <= 0.5 ? ['ingen ström!', '#ff6b6b'] : ['▶ matar tratten', '#7dffb0'];
    ritaBandSkylt(`CONTAINER ${S.kvarn.binge.length}/${BINGE_MAX}`, status[0], status[1]);
    const synliga = Math.ceil(S.kvarn.binge.length / BINGE_MAX * 24);
    matarband.userData.hog.children.forEach((k, i) => { k.visible = i < synliga; });
  }
  // tratten, rullen och motorn syns
  trattFlaskor.forEach((f, i) => { f.visible = i < S.kvarn.tratt; });
  {
    // filamentet lindas upp på rullen: tjockare ju fullare, lyser och gungar när den är hel
    const t = performance.now() / 1000, full = helaRullar() > 0;
    const andel = full ? 1 : (S.kvarn.ut % RULLE) / RULLE;
    rulleKarna.visible = andel > 0;
    rulleKarna.scale.set(0.3 + andel * 0.7, 1, 0.3 + andel * 0.7);
    rulle.scale.setScalar(full ? 1.35 : 1.15);
    rulle.position.y = 0.2 + (full ? Math.sin(t * 3) * 0.04 : 0);
    rulleMat.emissiveIntensity = full ? 0.4 + (Math.sin(t * 5) + 1) * 0.35 : 0.1;
    ritaUtlager();
  }
  // kvarnen snurrar när den matas
  if (malAnimation > 0) { malAnimation -= dt; kvarn.position.y = Math.sin(performance.now() / 15) * 0.008; } else kvarn.position.y = 0;

  // HUD
  // efter kapitel 2 tar det aldrig slut: nästa trivselmål ligger alltid 100 bort
  const evigtMal = Math.ceil((trivsel() + 1) / 100) * 100;
  malRaw = S.folkbokMal && !S.folkbokford && S.steg >= STEG.length ? `Bli folkbokförd: äg all mark och bygg ett hus åt Rolf (${S.mark.agt.length}/${MARK_TOMTER.length}) – tavlan vid vägen` : S.steg < STEG.length ? rens(stegText(STEG[S.steg])) : `Nästa mål: trivsel ${trivsel()}/${evigtMal} · trimma maskinerna hos Ali eller ta Rolfs jobb`;
  malDel.textContent = (S.folkbokMal && !S.folkbokford && S.steg >= STEG.length ? 'Slutmålet' : S.steg < STEG.length ? (KAP1_DELAR.includes(STEG[S.steg].del) ? 'Kapitel 1 · ' + STEG[S.steg].del : STEG[S.steg].del) : S.folkbokford ? 'Folkbokförd · fritt bygge' : 'Oändligt bygge').toUpperCase();
  if (STEG[S.steg]?.sov && !kvallKlar()) { malRaw = `Dagens mål är klara! Bygg, printa och sälj fritt – det blir kväll om ${Math.max(1, Math.ceil((MIN_VAKEN - (S.vakenTid || 0)) / 60))} min.`; }
  if (!S.skyltUppe && S.steg <= 1) { malDel.textContent = 'KAPITEL 1 · ETT HEM ATT BO I'; malRaw = 'Spika upp din adresskylt'; }
  ritaNasta();
  if (S.steg >= STEG.length && S.kapitelKlart && !S.kapitel2Klart) { S.kapitel2Klart = true; sparaSnart(); kapitel2Slut(); }
  {
    let r = '';
    {
      if (S.post.tillMig.length) r = '📬 Rolf har lämnat något i postlådan';
      else if (S.post.tillRolf) r = '📦 Gåvan ligger i lådan – Rolf kommer med sopbilen';
      else if (S.rolf.jobb != null) r = `Rolfs jobb: printa ${VAROR[aktivGava()].namn.toLowerCase()} och lägg den i postlådan – ${jobbNu().ja.toLocaleString('sv-SE')} kr`;
      else if (S.post.lapp === 'jobb') r = 'Rolf har lagt en hemlig lapp i postlådan';
      else if (aktivGava()) r = `Rolf önskar sig: ${VAROR[aktivGava()].namn.toLowerCase()} – printa och lägg i postlådan · Belöning: ${ROLF[S.rolf.i].belo.map(beloText).join(' + ')}`;
    }
    const r2 = rens(r); if (rolfRad.textContent !== r2) rolfRad.textContent = r2;
  }
  filText.textContent = `${antalInv('rulle')} rullar`;
  {
    const hb = document.querySelector('.ph-hotbar');
    hb.hidden = !ui.igang;
    if (!hb.firstChild) ritaHotbar();
    const sk = hb.querySelector('.ph-hb-skrap'); if (sk) { const t = hand.saker.length ? String(hand.saker.length) : ''; if (sk.textContent !== t) sk.textContent = t; }
    const ka = hb.querySelector('.ph-hb-karra'); if (ka) { const t = S.karraLast.length ? `${Math.round(karraGram() / KARRA_KAP * 100)}%` : ''; if (ka.textContent !== t) ka.textContent = t; }
    if (hb.firstChild?.dataset.niva !== String(S.grip ? 1 : 0)) ritaHotbar();
    kistLock.rotation.z += ((kistaOppen && !ui.butiksOverlay.hidden ? -1.15 : 0) - kistLock.rotation.z) * Math.min(1, dt * 8);
    varmMat.emissiveIntensity = malAnimation > 0 ? 0.9 + Math.sin(performance.now() / 90) * 0.3 : 0.35;
  }
  forradText.textContent = antalIForrad();
  smsChip.style.display = S.sms.length ? '' : 'none';
  smsN.textContent = S.olasta ? `${S.olasta} ny${S.olasta > 1 ? 'a' : ''} · M` : 'M';
  smsChip.classList.toggle('ph-larm', S.olasta > 0);
  { const em = hudSms.querySelector('em'), n = Math.max(S.olasta || 0, inkorgVantar); if (em.textContent !== String(n)) { em.textContent = n; em.hidden = !n; hudSms.classList.toggle('larm', n > 0); } }
  {
    // lastmätaren: händer/grip räknar antal saker, kärran räknar vikt. Allt visas också i rullar (1 rulle = 1 kg plast).
    const nSkrap = hand.saker.filter((x) => x.userData.typ === 'skrap').length;
    const barGram = hand.saker.reduce((a, x) => a + (x.userData.gram || 0), 0);
    let namn, andel, txt;
    if (valdKarra()) { namn = 'Kärran'; andel = karraGram() / KARRA_KAP; txt = `${(karraGram() / RULLE).toLocaleString('sv-SE', { maximumFractionDigits: 1 })}/${KARRA_KAP / RULLE} rullar`; }
    else { namn = ['Händerna', 'Gripen', 'Gripen + korg', 'Magneten'][niva()]; andel = nSkrap / BARA_SKRAP[niva()]; txt = `${nSkrap}/${BARA_SKRAP[niva()]} st` + (barGram ? ` · ${(barGram / RULLE).toLocaleString('sv-SE', { maximumFractionDigits: 1 })} rulle` : ''); }
    // kapaciteten visas vid handen, bara när du faktiskt bär något
    { const bar = valdKarra() ? karraGram() > 0 : nSkrap > 0, kort = valdKarra() ? txt : `${nSkrap}/${BARA_SKRAP[niva()]}`;
      if (hudHand.hidden === bar) hudHand.hidden = !bar;
      if (bar && hudHand.dataset.t !== kort) { hudHand.dataset.t = kort; hudHand.querySelector('b').textContent = kort; const i = hudHand.querySelector('i'); i.style.width = Math.min(100, andel * 100) + '%'; i.style.background = andel >= 1 ? '#ff6b6b' : andel > 0.7 ? '#ffb84d' : '#7dffb0'; hudHand.classList.toggle('full', andel >= 1); hudHand.classList.remove('studs'); void hudHand.offsetWidth; hudHand.classList.add('studs'); } }
    if (barText.textContent !== txt) { barText.textContent = txt; lastNamn.textContent = namn; lastBar.style.width = Math.min(100, andel * 100) + '%'; lastBar.style.background = andel >= 1 ? '#ff6b6b' : andel > 0.7 ? '#ffb84d' : '#7dffb0'; }
  }

  const visaVerktyg = skrapLage() && !tomhant;
  gripVerktyg.visible = (niva() === 1 || niva() === 2) && visaVerktyg;
  magnetVerktyg.visible = niva() === 3 && visaVerktyg;
  {
    const pa = niva() === 3 && visaVerktyg && hand.saker.length > 0 && anvandNere, t = performance.now() / 1000;
    if (!pa && kraftfalt.visible) hand.saker.forEach((o, i) => { o.position.set(0, i * 0.07, -i * 0.01); o.rotation.set(0.2, 0.4, 0); });
    kraftfalt.visible = pa;
    if (pa) {
      const n = hand.saker.length, st = 1 + Math.min(1.2, n * 0.06);
      kraftfalt.position.set(hand.grupp.position.x, hand.grupp.position.y + 0.04 + n * 0.025, hand.grupp.position.z);
      kraftfalt.scale.setScalar(st * (1 + Math.sin(t * 6) * 0.04));
      kraftfalt.userData.yttre.rotation.set(t * 0.7, t * 1.1, 0);
      kraftfalt.userData.inre.material.opacity = 0.12 + (Math.sin(t * 4) + 1) * 0.05;
      hand.saker.forEach((o, i) => { o.position.y = i * 0.05 + Math.sin(t * 3 + i) * 0.015; o.rotation.y = t * 0.8 + i; });
    }
  }
  if (gripVerktyg.visible) { gripVerktyg.rotation.x = Math.sin(performance.now() / 300) * 0.02 * spelare.rorelse; animeraGrip(dt); }
  stromBar.style.width = (S.strom / stromMax() * 100) + '%';
  const stromSlut = skrivare.some((x) => x.jobb && x.vantar === 'ingen ström!');
  stromChip.classList.toggle('ph-larm', stromSlut || S.strom < 5);
  { const el = hudEl.querySelector('[data-hud="el"]'), andel = S.strom / stromMax(), w = Math.round(Math.max(0.02, Math.min(1, andel)) * 100) + '%', i = el.querySelector('i'), b = el.querySelector('b'), t = Math.round(andel * 100) + ' %';
    if (i.style.width !== w) { i.style.width = w; i.style.backgroundColor = andel < 0.15 ? '#ff5c5c' : '#ffd43b'; }
    if (b.textContent !== t) b.textContent = t; el.classList.toggle('larm', stromSlut || S.strom < 5); }
  battFyll.scale.y = Math.max(0.02, S.strom / stromMax());
  battFyll.material.color.set(S.strom < 15 ? 0xff5c5c : 0x7dffb0); battFyll.material.emissive.set(S.strom < 15 ? 0xff5c5c : 0x7dffb0);
  ui.mynt(S.mynt);
  // rullmätaren vid kvarnen
  {
    const nara = Math.hypot(spelare.pos.x - kvarn.position.x, spelare.pos.z - kvarn.position.z) < 4.5;
    const visa = ui.igang && ui.butiksOverlay.hidden && nara && (S.kvarn.tratt > 0 || S.kvarn.ut > 0 || [kvarn, vevYta, rulle].includes(interaktor.hovrad));
    vevEl.classList.toggle('syns', visa);
    if (visa) {
      { const v = kvarnPunkt(0, 1.45, 0.3).clone(); v.project(kamera); const ok = v.z < 1;
        const hb = (vevEl.offsetWidth || 200) / 2 + 12; vevEl.style.left = Math.max(hb, Math.min(innerWidth - hb, (v.x * 0.5 + 0.5) * innerWidth)) + 'px'; vevEl.style.top = Math.max(innerWidth < 1100 ? 120 : 210, Math.min(innerHeight - 110, (-v.y * 0.5 + 0.5) * innerHeight)) + 'px';
        vevEl.style.transform = 'translate(-50%,-100%)'; vevEl.style.visibility = ok ? '' : 'hidden'; }
      const pagar = S.kvarn.tratt > 0 ? nastaGram() * Math.min(1, S.kvarn.prog) : 0;
      const hela = helaRullar();
      const blixt = performance.now() < rullKlarTid;     // en rulle blev nyss klar – visa 100 % en kort stund
      const andel = blixt ? 1 : Math.min(1, (S.kvarn.ut % RULLE + pagar) / RULLE);
      vevEl.classList.toggle('full', blixt);
      vevFyll.style.transition = blixt || andel < 0.02 ? 'none' : 'width .15s';
      vevFyll.style.width = (andel * 100) + '%';
      vevT.textContent = (blixt ? '🧵 Rullen är full!' : `🧵 Rulle ${hela + 1} fylls · ${S.kvarn.tratt} i tratten${S.kvarn.band ? ` · ${S.kvarn.binge.length} i containern` : ''}`) + (hela ? ` · ✅ ${hela} klar${hela > 1 ? 'a' : ''} att ta` : '');
      vevP.textContent = Math.floor(andel * 100) + ' %'; vevT.textContent = rens(vevT.textContent);
    }
  }
  ui.framsteg(trivsel() / TRIVSEL_MAL * 100, 'Trivsel');
  respText.textContent = S.respekt;
  ritaHud();
}

// ---------- Markköp: från hobo dweller till markägare. Rolf känner markägaren, Bengt-Åke, och medlar. ----------
const MARK_TOMTER = [
  { id: 'egen', namn: 'Tomten du bor på', text: 'Skjulet, gården, allt du byggt. Bengt-Åke vet inte ens att någon bor här. Köp den – då är det DIN mark.', pris: 8000, respekt: 0 },
  { id: 'oster', namn: 'Ängen i öster', text: 'Platt och solig. Perfekt för solpaneler och en större printfarm. 22 × 42 meter.', pris: 18000, respekt: 20, kraver: 'egen', rekt: { minX: TOMT, maxX: TOMT + 22, minZ: -TOMT, maxZ: TOMT } },
  { id: 'tippkant', namn: 'Marken runt tippen', text: 'Bengt-Åkes sista bit: stenig, skräpig och väster om tippen. Gott om plats för allt som är för fult för gården.', pris: 60000, respekt: 70, kraver: 'egen', rekt: { minX: TIPP.x - TIPP.r - 18, maxX: -TOMT, minZ: -TOMT, maxZ: TOMT } },
  { id: 'tippen', namn: 'Rolfs soptipp', text: 'Kommunen vill bli av med tippen. Rolf får fortsätta köra sopbilen – men nu åt dig. Han säger att det känns "konstigt men bra".', pris: 120000, respekt: 110, kraver: 'tippkant' },
  { id: 'rolfhus', namn: 'Garage och hus åt Rolf', text: 'Ett garage för sopbilen och ett litet hus med veranda åt Rolf och Kajsa. Han har bott i en husvagn på tippen sen 2009.', pris: 80000, respekt: 140, kraver: 'tippen' },
  { id: 'huset', namn: 'Ett riktigt hus på ängen', text: 'Två rum, kök, soffa och en trappa upp till en sovloft. Med riktiga fönster. Inget skjul längre – ett HUS.', pris: 60000, respekt: 50, kraver: 'oster' },
  { id: 'norr', namn: 'Backen i norr', text: 'Lite skog, lite sten. Gott om plats för allt som inte får plats någon annanstans. 42 × 22 meter.', pris: 35000, respekt: 45, kraver: 'egen', rekt: { minX: -TOMT, maxX: TOMT, minZ: -TOMT - 22, maxZ: -TOMT } },
];
S.mark = { agt: [], tips: false, ...S.mark };
function agerMark(id) { return S.mark.agt.includes(id); }
// får man ställa saker här? (tomten alltid – annars bara på mark man äger)
function paMark(x, z) {
  if (Math.abs(x) <= TOMT && Math.abs(z) <= TOMT) return true;
  return MARK_TOMTER.some((t) => t.rekt && agerMark(t.id) && x >= t.rekt.minX && x <= t.rekt.maxX && z >= t.rekt.minZ && z <= t.rekt.maxZ);
}
const paMarkRekt = (x, z, hx, hz) => paMark(x - hx, z - hz) && paMark(x + hx, z - hz) && paMark(x - hx, z + hz) && paMark(x + hx, z + hz);
// utforska innan du köper: när du har respekten öppnas gärdesgården – men du får bara ställa saker på mark du äger
const tillgang = (id) => { const t = MARK_TOMTER.find((x) => x.id === id); return agerMark(id) || (S.mark.tips && S.respekt >= t.respekt && (!t.kraver || t.kraver === 'egen' || agerMark(t.kraver))); };
function uppdateraMark() {
  const g = { ...BAS_GRANS };
  if (tillgang('oster')) g.maxX = TOMT + 24;
  if (tillgang('norr')) g.minZ = -TOMT - 24;
  if (tillgang('tippkant')) g.minX = TIPP.x - TIPP.r - 20;
  for (const t of MARK_TOMTER) if (t.rekt && agerMark(t.id)) miljo.rojUt(t.rekt);
  for (const f of FYND) if (f.g) f.g.visible = tillgang(f.mark) && !S.fynd.includes(f.id);
  rolfHus.visible = agerMark('rolfhus'); storHus.visible = agerMark('huset');
  spelare.granser = g;
  miljo.byggStaket(g); oppnadGrans = JSON.stringify(g);
  markTavla.visible = S.mark.tips;
}
function kollaMarkTips() {
  // markköpen kommer senare: när kapitel 1 är klart, man har Rolfs nummer och det börjar bli fullt (eller dag 8)
  if (S.mark.tips || !S.rolfNummer || !S.kapitelKlart || S.respekt < 20 || !(S.dag >= 8 || placerade.filter((p) => !p.pa).length >= 30)) return;   // Rolf lägger in ett gott ord först när du har bra karma
  S.mark.tips = true; markTavla.visible = true; sparaSnart();
  setTimeout(() => sms('rolf', 'Ja har snackat me Bengt-Åke. Han e fortfarande förbannad på hela världen. Men ja berätta om allt du gjort, att du städa, hjälpt mej o sagt nej till skumma grejer. Han lyssna. Han e villig att sälja. Säj int att ja sa att han e snäll. Han e int snäll. Kolla tavlan vid vägen. /R'), 3000);
}
// anslagstavlan vid vägen
const markTavla = new THREE.Group();
markTavla.add(at(box(0.1, 1.6, 0.1, mat(0x6b4a2f)), -0.7, 0.8, 0), at(box(0.1, 1.6, 0.1, mat(0x6b4a2f)), 0.7, 0.8, 0), at(box(1.6, 0.9, 0.06, mat(0x8a6a3f)), 0, 1.35, 0));
{ const t = skylt('MARK TILL SALU', 1.4, 0.32, '#f4ecd8', '#7a2020'); t.position.set(0, 1.62, 0.04); markTavla.add(t); const t2 = skylt('(MOTVILLIGT) /Bengt-Åke', 1.4, 0.26, '#f4ecd8', '#333'); t2.position.set(0, 1.25, 0.04); markTavla.add(t2); }
traffYta(markTavla, 1.7, 1.8, 0.4);
markTavla.position.set(6, 0, TOMT - 1.2); markTavla.rotation.y = Math.PI; markTavla.visible = false; scen.add(markTavla);
interaktor.registrera(markTavla, { text: () => markTavla.visible ? `Mark till salu · ${S.mark.agt.length ? 'du äger ' + S.mark.agt.length + ' av ' + MARK_TOMTER.length : 'du är en hobo dweller'}` : '', kanAktivera: () => markTavla.visible, aktivera: () => oppnaMark() });
function oppnaMark() {
  const kropp = sektion('Bengt-Åke är den argaste människan i kommunen. Men Rolf känner honom – och han sköter snacket. Du betalar.')
    + MARK_TOMTER.map((t) => {
      const ag = agerMark(t.id), las = t.kraver && !agerMark(t.kraver), resp = S.respekt < t.respekt, dyr = S.mynt < t.pris;
      const knappen = ag ? knapp({ text: 'Din mark', typ: 'neutral', attr: 'disabled' })
        : las ? knapp({ text: 'Köp tomten först', typ: 'neutral', attr: 'disabled' })
        : resp ? knapp({ text: `Kräver ${t.respekt} respekt`, typ: 'neutral', attr: 'disabled', ikon: 'hjarta' })
        : knapp({ text: `Köp · ${t.pris.toLocaleString('sv-SE')} kr`, typ: dyr ? 'neutral' : 'gron', attr: `data-kop="${t.id}"${dyr ? ' disabled' : ''}`, ikon: 'mynt' });
      return rad({ bild: `<span class="ui-headik" style="width:54px;height:54px">${IKON.hus || IKON.kista}</span>`, titel: t.namn + (ag ? ' ✅' : ''), text: t.text, hoger: knappen });
    }).join('')
    + (S.folkbokMal ? sektion('Folkbokföring') + rad({ bild: `<span class="ui-headik" style="width:54px;height:54px">${IKON.bok}</span>`, titel: S.folkbokford ? 'Du är folkbokförd här ✅' : 'Folkbokför dig på Soptippsvägen 1', text: S.folkbokford ? 'Posten hittar hit nu. Mamma också.' : `Äg all mark och bygg ett hus åt Rolf först (${S.mark.agt.length}/${MARK_TOMTER.length}).`, hoger: S.folkbokford ? '' : knapp({ text: 'Skicka in blanketten', typ: kanFolkbokfora() ? 'gron' : 'neutral', attr: `data-folkbok${kanFolkbokfora() ? '' : ' disabled'}`, ikon: 'bok' }) }) : '');
  const titel = S.folkbokford ? 'Status: godsägare · folkbokförd' : S.mark.agt.length === 0 ? 'Status: hobo dweller' : S.mark.agt.length === MARK_TOMTER.length ? 'Status: godsägare' : 'Status: markägare';
  oppnaRuta(panel({ portrattVem: 'rolf', titel: 'Mark till salu', sub: titel, resurser: resurserHtml() + resurs('hjarta', `Respekt ${S.respekt}`), kropp }), (el) => {
    el.querySelectorAll('[data-kop]').forEach((k) => { k.onclick = () => kopMark(k.dataset.kop); });
    const fb = el.querySelector('[data-folkbok]'); if (fb) fb.onclick = () => folkbokfor();
  });
}
const ROLF_MARK = {
  egen: 'Bengt-Åke sa ja! Han ville först ha 12 000 men ja sa att du städat hela hans skräpiga mark gratis. Då blev de 8. Grattis, markägare. /R',
  oster: 'Ängen e din. Bengt-Åke frågade vad du ska ha den till. Ja sa solpaneler. Han trodde ja sa "sol-paella". Han va glad ändå. /R',
  tippkant: 'Marken runt tippen e din. Bengt-Åke sa att han e glad att bli av me den. Han kalla den "stenåkern". Ja kallar den "framtiden". /R',
  tippen: 'Du äger tippen nu. Ja kör fortfarande sopbilen. Men nu e du chefen. De känns konstigt. Men bra. Kajsa bryr sej int. /R',
  huset: 'Du har byggt ett HUS. Me trappa. Ja har aldrig gått i en trappa i ett hus som ja känner nån som äger. Ja kommer på inflyttningsfest. Ja tar me Kajsa. /R',
  rolfhus: 'Ja vet int va ja ska säja. Ja har bott i husvagnen sen 2009. Nu har ja en VERANDA. Kajsa har redan pinkat i hörnet. De betyder att hon gillar de. Tack. /R',
  norr: 'Backen e din. Bengt-Åke sa att de finns en gammal Volvo begravd där nånstans. Ja sa att du gillar skräp. Han skratta. /R',
};
function kopMark(id) {
  const t = MARK_TOMTER.find((x) => x.id === id);
  if (!t || agerMark(id) || S.mynt < t.pris || S.respekt < t.respekt || (t.kraver && !agerMark(t.kraver))) return;
  S.mynt -= t.pris; S.mark.agt.push(id); ljud.stor(); konfetti(80); ui.stangButik();
  uppdateraMark();
  andraRespekt(id === 'egen' ? 10 : id === 'rolfhus' ? 25 : id === 'huset' ? 15 : 5, id === 'egen' ? 'Äger din egen mark' : id === 'rolfhus' ? 'Byggde ett hus åt Rolf' : 'Köpte ' + t.namn.toLowerCase());
  if (id === 'huset') { uppdateraHinder(); setTimeout(() => sms('mamma', 'Pappa säger att du har byggt ett HUS. Med TRAPPA. Är det säkert?? Har du räcke?? Jag skickar en brandvarnare. Och sylt.'), 9000); }
  ui.toast(id === 'huset' ? '🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet.' : id === 'rolfhus' ? '🏠 Rolf har ett riktigt hus! Garaget står vid tippen.' : id === 'tippen' ? '🗑️ Tippen är din. Rolf kör åt dig nu.' : id === 'egen' ? '🏡 Du äger marken du bor på! Inte längre en hobo dweller.' : `🌲 ${t.namn} är din! Gärdesgården har flyttats – där får du ställa saker nu.`, 'guld');
  setTimeout(() => sms('rolf', ROLF_MARK[id]), 2500);
  if (id === 'egen') setTimeout(() => sms('mamma', 'Pappa säger att du har KÖPT MARK?! Hur?? Vems?? Har du skrivit på något?? Skicka papperen till mig så läser jag.'), 9000);
  sparaSnart();
}
// ---------- Åk med Rolf i sopbilen: morgonkontoret, konditoriet och det hemliga stället ----------
const RESA_FYND = ['ra_flipper', 'ra_kiosk', 'ra_moped', 'ra_bensin', 'ra_emalj', 'ra_fatgrill'];
function kollaResa() {
  if (S.resa || S.dag < 10 || !S.rolfNummer || !S.kapitelKlart) return;
  S.resa = 'bjuden'; sparaSnart();
  setTimeout(() => sms('rolf', 'Hörru. Vill du följa me på rundan? Morgonkontoret, konditoriet o ett ställe ja aldrig visat nån. Hoppa in när ja tutar vid tippen. /R'), 6000);
}
function rolfSager(text) { const t = rolfDialekt(text, false).replace('​', ''); prata('rolf', t); return t; }
const RESA = [
  { titel: 'Morgonkontoret', sub: 'Macken vid riksvägen, 06:40', rad: 'Hä sitter vi varje morron. Lasse, Gunnar o ja. Lasse har kört buss i 38 år. Gunnar har aldrig sagt varför han e hä. Vi frågar int. Ta en bulle, ja bjuder.',
    val: [['Kanelbulle', 'Lasse nickar. "Rätt val, unge." Gunnar säger ingenting, men han flyttar på sig så du får sitta.', 2], ['Vaniljbulle', 'Gunnar tittar upp för första gången. "Vanilj." Han nickar långsamt. Rolf viskar: "Han gillar dej. De har aldrig hänt."', 4], ['Köp bullar åt alla', 'Det blir tyst vid bordet. Sen klappar Lasse dig på axeln. "Den här e bra, Rolf." Rolf rodnar.', 6]] },
  { titel: 'Konditoriet', sub: 'Brunnsgatan, efter lunch', rad: 'Ja tar alltid en bit prinsesstårta hä. Birgitta o ja gick hit. Varje fredag. I tjugo år.',
    val: [['Fråga om Birgitta', 'Rolf tittar ut genom fönstret länge. "Hon dog för sju år sen. Hon skulle ha gillat dej. Hon gillade folk som fixar saker." Han skjuter över halva tårtbiten till dig.', 6], ['Säg att tårtan är god', '"Den e bäst i länet," säger Rolf. "Birgitta tyckte de oxå." Han ler lite. Sen tar han en bit till.', 2]] },
  { titel: 'Det hemliga stället', sub: 'Gamla grustaget bakom kraftledningen', rad: 'Hä har ja samlat grejer i trettio år. Folk slänger de finaste sakerna. Välj tre till flaket. O ta kolfibern, ja har tolv rullar ja aldrig använt.', fynd: true },
];
function startaResa() {
  if (S.resa !== 'bjuden') return;
  S.resa = 'pagar'; spelare.aktiv = false; sparaSnart();
  const sl = document.createElement('div');
  sl.style.cssText = 'position:fixed;inset:0;z-index:38;background:#05070f;opacity:0;transition:opacity 1s;display:grid;place-items:center;color:#fff;font:700 26px system-ui;text-align:center';
  sl.innerHTML = '🚛 Du hoppar in hos Rolf …<br><span style="font-size:16px;opacity:.7">Det luktar diesel, kaffe och katt.</span>';
  document.body.appendChild(sl); requestAnimationFrame(() => { sl.style.opacity = '1'; });
  setTimeout(() => { sl.remove(); resaSteg(0); }, 2600);
}
function resaSteg(i) {
  // ett av de två vardagsstoppen (slumpas en gång) + det hemliga stället – resten berättar Rolf om på sms
  if (S.resaStopp == null) { S.resaStopp = Math.random() < 0.5 ? 0 : 1; sparaSnart(); }
  const ordning = [S.resaStopp, 2];
  if (i >= ordning.length) return slutaResa();
  const st = RESA[ordning[i]];
  const rad1 = rolfSager(st.rad);
  if (st.fynd) {
    const valda = new Set();
    const rita = () => {
      const kropp = `<div style="padding:12px 16px;font-size:16px;line-height:1.5">${rad1}</div>` + sektion(`Välj tre till flaket (${valda.size}/3)`) + grid(RESA_FYND.map((id) => uiRuta({ bild: tumme(id), attr: `data-fynd="${id}"`, vald: valda.has(id), titel: VAROR[id].namn, pris: `+${VAROR[id].trivsel}`, prisTyp: 'plus' })))
        + `<div style="padding:12px 16px">${knapp({ text: valda.size === 3 ? 'Lasta flaket och åk hem' : 'Välj tre saker', typ: valda.size === 3 ? 'gron' : 'neutral', attr: `data-klar${valda.size === 3 ? '' : ' disabled'}`, ikon: 'bock' })}</div>`;
      oppnaRuta(panel({ portrattVem: 'rolf', titel: st.titel, sub: st.sub, kropp }), (el) => {
        el.querySelectorAll('[data-fynd]').forEach((k) => { k.onclick = () => { const id = k.dataset.fynd; if (valda.has(id)) valda.delete(id); else if (valda.size < 3) valda.add(id); ljud.plock(); rita(); }; });
        const kl = el.querySelector('[data-klar]'); if (kl && valda.size === 3) kl.onclick = () => { for (const id of valda) laggTill(id); laggTill('rulle3', 12); S.resaFynd = [...valda]; resaSteg(i + 1); };
        el.querySelectorAll('[data-stang]').forEach((k) => { k.onclick = () => {}; });
      });
    };
    return rita();
  }
  const kropp = `<div style="padding:12px 16px;font-size:16px;line-height:1.5">${rad1}</div>` + st.val.map(([t], j) => `<div style="padding:4px 16px">${knapp({ text: t, typ: 'neutral', attr: `data-val="${j}"` })}</div>`).join('');
  oppnaRuta(panel({ portrattVem: 'rolf', titel: st.titel, sub: st.sub, kropp }), (el) => {
    el.querySelectorAll('[data-val]').forEach((k) => { k.onclick = () => {
      const [, svar, r] = st.val[+k.dataset.val]; ljud.plock();
      oppnaRuta(panel({ portrattVem: 'rolf', titel: st.titel, sub: st.sub, kropp: `<div style="padding:12px 16px;font-size:16px;line-height:1.5">${svar}</div><div style="padding:12px 16px">${knapp({ text: 'Vidare', typ: 'gron', attr: 'data-vidare', ikon: 'pil' })}</div>` }), (el2) => {
        el2.querySelector('[data-vidare]').onclick = () => { andraRespekt(r, 'Rundan med Rolf: ' + st.titel.toLowerCase()); resaSteg(i + 1); };
      });
    }; });
  });
}
function slutaResa() {
  ui.stangButik(); S.resa = 'klar'; S.dagTid = Math.max(S.dagTid || 0, DAG_LANGD * 0.6); spelare.aktiv = true; sparaSnart();
  konfetti(120); ljud.stor();
  ui.toast('🚛 Hemma igen! Tolv rullar kolfiber och tre saker från Rolfs hemliga ställe ligger i dina saker.', 'guld');
  setTimeout(() => sms('rolf', 'Tack för sällskapet. Ja har int haft nån i bilen sen Birgitta. Kajsa räknas int, hon sover. Vi tar en runda till nån gång. /R'), 15000);
  setTimeout(() => sms('mamma', 'Pappa säger att du åkt SOPBIL hela dagen?! Hade du bilbälte?? Var det rent?? Åt du något?'), 30000);
}
interaktor.registrera(sopbil, { text: () => S.resa === 'bjuden' && bil.fas !== 'borta' ? '🚛 Hoppa in hos Rolf – följ med på rundan' : '', kanAktivera: () => S.resa === 'bjuden' && bil.fas !== 'borta', aktivera: () => startaResa() });

// fynd ute i skogen – den som utforskar hittar saker
S.fynd = S.fynd || [];
let oppnadGrans = '';
const FYND = [
  { id: 'volvo', mark: 'norr', x: 4, z: -TOMT - 14, namn: 'En gammal Volvo 240, halvt begravd', ger: () => { S.mynt += 2500; laggTill('rulle3', 2); }, text: 'I bakluckan: 2 500 kr i en kaffeburk och två rullar kolfiber. Bengt-Åke hade rätt!', sms: ['rolf', 'Hitta du VOLVON?? Bengt-Åke har letat i trettio år. Säj int nåt till honom. /R'] },
  { id: 'kallare', mark: 'oster', x: TOMT + 15, z: 9, namn: 'En övervuxen jordkällare', ger: () => { laggTill('r_radio'); S.mynt += 900; }, text: 'Inne i källaren: en gammal rörradio som fortfarande spelar dansband, och 900 kr i en syltburk.', sms: ['mamma', 'Pappa säger att du hittat en RADIO i en källare. Är den smittad?? Torka av den!'] },
  { id: 'husvagn', mark: 'tippkant', x: TIPP.x - TIPP.r - 12, z: 2, namn: 'En rostig husvagn från -78', ger: () => { laggTill('rulle2', 3); S.mynt += 1200; }, text: 'Någon har bott här. I skåpet: tre rullar röd PETG och 1 200 kr. Och en lapp: "Hej då. /B".', sms: ['rolf', 'Husvagnen? Ja bodde dä innan ja flytta till tippen. Den lappen e från Birgitta. Behåll pengarna. /R'] },
];
function byggFynd(f) {
  const g = new THREE.Group();
  if (f.id === 'volvo') { g.add(at(box(1.8, 0.9, 4.2, mat(0x2a4a7a)), 0, 0.25, 0), at(box(1.6, 0.6, 2, mat(0x2a4a7a)), 0, 0.95, -0.2), at(box(1.5, 0.5, 1.9, mat(0x8ab0c8, { emissive: 0x112233 })), 0, 0.97, -0.2)); g.rotation.set(0.15, 0.6, 0.1); }
  else if (f.id === 'kallare') { g.add(at(new THREE.Mesh(new THREE.SphereGeometry(2, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x5a7a3a)), 0, 0, 0), at(box(1.2, 1.4, 0.3, mat(0x8a8a85)), 0, 0.7, 1.85), at(box(0.8, 1.1, 0.05, mat(0x5a3a20)), 0, 0.55, 2.01)); }
  else { g.add(at(box(2.2, 2, 4.5, mat(0xd8d0b8)), 0, 1.2, 0), at(box(2.25, 0.4, 4.55, mat(0x9a5a2a)), 0, 0.9, 0), at(box(0.9, 0.6, 0.05, mat(0x8ab0c8)), 0, 1.5, 2.26)); for (const z of [-1, 1]) g.add(at(cyl(0.35, 0.35, 0.2, mat(0x222222)), 1.15, 0.35, z * 1.2).rotateZ(Math.PI / 2)); g.rotation.set(0, 0.4, 0.05); }
  traffYta(g, 3, 2.2, 4.5);
  g.position.set(f.x, 0, f.z); g.visible = false; scen.add(g); f.g = g;
  interaktor.registrera(g, { text: () => g.visible ? `🔍 Undersök: ${f.namn}` : '', kanAktivera: () => g.visible, aktivera: () => {
    if (S.fynd.includes(f.id)) return; S.fynd.push(f.id); f.ger(); g.visible = false; konfetti(60); ljud.stor();
    oppnaRuta(panel({ ikon: 'stjarna', titel: 'Du hittade något!', sub: f.namn, kropp: `<div style="padding:14px 16px;font-size:16px;line-height:1.5">${f.text}</div>` }));
    andraRespekt(3, 'Utforskade ' + f.namn.toLowerCase()); setTimeout(() => sms(f.sms[0], f.sms[1]), 6000); sparaSnart();
  } });
}
// kolla regelbundet om ny mark blivit tillgänglig (respekten kan växa när som helst)
// Bengt-Åke skriker från skogen när man går nära staketet
const BENGT_SKRIK = ['BORT FRÅN MITT STAKET FÖR FAN!', 'JAG SER DIG! JAG HAR KIKARE!', 'EN GÅNG TILL SÅ SLÄPPER JAG LÖS HUNDEN!', 'DRA ÅT HELVETE, SOPUNGE!', 'DETTA ÄR PRIVAT MARK, JÄVLAR!', 'JAG RINGER POLISEN! … NÄR JAG HITTAR TELEFONEN!'];
let bengtTid = 0;
function kollaBengt(dt) {
  bengtTid -= dt; if (bengtTid > 0 || !ui.igang || sover) return;
  const g = spelare.granser, p = spelare.pos, kant = Math.min(p.x - g.minX, g.maxX - p.x, p.z - g.minZ, g.maxZ - p.z);
  if (kant > 1.6 || Math.abs(p.z - VAG_Z) < 4) return;
  if (agerMark('egen') && S.respekt >= 60) return;   // nu känner han dig – han skriker inte längre
  bengtTid = 40;
  S.bengtSkrik = (S.bengtSkrik || 0) + 1;
  const t = BENGT_SKRIK[(S.bengtSkrik - 1) % BENGT_SKRIK.length];
  ui.toast(`😡 Någon skriker från skogen: "${t}"`, 'fel'); argtSkrik();
}
function argtSkrik() {   // ett grovt, argt vrål långt borta
  const c = lac; if (!c) return;
  const t = c.currentTime, o = c.createOscillator(), o2 = c.createOscillator(), g = c.createGain(), lp = c.createBiquadFilter();
  o.type = 'sawtooth'; o2.type = 'square'; lp.type = 'bandpass'; lp.frequency.value = 600; lp.Q.value = 1.4;
  for (const [i, f] of [[0, 170], [0.25, 210], [0.55, 150]]) { o.frequency.setValueAtTime(f, t + i); o2.frequency.setValueAtTime(f * 1.5, t + i); }
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.05, t + 0.05); g.gain.setValueAtTime(0.05, t + 0.8); g.gain.exponentialRampToValueAtTime(0.001, t + 1.1);
  o.connect(lp); o2.connect(lp); lp.connect(g); g.connect(c.destination); o.start(t); o2.start(t); o.stop(t + 1.2); o2.stop(t + 1.2);
}
let markKollTid = 0;
function kollaTillgang(dt) {
  markKollTid += dt; if (markKollTid < 2) return; markKollTid = 0;
  const fore = oppnadGrans; uppdateraMark();
  if (fore && fore !== oppnadGrans) ui.toast('🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger.', 'guld');
}
// ---------- Ett riktigt hus på ängen: två rum, kök, soffa och en trappa upp till en sovloft ----------
const storHus = new THREE.Group();
{
  const HX = TOMT + 11, HZ = -6, W = 8, D = 6, VAN = 2.6, H = 5.0, T = 0.15;
  const vagg = mat(0xc84a3a), vit = mat(0xf2efe6), golv = mat(0xb08858), tra = mat(0x8a6a3f), tak = mat(0x3a3a3a);
  const del = (w, h, d, m, x, y, z, hinder = true) => {
    const b = box(w, h, d, m); b.position.set(x, y, z); storHus.add(b);
    if (hinder) husHinder.push(new THREE.Box3(new THREE.Vector3(HX + x - w / 2, y - h / 2, HZ + z - d / 2), new THREE.Vector3(HX + x + w / 2, y + h / 2, HZ + z + d / 2)));
    return b;
  };
  // golv (inte hinder – man går på det)
  del(W, 0.06, D, golv, 0, 0.03, 0, false);
  // ytterväggar: falurött med vita knutar, dörröppning mot tomten (väster)
  del(W, H, T, vagg, 0, H / 2, -D / 2); del(W, H, T, vagg, 0, H / 2, D / 2); del(T, H, D, vagg, W / 2, H / 2, 0);
  del(T, H, (D - 1.2) / 2, vagg, -W / 2, H / 2, -D / 4 - 0.3); del(T, H, (D - 1.2) / 2, vagg, -W / 2, H / 2, D / 4 + 0.3); del(T, H - 2.1, 1.2, vagg, -W / 2, 2.1 + (H - 2.1) / 2, 0);
  for (const [x, z] of [[-W / 2, -D / 2], [W / 2, -D / 2], [-W / 2, D / 2], [W / 2, D / 2]]) del(0.22, H + 0.1, 0.22, vit, x, (H + 0.1) / 2, z, false);
  // ljusa innerväggar (panel) så att det inte är knallrött inne
  const panel = mat(0xefe6d2);
  del(W - 0.3, H - 0.1, 0.03, panel, 0, H / 2, -D / 2 + 0.09, false); del(W - 0.3, H - 0.1, 0.03, panel, 0, H / 2, D / 2 - 0.09, false); del(0.03, H - 0.1, D - 0.3, panel, W / 2 - 0.09, H / 2, 0, false);
  del(0.03, H - 0.1, (D - 1.2) / 2 - 0.15, panel, -W / 2 + 0.09, H / 2, -D / 4 - 0.35, false); del(0.03, H - 0.1, (D - 1.2) / 2 - 0.15, panel, -W / 2 + 0.09, H / 2, D / 4 + 0.35, false);
  // fönster med vita karmar
  for (const [x, z, ry] of [[-2, D / 2 + 0.08, 0], [2, D / 2 + 0.08, 0], [-2, -D / 2 - 0.08, 0], [2, -D / 2 - 0.08, 0], [2, D / 2 + 0.08, 0], [W / 2 + 0.08, 0, Math.PI / 2]]) for (const y of [1.4, 3.9]) {
    const f = new THREE.Group(); f.position.set(x, y, z); f.rotation.y = ry; storHus.add(f);
    f.add(at(box(1.0, 1.1, 0.04, vit), 0, 0, 0), at(box(0.86, 0.96, 0.05, mat(0x9ad0ff, { emissive: 0x1a2a3a })), 0, 0, 0.005), at(box(0.04, 0.96, 0.06, vit), 0, 0, 0.01), at(box(0.86, 0.04, 0.06, vit), 0, 0, 0.01));
  }
  // innervägg mellan rummen (öppning vid trappan)
  del(T, VAN, D - 1.6, vit, 0, VAN / 2, -0.8);
  // trappa längs södra väggen i östra rummet: tio steg à 0,26 m
  for (let i = 0; i < 10; i++) { del(0.32, 0.26 * (i + 1), 0.8, tra, 0.6 + i * 0.32, 0.13 * (i + 1), D / 2 - 0.55); husHinder[husHinder.length - 1].trapp = true; }
  // sovloft över östra rummet
  del(W / 2 - 0.2, 0.12, D - 1.3, golv, W / 4, VAN, -0.55);
  del(0.06, 0.9, D - 1.3, tra, 0.12, VAN + 0.5, -0.55, false);           // räcke
  // tak: sadeltak
  const t1 = box(W + 0.8, 0.12, D / 2 + 0.7, tak); t1.position.set(0, H + 0.8, -D / 4); t1.rotation.x = -0.48; storHus.add(t1);
  const t2 = box(W + 0.8, 0.12, D / 2 + 0.7, tak); t2.position.set(0, H + 0.8, D / 4); t2.rotation.x = 0.48; storHus.add(t2);
  { const tri = new THREE.Shape(); tri.moveTo(-D / 2, 0); tri.lineTo(D / 2, 0); tri.lineTo(0, 1.55); tri.lineTo(-D / 2, 0);
    for (const x of [-W / 2, W / 2]) { const g = new THREE.Mesh(new THREE.ExtrudeGeometry(tri, { depth: 0.15, bevelEnabled: false }), vagg); g.rotation.y = Math.PI / 2; g.position.set(x - 0.075, H, 0); storHus.add(g); } }
  // inredning: kök och soffa nere, säng och matta på loftet
  del(2.2, 0.9, 0.6, vit, -2.6, 0.45, -D / 2 + 0.4); del(2.2, 0.06, 0.62, mat(0x555555), -2.6, 0.93, -D / 2 + 0.4, false);
  del(1.8, 0.45, 0.8, mat(0x2e6b8a), -2.2, 0.25, 1.6); del(1.8, 0.5, 0.2, mat(0x2e6b8a), -2.2, 0.6, 1.95, false);
  del(1.9, 0.4, 1.0, mat(0xf0e6d0), 2.6, VAN + 0.26, -1.9, false); del(1.9, 0.5, 0.1, tra, 2.6, VAN + 0.4, -2.45, false);
  del(1.6, 0.02, 1.2, mat(0xb03a3a), 1.6, VAN + 0.07, -0.4, false);
  const lampa = new THREE.PointLight(0xffd9a0, 6, 9); lampa.position.set(0, VAN - 0.3, 0); storHus.add(lampa);
  storHus.position.set(HX, 0, HZ); storHus.visible = false; scen.add(storHus);
  storHus.traverse((o) => { if (o.isMesh) o.castShadow = o.receiveShadow = true; });
}
// Rolfs garage och hus vid tippen
const rolfHus = new THREE.Group();
{
  const vagg = mat(0xb03a2e), vit = mat(0xf2efe6), tak = mat(0x3a3a3a), tra = mat(0x8a6a3f);
  rolfHus.add(at(box(4.6, 3.2, 6, vagg), 0, 1.6, 0), at(box(4.9, 0.2, 6.3, tak), 0, 3.3, 0), at(box(3.4, 2.6, 0.05, vit), 0, 1.3, 3.01));   // garaget
  for (let i = 0; i < 6; i++) rolfHus.add(at(box(3.4, 0.03, 0.06, mat(0xd8d4c8)), 0, 0.3 + i * 0.42, 3.05));
  const hus = new THREE.Group(); hus.position.set(5.2, 0, 0.5);
  hus.add(at(box(4, 2.6, 4, mat(0xe8c84a)), 0, 1.3, 0), at(box(0.9, 1.9, 0.05, mat(0x5a3a20)), 0, 0.95, 2.01));
  for (const x of [-1.3, 1.3]) hus.add(at(box(0.8, 0.8, 0.05, mat(0x9ad0ff, { emissive: 0x334455 })), x, 1.5, 2.01));
  const t1 = box(4.6, 0.12, 2.6, tak); t1.position.set(0, 3.2, -1.05); t1.rotation.x = 0.5; hus.add(t1); const t2 = box(4.6, 0.12, 2.6, tak); t2.position.set(0, 3.2, 1.05); t2.rotation.x = -0.5; hus.add(t2);
  hus.add(at(box(4, 0.15, 1.6, tra), 0, 0.3, 2.8));                                  // verandan
  for (const x of [-1.9, 1.9]) hus.add(at(box(0.1, 1.2, 0.1, tra), x, 0.9, 3.5));
  hus.add(at(box(0.7, 0.45, 0.6, mat(0x2e8b57)), 1.2, 0.6, 2.8));                     // Rolfs stol
  rolfHus.add(hus);
  const sk = skylt('ROLF & KAJSA', 1.6, 0.36, '#f4ecd8', '#7a2020'); sk.position.set(5.2, 2.2, 2.55); rolfHus.add(sk);
  rolfHus.position.set(TIPP.x - 2, 0, TIPP.z - TIPP.r - 9); rolfHus.rotation.y = 0; rolfHus.visible = false; scen.add(rolfHus);
  rolfHus.traverse((o) => { if (o.isMesh) o.castShadow = o.receiveShadow = true; });
}
// Folkbokföringen: dag 14 trillar poletten ner. Målet blir att bli skriven här.
const kanFolkbokfora = () => MARK_TOMTER.every((t) => agerMark(t.id)) && !S.folkbokford;
function kollaPolett() {
  if (S.folkbokMal || S.dag < 14) return;
  S.folkbokMal = true; markTavla.visible = true; S.mark.tips = true; sparaSnart();
  setTimeout(() => sms('mamma', 'Paketet kom TILLBAKA. Det står "Okänd mottagare". Är du ens skriven där?? Vart ska jag skicka din POST?!'), 4000);
  setTimeout(() => visaLapp('polett'), 9000);
  setTimeout(() => ui.toast('💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen).', 'guld'), 12000);
  setTimeout(() => sms('bror', 'Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte.'), 30000);
}
function folkbokfor() {
  if (!kanFolkbokfora()) return;
  S.folkbokford = true; S.folkbokDag = S.dag; ui.stangButik(); sparaSnart();
  konfetti(260); fanfar(); ljud.stor();
  andraRespekt(30, 'Folkbokförd på Soptippsvägen 1');
  ui.toast('📮 Du är folkbokförd! Soptippsvägen 1 är din adress.', 'guld');
  setTimeout(() => { konfetti(200); visaLapp('mammaslut'); }, 5000);
  setTimeout(() => sms('rolf', 'Grattis granne. Nu e du på riktigt. Ja tar me grillen på lördag. Kajsa oxå. /R'), 20000);
  setTimeout(() => sms('bror', 'Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis brorsan. Eller vad du nu är. Du vet.'), 32000);
  setTimeout(() => ui.visaStart('🏆 Du är hemma', `<b>Du klarade det på dag ${S.dag}.</b><br>Från hobo dweller vid en soptipp till godsägare och folkbokförd. Mamma är imponerad. Pappa log.<br><br>Spelet fortsätter – bygg vidare så länge du vill.`, 'Fortsätt bygga'), 45000);
}
FYND.forEach(byggFynd); kollaResa();
uppdateraMark(); kollaMarkTips(); kollaPolett(); uppdateraArstid();

// ---------- Bokmärken: varje dag sparas så att man kan hoppa tillbaka i storyn ----------
const BOKMARKE_NYCKEL = 'spar:printa-hem:dagar';
const BOKMARKE_MAX = 40;
function lasBokmarken() { try { return JSON.parse(localStorage.getItem(BOKMARKE_NYCKEL) || '[]'); } catch { return []; } }
function sparaDagBokmarke() {
  try {
    samlaOchSpara(false);
    const lista = lasBokmarken().filter((b) => b.dag !== S.dag);
    const mal = STEG[S.steg]?.del || 'Fritt bygge';
    lista.push({ dag: S.dag, tid: Date.now(), mal, trivsel: trivsel(), respekt: S.respekt, mynt: S.mynt, data: JSON.stringify(S) });
    lista.sort((a, b) => a.dag - b.dag);
    while (lista.length > BOKMARKE_MAX) lista.shift();
    localStorage.setItem(BOKMARKE_NYCKEL, JSON.stringify(lista));
  } catch (e) { console.warn('bokmärke', e); }
}
function oppnaBokmarken() {
  const lista = lasBokmarken();
  const kropp = sektion('Varje ny dag sparas som ett bokmärke. Hoppa tillbaka för att se var du var i storyn – din nuvarande dag sparas först i en sparplats.')
    + (lista.length ? lista.slice().reverse().map((b) => rad({ bild: `<span class="ui-headik" style="width:48px;height:48px;font:800 18px system-ui;display:grid;place-items:center;background:#2d5cbf;color:#fff;border-radius:12px">${b.dag}</span>`, titel: `Dag ${b.dag}` + (b.dag === S.dag ? ' (idag)' : ''), text: `${b.mal} · ${b.mynt.toLocaleString('sv-SE')} kr · respekt ${b.respekt} · ${new Date(b.tid).toLocaleString('sv-SE', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}`, hoger: knapp({ text: 'Hoppa hit', typ: 'neutral', attr: `data-dag="${b.dag}"` }) })).join('') : '<div class="ph-resp-rad">Inga bokmärken än. Sov en natt så sparas dag 2.</div>');
  oppnaRuta(panel({ ikon: 'bok', titel: 'Dagar', sub: `Du är på dag ${S.dag}`, kropp }), (el) => {
    el.querySelectorAll('[data-dag]').forEach((k) => { k.onclick = async () => {
      const b = lasBokmarken().find((x) => x.dag === Number(k.dataset.dag)); if (!b) return;
      if (!confirm(`Hoppa till dag ${b.dag}? Där du är nu sparas först på en ledig sparplats (K).`)) return;
      k.disabled = true;
      try { await sparaPaLedigPlats(); } catch {}
      const d = JSON.parse(b.data); d.sparadTid = Date.now(); spar.data = d; spar.spara(true);
      try { await MOLN?.ref?.set({ spar: JSON.stringify(d), tid: Date.now() }); } catch {}
      location.reload();
    }; });
  });
}

if (!lasBokmarken().some((b) => b.dag === S.dag)) setTimeout(sparaDagBokmarke, 5000);   // dagens bokmärke finns alltid
raknaOmSteg(); visaPostInne(); uppdateraSkjul(); visaAdressSkylt(); ritaRullstall();
// den som redan klarat kapitel 1 innan kapitel 2 fanns ska inte få firandet igen
if (S.kapitelKlart && S.steg < STEG.findIndex((x) => x.del === K2)) S.steg = STEG.findIndex((x) => x.del === K2);
// ---------- Introt: varför bor du vid en soptipp? ----------
const MAMMA_SVAR_K1 = ['HAHA träplankor?!', 'Vad är det för skit? Du har ju inte ens TAPETER på väggarna.', 'Och var är badrummet?? Du duschar väl??', 'Pappa säger "aha, vad lugnt då". Pappa säger det om allt.'];
// sista raden: mamma säger något fint om det du faktiskt har
const MAMMA_K1_SLUT = { gardin: '…men gardinerna i fönstret var fina. Har du gjort dem själv? ❤️', fonster: '…men fönstret var fint. Det kommer in ljus i alla fall. ❤️', annars: '…men du har en säng. Det är en början. Jag är stolt. Säg inte det till pappa. ❤️' };
const mammaK1Slut = () => harPlacerat('r_gardin') ? MAMMA_K1_SLUT.gardin : (S.hem?.fonster?.length ? MAMMA_K1_SLUT.fonster : MAMMA_K1_SLUT.annars);
const MAMMA_SVAR_K2 = ['Mamma här. Du skickade en bild på en JACUZZI?!', '…och tapeter. Och en gamingbod med lampor i alla färger.', 'Okej. Jag erkänner. Det är finare än hemma.', 'Kan jag komma och bada på söndag? Pappa tar med korv.'];
// allt som sägs högt i spelet – används för att förgenerera rösterna (verktyg/roster.py)
function rostManus() {
  const L = [], add = (vem, t) => { if (!t || typeof t !== 'string') return; if (vem === 'rolf') { L.push([vem, rolfDialekt(t, true).replace('\u200b', '')], [vem, rolfDialekt(t, false).replace('\u200b', '')]); } else L.push([vem, t]); };
  ROLF.forEach((x) => { add('rolf', x.brev); add('rolf', x.tack); });
  ROLF_IBLAND.forEach((t) => add('rolf', t));
  ROLF_JOBB.forEach((x) => { add('rolf', x.brev); add('rolf', x.tackJa); add('rolf', x.tackNej); });
  CHEFEN.forEach((t) => add('chefen', t));
  RESA.forEach((x) => add('rolf', x.rad));
  [PAPPA_SCEN, ...PAPPA_KORT, PAPPA_SLUT, ...PAPPA_DRYG, PAPPA_DRYG_SLUT].flat().forEach(([v, t]) => { if (t !== '…') add(v, t); });
  SMS_POOL.forEach((m) => { add(m.vem, m.text); (m.svar || []).forEach(([, f]) => add(m.vem, f)); });
  Object.values(FAMILJ).flat().forEach(([v, t]) => add(v, t));
  BROR_IBLAND.forEach((t) => add('bror', t)); MAMMA_IBLAND.forEach((t) => add('mamma', t));
  [...MAMMA_SVAR_K1, ...Object.values(MAMMA_K1_SLUT)].forEach((t) => add('mamma', t)); MAMMA_SVAR_K2.forEach((t) => add('mamma', t));
  [...ALI_HEJ, ...ALI_KLICKAR, ...ALI_BLOMMAR].forEach((t) => add('ali', t)); add('ali', ALI_FORSTA); ALI_STANGT.forEach((t) => add('ali', t)); Object.values(ALI_SPECIAL).forEach((t) => add('ali', t));
  const stolt = [...Object.values(MASKINER).map((m) => m.namn), ...Object.values(VAROR).filter((v) => v.recept).map((v) => v.namn)];
  for (const n of stolt) ALI_STOLT.forEach((f) => add('ali', f(n.toLowerCase())));
  for (const n of [...Object.values(MASKINER).filter((m) => !ALI_SPECIAL[Object.keys(MASKINER).find((k) => MASKINER[k] === m)]).map((m) => m.namn), 'Säng']) {
    for (const t of [`Ali här. Satt uppe med AI:n hela natten. ${n} är klar. Kom innan nio, då stänger jag och promptar nästa.`, `Ali här. Ny instruktion inne: ${n}. Kom innan nio. Jag stänger nio. Inte en minut senare.`, `${n} har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt.`, `Ny grej: ${n}. Köp den så jag slipper titta på den.`]) add('ali', t);
  }
  Object.entries(LAPPAR).forEach(([id, [titel, t]]) => add(vemAvTitel(titel), t));
  INTRO.forEach((x) => add(x.talare || (x.bubbla ? (x.du ? 'du' : 'mamma') : 'berattare'), x.bubbla || x.text));
  Object.values(STEG_TAL).forEach((t) => add('berattare', t));
  add('du', DU_BYGG); Object.values(FORSTA).forEach((f) => add('du', f.rost)); Object.values(COACH).forEach((t) => add('du', t)); add('du', DU_SANG); Object.values(VARN).forEach((t) => add('du', t)); add('ali', ALI_ROP); add('ali', ALI_BONUS_FORSTA); ALI_BONUS_RAD.forEach(([, t]) => add('ali', t)); PUFFAR.forEach((p) => add('du', p.text));
  return L;
}
const INTRO = [
  { scen: '🍕📦🥤<br>🧦🎮🥫🧦<br>📦🍕🧃📦', text: 'Ditt rum. Ungefär som vanligt.' },
  { scen: '📅 Måndag', bubbla: 'Städa ditt rum!', vem: 'Mamma' },
  { scen: '📅 Tisdag', bubbla: 'Har du städat? Jag sa ju STÄDA!', vem: 'Mamma' },
  { scen: '📅 Onsdag', bubbla: 'Det LUKTAR härifrån! Jag säger det inte igen!', vem: 'Mamma' },
  { scen: '📅 Torsdag', text: 'Hon sa det igen. Och igen. Och igen.' },
  { scen: '🚪💥', bubbla: 'Det ser ut som en SOPTIPP här inne!', vem: 'Mamma (fredag)', ljud: 'stor' },
  { scen: '😤👉🚪', bubbla: 'Vet du vad? Du kan lika gärna BO på en soptipp!', vem: 'Mamma' },
  { scen: '😐 …', bubbla: 'Okej då. Då gör jag det.', vem: 'Du', du: true },
  { scen: '🎒 + 🖨️', musik: true, text: 'Du packar det viktigaste: en ryggsäck och storebrors gamla 3D-skrivare. Den är långsam, den låter konstigt – men den funkar.' },
  { scen: '🌳🏚️🗑️🚛', text: 'I utkanten av stan ligger soptippen. Bredvid den: ett gammalt, tomt skjul och en gård full av skräp.' },
  { scen: '🧴➡️⚙️➡️🧵➡️🖨️', text: 'Men skräp är plast. Plast kan bli filament. Och med filament kan man printa… allt.' },
  { scen: '🏚️➡️🏡🎮🛋️', text: 'Plan: bygga ett eget hem. Täta väggar, en riktig dörr, plåttak – och en gamingsetup. En lugn fristad. Utan tjat.', titel: logo({ bredd: 460, under: false }) },
];
INTRO.forEach((p, i) => { p.bild = INTRO_BILDER[i]; });
const figurBild = (vem, farg) => `<div style="display:grid;place-items:center;width:min(300px,70vw);height:200px;margin:0 auto;border-radius:16px;background:${farg}">${portratt(vem, 170)}</div>`;
const introCss = document.createElement('style');
introCss.textContent = `
.ph-intro{position:fixed;inset:0;z-index:70;display:grid;place-items:center;background:radial-gradient(circle at 50% 40%,#2a2440,#0b0a14);font-family:system-ui,sans-serif;color:#fff;cursor:pointer;user-select:none}
.ph-intro-kort{width:min(560px,90vw);text-align:center;animation:phIn .5s cubic-bezier(.2,.9,.3,1.2)}
.ph-intro-scen{font-size:clamp(44px,10vw,84px);line-height:1.25;margin-bottom:22px;filter:drop-shadow(0 8px 14px rgba(0,0,0,.5))}
.ph-intro-svg{width:min(420px,80vw);height:auto;display:block;margin:0 auto;border-radius:12px}
.ph-intro-text{font:500 clamp(17px,2.6vw,22px)/1.5 system-ui;opacity:.92;min-height:3em}
.ph-intro-bubbla{display:inline-block;background:#fff;color:#222;font:800 clamp(20px,3.4vw,30px)/1.3 system-ui;padding:16px 22px;border-radius:22px 22px 22px 6px;box-shadow:0 10px 30px rgba(0,0,0,.4);max-width:92%}
.ph-intro-bubbla.du{border-radius:22px 22px 6px 22px;background:#ffd43b}
.ph-intro-info{font:600 17px/1.4 system-ui;opacity:.8;max-width:520px;margin:14px auto 0}
.ph-intro-vem{font:800 13px system-ui;letter-spacing:.12em;opacity:.6;margin-bottom:8px;text-transform:uppercase}
.ph-intro-titel{font:900 clamp(40px,8vw,72px)/1 system-ui;letter-spacing:.04em;margin-top:18px;background:linear-gradient(90deg,#7dffb0,#3de3ff,#ffd43b);-webkit-background-clip:text;background-clip:text;color:transparent}
.ph-intro-nere{position:fixed;bottom:22px;left:0;right:0;display:flex;justify-content:center;gap:18px;font:600 14px system-ui;opacity:.65}
.ph-intro-prickar span{display:inline-block;width:8px;height:8px;border-radius:50%;background:#fff;opacity:.3;margin:0 3px}.ph-intro-prickar span.pa{opacity:1}
.ph-intro-hoppa{position:fixed;top:18px;right:20px;background:rgba(255,255,255,.12);border:0;color:#fff;font:700 14px system-ui;padding:8px 14px;border-radius:999px;cursor:pointer}
.ph-intro-kort.skak{animation:phSkak .4s}@keyframes phSkak{20%{transform:translateX(-14px) rotate(-2deg)}40%{transform:translateX(12px) rotate(2deg)}60%{transform:translateX(-8px)}80%{transform:translateX(5px)}}
`;
document.head.appendChild(introCss);
// hoppfull musik i introt från "Du packar det viktigaste" – byggs upp lager för lager (Web Audio, inga filer)
const introMusik = (() => {
  let timer = null, master = null, nasta = 0, steg = 0;
  const BPM = 84, ST = 60 / BPM / 2;   // åttondelar
  const hz = (n) => 440 * 2 ** ((n - 69) / 12);
  // D – A – Bm – G (I–V–vi–IV), midi-toner
  const ACK = [[62, 66, 69], [57, 61, 64], [59, 62, 66], [55, 59, 62]];
  const MELODI = [78, 76, 74, 76, 78, 81, 78, 76, 73, 74, 76, 73, 71, 73, 74, 71];
  function not(c, f, t, d, vol, typ, attack = 0.01, dest = master) {
    const o = c.createOscillator(), g = c.createGain(); o.type = typ; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g).connect(dest); o.start(t); o.stop(t + d + 0.05);
  }
  function schema() {
    const c = ljudCtx(); if (!c || !master) return;
    while (nasta < c.currentTime + 0.3) {
      const takt = Math.floor(steg / 8), i = steg % 8, ack = ACK[takt % 4], t = nasta;
      if (i === 0) {   // pad + bas
        for (const n of ack) { not(c, hz(n), t, ST * 8.6, 0.035, 'triangle', 0.6); not(c, hz(n) * 1.004, t, ST * 8.6, 0.02, 'sine', 0.8); }
        not(c, hz(ack[0] - 24), t, ST * 3.5, 0.12, 'sine', 0.02);
      }
      if (i === 4) not(c, hz(ack[0] - 24), t, ST * 3, 0.09, 'sine', 0.02);
      if (takt >= 1) not(c, hz(ack[[0, 1, 2, 1, 2, 0, 1, 2][i]] + 12), t, ST * 1.6, 0.03, 'triangle', 0.005);   // arpeggio
      if (takt >= 4 && i % 2 === 0) { const m = MELODI[((takt - 4) * 4 + i / 2) % MELODI.length]; not(c, hz(m), t, ST * 2.6, 0.03, 'sine', 0.01); not(c, hz(m + 12), t, ST * 1.2, 0.008, 'sine', 0.01); }
      if (takt >= 6 && (i === 0 || i === 4)) { const o = c.createOscillator(), g = c.createGain(); o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.15); g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.2); o.connect(g).connect(master); o.start(t); o.stop(t + 0.25); }
      nasta += ST; steg++;
    }
  }
  return {
    start() {
      const c = ljudCtx(); if (!c || timer) return;
      master = c.createGain(); master.gain.setValueAtTime(0.0001, c.currentTime); master.gain.exponentialRampToValueAtTime(0.55, c.currentTime + 4);
      master.connect(c.destination); nasta = c.currentTime + 0.1; steg = 0; timer = setInterval(schema, 100); schema();
    },
    stopp(tid = 2) {
      if (!timer) return; clearInterval(timer); timer = null;
      const c = ljudCtx(), m = master; master = null;
      try { m.gain.cancelScheduledValues(c.currentTime); m.gain.setValueAtTime(m.gain.value, c.currentTime); m.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + tid); setTimeout(() => m.disconnect(), tid * 1000 + 200); } catch {}
    },
  };
})();
function visaIntro(klar) {
  const el = document.createElement('div'); el.className = 'ph-intro';
  document.body.appendChild(el);
  let i = 0;
  const visa = () => {
    const p = INTRO[i];
    el.innerHTML = `<button class="ph-intro-hoppa">Hoppa över</button>
      <div class="ph-intro-kort ${p.ljud === 'stor' ? 'skak' : ''}"><div class="ph-intro-scen">${p.bild || p.scen}</div>
      ${p.bubbla ? `<div class="ph-intro-vem">${rens(p.vem)}</div><div class="ph-intro-bubbla ${p.du ? 'du' : ''}">${p.bubbla}</div>` : `<div class="ph-intro-text">${p.text}</div>`}
      ${p.info ? `<div class="ph-intro-info">${p.info}</div>` : ''}
      ${p.titel ? `<div class="ph-intro-titel">${p.titel}</div>` : ''}</div>
      <div class="ph-intro-nere"><span class="ph-intro-prickar">${INTRO.map((_, j) => `<span class="${j <= i ? 'pa' : ''}"></span>`).join('')}</span><span>Klicka eller mellanslag för att fortsätta</span></div>`;
    el.querySelector('.ph-intro-hoppa').onclick = (e) => { e.stopPropagation(); slut(); };
    // berättarrösten läser varje ruta (vänta in röstfilerna första gången)
    Promise.race([rostKlar, new Promise((ok) => setTimeout(ok, 2000))]).then(() => { if (INTRO[i] === p) prata(p.talare || (p.bubbla ? (p.du ? 'du' : 'mamma') : 'berattare'), p.bubbla || p.text); });
    if (p.musik) introMusik.start();
    try { ljudCtx(); if (p.ljud === 'stor') { ton(90, 0.25, 0.25, 'square'); ton(60, 0.35, 0.2, 'sawtooth', 0.05); } else ljud.plock(); } catch {}
  };
  const nasta = () => { i++; if (i >= INTRO.length) slut(); else visa(); };
  const tangent = (e) => { if (['Space', 'Enter', 'ArrowRight', 'KeyE'].includes(e.code)) { e.preventDefault(); e.stopImmediatePropagation(); nasta(); } else if (e.code === 'Escape') { e.stopImmediatePropagation(); slut(); } };
  function slut() { tystna(); introMusik.stopp(S.introSett ? 2 : 6); removeEventListener('keydown', tangent, true); el.remove(); S.introSett = true; sparaSnart(); klar?.(); }
  // en startruta först: webbläsaren spelar bara upp ljud efter ett klick
  el.innerHTML = `<div class="ph-intro-kort"><div class="ph-intro-titel" style="margin:0 0 18px">${logo({ bredd: 480 })}</div><div class="ph-intro-text">Slå på ljudet – berättaren läser upp historien.</div><button class="fp-knapp" style="margin-top:22px">Börja</button></div>`;
  rostKlar.then(() => { for (const x of INTRO) { const k = rostKlipp(x.talare || (x.bubbla ? (x.du ? 'du' : 'mamma') : 'berattare'), x.bubbla || x.text); if (k) hamtaPack(k[0]); } });
  const borja = () => { el.onclick = nasta; addEventListener('keydown', tangent, true); try { ljudCtx(); } catch {} visa(); };
  el.onclick = (e) => { e.stopPropagation(); borja(); };
}
if (!S.introSett) visaIntro();

// ---------- Kapitel 1 klart: fanfar, konfetti, en bild till mamma … och hennes svar ----------
const kapCss = document.createElement('style');
kapCss.textContent = `
.ph-kap{position:fixed;inset:0;z-index:60;display:grid;place-items:center;font-family:system-ui,sans-serif;color:#fff;background:rgba(6,9,22,.55)}
.ph-kap-blixt{position:fixed;inset:0;z-index:61;background:#fff;opacity:0;pointer-events:none;transition:opacity .5s}
.ph-kap-rubrik{position:fixed;top:12%;left:0;right:0;text-align:center;font:900 clamp(34px,6vw,64px)/1 system-ui;text-shadow:0 6px 24px rgba(0,0,0,.5);animation:phIn .6s cubic-bezier(.2,.9,.3,1.3)}
.ph-kap-rubrik small{display:block;font:700 18px system-ui;opacity:.85;margin-top:10px}
.ph-konf{position:fixed;top:-20px;width:10px;height:16px;z-index:62;pointer-events:none;animation:phKonf linear forwards}
@keyframes phKonf{to{transform:translateY(110vh) rotate(720deg)}}
.ph-kap .ph-telefon{margin-top:12vh}
.ph-tel-bild{display:block;margin-left:auto;width:78%;border-radius:14px;border:3px solid #34c759;box-shadow:0 4px 12px rgba(0,0,0,.2)}
.ph-tel-jag{display:block;margin:6px 0 10px auto;width:fit-content;max-width:85%;background:#34c759;color:#fff;padding:9px 13px;border-radius:18px 18px 5px 18px;font-size:16px;text-align:left}
.ph-tel-mamma{display:inline-block;background:#e3e3ea;color:#222;padding:10px 13px;border-radius:18px 18px 18px 5px;font-size:16px;max-width:88%;margin-top:6px;animation:phIn .3s}
.ph-kap .ph-tel-kropp{max-height:52vh;overflow:auto}
`;
document.head.appendChild(kapCss);
function konfetti(n = 140) {
  const farger = ['#ffd43b', '#7dffb0', '#3de3ff', '#ff6b6b', '#b07dff', '#ff9f43'];
  for (let i = 0; i < n; i++) {
    const k = document.createElement('div'); k.className = 'ph-konf';
    k.style.left = Math.random() * 100 + 'vw'; k.style.background = farger[i % farger.length];
    k.style.animationDuration = 2.2 + Math.random() * 2.5 + 's'; k.style.animationDelay = Math.random() * 1.2 + 's';
    k.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(k); setTimeout(() => k.remove(), 6000);
  }
}
function fanfar() { [523, 659, 784, 1046].forEach((f, i) => ton(f, 0.35, 0.09, 'triangle', i * 0.16)); ton(784, 0.7, 0.08, 'triangle', 0.7); ton(1046, 0.9, 0.09, 'triangle', 0.85); }
function kapitel2Slut() {
  andraRespekt(15, 'Gamingbod och jacuzzi – folk pratar');
  konfetti(160); fanfar(); ljud.stor();
  const sv = MAMMA_SVAR_K2; void ['Mamma här. Du skickade en bild på en JACUZZI?!', '…och tapeter. Och en gamingbod med lampor i alla färger.', 'Okej. Jag erkänner. Det är finare än hemma.', 'Kan jag komma och bada på söndag? Pappa tar med korv.'];
  sv.forEach((t, i) => setTimeout(() => sms('mamma', t), 1500 + i * 400));
  setTimeout(() => sms('mamma', 'Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är JÄTTESTOLT.'), 3500);
  setTimeout(() => sms('rolf', 'Hörde att du har JACUZZI. Ja tar med grillen. Och Kajsa. Hon e en katt. Hon badar inte. /R'), 5000);
  ui.toast('🏆 KAPITEL 2 KLART! Din fristad är komplett – men det tar aldrig slut. Trimma, bygg, samla.', 'guld');
}
function kapitelSlut() {
  pausad = true; ui.igang = false; spelare.aktiv = false;
  if (document.pointerLockElement) document.exitPointerLock();
  // ta en bild av fristaden (inifrån skjulet om man står där, annars det man ser)
  renderer.render(scen, kamera);
  let bild = ''; try { bild = renderer.domElement.toDataURL('image/jpeg', 0.75); } catch {}
  const el = document.createElement('div'); el.className = 'ph-kap';
  el.innerHTML = `<div class="ph-kap-rubrik"><span class="ui-ik" style="width:56px;height:56px;color:#ffd43b">${IKON.pokal}</span> KAPITEL 1 KLART!<small>Din fristad är byggd. Trivsel ${trivsel()}.</small></div>`;
  document.body.appendChild(el);
  konfetti(); fanfar(); ljud.stor();
  const blixt = document.createElement('div'); blixt.className = 'ph-kap-blixt'; document.body.appendChild(blixt);
  setTimeout(() => {
    // klick! – bild till mamma
    blixt.style.transition = 'none'; blixt.style.opacity = '0.95';
    requestAnimationFrame(() => { blixt.style.transition = 'opacity .6s'; blixt.style.opacity = '0'; });
    ton(2200, 0.05, 0.06, 'square'); ton(1400, 0.08, 0.05, 'square', 0.06);
    el.innerHTML = `<div class="ph-telefon"><div class="ph-tel-topp" style="background:${AVSANDARE.mamma.farg}">${portratt('mamma', 34)}<span>Mamma</span></div>
      <div class="ph-tel-kropp">${bild ? `<img class="ph-tel-bild" src="${bild}" alt="">` : ''}<div class="ph-tel-jag">Kolla här. Jag har det inte helt förjävligt.</div><div class="ph-tel-svar"></div></div>
      <button class="fp-knapp" disabled>…</button></div>`;
    const svar = el.querySelector('.ph-tel-svar'), knapp = el.querySelector('button');
    const MAMMA_SVAR = ['Mamma skriver…', ...MAMMA_SVAR_K1, mammaK1Slut()]; void ['Mamma skriver…', 'HAHA träplankor?!', 'Vad är det för skit? Du har ju inte ens TAPETER på väggarna.', 'Och var är badrummet?? Du duschar väl??', 'Pappa säger "aha, vad lugnt då". Pappa säger det om allt.', '…men gardinerna i fönstret var fina. Har du gjort dem själv? ❤️'];
    let i = 0;
    const nasta = () => {
      if (i === 0) { svar.innerHTML = '<div class="ph-tel-mamma"><span class="prickar"><span>.</span><span>.</span><span>.</span></span></div>'; i++; setTimeout(nasta, 1600); return; }
      if (i === 1) svar.innerHTML = '';
      if (i < MAMMA_SVAR.length) {
        const b = document.createElement('div'); b.className = 'ph-tel-mamma'; b.textContent = MAMMA_SVAR[i]; svar.appendChild(b);
        prata('mamma', MAMMA_SVAR[i]); vibrera(); ljud.plock(); i++;
        svar.parentElement.scrollTop = 9999;
        setTimeout(nasta, 1700 + MAMMA_SVAR[i - 1].length * 30); return;
      }
      knapp.disabled = false; knapp.textContent = 'Okej. Kapitel 2 då. 😤';
    };
    setTimeout(nasta, 1200);
    knapp.onclick = () => {
      el.remove(); blixt.remove(); tystna();
      S.sms.push({ fran: 'mamma', text: 'HAHA träplankor?! Du har ju inte ens TAPETER på väggarna.' }); sparaSnart();
      pausad = false;
      ui.visaStart('📕 Kapitel 2: Ett riktigt hem', 'Mamma är inte imponerad. Än.<br><br>Nästa mål: <b>tapeter</b>, en egen <b>gamingbod</b> med RGB, gamer-inredning – och en <b>jacuzzi</b>. Visa henne.<br><br>Ali har nya ritningar – och <b>♾️ trimningar</b> som aldrig tar slut.', 'Kör!');
    };
  }, 2600);
}

// för automatiska tester
window.__printahem = { bodGrupp, vridTips, flyttarBod: () => flyttarBod, dagbokLas: () => dagbokLas, pausad: () => pausad, bradhog, sangSpoke, taltSang: tältSäng, rullePlats, rulleMax, nastaAtgard, STEG, sovDags, kvallKlar, maskinStopp, ritaStopp, spikaSkylt, aliRopar, tittaMot, adressSkylt, introMusik, storHus, husHinder, startaResa, kollaResa, resaSteg, FYND, tillgang, arstid, varme, kollaKyla, uppdateraArstid, folkbokfor, kollaPolett, kanFolkbokfora, rolfHus, MARK_TOMTER, tungtFilament, andraRespekt, nivaUpplast, rolfDialekt, geRolfNummer, vantarPaNummer, kollaMarkTips, ruttnaOverNatten, stallIKyl, kylAntal, kompostera, kopMark, oppnaMark, uppdateraMark, paMark, markTavla, oppnaBokmarken, sparaDagBokmarke, lasBokmarken, miljo, placera, stallBurkar, uppdateraPappa, startaPappaBesok, pappaBesok, FIGURER, malPil, spoke, rektKrock, SKJUL, laggSkrap, paTippen, tippaLast, uppdateraAuto, auto, aliHamtarLadan, monteraAuto, rostKlipp, rostNyckel, rostManus, familjSms, oppnaJobbVal, hamtaBeloning, jobbNu, oppnaPrintMeny, oppnaDagbok, oppnaInkorg, kapitel2Slut, TRIM, bodKlar, kapitelSlut, oppnaSparplatser, sparaPlats, lasPlats, HEM_DELAR, uppdateraSkjul, visaIntro, gardSkrap, laggTill, byt, taBortInv, antalInv, kista, extruder, oppnaMarknad, arende, rolfGubbe, sms, ROLF, flak, bom, postLucka, postlada, grind, ALI, bil, sopbil, sov, TIPP, niva, magnetStrale, oppnaForrad, laggIForrad, vevYta, rulle, kamera, spelare, interaktor, hand, S, spar, skrivare, placerade, skrapLista, ui, kvarn, cykel, marknad, talt, trivsel, startaJobb, uppdateraSkrivare, stallNer };

startaLoop(uppdatera, { scen, kamera, renderer });

// formspråket "Printat & skrotigt" läggs sist så att det vinner över äldre stilar
{ const st = document.createElement('style'); st.textContent = BRAND_CSS + HUD_CSS + '.fp-topp>.fp-chip:first-child,.ph-resp-chip,.ph-dag-chip,.ph-bar-chip,.fp-hjalp,.ph-sms-chip{display:none!important}'; document.head.appendChild(st); }
