// =============================================================
//  PRINTA HEM – kapitel 1: Tältet (sprint 1)
//  Allt du äger är ett gammalt skjul och en gammal 3D-skrivare.
//  Städa skräp → mal till filament → trampa ström → printa →
//  sälj hos Ali → köp ritningar → printa maskiner → bygg lägret.
// =============================================================
import { THREE, skapaSpel, startaLoop } from '../../delat/motor.js';
import { Spelare, Interaktor, Hand, Sparning, ljud, FpUI } from '../../delat/fp/index.js';

import { kalender as kalenderSvg } from './intro-bilder.js';
import { byggMiljo } from './miljo.js';
import { IKON, ik, portratt, rens, knapp, ruta as uiRuta, grid, sektion, detalj, resurs, panel, rad, fakta, UI_CSS } from './ui-kit.js';
import * as B from './balans.js';   // alla siffror som styr progressionen
import * as PLAN from './gardplan.js';   // punkt AM: gårdens plan (förslag)
const { PRIS_SKALA, MATTNAD, MATTNAD_GOLV, ALI_VILL_BONUS, GROSSIST, SALJ_TILLBAKA, FILAMENT_KOP, SLAPP_PER_DAG, KAP1_BELONING, TRIVSEL_MAL, RESPEKT_NIVAER, JOBB_VARV, JOBB_ANDEL, FYND_ANDEL, SMS_MELLAN, STROM_BAS, BANK_PLUS, TRAMP_PER_S, SOL_PER_S, SOLPARK_PER_S, MOTOR_STROM, BARA_SKRAP, HOTBAR, KISTA_PLATSER, STACK, RYGG_BAS, RYGG_STOR, PLATTA, LASTARM_TID, LASTARM_MAX, BAND_BAS, TRIVSEL_PER_PROCENT, TRIVSEL_MAX_BONUS } = B;
import { logo, BRAND_CSS, malaSkylt, NAMN, FARG, KOP_SLAG } from './brand.js';
import { ansikte as hudAnsikte, hjarta as hudHjarta, HUD_CSS, matarFarg } from './hud.js';
{ const st = document.createElement('style'); st.textContent = UI_CSS; document.head.appendChild(st); }
const SPEL_ID = 'printa-hem';
// Punkt AO: sparformatet nollställdes 2026-11-15. Allt sparas under SPAR_ID ('spar:printahem2:v1' lokalt, 'printahem2' i molnet).
// Gamla sparfiler (spar:printa-hem:*, molnets 'printahem') används inte – spelaren får en ruta och börjar om. Rekordet (rekord:printa-hem) är kvar.
// SPAR_VERSION får ändras igen för det här spelet (regeln om att aldrig ändra den gällde det gamla formatet).
const SPAR_ID = 'printahem2';
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
      const ref = db.doc(`data/users/${id}/${SPAR_ID}`);
      const snap = await ref.get();
      let data = null;
      try { data = snap.exists ? JSON.parse(snap.data()?.spar || 'null') : null; } catch { data = null; }
      // punkt AO: fanns ett spel i det gamla formatet? (det används inte – det tas bort när rutan har visats)
      const gammal = db.doc(`data/users/${id}/printahem`);
      let gammalFanns = false; try { gammalFanns = (await gammal.get()).exists; } catch {}
      return { ref, data, db, id, gammal: gammalFanns ? gammal : null };
    })(), vanta(7000)]);
  } catch { return null; }
}
const MOLN = await laddaMoln();

// ---------- Inställningar (lek fritt med dessa) ----------
// ---------- Punkt 15: EN SAK I TAGET (claude/soptippsvagen-en-sak-i-taget.md) ----------
const ROST_PAUS = 2000;     // ms paus mellan två olika saker som berättas (röst, sms, notis, nytt mål …)
const DIALOG_PAUS = 800;    // ms mellan repliker inom samma samtal (pappas besök, telefonen, sopbilsresan, julen, Helen)
const KANAL_GAMMAL = 20000; // REAKTION och småprat som väntat längre än så stryks
const TOMT = 21;                 // tomten går från -TOMT till +TOMT (meter)
const ANTAL_SKRAP = 50;          // skräp på själva tomten från start
const GARD_KVAR = 3;             // så här få skräp får ligga kvar på gården när den räknas som städad
// Punkt AM: gården – fabriken i väster (en linje per filament) och hemmet i öster.
const LAGER = { x: -13.3, z: 13 };   // kvarnen står 3 m väster och 1,5 m norr om lägret = linje 1:s kvarn (−16,3; 11,5)
// punkt AO: fanns en sparfil i det gamla formatet? Då visas rutan "Soptippsvägen har byggts om" och spelet börjar om.
const GAMLA_NYCKLAR = (() => { const ut = []; try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith('spar:printa-hem:')) ut.push(k); } } catch {} return ut; })();
const GAMMALT_SPEL = GAMLA_NYCKLAR.length > 0 || !!MOLN?.gammal;
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
const TRATT_MAX = 12;             // hur många skräp kvarnens tratt rymmer
const BINGE_MAX = 60;            // matarbandets binge rymmer så här många skräp
const BAND_TID = 1.6;            // sekunder per skräp som bandet flyttar till tratten
const KARRA_KAP = 8000;          // skottkärran rymmer så här många gram skräp (8 rullar) – massor av smått eller ett par stora
const FART_UTAN = 5.2, FART_KARRA = 3.2, FART_KARRA_FULL = 2.3;   // gångfart (m/s) utan kärra, med tom kärra och med full kärra
const KISTA_RACKVIDD = 3.2;      // så nära kistan måste man stå för att flytta saker i den
const VEV_TID = 0.7;             // sekunder att veva per flaska (0,2 rulle) – större skräp tar längre
const MOTOR_TID = 1.6;           // sekunder per flaska när motorn mal
const motorFart = () => S.kvarn.jet ? 6 : S.kvarn.turbo ? 2.5 : 1;     // turbo 2,5× · jet 6×
const motorStrom = () => S.kvarn.jet ? 8 : S.kvarn.turbo ? 3 : 1;           // turbon och jeten drar mer ström
// Verktygsnivåer för skräp: 0 = händer, 1 = skräpgrip, 2 = magnetpistol.
// Varje nivå: bär mer, behöver sikta mindre noga, och plockar på längre håll.
const SKRAP_TRAFF = [0.3, 0.8, 0.9, 1.0, 1.3];  // träffytans storlek (meter) – små = måste sikta noga
const SKRAP_RACKVIDD = [2.0, 3.2, 3.4, 3.4, 3.4]; // hur långt bort man når att plocka
const AUTO_PLOCK_NIVA = [0, 0, 0, 1.5];      // bara magneten plockar upp av sig själv – gripen styr du själv
const MAGNET_RACKVIDD = 10;             // magnetpistolen drar skräp så här långt bort
const MAGNET_VINKEL = 0.35;             // hur bred magnetstrålen är (radianer)
const MAGNET_FART = 7;                  // meter per sekund som skräpet flyger
const RACKVIDD_BYGG = 6;         // hur långt bort man kan ställa saker

// Saker man kan printa och sälja (gram filament, tid i sekunder på Gen 1, pris hos Ali)
const VAROR = {
  olhallare: { namn: 'Ölhållare med kylklamp', ikon: '🍺', gava: true },  // gåvor till Rolf
  flaskoppnare: { namn: 'Flasköppnare med magnet', ikon: '🍾', gava: true },
  grillspade: { namn: 'Grillspade', ikon: '🍖', gava: true },
  tomte: { namn: 'Trädgårdstomte till flaket', ikon: '🎅', gava: true },
  // Alis prototyper – byggs av Ali själv, en av varje, går inte att printa
  m_turbo: { namn: 'Prototyp: Turbofläkt till skrivare', ikon: '', proto: { lar: 4, mod: true }, beskr: 'Monteras på EN skrivare: den printar dubbelt så fort.' },
  a_holo: { namn: 'Prototyp: Hologramskylt', ikon: '', placerbar: true, trivsel: 150, unik: true, proto: { lar: 5 }, beskr: 'En skylt som svävar i luften och byter färg. Trivsel +150.' },
  m_snal: { namn: 'Prototyp: Kvantmunstycke', ikon: '', proto: { lar: 6, mod: true }, beskr: 'Monteras på EN skrivare: den drar 35 % mindre filament.' },
  m_nano: { namn: 'Prototyp: Nanokvarn', ikon: '', proto: { lar: 8 }, beskr: 'Byggs in i kvarnen direkt: den mal 60 % fortare.' },
  m_grav: { namn: 'Prototyp: Gravitations\u00adbädd', ikon: '', proto: { lar: 10, mod: true }, beskr: 'Monteras på EN skrivare: den kan printa en storlek större (S blir M, M blir L).' },
  m_fusion: { namn: 'Prototyp: Fickfusions\u00adbatteri', ikon: '', proto: { lar: 12 }, beskr: 'Kopplas in direkt: +600 ström i batteriet och det laddar sig självt.' },
  a_robot: { namn: 'Prototyp: Alis AI-robot', ikon: '', placerbar: true, trivsel: 250, unik: true, proto: { lar: 14 }, beskr: 'Alis dröm. En liten robot som piper och blinkar. Trivsel +250.' },
  tapet_1: { namn: 'Tapet: grön med guldprickar', ikon: '', tapet: 1 },
  tapet_2: { namn: 'Tapet: blå ränder', ikon: '', tapet: 2 },
  tapet_3: { namn: 'Tapet: rosa blommor', ikon: '', tapet: 3 },
  tapet_4: { namn: 'Tapet: vitt tegel', ikon: '', tapet: 4 },
  tapet_5: { namn: 'Tapet: gamer, svart med neon', ikon: '', tapet: 5 },
  tapet_0: { namn: 'Tapet: 70-tal', ikon: '', tapet: 0 },
  // presenter du köper hos Ali och lägger i Rolfs postlåda
  p_sexpack: { namn: 'Sexpack lättöl till Rolf', ikon: '' },
  p_korv: { namn: 'Grillkorv till lördagen', ikon: '' },
  p_kajsa: { namn: 'Kattmat och leksak till Kajsa', ikon: '' },
  p_fiske: { namn: 'Fiskespö till Rolf', ikon: '' },
  p_trummor: { namn: 'Nya trumstockar och trumskinn', ikon: '' },
  p_konsert: { namn: 'Biljetter till dansbandskonsert', ikon: '' },
  p_resa: { namn: 'Resa till Kanarieöarna', ikon: '' },
  // Rolfs tacksamhetssaker – kan inte köpas, bara få
  // filament nivå 2–5: låses upp med respekt. Kommer från tungt skräp (tunnor, kajaker) och från Rolf.
  rulle2: { namn: 'Filament nivå 2 – röd PETG', ikon: '', fil: 2, beskr: 'Från PETG-kvarnen. Laddas i den röda PETG-skrivaren.' },
  fynd2: { namn: 'Fynd nivå 2: röd PETG-back', ikon: '', malTill: 2, beskr: 'Råmaterial: riktigt bra plast. Lägg den i den röda PETG-kvarnen – den blir en rulle röd PETG, filament nivå 2.' },
  fynd3: { namn: 'Fynd nivå 3: kolfiberrester', ikon: '', malTill: 3, beskr: 'Råmaterial. Kräver härdade kvarnknivar – blir en rulle kolfiber, nivå 3.' },
  fynd4: { namn: 'Fynd nivå 4: guldglittrig dunk', ikon: '', malTill: 4, beskr: 'Råmaterial. Kräver diamantkvarn – blir en rulle guldkomposit, nivå 4.' },
  fynd5: { namn: 'Fynd nivå 5: titanspån', ikon: '', malTill: 5, beskr: 'Råmaterial. Kräver diamantkvarn – blir en rulle titanblandning, nivå 5.' },
  rulle3: { namn: 'Filament nivå 3 – grön kolfiber', ikon: '', fil: 3 },
  rulle4: { namn: 'Filament nivå 4 – guldkomposit', ikon: '', fil: 4 },
  rulle5: { namn: 'Filament nivå 5 – titanblandning', ikon: '', fil: 5 },
  // PETG-linjen: printas bara på den röda PETG-skrivaren. Dyra saker – varje rulle röd PETG är värd 5–10 vanliga.
  n2_vas: { namn: 'Designvas i röd PETG', ikon: '', trivsel: 8, placerbar: true, radie: 0.2, niva: 2, syns: () => S.kapitel >= 2 },
  n2_hjalm: { namn: 'Cykelhjälm i PETG', ikon: '', niva: 2, syns: () => harRecept('n2_vas') },
  n2_neon: { namn: 'Neonskylt i röd PETG', ikon: '', trivsel: 50, placerbar: true, radie: 0.35, niva: 2, syns: () => harRecept('n2_hjalm') },
  n2_paddel: { namn: 'Kajakpaddel i PETG', ikon: '', niva: 2, syns: () => harRecept('n2_neon') },
  n3_stol: { namn: 'Kolfiberstol', ikon: '', trivsel: 90, placerbar: true, radie: 0.4, niva: 3 },
  n4_staty: { namn: 'Guldstaty av Rolf', ikon: '', trivsel: 180, placerbar: true, radie: 0.45, niva: 4 },
  n5_drake: { namn: 'Titandrake', ikon: '', trivsel: 350, placerbar: true, radie: 0.6, niva: 5 },
  // mammas burkar som pappa lämnar – helt oanvändbara, tar bara plats
  burk_honung: { namn: 'Burk honung från mamma', ikon: '', placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_lingon: { namn: 'Burk lingonsylt från mamma', ikon: '', placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_saft: { namn: 'Flaska hemgjord rabarbersaft', ikon: '', placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_vante: { namn: 'Virkade grytvantar (lila)', ikon: '', placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_sill: { namn: 'Burk inlagd sill från mamma', ikon: '', placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_sockor: { namn: 'Stickade raggsockor (för små)', ikon: '', placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_duk: { namn: 'Virkad duk från mamma', ikon: '', placerbar: true, trivsel: 0, radie: 0.25, burk: true },
  burk_toarulle: { namn: 'Virkat toarullsskydd (en dam i krinolin)', ikon: '', placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_porslin: { namn: 'Porslinshund från mormors dödsbo', ikon: '', placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_tavla: { namn: 'Broderad tavla: Borta bra men hemma bäst (häng på väggen)', ikon: '', placerbar: true, trivsel: 0, radie: 0.25, burk: true },
  burk_tavla2: { namn: 'Korsstygnstavla: Ett glatt hjärta (häng på väggen)', ikon: '', placerbar: true, trivsel: 0, radie: 0.25, burk: true },
  burk_tavla3: { namn: 'Mammas egen oljemålning: Älg i solnedgång (häng på väggen)', ikon: '', placerbar: true, trivsel: 0, radie: 0.3, burk: true },
  burk_blomma: { namn: 'Blommor i vas från mamma (vissnar)', ikon: '', placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_vissen: { namn: 'Vissna blommor (luktar unket)', ikon: '', placerbar: true, trivsel: -10, radie: 0.2, burk: true },
  burk_kompott: { namn: 'Matlåda: Mammas kompott (rotfruktsgratäng – potatisen var slut)', ikon: '', placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_raggmunk: { namn: 'Raggmunksrester i folie', ikon: '', placerbar: true, trivsel: 0, radie: 0.2, burk: true },
  burk_mogel_kompott: { namn: 'Möglig kompott (luktar illa!)', ikon: '', placerbar: true, trivsel: -20, radie: 0.2, burk: true },
  burk_mogel_raggmunk: { namn: 'Mögliga raggmunkar (luktar illa!)', ikon: '', placerbar: true, trivsel: -20, radie: 0.2, burk: true },
  r_tv: { namn: 'Gammal tjock-TV från ett dödsbo', ikon: '', placerbar: true, trivsel: 60, unik: true, rolf: true },
  r_affisch: { namn: 'Affisch: Rolfs Rockers 1987', ikon: '', placerbar: true, trivsel: 40, unik: true, rolf: true },
  r_gardin: { namn: 'Birgittas stickade gardiner', ikon: '', placerbar: true, trivsel: 45, unik: true, rolf: true },
  r_klocka: { namn: 'Rolfs guldklocka (30 år på jobbet)', ikon: '', placerbar: true, trivsel: 55, unik: true, rolf: true },
  r_fatolj: { namn: 'Läderfåtölj från dödsbo', ikon: '', placerbar: true, trivsel: 80, unik: true, rolf: true },
  r_discokula: { namn: 'Discokula från 1987', ikon: '', placerbar: true, trivsel: 70, unik: true, rolf: true },
  r_jukebox: { namn: 'Jukebox från dödsbo', ikon: '', placerbar: true, trivsel: 120, unik: true, rolf: true },
  trumstockar: { namn: 'Rolfs trumstockar från 1987', ikon: '', placerbar: true, trivsel: 40, unik: true },
  nyckelkopia: { namn: 'Kopia av chefens nyckel', ikon: '', gava: true },   // Rolfs skumma jobb
  stangdskylt: { namn: 'Skylt: TIPPEN STÄNGD', ikon: '', gava: true },
  termoslock: { namn: 'Termoslock med lönnfack', ikon: '', gava: true },
  stampel: { namn: 'Kopia av chefens stämpel', ikon: '', gava: true },
  tillstand: { namn: 'Parkeringstillstånd för husvagn', ikon: '', gava: true },
  sang: { storlek: 1, namn: 'Säng', ikon: '🛏️', hem: true },          // 2 rullar. Kräver instruktionen hos Ali. Säljs inte.
  nyckelring: { namn: 'Nyckelring', ikon: '🔑' },      // 10 % rulle = en halv flaska
  skrivareS: { namn: 'Storebrors Skrivare S', ikon: '🖨️', beskr: 'Långsam och låter konstigt – men den funkar. Ställ den på den lysande rutan i linje 1.' },   // punkt AS
  kruka: { namn: 'Blomkruka', ikon: '🪴', trivsel: 5, placerbar: true, radie: 0.3, syns: () => S.dag >= 2 },   // punkt AX: receptet dag 2, gratis från Ali   // punkt AG: receptet får man av Ali vid första försäljningen
  pall: { namn: 'Pall', ikon: '🪑', trivsel: 10, placerbar: true, radie: 0.35, syns: () => S.dag >= 3 },   // punkt AX: dag 3, 80 kr
  rulle: { namn: 'Filamentrulle', ikon: '🧵', rulle: true },   // bärs från extrudern till skrivaren
  // recept: köps hos Ali – dyra, men betalar mer per rulle ju längre man kommer
  mobilstall: { namn: 'Mobilställ', ikon: '📱', syns: () => S.sang },
  // receptstegen: nästa recept syns när du köpt det förra – varje steg ger mer per rulle
  fagelholk: { namn: 'Fågelholk', ikon: '🐦', trivsel: 6, placerbar: true, radie: 0.3, syns: () => S.rolf.i >= 1 || harRecept('mobilstall') },
  n_kopp: { nBest: true, namn: 'Kaffekopp: BENGT-ÅKE', ikon: '', syns: () => S.n?.vill === 'n_kopp', beskr: 'Beställd av N. Diskret paketerad.' },
  t_spalje: { tradgard: true, namn: 'Spaljé till Birgittas trädgård', ikon: '', niva: 2, syns: () => S.dag >= 13 && !!S.tradgard?.brev && !S.tradgard?.spalje, beskr: 'Röd PETG. Till täppan bakom Rolfs husvagn. Rosorna behöver något att klättra på.' },
  t_bevattning: { tradgard: true, namn: 'Droppslang till trädgården', ikon: '', niva: 2, syns: () => S.dag >= 13 && !!S.tradgard?.brev && !S.tradgard?.vatten, beskr: 'Röd PETG. Droppar lite hela tiden. Rolf glömmer att vattna.' },
  t_vaxthus: { tradgard: true, namn: 'Växthus till Birgittas rosor', ikon: '', niva: 3, syns: () => S.dag >= 20 && S.kapitel >= 4 && !!S.tradgard?.spalje && !!S.tradgard?.vatten && !S.tradgard?.vaxthus, beskr: 'Kolfiber. Så att rosorna klarar vintern.' },
  h_telefon: { namn: 'Bakelittelefon från 1962', ikon: '', placerbar: true, trivsel: 45, unik: true, radie: 0.25, beskr: 'Svart och tung. Den ringer inte. Den har ringt.' },
  h_mjolkpall: { namn: 'Mjölkpall från 1962', ikon: '', placerbar: true, trivsel: 35, unik: true, radie: 0.25, beskr: 'Tre ben. Står stadigt på allt.' },
  h_kaffepanna: { namn: 'Emaljerad kaffepanna från 1962', ikon: '', placerbar: true, trivsel: 50, unik: true, radie: 0.25, beskr: 'Blå emalj med ett kantstött hörn. Rolf har sett en sån förut.' },
  h_foto: { namn: 'Fotografi: Rolf och Birgitta, 1979', ikon: '', placerbar: true, trivsel: 30, unik: true, radie: 0.2, beskr: 'Hon i en gul klänning. Han med hår.' },
  // punkt AN: fynd från Helens hemliga förråd (byteshandel)
  hf_emalj: { namn: 'Emaljskylt: MJÖLK', ikon: '', placerbar: true, trivsel: 30, unik: true, radie: 0.25, beskr: 'Från Helens hemliga förråd. Kantstött. Från förr.' },
  hf_kassett: { namn: 'Kassettbandspelare', ikon: '', placerbar: true, trivsel: 30, unik: true, radie: 0.25, beskr: 'Från Helens hemliga förråd. Det sitter ett band i. Det står ROLFS ROCKERS 87 på det.' },
  hf_tomte: { namn: 'Tomte från 1960-talet', ikon: '', placerbar: true, trivsel: 35, unik: true, radie: 0.2, beskr: 'Från Helens hemliga förråd. Skägget är av riktig bomull. Nästan.' },
  hf_krona: { namn: 'Kristallkrona', ikon: '', placerbar: true, trivsel: 60, unik: true, radie: 0.35, beskr: 'Från Helens hemliga förråd. Den hängde i ett träd i tre år.' },
  h_stickning: { namn: 'Halvfärdig stickning', ikon: '', unik: true, beskr: 'Stickorna sitter kvar. Ge den till Rolf – lägg den i hans postlåda.' },
  julbord: { namn: 'Julbord med ljusstakar', ikon: '', jul: true, syns: () => S.dag >= 22 && !S.julFirad && !antalInv('julbord'), beskr: 'Långbord och ljusstakar. Gratis – det är jul.' },
  g_kapsyl: { namn: 'Kapsyl från Göran', ikon: '', kop: true, beskr: 'Blank. Göran tyckte den var fin.' },
  g_skruv: { namn: 'Blank skruv från Göran', ikon: '', kop: true, beskr: 'Rostfri. Göran har smak.' },
  fagelskramma: { namn: 'Fågelskrämma', ikon: '', trivsel: 3, placerbar: true, radie: 0.35, syns: () => S.dag >= 6 && !!S.goranSedd, lyx: 'Skrämmer fåglar. Enligt förpackningen.' },
  fagelbad: { namn: 'Fågelbad', ikon: '', trivsel: 8, placerbar: true, radie: 0.35, syns: () => S.dag >= 6 && !!S.goranSedd, lyx: 'Ett litet bad på en fot. Måsar gillar sånt. Tydligen.' },
  lampskarm: { namn: 'Lampskärm', ikon: '💡', syns: () => S.dag >= 3 || S.rolf.i >= 2 || harRecept('fagelholk') },
  dronare: { namn: 'Drönarram', ikon: '🛸', syns: () => S.rolf.i >= 3 || harRecept('lampskarm') },
  skateboard: { namn: 'Skateboard', ikon: '🛹', syns: () => S.kapitel >= 2 && harRecept('dronare') },
  gitarr: { namn: 'Elgitarr', ikon: '🎸', syns: () => S.kapitel >= 2 && harRecept('skateboard') },
  cykelram: { namn: 'Cykelram', ikon: '🚲', syns: () => S.kapitel >= 3 && harRecept('gitarr') },
  pkajak: { namn: 'Printad kajak', ikon: '🛶', syns: () => S.kapitel >= 3 && harRecept('cykelram') },
};for (const [id, { protoPris, ...v }] of Object.entries(B.VARA_SIFFROR)) { Object.assign(VAROR[id], v); if (protoPris) VAROR[id].proto.pris = protoPris; }

// dyra saker man köper hos Ali (printas inte) – det är dessa man sparar till
Object.assign(VAROR, {
  gamingstol: { namn: 'Gamingstol', ikon: '🪑', recept: 900, pris: 0, gram: 3000, tid: 50, trivsel: 10, placerbar: true, radie: 0.35, syns: () => S.kapitel >= 3 && !!S.bod, lyx: 'Alis AI-modell nr 7. Han skrev prompten på en servett.' },
  hogtalare: { namn: 'Högtalare', ikon: '🔊', recept: 700, pris: 0, gram: 1500, tid: 30, trivsel: 8, placerbar: true, radie: 0.2, syns: () => S.kapitel >= 3 && !!S.bod, lyx: 'Lådan printar du – Ali lägger med högtalarelementen.' },
  r_radio: { namn: 'Rörradio från jordkällaren (spelar dansband)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 45, unik: true, radie: 0.3 },
  ra_flipper: { namn: 'Gammalt flipperspel (Rolfs hemliga ställe)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 90, unik: true, radie: 0.5 },
  ra_kiosk: { namn: 'Röd telefonkiosk', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 100, unik: true, radie: 0.55 },
  ra_moped: { namn: 'Gammal moped (startar ibland)', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 80, unik: true, radie: 0.55 },
  ra_bensin: { namn: 'Bensinpump från 1962', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 70, unik: true, radie: 0.4 },
  ra_emalj: { namn: 'Emaljskylt: MJÖLK & GRÄDDE', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 35, unik: true, radie: 0.3 },
  ra_fatgrill: { namn: 'Grill av ett oljefat', ikon: '', gram: 0, tid: 0, pris: 0, placerbar: true, trivsel: 45, unik: true, radie: 0.4 },
  kamin: { namn: 'Vedkamin', ikon: '🔥', recept: 3330, pris: 0, gram: 4000, tid: 60, trivsel: 25, placerbar: true, radie: 0.35, syns: () => S.kapitel >= 4, lyx: 'Gjutjärnslook. Ställ den i skjulet så fryser du inte i vinter.' },
  kyl: { namn: 'Minikylskåp', ikon: '🧊', recept: 1200, pris: 0, gram: 4000, tid: 60, trivsel: 10, placerbar: true, radie: 0.3, syns: () => S.kapitel >= 2, lyx: 'Skalet printar du – kylaggregatet följer med ritningen.' },
  gamingbord: { namn: 'Gamingbord med skärm', ikon: '🖥️', recept: 1800, pris: 0, gram: 5000, tid: 70, trivsel: 15, placerbar: true, radie: 0.6, syns: () => S.kapitel >= 3, lyx: 'Bordet och skärmramen printar du – panelen ingår.' },
  soffa: { namn: 'Soffa', ikon: '🛋️', recept: 2200, pris: 0, gram: 7000, tid: 80, trivsel: 15, placerbar: true, radie: 0.8, syns: () => S.kapitel >= 2, lyx: 'Alis stolthet. Han har aldrig suttit i den.' },
  ledpinne: { namn: 'RGB-ljuspinne', ikon: '🌈', recept: 500, pris: 0, gram: 600, tid: 16, trivsel: 6, placerbar: true, radie: 0.15, syns: () => S.kapitel >= 3, lyx: 'AI:n föreslog ”mer RGB”. Den har rätt. Alltid mer RGB.' },
  akustik: { namn: 'Akustikpaneler', ikon: '🔲', recept: 600, pris: 0, gram: 1500, tid: 24, trivsel: 6, placerbar: true, radie: 0.3, syns: () => S.kapitel >= 3, lyx: 'Ljudisolering. Så mamma inte hör när du skriker i Discord.' },
  neonskylt: { namn: 'Neonskylt GAME ON', ikon: '💡', recept: 900, pris: 0, gram: 800, tid: 20, trivsel: 8, placerbar: true, radie: 0.3, syns: () => S.kapitel >= 3, lyx: 'Lyser rosa. Gör allt 40 % coolare. Vetenskapligt bevisat (av mig).' },
  figurhylla: { namn: 'Hylla med figurer', ikon: '🗿', recept: 1200, pris: 0, gram: 2500, tid: 36, trivsel: 10, placerbar: true, radie: 0.35, syns: () => S.kapitel >= 3, lyx: 'Samlarfigurer. Du printar dem själv. Ingen behöver veta.' },
  projektor: { namn: 'Projektor + duk', ikon: '📽️', recept: 2500, pris: 0, gram: 3000, tid: 44, trivsel: 15, placerbar: true, radie: 0.5, syns: () => S.kapitel >= 3, lyx: 'Bio i boden. Jag har aldrig varit på bio. Pappas butik.' },
  arkad: { namn: 'Arkadmaskin', ikon: '🕹️', recept: 3000, pris: 0, gram: 9000, tid: 80, trivsel: 18, placerbar: true, radie: 0.45, syns: () => S.kapitel >= 3, lyx: 'En riktig arkadmaskin. AI:n gjorde den retro. Med flit.' },
  simrig: { namn: 'Racingsimulator', ikon: '🏎️', recept: 4500, pris: 0, gram: 10000, tid: 90, trivsel: 22, placerbar: true, radie: 0.7, syns: () => S.kapitel >= 3, lyx: 'Racingstol, ratt och pedaler. Snabbare än sopbilen.' },
  biljard: { namn: 'Biljardbord', ikon: '🎱', recept: 5000, pris: 0, gram: 15000, tid: 110, trivsel: 20, placerbar: true, radie: 1.1, syns: () => S.kapitel >= 3, lyx: 'Rolf säger att han är ”proffs”. Han är inte proffs.' },
  jacuzzi: { namn: 'Jacuzzi', ikon: '🛁', recept: 30000, pris: 0, gram: 9000, tid: 140, trivsel: 30, placerbar: true, radie: 1.1, syns: () => S.kapitel >= 3, lyx: 'Varmt bubbelbad vid soptippen. Lyx är relativt.' },
  dator: { namn: 'Gamingdator med RGB', ikon: '💻', recept: 3500, pris: 0, gram: 2500, tid: 60, trivsel: 20, placerbar: true, radie: 0.25, syns: () => S.kapitel >= 3, lyx: 'Chassit printar du – Ali har en låda med begagnade datordelar.' },
});
const GAMER = ['gamingstol', 'gamingbord', 'dator', 'hogtalare', 'ledpinne', 'akustik', 'neonskylt', 'figurhylla', 'projektor', 'arkad', 'simrig', 'biljard', 'soffa', 'kyl'];
// nästa gamer-sak att jobba på: den du redan håller på med, annars den billigaste du kan printa
const nastaGamer = () => { const ej = GAMER.filter((g) => !placerade.some((p) => p.typ === g) && VAROR[g]); return ej.find((g) => antalInv(g) || skrivare.some((x) => x.klar === g || x.jobb?.typ === g) || harRecept(g)) || ej.filter((g) => storlekFor(g) <= 2).sort((a, b) => (VAROR[a].recept || 0) - (VAROR[b].recept || 0))[0] || null; };
const nastaInred = () => {
  if (!S.kapitelKlart) {   // kapitel 1: fönster, golv och lampa först, sen krukor och lampskärmar
    const hem = ['fonster', 'golv', 'taklampa'].find((m) => MASKINER[m] && !(m === 'fonster' ? (S.hem?.fonster || []).length >= 2 : arKlar(m)) && (!MASKINER[m].syns || MASKINER[m].syns()));
    if (hem) return 'byggsats:' + hem;
    return ['lampskarm', 'fagelholk', 'kruka'].find((v) => harRecept(v)) || 'kruka';
  }
  const ej = Object.keys(VAROR).filter((g) => VAROR[g].lyx && VAROR[g].syns?.() !== false && !placerade.some((p) => p.typ === g)); return ej.find((g) => antalInv(g) || skrivare.some((x) => x.klar === g || x.jobb?.typ === g) || harRecept(g)) || ej.filter((g) => storlekFor(g) <= storstaSkrivare()).sort((a, b) => (VAROR[a].recept || 0) - (VAROR[b].recept || 0))[0] || null; };
const gamerSaker = () => placerade.filter((p) => GAMER.includes(p.typ)).length;
const harRecept = (id) => !VAROR[id]?.recept || S.ritningar.includes('recept:' + id);
// Maskiner: köp ritningen hos Ali, printa delarna, bygg ihop
const MAGNET_NIVA = 4;   // punkt AX: händer 0, grip 1, sopsäck 2, ryggkorg 3, magnet 4
const MASKINER = {
  kvarnmotor: { namn: 'Kvarnmotor', ikon: '⚙️', beskr: 'Batteridriven – kvarnen mal själv, du slipper veva', monteras: true, syns: () => !!S.grip || S.dag > 1 },   // punkt AX: efter gripen
  // punkt AS: begagnat hos Ali – köps som saker, inte som 3D-modeller (ingen print)
  gammalkvarn: { namn: 'Kvarnen', ikon: '⚙️', direkt: true, monteras: true, ritning: 50, delar: 1, gram: 0, tid: 0, syns: () => !!S.cykelOmbyggd, beskr: 'Pappas köttkvarn, ombyggd: den mal plasten och pressar ut den som filament på en rulle. Begagnad – redan 80 % full' },   // punkt BC: kvarnen och extrudern är en maskin
  cykelbatteri: { namn: 'Cykelbatteri', ikon: '🔋', direkt: true, monteras: true, ritning: 30, delar: 1, gram: 0, tid: 0, syns: () => !!S.cykelOmbyggd, beskr: 'Sparar ström från cykeln – skrivaren printar klart även när du slutar trampa. Kopplas in direkt' },
  solpark: { namn: 'Solcellspark', ikon: '☀️', syns: () => S.kapitel >= 2, beskr: `Sex paneler på rad – ger ${SOLPARK_PER_S} ström/s, mer än du hinner trampa. Stora skrivare behöver en park`, trivsel: 4, radie: 1.5 },
  bank: { namn: 'Batteribank', ikon: '🔋', syns: () => S.kapitel >= 2 && harPlacerat('sol'), beskr: `Lagrar ${BANK_PLUS} ström till – första banken fördubblar batteriet. Bygg flera när solen inte räcker`, trivsel: 2, radie: 0.45 },
  korg: { namn: 'Sopsäck', ikon: '🗑️', syns: () => S.dag >= 2 && !!S.grip, beskr: `En svart sopsäck över axeln – bär ${BARA_SKRAP[2]} skräp i stället för ${BARA_SKRAP[1]}`, verktyg: true },
  ryggsack2: { namn: 'Större ryggsäck', ikon: '🎒', syns: () => S.kapitel >= 2, beskr: `Ryggsäcken får ${RYGG_STOR} platser i stället för ${RYGG_BAS}`, verktyg: true },
  // karra och stortratt säljs inte hos Ali (syns: false): kärran kommer från Rolf
  karra: { namn: 'Skottkärra', ikon: '🛒', syns: () => false, beskr: 'Lyft tungt skräp: regntunnor och kajaker – de blir röd PETG i PETG-kvarnen', verktyg: true },
  petgkvarn: { namn: 'PETG-kvarn', ikon: '', syns: () => S.kapitel >= 2, beskr: 'Röd kvarn för TUNGT skräp: regntunnor, kajaker och Rolfs röda backar blir röd PETG – filament nivå 2. Den vanliga kvarnen klarar inte tunga saker. Ställs på gården.', trivsel: 4, radie: 0.7, flik: 'petg' },
  skrivarepetg: { namn: 'PETG-skrivare', ikon: '', syns: () => S.kapitel >= 2, beskr: 'Röd skrivare som BARA tar röd PETG. Den printar de dyra PETG-sakerna: vas, cykelhjälm, neonskylt, paddel. Står på golvet.', trivsel: 12, flik: 'petg' },
  petgband: { namn: 'Tungt rullband', ikon: '', syns: () => harPlacerat('petgkvarn') && (S.stat.tungMalt || 0) >= 3, monteras: true, beskr: 'PETG-kvarnens eget rullband: hämtar tunnor och kajaker från tippen själv och matar kvarnen. Montera: välj det och klicka på PETG-kvarnen.', flik: 'petg' },
  magnet: { namn: 'Magnetpistol', ikon: '🧲', syns: () => S.kapitel >= 2 && S.karra, beskr: `Klicka och håll, sikta – suger till sig skräp. Bär ${BARA_SKRAP[MAGNET_NIVA]}`, verktyg: true },
  ryggkorg: { namn: 'Ryggkorg', ikon: '🧺', syns: () => S.dag >= 3 && !!S.korg, beskr: `En korg på ryggen – bär ${BARA_SKRAP[3]} skräp i stället för ${BARA_SKRAP[2]}`, verktyg: true },   // punkt AX
  turbomotor: { namn: 'Turbomotor', ikon: '🔥', syns: () => S.kvarn.motor && S.dag >= 5, monteras: true, beskr: 'Kvarnen mal 2,5× snabbare. Drar lite mer ström. Röda ränder ingår' },
  jetmotor: { namn: 'Jetmotor med efterbrännare', ikon: '🚀', syns: () => S.kapitel >= 3 && S.kvarn.turbo, monteras: true, beskr: 'Kvarnen mal 6× snabbare. Med ELD. Drar mycket ström' },
  spolhallare: { namn: 'Stor spolhållare', ikon: '', syns: () => (S.stat.laddat || 0) >= 3 || S.rolf.i >= 1, monteras: true, beskr: 'Monteras på en skrivare – rymmer 7 rullar i stället för 3. Välj den och klicka på skrivaren' },
  spolhallare2: { namn: 'Spolhållare XL', ikon: '', syns: () => skrivare.some((x) => (x.spolNiva || 0) >= 1), monteras: true, beskr: 'Bygger på den stora spolhållaren: 12 rullar' },
  spolhallare3: { namn: 'Spoltorn', ikon: '', syns: () => skrivare.some((x) => (x.spolNiva || 0) >= 2), monteras: true, beskr: 'Ett torn med 20 rullar – behövs för riktigt stora prints som biljardbord och jacuzzi' },
  matarband: { namn: 'Sophållare', ikon: '🗑️', syns: () => !!S.karra, beskr: `En container bakom kvarnen. Töm hela kärran i den (${BINGE_MAX} st) – den matar tratten själv i kvarnens takt. Montera: välj den och klicka på kvarnen`, monteras: true },
  rullstall: { namn: 'Rullställ vid kvarnen', ikon: '', syns: () => (S.stat.hamtat || 0) >= 3 || S.rolf.i >= 1, beskr: 'Ställs bredvid kvarnen och lagrar 4 rullar till – kvarnen kan mala längre utan att stanna. Upp till tre ställ.', monteras: true },
  hardkniv: { namn: 'Härdade kvarnknivar', ikon: '', syns: () => S.kapitel >= 4, monteras: true, beskr: 'Knivar av härdat stål. Utan dem klarar kvarnen inte Rolfs gröna kolfiberrester – med dem blir de filament nivå 3.' },
  diamantkniv: { namn: 'Diamantkvarn', ikon: '', syns: () => S.kapitel >= 4 && (S.kvarn.kniv || 0) >= 1, monteras: true, beskr: 'Diamantbelagda knivar. Klarar guldkomposit och titanspån – filament nivå 4 och 5.' },
  stortratt: { namn: 'Stor kvarntratt', ikon: '🪣', syns: () => false, beskr: 'Bred tratt med kross – nu får regntunnor och kajaker plats i kvarnen', monteras: true },
  // bygg ut skjulet till ett riktigt hem – printa delarna, välj dem och klicka på skjulet för att montera
  dorr: { namn: 'Dörr', ikon: '🚪', hem: true, monteras: true, syns: () => S.sang, trivsel: 8, beskr: 'En riktig dörr – slut på drag och nyfikna katter' },
  vaggar: { namn: 'Isolerskiva (vägg)', ikon: '🧱', hem: true, monteras: true, syns: () => S.sang, trivsel: 4, beskr: 'En vägg i taget – fyra skivor behövs (bak, vänster, höger, fram). Sen läcker kylan inte in längre' },
  tak: { namn: 'Plåttak', ikon: '🏠', hem: true, monteras: true, syns: () => S.rolf.i >= 1, trivsel: 12, beskr: 'Korrugerade takplåtar över hålet – inget mer regn på kudden' },
  fonster: { namn: 'Fönster', ikon: '🪟', hem: true, monteras: true, syns: () => S.rolf.i >= 1, trivsel: 8, beskr: 'Ljus in i skjulet. Sätt det var du vill på en plan vägg – du kan ha flera (max 4)' },
  golv: { namn: 'Trägolv', ikon: '🪵', hem: true, monteras: true, syns: () => S.rolf.i >= 2, trivsel: 8, beskr: 'Varma golvplankor i stället för kall jord' },
  taklampa: { namn: 'Taklampa', ikon: '💡', hem: true, monteras: true, syns: () => S.rolf.i >= 2, trivsel: 6, beskr: 'Mysigt gult ljus om kvällarna' },
  tapeter: { namn: 'Tapeter', ikon: '🧻', hem: true, monteras: true, syns: () => S.kapitelKlart, trivsel: 20, beskr: 'Riktiga tapeter på insidan – mamma kan inte klaga längre. Kräver tätade väggar' },
  gamingbod: { namn: 'Gamingbod (tillbyggnad)', ikon: '', flik: 'hem', monteras: true, syns: () => S.kapitel >= 3, trivsel: 25, beskr: 'En egen bod bredvid skjulet – med RGB i taket. Plats för hela gamingsetupen' },
  grip: { namn: 'Skräpgrip', ikon: '🦾', syns: () => !!S.kvarnStar || S.dag > 1, beskr: `Bär ${BARA_SKRAP[1]} skräp, lättare att sikta, plockar upp när du går nära`, verktyg: true },
  bord: { namn: 'Arbetsbord', ikon: '🪵', syns: () => S.rolf.i >= 2 && S.dag >= 4, beskr: 'Bordsyta för en skrivare till', trivsel: 8, radie: 1.0 },
  sol: { namn: 'Solpanel', ikon: '☀️', syns: () => S.rolf.i >= 2 && S.dag >= 4, beskr: `Ger ${SOL_PER_S} ström/s av sig själv – en panel driver Skrivare S utan att du trampar`, trivsel: 6, radie: 0.8 },
  rullband: { namn: 'Rullband från tippen', ikon: '', syns: () => S.kapitel >= 3 && S.kvarn.band, monteras: true, beskr: 'Går från tippen till containern bakom kvarnen. Lägg skräp på bandets inmatning vid tippen – du slipper gå hela vägen. Drar lite ström.' },
  lastarm: { namn: 'Lastarm vid tippen', ikon: '', syns: () => !!S.auto?.band, monteras: true, beskr: 'Plockar skräp från tippen och lägger det på bandet åt dig. Orkar bara lätta saker i början – trimma den hos Ali för att lyfta tyngre.' },
  robotarm: { namn: 'Rulladdare (robotarm)', ikon: '', syns: () => !!S.auto?.lastarm, monteras: true, beskr: 'Står vid kvarnen. Tar varje färdig rulle och laddar den skrivare som har minst filament.' },
  saljlada: { namn: 'Säljlåda', ikon: '', syns: () => S.dag >= 3, beskr: 'Ställs vid lägret. Lägg varor i lådan så swishar Ali pengarna direkt – du slipper gå över vägen för att sälja. Mättnaden och "Ali vill ha idag" gäller som vanligt.', trivsel: 2, radie: 0.45 },
  utlada: { namn: 'Leveranslåda + autoprint', ikon: '', syns: () => !!S.auto?.arm, monteras: true, beskr: 'Färdiga saker från skrivarna hamnar direkt i lådan i stället för på skrivaren – du behöver aldrig ta ut något. Ali hämtar den varje morgon och betalar grossistpris: 70 % av fullpris, utan mättnad.' },
  skrivare3: { namn: 'Skrivare L', ikon: '', syns: () => S.kapitel >= 2 && harPlacerat('skrivare2'), beskr: 'Stor byggvolym: soffa, kajak, arkadmaskin, jacuzzi. 4× snabbare än S, två jobb i kö. Står på golvet.', trivsel: 25 },
  // punkt AN: Helens skjul – ritningen kommer från Rolf, säljs aldrig hos Ali. Monteras på den streckade rutan i tippkanten.
  helenskjul: { namn: 'Helens skjul', ikon: '🏚️', flik: 'hem', monteras: true, syns: () => false, ritning: 0, delar: 3, gram: 1000, tid: 20, beskr: 'Rolfs ritning: som ditt första skjul, fast sämre. Ställs på den streckade rutan i tippkanten' },
  skrivare2: { namn: 'Skrivare M', ikon: '🖨️', syns: () => harPlacerat('bord'), beskr: 'Skalhoppet: dubbelt så stor byggvolym, 2,5× snabbare och en kö – lägg upp till tre saker i kö medan den printar. Printar drönare, gitarr och gamingstol. Måste stå på ett arbetsbord.', trivsel: 15, kraverBord: true },
};
// vad varje del heter – det är de här som printas en i taget
const DEL_NAMN = {
  kvarnmotor: ['Motorhus', 'Fläkthjul'], bank: ['Batterilåda', 'Lock med kontakter'], korg: ['Säck'], ryggkorg: ['Korg', 'Axelremmar'], ryggsack2: ['Säck', 'Axelremmar'],
  karra: ['Korg', 'Hjul', 'Handtag'], saljlada: ['Låda', 'Lock med skylt'], petgkvarn: ['Kvarnhus', 'Kross', 'Spolhållare'], skrivarepetg: ['Stålram', 'Byggbädd', 'Härdat munstycke', 'Kapsling', 'Styrkort'], petgband: ['Bandram', 'Gummiband', 'Gripklo'], magnet: ['Pistolkropp', 'Magnetspole', 'Batterilucka'], stortratt: ['Tratt', 'Krosskäftar'], hardkniv: ['Knivhållare', 'Härdade knivar'], diamantkniv: ['Knivtrumma', 'Diamantknivar', 'Lager'],
  grip: ['Käftar', 'Skaft med avtryckare'], bord: ['Bordsskiva', 'Ben', 'Ben'], sol: ['Panelram', 'Solceller', 'Stativ'], solpark: ['Panelrad', 'Solceller', 'Solceller', 'Växelriktare'],
  skrivare2: ['Ram', 'Byggbädd', 'Skrivhuvud', 'Extruder', 'Styrkort'],
  spolhallare3: ['Torn', 'Axlar', 'Fot', 'Hylsor'],
  rullband: ['Motorrulle', 'Bandsektioner', 'Ben', 'Styrlåda'], lastarm: ['Fot', 'Vridled', 'Lyftarm', 'Gripklo'], robotarm: ['Bas', 'Axel', 'Underarm', 'Gripklo'], utlada: ['Låda', 'Lock', 'Rutschkana'],
  skrivare3: ['Stålram', 'Stor byggbädd', 'Linjärskenor', 'Dubbelt skrivhuvud', 'Kapsling', 'Styrkort'],
};
for (const [id, v] of Object.entries(B.MASKIN_SIFFROR)) Object.assign(MASKINER[id], v);
// ger: vad maskinen gör för dig – [kort bricka, hel mening]. Visas först på Alis kort ("Du får").
const MASKIN_GER = {
  kvarnmotor: () => ['Mal själv', 'Kvarnen mal själv – du slipper veva'],
  solpark: () => [`+${SOLPARK_PER_S}/s`, `+${SOLPARK_PER_S} ström/s`],
  bank: () => [`+${BANK_PLUS}`, `Batteriet rymmer +${BANK_PLUS} ström`],
  korg: () => [`${BARA_SKRAP[2]} st`, `Bär ${BARA_SKRAP[2]} skräp`],
  ryggsack2: () => [`${RYGG_STOR} pl`, `Ryggsäcken får ${RYGG_STOR} platser`],
  karra: () => ['Tungt', 'Lyft tunnor och kajaker'],
  petgkvarn: () => ['PETG', 'Tungt skräp blir röd PETG (filament nivå 2)'],
  skrivarepetg: () => ['PETG', `Printar PETG-saker: vas ${saljPris('n2_vas').toLocaleString('sv-SE')} kr – paddel ${saljPris('n2_paddel').toLocaleString('sv-SE')} kr`],
  petgband: () => ['Auto', 'Hämtar tunnor och kajaker till PETG-kvarnen åt dig'],
  magnet: () => [`${BARA_SKRAP[MAGNET_NIVA]} st`, `Bär ${BARA_SKRAP[MAGNET_NIVA]} skräp och suger till sig på avstånd`],
  ryggkorg: () => [`${BARA_SKRAP[3]} st`, `Bär ${BARA_SKRAP[3]} skräp`],
  turbomotor: () => ['2,5×', 'Kvarnen mal 2,5× snabbare'],
  jetmotor: () => ['6×', 'Kvarnen mal 6× snabbare'],
  spolhallare: () => ['7 rullar', 'Skrivaren rymmer 7 rullar i stället för 3'],
  spolhallare2: () => ['12 rullar', 'Skrivaren rymmer 12 rullar'],
  spolhallare3: () => ['20 rullar', 'Skrivaren rymmer 20 rullar'],
  matarband: () => [`${BINGE_MAX} st`, `Container för ${BINGE_MAX} skräp – bandet matar kvarnen`],
  rullstall: () => ['+4 rullar', 'Kvarnen lagrar 4 rullar till'],
  hardkniv: () => ['Nivå 3', 'Kvarnen klarar kolfiber (filament nivå 3)'],
  diamantkniv: () => ['Nivå 4–5', 'Kvarnen klarar guld och titan (filament nivå 4–5)'],
  stortratt: () => ['Tungt', 'Tunnor och kajaker får plats i kvarnen'],
  grip: () => [`${BARA_SKRAP[1]} st`, `Bär ${BARA_SKRAP[1]} skräp och plockar när du går nära`],
  bord: () => ['+1 skrivare', 'Bordsyta för en skrivare till'],
  sol: () => [`+${SOL_PER_S}/s`, `+${SOL_PER_S} ström/s av sig själv`],
  rullband: () => ['Auto', 'Skräp från tippen åker till kvarnen själv'],
  lastarm: () => ['Auto', `Plockar skräp åt dig (var ${String(LASTARM_TID).replace('.', ',')} s, upp till ${LASTARM_MAX} g)`],
  robotarm: () => ['Auto', 'Laddar skrivarna med rullar åt dig'],
  saljlada: () => ['Swish', 'Sälj vid lägret – Ali swishar direkt'],
  utlada: () => [`${Math.round(GROSSIST * 100)} %`, `Autoprint: allt hamnar i lådan, Ali betalar ${Math.round(GROSSIST * 100)} % nästa morgon`],
  skrivare2: () => ['2,5×', 'Mellanstora saker (M) och 2,5× snabbare än S'],
  skrivare3: () => ['4×', 'Stora saker (L) och 4× snabbare än S'],
};
for (const [id, f] of Object.entries(MASKIN_GER)) if (MASKINER[id]) MASKINER[id].ger = f;
// PRIS_SKALA (se balans.js): ritningar och lyx-recept från 150 kr skalas här, en gång vid start
for (const v of Object.values(MASKINER)) if (v.ritning >= 150) v.ritning = Math.round(v.ritning * PRIS_SKALA / 10) * 10;
for (const v of Object.values(VAROR)) if (v.lyx && v.recept >= 150) v.recept = Math.round(v.recept * PRIS_SKALA / 10) * 10;
// ---------- Ali får in nytt i lagom takt: högst två nyheter per dag ----------
// Saker som behövs för dagens uppdrag släpps alltid direkt (annars kan man fastna).
// Övrigt (uppgraderingar, recept, lyx) släpps billigast först, två om dagen – en naturlig progression.
const SLAPP_FRI = new Set(['korg', 'ryggkorg', 'matarband', 'saljlada', 'petgkvarn', 'skrivarepetg', 'petgband', 'solpark', 'n2_vas', 'n2_hjalm', 'n2_neon', 'n2_paddel', 'fagelholk', 'lampskarm', 'dronare', 'skateboard', 'gitarr', 'cykelram', 'pkajak', 'grip', 'kvarnmotor', 'sang', 'dorr', 'vaggar', 'tak', 'fonster', 'golv', 'taklampa', 'tapeter', 'stortratt', 'bord', 'sol', 'skrivare2', 'gamingbod', 'karra', 'hardkniv', 'diamantkniv', 'mobilstall', 'skrivare3', 'jacuzzi', 'gamingstol', 'hogtalare', 'ledpinne']);
const SLAPP_ORIG = {};
const stegKraver = (id) => { try { const st = STEG[S.steg]; const b = typeof st?.bild === 'function' ? st.bild() : st?.bild; return b === 'byggsats:' + id || b === id; } catch { return false; } };
const slappPris = (id) => MASKINER[id]?.ritning ?? VAROR[id]?.recept ?? 0;
for (const [id, v] of [...Object.entries(MASKINER), ...Object.entries(VAROR)]) {
  if (typeof v.syns !== 'function' || SLAPP_FRI.has(id)) continue;
  SLAPP_ORIG[id] = v.syns;
  v.syns = () => SLAPP_ORIG[id]() && (!S.slappt || S.slappt.includes(id) || stegKraver(id));   // punkt AX: det dagens mål kräver släpps alltid
}
function slappNya() {
  const kandidater = Object.keys(SLAPP_ORIG).filter((id) => !S.slappt?.includes(id) && SLAPP_ORIG[id]());
  if (!S.slappt) { S.slappt = kandidater; S.slapptDag = {}; return; }   // första gången: det som syns från start
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
DEL_NAMN.helenskjul = ['Väggar', 'Tak', 'Dörr'];
Object.assign(DEL_NAMN, { dorr: ['Dörrblad', 'Gångjärn och handtag'], vaggar: ['Isolerskiva'],
  tak: ['Takplåt 1', 'Takplåt 2', 'Takplåt 3'], fonster: ['Fönsterkarm', 'Ruta'], golv: ['Golvplankor 1', 'Golvplankor 2', 'Golvlister'], taklampa: ['Lampa med sladd'] });
const delNamn = (m, i) => DEL_NAMN[m]?.[i] || `del ${i + 1}`;
const GEN = { 1: { fart: 1, strom: 4, namn: 'S', storlek: 1, mm: 180 }, 2: { fart: 2.5, strom: 10, namn: 'M', storlek: 2, mm: 350 }, 3: { fart: 4, strom: 22, namn: 'L', storlek: 3, mm: 1000 }, 4: { fart: 2, strom: 8, namn: 'PETG', storlek: 2, mm: 400 } };
// skrivarens storlek bestämmer vad den kan printa: S små saker, M mellanstora, L stora (soffa, kajak, jacuzzi …)
const SKRIVARTYP = { skrivare2: 2, skrivare3: 3, skrivarepetg: 4 };
const PETG_GEN = 4;
const filTyp = (sk) => sk.gen === PETG_GEN ? 'rulle2' : 'rulle';   // vilken rulle skrivaren äter
const STORLEK_NAMN = { 1: 'S', 2: 'M', 3: 'L', 4: 'PETG' };
const storlekFor = (typ) => { const v = VAROR[typ]; if (!v) return 1; if (v.storlek) return v.storlek; return v.gram <= 1200 ? 1 : v.gram <= 5000 ? 2 : 3; };
 const skrivStorlek = (sk) => Math.min(3, GEN[sk.gen].storlek + (sk.mod === 'm_grav' ? 1 : 0));
// filamentnivåer: 1 vanlig plast → 2 röd PETG → 3 grön kolfiber → 4 guldkomposit → 5 titan. Varje nivå kommer från ett fynd av samma nivå.
const NIVA_FARG = { 1: 'blå', 2: 'röd', 3: 'grön', 4: 'guld', 5: 'titan' };
const nivaFor = (id) => VAROR[id]?.niva || VAROR[id]?.fil || VAROR[id]?.malTill || 0;
const nivaText = (n) => n === 2 ? `Printas på PETG-skrivaren med röd PETG – den kommer från PETG-kvarnen (tunnor, kajaker, Rolfs röda backar)` : `Kräver 1 rulle filament nivå ${n} (${NIVA_FARG[n]}) – du har ${antalInv('rulle' + n)}. Mal ett fynd nivå ${n} från Rolf i kvarnen (${n <= 3 ? 'härdade knivar' : 'diamantknivar'}).`;
const storlekRuta = (id, maskin) => (maskin ? (MASKINER[id]?.storlek || 1) : storlekFor(id));
const storstaSkrivare = () => Math.max(1, ...skrivare.filter((x) => x.gen !== 4).map((x) => x.gen));  // strom = ström per sekund när den printar
const SANG_INSTRUKTION = 60;    // kr – sängen låses upp efter första uppgraderingen
const SPOL_MAX = [3000, 7000, 12000, 20000];   // rullar per skrivare: vanlig 3 · stor 7 · XL 12 · torn 20 – varje rulle syns i stället
const SPOL_NIVA = { spolhallare: 1, spolhallare2: 2, spolhallare3: 3 };
const maxFil = (sk) => SPOL_MAX[sk.spolNiva || 0];

// verktygsnivå för skräp: magnetpistolen gäller bara när den är vald i verktygsraden – annars gripen (sopsäcken ger mer plats)
const niva = () => (S.magnet && S.hotbar?.[S.vald]?.typ === 'magnet') ? MAGNET_NIVA : S.ryggkorg ? 3 : S.korg ? 2 : S.grip ? 1 : 0;
const skrapLage = () => S.vald === 0 || S.hotbar?.[S.vald]?.typ === 'magnet';
// Alis trimningar: oändliga uppgraderingar – varje nivå kostar mer (exponentiellt), effekten växer linjärt
const TRIM = {
  kvarn: { namn: 'Kvarntrim', ikon: '⚙️', bas: 300, vaxt: 1.6, beskr: (l) => `Kvarnen mal ${l * 25} % snabbare` },
  skrivare: { namn: 'Skrivartrim', ikon: '🖨️', bas: 400, vaxt: 1.6, beskr: (l) => `Skrivarna printar ${l * 20} % snabbare` },
  pris: { namn: 'Säljsnack', ikon: '🪙', bas: 500, vaxt: 1.7, beskr: (l) => `Ali betalar ${l * 10} % mer för prints` },
  sopbil: { namn: 'Mutor till Rolf', ikon: '🚛', bas: 250, vaxt: 1.5, beskr: (l) => `Sopbilen tippar ${l * 3} skräp extra varje gång` },
  batteri: { namn: 'Batteritrim', ikon: '🔋', bas: 200, vaxt: 1.5, beskr: (l) => `+${l * 100} ström i batteriet` },
  utlager: { namn: 'Rullhållare vid kvarnen', ikon: '', bas: 120, vaxt: 1.9, tidig: true, syns: () => S.kvarn.motor || (S.stat.hamtat || 0) >= 2, beskr: (l) => `Rymmer ${utlagerKap(l)} färdiga rullar innan kvarnen måste stanna` },
  band: { namn: 'Bandtrim', ikon: '', bas: 600, vaxt: 1.6, syns: () => !!S.auto?.band, beskr: (l) => `Bandet går ${Math.round((1.25 ** l - 1) * 100)} % fortare och rymmer ${BAND_BAS + l * 3} saker` },
  arm: { namn: 'Armtrim', ikon: '', bas: 700, vaxt: 1.65, syns: () => !!S.auto?.lastarm, beskr: (l) => `Lastarmen lyfter ${(armMax(l) / 1000).toLocaleString('sv-SE', { maximumFractionDigits: 1 })} kg och är ${Math.round((1 / 0.85 ** l - 1) * 100)} % snabbare` },
};
const trimNiva = (k) => S.trim?.[k] || 0;
const utlagerKap = (l = trimNiva('utlager')) => ([1, 2, 5, 10, 20][l] ?? 20 + (l - 4) * 10) + 4 * Math.min(3, S.rullstall || 0);
const extruderFull = () => S.kvarn.ut >= utlagerKap() * RULLE;
const trimPris = (k) => Math.round(TRIM[k].bas * TRIM[k].vaxt ** trimNiva(k));
const harProto = (id) => (S.proto || []).includes(id);
const STROM_UTAN_BATTERI = 12;   // punkt AS: utan cykelbatteriet räcker strömmen bara medan du trampar (ungefär en sekund)
const stromMax = () => !S.batteriKopt ? STROM_UTAN_BATTERI : STROM_BAS + placerade.filter((p) => p.typ === 'bank').length * BANK_PLUS + trimNiva('batteri') * 100 + (harProto('m_fusion') ? 600 : 0);

// filament visas som procent av en rulle: 20 %, 1 rulle 40 %, 3 rullar
const rullar = (g) => {
  const hela = Math.floor(g / RULLE + 1e-6), rest = Math.round((g - hela * RULLE) / (RULLE / 100));
  if (!hela) return `${rest} % rulle`;
  return `${hela} ${hela === 1 ? 'rulle' : 'rullar'}` + (rest ? ` ${rest} %` : '');
};

// ---------- Story-lappar ----------
const LAPPAR = {
  // punkt N: Rolfs brev dag 11 och efter växthuset
  tr_brev: ['✉️ Brev från Rolf', 'ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF'],
  tr_rosor: ['✉️ Brev från Rolf', 'Hon hade gillat dä. Ja planterade rosorna i natt. Kajsa höll ficklampan. Hon ä int bra på att hålla ficklampa. MVH ROLF'],
  // punkt L: den hemliga beställaren N. – prydlig gammaldags stil
  n0: ['📜 Lapp från N.', 'Undertecknad önskar beställa en fågelholk. Fåglarna i trakten har ingenstans att bo. Det har undertecknad i viss mening inte heller. Lämnas i lådan vid staketet. Med vänlig hälsning, N.'],
  n1: ['📜 Lapp från N.', 'Tack för holken. Den är bebodd. Undertecknad önskar nu en lampskärm, helst i en lugn färg. Det är mörkt om kvällarna här ute. Med vänlig hälsning, N.'],
  n2: ['📜 Lapp från N.', 'Undertecknad önskar en vas. Röd. Till en blomma som undertecknad tänker köpa sig själv. Det är tillåtet. Med vänlig hälsning, N.'],
  n3: ['📜 Lapp från N.', 'Undertecknad har sett era maskiner genom kikaren. Det är imponerande. Undertecknad önskar ett mobilställ, för att kunna se på väderleksrapporten och samtidigt ha händerna fria. Med vänlig hälsning, N.'],
  n4: ['📜 Lapp från N.', 'Undertecknad önskar en kaffekopp med namnet BENGT-ÅKE. Diskret paketerad. Med vänlig hälsning, B-Å N.'],
  n4tom: ['📜 Lapp från N.', 'Undertecknad önskar ingenting. Undertecknad ville bara skriva. B-Å N.'],
  navsl2: ['📜 Bengt-Åke vid staketet', 'HMPF. … Ja. Det var jag. N. som i Nabon. … Undertecknad ville bara skriva till någon. … Ängen. Ni vill ha den till huset. Ta den. Till marknadspris. Det är ingen välgörenhet. … HMPF.'],
  navsl: ['📜 Bengt-Åke vid staketet', 'HMPF. … Ja. Det var jag. N. som i Nabon. … Ingen har gjort nåt åt mig sen nittonhundranittiotvå. … Ängen. Ni vill ha den till huset. Ta den. Till marknadspris. Det är ingen välgörenhet. … HMPF. Tack för koppen.'],
  skylt: ['📔 Dagbok', 'Spikade ihop en skylt av lösa bräder från tippen och målade på den. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT.'],
  start: ['📔 Dagbok', 'Dag 1. Inget mer tjat. Här står jag, vid soptippen, med storebrors gamla 3D-skrivare och ett skjul som luktar mus. Men skräp är plast – och plast är filament. Plan: 1) en säng. 2) städa gården. 3) bygga om skjulet till en riktig fristad – med gamingsetup.'],
  sang: ['📔 Dagbok', 'Första natten i en riktig säng. Jag printade den själv.'],
  mammajul: ['✉️ Brev från Mamma', 'Grattis till nya huset. Oj vad städat och fint det är. Imponerad. Pappa också, han säger det bara inte. Kram, Mamma'],
  polett: ['📔 Dagbok', 'Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus.'],
  sopbil: ['📔 Dagbok', 'Sopbilen tippade en ny last. All den plasten – och grinden är låst.'],
  malt: ['📔 Dagbok', 'Kvarnen funkar. Soptippen är en gruva.'],
  motor: ['📔 Dagbok', 'Grip OCH motor. Nu går det undan.'],
  salt: ['🧺 Ali', 'Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta.'],
  ritning: ['📔 Dagbok', 'Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner.'],
  sol: ['📔 Dagbok', 'Slut på trampandet. Nästan.'],
  petg: ['📔 Dagbok', 'Tunnorna och kajakerna är för tunga för min lilla kvarn. Men Ali har en röd kvarn för sånt – PETG. Röd plast. Och en röd skrivare som bara äter den. Två fabriker. Jag har två fabriker. Snart.'],
  skrivare2: ['📱 Storebror', 'VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥'],
  klart: ['📔 Dagbok', 'Det börjar kännas som ett hem. På riktigt. Pappa ska visst komma förbi.'],
  gard: ['📔 Dagbok', 'Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det.'],
};

// brev från Rolf heter 'rolf:0', 'rolftack:0' osv
// ROLF definieras längre ner – läs den försiktigt så att tidiga anrop inte kraschar
const rolfMorgonRa = (n) => (ROLF?.[n - 1]?.tack || '') + '\n\n' + (ROLF?.[n]?.brev || '');   // B2: tack för förra presenten + nästa önskan i ett brev
const rolfText = (n, falt) => { try { return rolfDialekt(ROLF?.[n]?.[falt] || '', false); } catch { return ''; } };
// Rolf kommer från bonnvischan – det ska synas och höras. På sms skriver han med ett finger, så det blir lite fel.
const ROLF_ORD = { inte: 'int', här: 'hä', där: 'dä', mig: 'mej', dig: 'dej', sig: 'sej', också: 'oxå', något: 'nåt', någon: 'nån', några: 'nåra', sådan: 'sån', sådana: 'såna', säga: 'säja', det: 'dä', de: 'dä', jag: 'ja', är: 'ä', e: 'ä', med: 'mä', me: 'mä', dom: 'dôm', dem: 'dôm', folk: 'fôlk', korv: 'kôrv', noga: 'nôga', fin: 'grann', fina: 'granna', pengar: 'pengar', någonting: 'nånting', mycket: 'mycke', ingenting: 'inget', kommer: 'kömmer', vad: 'va', nu: 'nu', väl: 'väl', titta: 'titta', pojke: 'pôjk', flicka: 'jänta', sedan: 'sen', säger: 'säjer', vet: 'vet' };
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
    // tre steg: brevet (med 3D-modellen) → printa → lägg i lådan. Rolfs tack ligger i lådan nästa morgon.
    { del, text: 'Läs brevet i Rolfs postlåda', klar: () => S.rolf.i > i || (S.rolf.i === i && (S.rolf.aktiv || S.post.tillRolf === v() || S.rolf.hamtad === i)), startPost: 'rolf:' + i },
    { del, text: () => `Printa ${nm()}`, klar: () => S.rolf.i > i || harGava(v()) || S.rolf.hamtad === i },
    { del, text: () => `Lägg ${nm()} i Rolfs postlåda`, klar: () => S.rolf.i > i || S.post.tillRolf === v() || S.rolf.hamtad === i },
  ];
};
function sopbilText() {
  try { if (bil.fas === 'borta' && bil.t < 0) { const s = Math.ceil(-bil.t); return `Sopbilen kommer om ${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')} · printa under tiden`; } } catch { /* bilen finns inte än */ }
  return 'Sopbilen är på väg – Rolf hämtar gåvan';
}
const sovSteg = (dag, del) => ({ del, sov: true, text: 'Klart för idag – sov i skjulet', klar: () => S.dag > dag });
// kapitel 2–4: en dag = en nivå, precis som kapitel 1
const R6 = 'Dag 6 – Röd PETG', R7 = 'Dag 7 – PETG-skrivaren', R8 = 'Dag 8 – Magnetpistolen', R9 = 'Dag 9 – Solcellsparken', R10 = 'Dag 10 – Skrivare L och hösten';
const F11 = 'Dag 11 – Rullbandet', F12 = 'Dag 12 – Robotarmarna', F13 = 'Dag 13 – Gamingboden', F14 = 'Dag 14 – Autoprint och jetmotor', F15 = 'Dag 15 – Fristaden';
const M16 = 'Dag 16 – Egen mark', M17 = 'Dag 17 – Kolfiber och ängen', M18 = 'Dag 18 – Ett riktigt hus', M19 = 'Dag 19 – Diamantkvarnen', M20 = 'Dag 20 – Vintern', M21 = 'Dag 21 – Folkbokförd', M22 = 'Dag 22 – Jul på Soptippsvägen 1';
const K2 = R6;   // första dagen i kapitel 2 (äldre kod letar efter den)
const KAPITEL = [null,
  { namn: 'Ett hem att bo i', mal: 'Bygg ett hem där du inte fryser – och som är lite trevligt.' },
  { namn: 'Röda fabriken', mal: 'Tunga saker blir röd PETG. Bygg en egen röd fabrik bredvid den blå – och klara hösten.' },
  { namn: 'Fabriken sköter sig själv', mal: 'Bygg maskiner som jobbar åt dig – sen en gamingbod och en jacuzzi.' },
  { namn: 'Folkbokförd', mal: 'Köp marken, bygg ett riktigt hus och bli skriven på Soptippsvägen 1 före jul.' }];
const KAP1_NAMN = 'Ett hem att bo i', KAP1_MAL = 'Bygg ett hem där du inte fryser – och som är lite trevligt.';
const D1 = 'Dag 1 – Kom igång', N1 = 'Dag 2 – Tippen och Rolf', N2 = 'Dag 3 – Kärran och säljlådan', N3 = 'Dag 4 – El och sol', N4 = 'Dag 5 – Printfarmen';
const KAP1_DELAR = [D1, N1, N2, N3, N4];   // en dag = en nivå – du sover dig vidare
const KAP_DELAR = [null, KAP1_DELAR, [R6, R7, R8, R9, R10], [F11, F12, F13, F14, F15], [M16, M17, M18, M19, M20, M21, M22]];
const kapitelFor = (del) => KAP_DELAR.findIndex((d) => d && d.includes(del));
// vilket kapitel spelaren är i: räknas fram ur stegen
const kapitelNu = () => S.steg >= STEG.length ? 4 : Math.max(1, kapitelFor(STEG[S.steg]?.del));
const printat = (typ) => (S.printTot || {})[typ] || 0;
// enkla upplästa instruktioner för dag 1 (för den som inte läser så mycket) – index = steg
// punkt AS: dag 1 börjar från blankt. Stegen har id, så att pilen och uppläsningen inte hänger på ordningen.
const STEG_TAL = {
  lasta: 'Klicka på cykeln och lasta av storebrors skrivare.',
  stall: 'Ställ skrivaren på den lysande platsen i linje ett.',
  bygg: 'Klicka på cykeln igen och gör om den så att den ger ström.',
  trampa: 'Trampa cykeln för ström och printa en nyckelring på skrivaren.',
  salj: 'Gå över vägen till Ali och sälj nyckelringen. Eller printa två till först – filamentet räcker till tre.',
  kop: 'Köp kvarnen hos Ali. Och cykelbatteriet, om pengarna räcker.',
  kvarn: 'Ställ kvarnen på den lysande rutan i linje ett.',
  flaska: 'Plocka en flaska, lägg den i kvarnen och veva. Då blir det en hel rulle.',
  kopGrip: 'Köp en skräpgrip hos Ali. Den kostar femtio kronor.',
  printGrip: 'Printa skräpgripen på skrivaren.',
  kopSack: 'Köp sopsäcken hos Ali och printa den. Då bär du sex saker.',
  kruka: 'Ali har ett recept åt dig. Printa en blomkruka.',
  ryggkorg: 'Bygg ryggkorgen. Då bär du tio saker.',
  pall: 'Köp receptet till pallen hos Ali och printa en.',
  kopMotor: 'Köp kvarnmotorn hos Ali.',
  kopSang: 'Köp 3D-modellen till en säng hos Ali.',
  printSang: 'Printa sängen på skrivaren.',
  sov1: 'Ställ sängen i skjulet och sov.',
};
const STEG = [
  // punkt BC: skylten → lasta av → ställ skrivaren → koppla cykeln → trampa. Ordet "trampa" kommer först när cykeln är kopplad.
  { id: 'lasta', del: D1, text: 'Lasta av skrivaren från cykeln', klar: () => !!S.skrivareLastad || S.dag > 1 },
  { id: 'stall', del: D1, text: 'Ställ skrivaren på sin plats i linje 1', klar: () => !!S.skrivareStar || S.dag > 1 },
  { id: 'bygg', del: D1, text: 'Gör om cykeln så att den ger ström', klar: () => !!S.cykelOmbyggd || S.dag > 1 },
  { id: 'trampa', del: D1, bild: 'nyckelring', text: 'Trampa cykeln för ström och printa en nyckelring', klar: () => printat('nyckelring') >= 1 || S.stat.printat >= 1 || S.dag > 1 },
  // brorsans två sms kommer när den första är klar – sedan kan man printa två till (300 g räcker till 3) eller gå direkt
  { id: 'salj', del: D1, text: () => printat('nyckelring') < 3 && (skrivare.find((x) => x.id === 'g1')?.fil || 0) >= 100 ? 'Sälj den hos Ali, över vägen (eller printa två till först)' : 'Sälj den hos Ali, över vägen', klar: () => (S.stat.salt || 0) >= 1 || S.kvarnKopt || S.dag > 1 },
  { id: 'kop', del: D1, bild: () => !S.kvarnKopt ? 'byggsats:gammalkvarn' : null, text: () => !S.kvarnKopt ? `Köp kvarnen hos Ali (50 kr)${S.batteriKopt ? '' : ' – och cykelbatteriet (30 kr) om pengarna räcker'}` : 'Köp kvarnen hos Ali', klar: () => !!S.kvarnKopt || S.dag > 1 },
  { id: 'kvarn', del: D1, text: 'Ställ kvarnen på sin ruta i linje 1', klar: () => !!S.kvarnStar || S.dag > 1 },
  { id: 'flaska', del: D1, text: () => S.kvarn.tratt ? `Veva kvarnen · ${Math.round(Math.min(S.kvarn.ut, RULLE) / RULLE * 100)} %` : hand.saker.length ? 'Lägg flaskan i kvarnen' : 'Plocka en flaska och mal den', klar: () => S.stat.hamtat >= 1 || S.dag > 1, lapp: 'malt' },
  // punkt AG: en sak i taget – gripen, en kruka, motorn, sedan sängen
  { id: 'kopGrip', del: D1, bild: 'byggsats:grip', text: () => S.mynt >= 50 ? 'Köp skräpgripen hos Ali (50 kr)' : `Printa och sälj nyckelringar · ${S.mynt}/50 kr till gripen`, klar: () => S.ritningar.includes('grip') || forstaUpp() || S.dag > 1, lapp: 'ritning' },
  { id: 'printGrip', del: D1, text: () => skrivare.some((x) => x.klar === 'byggsats:grip') ? 'Ta skräpgripen ur skrivaren' : 'Printa din skräpgrip', klar: () => forstaUpp() || S.dag > 1 },
  { id: 'kopMotor', del: D1, bild: 'byggsats:kvarnmotor', text: () => S.mynt >= 50 ? 'Köp kvarnmotorn hos Ali (50 kr)' : `Printa och sälj mer · ${S.mynt}/50 kr till kvarnmotorn`, klar: () => S.ritningar.includes('kvarnmotor') || S.kvarn.motor || S.dag > 1 },
  { id: 'kopSang', del: D1, bild: 'sang', text: () => S.mynt >= SANG_INSTRUKTION ? `Köp sängens 3D-modell hos Ali (${SANG_INSTRUKTION} kr)` : `Printa och sälj mer · ${S.mynt}/${SANG_INSTRUKTION} kr till sängen`, klar: () => S.ritningar.includes('sang') || S.sang },
  { id: 'printSang', del: D1, bild: 'sang', text: 'Printa sängen', klar: () => antalInv('sang') > 0 || S.sang },
  { id: 'sov1', del: D1, text: 'Ställ sängen i skjulet och sov', klar: () => S.sang && S.dag >= 2, lapp: 'sang',
    sms: ['mamma', 'Har du sovit nåt? Du har väl tandborste?? Och äter du?? Svara inte, jag vet att du är arg. ❤️ /Mamma'] },
  // punkt AX: dag 2 – sopsäcken och krukan, sedan gården, Rolf, tippen och dörren
  { id: 'kopSack', del: N1, bild: 'byggsats:korg', text: 'Skaffa sopsäcken – bär 6 skräp', klar: () => !!S.korg || S.dag > 2 },
  { id: 'kruka', del: N1, bild: 'kruka', text: 'Printa en blomkruka', klar: () => printat('kruka') >= 1 || S.dag > 2 },
  { del: N1, text: () => `Städa gården · ${Math.max(0, gardSkrap() - gardMal())} kvar`, klar: () => gardSkrap() <= gardMal() || S.rolf.i >= 1 || S.post.tillRolf, lapp: 'gard',
    sms: ['mamma', 'Rolf på sopbilen ringde. Han säger att du STÄDAR?! Vem är du och vad har du gjort med mitt barn? ❤️'] },
  ...rolfSteg(0, N1),
  { del: N1, text: 'Hämta 5 skräp på soptippen', klar: () => S.stat.tipp >= 5 },
  { del: N1, bild: 'byggsats:dorr', text: 'Bygg en dörr till skjulet', klar: () => S.hem?.dorr || S.dag > 2 },
  sovSteg(2, N1),
  ...rolfSteg(1, N2),
  // punkt AX: dag 3 – ryggkorgen och skottkärran, säljlådan, pallen och taket
  { id: 'ryggkorg', del: N2, bild: 'byggsats:ryggkorg', text: 'Bygg ryggkorgen – bär 10 skräp', klar: () => !!S.ryggkorg || S.dag > 3 },
  { del: N2, bild: 'karra', text: 'Fyll kärran med skräp och töm den i kvarnen', klar: () => (S.stat.karraTomt || 0) >= 1 || S.dag > 3 || S.kapitelKlart },
  { id: 'sophallare', del: N2, bild: 'byggsats:matarband', text: 'Bygg sophållaren', klar: () => !!S.kvarn.band || S.dag > 3 || S.kapitelKlart },   // B3
  { del: N2, bild: 'byggsats:saljlada', text: 'Bygg säljlådan vid lägret', klar: () => harPlacerat('saljlada') || S.dag > 3 || S.kapitelKlart },
  { id: 'pall', del: N2, bild: 'pall', text: 'Printa en pall', klar: () => printat('pall') >= 1 || S.dag > 3 },
  { del: N2, bild: 'byggsats:tak', text: 'Lägg plåttak på skjulet', klar: () => S.hem?.tak || S.dag > 3 },
  sovSteg(3, N2),
  ...rolfSteg(2, N3),
  { del: N3, bild: 'byggsats:bord', text: 'Bygg ett arbetsbord', klar: () => harPlacerat('bord') },
  { del: N3, bild: 'byggsats:sol', text: 'Bygg en solpanel', klar: () => harPlacerat('sol'), lapp: 'sol' },
  { del: N3, bild: 'byggsats:vaggar', text: () => `Isolera två väggar · ${Math.min(2, S.hem?.vagg || 0)}/2`, klar: () => (S.hem?.vagg || 0) >= 2 || S.hem?.vaggar || S.dag > 4 },
  sovSteg(4, N3),
  ...rolfSteg(3, N4),
  { del: N4, bild: 'byggsats:vaggar', text: () => `Isolera de sista väggarna · ${S.hem?.vagg || 0}/4`, klar: () => S.hem?.vaggar || (S.hem?.vagg || 0) >= 4 || S.dag > 5 },
  { del: N4, bild: 'byggsats:skrivare2', text: 'Bygg Skrivare M på bordet', klar: () => harPlacerat('skrivare2'), lapp: 'skrivare2' },
  { del: N4, bild: () => nastaInred(), text: () => `Gör det mysigt · trivsel ${trivsel()}/${TRIVSEL_MAL}`, klar: () => trivsel() >= TRIVSEL_MAL, lapp: 'klart' },
  // ---------- Kapitel 2 – Röda fabriken (dag 6–10) ----------
  { del: R6, bild: 'karra', text: 'Lyft en tunna med skottkärran', klar: () => (S.stat.tunga || 0) >= 1 },
  { del: R6, bild: 'byggsats:petgkvarn', text: 'Bygg den röda PETG-kvarnen', klar: () => harPlacerat('petgkvarn') },
  { del: R6, text: 'Mal tunnan i PETG-kvarnen', klar: () => (S.stat.tungMalt || 0) >= 1 },
  sovSteg(6, R6),
  { del: R7, bild: 'byggsats:skrivarepetg', text: 'Bygg PETG-skrivaren', klar: () => harPlacerat('skrivarepetg') },
  { del: R7, bild: 'n2_vas', text: 'Printa en designvas i röd PETG', klar: () => printat('n2_vas') >= 1 || (S.saltTot?.n2_vas || 0) >= 1 },
  { del: R7, bild: 'n2_vas', text: 'Sälj designvasen', klar: () => (S.saltTot?.n2_vas || 0) >= 1 },
  sovSteg(7, R7),
  { del: R8, bild: 'byggsats:magnet', text: 'Bygg magnetpistolen', klar: () => !!S.magnet },
  { del: R8, text: () => `Mal tunga saker i PETG-kvarnen · ${Math.min(3, S.stat.tungMalt || 0)}/3`, klar: () => (S.stat.tungMalt || 0) >= 3 },
  { del: R8, bild: 'byggsats:bank', text: 'Bygg en batteribank', klar: () => harPlacerat('bank') },
  sovSteg(8, R8),
  { del: R9, bild: 'n2_hjalm', text: 'Köp receptet på cykelhjälmen hos Ali', klar: () => harRecept('n2_hjalm') },
  { del: R9, bild: 'byggsats:solpark', text: 'Bygg en solcellspark', klar: () => harPlacerat('solpark') },
  { del: R9, bild: () => skrivare.some((x) => (x.spolNiva || 0) >= 1) ? 'byggsats:spolhallare2' : 'byggsats:spolhallare', text: 'Montera en spolhållare XL på en skrivare', klar: () => skrivare.some((x) => (x.spolNiva || 0) >= 2) },
  sovSteg(9, R9),
  { del: R10, bild: 'byggsats:skrivare3', text: 'Bygg Skrivare L', klar: () => harPlacerat('skrivare3') },
  { del: R10, bild: 'byggsats:tapeter', text: 'Tapetsera skjulet', klar: () => !!S.hem?.tapeter },
  { del: R10, text: () => `Klara hösten: värme ${Math.min(4, varme())}/4`, klar: () => varme() >= 4 },
  sovSteg(10, R10),
  // ---------- Kapitel 3 – Fabriken sköter sig själv (dag 11–15) ----------
  { del: F11, bild: () => S.kvarn.band ? 'byggsats:rullband' : 'byggsats:matarband', text: 'Bygg rullbandet från tippen', klar: () => !!S.auto?.band },
  { del: F11, text: () => `Mata in skräp med bandet · ${Math.min(20, S.stat.bandSkrap || 0)}/20`, klar: () => (S.stat.bandSkrap || 0) >= 20 },
  sovSteg(11, F11),
  { del: F12, bild: 'byggsats:lastarm', text: 'Bygg lastarmen vid tippen', klar: () => !!S.auto?.lastarm },
  { del: F12, bild: 'byggsats:robotarm', text: 'Bygg rulladdaren vid kvarnen', klar: () => !!S.auto?.arm },
  { del: F12, text: 'Trimma lastarmen hos Ali (Fabriken · Trimma)', klar: () => trimNiva('arm') >= 1 },
  sovSteg(12, F12),
  { del: F13, bild: 'byggsats:gamingbod', text: 'Bygg gamingboden', klar: () => !!S.bod },
  { del: F13, bild: () => nastaGamer(), text: () => `Inred boden · ${Math.min(1, gamerSaker())}/1 gamersak`, klar: () => gamerSaker() >= 1 },
  sovSteg(13, F13),
  { del: F14, bild: 'byggsats:utlada', text: 'Bygg leveranslådan', klar: () => !!S.auto?.lada },
  { del: F14, bild: () => S.kvarn.turbo ? 'byggsats:jetmotor' : 'byggsats:turbomotor', text: 'Montera jetmotorn på kvarnen', klar: () => !!S.kvarn.jet },
  { del: F14, text: 'Trimma sopbilen hos Ali (Mutor till Rolf)', klar: () => trimNiva('sopbil') >= 1 },
  sovSteg(14, F14),
  { del: F15, bild: () => nastaGamer(), text: () => `Inred boden · ${Math.min(3, gamerSaker())}/3 gamersaker`, klar: () => gamerSaker() >= 3 },
  { del: F15, bild: 'jacuzzi', text: 'Printa och ställ ut en jacuzzi', klar: () => harPlacerat('jacuzzi') },
  { del: F15, bild: () => nastaInred(), text: () => `Världens bästa fristad · trivsel ${trivsel()}/300`, klar: () => trivsel() >= 300 },
  sovSteg(15, F15),
  // ---------- Kapitel 4 – Folkbokförd (dag 16–22) ----------
  { del: M16, text: 'Köp tomten du bor på – tavlan vid vägen', klar: () => agerMark('egen') },
  { del: M16, bild: 'byggsats:hardkniv', text: 'Sätt härdade knivar i kvarnen', klar: () => (S.kvarn.kniv || 0) >= 1 },
  sovSteg(16, M16),
  { del: M17, bild: 'fynd3', text: 'Mal Rolfs kolfiberrester till filament', klar: () => (S.stat.maltNiva?.[3] || 0) >= 1 || antalInv('rulle3') > 0 || printat('n3_stol') >= 1 },
  { del: M17, bild: 'n3_stol', text: 'Printa en kolfiberstol', klar: () => printat('n3_stol') >= 1 },
  { del: M17, text: 'Köp ängen i öster – tavlan vid vägen', klar: () => agerMark('oster') },
  sovSteg(17, M17),
  { del: M18, text: 'Bygg ett riktigt hus på ängen – tavlan vid vägen', klar: () => agerMark('huset') },
  { del: M18, text: 'Flytta in i huset', klar: () => !!S.flyttatIn },
  sovSteg(18, M18),
  { del: M19, bild: 'byggsats:diamantkniv', text: 'Bygg diamantkvarnen', klar: () => (S.kvarn.kniv || 0) >= 2 },
  { del: M19, bild: 'fynd4', text: 'Mal en rulle guld eller titan', klar: () => (S.stat.maltNiva?.[4] || 0) + (S.stat.maltNiva?.[5] || 0) >= 1 || antalInv('rulle4') + antalInv('rulle5') > 0 },
  sovSteg(19, M19),
  { del: M20, bild: 'kamin', text: 'Printa och ställ ut en vedkamin', klar: () => harPlacerat('kamin') },
  { del: M20, text: () => `Klara vintern: värme ${Math.min(9, varme())}/9`, klar: () => varme() >= 9 },
  sovSteg(20, M20),
  { del: M21, text: 'Bli folkbokförd – tavlan vid vägen', klar: () => !!S.folkbokford },
  sovSteg(21, M21),
  { del: M22, bild: 'julbord', text: 'Printa julbordet', klar: () => antalInv('julbord') > 0 || !!S.julBordKlart || !!S.julFirad },
  { del: M22, text: 'Tänd skylten vid vägen', klar: () => !!S.skyltTand || !!S.julFirad },
  { del: M22, text: 'Öppna dörren – gästerna kommer', klar: () => !!S.julFirad },
];
const SI = Object.fromEntries(STEG.map((x, i) => [x.id, i]).filter(([id]) => id));   // steg-id → index (dag 1)
const stegId = () => STEG[S.steg]?.id || null;
// gården räknas som städad när skräpet är borta – tunga saker räknas först när du har kärran, och högen vid kvarnen (när den är full) är ditt lager
const gardSkrap = () => {
  let k = null; try { k = kvarnPunkt(0.9, 0, 0.6); } catch { /* kvarnen finns inte än */ }
  return skrapLista.filter((x) => kanLyfta(x) && !paTippen(x.position.x, x.position.z) && Math.abs(x.position.x) <= TOMT && Math.abs(x.position.z) <= TOMT
    && !(k && Math.hypot(x.position.x - k.x, x.position.z - k.z) < 1.3)).length;
};
// dag 2: det räcker att städa ungefär halva gården innan Rolf hör av sig (resten kan vänta)
const gardMal = () => { if (S.gardStart == null) { S.gardStart = gardSkrap(); } return Math.max(GARD_KVAR, Math.floor(S.gardStart / 2)); };
const stegText = (st) => typeof st.text === 'function' ? st.text() : st.text;

// ---------- Sparning ----------
// Sparformatet nollställdes 2026-11-15 (punkt AO). Ny funktion = lägg till ett standardvärde här.
const SPAR_VERSION = 1;
let sparaFlagga = false;
function sparaSnart() { sparaFlagga = true; }   // sparas i nästa ruta (inte direkt – sparning är dyr)
const spar = new Sparning(SPAR_ID, {
  kvarn: { tratt: 0, trattGram: 0, prog: 0, ut: 800, motor: false }, forrad: {},   // punkt AG: nytt spel börjar med kvarnen på 80 %
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
// ---------- Effektljud av/på: allt som går till högtalarna (utom musiken) passerar en egen volym ----------
const effektBussar = new Set(), _bussFor = new WeakMap(), _koppla = AudioNode.prototype.connect;
AudioNode.prototype.connect = function (dest, ...a) {
  if (typeof AudioDestinationNode !== 'undefined' && dest instanceof AudioDestinationNode && !this.__direkt) {
    let b = _bussFor.get(dest);
    if (!b) { b = dest.context.createGain(); b.__direkt = true; b.gain.value = S.effekter === false ? 0 : 1; _koppla.call(b, dest); _bussFor.set(dest, b); effektBussar.add(b); }
    return _koppla.call(this, b, ...a);
  }
  return _koppla.call(this, dest, ...a);
};
function satEffekter(pa) { S.effekter = pa; for (const b of effektBussar) b.gain.value = pa ? 1 : 0; sparaSnart(); }
S.kvarn = { tratt: 0, trattGram: 0, prog: 0, ut: 0, motor: false, ...S.kvarn };
S.post = { tillRolf: null, tillMig: [], lapp: null, ...S.post };
S.rolf = { i: 0, aktiv: false, nasta: null, extra: 0, ...S.rolf };
// Respekt (hjärtat): hur andra ser på dig. Trivsel = hur du själv mår.
S.respekt ??= 0;
S.sms = S.sms || []; S.olasta = 0; S.mobil = true; S.dag = S.dag || (S.sang ? 2 : 1); S.speltid = S.speltid || 0; S.aliSett = S.aliSett || null;
// platserna i verktygsraden, ryggsäcken och kistan
S.kistan = Array.isArray(S.kistan) ? S.kistan : Array(KISTA_PLATSER).fill(null); while (S.kistan.length < KISTA_PLATSER) S.kistan.push(null);
S.ryggsack = Array.from({ length: S.storRyggsack ? RYGG_STOR : RYGG_BAS }, (_, i) => (Array.isArray(S.ryggsack) && S.ryggsack[i]?.n > 0 ? S.ryggsack[i] : null));
S.hotbar = Array.from({ length: HOTBAR }, (_, i) => (i > 0 && Array.isArray(S.hotbar) && S.hotbar[i]?.n > 0 ? S.hotbar[i] : null));
S.vald = S.vald || 0; S.ritningar = S.ritningar || []; S.karraLast = Array.isArray(S.karraLast) ? S.karraLast : [];
if (S.steg > STEG.length) S.steg = STEG.length;

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
  const kulle = new THREE.Mesh(geo, mat(0x7b7466)); kulle.position.set(TIPP.x, 0, TIPP.z); kulle.receiveShadow = true; scen.add(kulle); window.__tippKulle = kulle;
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
  granser: { ...BAS_GRANS }, touch: false,   // punkt AO: bara dator – tangentbord och mus
});
// ställ spelaren där hen var senast
const nyttSpel = !S.skyltUppe && (S.steg || 0) === 0 && (S.dag || 1) === 1;
// punkt AC: ett nytt spel börjar ute på vägen vid brädhögen, med blicken in mot skylten, skjulet och tippen
if (nyttSpel) { spelare.pos.set(-3.5 + 2, 0, TOMT + 3 - 0.5); spelare.yaw = 0.2; spelare.pitch = -0.08; }   // punkt AM: skylten, linje 1 och skjulet i bild
if (Array.isArray(S.pos) && S.pos.every(Number.isFinite)) {
  spelare.pos.set(S.pos[0], 0, S.pos[1]); spelare.yaw = S.pos[2]; spelare.pitch = S.pos[3];
}
const interaktor = new Interaktor(kamera, scen, { rackvidd: 3.2, baraSynliga: true });   // punkt AS: det som inte står på gården än går inte att använda
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
  fasta.push({ x, z, radie, grupp, box: new THREE.Box3().setFromObject(grupp) });
  return grupp;
}

// ett gammalt plåtskjul – man kan gå in, och där inne finns plats för en säng
const SKJUL = { x: 9, z: 7, b: 3.6, d: 3.0, h: 2.4, dorr: 1.1 };   // i hemmet, nära kvarnen och Ali
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
  talt.userData.plankTak = tak;   // punkt AI2: introbilden 'före' visar skjulet utan tak
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
// punkt F: skylten står vid vägen (där Ali, Rolf och alla som kör förbi ser den) och blir finare för varje kapitel
const VAG_SKYLT = { x: -3.5, z: TOMT - 0.6 };
const SKYLT_NAMN = [null, 'handmålad planka', 'printad', 'röd PETG', 'neon', 'kolfiber och plakett', 'riktig gatuskylt'];
const skyltVersion = () => S.tippgodsagare ? 6 : S.dag >= 22 || S.julFirad ? 5 : Math.max(1, Math.min(4, S.kapitel || 1));
const adressSkylt = new THREE.Group();
adressSkylt.position.set(VAG_SKYLT.x, 0, VAG_SKYLT.z); scen.add(adressSkylt);
function neonTex(text, W, H, farg) {
  const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  let fs = H * 0.62; g.font = `900 ${fs}px "Arial Black",Impact,system-ui`;
  while (g.measureText(text).width > W * 0.9) { fs -= 4; g.font = `900 ${fs}px "Arial Black",Impact,system-ui`; }
  g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineJoin = 'round';
  g.shadowColor = farg; g.shadowBlur = H * 0.12; g.strokeStyle = farg; g.lineWidth = H * 0.05;
  for (let i = 0; i < 3; i++) g.strokeText(text, W / 2, H / 2);
  g.shadowBlur = H * 0.04; g.lineWidth = H * 0.018; g.strokeStyle = '#ffffff'; g.strokeText(text, W / 2, H / 2);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function kolfiberTex(text, W, H) {
  const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  const r = 14; for (let y = 0; y < H; y += r) for (let x = 0; x < W; x += r) {
    const upp = ((x + y) / r) % 2 === 0, gr = upp ? g.createLinearGradient(x, y, x + r, y) : g.createLinearGradient(x, y, x, y + r);
    gr.addColorStop(0, '#15171b'); gr.addColorStop(0.5, '#3a3e46'); gr.addColorStop(1, '#15171b'); g.fillStyle = gr; g.fillRect(x, y, r, r);
  }
  g.strokeStyle = '#9aa3ad'; g.lineWidth = 6; g.strokeRect(3, 3, W - 6, H - 6);
  let fs = H * 0.5; g.font = `900 ${fs}px "Arial Black",Impact,system-ui`;
  while (g.measureText(text).width > W * 0.88) { fs -= 4; g.font = `900 ${fs}px "Arial Black",Impact,system-ui`; }
  g.textAlign = 'center'; g.textBaseline = 'middle';
  const m = g.createLinearGradient(0, H * 0.25, 0, H * 0.75); m.addColorStop(0, '#f4f6f8'); m.addColorStop(0.5, '#a9b1ba'); m.addColorStop(1, '#e6e9ec');
  g.fillStyle = 'rgba(0,0,0,.5)'; g.fillText(text, W / 2 + 3, H / 2 + 5); g.fillStyle = m; g.fillText(text, W / 2, H / 2);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function byggSkylt(v) {
  for (const o of [...adressSkylt.children]) { adressSkylt.remove(o); o.traverse?.((x) => { x.geometry?.dispose?.(); }); }
  adressSkylt.userData.v = v; adressSkylt.userData.tand = !!(S.skyltTand || S.julFirad);
  const brada = (w, h, f) => box(w, h, 0.035, mat(f));
  if (v === 1) {
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
    return;
  }
  // v2–v5: två stolpar och en platta, centrerad över x = 0.7 (där plankan satt)
  const X = 0.7, Y = 2.0;
  const [stolpF, plattF, W, H] = v === 2 ? [0x2f7fd0, 0x2f7fd0, 1.7, 0.46] : v === 3 ? [0x8f1b26, 0xb5222f, 1.85, 0.5] : v === 4 ? [0x1c1c22, 0x14051a, 2.0, 0.56] : v === 6 ? [0x9a9ea4, 0x1d4f9c, 2.0, 0.5] : [0x2a2d33, 0x1d2025, 2.0, 0.56];
  for (const sx of [-W / 2 + 0.15, W / 2 - 0.15]) adressSkylt.add(at(box(0.09, Y + H / 2, 0.09, mat(stolpF, v === 3 ? { roughness: 0.35 } : {})), X + sx, (Y + H / 2) / 2, -0.06));
  adressSkylt.add(at(box(W + 0.04, H + 0.04, 0.05, mat(plattF, v === 3 ? { roughness: 0.3, metalness: 0.05 } : v === 5 ? { roughness: 0.25, metalness: 0.4 } : {})), X, Y, -0.01));
  let plan;
  if (v === 2) plan = skylt('SOPTIPPSVÄGEN 1', W, H, '#2f7fd0', '#f4ecd8');
  else if (v === 3) plan = skylt('SOPTIPPSVÄGEN 1', W, H, '#b5222f', '#ffffff');
  else if (v === 6) { const c = document.createElement('canvas'); c.width = 1024; c.height = 256; const g = c.getContext('2d'); g.fillStyle = '#1d4f9c'; g.fillRect(0, 0, 1024, 256); g.strokeStyle = '#fff'; g.lineWidth = 14; g.strokeRect(18, 18, 988, 220); g.fillStyle = '#fff'; g.font = '700 120px "Arial Narrow",Arial,system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('Soptippsvägen 1', 512, 134); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; plan = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: t })); }
  else if (v === 4) {
    plan = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: neonTex('SOPTIPPSVÄGEN 1', 1024, 288, '#3de3ff'), transparent: true, toneMapped: false }));
    const glod = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.15, H * 1.5), new THREE.MeshBasicMaterial({ color: 0x3de3ff, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false }));
    glod.position.set(X, Y, 0.035); adressSkylt.add(glod);
    const ram = (w, h, x, y) => adressSkylt.add(at(new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.02), new THREE.MeshBasicMaterial({ color: 0xff4dd2, toneMapped: false })), x, y, 0.03));
    ram(W, 0.02, X, Y + H / 2 - 0.03); ram(W, 0.02, X, Y - H / 2 + 0.03); ram(0.02, H, X - W / 2 + 0.03, Y); ram(0.02, H, X + W / 2 - 0.03, Y);
  } else {
    plan = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: kolfiberTex('SOPTIPPSVÄGEN 1', 1024, 288) }));
    // plaketten under – mässing
    const pl = skylt('FOLKBOKFÖRD', 0.95, 0.2, '#b8892d', '#2a1c08'); pl.position.set(X, Y - H / 2 - 0.17, 0.03); adressSkylt.add(pl);
    adressSkylt.add(at(box(0.99, 0.24, 0.03, mat(0x8a6420, { metalness: 0.6, roughness: 0.35 })), X, Y - H / 2 - 0.17, 0.005));
    // en tunn cyan neonlist runt – skylten tänds på julen
    const list = (w, h, x, y) => adressSkylt.add(at(new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.015), new THREE.MeshBasicMaterial({ color: S.skyltTand || S.julFirad ? 0x3de3ff : 0x2a3a40, toneMapped: false })), x, y, 0.03));
    if (S.skyltTand || S.julFirad) { const glod = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.2, H * 1.9), new THREE.MeshBasicMaterial({ color: 0x3de3ff, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false })); glod.position.set(X, Y - 0.08, 0.035); adressSkylt.add(glod); }
    list(W + 0.06, 0.018, X, Y + H / 2 + 0.03); list(W + 0.06, 0.018, X, Y - H / 2 - 0.03);
  }
  plan.position.set(X, Y, 0.02); adressSkylt.add(plan);
}
// varje gång ett kapitel blir klart: ny skylt, och någon säger något om den
const SKYLT_REPLIK = {
  1: ['ali', 'Ali här. Såg skylten. Stavningen är rätt. Det är mer än många.'],
  2: ['rolf', 'Tuta två gånger när ja åkte förbi. Hörde du? Dä va ja. MVH ROLF'],
  3: ['bengt', 'HMPF. RÖD.'],
  4: ['bror', 'Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig.'],
  6: ['rolf', 'Kommunen satt upp en RIKTI skylt. Ja grät int. Kajsa grät. MVH ROLF'],
};
function kollaSkylt() {
  if (!S.skyltUppe) return;
  const v = skyltVersion();
  if (adressSkylt.userData.v === v && adressSkylt.userData.tand === !!(S.skyltTand || S.julFirad)) return;
  const forra = S.skyltV || 0; byggSkylt(v);
  if (forra && v > forra && ui.igang) {
    if (v !== 5) { ui.toast('Skylten vid vägen är uppgraderad.', 'guld'); spelaLjud('placera'); }   // v5 tänds i julscenen
    S.skyltTut = v;
    const r = SKYLT_REPLIK[v]; if (r) setTimeout(() => r[0] === 'bengt' ? visaBengt(r[1]) : sms(r[0], r[1]), 6000);
  }
  if (S.skyltV !== v) { S.skyltV = v; sparaSnart(); }
}
setInterval(() => { kollaSkylt(); if (S.skyltUppe && S.dag >= 2 && !S.skyltAli && ui.igang && !sover) { S.skyltAli = true; sparaSnart(); sms(...SKYLT_REPLIK[1]); } }, 1500);
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
  bradhog.position.set(VAG_SKYLT.x + 0.1, 0, VAG_SKYLT.z - 0.4); scen.add(bradhog);
}
// kapitelkort: stor rubrik mitt i bild några sekunder – säger vad kapitlet går ut på, inget mer
function visaKapitelKort(nr, namn, mal) {
  spelaLjud('kapitel');
  document.querySelector('.ph-kapkort')?.remove();
  const d = document.createElement('div'); d.className = 'ph-kapkort';
  d.innerHTML = `<small>KAPITEL ${nr}</small><b>${rens(namn)}</b><span>${rens(mal)}</span>`;
  document.body.appendChild(d); setTimeout(() => d.classList.add('ut'), 5200); setTimeout(() => d.remove(), 6000);
}
function visaAdressSkylt() { adressSkylt.visible = !!S.skyltUppe; bradhog.visible = !S.skyltUppe; if (S.skyltUppe && adressSkylt.userData.v == null) { byggSkylt(skyltVersion()); if (!S.skyltV) S.skyltV = skyltVersion(); } }
let spikar = false;
// punkt AC: hammaren i handen, slag för slag – återanvändbar för andra byggen
const hammare = new THREE.Group();
{
  const skaft = box(0.035, 0.36, 0.035, mat(0x8a6a3f)); skaft.position.y = -0.1; hammare.add(skaft);
  const huvud = box(0.16, 0.06, 0.06, mat(0x555a60, { metalness: 0.6, roughness: 0.35 })); huvud.position.y = 0.09; hammare.add(huvud);
  const klo = box(0.05, 0.05, 0.05, mat(0x555a60, { metalness: 0.6 })); klo.position.set(-0.09, 0.1, 0); klo.rotation.z = 0.5; hammare.add(klo);
  hammare.position.set(0.32, -0.28, -0.5); hammare.rotation.set(0, -0.3, 0); hammare.visible = false; kamera.add(hammare);
}
const flisor = [];
function sprattFlisor(p, n = 7) {
  for (let i = 0; i < n; i++) {
    const f = box(0.03 + Math.random() * 0.03, 0.01, 0.015, mat([0xc9a46a, 0x8a6a3f, 0xe0c08a][i % 3]));
    f.position.copy(p); scen.add(f);
    flisor.push({ f, v: new THREE.Vector3((Math.random() - 0.5) * 2.4, 1.2 + Math.random() * 1.6, (Math.random() - 0.5) * 2.4), t: 0.9 });
  }
}
let spikAnim = null;
// spikaAnim({ mal: Vector3 att titta på, steg: [fn(i) per slag], slag: antal, tid: s }, klar)
function spikaAnim(o, klar) {
  if (spikAnim) return false;
  const slag = o.slag || 5, tid = o.tid || 2.7;
  spikAnim = { ...o, slag, tid, t: 0, t0: performance.now(), gjorda: 0, klar, yaw0: spelare.yaw, pitch0: spelare.pitch };
  spelare.aktiv = false; hammare.visible = true; gripVerktyg.userData.dold = gripVerktyg.visible; gripVerktyg.visible = false;
  return true;
}
function spikaTick(dt) {
  for (let i = flisor.length - 1; i >= 0; i--) { const x = flisor[i]; x.t -= dt; x.v.y -= 9.8 * dt; x.f.position.addScaledVector(x.v, dt); x.f.rotation.x += dt * 9; x.f.rotation.z += dt * 7; if (x.t <= 0 || x.f.position.y < 0) { scen.remove(x.f); flisor.splice(i, 1); } }
  const A = spikAnim; if (!A) return;
  A.t = (performance.now() - A.t0) / 1000;   // punkt AJ: riktig tid, så att spikningen tar 2,8 s även på en långsam iPad
  // blicken låst mot målet
  const m = A.mal, dx = m.x - spelare.pos.x, dz = m.z - spelare.pos.z;
  const yaw = Math.atan2(-dx, -dz), pitch = Math.atan2((m.y ?? 1) - 1.6, Math.hypot(dx, dz));
  spelare.yaw += (((yaw - spelare.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * Math.min(1, dt * 8); spelare.pitch += (pitch - spelare.pitch) * Math.min(1, dt * 8);
  const per = A.tid / A.slag, fas = (A.t % per) / per;
  // hammaren: lyfts upp och slår ner i slutet av varje period
  hammare.rotation.x = fas < 0.75 ? -0.9 * (fas / 0.75) : -0.9 + 1.25 * ((fas - 0.75) / 0.25);
  const nu = Math.floor(A.t / per + 0.25);   // slaget landar vid fas 0.75
  while (A.gjorda < Math.min(A.slag, nu)) {
    const i = A.gjorda++;
    spelaLjud('placera', 1, 0.82 + Math.random() * 0.36) || ljud.placera();
    spelare.pitch -= 0.035; spelare.yaw += (Math.random() - 0.5) * 0.02;   // kameran rycker
    sprattFlisor(new THREE.Vector3(m.x, m.y ?? 1, m.z));
    A.steg?.[i]?.(i);
  }
  if (A.t >= A.tid + 0.15) {
    spikAnim = null; hammare.visible = false; hammare.rotation.x = 0; gripVerktyg.visible = !!gripVerktyg.userData.dold; spelare.aktiv = true;
    A.klar?.();
  }
}
function spikaSkylt() {
  if (S.skyltUppe || spikar) return; spikar = true;
  // skylten byggs i förväg men osynlig – sedan sätts den ihop bit för bit
  adressSkylt.visible = true; adressSkylt.userData.v = null; byggSkylt(1);
  const delar = [...adressSkylt.children];
  const grupper = [[delar[0]], delar.slice(1, 4), delar.slice(4, 7), delar.slice(7, 10), delar.slice(10)];
  const slut = new Map(delar.map((d) => [d, { p: d.position.clone(), s: d.scale.clone() }]));
  for (const d of delar) d.visible = false;
  const hog = bradhog.position.clone().sub(adressSkylt.position);
  const flyg = (d, tid = 0.35) => { const mal = slut.get(d), start = d === delar[0] ? null : hog.clone().add(new THREE.Vector3(0, 0.3, 0)); const t0 = performance.now();
    d.visible = true;
    const steg = () => { const k = Math.min(1, (performance.now() - t0) / (tid * 1000)), e = 1 - (1 - k) ** 3;
      if (start) { d.position.lerpVectors(start, mal.p, e); d.position.y += Math.sin(k * Math.PI) * 0.4; }
      else { d.scale.set(mal.s.x, Math.max(0.01, e) * mal.s.y, mal.s.z); d.position.set(mal.p.x, mal.p.y * e, mal.p.z); }   // stolpen sätts i marken
      if (k < 1) requestAnimationFrame(steg); else { d.position.copy(mal.p); d.scale.copy(mal.s); } };
    steg(); };
  // brädhögen krymper när brädorna lyfts bort
  const hogSkala = bradhog.scale.clone();
  spikaAnim({ mal: { x: adressSkylt.position.x + 0.6, y: 1.5, z: adressSkylt.position.z }, slag: 5, tid: 2.8,
    steg: grupper.map((g, i) => () => { for (const d of g) flyg(d); bradhog.scale.copy(hogSkala).multiplyScalar(Math.max(0.15, 1 - (i + 1) * 0.2)); }) }, () => {
    spikar = false; S.skyltUppe = true; bradhog.scale.copy(hogSkala); visaAdressSkylt(); ljud.klar();
    // sista slaget: skylten studsar till
    const t0 = performance.now(); const studs = () => { const k = Math.min(1, (performance.now() - t0) / 350); adressSkylt.scale.setScalar(1 + 0.05 * Math.sin(k * Math.PI)); if (k < 1) requestAnimationFrame(studs); else adressSkylt.scale.setScalar(1); }; studs();
    handelse('skyltKlar'); visaLapp('skylt'); sparaSnart();
  });
}
interaktor.registrera(bradhog, { text: () => 'Spika ihop en skylt av brädorna vid vägen – det här är MITT', aktivera: spikaSkylt });

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
const extrSkylt = skylt('EXTRUDER', 0.48, 0.13, '#5b3a1a', '#ffe9b0'); extrSkylt.position.set(0, 0.22, 0.252); extrSkylt.visible = false; extruder.add(extrSkylt);   // punkt BC: kvarnen och extrudern är en maskin – ingen skylt
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
fast(cykel, -12.6, 13.9, 0.7);

// lådan + den gamla skrivaren
const lada = box(0.9, 0.7, 0.7, mat(0x9b6b3d)); lada.position.y = 0.35;
const ladGrupp = new THREE.Group(); ladGrupp.add(lada);
fast(ladGrupp, LAGER.x + (2.8), LAGER.z + (-1.5), 0.6);

// kort kabel: cykelns generator → batteriet → skrivaren (en enhet)
let startKabel = null;
{
  const kurva = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-12.25, 0.1, 14.0), new THREE.Vector3(-11.9, 0.03, 13.3), new THREE.Vector3(-11.75, 0.1, 13.05),
  ]);
  const kabel = new THREE.Mesh(new THREE.TubeGeometry(kurva, 40, 0.025, 6), mat(0x222222));
  kabel.castShadow = true; scen.add(kabel); startKabel = kabel;
}
const batteri = new THREE.Group();
batteri.add(at(box(0.3, 0.45, 0.2, mat(0x2b2f36)), 0, 0.225, 0));
const battFyll = box(0.22, 0.37, 0.02, mat(0x7dffb0, { emissive: 0x7dffb0, emissiveIntensity: 0.6 }));
battFyll.position.set(0, 0.04, 0.105); battFyll.geometry.translate(0, 0.185, 0); batteri.add(battFyll);
const battSkylt = skylt('⚡', 0.14, 0.1, '#2b2f36', '#ffd43b'); battSkylt.position.set(0, 0.5, 0.0); battSkylt.rotation.x = -0.3; batteri.add(battSkylt);
batteri.position.set(-11.75, 0, 12.95); scen.add(batteri);
batteriKlart = true;

// marknaden hos Ali
const marknad = new THREE.Group();
marknad.add(at(box(2.2, 0.9, 0.8, mat(0xa0703f)), 0, 0.45, 0));
for (const x of [-1, 1]) marknad.add(at(box(0.08, 2.3, 0.08, mat(0x6b4a2f)), x, 1.15, -0.3));
const tak = box(2.6, 0.08, 1.4, mat(0xd9534f)); tak.position.set(0, 2.3, 0.1); tak.rotation.x = 0.18; marknad.add(tak);
const aliSkylt = skylt('ALIS MARKNAD', 1.8, 0.35); aliSkylt.position.set(0, 1.85, -0.25); marknad.add(aliSkylt);
// ansikte: ögon, ögonbryn och näsa på ett huvud som tittar mot +z
// humör i porträtten: arg (ånga), orolig (svettdroppe), glad (hjärta) – läses av ur texten
function humorAv(vem, text) {
  const t = String(text || '');
  if (/❤️|😂|haha|stolt|TACK|älskar|Respekt|PERFEKT|bra karl/i.test(t)) return 'glad';
  if (/!!|HUR KUNDE|SVARA|BORT FRÅN|Böter/.test(t)) return 'arg';
  if (/\?\?|orolig|fryser|minusgrader|äter du|hypotermi/i.test(t) || (vem === 'mamma' && /\?/.test(t))) return 'orolig';
  return '';
}
const HUMOR_SVG = {
  arg: '<svg viewBox="0 0 20 20"><path d="M4 3l3 5-3 1 5 2M16 3l-3 5 3 1-5 2" fill="none" stroke="#ff4d4d" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  orolig: '<svg viewBox="0 0 20 20"><path d="M10 2C10 2 4 10 4 13a6 6 0 0012 0c0-3-6-11-6-11z" fill="#6fc3ff" stroke="#fff" stroke-width="1.5"/></svg>',
  glad: '<svg viewBox="0 0 20 20"><path d="M10 17s-7-4.4-7-9a4 4 0 017-2.6A4 4 0 0117 8c0 4.6-7 9-7 9z" fill="#ff5c8a" stroke="#fff" stroke-width="1.5"/></svg>',
};
const humorPortratt = (vem, text, st = 40) => { const h = humorAv(vem, text); return `<span class="ph-humor-ram" style="width:${st}px;height:${st}px">${portratt(vem, st)}${h ? `<i class="ph-humor ${h}">${HUMOR_SVG[h]}</i>` : ''}</span>`; };
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
  for (const x of [-0.1, 0.1]) { ali.add(at(box(0.15, 0.72, 0.17, mat(0x3b3f4a)), x, 0.38, 0)); ali.add(at(box(0.17, 0.08, 0.27, mat(0x2a1d14)), x, 0.04, 0.04)); }   // byxor och skor
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
  if (typ === 'skrivareS') { const sk = skapaSkrivare(1); sk.scale.setScalar(0.7); return sk; }   // punkt AS
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
  } else if (typ.startsWith('m_') && !['m_turbo', 'm_snal', 'm_nano', 'm_grav', 'm_fusion'].includes(typ)) {
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
  } else if (typ === 'n2_vas') {
    const rod = mat(0xd63a2f, { roughness: 0.35 });
    g.add(at(cyl(0.07, 0.05, 0.05, rod, 16), 0, 0.025, 0)); g.add(at(cyl(0.1, 0.07, 0.16, rod, 16), 0, 0.13, 0)); g.add(at(cyl(0.05, 0.1, 0.08, rod, 16), 0, 0.25, 0)); g.add(at(cyl(0.065, 0.05, 0.06, rod, 16), 0, 0.32, 0));
  } else if (typ === 'n2_hjalm') {
    const rod = mat(0xd63a2f, { roughness: 0.35 });
    const k = new THREE.Mesh(new THREE.SphereGeometry(0.16, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), rod); k.scale.set(1, 0.85, 1.25); k.position.y = 0.02; g.add(k);
    for (const x of [-0.06, 0, 0.06]) g.add(at(box(0.025, 0.02, 0.3, mat(0x1e1e1e)), x, 0.15, 0));
  } else if (typ === 'n2_paddel') {
    const rod = mat(0xd63a2f, { roughness: 0.35 }), skaft = mat(0x2b2b2b);
    const p = new THREE.Group(); p.add(at(cyl(0.018, 0.018, 1.0, skaft, 8), 0, 0, 0));
    for (const y of [-0.55, 0.55]) p.add(at(box(0.13, 0.22, 0.02, rod), 0, y, 0));
    p.rotation.z = Math.PI / 2; p.position.y = 0.08; g.add(p);
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
  } else if (/^rulle[2-5]$/.test(typ)) {
    const sp = filamentSpole(NIVA_HEX[Number(typ.slice(5))], 0.16, 0.12); sp.position.y = 0.16; sp.rotation.y = 0.5; g.add(sp);
  } else if (typ === 'm_turbo') {   // turbofläkt: ring med blad och röda ränder
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.025, 8, 24), mat(0x9aa3b5, { metalness: 0.7 })); ring.position.y = 0.2; g.add(ring);
    for (let i = 0; i < 6; i++) { const b = box(0.13, 0.02, 0.05, mat(i % 2 ? 0xd63a2f : 0xe8e8e8)); b.position.set(Math.cos(i) * 0.07, 0.2 + Math.sin(i) * 0.07, 0); b.rotation.z = i; g.add(b); }
    g.add(at(cyl(0.035, 0.035, 0.06, mat(0x333333)), 0, 0.2, 0));
  } else if (typ === 'm_snal') {   // kvantmunstycke
    const k = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.22, 16), mat(0xd9b44a, { metalness: 0.9, roughness: 0.2 })); k.rotation.x = Math.PI; k.position.y = 0.14; g.add(k);
    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.012, 8, 24), mat(0x7dffb0, { emissive: 0x3de39a })); halo.rotation.x = Math.PI / 2; halo.position.y = 0.2; g.add(halo);
  } else if (typ === 'm_nano') {   // nanokvarn: liten kvarn med blå kärna
    g.add(at(box(0.3, 0.3, 0.3, mat(0x4a5568, { metalness: 0.5 })), 0, 0.15, 0)); g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 10), mat(0x3de3ff, { emissive: 0x1a8fb0 })), 0, 0.33, 0));
  } else if (typ === 'm_grav') {   // gravitationsbädd: platta med svävande kula
    g.add(at(box(0.4, 0.05, 0.4, mat(0x2a2f38, { metalness: 0.6 })), 0, 0.03, 0)); g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 10), mat(0xb07cf0, { emissive: 0x5a2a9a })), 0, 0.22, 0));
    const r2 = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.008, 6, 24), mat(0xb07cf0, { emissive: 0x5a2a9a })); r2.rotation.x = Math.PI / 2; r2.position.y = 0.12; g.add(r2);
  } else if (typ === 'm_fusion') {   // fickfusionsbatteri
    g.add(at(cyl(0.1, 0.1, 0.3, mat(0x2a2f38, { metalness: 0.6 })), 0, 0.15, 0)); g.add(at(cyl(0.07, 0.07, 0.32, mat(0xff9a3c, { emissive: 0xb85a10, transparent: true, opacity: 0.85 })), 0, 0.15, 0));
    for (const y of [0.02, 0.28]) g.add(at(cyl(0.11, 0.11, 0.04, mat(0xd9dee6, { metalness: 0.9 })), 0, y, 0));
  } else if (typ === 'mobilstall') {
    const m = mat(0x2ecc71);
    g.add(at(box(0.14, 0.02, 0.1, m), 0, 0.01, 0));
    const rygg = box(0.12, 0.16, 0.015, m); rygg.position.set(0, 0.08, -0.03); rygg.rotation.x = -0.35; g.add(rygg);
    g.add(at(box(0.12, 0.025, 0.02, m), 0, 0.03, 0.035));
  } else if (typ === 'n_kopp') {
    g.add(at(cyl(0.07, 0.06, 0.14, mat(0xf4f4f0), 14), 0, 0.07, 0)); const ora = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.012, 6, 12), mat(0xf4f4f0)); ora.position.set(0.08, 0.08, 0); g.add(ora);
    g.add(at(box(0.09, 0.03, 0.005, mat(0x2f7fd0)), 0, 0.08, 0.07));
  } else if (typ === 't_spalje') {
    const v = mat(0xf4f4f0); for (let i = 0; i <= 3; i++) g.add(at(box(0.03, 0.9, 0.03, v), -0.36 + i * 0.24, 0.45, 0)); for (let j = 0; j < 3; j++) g.add(at(box(0.8, 0.03, 0.03, v), 0, 0.2 + j * 0.3, 0));
  } else if (typ === 't_bevattning') {
    for (let i = 0; i < 3; i++) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.25 - i * 0.06, 0.03, 6, 20), mat(0x2f7fd0)); r.rotation.x = Math.PI / 2; r.position.y = 0.05 + i * 0.06; g.add(r); }
    g.add(at(box(0.06, 0.12, 0.06, mat(0x4cc9f0)), 0.25, 0.1, 0));
  } else if (typ === 't_vaxthus') {
    g.add(at(box(0.8, 0.5, 0.6, mat(0xcfe8ff, { transparent: true, opacity: 0.4 })), 0, 0.25, 0));
    for (const x of [-0.4, 0.4]) for (const z of [-0.3, 0.3]) g.add(at(box(0.03, 0.5, 0.03, mat(0x2f7fd0)), x, 0.25, z));
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 5), mat(0xc8213a)), 0, 0.15, 0));
  } else if (typ === 'julbord') {
    g.add(at(box(1.8, 0.05, 0.7, mat(0x8a6a3f)), 0, 0.72, 0)); for (const x of [-0.8, 0.8]) for (const z of [-0.28, 0.28]) g.add(at(box(0.05, 0.72, 0.05, mat(0x6d5434)), x, 0.36, z));
    g.add(at(box(1.7, 0.01, 0.4, mat(0xc8213a)), 0, 0.75, 0));
    for (const x of [-0.5, 0, 0.5]) { g.add(at(cyl(0.02, 0.03, 0.18, mat(0xd4b04a), 8), x, 0.84, 0)); g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 5), mat(0xffd27a, { emissive: 0xffaa33, emissiveIntensity: 1 })), x, 0.95, 0)); }
  } else if (typ === 'h_telefon') {
    g.add(at(box(0.24, 0.1, 0.2, mat(0x1a1a1a, { roughness: 0.3 })), 0, 0.05, 0)); const lur = box(0.26, 0.05, 0.06, mat(0x1a1a1a, { roughness: 0.3 })); lur.position.set(0, 0.13, 0); g.add(lur); g.add(at(cyl(0.06, 0.06, 0.01, mat(0xdddddd), 14), 0, 0.105, 0.04));
  } else if (typ === 'h_mjolkpall') {
    g.add(at(cyl(0.16, 0.16, 0.04, mat(0x8a6a3f), 14), 0, 0.3, 0)); for (let i = 0; i < 3; i++) { const b = box(0.03, 0.3, 0.03, mat(0x6d5434)); b.position.set(Math.cos(i * 2.1) * 0.1, 0.15, Math.sin(i * 2.1) * 0.1); g.add(b); }
  } else if (typ === 'h_kaffepanna') {
    g.add(at(cyl(0.08, 0.11, 0.2, mat(0x3a6ab0, { roughness: 0.25 }), 14), 0, 0.1, 0)); const pip = cyl(0.015, 0.025, 0.12, mat(0x3a6ab0), 8); pip.rotation.z = -0.9; pip.position.set(0.12, 0.14, 0); g.add(pip);
  } else if (typ === 'hf_emalj') {
    g.add(at(box(0.36, 0.22, 0.02, mat(0xf2ede2, { roughness: 0.3 })), 0, 0.22, 0)); g.add(at(box(0.04, 0.22, 0.04, mat(0x6d5434)), 0, 0.11, -0.03));
    const sk = skylt('MJÖLK', 0.32, 0.12, '#1f4fa0', '#f2ede2'); sk.position.set(0, 0.22, 0.012); g.add(sk);
  } else if (typ === 'hf_kassett') {
    g.add(at(box(0.34, 0.14, 0.1, mat(0x2a2a2a, { roughness: 0.4 })), 0, 0.07, 0)); for (const x of [-0.1, 0.1]) g.add(at(cyl(0.035, 0.035, 0.01, mat(0x888888), 12).rotateX(Math.PI / 2), x, 0.08, 0.051));
    g.add(at(box(0.12, 0.05, 0.01, mat(0xd8a03a)), 0, 0.08, 0.052)); g.add(at(box(0.26, 0.02, 0.02, mat(0x888888)), 0, 0.17, 0));
  } else if (typ === 'hf_tomte') {
    g.add(at(cyl(0.05, 0.09, 0.2, mat(0xc0282d), 10), 0, 0.1, 0)); g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), mat(0xf0c6a2)), 0, 0.24, 0));
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), mat(0xf4f4f0)), 0, 0.21, 0.03)); g.add(at(new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.14, 10), mat(0xc0282d)), 0, 0.33, 0));
  } else if (typ === 'hf_krona') {
    g.add(at(cyl(0.01, 0.01, 0.3, mat(0xc9a227, { metalness: 0.7 }), 6), 0, 0.55, 0)); g.add(at(cyl(0.2, 0.05, 0.08, mat(0xc9a227, { metalness: 0.7 }), 12), 0, 0.38, 0));
    for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; g.add(at(new THREE.Mesh(new THREE.OctahedronGeometry(0.03), mat(0xe8f4ff, { roughness: 0.05, metalness: 0.3, transparent: true, opacity: 0.85 })), Math.cos(a) * 0.19, 0.28, Math.sin(a) * 0.19)); }
    g.add(at(new THREE.Mesh(new THREE.OctahedronGeometry(0.06), mat(0xe8f4ff, { roughness: 0.05, transparent: true, opacity: 0.85 })), 0, 0.22, 0));
  } else if (typ === 'h_foto') {
    g.add(at(box(0.2, 0.15, 0.02, mat(0x6d5434)), 0, 0.08, 0)); g.add(at(box(0.16, 0.11, 0.005, mat(0xe8d070)), 0, 0.08, 0.012));
  } else if (typ === 'h_stickning') {
    g.add(at(box(0.25, 0.04, 0.18, mat(0xe8c27a)), 0, 0.02, 0)); for (const x of [-0.05, 0.05]) { const st = cyl(0.006, 0.006, 0.3, mat(0xaaaaaa), 6); st.rotation.z = 1.3; st.position.set(x, 0.05, 0.05); g.add(st); }
  } else if (typ === 'fagelskramma') {
    const tra = mat(0x7a5a3a), sk = mat(0x3d6fb0), hy = mat(0xe8c27a);
    g.add(at(box(0.06, 1.5, 0.06, tra), 0, 0.75, 0)); g.add(at(box(0.9, 0.05, 0.05, tra), 0, 1.15, 0));
    g.add(at(box(0.5, 0.45, 0.16, sk), 0, 1.05, 0)); g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), hy), 0, 1.45, 0));
    const hatt = cyl(0.08, 0.2, 0.14, mat(0x2a2a2a), 10); hatt.position.set(0, 1.6, 0); g.add(hatt);
    for (const x of [-0.42, 0.42]) g.add(at(box(0.1, 0.12, 0.04, mat(0xe8c27a)), x, 1.15, 0));
  } else if (typ === 'fagelbad') {
    const sten = mat(0xb9b4a8);
    g.add(at(cyl(0.16, 0.2, 0.06, sten, 14), 0, 0.03, 0)); g.add(at(cyl(0.06, 0.08, 0.7, sten, 10), 0, 0.4, 0));
    g.add(at(cyl(0.32, 0.18, 0.12, sten, 18), 0, 0.8, 0)); g.add(at(cyl(0.27, 0.27, 0.02, mat(0x7fc8f8, { roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.85 }), 18), 0, 0.85, 0));
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
  else if (m === 'korg') {   // svart sopsäck: en knölig klump med en knut
    g = new THREE.Group();
    const svart = mat(0x15171a, { roughness: 0.35, metalness: 0.1 });
    const klump = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10), svart); klump.scale.set(1, 1.15, 0.85); klump.position.y = 0.28; klump.castShadow = true; g.add(klump);
    for (const [x, y, z] of [[0.12, 0.2, 0.12], [-0.13, 0.32, 0.08], [0.05, 0.38, -0.14]]) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), svart); b.position.set(x, y, z); g.add(b); }
    const knut = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.16, 8), svart); knut.position.y = 0.6; g.add(knut);
  } else if (m === 'ryggkorg') {   // punkt AX: en flätad korg med axelremmar
    g = new THREE.Group();
    const flata = mat(0xa8793f, { roughness: 0.9 }), mork = mat(0x6b4a24), rem = mat(0x3b2a1a);
    const korg = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.17, 0.5, 14, 1, true), mat(0xa8793f, { roughness: 0.9, side: THREE.DoubleSide })); korg.position.y = 0.27; g.add(korg);
    g.add(at(new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.03, 14), mork), 0, 0.03, 0));
    for (let k = 0; k < 4; k++) g.add(at(new THREE.Mesh(new THREE.TorusGeometry(0.2 - k * 0.012, 0.012, 5, 18), mork), 0, 0.1 + k * 0.12, 0)).rotation.x = Math.PI / 2;
    for (const x of [-0.09, 0.09]) g.add(at(box(0.04, 0.42, 0.02, rem), x, 0.3, -0.21));
    void flata;
  } else if (m === 'ryggsack2') {
    g = new THREE.Group();
    const tyg = mat(0x2e6b8a), mork = mat(0x1d4559);
    g.add(at(box(0.4, 0.5, 0.24, tyg), 0, 0.25, 0)); g.add(at(box(0.32, 0.2, 0.08, mork), 0, 0.16, 0.15));
    g.add(at(box(0.42, 0.06, 0.26, mork), 0, 0.5, 0));
  } else if (m === 'vaggar') {
    // en enda isolerskiva, inte hela huset
    g = new THREE.Group();
    g.add(at(box(0.62, 0.9, 0.06, mat(0xe8dcc0, { roughness: 0.95 })), 0, 0.45, 0));
    for (const y of [0.22, 0.45, 0.68]) g.add(at(box(0.63, 0.012, 0.062, mat(0xcdbf9f)), 0, y, 0));
    g.add(at(box(0.012, 0.9, 0.062, mat(0xcdbf9f)), 0, 0.45, 0));
  } else if (MASKINER[m]?.hem && HEM_DELAR[m]) { g = new THREE.Group(); const c = HEM_DELAR[m].clone(true); c.visible = true; c.position.set(0, 0, 0); c.rotation.set(0, 0, 0); c.traverse((x) => { x.visible = true; }); g.add(c);
  } else if (m === 'hardkniv' || m === 'diamantkniv') {   // en kvarnrotor med fyra knivar
    g = new THREE.Group(); const blad = m === 'diamantkniv' ? mat(0xbfefff, { metalness: 0.9, roughness: 0.05, emissive: 0x1a4a5a }) : mat(0xc9ced6, { metalness: 0.95, roughness: 0.25 });
    g.add(at(cyl(0.035, 0.035, 0.5, mat(0x444444)), 0, 0.25, 0));
    for (let i = 0; i < 4; i++) { const b = box(0.36, 0.03, 0.08, blad); b.position.y = 0.12 + i * 0.09; b.rotation.y = i * Math.PI / 4; g.add(b); }
  } else if (m === 'rullband') {   // ett kort transportband
    g = new THREE.Group(); g.add(at(box(0.9, 0.06, 0.3, mat(0x2a2a2a)), 0, 0.35, 0));
    for (const x of [-0.4, 0.4]) { const r3 = cyl(0.06, 0.06, 0.32, mat(0x9aa3b5, { metalness: 0.7 })); r3.rotation.x = Math.PI / 2; r3.position.set(x, 0.35, 0); g.add(r3); }
    for (const x of [-0.35, 0.35]) g.add(at(box(0.05, 0.32, 0.25, mat(0xf2c12e)), x, 0.16, 0));
  } else if (m === 'lastarm' || m === 'robotarm') {   // en ledad arm med gripklo
    g = new THREE.Group(); const f = mat(m === 'lastarm' ? 0xf2c12e : 0xf28c28), sv = mat(0x2a2a2a);
    g.add(at(cyl(0.16, 0.2, 0.1, sv), 0, 0.05, 0));
    const a1 = box(0.08, 0.45, 0.08, f); a1.position.set(0.06, 0.3, 0); a1.rotation.z = -0.4; g.add(a1);
    const a2 = box(0.07, 0.36, 0.07, f); a2.position.set(0.24, 0.5, 0); a2.rotation.z = -1.4; g.add(a2);
    for (const z of [-0.04, 0.04]) { const k = box(0.03, 0.12, 0.03, sv); k.position.set(0.42, 0.44, z); g.add(k); }
  } else if (m === 'utlada') {   // leveranslåda till Ali
    g = new THREE.Group(); g.add(at(box(0.5, 0.32, 0.38, mat(0xb07a45)), 0, 0.16, 0)); g.add(at(box(0.52, 0.04, 0.4, mat(0x8a5a2f)), 0, 0.34, 0));
    const s3 = skylt('ALI', 0.26, 0.1, '#2f8a52', '#fff'); s3.position.set(0, 0.17, 0.195); g.add(s3);
  } else if (m === 'tapeter') {   // tapetrulle
    g = new THREE.Group(); const t = cyl(0.07, 0.07, 0.5, mat(0xd9b48a)); t.rotation.z = Math.PI / 2; t.position.y = 0.08; g.add(t);
  } else if (m === 'karra' || m === 'bord' || m === 'sol' || m === 'solpark' || m === 'bank' || m === 'petgkvarn' || m === 'petgband' || m === 'saljlada' || SKRIVARTYP[m]) g = skapaMaskin(m);
  return g;
}
function skapaSkrivare(gen) {
  const g = new THREE.Group();
  const f = mat([0x2d7fd6, 0xf28c28, 0x4a505c, 0xd63a2f][gen - 1]);
  const sk = [1, 1.35, 1.9, 1.5][gen - 1];
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
  { const s = skylt('SKRIVARE ' + STORLEK_NAMN[gen], 0.3 * sk, 0.08 * sk, ['#2d7fd6', '#f28c28', '#4a505c', '#d63a2f'][gen - 1], '#fff'); s.position.set(0, 0.06, B / 2 + 0.002); g.add(s); }
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
  } else if (m === 'saljlada') {
    const tra = mat(0x3f8f5a), mork = mat(0x2a5f3c);
    g.add(at(box(0.7, 0.5, 0.5, tra), 0, 0.25, 0)); g.add(at(box(0.74, 0.05, 0.54, mork), 0, 0.52, 0));
    g.add(at(box(0.3, 0.03, 0.04, mat(0x1e1e1e)), 0, 0.55, 0));   // inkastet
    const sk = skylt('SÄLJ · ALI', 0.5, 0.13, '#f5c542', '#2b2118'); sk.position.set(0, 0.3, 0.252); g.add(sk);
    for (const x of [-0.3, 0.3]) g.add(at(box(0.05, 0.12, 0.05, mork), x, 0.06, 0.22));
  } else if (m === 'petgkvarn') {
    const rod = mat(0xd63a2f), mork = mat(0x7a1c16), stal = mat(0x8a949e, { metalness: 0.5, roughness: 0.5 });
    g.add(at(box(0.8, 0.7, 0.7, rod), 0, 0.35, 0));
    g.add(at(cyl(0.5, 0.28, 0.45, mork), 0, 0.92, 0));
    const trumma = cyl(0.11, 0.11, 0.62, stal); trumma.rotation.z = Math.PI / 2; trumma.position.set(0, 0.76, 0); g.add(trumma); g.userData.trumma = trumma;
    const sk = skylt('PETG', 0.42, 0.13, '#7a1c16', '#fff'); sk.position.set(0, 0.45, 0.352); g.add(sk);
    g.add(at(box(0.04, 0.04, 0.72, stal), 0.5, 0.42, 0));
    g.userData.spolar = [];
    for (let i = 0; i < 4; i++) { const sp = filamentSpole(0xd63a2f, 0.1, 0.08); sp.position.set(0.5, 0.42, -0.25 + i * 0.165); sp.rotation.y = 0; g.add(sp); g.userData.spolar.push(sp); }
  } else if (m === 'petgband') {
    const rod = mat(0xd63a2f), gummi = mat(0x1e1e1e);
    g.add(at(box(1.3, 0.06, 0.42, gummi), 0, 0.5, 0));
    for (const z of [-0.23, 0.23]) g.add(at(box(1.34, 0.12, 0.04, rod), 0, 0.5, z));
    for (const x of [-0.55, 0.55]) for (const z of [-0.18, 0.18]) g.add(at(box(0.05, 0.5, 0.05, rod), x, 0.25, z));
  } else if (m === 'solpark') {
    for (let i = 0; i < 6; i++) {
      const x = (i % 3 - 1) * 1.0, z = (Math.floor(i / 3) - 0.5) * 1.1;
      g.add(at(box(0.06, 0.6, 0.06, mat(0x777777)), x, 0.3, z));
      const pnl = box(0.92, 0.04, 0.75, mat(0x1c3f8c, { roughness: 0.3, metalness: 0.4 })); pnl.position.set(x, 0.62, z); pnl.rotation.x = -0.5; g.add(pnl);
      const rm = box(0.96, 0.02, 0.79, mat(0xcccccc)); rm.position.set(x, 0.6, z); rm.rotation.x = -0.5; g.add(rm);
    }
    g.add(at(box(0.35, 0.5, 0.3, mat(0x2b2f36)), 1.75, 0.25, 0));
    g.add(at(box(0.2, 0.08, 0.02, mat(0x7dffb0, { emissive: 0x7dffb0, emissiveIntensity: 0.6 })), 1.75, 0.4, 0.16));
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
// ---------- Efterspel: Tippen på tid – gården fylls, klockan går tills allt är uppplockat ----------
const TIDTIPP_N = 40, TIDTIPP_NYCKEL = 'rekord:printa-hem:tippen-pa-tid';
const tidRekord = () => { try { return +localStorage.getItem(TIDTIPP_NYCKEL) || 0; } catch { return 0; } };
const tidText = (sek) => `${Math.floor(sek / 60)}:${String(Math.floor(sek % 60)).padStart(2, '0')}`;
let tidtipp = null;
function startaTidtipp() {
  if (tidtipp) return;
  const sorter = ['flaska', 'burk', 'pase', 'dunk'], lista = [];
  for (let i = 0; i < TIDTIPP_N; i++) {
    let x, z, f = 0; do { x = (Math.random() * 2 - 1) * (TOMT - 2); z = (Math.random() * 2 - 1) * (TOMT - 2); f++; } while ((paTippen(x, z) || Math.hypot(x - SKJUL.x, z - SKJUL.z) < 4 || iPlanRuta(x, z, 0.4)) && f < 30);
    laggSkrap(x, z, variantFor(sorter[i % sorter.length]), Math.random() * 6.3); lista.push(skrapLista[skrapLista.length - 1]);
  }
  const el = document.createElement('div'); el.className = 'ph-tidtipp'; document.body.appendChild(el);
  tidtipp = { lista, start: performance.now(), el };
  ljud.stor(); ui.toast(`⏱️ Tippen på tid! ${TIDTIPP_N} skräp på gården – plocka upp allt så fort du kan`, 'guld');
  const tick = () => {
    if (!tidtipp) return;
    const kvar = tidtipp.lista.filter((x) => skrapLista.includes(x)).length, sek = (performance.now() - tidtipp.start) / 1000;
    tidtipp.el.textContent = `⏱️ ${tidText(sek)} · ${kvar} kvar${tidRekord() ? ' · rekord ' + tidText(tidRekord()) : ''}`;
    if (kvar > 0) { setTimeout(tick, 200); return; }
    const forra = tidRekord(), nytt = !forra || sek < forra;
    if (nytt) { try { localStorage.setItem(TIDTIPP_NYCKEL, String(Math.round(sek))); } catch {} }
    S.tidRekord = Math.round(nytt ? sek : forra); sparaSnart();
    tidtipp.el.remove(); tidtipp = null; konfetti(nytt ? 140 : 60); ljud.klar();
    visaFirande(nytt ? 'Nytt rekord!' : 'Tippen på tid', tidText(sek), nytt && forra ? `Förra rekordet: ${tidText(forra)}` : `Rekord: ${tidText(S.tidRekord)}`, nytt);
  };
  tick();
}
function laggSkrap(x, z, variant, rot) {
  const s = skapaSkrap(variant);
  s.position.set(x, 0.01 + tippHojd(x, z), z); s.rotation.y = rot;
  s.userData.skrap = [x, z, variant, rot];
  scen.add(s); skrapLista.push(s); skalaTraff(s);
  interaktor.registrera(s, {
    text: () => !kanLyfta(s) ? (S.karra ? `🔒 ${SKRAP_SORTER[s.userData.sort].namn} – för tung för kvarnen … än.` : `🔒 ${SKRAP_SORTER[s.userData.sort].namn} (${rullar(s.userData.gram)}) – för tung! Du behöver en skottkärra`) : s.userData.tung ? (valdKarra() && karraFull(s.userData.gram) ? 'Kärran är full' : `🛒 Lasta ${SKRAP_SORTER[s.userData.sort].namn.toLowerCase()} i skottkärran (${rullar(s.userData.gram)})`) : valdKarra() ? (karraFull(s.userData.gram) ? 'Kärran är full' : `🛒 Lasta i kärran (${rullar(s.userData.gram)})`) : (hand.full ? 'Fullt i famnen' : niva() === MAGNET_NIVA ? 'Håll inne – magneten drar' : `Plocka ${SKRAP_SORTER[s.userData.sort].namn.toLowerCase()} (${rullar(s.userData.gram)})`),
    kanAktivera: () => (S.tippNyckel || !paTippen(s.position.x, s.position.z)) && kamera.position.distanceTo(s.position) <= SKRAP_RACKVIDD[niva()] + 1.6,
    aktivera: () => plockaSkrap(s),
  });
}
const slumpVariant = () => Math.floor(Math.random() * 1000);
function slumpPlats() {
  for (let f = 0; f < 50; f++) {
    const x = (Math.random() * 2 - 1) * (TOMT - 1), z = (Math.random() * 2 - 1) * (TOMT - 1);
    if (Math.hypot(x - LAGER.x, z - LAGER.z + 1.5) < 7) continue;
    if ((iPlanRuta(x, z, 0.6) || Math.abs(x - SKJUL.x) < SKJUL.b / 2 + 1.5 && Math.abs(z - SKJUL.z) < SKJUL.d / 2 + 2.5)) continue;   // punkt AM: inget skräp på maskinplatser, stigen eller vid skjulet
    return [x, z];
  }
  return [TOMT - 2, TOMT - 2];
}
function tippPlats() {
  const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * (TIPP.r - 0.5);
  return [TIPP.x + Math.cos(a) * r, TIPP.z + Math.sin(a) * r];
}
const paTippen = (x, z) => Math.hypot(x - TIPP.x, z - TIPP.z) < TIPP.r + 0.5;
if (Array.isArray(S.skrap)) S.skrap.forEach(([x, z, v, r, h]) => { laggSkrap(x, z, v, r); if (h) markeraHelen(skrapLista[skrapLista.length - 1]); });
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
const kanLyfta = (s) => !s.userData.tung || (S.karra && S.kapitel >= 2);   // kapitel 1: kärran bär mer, men tunnor och kajaker är för tunga för kvarnen än
function plockaSkrap(s, tyst = false) {
  if (!kanLyfta(s)) { if (!tyst) varna('tung'); return; }
  if (s.userData.tung && !valdKarra()) {
    if (tyst) return;
    if (!valjTyp('karra')) { ui.toast('🛒 Skottkärran ligger i kistan i skjulet – lägg den i verktygsraden', 'fel'); ljud.fel(); return; }
  }
  if (valdKarra()) {
    if (karraFull(s.userData.gram)) { if (!tyst) varna('karra'); return; }
    helenArkiv(s);
    scen.remove(s); interaktor.avregistrera(s);
    skrapLista.splice(skrapLista.indexOf(s), 1);
    if (paTippen(s.position.x, s.position.z)) S.stat.tipp++;
    if (s.userData.tung) S.stat.tunga = (S.stat.tunga || 0) + 1;
    S.karraLast.push(s.userData.variant ?? 0); ritaKarraLast(); ljud.stor();
    S.stat.plockat++; sparaSnart(); return;
  }
  if (!skrapLage()) { if (tyst) return; byt(0); }
  hand.kapacitet = BARA_SKRAP[niva()];
  if (hand.full) { if (!tyst) varna(niva() === 0 ? 'enHand' : 'full'); return; }
  helenArkiv(s);
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
// ---------- Inventory som i Minecraft: verktygsrad (9), ryggsäck (18/27) och kistan i skjulet (27) ----------
const antalI = (arr, typ, fran = 0) => arr.reduce((a, p, i) => a + (i >= fran && p?.typ === typ ? p.n : 0), 0);
const platsI = (arr, typ, fran = 0) => arr.reduce((a, p, i) => i < fran ? a : a + (!p ? STACK : p.typ === typ ? Math.max(0, STACK - p.n) : 0), 0);
function laggI(arr, typ, n, fran = 0) {   // fyll på stackar först, sen tomma platser
  let forst = -1;
  for (let i = fran; i < arr.length && n > 0; i++) { const p = arr[i]; if (p?.typ === typ && p.n < STACK) { const d = Math.min(n, STACK - p.n); p.n += d; n -= d; if (forst < 0) forst = i; } }
  for (let i = fran; i < arr.length && n > 0; i++) if (!arr[i]) { const d = Math.min(n, STACK); arr[i] = { typ, n: d }; n -= d; if (forst < 0) forst = i; }
  return { rest: n, forst };
}
function taUrI(arr, typ, n, fran = 0) { for (let i = fran; i < arr.length && n > 0; i++) { const p = arr[i]; if (p?.typ !== typ) continue; const d = Math.min(n, p.n); p.n -= d; n -= d; if (p.n <= 0) arr[i] = null; } return n; }
const ryggPlatser = () => (S.storRyggsack ? RYGG_STOR : RYGG_BAS);
const antalIForrad = () => S.kistan.reduce((a, p) => a + (p?.n || 0), 0);
const antalInv = (typ) => antalI(S.hotbar, typ, 1) + antalI(S.ryggsack, typ) + antalI(S.kistan, typ);
const allaAgda = () => { const ager = {}; for (const p of [...S.hotbar.slice(1), ...S.ryggsack, ...S.kistan]) if (p) ager[p.typ] = (ager[p.typ] || 0) + p.n; return ager; };
const valdTyp = () => S.vald > 0 ? S.hotbar[S.vald]?.typ || null : null;
const valdKarra = () => valdTyp() === 'karra';
const forbrukbar = (typ) => typ !== 'karra';
const kistPlatser = () => S.kistan.filter(Boolean).length;
const kistanRymmer = (typ, n = 1) => platsI(S.kistan, typ) >= n;
const radenRymmer = (typ) => platsI(S.hotbar, typ, 1) > 0;
const harRumFor = (typ, n = 1) => platsI(S.hotbar, typ, 1) + platsI(S.ryggsack, typ) >= n;
function laggIForrad(typ, n = 1, tvinga = false) {
  if (!tvinga && !kistanRymmer(typ, n)) return false;
  const { rest } = laggI(S.kistan, typ, n); if (rest) S.kistan.push({ typ, n: rest });   // tvingat: kistan får bli större hellre än att något försvinner
  sparaSnart(); ritaHotbar(); return true;
}
// nya saker: först verktygsraden, sedan ryggsäcken. Får det inte plats hamnar det i kistan i skjulet (inget försvinner).
function laggTill(typ, n = 1) {
  if (!harRumFor(typ, n)) {
    laggIForrad(typ, n, true);
    ui.toast(typ === 'karra' || typ === 'magnet' ? `${namnFor(typ)} ligger i kistan i skjulet` : '🎒 Ryggsäcken är full – det hamnade i kistan i skjulet. Lägg något i kistan eller sälj.', 'fel'); invIntro('full');
    return 'kista';
  }
  const r1 = laggI(S.hotbar, typ, n, 1); let vart = r1.forst;
  if (r1.rest) { laggI(S.ryggsack, typ, r1.rest); if (vart < 0) vart = 'ryggsack'; invIntro('full'); }
  ritaHand(); ritaHotbar(); sparaSnart();
  return vart;
}
// ta bort en sak: helst från den valda platsen, sedan verktygsraden, ryggsäcken och sist kistan
function taBortInv(typ, n = 1) {
  if (antalInv(typ) < n) return false;
  const p = S.hotbar[S.vald];
  if (S.vald > 0 && p?.typ === typ) { const d = Math.min(n, p.n); p.n -= d; n -= d; if (p.n <= 0) S.hotbar[S.vald] = null; }
  n = taUrI(S.hotbar, typ, n, 1); n = taUrI(S.ryggsack, typ, n); n = taUrI(S.kistan, typ, n);
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
// punkt BC: en riktig bild av varje sak – spelets egen 3D-modell (färdig sak, inte en låda). Byggsatser får en liten ritningsikon i hörnet.
let IKON_FIL = null;
fetch('ikoner/index.json').then((x) => (x.ok ? x.json() : null)).then((a) => { if (a) { IKON_FIL = a.filer || {}; for (const k of Object.keys(ikonCache)) delete ikonCache[k]; try { ritaHotbar(); } catch {} } }).catch(() => {});
const ikonFilnamn = (typ) => typ.replace(/[^\w-]/g, '_');
// modellen för en sak, så som den ser ut färdig: [objekt, saknas] där saknas = ingen riktig modell (lådan)
function ikonModell(typ) {
  const kopia = (o) => { const c = o.clone(true); c.visible = true; c.traverse((x) => { if (x.material === traffMat || x.material?.colorWrite === false) x.visible = false; }); return c; };
  if (!typ.startsWith('byggsats:')) { const m = skapaSak(typ); return [m, false]; }
  const id = typ.slice(9);
  if (id === 'gammalkvarn') {   // kvarnen och extrudern är en maskin
    const g = new THREE.Group(); kvarn.updateMatrixWorld(true); extruder.updateMatrixWorld(true);
    const bas = kvarn.getWorldPosition(new THREE.Vector3());
    for (const o of [kvarn, ...(extruder.parent && extruder.parent !== kvarn ? [extruder] : [])]) { const c = kopia(o); o.matrixWorld.decompose(c.position, c.quaternion, c.scale); c.position.sub(bas); g.add(c); }
    g.traverse((x) => { if (x.isSprite) x.visible = false; });
    return [g, false];
  }
  if (id === 'cykelbatteri') return [kopia(batteri), false];
  if (SKRIVARTYP[id]) return [skapaSkrivare(SKRIVARTYP[id]), false];
  const riktig = skapaRiktig(id); if (riktig) return [riktig, false];
  const g = skapaMaskin(id); if (g && g.children.length) return [g, false];
  if (MASKINER[id]?.hem && HEM_DELAR[id]) { const c = kopia(HEM_DELAR[id]); c.position.set(0, 0, 0); return [c, false]; }
  return [skapaByggsats(id), true];
}
let ikonR2 = null, ikonScen2 = null, ikonKam2 = null;
function renderaIkon(typ, px = 160) {
  if (!ikonR2) {
    ikonR2 = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true }); ikonR2.setPixelRatio(1); ikonR2.setClearColor(0x000000, 0);
    ikonR2.outputColorSpace = renderer.outputColorSpace; ikonR2.toneMapping = renderer.toneMapping;
    ikonScen2 = new THREE.Scene();
    ikonScen2.add(new THREE.HemisphereLight(0xfff4e0, 0x50607a, 2.4));
    const l = new THREE.DirectionalLight(0xffffff, 2.2); l.position.set(2, 3.5, 2.5); ikonScen2.add(l);
    const l2 = new THREE.DirectionalLight(0xbfd8ff, 0.8); l2.position.set(-2.5, 1.5, -1); ikonScen2.add(l2);
    ikonKam2 = new THREE.PerspectiveCamera(26, 1, 0.01, 50);
  }
  ikonR2.setSize(px, px, false);
  const [m0, saknas] = ikonModell(typ), m = new THREE.Group(); m.add(m0);
  m0.traverse((o) => { if (o.isLight || o.isSprite) o.visible = false; });
  { const bort = []; m0.traverse((o) => { if (o !== m0 && !o.visible) bort.push(o); }); bort.forEach((o) => o.parent?.remove(o)); }   // osynliga delar (träffytor, motorn som inte är monterad) räknas inte in i storleken
  m.rotation.y = typ === 'karra' ? 2.4 : 0.65;
  passaIn(m, 1);
  ikonScen2.add(m);
  ikonKam2.position.set(1.55, 1.15, 2.0); ikonKam2.lookAt(0, 0, 0);
  ikonR2.render(ikonScen2, ikonKam2);
  const c = document.createElement('canvas'); c.width = c.height = px; const g = c.getContext('2d'); g.drawImage(ikonR2.domElement, 0, 0);
  ikonScen2.remove(m);
  const m2 = typ.startsWith('byggsats:') ? MASKINER[typ.slice(9)] : null;
  if (m2 && !m2.direkt && (m2.delar || 0) >= 1) {   // köps som ritning och printas: en liten ritningsikon i hörnet
    const s = px * 0.3, x = px - s - 3, y = px - s - 3;
    g.fillStyle = '#1f4f8a'; g.strokeStyle = '#eaf6ff'; g.lineWidth = Math.max(1.5, px / 80);
    g.beginPath(); g.roundRect(x, y, s, s, s * 0.18); g.fill(); g.stroke();
    g.lineWidth = Math.max(1, px / 120); g.beginPath();
    for (let k = 1; k < 4; k++) { g.moveTo(x + s * k / 4, y + 4); g.lineTo(x + s * k / 4, y + s - 4); g.moveTo(x + 4, y + s * k / 4); g.lineTo(x + s - 4, y + s * k / 4); }
    g.globalAlpha = 0.45; g.stroke(); g.globalAlpha = 1;
    g.lineWidth = Math.max(1.5, px / 70); g.beginPath(); g.moveTo(x + s * 0.2, y + s * 0.75); g.lineTo(x + s * 0.5, y + s * 0.28); g.lineTo(x + s * 0.8, y + s * 0.75); g.closePath(); g.stroke();
  }
  return { url: c.toDataURL('image/png'), saknas };
}
// alla saker som kan köpas eller finnas i inventoryt (för verktyget)
const ikonLista = () => [...Object.keys(VAROR), ...Object.keys(MASKINER).map((m) => 'byggsats:' + m), 'karra', 'magnet', 'skrap'];
function ikonBild(typ) {
  if (IKON_FIL?.[typ]) return 'ikoner/' + IKON_FIL[typ];
  if (ikonCache[typ] !== undefined) return ikonCache[typ];
  try { ikonCache[typ] = renderaIkon(typ, 96).url; return ikonCache[typ]; } catch { /* reserven nedan */ }
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
// saker som ställs på ett bord: småsaker och sådant som kräver bord (Skrivare M)
const paBord = (t) => SMASAK(t) || !!(t && MASKINER[placeringsTyp(t)]?.kraverBord);
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
  if (nytt && fabrikSak(typ)) printaFram([mesh]);   // punkt BA: maskinen printas fram ur ritningen
  if (nytt) handelse('placerat', { sak: typ });
  if (SKRIVARTYP[typ]) {
    laggTillSkrivare(p.id, SKRIVARTYP[typ], mesh, S.skrivare[p.id]);
  } else if (typ === 'petgkvarn') {
    laggTillPetg(p);
  } else if (typ === 'saljlada') {
    interaktor.registrera(mesh, { text: saljladaText, aktivera: () => saljladaAktivera(p) });
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
    if (sk.fil >= RULLE) { const n = Math.floor(sk.fil / RULLE); if (laggTill(filTyp(sk), n) === 'full') laggIForrad(filTyp(sk), n, true); }
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
const ELDRIVNA = { sol: 0.35, solpark: 0.6, bank: 0.5, skrivare2: 0.9, skrivare3: 1.3, skrivarepetg: 1.0, petgkvarn: 0.6 };
const kablar = [];
const kabelMat = mat(0x1e1e1e);
function uppdateraKablar() {
  kablar.forEach((k) => { scen.remove(k); k.geometry.dispose(); }); kablar.length = 0;
  const batt = batteri.position;
  for (const p of placerade) {
    if (!(p.typ in ELDRIVNA)) continue;
    const fran = new THREE.Vector3(p.x, ELDRIVNA[p.typ], p.z);
    const mot = new THREE.Vector3(batt.x - fran.x, 0, batt.z - fran.z).normalize();
    // punkt AM: på nya gården går kablarna i vinklar längs västra kanten, inte snett över linjerna
    const V = (x, z) => new THREE.Vector3(x, 0.03, z), zg = fran.z + 1.3, kant = -20.6, bz = batt.z + 1.0;
    const punkter = [fran, V(fran.x, fran.z + 0.4), V(fran.x, zg - 0.2), V(fran.x - 0.3, zg), V((fran.x + kant) / 2, zg), V(kant + 0.3, zg), V(kant, zg + 0.3), V(kant, (zg + bz) / 2), V(kant, bz - 0.3), V(kant + 0.3, bz), V((kant + batt.x) / 2, bz), V(batt.x - 0.3, bz), V(batt.x, bz - 0.3), new THREE.Vector3(batt.x, 0.3, batt.z)];
    const k = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(punkter), 48, 0.022, 6), kabelMat);
    k.castShadow = true; scen.add(k); kablar.push(k);
  }
}
function uppdateraHinder() {
  if (batteriKlart) uppdateraKablar();
  spelare.stegHojd = 0.3;   // man kliver upp för trappsteg (huset på ängen)
  spelare.hinder = [...fasta.filter((f) => !f.grupp || f.grupp.visible).map((f) => f.box), ...tippHinder, ...skjulHinder, ...(S.tippNyckel ? [] : [grindHinder]), ...(S.mark?.agt?.includes('huset') ? husHinder : [])];
  for (const p of placerade) {
    if (p.pa || !['bord', 'sol', 'solpark', 'bank', 'petgkvarn', 'saljlada'].includes(p.typ)) continue;
    p.mesh.updateMatrixWorld(true);
    spelare.hinder.push(new THREE.Box3().setFromObject(p.mesh));
  }
}

// ---------- Skrivare ----------
// spolstället bredvid skrivaren: fler spolar ju större hållare
const SPOL_FARG = [FIL1];
// en riktig filamentspole: svarta gavlar, lindat filament i färg (med lindningsränder) och nav med hål
const NIVA_HEX = { 2: 0xd63a2f, 3: 0x2f9a52, 4: 0xf5c542, 5: 0xb8c0cc };
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
  const sk = { id, gen, mesh, jobb: null, prog: 0, klar: null, visning: null, vantar: '', fil: 0, upprepaPa: !!S.auto?.lada && gen !== PETG_GEN };   // byggd efter leveranslådan: autoprint direkt
  if (sparat) Object.assign(sk, { jobb: sparat.jobb, prog: sparat.prog || 0, klar: sparat.klar, fil: sparat.fil || 0, spolNiva: sparat.spolNiva || 0, upprepa: sparat.upprepa || null, upprepaPa: !!sparat.upprepaPa, klarL: sparat.klarL || null, ko: Array.isArray(sparat.ko) ? sparat.ko : sparat.ko ? [sparat.ko] : [], mod: sparat.mod || null });
  // spolen på skrivarens sida: tjock när den är full, krymper medan den printar
  const spole = new THREE.Group(), B = 0.5 * (mesh.userData.sk || 1);
  const helSpole = filamentSpole(gen === PETG_GEN ? 0xd63a2f : FIL1, 0.13, 0.1); helSpole.rotation.y = Math.PI / 2; spole.add(helSpole);
  const karna = helSpole.userData.lindning;
  spole.position.set(B / 2 + 0.09, 0.45 * (mesh.userData.sk || 1), -B / 4); mesh.add(spole); sk.spole = spole; sk.spoleKarna = karna;
  ritaSpolstall(sk);
  skrivare.push(sk);
  if (sk.klar) visaPaBadd(sk, sk.klar, 1);
  else if (sk.jobb) visaPaBadd(sk, sk.jobb.maskin ? 'del' : sk.jobb.typ, sk.prog);
  interaktor.registrera(mesh, {
    text: () => VAROR[valdTyp()]?.proto?.mod ? (sk.mod ? `Den här skrivaren har redan ${VAROR[sk.mod].namn.replace('Prototyp: ', '').toLowerCase()} – välj en annan skrivare` : `🔧 Montera ${VAROR[valdTyp()].namn.replace('Prototyp: ', '').toLowerCase()} på skrivare ${GEN[sk.gen].namn}`) : SPOL_NIVA[(valdTyp() || '').replace('byggsats:', '')] ? `🧵 Montera ${namnFor(valdTyp()).toLowerCase()} på skrivaren (${(sk.spolNiva || 0) >= (valdTyp().endsWith('2') ? 2 : 1) ? 'har redan' : 'nu ' + maxFil(sk) / RULLE + ' rullar'})` : valdTyp() === 'rulle2' && sk.gen !== PETG_GEN ? 'Röd PETG går bara i PETG-skrivaren' : valdTyp() === 'rulle' && sk.gen === PETG_GEN ? 'PETG-skrivaren tar bara röd PETG' : valdTyp() === filTyp(sk) && !sk.klar ? (rullPlatsI(sk) ? `🧵 Ladda ${Math.min(S.hotbar[S.vald].n, rullPlatsI(sk)) > 1 ? Math.min(S.hotbar[S.vald].n, rullPlatsI(sk)) + ' rullar' : 'rullen'} i skrivaren` : '🧵 Rullhållaren är full – printa något först') : skrivarText(sk),
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
    const s = Math.min([0.55, 0.75, 1.1, 0.85][sk.gen - 1], [0.28, 0.42, 0.85, 0.6][sk.gen - 1] / Math.max(b.max.x - b.min.x, b.max.z - b.min.z, 0.01));
    sk.visning.scale.setScalar(s); sk.visning.userData.s = s;
    sk.mesh.userData.bad.add(sk.visning);
  }
  sk.visning.scale.y = sk.visning.userData.s * Math.max(0.03, prog);
}
function tomBadd(sk) { if (sk.visning) sk.mesh.userData.bad.remove(sk.visning); sk.visning = null; }

function skrivarText(sk) {
  const namn = (sk.gen === PETG_GEN ? 'PETG-skrivaren' : 'Skrivare ' + GEN[sk.gen].namn) + ` (${sk.fil > 0 ? rullar(sk.fil) : sk.gen === PETG_GEN ? 'tom – ladda röd PETG' : 'tom – ladda en rulle'})`;
  if (sk.klar) { const n = antalUt(sk); return `Ta ut ${n > 1 ? n + ' saker' : namnPa(sk.klar)}${sk.jobb ? ` · printar ${Math.floor(sk.prog * 100)} %` : ''}`; }
  if (sk.jobb) {
    const j = sk.jobb, vad = j.maskin ? `${MASKINER[j.maskin].namn}: ${delNamn(j.maskin, j.del - 1).toLowerCase()} (del ${j.del}/${MASKINER[j.maskin].delar})` : VAROR[j.typ].namn;
    return `${vad} – ${Math.floor(sk.prog * 100)} %${sk.vantar ? ' · ' + sk.vantar : ''}`;
  }
  return `Använd skrivaren (${namn})`;
}
const namnPa = (typ) => typ.startsWith('byggsats:') ? MASKINER[typ.split(':')[1]].namn.toLowerCase() : VAROR[typ].namn.toLowerCase();

// så många rullar som får plats – en påbörjad rulle får alltid plats om det finns lite utrymme kvar
const rullPlatsI = (sk) => { const fri = maxFil(sk) - sk.fil; return fri < 50 ? 0 : Math.max(1, Math.floor(fri / RULLE)); };
function laddaSkrivare(sk) {
  // rulle i handen + klick på skrivaren (eller rullhållaren) = ladda. Menyn öppnas aldrig här.
  const har = S.hotbar[S.vald]?.n || 0, n = Math.min(har, rullPlatsI(sk));
  if (!n) { ljud.fel(); ui.toast('Rullhållaren är full – printa något först', 'fel'); return; }
  taBortInv(filTyp(sk), n); sk.fil += n * RULLE; S.stat.laddat = (S.stat.laddat || 0) + n;
  ljud.stor(); ui.toast(`${n > 1 ? n + ' rullar' : 'En rulle'} laddad – skrivare ${GEN[sk.gen].namn} har ${rullar(sk.fil)}`, 'guld'); sparaSkrivare();
}
function anvandSkrivare(sk) {
  if ((valdTyp() === 'rulle' || valdTyp() === 'rulle2') && !sk.klar) {
    if (valdTyp() !== filTyp(sk)) { ljud.fel(); ui.toast(sk.gen === PETG_GEN ? 'PETG-skrivaren tar bara röd PETG (nivå 2) – den kommer från PETG-kvarnen' : 'Röd PETG laddas i den röda PETG-skrivaren. Här går vanlig blå filament.', 'fel'); return; }
    laddaSkrivare(sk); return;
  }
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
  if (sk.klar && !rymsAlla(Object.entries(sk.klarL || { [sk.klar]: 1 }))) {
    ui.toast('🎒 Ryggsäcken är full – lägg något i kistan eller sälj först. Det printade väntar i skrivaren.', 'fel'); ljud.fel(); invIntro('full'); return;
  }
  if (sk.klar) {
    const lista = Object.entries(sk.klarL || { [sk.klar]: 1 }); sk.klar = null; sk.klarL = null; tomBadd(sk);
    for (const [typ, n] of lista) { taUt(typ, n); handelse('tagitUrPrint', { sak: typ, n }); }
    sk.plattaSedan = 0; if (!sk.jobb && (sk.ko?.length || sk.upprepa)) nastaJobb(sk, sk.upprepa);   // punkt 11: plats igen – samma sak en gång till
    if (lista.length > 1 || lista[0][1] > 1) ui.toast(`Tog ut ${lista.map(([t, n]) => `${n} ${namnFor(t).toLowerCase()}`).join(', ')}`, 'bra');
    sparaSkrivare(); return;
  }
  if (sk.jobb) { oppnaPrintMeny(sk); return; }   // printar: menyn har Stoppa efter den här / Avbryt
  oppnaPrintMeny(sk);
}
function taUt(typ, n = 1) {
  {
    if (typ === 'byggsats:grip') {
      S.grip = true; uppdateraSkrapTraff(); ljud.stor(); ui.toast(`🦾 Skräpgripen sitter! Bär ${BARA_SKRAP[1]}, lättare att sikta, plockar när du går nära.`, 'guld');
    } else if (typ === 'byggsats:korg') {
      S.korg = true; uppdateraSkrapTraff(); ljud.stor(); ui.toast(`🗑️ Sopsäcken är över axeln! Du bär ${BARA_SKRAP[2]} skräp nu.`, 'guld');
    } else if (typ === 'byggsats:ryggkorg') {
      S.ryggkorg = true; uppdateraSkrapTraff(); ljud.stor(); ui.toast(`🧺 Ryggkorgen sitter på! Du bär ${BARA_SKRAP[3]} skräp nu.`, 'guld');
    } else if (typ === 'byggsats:ryggsack2') {
      S.storRyggsack = true; while (S.ryggsack.length < RYGG_STOR) S.ryggsack.push(null); ljud.stor(); ui.toast(`🎒 Större ryggsäck – ${RYGG_STOR} platser!`, 'guld');
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
      ui.toast(`Rullställ ${S.rullstall} står vid kvarnen – rullhållaren rymmer nu ${utlagerKap()} rullar`, 'guld');
    } else if (['byggsats:rullband', 'byggsats:lastarm', 'byggsats:robotarm', 'byggsats:utlada'].includes(typ)) {
      monteraAuto(typ.split(':')[1]);
    } else {
      const vart = laggTill(typ, n); ljud.plock();
      if (typeof vart === 'number') byt(vart);
      if (vart === 'kista') ui.toast(`📦 ${namnFor(typ)} → kistan i skjulet (raden är full)`, 'bra');
    }
  }
}

// Skrivare M och L har två jobb: det som printas och ett i kö
const kanKo = (sk) => sk.gen === 2 || sk.gen === 3;
const KO_MAX_SKRIVARE = 3;   // punkt 14: en kö av egna val (max 3) på Skrivare M och L
const upprepbar = (typ) => !!VAROR[typ] && VAROR[typ].pris > 0 && !VAROR[typ].lyx && !VAROR[typ].gava;
const antalUt = (sk) => sk.klar ? Object.values(sk.klarL || { [sk.klar]: 1 }).reduce((a, n) => a + n, 0) : 0;
const plattPlats = (sk) => PLATTA[sk.gen] || 1;
const plattaFull = (sk) => antalUt(sk) >= plattPlats(sk);
const vantarPaPlatta = (sk) => !sk.jobb && !!sk.klar && !!(sk.upprepa || sk.ko?.length) && plattaFull(sk);
function laggUt(sk, typ) {
  if (!sk.klar) { sk.klar = typ; sk.klarL = { [typ]: 1 }; return; }
  sk.klarL = sk.klarL || { [sk.klar]: 1 }; sk.klarL[typ] = (sk.klarL[typ] || 0) + 1;
}
function startaJobb(sk, val) {
  if (sk.jobb) {
    if (kanKo(sk) && (sk.ko?.length || 0) < KO_MAX_SKRIVARE && (val.maskin || (storlekFor(val.typ) <= skrivStorlek(sk) && !(VAROR[val.typ]?.niva === 2)))) { sk.ko = [...(sk.ko || []), val]; sparaSkrivare(); return 'ko'; }
    return 'upptagen';
  }
  return startaDirekt(sk, val);
}
function startaDirekt(sk, val) {
  if (plattaFull(sk)) { setTimeout(() => ui.toast('Plattan är full – ta ut det som är klart först', 'fel'), 50); return false; }
  if (val.maskin) {
    const m = MASKINER[val.maskin];
    if (sk.fil < 1 || sk.gen === PETG_GEN) return false;
    sk.jobb = { maskin: val.maskin, del: 1 };
    visaPaBadd(sk, 'byggsats:' + val.maskin, 0);
  } else {
    const v = VAROR[val.typ];
    if (storlekFor(val.typ) > skrivStorlek(sk)) return false;
    if (sk.fil < 1) return false;
    if (v.niva === 2 && sk.gen !== PETG_GEN) return false;   // PETG-saker kräver PETG-skrivaren
    if (sk.gen === PETG_GEN && v.niva !== 2) return false;
    if (v.niva && v.niva !== 2) {   // kräver en rulle av rätt nivå (förbrukas när utskriften startar)
      if (!antalInv('rulle' + v.niva)) { ui.toast(`Kräver en rulle ${VAROR['rulle' + v.niva].namn} i verktygsraden eller kistan`, 'fel'); return false; }   // U001: direkt
      taBortInv('rulle' + v.niva);
    }
    sk.jobb = { typ: val.typ };
    sk.upprepa = upprepbar(val.typ) && sk.upprepaPa && S.auto?.lada ? val.typ : null;   // punkt 14: autoprint finns bara när leveranslådan är byggd – annars är varje print EN sak
    visaPaBadd(sk, val.typ, 0);
  }
  sk.prog = 0; sparaSkrivare();
  handelse('printStart', { sak: val.maskin ? 'byggsats:' + val.maskin : val.typ });
  return true;
}
// punkt 11: full platta. Första gången en tanke (STORY), står den still i 2 min skickar brorsan ett hjälp-sms (en gång)
const PLATTA_TANKE = 'Den väntar på att jag tar ut grejerna.', PLATTA_BROR = 'Den står still om ingen tömmer den. Typ som jag.';
function plattanFull(sk) {
  if (!sk.plattaSedan) sk.plattaSedan = performance.now();
  if (S.plattaTanke) return; S.plattaTanke = true; sparaSnart();
  tanke(PLATTA_TANKE, 'plattanFull');
}
setInterval(() => {
  if (S.plattaBror || pausad) return;
  const sk = skrivare.find((x) => vantarPaPlatta(x) && x.plattaSedan && performance.now() - x.plattaSedan > 120000);
  if (sk) { S.plattaBror = true; sparaSnart(); sms('bror', PLATTA_BROR); }
}, 5000);
// Avbryt: jobbet stryks och filamentet som gått åt kommer tillbaka (specialrullen också)
function avbrytJobb(sk) {
  const j = sk.jobb; if (!j) return;
  const snal = sk.mod === 'm_snal' ? 0.65 : 1;
  const tillbaka = j.maskin ? MASKINER[j.maskin].gram * ((j.del || 1) - 1 + (sk.prog || 0)) * snal : (VAROR[j.typ]?.gram || 0) * (sk.prog || 0) * snal;
  sk.fil = (sk.fil || 0) + Math.round(tillbaka);
  const niva = !j.maskin && VAROR[j.typ]?.niva; if (niva && niva !== 2) laggTill('rulle' + niva);
  sk.jobb = null; sk.prog = 0; sk.upprepa = null; tomBadd(sk); visaSpolar?.(sk); sparaSkrivare();
  ui.toast(`Avbrutet – ${rullar(tillbaka)} filament tillbaka i skrivaren`, 'bra');
}
// när ett jobb är klart: först det som står i kö, annars samma vara igen så länge filamentet räcker
function nastaJobb(sk, forra) {
  if (plattaFull(sk)) { if (sk.ko?.length || (forra && sk.upprepa === forra)) plattanFull(sk); return false; }   // punkt 11: plattan är full – skrivaren väntar
  if (sk.ko?.length) { const v = sk.ko.shift(); if (startaDirekt(sk, v) === true) { skrivarNotis(sk, `Startar nästa i kön: ${(v.maskin ? MASKINER[v.maskin].namn : VAROR[v.typ].namn).toLowerCase()}`, 'bra'); return true; } }
  if (forra && sk.upprepa === forra) {
    const g = VAROR[forra].gram * (sk.mod === 'm_snal' ? 0.65 : 1);
    if (sk.fil + 0.5 >= g) { const u = sk.upprepa; const ok = startaDirekt(sk, { typ: forra }) === true; sk.upprepa = u; return ok; }
    skrivarNotis(sk, `Filamentet räckte till ${antalUt(sk)} st – ladda en rulle så fortsätter den`, '', true);
  }
  return false;
}

let stromVarnad = 0;
const solEffekt = () => placerade.filter((p) => p.typ === 'sol').length * SOL_PER_S + placerade.filter((p) => p.typ === 'solpark').length * SOLPARK_PER_S;
// hur mycket allt drar just nu när det kör (ström per sekund)
const stromBehov = () => skrivare.filter((sk) => sk.jobb).reduce((a, sk) => a + GEN[sk.gen].strom, 0) + (S.kvarn.motor && S.kvarn.tratt > 0 ? MOTOR_STROM * motorStrom() : 0) + (S.petg?.ko > 0 ? PETG_STROM : 0);
function uppdateraSkrivare(sk, dt) {
  const ud = sk.mesh.userData;
  if (!sk.jobb) { ud.arm.position.x = 0; return false; }
  const j = sk.jobb, g = GEN[sk.gen];
  const tid = j.maskin ? MASKINER[j.maskin].tid : VAROR[j.typ].tid;
  // väntar på filament till nästa del?
  const behov = g.strom * dt * (S.dag === 1 ? 0.4 : 1);   // dag 1: lite trampande räcker långt
  // stannad för ström: vänta tills batteriet har några sekunder i reserv – annars hackar den igång och stannar varje bildruta
  if (S.strom < behov || (sk.vantar === 'ingen ström!' && S.strom < Math.min(stromMax() * 0.5, g.strom * 3))) {
    if (sk.vantar !== 'ingen ström!' && performance.now() > (sk.stromNotis || 0)) {
      sk.stromNotis = performance.now() + 60000;
      const forMycket = stromBehov() > TRAMP_PER_S + solEffekt();
      skrivarNotis(sk, forMycket ? `Ingen ström – skrivarna drar ${Math.round(stromBehov())}/s, cykeln ger ${TRAMP_PER_S}. ${stromFix()}` : 'Ingen ström – trampa cykeln', 'fel');
    }
    sk.vantar = 'ingen ström!';
    return false;
  }
  sk.vantar = '';
  S.strom -= behov;
  let dp = (dt * g.fart * (1 + trimNiva('skrivare') * 0.2) * (sk.mod === 'm_turbo' ? 2 : 1) * (S.dag <= 2 ? 2 : 1)) / tid;   // dag 1–2: halva printtiden
  const gram = (j.maskin ? MASKINER[j.maskin].gram : VAROR[j.typ].gram) * (sk.mod === 'm_snal' ? 0.65 : 1), behovFil = gram * Math.min(dp, 1 - sk.prog);
  if (sk.fil < behovFil) {
    if (sk.fil < 0.5) { sk.vantar = 'filamentet tog slut – ladda en rulle'; if (!sk.slutVarnad) { sk.slutVarnad = true; skrivarNotis(sk, `Filamentet tog slut på ${Math.round(sk.prog * 100)} % – ladda en rulle`, 'fel', true); } S.strom += behov; return false; }
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
        j.del++; ljud.placera(); skrivarNotis(sk, `Del ${j.del - 1} av ${m.delar} klar`, 'bra');
      } else {
        sk.jobb = null; laggUt(sk, 'byggsats:' + j.maskin);
        // ritningen är förbrukad – vill du ha en till får du köpa den igen (väggskivor och fönster räknas upp till max)
        if (!['vaggar', 'fonster'].includes(j.maskin) || arKlar(j.maskin, 1)) S.ritningar = S.ritningar.filter((x) => x !== j.maskin);
        aliStolt(j.maskin, m.namn, true);
        visaPaBadd(sk, sk.klar, 1); ljud.klar(); skrivarNotis(sk, `${m.namn} är klar – ta ut den`, 'guld', true); nastaJobb(sk, null);
        
      }
    } else if (S.auto?.lada && sk.upprepa === j.typ && VAROR[j.typ]?.pris > 0) {
      sk.jobb = null; tomBadd(sk); S.stat.printat++; S.printTot = { ...(S.printTot || {}), [j.typ]: (S.printTot?.[j.typ] || 0) + 1 };
      S.auto.innehall = { ...(S.auto.innehall || {}), [j.typ]: (S.auto.innehall?.[j.typ] || 0) + 1 };
      ladaPaket(sk, j.typ); ljud.placera(); if (sk.ko?.length) nastaJobb(sk, null);
    } else {
      sk.jobb = null; laggUt(sk, j.typ); ljud.klar();
      const nUt = antalUt(sk);
      if (nUt === 1) skrivarNotis(sk, `${VAROR[j.typ]?.namn || 'Utskriften'} är klar – ta ut den${sk.upprepa === j.typ ? ' (printar en till – tryck på skrivaren för att stoppa)' : ''}`, 'guld', true);
      else if (nUt % 3 === 0) skrivarNotis(sk, `${nUt} st klara på skrivaren – ta ut dem`, 'bra');
      if (VAROR[j.typ]?.lyx) S.ritningar = S.ritningar.filter((x) => x !== 'recept:' + j.typ);   // Alis fina ritningar räcker till en
      aliStolt(j.typ, VAROR[j.typ]?.namn, !!VAROR[j.typ]?.recept);
      S.stat.printat++; S.printTot = { ...(S.printTot || {}), [j.typ]: (S.printTot?.[j.typ] || 0) + 1 }; handelse('printKlar', { sak: j.typ, n: S.printTot[j.typ] });
      if (S.stat.printat === 1) forstaPrintWow(sk);
      nastaJobb(sk, j.typ);
    }
    sparaSkrivare();
  }
  return true;
}
// ---------- Automation: rullband från tippen → container → kvarn → robotarm laddar skrivare → autoprint → leveranslåda → Ali ----------
S.auto = { band: false, lastarm: false, arm: false, lada: false, innehall: {}, ko: [], ...S.auto };
// Kedjan och dess flaskhalsar: lastarm (lyftkraft, tempo) → band (fart, platser) → container → kvarn → rulladdare → skrivare → låda
const KO_MAX = 16, BAND_LUCKA = 0.7;
const bandFart = () => 0.7 * 1.25 ** trimNiva('band');
const bandPlatser = () => BAND_BAS + trimNiva('band') * 3;
const armMax = (l = trimNiva('arm')) => Math.round(LASTARM_MAX * 1.7 ** l);
const armTid = () => LASTARM_TID * 0.85 ** trimNiva('arm');
const AUTO = { armTid: 2.5 };
const auto = { byggd: false, band: null, paket: [], bandT: 0, arm: null, armT: 0, armAnim: 0, lastarm: null, lastT: 0, lastAnim: 0, lada: null, skylt: null, flode: { arm: [], band: [] }, vantarPaTung: false };
function monteraAuto(id) {
  if (id === 'utlada') {   // leveranslådan slår på autoprint för alla skrivare (går att stänga av per skrivare)
    for (const sk of skrivare) if (sk.gen !== PETG_GEN) { sk.upprepaPa = true; if (sk.jobb?.typ && upprepbar(sk.jobb.typ)) sk.upprepa = sk.jobb.typ; }
    sparaSkrivare(); handelse('placerat', { sak: 'leveranslada' });
  }
  S.auto[{ rullband: 'band', lastarm: 'lastarm', robotarm: 'arm', utlada: 'lada' }[id]] = true; byggAuto(); ljud.stor(); sparaSnart();
  ui.toast({ rullband: 'Rullbandet står klart! Bär skräp till inmatningen vid tippen – bandet tar det till containern.', lastarm: 'Lastarmen sitter vid tippen och lägger skräp på bandet åt dig. Den orkar bara lätta saker – trimma den hos Ali.', robotarm: 'Robotarmen sitter vid kvarnen – färdiga rullar laddas in i skrivarna automatiskt.', utlada: 'Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon.' }[id], 'guld');
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
    g.position.set(PLAN.FABRIK_PLATSER.find((x) => x.id === 'saljlada').x, 0, 16.3); scen.add(g);   // punkt AM: leveranslådan vid säljlådan
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
  // grossistpris: 70 % av fullpris, ingen mättnad, räknas inte in i dagens försäljning hos Ali
  for (const t of typer) { summa += Math.round(saljPris(t) * GROSSIST) * inn[t]; S.saltTot = { ...(S.saltTot || {}), [t]: (S.saltTot?.[t] || 0) + inn[t] }; antal += inn[t]; }
  S.mynt += summa; S.stat.salt += antal; S.auto.innehall = {};
  setTimeout(() => sms('ali', `Ali här. Hämtade lådan klockan sex. ${antal} saker, ${summa.toLocaleString('sv-SE')} kr på ditt konto. Grossistpris. Jag har också en hyra.`), 2500);
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
      const kan = pa.filter((x) => !x.userData.tung && (x.userData.gram || 200) <= armMax()).sort((a, c) => a.position.distanceTo(la.g.position) - c.position.distanceTo(la.g.position));
      auto.vantarPaTung = pa.length > 0 && !kan.length;
      const x = kan[0];
      if (x) {
        scen.remove(x); interaktor.avregistrera(x); skrapLista.splice(skrapLista.indexOf(x), 1);
        const m = skapaSkrap(x.userData.variant ?? 0); m.scale.multiplyScalar(x.userData.tung ? 0.45 : 0.8);
        skickaSkrap(m, x.position.clone().setY(0.4), auto.band.A.clone().setY(0.7), { dur: 0.8, tratt: true });
        S.auto.ko.push([x.userData.gram || 200, x.userData.tung ? 1 : 0, x.userData.variant ?? 0]);
        S.strom = Math.max(0, S.strom - 2); S.stat.tipp++; auto.lastAnim = 1.0; auto.flode.arm.push([performance.now() / 1000, x.userData.gram || 200]); sparaSnart();
      }
    }
  }
  // rullbandet: tar saker från kön så länge det finns plats på bandet, kör dem till containern
  if (auto.band) {
    const b = auto.band, L = b.A.distanceTo(b.B), kor = S.strom > 1 && S.kvarn.binge.length < BINGE_MAX;
    if (kor && (auto.paket.length || S.auto.ko.length)) {
      S.strom = Math.max(0, S.strom - 0.8 * dt);
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
      if (pk.t >= 1) { scen.remove(pk.m); auto.paket.splice(i, 1); S.kvarn.binge.push(pk.tung ? -pk.gram : pk.gram); auto.flode.band.push([performance.now() / 1000, pk.gram]); S.stat.bandSkrap = (S.stat.bandSkrap || 0) + 1; }
    }
  }
  // robotarmen
  if (auto.arm) {
    auto.armT += dt; auto.armAnim = Math.max(0, auto.armAnim - dt);
    auto.arm.vrid.rotation.y = auto.armAnim > 0 ? Math.sin(auto.armAnim * 4) * 1.2 : auto.arm.vrid.rotation.y * 0.95;
    auto.arm.ovre.rotation.x = auto.armAnim > 0 ? -0.4 + Math.sin(auto.armAnim * 6) * 0.2 : 0;
    if (auto.armT >= AUTO.armTid && helaRullar() > 0) {
      auto.armT = 0;
      const mal = skrivare.filter((x) => filTyp(x) === 'rulle' && x.fil + RULLE <= maxFil(x)).sort((a, c) => (!!c.upprepa - !!a.upprepa) || a.fil - c.fil)[0];   // aldrig vanlig plast i PETG-skrivaren
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
  for (const sk of skrivare) S.skrivare[sk.id] = { jobb: sk.jobb, prog: sk.prog, klar: sk.klar, fil: sk.fil, spolNiva: sk.spolNiva || 0, upprepa: sk.upprepa || null, upprepaPa: !!sk.upprepaPa, mod: sk.mod || null, klarL: sk.klarL || null, ko: sk.ko || [] };
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
    start() { const c = ljudCtx(); if (!c || timer || S.musik === false) return; master = c.createGain(); master.__direkt = true; master.gain.setValueAtTime(0.0001, c.currentTime); master.gain.exponentialRampToValueAtTime(MUSIK_VOLYM, c.currentTime + 6); master.connect(c.destination); nasta = c.currentTime + 0.2; steg = 0; timer = setInterval(schema, 150); },
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
  if (sk.korde && !kor && sk.jobb && performance.now() > (sk.stoppLjudTid || 0)) { sk.stoppLjudTid = performance.now() + 8000; stoppLjud(sk); }   // stannade mitt i – låt det märkas (max var 8:e sekund)
  sk.korde = kor;
  if (!c) return;
  // ett lågt surr: motorbrum + ett svagt stegmotorpip som glider mjukt i fart
  if (!sk.ljud && kor) {
    const brum = c.createOscillator(), pip = c.createOscillator(), lp = c.createBiquadFilter(), bp = c.createBiquadFilter(), g = c.createGain(), gPip = c.createGain();
    brum.type = 'sawtooth'; brum.frequency.value = 95 * [1, 1.2, 0.8, 0.9][sk.gen - 1];
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
      const f = [1, 1.2, 0.8, 0.9][sk.gen - 1];
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
// ---------- Rullen går själv: färdiga rullar glider från extrudern in i skrivaren bredvid (matarslang till den gamla skrivaren, annars inom ca 3 m) ----------
const RULL_AUTO_AVST = 3.2;
let matarSlang = null;
{
  const a = rulle.getWorldPosition(new THREE.Vector3()), b = gammal.position.clone().add(new THREE.Vector3(0.35, 0.25, 0));
  const slang = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([a.clone().setY(0.25), a.clone().lerp(b, 0.25).setY(0.04), a.clone().lerp(b, 0.75).setY(0.04), b]), 40, 0.018, 6), mat(FIL1, { emissive: FIL1, emissiveIntensity: 0.25 }));
  scen.add(slang); matarSlang = slang;
}
// ---------- Punkt AS: start från blankt – cykeln med storebrors skrivare står på vägen ----------
// Ingen kvarn och inga maskiner på gården från start. Ordningen dag 1: lasta av skrivaren → ställ den på sin ruta → bygg om cykeln
// → trampa och printa 3 nyckelringar (300 g) → sälj → köp kvarnen och cykelbatteriet → ställ kvarnen → en flaska ger första rullen.
const VAG_CYKEL = { x: -0.6, z: 21.3, rot: Math.PI / 2 + 0.25 };   // parkerad vid vägkanten, till höger framför dig när spelet börjar
const vagCykel = new THREE.Group(); {
  const bla = mat(0x2d6cdf), svart = mat(0x222222), stal = mat(0xb9c2cc, { metalness: 0.5, roughness: 0.4 });
  for (const z of [-0.55, 0.55]) { const h = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.045, 8, 22), svart); h.rotation.y = Math.PI / 2; h.position.set(0, 0.36, z); vagCykel.add(h); vagCykel.add(at(cyl(0.03, 0.03, 0.1, stal, 8).rotateZ(Math.PI / 2), 0, 0.36, z)); }
  const ror = (a, b) => { const v = new THREE.Vector3().subVectors(b, a), m = box(0.05, 0.05, v.length(), bla); m.position.copy(a).add(b).multiplyScalar(0.5); m.lookAt(b); vagCykel.add(m); };
  const V = (y, z) => new THREE.Vector3(0, y, z);
  ror(V(0.36, 0.55), V(0.42, 0)); ror(V(0.42, 0), V(0.82, -0.12)); ror(V(0.82, -0.12), V(0.84, 0.4)); ror(V(0.84, 0.4), V(0.36, -0.55)); ror(V(0.42, 0), V(0.36, -0.55)); ror(V(0.84, 0.4), V(1.0, 0.48));
  vagCykel.add(at(box(0.22, 0.05, 0.12, svart), 0, 0.88, -0.14));   // sadeln
  vagCykel.add(at(box(0.56, 0.04, 0.04, svart), 0, 1.02, 0.5));     // styret
  // pakethållaren över bakhjulet, med storebrors skrivare fastspänd med två orange spännband
  vagCykel.add(at(box(0.32, 0.03, 0.5, stal), 0, 0.72, -0.5));
  for (const x of [-0.14, 0.14]) vagCykel.add(at(box(0.03, 0.36, 0.03, stal), x, 0.54, -0.68));
  // punkt 9: samma Skrivare S som på gården (skapaSkrivare(1)), stor nog att kännas igen – spännbanden bara runt bottenplattan
  const pakS = skapaSkrivare(1); pakS.scale.setScalar(0.82); pakS.position.set(0, 0.74, -0.5); vagCykel.add(pakS); vagCykel.userData.skrivare = pakS;
  const bandMat = mat(0xf28c28);
  for (const z of [-0.62, -0.38]) { vagCykel.add(at(box(0.44, 0.02, 0.035, bandMat), 0, 0.815, z)); for (const x of [-0.215, 0.215]) vagCykel.add(at(box(0.02, 0.1, 0.035, bandMat), x, 0.77, z)); }
  { const st = at(box(0.04, 0.32, 0.04, svart), 0.08, 0.16, -0.1).rotateZ(0.5); st.userData.stod = true; vagCykel.add(st); }   // stödet
  vagCykel.position.set(VAG_CYKEL.x, 0, VAG_CYKEL.z); vagCykel.rotation.set(0, VAG_CYKEL.rot, 0.08);
  vagCykel.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  scen.add(vagCykel);
}
traffYta(vagCykel, 0.7, 1.2, 1.8);
// punkt 9: generatorcykeln är samma cykel som kom på vägen (utan skrivaren, banden och stödet), upplyft på stället.
// Den gamla lådcykelns delar döljs; generatorn och blixten sitter kvar.
{
  const c = vagCykel.clone(true); c.position.set(0, 0.18, 0); c.rotation.set(0, 0, 0);
  const bort = []; c.traverse((o) => { if (o === c) return; if (o.type === 'Group' || o.userData.stod || (o.isMesh && o.material?.color?.getHex?.() === 0xf28c28)) bort.push(o); });
  bort.forEach((o) => o.parent?.remove(o)); c.traverse((o) => { o.visible = true; });
  for (const o of [...cykel.children]) if (o !== generator && o !== blixt && o !== pedaler && !(o.material === traffMat)) o.visible = false;
  pedaler.position.y = 0.6; cykel.add(c);
  cykel.userData.hjul = c.children.filter((o) => o.geometry?.type === 'TorusGeometry');
}
// stället som cykeln lyfts upp på vid linje 1 (bakhjulet blir fritt)
const cykelStall = new THREE.Group(); {
  const m = mat(0x555c66, { metalness: 0.4 });
  for (const x of [-0.25, 0.25]) { cykelStall.add(at(box(0.05, 0.42, 0.05, m), x, 0.21, 0.3)); cykelStall.add(at(box(0.05, 0.05, 0.6, m), x, 0.025, 0.2)); }
  cykelStall.add(at(box(0.55, 0.05, 0.05, m), 0, 0.42, 0.3));
  cykelStall.position.set(-12.6, 0, 13.9); cykelStall.rotation.y = 0.7; scen.add(cykelStall);
}
// ett ställe där skrivaren och kvarnen ställs: en osynlig yta på rätt ruta
const startYta = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.2, 1.8), traffMat); scen.add(startYta);
const startPlats = (id) => PLAN.FABRIK_PLATSER.find((p) => p.id === id);
const startHall = () => valdTyp() === 'skrivareS' ? startPlats('L1-skrivare1') : valdTyp() === 'byggsats:gammalkvarn' ? startPlats('L1-kvarn') : null;
function ritaStart() {
  kvarn.visible = !!S.kvarnStar;
  gammal.visible = ladGrupp.visible = !!S.skrivareStar;
  cykel.visible = cykelStall.visible = !!S.cykelOmbyggd; if (startKabel) startKabel.visible = !!S.cykelOmbyggd;
  batteri.visible = !!S.batteriKopt;
  if (matarSlang) matarSlang.visible = !!S.kvarnStar && !!S.skrivareStar;
  if (!cykelAnim) vagCykel.visible = !S.cykelOmbyggd;
  vagCykel.userData.skrivare.visible = !S.skrivareLastad; vagCykel.children.filter((o) => o.material?.color?.getHex() === 0xf28c28 && o.geometry?.type === 'BoxGeometry').forEach((o) => { o.visible = !S.skrivareLastad; });
  const pl = startHall(); startYta.visible = !!pl; if (pl) startYta.position.set(pl.x, 0.6, pl.z);
  uppdateraHinder();
}
interaktor.registrera(startYta, {
  text: () => valdTyp() === 'skrivareS' ? '🖨️ Ställ skrivaren här' : '⚙️ Ställ kvarnen här',
  kanAktivera: () => !!startHall(),
  aktivera: () => {
    const typ = valdTyp();
    if (typ === 'skrivareS') { taBortVald(); S.skrivareStar = true; ljud.stor(); ui.toast('🖨️ Storebrors skrivare står på sin plats i linje 1', 'bra'); }
    else if (typ === 'byggsats:gammalkvarn') { taBortVald(); S.kvarnStar = true; ljud.stor(); ui.toast('⚙️ Kvarnen står i linje 1. Den är redan 80 % full – en flaska till så blir det en rulle.', 'guld'); }
    else return;
    ritaHotbar(); ritaStart(); sparaSnart(); handelse('placerat', { sak: typ === 'skrivareS' ? 'skrivareS' : 'kvarnen' });
    printaFram(typ === 'skrivareS' ? [gammal, ladGrupp] : [kvarn, ...(extruder.parent && extruder.parent !== kvarn ? [extruder] : [])]);   // punkt BA
  },
});
interaktor.registrera(vagCykel, {
  text: () => !S.skrivareLastad ? '🖨️ Lasta av skrivaren från cykeln' : '🔧 Gör om cykeln så att den ger ström',
  kanAktivera: () => !cykelAnim && (!S.skrivareLastad || (S.skrivareStar && !S.cykelOmbyggd)),
  aktivera: () => {
    if (!S.skrivareLastad) {
      if (!harRumFor('skrivareS')) { ui.toast('Verktygsraden är full', 'fel'); return; }
      S.skrivareLastad = true; handelse('lastatAv', { sak: 'skrivare' }); const i = laggTill('skrivareS'); if (typeof i === 'number') byt(i);
      ljud.plock(); ui.toast('🖨️ Du har skrivaren. Ställ den på den lysande rutan i linje 1.', 'bra'); ritaStart(); sparaSnart(); return;
    }
    byggOmCykeln();
  },
});
// bygg om cykeln: den rullar till linje 1, lyfts upp på stället och en sladd dras till skrivaren (ca 2 s)
let cykelAnim = null, trampTest = 0, vevTest = 0;
// ---------- Punkt BC/BD: händelser. handelse('tagitUrPrint', { sak }) – paHandelse('tagitUrPrint', fn) ----------
const lyssnare = {}, handelseLogg = [];
function paHandelse(namn, fn) { (lyssnare[namn] ||= []).push(fn); }
function handelse(namn, data = {}) {
  handelseLogg.push({ t: Math.round(performance.now()), dag: S.dag, namn, data }); if (handelseLogg.length > 500) handelseLogg.shift();
  textLogg('händelse', namn, Object.entries(data).map(([k, v]) => k + '=' + v).join(' '));
  for (const fn of [...(lyssnare[namn] || []), ...(lyssnare['*'] || [])]) { try { fn(data, namn); } catch (e) { console.warn('händelse', namn, e); } }
}
// punkt AX: simuleringen loggar all text som visas eller läses upp
const TEXTLOGG = [];   // punkt BD: allt som visas, läses upp, väntar eller stryks – __printahem.textLogg()
function textLogg(kalla, vem, text, varfor = '') {
  try { TEXTLOGG.push({ t: Math.round(performance.now()), dag: S?.dag, kalla, vem, text: String(text ?? '').slice(0, 200), varfor }); if (TEXTLOGG.length > 3000) TEXTLOGG.shift(); } catch {}
  try { window.__textLogg?.(kalla, vem, String(text ?? ''), varfor); } catch {}
}
// ---------- Punkt BD: en gemensam kö för texter (sms och notiser från figurer) ----------
// STORY > MÅL > REAKTION > SMÅPRAT. Max en text per TEXT_MELLAN ms från olika källor. "Stryks om" kontrolleras precis innan visning.
// STORY kommer även med en meny öppen, småprat väntar tills menyn är stängd. Allt väntar under animationer och kapitelkort.
const VIKT_ORDNING = { STORY: 0, 'MÅL': 1, REAKTION: 2, 'SMÅPRAT': 3 };
// Punkt 15: EN kanal för allt som berättar något. Bara en sak åt gången syns och hörs; text och röst kommer tillsammans.
// En sak: { vikt, vem, text, visa(), rost (false = bara text), minMs, stryksOm(), efter(), forst }. Efter varje sak: ROST_PAUS.
const kanal = []; let kanalAktiv = null, kanalFri = 0;
function kanalLagg(it) {
  it.t = performance.now(); it.vikt = it.vikt || 'REAKTION';
  // kön får inte växa: max en sak per figur i kön (STORY stryks aldrig – den väntar)
  if (it.vikt !== 'STORY' && it.vem) { const i = kanal.findIndex((x) => x.vem === it.vem && x.vikt !== 'STORY'); if (i >= 0) { textLogg('struken', kanal[i].vem, kanal[i].text || '', 'en nyare från samma'); kanal.splice(i, 1); } }
  kanal.push(it); textLogg('väntar', it.vem || '', it.text || '', it.vikt); kanalRaknare();
}
const animationPagar = () => !!(spikar || cykelAnim || printarFram.size || document.querySelector('.ph-kapkort, .ph-kap') || sover);
const scenPagar = () => introPagar || julPagar || pappaBesok.aktiv || S.resa === 'pagar';
const kanalPausad = () => pausad || !ui.igang || animationPagar() || scenPagar() || !medEl2.hidden || !ui.butiksOverlay.hidden || !ui.overlay.hidden;
const kanalLedig = () => !kanalAktiv && performance.now() >= kanalFri;
function korKanal() {
  const nu = performance.now();
  if (kanalAktiv) {
    const a = kanalAktiv; if (nu < a.slut || (pratarVem === a.vem && nu < pratarTill)) return;
    kanalAktiv = null; kanalFri = nu + ROST_PAUS; textLogg('klar', a.vem || '', a.text || '', a.vikt); try { a.efter?.(); } catch (e) { console.warn(e); } kanalRaknare();
  }
  if (!kanal.length || nu < kanalFri || kanalPausad()) return;
  kanal.sort((a, b) => (b.forst ? 1 : 0) - (a.forst ? 1 : 0) || VIKT_ORDNING[a.vikt] - VIKT_ORDNING[b.vikt] || a.t - b.t);
  while (kanal.length) {
    const it = kanal.shift();
    if (it.stryksOm?.()) { textLogg('struken', it.vem || '', it.text || '', 'pekar bakåt'); continue; }
    if ((it.vikt === 'REAKTION' || it.vikt === 'SMÅPRAT') && nu - it.t > KANAL_GAMMAL) { textLogg('struken', it.vem || '', it.text || '', 'väntade för länge'); continue; }
    if (it.tidigast && nu < it.tidigast) { kanal.unshift(it); return; }
    kanalAktiv = it; it.slut = nu + (it.minMs ?? 2500);
    textLogg('sak', it.vem || '', it.text || '(nytt mål i rutan)', it.vikt);
    try { it.visa?.(); } catch (e) { console.warn(e); }
    if (it.rost !== false && it.text) { prataNu(it.vem, it.text, it.vikt, { start: it.start }); it.slut = Math.max(it.slut, pratarTill); }
    kanalRaknare(); return;
  }
  kanalRaknare();
}
// "2 väntar" vid meddelandeikonen
function kanalRaknare() {
  const n = kanal.length, k = document.querySelector('[data-hud="sms"]'); if (!k) return;
  let b = k.querySelector('.hud-vantar'); if (!b) { b = document.createElement('em'); b.className = 'hud-vantar'; k.appendChild(b); }
  b.textContent = n ? `${n} väntar` : ''; b.hidden = !n;
}
{ const st = document.createElement('style'); st.textContent = '.hud-vantar{position:absolute;left:50%;top:100%;transform:translate(-50%,3px);white-space:nowrap;font:700 10px system-ui;color:#ffd27a;background:rgba(20,22,30,.85);padding:1px 6px;border-radius:8px;font-style:normal;pointer-events:none}'; document.head.appendChild(st); }
// en tanke (din röst + 💭-notis) som en sak i kanalen
function tanke(t, varfor = '', vikt = 'STORY') { textLogg('tanke', 'du', t, varfor); kanalLagg({ vikt, vem: 'du', text: t, visa: () => notisVisa('💭 ' + t, 'tanke', { tid: 5000 }) }); }
// en replik med en notis (Helen ropar …)
function replik(vem, text, notisText, vikt = 'REAKTION') { kanalLagg({ vikt, vem, text, visa: () => notisText && notisVisa(notisText, '') }); }
// gamla anrop: koaText lägger sms i kanalen
function koaText(kalla, vikt, visa, o = {}) { kanalLagg({ vikt, vem: kalla, text: o.text || '', visa, rost: false, stryksOm: o.stryksOm }); }
function korTextKo() {}
function byggOmCykeln() {
  if (cykelAnim || S.cykelOmbyggd) return;
  const fran = vagCykel.position.clone(), mal = new THREE.Vector3(-12.6, 0, 13.9), r0 = vagCykel.rotation.y, t0 = performance.now();
  cykelAnim = { t0 }; tittaMot(mal.x, mal.z, 2.2); ljud.plock();
  const kabelGeo = startKabel?.geometry, n = kabelGeo?.index ? kabelGeo.index.count : 0;
  const steg = () => {
    const t = (performance.now() - t0) / 1000;
    if (t < 0.9) {   // rullar dit i en båge
      const k = t / 0.9, e = k * k * (3 - 2 * k);
      vagCykel.position.lerpVectors(fran, mal, e); vagCykel.position.y = Math.sin(k * Math.PI) * 1.2;
      vagCykel.rotation.set(0, r0 + (0.7 + Math.PI / 2 - r0) * e, 0.08 * (1 - e));
    } else if (t < 1.4) {   // stället reser sig, cykeln lyfts upp
      const k = (t - 0.9) / 0.5; vagCykel.position.y = 0.18 * k;
      cykelStall.visible = true; cykelStall.scale.set(1, k, 1);
    } else if (t < 2.0) {   // nu är det en generator: sladden dras till skrivaren
      if (vagCykel.visible) { vagCykel.visible = false; cykel.visible = true; ljud.stor(); if (startKabel) startKabel.visible = true; }
      const k = (t - 1.4) / 0.6; if (kabelGeo && n) kabelGeo.setDrawRange(0, Math.ceil(n * k / 3) * 3);
    } else {
      if (kabelGeo) kabelGeo.setDrawRange(0, Infinity);
      cykelStall.scale.set(1, 1, 1); cykelAnim = null; S.cykelOmbyggd = true; ritaStart(); sparaSnart(); handelse('ombyggd', { sak: 'cykel' });
      ui.toast('🚲⚡ Cykeln är kopplad till skrivaren. Trampa så får skrivaren ström!', 'guld'); return;
    }
    requestAnimationFrame(steg);
  };
  requestAnimationFrame(steg);
}
// nytt spel: skrivaren har 300 g kvar (tre nyckelringar)
if (!S.skrivareStar && !S.stat.printat) { const g1 = skrivare.find((x) => x.id === 'g1'); if (g1 && !g1.fil) g1.fil = 300; }
ritaStart();
let autoRullT = 0;
function autoRulle(dt) {
  autoRullT += dt; if (autoRullT < 0.5) return; autoRullT = 0;
  if (!S.kvarnStar || !S.skrivareStar) return;   // punkt AS: kvarnen och skrivaren måste stå på gården
  if (helaRullar() < 1) return;
  const rp = rulle.getWorldPosition(new THREE.Vector3()), w = new THREE.Vector3();
  const kand = linjeSkrivare(1).slice(0, linjeSpolar(1))
    .filter((sk) => sk.gen !== PETG_GEN && rullPlatsI(sk) > 0).sort((x, y) => x.fil - y.fil);   // punkt AM: linjens spolhållare matar 1, 2 eller 4 skrivare
  const sk = kand[0]; if (!sk) return;
  S.kvarn.ut -= RULLE; sk.fil += RULLE; S.stat.hamtat++; S.stat.laddat = (S.stat.laddat || 0) + 1;
  ljud.plock(); sparaSkrivare(); sparaSnart();
  if (!S.autoRullSedd) { S.autoRullSedd = true; notis('🧵 Rullen gled själv genom slangen in i skrivaren – nu kan du printa', 'guld', { tid: 5000 }); }
  else skrivarNotis(sk, `Ny rulle från kvarnen – ${rullar(sk.fil)} i skrivaren`, 'bra');
}

// återställ placerade saker (bord först så att skrivare kan stå på dem)
[...S.placerade].sort((a, b) => (a.pa ? 1 : 0) - (b.pa ? 1 : 0)).forEach((p) => placera({ ...p }, false));
S.placerade = placerade.map(sparbar);

// återställ det man bar
hand.kapacitet = 99;
for (const typ of S.hand) if (typ.startsWith('skrap')) hand.plocka(skapaSkrap(Number(typ.split(':')[1]) || 0));
hand.kapacitet = BARA_SKRAP[niva()];
if (S.karra && !antalInv('karra')) laggTill('karra');
if (S.magnet && !antalInv('magnet')) laggTill('magnet');
ritaHand();

// ---------- Interaktion: kvarn, cykel, marknad ----------
function raknaOmSteg() {
  S.steg = 0;
  while (S.steg < STEG.length && STEG[S.steg].klar()) S.steg++;
  const st = STEG[S.steg];
  if (st?.startPost && !S.lappar.includes(st.startPost) && !S.post.lapp) S.post.lapp = st.startPost;   // B4: skriv aldrig över en annan lapp (N., trädgården, jobb)
}
if (S.kvarn.motor) kvarn.add(motor);
let malAnimation = 0;
const harMotorsats = () => valdTyp() === 'byggsats:kvarnmotor';
const trattTyp = () => valdTyp() === 'byggsats:stortratt';
const bandTyp = () => valdTyp() === 'byggsats:matarband';
// lägg skräp i tratten – är den full hamnar resten i bingen (om matarbandet finns)
// ---------- PETG-linjen: tungt skräp → röd PETG (nivå 2) i en egen röd kvarn – ett eget flöde bredvid det vanliga ----------
const PETG_FART = 220;      // gram per sekund kvarnen mal
const PETG_STROM = 3;       // ström per sekund medan den mal
const PETG_MAX = 4;         // klara rullar som får plats på spolhållaren
const PETGBAND_TID = 16;    // sekunder mellan varje tungt fynd bandet hämtar från tippen
S.petg = Object.assign({ ko: 0, ut: 0, rullar: 0, band: false }, S.petg || {});
let petgBandT = 0;
const petgKvarn = () => placerade.find((p) => p.typ === 'petgkvarn');
function petgIn(gram) { if (!petgKvarn()) return false; S.petg.ko += gram; S.stat.tungMalt = (S.stat.tungMalt || 0) + 1; sparaSnart(); return true; }
const petgTopp = (p) => p.mesh.localToWorld(new THREE.Vector3(0, 1.3, 0));
function petgTungaIKarran() { return valdKarra() ? S.karraLast.filter((v) => SKRAP_SORTER[skrapSort(v)].tung) : []; }
function petgText() {
  const tunga = petgTungaIKarran();
  if (tunga.length) return `Töm ${tunga.length} tunga i PETG-kvarnen (≈ ${rullar(tunga.reduce((a, v) => a + SKRAP_SORTER[skrapSort(v)].gram, 0))} röd PETG)`;
  if (valdTyp() === 'fynd2') return 'Mal den röda backen till röd PETG';
  if (valdTyp() === 'byggsats:petgband') return 'Montera det tunga rullbandet på PETG-kvarnen';
  if (S.petg.rullar) return `Ta ${S.petg.rullar === 1 ? 'en rulle' : S.petg.rullar + ' rullar'} röd PETG`;
  const mal = S.petg.ko > 1 ? `mal ${rullar(S.petg.ko)}${S.strom < PETG_STROM ? ' – ingen ström!' : ''}` : 'tom – kör hit tunnor och kajaker med skottkärran';
  return `PETG-kvarnen · ${mal}${S.petg.band ? ' · rullbandet hämtar själv' : ''}`;
}
function petgAktivera(p) {
  if (valdTyp() === 'byggsats:petgband') {
    if (S.petg.band) { ui.toast('Rullbandet sitter redan', 'fel'); return; }
    taBortVald(); S.petg.band = true; ritaPetgBand(p); ljud.stor(); ui.toast('Det tunga rullbandet går! Det hämtar tunnor och kajaker från tippen och matar PETG-kvarnen.', 'guld'); sparaSnart(); return;
  }
  if (valdKarra() && S.karraLast.length) {
    const kvar = [], fran = karraPivot.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.6, 0)); let n = 0;
    for (const v of S.karraLast) {
      const so = SKRAP_SORTER[skrapSort(v)]; if (!so.tung) { kvar.push(v); continue; }
      const m = skapaSkrap(v), d = n; setTimeout(() => skickaSkrap(m, fran, petgTopp(p), { dur: 0.7, tratt: false }), d * 300);
      petgIn(so.gram); n++;
    }
    S.karraLast = kvar; ritaKarraLast();
    if (n) { ljud.stor(); ui.toast(`${n} tunga i PETG-kvarnen – de blir röd PETG`, 'bra'); S.stat.ilagt += n; sparaSnart(); return; }
    ui.toast('PETG-kvarnen tar bara tunga saker. Smått skräp går i den vanliga kvarnen.', 'fel'); ljud.fel(); return;
  }
  if (valdTyp() === 'fynd2') { taBortVald(); S.petg.ko += RULLE; ljud.stor(); ui.toast('Den röda backen åker ner i PETG-kvarnen – en rulle röd PETG på väg', 'guld'); sparaSnart(); return; }
  if (VAROR[valdTyp()]?.malTill) { ui.toast('PETG-kvarnen tar bara röda fynd (nivå 2). Grönt och finare mals i den vanliga kvarnen.', 'fel'); ljud.fel(); return; }
  if (S.petg.rullar) {
    const n = S.petg.rullar, vart = laggTill('rulle2', n); if (vart === 'full') return;
    S.petg.rullar = 0; S.stat.hamtat = (S.stat.hamtat || 0) + n; ljud.plock(); ui.toast(`${n === 1 ? 'En rulle' : n + ' rullar'} röd PETG${vart === 'kista' ? ' → kistan i skjulet' : ''}. Ladda den i PETG-skrivaren – eller sälj till Ali.`, 'guld'); sparaSnart(); return;
  }
  if (!valdTyp() && S.petg.ko < 1) { plockaUppPlacerad(p); return; }
  ui.toast(petgText());
}
function ritaPetgBand(p) {
  if (!p || p.mesh.userData.band) return;
  const b = skapaMaskin('petgband'); b.position.set(-1.05, 0, 0); b.rotation.y = 0; p.mesh.add(b); p.mesh.userData.band = b;
}
function laggTillPetg(p) {
  interaktor.registrera(p.mesh, { text: petgText, aktivera: () => petgAktivera(p) });
  if (S.petg.band) ritaPetgBand(p);
}
function uppdateraPetg(dt) {
  const p = petgKvarn(); if (!p) return;
  const ud = p.mesh.userData;
  const kor = S.petg.ko > 0 && S.petg.rullar < PETG_MAX && S.strom >= PETG_STROM * dt;
  if (kor) {
    const g = Math.min(S.petg.ko, PETG_FART * dt); S.petg.ko -= g; S.petg.ut += g; S.strom -= PETG_STROM * dt;
    if (S.petg.ko < 1) { S.petg.ut += S.petg.ko; S.petg.ko = 0; }
    while (S.petg.ut >= RULLE - 1 && S.petg.rullar < PETG_MAX) {
      S.petg.ut = Math.max(0, S.petg.ut - RULLE); S.petg.rullar++; ljud.klar();
      notis(`PETG-kvarnen: ${S.petg.rullar === 1 ? 'en rulle' : S.petg.rullar + ' rullar'} röd PETG klar${S.petg.rullar >= PETG_MAX ? ' – spolhållaren är full, hämta dem' : ''}`, 'guld', { tid: 4000 });
      sparaSnart();
    }
  }
  if (ud.trumma) ud.trumma.rotation.x += kor ? dt * 10 : 0;
  ud.spolar?.forEach((sp, i) => { sp.visible = i < S.petg.rullar; });
  // eget rullband: hämtar tungt från tippen och matar kvarnen
  if (S.petg.band && S.strom > 1) {
    petgBandT += dt;
    if (petgBandT >= PETGBAND_TID && S.petg.ko < 3 * RULLE) {
      petgBandT = 0;
      const x = skrapLista.filter((s) => s.userData.tung && paTippen(s.position.x, s.position.z))[0] || skrapLista.filter((s) => s.userData.tung)[0];
      if (x) {
        scen.remove(x); interaktor.avregistrera(x); skrapLista.splice(skrapLista.indexOf(x), 1);
        const m = skapaSkrap(x.userData.variant ?? 0); m.scale.multiplyScalar(0.6);
        skickaSkrap(m, p.mesh.localToWorld(new THREE.Vector3(-1.6, 0.7, 0)), petgTopp(p), { dur: 0.9, tratt: false });
        petgIn(x.userData.gram || 1500); S.strom = Math.max(0, S.strom - 2); S.stat.tipp++;
      }
    }
  }
}
function iTratten(gram, tung) {
  if (tung && petgKvarn()) return petgIn(gram) ? 'petg' : false;   // tungt på bandet går vidare till PETG-kvarnen
  if (S.kvarn.tratt < TRATT_MAX) { spelaLjud('tratt'); S.kvarn.tratt++; S.kvarn.trattGram += gram; if (tung) S.stat.tungMalt = (S.stat.tungMalt || 0) + 1; return 'tratt'; }
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
    if (valdTyp()?.startsWith('burk_')) return `Mal ${VAROR[valdTyp()].namn.toLowerCase()} till filament (pappa avråder starkt${senaSystem() ? ` · respekt −${BURK_RESPEKT}` : ''})`;
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
      const kvar = [], utanfor = [];
      let tung = false;
      for (const v of S.karraLast) {
        const so = SKRAP_SORTER[skrapSort(v)];
        if (so.tung) { tung = true; kvar.push(v); continue; }   // tungt går bara i PETG-kvarnen
        const vart = iTratten(so.gram, so.tung); if (!vart) { utanfor.push(v); continue; }
        const m = skapaSkrap(v), fran = karraPivot.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.6, 0));
        setTimeout(() => skickaSkrap(m, fran, vart === 'tratt' ? trattTopp() : bingePunkt(), { dur: 0.7, tratt: vart === 'tratt' }), n * 250);
        n++;
      }
      // B3: det som inte får plats tippas på marken bredvid kvarnen – man står aldrig fast med kärran
      if (utanfor.length) {
        const b = kvarn.getWorldPosition(new THREE.Vector3());
        utanfor.forEach((v, i) => { const a = 0.9 + i * 0.55, rr = 1.3 + (i % 4) * 0.22; laggSkrap(b.x + Math.cos(a) * rr + 0.4, b.z + 1.2 + Math.sin(a) * rr * 0.6, v, a * 2); });
        if (!S.sophallarTanke) { S.sophallarTanke = true; tanke('Det får inte plats. Jag behöver något att tippa i.', 'sophållare'); }
      }
      S.karraLast = kvar; ritaKarraLast();
      if (tung) varna('litenTratt');
      if (!n && !utanfor.length) { if (!tung) varna(extruderFull() ? 'rulle' : 'tratt'); return; }
      S.stat.ilagt += n; S.stat.karraTomt = (S.stat.karraTomt || 0) + 1; ljud.stor(); ui.toast(utanfor.length ? `${n} st i tratten · ${utanfor.length} st på marken bredvid` : `${n} st från kärran i tratten`, 'bra'); sparaSnart(); return;
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
  ljud.stor(); ui.toast('⚙️ Motorn sitter på kvarnen! Nu mal den själv.', 'guld'); sparaSnart(); handelse('monterat', { sak: 'kvarnmotor' });
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
  if (extruderFull()) return 'rullhållaren vid kvarnen är full – ta rullarna eller köp större';
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
// kapitel 1 efter dag 1: pilen visar postlådan (Rolfs brev och gåvor), gårdens skräp och tippen
function postMal() {
  const st = STEG[S.steg]; if (!st || st.sov || S.kapitel > 1) return null;
  const t = stegText(st);
  if (/postlåd/i.test(t) && (st.startPost || /^Lägg /.test(t) && aktivGava?.() && antalInv(aktivGava()) > 0)) return 'post';
  if (/^Städa gården/.test(t)) return 'gard';
  if (/skräp på soptippen/.test(t)) return 'tipp';
  return null;
}
// punkt AL: mätningen 'fast' – samma mål i mer än 3 minuter speltid (en gång per mål)
let fastSteg = -1, fastStart = 0;
function kollaFast() {
  if (S.steg !== fastSteg) { fastSteg = S.steg; fastStart = S.speltid || 0; return; }
  if (fastStart < 0 || (S.speltid || 0) - fastStart < 180 || S.steg >= STEG.length) return;
  fastStart = -1;
  const st = STEG[S.steg], na = nastaAtgard(stegText(st)), p = malPil.visible ? malPil.position : null;
  const filament = Math.round(skrivare.reduce((a, x) => a + (x.fil || 0), 0) + antalInv('rulle') * RULLE + (S.kvarn.ut || 0));
  skickaData('fast', { steg: S.steg, stegText: String(stegText(st)).slice(0, 60), nu: String(na?.[1] || '').slice(0, 80), dag: S.dag, mynt: S.mynt, filament, pil: na?.[3] || (S.steg <= SI.sov1 ? 'dag1' : postMal() || 'ingen'), pilSyns: !!p, pilPos: p ? [+p.x.toFixed(1), +p.z.toFixed(1)] : null, minuter: 3 });
}
function alPil() {
  const st = STEG[S.steg]; if (!st || st.sov || !S.skyltUppe) return null;
  const k = nastaAtgard(stegText(st))?.[3], v = new THREE.Vector3();
  if (k === 'ali') return new THREE.Vector3(ALI.x, 1.4, ALI.z - 1.2);
  if (k === 'skrivare') { const sk = skrivare.find((x) => x.gen !== PETG_GEN && !x.jobb) || skrivare[0]; return sk?.mesh.getWorldPosition(v).setY(0.9) || null; }
  if (k === 'kvarn') return trattTopp().clone();
  if (k === 'skrap') { const x = skrapLista.filter((y) => kanLyfta(y) && !y.userData.tung).sort((a, b) => a.position.distanceTo(spelare.pos) - b.position.distanceTo(spelare.pos))[0]; return x ? x.getWorldPosition(v).setY(0.3) : null; }
  return null;
}
function malPunkt() {
  if (spikAnim) return null;   // ingen pil medan du spikar
  { const a = alPil(); if (a) return a; }   // punkt AL: köp, printa och filament pekar dit du ska
  if (S.steg > SI.sov1) {
    const m = postMal(), v = new THREE.Vector3();
    if (m === 'post') return postlada.getWorldPosition(v).setY(1.5);
    if (m === 'gard') { const x = skrapLista.filter((x) => kanLyfta(x) && !paTippen(x.position.x, x.position.z) && Math.abs(x.position.x) <= TOMT && Math.abs(x.position.z) <= TOMT).sort((a, b) => a.position.distanceTo(spelare.pos) - b.position.distanceTo(spelare.pos))[0]; return x ? x.getWorldPosition(v).setY(0.3) : null; }
    if (m === 'tipp' && !paTippen(spelare.pos.x, spelare.pos.z)) return new THREE.Vector3(TIPP.x, 1.2, TIPP.z);
    return null;
  }
  const v = new THREE.Vector3();
  const gripbart = () => skrapLista.filter((x) => !x.userData.tung && !paTippen(x.position.x, x.position.z)).sort((a, b) => a.position.distanceTo(spelare.pos) - b.position.distanceTo(spelare.pos))[0];
  if (!S.skyltUppe && S.steg <= 1) return bradhog.getWorldPosition(v).setY(0.2);
  { const t = valdTyp(), hall = t && arPlacerbar(t) && fabrikSak(placeringsTyp(t)) ? planNasta() : null; if (hall) return new THREE.Vector3(hall.x, 1.2, hall.z); }   // punkt BC: en liten pil över platsen när man håller saken
  const skr = () => skrivare.find((x) => x.id === 'g1')?.mesh.getWorldPosition(v).setY(0.9) || null;
  const plats = (id) => { const p = startPlats(id); return new THREE.Vector3(p.x, 0.5, p.z); };
  switch (stegId()) {
    case 'lasta': return vagCykel.getWorldPosition(v).setY(1.3);
    case 'stall': return plats('L1-skrivare1');
    case 'bygg': return vagCykel.visible ? vagCykel.getWorldPosition(v).setY(1.3) : null;
    case 'trampa': return S.strom < 2 && !skrivare.some((x) => x.jobb) ? cykel.getWorldPosition(v).setY(1.0) : skr();
    case 'kvarn': return plats('L1-kvarn');
    case 'flaska': return hand.saker.length || S.kvarn.tratt ? trattTopp().clone() : (gripbart()?.getWorldPosition(v).setY(0.3) || null);
    case 'printGrip': case 'kruka': case 'printSang': case 'pall': return skr();
    case 'kopSack': return S.ritningar.includes('korg') ? skr() : new THREE.Vector3(ALI.x, 1.4, ALI.z - 1.2);
    case 'salj': case 'kop': case 'kopGrip': case 'kopMotor': case 'kopSang': return new THREE.Vector3(ALI.x, 1.4, ALI.z - 1.2);
    case 'sov1': return new THREE.Vector3(SANG_PLATS.x, 0.6, SANG_PLATS.z);
  }
  return null;
}
let senastTalSteg = -1, sagtBygg = false;
let malKoSteg = null, malVisasSteg = null, malBockText = '';   // punkt 15: vilket mål som visas i rutan just nu
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
const DU_BYGG = 'Okej. Först en skylt vid vägen, så att alla vet vem som bor här.';
function uppdateraMalPil() {
  const p = malPunkt();
  if (!p || !ui.igang) { malPil.visible = false; }
  else { const stor = !S.skyltUppe && S.steg <= 1; malPil.scale.setScalar(stor ? Math.max(1.3, Math.min(3, Math.hypot(p.x - spelare.pos.x, p.z - spelare.pos.z) / 9)) : Math.min(3, Math.max(1, Math.hypot(p.x - spelare.pos.x, p.z - spelare.pos.z) / 9))); malPil.visible = true; malPil.position.copy(p).add(new THREE.Vector3(stor ? 0.65 : 0, (stor ? 0.75 : 0.6) + Math.abs(Math.sin(performance.now() / 300)) * 0.35, 0)); malPil.rotation.y += 0.04; }
  // din egen röst när dagboken är läst: dags att spika skylten
  if (!S.skyltUppe && S.steg <= 1 && !sagtBygg && ui.igang && medEl2.hidden && !medKo.length && !dagbokLas) { sagtBygg = true; bud(() => { if (!S.skyltUppe) { if (!S.kap1Visad) { S.kap1Visad = true; visaKapitelKort(1, KAP1_NAMN, KAP1_MAL); sparaSnart(); } tittaMot(VAG_SKYLT.x, VAG_SKYLT.z, 1.8); setTimeout(() => prata('du', DU_BYGG, 'STORY'), 1000); } }); }
  // instruktionen läses först när dagboken är läst och (i ett nytt spel) skylten är uppe
  // punkt 15: ett nytt mål är en sak i kanalen. Målrutan visar det klara målet med ✓ tills det nya målets tur kommer –
  // då byts rutan och berättaren läser upp målet (finns ingen uppläsning byts rutan tyst).
  if (malKoSteg !== S.steg && (S.skyltUppe || S.steg > 1)) {
    const st = S.steg, id = stegId(); malKoSteg = st;
    const tal = id === 'salj' ? '' : id === 'kopSang' ? DU_SANG : (STEG_TAL[id] || '');
    kanalLagg({ vikt: 'MÅL', vem: id === 'kopSang' ? 'du' : 'berattare', text: tal, rost: !!tal, minMs: tal ? 1500 : 0, tidigast: performance.now() + 400,
      stryksOm: () => S.steg !== st, visa: () => { malVisasSteg = st; } });
  }
  if (malVisasSteg !== S.steg && malKoSteg == null) malVisasSteg = S.steg;
}
function uppdateraMalSkylt(dt) {
  malInfo.t -= dt; if (malInfo.t > 0) return; malInfo.t = 0.5;
  const pos = kvarnPunkt(0, 3.0, 0), avst = Math.hypot(spelare.pos.x - pos.x, spelare.pos.z - pos.z), nara = avst < 5 && avst > 2.2;   // AA: bara nära
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
  if (nu > forut) { rullKlarTid = performance.now() + 900; if (!spelaLjud('rulle-klar')) ljud.klar(); }
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
      ljud.stor(); ui.toast('🪟 ' + trivselToast(`Fönster ${fonsterLista().length}`, MASKINER.fonster.trivsel), 'guld'); uppdateraSkjul(); sparaSnart(); return;
    }
    if (id === 'tapeter' && !S.hem?.vaggar) { ljud.fel(); ui.toast('Täta väggarna först – tapeter fastnar inte på springor', 'fel'); return; }
    taBortVald();
    if (id === 'vaggar') {
      const n = Math.min(4, (S.hem?.vagg || 0) + 1);
      S.hem = { ...(S.hem || {}), vagg: n, ...(n >= 4 ? { vaggar: true } : {}) }; HEM_DELAR.vaggar.visible = true;
      ljud.stor(); ui.toast(n >= 4 ? '🧱 Fjärde väggen sitter – skjulet är tätt! Ingen kyla läcker in längre.' : `🧱 Vägg ${n} av 4 på plats (${['bakväggen', 'vänster vägg', 'höger vägg'][n - 1]}). ${4 - n} kvar.`, 'guld');
    } else {
      S.hem = { ...(S.hem || {}), [id]: true }; if (HEM_DELAR[id]) HEM_DELAR[id].visible = true;
      if (ROLF_HEM[id] && S.rolfNummer) setTimeout(() => sms('rolf', ROLF_HEM[id]), 30000);   // punkt BD: placerat:<del> + 30 s
      ljud.stor(); ui.toast(id === 'tapeter' ? 'Tapeterna sitter! Klassisk 70-talstapet … Ali säljer snyggare mönster.' : trivselToast(MASKINER[id].namn, MASKINER[id].trivsel), 'guld');
    }
    uppdateraSkjul(); sparaSnart();
  },
});
// tapetmönster (ritas en gång var på en canvas). 0 = fula 70-talstapeten man får först
const TAPETER = [
  { namn: '70-talstapeten', pris: 0, rita: (g) => { g.fillStyle = '#8a5a2b'; g.fillRect(0, 0, 128, 128); for (let y = 0; y < 128; y += 32) for (let x = 0; x < 128; x += 32) { g.fillStyle = '#e07b2a'; g.beginPath(); g.arc(x + 16, y + 16, 12, 0, 7); g.fill(); g.fillStyle = '#f2c14e'; g.beginPath(); g.arc(x + 16, y + 16, 6, 0, 7); g.fill(); } } },
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
const BOD = { x: S.bodPos?.x ?? SKJUL.x, z: S.bodPos?.z ?? SKJUL.z - 4.6, r: S.bodPos?.r ?? 0, b: 3.2, d: 2.8, h: 2.5, dorr: 1.0 };
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
const sangKvall = () => !S.sang && STEG[S.steg] && S.steg >= SI.kopSang && STEG[S.steg].del === STEG[0].del && (skrivare.some((x) => x.jobb?.typ === 'sang' || x.klar === 'sang') || antalInv('sang') > 0);
const MIN_VAKEN = 210;   // sekunder du måste ha varit vaken innan kvällen kommer (dag 2+)
const kvallKlar = () => (S.vakenTid || 0) >= MIN_VAKEN;
const sovDags = () => (!!STEG[S.steg]?.sov && kvallKlar()) || (!STEG[S.steg] && (S.dagTid || 0) >= DAG_LANGD);
interaktor.registrera(tältSäng, {
  text: () => sovDags() ? '🌙 Sov till nästa dag' : STEG[S.steg]?.sov ? `Din säng – du är inte trött än (kväll om ${Math.max(1, Math.ceil((MIN_VAKEN - (S.vakenTid || 0)) / 60))} min)` : 'Din säng – det är inte kväll än. Gör klart dagens jobb först',
  kanAktivera: () => !!S.sang,
  aktivera: () => { if (sovDags()) sov(); else ui.toast(STEG[S.steg]?.sov ? 'Inte trött än – printa och sälj lite till' : 'Det är inte kväll än – gör klart dagens jobb först'); },
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
  spelaLjud('sov');
  sover = true;
  spelare.aktiv = false;
  ui.slappMus();
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
    inkomstTick(); aliHamtarLadan(); inkomstTick();   // leveranslådan räknas till dagen den printades
    matDag(natt); kollaKyla(); S.dag = natt + 1; S.saltIdag = {}; aliVillVal(); S.dagTid = 0; S.vakenTid = 0; sparaSnart(); ruttnaOverNatten(); uppdateraArstid(); helenNatt();
    // morgonens meddelanden väntar tills du klickat "Börja dagen" – sen kommer de ett i taget
    // B16: max två saker på morgonen – Rolfs brev (i postlådan) och EN story-händelse. Resten kommer senare under dagen:
    // när dagens första mål är klart, eller efter 3 minuter, vad som än kommer först.
    const STORY_MORGON = [kollaPolett, kollaSamtal, helenMorgon, kollaResa, kollaMarkTips];
    const enStory = () => { for (const f of STORY_MORGON) if (f()) return true; return false; };
    morgonKo = () => { enStory(); senareIdag(() => { morgonRolf(); familjSms(); enStory(); }); };
    const morgonRolf = () => { if (S.dag >= 6 && S.kapitel >= 2 && !(S.filGava || []).includes(0) && !(S.filGava || []).includes(2)) { S.filGava = [...(S.filGava || []), 0]; S.post.tillMig = [...S.post.tillMig, 'sak:fynd2']; visaPostInne(); setTimeout(() => sms('rolf', 'La en röd back i lådan. Hitta den i en tunna. Riktigt bra plast – PETG. Släng den i den röda kvarnen. Sen blir det röd filament, bättre grejer. Mer sånt när folk börjar respektera dej. /R'), 1500); } };
    setTimeout(sparaDagBokmarke, 1500);
    skymning = 0; sover = false; sol.position.set(14, 24, 8); if (hemiLjus) hemiLjus.intensity = 1.4; if (skjulLampa) skjulLampa.intensity = skjulLampa.userData.bas || 4;
    satLjus(DAG); sl.innerHTML = `<div><svg viewBox="0 0 160 120" style="width:min(340px,70vw);display:block;margin:0 auto 10px">${kalenderSvg('DAG ' + S.dag, 40, 14, 'DAG ' + natt)}</svg>☀️ ${['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'][(S.dag - 1) % 7]}</div>`; ljud.plock(); setTimeout(() => ljud.stor(), 900);
  }, 2600);
  setTimeout(() => { sl.style.opacity = '0'; if (forsta) visaLapp('sang'); }, 5000);
  setTimeout(() => {
    sl.remove();
    rolfMorgonTack();
    while (S.steg < STEG.length && STEG[S.steg].klar()) S.steg++;
    const nasta = STEG[S.steg];
    if (nasta?.startPost && !S.lappar.includes(nasta.startPost) && !S.post.lapp) { S.post.lapp = nasta.startPost; visaPostInne(); }
    const del = nasta?.del || (S.julFirad ? 'Efterspelet' : 'Fritt bygge');
    const ig = S.igar, rapport = ig ? `<span class="br-rapport">Igår: ${ig.printat} printat · ${ig.salt} sålt${ig.flask ? `<br>Flaskhals: ${ig.flask}${ig.fix ? ` → ${ig.fix}` : ''}` : ''}</span>` : '';
    const hoger = `${aliVillHtml()}${rapport}${[2, 4].includes(S.dag) && !(S.betygDag || []).includes(natt) ? snabbBetygHtml(natt) : ''}`;
    ui.visaStart(`☀️ Dag ${S.dag}`, `<div class="br-morgon${hoger ? '' : ' en'}"><div class="br-morgon-v"><b>${del.replace(/^Dag \d+ – /, '')}</b>${nasta ? dagensMalHtml(nasta.del) : S.julFirad ? efterspelHtml() : ''}</div>${hoger ? `<div class="br-morgon-h">${hoger}</div>` : ''}</div>`, 'Börja dagen');
    kopplaSnabbBetyg(natt);
    const vanta = setInterval(() => { if (!ui.igang) return; clearInterval(vanta); handelse('morgonkortStangt', { dag: S.dag }); const f = morgonKo; morgonKo = null; if (f) setTimeout(f, 2500); }, 300);
  }, 5500);
}
let morgonKo = null;
function senareIdag(fn) {
  const dag = S.dag; let gjord = false;
  const kor = () => { if (gjord || S.dag !== dag) return; gjord = true; fn(); };
  paHandelse('malKlart', kor); setTimeout(kor, 180000);
}
// ---------- Telefonsamtal: telefonen ringer, du svarar och hör rösten – replik för replik ----------
const SAMTAL = {
  pappa4: { vem: 'pappa', dag: 4, handelse: 'placerat:sol', rader: [   // punkt BD: pappa ringer när solpanelen står
    ['pappa', 'Hej. Det är pappa.'],
    ['du', 'Hej pappa.'],
    ['pappa', 'Mamma står bredvid. Hon säger att jag ska fråga om du äter.'],
    ['du', 'Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare.'],
    ['pappa', 'Jaha. En kvarn. Vad lugnt då.'],
    ['pappa', 'Jag kanske kommer förbi nån dag. Om det passar.'],
    ['du', 'Det passar.'],
    ['pappa', 'Bra. Hej då då.'],
  ] },
};
paHandelse('placerat', ({ sak }) => {
  if (sak !== 'sol' || S.dag < 4 || (S.samtal || []).includes('pappa4')) return;
  S.samtal = [...(S.samtal || []), 'pappa4']; sparaSnart();
  setTimeout(() => { textLogg('händelse', 'pappa', 'Pappa ringer'); medKo.push({ typ: 'samtal', ...SAMTAL.pappa4 }); }, 10000);
});
function kollaSamtal() {
  for (const [id, sm] of Object.entries(SAMTAL)) {
    if ((S.samtal || []).includes(id) || S.dag < sm.dag || sm.handelse) continue;
    S.samtal = [...(S.samtal || []), id]; sparaSnart();
    setTimeout(() => medKo.push({ typ: 'samtal', ...sm }), 6000); return true;
  }
  return false;
}
function visaSamtal(m) {
  pausad = true; ui.igang = false; spelare.aktiv = false; anvandNere = false;
  ui.slappMus();
  const namn = AVSANDARE[m.vem]?.namn || m.vem;
  medEl2.innerHTML = `<div class="ph-samtal"><div class="ph-samtal-kort"><div class="ph-samtal-bild">${portratt(m.vem, 120)}</div><b>${rens(namn)}</b><span class="ph-samtal-status">ringer…</span><div class="ph-samtal-rad" hidden><em></em><p></p></div>
    <div class="ph-samtal-knappar"><button class="fp-knapp ph-svara" data-svara>${ik('telefon')} Svara <kbd>E</kbd></button></div></div></div>`;
  medEl2.hidden = false;
  const el = medEl2, status = el.querySelector('.ph-samtal-status'), radEl = el.querySelector('.ph-samtal-rad'), knappar = el.querySelector('.ph-samtal-knappar');
  let ring = setInterval(() => triTon(), 1400); triTon();
  let i = -1, vantar = 0;
  const avsluta = () => { handelse('samtalSlut', { id: Object.keys(SAMTAL).find((k) => SAMTAL[k].rader === m.rader) || '' }); clearInterval(ring); clearTimeout(vantar); tystna(); medEl2._lyssna = medEl2._spara = null; medEl2.hidden = true; medEl2.innerHTML = ''; pausad = false; ui.igang = true; spelare.aktiv = true; spelare.lasMus(); };
  const nasta = () => {
    clearTimeout(vantar); i++;
    if (i >= m.rader.length) { status.textContent = 'samtalet är slut'; knappar.innerHTML = `<button class="fp-knapp" data-lagg>Lägg på <kbd>E</kbd></button>`; knappar.querySelector('[data-lagg]').onclick = avsluta; medEl2._lyssna = avsluta; return; }
    const [v, t] = m.rader[i];
    radEl.hidden = false; radEl.querySelector('em').textContent = v === 'du' ? 'Du' : namn; radEl.querySelector('p').textContent = rens(t);
    radEl.classList.toggle('du', v === 'du');
    el.querySelector('.ph-samtal-bild').classList.toggle('pratar', v !== 'du');
    prata(v, t, 'STORY');
    const vanta = () => { if (performance.now() < pratarTill) { vantar = setTimeout(vanta, 200); return; } vantar = setTimeout(nasta, DIALOG_PAUS); };
    vantar = setTimeout(vanta, 400);
  };
  const svara = () => {
    clearInterval(ring); status.textContent = 'i samtal';
    knappar.innerHTML = `<button class="fp-knapp" data-hoppa>Nästa <kbd>E</kbd></button>`;
    knappar.querySelector('[data-hoppa]').onclick = () => { tystna(); pratarTill = 0; nasta(); };
    medEl2._lyssna = () => { tystna(); pratarTill = 0; nasta(); };
    nasta();
  };
  el.querySelector('[data-svara]').onclick = svara; medEl2._lyssna = svara; medEl2._spara = avsluta;
}
// morgonkortet: dagens mål som ikoner – Rolfs önskan blir en rad i stället för fem
function dagensMalHtml(del) {
  if (!del) return '';
  const rader = []; let rolf = false;
  for (const st of STEG) {
    if (st.del !== del || st.sov) continue;
    const t = typeof st.text === 'function' ? (() => { try { return st.text(); } catch { return ''; } })() : st.text;
    if (st.startPost || /Rolf|postlåda|sopbil|Sopbil/i.test(t)) { if (!rolf) { rolf = true; rader.push(['brev', 'Hjälp Rolf – läs brevet i postlådan']); } continue; }
    rader.push([malIkon(t), t.replace(/ · .*$/, ''), /^Köp /.test(t) ? slagForTyp(st.bild) : null]);
  }
  rader.push(['klocka', 'Sov när allt är klart']);
  return `<ul class="br-dagmal">${rader.slice(0, 6).map(([i, t, sl]) => `<li>${ik(i)}<span>${rens(t)}</span>${slagChip(sl, true)}</li>`).join('')}</ul>`;   // Ali vill ha idag står i högerkolumnen (AA)
}

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
// R vrider: stor tangent ovanför verktygsraden när du håller något att ställa ut – tills du vridit några gånger
const VRID_LARA = 3;
const vridTips = document.createElement('button'); vridTips.className = 'ph-vrid'; vridTips.hidden = true;
vridTips.innerHTML = '<kbd>R</kbd><span>vrid</span>';
vridTips.onclick = (e) => { e.stopPropagation(); spoke.rot = (spoke.rot + (bodSpoke.visible ? 2 : 1)) % 8; S.vridit = (S.vridit || 0) + 1; };
document.body.appendChild(vridTips);
function ritaVridTips() {
  const placerar = !!(spoke.grupp?.visible || bodSpoke.visible);
  const visa = placerar && (S.vridit || 0) < VRID_LARA;
  if (vridTips.hidden === !visa) return;
  vridTips.hidden = !visa;
  if (visa && !(S.forsta || []).includes('vrid')) { S.forsta = [...(S.forsta || []), 'vrid']; sparaSnart(); bud(() => prata('du', VARN.vrid)); }
}
function uppdateraSpoke() {
  const t = tomhant ? null : valdTyp();
  const hovYta = interaktor.hovrad && placerade.some((q) => q.mesh === interaktor.hovrad && YTOR[q.typ] !== undefined);
  const typ = (!interaktor.hovrad || (hovYta && paBord(t))) && arPlacerbar(t) ? placeringsTyp(t) : null;
  if (typ !== spoke.typ) byggSpoke(typ);
  ruta.visible = false; spoke.planFel = null;
  planLys(typ ? nastaPlats(typ) : startHall());   // punkt AS: skrivaren och kvarnen lyser på sin ruta
  if (!!startHall() !== startYta.visible) ritaStart();
  if (!typ) return;
  markRay.setFromCamera(new THREE.Vector2(0, 0), kamera);
  const g = spoke.grupp;
  // punkt AM: fabriksmaskiner snäpper fast på sin ruta – ingen fri placering i fabriken
  if (fabrikSak(typ)) {
    const pl = nastaPlats(typ), hm0 = markRay.intersectObject(mark)[0];
    g.rotation.y = 0; spoke.rot = 0; spoke.bord = null;
    if (pl && hm0 && hm0.distance <= RACKVIDD_BYGG + 4 && Math.hypot(hm0.point.x - pl.x, hm0.point.z - pl.z) < Math.max(2.2, Math.max(pl.b, pl.d) / 2 + 1)) {
      g.visible = true; g.position.set(pl.x, 0, pl.z); spoke.x = pl.x; spoke.z = pl.z;
      spoke.ok = Math.abs(spelare.pos.x - pl.x) > pl.b / 2 + 0.3 || Math.abs(spelare.pos.z - pl.z) > pl.d / 2 + 0.3;
    } else { g.visible = !!hm0; if (hm0) g.position.set(hm0.point.x, 0, hm0.point.z); spoke.ok = false; spoke.planFel = pl || 'full'; }
    g.traverse((o) => { if (o.isMesh) o.material = spoke.ok ? spokMatOk : spokMatFel; });
    return;
  }
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
    if (spoke.planFel) { ui.toast(spoke.planFel === 'full' ? 'Fabriken har ingen ledig plats för den – den får vänta i kistan' : `Ställ den på den lysande rutan: ${spoke.planFel.text.replace(/^Här ska /, '').replace(/ stå$/, '')}`, 'fel'); return true; }
    ui.toast(MASKINER[typ]?.kraverBord ? 'Skrivaren måste stå på ett ledigt arbetsbord' : 'Det får inte plats där', 'fel');
    return true;
  }
  if (spoke.kompost) { taBortVald(); kompostera(typ, spoke.x, spoke.z); return true; }
  taBortVald();
  const p = { id: 'p' + (S.nastaId++), typ, x: spoke.x, z: spoke.z, r: Math.round(spoke.rot / 2) % 4, r8: spoke.rot, ...(VAGGSAK.has(typ) && spoke.hy ? { hy: spoke.hy } : {}) };
  if (spoke.bord) { p.pa = spoke.bord.id; p.x = spoke.bord.x; p.z = spoke.bord.z; }
  placera(p);
  ljud.placera(); setTimeout(() => ui.toast(info(typ).trivsel ? `${info(typ).ikon} ${trivselToast(info(typ).namn, info(typ).trivsel)}` : `${info(typ).ikon} ${info(typ).namn} på plats!`, 'bra'), 0);
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
    if (ui.butiksOverlay.hidden) oppnaInv(); else ui.stangButik();
    return;
  }
  if (!ui.igang || !ui.butiksOverlay.hidden || pausad) return;
  if (/^Digit[1-9]$/.test(e.code)) { byt(Number(e.code.slice(5)) - 1); return; }
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
  { vara: 'olhallare', forskott: ['nyckel'],
    brev: 'ÖJ! Ja såg att du börja städa gården. Respekt. Ingen städar här. Är de du som printar grejer oxå?? Ja önskar mig en ölhållare me kylklamp. Ritningen ligger i lådan. Nyckeln till tippen oxå – ta så mycket plast du vill. Lägg hållarn i lådan när den e klar. Kall öl e viktigt. /Rolf (sopbilen)',
    tack: 'TACK för hållarn!! Ölen e iskall. La me en gammal lur i lådan, så ja kan sms:a dig. /Rolf' },   // punkt BD/BE: T0731 – nyckeln kom med brev 1, tacket ger luren
  { vara: 'flaskoppnare', forskott: ['karra'],
    brev: 'Gomorron! Rolf här. Kajsa (katten) knuffa ner min flasköppnare i tippen 😩 Printar du en ny? Me magnet så den sitter på flaket. Ritningen ligger i lådan. Ja ställde min gamla skottkärra bredvid – den e din redan nu. Me kärran bär du åtta gånger mer skräp per vända. Tunnorna o kajakerna e för tunga för din kvarn. Än. /Rolf',
    tack: 'PERFEKT öppnare!!! Lite pengar i lådan. Hoppas kärran gör nytta. /Rolf' },
  { vara: 'grillspade',
    brev: 'Ska grilla på lördag. Ensam som vanligt, Kajsa äter inte korv. Ingen grillspade. Min gamla smälte. Lång historia. Ritningen ligger i lådan. Fixar du? 250 spänn o ja tippar dubbelt nästa gång. /Rolf 🍖',
    tack: 'Grillspaden e ju KONST. Pengar i lådan. Ses på lördag. Eller inte. Vi får se. /Rolf' },
  { vara: 'tomte',
    brev: 'Flaket e så trist. Folk vinkar aldrig åt sopbilen. Med en tomte på flaket kanske dom gör det. En sån me luva o skägg. Ritningen ligger i lådan. 400 spänn + dubbel last! /Rolf 🎅',
    tack: 'Tomten sitter på flaket nu. Vi vinkar åt alla. ALLA. Pengar + dubbel last. /Rolf' },
];ROLF.forEach((o, i) => { o.belo = [...B.ROLF_BELONING[i]]; });

// Rolf lämnar något i lådan och sms:ar om det (när han har ditt nummer)
const LADAN_SMS = ['Ja la nåt i lådan. /R', 'Kolla lådan. /R', 'Lådan. Nu. Innan Kajsa hittar de. /R', 'De ligger nåt i postlådan. Ja säger inte vad. Jo. Pengar. /R', 'Lådan! Ja va där me bilen nyss. /R'];
function rolfLadeILadan() { if (S.rolfNummer) setTimeout(() => sms('rolf', LADAN_SMS[Math.floor(Math.random() * LADAN_SMS.length)]), 4000); }
// ---------- Rolfs skumma jobb: när hans önskningar är klara ber han om saker som är lite olagliga ----------
// Säger man ja får man mycket pengar (men chefen märker ibland). Säger man nej får man lite – och heder.
const ROLF_JOBB = [
  { vara: 'nyckelkopia',
    brev: 'Chefen (också Rolf) har en espressomaskin på kontoret. Vi andra får automatkaffe som smakar däck. Ja har ett avtryck av hans nyckel i en tvål. Printar du en kopia? Ingen behöver veta. 1 200 spänn. /R',
    tackJa: 'ESPRESSO. Ja grät lite. Pengarna ligger i lådan. Du har aldrig sett mig. /R',
    tackNej: 'Nej?? …Okej. Du har rätt. Däckkaffe en dag till. Här e en slant för ärligheten. /R' },
  { vara: 'stangdskylt',
    brev: 'Gäddorna nappar i morgon. Om de sitter en skylt på grinden – TIPPEN STÄNGD PGA RÅTTOR – så kan ja fiska hela dan. Ingen dör av en stängd tipp. Nästan ingen. 1 800. /R',
    tackJa: 'Fyra gäddor! Kajsa åt en hel. Skylten sitter. Pengarna ligger i lådan. /R',
    tackNej: 'Ja jobbar då. Gäddorna får vänta. Du e för snäll för den här världen. Ta en slant. /R' },
  { vara: 'termoslock',
    brev: 'Chefen har en burk med finkakor. Han RÄKNAR dom. Ja behöver ett termoslock med lönnfack så ja kan smuggla ut två om dan. Två! Han märker inget. 2 500. /R',
    tackJa: 'Lönnfacket funkar. Kakorna har mandel. Livet e gott. Pengar i lådan. /R',
    tackNej: 'Okej, okej. Ja köper egna kakor. Dom e sämre. Du e en bra människa. Här. /R' },
  { vara: 'stampel',
    brev: 'Chefens stämpel: GODKÄNT. Me en kopia kan ja godkänna min egen övertid. 31 år utan övertidsersättning – de e inte stöld, de e rättvisa. Nästan. 3 500. /R',
    tackJa: 'GODKÄNT. GODKÄNT. GODKÄNT. Ja stämplade en servett också. Pengar i lådan. /R',
    tackNej: 'Du har rätt. Ja ska prata me facket istället. Har vi ett fack? Ja kollar. Här, ta lite. /R' },
  { vara: 'tillstand',
    brev: 'Husvagnen står på tippens mark. Utan tillstånd. Sen 2009. Kommunen har börjat fråga. Printa ett tillstånd. Ett som ser OFFICIELLT ut. Me stjärnor. 5 000. /R',
    tackJa: 'Tillståndet sitter i rutan. Kommunen gick därifrån. Kajsa o ja bor kvar. Tack. /R',
    tackNej: 'Ja ringde kommunen själv. Dom va snälla. Ja får söka på riktigt. Ingen hade frågat förut. Tack. /R' },
];ROLF_JOBB.forEach((o, i) => { [o.ja, o.nej] = B.SKUMMA_JOBB[i]; });

const jobbNu = () => { const n = S.rolf.jobbNr || 0, j = ROLF_JOBB[n % ROLF_JOBB.length], f = 1 + Math.floor(n / ROLF_JOBB.length) * JOBB_VARV; const bas = Math.round(j.ja * f / 50) * 50, snitt = Math.round((S.inkomstSnitt || 0) * JOBB_ANDEL / 50) * 50; return { ...j, n, bas, ja: Math.max(bas, snitt), nej: Math.round(j.nej * f / 10) * 10 }; };
// Rolfs fynd från kapitel 2: kontanterna är gulliga, men det han hittat följer med spelarens ekonomi
function rolfFyndPaket() {
  if ((S.kapitel || 1) < 2) return [];
  const snitt = Math.max(1000, S.inkomstSnitt || 0), mal = snitt * FYND_ANDEL;
  const n = (perRulle) => Math.max(1, Math.min(3, Math.round(mal / perRulle)));
  if (S.kapitel === 2) return Array(n(1150)).fill('sak:fynd2');   // en röd back ≈ en rulle PETG ≈ en kajakpaddel per rulle
  if (S.kapitel === 3) {
    const unika = Object.values(ROLF_TACK).map((x) => x.ger).filter((id) => VAROR[id] && !antalInv(id) && !harPlacerat(id));
    if (unika.length && Math.random() < 0.5) return ['sak:' + unika[Math.floor(Math.random() * unika.length)]];
    return Array(n(2600)).fill('sak:fynd3');
  }
  return Array(n(4000)).fill(Math.random() < 0.6 ? 'sak:fynd4' : 'sak:fynd5');
}
const ROLF_RIK = 'Ja vet att du ä rik nu. Hä ä lite spänn. Å nåt ja hitta på tippen. Dä ä nog värt mer än pengarna. MVH ROLF';
// present → vad Rolf ger tillbaka, och vad han skriver
const ROLF_TACK = {
  p_sexpack: { ger: 'r_tv', text: 'Ett sexpack. Till MIG. Ingen har gett mig nåt sen 2009. Ja la en TV i lådan. Från ett dödsbo ja rensade. Den funkar om man slår på den. Hårt. /R' },
  p_korv: { ger: 'r_affisch', text: 'Korv! Ja grillade, Kajsa åt tre. Här – min gamla affisch från Rolfs Rockers 1987. Ja hade hår då. Ta den. Ja kan inte titta på den. /R' },
  p_kajsa: { ger: 'r_gardin', text: 'Kajsa spinner som en motor. Ja la Birgittas gardiner i lådan. Hon stickade dom i husvagnen. Ja har inte kunnat titta på dom sen hon dog. Du får dom. Dom e fina. Jaja. /R' },
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
    + rad({ bild: tumme(j.vara), titel: `Gör det – printa ${VAROR[j.vara].namn.toLowerCase()}`, text: `Lägg den i postlådan. Rolf betalar ${j.ja.toLocaleString('sv-SE')} kr.${j.ja > j.bas ? ' Lasse betalar. Fråga inte.' : ''} Chefen kan märka det.`, hoger: knapp({ text: `+${j.ja.toLocaleString('sv-SE')} kr`, typ: 'plus', attr: 'data-ja', ikon: 'mynt' }) })
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
      { const fynd = rolfFyndPaket(); if (fynd.length) { S.post.tillMig = [...S.post.tillMig, ...fynd]; visaPostInne(); setTimeout(() => sms('rolf', ROLF_RIK), 5000); } }
      if (S.rolf.heder === 3) { S.post.tillMig = [...S.post.tillMig, 'mynt:2500', 'heder']; visaPostInne(); setTimeout(() => sms('rolf', 'Tre gånger har du sagt nej. Ingen har sagt nej till mig sen Birgitta. Ja la nåt i lådan. Behåll det. /R'), 4000); }
      sparaSnart();
    };
  });
}
const harGava = (id) => S.post.tillRolf === id || antalInv(id) > 0 || skrivare.some((x) => x.klar === id || x.jobb?.typ === id);
const harOl = () => S.rolf.i > 0 || harGava('olhallare');
const beloTextExtra = (b) => (b.startsWith('nmynt:') ? `${b.split(':')[1]} kr i ett kuvert från N.` : b.startsWith('ritning:') ? '3D-modell: ' + VAROR[b.slice(8)].namn : b.startsWith('sak:') ? VAROR[b.slice(4)].namn : b.startsWith('tack:') ? '' : null);
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
    if (S.post.tillRolf) return ROLF[S.rolf.i]?.vara === S.post.tillRolf ? 'Gåvan ligger i lådan – Rolfs tack ligger här i morgon bitti' : 'Presenten ligger i lådan – Rolf hämtar den när sopbilen kommer';
    if (S.rolf.hamtad === S.rolf.i && ROLF[S.rolf.i]) return 'Rolf har hämtat gåvan – hans tack ligger här i morgon bitti';
    if (valdTyp() && ROLF_TACK[valdTyp()]) return `Lägg ${VAROR[valdTyp()].namn.toLowerCase()} i Rolfs postlåda`;
    if (v && antalInv(v)) return valdTyp() === v ? `🎁 Lägg ${VAROR[v].namn.toLowerCase()} i Rolfs postlåda` : (S.hotbar.some((x) => x?.typ === v) ? `Ta fram ${VAROR[v].namn.toLowerCase()} och lägg den i postlådan` : `${VAROR[v].namn} ligger i kistan i skjulet – hämta den`);
    if (v) return `Rolfs postlåda – ${S.rolf.jobb != null ? 'jobbet' : 'han önskar sig'}: ${VAROR[v].namn.toLowerCase()}`;
    return 'Rolfs postlåda (tom)';
  },
  aktivera: () => {
    spelaLjud('postlada');
    postLuckaMal = 1; luckaStangTid = performance.now() + 1500;
    if (S.post.lapp === 'jobb') { S.post.lapp = null; visaPostInne(); ljud.plock(); oppnaJobbVal(); return; }
    if (S.post.lapp && /^rolf:\d+$/.test(S.post.lapp) && +S.post.lapp.slice(5) > 0 && S.post.tillMig.length && !S.post.tillMig.some((b) => b === 'jobb')) {
      // B2: ett brev per morgon – Rolfs tack + pengarna + nästa önskan + det han ger, i samma brev och samma klick
      const l = S.post.lapp, n = +l.slice(5); S.post.lapp = null;
      for (const id of ['rolftack:' + (n - 1), l]) if (!S.lappar.includes(id)) S.lappar.push(id);
      S.rolfTackIBrev = n - 1;
      textLogg('lapp', '✉️ Brev från Rolf', rolfMorgonRa(n));
      medKo.push({ typ: 'lapp', titel: '✉️ Brev från Rolf', text: rolfDialekt(rolfMorgonRa(n), false), id: l });
      rolfBrevLast(n); efterBrev(l, () => { if (S.post.tillMig.length) hamtaBeloning(); }, 400);
      visaPostInne(); ljud.plock(); sparaSnart(); return;
    }
    if (S.post.lapp) {
      const l = S.post.lapp; S.post.lapp = null; visaLapp(l);
      if (l === 'mammajul') julEfterBrev();
      else if (/^n\d$/.test(l)) nLappLast(+l.slice(1));
      else if (/^rolf:\d+$/.test(l)) rolfBrevLast(+l.split(':')[1]);
      else if (l.startsWith('rolf')) S.rolf.aktiv = true;
      visaPostInne(); ljud.plock(); sparaSnart(); return;
    }
    if (valdTyp() === 'h_stickning') { taBortVald(); flygIn('h_stickning'); S.h78stickning = true; sparaSnart(); setTimeout(() => sms(...LAGER_REPLIK.stickning), 8000); ui.toast('Stickningen ligger i Rolfs postlåda.', 'guld'); return; }
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
    S.post.tillRolf = v; if (S.rolf.jobb == null) S.rolf.aktiv = false; handelse('lagtIPostlada', { sak: v, rolf: S.rolf.i, jobb: S.rolf.jobb != null });
    setTimeout(() => { visaPostInne(); ljud.placera(); }, 650);
    ui.toast(S.rolf.jobb != null ? '🎁 Det ligger i lådan. Rolf kommer snart med sopbilen.' : '🎁 Gåvan ligger i lådan. Rolfs tack ligger här i morgon bitti.', 'guld');
    if (S.rolf.jobb != null && bil.fas === 'borta') if (bil.t < -12) bil.t = -12;
    sparaSnart();
  },
});
let luckaStangTid = 0;
// Rolfs brev: 3D-modellen ligger med, och ibland något han ger direkt (nyckeln, kärran)
function rolfBrevLast(i) {
  S.rolf.aktiv = true;
  const o = ROLF[i]; if (!o) return;
  if (!S.ritningar.includes('gava:' + o.vara)) S.ritningar.push('gava:' + o.vara);
  efterBrev('rolf:' + i, () => ui.toast(`📐 3D-modellen till ${VAROR[o.vara].namn} låg med i brevet – printa den på skrivaren`, 'guld'));   // U003
  const fs = (o.forskott || []).filter((b) => !(b === 'nyckel' && S.tippNyckel) && !(b === 'karra' && S.karra));
  if (fs.length) {
    for (const b of fs) { if (b === 'nyckel') { S.tippNyckel = true; oppnaGrind(); } else if (b === 'karra') { S.karra = true; const k = laggTill('karra'); if (typeof k === 'number') byt(k); } }
    setTimeout(() => ui.toast(fs.includes('nyckel') ? '🔑 Nyckeln till tippen låg i lådan – grinden är öppen!' : '🛒 Rolfs skottkärra står vid lådan – den ligger nu i din verktygsrad', 'guld'), 2600);
    ljud.stor();
  }
}
// Rolfs tack kommer på morgonen: gåvan han fått (i lådan eller hämtad med sopbilen) blir belöning i lådan
function rolfMorgonTack() {
  const o = ROLF[S.rolf.i]; if (!o) return false;
  if (S.post.tillRolf !== o.vara && S.rolf.hamtad !== S.rolf.i) return false;
  if (S.post.tillRolf === o.vara) S.post.tillRolf = null;
  S.rolf.hamtad = null;
  S.post.tillMig = [...S.post.tillMig, ...o.belo];
  S.rolf.i++; S.rolf.aktiv = false; rolfLadeILadan(); visaPostInne(); sparaSnart();
  return true;
}
function hamtaBeloning() {
  let lista = S.post.tillMig; S.post.tillMig = [];
  const saker = lista.filter((b) => b.startsWith('sak:') || b === 'heder').map((b) => [b === 'heder' ? 'trumstockar' : b.slice(4), 1]);
  if (saker.length && !rymsAlla(saker)) { S.post.tillMig = lista.filter((b) => b.startsWith('sak:') || b === 'heder'); lista = lista.filter((b) => !S.post.tillMig.includes(b)); ui.toast('🎒 Ryggsäcken är full – sakerna ligger kvar i postlådan tills du gjort plats', 'fel'); invIntro('full'); if (!lista.length) { visaPostInne(); return; } }
  for (const b of lista) {
    if (b === 'nyckel') { S.tippNyckel = true; oppnaGrind(); }
    else if (b === 'karra') { S.karra = true; const i = laggTill('karra'); if (typeof i === 'number') byt(i); }
    else if (b === 'extra') S.rolf.extra++;
    else if (b.startsWith('mynt:')) S.mynt += Number(b.split(':')[1]);
    else if (b === 'heder') { const i = laggTill('trumstockar'); }
    else if (b.startsWith('sak:')) laggTill(b.slice(4));
    else if (b.startsWith('nmynt:')) S.mynt += Number(b.split(':')[1]);
    else if (b.startsWith('ritning:')) { const id = 'recept:' + b.slice(8); if (!S.ritningar.includes(id)) S.ritningar.push(id); }
  }
  ljud.stor(); sparaSnart();
  // visa vad som låg i lådan – resten (sms, respekt) kommer när du klickat OK
  visaFynd(lista, () => efterBeloning(lista));
}
// fyndrutan: varje sak poppar fram en i taget, OK för att gå vidare
function visaFynd(lista, efter) {
  const kort = lista.filter((b) => b !== 'jobb' && !b.startsWith('tack:')).map((b) => {
    const typ = b.startsWith('ritning:') ? b.slice(8) : b.startsWith('sak:') ? b.slice(4) : b === 'karra' ? 'karra' : b === 'heder' ? 'trumstockar' : null;
    const bild = b.startsWith('mynt:') || b.startsWith('nmynt:') ? `<span class="ph-fynd-mynt">${IKON.mynt}</span>` : typ ? ikonHtml(typ, 96) : `<span class="ph-fynd-mynt">${IKON.lada}</span>`;
    const besk = typ ? (info(typ)?.beskr || '') : b.startsWith('nmynt:') ? 'Prydligt vikta sedlar. Kuvertet luktar kaffe. /N.' : b.startsWith('mynt:') ? 'Kontanter. Rolf litar inte på banker.' : '';
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
  for (const b of lista) if (b.startsWith('tack:')) { if (!S.rolfNummer) setTimeout(() => sms('rolf', ROLF_TACK[b.slice(5)].text), 1200); S.rolf.presenter = (S.rolf.presenter || 0) + 1; andraRespekt(Math.round(6 + VAROR[b.slice(5)].present / 400), 'Gav Rolf en present'); setTimeout(() => ui.toast(`Rolf kommer nu oftare med lass – var ${Math.round(sopbilVar())} s och ${SOPBIL_LAST + sopbilExtra()} skräp per lass`, 'guld'), 1000); }   // U004: efter att Rolfs tack lästs (efterBeloning körs när rutan stängs)
  if (lista.includes('jobb')) andraRespekt(-3, 'Gjorde ett skumt jobb åt Rolf');
  const ovrigt = lista.includes('jobb') || lista.includes('heder') || lista.some((b) => b.startsWith('tack:') || b.startsWith('ritning:') || b.startsWith('nmynt:'));
  if (lista.includes('jobb')) sms('rolf', ROLF_JOBB[S.rolf.jobbTack % ROLF_JOBB.length].tackJa);
  if (lista.includes('heder')) setTimeout(() => sms('mamma', 'Det ringde en Rolf. Han sa att du är den ärligaste människan han känner. VEM ÄR ROLF?? Men… bra. Jag är stolt. Säg inte att jag sa det.'), 6000);
  if (ovrigt) { visaPostInne(); sparaSnart(); return; }
  andraRespekt(4, 'Fixade det Rolf bad om');
  if (S.rolfTackIBrev === nr) { /* B2: tacket stod redan i morgonens brev */ }
  else if (nr === 0) visaLapp('rolftack:0');          // första gången: ett brev (med hans nummer)
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
// sms-takt: högst ett ungefär var tredje minut, och inga under dag 1:s första åtta steg – resten väntar i kö
const smsSparr = () => (S.dag <= 1 && S.steg < SI.kop) || ((S.speltid || 0) - (S.senSmsTid ?? -1e9) < SMS_MELLAN);
function sms(fran, text, id, direkt = false, o = {}) {
  // Rolf skriver brev tills du lagt ditt nummer i hans postlåda – sms:en väntar så länge
  if ((fran === 'rolf') && !S.rolfNummer) { S.rolfVantar = [...(S.rolfVantar || []), [text, id]].slice(-3); textLogg('väntar', fran, text, 'Rolf har inte ditt nummer än'); return; }
  if (!direkt && S.mobil && smsSparr()) {
    S.smsTakt = [...(S.smsTakt || []), [fran, text, id]]; textLogg('väntar', fran, text, smsSparr() && S.dag <= 1 && S.steg < SI.kop ? 'dag 1 före första köpet' : 'max ett sms per ' + SMS_MELLAN + ' s');
    while (S.smsTakt.length > 8) { const j = S.smsTakt.findIndex((x) => x[2] && SMS_POOL.some((m) => m.id === x[2])); S.smsTakt.splice(j >= 0 ? j : 0, 1); }   // långa köer: småpratet stryks först
    sparaSnart(); return;
  }
  S.senSmsTid = S.speltid || 0;
  if (fran === 'rolf') text = rolfDialekt(text, true);
  senasteSms = performance.now();
  if (!S.mobil) return;
  // sms med svarsalternativ måste besvaras – de öppnas direkt. Övriga kommer som en notis du klickar på för att läsa och höra.
  const maSvara = SMS_POOL.find((x) => x.id === id)?.svar && S.smsSvar?.[id] == null;
  if (maSvara) { S.sms.push({ fran, text }); S.sms = S.sms.slice(-40); sparaSnart(); bud(() => medKo.push({ typ: 'sms', fran, text, id })); return; }
  // storyn i ordning: har du ett oläst sms från samma person väntar nästa tills du läst det
  if (S.sms.some((m) => m.ny && m.fran === fran)) { S.smsVantar = [...(S.smsVantar || []), [fran, text, id]]; textLogg('väntar', fran, text, 'ett oläst sms från samma person'); sparaSnart(); return; }
  smsFram(fran, text, id, o);
}
// punkt BD: vilken vikt har ett sms? Småprat ur poolen och Alis sms = SMÅPRAT, resten = STORY
const smsVikt = (fran, id) => (id && SMS_POOL.some((m) => m.id === id) && !SMS_POOL.find((m) => m.id === id)?.svar) || (fran === 'ali' && !id) ? 'SMÅPRAT' : 'STORY';
function smsFram(fran, text, id, o = {}) {
  // punkt 15: sms:et är en sak i kanalen – bubblan och rösten kommer tillsammans när det är dess tur
  const m = { fran, text, ny: true };
  kanalLagg({ vikt: o.vikt || smsVikt(fran, id), vem: fran, text, stryksOm: o.stryksOm, visa: () => {
    textLogg('sms', fran, text);
    S.sms.push(m); S.sms = S.sms.slice(-40); S.olasta = S.sms.filter((x) => x.ny).length; sparaSnart();
    smsBubbla(fran, AVSANDARE[fran]?.namn || fran, text);
  }, efter: () => { m.ny = false; smsLast(fran); } });
}
// punkt 10: varje sms syns som en bubbla uppe till höger i samma ögonblick som rösten börjar – även när en meny är öppen.
// Texten ligger kvar i Dagbok → Meddelanden (S.sms).
const smsFack = document.createElement('div'); smsFack.className = 'hud-smsfack'; document.body.appendChild(smsFack);
{ const st = document.createElement('style'); st.textContent = `.hud-smsfack{position:fixed;right:max(12px,env(safe-area-inset-right));top:calc(var(--bar-h,64px) + 10px);z-index:40;width:min(380px,92vw);display:flex;flex-direction:column;gap:8px;pointer-events:none}
.hud-smsfack .hud-ios{position:relative;right:auto;top:auto;width:auto}`; document.head.appendChild(st); }
function smsBubbla(vem, titel, text) {
  const el = document.createElement('div'); el.className = 'hud-ios';
  el.innerHTML = `<div class="app app-portratt">${humorPortratt(vemAvSms(vem), text, 38)}</div><div class="inne"><div class="topp"><span>MEDDELANDEN</span><span class="nu">nu</span></div><div class="fran"><b>${rens(titel)}</b></div><div class="txt">${rens(text)}</div></div>`;
  triTon(); hudEl.querySelector('[data-hud="sms"]')?.animate([{ transform: 'scale(1.12)' }, { transform: 'scale(1)' }], { duration: 400 });
  smsFack.prepend(el); requestAnimationFrame(() => el.classList.add('in'));
  [...smsFack.children].slice(1).forEach((x) => { x.classList.add('ut'); setTimeout(() => x.remove(), 500); });   // en sak i taget
  textLogg('sms-bubbla', vem, text);
  const bort = () => { el.classList.add('ut'); setTimeout(() => el.remove(), 500); };
  const t0 = performance.now(); const vanta = () => { if ((pratarVem === vem && performance.now() < pratarTill) || performance.now() - t0 < 2500) { setTimeout(vanta, 300); return; } setTimeout(bort, 4000); }; setTimeout(vanta, 300);
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
// punkt AS: det begagnade hos Ali
const ALI_KOP_REPL = { korg: 'En sopsäck. Den är ren. Nästan.' };   // punkt AX
const ALI_GAMMALKVARN = 'Pappas gamla köttkvarn. Han byggde om den. Den gör korv av plast. Jag vet inte varför.';
const ALI_BATTERI = 'Elcykelbatteri. Från en elcykel. Som inte finns längre.';
function kopDirekt(id) {
  if (id === 'gammalkvarn') {
    if (!harRumFor('byggsats:gammalkvarn')) { aliRepl = 'Var ska du bära den? Fickorna är fulla.'; return false; }
    S.kvarnKopt = true; const i = laggTill('byggsats:gammalkvarn'); if (typeof i === 'number') byt(i);
    aliRepl = ALI_GAMMALKVARN; ui.toast('⚙️ Kvarnen är din – ställ den på den lysande rutan i linje 1', 'guld');
  } else if (id === 'cykelbatteri') {
    S.batteriKopt = true; aliRepl = ALI_BATTERI; ui.toast('🔋 Cykelbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa', 'guld');
  }
  ritaStart(); sparaSnart(); return true;
}
const ALI_SPECIAL = {
  magnet: 'Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt.',
  turbomotor: 'Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap.',
  jetmotor: 'Ali här. 🚀 Jetmotor. Med efterbrännare. Till en KVARN. Jag vet inte varför. Jag kunde inte sluta rita. Min fru frågade om jag mår bra. Jag har aldrig mått bättre. Ring inte brandkåren.',
  matarband: 'Ali här. 🗑️ Skräpcontainer med matarband. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck.',
  korg: 'Ali här. Rulle med 40 sopsäckar. Jag använder dem som regnställ.',
  ryggsack2: 'Ali här. Större ryggsäck. Min son hade den i lumpen. Han kom hem med fler grejer än han åkte iväg med.',
  skrivare2: 'Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998.',
  skrivare3: 'Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan.',
  sol: 'Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen.',
};
// punkt BD (beslut grupp 2): fyra mallar utan genusfel, X = namnet som i butiken
const ALI_STOLT = [
  (n) => `Ali här. Du printade ${n} från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube.`,
  (n) => `Ali här. ${n} – printad. På riktigt. Jag har visat bilden för min fru tre gånger.`,
  (n) => `Ali här. Jag såg ${n} på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå.`,
  (n) => `Ali här. Ännu en ritning som blev på riktigt: ${n}. Semesterkassan växer. Livet växer.`,
];
const ALI_NY_MALL = (n) => `Ali här. Satt uppe med AI:n hela natten. Ritningen till ${n} är klar. Kom innan nio, då stänger jag.`;
// namn på saker som i butiken: stor bokstav där den hör till (Skrivare L, PETG-kvarnen), annars liten första bokstav mitt i en mening
function sakNamn(n) { return String(n || ''); }   // punkt BD: exakt som i butiken, aldrig toLowerCase
const aliStoltMall = (id) => ALI_STOLT[[...id].reduce((a, c) => a + c.charCodeAt(0), 0) % ALI_STOLT.length];   // samma mall för samma sak (ett röstklipp per sak)
const aliStoltSaker = () => Object.entries(MASKINER).filter(([id, m]) => !ALI_INTE.has(id) && !m.direkt);
// aldrig Ali-sms för: begagnat (inte printat), Rolfs ritningar, N.:s kopp, trädgården, fågelskrämman och fågelbadet – och inte sängen
const ALI_INTE = new Set(['gammalkvarn', 'cykelbatteri', 'helenskjul', 'n_kopp', 't_spalje', 't_bevattning', 't_vaxthus', 'fagelskramma', 'fagelbad', 'sang']);
// max ett Ali-sms per dag (utöver story)
function aliSmsIdag(text, sek) {
  if (S.aliSmsDag === S.dag) { textLogg('struken', 'ali', text, 'redan ett Ali-sms idag'); return; }
  S.aliSmsDag = S.dag; S.aliKo.push({ text, nar: S.speltid + sek }); sparaSnart();
}
// Ali skriver inte direkt – han hör av sig efter 5–10 minuter, när det är lugnt (inget annat meddelande eller meny öppen)
S.aliKo = S.aliKo || []; S.smsKo = S.smsKo || [];
let senasteSms = 0;
function aliSenare(text) { aliSmsIdag(text, 300 + Math.random() * 300); }
function kollaAliKo() {
  const f = S.aliKo[0]; if (!f || S.speltid < f.nar) return;
  if (S.dag <= 1 && S.steg < SI.kop) return;
  if (pausad || !ui.butiksOverlay.hidden || !medEl2.hidden || medKo.length || sovDags()) return;
  S.aliKo.shift(); if (S.aliKo[0]) S.aliKo[0].nar = Math.max(S.aliKo[0].nar, S.speltid + 120 + Math.random() * 180);
  sms('ali', f.text); sparaSnart();
}
function kollaSmsKo() {
  const f = S.smsKo?.[0]; if (!f || S.speltid < f.nar) return;
  if (S.dag <= 1 && S.steg < SI.kop) return;   // dag 1 är en träningsrunda: inga sms från familjen förrän du sålt hos Ali
  if (pausad || !ui.butiksOverlay.hidden || !medEl2.hidden || medKo.length || performance.now() - senasteSms < 25000) return;
  S.smsKo.shift(); sms(f.vem, f.text, f.id); sparaSnart();
}
function kollaSmsTakt() {
  if (!S.smsTakt?.length || smsSparr() || pausad || !ui.igang || !ui.butiksOverlay.hidden || !medEl2.hidden || medKo.length || sover) return;
  const [f, t, id] = S.smsTakt.shift(); sparaSnart(); sms(f, t, id, true);
}
setInterval(() => { slappNya(); kollaAliKo(); kollaSmsKo(); kollaSmsTakt(); }, 3000);
function aliStolt() { /* punkt BD: ersatt av händelsen tagitUrPrint nedan */ }
// punkt BD: första gången en uppgradering (Alis ritning) tas ur skrivaren: ett sms 20 s senare, max ett Ali-sms per dag
paHandelse('tagitUrPrint', ({ sak }) => {
  if (!sak?.startsWith('byggsats:')) return;   // bara uppgraderingar, inte säljvaror
  const id = sak.slice(9), m = MASKINER[id]; if (!m || ALI_INTE.has(id) || m.direkt) return;
  S.aliStolt = S.aliStolt || []; if (S.aliStolt.includes(id)) return; S.aliStolt.push(id);
  aliSmsIdag(aliStoltMall(id)(sakNamn(m.namn)), 20);
});
// punkt BD (beslut grupp 3): nya saker hos Ali syns bara som "Ny" i butiken. Ett sms (5 s efter morgonkortet) bara för dagens
// huvudköp eller en av wow-maskinerna med egen replik – max ett Ali-sms per dag.
function kollaAli() {
  const synliga = Object.entries(MASKINER).filter(([, m]) => m.syns()).map(([id]) => id);
  if (!S.aliSett) { S.aliSett = synliga; return; }
  for (const id of synliga) if (!S.aliSett.includes(id)) { S.aliSett.push(id); if (!ALI_INTE.has(id)) S.aliNya = [...(S.aliNya || []), id]; }
}
paHandelse('morgonkortStangt', ({ dag }) => {
  if (dag === 2) { setTimeout(() => { S.aliStoryVisad = true; aliSmsIdag(lappInfo('salt')[1], 0); }, 5000); S.aliNya = []; return; }   // T0736: Alis berättelse morgonen dag 2
  const nya = S.aliNya || []; S.aliNya = [];
  const st = STEG[S.steg], hk = st ? HUVUDKOP[st.del] : null;
  const id = nya.find((x) => ALI_SPECIAL[x]) || (hk && nya.includes(hk) ? hk : null);
  if (!id) return;
  setTimeout(() => aliSmsIdag(ALI_SPECIAL[id] || ALI_NY_MALL(sakNamn(MASKINER[id].namn)), 0), 5000);
});

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
// Pappa: matt, taktlös och oberörd. Punkt, inte utropstecken. Stockholmstalspråk med högst ett slangord per replik. Byter ämne till Scania, Djurgården, F1, rea.
// "Aha, vad lugnt då!" bara när någon just sagt något känslosamt – högst en gång per besök (se claude/soptippsvagen-pappa-repliker.md).
const PAPPA_SCEN = [
  ['pappa', 'Tjenare. Tjena, Rolf.'], ['rolf', 'Goddag … ja.'], ['pappa', 'Scania va? Vilken årsmodell?'], ['rolf', 'Nittioåtta. V8.'],
  ['pappa', 'Mm. Fin kärra.'], ['rolf', 'Hon går som en klocka.'], ['pappa', 'Såg du hockeyn igår? Värsta sömnpillret.'], ['rolf', 'Ja somna i andra perioden. Som vanlit.'],
  ['pappa', 'Smart karl.'], ['pappa', 'Tjenare. Jaha. Här bor du alltså.', 'du'], ['du', 'Pappa … jag bor på en soptipp.'],
  ['pappa', 'Aha, vad lugnt då.', 'du'], ['du', 'Mamma är jätteorolig.'], ['pappa', 'Jaha. Hon har alltid nåt.', 'du'],
  ['pappa', 'Mamma skicka med lite grejer.', 'burkar'], ['pappa', 'Ja gör bara som hon säger. Då blir de lugnt hemma.'], ['pappa', 'Och va du än gör: mal dom inte. Då tror hon att du ätit upp allt. Då gör hon mer.', 'du'], ['pappa', 'Fint jobbat.', 'du'], ['pappa', 'Nä, nu drar ja. Ska käka korv på macken.'], ['pappa', 'Mamma hälsar.', 'du'],
];
// senare besök: pappa kommer ensam, kuckelurar lite, ställer ner burkar och bladar
const PAPPA_KORT = [
  [['pappa', 'Tjenare. Bara åkte förbi.', 'du'], ['pappa', 'Hört att Djurgår\'n köpt en ny back. Bra grej.'], ['du', 'Jag har inte sovit på två dagar.'], ['pappa', 'Jaha. Ta en tupplur. De gör ja.', 'du']],
  [['pappa', 'Tjena. Nya dojor.', 'du'], ['pappa', 'Fick dom på rea. Sköna som tofflor.'], ['du', 'Jag saknar er ibland.'], ['pappa', 'Mm. Mamma har ditt foto på kylen.', 'du']],
  [['pappa', 'Ja har cyklat hit. Mamma tycker ja ska röra på mej.', 'du'], ['pappa', 'Ingen motor. Trist. Men nyttigt, säger hon.'], ['du', 'Jag är lite ledsen idag.'], ['pappa', 'Aha, vad lugnt då. Käka en korv, så går de över.', 'du']],
  [['pappa', 'Tjenare. Mamma sa att ja skulle kolla läget.', 'du'], ['pappa', 'Läget e bra. Nu har ja kollat.'], ['du', 'Har du saknat mig?'], ['pappa', 'Aha, vad lugnt då. Fin väg hit förresten. Nyasfalterad.', 'du']],
  [['pappa', 'Tjena. Såg Formel 1 i natt. Långt race.', 'du'], ['pappa', 'Verstappen vann. Igen.'], ['du', 'Jag har inget kylskåp, pappa.'], ['pappa', 'Jaha. Ställ de i skuggan. Ja hade ölen i bäcken i lumpen.', 'du']],
  [['pappa', 'Ja har badat i sjön. Kallt.', 'du'], ['du', 'Mamma grät i telefon.'], ['pappa', 'Aha, vad lugnt då. Hon gråter på Bingolotto också.', 'du']],
  [['pappa', 'Tjena. Ska du bo här i vinter också?', 'du'], ['du', 'Jag vet inte, pappa.'], ['pappa', 'Långkalsonger. De e grejen. Mamma köper.', 'du']],
  [['pappa', 'Tjena. Tar du de lugnt idag, eller.', 'du'], ['du', 'Ibland.'], ['pappa', 'Okej.', 'du'], ['pappa', 'Ny mössa. AIK-färger, fast ja e Djurgårdare. Den var på rea.']],
];
// när man malt mammas saker: mamma tjatar hemma och pappa mår sämre. Han blir dryg.
const PAPPA_DRYG = [   // punkt BD: "Varför har du inte kommit längre?" bara i bågen med mammas burkar
  [['pappa', 'Tjenare. Bara åkte förbi.', 'du'], ['pappa', 'Du, en sak. Varför har du inte kommit längre?'], ['du', 'Va? Jag har byggt allt det här själv.'], ['pappa', 'Jaså. Grannens grabb har två lägenheter.', 'du']],
  [['pappa', 'Skjulet lutar lite, va.', 'du'], ['pappa', 'Hade du inte tänkt ha ett riktigt hus vid det här laget?'], ['du', 'Jag gör så gott jag kan.'], ['pappa', 'Aha, vad lugnt då. Ja hade körkort och Volvo när ja var i din ålder.', 'du']],
  [['pappa', 'Tjena.', 'du'], ['pappa', 'Mamma har kokat sylt i tre dagar. Hon tror att du äter upp allt.'], ['du', 'Förlåt, pappa.'], ['pappa', 'Ja sa ju de. Mal dom inte. Aha, vad lugnt då. För dig.', 'du']],
  [['pappa', 'Jaha. Här står du.', 'du'], ['pappa', 'Ja har inte sett hockeyn på en vecka. Mamma pratar över den.'], ['pappa', 'Om grytvantar.']],
  [['pappa', 'Tjena.', 'du'], ['pappa', 'Ja sover i garaget nu. De e lugnare där.'], ['du', 'Är det så illa?'], ['pappa', 'Jaha. Säger du. Som maler sylt.', 'du']],
  [['pappa', 'Hej.', 'du'], ['pappa', 'Hon har köpt en egen frys. Till sylten.'], ['pappa', 'Ja varnade dig. Men vad vet ja. Ja e bara pappa.']],
];
const PAPPA_DRYG_SLUT = [['pappa', 'Mamma skicka med lite grejer. Mal inte dom.', 'burkar'], ['pappa', 'Nä. Ja drar nu.'], ['pappa', 'Mamma hälsar. Typ.', 'du']];
const PAPPA_SLUT = [['pappa', 'Mamma skicka med lite grejer.', 'burkar'], ['pappa', 'Ja gör bara som hon säger. Då blir de lugnt hemma.'], ['pappa', 'Och va du än gör: mal dom inte. Då tror hon att du ätit upp allt. Då gör hon mer.', 'du'], ['pappa', 'Fint jobbat.', 'du'], ['pappa', 'Nä. Ja drar nu.'], ['pappa', 'Mamma hälsar.', 'du']];
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
  if (!S.kapitelKlart) return;   // mat som möglar är ett kapitel 2-system
  let n = 0;
  for (const p of [...placerade]) {
    const ny = RUTTNAR[p.typ]; if (!ny) continue;
    p.mesh.parent.remove(p.mesh); interaktor.avregistrera(p.mesh); placerade.splice(placerade.indexOf(p), 1);
    const sp = S.placerade.find((x) => x.id === p.id); if (sp) sp.typ = ny;
    placera({ ...sparbar(p), typ: ny }, false); n++;
  }
  for (const x of S.hotbar) if (x && RUTTNAR[x.typ]) { x.typ = RUTTNAR[x.typ]; n++; }
  for (const x of [...S.ryggsack, ...S.kistan]) if (x && RUTTNAR[x.typ]) { x.typ = RUTTNAR[x.typ]; n++; }
  if (n) { ritaHotbar(); ritaHand(); morgonToast('🤢 Något luktar … Mammas mat har möglat och blommorna har vissnat. Trivseln sjunker.', 'fel'); sparaSnart(); }
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
  if (S.komposterat === 3) setTimeout(() => sms('rolf', 'Såg att du slänger mat i skogen. Smart. Grävlingen äter vad som helst. Han heter Bosse. /R'), 5000);
  sparaSnart();
}
function uppdateraKompost(dt) {
  for (let i = kompostHogar.length - 1; i >= 0; i--) { const k = kompostHogar[i]; k.t += dt; if (k.t > 20) { k.g.scale.setScalar(Math.max(0.01, 1 - (k.t - 20) / 10)); if (k.t > 30) { scen.remove(k.g); kompostHogar.splice(i, 1); } } }
}
// mammas grejer: mest burkar och saft, men också sånt man ALDRIG bett om
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
    const dags = !S.pappaBesok ? (S.kapitelKlart && S.dag >= 5) : S.dag >= (S.pappaNasta || 0);
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
      const sagt = vem === 'rolf' ? rolfDialekt(text, false).replace('\u200b', '') : text;   // Rolf pratar värmländska även i scener
      bubbla(g, sagt); if (text !== '…') prata(vem, sagt);
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
        S.post.tillMig = [...S.post.tillMig, 'sak:' + ROLF_TACK[id].ger, ...rolfFyndPaket(), 'tack:' + id];
        ljud.placera(); sparaSnart();
        // först blir han överraskad och rörd – sen berättar han vad han lagt i lådan
        if (S.rolfNummer) setTimeout(() => sms('rolf', ROLF_TACK[id].text), 3000);
      } else if (S.rolf.jobb != null && S.post.tillRolf === jobbNu().vara) {
        const j = jobbNu(); S.post.tillRolf = null; S.post.tillMig = [...S.post.tillMig, `mynt:${j.ja}`, 'jobb'];
        S.rolf.jobb = null; S.rolf.jobbNr = j.n + 1; S.rolf.ja = (S.rolf.ja || 0) + 1; S.rolf.jobbTack = j.n; rolfLadeILadan();
        if (S.rolf.ja % 2 === 0) S.rolf.boter = Math.round(j.ja * 0.4 / 50) * 50;    // chefen märker vartannat jobb
        ljud.placera(); sparaSnart();
      } else if (onskan && S.post.tillRolf === onskan.vara) {
        S.post.tillRolf = null; S.rolf.hamtad = S.rolf.i;   // tacket ligger i lådan i morgon bitti
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
function tuta() { const v = 0.02 + 0.12 * bilVolym(); ton(392, 0.25, v); ton(330, 0.25, v, 'square', 0.28); try { if (S.dag >= 2 && sopbil.position.distanceTo(spelare.pos) < 30) { varldsBubbla(sopbil, S.skyltTut ? 'TUUT! Grann skylt!' : ['TUUT! Tjena!', 'TUUT! Hej grannen!', 'TUUT TUUT!'][Math.floor(Math.random() * 3)], 3, 3.2); S.skyltTut = 0; } } catch {} }
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
  if (!S.kapitelKlart) return;   // värme och årstider räknas först i kapitel 2
  const a = arstid(), krav = VARME_KRAV[a], v = varme();
  if (v >= krav) { if (a !== 'sommar' && !S.varmVisad?.[a]) { S.varmVisad = { ...(S.varmVisad || {}), [a]: true }; morgonToast(`🔥 Varmt och skönt i skjulet trots ${a === 'host' ? 'hösten' : 'vintern'}.`, 'bra'); } return; }
  S.frusDag = S.dag + 1; S.frusit = (S.frusit || 0) + 1;
  const vad = [!S.hem?.tak && 'tak', !S.hem?.dorr && 'dörr', (S.hem?.vagg || 0) < 4 && 'fler väggar', !S.hem?.golv && 'golv', a === 'vinter' && !placerade.some((p) => p.typ === 'kamin') && 'en vedkamin (ritning hos Ali)'].filter(Boolean);
  morgonToast(`🥶 Du frös i natt! Trivsel −40 idag. Skjulet behöver: ${vad.join(', ')}.`, 'fel');
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
function rolfFyndSms(n) {   // punkt BD: låter som Rolf, inte som ett spelsystem
  const vad = { 2: 'röda backar av riktigt bra plast', 3: 'kolfiberrester', 4: 'guldglittriga dunkar', 5: 'titanspån' }[n];
  return `Folk pratar gott om dej. Ja hitta ${vad} på tippen. Tre lådor. Ja la dom vid grinden. /R`;
}
const ROLF_JOBBLAPP = ['Rolf här. Ja har en grej. Lite känslig. Ja la en lapp i postlådan. Läs den o bränn den sen. /R', 'Ny lapp i lådan. Du vet vad de betyder. /R'];
const senaSystem = () => !!S.kapitelKlart;   // respekt, rang, prestationer, värme, mark, trim, fynd 3–5, skumma jobb och möglande mat syns först i kapitel 2
const FIL_FARG = { 1: FIL1, 2: 0xd63a2f, 3: 0x2fbf5a, 4: 0xd4a017, 5: 0x9a8ab8 };
const nivaUpplast = (n) => n <= 1 || (n === 2 ? S.kapitel >= 2 : S.kapitel >= 4);   // röd PETG i kapitel 2, nivå 3–5 i kapitel 4
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
const ALI_BONUS_FORSTA = 'Du får bonus! Första kunden som printar själv på 25 år. 40 kr extra.', ALI_KRUKA = 'Prova en kruka. Folk köper krukor. Ingen vet varför.';
const ALI_BONUS_RAD = [[10, 'Du får bonus! 10 kr extra. Du ser hungrig ut.'], [15, 'Du får bonus! 15 kr extra. Pappa hade gillat dig.'], [20, 'Du får bonus! 20 kr extra. Säg inget till min fru.'], [25, 'Du får bonus! 25 kr extra. Kvalitet. Nästan.']];
function giAliBonus() {
  let kr = 0, rad = '';
  if (!S.valkomst) { S.valkomst = true; kr = 40; rad = ALI_BONUS_FORSTA; handelse('forstaForsaljning'); }   // punkt AX: krukreceptet kommer dag 2
  else if (S.dag === 1 && (S.aliBonusDag1 || 0) < 1 && Math.random() < 0.4) {   // punkt BD: högst en slumpbonus dag 1
    S.aliBonusDag1 = (S.aliBonusDag1 || 0) + 1; [kr, rad] = ALI_BONUS_RAD[Math.floor(Math.random() * ALI_BONUS_RAD.length)]; }
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
}
paHandelse('tagitUrPrint', ({ sak }) => { if (S.dag === 1 && sak === 'nyckelring') brorSms(); });   // punkt BC: exakt trigger
// punkt AS: brorsans två sms när den första nyckelringen är klar (undantag från regeln om inga sms dag 1)
const BROR_SMS1 = 'VA?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳';
const BROR_SMS2 = 'Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn.';
let aliRopTid = 0;
function brorSms() {
  if (S.brorSms) return; S.brorSms = true; sparaSnart();
  setTimeout(() => { smsFram('bror', BROR_SMS1, undefined, { vikt: 'STORY' }); }, 2000);
  setTimeout(() => {
    if ((S.stat.salt || 0) > 0) { textLogg('struken', 'bror', BROR_SMS2 + ' (du har redan sålt)'); return; }   // pekar inte bakåt
    smsFram('bror', BROR_SMS2, undefined, { vikt: 'STORY', stryksOm: () => (S.stat.salt || 0) > 0 }); aliRopTid = performance.now() + 30000;
  }, 6000);
}
// Alis rop över vägen kommer bara om man inte har gått dit inom ca 30 s efter brorsans sms
setInterval(() => {
  if (!aliRopTid) return;
  if (Math.hypot(spelare.pos.x - ALI.x, spelare.pos.z - ALI.z) < 8 || (S.stat.salt || 0) >= 1) { aliRopTid = 0; return; }
  if (performance.now() > aliRopTid && ui.igang && !sover) { aliRopTid = 0; if ((S.stat.salt || 0) < 1) aliRopar(); }
}, 1000);
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
const VARN = { ryggsack: 'Ryggsäcken. Tryck E så öppnar jag den.', vrid: 'Tryck R för att vrida.',
  full: 'Fullt i händerna.',
  tung: 'För tung för kvarnen. Än.',
  enHand: 'Du har en hand ledig. Den andra håller i allt du äger.',   // punkt AG: utan grip bär du en sak i taget
  karra: 'Kärran är full.',
  tratt: 'Tratten är full. Veva först.',
  rulle: 'Rullen är full. Ta den först.',
  litenTratt: 'Tunga saker får inte plats här. De ska till den röda PETG-kvarnen.',
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
  if (senaSystem()) { flytSiffra('respekt', (d > 0 ? '+' : '') + d); respChip.classList.remove('puls'); void respChip.offsetWidth; respChip.classList.add(d > 0 ? 'puls' : 'puls-ner'); }
  kollaFyndGavor();
  sparaSnart();
}
// Rolfs fynd: nivå 2 (röd PETG) kan komma tidigt, nivå 3–5 först i kapitel 2 – sen kommer de som respekten redan räcker till
function kollaFyndGavor() {
  RESPEKT_NIVAER.forEach(([g, namn], i) => {
    const n = i + 2; if (n >= 3 || S.respekt < g || (S.filGava || []).includes(n) || S.kapitel < 2) return;   // punkt BD: nivå 3–5 kommer när dagsmålet behöver materialet
    S.filGava = [...(S.filGava || []), n];
    S.post.tillMig = [...S.post.tillMig, 'sak:fynd' + n, 'sak:fynd' + n, 'sak:fynd' + n]; visaPostInne();
    setTimeout(() => sms('rolf', rolfFyndSms(n)), 800);
  });
}
// Rolfs fynd: special-plast som kvarnen gör till filament av högre nivå
function malFynd() {
  const t = valdTyp(), n = VAROR[t].malTill, kravs = n <= 3 ? 1 : 2;
  if (n === 2) { ui.toast('Röd PETG mals i den röda PETG-kvarnen – inte här', 'fel'); ljud.fel(); return; }
  if ((S.kvarn.kniv || 0) < kravs) {
    ui.toast(`Knivarna biter inte på ${VAROR[t].namn.replace(' (från Rolf)', '').toLowerCase()} – köp ${kravs === 1 ? 'Härdade kvarnknivar' : 'Diamantkvarn'} hos Ali och sätt i dem`, 'fel'); ljud.fel(); return;
  }
  taBortVald();
  const m = skapaVara(t), fran = hand.grupp ? hand.grupp.getWorldPosition(new THREE.Vector3()) : kamera.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, -0.3, 0));
  skickaSkrap(m, fran, trattTopp(), { dur: 0.7, tratt: false });
  ljud.stor(); ritaHotbar?.();
  setTimeout(() => {
    laggTill('rulle' + n); ritaHotbar?.(); S.stat.maltNiva = { ...(S.stat.maltNiva || {}), [n]: (S.stat.maltNiva?.[n] || 0) + 1 };
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

// trivsel ger mer betalt: varje TRIVSEL_PER_PROCENT ger +1 % på allt Ali betalar för prints, högst TRIVSEL_MAX_BONUS
const trivselBonus = () => Math.min(TRIVSEL_MAX_BONUS, Math.floor(trivsel() / TRIVSEL_PER_PROCENT) / 100);
const bonusText = () => `${Math.round(trivselBonus() * 100)} %`;
const procentFor = (n) => (n / TRIVSEL_PER_PROCENT).toLocaleString('sv-SE', { maximumFractionDigits: 1 });
function trivselRad(n) {
  if (trivselBonus() >= TRIVSEL_MAX_BONUS) return `Trivsel +${n} (Ali betalar redan max +${Math.round(TRIVSEL_MAX_BONUS * 100)} %)`;
  const kr = Math.round((S.inkomstSnitt || 0) * n / TRIVSEL_PER_PROCENT / 100);
  return `Trivsel +${n} → Ali betalar +${procentFor(n)} %${kr > 0 ? ` (≈ +${kr.toLocaleString('sv-SE')} kr per dag)` : ''}`;
}
function trivselToast(namn, n) { return `${namn} på plats! Trivsel +${n} · Ali betalar nu +${bonusText()}`; }
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
  if (!invRitar && (invHand || invSalj)) invAvsluta();   // en annan meny öppnas: inventoryt städas först
  spelare.aktiv = false; kistaOppen = false;
  if (ui.butiksOverlay.hidden) { menyOppnad = performance.now(); spelaLjud('meny-oppna'); }
  ui.butiksOverlay.hidden = false;
  ui.slappMus();
  const scroll = ui.butiksOverlay.querySelector('.ui-kropp')?.scrollTop || 0;
  ui.butiksOverlay.innerHTML = rens(html.includes('ui-panel') ? html : `<div class="fp-ruta ph-ruta ${klass}">${html}<button class="fp-knapp" data-stang>Klar</button></div>`);
  const kr = ui.butiksOverlay.querySelector('.ui-kropp'); if (kr) kr.scrollTop = scroll;
  ui.butiksOverlay.querySelectorAll('[data-stang]').forEach((k) => { k.onclick = () => ui.stangButik(); });
  bind?.(ui.butiksOverlay);
}
// E öppnar inventoryt (som i Minecraft), F används i stället för att plocka/använda
const dialogUppe = () => !medEl2.hidden || document.querySelector('.ph-samtal, .ph-kap, .br-bekrafta');
addEventListener('keydown', (e) => {
  if (e.code === 'KeyF' && !e.repeat && ui.igang && ui.butiksOverlay.hidden && !dialogUppe()) { ui.o.onAnvand?.(true); return; }
  if (e.code !== 'KeyE' || !ui.igang || !ui.butiksOverlay.hidden || dialogUppe() || pausad) return;
  e.preventDefault(); e.stopImmediatePropagation(); if (!e.repeat) oppnaInv();
}, true);
addEventListener('keyup', (e) => { if (e.code === 'KeyF') ui.o.onAnvand?.(false); if (e.code === 'KeyE' && ui.butiksOverlay.hidden === false) e.stopImmediatePropagation(); }, true);
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
  const fler = ['bord', 'bank', 'sol', 'solpark', 'skrivare2', 'skrivare3'];
  if (fler.includes(m)) return false;
  return (m === 'grip' && S.grip) || (m === 'magnet' && S.magnet) || (m === 'korg' && S.korg) || (m === 'ryggkorg' && S.ryggkorg) || (m === 'ryggsack2' && S.storRyggsack) || (m === 'karra' && S.karra) || (m === 'kvarnmotor' && S.kvarn.motor)
    || (m === 'rullband' && S.auto?.band) || (m === 'lastarm' && S.auto?.lastarm) || (m === 'robotarm' && S.auto?.arm) || (m === 'utlada' && S.auto?.lada)
    || (m === 'saljlada' && (harPlacerat('saljlada') || antalInv('byggsats:saljlada'))) || (m === 'petgkvarn' && (harPlacerat('petgkvarn') || antalInv('byggsats:petgkvarn'))) || (m === 'skrivarepetg' && (harPlacerat('skrivarepetg') || antalInv('byggsats:skrivarepetg'))) || (m === 'petgband' && (S.petg?.band || antalInv('byggsats:petgband')))
    || (m === 'rullstall' && (S.rullstall || 0) >= 3) || (m === 'stortratt' && S.kvarn.stor) || (m === 'hardkniv' && (S.kvarn.kniv || 0) >= 1) || (m === 'diamantkniv' && (S.kvarn.kniv || 0) >= 2) || (m === 'matarband' && S.kvarn.band) || (m === 'turbomotor' && S.kvarn.turbo) || (m === 'jetmotor' && S.kvarn.jet) || (m === 'gamingbod' && S.bod)
    || (m === 'spolhallare' && skrivare.every((x) => (x.spolNiva || 0) >= 1)) || (m === 'spolhallare2' && skrivare.every((x) => (x.spolNiva || 0) >= 2)) || (m === 'spolhallare3' && skrivare.every((x) => (x.spolNiva || 0) >= 3))
    || (m === 'helenskjul' && !!S.helen?.skjul) || (m === 'gammalkvarn' && !!S.kvarnKopt) || (m === 'cykelbatteri' && !!S.batteriKopt)
    || (MASKINER[m]?.hem && m !== 'fonster' && m !== 'vaggar' && !!S.hem?.[m])
    || (m === 'turbomotor' && S.kvarn.jet) || (m === 'kvarnmotor' && (S.kvarn.turbo || S.kvarn.jet))   // sämre än det du redan har
    || (m === 'fonster' && fonsterLista().length + antalInv('byggsats:fonster') + extra >= FONSTER.max)
    || (m === 'vaggar' && (S.hem?.vagg || 0) + antalInv('byggsats:vaggar') + extra >= 4)
    || (!!MASKINER[m]?.monteras && antalInv('byggsats:' + m) > 0 && !m.startsWith('spolhallare'));
}
let printMalVisad = '';
function oppnaPrintMeny(sk) {
  const g = GEN[sk.gen];
  // alla saker skrivaren kan göra, sorterade i flikar – som Minecrafts creative-meny
  const saker = [];
  const lagg = (flik, id, attr, ikon, namn, gram, tid, info, pris) => saker.push({ flik, id, attr, ikon, namn, gram, tid, info, pris });
  const petg = sk.gen === PETG_GEN;
  for (const [id, v] of Object.entries(VAROR)) {
    if (v.kop) continue;
    if (petg && v.tradgard) { if (v.niva === 2 && harRecept(id) && v.syns()) lagg('gava', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid, '🌹 Till Birgittas trädgård bakom tippen'); continue; }
    if (petg) { if (v.niva === 2 && harRecept(id)) lagg('salj', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid, `🪙 ${prisNu(id)} kr hos Ali idag${id === aliVill() ? ' ⭐ Ali vill ha den idag (+50 %)' : ''} · ${Math.round(v.pris / v.gram * RULLE)} kr per rulle röd PETG${v.trivsel ? ' · kan också ställas ut' : ''}`, prisNu(id)); continue; }
    if (v.niva === 2) continue;   // röd PETG printas bara på PETG-skrivaren
    if (v.pris > 0 && harRecept(id) && (!v.niva || (nivaUpplast(v.niva) && (antalInv('rulle' + v.niva) || antalInv('fynd' + v.niva))))) lagg('salj', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid,
      `🪙 ${prisNu(id)} kr hos Ali idag${id === aliVill() ? ' ⭐ Ali vill ha den idag (+50 %)' : ''}${prisNu(id) < v.pris ? ` (fullpris ${v.pris} – marknaden är mättad)` : ` · ${Math.round(v.pris / v.gram * RULLE)} kr per rulle`}${v.trivsel ? ' · kan också ställas ut' : ''}`, prisNu(id));
    else if (v.lyx && harRecept(id)) lagg('hem', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid, `✨ Trivsel +${v.trivsel} · ställ den i din fristad`);
    else if (v.jul && v.syns()) lagg('hem', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid, '🎄 Till julen – gratis');
    else if (v.nBest && harRecept(id) && v.syns()) lagg('gava', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid, '📜 Beställning från N. – lägg den i postlådan');
    else if (v.tradgard && v.niva !== 2 && harRecept(id) && v.syns()) lagg('gava', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid, '🌹 Till Birgittas trädgård bakom tippen');
    else if (id === 'sang' && S.ritningar.includes('sang') && !harSang()) lagg('hem', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid, '🛏️ En riktig säng till skjulet');
    else if (v.gava && id === aktivGava() && !harGava(id) && S.ritningar.includes('gava:' + id)) lagg('gava', id, `data-vara="${id}"`, ikonHtml(id, 54), v.namn, v.gram, v.tid, `🎁 Rolfs önskan – lägg den i hans postlåda`);
  }
  const klarMaskin = (m) => arKlar(m);
  const _gammal = (m) => (m === 'grip' && S.grip) || (m === 'magnet' && S.magnet) || (m === 'korg' && S.korg) || (m === 'ryggkorg' && S.ryggkorg) || (m === 'ryggsack2' && S.storRyggsack) || (m === 'karra' && S.karra) || (m === 'kvarnmotor' && S.kvarn.motor) || (m === 'stortratt' && S.kvarn.stor) || (m === 'matarband' && S.kvarn.band) || (m === 'turbomotor' && S.kvarn.turbo) || (m === 'gamingbod' && S.bod) || (m === 'spolhallare' && skrivare.every((x) => (x.spolNiva || 0) >= 1)) || (m === 'spolhallare2' && skrivare.every((x) => (x.spolNiva || 0) >= 2)) || (m === 'spolhallare3' && skrivare.every((x) => (x.spolNiva || 0) >= 3)) || (m === 'jetmotor' && S.kvarn.jet) || (MASKINER[m].hem && m !== 'fonster' && S.hem?.[m]) || (m === 'fonster' && fonsterLista().length + antalInv('byggsats:fonster') >= FONSTER.max) || (m === 'vaggar' && (S.hem?.vagg || 0) + antalInv('byggsats:vaggar') >= 4);
  for (const m of petg ? [] : S.ritningar) {
    const x = MASKINER[m]; if (!x || klarMaskin(m)) continue;
    lagg(x.hem || x.flik === 'hem' ? 'hem' : 'maskin', m, `data-maskin="${m}"`, ikonHtml('byggsats:' + m, 54), x.namn, x.gram * x.delar, x.tid * x.delar,
      `${x.beskr}<br>Printas i ${x.delar} delar: ${(DEL_NAMN[m] || []).join(', ').toLowerCase()} (${rullar(x.gram)} per del)`);
  }
  const FLIKAR = [['maskin', 'kugghjul', 'Maskiner'], ['hem', 'hus', 'Hemmet'], ['salj', 'salj', 'Att sälja'], ['gava', 'gava', 'Gåvor – Rolfs önskan']].filter(([f]) => saker.some((x) => x.flik === f));
  // allt på en sida: maskiner, hemmet, att sälja och gåvor under varandra – ingen flik döljer något
  // punkt AL: dagens målsak står först och är förvald (en gång per mål – sedan väljer du själv)
  const malT = (() => { const st = STEG[S.steg]; const t = st && !st.sov && (typeof st.bild === 'function' ? st.bild() : st.bild); return t ? (t.startsWith('byggsats:') ? t.slice(9) : t) : null; })();
  const malSak = malT ? saker.find((x) => x.id === malT) : null;
  if (malSak && printMalVisad !== malT + ':' + S.steg) { printMalVisad = malT + ':' + S.steg; printVald = malT; }
  if (malSak) FLIKAR.sort((a, b) => (b[0] === malSak.flik) - (a[0] === malSak.flik));
  const vald = saker.find((x) => x.id === printVald) || saker[0];
  const behov = (x) => (x.attr.startsWith('data-maskin') ? MASKINER[x.id].gram : x.gram);
  const forStor = (x) => !x.attr.startsWith('data-maskin') && storlekFor(x.id) > skrivStorlek(sk);
  const saknarRulle = (x) => { const n = !petg && !x.attr.startsWith('data-maskin') && VAROR[x.id]?.niva; return n && !antalInv('rulle' + n) ? n : 0; };   // specialfilament (PETG, kolfiber …) måste finnas
  const kanInte = (x) => forStor(x) || sk.fil < 1 || !!saknarRulle(x);
  const helaISkrivare = Math.floor((sk.fil || 0) / RULLE);
  const taAv = helaISkrivare >= 1 && !sk.jobb ? `<div class="ph-saljallt">${knapp({ text: `Ta av en rulle (${helaISkrivare} hel${helaISkrivare > 1 ? 'a' : ''} i skrivaren)`, typ: 'neutral', attr: 'data-taav', ikon: 'rulle' })}<span>Hamnar i verktygsraden – bra om du vill flytta filament till en annan skrivare</span></div>` : '';
  const jNu = sk.jobb, jNamn = jNu ? (jNu.maskin ? MASKINER[jNu.maskin].namn : VAROR[jNu.typ]?.namn || '') : '';
  const printarNu = jNu ? `<div class="ph-saljallt ph-printarnu"><span><b>Printar: ${rens(jNamn)}</b> · ${Math.round((sk.prog || 0) * 100)} %${sk.upprepa ? ' · upprepar' : ''}</span>${sk.upprepa ? knapp({ text: 'Stoppa efter den här', typ: 'neutral', attr: 'data-stoppa', ikon: 'klocka' }) : ''}${knapp({ text: 'Avbryt', typ: 'minus', attr: 'data-avbryt', ikon: 'stang' })}</div>` : '';
  const koNamn = (v) => v.maskin ? MASKINER[v.maskin].namn : VAROR[v.typ]?.namn || '';
  const koHtml = sk.ko?.length ? `<div class="ph-saljallt ph-printarnu"><span><b>I kön:</b> ${sk.ko.map((v, i) => `${rens(koNamn(v))} <button class="ph-kobort" data-kobort="${i}" title="Ta bort ur kön">✕</button>`).join(' · ')}</span>${knapp({ text: 'Töm kön', typ: 'neutral', attr: 'data-kotom', ikon: 'stang' })}</div>` : '';
  const kropp = printarNu + koHtml + taAv + (FLIKAR.length ? FLIKAR.map(([fl, , namn]) => sektion(namn, fl === 'salj' ? 'grön siffra = vad Ali betalar idag' : 'siffran = rullar filament') + grid(saker.filter((x) => x.flik === fl).sort((a, b) => (b === malSak) - (a === malSak) || (forStor(a) || kanInte(a)) - (forStor(b) || kanInte(b))).map((x) => uiRuta({ bild: tumme(x.attr.startsWith('data-maskin') ? 'byggsats:' + x.id : x.id), attr: `data-pval="${x.id}"`, vald: x === vald, dyr: !forStor(x) && kanInte(x), last: forStor(x), storlek: storlekRuta(x.id, x.attr.startsWith('data-maskin')), niva: x.attr.startsWith('data-maskin') ? 0 : (VAROR[x.id]?.niva || 0), pris: VAROR[x.id]?.pris && !x.attr.startsWith('data-maskin') ? '+' + prisNu(x.id) : rullKort(x.gram), prisTyp: VAROR[x.id]?.pris && !x.attr.startsWith('data-maskin') ? 'plus' : 'fil', titel: x.namn, etikett: true })))).join('')
    + (antalInv('rulle') ? `<p class="ui-tom">${ik('rulle')} Du bär ${antalInv('rulle')} ${antalInv('rulle') === 1 ? 'rulle' : 'rullar'} – välj den i verktygsraden och klicka på skrivaren för att ladda.</p>` : '')
    : `<p class="ui-tom">${petg ? 'Köp ett PETG-recept hos Ali (hyllan Röd PETG) – vas, hjälm, neonskylt, paddel.' : 'Inget att printa just nu – köp ritningar och recept hos Ali.'}</p>`);
  const fot = vald ? detalj({ bild: tumme(vald.attr.startsWith('data-maskin') ? 'byggsats:' + vald.id : vald.id, 72), titel: vald.namn, text: rens(vald.info).replace(/<br>/g, ' · '),
    faktaLista: [VAROR[vald.id]?.niva && !vald.attr.startsWith('data-maskin') ? ['rulle', nivaText(VAROR[vald.id].niva), antalInv('rulle' + VAROR[vald.id].niva) ? 'plus' : 'minus'] : null, VAROR[vald.id]?.pris && !vald.attr.startsWith('data-maskin') ? ['mynt', `Ali betalar ${prisNu(vald.id)} kr idag${prisNu(vald.id) < saljPris(vald.id) ? ` (vanligt ${saljPris(vald.id)})` : ''}`, 'plus'] : null, VAROR[vald.id]?.pris && !vald.attr.startsWith('data-maskin') ? ['oandlig', `${Math.round(prisNu(vald.id) / (vald.gram / RULLE))} kr per rulle`, 'plus'] : null, sk.fil > 0 && sk.fil < behov(vald) && !forStor(vald) ? ['varning', `Laddat räcker till ${Math.floor(sk.fil / behov(vald) * 100)} % – den pausar sedan tills du laddar mer`, 'varn'] : null, ['klocka', `${Math.round(vald.tid / g.fart)} s`], ['rulle', `${rullar(vald.gram)}${vald.attr.startsWith('data-maskin') ? ` (${rullar(behov(vald))} per del)` : ''}`]],
    knappar: [S.auto?.lada && sk.gen !== PETG_GEN && !vald.attr.startsWith('data-maskin') && upprepbar(vald.id) ? { text: sk.upprepaPa ? 'Autoprint: PÅ' : 'Autoprint: AV', typ: sk.upprepaPa ? 'plus' : 'neutral', attr: `data-upprepa="${vald.id}"`, ikon: 'oandlig' } : null, { text: sk.jobb ? (kanKo(sk) ? ((sk.ko?.length || 0) < KO_MAX_SKRIVARE ? `Lägg i kö (${(sk.ko?.length || 0) + 1}/${KO_MAX_SKRIVARE})` : 'Kön är full') : 'Avbryt och printa den här') : saknarRulle(vald) ? `Kräver filament nivå ${saknarRulle(vald)}` : forStor(vald) ? `Kräver skrivare ${STORLEK_NAMN[storlekFor(vald.id)]}` : kanInte(vald) ? 'Ladda mer filament' : 'Printa', typ: 'plus', attr: vald.attr + ' data-printa', av: sk.jobb ? (kanKo(sk) ? (sk.ko?.length || 0) >= KO_MAX_SKRIVARE || forStor(vald) : forStor(vald) || saknarRulle(vald) > 0) : kanInte(vald), ikon: forStor(vald) ? 'las' : 'skrivare' }].filter(Boolean) }) : detalj({});
  const html = panel({ ikon: 'skrivare', titel: `Skrivare ${g.namn} · byggvolym ${g.mm} mm${sk.mod ? ' · ' + VAROR[sk.mod].namn.replace('Prototyp: ', '') : ''}`, sub: S.strom < 20 ? 'Lite ström – trampa cykeln så att skrivaren orkar' : 'Välj vad du vill printa', resurser: resurs('rulle', `${rullar(sk.fil)} laddat`) + resurs('blixt', Math.floor(S.strom), S.strom < 20 ? 'varn' : ''),
    kropp, fot });
  oppnaRuta(html, (el) => {
    coachLapp(el, 'print');
    el.querySelectorAll('[data-flik]').forEach((k) => { k.onclick = () => { printFlik = k.dataset.flik; printVald = null; ljud.plock(); oppnaPrintMeny(sk); }; });
    el.querySelector('[data-taav]')?.addEventListener('click', () => {
      if ((sk.fil || 0) < RULLE || sk.jobb) return;
      if (!rullePlats()) { varna('barRulle'); return; }
      if (!harRumFor('rulle')) { ui.toast('Ingen plats i verktygsraden eller kistan', 'fel'); ljud.fel(); return; }
      sk.fil -= RULLE; laggTill(filTyp(sk)); sk.spolstall && (sk.spolstall.userData.visar = -1); visaSpolar(sk); sparaSkrivare(); ljud.plock(); oppnaPrintMeny(sk);
    });
    el.querySelectorAll('[data-pval]').forEach((k) => {
      k.onclick = () => { printVald = k.dataset.pval; ljud.plock(); oppnaPrintMeny(sk); };
      k.ondblclick = () => el.querySelector('[data-printa]')?.click();
    });
    el.querySelector('[data-stoppa]')?.addEventListener('click', () => { sk.upprepa = null; sk.upprepaPa = false; sparaSkrivare(); ljud.plock(); ui.toast('Skrivaren stannar när den här är klar', 'bra'); oppnaPrintMeny(sk); });
    el.querySelector('[data-avbryt]')?.addEventListener('click', () => { avbrytJobb(sk); ljud.plock(); oppnaPrintMeny(sk); });
    el.querySelectorAll('[data-kobort]').forEach((k) => { k.onclick = (e) => { e.stopPropagation(); sk.ko.splice(+k.dataset.kobort, 1); sparaSkrivare(); ljud.plock(); oppnaPrintMeny(sk); }; });
    el.querySelector('[data-kotom]')?.addEventListener('click', () => { sk.ko = []; sparaSkrivare(); ljud.plock(); oppnaPrintMeny(sk); });
    el.querySelectorAll('[data-upprepa]').forEach((k) => { k.onclick = () => {
      const t = k.dataset.upprepa; sk.upprepaPa = !sk.upprepaPa; if (sk.jobb?.typ === t) sk.upprepa = sk.upprepaPa ? t : null; sparaSkrivare(); sparaSnart(); ljud.plock();
      ui.toast(sk.upprepaPa ? `Autoprint PÅ: skrivaren printar ${VAROR[t].namn} tills du byter eller filamentet tar slut – bandet tar allt till leveranslådan` : 'Autoprint AV: skrivaren printar en sak i taget', sk.upprepaPa ? 'guld' : '');
      oppnaPrintMeny(sk);
    }; });
    el.querySelectorAll('[data-printa]').forEach((k) => {
      k.onclick = () => {
        if (sk.jobb && !kanKo(sk)) avbrytJobb(sk);   // punkt 14: Skrivare S – avbryt den pågående (filamentet tillbaka) och starta den nya
        const ok = startaJobb(sk, k.dataset.vara ? { typ: k.dataset.vara } : { maskin: k.dataset.maskin });
        if (ok === 'upptagen') { ljud.fel(); ui.toast(sk.ko?.length >= KO_MAX_SKRIVARE ? 'Kön är full – ta bort något ur kön först' : 'Skrivaren printar redan – vänta tills den är klar', 'fel'); return; }
        if (ok === 'ko') { ljud.kop(); ui.stangButik(); skrivarNotis(sk, 'Lagt i kö – startar när den här är klar', 'bra'); return; }
        if (ok) { ljud.kop(); ui.stangButik(); const j = sk.jobb; skrivarNotis(sk, `Printar ${(j?.maskin ? MASKINER[j.maskin].namn : VAROR[j?.typ]?.namn || '').toLowerCase()}…`, 'bra'); }
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
let klockTest = null;   // testkrok: __printahem.tidTest(min)
function klockan() {
  if (klockTest != null) return klockTest;
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
  if (VAROR[typ]?.pris > 0) return Math.round(VAROR[typ].pris * (1 + trimNiva('pris') * 0.1) * (1 + trivselBonus()));   // trivselbonus: hos Ali, i säljlådan och i leveranslådan
  if (VAROR[typ]?.lyx) return Math.round(VAROR[typ].gram * 0.1);
  if (typ.startsWith('tapet_')) return Math.round((TAPETER[Number(typ.split('_')[1])]?.pris || 200) * 0.5);   // köpt hos Ali – tillbaka för halva priset
  if (VAROR[typ]?.present) return Math.round(VAROR[typ].present * 0.5);
  if (VAROR[typ]?.proto) return Math.round(VAROR[typ].proto.pris * 0.4);
  if (/^rulle[2-5]$/.test(typ)) return 60 * Number(typ.slice(5));
  if (/^fynd[2-5]$/.test(typ)) return 40 * Number(typ.slice(4));
  if (typ === 'rulle') return S.dag >= 3 ? 40 : 0;   // från dag 3 printar Ali själv och vill köpa rullar                                    // Ali köper rullar billigt (och säljer för 150) – printa hellre
  const m = typ.startsWith('byggsats:') && MASKINER[typ.split(':')[1]];
  if (m) return Math.max(20, Math.round(m.gram * m.delar * SALJ_TILLBAKA));
  if (VAROR[typ]?.gram) return Math.max(10, Math.round(VAROR[typ].gram * 0.06));   // gåvor, säng m.m. – Ali tar det mesta, men snålt
  return 0;
};
// marknaden mättas: samma vara blir billigare ju fler du säljer samma dag
const saltIdag = (t) => (S.saltIdag || {})[t] || 0;
const prisNu = (t, extra = 0) => { const b = saljPris(t); return t.startsWith('byggsats:') || VAROR[t]?.lyx ? b : Math.max(1, Math.round(b * (t === aliVill() ? ALI_VILL_BONUS : 1) * (S.dag <= 1 ? 1 : Math.max(MATTNAD_GOLV, MATTNAD ** (saltIdag(t) + extra))))); };   // punkt AS: ingen mättnad dag 1
// ---------- Ali vill ha idag: en vara du har recept på, +50 % hela dagen. Slumpas varje morgon. ----------
function aliVillVal() {
  // bara sånt du faktiskt kan printa nu: rätt skrivare och rätt filament
  const kan = (id, v) => v.pris > 0 && !v.lyx && !v.gava && !v.kop && !v.proto && harRecept(id) && (!v.niva || (v.niva === 2 ? harPlacerat('skrivarepetg') : antalInv('rulle' + v.niva) > 0)) && storlekFor(id) <= Math.max(1, ...skrivare.filter((x) => x.gen !== 4).map((x) => GEN[x.gen].storlek));
  const L = Object.entries(VAROR).filter(([id, v]) => kan(id, v)).map(([id]) => id);
  const forra = S.aliVill?.typ;
  const urval = L.length > 1 ? L.filter((id) => id !== forra) : L;
  S.aliVill = { dag: S.dag, typ: urval.length ? urval[Math.floor(Math.random() * urval.length)] : null };
}
function aliVill() {
  if (S.dag <= 1) return null;   // punkt AG: dag 1 är stegen exakta (nyckelringen 15 kr + välkomstbonus 40 kr)
  if (!S.aliVill || S.aliVill.dag !== S.dag || !S.aliVill.typ) aliVillVal();
  return S.aliVill.typ;
}
const aliVillHtml = () => { const t = aliVill(); return t ? `<div class="ali-vill">${ikonHtml(t, 34)}<span><b>Ali vill ha idag: ${rens(VAROR[t].namn)}</b>&nbsp;– +50 % hela dagen (${prisNu(t)} kr just nu)</span></div>` : ''; };
const summaFor = (t, n) => { let s2 = 0; for (let i = 0; i < n; i++) s2 += prisNu(t, i); return s2; };
// ett ställe för all försäljning: hos Ali och i säljlådan – mättnad, dagens vara och statistik gäller lika
function saljTillAli(t, n) {
  n = Math.min(n, antalInv(t)); if (!n || !saljPris(t)) return 0;
  const summa = summaFor(t, n); taBortInv(t, n);
  if (!t.startsWith('byggsats:') && !VAROR[t]?.lyx) { S.saltIdag = { ...(S.saltIdag || {}), [t]: saltIdag(t) + n }; S.saltTot = { ...(S.saltTot || {}), [t]: (S.saltTot?.[t] || 0) + n }; }
  S.mynt += summa; S.stat.salt += n; ljud.mynt(); myntRegn(summa); giAliBonus();
  return summa;
}
// ---------- Säljlådan vid lägret: lägg i en vara, Ali swishar pengarna direkt ----------
function saljladaText() {
  const t = valdTyp();
  if (t && t !== aktivGava() && saljPris(t)) { const n = S.hotbar[S.vald]?.n || 1; return `📱 Lägg ${n > 1 ? n + ' st ' : ''}${namnFor(t).toLowerCase()} i säljlådan · Ali swishar +${summaFor(t, n)} kr${t === aliVill() ? ' ⭐' : ''}`; }
  if (t && !saljPris(t)) return `Ali köper inte ${namnFor(t).toLowerCase()}`;
  return '📦 Öppna säljlådan – lägg i det du vill sälja, Ali swishar direkt';
}
function saljladaAktivera(p) {
  const t = valdTyp();
  if (!t) { oppnaInv({ salj: true }); return; }
  if (t === aktivGava()) { ui.toast('Det där är Rolfs gåva – lägg den i hans postlåda', 'fel'); ljud.fel(); return; }
  if (!saljPris(t)) { ui.toast(aliNejFor(t) || 'Ali köper inte det där', 'fel'); ljud.fel(); return; }
  const n = S.hotbar[S.vald]?.n || 1, nm = namnFor(t).toLowerCase(), vill = t === aliVill();
  const summa = saljTillAli(t, n); if (!summa) return;
  ritaHotbar(); ritaHand(); sparaSnart();
  if (!S.swishSms || S.swishSms !== S.dag) { S.swishSms = S.dag; sms('ali', `Swish: +${summa} kr för ${n > 1 ? n + ' st ' : ''}${nm}. Lådan funkar. Jag hämtar varorna när butiken är tom. Alltså hela tiden. /Ali`); }
  else notis(`📱 Swish från Ali: +${summa} kr · ${n > 1 ? n + ' st ' : ''}${nm}${vill ? ' ⭐ dagens vara' : ''}`, 'guld', { tid: 3500 });
}
let aliRepl = '', aliFlik = 'kop';
let aliVald = null;
const ALI_FORSTA = 'Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar.';
// batteribanker och solpaneler: varje ny kostar dubbelt så mycket – el ska vara något man jobbar för
const DUBBEL_PRIS = ['bank', 'sol', 'solpark'];
const antalAv = (id) => placerade.filter((p) => p.typ === id).length + antalInv('byggsats:' + id);
const ritPris = (id) => DUBBEL_PRIS.includes(id) ? MASKINER[id].ritning * 2 ** antalAv(id) : MASKINER[id].ritning;
// dagens huvudköp: ungefär dubbelt så dyrt varje dag (dörr → tak → solpanel → Skrivare M). Annars det billigaste du kan köpa hos Ali.
const HUVUDKOP = { [N1]: 'dorr', [N2]: 'tak', [N3]: 'sol', [N4]: 'skrivare2', [R6]: 'petgkvarn', [R7]: 'skrivarepetg', [R8]: 'magnet', [R9]: 'solpark', [R10]: 'skrivare3', [F11]: 'rullband', [F12]: 'robotarm', [F13]: 'gamingbod', [F14]: 'utlada', [F15]: 'recept:jacuzzi', [M16]: 'mark:egen', [M17]: 'mark:oster', [M18]: 'mark:huset', [M19]: 'diamantkniv', [M20]: 'recept:kamin' };
let nastaKopCache = null, nastaKopT = 0;
function nastaKop() {
  if (performance.now() - nastaKopT < 1000) return nastaKopCache;
  nastaKopT = performance.now();
  const h = HUVUDKOP[STEG[S.steg]?.del];
  const klar = (id) => S.ritningar.includes(id) || arKlar(id) || harPlacerat(id) || antalInv('byggsats:' + id) || (MASKINER[id].hem && S.hem?.[id]) || skrivare.some((x) => x.jobb?.maskin === id || x.klar === 'byggsats:' + id);
  if (h?.startsWith('mark:')) { const t = MARK_TOMTER.find((x) => x.id === h.slice(5)); if (t && !agerMark(t.id)) return (nastaKopCache = { namn: t.namn.replace(/^Ett riktigt hus.*/, 'Riktigt hus'), pris: t.pris, slag: 'upp' }); }
  else if (h?.startsWith('recept:')) { const id = h.slice(7); if (VAROR[id] && !harRecept(id) && !harPlacerat(id)) return (nastaKopCache = { namn: VAROR[id].namn, pris: VAROR[id].recept, slag: kopSlag('r:' + id) }); }
  else if (h && MASKINER[h].syns() && !klar(h)) return (nastaKopCache = { namn: MASKINER[h].namn, pris: ritPris(h), slag: 'upp' });
  try {
    const L = aliKopLista().filter((x) => x.pris > 0 && !x.las && x.key !== 'filament' && !String(x.key).startsWith('pr:')).sort((a, b) => a.pris - b.pris);
    nastaKopCache = L[0] ? { namn: L[0].namn.replace(/^(3D-modell|Recept|PETG-recept): /, ''), pris: L[0].pris, slag: kopSlag(L[0].key) } : null;
  } catch { nastaKopCache = null; }
  return nastaKopCache;
}
// ---------- En logisk kedja: printa och sälj det du har – då får du råd med och låser upp nästa recept ----------
const SALJ_KEDJA = ['nyckelring', 'kruka', 'pall', 'mobilstall', 'fagelholk', 'lampskarm', 'dronare', 'skateboard', 'gitarr', 'cykelram', 'pkajak'];
const KEDJA_KRAV = 1;   // sälj så här många av förra receptet innan Ali tar fram nästa
const harKedja = (id) => !VAROR[id]?.recept || harRecept(id);
function kedjaLas(id) {
  const i = SALJ_KEDJA.indexOf(id); if (i <= 0) return '';
  const forra = SALJ_KEDJA[i - 1]; if (!harKedja(forra)) return `Först ${VAROR[forra].namn.toLowerCase()}. Ett recept i taget.`;
  const salt = S.saltTot?.[forra] || 0; if (salt >= KEDJA_KRAV) return '';
  return `Sälj en ${VAROR[forra].namn.toLowerCase()} först – då tar Ali fram nästa recept.`;
}
// Ali visar lagom mycket: det du behöver nu, nästa recept i kedjan och några få val per hylla. Resten bakom "Visa allt".
let aliVisaAllt = false, aliDolda = 0;
// bäst att köpa härnäst först: det dagens uppdrag behöver, sen det du har råd med (billigast först), sist det som är för dyrt eller låst
const aliBehovs = (x) => { const st = STEG[S.steg], id = x.key.replace(/^(m|r|g|pr|pt|t_?):/, ''); const b = typeof st?.bild === 'function' ? st.bild() : st?.bild; return (b && b.replace('byggsats:', '') === id) || x.key.startsWith('g:') ? 0 : 1; };
const aliOrdning = (a, b) => aliBehovs(a) - aliBehovs(b) || (!!a.las - !!b.las) || ((S.mynt < a.pris) - (S.mynt < b.pris)) || a.pris - b.pris;
const HYLLOR = [
  { klass: 'h-recept', ikon: 'recept', namn: 'Tjäna pengar', sub: 'recept – printa och sälj', grupper: [['Recept att sälja', 'Nästa recept']] },
  { klass: 'h-petg', ikon: 'rulle', namn: 'Röd PETG', sub: 'tunga saker → dyra saker', grupper: [['Röd PETG', 'Kvarn, skrivare och recept']] },
  { klass: 'h-unik', ikon: 'stjarna', namn: 'Unika fynd', sub: 'finns bara en gång', grupper: [['Rolfs önskan', 'Rolfs önskan'], ['Present till Rolf', 'Present till Rolf'], ['Alis prototyper – en av varje', 'Alis prototyper']] },
  { klass: 'h-hem', ikon: 'hus', namn: 'Hemmet', sub: 'bygg, tapetsera och inred', grupper: [['Bygg ut hemmet', 'Bygga'], ['Tapeter – för skjulet och boden', 'Tapeter'], ['Inredning', 'Inredning']] },
  { klass: 'h-upp', ikon: 'kugghjul', namn: 'Fabriken', sub: 'nya maskiner och förbättringar', grupper: [['Material', 'Filament'], ['Uppgraderingar – bär mer, gör snabbare', 'Nya maskiner'], ['Trimning – tar aldrig slut', 'Trimma (nivåer)']] },
];
// varje hylla har sin färg: recept guld, hemmet trä, uppgraderingar blå, inredning lila, tapeter turkos, material grå, trimning cyan
const hyllKlass = (sk) => /^Röd PETG/.test(sk) ? 'h-petg' : /^Recept/.test(sk) ? 'h-recept' : /hemmet/.test(sk) ? 'h-hem' : /^Uppgrad/.test(sk) ? 'h-upp' : /^Inredning/.test(sk) ? 'h-inred' : /^Tapeter/.test(sk) ? 'h-tapet' : /^Material/.test(sk) ? 'h-mat' : /^Trimning/.test(sk) ? 'h-trim' : 'h-ovrigt';
const HYLL_IKON = { 'h-recept': 'recept', 'h-hem': 'hus', 'h-upp': 'kugghjul', 'h-inred': 'soffa', 'h-tapet': 'hus', 'h-mat': 'rulle', 'h-trim': 'trim' };
const HYLL_SUB = { 'h-recept': 'printa och sälj – tjäna pengar', 'h-hem': 'bygg ditt hem', 'h-inred': 'mysigt – ger trivsel', 'h-mat': 'filament att printa med' };
const ALI_MAX = { 'Inredning': 3, 'Uppgraderingar – bär mer, gör snabbare': 3, 'Tapeter – för skjulet och boden': 2, 'Alis prototyper – en av varje': 2, 'Trimning – tar aldrig slut': 3 };
// ---------- Punkt AK: säljvara eller uppgradering ----------
// säljvara = ett recept du printar och säljer till Ali · uppgradering = allt som gör dig snabbare, starkare eller trivsammare
function kopSlag(key) {
  const k = String(key || ''), [sl, id] = k.includes(':') ? k.split(/:(.*)/s) : ['', k];
  if (k === 'filament' || sl === 'pr' || sl === 'g' || sl === 'pt') return null;   // material, presenter och prototyper är varken eller
  const v = VAROR[id];
  if ((sl === 'r' || (!sl && v)) && v?.pris > 0 && !v.lyx && !v.hem) return 'salj';
  return 'upp';
}
// slaget för en sak i ryggsäcken eller ett dagsmål (typ som 'kruka', 'byggsats:grip', 'sang')
const slagForTyp = (typ) => !typ ? null : String(typ).startsWith('byggsats:') ? 'upp' : VAROR[typ]?.pris > 0 && !VAROR[typ].lyx && !VAROR[typ].hem && !VAROR[typ].niva ? 'salj' : VAROR[typ]?.pris > 0 && VAROR[typ].niva ? 'salj' : (VAROR[typ]?.hem || VAROR[typ]?.lyx || MASKINER[typ]) ? 'upp' : null;
const slagChip = (slag, liten = false) => slag ? `<span class="kop-slag ${slag}${liten ? ' liten' : ''}" title="${KOP_SLAG[slag].namn === 'SÄLJVARA' ? 'Säljvara – printa och sälj till Ali' : 'Uppgradering – gör dig snabbare, starkare eller trivsammare'}">${ik(KOP_SLAG[slag].ikon)}${liten ? '' : `<b>${KOP_SLAG[slag].namn}</b>`}</span>` : '';
// raden under märket: "Ger 60 kr st · 400 g" eller "Du får …" / "+12 trivsel"
function slagRad(x) {
  const slag = kopSlag(x.key); if (!slag) return '';
  const [, id] = String(x.key).includes(':') ? String(x.key).split(/:(.*)/s) : ['', x.key];
  if (slag === 'salj') { const v = VAROR[id]; return `Ger ${saljPris(id).toLocaleString('sv-SE')} kr st · ${v.gram.toLocaleString('sv-SE')} g`; }
  const tr = MASKINER[id]?.trivsel || VAROR[id]?.trivsel;
  const g = MASKINER[id]?.ger?.()?.[1];
  if (g) return `Du får: ${g.charAt(0).toLowerCase() + g.slice(1)}`;
  if (tr) return `+${tr} trivsel`;
  return x.far?.[0] ? `Du får: ${String(x.far[0]).replace(/^Du får:? /, '')}` : '';
}
function aliSalla(L) {
  const recept = L.filter((x) => x.sekt === 'Recept att sälja');
  const kedjaNasta = SALJ_KEDJA.find((id) => !harKedja(id));
  let ut = L.filter((x) => x.sekt !== 'Recept att sälja');
  const nasta = recept.find((x) => x.key === 'r:' + kedjaNasta) || recept.filter((x) => !SALJ_KEDJA.includes(x.key.slice(2)))[0];
  if (nasta) { const las = kedjaLas(nasta.key.slice(2)); if (las) { nasta.las = las; nasta.faktaLista = [['las', las, 'varn'], ...nasta.faktaLista]; } ut.push(nasta); }
  return { lista: ut, dolda: 0 };
}
// "Du får": vad köpet ger, först på varje kort hos Ali, och en liten grön bricka på rutan
const uiRutaBricka = (bricka, o) => { const h = uiRuta(o); return bricka ? h.replace('</button>', `<span class="ali-bricka">${rens(bricka)}</span></button>`) : h; };
const uiRutaSlag = (slag, bricka, o) => { const h = uiRutaBricka(bricka, o); return slag ? h.replace('</button>', `${slagChip(slag, true)}</button>`) : h; };
function aliDuFar(x) {
  const [slag, id] = String(x.key).split(/:(.*)/s), far = []; let bricka = '';
  const st = STEG[S.steg], malT = st ? stegText(st) : '';
  const hjalper = (typ, triv) => st && (st.bild === typ || (triv && /trivsel/i.test(malT)));
  if (slag === 'm' && MASKINER[id]) {
    const m = MASKINER[id], g = m.ger?.();
    if (g) { far.push(g[1]); bricka = g[0]; }
    if (m.trivsel) { far.push(trivselRad(m.trivsel)); if (!bricka) bricka = `+${m.trivsel} ♥`; }
    if (hjalper('byggsats:' + id, !!m.trivsel)) far.push(`Hjälper målet: ${malT}`);
  } else if (slag === 'r' && VAROR[id]) {
    const v = VAROR[id];
    if (v.pris > 0) {
      const p = saljPris(id);
      far.push(`Ali betalar ${p.toLocaleString('sv-SE')} kr styck`, `≈ ${Math.round(p / v.gram * RULLE).toLocaleString('sv-SE')} kr per rulle`, `Lönar sig efter ${Math.max(1, Math.ceil(x.pris / p))} st`);
      bricka = `+${p} kr`;
    }
    if (v.trivsel) { far.push(trivselRad(v.trivsel)); if (!bricka) bricka = `+${v.trivsel} ♥`; }
    if (hjalper(id, !!v.trivsel)) far.push(`Hjälper målet: ${malT}`);
  } else if (x.key === 'sang') { const n = VAROR.sang?.trivsel; if (n) { far.push(trivselRad(n)); bricka = `+${n} ♥`; } if (hjalper('sang', true)) far.push(`Hjälper målet: ${malT}`); }
  else if (slag === 't' && TRIM[id]) far.push(TRIM[id].beskr(trimNiva(id) + 1));
  else if (slag === 'g') far.push('Rolf blir glad – och lägger något i postlådan');
  else if (slag === 'pr') far.push('Rolf ger dig något som inte går att köpa');
  else if (x.key === 'filament') far.push('En hel rulle direkt');
  return { far, bricka };
}
function aliKopInfo(vald, medKnapp = false) {
  const sl = kopSlag(vald.key), sr = slagRad(vald);
  return `<div class="ali-info">${sl ? `<div class="ali-slag">${slagChip(sl)}${sr ? `<span class="ali-slag-rad ${sl}">${rens(sr)}</span>` : ''}</div>` : ''}<b>${rens(vald.namn)}</b>${vald.far?.length ? `<div class="ali-far"><small>Du får</small>${vald.far.map((t) => `<span>${rens(t)}</span>`).join('')}</div>` : ''}<p>${rens(vald.text || '')}</p>${fakta([['kop', vald.las ? 'Låst' : S.mynt >= vald.pris ? `Kostar ${vald.pris.toLocaleString('sv-SE')} kr` : `Saknar ${(vald.pris - S.mynt).toLocaleString('sv-SE')} kr`, vald.las || S.mynt < vald.pris ? 'minus' : 'plus'], ...(vald.faktaLista || [])])}${medKnapp && !vald.las ? knapp({ text: `Köp · ${vald.pris.toLocaleString('sv-SE')} kr`, typ: S.mynt >= vald.pris ? 'plus' : 'neutral', attr: `data-kop${S.mynt >= vald.pris ? '' : ' disabled'}`, ikon: 'kop' }) : ''}</div>`;
}
const DAG1_ALI = ['m:gammalkvarn', 'm:cykelbatteri', 'm:grip', 'm:kvarnmotor', 'sang', 'r:kruka', 'r:pall'];
function aliKopLista() {
  const L = [];
  const add = (sekt, key, bild, namn, text, pris, faktaLista, kop) => L.push({ sekt, key, bild, namn, text, pris, faktaLista, kop, storlek: key.startsWith('m:') ? storlekRuta(key.slice(2), true) : key.startsWith('r:') ? storlekFor(key.slice(2)) : key === 'sang' ? 1 : 0 });
  add('Material', 'filament', tumme('rulle'), 'Filamentrulle', 'En hel rulle. Dyrare än att mala skräp – men du slipper vänta.', FILAMENT_KOP.pris, [['rulle', '1 rulle']], () => {
    if (!harRumFor('rulle')) { aliRepl = 'Var ska du bära den? Ryggsäcken är full.'; return false; }
    if (!rullePlats()) { aliRepl = 'Du bär redan så många du orkar. Printa först.'; return false; }
    laggTill('rulle'); aliRepl = 'En rulle. Nyspolad. Ta den.'; return true;
  });
  // Rolfs önskan: Ali har ritningen (billig – det ska aldrig vara pengarna som stoppar dig)
  { const gv = aktivGava(); if (gv && !harGava(gv) && !S.ritningar.includes('gava:' + gv)) {
    const v = VAROR[gv], pris = gavaRitningPris(gv);
    add('Rolfs önskan', 'g:' + gv, tumme(gv), '3D-modell: ' + v.namn, `Det Rolf bad om. Printa den och lägg den i hans brevlåda vid grinden.`, pris, [['rulle', rullar(v.gram)]], () => { S.ritningar.push('gava:' + gv); aliRepl = gv === 'olhallare' ? 'Ölhållare? Till sopgubben? Ja ja. Den är bra. Kylklampen var min idé.' : 'Till Rolf igen? Han borde betala mig direkt.'; return true; });
  } }
  if ((S.ritningar.includes('kvarnmotor') || S.kvarn.motor || S.dag > 1) && !S.ritningar.includes('sang') && !harSang())
    add('Bygg ut hemmet', 'sang', tumme('sang'), '3D-modell: Säng', 'En riktig säng till skjulet. Slut på det kalla golvet.', SANG_INSTRUKTION, [['rulle', '2 rullar']], () => { S.ritningar.push('sang'); aliRepl = 'Sov gott, min vän.'; return true; });
  if (S.hem?.tapeter || S.bod) for (let i = 0; i < TAPETER.length; i++) {
    const id = 'tapet_' + i, pris = TAPETER[i].pris || 200;
    if (antalInv(id) || (S.hem?.tapet === i && (!S.bod || S.bodTapet === i))) continue;   // redan köpt eller uppsatt
    add('Tapeter – för skjulet och boden', 't_' + id, tumme(id), TAPETER[i].namn, 'Ställ dig i skjulet eller gamingboden, välj tapetrullen och klicka. Den sitter direkt.', pris,
      [['hus', 'Funkar i skjulet och boden']], () => { if (!harRumFor(id)) { aliRepl = 'Fickorna är fulla.'; return false; } laggTill(id); aliRepl = i === 0 ? 'Den fula igen? Okej. Smaken är som baken.' : 'Bra tapet. Min fru valde samma. Jag hatar den.'; return true; });
  }
  if (S.kapitel >= 2) for (const [id, v] of Object.entries(VAROR)) {
    if (!v.proto || (S.proto || []).includes(id)) continue;
    const tidig = S.kapitel < 4, last = tidig || aliKunskap() < v.proto.lar;   // Alis drömhylla: syns från kapitel 2, går att köpa i kapitel 4
    add('Alis prototyper – en av varje', 'pt:' + id, tumme(id), v.namn, tidig ? `Alis drömhylla. Han bygger den när du har kommit långt – i kapitel 4. ${v.beskr}` : last ? `Ali har inte lärt sig bygga den än. Printa fler av hans ritningar (${aliKunskap()}/${v.proto.lar}).` : v.beskr, v.proto.pris,
      [['stjarna', 'Unik – går inte att printa'], tidig ? ['las', 'Låst till kapitel 4', 'varn'] : last ? ['las', `Låst: Ali behöver ${v.proto.lar - aliKunskap()} till`, 'varn'] : null].filter(Boolean),
      () => { if (tidig) { aliRepl = 'Inte än. Den här är min dröm. Drömmar tar tid. Kapitel fyra, typ.'; return false; } if (last) { aliRepl = 'Inte än. Jag lär mig fortfarande. Printa mina ritningar så lär jag mig fortare.'; return false; } if (!harRumFor(id)) { aliRepl = 'Fickorna är fulla.'; return false; }
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
    if (!['bord', 'bank', 'sol', 'solpark', 'skrivare2', 'skrivare3', 'vaggar', 'fonster'].includes(id) && antalInv('byggsats:' + id)) continue;   // redan köpt och printad – ligger i förrådet
    add(m.hem || m.flik === 'hem' ? 'Bygg ut hemmet' : m.flik === 'petg' ? 'Röd PETG' : 'Uppgraderingar – bär mer, gör snabbare', 'm:' + id, tumme('byggsats:' + id), '3D-modell: ' + m.namn + (DUBBEL_PRIS.includes(id) && antalAv(id) ? ` (nr ${antalAv(id) + 1})` : ''), m.beskr + (DUBBEL_PRIS.includes(id) && antalAv(id) ? ' Varje ny blir dubbelt så dyr.' : ''), ritPris(id),
      [['rulle', `${rullKort(m.gram * m.delar)} rullar totalt`], ['kugghjul', `${m.delar} delar: ${(DEL_NAMN[id] || []).join(', ').toLowerCase()}`]],
      () => { if (m.direkt) return kopDirekt(id); S.ritningar.push(id); aliRepl = ALI_KOP_REPL[id] || 'Bra val. 3D-modellen är din. Den räcker till en.'; ui.toast(`3D-modell köpt – printa ${m.namn.toLowerCase()} på skrivaren`, 'guld'); return true; });
    if (m.direkt) Object.assign(L[L.length - 1], { namn: m.namn, faktaLista: [['stjarna', 'Begagnad – ingen print']] });
  }
  for (const [id, v] of Object.entries(VAROR)) {
    if (!v.recept || harRecept(id) || !v.syns()) continue;
    if (v.lyx && (placerade.some((x) => x.userData?.typ === id || x.typ === id) || S.placerade?.some((x) => x.typ === id) || antalInv(id))) continue;   // redan printad
    if (v.lyx) add('Inredning', 'r:' + id, tumme(id), '3D-modell: ' + v.namn, `”${v.lyx}”`, v.recept, [['hjarta', `Trivsel +${v.trivsel}`], ['rulle', `${rullKort(v.gram)} rullar`], ['skrivare', `Skrivare ${STORLEK_NAMN[storlekFor(id)]}`, storlekFor(id) > storstaSkrivare() ? 'varn' : '']],
      () => { S.ritningar.push('recept:' + id); aliRepl = `Min ${sakNamn(v.namn)}… AI:n och jag gjorde den i natt. Printa den. Snälla.`; return true; });
    else if (v.niva === 2) add('Röd PETG', 'r:' + id, tumme(id), 'PETG-recept: ' + v.namn, 'Printas på PETG-skrivaren med röd PETG. Dyrt att sälja – röd PETG är värd mycket mer än vanlig plast.', v.recept,
      [['mynt', `Ali betalar ${v.pris} kr`, 'plus'], ['rulle', `${Math.round(v.pris / v.gram * RULLE)} kr per rulle röd PETG`], ['skrivare', 'PETG-skrivaren', harPlacerat('skrivarepetg') ? '' : 'varn']],
      () => { S.ritningar.push('recept:' + id); aliRepl = `${v.namn}. Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej.`; return true; });
    else add('Recept att sälja', 'r:' + id, tumme(id), 'Recept: ' + v.namn, 'Printa hur många du vill och sälj till Ali. Varje du säljer samma dag sänker priset 10 % – aldrig under halva.', v.recept,
      [['mynt', `Ali betalar ${v.pris} kr`, 'plus'], ['rulle', `${Math.round(v.pris / v.gram * RULLE)} kr per rulle`], ['skrivare', `Skrivare ${STORLEK_NAMN[storlekFor(id)]}`, storlekFor(id) > storstaSkrivare() ? 'varn' : '']],
      () => { if (kedjaLas(id)) { aliRepl = kedjaLas(id); return false; } S.ritningar.push('recept:' + id); aliRepl = `${v.namn}? Bra val. Folk köper sånt. Jag vet inte varför.`; return true; });
  }
  for (const [k, t] of Object.entries(TRIM)) {
    if (!t.tidig && S.kapitel < 3) continue;   // trimning är kapitel 3 – rullhållaren (tidig) får finnas från start
    if (t.syns && !t.syns()) continue;
    add('Trimning – tar aldrig slut', 't:' + k, trimBild(k), `${t.namn} nivå ${trimNiva(k) + 1}`, t.beskr(trimNiva(k) + 1) + (trimNiva(k) ? ` (nu: ${t.beskr(trimNiva(k)).toLowerCase()})` : ''), trimPris(k), [['oandlig', `Nivå ${trimNiva(k)} → ${trimNiva(k) + 1}`]],
      () => { S.trim = { ...(S.trim || {}), [k]: trimNiva(k) + 1 }; aliRepl = ['AI:n och jag optimerade hela natten. Ingen sömn. Värt det.', 'Trimmad. Snabbare än min pappa någonsin var.', 'Nästa nivå kostar mer. Så funkar teknik. Och mitt liv.'][Math.floor(Math.random() * 3)]; ui.toast(`${t.namn} nivå ${trimNiva(k)}: ${t.beskr(trimNiva(k))}`, 'guld'); return true; });
  }
  // punkt AL: dag 1 visar Ali bara stegen i dagens mål – rullställ, dörr och resten kommer från dag 2
  if (S.dag <= 1) for (let i = L.length - 1; i >= 0; i--) if (!DAG1_ALI.includes(L[i].key)) L.splice(i, 1);
  for (const x of L) Object.assign(x, aliDuFar(x));
  const { lista, dolda } = aliSalla(L); aliDolda = dolda;
  return lista;
}
// trimningens bild: saken som blir bättre + en bricka med vad som händer
const TRIM_BILD = { kvarn: [null, '+25 % fart', 'kvarn'], skrivare: ['skrivare2', '+20 % fart'], pris: [null, '+10 % kr', 'mynt'], sopbil: [null, '+3 skräp', 'lastbil'], batteri: ['bank', '+100 ström'], utlager: ['rulle', 'fler rullar'], band: ['matarband', 'snabbare band'], arm: ['lastarm', 'lyfter mer'] };
function trimBild(k) {
  const [typ, txt, ikon] = TRIM_BILD[k] || [null, '', 'trim'];
  let bild = ''; try { bild = typ ? tumme(typ, 50) : ''; } catch { bild = ''; }
  if (!bild || bild.includes('ui-ik')) bild = `<span class="ph-trim-ik">${IKON[ikon] || IKON.trim}</span>`;
  return `<span class="ph-trimbild">${bild}<i>${txt}</i></span>`;
}
// bara rena säljvaror är förbockade – lyx, hemsaker, byggsatser och material säljs aldrig av misstag
const saljMarkerad = (t) => S.saljVal?.[t] ?? (SALJ_KEDJA.includes(t) || !!VAROR[t]?.niva);
function aliSaljLista() {
  const ager = {};
  Object.assign(ager, allaAgda());
  const gv = aktivGava();
  return Object.entries(ager).filter(([t, n]) => n > 0 && saljPris(t) && t !== gv).map(([t, n]) => ({ key: 's:' + t, typ: t, n, pris: prisNu(t), bas: saljPris(t), grupp: saljGrupp(t) }));
}
// det Ali inte köper: mammas burkar, Rolfs presenter till dig, sällsynta fynd – och gåvan Rolf väntar på
function aliEjLista() {
  const ager = {};
  Object.assign(ager, allaAgda());
  const gv = aktivGava();
  return Object.entries(ager).filter(([t, n]) => n > 0 && (t === gv || !saljPris(t)) && (VAROR[t] || t.startsWith('byggsats:'))).map(([t, n]) => ({ typ: t, n }));
}
const SALJ_GRUPPER = ['Dina printar', 'Gåvor du printat', 'Material', 'Byggsatser och maskiner', 'Köpt hos Ali'];
function saljGrupp(t) {
  if (t.startsWith('byggsats:')) return 'Byggsatser och maskiner';
  if (t === 'rulle' || /^(rulle|fynd)[2-5]$/.test(t)) return 'Material';
  if (t.startsWith('tapet_') || VAROR[t]?.present || VAROR[t]?.proto) return 'Köpt hos Ali';
  if (ROLF.some((x) => x.vara === t) || VAROR[t]?.gava) return 'Gåvor du printat';
  return 'Dina printar';
}
const ALI_NEJ = {
  burk: 'Mammas sylt? Sånt köper jag inte. Ät upp den.',
  mogel: 'Den där har mögel. Ut ur min butik med den.',
  rolf: 'Det där fick du av Rolf. Sånt säljer man inte. Har du inget hjärta?',
  sallsynt: 'Det där är sällsynt. Behåll det. Jag har inte råd ändå.',
  trumstockar: 'Rolfs trumstockar? Aldrig. Han skulle gråta.',
  rulle: 'Rullar köper jag inte än. Printa nåt av den i stället.',
  gava: 'Den där är till Rolf. Lägg den i hans brevlåda vid grinden.',
};
function aliNejFor(t) {
  if (t === aktivGava()) return ALI_NEJ.gava;
  if (t === 'rulle') return ALI_NEJ.rulle;
  if (t === 'trumstockar') return ALI_NEJ.trumstockar;
  if (t.startsWith('burk_mogel')) return ALI_NEJ.mogel;
  if (t.startsWith('burk_')) return ALI_NEJ.burk;
  if (t.startsWith('r_')) return ALI_NEJ.rolf;
  return ALI_NEJ.sallsynt;
}
let aliSagt = '';
let aliMunTimer = 0;
// Ali minns vad du säljer mest – en gång per sak och dag när du kommer in
const ALI_MINNE = {
  nyckelring: 'Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss.',
  kruka: 'Dina krukor säljer. Tanterna i kvarteret älskar dem.',
  pall: 'Pallarna! En kund satt på en hela förmiddagen. Han köpte inget. Men han satt bra.',
  mobilstall: 'Mobilställen tar slut direkt. Ungdomar. De vet inte var de ska lägga telefonen annars.',
  fagelholk: 'Fågelholkarna! En talgoxe flyttade in innan jag ens hann sälja den.',
  lampskarm: 'Lampskärmarna gör butiken mysig. Jag behöll en. Säg inget.',
};
function aliMinns() {
  const tot = S.saltTot || {}; const [typ, n] = Object.entries(tot).filter(([t]) => ALI_MINNE[t]).sort((a, b) => b[1] - a[1])[0] || [];
  if (!typ || n < 4) return '';
  const nyckel = `${S.dag}:${typ}`; if ((S.aliMints || []).includes(nyckel)) return '';
  S.aliMints = [...(S.aliMints || []).slice(-20), nyckel]; return ALI_MINNE[typ];
}
function oppnaMarknad() {
  if (ui.butiksOverlay.hidden) handelse('oppnatButik');
  // punkt AX: krukreceptet kommer dag 2 på morgonen, gratis, första gången du öppnar butiken
  if (S.dag >= 2 && !S.ritningar.includes('recept:kruka')) { S.ritningar.push('recept:kruka'); aliRepl = ALI_KRUKA; sparaSnart(); efterPrat('ali', () => ui.toast('Ali gav dig receptet till blomkrukan – gratis', 'guld')); }   // U008: efter Alis hälsning
  // en vy, två nivåer som alltid syns: SÄLJ (grönt – du får pengar) överst, KÖP (rött – det kostar) under
  const kopL = aliKopLista(), saljL = aliSaljLista(), ejL = aliEjLista();
  const hitta = (k) => k?.startsWith('s:') ? saljL.find((x) => 's:' + x.key === k) : k?.startsWith('k:') ? kopL.find((x) => 'k:' + x.key === k) : null;
  if (!hitta(aliVald)) aliVald = saljL[0] ? 's:' + saljL[0].key : kopL[0] ? 'k:' + kopL[0].key : null;
  const vald = hitta(aliVald), iKop = aliVald?.startsWith('k:');
  if (!S.aliMott) { S.aliMott = true; aliRepl = ALI_FORSTA; sparaSnart(); }
  const k = S.kapitel || 1;   // punkt BD: Alis båge följer kapitlen
  const pool = k <= 1 ? ALI_HEJ : k === 2 ? [...ALI_HEJ, ...ALI_KLICKAR] : k === 3 ? [...ALI_KLICKAR, ...ALI_BLOMMAR] : ALI_BLOMMAR;
  const hej = S.aliHejDag !== S.dag ? (S.aliHejDag = S.dag, pool[Math.floor(Math.random() * pool.length)]) : aliSagt || pool[0];   // punkt BD: max en hälsning per dag
  const bubbla = aliRepl || aliMinns() || hej;
  let kropp = '', fot = '';
  // SÄLJ
  const markL = saljL.filter((x) => saljMarkerad(x.typ)), allt = markL.reduce((a, x) => a + summaFor(x.typ, x.n), 0);
  let saljHtml = `<div class="ali-niva salj"><div class="ali-niva-rub"><span>${ik('salj')} Sälj till Ali</span><small>${markL.length ? 'bocka i det du vill sälja' : 'bocka i det du vill sälja – sen säljer du allt på en gång'}</small>${markL.length ? knapp({ text: `Sälj markerade (${markL.reduce((a, x) => a + x.n, 0)} st)  +${allt.toLocaleString('sv-SE')} kr`, typ: 'plus', attr: 'data-saljallt' }) : ''}</div>`
    + (saljL.length ? '<div class="ali-grupper">' + SALJ_GRUPPER.filter((gr) => saljL.some((x) => x.grupp === gr)).map((gr) => `<div class="ali-grupp"><b>${gr}</b>${grid(saljL.filter((x) => x.grupp === gr).map((x) => `<div class="ali-markwrap${saljMarkerad(x.typ) ? ' pa' : ''}">${uiRuta({ liten: true, bild: tumme(x.typ), attr: `data-val="s:${x.key}"`, vald: 's:' + x.key === aliVald, niva: nivaFor(x.typ), antal: x.n, pris: 'Sälj +' + summaFor(x.typ, x.n), prisTyp: 'plus', titel: namnFor(x.typ), etikett: true })}<button class="ali-mark" data-mark="${x.typ}" title="${saljMarkerad(x.typ) ? 'Markerad – säljs med Sälj markerade' : 'Inte markerad – klicka för att sälja den med de andra'}">${saljMarkerad(x.typ) ? ik('bock') : ''}</button></div>`))}</div>`).join('') + '</div>'
      : '<p class="ui-tom">Du har inget att sälja. Printa saker på skrivaren – de hamnar i din verktygsrad.</p>')
    + (ejL.length ? `<div class="ali-grupp ej"><b>${ik('las')} Ali köper inte</b>${grid(ejL.map((x) => uiRuta({ liten: true, bild: tumme(x.typ), attr: `data-ej="${x.typ}"`, niva: nivaFor(x.typ), antal: x.n, pris: x.typ === aktivGava() ? 'Till Rolf' : x.typ === 'rulle' ? 'Från dag 3' : 'Säljs inte', prisTyp: 'minus', titel: namnFor(x.typ), etikett: true })))}</div>` : '') + '</div>';
  kropp += aliVillHtml();
  // Rolfs önskan finns inte hos Ali – den printar du själv
  { const gv = aktivGava(); if (gv && !harGava(gv)) kropp += `<div class="ali-tips">${ik('gava')} <span><b>Rolfs önskan: ${VAROR[gv]?.namn || gv}</b> – ${S.ritningar.includes('gava:' + gv) ? 'du har 3D-modellen. Printa den på skrivaren under <b>Gåvor</b>' : 'köp 3D-modellen här nere under <b>Rolfs önskan</b>, printa den på skrivaren'} och lägg den i Rolfs brevlåda vid grinden.</span></div>`; }
  // KÖP
  kropp += `<div class="ali-niva kop"><div class="ali-niva-rub"><span>${ik('kop')} Köp av Ali</span><small>det kostar pengar</small></div>`;
  {
    // hyllorna sorteras efter vad sakerna är till för: Rolf · tjäna pengar · hemmet · fabriken
    const rutaK = (x) => uiRutaSlag(kopSlag(x.key), x.bricka, { bild: x.bild, attr: `data-val="k:${x.key}"${tipsSet.has(x) ? ' data-tips' : ''}`, vald: 'k:' + x.key === aliVald, last: !!x.las, dyr: S.mynt < x.pris, pris: '−' + (x.pris >= 1000 ? Math.round(x.pris / 100) / 10 + 'k' : x.pris), prisTyp: S.mynt < x.pris ? 'minus' : 'plus', prisIkon: 'kop', titel: x.namn, storlek: x.storlek, etikett: true });
    // punkt AK: två delar – Saker att sälja (recept) och Uppgraderingar (allt annat, i hyllorna som förut)
    const saljK = kopL.filter((x) => kopSlag(x.key) === 'salj').sort(aliOrdning), uppK = kopL.filter((x) => kopSlag(x.key) !== 'salj');
    const hyllor = HYLLOR.map((h) => ({ ...h, grupper: h.grupper.map(([sekt, namn]) => ({ namn, saker: uppK.filter((x) => x.sekt === sekt).sort(aliOrdning) })).filter((g) => g.saker.length) })).filter((h) => h.grupper.length);
    // en "Köp nästa"-markering per hylla: första saken du har råd med och som inte är låst
    const tipsSet = new Set([saljK.find((x) => !x.las && S.mynt >= x.pris), ...hyllor.map((h) => h.grupper.flatMap((g) => g.saker).find((x) => !x.las && S.mynt >= x.pris))].filter(Boolean));
    kropp += '<div class="ali-tva">' + (saljK.length ? `<div class="ali-del salj"><div class="ali-del-rub">${slagChip('salj')}<b>Saker att sälja</b><small>printa och sälj till Ali</small></div>${grid(saljK.map(rutaK))}</div>` : '')
      + `<div class="ali-del upp"><div class="ali-del-rub">${slagChip('upp')}<b>Uppgraderingar</b><small>bär mer, gör snabbare, bo bättre</small></div>` + '<div class="ali-hyllor">' + hyllor.map((h) => `<div class="ali-hylla ${h.klass}"><div class="ali-hylla-rub">${ik(h.ikon)}<b>${h.namn}</b><small>${h.sub}</small></div><div class="ali-hylla-grupper">${h.grupper.map((g) => `<div class="ali-hylla-grupp">${h.grupper.length > 1 || g.namn !== h.namn ? `<em>${g.namn}</em>` : ''}${grid(g.saker.map(rutaK))}</div>`).join('')}</div></div>`).join('') + '</div>'
      + (Object.values(MASKINER).some((m) => !m.syns()) ? `<p class="ui-tom">${ik('las')} Fler 3D-modeller dyker upp när du kommer vidare – Ali sitter uppe med AI:n varje natt.</p>` : '') + '</div></div>';
  }
  kropp += '</div>' + saljHtml;
  // ett klick på en sak = köp eller sälj direkt. Info om den senast valda visas under Ali (inga knappar längst ner).
  let info = '';
  if (vald && iKop) info = aliKopInfo(vald);
  else if (vald) {
    const bygg = vald.typ.startsWith('byggsats:') || !!VAROR[vald.typ]?.lyx, mattad = !bygg && vald.pris < vald.bas;
    info = `<div class="ali-info"><b>${rens(namnFor(vald.typ))} × ${vald.n}</b><p>${bygg ? 'Ali köper tillbaka den till begagnat pris.' : mattad ? `Ali har redan köpt ${saltIdag(vald.typ)} st idag – imorgon är det fullpris igen.` : 'Ali betalar lite mindre för varje du säljer samma dag.'}</p>${fakta([['mynt', `${vald.pris} kr styck`, 'plus']])}</div>`;
  }
  // två delar: Ali till vänster (stort huvud som pratar, texten under) – butiken till höger
  kropp = `<div class="ali-split"><aside class="ali-sida"><div class="ali-huvud${performance.now() < pratarTill + 400 || bubbla !== aliSagt ? ' pratar' : ''}">${portratt('ali', 150)}</div><div class="ali-tal"><b>Ali</b><p>${bubbla}</p></div>${info}</aside><div class="ali-butik">${kropp}</div></div>`;
  const html = panel({ ikon: 'kop', titel: 'Alis marknad', sub: 'Klicka på en sak: köp den direkt · klicka på det du har längst ner: sälj', resurser: resurserHtml(), kropp, klass: 'ph-ali-panel' });
  // säg bara repliken om den är ny – annars börjar Ali om varje gång du klickar på en sak
  if (bubbla !== aliSagt) prata('ali', bubbla, [ALI_FORSTA, ALI_GAMMALKVARN, ALI_BONUS_FORSTA].includes(bubbla) ? 'STORY' : 'REAKTION');   // punkt BC/BD: välkomsten, bonusen och köttkvarnen är STORY
  aliSagt = bubbla;
  aliRepl = '';
  oppnaRuta(html, (el) => {
    coachLapp(el, 'ali');
    { const hv = el.querySelector('.ali-huvud'); clearInterval(aliMunTimer);
      aliMunTimer = setInterval(() => { if (!hv.isConnected) { clearInterval(aliMunTimer); return; } hv.classList.toggle('pratar', pratarVem === 'ali' && performance.now() < pratarTill); }, 150); }
    el.querySelectorAll('[data-flik]').forEach((k) => { k.onclick = () => { aliFlik = k.dataset.flik; aliVald = null; aliRepl = aliFlik === 'salj' ? 'Visa vad du har. Snabbt.' : 'Titta gärna. Rör inte.'; ljud.plock(); oppnaMarknad(); }; });
    el.querySelectorAll('[data-val]').forEach((k) => {
      // sälj-rutor: ett klick säljer allt av den saken direkt (inget bekräfta)
      k.onclick = () => { const forra = aliVald; aliVald = k.dataset.val; if (aliVald.startsWith('s:')) { salj1(Infinity); return; } if (aliVald.startsWith('k:')) { const x = kopL.find((y) => 'k:' + y.key === aliVald); if (x?.las) { aliRepl = x.las; ljud.fel(); oppnaMarknad(); return; } 
        if (x && S.mynt >= x.pris) { kopDirekt(x); return; } if (x) { aliRepl = `Den kostar ${x.pris} kr. Du har ${S.mynt}. Printa och sälj mer.`; ljud.fel(); oppnaMarknad(); return; } } aliRepl = bubbla; ljud.plock(); oppnaMarknad(); };
      k.ondblclick = () => el.querySelector('[data-kop],[data-salj1]')?.click();
      // håll musen över en köp-ruta: "Du får" syns i rutan till vänster innan du köper
      if (k.dataset.val.startsWith('k:')) k.onpointerenter = () => { const x = kopL.find((y) => 'k:' + y.key === k.dataset.val); if (!x) return; const box = el.querySelector('.ali-info'); const ny = aliKopInfo(x); if (box) box.outerHTML = ny; else el.querySelector('.ali-sida')?.insertAdjacentHTML('beforeend', ny); };
    });
    function kopDirekt(x) {
      const forut = S.mynt; S.mynt -= x.pris;
      if (x.kop() === false) { S.mynt = forut; ljud.fel(); oppnaMarknad(); return; }
      matKop(x.namn, x.pris); ljud.kop(); sparaSnart(); handelse('kopt', { sak: String(x.key).split(':').pop() }); oppnaMarknad();
    }
    const kb = el.querySelector('[data-kop]');
    if (kb) kb.onclick = () => {
      const x = kopL.find((y) => 'k:' + y.key === aliVald); if (!x || S.mynt < x.pris) return;
      const forut = S.mynt; S.mynt -= x.pris;
      if (x.kop() === false) { S.mynt = forut; ljud.fel(); oppnaMarknad(); return; }
      matKop(x.namn, x.pris); ljud.kop(); sparaSnart(); handelse('kopt', { sak: String(x.key).split(':').pop() }); oppnaMarknad();
    };
    const salj1 = (n) => {
      const x = saljL.find((y) => 's:' + y.key === aliVald); if (!x) return;
      const t = x.typ; n = Math.min(n, antalInv(t)); if (!n) return;
      const summa = summaFor(t, n); taBortInv(t, n);
      if (!t.startsWith('byggsats:') && !VAROR[t]?.lyx) { S.saltIdag = { ...(S.saltIdag || {}), [t]: saltIdag(t) + n }; S.saltTot = { ...(S.saltTot || {}), [t]: (S.saltTot?.[t] || 0) + n }; }
      S.mynt += summa; S.stat.salt += n; ljud.mynt(); myntRegn(summa);
      giAliBonus();
      const nm = namnFor(t).toLowerCase();
      aliRepl = t === aliVill() && saltIdag(t) <= n ? `${nm[0].toUpperCase() + nm.slice(1)}! Precis vad jag ville ha idag. ${summa} kr – med extra.` : saltIdag(t) >= 4 ? `${saltIdag(t)} ${nm} idag?! Vem ska köpa alla? Här, ${summa} kr. Gör nåt annat imorgon.` : n > 1 ? `${n} st. Okej. ${summa} kr. Säljer de inte är det ditt fel.` : `${nm[0].toUpperCase() + nm.slice(1)}. Okej. ${summa} kr.`;
      if (aliBonus) { aliRepl = aliBonus; aliBonus = false; }
      sparaSnart(); oppnaMarknad();
    };
    const s1 = el.querySelector('[data-salj1]'); if (s1) s1.onclick = () => salj1(1);
    { const va = el.querySelector('[data-visaallt]'); if (va) va.onclick = () => { aliVisaAllt = !aliVisaAllt; oppnaMarknad(); }; }
    el.querySelectorAll('[data-ej]').forEach((k) => { k.onclick = () => { aliRepl = aliNejFor(k.dataset.ej); ljud.fel(); oppnaMarknad(); }; });
    const sx = el.querySelector('[data-saljallt]'); if (sx) sx.onclick = () => {
      let summa = 0, antal = 0;
      for (const x of saljL) { if (!saljMarkerad(x.typ)) continue; const n = antalInv(x.typ); if (!n) continue; const su = summaFor(x.typ, n); taBortInv(x.typ, n); if (!x.typ.startsWith('byggsats:') && !VAROR[x.typ]?.lyx) { S.saltIdag = { ...(S.saltIdag || {}), [x.typ]: saltIdag(x.typ) + n }; S.saltTot = { ...(S.saltTot || {}), [x.typ]: (S.saltTot?.[x.typ] || 0) + n }; } summa += su; antal += n; }
      S.mynt += summa; S.stat.salt += antal; ljud.mynt(); myntRegn(summa);
      giAliBonus();
      aliRepl = antal === 1 ? `Okej. ${summa} kr.` : `Allt?! ${antal} saker. Jag behöver ett större lager. Här: ${summa.toLocaleString('sv-SE')} kr.`;
      if (aliBonus) { aliRepl = aliBonus; aliBonus = false; }
      ritaHotbar(); ritaHand(); sparaSnart(); oppnaMarknad();
    };
    const sa = el.querySelector('[data-saljalla]'); if (sa) sa.onclick = () => salj1(999);
    el.querySelectorAll('[data-mark]').forEach((k) => { k.onclick = (e) => { e.stopPropagation(); const t = k.dataset.mark; S.saljVal = { ...(S.saljVal || {}), [t]: !saljMarkerad(t) }; ljud.plock(); sparaSnart(); oppnaMarknad(); }; });
  });
}

interaktor.registrera(kista, { text: () => `📦 Öppna kistan – ${antalIForrad()} saker i förvar`, aktivera: () => oppnaInv() });
interaktor.registrera(matarband, {
  kanAktivera: () => !!S.kvarn.band,
  text: () => {
    const n = S.vald === 0 || niva() === MAGNET_NIVA ? hand.saker.length : 0;
    if (n) return `Töm ${n} skräp i containern – bandet matar kvarnen åt dig`;
    return `🗑️ Skräpcontainern: ${S.kvarn.binge.length}/${BINGE_MAX} skräp · ` + (!S.kvarn.binge.length ? 'tom – töm skräp här' : S.kvarn.tratt >= TRATT_MAX ? 'väntar – tratten är full' : S.strom <= 0.5 ? '⚠️ står still – ingen ström!' : 'rullar skräp till tratten');
  },
  aktivera: () => {
    let n = 0;
    while (hand.overst?.userData.typ === 'skrap' && S.kvarn.binge.length < BINGE_MAX) {
      const fran = hand.overst.getWorldPosition(new THREE.Vector3()), x = hand.lagg(); S.kvarn.binge.push(x.userData.gram || 200);
      setTimeout(() => skickaSkrap(x, fran, bingePunkt(0.45, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.4), { dur: 0.55, tratt: false }), n * 80); n++;
    }
    if (valdKarra()) { while (S.karraLast.length && S.kvarn.binge.length < BINGE_MAX) { const v = S.karraLast.pop(); const so = SKRAP_SORTER[skrapSort(v)]; if (so.tung) { S.karraLast.push(v); break; } S.kvarn.binge.push(so.tung ? -so.gram : so.gram); n++; } ritaKarraLast(); }
    if (n) { S.stat.ilagt += n; if (valdKarra()) S.stat.karraTomt = (S.stat.karraTomt || 0) + 1; ljud.stor(); ui.toast(`🗑️ ${n} skräp i containern – bandet sköter resten`, 'bra'); sparaSnart(); }
    else ui.toast(S.kvarn.binge.length >= BINGE_MAX ? 'Containern är full!' : 'Bär hit skräp och töm det här', '');
  },
});
interaktor.registrera(extruder, { text: () => `Kvarnen pressar ut plasten som en tråd · rullen ${helaRullar() ? 'är full – ta den!' : Math.round(S.kvarn.ut % RULLE / RULLE * 100) + ' %'}`, aktivera: () => {} });
const kistPos = () => kista.getWorldPosition(new THREE.Vector3());
const naraKista = () => { const k = kistPos(); return Math.hypot(spelare.pos.x - k.x, spelare.pos.z - k.z) < KISTA_RACKVIDD; };
// ---------- Inventoryt (E): kistan/säljlådan, ryggsäcken och verktygsraden – klicka för att lyfta och lägga ----------
let invHand = null, invSalj = null, invInfo = null, invRitar = false, invMus = { x: innerWidth / 2, y: innerHeight / 2 };
const INV_OMR = { h: () => S.hotbar, r: () => S.ryggsack, k: () => S.kistan, s: () => invSalj };
const kanILadan = (t) => t !== aktivGava() && !!saljPris(t);
const invFixa = () => { if (S.vald > 0 && !S.hotbar[S.vald]) S.vald = 0; ritaHand(); ritaHotbar(); };
function invFlytta(a, i) {   // shift-klick / dubbelklick: hela högen till andra sidan
  const arr = INV_OMR[a](), p = arr?.[i]; if (!p || (a === 'h' && i === 0)) return;
  const nara = naraKista();
  const mal = a === 'k' || a === 's' ? [['h', 1], ['r', 0]] : invSalj ? [['s', 0]] : nara ? [['k', 0]] : a === 'h' ? [['r', 0]] : [['h', 1]];
  if (mal[0][0] === 's' && !kanILadan(p.typ)) { ui.toast(p.typ === aktivGava() ? 'Det där är Rolfs gåva – den ska till postlådan' : aliNejFor(p.typ) || 'Ali köper inte det där', 'fel'); ljud.fel(); return; }
  let n = p.n;
  for (const [m, fran] of mal) { if (n) n = laggI(INV_OMR[m](), p.typ, n, fran).rest; }
  if (n === p.n) { ui.toast('Det finns ingen plats där', 'fel'); ljud.fel(); return; }
  if (n) p.n = n; else arr[i] = null;
  ljud.plock(); S.forsta = [...new Set([...(S.forsta || []), 'inv:flytt'])];
}
function invKlick(a, i, hoger) {
  const arr = INV_OMR[a](); if (!arr || (a === 'h' && i === 0)) return;
  if (a === 'k' && !naraKista()) { ui.toast('Gå till kistan i skjulet för att ta saker ur den', ''); return; }
  const p = arr[i];
  if (a === 's' && invHand && !kanILadan(invHand.typ)) { ui.toast(invHand.typ === aktivGava() ? 'Det där är Rolfs gåva – den ska till postlådan' : aliNejFor(invHand.typ) || 'Ali köper inte det där', 'fel'); ljud.fel(); return; }
  if (!invHand) {
    if (!p) return;
    if (hoger && p.n > 1) { const n = Math.ceil(p.n / 2); invHand = { typ: p.typ, n }; p.n -= n; } else { invHand = p; arr[i] = null; }
  } else if (hoger) {
    if (!p) arr[i] = { typ: invHand.typ, n: 1 }; else if (p.typ === invHand.typ && p.n < STACK) p.n++; else return;
    if (!--invHand.n) invHand = null;
  } else if (!p) { arr[i] = invHand; invHand = null; }
  else if (p.typ === invHand.typ) { const d = Math.min(STACK - p.n, invHand.n); if (!d) return; p.n += d; invHand.n -= d; if (!invHand.n) invHand = null; }
  else { arr[i] = invHand; invHand = p; }
  invInfo = (arr[i] || invHand)?.typ || invInfo; ljud.plock();
}
function ritaInvHand() {
  let el = document.querySelector('.inv-hand');
  if (!invHand) { el?.remove(); return; }
  if (!el) { el = document.createElement('div'); el.className = 'inv-hand'; document.body.appendChild(el); }
  el.innerHTML = `${ikonHtml(invHand.typ, 48)}${invHand.n > 1 ? `<span>${invHand.n}</span>` : ''}`;
  el.style.left = invMus.x + 'px'; el.style.top = invMus.y + 'px';
}
addEventListener('pointermove', (e) => { invMus = { x: e.clientX, y: e.clientY }; const el = document.querySelector('.inv-hand'); if (el) { el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px'; } });
const ladanSumma = () => { const per = {}; for (const p of invSalj || []) if (p) per[p.typ] = (per[p.typ] || 0) + p.n; return Object.entries(per).reduce((a, [t, n]) => a + summaFor(t, n), 0); };
// stängs inventoryt: det du håller i musen går tillbaka, och det som ligger i säljlådan säljs till Ali
function invAvsluta() {
  if (invHand) { const h = invHand; invHand = null; laggTill(h.typ, h.n); }
  if (invSalj) {
    const per = {}; for (const p of invSalj) if (p) per[p.typ] = (per[p.typ] || 0) + p.n; invSalj = null;
    let summa = 0, st = 0;
    for (const [t, n] of Object.entries(per)) { laggTill(t, n); summa += saljTillAli(t, n); st += n; }
    if (summa) {
      if (!S.swishSms || S.swishSms !== S.dag) { S.swishSms = S.dag; sms('ali', `Swish: +${summa} kr för ${st} saker. Lådan funkar. Jag hämtar varorna när butiken är tom. Alltså hela tiden. /Ali`); }
      else notis(`📱 Swish från Ali: +${summa} kr · ${st} saker ur säljlådan`, 'guld', { tid: 3500 });
    }
  }
  document.querySelector('.inv-hand')?.remove(); invFixa(); sparaSnart();
}
function oppnaInv({ salj = false } = {}) {
  if (ui.butiksOverlay.hidden) spelaLjud('ryggsack');
  if (salj && !invSalj) invSalj = Array(9).fill(null);
  const nara = naraKista();
  const ritStatus = (id) => ['grip', 'magnet', 'korg', 'karra'].includes(id) ? (S[id] ? 'Klar och används' : 'Köpt – printa den')
    : id === 'kvarnmotor' ? (S.kvarn.motor ? 'Monterad på kvarnen' : 'Köpt – printa den')
    : id === 'vaggar' ? `${S.hem?.vagg || 0} av 4 väggar monterade` : id === 'fonster' ? `${fonsterLista().length} av ${FONSTER.max} fönster uppsatta`
    : antalInv('byggsats:' + id) ? 'Printad – välj den och montera' : 'Köpt – printa den';
  const prick = (h, typ) => { const sl = slagForTyp(typ); return sl ? h.replace('</button>', `<i class="inv-slag ${sl}" title="${sl === 'salj' ? 'Säljvara' : 'Uppgradering'}"></i></button>`) : h; };   // punkt AK
  const ruta = (a, i, p) => p ? prick(uiRuta({ bild: tumme(p.typ), attr: `data-s="${a}:${i}"`, vald: a === 'h' && S.vald === i, antal: p.n, titel: namnFor(p.typ), pris: a === 's' ? '+' + summaFor(p.typ, p.n) : '', prisTyp: 'plus' }), p.typ) : uiRuta({ tom: true, attr: `data-s="${a}:${i}"` });
  const rad = (a, arr, fran = 0) => `<div class="inv-grid">${arr.map((p, i) => a === 'h' && i === 0
    ? uiRuta({ bild: verktygIkon(46), attr: 'data-s="h:0"', vald: S.vald === 0, antal: hand.saker.length || '', titel: 'Verktyget – sitter fast på plats 1' }) : i < fran ? '' : ruta(a, i, p)).join('')}</div>`;
  const rits = S.ritningar.filter((id) => MASKINER[id]).map((id) => uiRuta({ bild: tumme('byggsats:' + id), attr: `data-r="${id}"`, titel: MASKINER[id].namn }));
  let kropp = '';
  if (invSalj) kropp += sektion(`Säljlådan · Ali swishar +${ladanSumma().toLocaleString('sv-SE')} kr`, 'lägg i det du vill sälja – det säljs när du stänger') + rad('s', invSalj);
  else if (nara) kropp += sektion(`Kistan · ${kistPlatser()}/${S.kistan.length} platser`, 'shift-klick eller dubbelklick flyttar en hel hög') + rad('k', S.kistan);
  kropp += sektion(`Ryggsäcken · ${S.ryggsack.filter(Boolean).length}/${S.ryggsack.length} platser`, invSalj || nara ? '' : 'klicka för att lyfta en sak, klicka igen för att lägga den · högerklick = halva') + rad('r', S.ryggsack)
    + sektion('Verktygsraden', 'det du har här når du med 1–9 och hjulet') + rad('h', S.hotbar)
    + (!nara && !invSalj && antalIForrad() ? `<p class="inv-not">${ik('kista')} ${antalIForrad()} saker ligger i kistan i skjulet.</p>` : '')
    + (rits.length ? sektion('3D-modeller du har köpt', 'printas på skrivaren') + grid(rits) : '');
  const t = invInfo && (antalInv(invInfo) || invHand?.typ === invInfo) ? invInfo : null;
  const fot = t ? detalj({ bild: tumme(t, 72), titel: namnFor(t), text: tipsFor(t) + (saljPris(t) && t !== aktivGava() ? ` Ali betalar ${saljPris(t)} kr styck.` : '') })
    : detalj({ tom: invSalj ? 'Lyft saker till lådan. Allt i lådan säljs när du stänger.' : 'Klicka på en sak för att lyfta den – klicka där den ska ligga.' });
  const html = panel({ ikon: invSalj ? 'mynt' : 'kista', titel: invSalj ? 'Säljlådan' : nara ? 'Kistan och ryggsäcken' : 'Ryggsäcken', sub: `I handen: ${valdTyp() ? namnFor(valdTyp()) : 'verktyget'}`, resurser: resurserHtml(), kropp, fot, klass: 'inv-panel' });
  invRitar = true;
  oppnaRuta(html, (el) => {
    el.querySelectorAll('[data-s]').forEach((k) => {
      const [a, i] = k.dataset.s.split(':');
      k.onclick = (e) => { if (invDrogs) { invDrogs = false; return; } if (e.shiftKey) invFlytta(a, +i); else invKlick(a, +i, false); invFixa(); oppnaInv(); };
      k.oncontextmenu = (e) => { e.preventDefault(); invKlick(a, +i, true); invFixa(); oppnaInv(); };
      k.ondblclick = () => { if (invHand) invKlick(a, +i, false); invFlytta(a, +i); invFixa(); oppnaInv(); };
      k.onpointerenter = () => { if (invDrag) return; const p = INV_OMR[a]()?.[+i]; if (p && p.typ !== invInfo) { invInfo = p.typ; const f = el.querySelector('.ui-detalj'); if (f) f.outerHTML = detalj({ bild: tumme(p.typ, 72), titel: namnFor(p.typ), text: tipsFor(p.typ) + (saljPris(p.typ) && p.typ !== aktivGava() ? ` Ali betalar ${saljPris(p.typ)} kr styck.` : '') }); } };
    });
    el.querySelectorAll('[data-r]').forEach((k) => { k.onclick = () => { const id = k.dataset.r; const f = el.querySelector('.ui-detalj'); if (f) f.outerHTML = detalj({ bild: tumme('byggsats:' + id, 72), titel: MASKINER[id].namn, text: MASKINER[id].beskr, faktaLista: [['recept', ritStatus(id)], ['rulle', `${rullKort(MASKINER[id].gram * MASKINER[id].delar)} rullar`]] }); }; });
    coachLapp(el, 'inv');
    if (nara && !invSalj) coachLapp(el, 'kista');
  });
  invRitar = false; ritaInvHand();
  kistaOppen = nara && !invSalj;
}
// punkt AE: dra och släpp med musen – ett tillägg till klicka-lyfta-lägga
let invDrag = null, invDrogs = false;
function invMalUnder(x, y) {
  const el = document.elementFromPoint(x, y);
  const s = el?.closest?.('[data-s]'); if (s) { const [a, i] = s.dataset.s.split(':'); return { a, i: +i, el: s }; }
  const h = el?.closest?.('.ph-hotbar [data-i]'); if (h) return { a: 'h', i: +h.dataset.i, el: h };
  return null;
}
function invDragStart(e, a, i) {
  if (e.button > 0 || invHand) return;   // har du redan något i handen gäller klicken som förut
  const p = INV_OMR[a]()?.[i]; if (!p || (a === 'h' && i === 0)) return;
  invDrag = { a, i, x: e.clientX, y: e.clientY, igang: false, id: e.pointerId };
}
addEventListener('pointermove', (e) => {
  const D = invDrag; if (!D || e.pointerId !== D.id) return;
  if (!D.igang) {
    if (Math.hypot(e.clientX - D.x, e.clientY - D.y) < 7) return;
    if (D.a === 'k' && !naraKista()) { invDrag = null; return; }
    D.igang = true; invKlick(D.a, D.i, false); if (!invHand) { invDrag = null; return; }
    document.querySelector(`[data-s="${D.a}:${D.i}"]`)?.classList.add('inv-drar');
    ritaInvHand();
  }
  const m = invMalUnder(e.clientX, e.clientY);
  document.querySelectorAll('.inv-over').forEach((x) => { if (x !== m?.el) x.classList.remove('inv-over'); });
  m?.el.classList.add('inv-over');
}, { passive: true });
function invDragSlut(e) {
  const D = invDrag; if (!D || e.pointerId !== D.id) return; invDrag = null;
  document.querySelectorAll('.inv-over,.inv-drar').forEach((x) => x.classList.remove('inv-over', 'inv-drar'));
  if (!D.igang) return;
  invDrogs = true; setTimeout(() => { invDrogs = false; }, 60);
  const m = invMalUnder(e.clientX, e.clientY);
  if (m && !(m.a === D.a && m.i === D.i)) invKlick(m.a, m.i, false);
  // det som är kvar i handen (bytt sak, rest av en full hög, eller släppt utanför) går tillbaka dit det kom ifrån
  if (invHand) {
    const arr = INV_OMR[D.a](), p = arr?.[D.i];
    if (!p) { arr[D.i] = invHand; invHand = null; }
    else if (p.typ === invHand.typ && p.n + invHand.n <= STACK) { p.n += invHand.n; invHand = null; }
    else { const h = invHand; invHand = null; laggTill(h.typ, h.n); }
  }
  invFixa(); oppnaInv();
}
// webbläsarens egen bild-dragning avbryter pekaren (pointercancel) – stäng av den i inventoryt
addEventListener('dragstart', (e) => { if (e.target.closest?.('.inv-panel,.ph-hotbar')) e.preventDefault(); }, true);
addEventListener('pointerup', invDragSlut);
addEventListener('pointercancel', invDragSlut);
// verktygsraden längst ner går också att dra från när inventoryt är öppet
addEventListener('pointerdown', (e) => {
  if (!invRutaOppen()) return;
  const s = e.target.closest?.('.inv-panel [data-s]');
  if (s) { const [a, i] = s.dataset.s.split(':'); invDragStart(e, a, +i); return; }
  const k = e.target.closest?.('.ph-hotbar [data-i]'); if (k) invDragStart(e, 'h', +k.dataset.i);
}, true);
const invRutaOppen = () => !!document.querySelector('.inv-panel');
const oppnaForrad = () => oppnaInv();
// får det plats i verktygsraden och ryggsäcken? (provas på kopior)
const MONTERAS_DIREKT = ['byggsats:grip', 'byggsats:korg', 'byggsats:karra', 'byggsats:magnet', 'byggsats:kvarnmotor', 'byggsats:stortratt', 'byggsats:rullstall', 'byggsats:rullband', 'byggsats:lastarm', 'byggsats:robotarm', 'byggsats:utlada', 'byggsats:ryggsack2'];
function rymsAlla(lista) {
  const h = S.hotbar.map((p) => p && { ...p }), rg = S.ryggsack.map((p) => p && { ...p });
  for (const [t, n] of lista) { if (MONTERAS_DIREKT.includes(t) || t === 'karra' || t === 'magnet') continue; let rest = laggI(h, t, n, 1).rest; if (rest) rest = laggI(rg, t, rest).rest; if (rest) return false; }
  return true;
}
// första gångerna: visa att E öppnar ryggsäcken (inte mitt i dag 1:s första steg)
function invIntro(varfor) {
  S.forsta = S.forsta || [];
  if (S.forsta.includes('inv:e') || (S.dag === 1 && S.steg < SI.kop)) return;
  S.forsta.push('inv:e'); sparaSnart();
  setTimeout(() => replik('du', VARN.ryggsack, varfor === 'full' ? '🎒 Ryggsäcken är full – tryck E för att se vad du har' : '🎒 Du har en ryggsäck nu. Tryck E (eller 🎒-knappen) för att öppna den'), 400);
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
  const kropp = S.sms.length ? S.sms.slice().reverse().map((m, i) => rad({ bild: humorPortratt(vemAvSms(m.fran), m.text, 40), titel: AVSANDARE[m.fran]?.namn || m.fran, text: m.text, ny: !!m.ny,
    hoger: knapp({ text: 'Läs upp', typ: 'neutral', attr: `data-lasupp="${S.sms.length - 1 - i}"`, ikon: 'pil' }) })).join('') : `<p class="ui-tom">Inga meddelanden än.</p>`;
  oppnaRuta(panel({ ikon: 'telefon', titel: 'Meddelanden', sub: olasta ? `${olasta} nya – de läses upp en i taget` : 'Allt läst', flikar: [['sms', 'telefon', 'Meddelanden'], ['dagbok', 'bok', 'Min dagbok'], ['mal', 'mal', 'Mål'], ['brev', 'brev', 'Brev'], ['spel', 'kugghjul', 'Spelet']], aktivFlik: 'sms', kropp }), (el) => {
    el.querySelectorAll('[data-flik]').forEach((k) => { if (k.dataset.flik !== 'sms') k.onclick = () => { dagbokFlik = k.dataset.flik; ljud.plock(); oppnaDagbok(); }; });
    el.querySelectorAll('[data-lasupp]').forEach((k) => { k.onclick = () => { const m = S.sms[+k.dataset.lasupp]; if (m) prata(m.fran, m.text); }; });
  });
}

// ---------- Sparplatser: spara läget, börja om, ladda tillbaka ----------
const PLATSER = 5;
const platsNyckel = (n) => `spar:${SPAR_ID}:plats${n}`;
const platsDoc = (n) => MOLN?.db && MOLN?.id ? MOLN.db.doc(`data/users/${MOLN.id}/${SPAR_ID}_plats${n}`) : null;
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
  if ((S.speltid || 0) > 60) { await sparaPlats(plats, S.spelarNamn || undefined); ui.toast(`Ditt spel sparades på plats ${plats}`, 'bra'); }
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
    if (senaSystem() && S.prestLogg?.length) kropp += sektion('Prestationer', 'Små saker jag har klarat, nyast först') + S.prestLogg.map((x) => { const p = PRESTATIONER.find((y) => y.id === x.id); return p ? rad({ bild: `<span class="ui-headik" style="width:30px;height:30px">${ik('stjarna')}</span>`, titel: rens(p.namn), text: `${rens(p.rad)} · dag ${x.dag}` }) : ''; }).join('');
  } else if (dagbokFlik === 'plan') {   // punkt AS: fabriksplanen ovanifrån
    kropp = sektion('Fabriksplanen', 'Gården ovanifrån – en linje per filament. Låsta linjer öppnas i senare kapitel.') + `<div style="display:flex;justify-content:center;padding:6px 0">${fabriksplanSvg()}</div>`
      + `<p class="ui-tom">Fylld ruta = står på plats. Streckad = ledig. Gul ram = nästa sak att ställa ut.</p>`;
  } else if (dagbokFlik === 'brev') {
    const brev = S.lappar.slice().reverse().filter((l) => !/Dagbok/.test(lappInfo(l)[0])).map((l) => { const [t, x] = lappInfo(l); return rad({ bild: portratt(vemAvTitel(t), 40), titel: rens(t), text: x }); });
    kropp = brev.length ? brev.join('') : '<p class="ui-tom">Inga brev än.</p>';
  } else {
    kropp = sektion('Spelet') + (S.kapitel2Klart ? `<div class="ui-grid" style="gap:10px;margin-bottom:10px">${knapp({ text: `Tippen på tid${tidRekord() ? ' · rekord ' + tidText(tidRekord()) : ''}`, typ: 'plus', attr: 'data-tidtipp', ikon: 'klocka' })}</div><p class="ui-tom">Gården fylls med ${TIDTIPP_N} skräp. Plocka upp allt så fort du kan – klockan går tills det sista är borta.</p>` : '') + `<div class="ui-grid" style="gap:10px">${knapp({ text: 'Se introt igen', typ: 'neutral', attr: 'data-intro', ikon: 'film' })}${knapp({ text: `Namn: ${S.spelarNamn || 'Anonym'} · byt`, typ: 'neutral', attr: 'data-bytnamn', ikon: 'stjarna' })}${knapp({ text: 'Sparplatser', typ: 'neutral', attr: 'data-sparplatser', ikon: 'spara' })}${knapp({ text: 'Ljud: musik, effekter, röster', typ: 'neutral', attr: 'data-ljudval', ikon: 'rost' })}${knapp({ text: `Musik: ${S.musik === false ? 'av' : 'på'}`, typ: 'neutral', attr: 'data-musik', ikon: 'rost' })}${knapp({ text: `Röster: ${{ rost: 'riktiga röster', prat: 'pratljud', tal: 'datorns talsyntes', av: 'av' }[rostLage()]}`, typ: 'neutral', attr: 'data-roster', ikon: 'rost' })}</div>`
      + sektion('Styrning') + `<p class="ui-tom">WASD gå · mus titta · klick/E använd · klicka och håll = veva, gripa och mer · hjulet/1–8 byt sak · H tomhänt · Shift+Q släpp allt · R vrid · I dina saker · M meddelanden · B dagbok · V röster</p>`;
  }
  oppnaRuta(panel({ ikon: 'bok', titel: 'Dagbok', sub: `Dag ${S.dag}`, resurser: resurserHtml(), flikar: [['sms', 'telefon', 'Meddelanden' + (S.olasta ? ` (${S.olasta})` : '')], ['dagbok', 'bok', 'Min dagbok'], ['mal', 'mal', 'Mål'], ['plan', 'kvarn', 'Fabriksplanen'], ['brev', 'brev', 'Brev'], ['spel', 'kugghjul', 'Spelet']], aktivFlik: dagbokFlik, kropp }), (el) => {
    el.querySelector('[data-flik="sms"]')?.addEventListener('click', (e) => { e.stopImmediatePropagation(); ljud.plock(); oppnaInkorg(); }, true);
    el.querySelectorAll('[data-las]').forEach((k) => { k.onclick = () => prata('du', lappInfo(k.dataset.las)[1]); });
    el.querySelectorAll('[data-flik]').forEach((k) => { k.onclick = () => { dagbokFlik = k.dataset.flik; ljud.plock(); oppnaDagbok(); }; });
    el.querySelector('[data-intro]')?.addEventListener('click', () => { ui.stangButik(); ui.slappMus(); visaIntro(); });
    el.querySelector('[data-tidtipp]')?.addEventListener('click', () => { ui.stangButik(); startaTidtipp(); });
    el.querySelector('[data-sparplatser]')?.addEventListener('click', () => oppnaSparplatser());
    el.querySelector('[data-bytnamn]')?.addEventListener('click', () => { ui.slappMus(); fragaNamn(() => oppnaDagbok(), true); });
    el.querySelector('[data-ljudval]')?.addEventListener('click', () => oppnaLjud(el.querySelector('.ui-panel')));
    el.querySelector('[data-musik]')?.addEventListener('click', () => { S.musik = S.musik === false; if (S.musik === false) bakMusik.stopp(); else bakMusik.start(); sparaSnart(); oppnaDagbok(); });
    el.querySelector('[data-roster]')?.addEventListener('click', () => { dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyV' })); setTimeout(oppnaDagbok, 50); });
  });
}

// ---------- UI ----------
const ui = new FpUI({
  touch: false,
  titel: logo({ bredd: 440 }),
  text: '<p>Allt du äger är ett gammalt skjul och storebrors 3D-skrivare.</p><p>Tomten är full av skräp. Men skräp är plast, och plast är filament.</p><p class="br-slogan">Printa dig ett hem.</p>',
  hjalp: 'WASD gå · Mus titta · Klick/E använd · Klicka och håll = veva/gripa · B dagbok & sparplatser<br>Hjulet / 1–8 byt sak · H tomhänt · Shift+Q släpp allt · V röster · I dina saker · B dagbok · M meddelanden · K sparplatser · G flytta gamingboden · R vrid · Q släpp skräp · Shift spring',
  spelare,
  pausaInte: () => sover || julPagar || S.resa === 'pagar' || !!document.querySelector('.ph-kap, .ph-kapkort, .ph-jul, .ph-resa') || !medEl2.hidden,   // B1: ingen pausmeny i scener där muslåset släpps med flit
  onAnvand: (nere) => {
    anvandNere = nere;
    if (gripVerktyg.visible && !nere && gripHaller) gripSlapp();
    gripHaller = nere && gripVerktyg.visible;
    if (!nere) return;
    gripKlick();
    if (interaktor.hovrad === cykel || interaktor.hovrad === vevYta) return;
    if (niva() === MAGNET_NIVA && (!interaktor.hovrad || interaktor.hovrad.userData.typ === 'skrap')) return;
    if (bodSpoke.visible) { byggBodHar(); return; }
    if (VAROR[valdTyp()]?.tapet != null) { tapetsera(valdTyp()); return; }
    if (interaktor.hovrad && !(spoke.grupp?.visible && spoke.bord && paBord(valdTyp()))) { interaktor.aktivera(); return; }
    stallNer();
  },
  onButik: () => oppnaDagbok(),
  onNollstall: () => borjaOm(),
  onSparplatser: () => oppnaSparplatser(),
  onStart: () => { ljudCtx(); setTimeout(() => bakMusik.start(), 4000); setTimeout(familjSms, 2000);
    // Alis bakgrund – även till den som redan sålt sin första sak innan storyn fanns
 if (!S.lappar.includes('start')) visaLapp('start'); else { const st = STEG[S.steg]; if (st?.startLapp && !S.lappar.includes(st.startLapp)) visaLapp(st.startLapp); } },
});
// punkt 15: en toast inom 0,6 s efter ett klick/en tangent är direkt återkoppling (regel 4) och visas direkt.
// Felmeddelanden också. Allt annat (sådant som händer av sig självt) är en sak i kanalen.
{
  let senastInput = -1e9; const in0 = () => { senastInput = performance.now(); };
  addEventListener('pointerdown', in0, true); addEventListener('keydown', in0, true);
  const toast0 = ui.toast.bind(ui);
  ui.toastDirekt = toast0;
  ui.toast = (t, typ = '') => {
    if (typ === 'fel' || performance.now() - senastInput < 600 || !ui.igang || pausad || !ui.butiksOverlay.hidden) return toast0(t, typ);
    kanalLagg({ vikt: 'REAKTION', vem: 'toast:' + String(t).slice(0, 40), text: String(t), rost: false, minMs: 2500, visa: () => toast0(t, typ) });
  };
}
// inventoryt städar efter sig när en meny stängs (musens hög tillbaka, säljlådan säljs)
{ const _stang = ui.stangButik.bind(ui); ui.stangButik = () => { if (!ui.butiksOverlay.hidden) spelaLjud('meny-stang'); invAvsluta(); _stang(); }; }

{ const _p = ui.prompt.bind(ui); ui.prompt = (t) => _p(rens(t)); ui.visaStart = startRuta; if (!ui.igang && !ui.overlay.hidden) startRuta(); }
// startrutan: logga, luftig ingress, STARTA först – sparplatser och börja om bredvid varandra under, alla spel längst ner
function startRuta(titel = ui.o.titel, text = ui.o.text, knappText = 'Starta') {
  ui.igang = false; spelare.aktiv = false;
  const t = rens(titel), ar = t.includes('<svg');
  // har du spelat en stund visas din resa i stället för ingressen: kapitel för kapitel, vad som är klart
  const delar = []; STEG.forEach((x, i) => { const kn = kapitelFor(x.del) > 0 ? `Kapitel ${kapitelFor(x.del)} – ${KAPITEL[kapitelFor(x.del)].namn}` : x.del; let d = delar.find((y) => y.namn === kn); if (!d) delar.push(d = { namn: kn, tot: 0, klara: 0 }); d.tot++; if (i < S.steg) d.klara++; });
  const totPct = Math.round(Math.min(S.steg, STEG.length) / STEG.length * 100);
  const resa = ar && S.steg > 0 ? `<div class="br-resa"><div class="br-resa-topp"><b>Din resa</b><span>Dag ${S.dag} · ${totPct} % av storyn</span></div><div class="br-resa-bar"><i style="width:${totPct}%"></i></div>
    <div class="br-delar">${delar.map((d) => { const klar = d.klara === d.tot, nu = !klar && d.klara > 0 || (!klar && delar.find((y) => y.klara < y.tot) === d); return `<div class="br-del ${klar ? 'klar' : nu ? 'nu' : 'last'}"><span class="b">${klar ? '✓' : nu ? '▶' : ''}</span><span class="n">${rens(d.namn)}</span><span class="r">${klar ? 'Klart' : nu ? `${d.klara}/${d.tot}` : ''}</span></div>`; }).join('')}</div></div>` : '';
  ui.overlay.innerHTML = `<div class="fp-ruta br-start">${ar ? t : `<h1>${t}</h1>`}${resa || `<div class="br-ingress">${rens(text)}</div>`}${resa ? prestHtml() : ''}
    <button class="fp-knapp br-starta">${rens(knappText)}</button>
    <div class="br-val"><button class="br-valknapp" data-sparplatser>${ik('spara')}<span>Sparplatser</span></button><button class="br-valknapp" data-kontroller>${ik('hand')}<span>Kontroller</span></button><button class="br-valknapp" data-ljudval>${ik(S.effekter === false && S.musik === false ? 'tyst' : 'rost')}<span>Ljud</span></button><button class="br-valknapp" data-noll>${ik('omstart')}<span>Börja om</span></button></div>
    <button class="br-tyck" data-tyck>${ik('brev')} Tyck till om spelet</button>
    <a class="fp-tillbaka" href="../../index.html">← Alla spel</a></div>`;
  ui.overlay.hidden = false;
  ui.overlay.querySelector('.br-starta').onclick = () => { if (!S.spelarNamn) fragaNamn(() => ui.starta()); else ui.starta(); };
  ui.overlay.querySelector('[data-sparplatser]').onclick = () => ui.o.onSparplatser?.();
  { const ty = ui.overlay.querySelector('[data-tyck]'); if (ty) ty.onclick = () => oppnaTyckTill(ui.overlay.querySelector('.br-start')); }
  ui.overlay.querySelector('[data-ljudval]').onclick = () => oppnaLjud(ui.overlay.querySelector('.br-start'));
  ui.overlay.querySelector('[data-kontroller]').onclick = () => {
    const pop = document.createElement('div'); pop.className = 'br-bekrafta';
    const K = [['W A S D', 'Gå'], ['Mus', 'Titta'], ['Klick / F', 'Använd, plocka upp'], ['E', 'Ryggsäcken och kistan'], ['Klicka och håll', 'Veva, gripa och mer'], ['Shift', 'Spring'], ['Mellanslag', 'Hoppa'], ['Hjulet / 1–9', 'Byt sak i handen'], ['H', 'Tomhänt'], ['Q', 'Släpp skräp'], ['Shift + Q', 'Släpp allt'], ['R', 'Vrid det du ställer ut'], ['G', 'Flytta gamingboden'], ['B', 'Dagbok och mål'], ['M', 'Alla sms i efterhand'], ['K', 'Sparplatser'], ['V', 'Byt röster'], ['Esc', 'Paus och den här menyn']];
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
.ph-kobort{background:none;border:0;color:#ff8a7a;font:700 13px system-ui;cursor:pointer;padding:0 3px}.ph-saljallt{display:flex;align-items:center;gap:12px;margin:2px 0 6px}.ph-saljallt span{opacity:.7;font-size:13px}
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
.ph-pap-text{font:500 21px/1.5 "Comic Sans MS","Chalkboard SE","Segoe Print",system-ui,sans-serif;text-align:left;margin-bottom:18px;white-space:pre-line}
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
.inv-grid{display:grid;grid-template-columns:repeat(9,minmax(0,1fr));gap:5px;margin-bottom:6px}
.inv-grid .ui-ruta{width:auto;min-width:0;aspect-ratio:1;height:auto;padding:0}
.inv-grid .ui-ruta .bild,.inv-grid .ui-ruta .bild img{width:78%;height:78%;max-width:54px;max-height:54px}
.inv-grid .ui-ruta .bild{display:grid;place-items:center}
.inv-grid .ui-ruta .bild img{width:100%;height:100%}
.inv-over{outline:3px solid #ffd43b!important;outline-offset:-2px;box-shadow:0 0 12px #ffd43b88!important}
.inv-drar{opacity:.35}

.inv-panel img,.ph-hotbar img{-webkit-user-drag:none;user-select:none}
body:has(.inv-panel) .ph-hotbar{z-index:31}
.inv-hand{position:fixed;z-index:200;pointer-events:none;transform:translate(-50%,-50%);filter:drop-shadow(0 4px 8px rgba(0,0,0,.5))}
.inv-hand span{position:absolute;right:-4px;bottom:-4px;background:#111;color:#fff;font:700 12px system-ui;border-radius:6px;padding:1px 5px}
.inv-not{opacity:.8;font-size:13px;margin:4px 0 8px}
.ph-invknapp{cursor:pointer;opacity:.9}
.ph-invknapp svg{width:30px;height:30px}
`;
document.head.appendChild(css);
const topp = document.querySelector('.fp-topp');
const verktygIkon = (st) => !S.grip ? ik('hand') : ikonHtml(niva() === MAGNET_NIVA ? 'byggsats:magnet' : 'byggsats:grip', st);
function ritaHotbar() {
  // första gången du har två saker: visa att hjulet byter sak (försvinner när du har rullat)
  if (!S.tipsHjul && S.hotbar.filter(Boolean).length >= 2 && !document.querySelector('.hud-hjultips')) {
    setTimeout(() => { S.tipsHjul = true; document.querySelector('.hud-hjultips')?.remove(); }, 9000);   // AA: bara en stund
    document.body.insertAdjacentHTML('beforeend', `<div class="hud-hjultips"><span class="mus"><i></i></span><div><b>Rulla på hjulet</b> för att byta sak i handen<br><small>eller tryck 1–9 · E = ryggsäcken · H = tomhänt</small></div></div>`);
  }
  const el = document.querySelector('.ph-hotbar'); if (!el) return;
  el.innerHTML = S.hotbar.map((p, i) => i === 0
    ? `<div class="ph-slot ${S.vald === 0 ? 'vald' : ''}" data-i="0" data-niva="${S.grip ? 1 : 0}" title="Verktyget"><span class="k">1</span>${verktygIkon(48)}<span class="n ph-hb-skrap"></span></div>`
    : `<div class="ph-slot ${S.vald === i ? 'vald' : ''}" data-i="${i}" title="${p ? namnFor(p.typ) : ''}"><span class="k">${i + 1}</span>${p ? ikonHtml(p.typ, 48) : ''}${p?.typ === 'karra' ? '<span class="n ph-hb-karra"></span>' : p?.n > 1 ? `<span class="n">${p.n}</span>` : ''}</div>`).join('')
    + `<div class="ph-slot ph-invknapp" data-inv title="Ryggsäcken (E)"><span class="k">E</span>${ik('kista')}${S.ryggsack?.some(Boolean) ? `<span class="n">${S.ryggsack.filter(Boolean).length}</span>` : ''}</div>`;
}
let namnTimer = 0;
function visaHotbarNamn() {
  const el = document.querySelector('.ph-hb-namn'); if (!el) return;
  const t = valdTyp();
  el.textContent = t ? `${namnFor(t)}${t === 'byggsats:gamingbod' ? ' – gå till vänster om skjulet och klicka på det gröna spöket' : t?.startsWith('byggsats:spolhallare') ? ' – klicka på en skrivare för att montera' : t === 'byggsats:matarband' ? ' – gå till kvarnen: den ska stå bakom (grönt spöke)' : t === 'rulle' ? ' – klicka på en skrivare för att ladda' : t === 'magnet' ? ' – håll inne och sikta: suger till sig skräp' : t === 'karra' ? ' – lasta tungt skräp, Q tippar ur' : arPlacerbar(t) ? (VAROR[t]?.pris ? ' – sikta och klicka för att ställa ut (även i skjulet) eller sälj hos Ali' : ' – sikta och klicka för att ställa ut') : VAROR[t]?.gava ? ' – lägg i Rolfs postlåda' : VAROR[t]?.pris ? ' – sälj hos Ali' : ''}` : ['✋ Händerna', '🦾 Skräpgripen', '🗑️ Grip + sopsäck', '🧲 Magnetpistolen'][niva()];
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
document.querySelector('.ph-hotbar').onclick = (e) => { if (e.target.closest('[data-inv]')) { oppnaInv(); return; } const k = e.target.closest('[data-i]'); if (k) byt(Number(k.dataset.i)); };
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
  <div class="hud-linje" title="Dagen: himlakroppen är klockan, prickarna är dagens mål, sängen är kvällen"><div class="hud-linje-spar"><span class="hud-himmel"><i></i><i></i><i></i><i></i><i></i></span><b class="hud-linje-nu"><svg class="hk-sol" viewBox="0 0 24 24"><g stroke="#ffd43b" stroke-width="2.2" stroke-linecap="round"><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/></g><circle cx="12" cy="12" r="5.2" fill="#ffd43b" stroke="#fff3b0" stroke-width="1.2"/></svg><svg class="hk-mane" viewBox="0 0 24 24"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="#f4f1de"/></svg></b><span class="hud-linje-mal"></span><span class="hud-linje-mane"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 18v-8h2v4h7V9h7a4 4 0 0 1 4 4v5h-2v-2H4v2zm5-5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg><em>z</em><em>z</em></span></div></div>
  <div class="hud-chip" data-hud="kr" title="Pengar">${ik('mynt')}<b>0 kr</b></div>
  <div class="hud-chip" data-hud="rullar" title="Rullar filament du bär">${ik('rulle')}<b>0 rullar</b></div>
  <div class="hud-matare" data-hud="trivsel" title="Trivsel – hur du har det hemma"><div class="hud-ikon"></div><div class="hud-m"><div class="rad"><span>Trivsel</span><b></b></div><div class="hud-bar"><i></i></div></div></div>
  <div class="hud-matare" data-hud="respekt" title="Respekt – hur andra ser på dig"><div class="hud-ikon"></div><div class="hud-m"><div class="rad"><span>Respekt</span><b></b></div><div class="hud-bar"><i></i></div></div></div>
  <div class="hud-matare hud-nasta" data-hud="nasta" title="Dagens stora köp – så mycket pengar har du mot det"><div class="hud-ikon">${ik('mynt')}</div><div class="hud-m"><div class="rad"><span>Nästa</span><b></b></div><div class="hud-bar"><i></i></div></div></div>
  <div class="hud-matare hud-el" data-hud="el" title="El – trampa cykeln för att ladda"><div class="hud-ikon hud-el-ik">${ik('blixt')}</div><div class="hud-m"><div class="rad"><span>El</span><b></b></div><div class="hud-bar"><i></i></div></div></div>
  <div class="hud-chip hud-chip-sms" data-hud="sms" title="Meddelanden och dagbok (M)">${ik('brev')}<b>Meddelanden</b><em hidden></em></div>
</div>`);
document.body.classList.add('aa', 'ad');   // punkt AA + AD (en lång toppbar): rensad skärm (statuskolumn, smal uppdragsremsa, en notis i taget)
const hudEl = document.querySelector('.hud-status');
document.body.classList.toggle('ph-tidig', !S.kapitelKlart);   // kapitel 1: respekt, rang och årstid syns inte än
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
hudEl.querySelector('[data-hud="sms"]').onclick = () => oppnaInkorg();
hudEl.querySelector('[data-hud="kr"]').onclick = () => oppnaMarknad();
hudEl.querySelector('[data-hud="rullar"]').onclick = () => oppnaInv();
hudEl.querySelector('[data-hud="respekt"]').onclick = () => oppnaRespekt();
hudEl.querySelector('[data-hud="trivsel"]').onclick = () => { dagbokFlik = 'mal'; oppnaDagbok(); };
{ const m = document.querySelector('.ph-mal'); m.classList.add('hud-uppdrag'); hudEl.appendChild(m); m.querySelector('.ph-mal-text').insertAdjacentHTML('afterend', '<ul class="hud-lista"></ul>'); m.insertAdjacentHTML('afterbegin', '<em class="hud-antal"></em>'); }
const hudCache = {};
function hudMatare(namn, niva, ikonFn, varde, andel) {
  const el = hudEl.querySelector(`[data-hud="${namn}"]`), ik2 = el.querySelector('.hud-ikon');
  if (hudCache[namn] !== niva) { const forr = hudCache[namn]; hudCache[namn] = niva; ik2.innerHTML = ikonFn(niva); ik2.className = `hud-ikon niva${niva}`; if (forr != null) { void ik2.offsetWidth; ik2.classList.add('studs'); } }
  const b = el.querySelector('b'); if (b.textContent !== String(varde)) b.textContent = varde;
  const i = el.querySelector('i'); const w = Math.round(Math.max(0.03, Math.min(1, andel)) * 100) + '%';
  if (i.style.width !== w) { i.style.width = w; i.style.backgroundColor = matarFarg(andel); }
}
let tipsTill = 0, hudListaNyckel = '', hudSenastKlar = -1, hudForraText = '', hudForraSteg = S.steg, hudForraSkylt = !!S.skyltUppe;
// klarat uppdrag: grönt, bock, konfetti – sedan stryks det och glider bort
function firaUppdrag(text) {
  spelaLjud('nytt-mal');
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
  // konkret nästa steg mot målet (köp → printa → ta ut → ställ ut). "Ta ut ur skrivaren" visas bara när det gäller målets sak.
  const konkret = stegKonkret(st);
  if (konkret) {
    if (konkret[2]) {
      // punkt AL: räcker filamentet till målsaken? Säg i gram och flaskor vad som fattas
      const t = typeof st.bild === 'function' ? st.bild() : st.bild, ar = String(t).startsWith('byggsats:'), id = ar ? t.slice(9) : t;
      const behov = ar ? (MASKINER[id]?.gram || 0) : (VAROR[id]?.gram || 0), iSkrivare = Math.max(0, ...skrivare.filter((x) => x.gen !== PETG_GEN).map((x) => x.fil || 0));
      if (behov && !skrivare.some((x) => x.jobb) && iSkrivare < behov) {
        if (antalInv('rulle')) return ['rulle', 'Ladda en rulle i skrivaren', false, 'skrivare'];
        if (helaRullar() > 0) return ['rulle', 'Ta rullen vid kvarnen och ladda skrivaren', false, 'kvarn'];
        const har = Math.round(iSkrivare + (S.kvarn.ut || 0)), flaskor = Math.max(1, Math.ceil((behov - har) / SKRAP_SORTER.flaska.gram));
        if (har < behov) return ['kvarn', `Skrivaren behöver ${behov.toLocaleString('sv-SE')} g. Du har ${har.toLocaleString('sv-SE')} g. Mal ${flaskor} flask${flaskor === 1 ? 'a' : 'or'} till.`, false, hand.saker.length || S.kvarn.tratt > 0 ? 'kvarn' : 'skrap'];
      }
    }
    return [konkret[0], konkret[1], false, konkret[3]];
  }
  const vilPrinta = /^(Printa|Gör det mysigt|Inred|Isolera|Bygg|Lägg plåttak|Tapetsera)/i.test(text) || /^Printa/.test(text);
  const harFil = skrivare.some((x) => x.fil >= 100 || x.jobb);
  if (vilPrinta && !harFil) {
    if (antalInv('rulle')) return ['rulle', 'Ladda en rulle i skrivaren'];
    if (helaRullar() > 0) return ['rulle', 'Ta rullen vid kvarnen'];
    if (hand.saker.length || S.karraLast?.length) return ['kvarn', 'Lägg skräpet i kvarnen'];
    if (S.kvarn.tratt > 0) return ['kvarn', 'Veva kvarnen'];
    return ['hand', gardSkrap() > 0 ? 'Plocka skräp till kvarnen' : 'Hämta skräp på tippen'];
  }
  return [malIkon(text), text];
}
function malIkon(text) {
  return /Sopbil/.test(text) ? 'klocka' : /^Printa/.test(text) ? 'skrivare' : /Sälj|Ali|Köp|CAD|Tjäna/.test(text) ? 'kop' : /Rolf|postlåd|brev/i.test(text) ? 'brev' : /sov|kväll|Klart för idag/i.test(text) ? 'klocka'
    : /Städa|Plocka|skräp/i.test(text) ? 'hand' : /kvarn|Veva|tratt|tunna/i.test(text) ? 'kvarn' : /rulle|Ladda/i.test(text) ? 'rulle' : /cykel|Trampa/i.test(text) ? 'blixt'
    : /Bygg|Isolera|plåttak|dörr|skylt/i.test(text) ? 'hus' : /mysigt|Inred|Tapet|fristad|jacuzzi/i.test(text) ? 'soffa' : 'mal';
}
// en liten bild av det du ska bygga eller printa (för den som inte läser)
function stegBild(text) {
  const st = STEG[S.steg]; if (!st || st.sov) return null;
  let t = typeof st.bild === 'function' ? st.bild() : st.bild;
  if (!t) { const g = /Rolf|ölhållare|flasköppnare|grillspade|tomte/i.test(text) ? aktivGava?.() : null; if (g && /Printa|Köp|Lägg/.test(text)) t = g; }
  return t && ikonBild(t) ? t : null;
}
let malRaw = '';
// vad du konkret ska göra härnäst för dagens mål: [ikon, text, behöver filament]
const HYLLA_FOR = (id) => MASKINER[id]?.hem || MASKINER[id]?.flik === 'hem' || VAROR[id]?.lyx ? 'Hemmet' : 'Fabriken';
function stegKonkret(st) {
  if (!st || st.sov) return null;
  let t = typeof st.bild === 'function' ? st.bild() : st.bild;
  if (!t) { const g = aktivGava?.(); if (g && /ölhållare|flasköppnare|grillspade|tomte|Rolf/i.test(stegText(st))) t = g; }
  if (!t) return null;
  const ar = t.startsWith('byggsats:'), id = ar ? t.slice(9) : t, fullt = (ar ? MASKINER[id]?.namn : VAROR[id]?.namn) || '', namn = (/^Skrivare/.test(fullt) ? fullt : fullt.toLowerCase()).replace(/ \(.*\)$/, '');
  if (!namn) return null;
  if (antalInv(t)) return ['hand', id === 'gamingbod' ? 'Välj boden i verktygsraden och ställ den bredvid skjulet' : MASKINER[id]?.hem ? `Välj ${namn} i verktygsraden och klicka på skjulet` : VAROR[id]?.gava ? `Lägg ${namn} i Rolfs postlåda vid grinden` : MASKINER[id]?.kraverBord ? `Välj ${namn} i verktygsraden och klicka på arbetsbordet` : `Välj ${namn} i verktygsraden och ställ ut`];
  if (skrivare.some((x) => x.klar === t)) return ['bock', `${namn[0].toUpperCase() + namn.slice(1)} är klar – ta ut den ur skrivaren`];
  if (skrivare.some((x) => (ar ? x.jobb?.maskin === id : x.jobb?.typ === id))) return ['klocka', `Skrivaren printar ${namn} – trampa om strömmen tar slut`];
  const harModell = id === 'sang' ? S.ritningar.includes('sang') || S.sang : ar ? S.ritningar.includes(id) : VAROR[id]?.gava ? S.ritningar.includes('gava:' + id) || harGava(id) : harRecept(id);
  if (harModell) return ['skrivare', `Gå till skrivaren och printa ${namn}`, true, 'skrivare'];   // punkt AL
  if (ar && MASKINER[id]?.syns && !MASKINER[id].syns()) return ['las', id === 'tapeter' && !S.hem?.vaggar ? 'Isolera alla 4 väggar först – sen säljer Ali tapeter' : `Ali har inte 3D-modellen till ${namn} än – kom tillbaka imorgon`];
  const pris = id === 'sang' ? SANG_INSTRUKTION : ar ? (MASKINER[id] ? ritPris(id) : 0) : VAROR[id]?.gava ? null : VAROR[id]?.recept;
  if (pris && S.mynt >= pris) return ['kop', `Du har råd! Gå till Ali och köp ${id === 'sang' ? 'sängen' : namn}`, false, 'ali'];   // punkt AL
  return ['kop', `Köp 3D-modellen till ${namn} hos Ali (${VAROR[id]?.gava ? 'Unika fynd' : HYLLA_FOR(id)}${pris ? ' · ' + pris.toLocaleString('sv-SE') + ' kr' : ''})`];
}
// när nästa handling är själva målet: en kort förklaring av hur man gör (vem/var)
function nuTips(t) {
  if (/^Lasta av/.test(t)) return 'Cykeln står vid vägen – klicka på den';
  if (/^Bygg om cykeln/.test(t)) return 'Klicka på cykeln vid vägen igen';
  if (/^Ställ (skrivaren|kvarnen)/.test(t)) return 'Gå till den lysande rutan i linje 1 och klicka';
  if (/^Trampa/.test(t)) return S.strom < 2 ? 'Klicka och håll på cykelns pedaler – sen printa på skrivaren' : 'Klicka på skrivaren och välj nyckelringen';
  if (/adresskylt/.test(t)) { const d = Math.round(Math.hypot(VAG_SKYLT.x - spelare.pos.x, VAG_SKYLT.z - spelare.pos.z)); return d > 4 ? `Brädhögen ligger vid vägen · ${d} m – följ den gula pilen` : 'Klicka på brädhögen'; }
  if (/^Efterspelet/.test(t)) return /allt är klart/.test(t) ? 'Tippen på tid finns under Dagbok → Spelet' : 'Mark köper du på tavlan vid vägen · prototyper hos Ali';
  if (/Tänd skylten/.test(t)) return 'Skylten står vid vägen – klicka på den';
  if (/Öppna dörren/.test(t)) return S.flyttatIn ? 'Kransen sitter på husets dörr – klicka på den' : 'Kransen sitter på skjulets dörr – klicka på den';
  if (/Trimma/.test(t)) return 'Hos Ali: hyllan Fabriken → Trimning';
  if (/Sopbil/.test(t)) return 'Printa och sälj medan du väntar';
  if (/Dagens mål är klara/.test(t)) return 'Printa och sälj hos Ali tills det blir kväll';
  if (/Köp/.test(t)) return 'Gå till Ali över vägen';
  if (/Printa/.test(t)) return 'Gå till skrivaren och välj den';
  if (/Rolf|postlåd|brev/i.test(t)) { const d = Math.round(Math.hypot(postlada.position.x - spelare.pos.x, postlada.position.z - spelare.pos.z)); return d > 4 ? `Postlådan med flaggan står vid tippens grind · ${d} m – följ den gula pilen` : 'Klicka på postlådan'; }
  if (/Bygg|Lägg|Isolera|Tapetsera|dörr/i.test(t)) return 'Köp 3D-modellen hos Ali, printa och montera';
  if (/sov|Sov|kväll/.test(t)) return 'Gå till sängen i skjulet';
  if (/skräp på soptippen/.test(t)) return 'Soptippen ligger bakom grinden till vänster – följ pilen';
  if (/Städa|Plocka|skräp/i.test(t)) return 'Plocka skräpet på gården och lägg det i kvarnen – pilen visar närmaste';
  if (/trivsel|mysigt|Inred/i.test(t)) return 'Inredning hos Ali ger trivsel';
  if (/Sälj|Tjäna/.test(t)) return 'Printa saker och sälj hos Ali';
  return 'Följ pilen';
}
function ritaNasta() {
  const text = malRaw; const [ikon, t] = nastaAtgard(text);
  const bild = t === text ? stegBild(text) : null;
  const sl = /^Köp /.test(text) ? slagForTyp(STEG[S.steg]?.bild || stegBild(text)) : null;   // punkt AK: köpmålen har samma märke som hos Ali
  // storylinen syns alltid: är nästa handling något annat (ta ut, ladda …) står kapitelmålet under
  // tre nivåer: kapitel/dag (rubriken ovanför) → dagens mål (stor rad) → nästa sak att göra nu (med ikon)
  const ikonHtml2 = `<span class="nasta-ik${bild ? ' bild' : ''}">${bild ? ikonHtml(bild, 36) : ik(ikon)}</span>`;
  const h = t !== text && text
    ? `<span class="nasta-rubrik">${rens(text)}${slagChip(sl, true)}</span><span class="nasta-rad" data-konkret>${ikonHtml2}<span class="nasta-t"><small>Nu:</small> ${rens(t)}</span></span>`
    : `<span class="nasta-rubrik">${rens(t)}${slagChip(sl, true)}</span><span class="nasta-rad">${ikonHtml2}<span class="nasta-t">${rens(nuTips(t))}</span></span>`;
  if (malText.dataset.h !== h || !malText.firstElementChild) { malText.dataset.h = h; malText.innerHTML = h; malText.classList.add('nasta'); }
}
// ---------- Första gången: kort genomgång av varje nytt moment ----------
// Blicken vänds dit, din röst säger vad du ska göra – en gång. Menyer får en liten pulserande hjälplapp första gången.
let postUppSedan = 0;
const FORSTA = {
  gava: { rost: 'Klart! Nu lägger jag den i Rolfs brevlåda vid grinden.', titta: () => postlada.position, nar: () => { const g = aktivGava(); return g && antalInv(g) > 0 && !S.post.tillRolf; } },
  post: { rost: 'Rolf har lagt något i brevlådan. Jag går och hämtar det.', titta: () => postlada.position, nar: () => { const upp = !!(S.post.lapp || S.post.tillMig.length); if (!upp) { postUppSedan = 0; return false; } postUppSedan ||= performance.now(); return performance.now() - postUppSedan > 120000; } },   // punkt BD: hjälp om du inte gått dit på 2 min
  uppgradera: { rost: 'Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare.', titta: () => ALI, nar: () => S.dag >= 3 && S.mynt >= 90 && Object.entries(MASKINER).some(([id, m]) => !m.hem && m.syns?.() !== false && m.ritning <= S.mynt && !S.ritningar.includes(id)) },
  karra: { rost: 'En skottkärra! Jag väljer den med hjulet och kör fram till en tunna.', nar: () => !!S.karra && antalInv('karra') > 0 },
};
let tankeSenast = -1e9; const TANKE_MELLAN = 120000;   // punkt BD: max en egen tanke (tips/puff) per 2 min – felmeddelanden efter ett klick räknas inte
const tankeLedig = () => performance.now() - tankeSenast >= TANKE_MELLAN;
function kollaForsta() {
  if (!ui.igang || sover || !ui.butiksOverlay.hidden || !tankeLedig()) return;
  S.forsta = S.forsta || [];
  for (const [id, f] of Object.entries(FORSTA)) {
    if (S.forsta.includes(id)) continue;
    let ok = false; try { ok = f.nar(); } catch {}
    if (!ok) continue;
    S.forsta.push(id); sparaSnart(); tankeSenast = performance.now();
    bud(() => { const p = f.titta?.(); if (p) tittaMot(p.x, p.z, 1.6); setTimeout(() => prata('du', f.rost, 'MÅL'), p ? 600 : 0); });
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
const COACH = { ali: 'Sälj det du har till vänster. Köp nya saker till höger.', print: 'Välj vad du vill printa och klicka på det.', inv: 'Dra saker dit du vill ha dem.', kista: 'Shift-klick flyttar en hel hög mellan kistan och ryggsäcken.' };
function coachLapp(el, id) {
  S.forsta = S.forsta || [];
  if (S.forsta.includes('meny:' + id)) return;
  S.forsta.push('meny:' + id); sparaSnart();
  const kropp = el.querySelector('.ali-butik') || el.querySelector('.ui-panel-kropp, .ui-kropp') || el.querySelector('.ui-panel') || el;
  const d = document.createElement('div'); d.className = 'ph-coach'; d.innerHTML = `${ik('hand')}<span>${COACH[id]}</span>`;
  kropp.prepend(d);
  // vänta tills Ali (eller någon annan) pratat klart, och bara om menyn fortfarande är öppen
  const sag = () => { if (ui.butiksOverlay.hidden) return; if (performance.now() < pratarTill) { setTimeout(sag, 300); return; } prata('du', COACH[id], 'MÅL'); };
  setTimeout(sag, 600);
}
// punkt AD: tidslinjen i toppbaren – 08:00 till kväll, markören är klockan, prickarna är dagens mål, månen är kvällen
let hudPoster = [], linjeNyckel = '';
// AD-tillägg: markören är en himlakropp – måne på morgonen, sol mitt på dagen, måne på kvällen – i en låg båge över en himmel som skiftar
let linjeTid = 0, linjeDag = 0, linjeSover = false;
function ritaLinje(k) {
  const L = hudEl.querySelector('.hud-linje'); if (!L) return;
  const nu = performance.now(); if (nu < linjeTid) return; linjeTid = nu + 250;   // fyra gånger i sekunden räcker
  const f = k == null ? 0 : Math.max(0, Math.min(1, (k - 8 * 60) / (13 * 60)));
  const M = L.querySelector('.hud-linje-nu');
  L.querySelector('.hud-linje-mane').classList.toggle('pa', sovDags());
  if (linjeDag && S.dag !== linjeDag && !linjeSover) {
    // natten: månen åker färdigt över himlen och kommer upp igen vid nästa morgon (ca 1 s)
    linjeSover = true; M.classList.add('sover'); M.style.setProperty('--f', 1); M.style.setProperty('--sol', 0); M.style.setProperty('--y', '0px');
    setTimeout(() => { M.classList.add('hopp'); M.style.setProperty('--f', 0); void M.offsetWidth; M.classList.remove('hopp'); }, 520);
    setTimeout(() => { M.classList.remove('sover'); linjeSover = false; }, 1050);
  }
  linjeDag = S.dag;
  if (!linjeSover) {
    // solen: tänds 09:00–10:30, slocknar 17:30–19:00
    const t = k == null ? 8 * 60 : k, sol = Math.max(0, Math.min(1, (t - 9 * 60) / 90, (19 * 60 - t) / 90));
    M.style.setProperty('--f', f.toFixed(4)); M.style.setProperty('--sol', sol.toFixed(2)); M.style.setProperty('--y', (-Math.sin(f * Math.PI) * 7).toFixed(1) + 'px');
  }
  const n = hudPoster.length, nyckel = hudPoster.map((p) => (p.klar ? 1 : p.nu ? 2 : 0)).join('');
  if (nyckel === linjeNyckel) return; linjeNyckel = nyckel;
  L.querySelector('.hud-linje-mal').innerHTML = hudPoster.map((p, i) => `<i class="${p.klar ? 'klar' : p.nu ? 'nu' : ''}" style="left:${((i + 1) / (n + 1) * 90).toFixed(1)}%" title="${p.text.replace(/"/g, '')}"></i>`).join('');
  // baren kan bli högre (två rader på mobil) – notiser och kort hamnar under den
  requestAnimationFrame(() => document.documentElement.style.setProperty('--bar-h', Math.round(hudEl.getBoundingClientRect().bottom) + 'px'));
}
setInterval(() => document.documentElement.style.setProperty('--bar-h', Math.round(hudEl.getBoundingClientRect().bottom) + 'px'), 1000);
function ritaHud() {
  // klockan
  const k = klockan(), tidEl = hudEl.querySelector('.tid');
  const dagT = `DAG ${S.dag}`, tidT = k == null ? '--:--' : klockText(Math.min(k, 21 * 60)), arT = ARSTID_NAMN[arstid()] || '';
  if (hudCache.dag !== dagT) { hudCache.dag = dagT; hudEl.querySelector('.dag').textContent = dagT; }
  if (hudCache.tid !== tidT) { hudCache.tid = tidT; tidEl.textContent = tidT; tidEl.classList.toggle('natt', k != null && k >= 21 * 60); }
  if (hudCache.ar !== arT) { hudCache.ar = arT; hudEl.querySelector('.arstid').textContent = rens(arT); }
  // trivsel: gubben följer hur bra du har det, mätaren går mot nästa mål
  const t = trivsel(), tMal = t < TRIVSEL_MAL ? TRIVSEL_MAL : t < 300 ? 300 : Math.ceil((t + 1) / 100) * 100;
  hudMatare('trivsel', t < 20 ? 0 : t < 60 ? 1 : t < 120 ? 2 : t < 220 ? 3 : 4, hudAnsikte, trivselBonus() > 0 ? `${t} · Ali betalar +${bonusText()}` : t, t / tMal);
  if (trivselBonus() > 0 && !S.trivselSms && ui.igang) { S.trivselSms = true; sparaSnart(); setTimeout(() => sms('ali', 'Folk köper mer av någon som har det fint. Jag vet inte varför. Jag har det inte fint.'), 1500); }
  // respekt: hjärtat mot nästa filamentnivå
  const r = S.respekt || 0, nasta = RESPEKT_NIVAER.find(([g]) => r < g), forra = [...RESPEKT_NIVAER].reverse().find(([g]) => r >= g);
  hudMatare('respekt', r < 5 ? 0 : r < 25 ? 1 : r < 60 ? 2 : r < 110 ? 3 : 4, hudHjarta, r, nasta ? (r - (forra?.[0] || 0)) / (nasta[0] - (forra?.[0] || 0)) : 1);
  // punkt AD: uppdraget sitter i den långa toppbaren
  const mEl = malText.parentElement;
  ritaLinje(k);
  // tipsraden ("Nu: …", "Rolf har lämnat något") bara när den behövs: konkret nästa steg, ny uppgift, eller Rolf
  mEl.classList.toggle('visa-tips', !!malText.querySelector('[data-konkret]') || performance.now() < tipsTill || !!postMal() || !S.skyltUppe);
  ritaLoop(mEl);
  // uppdragslistan: det som är klart (bockat), det du gör nu och vad som kommer
  const lista = mEl.querySelector('.hud-lista');
  const iSteg = S.steg < STEG.length && !(S.folkbokMal && !S.folkbokford && S.steg >= STEG.length);
  const nyckel = `${S.steg}|${S.skyltUppe ? 1 : 0}|${iSteg}`;
  if (nyckel === hudListaNyckel) { hudForraText = malText.textContent; return; }
  const framat = hudListaNyckel && (S.steg > hudForraSteg || (S.skyltUppe && !hudForraSkylt));
  if (framat && hudForraText) firaUppdrag(hudForraText);
  tipsTill = performance.now() + 9000;   // ny uppgift: visa tipset en stund
  hudListaNyckel = nyckel; hudForraSteg = S.steg; hudForraSkylt = !!S.skyltUppe; hudForraText = malText.textContent;
  if (!iSteg) { lista.innerHTML = ''; lista.style.display = 'none'; mEl.querySelector('.hud-antal').textContent = ''; hudPoster = []; return; }
  lista.style.display = '';
  const del = STEG[S.steg].del, idx = STEG.map((x, i) => [x, i]).filter(([x]) => x.del === del);
  const poster = idx.map(([x, i]) => ({ text: rens(typeof x.text === 'function' ? '' : x.text) || rens(stegText(x)), klar: i < S.steg, nu: i === S.steg, i }));
  if (S.steg <= 1 && del === STEG[0].del) poster.unshift({ text: 'Spika upp adresskylten', klar: !!S.skyltUppe, nu: !S.skyltUppe, i: -1 });
  if (!S.skyltUppe && S.steg <= 1) poster.forEach((p) => { if (p.i >= 0) p.nu = false; });
  const nuI = poster.findIndex((p) => p.nu);
  const visa = poster.slice(Math.max(0, nuI - 2), nuI + 3);
  const klara = poster.filter((p) => p.klar).length;
  mEl.querySelector('.hud-antal').textContent = `${klara}/${poster.length} idag`;
  hudPoster = poster.filter((p) => !/^Sov|^Gå och lägg|sov$/i.test(p.text));
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
const NOTIS_MAX = 1, NOTIS_TID = 4000;   // punkt AA: en notis i taget, 4 sekunder, resten köas
const notisKo = [];
const RUBRIK = { bra: 'Klart', guld: 'Nytt', fel: 'Obs', '': 'Info', sms: 'Meddelande', lapp: 'Dagbok' };
const RUBRIK_IKON = { bra: 'bock', guld: 'stjarna', fel: 'varning', '': 'info', sms: 'telefon', lapp: 'bok' };
function notis(text, typ = '', o = {}) {
  if (typ === 'sms' || typ === 'lapp' || o.direkt) return notisVisa(text, typ, o);
  kanalLagg({ vikt: o.vikt || 'REAKTION', vem: 'notis:' + text.slice(0, 40), text, rost: false, minMs: 2500, visa: () => notisVisa(text, typ, o) });
  return null;
}
function notisVisa(text, typ = '', o = {}) {
  // samma text igen inom kort: förnya kortet i stället för att lägga ett nytt
  const el = typ === 'sms' || typ === 'lapp' ? medEl : notisEl;   // meddelanden till vänster, notiser till höger
  const finns = [...el.children].find((k) => k.dataset.text === text && !k.classList.contains('ut'));
  if (finns) { clearTimeout(finns._t); finns._t = setTimeout(() => taBort(finns), NOTIS_TID); finns.animate([{ transform: 'scale(1.04)' }, { transform: 'scale(1)' }], { duration: 200 }); return finns; }
  if (el === notisEl && [...el.children].some((x) => !x.classList.contains('ut'))) {   // en syns redan: köa (samma text bara en gång)
    if (!notisKo.some(([t]) => t === text)) notisKo.push([text, typ, o]); if (notisKo.length > 6) notisKo.shift(); return null;
  }
  textLogg('notis', typ, text);   // loggas när den faktiskt visas (inte när den väntar i notiskön)
  const k = document.createElement('div');
  k.className = 'ph-notis ' + typ; k.dataset.text = text;
  k.innerHTML = `<div class="rubrik"><span>${ik(RUBRIK_IKON[typ] || 'info')} ${rens(o.titel || RUBRIK[typ] || 'Info')}</span><span>nu</span></div><div class="kropp">${rens(text)}</div>`;
  if (o.klick) { k.classList.add('klickbar'); k.insertAdjacentHTML('beforeend', '<div class="las"><kbd>Tab</kbd> läs och lyssna</div>'); k.onclick = (e) => { e.stopPropagation(); taBort(k); o.klick(); }; }
  el.prepend(k);
  requestAnimationFrame(() => k.classList.add('in'));
  const ut = [...el.children].filter((x) => !x.classList.contains('ut'));
  ut.slice(el === medEl ? 3 : NOTIS_MAX).forEach(taBort);
  k._t = setTimeout(() => { taBort(k); if (el === notisEl) setTimeout(() => { const n = notisKo.shift(); if (n) notisVisa(...n); }, 450); }, el === notisEl ? NOTIS_TID : o.tid || 7000);
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
  { id: 'brev', efter: 40, text: 'Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev?', villkor: () => !!(S.post.lapp || S.post.tillMig.length) && Math.hypot(spelare.pos.x - postlada.position.x, spelare.pos.z - postlada.position.z) < 18, mal: () => postlada },   // punkt BD: när flaggan är uppe och du är nära
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
    if (puffTid[p.id] < p.efter || nu - (puffSenast[p.id] || -1e9) < 150000 || budKo.length || !tankeLedig()) continue;
    puffSenast[p.id] = nu; tankeSenast = nu; puffTid[p.id] = 0;
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
  for (let i = 0; i < 8; i++) { let x, z, f = 0; do { x = TS.x2 + 2 + Math.random() * 3; z = TIPP.z + (Math.random() - 0.5) * 6; } while (iPlanRuta(x, z, 0.4) && ++f < 30); laggSkrap(x, z, slumpVariant(), Math.random() * 6.3); }
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
    else if (vantarPaPlatta(sk)) L.push({ obj: sk.mesh, y: 1.0, typ: 'stopp', rub: `${namn} väntar`, varfor: 'Plattan är full', fix: 'Klicka på skrivaren och ta ut grejerna', kort: 'Plattan är full', ikon: 'bock' });
    else if (sk.klar) L.push({ obj: sk.mesh, y: 1.0, typ: 'klar', rub: `${namn} är klar`, varfor: namnFor(sk.klar), fix: 'Klicka på skrivaren och ta den', kort: 'Klar – ta ut', ikon: 'bock' });
  }
  if (S.kvarn.motor && S.kvarn.tratt > 0 && S.strom < 1) L.push({ obj: kvarn, y: 1.6, typ: 'stopp', rub: 'Kvarnen står still', varfor: 'Motorn har ingen ström', fix: 'Trampa cykeln för att ladda batteriet', kort: 'Trampa cykeln', ikon: 'blixt' });
  else if (S.kvarn.tratt > 0 && extruderFull()) L.push({ obj: kvarn, y: 1.6, typ: 'stopp', rub: 'Kvarnen står still', varfor: 'Rullhållaren är full', fix: 'Ta rullarna vid kvarnen', kort: 'Ta rullen', ikon: 'rulle' });
  else if (!S.kvarn.motor && S.kvarn.tratt >= TRATT_MAX) L.push({ obj: kvarn, y: 1.6, typ: 'stopp', rub: 'Tratten är full', varfor: 'Ingen plats för mer skräp', fix: 'Veva kvarnen – klicka och håll på veven', kort: 'Veva kvarnen', ikon: 'kvarn' });
  if (L.some((x) => /ström/.test(x.varfor) || /Batteriet/.test(x.varfor))) L.push({ obj: cykel, y: 1.5, typ: 'hit', rub: 'Trampa här!', varfor: `Batteri ${Math.floor(S.strom)}/${stromMax()}`, fix: 'Klicka och håll på cykeln', kort: 'Trampa här!', ikon: 'blixt' });
  return L;
}
// ---------- Mätning och spelarfeedback ----------
// Allt är anonymt: ett slumpat spelar-id, var i spelet man är och hur länge man spelat.
// Skickas till artifactens databas (när spelet körs som artifact) och till ett Google-formulär om FEEDBACK_FORM är satt.
// Google-formulär: två stycke-fält ("typ" och "data"). Fyll i formResponse-adressen och fältens entry-id här.
const FEEDBACK_FORM = { url: 'https://docs.google.com/forms/d/e/1FAIpQLSfSTOr7PylrGuRw8T-fK5TVOG-XzaHN2Pq1bHyBEojDqDm2MQ/formResponse', typ: 'entry.28966215', data: 'entry.1781786662' };   // formuläret "Soptippsvägen 1 - Feedback" → svarsarket
const spelarId = (() => { try { let v = localStorage.getItem('printa-hem:spelare'); if (!v) { v = Math.random().toString(36).slice(2, 10); localStorage.setItem('printa-hem:spelare', v); } return v; } catch { return 'okand'; } })();
const sessionId = spelarId + '_' + Date.now().toString(36);
const sessionStart = Date.now();
let dbP = null;
const hamtaDb = () => dbP || (dbP = (async () => { try { return window.claude?.use ? await window.claude.use('db') : null; } catch { return null; } })());
async function skickaData(typ, data, id) {
  if (navigator.webdriver && typ !== 'test') { (window.__testData ||= []).push([typ, data]); return; }   // automatiska tester ska inte fylla svarsarket (men testerna kan läsa vad som skulle skickats)
  const rad = { ...data, spelare: spelarId, namn: S.spelarNamn || '', tid: new Date().toISOString(), version: 'v' + (document.querySelector('script[src*="spel.js"]')?.src.split('v=')[1] || 'artifact') };
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
// tempo: sekunder speltid mellan köp hos Ali (målet är 2–5 minuter) och speltid per dag (målet 10–20 minuter)
function matKop(vad, pris) {
  const nu = S.speltid || 0, sek = S.senastKop != null ? Math.round(nu - S.senastKop) : null;
  S.senastKop = nu; S.kopIdag = (S.kopIdag || 0) + 1;
  skickaData('kop', { dag: S.dag, steg: S.steg, vad: String(vad).slice(0, 60), pris, sekSedanForra: sek, mynt: S.mynt });
}
function matDag(dag) {
  const inkomst = Math.round(S.inkomstIdag || 0);
  S.inkomstLogg = [...(S.inkomstLogg || []), inkomst].slice(-3);
  S.inkomstSnitt = Math.round(S.inkomstLogg.reduce((a, b) => a + b, 0) / S.inkomstLogg.length);
  skickaData('dag', { dag, sekunder: Math.round(S.dagTid || 0), minuter: Math.round((S.dagTid || 0) / 6) / 10, kop: S.kopIdag || 0, salt: Object.values(S.saltIdag || {}).reduce((a, b) => a + b, 0), inkomst, inkomstSnitt: S.inkomstSnitt, krPerMin: S.dagTid ? Math.round(inkomst / (S.dagTid / 60)) : 0, mynt: S.mynt, steg: S.steg, kapitel: S.kapitel });
  S.kopIdag = 0; S.inkomstIdag = 0;
}
// inkomst per dag: allt som kommer in (Ali, säljlådan, leveranslådan, Rolf, bonusar) – mynten räknas när de ökar
let sistaMynt = null;
function inkomstTick() {
  if (sistaMynt == null) sistaMynt = S.mynt;
  const d = S.mynt - sistaMynt; if (d > 0) S.inkomstIdag = (S.inkomstIdag || 0) + d;
  sistaMynt = S.mynt;
}
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
    // B20: det som hände precis innan följer med automatiskt
    const senaste = TEXTLOGG.slice(-30).map((e) => `${(e.t / 1000).toFixed(0)}s d${e.dag} ${e.kalla}${e.vem ? ' ' + e.vem : ''}: ${String(e.text).slice(0, 90)}${e.varfor ? ' (' + e.varfor + ')' : ''}`);
    skickaData('feedback', { sort: 'formular', betyg, betygText: betyg == null ? null : BETYG[betyg][1], ...f, steg: S.steg, dag: S.dag, minuter: Math.round((Date.now() - sessionStart) / 60000), mal: (() => { try { return stegText(STEG[S.steg]) || ''; } catch { return ''; } })(), mynt: S.mynt, version: document.querySelector('script[type="importmap"]')?.textContent.match(/v=([0-9a-f]+)/)?.[1] || window.__bygg || '', textlogg: senaste });
    pop.querySelector('.br-bekrafta-ruta').innerHTML = '<b>Tack!</b><p>Jesper läser allt.</p>';
    setTimeout(() => pop.remove(), 1600);
  };
  pop.onclick = (e) => { if (e.target === pop) pop.remove(); };
  pop.addEventListener('keydown', (e) => e.stopPropagation());
}
// ---------- Rangstege och prestationer (se claude/printa-hem-rangstege.md) ----------
var RANGER_KLAR = false;
// Rangen följer storyn med fasta krav. Prestationerna är hemliga ("???") tills du klarar dem och ger lite respekt.
const RANGER = [   // följer kapitlen (bygglistan punkt R) – de fyra första delas ut tyst i kapitel 1
  { namn: 'Utslängd', under: 'av mamma, med ryggsäck', krav: () => true },                                        // dag 1
  { namn: 'Skjulbo', under: 'med säng!', krav: () => S.lappar.includes('sang') },                                   // dag 1
  { namn: 'Nyckelringsmagnat', under: 'lokalt känd hos Ali', krav: () => S.stat.salt >= 10 },                       // dag 2–3
  { namn: 'Kvarnkapitalist', under: 'produktionsmedlen är dina', krav: () => S.kvarn.motor && (harPlacerat('skrivare2') || skrivare.length >= 2) },   // dag 5
  { namn: 'Sopbaron', under: 'respekterad i tre postnummer', krav: () => kapitelNu() >= 3 },                        // kapitel 2 klart, dag 10
  { namn: 'Brukspatron', under: 'fabriken sköter sig själv', krav: () => kapitelNu() >= 4 },                        // kapitel 3 klart, dag 15
  { namn: 'Lagfaren', under: 'Bengt-Åke sålde. Motvilligt.', krav: () => S.mark.agt.includes('egen') },             // tomten du bor på, dag 16
  { namn: 'Mantalsskriven', under: 'posten hittar hit nu', krav: () => !!S.folkbokford },                           // dag 21
  { namn: 'Hedersmedborgare', under: 'motvilligt', krav: () => !!S.julFirad && S.lappar.includes('mammajul') },                                      // julen + mammas brev, dag 22
  { namn: 'Tippgodsägare', under: 'all mark, alla stubbar', krav: () => S.mark.agt.length >= MARK_TOMTER.length },  // efterspelet
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
  { id: 'arlig', namn: 'Ärlig in i märgen', rad: 'Säg nej till Rolfs fiffel tre gånger.', test: () => (S.rolf.heder || 0) >= 3 },
  { id: 'fiffel', namn: 'Fiffelkungen', rad: 'Chefen (också Rolf) vet.', test: () => (S.rolf.ja || 0) >= 3 },
  { id: 'holk', namn: 'Fåglarna flyttar in', rad: 'Sätt upp en fågelholk.', test: () => harPlacerat('fagelholk') },
  { id: 'rocker', namn: 'Rock på väggen', rad: 'Häng upp Rolfs Rockers-affischen.', test: () => harPlacerat('r_affisch') },
  { id: 'tomt', namn: 'HMPF', rad: 'Bengt-Åke säljer sin första tomt.', test: () => S.mark.agt.length >= 1 },
  { id: 'folkbok', namn: 'Posten hittar hit', rad: 'Folkbokförd på Soptippsvägen 1.', test: () => !!S.folkbokford },
  { id: 'frusen', namn: 'Frusen pinne', rad: 'Frys en natt.', test: () => !!S.frusit },
  { id: 'kap1', namn: 'Ett hem att bo i', rad: 'Klara kapitel 1.', test: () => !!S.kapitelKlart },
  { id: 'tidtipp', namn: 'Tippen på tid', rad: 'Städa gården på tid i efterspelet.', test: () => !!S.tidRekord },
  { id: 'trivsel', namn: 'Mysigt värre', rad: 'Trivsel 300.', test: () => trivsel() >= 300 },
  { id: 'rik', namn: 'Tusenlappen', rad: 'Ha 1 000 kr på fickan.', test: () => S.mynt >= 1000 },
  { id: 'jul', namn: 'Jul på tippen', rad: 'Fira jul på Soptippsvägen 1.', test: () => !!S.julFirad },
];
const PREST_RESPEKT = 3;   // de första småsakerna dag 1 ger ingen respekt alls – respekt förtjänas
const rangNu = () => { let r = 0; RANGER.forEach((x, i) => { if (i === r + 1 && x.krav()) r = i; }); return Math.max(r, S.rang || 0); };
function visaFirande(kicker, titel, rad, stor = false) {
  const d = document.createElement('div'); d.className = 'ph-prest' + (stor ? ' stor' : '');
  d.innerHTML = `<small>${rens(kicker)}</small><b>${rens(titel)}</b><span>${rens(rad)}</span>`;
  document.body.appendChild(d); try { konfetti(stor ? 120 : 50); } catch {}
  if (!(stor && spelaLjud('kapitel'))) ljud.klar?.(); setTimeout(() => d.classList.add('ut'), stor ? 5200 : 3800); setTimeout(() => d.remove(), stor ? 6000 : 4600);
}
const firaKo = []; let firarTill = 0;
function kollaPrestationer() {
  if (!ui.igang || sover) return;
  S.prest = S.prest || [];
  if (S.rang == null) { S.rang = rangNu(); sparaSnart(); }   // första rangen kommer tyst
  for (const p of PRESTATIONER) {
    if (S.prest.includes(p.id)) continue;
    let ok = false; try { ok = p.test(); } catch {}
    if (!ok) continue;
    const rp = p.resp ?? PREST_RESPEKT; S.prest.push(p.id); if (rp) andraRespekt(rp, 'Prestation: ' + p.namn);
    S.prestLogg = [{ id: p.id, dag: S.dag }, ...(S.prestLogg || [])].slice(0, 40);   // tyst rad i dagboken – ingen popup
    if (senaSystem()) notis(`📔 Prestation: ${p.namn}${rp ? ` · +${rp} respekt` : ''}`, '', { tid: 3000 });
  }
  const r = rangNu();
  if (r > (S.rang || 0)) { S.rang = r; const x = RANGER[r]; if (senaSystem() && S.rangSammanfattad) firaKo.push(() => visaFirande('Ny rang', x.namn, `(${x.under})`, true)); }
  // när kapitel 2 börjar: en kort sammanfattning av rangerna du fått i bakgrunden
  if (senaSystem() && !S.rangSammanfattad) { S.rangSammanfattad = true; const n = S.rang || 0; if (n > 0) firaKo.push(() => visaFirande('Din rang hittills', RANGER[n].namn, RANGER.slice(0, n + 1).map((x) => x.namn).join(' → '), true)); }
  document.body.classList.toggle('ph-tidig', !senaSystem());
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
  if (!ui.igang || !ui.butiksOverlay.hidden || sover || !medEl2.hidden) return;
  const k = kapitelNu(); if (k < 2 || S.steg >= STEG.length) return;
  S.kapVisad = S.kapVisad || (S.kap2Visad ? [2] : []);
  if (S.kapVisad.includes(k)) return;
  S.kapVisad.push(k); visaKapitelKort(k, KAPITEL[k].namn, KAPITEL[k].mal); sparaSnart();
}, 2000);
// prestationslistan i menyn: klarade med namn, oklarade hemliga
function prestHtml() {
  if (!RANGER_KLAR) return '';   // startskärmen kan ritas innan listorna finns
  const klara = S.prest || [];
  return `<div class="br-prest"><div class="br-resa-topp"><b>Rang: ${rens(RANGER[S.rang || 0].namn)}</b><span>Prestationer ${PRESTATIONER.filter((p) => klara.includes(p.id)).length}/${PRESTATIONER.length}</span></div><div class="br-prest-lista">${PRESTATIONER.map((p) => klara.includes(p.id) ? `<span class="ok" title="${rens(p.rad)}">${rens(p.namn)}</span>` : '<span>???</span>').join('')}</div></div>`;
}
// ---------- Flaskhalsen: vad stoppar oftast? ----------
// Varje sekund en maskin står still räknas på orsaken. Det som stoppar mest idag visas under uppdragen,
// med vad du kan bygga för att slippa det – så du vet vad som är värt att fixa härnäst.
const stromFix = () => stromBehov() > TRAMP_PER_S + solEffekt() && (harPlacerat('skrivare2') || harPlacerat('skrivare3')) ? (harPlacerat('solpark') ? 'Fler solcellsparker' : 'Bygg en solcellspark (Ali)') : harPlacerat('sol') ? 'Fler solpaneler' : 'Bygg en solpanel';
const FLASK_FIX = {
  'Batteriet är tomt': stromFix,
  'Motorn har ingen ström': stromFix,
  'Slut på filament': () => (S.rullstall || 0) < 3 ? 'Bygg ett rullställ' : 'Mal mer i förväg',
  'Rullhållaren är full': () => (S.rullstall || 0) < 3 ? 'Bygg ett rullställ' : 'Hämta rullarna oftare',
  'Ingen plats för mer skräp': () => S.kvarn.motor ? 'Större tratt (Ali)' : 'Kvarnmotor (Ali)',
  'Plattan är full': () => S.kapitel >= 3 ? 'Bygg utbandet till leveranslådan' : 'Ta ut grejerna oftare',
};
const FLASK_NAMN = { 'Plattan är full': 'Full byggplatta', 'Batteriet är tomt': 'Ström till skrivaren', 'Motorn har ingen ström': 'Ström till kvarnen', 'Slut på filament': 'Filament till skrivaren', 'Rullhållaren är full': 'Fulla rullar vid kvarnen', 'Ingen plats för mer skräp': 'Full tratt' };
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
  const mEl = hudEl, r = mEl.getBoundingClientRect(), topPx = Math.round((r.height ? r.bottom : 200) + 8) + 'px';
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
// ---------- Punkt X: riktiga ljudeffekter från Kenney (CC0, se ljud/licenser) ----------
// Laddas i bakgrunden. Saknas ett ljud (eller laddas det inte) spelas den gamla syntetiska tonen.
const LJUDFILER = { plock: 0.5, placera: 0.45, fel: 0.5, mynt: 0.45, klar: 0.5, stor: 0.45, kop: 0.5, 'meny-oppna': 0.3, 'meny-stang': 0.3, ryggsack: 0.45, postlada: 0.55, sov: 0.45, 'nytt-mal': 0.4, kapitel: 0.45, 'rulle-klar': 0.5, tratt: 0.35 };
const ljudBuf = {};
function laddaLjud() {
  const c = ljud.vakna(); if (!c || laddaLjud.gjort) return; laddaLjud.gjort = true;
  for (const n of Object.keys(LJUDFILER)) fetch(`ljud/${n}.mp3`).then((x) => (x.ok ? x.arrayBuffer() : null)).then((a) => a && c.decodeAudioData(a)).then((b) => { if (b) ljudBuf[n] = b; }).catch(() => {});
}
addEventListener('pointerdown', laddaLjud, { once: true, capture: true }); addEventListener('keydown', laddaLjud, { once: true, capture: true });
const senastLjud = {};
function spelaLjud(n, vol = 1, rate = null) {
  const c = ljud.vakna(), b = ljudBuf[n]; if (!c || !b || !ljud.pa) return false;
  const nu = performance.now(); if (rate == null && nu - (senastLjud[n] || 0) < 60) return true; senastLjud[n] = nu;   // inte samma ljud flera gånger samma ögonblick
  const k = c.createBufferSource(), g = c.createGain(); k.buffer = b; g.gain.value = LJUDFILER[n] * vol; k.playbackRate.value = rate ?? (0.96 + Math.random() * 0.08);
  k.connect(g); g.connect(c.destination); k.start(); return true;
}
for (const namn of ['plock', 'placera', 'fel', 'mynt', 'klar', 'stor', 'kop']) {
  const syntet = ljud[namn]?.bind(ljud); if (!syntet) continue;
  ljud[namn] = (...a) => { if (!spelaLjud(namn)) syntet(...a); };
}
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
// skrivarens händelser: en lapp vid skrivaren, och en notis i hörnet om skrivaren inte syns just nu (eller om det är viktigt)
function skrivarNotis(sk, text, typ = '', viktig = false) {
  try {
    const v = sk.mesh.getWorldPosition(new THREE.Vector3()), avst = v.distanceTo(kamera.position); v.project(kamera);
    const syns = v.z < 1 && Math.abs(v.x) < 0.9 && Math.abs(v.y) < 0.9 && avst < 12;
    platsToast(text, sk.mesh, typ);
    if (!syns || viktig) notis(`Skrivare ${GEN[sk.gen].namn}: ${text}`, typ || 'guld', { tid: 5000 });
  } catch { /* skrivaren finns inte längre */ }
}
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
let dagbokLas = false, dagbokPrat = false;   // dagboken läses alltid klart – du kan spela under tiden, men inget annat pratar eller dyker upp
const INKORG_MAX = 3; let inkorgVantar = 0;
function inkorg({ vem, titel, text, lapp = false, block = false, klar, fore }) {
  // punkt 15: dagboken och tankarna är saker i kanalen – bubblan och rösten kommer tillsammans när det är deras tur
  const el = document.createElement('div'); el.className = 'hud-bubbla' + (lapp ? ' lapp' : '');
  el.innerHTML = `<div class="rub">${portratt(lapp ? 'du' : vemAvSms(vem), 28)}<b>${rens(titel)}</b></div><div class="txt">${rens(text)}</div>`;
  kanalLagg({ vikt: lapp || block ? 'STORY' : 'REAKTION', forst: block, vem: lapp ? 'du' : vem, text, minMs: 2500,
    visa: () => {
      fore?.(); ljud.plock();
      smsFack.prepend(el); requestAnimationFrame(() => el.classList.add('in'));
      [...smsFack.children].slice(1).forEach((x) => { x.classList.add('ut'); setTimeout(() => x.remove(), 500); });
      if (lapp || block) dagbokLas = true;
    },
    efter: () => { if (lapp || block) dagbokLas = false; klar?.(); setTimeout(() => { el.classList.add('ut'); setTimeout(() => el.remove(), 500); }, 5000); } });
}
// punkt 12: fördröjda toasts kopplas till händelser
const efterBrevKo = {};
function efterBrev(id, fn, ms = 1000) { (efterBrevKo[id] = efterBrevKo[id] || []).push([fn, ms]); }
paHandelse('brevLast', ({ id }) => { const l = efterBrevKo[id]; if (!l) return; delete efterBrevKo[id]; l.forEach(([fn, ms]) => setTimeout(fn, ms)); });
const morgonToasts = [];   // sker under natten, visas när morgonkortet stängs
const morgonToast = (text, typ) => { if (!morgonToasts.some(([t]) => t === text)) morgonToasts.push([text, typ]); };
paHandelse('morgonkortStangt', () => { morgonToasts.splice(0).forEach(([t, typ], i) => setTimeout(() => ui.toast(t, typ), 600 + i * 2500)); });
function efterPrat(vem, fn) { const t0 = performance.now(); const v = () => { if (performance.now() - t0 < 20000 && pratarVem === vem && performance.now() < pratarTill) { setTimeout(v, 250); return; } fn(); }; setTimeout(v, 400); }
function visaLapp(id) {
  if (!lappInfo(id)) { textLogg('struken', 'lapp', id, 'lappen finns inte längre'); return; }
  if (!S.lappar.includes(id)) S.lappar.push(id);
  const [titel, text] = lappInfo(id);
  textLogg('lapp', titel, text);
  if (/Storebror/.test(titel)) { sms('bror', text); sparaSnart(); return; }
  if (/^🧺 Ali/.test(titel)) { if (id === 'salt') S.aliStoryVisad = true; sms('ali', text); sparaSnart(); return; }
  // de stora dagboksögonblicken (dag 1, skylten) visas på pausad skärm och läses upp med din röst – innan någon instruktion
  if (titel.includes('Dagbok')) inkorg({ vem: 'du', titel: 'Dagbok', text, lapp: true, block: id === 'start' || id === 'skylt', klar: () => handelse('brevLast', { id }) });
  else medKo.push({ typ: 'lapp', titel, text, id });
  sparaSnart();
}

// ---------- Familjen sms:ar: mamma är arg och orolig, pappa skriver bara för att mamma tjatar, storebror bryr sig (men säger det inte) ----------
const FAMILJ = {
  1: [['mamma', 'HUR KUNDE DU BARA GÅ?!?! Är du ok?? SVARA NÄR JAG RINGER!!'], ['mamma', 'Var är du??'], ['mamma', 'Pappa hälsar. Han sa inte det, men jag såg på honom att han ville.']],
  2: [['pappa', 'Hej. Mamma sa att jag skulle skriva. Så. Hej. Allt bra? /Pappa'], ['bror', 'Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂']],   // punkt BD: T0989 borttagen
};
// ---------- Levande sms: varje meddelande kommer bara en gång, en del beror på hur långt du kommit,
// och på en del kan du svara – svaret styr vad som händer sen ----------
const SMS_POOL = [
  // mamma: panik i alla former
  // pappa: kan inte riktigt mobilen. Skriver sällan, och nästan bara för att mamma säger åt honom
  { id: 'p_lever', vem: 'pappa', nar: () => S.dag >= 6, text: 'Mamma undrar om du lever. Ja sa ja. Stämmer de?' },
  { id: 'p_skrivit', vem: 'pappa', nar: () => S.dag >= 9, text: 'Mamma sa att ja skulle skriva. Nu har ja skrivit.' },
  { id: 'p_ok', vem: 'pappa', nar: () => S.dag >= 11, text: 'OK.' },
  { id: 'p_aa', vem: 'pappa', nar: () => S.dag >= 13, text: 'Hur skriver man å på denna' },
  { id: 'p_tumme', vem: 'pappa', nar: () => S.dag >= 16, text: '👍' },
  { id: 'm_mack', vem: 'mamma', nar: () => S.dag >= 3, text: 'Jag har städat ditt rum. Det tog TRE DAGAR. Jag hittade en macka från i somras. EN MACKA.' },
  { id: 'm_strumpor', vem: 'mamma', nar: () => S.dag >= 9 && S.dag <= 10, text: 'Har du VARMA STRUMPOR?? Det ska bli kallt!!', svar: [['Ja mamma.', 'Bra. Vilka då? De bruna? De bruna har hål. Jag VET att de har hål.'], ['Nej.', 'Jag skickar ett paket. Med strumpor. Och en mössa. Och sju mackor.']] },
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
  { id: 'm_pappa_tv', vem: 'mamma', nar: () => S.dag >= 4, text: 'Jag sa till pappa att du bor på en SOPTIPP. Han sa "aha, vad lugnt då" och satte på Formel 1. LUGNT?!' },
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
  { id: 'r_pappa', vem: 'rolf', nar: () => !!S.pappaBesok, text: 'Din farsa e en bra karl. Vi prata Scania o hockey. Han säger "drar" istället för går. Ja ska börja me det. /R' },
  // mamma och brorsan efter pappas besök
  { id: 'm_pappa_besok', vem: 'mamma', nar: () => !!S.pappaBesok, text: 'Var pappa DÄR?! Han sa att han skulle köpa mjölk! Han kom hem och sa "aha, vad lugnt dom har det". LUGNT?!' },
  { id: 'b_pappa_besok', vem: 'bror', nar: () => !!S.pappaBesok, text: 'Pappa kom hem och sa att Rolf var "en riktig räv bakom örat". Sen satte han på hockeyn. Det var allt.' },
];
// när man svarar: svaret visas som en egen bubbla och följdsvaret kommer en stund senare
function svaraSms(id, i) {
  const m = SMS_POOL.find((x) => x.id === id); if (!m) return;
  S.smsSvar = { ...(S.smsSvar || {}), [id]: i };
  const [, foljd] = m.svar[i];
  S.smsKo.unshift({ vem: m.vem, text: foljd, nar: S.speltid + 20 });   // punkt BD: smsSvar + 20 s
  sparaSnart();
}
const BROR_IBLAND = ['Allt lugnt? Bara undrar. Inte för att jag bryr mig.', 'Mamma gråter inte längre när hon går förbi ditt rum. Framsteg.', 'Om du behöver nåt så… ja. Du vet.', 'Kolla mig, jag skriver till dig. Känn dig speciell.'];
const MAMMA_IBLAND = ['Äter du ordentligt?? Inte bara nudlar!!', 'Jag ringde tre gånger. TRE. Svara!', 'Pappa saknar dig. Han säger det inte men jag vet.', 'Har du borstat tänderna idag? Ljug inte.'];
// Rolf, 58: kört sopbilen i 31 år, bor i en husvagn bakom tippen med katten Kajsa. Trummis i dansbandet
// ”Rolfs Rockers” 1987. Ensam sedan Birgitta dog för sju år sedan (bodde i husvagnen med honom sedan 2009). Samlar ”skatter” ur lassen. Älskar att grilla – men har ingen att grilla med.
const ROLF_IBLAND = [
  'Rolf här. Kajsa (katten) fångade en råtta i husvagnen. Hon e bättre på sitt jobb än ja. /R',
  'Hittade ett trumset i lasset idag. Spela lite på rasten. Rolfs Rockers 1987. Vi va STORA i Hudiksvall. /R',
  '31 år i sopbilen idag. Ingen tårta. Köpte en själv. Den va god. /R',
  'Drömde om Birgitta i natt. Hon skällde på mej för att ja inte klippt gräset. De va skönt. /R',
  'Ja har en låda med skatter i husvagnen. Mest skruvar. En tand. Inte min. /R',
  'ÖJ. Rolf här. Hittade en hel soffa i lasset idag. Ingen plast i den tyvärr. Satt i den på rasten. /R',
  'Tippar extra plast i eftermiddag. Säg inte till chefen. Han heter också Rolf. Förvirrande. /R',
  'Ölhållarn funkar fortfarande. Den e min bästa vän. Ni e delad etta. /R',
  'Såg din skorsten ryka. Eller va de grillen? Hoppas de va grillen. /R',
  'Fick en kajak i lasset. Ingen paddel. Typiskt. Ja la den vid grinden åt dig. /R',
];
// punkt BD: mamma dag 1 när sängen är printad (40–60 s mellan), pappa och storebror dag 2 efter morgonkortet (+20 s och +60 s)
paHandelse('tagitUrPrint', ({ sak }) => {
  if (sak !== 'sang' || S.familj1) return; S.familj1 = true;
  FAMILJ[1].forEach(([v, t], i) => setTimeout(() => sms(v, t), 40000 + i * 50000));
});
paHandelse('morgonkortStangt', ({ dag }) => {
  if (dag !== 2 || S.familj2) return; S.familj2 = true;
  setTimeout(() => sms(...FAMILJ[2][0]), 20000); setTimeout(() => sms(...FAMILJ[2][1]), 60000);
});
function familjSms() {
  const d = S.dag || 1;
  if ((S.familjDag || 0) >= d) return;
  S.familjDag = d;

  if (S.rolf.boter) { const b = Math.min(S.mynt, S.rolf.boter), t = CHEFEN[((S.rolf.ja / 2) - 1) % CHEFEN.length]; S.rolf.boter = 0; setTimeout(() => { S.mynt -= b; sms('chefen', `${t} ${b} kr. /Rolf (chefen)`); ui.toast(`Böter: −${b} kr`, 'fel'); sparaSnart(); }, 7000); }
  if (S.dag >= 7 && ![11, 14, 16, 22].includes(d) && !(S.pappaNasta === d) && S.rolf.i >= ROLF.length && S.rolf.jobb == null && !S.post.lapp && !S.post.tillRolf && !S.post.tillMig.length && S.rolf.jobbDag !== d && (d - (S.rolf.jobbDag || 0)) >= 2) {
    S.rolf.jobbDag = d; S.post.lapp = 'jobb'; visaPostInne();
    setTimeout(() => sms('rolf', ROLF_JOBBLAPP[(S.rolf.jobbNr || 0) === 0 ? 0 : 1]), 3500);
  }
  // dagens meddelanden: de fasta för dag 1–2, sedan 2–3 nya ur poolen som passar läget (aldrig samma två gånger)
  const sett = new Set(S.smsSett || []);
  let lista = FAMILJ[d] && d > 2 ? [...FAMILJ[d]] : [];   // punkt BD: dag 1 och 2 styrs av händelser (nedan)
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
const ROST_FIGURER = ['rolf', 'ali', 'pappa', 'bror', 'chefen', 'du', 'mamma', 'berattare', 'helen', 'bengt'];
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
// ElevenLabs-röster (punkt Y): förgenererade klipp i roster-el/, nyckel = samma som de gamla rösterna. Finns ett klipp används det, annars den gamla rösten.
// Punkt AH: samma röst för en figur hela vägen – ElevenLabs bara för figurer där VARJE replik har ett klipp (räknas en gång när båda listorna laddats)
let elIndex = null, elHel = null, introPagar = false, introElSvar = null;
// punkt AW: har alla mammas och dina repliker i introt ElevenLabs-klipp? Då används de i introt (resten av spelet följer AH).
const introElOk = () => { if (introElSvar == null && elIndex) introElSvar = INTRO_TAL().filter(([v]) => v === 'mamma' || v === 'du').every(([v, t]) => !!elIndex[`${v}-${rostNyckel(t)}`]); return !!introElSvar; };
const elHelRakna = () => { if (!elIndex || !rostIndex || elHel) return; elHel = new Set(ROST_FIGURER.filter((f) => { const k = Object.keys(rostIndex).filter((x) => x.startsWith(f + '-')); return k.length > 0 && k.every((x) => elIndex[x]); })); };
const elKlar = fetch('roster-el/index.json').then((x) => (x.ok ? x.json() : null)).then((a) => { elIndex = a; return rostKlar.then(elHelRakna); }).catch(() => {});
// punkt AZ: ElevenLabs-klippen ligger packade per figur (roster-el/pack/, samma format som roster/) och spelas från ett redan avkodat ljud
let elPackIndex = null;
const elPackKlar = fetch('roster-el/pack/index.json').then((x) => (x.ok ? x.json() : null)).then((a) => { elPackIndex = a; }).catch(() => {});
const elPack = {};
const hamtaElPack = (namn) => elPack[namn] || (elPack[namn] = fetch(`roster-el/pack/${namn}.mp3`).then((x) => x.arrayBuffer()));
const avkodat = new Map(), avkodar = new Map();   // klippets id → AudioBuffer (klart) / Promise (pågår)
// var finns repliken? { id, hamta, fran, langd } eller null
function klippKalla(vem, text) {
  const ek = elKlipp(vem, text);
  if (ek && elPackIndex?.[ek]) { const [pk, fran, langd] = elPackIndex[ek]; return { id: `el:${pk}:${fran}`, hamta: () => hamtaElPack(pk), fran, langd }; }
  if (ek) return { id: 'elfil:' + ek, fil: 'roster-el/' + elIndex[ek] };
  const kl = rostKlipp(vem, text);
  if (kl) { const [pk, fran, langd] = kl; return { id: `ko:${pk}:${fran}`, hamta: () => hamtaPack(pk), fran, langd }; }
  return null;
}
function avkoda(k) {
  if (avkodat.has(k.id)) return Promise.resolve(avkodat.get(k.id));
  if (avkodar.has(k.id)) return avkodar.get(k.id);
  const c = ljudCtx(); if (!c || !k.hamta) return Promise.resolve(null);
  const p = k.hamta().then((buf) => c.decodeAudioData(buf.slice(k.fran, k.fran + k.langd))).then((ab) => { avkodat.set(k.id, ab); avkodar.delete(k.id); return ab; })
    .catch(() => { avkodar.delete(k.id); return null; });
  avkodar.set(k.id, p); return p;
}
// förladda en lista repliker [vem, text] (en i taget, så att spelet inte hackar)
async function forladdaRepliker(lista) {
  await Promise.all([rostKlar, elKlar, elPackKlar]);
  for (const [vem, t] of lista) { const k = klippKalla(vem, t); if (k) await avkoda(k); }
}
// i spelet: alla klipp för figurerna som har ElevenLabs (nu pappa), i bakgrunden efter start
function forladdaElFigurer() {
  Promise.all([rostKlar, elKlar, elPackKlar]).then(() => {
    if (!elHel?.size) return;
    forladdaRepliker(rostManus().filter(([v]) => elHel.has(ROST_FIGURER.includes(v) ? v : 'berattare')));
  });
}
// punkt AZ: mätning – tid från att en replik ska börja tills ljudet hörs (ms), läses av testet
const rostMatning = [];
let rostKalla = null;
function spelaAvkodat(ab, vem, t0, text, o = {}) {
  const c = ljudCtx(); if (!c) return;
  const s = c.createBufferSource(), g = c.createGain(); s.buffer = ab; g.gain.value = 0.95;
  s.connect(g).connect(c.destination);
  // slutet räknas på klippets längd (onended kommer inte i alla lägen, t.ex. när ljudet är pausat i bakgrunden)
  let slutat = false; const slut = () => { if (slutat) return; slutat = true; if (rostKalla === s) { rostKalla = null; if (pratarVem === vem) pratarTill = 0; } if (!s.__tystad) o.slut?.(); };
  s.onended = slut; setTimeout(slut, ab.duration * 1000 + 30);
  s.start(); rostKalla = s; o.start?.();
  pratarTill = performance.now() + ab.duration * 1000;
  if (rostMatning.length < 400) {
    const d = ab.getChannelData(0), grans = 10 ** (-45 / 20); let i = 0; while (i < d.length && Math.abs(d[i]) < grans) i++;
    const latens = ((c.outputLatency || 0) + (c.baseLatency || 0)) * 1000;
    rostMatning.push({ vem, text: String(text).slice(0, 50), start: Math.round(performance.now() - t0), tyst: Math.round(i / ab.sampleRate * 1000), latens: Math.round(latens), ms: Math.round(performance.now() - t0 + i / ab.sampleRate * 1000 + latens) });
  }
}
function elKlipp(vem, text) {
  if (!elIndex || !elHel) return null;
  const f = ROST_FIGURER.includes(vem) ? vem : 'berattare';
  if (!elHel.has(f) && !(introPagar && (f === 'mamma' || f === 'du') && introElOk())) return null;   // punkt AW: introt är en egen scen
  const k = `${f}-${rostNyckel(text)}`;
  return elIndex[k] ? k : null;
}
// testkrok: __printahem.rostKoll() – per figur hur många repliker som har ElevenLabs, gammal röst eller saknas
function rostKoll() {
  const ut = {}, okand = [], sett = new Set();
  for (const [vem, t] of rostManus()) {
    if (!ROST_FIGURER.includes(vem)) { okand.push([vem, String(t).slice(0, 60)]); continue; }
    if (!/[\p{L}]/u.test(rens(t))) continue;   // bara emoji (pappas 👍) läses inte upp
    const k = vem + '-' + rostNyckel(t); if (sett.has(k)) continue; sett.add(k);
    const r = ut[vem] || (ut[vem] = { el: 0, gammal: 0, saknas: 0, saknasText: [] });
    if (elKlipp(vem, t)) r.el++; else if (rostKlipp(vem, t)) r.gammal++; else { r.saknas++; if (r.saknasText.length < 5) r.saknasText.push(String(t).slice(0, 70)); }
  }
  const blandade = Object.entries(ut).filter(([, r]) => r.el && (r.gammal || r.saknas)).map(([f]) => f);
  return { figurer: ut, blandade, okandVem: okand, elHela: [...(elHel || [])] };
}
function rostKlipp(vem, text) {
  if (!rostIndex) return null;
  const k = `${ROST_FIGURER.includes(vem) ? vem : 'berattare'}-${rostNyckel(text)}`;
  return rostIndex[k] || null;
}
// punkt BC: varje replik har en vikt – STORY (brev, sms, välkomsten, kapitel, scener), MÅL (uppläsning av dagsmål) eller REAKTION
// (kommentarer när man köper, säljer, gör fel …). En STORY avbryts aldrig: MÅL och REAKTION väntar tills den är klar.
// Max en REAKTION i kön (den äldsta stryks), och en REAKTION som har väntat längre än REAKTION_MAX_VANTAN stryks.
const REAKTION_MAX_VANTAN = 4000;
let pratVikt = '';
const pratKo = [];
function prata(vem, text, vikt = 'REAKTION', o = {}) {
  // punkt 15: i scener (samtal, besök, julen, introt), i menyer (svar på det man gör) och i öppna meddelanden pratar man direkt.
  // Allt annat är en sak i kanalen och väntar på sin tur.
  const direkt = o.direkt || scenPagar() || pausad || !ui.igang || !ui.butiksOverlay.hidden || !medEl2.hidden || dagbokPrat;
  if (!direkt) { kanalLagg({ vikt, vem, text, start: o.start, efter: o.slut }); return; }
  if (false) {
    if (vikt === 'REAKTION') { const i = pratKo.findIndex((x) => x.vikt === 'REAKTION'); if (i >= 0) { textLogg('röst-struken', pratKo[i].vem, pratKo[i].text + ' · en nyare reaktion'); pratKo.splice(i, 1); } }
    pratKo.push({ vem, text, vikt, o, t: performance.now() }); textLogg('röst-väntar', vem, text + ' · ' + vikt); return;
  }
  prataNu(vem, text, vikt, o);
}
let storySlut = 0;
function korPratKo() {
  if (pratVikt === 'STORY' && performance.now() >= pratarTill && pratarTill) { storySlut = pratarTill; }
  if (!pratKo.length || performance.now() < pratarTill || dagbokLas) return;
  if (pratKo.every((x) => x.vikt === 'MÅL') && performance.now() < storySlut + 1000) return;   // punkt BE: nytt mål läses 1 s efter kvittensen
  pratKo.sort((a, b) => (a.vikt === 'STORY' ? 0 : 1) - (b.vikt === 'STORY' ? 0 : 1) || a.t - b.t);
  const n = pratKo.shift();
  if (n.vikt === 'REAKTION' && performance.now() - n.t > REAKTION_MAX_VANTAN) { textLogg('röst-struken', n.vem, n.text + ' · väntade för länge'); return; }
  prataNu(n.vem, n.text, n.vikt, n.o);
}
function prataNu(vem, text, vikt, o = {}) {
  textLogg('röst', vem, text + ' · ' + vikt);
  if (rostLage() === 'rost') tystna();
  pratVikt = vikt;
  pratarVem = vem; pratarTill = performance.now() + Math.min(9000, 600 + String(text).length * 62);
  // utan ljud eller utan klipp: start direkt, slut efter textens längd (ca 60 ms per tecken, minst 1,5 s)
  const utanLjud = () => { o.start?.(); const ms = Math.max(1500, rens(text).length * 60); pratarTill = performance.now() + ms; if (o.slut) { const nr = pratStopp; setTimeout(() => { if (nr === pratStopp || !o.avbrytbar) o.slut(); }, ms); } };
  if (rostLage() === 'av' || !text || !/[\p{L}]/u.test(rens(text))) { utanLjud(); return; }
  if (rostLage() === 'rost') {
    const t0 = prata.t0 || performance.now(); prata.t0 = 0;
    const k = klippKalla(vem, text);
    if (!k) { utanLjud(); return; }   // ingen inspelad replik: tyst (texten syns ändå) – inget pip-babbel
    if (k.fil) {   // reserv: paketet saknas
      rostLjud = new Audio(k.fil); rostLjud.volume = 0.95; rostLjud.onended = () => { if (pratarVem === vem) pratarTill = 0; };
      { const lj = rostLjud; lj.onloadedmetadata = () => { if (pratarVem === vem && isFinite(lj.duration)) pratarTill = performance.now() + lj.duration * 1000; }; }
      rostLjud.play().catch(() => {});
      return;
    }
    if (avkodat.has(k.id)) { spelaAvkodat(avkodat.get(k.id), vem, t0, text, o); return; }
    const nr = pratStopp;
    avkoda(k).then((ab) => { if (ab && nr === pratStopp) spelaAvkodat(ab, vem, t0, text, o); else if (!ab) utanLjud(); });
    return;
  }
  if (rostLage() === 'prat') { tystna(); pratljud(vem, text); utanLjud(); return; }
  utanLjud();
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
const tystna = () => { pratStopp++; pratarTill = 0; pratVikt = ''; try { speechSynthesis.cancel(); } catch {} try { rostLjud?.pause(); } catch {} rostLjud = null; const s = rostKalla; rostKalla = null; if (s) s.__tystad = true; try { s?.stop(); } catch {} };
const vemAvTitel = (t = '') => /Bengt-Åke/.test(t) ? 'bengt' : /Rolf/.test(t) ? 'rolf' : /Ali/.test(t) ? 'ali' : /Mamma/.test(t) ? 'mamma' : /Storebror/.test(t) ? 'bror' : /Dagbok/.test(t) ? 'du' : 'berattare';
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
  textLogg('meddelande', m.fran || m.vem || m.titel || m.typ || '', m.text || m.titel || '');
  if (m.typ === 'samtal') { visaSamtal(m); return; }
  if (m.typ === 'smsval') {
    // som en notis på telefonen: lyssna nu eller spara till senare (spelet pausar så länge)
    pausad = true; ui.igang = false; spelare.aktiv = false; anvandNere = false;
    ui.slappMus();
    triTon();
    const namn = AVSANDARE[m.fran]?.namn || m.fran;
    medEl2.innerHTML = `<div class="ph-smsval"><div class="hud-ios in statisk"><div class="app">${IKON.telefon}</div><div class="inne"><div class="topp"><span>MEDDELANDEN</span><span class="nu">nu</span></div><div class="fran">${portratt(vemAvSms(m.fran), 20)}<b>${rens(namn)}</b></div><div class="txt">${rens(m.text)}</div></div></div>
      <div class="ph-smsval-knappar"><button class="fp-knapp" data-spara>OK <kbd>E</kbd></button></div></div>`;
    medEl2.hidden = false;
    // texten syns och läses upp direkt – OK stänger, rösten läser klart medan du spelar vidare
    m.klar?.(); setTimeout(() => prata(m.fran, m.text, 'STORY'), 300);
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
  ui.slappMus();
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
      const bb = medEl2.querySelector('.ph-tel-bubbla'); bb.classList.remove('skriver'); bb.textContent = rens(m.text); ljud.plock(); prata(m.fran, m.text, 'STORY');
      if (svarK.length) { knapp.hidden = true; svarK.forEach((k) => { k.disabled = false; }); } else knapp.disabled = false;
    }, 1100);
    svarK.forEach((k) => { k.onclick = (e) => {
      e.stopPropagation(); svaraSms(m.id, +k.dataset.svar);
      const du = document.createElement('div'); du.className = 'ph-tel-bubbla du'; du.textContent = k.textContent;
      medEl2.querySelector('.ph-tel-kropp').appendChild(du); medEl2.querySelector('.ph-tel-svar').remove();
      knapp.hidden = false; knapp.disabled = false; ljud.plock();
    }; });
  } else { ljud.plock(); prata(vemAvTitel(m.titel), m.text, 'STORY'); }
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
  knapp.onclick = () => { const las = !knapp.disabled && !knapp.hidden; stangMeddelande(); if (las && m.id) handelse('brevLast', { id: m.id }); };
}
// muslåset kan beviljas en stund efter klicket på Starta – kommer det när ett meddelande visas släpper vi det så att man kan klicka Läst
document.addEventListener('pointerlockchange', () => { if (document.pointerLockElement && !medEl2.hidden) ui.slappMus(); });
function stangMeddelande() {
  const k = medEl2.querySelector('button.fp-knapp'); if (!k || k.disabled || k.hidden) return;
  medEl2.hidden = true; medEl2.innerHTML = ''; tystna(); kanalFri = performance.now() + ROST_PAUS;
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

// ---------- Ljudinställningar: musik, effektljud och röster – var för sig ----------
function oppnaLjud(foralder) {
  foralder?.querySelector('.br-ljudpop')?.remove();
  const pop = document.createElement('div'); pop.className = 'br-bekrafta br-ljudpop';
  const rad = (id, ikon, namn, sub, pa) => `<button class="br-ljudrad ${pa ? 'pa' : ''}" data-ljud="${id}">${ik(ikon)}<span><b>${namn}</b><small>${sub}</small></span><em>${pa ? 'PÅ' : 'AV'}</em></button>`;
  const rita = () => {
    pop.innerHTML = `<div class="br-bekrafta-ruta br-ljudruta"><b>Ljud</b>
      ${rad('musik', 'film', 'Bakgrundsmusik', 'Lugn musik i bakgrunden', S.musik !== false)}
      ${rad('effekter', 'blixt', 'Effektljud', 'Kvarn, skrivare, sopbil, pling', S.effekter !== false)}
      ${rad('roster', 'rost', 'Röster', 'Figurerna pratar och dagboken läses upp', rostLage() !== 'av')}
      <div class="br-knappar"><button class="fp-knapp" data-nej>Klar</button></div></div>`;
    pop.querySelectorAll('[data-ljud]').forEach((k) => { k.onclick = () => {
      const id = k.dataset.ljud;
      if (id === 'musik') { S.musik = S.musik === false; if (S.musik === false) bakMusik.stopp(); else bakMusik.start(); }
      if (id === 'effekter') satEffekter(S.effekter === false);
      if (id === 'roster') { const pa = rostLage() !== 'av'; S.rost = !pa; if (!pa && (!S.rostLage || S.rostLage === 'av')) S.rostLage = 'rost'; tystna(); }
      sparaSnart(); rita();
    }; });
    pop.querySelector('[data-nej]').onclick = () => pop.remove();
  };
  rita(); pop.onclick = (e) => { if (e.target === pop) pop.remove(); };
  (foralder || document.body).appendChild(pop);
}
let planT = 0;
function samlaOchSpara(direkt = false) {
  S.skrap = skrapLista.map((s) => s.userData.skrap);
  S.hand = hand.saker.map((s) => 'skrap:' + (s.userData.variant ?? 0));
  S.placerade = placerade.map(sparbar);
  const nyPos = [+spelare.pos.x.toFixed(2), +spelare.pos.z.toFixed(2), +spelare.yaw.toFixed(3), +spelare.pitch.toFixed(3)];
  if (!S.pos || Math.hypot(nyPos[0] - S.pos[0], nyPos[1] - S.pos[1]) > 0.5 || Math.abs(nyPos[2] - S.pos[2]) > 0.3) { S.pos = nyPos; sparaFlagga = true; }
  for (const sk of skrivare) S.skrivare[sk.id] = { jobb: sk.jobb, prog: sk.prog, klar: sk.klar, fil: sk.fil, spolNiva: sk.spolNiva || 0, upprepa: sk.upprepa || null, upprepaPa: !!sk.upprepaPa, mod: sk.mod || null, klarL: sk.klarL || null, ko: sk.ko || [] };
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
  korKanal();   // punkt 15: en sak i taget
  if (!pausad && !dagbokLas && medKo.length && ui.igang && ui.butiksOverlay.hidden && ui.overlay.hidden && kanalLedig()) visaNastaMeddelande();   // punkt 15: brev och lappar är också en sak i taget
  if (pausad) return;
  spelare.uppdatera(dt);
  uppdateraGoran(dt);
  spikaTick(dt);
  hand.uppdatera(dt, spelare.rorelse);
  hand.grupp.position.x -= 0.68;   // skräpet i vänster hand – gripen i höger

  // skrivarna jobbar även när menyn är öppen
  for (const sk of skrivare) {
    skrivarLjud(sk, uppdateraSkrivare(sk, dt), dt);
    const a = Math.min(1, sk.fil / RULLE); sk.spole.visible = sk.fil > 0; sk.spoleKarna.scale.set(0.3 + a * 0.7, 1, 0.3 + a * 0.7);
    if (sk.jobb && !sk.vantar) sk.spole.rotation.x += dt * 2;
  }
  // solpaneler
  S.strom = Math.min(stromMax(), S.strom + solEffekt() * dt);
  uppdateraPetg(dt);
  autoRulle(dt); inkomstTick();
  uppdateraRitning(dt);   // punkt BA
  // första gången en skrivare går helt på solkraft: ett tydligt "jag slipper trampa"-ögonblick
  if (!S.solNotis && solEffekt() > 0 && skrivare.some((sk) => sk.jobb && !sk.vantar) && solEffekt() >= skrivare.filter((sk) => sk.jobb).reduce((x, sk) => x + GEN[sk.gen].strom, 0)) {
    S.solNotis = true; ljud.klar(); notis('☀️ Skrivaren går på solkraft – du behöver inte trampa!', 'guld', { tid: 6000 }); sparaSnart();
  }

  if (ui.igang && ui.butiksOverlay.hidden) {
    uppdateraFonsterSpoke();
    interaktor.uppdatera();
    const staplar = spoke.grupp?.visible && spoke.bord && paBord(valdTyp());
    ui.prompt(staplar ? (spoke.ok ? `Ställ ${info(spoke.typ).namn.toLowerCase()} på ${info(spoke.bord.typ).namn.toLowerCase()}n (R vrid)` : `Det står redan något på ${info(spoke.bord.typ).namn.toLowerCase()}n`) : interaktor.text || (spoke.grupp?.visible ? (spoke.bord && !MASKINER[spoke.typ]?.kraverBord ? `Ställ ${info(spoke.typ).namn.toLowerCase()} på ${info(spoke.bord.typ).namn.toLowerCase()}n` : (VAGGSAK.has(spoke.typ) ? (spoke.vaggFel ? `${info(spoke.typ).namn} hänger man på väggen – gå in i skjulet` : `Häng ${info(spoke.typ).namn.toLowerCase()} på väggen`) : `Ställ ${info(spoke.typ).namn.toLowerCase()} här (R vrid)`)) : ''));
    uppdateraSpoke(); ritaVridTips();

    // trampa
    if (trampTest > 0) trampTest -= dt;
    const trampar = (anvandNere && interaktor.hovrad === cykel) || (trampTest > 0 && cykel.visible);   // trampTest: testkrok
    laddLjud(trampar && S.strom < stromMax() - 0.01);
    if (trampar && S.strom >= stromMax() - 0.01 && S.batteriKopt) {
      if (!fullVarnad) { fullVarnad = true; ljud.klar(); ui.toast(`🔋 Batteriet är fullt! (${stromMax()})`, 'guld'); }
    } else if (trampar) {
      S.strom = Math.min(stromMax(), S.strom + TRAMP_PER_S * (S.dag <= 2 ? 2 : 1) * dt);   // dag 1–2: trampa går dubbelt så fort
      if (S.strom < stromMax() - 5) fullVarnad = false;
      S.stat.trampat += TRAMP_PER_S * dt;
      trampTid += dt;
      pedaler.rotation.x += dt * 9; hjul.rotation.x += dt * 14; cykel.userData.hjul?.forEach((h) => { h.rotation.x += dt * 14; });
      if (trampTid > 0.25) { trampTid = 0; ljud.borsta(); }
    }

    autoPlock();
    // håll inne gripklon och svep över skräpet
    gripPlockTid -= dt;
    if (gripHaller && gripPlockTid <= 0 && interaktor.hovrad?.userData.typ === 'skrap') { gripPlockTid = 0.18; interaktor.aktivera(); }
    // magnetpistolen: håll inne och sikta
    const magnetPa = niva() === MAGNET_NIVA && anvandNere && (!interaktor.hovrad || interaktor.hovrad.userData.typ === 'skrap') && !hand.full;
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
    if (vevTest > 0) vevTest -= dt;
    const vevar = (anvandNere && interaktor.hovrad === vevYta || vevTest > 0) && S.kvarn.tratt > 0 && !extruderFull();   // vevTest: testkrok
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
      malBockText = malRaw; ljud.klar(); handelse('malKlart', { id: st.id || 'steg' + (S.steg - 1), del: st.del, nasta: STEG[S.steg]?.id || 'steg' + S.steg });
      if (st.lapp && !S.lappar.includes(st.lapp)) visaLapp(st.lapp);
      if (st.sms && !(S.smsSkickat || []).includes(st.lapp || st.sms[1])) { S.smsSkickat = [...(S.smsSkickat || []), st.lapp || st.sms[1]]; sms(st.sms[0], st.sms[1]); }
      const nasta = STEG[S.steg];
      if (nasta?.startLapp && !S.lappar.includes(nasta.startLapp)) { visaLapp(nasta.startLapp); }
      if (nasta?.startPost && !S.lappar.includes(nasta.startPost) && !S.post.lapp) { S.post.lapp = nasta.startPost; visaPostInne(); ui.toast('✉️ Något har hamnat i postlådan vid soptippen…', 'guld'); }
      sparaSnart();
    }
    kollaFast();
    // punkt AM: planen i marken
    if ((planT -= dt) <= 0) { planT = 0.5; ritaPlan(); }
    { const kNy = kapitelNu(); if (kNy > (S.kapitel || 1)) { const forra = S.kapitel || 1; S.kapitel = kNy; for (let k = forra + 1; k <= kNy; k++) kapitelBorjar(k); } }
    if (S.steg >= STEG.findIndex((x) => x.del === K2) && !S.kapitelKlart) {
      S.kapitelKlart = true; document.body.classList.remove('ph-tidig'); andraRespekt(10, 'Byggde en riktig fristad'); S.mynt += KAP1_BELONING; spar.spara(true);   // startkapital till kapitel 2
      setTimeout(() => sms('mamma', `Pappa och jag har lagt undan lite. ${KAP1_BELONING.toLocaleString('sv-SE')} kr. Till något fint i ditt HUS. Inte till chips. ❤️ /Mamma`), 9000);
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
  uppdateraAuto(dt); uppdateraMalSkylt(dt); try { uppdateraFigurer(dt); uppdateraLiv(dt); } catch (e) { if (!figurFel) { figurFel = true; console.warn('figurer', e); } } uppdateraPappa(dt); miljo.uppdatera(performance.now() / 1000); uppdateraLukt(performance.now() / 1000); uppdateraKompost(dt); miljo.uppdateraSno(dt, kamera); kollaTillgang(dt); kollaBengt(dt); kollaAliSteg(); uppdateraBlick(dt); uppdateraMalPil(); ritaStopp(); ritaSkrivBarer(); matFlaskhals(dt); ritaPlatsLappar(); korBud(); kollaPuffar(dt); visaRullstall(); kollaRaddning(dt); for (const sk of skrivare) visaSpolar(sk);
  if (S.kvarn.band) {
    const kor = S.kvarn.binge.length > 0 && S.kvarn.tratt < TRATT_MAX && S.strom > 0.5;
    if (kor) {
      bandTid += dt; S.strom = Math.max(0, S.strom - 0.8 * dt);
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
  malRaw = S.julFirad && S.steg >= STEG.length ? (efterspelKvar()[0] ? `Efterspelet · kvar: ${efterspelKvar().slice(0, 2).join(', ')}${efterspelKvar().length > 2 ? ' …' : ''}` : 'Efterspelet · allt är klart – bygg fritt eller kör Tippen på tid') : S.folkbokMal && !S.folkbokford && S.steg >= STEG.length ? `Bli folkbokförd: tomten du bor på + ett riktigt hus (${['egen', 'huset'].filter(agerMark).length}/2) – tavlan vid vägen` : S.steg < STEG.length ? rens(stegText(STEG[S.steg])) : `Nästa mål: trivsel ${trivsel()}/${evigtMal} · trimma maskinerna hos Ali eller ta Rolfs jobb`;
  malDel.textContent = (S.julFirad && S.steg >= STEG.length ? 'Efterspelet' : S.folkbokMal && !S.folkbokford && S.steg >= STEG.length ? 'Slutmålet' : S.steg < STEG.length ? (`Kapitel ${kapitelNu()} · ` + STEG[S.steg].del) : S.folkbokford ? 'Folkbokförd · fritt bygge' : 'Oändligt bygge').toUpperCase();
  if (STEG[S.steg]?.sov && !kvallKlar()) { malRaw = `Dagens mål är klara! Bygg, printa och sälj fritt – det blir kväll om ${Math.max(1, Math.ceil((MIN_VAKEN - (S.vakenTid || 0)) / 60))} min.`; }
  if (!S.skyltUppe && S.steg <= 1) { malDel.textContent = 'KAPITEL 1 · ETT HEM ATT BO I'; malRaw = 'Spika upp din adresskylt'; }
  if (malVisasSteg != null && malVisasSteg !== S.steg && malBockText && !/^✓/.test(malBockText)) malRaw = '✓ ' + malBockText;   // punkt 15: det klara målet tills det nya är på tur
  ritaNasta();
  if (S.steg >= STEG.length && S.julFirad && !S.kapitel2Klart) { S.kapitel2Klart = true; sparaSnart(); }   // efterspelet (Tippen på tid) öppnas
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
    else { namn = ['Händerna', 'Gripen', 'Gripen + säck', 'Gripen + korg', 'Magneten'][niva()]; andel = nSkrap / BARA_SKRAP[niva()]; txt = `${nSkrap}/${BARA_SKRAP[niva()]} st` + (barGram ? ` · ${(barGram / RULLE).toLocaleString('sv-SE', { maximumFractionDigits: 1 })} rulle` : ''); }
    // kapaciteten visas vid handen, bara när du faktiskt bär något
    { const bar = valdKarra() ? karraGram() > 0 : nSkrap > 0, kort = valdKarra() ? txt : `${nSkrap}/${BARA_SKRAP[niva()]}`;
      if (hudHand.hidden === bar) hudHand.hidden = !bar;
      if (bar && hudHand.dataset.t !== kort) { hudHand.dataset.t = kort; hudHand.querySelector('b').textContent = kort; const i = hudHand.querySelector('i'); i.style.width = Math.min(100, andel * 100) + '%'; i.style.background = andel >= 1 ? '#ff6b6b' : andel > 0.7 ? '#ffb84d' : '#7dffb0'; hudHand.classList.toggle('full', andel >= 1); hudHand.classList.remove('studs'); void hudHand.offsetWidth; hudHand.classList.add('studs'); } }
    if (barText.textContent !== txt) { barText.textContent = txt; lastNamn.textContent = namn; lastBar.style.width = Math.min(100, andel * 100) + '%'; lastBar.style.background = andel >= 1 ? '#ff6b6b' : andel > 0.7 ? '#ffb84d' : '#7dffb0'; }
  }

  const visaVerktyg = skrapLage() && !tomhant;
  gripVerktyg.visible = niva() >= 1 && niva() <= 3 && visaVerktyg;
  magnetVerktyg.visible = niva() === MAGNET_NIVA && visaVerktyg;
  {
    const pa = niva() === MAGNET_NIVA && visaVerktyg && hand.saker.length > 0 && anvandNere, t = performance.now() / 1000;
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
  { const el = hudEl.querySelector('[data-hud="nasta"]'), x = nastaKop();
    el.hidden = !x;
    if (x && el.dataset.slag !== (x.slag || '')) { el.dataset.slag = x.slag || ''; el.querySelector('.hud-ikon').innerHTML = x.slag ? ik(KOP_SLAG[x.slag].ikon) : ik('mynt'); el.querySelector('.rad span').textContent = x.slag === 'salj' ? 'Säljvara' : x.slag === 'upp' ? 'Uppgradering' : 'Nästa'; }
    if (x) { const andel = Math.min(1, S.mynt / x.pris), t = `${x.namn} ${Math.min(S.mynt, x.pris).toLocaleString('sv-SE')}/${x.pris.toLocaleString('sv-SE')} kr`, b = el.querySelector('b'), i = el.querySelector('i'), w = Math.round(Math.max(0.02, andel) * 100) + '%';
      if (b.textContent !== t) b.textContent = t; if (i.style.width !== w) { i.style.width = w; i.style.backgroundColor = andel >= 1 ? '#3ccf73' : '#f5c542'; } el.classList.toggle('rad-klar', andel >= 1); } }
  { const el = hudEl.querySelector('[data-hud="el"]'), andel = S.strom / stromMax(), w = Math.round(Math.max(0.02, Math.min(1, andel)) * 100) + '%', i = el.querySelector('i'), b = el.querySelector('b'), t = Math.round(andel * 100) + ' %';
    if (i.style.width !== w) { i.style.width = w; i.style.backgroundColor = andel < 0.15 ? '#ff5c5c' : '#ffd43b'; }
    if (b.textContent !== t) b.textContent = t; el.classList.toggle('larm', stromSlut || S.strom < 5);
    const perKruka = GEN[1].strom * (S.dag === 1 ? 0.4 : 1) * VAROR.kruka.tid, n = Math.floor(S.strom / perKruka), sp = el.querySelector('.rad span'), st2 = n >= 1 ? `El · räcker till ${n} kruk${n === 1 ? 'a' : 'or'}` : 'El · trampa cykeln';
    if (sp.textContent !== st2) sp.textContent = st2; }
  battFyll.scale.y = Math.max(0.02, S.strom / stromMax());
  battFyll.material.color.set(S.strom < 15 ? 0xff5c5c : 0x7dffb0); battFyll.material.emissive.set(S.strom < 15 ? 0xff5c5c : 0x7dffb0);
  ui.mynt(S.mynt);
  { const sat = (id, t) => { const b = hudEl.querySelector(`[data-hud="${id}"] b`); if (b.textContent !== t) b.textContent = t; };
    sat('kr', `${S.mynt.toLocaleString('sv-SE')} kr`); const nr = antalInv('rulle'); sat('rullar', `${nr} ${nr === 1 ? 'rulle' : 'rullar'}`);
    const n = Math.max(S.olasta || 0, inkorgVantar), em = hudEl.querySelector('[data-hud="sms"] em');
    if (em.textContent !== String(n)) { em.textContent = n; em.hidden = !n; hudEl.querySelector('[data-hud="sms"]').classList.toggle('ny', n > 0); }
    // visa saker först när de behövs
    hudEl.querySelector('[data-hud="trivsel"]').hidden = trivsel() <= 0 && !S.sang;
    hudEl.querySelector('[data-hud="el"]').hidden = !((S.stat.trampat || 0) > 0 || S.strom > 0 || S.dag > 1 || harPlacerat('sol'));
    }   // punkt AL: NÄSTA syns även när du har råd – då blinkar den grönt
  // rullmätaren vid kvarnen
  {
    const nara = Math.hypot(spelare.pos.x - kvarn.position.x, spelare.pos.z - kvarn.position.z) < 4.5;
    const visa = ui.igang && ui.butiksOverlay.hidden && nara && (S.kvarn.tratt > 0 || S.kvarn.ut > 0 || [kvarn, vevYta, rulle].includes(interaktor.hovrad));
    vevEl.classList.toggle('syns', visa);
    if (visa) {
      { const v = kvarnPunkt(0, 1.45, 0.3).clone(); v.project(kamera); const ok = v.z < 1;
        const hb = (vevEl.offsetWidth || 200) / 2 + 12; vevEl.style.left = Math.max(hb, Math.min(innerWidth - hb, (v.x * 0.5 + 0.5) * innerWidth)) + 'px'; vevEl.style.top = Math.max(210, Math.min(innerHeight - 110, (-v.y * 0.5 + 0.5) * innerHeight)) + 'px';
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
  { id: 'egen', namn: 'Tomten du bor på', text: 'Skjulet och gården. Bengt-Åke vet inte ens att du bor här.' },
  { id: 'oster', namn: 'Ängen i öster', text: 'Platt och solig. Perfekt för solpaneler.', kraver: 'egen', rekt: { minX: TOMT, maxX: TOMT + 22, minZ: -TOMT, maxZ: TOMT } },
  { id: 'tippkant', namn: 'Marken runt tippen', text: 'Stenig och skräpig. Plats för allt som är för fult för gården.', kraver: 'egen', rekt: { minX: TIPP.x - TIPP.r - 18, maxX: -TOMT, minZ: -TOMT, maxZ: TOMT } },
  { id: 'tippen', namn: 'Rolfs soptipp', text: 'Rolf kör sopbilen åt dig nu. Det känns "konstigt men bra".', kraver: 'tippkant' },
  { id: 'rolfhus', namn: 'Garage och hus åt Rolf', text: 'Garage för sopbilen och ett litet hus. Husvagn sedan 2009 räcker.', kraver: 'tippen' },
  { id: 'huset', namn: 'Ett riktigt hus på ängen', text: 'Två rum, kök och sovloft. Inget skjul längre – ett HUS.', kraver: 'oster' },
  { id: 'norr', namn: 'Backen i norr', text: 'Lite skog, lite sten. Plats för allt som inte får plats annars.', kraver: 'egen', rekt: { minX: -TOMT, maxX: TOMT, minZ: -TOMT - 22, maxZ: -TOMT } },
];for (const m of MARK_TOMTER) Object.assign(m, B.MARK_PRIS[m.id]);
const MARK_GER = {
  egen: 'Rang Lagfaren – ängen och backen går att köpa',
  oster: '22 × 42 m till – huset på ängen går att köpa',
  tippkant: 'Plats runt tippen – Rolfs soptipp går att köpa',
  tippen: 'Tippen blir din – och Rolfs hus går att köpa',
  rolfhus: 'Rolf och Kajsa flyttar in med veranda',
  huset: 'Ett riktigt hus – folkbokföring ihop med tomten',
  norr: '42 × 22 m till – kanske en begravd Volvo',
};
for (const m of MARK_TOMTER) m.ger = MARK_GER[m.id];

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
  return true;
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
      return rad({ bild: `<span class="ui-headik" style="width:54px;height:54px">${IKON.hus || IKON.kista}</span>`, titel: t.namn + (ag ? ' ✅' : ''), text: (t.ger && !ag ? `<b class="mark-ger">Du får: ${t.ger}.</b> ` : '') + t.text, hoger: knappen });
    }).join('')
    + (S.folkbokMal ? sektion('Folkbokföring') + rad({ bild: `<span class="ui-headik" style="width:54px;height:54px">${IKON.bok}</span>`, titel: S.folkbokford ? 'Du är folkbokförd här ✅' : 'Folkbokför dig på Soptippsvägen 1', text: S.folkbokford ? 'Posten hittar hit nu. Mamma också.' : `Köp tomten du bor på och bygg ett riktigt hus på ängen först (${['egen', 'huset'].filter(agerMark).length}/2).`, hoger: S.folkbokford ? '' : knapp({ text: 'Skicka in blanketten', typ: kanFolkbokfora() ? 'gron' : 'neutral', attr: `data-folkbok${kanFolkbokfora() ? '' : ' disabled'}`, ikon: 'bok' }) }) : '');
  const titel = S.folkbokford ? 'Status: godsägare · folkbokförd' : S.mark.agt.length === 0 ? 'Status: hobo dweller' : S.mark.agt.length === MARK_TOMTER.length ? 'Status: godsägare' : 'Status: markägare';
  oppnaRuta(panel({ portrattVem: 'rolf', titel: 'Mark till salu', sub: titel, resurser: resurserHtml() + resurs('hjarta', `Respekt ${S.respekt}`), kropp }), (el) => {
    el.querySelectorAll('[data-kop]').forEach((k) => { k.onclick = () => kopMark(k.dataset.kop); });
    const fb = el.querySelector('[data-folkbok]'); if (fb) fb.onclick = () => folkbokfor();
  });
}
const ROLF_MARK = {
  egen: `Bengt-Åke sa ja! Han ville först ha ${(B.MARK_PRIS.egen.pris + 10000).toLocaleString('sv-SE')} men ja sa att du städat hela hans skräpiga mark gratis. Då blev de ${B.MARK_PRIS.egen.pris / 1000}. Grattis, markägare. /R`,   // punkt BD: beloppet följer balans.js
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
  if (id !== 'norr' || !S.julFirad) setTimeout(() => sms('rolf', ROLF_MARK[id]), 2500);
  if (id === 'norr' && S.julFirad) setTimeout(() => visaBengt('HMPF. Backen. Den är brant. Den passar er.'), 1500);
  if (id === 'rolfhus') { S.tippgodsagare = true; if (S.tradgard?.rosor) S.tradgard.rosorFlyttade = true; setTimeout(() => { kollaSkylt(); ritaRolfRosor(); }, 3000); }
  if (id === 'egen') setTimeout(() => sms('mamma', 'Pappa säger att du har KÖPT MARK?! Hur?? Vems?? Har du skrivit på något?? Skicka papperen till mig så läser jag.'), 9000);
  sparaSnart();
}
// ---------- Åk med Rolf i sopbilen: morgonkontoret, konditoriet och det hemliga stället ----------
const RESA_FYND = ['ra_flipper', 'ra_kiosk', 'ra_moped', 'ra_bensin', 'ra_emalj', 'ra_fatgrill'];
function kollaResa() {
  if (S.resa || S.dag < 10 || !S.rolfNummer || !S.kapitelKlart) return;
  S.resa = 'bjuden'; sparaSnart();
  setTimeout(() => sms('rolf', 'Hörru. Vill du följa me på rundan? Morgonkontoret, konditoriet o ett ställe ja aldrig visat nån. Hoppa in när ja tutar vid tippen. /R'), 6000);
  return true;
}
// flera repliker efter varandra – nästa börjar när den förra pratat klart
function sagaIOrdning(vem, rader, i = 0) {
  if (i >= rader.length) return;
  prata(vem, rader[i], 'STORY');
  const vanta = () => { if (performance.now() < pratarTill) { setTimeout(vanta, 250); return; } setTimeout(() => sagaIOrdning(vem, rader, i + 1), DIALOG_PAUS); };
  setTimeout(vanta, 600);
}
function rolfSager(text) { const t = rolfDialekt(text, false).replace('​', ''); prata('rolf', t); return t; }
const RESA = [
  { titel: 'Morgonkontoret', sub: 'Macken vid riksvägen, 06:40', rad: 'Hä sitter vi varje morron. Lasse, Gunnar o ja. Lasse har kört buss i 38 år. Gunnar har aldrig sagt varför han e hä. Vi frågar int. Ta en bulle, ja bjuder.',
    val: [['Kanelbulle', 'Lasse nickar. "Rätt val, unge." Gunnar säger ingenting, men han flyttar på sig så du får sitta.', 2], ['Vaniljbulle', 'Gunnar tittar upp för första gången. "Vanilj." Han nickar långsamt. Rolf viskar: "Han gillar dej. De har aldrig hänt."', 4], ['Köp bullar åt alla', 'Det blir tyst vid bordet. Sen klappar Lasse dig på axeln. "Den här e bra, Rolf." Rolf rodnar.', 6]] },
  { titel: 'Konditoriet', sub: 'Brunnsgatan, efter lunch', rad: 'Ja tar alltid en bit prinsesstårta hä. Birgitta o ja gick hit. Varje fredag. I tjugo år.',
    val: [['Fråga om Birgitta', 'Rolf tittar ut genom fönstret länge. "Vi sålde huset 2009. Hon behövde vård. Ja behövde int ett hus. Ja behövde henne." Han är tyst en stund. "Hon dog för sju år sen. Hon hade gillat dej. Hon gillade fôlk som fixar saker." Han skjuter över halva tårtbiten till dig.', 6, ['Vi sålde huset 2009. Hon behövde vård. Ja behövde int ett hus. Ja behövde henne.', 'Hon dog för sju år sen. Hon hade gillat dej. Hon gillade fôlk som fixar saker.']], ['Säg att tårtan är god', '"Den e bäst i länet," säger Rolf. "Birgitta tyckte de oxå." Han ler lite. Sen tar han en bit till.', 2, ['Den e bäst i länet. Birgitta tyckte de oxå.']]] },
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
      const [, svar, r, roster] = st.val[+k.dataset.val]; ljud.plock();
      if (roster) sagaIOrdning('rolf', roster);   // konditoriet: Rolfs egna repliker läses upp (ElevenLabs NY-rolf-konditori-1–3)
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
  { id: 'husvagn', mark: 'tippkant', x: TIPP.x - TIPP.r - 12, z: 2, namn: 'En rostig husvagn från -78', ger: () => { laggTill('rulle2', 3); S.mynt += 1200; }, text: 'Någon har bott här. I skåpet: tre rullar röd PETG, 1 200 kr och en stickad gardin.', sms: ['rolf', 'Husvagnen? De va vår första. Birgitta o ja bodde där när vi kom hit 2009. Gardinen stickade hon. Behåll pengarna. Gardinen me. /R'] },
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
const BENGT_SKRIK = ['BORT FRÅN MITT STAKET, SA JAG!', 'JAG SER DIG! JAG HAR KIKARE!', 'EN GÅNG TILL SÅ SLÄPPER JAG LÖS HUNDEN!', 'FÖRSVINN, SOPUNGE!', 'DETTA ÄR PRIVAT MARK, FÖR TUSAN!', 'JAG RINGER POLISEN! … NÄR JAG HITTAR TELEFONEN!'];
let bengtTid = 0;
function kollaBengt(dt) {
  bengtTid -= dt; if (bengtTid > 0 || !ui.igang || sover) return;
  const g = spelare.granser, p = spelare.pos, kant = Math.min(p.x - g.minX, g.maxX - p.x, p.z - g.minZ, g.maxZ - p.z);
  if (kant > 1.6 || Math.abs(p.z - VAG_Z) < 4 || Math.hypot(p.x - ALI.x, p.z - ALI.z) < 9) return;   // inte vid vägen eller hos Ali
  if (agerMark('egen') && S.respekt >= 60) return;   // nu känner han dig – han skriker inte längre
  bengtTid = 40;
  S.bengtSkrik = (S.bengtSkrik || 0) + 1;
  const t = BENGT_SKRIK[(S.bengtSkrik - 1) % BENGT_SKRIK.length];
  ui.toast(`😡 Bengt-Åke skriker från skogen: "${t}"`, 'fel'); argtSkrik(); try { visaBengt(t); } catch {}
  if (S.helen) setTimeout(() => { replik('helen', HELEN_BENGT, `Helen: ”${HELEN_BENGT}”`, 'STORY'); varldsBubbla(helenFig, HELEN_BENGT, 3.5); setTimeout(() => ui.toast('Det blir tyst i skogen.', 'bra'), 3500); }, 2200);   // punkt AN
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
  // flytta in: ett klick på huset (kapitel 4, dag 18)
  interaktor.registrera(storHus, {
    text: () => S.flyttatIn ? 'Ditt hus på ängen' : '🏡 Flytta in i huset',
    kanAktivera: () => storHus.visible,
    aktivera: () => {
      if (S.flyttatIn) { ui.toast('Hemma.'); return; }
      S.flyttatIn = true; konfetti(160); fanfar(); ljud.stor(); sparaSnart();
      ui.toast('🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu.', 'guld');
      setTimeout(() => sms('mamma', 'Du har flyttat in i ett HUS. Med trappa. Jag har köpt en dörrmatta. Det står VÄLKOMMEN på den. Pappa ville att det skulle stå GÅ HEM. Jag sa nej.'), 5000);
    },
  });
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
const kanFolkbokfora = () => agerMark('egen') && agerMark('huset') && !S.folkbokford;   // tomten du bor på + ett riktigt hus räcker – resten av marken är efterspel
function kollaPolett() {
  if (S.folkbokMal || S.dag < 14 || !S.kapitelKlart) return;
  S.folkbokMal = true; markTavla.visible = true; S.mark.tips = true; sparaSnart();
  setTimeout(() => sms('mamma', 'Paketet kom TILLBAKA. Det står "Okänd mottagare". Är du ens skriven där?? Vart ska jag skicka din POST?!'), 4000);
  setTimeout(() => visaLapp('polett'), 9000);
  efterBrev('polett', () => ui.toast('💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen).', 'guld'));   // U011: när mammas paket-dagbok är läst
  setTimeout(() => sms('bror', 'Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte.'), 30000);
  return true;
}
function folkbokfor() {
  if (!kanFolkbokfora()) return;
  S.folkbokford = true; S.folkbokDag = S.dag; ui.stangButik(); sparaSnart();
  konfetti(260); fanfar(); ljud.stor();
  andraRespekt(30, 'Folkbokförd på Soptippsvägen 1');
  ui.toast('📮 Du är folkbokförd! Soptippsvägen 1 är din adress.', 'guld');
  setTimeout(() => konfetti(200), 5000);   // punkt BD: mammas brev kommer på julen (mammajul), inte här
  setTimeout(() => sms('rolf', 'Grattis granne. Nu e du på riktigt. Ja tar me grillen på lördag. Kajsa oxå. /R'), 20000);
  setTimeout(() => sms('bror', 'Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis brorsan. Eller vad du nu är. Du vet.'), 32000);
  setTimeout(() => ui.visaStart('🏆 Du är hemma', `<b>Du klarade det på dag ${S.dag}.</b><br>Från hobo dweller vid en soptipp till godsägare och folkbokförd. Mamma är imponerad. Pappa log.<br><br>Spelet fortsätter – bygg vidare så länge du vill.`, 'Fortsätt bygga'), 45000);
}
FYND.forEach(byggFynd); kollaResa();
uppdateraMark(); kollaMarkTips(); kollaPolett(); uppdateraArstid();

// ---------- Bokmärken: varje dag sparas så att man kan hoppa tillbaka i storyn ----------
const BOKMARKE_NYCKEL = `spar:${SPAR_ID}:dagar`;
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
S.kapitel = Math.max(S.kapitel || 1, kapitelNu(), S.kapitelKlart ? 2 : 1);
S.kapVisad = [...new Set([...(S.kapVisad || []), ...[2, 3, 4].filter((k) => k < S.kapitel || (k === 2 && S.kap2Visad))])];
if (S.kapitel >= 4) { S.mark.tips = true; try { markTavla.visible = true; } catch {} }
// den som redan klarat kapitel 1 innan kapitel 2 fanns ska inte få firandet igen
if (S.kapitelKlart && S.steg < STEG.findIndex((x) => x.del === K2)) S.steg = STEG.findIndex((x) => x.del === K2);
// ---------- Introt: varför bor du vid en soptipp? ----------
const MAMMA_SVAR_K1 = ['HAHA träplankor?!', 'Vad är det där för nåt? Du har ju inte ens TAPETER på väggarna.', 'Och var är badrummet?? Du duschar väl??', 'Pappa säger "aha, vad lugnt då". Pappa säger det om allt.'];
// sista raden: mamma säger något fint om det du faktiskt har
const MAMMA_K1_SLUT = { gardin: '…men gardinerna i fönstret var fina. Har du gjort dem själv? ❤️', fonster: '…men fönstret var fint. Det kommer in ljus i alla fall. ❤️', annars: '…men du har en säng. Det är en början. Jag är stolt. Säg inte det till pappa. ❤️' };
const mammaK1Slut = () => harPlacerat('r_gardin') ? MAMMA_K1_SLUT.gardin : (S.hem?.fonster?.length ? MAMMA_K1_SLUT.fonster : MAMMA_K1_SLUT.annars);
const MAMMA_SVAR_K2 = ['Mamma här. Du skickade en bild på en JACUZZI?!', '…och tapeter. Och en gamingbod med lampor i alla färger.', 'Okej. Jag erkänner. Det är finare än hemma.', 'Kan jag komma och bada på söndag? Pappa tar med korv.'];
// allt som sägs högt i spelet – används för att förgenerera rösterna (verktyg/roster.py)
function rostManus() {
  const L = [], D = [], vid = (v) => { var_ = v; }; let var_ = '';
  // D: [figur, visad text, källtext (före rolfDialekt), var den hörs] – för verktyg/roster-manus.json
  const add = (vem, t) => { if (!t || typeof t !== 'string') return; if (vem === 'rolf') { for (const sf of [true, false]) { const v = rolfDialekt(t, sf).replace('\u200b', ''); L.push([vem, v]); D.push([vem, v, t, var_]); } } else { L.push([vem, t]); D.push([vem, t, t, var_]); } };
  vid('Rolfs brev och tack i postlådan (kapitel 1)'); ROLF.forEach((x, i) => { add('rolf', x.brev); add('rolf', x.tack); if (i > 0) add('rolf', rolfMorgonRa(i)); });
  vid('Rolfs sms ibland'); ROLF_IBLAND.forEach((t) => add('rolf', t));
  vid('Rolfs skumma jobb: brev och tack'); ROLF_JOBB.forEach((x) => { add('rolf', x.brev); add('rolf', x.tackJa); add('rolf', x.tackNej); });
  vid('Chefen (också Rolf): böter'); CHEFEN.forEach((t) => add('chefen', t));
  vid('Sopbilsresan med Rolf'); RESA.forEach((x) => add('rolf', x.rad));
  RESA.forEach((x) => (x.val || []).forEach((v) => (v[3] || []).forEach((t) => { L.push(['rolf', t]); D.push(['rolf', t, t, 'Sopbilsresan: konditoriet']); })));   // redan på värmländska – ingen rolfDialekt
  vid('Rolfs tack för presenter, jobblappar och fynd'); Object.values(ROLF_TACK).forEach((x) => add('rolf', x.text)); ROLF_JOBBLAPP.forEach((t) => add('rolf', t)); [2, 3, 4, 5].forEach((n) => add('rolf', rolfFyndSms(n)));
  vid('Rolfs sms om marken och säljlådan'); Object.values(ROLF_MARK).forEach((t) => add('rolf', t)); LADAN_SMS.forEach((t) => add('rolf', t));
  vid('Brorsans sms dag 1 (punkt AS)'); add('bror', BROR_SMS1); add('bror', BROR_SMS2);
  vid('Ali om det begagnade (punkt AS)'); add('ali', ALI_GAMMALKVARN); add('ali', ALI_BATTERI);
  vid('Haggan Helen i efterspelet (punkt AN)'); HELEN_RADER().forEach((t) => add('helen', t)); [HELEN_ROLF_SMS, HELEN_ROLF_RITNING, HELEN_ROLF_1987].forEach((t) => add('rolf', t));
  vid('Pappas besök (med Rolf första gången)'); [PAPPA_SCEN, ...PAPPA_KORT, PAPPA_SLUT, ...PAPPA_DRYG, PAPPA_DRYG_SLUT].flat().forEach(([v, t]) => { if (t !== '…') add(v, t); });
  vid('Sms med svarsalternativ och småprat'); SMS_POOL.forEach((m) => { add(m.vem, m.text); (m.svar || []).forEach(([, f]) => add(m.vem, f)); });
  vid('Familjens sms dag för dag'); Object.values(FAMILJ).flat().forEach(([v, t]) => add(v, t));
  vid('Telefonsamtal'); Object.values(SAMTAL).forEach((sm) => sm.rader.forEach(([v, t]) => add(v, t)));
  vid('Repliker ute i världen och när Ali säger nej'); LIV_ROST.forEach(([v, t]) => add(v, t)); Object.values(ALI_NEJ).forEach((t) => add('ali', t));
  vid('Sms ibland (storebror och mamma)'); BROR_IBLAND.forEach((t) => add('bror', t)); MAMMA_IBLAND.forEach((t) => add('mamma', t));
  vid('Mammas svar om burkarna'); [...MAMMA_SVAR_K1, ...Object.values(MAMMA_K1_SLUT)].forEach((t) => add('mamma', t)); MAMMA_SVAR_K2.forEach((t) => add('mamma', t));
  vid('Ali i butiken'); [...ALI_HEJ, ...ALI_KLICKAR, ...ALI_BLOMMAR].forEach((t) => add('ali', t)); add('ali', ALI_FORSTA); ALI_STANGT.forEach((t) => add('ali', t)); Object.values(ALI_SPECIAL).forEach((t) => add('ali', t));
  vid('Ali när du printat hans modell'); for (const [id, m] of aliStoltSaker()) add('ali', aliStoltMall(id)(sakNamn(m.namn)));
  vid('Alis sms om nya 3D-modeller'); for (const id of new Set(Object.values(HUVUDKOP))) if (MASKINER[id] && !ALI_SPECIAL[id] && !ALI_INTE.has(id)) add('ali', ALI_NY_MALL(sakNamn(MASKINER[id].namn)));
  vid('Full byggplatta (punkt 11)'); add('du', PLATTA_TANKE); add('bror', PLATTA_BROR);
  vid('Storykedjan (punkt BE)'); Object.values(KEDJA_TEXT).forEach(([kv, va, vem = 'du']) => { if (kv) add(vem, kv); if (va) add(vem, va); });
  vid('Lappar, brev och dagbok'); Object.entries(LAPPAR).forEach(([id, [titel, t]]) => add(vemAvTitel(titel), t));
  vid('Introt'); INTRO_TAL().forEach(([v, t]) => add(v, t));
  vid('Berättaren läser målen'); Object.values(STEG_TAL).forEach((t) => add('berattare', t));
  vid('Dina tankar, tips och varningar'); add('du', DU_BYGG); Object.values(FORSTA).forEach((f) => add('du', f.rost)); Object.values(COACH).forEach((t) => add('du', t)); add('du', DU_SANG); Object.values(VARN).forEach((t) => add('du', t)); add('ali', ALI_ROP); add('ali', ALI_BONUS_FORSTA); ALI_BONUS_RAD.forEach(([, t]) => add('ali', t)); PUFFAR.forEach((p) => add('du', p.text));
  rostManus.detalj = D;
  return L;
}
// ---------- Punkt AI3/AI4: introt – 14 kort i tre delar, med lager som tonas och rör sig (CSS) ----------
// Bilderna renderas ur spelet (verktyg/ai3.mjs → intro/<namn>.webp). Rummet i kort 2–6 är samma bakgrund – bara kalendern,
// mamma och stöket byts som lager ovanpå. Ingen svart blinkning mellan korten: lagren tonas (0,4 s). Klick/mellanslag = nästa kort.
const SKJUL_PTS = {"tak":[[0.2273,0.2665],[0.3387,0.2101],[0.7586,0.181],[0.7778,0.2417],[0.2273,0.2665]],"dorr":[[0.4176,0.7275],[0.4135,0.3365],[0.5517,0.3352],[0.5491,0.7497]],"fonster":[[0.3103,0.4923],[0.3078,0.3865],[0.3794,0.3876],[0.381,0.4969],[0.3103,0.4923]],"dorrMitt":[0.481,0.5442]};
const KORT12_PTS = {"stall":[[49.3,44.6,39.9,42.7],[49.3,43.7,49.3,44.6],[49.3,44.6,49.8,44.3],[40.5,42.5,49.8,44.3],[49.8,44.3,49.8,43.4],[39.9,41.9,49.3,43.7],[49.8,43.4,49.3,43.7],[43.3,43.4,42.5,43.3],[43.1,35.7,43.3,43.4],[43.3,43.4,43.8,43.1],[49.8,43.4,40.5,41.6],[43.1,43,42.5,43.3],[42.5,43.3,42.4,35.6],[43.1,43,43.8,43.1],[43.8,43.1,43.7,35.6],[42.9,35.5,43.1,43],[40.5,42.5,39.9,42.7],[39.9,42.7,39.9,41.9],[40.5,41.6,40.5,42.5],[53.8,42,45,40.4],[53.8,41.1,53.8,42],[53.8,42,54.2,41.7],[39.9,41.9,40.5,41.6],[45.5,40.2,54.2,41.7],[54.2,41.7,54.2,40.9],[45,39.7,53.8,41.1],[54.2,40.9,53.8,41.1],[48.2,41,47.4,40.9],[48.1,34.1,48.2,41],[48.2,41,48.6,40.8],[47.9,40.7,47.4,40.9],[47.4,40.9,47.4,34],[54.2,40.9,45.5,39.5],[47.9,40.7,48.6,40.8],[48.6,40.8,48.6,33.9],[47.9,33.9,47.9,40.7],[45.5,40.2,45,40.4],[45,40.4,45,39.7],[45.5,39.5,45.5,40.2],[45,39.7,45.5,39.5],[43.2,36.2,42.4,36.1],[43.1,35.3,43.2,36.2],[43.2,36.2,48.6,34.4],[47.9,34.3,42.4,36.1],[42.4,36.1,42.4,35.2],[42.4,35.6,43.1,35.7],[43.7,35.6,43.1,35.7],[43.7,35.6,42.9,35.5],[42.4,35.6,42.9,35.5],[42.4,35.2,43.1,35.3],[48.6,33.5,43.1,35.3],[42.4,35.2,47.9,33.4],[47.9,34.3,48.6,34.4],[48.6,34.4,48.6,33.5],[47.9,33.4,47.9,34.3],[47.4,34,48.1,34.1],[48.6,33.9,48.1,34.1],[47.4,34,47.9,33.9],[48.6,33.9,47.9,33.9],[48.6,33.5,47.9,33.4]],"kabel":[[45.6,34.7],[46,35.3],[46.3,35.9],[46.6,36.5],[46.9,37.1],[47.2,37.7],[47.5,38.3],[47.8,38.8],[48,39.1],[48.3,39.3],[48.6,39.4],[48.9,39.3],[49.2,39.1],[49.5,38.7],[49.8,38.3],[50.1,37.9],[50.4,37.3],[50.7,36.8],[50.9,36.2],[51.2,35.7],[51.5,35.1],[51.7,34.5],[52,33.8],[52.3,33.1],[52.5,32.3],[52.7,31.5],[52.9,30.7],[53.2,29.9],[53.4,29.1],[53.6,28.4],[53.8,27.6]]}
const KORT13_PTS = {"kvarn":[[73.1,53,69.9,48.6],[58.9,48.6,60.3,53],[73.1,51.9,73.1,53],[73.1,53,60.3,53],[60.3,53,60.4,51.9],[69.9,47.6,73.1,51.9],[60.4,51.9,58.9,47.6],[60.4,51.9,73.1,51.9],[58.9,47.6,58.9,48.6],[58.9,48.6,69.9,48.6],[69.9,48.6,69.9,47.6],[41.1,47.8,42.9,42.2],[28.8,42.2,23.3,47.8],[40.6,27.5,41.1,47.8],[41.1,47.8,23.3,47.8],[23.3,47.8,21.9,27.5],[69.9,47.6,58.9,47.6],[43.2,42.4,43.6,40.8],[39.7,40.8,38.9,42.4],[43.1,39.3,43.2,42.4],[43.2,42.4,38.9,42.4],[38.9,42.4,38.9,39.3],[28,26.1,28.8,42.2],[28.8,42.2,42.9,42.2],[42.9,42.2,42.7,26.1],[26.4,41.5,25.5,41.3],[27.1,41.3,26.4,41.5],[25.5,41.3,24.9,40.8],[27.8,40.8,27.1,41.3],[26.7,40.2,25.3,41.3],[25.3,41.3,24.7,41.1],[25.9,41.1,25.3,41.3],[25.9,41,26.7,41.2],[26.7,41.2,27.5,41],[26,41.2,26.3,40.9],[24.7,40.9,24.3,41.2],[25.5,33,26,41.2],[26,41.2,24.3,41.2],[24.3,41.2,23.8,33],[24.7,41.1,26.1,40],[25.9,41.1,27.2,40],[24.7,41.1,24.5,40.5],[26.1,40.5,25.9,41.1],[25.3,40.5,25.9,41],[27.5,41,28.1,40.5],[24.2,32.8,24.7,40.9],[24.7,40.9,26.3,40.9],[26.3,40.9,25.9,32.8],[24.9,40.8,24.5,40.1],[28.1,40.1,27.8,40.8],[26.1,40.8,27.4,39.7],[39.7,37.9,39.7,40.8],[39.7,40.8,43.6,40.8],[43.6,40.8,43.6,37.9],[40.6,40.8,41.5,39.9],[40.6,40.8,40.3,40.7],[40.4,40.4,40.6,40.8],[40.3,40.7,41.2,39.8],[40.3,40.7,39.8,40.3],[24.9,39.8,25.3,40.5],[28.1,40.5,28.4,39.8],[24.5,40.5,25.8,39.4],[26.1,40.5,27.4,39.4],[24.5,40.5,24.7,39.9],[25.8,39.9,26.1,40.5],[24.5,40.5,25.8,39.4],[40.4,40.4,41.3,39.5],[39.9,39.9,40.4,40.4],[40.7,39.3,39.8,40.3],[39.8,40.3,39.3,39.7],[26.1,40,26.7,40.2],[26.7,40.2,27.2,40],[24.5,40.1,24.4,39.3],[28,39.3,28.1,40.1],[28.1,40.1,28.4,39.8],[25.8,39.4,26.1,40],[27.2,40,27.4,39.4],[24.7,39.9,26,38.9],[25.8,39.9,27.1,38.9],[24.7,39.9,25.2,39.7],[25.2,39.7,25.8,39.9],[39.9,39.9,40.8,38.9],[41.5,39.9,42.4,38.9],[39.3,39.5,39.9,39.9],[24.8,39,24.9,39.8],[28.4,39.8,28.4,39],[41.2,39.8,42.2,38.9],[24.4,39.7,24.8,39.4],[25.2,39.7,26.6,38.7],[39.3,39.7,40.2,38.8],[39.3,39.7,39.1,39.4],[39.3,39.5,40.3,38.5],[41.3,39.5,42.3,38.6],[26,38.9,25.8,39.4],[27.4,39.4,27.1,38.9],[39.1,39.4,40,38.4],[24.4,39.3,24.7,38.6],[27.6,38.6,28,39.3],[43.6,37.9,43.1,39.3],[38.9,39.3,39.7,37.9],[38.9,39.3,43.1,39.3],[41.7,38.4,40.7,39.3],[25.1,38.3,24.8,39],[28.4,39,28,38.3],[26.6,38.7,26,38.9],[27.1,38.9,26.6,38.7],[40.8,38.9,41.8,38],[42.2,38.9,43.1,37.9],[42.4,38.9,43.4,38],[40.2,38.8,41.2,37.9],[24.7,38.6,25.4,38.1],[27,38.1,27.6,38.6],[42.3,38.6,43.2,37.7],[40.3,38.5,41.3,37.6],[40,38.4,41,37.5],[42.6,37.5,41.7,38.4],[25.7,37.8,25.1,38.3],[28,38.3,27.3,37.8],[25.4,38.1,26.2,37.9],[26.2,37.9,27,38.1],[41.8,38,42.7,37.1],[43.4,38,44.3,37.1],[43.6,37.9,39.7,37.9],[41.2,37.9,42.1,36.9],[43.1,37.9,44.1,37],[26.5,37.7,25.7,37.8],[27.3,37.8,26.5,37.7],[43.2,37.7,44.1,36.8],[41.3,37.6,42.2,36.7],[41,37.5,41.9,36.6],[43.6,36.5,42.6,37.5],[42.7,37.1,43.6,36.2],[44.3,37.1,45.3,36.1],[44.1,37,45.1,36],[42.1,36.9,43.1,36],[44.1,36.8,45,35.9],[42.2,36.7,43.1,35.8],[41.9,36.6,42.9,35.7],[44.6,35.5,43.6,36.5],[43.6,36.2,44.5,35.3],[45.3,36.1,46.2,35.1],[43.1,36,44,35],[45.1,36,46,35],[45,35.9,45.9,34.9],[43.1,35.8,44,34.9],[42.9,35.7,43.8,34.7],[45.5,34.5,44.6,35.5],[44.5,35.3,45.4,34.4],[24.8,34.2,23,35.2],[23,35.2,22.4,35],[23.6,35,23,35.2],[46.2,35.1,47.1,34.1],[22.4,35,24.2,34],[23.6,35,25.4,34],[22.4,35,22,34.5],[24,34.5,23.6,35],[22.8,34.5,22.8,35],[21.9,34.5,22,35],[44,35,45,34],[46,35,46.9,33.9],[23.6,34.4,23.6,34.9],[21.4,34.4,21.6,34.9],[44,34.9,44.8,34],[45.9,34.9,46.7,33.9],[21.5,34.2,21.6,34.7],[24.1,34.7,24.2,34.2],[43.8,34.7,44.7,33.8],[22.1,34,22.2,34.6],[24.3,34,24.2,34.6],[22,34.5,23.8,33.6],[24,34.5,25.7,33.6],[22,34.5,22,33.8],[24,33.8,24,34.5],[24,34.5,25.7,33.6],[22.7,33.9,22.8,34.5],[21.9,33.9,21.9,34.5],[22.9,34,23,34.5],[23.8,34,23.7,34.5],[46.4,33.5,45.5,34.5],[23.5,33.8,23.6,34.4],[21.5,33.8,21.4,34.4],[45.4,34.4,46.2,33.5],[24.2,34,24.8,34.2],[24.8,34.2,25.4,34],[21.6,33.7,21.5,34.2],[24.2,34.2,24.1,33.7],[21.9,34.1,23.8,33.3],[47.1,34.1,47.9,33],[23.8,33.6,24.2,34],[25.4,34,25.7,33.6],[22.1,33.6,22.1,34],[22.9,33.5,22.9,34],[23.7,33.5,23.8,34],[24.1,33.6,24.3,34],[44.8,34,45.7,33],[45,34,45.8,33],[46.9,33.9,47.8,32.8],[46.7,33.9,47.5,32.9],[22,33.8,23.8,33],[24,33.8,25.7,33],[22,33.8,22.3,33.3],[23.5,33.3,24,33.8],[44.7,33.8,45.5,32.8],[23.8,33,23.8,33.6],[25.7,33.6,25.7,33],[23.3,28.9,23.6,33.6],[23.6,33.6,39.4,33.6],[39.4,33.6,39.3,28.9],[46.2,33.5,46.9,32.5],[47.2,32.4,46.4,33.5],[22.3,33.3,24.1,32.5],[23.5,33.3,25.3,32.5],[22.3,33.3,22.9,33.1],[22.9,33.1,23.5,33.3],[22.9,33.1,24.7,32.3],[25.9,32.8,25.5,33],[23.8,33,24.2,32.8],[23.8,33,25.5,33],[24.1,32.5,23.8,33],[25.7,33,25.3,32.5],[45.7,33,46.4,32.1],[45.8,33,46.6,32],[47.9,33,48.6,31.9],[47.5,32.9,48.2,31.8],[25.9,32.8,24.2,32.8],[45.5,32.8,46.3,31.8],[47.8,32.8,48.5,31.7],[24.7,32.3,24.1,32.5],[25.3,32.5,24.7,32.3],[46.9,32.5,47.6,31.4],[48,31.3,47.2,32.4],[46.4,32.1,47.1,31],[46.6,32,47.3,30.9],[48.6,31.9,49.3,30.8],[46.3,31.8,47,30.8],[48.2,31.8,48.9,30.7],[48.5,31.7,49.2,30.6],[47.6,31.4,48.3,30.4],[48.7,30.1,48,31.3],[47.1,31,47.7,30],[47.3,30.9,48,29.8],[47,30.8,47.6,29.7],[49.3,30.8,49.9,29.7],[48.9,30.7,49.5,29.6],[49.2,30.6,49.9,29.5],[48.3,30.4,48.9,29.3],[49.3,29,48.7,30.1],[47.7,30,48.4,28.9],[48,29.8,48.7,28.7],[47.6,29.7,48.3,28.6],[49.9,29.7,50.6,28.6],[49.5,29.6,50.2,28.6],[49.9,29.5,50.5,28.4],[48.9,29.3,49.5,28.3],[50,27.9,49.3,29],[39.3,28.9,23.3,28.9],[48.4,28.9,49,27.8],[48.7,28.7,49.3,27.6],[48.3,28.6,48.9,27.6],[50.6,28.6,51.2,27.6],[50.2,28.6,50.8,27.6],[50.5,28.4,51.1,27.3],[49.5,28.3,50.1,27.2],[50.6,26.8,50,27.9],[49,27.8,49.6,26.8],[48.9,27.6,49.6,26.5],[49.3,27.6,50,26.5],[51.2,27.6,51.8,26.6],[50.8,27.6,51.4,26.6],[42.7,26.1,40.6,27.5],[21.9,27.5,28,26.1],[21.9,27.5,40.6,27.5],[51.1,27.3,51.8,26.2],[32.7,27.2,31,27.1],[34.6,27.1,32.7,27.2],[50.1,27.2,50.8,26.2],[31,27.1,30,27],[36.3,27,34.6,27.1],[37.1,26.8,36.3,27],[21.4,15.7,29.9,26.9],[30,26.8,31,26.7],[44,16,37.2,26.8],[49.6,26.8,50.3,25.8],[51.3,25.8,50.6,26.8],[31,26.7,32.6,26.6],[36,26.6,37,26.7],[32.6,26.6,34.4,26.5],[34.4,26.5,36,26.6],[51.8,26.6,52.5,25.6],[51.4,26.6,52,25.6],[49.6,26.5,50.2,25.4],[50,26.5,50.6,25.5],[51.8,26.2,52.4,25.3],[50.8,26.2,51.4,25.3],[42.7,26.1,28,26.1],[50.3,25.8,50.9,24.8],[52,24.8,51.3,25.8],[52.5,25.6,53.1,24.8],[52,25.6,52.7,24.8],[54.8,24.7,55.7,25.6],[54.4,24.7,55.3,25.6],[56.2,25.2,55.7,25.6],[55.7,25.6,55.3,25.6],[55.3,25.6,55.3,25.1],[50.6,25.5,51.3,24.4],[50.2,25.4,50.9,24.4],[52.4,25.3,53.1,24.4],[51.4,25.3,52.1,24.4],[55.4,24.3,56.2,25.2],[56.5,24.5,56.2,25.2],[54.4,24.3,55.3,25.1],[55.3,25.1,55.6,24.5],[50.9,24.8,51.7,23.8],[52.7,23.8,52,24.8],[53.1,24.8,53.8,24.2],[52.7,24.8,53.3,24.2],[54.1,24.1,54.8,24.7],[53.7,24.1,54.4,24.7],[54.8,23.8,55.6,24.5],[56.5,24.5,55.8,23.8],[55.6,24.5,56.1,24.1],[56.5,24.1,56.5,24.5],[50.9,24.4,51.7,23.4],[51.3,24.4,52.1,23.4],[53.1,24.4,53.9,23.7],[52.1,24.4,52.9,23.7],[54.6,23.7,55.4,24.3],[53.7,23.7,54.4,24.3],[53.8,24.2,54.1,24.1],[53.3,24.2,53.7,24.1],[53.7,24.1,54.1,24.1],[55.4,23.4,56.1,24.1],[55.8,23.4,56.5,24.1],[56.1,24.1,56.5,24.1],[51.7,23.8,52.6,23],[53.6,23,52.7,23.8],[53.9,23,54.8,23.8],[55.8,23.8,54.9,23],[53.9,23.7,54.6,23.7],[52.9,23.7,53.7,23.7],[51.7,23.4,52.7,22.5],[52.1,23.4,53.1,22.5],[54.4,22.5,55.4,23.4],[54.8,22.5,55.8,23.4],[52.6,23,53.9,23],[54.9,23,53.6,23],[52.7,22.5,54.4,22.5],[53.1,22.5,54.8,22.5],[54.8,22.5,54.4,22.5],[35.5,16.7,30.4,16.6],[40,16.6,35.5,16.7],[30.4,16.6,25.7,16.4],[43.1,16.4,40,16.6],[25.7,16.4,22.3,16],[44,16,43.1,16.4],[22.3,16,21.5,15.6],[41.9,15.6,44,16],[21.5,15.6,24.2,15.3],[36.7,15.3,41.9,15.6],[24.2,15.3,30,15.1],[30,15.1,36.7,15.3]],"extruder":[[65.6,47.3,63.2,43.2],[51.6,43.2,51.9,47.3],[66.2,32.1,65.6,47.3],[65.6,47.3,51.9,47.3],[51.9,47.3,51.9,32.1],[52.8,40.5,52.8,43.6],[52.8,43.6,64.9,43.6],[64.9,43.6,65,40.5],[51.6,30.2,51.6,43.2],[51.6,43.2,63.2,43.2],[63.2,43.2,63.6,30.2],[65,40.5,52.8,40.5],[62.7,38.1,62.9,38.7],[63.1,38.7,63.3,38.1],[61.4,38.7,61.2,38.1],[61.7,38.1,61.6,38.7],[58.4,38.1,58.5,38.7],[58.7,38.7,58.8,38.1],[57,38.7,56.9,38.1],[57.2,38.1,57.1,38.7],[65.3,37.8,65.5,38.3],[65.7,38.3,65.9,37.8],[52.6,38.3,52.6,37.8],[52.7,37.8,52.6,38.3],[62.6,37.1,62.7,38.1],[63.3,38.1,63.4,37.1],[61.2,38.1,61.1,37.1],[61.8,37.1,61.7,38.1],[58.3,37.1,58.4,38.1],[58.8,38.1,58.9,37.1],[56.9,38.1,56.8,37.1],[57.2,37.1,57.2,38.1],[65.2,37,65.3,37.8],[65.9,37.8,66,37],[52.6,37.8,52.5,37],[52.7,37,52.7,37.8],[66,37.8,66.6,37.8],[66.6,37.8,66,37.6],[67.1,37.6,66.6,37.8],[65.1,37.4,66,37.8],[66,37.8,67,37.4],[65.2,37.5,52.5,37.7],[62.6,37.7,61.1,37.7],[58.3,37.7,56.8,37.7],[66,37.6,65.1,37.4],[66,37.6,65.8,37],[67.4,37,67.1,37.6],[64.8,36.5,65.1,37.4],[67,37.4,67.4,36.5],[67.4,37.2,67.4,36.8],[63.4,37.1,63.4,35.9],[62.6,36,62.6,37.1],[61.8,35.9,61.8,37.1],[61.1,37.1,61.1,36],[58.9,37.1,58.8,35.9],[58.3,36,58.3,37.1],[57.2,35.9,57.2,37.1],[56.8,37.1,56.8,36],[66,37,66,36],[65.2,36.1,65.2,37],[52.7,36,52.7,37],[52.5,37,52.5,36.1],[65.8,37,64.8,36.5],[67.4,37,67.4,36.5],[65.8,37,66.1,36.5],[67.2,36.5,67.4,37],[65.8,37,64.8,36.5],[58.9,36.6,57.2,35],[66.1,36.5,65.2,35.6],[67.2,36.5,67,35.6],[66.1,36.5,66.6,36.2],[66.6,36.2,67.2,36.5],[65.2,35.6,64.8,36.5],[67.4,36.5,67,35.6],[66.6,36.2,66.1,35.3],[65.2,35.3,65.2,36.1],[52.5,36.1,52.5,35.3],[66,36,65.8,35.2],[52.6,35.2,52.7,36],[62.7,35,62.6,36],[61.1,36,61.1,35],[58.3,35,58.3,36],[56.8,36,56.8,35],[66,35.9,52.7,35.6],[63.4,35.9,63.2,34.9],[61.7,34.9,61.8,35.9],[58.8,35.9,58.7,34.9],[57.2,34.9,57.2,35.9],[63.4,35.7,61.8,35.7],[66.1,35.3,65.2,35.6],[67,35.6,66.1,35.3],[65.4,34.8,65.2,35.3],[52.5,35.3,52.6,34.8],[65.8,35.2,65.6,34.8],[52.6,34.8,52.6,35.2],[62.8,34.4,62.7,35],[61.1,35,61.3,34.4],[58.5,34.4,58.3,35],[56.8,35,56.9,34.4],[63.2,34.9,63,34.4],[61.5,34.4,61.7,34.9],[58.7,34.9,58.6,34.4],[57,34.4,57.2,34.9],[66.5,32.2,63.8,30.3],[51.4,30.3,51.7,32.2],[66.6,30.9,66.5,32.2],[66.5,32.2,51.7,32.2],[51.7,32.2,51.7,30.9],[63.6,30.2,66.2,32.1],[51.9,32.1,51.6,30.2],[51.9,32.1,66.2,32.1],[63.8,29.2,66.6,30.9],[51.7,30.9,51.4,29.2],[51.7,30.9,66.6,30.9],[51.4,29.2,51.4,30.3],[51.4,30.3,63.8,30.3],[63.8,30.3,63.8,29.2],[63.6,30.2,51.6,30.2],[55.9,30.2,55.1,30.1],[56.8,30.1,55.9,30.2],[55.1,30.1,54.5,30],[57.2,30,56.8,30.1],[52.1,25.3,54.4,30],[59.7,25.4,57.2,30],[54.5,29.9,54.9,29.8],[56.5,29.8,57.1,29.9],[54.9,29.8,55.7,29.8],[55.7,29.8,56.5,29.8],[63.8,29.2,51.4,29.2],[53.8,25.5,56.2,25.6],[56.2,25.6,58.5,25.5],[52.3,25.4,53.8,25.5],[58.5,25.5,59.6,25.4],[59.6,25.4,59.3,25.2],[53.5,25.1,52.3,25.2],[59.3,25.2,57.8,25.1],[55.6,25.1,53.5,25.1],[57.8,25.1,55.6,25.1]],"rulle":[[66,50.8,64.4,50.6],[67.5,50.6,66,50.8],[64.4,50.5,65.9,50.7],[65.9,50.7,67.5,50.5],[64.4,50.6,63.1,49.9],[69,49.9,67.5,50.6],[63,49.8,64.4,50.5],[67.5,50.5,68.9,49.8],[63.1,49.9,62,48.9],[70.1,48.9,69,49.9],[61.9,48.8,63,49.8],[68.9,49.8,70,48.8],[65.9,49.5,64.8,49.3],[67.1,49.3,65.9,49.5],[64.8,49.3,63.8,48.8],[68.1,48.8,67.1,49.3],[65.1,49.1,63.6,48.9],[66.5,48.9,65.1,49.1],[63.6,48.8,65,49],[65,49,66.5,48.8],[63.6,48.9,62.3,48.3],[67.9,48.3,66.5,48.9],[62,48.9,61.3,47.5],[70.9,47.5,70.1,48.9],[62.3,48.2,63.6,48.8],[66.5,48.8,67.8,48.2],[61.3,47.4,61.9,48.8],[70,48.8,70.8,47.4],[63.8,48.8,63,48],[69,48,68.1,48.8],[62.3,48.3,61.3,47.3],[69,47.3,67.9,48.3],[61.3,47.2,62.3,48.2],[67.8,48.2,68.9,47.2],[63,48,62.5,47],[69.6,47,69,48],[64,47.8,65.1,48],[65.1,48,66.2,47.8],[63.1,47.3,64,47.8],[66.2,47.8,67.2,47.3],[66.1,47.6,65.3,47.3],[66.9,47.3,66.1,47.6],[61.3,47.5,61.1,46],[71.2,46,70.9,47.5],[61,45.9,61.3,47.4],[70.8,47.4,71.1,45.9],[61.3,47.3,60.7,46],[69.7,46,69,47.3],[62.3,46.6,63.1,47.3],[67.2,47.3,68,46.6],[65.3,47.3,64.7,46.8],[67.5,46.8,66.9,47.3],[60.6,45.9,61.3,47.2],[68.9,47.2,69.7,45.9],[62.5,47,62.4,45.9],[69.8,45.9,69.6,47],[64.7,46.8,64.5,46],[67.8,46,67.5,46.8],[65.2,45.2,66.1,46.7],[66.1,46.7,65.7,46.6],[66.6,46.6,66.1,46.7],[61.9,45.7,62.3,46.6],[68,46.6,68.6,45.7],[65.7,46.6,64.8,45],[66.6,46.6,65.6,45],[65.7,46.6,65.5,46.3],[66.8,46.3,66.6,46.6],[65.5,46.3,64.5,44.7],[66.8,46.3,65.8,44.7],[65.5,46.3,65.5,45.8],[66.8,45.8,66.8,46.3],[66.9,46.2,65.8,44.8],[65.5,46.1,64.5,44.5],[60.7,46,60.5,44.6],[70,44.6,69.7,46],[61.1,46,61.4,44.5],[71,44.5,71.2,46],[61.1,46,61,45.9],[71.2,46,71.1,45.9],[64.5,46,64.8,45.2],[67.6,45.2,67.8,46],[64.4,45.8,65.1,46],[65.1,46,65.9,45.8],[64.5,46,63.7,44.5],[67.8,46,66.7,44.8],[60.4,44.5,60.6,45.9],[69.7,45.9,69.9,44.5],[61.3,44.4,61,45.9],[71.1,45.9,71,44.4],[62.4,45.9,62.6,44.8],[69.7,44.8,69.8,45.9],[62.4,45.9,61.7,44.6],[69.8,45.9,68.8,44.6],[63.9,45.3,64.4,45.8],[65.9,45.8,66.5,45.3],[65.5,45.8,64.6,44.3],[66.8,45.8,65.8,44.3],[65.5,45.8,65.8,45.5],[66.6,45.5,66.8,45.8],[61.7,44.6,61.9,45.7],[68.6,45.7,68.8,44.6],[65.8,45.5,64.8,44],[66.6,45.5,65.6,44],[65.8,45.5,66.2,45.4],[66.2,45.4,66.6,45.5],[66.2,45.4,65.2,43.9],[63.7,44.5,63.9,45.3],[66.5,45.3,66.7,44.5],[64.8,45.2,65.4,44.7],[67,44.7,67.6,45.2],[64.8,45,65.2,45.2],[65.2,45.2,65.6,45],[64.5,44.7,64.8,45],[65.6,45,65.8,44.7],[62.6,44.8,63.1,43.8],[69.2,43.8,69.7,44.8],[65.4,44.7,66.2,44.5],[66.2,44.5,67,44.7],[64.6,44.3,64.5,44.7],[65.8,44.7,65.8,44.3],[60.5,44.6,60.7,43.2],[69.9,43.2,70,44.6],[60.5,44.6,60.4,44.5],[70,44.6,69.9,44.5],[61.9,43.6,61.7,44.6],[68.8,44.6,68.7,43.6],[60.7,43.1,60.4,44.5],[69.9,44.5,69.8,43.1],[61.4,44.5,62.1,43.2],[70.4,43.2,71,44.5],[63.9,43.8,63.7,44.5],[66.7,44.5,66.6,43.8],[62.1,43.1,61.3,44.4],[71,44.4,70.3,43.1],[64.8,44,64.6,44.3],[65.8,44.3,65.6,44],[65.2,43.9,64.8,44],[65.6,44,65.2,43.9],[63.1,43.8,64,43],[68.4,43,69.2,43.8],[64.5,43.3,63.9,43.8],[66.6,43.8,66,43.3],[62.4,42.6,61.9,43.6],[68.7,43.6,68.2,42.6],[65.3,43.1,64.5,43.3],[66,43.3,65.3,43.1],[60.7,43.2,61.5,41.9],[69.2,41.9,69.9,43.2],[62.1,43.2,63.3,42.1],[69.3,42.1,70.4,43.2],[61.4,41.8,60.7,43.1],[69.8,43.1,69.2,41.8],[63.2,42,62.1,43.1],[70.3,43.1,69.2,42],[64,43,65.1,42.5],[67.4,42.5,68.4,43],[63.3,41.9,62.4,42.6],[68.2,42.6,67.4,41.9],[65.1,42.5,66.2,42.3],[66.2,42.3,67.4,42.5],[63.3,42.1,64.8,41.4],[67.9,41.4,69.3,42.1],[64.7,41.3,63.2,42],[69.2,42,67.8,41.3],[61.5,41.9,62.5,40.9],[68.2,40.9,69.2,41.9],[64.3,41.4,63.3,41.9],[67.4,41.9,66.5,41.4],[62.5,40.8,61.4,41.8],[69.2,41.8,68.1,40.8],[64.8,41.4,66.3,41.2],[66.3,41.2,67.9,41.4],[65.4,41.2,64.3,41.4],[66.5,41.4,65.4,41.2],[66.3,41.1,64.7,41.3],[67.8,41.3,66.3,41.1],[62.5,40.9,63.9,40.2],[66.9,40.2,68.2,40.9],[63.9,40.1,62.5,40.8],[68.1,40.8,66.8,40.1],[63.9,40.2,65.4,40],[65.4,40,66.9,40.2],[65.4,39.9,63.9,40.1],[66.8,40.1,65.4,39.9]],"slang":[[65.7,43.9],[66.2,44.3],[66.7,44.7],[67.1,45.2],[67.6,45.7],[68.1,46.1],[68.5,46.5],[69,46.9],[69.4,47.1],[69.9,47.4],[70.4,47.5],[71.1,47.5],[71.7,47.5],[72.4,47.4],[73.1,47.3],[73.8,47.1],[74.4,46.8],[75.1,46.5],[75.7,46.1],[76.3,45.7],[76.8,45.1],[77.2,44.5],[77.7,43.8],[78.1,43],[78.5,42.1],[78.9,41.1],[79.2,40.2],[79.6,39.2],[79.9,38.2],[80.1,37.1],[80.4,36.2],[80.6,35],[80.8,33.8],[80.9,32.6],[81,31.3],[81.1,30],[81.1,28.6],[81.1,27.3],[81.2,25.9],[81.2,24.6],[81.3,23.2]]};   // punkt BA: ritningslinjerna i kort 13 (räknas fram av verktyg/ai3.mjs)
const INTRO_PAUS = 1500;   // punkt 15: ms efter att rösten är klar innan nästa rad eller kort kommer i introt
const IB = (namn, extra = {}) => ({ id: extra.id || namn, src: `intro/${namn}.webp`, ...extra });
const RUM = (stok) => [IB('rum', { id: 'bg' }), ...['stok1', 'stok2', 'stok3'].slice(0, stok).map((n) => IB(n))];
const KAL = (dag, fore, cls = '') => ({ id: 'kal', kal: dag, fore, cls });
const INTRO = [
  { lager: [IB('rum1', { id: 'bg1' })], text: 'Ditt rum. Ungefär som vanligt.', franSvart: true },
  { lager: [...RUM(1), IB('mamma2', { id: 'mamma' }), KAL('MÅNDAG')], bubbla: 'Städa ditt rum!', vem: 'Mamma' },
  { lager: [...RUM(2), IB('mamma3', { id: 'mamma' }), KAL('TISDAG', 'MÅNDAG')], bubbla: 'Har du städat? Jag sa ju STÄDA!', vem: 'Mamma' },
  { lager: [...RUM(3), IB('mamma4', { id: 'mamma' }), KAL('ONSDAG', 'TISDAG')], bubbla: 'Det LUKTAR härifrån! Jag säger det inte igen!', vem: 'Mamma' },
  { lager: [...RUM(3), IB('mamma5', { id: 'mamma', cls: 'suddig' }), KAL('TORSDAG', 'ONSDAG', 'stor')], text: 'Hon sa det igen. Och igen. Och igen.' },
  { lager: [...RUM(3), IB('mamma6', { id: 'mamma', cls: 'efter-dorr' }), IB('dorr6', { cls: 'small' }), KAL('FREDAG', 'TORSDAG')], bubbla: 'Det ser ut som en SOPTIPP här inne!', vem: 'Mamma', ljud: 'dorr' },
  { lager: [IB('kort7')], bubbla: 'Vet du vad? Du kan lika gärna BO på en soptipp!', vem: 'Mamma' },
  { lager: [IB('kort8')], bubbla: 'Okej då. Då gör jag det.', vem: 'Du', du: true },
  { lager: [IB('kort9')], musik: true, text: 'Du packar det viktigaste: en ryggsäck och storebrors gamla 3D-skrivare. Den är långsam och låter konstigt. Storebror fick aldrig igång den. Allt surras fast på cykeln.' },
  { lager: [{ id: 'vagloop', loop: 'intro/vag.webp' }, { id: 'cyklist', sprite: 'intro/cyklist-tramp.webp', n: 4 }], text: 'Du cyklar. Förbi skolan. Förbi affären. Förbi där husen tar slut.' },
  { lager: [IB('gard'), IB('cyklist', { id: 'cyklist-in', cls: 'in-fran-vanster' })], text: 'I utkanten av stan ligger soptippen. Bredvid den: ett gammalt, tomt skjul och en gård full av skräp.' },
  { lager: [IB('kort12'), { id: 'rit12', rit12: true }], text: 'Cykeln har tagit dig hit. Nu får den jobba. Trampar du på cykeln, får skrivaren ström. Lite filament finns kvar på rullen.' },
  { lager: [IB('kort13'), { id: 'rit13', rit13: true }], rader: ['Runt omkring: skräp.', 'Och skräp är plast.', 'Med en kvarn kan plast bli filament.', 'Och med filament kan man printa… allt.'] },   // punkt BA: kvarnen, extrudern och rullen ritas fram rad för rad
  { lager: [{ id: 'skjul', skjul: true }], rader: ['Tänk om man kunde bygga det här till ett riktigt hem?', 'Täta väggar. En riktig dörr. Plåttak.', 'Och en gamingsetup.', 'En lugn fristad. Utan mammas tjat.'], logo: true },
];
const INTRO_TAL = () => INTRO.flatMap((p) => p.rader ? p.rader.map((t) => ['berattare', t]) : [[p.bubbla ? (p.du ? 'du' : 'mamma') : 'berattare', p.bubbla || p.text]]);
const introSrcer = (i) => (INTRO[i]?.lager || []).map((l) => l.skjul ? 'intro/skjul.webp' : l.src || l.loop || l.sprite).filter(Boolean);
const introLaddat = new Set();
function forladdaIntro(i) { for (const src of introSrcer(i)) { if (introLaddat.has(src)) continue; introLaddat.add(src); const im = new Image(); im.src = src; } }
const introCss = document.createElement('style');
introCss.textContent = `
.ph-namn{position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:rgba(8,9,14,.72);font-family:system-ui,sans-serif}
.ph-namn-ruta{display:flex;flex-direction:column;align-items:center;gap:14px;padding:30px 34px;min-width:min(380px,90vw)}
.ph-namn-ruta h2{margin:0;font:900 30px var(--rubrik,'Arial Black',system-ui);color:#fff}
.ph-namn-falt{width:100%;box-sizing:border-box;font:600 22px system-ui;padding:12px 14px;border-radius:10px;border:2px solid #4cc9f0;background:#0f1118;color:#fff;text-align:center}
.ph-namn-falt.skak{animation:phSkak .35s}
@keyframes phSkak{25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}
.ph-namn-ruta .fp-knapp{min-width:200px}
.ph-namn-hoppa{background:none;border:0;color:#aab;font:500 15px system-ui;text-decoration:underline;cursor:pointer;padding:6px}
.ph-intro{position:fixed;inset:0;z-index:70;display:grid;place-items:center;background:radial-gradient(circle at 50% 40%,#2a2440,#0b0a14);font-family:system-ui,sans-serif;color:#fff;cursor:pointer;user-select:none}
.ph-intro-kort{width:min(720px,90vw);text-align:center}
.ph-is:not(.kor) .ph-il,.ph-is:not(.kor) .ph-il *{animation-play-state:paused!important}
.ph-is{position:relative;width:min(680px,86vw);aspect-ratio:16/10;margin:0 auto 20px;border-radius:14px;overflow:hidden;background:#000;border:3px solid #b9472f;box-shadow:0 18px 40px rgba(0,0,0,.55)}
.ph-is.svart{opacity:0}.ph-is.tona{transition:opacity 1s}
.ph-il{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .4s}
.ph-il.syns{opacity:1}
.ph-il.suddig{filter:blur(3px)}
.ph-il.kal{inset:auto;right:5%;top:7%;width:14%;height:auto;aspect-ratio:80/92;object-fit:contain;transition:opacity .4s,transform .5s}
.ph-il.kal.stor{right:8%;top:14%;width:34%;transform:rotate(-4deg)}
.ph-il.kal .ph-kal-blad{animation-duration:.6s!important;animation-delay:0s!important}
.ph-il.small{transform-origin:38% 50%;animation:phDorr .35s .55s ease-in forwards}
@keyframes phDorr{to{transform:perspective(900px) rotateY(-80deg);opacity:0}}
.ph-il.efter-dorr.syns{opacity:0;animation:phIntoIn .3s .75s forwards}
@keyframes phIntoIn{to{opacity:1}}
.ph-il.glid{inset:0 auto 0 0;width:${(2600 / 520) * 100 / 1.6}%;max-width:none;object-fit:cover;animation:phGlid 3.2s linear forwards}
@keyframes phGlid{from{transform:translateX(0)}to{transform:translateX(-${100 - 100 / ((2600 / 520) / 1.6)}%)}}
.ph-il.trampar{inset:auto;left:50%;bottom:-3%;width:46%;height:auto;aspect-ratio:1;transform:translateX(-50%);animation:phGung .45s ease-in-out infinite alternate}
@keyframes phGung{from{transform:translateX(-50%) translateY(0)}to{transform:translateX(-50%) translateY(-1.2%)}}
.ph-loop{overflow:hidden}
.ph-loop-band{position:absolute;top:0;left:0;height:100%;display:flex;width:max-content;animation:phLoop 7s linear infinite}
.ph-loop-band img{height:100%;width:auto;display:block;flex:none}
@keyframes phLoop{to{transform:translateX(-50%)}}
.ph-sprite{inset:auto;left:50%;bottom:-3%;width:46%;height:auto;aspect-ratio:1;background-size:calc(var(--n) * 100%) 100%;background-repeat:no-repeat;transform:translateX(-50%);animation:phTramp .5s steps(var(--n)) infinite,phGung2 .25s ease-in-out infinite alternate}
@keyframes phTramp{from{background-position:0 0}to{background-position:calc(var(--n) * 100% / (var(--n) - 1)) 0}}
@keyframes phGung2{from{translate:0 0}to{translate:0 -1%}}
.ph-rit13 path{fill:none;stroke:#fff;stroke-width:.32;stroke-linecap:round;stroke-dasharray:100;stroke-dashoffset:100;filter:url(#phSkakig13) drop-shadow(0 0 .6px rgba(160,220,255,.9));opacity:.95}
.ph-rit13 path.rita{animation:phRita 1.8s var(--d,0s) ease-out forwards}
.ph-rit13 path.slang{stroke-width:.45;stroke:#bfe9ff}
.ph-il.in-fran-vanster{inset:auto;left:0;bottom:2%;width:30%;height:auto;aspect-ratio:1;animation:phIn2 2s cubic-bezier(.25,.8,.35,1) forwards}
@keyframes phIn2{0%{transform:translateX(-110%)}78%{transform:translateX(118%)}88%{transform:translateX(112%) rotate(-2deg)}100%{transform:translateX(114%) rotate(0)}}
.ph-skjul14{position:absolute;inset:0;transform-origin:${(SKJUL_PTS.dorrMitt[0] * 100).toFixed(1)}% ${(SKJUL_PTS.dorrMitt[1] * 100).toFixed(1)}%;animation:phZoom 4.2s ease-in-out forwards}
.ph-skjul14 img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ph-skjul14 svg{position:absolute;inset:0;width:100%;height:100%}
.ph-skjul14 polyline{fill:none;stroke:#fff;stroke-width:.55;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:200;stroke-dashoffset:200;filter:url(#phSkakig);opacity:.95}
.ph-skjul14 polyline.rita{animation:phRita 1.6s ease-out forwards}
@keyframes phRita{to{stroke-dashoffset:0}}
@keyframes phZoom{to{transform:scale(1.32)}}
.ph-intro-text{font:500 clamp(17px,2.2vw,21px)/1.5 system-ui;opacity:.92;min-height:3em;transition:opacity .4s}
.ph-intro-bubbla{display:inline-block;background:#fff;color:#222;font:800 clamp(20px,2.8vw,28px)/1.3 system-ui;padding:14px 22px;border-radius:22px 22px 22px 6px;box-shadow:0 10px 30px rgba(0,0,0,.4);max-width:92%}
.ph-intro-bubbla.du{border-radius:22px 22px 6px 22px;background:#ffd43b}
.ph-intro-vem{font:800 13px system-ui;letter-spacing:.12em;opacity:.6;margin-bottom:8px;text-transform:uppercase}
.ph-intro-rad{opacity:0;transition:opacity .5s}.ph-intro-rad.syns{opacity:.95}
.ph-intro-logo{opacity:0;transform:translateY(16px);transition:opacity .8s,transform .8s;margin-top:10px}.ph-intro-logo.syns{opacity:1;transform:none}.ph-intro-logo svg{width:min(380px,70vw);height:auto}
.ph-intro-nere{position:fixed;bottom:22px;left:0;right:0;display:flex;justify-content:center;gap:18px;font:600 14px system-ui;opacity:.65}
.ph-intro-prickar span{display:inline-block;width:8px;height:8px;border-radius:50%;background:#fff;opacity:.3;margin:0 3px}.ph-intro-prickar span.pa{opacity:1}
.ph-intro-hoppa{position:fixed;top:18px;right:20px;background:rgba(255,255,255,.12);border:0;color:#fff;font:700 14px system-ui;padding:8px 14px;border-radius:999px;cursor:pointer}
.ph-intro-kort.skak .ph-is{animation:phSkak2 .4s .55s}@keyframes phSkak2{20%{transform:translateX(-14px) rotate(-1.5deg)}40%{transform:translateX(12px) rotate(1.5deg)}60%{transform:translateX(-8px)}80%{transform:translateX(5px)}}
.ph-intro-titel{margin-top:18px}
.ph-intro-kort.sista .ph-is{width:min(560px,70vw);margin-bottom:12px}.ph-intro-kort.sista .ph-intro-text{font-size:18px}
`;
document.head.appendChild(introCss);
// introts scen: lagren ligger kvar mellan korten om de är samma (bakgrund, stök) – annars tonas de över
function introLagerHtml(l) {
  if (l.kal) return `<svg class="ph-il kal ${l.cls || ''}" viewBox="0 0 80 92">${kalenderSvg(l.kal, 0, 0, l.fore || null)}</svg>`;
  if (l.skjul) {
    const pl = (a) => a.map(([x, y]) => `${(x * 100).toFixed(2)},${(y * 62.5).toFixed(2)}`).join(' ');
    return `<div class="ph-il ph-skjul14"><img src="intro/skjul.webp" alt=""><svg viewBox="0 0 100 62.5" preserveAspectRatio="none"><defs><filter id="phSkakig"><feTurbulence baseFrequency="0.9" numOctaves="1" seed="3"/><feDisplacementMap in="SourceGraphic" scale="0.6"/></filter></defs>
      <polyline data-r="0" points="${pl(SKJUL_PTS.tak)}"/><polyline data-r="1" points="${pl(SKJUL_PTS.dorr)}"/><polyline data-r="2" points="${pl(SKJUL_PTS.fonster)}"/></svg></div>`;
  }
  // punkt BA: vägen rullar i en sömlös slinga, cyklisten trampar på stället (fyra bilder) och kort 13 ritar maskinerna
  if (l.loop) return `<div class="ph-il ph-loop"><div class="ph-loop-band"><img src="${l.loop}" alt="" draggable="false"><img src="${l.loop}" alt="" draggable="false"></div></div>`;
  if (l.sprite) return `<div class="ph-il ph-sprite" style="background-image:url(${l.sprite});--n:${l.n}"></div>`;
  if (l.rit12) {   // punkt BE: stället och sladden till skrivaren som ritning
    const seg = (a) => a.map(([x1, y1, x2, y2]) => `M${x1} ${y1}L${x2} ${y2}`).join('');
    const k = KORT12_PTS.kabel.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join('');
    return `<svg class="ph-il ph-rit13" viewBox="0 0 100 62.5" preserveAspectRatio="none"><defs><filter id="phSkakig12"><feTurbulence baseFrequency="0.9" numOctaves="1" seed="7"/><feDisplacementMap in="SourceGraphic" scale="0.5"/></filter></defs>
      <path data-r="0" style="--d:.2s;filter:url(#phSkakig12) drop-shadow(0 0 .6px rgba(160,220,255,.9))" pathLength="100" d="${seg(KORT12_PTS.stall)}"/><path data-r="0" class="slang" style="--d:1.6s" pathLength="100" d="${k}"/></svg>`;
  }
  if (l.rit13) {
    const seg = (a) => a.map(([x1, y1, x2, y2]) => `M${x1} ${y1}L${x2} ${y2}`).join('');
    const sl = KORT13_PTS.slang, streck = [];
    for (let i = 0; i + 1 < sl.length; i += 2) streck.push(`M${sl[i][0]} ${sl[i][1]}L${sl[i + 1][0]} ${sl[i + 1][1]}`);
    return `<svg class="ph-il ph-rit13" viewBox="0 0 100 62.5" preserveAspectRatio="none"><defs><filter id="phSkakig13"><feTurbulence baseFrequency="0.9" numOctaves="1" seed="5"/><feDisplacementMap in="SourceGraphic" scale="0.5"/></filter></defs>
      <path data-r="2" style="--d:0s" pathLength="100" d="${seg(KORT13_PTS.kvarn)}"/><path data-r="2" style="--d:.9s" pathLength="100" d="${seg(KORT13_PTS.extruder)}"/><path data-r="2" style="--d:1.6s" pathLength="100" d="${seg(KORT13_PTS.rulle)}"/><path data-r="3" class="slang" pathLength="100" d="${streck.join('')}"/></svg>`;
  }
  return `<img class="ph-il ${l.cls || ''}" src="${l.src}" alt="" draggable="false">`;
}
const introNyckel = (l) => l.id + '|' + (l.src || l.kal || l.loop || l.sprite || (l.skjul ? 'skjul' : '') || (l.rit13 ? 'rit13' : '') || (l.rit12 ? 'rit12' : '')) + '|' + (l.cls || '');
function visaIntro(klar) {
  introPagar = true;
  forladdaRepliker(INTRO_TAL()).then(forladdaElFigurer);   // punkt AZ: introts alla repliker avkodas redan på startrutan
  const el = document.createElement('div'); el.className = 'ph-intro';
  document.body.appendChild(el);
  let i = 0, scenEl = null, textEl = null, timers = [];
  const pa = new Map();   // nyckel → element som syns nu
  const tid = (fn, ms) => { const t = setTimeout(fn, ms); timers.push(t); return t; };
  const avbryt = () => { timers.forEach(clearTimeout); timers = []; tystna(); };
  const talare = (p) => p.bubbla ? (p.du ? 'du' : 'mamma') : 'berattare';
  const ritaLager = (p) => {
    const nya = new Set(p.lager.map(introNyckel));
    for (const [k, e] of pa) if (!nya.has(k)) { e.classList.remove('syns'); pa.delete(k); setTimeout(() => e.remove(), 450); }
    for (const l of p.lager) {
      const k = introNyckel(l); if (pa.has(k)) continue;
      const t = document.createElement('div'); t.innerHTML = introLagerHtml(l); const e = t.firstElementChild;
      scenEl.appendChild(e); pa.set(k, e); requestAnimationFrame(() => requestAnimationFrame(() => e.classList.add('syns')));
    }
    // ordningen i bilden följer listan (bakgrunden längst ner)
    for (const l of p.lager) scenEl.appendChild(pa.get(introNyckel(l)));
  };
  const visa = () => {
    avbryt();
    const p = INTRO[i];
    if (!scenEl) {
      el.innerHTML = `<button class="ph-intro-hoppa">Hoppa över</button><div class="ph-intro-kort"><div class="ph-is svart"></div><div class="ph-intro-ord"></div></div>
        <div class="ph-intro-nere"><span class="ph-intro-prickar"></span><span>Klicka eller mellanslag för att fortsätta</span></div>`;
      scenEl = el.querySelector('.ph-is'); textEl = el.querySelector('.ph-intro-ord');
      el.querySelector('.ph-intro-hoppa').onclick = (e) => { e.stopPropagation(); slut(); };
      requestAnimationFrame(() => { scenEl.classList.add('tona'); requestAnimationFrame(() => scenEl.classList.remove('svart')); });
    }
    const kort = el.querySelector('.ph-intro-kort'); kort.classList.toggle('skak', p.ljud === 'dorr'); kort.classList.toggle('sista', !!p.logo);
    ritaLager(p);
    el.querySelector('.ph-intro-prickar').innerHTML = INTRO.map((_, j) => `<span class="${j <= i ? 'pa' : ''}"></span>`).join('');
    // punkt BC: introt styrs av rösten. Texten tonas in, ritningsraden ritas och bilden rör sig när rösten börjar.
    // Nästa rad/kort kommer när rösten är klar + INTRO_PAUS (och när kortets egen rörelse är klar). Klick eller mellanslag hoppar direkt.
    const logg = (h, x = '') => { (window.__introLogg ||= []).push({ kort: i + 1, h, x, t: Math.round(performance.now()) }); };
    logg('visas');
    scenEl.classList.remove('kor');
    textEl.style.transition = 'none'; textEl.style.opacity = 0;
    textEl.innerHTML = p.rader ? p.rader.map((t, j) => `<div class="ph-intro-text ph-intro-rad" data-rad="${j}" style="min-height:0">${t}</div>`).join('') + (p.logo ? `<div class="ph-intro-logo">${logo({ bredd: 300, under: false })}</div>` : '')
      : p.bubbla ? `<div class="ph-intro-vem">${rens(p.vem)}</div><div class="ph-intro-bubbla ${p.du ? 'du' : ''}">${p.bubbla}</div>` : `<div class="ph-intro-text">${p.text}</div>`;
    const rorelse = Math.max(0, ...p.lager.map((l) => l.skjul ? 4200 : /in-fran-vanster/.test(l.cls || '') ? 2000 : /small|efter-dorr/.test(l.cls || '') ? 1100 : l.kal ? 600 : 0));
    let rostStart = 0;
    const borja = () => {   // rösten har börjat: text, bild och ljud samtidigt
      if (rostStart) return; rostStart = performance.now(); logg('röstStart');
      textEl.style.transition = ''; textEl.style.opacity = 1; logg('text');
      scenEl.classList.add('kor'); if (rorelse) logg('rörelse', rorelse + ' ms');
      if (!p.rader) scenEl.querySelectorAll('[data-r="0"]').forEach((x) => { x.classList.add('rita'); logg('ritning', 0); });
      try { if (p.ljud === 'dorr') tid(() => { ton(90, 0.25, 0.25, 'square'); ton(60, 0.35, 0.2, 'sawtooth', 0.05); }, 560); } catch {}
    };
    const vidare = (sista) => {   // rösten är klar: vänta på kortets rörelse, sedan nästa
      logg('röstSlut');
      if (sista === 'logo') return;
      const kvar = Math.max(0, rostStart + rorelse - performance.now());
      tid(() => { if (INTRO[i] === p) nasta(); }, kvar + INTRO_PAUS);
    };
    const rost = Promise.race([rostKlar, new Promise((ok) => setTimeout(ok, 2000))]);
    if (p.rader) {
      let r = 0;
      const nastaRad = () => {
        if (INTRO[i] !== p) return;
        if (r >= p.rader.length) { if (p.logo) { textEl.querySelector('.ph-intro-logo')?.classList.add('syns'); logg('logga'); } else vidare(); return; }
        const j = r++;
        prata('berattare', p.rader[j], 'STORY', { start: () => {
          if (INTRO[i] !== p) return; borja();
          textEl.querySelector(`[data-rad="${j}"]`)?.classList.add('syns'); logg('rad', j);
          scenEl.querySelectorAll(`[data-r="${p.logo ? Math.min(2, j) : j}"]`).forEach((x) => x.classList.add('rita')); logg('ritning', j);
          if (j === 3 && p.logo) scenEl.querySelectorAll('polyline').forEach((x) => { x.style.stroke = '#ffe9a8'; });
        }, slut: () => { if (INTRO[i] !== p) return; logg('röstSlut', j); tid(nastaRad, INTRO_PAUS); } });
      };
      rost.then(() => nastaRad());
    } else rost.then(() => { if (INTRO[i] === p) prata(talare(p), p.bubbla || p.text, 'STORY', { start: () => { if (INTRO[i] === p) borja(); }, slut: () => { if (INTRO[i] === p) vidare(); } }); });
    forladdaIntro(i + 1);
    if (p.musik) introMusik.start();
    try { ljudCtx(); if (p.ljud !== 'dorr' && i > 0) ljud.plock(); } catch {}
  };
  const nasta = () => { i++; if (i >= INTRO.length) slut(); else visa(); };
  forladdaIntro(0); forladdaIntro(1);
  const tangent = (e) => { if (['Space', 'Enter', 'ArrowRight', 'KeyE'].includes(e.code)) { e.preventDefault(); e.stopImmediatePropagation(); nasta(); } else if (e.code === 'Escape') { e.stopImmediatePropagation(); slut(); } };
  // B13: Hoppa över tömmer introts röstkö
  function slut() { avbryt(); pratKo.length = 0; tystna(); introPagar = false; introMusik.stopp(S.introSett ? 2 : 6); removeEventListener('keydown', tangent, true); el.remove(); S.introSett = true; sparaSnart(); klar?.(); }
  // en startruta först: webbläsaren spelar bara upp ljud efter ett klick
  el.innerHTML = `<div class="ph-intro-kort"><div class="ph-intro-titel" style="margin:0 0 18px">${logo({ bredd: 480 })}</div><div class="ph-intro-text">Slå på ljudet – berättaren läser upp historien.</div><button class="fp-knapp" style="margin-top:22px">Börja</button></div>`;
  rostKlar.then(() => { for (const [v, t] of INTRO_TAL()) { const k = rostKlipp(v, t); if (k) hamtaPack(k[0]); } });
  const borja = () => { el.onclick = nasta; addEventListener('keydown', tangent, true); try { ljudCtx(); } catch {} el.innerHTML = ''; visa(); };
  el.onclick = (e) => { e.stopPropagation(); borja(); };
}
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
// vad heter du? – efter introt, innan spelet startar
// punkt AL: samma spelar-id (samma enhet) får sitt namn ifyllt igen efter Börja om
const sparatNamn = () => { try { return localStorage.getItem('printa-hem:namn:' + spelarId) || ''; } catch { return ''; } };
function fragaNamn(klar, byt = false) {
  document.querySelector('.ph-namn')?.remove();
  const el = document.createElement('div'); el.className = 'ph-namn';
  el.innerHTML = `<form class="fp-ruta ph-namn-ruta" autocomplete="off"><h2>${byt ? 'Byt namn' : 'Vad heter du?'}</h2>
    <input class="ph-namn-falt" maxlength="20" placeholder="Ditt namn eller smeknamn" value="${rens(byt ? S.spelarNamn || '' : sparatNamn())}" enterkeyhint="go" aria-label="Ditt namn eller smeknamn">
    <button class="fp-knapp" type="submit">Kör!</button>
    ${byt ? '<button type="button" class="ph-namn-hoppa" data-avbryt>Avbryt</button>' : '<button type="button" class="ph-namn-hoppa" data-hoppa>Hoppa över</button>'}</form>`;
  document.body.appendChild(el);
  const falt = el.querySelector('input'), form = el.querySelector('form');
  const klart = (namn) => { if (namn != null) { S.spelarNamn = namn; sparaSnart(); if (namn !== 'Anonym') try { localStorage.setItem('printa-hem:namn:' + spelarId, namn); } catch {} } el.remove(); klar?.(); };
  form.onsubmit = (e) => { e.preventDefault(); const v = falt.value.replace(/\s+/g, ' ').trim().slice(0, 20); if (!v) { falt.classList.remove('skak'); void falt.offsetWidth; falt.classList.add('skak'); falt.focus(); return; } klart(v); };
  el.querySelector('[data-hoppa]')?.addEventListener('click', () => klart('Anonym'));
  el.querySelector('[data-avbryt]')?.addEventListener('click', () => klart(null));
  // tangenterna hör till fältet, inte spelet
  for (const t of ['keydown', 'keyup', 'keypress']) el.addEventListener(t, (e) => e.stopPropagation());
  el.addEventListener('pointerdown', (e) => e.stopPropagation());
  setTimeout(() => { falt.focus(); falt.select(); }, 50);
}
if (!S.introSett) visaIntro(); else setTimeout(forladdaElFigurer, 3000);

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
// ---------- Kapitlen: varje kapitel slutar med en belöning och börjar med ett kapitelkort ----------
function kapitelBorjar(k) {
  if (k === 3) {   // kapitel 2 klart: Rolfs jukebox + pengar
    S.post.tillMig = [...S.post.tillMig, ...(antalInv('r_jukebox') || harPlacerat('r_jukebox') ? [] : ['sak:r_jukebox']), 'mynt:3000']; visaPostInne();
    konfetti(140); fanfar(); ljud.stor();
    ui.toast('🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar hösten.', 'guld');
    setTimeout(() => sms('rolf', 'Hösten e här o du fryser int. Respekt. Ja la jukeboxen från dödsbot i lådan. O lite pengar. Den spelar bara dansband. /R'), 3000);
  }
  if (k === 4) {   // kapitel 3 klart: flipperspelet + pengar, och marken öppnas
    S.post.tillMig = [...S.post.tillMig, ...(antalInv('ra_flipper') || harPlacerat('ra_flipper') ? [] : ['sak:ra_flipper']), 'mynt:6000']; visaPostInne();
    kapitel2Slut();
    S.mark.tips = true; S.folkbokMal = true; try { markTavla.visible = true; } catch {}
    setTimeout(() => sms('rolf', 'Ja hitta ett flipperspel på mitt hemliga ställe. De e ditt. Sen: Bengt-Åke vill sälja tomten du bor på. Tavlan vid vägen. /R'), 6000);
  }
  sparaSnart();
}
// kapitel 4: Rolfs fynd kommer när målet behöver dem, och julen när dag 22 är här
setInterval(() => {
  if (!ui.igang || sover || !S.kapitel || S.kapitel < 4) return;
  const st = STEG[S.steg]; if (!st) return;
  const t = typeof st.text === 'function' ? st.text() : st.text;
  if (/kolfiber/.test(t) && !(S.filGava || []).includes(3) && !antalInv('fynd3') && !antalInv('rulle3')) {
    S.filGava = [...(S.filGava || []), 3]; S.post.tillMig = [...S.post.tillMig, 'sak:fynd3', 'sak:fynd3', 'sak:fynd3']; visaPostInne();
    setTimeout(() => sms('rolf', rolfFyndSms(3)), 800); sparaSnart();
  }
  if (/guld eller titan/.test(t) && !(S.filGava || []).includes(4) && !antalInv('fynd4') && !antalInv('fynd5')) {
    S.filGava = [...(S.filGava || []), 4]; S.post.tillMig = [...S.post.tillMig, 'sak:fynd4', 'sak:fynd4']; visaPostInne();
    setTimeout(() => sms('rolf', rolfFyndSms(4)), 800); sparaSnart();
  }
}, 2500);
// ---------- Punkt U: efterspelet (dag 23+) ----------
// Inga dagsmål. Morgonkortet och remsan visar vad som finns kvar. Bengt-Åke säljer resten av marken, chefen erbjuder soptippen,
// Rolfs hus byggs på tippkanten – Rolf flyttar in med Birgittas rosor och Kajsa → Tippgodsägare och skylten v6.
const U_REPLIK = { chefen: ['chefen', 'Chefen. Soptippen är till salu. Någon har föreslagit dig. Det var inte jag. Inga böter.'] };
function efterspelKvar() {
  const kvar = [];
  for (const id of ['norr', 'tippkant', 'tippen', 'rolfhus']) { if (!agerMark(id)) kvar.push({ norr: 'backen i norr', tippkant: 'marken runt tippen', tippen: 'Rolfs soptipp', rolfhus: 'ett hus åt Rolf och Kajsa' }[id]); }
  if (S.helen && !S.helen.skjul) kvar.unshift('Helen behöver ett ställe');   // punkt AN
  const proto = Object.entries(VAROR).filter(([id, v]) => v.proto && !(S.proto || []).includes(id)).length; if (proto) kvar.push(`${proto} prototyper hos Ali`);
  const pol = POLAROID.length - (S.polaroid || []).length; if (pol > 0) kvar.push(`${pol} polaroider`);
  return kvar;
}
function efterspelHtml() {
  const k = efterspelKvar();
  return `<ul class="ph-efter">${(k.length ? k : ['Ingenting. Allt är ditt.']).map((x) => `<li>${rens(x[0].toUpperCase() + x.slice(1))}</li>`).join('')}<li>Tippen på tid (Dagbok → Spelet)</li></ul>`;
}
// Birgittas rosor på Rolfs veranda när han flyttat in
const rolfRosor = new THREE.Group();
function ritaRolfRosor() {
  rolfRosor.clear(); if (!S.tradgard?.rosorFlyttade || !agerMark('rolfhus')) return;
  for (let i = 0; i < 3; i++) { const kr = cyl(0.14, 0.11, 0.24, mat(0x9a5a3a), 10); kr.position.set(i * 0.45, 0.12, 0); rolfRosor.add(kr); rolfRosor.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), mat(0x3f7a3a)), i * 0.45, 0.38, 0)); for (let j = 0; j < 3; j++) rolfRosor.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 5), mat(0xc8213a)), i * 0.45 + Math.cos(j * 2) * 0.12, 0.48, Math.sin(j * 2) * 0.12)); }
  if (!rolfRosor.parent) { rolfHus.add(rolfRosor); rolfRosor.position.set(-1.0, 0.3, 5.2); }
}
function kollaEfterspel() {
  if (!S.julFirad || !ui.igang || sover || pausad) return;
  if (S.dag >= 23 && !S.chefenTipp && !agerMark('tippen')) { S.chefenTipp = true; sparaSnart(); sms(...U_REPLIK.chefen); }
  if (agerMark('rolfhus') && !S.tippgodsagare) { S.tippgodsagare = true; sparaSnart(); kollaSkylt(); }
  if (S.tradgard?.rosorFlyttade && !rolfRosor.children.length) ritaRolfRosor();
}
setInterval(kollaEfterspel, 3000);
// testkrok: __printahem.efterspel() hoppar till dag 23 med julen firad
function efterspelTest() {
  S.dag = Math.max(23, S.dag); S.kapitel = 4; S.folkbokford = true; S.julFirad = true; S.julSlutVisad = true; S.steg = STEG.length;
  for (const id of ['egen', 'oster', 'huset']) if (!agerMark(id)) S.mark.agt.push(id);
  S.flyttatIn = true; uppdateraMark(); sparaSnart(); return efterspelKvar();
}
{ const st = document.createElement('style'); st.textContent = '.ph-fplan{width:min(420px,100%);height:auto;max-height:62vh}.ph-efter{margin:8px 0 0 18px;padding:0;text-align:left;font:500 15px/1.5 system-ui}'; document.head.appendChild(st); }
// ---------- Punkt O: Jul på Soptippsvägen 1 (finalen, dag 22) ----------
// Tre mål: printa julbordet, tänd skylten, öppna dörren. Sedan gästerna, scenen, sista polaroiden – och mammas brev på kvällen.
let julPagar = false;
interaktor.registrera(adressSkylt, { text: () => S.dag >= 22 && skyltVersion() === 5 && !S.skyltTand && !S.julFirad ? '🎄 Tänd skylten' : '', kanAktivera: () => S.dag >= 22 && skyltVersion() === 5 && !S.skyltTand && !S.julFirad,
  aktivera: () => { S.skyltTand = true; sparaSnart(); kollaSkylt(); ljud.klar(); ui.toast('Skylten lyser. Soptippsvägen 1. Folkbokförd.', 'guld'); } });
// kransen på dörren – i huset om du flyttat in, annars skjulet
const julKrans = new THREE.Group();
{ const k = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.08, 8, 18), mat(0x2e6b3a)); julKrans.add(k); for (let i = 0; i < 6; i++) julKrans.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 5), mat(0xc8213a)), Math.cos(i) * 0.28, Math.sin(i) * 0.28, 0.06));
  julKrans.visible = false; scen.add(julKrans); traffYta(julKrans, 0.9, 0.9, 0.3, 0, 0); }
function placeraKrans() {
  if (S.flyttatIn) { const v = storHus.localToWorld(new THREE.Vector3(-4.1, 1.7, 0)); julKrans.position.copy(v); julKrans.rotation.y = -Math.PI / 2; }
  else { julKrans.position.set(SKJUL.x, 1.75, SKJUL.z + SKJUL.d / 2 + 0.1); julKrans.rotation.y = 0; }
}
interaktor.registrera(julKrans, { text: () => julKrans.visible ? (S.skyltTand && antalInv('julbord') ? '🎄 Öppna dörren – gästerna kommer' : 'Printa julbordet och tänd skylten först') : '', kanAktivera: () => julKrans.visible && !!S.skyltTand && antalInv('julbord') > 0, aktivera: () => julScen() });
setInterval(() => { const v = S.dag >= 22 && !S.julFirad && !julPagar; if (v && !julKrans.visible) placeraKrans(); julKrans.visible = v; }, 1500);
const JUL_REPLIK = [
  ['rolf', 'Rolf och Kajsa', 'Goddag … ja. Ja har kavaj. Fråga int.'],
  ['ali', 'Ali (och hans fru)', 'Habibi. Roboten säger god jul. Jag lärde den. Säg inget till min fru – hon är här.'],
  ['berattare', 'Lasse och Gunnar', 'Lasse har en ny termos. Den håller värmen i nitton timmar. Han har testat. Gunnar säger: "Vanilj."'],
  ['berattare', 'Bengt-Åke', 'Bengt-Åke ställer en gran från egen skog i hörnet. Han går inte.'],
  ['berattare', 'Bengt-Åke', 'HMPF. God jul.'],
  ['bror', 'Storebror', 'Den är inte från mig. Den låg utanför. Typ.'],
  ['mamma', 'Mamma', 'Det är så STÄDAT!'],
  ['pappa', 'Pappa', 'Jaha.'],
];
const JULSCEN_REPLIK = {
  bordRosor: ['berattare', 'Julbordet', 'Skinkan från augusti. Birgittas rosor i en vas.'],
  bordGran: ['berattare', 'Julbordet', 'Skinkan från augusti. Granris i en vas.'],
  goran: ['berattare', 'Julbordet', 'Göran sitter på fönsterblecket och tittar på skinkan.'],
  stockar: ['berattare', 'Rolfs Rockers', 'Rolf på trummor med trumstockarna från 1987. Lasse och Gunnar på printade elgitarrer. Det är högt. Det är bra.'],
  kastruller: ['berattare', 'Rolfs Rockers', 'Rolf på trummor med två kastruller. Lasse och Gunnar på printade elgitarrer. Det är högt. Det är bra.'],
  tal1: ['pappa', 'Pappas tal', 'Ja ska fatta mej kort.'],
  tal2: ['pappa', 'Pappas tal', 'Scania byggde sin första lastbil nittonhundraelva.'],
  tal3: ['pappa', 'Pappas tal', 'Djurgården har vunnit SM tolv gånger.'],
  tal4: ['pappa', 'Pappas tal', 'Skinkan har legat i frysen sen augusti.'],
  tal5: ['pappa', 'Pappas tal', 'Ja … är stolt över dej. Aha. Vad lugnt då.'],
  grater: ['berattare', 'Mamma', 'Mamma gråter.'],
};
function julRader() {
  const J = JULSCEN_REPLIK, rosor = !!S.tradgard?.rosor, stockar = antalInv('trumstockar') > 0 || harPlacerat('trumstockar') || (S.lagerHittat || []).includes('trumstockar');
  return [...JUL_REPLIK, rosor ? J.bordRosor : J.bordGran, ...(S.goranMaskot ? [J.goran] : []), stockar ? J.stockar : J.kastruller,
    ...['tal1', 'tal2', 'tal3', 'tal4', 'tal5'].map((k) => [...J[k], 'fyll']), J.grater];
}
function julScen() {
  if (julPagar || S.julFirad) return; julPagar = true;
  taBortInv('julbord'); S.julBordKlart = true; sparaSnart();
  ui.slappMus();
  pausad = true; ui.igang = false; spelare.aktiv = false;
  const rader = julRader(); let i = -1;
  const el = document.createElement('div'); el.className = 'ph-jul'; document.body.appendChild(el);
  let auto = 0;
  const nasta = () => {
    i++; clearTimeout(auto);
    if (i >= rader.length) { slut(); return; }
    const [vem, namn, text, fyll] = rader[i];
    const tidigare = []; if (fyll) for (let j = i - 1; j >= 0 && rader[j][3] === 'fyll' && rader[j][1] === namn; j--) tidigare.unshift(rader[j][2]);
    el.innerHTML = `<div class="ph-jul-kort"><small>${i < JUL_REPLIK.length ? 'Gästerna kommer' : 'Jul på Soptippsvägen 1'}</small><b>${rens(namn)}</b>${tidigare.map((t) => `<p class="ph-jul-forra">${rens(t)}</p>`).join('')}<p>${rens(text)}</p><span class="ph-jul-vidare">Klicka för att fortsätta</span></div>`;
    tystna(); setTimeout(() => prata(vem, text, 'STORY'), 150);
    const vanta = () => { if (performance.now() < pratarTill + DIALOG_PAUS) { auto = setTimeout(vanta, 300); return; } auto = setTimeout(nasta, fyll ? 2600 : 1800); };
    auto = setTimeout(vanta, 1200);
  };
  const tangent = (e) => { if (['Space', 'Enter', 'KeyE'].includes(e.code)) { e.preventDefault(); e.stopImmediatePropagation(); nasta(); } };
  el.onclick = (e) => { e.stopPropagation(); nasta(); }; addEventListener('keydown', tangent, true);
  function slut() {
    removeEventListener('keydown', tangent, true); el.remove(); tystna();
    pausad = false; ui.igang = true; spelare.aktiv = true;
    konfetti(260); fanfar(); ljud.stor();
    S.julFirad = true; julPagar = false; sparaSnart(); kollaSkylt();   // sista polaroiden tas av polaroidväggen
    // kvällen: gästerna går, flaggan är uppe – mammas brev ligger i postlådan
    ui.toast('Gästerna har gått. Flaggan på postlådan är uppe.', 'guld'); if (!S.lappar.includes('mammajul')) { S.post.lapp = 'mammajul'; visaPostInne(); sparaSnart(); }   // U012: när julscenen är slut
  }
  nasta();
}
// efter mammas brev: pappas hjärta och kortet om efterspelet
function julEfterBrev() {
  if (S.julSlutVisad) return; S.julSlutVisad = true; sparaSnart();
  setTimeout(() => sms('pappa', '👍 ❤️'), 6000);   // första gången pappa använder ett hjärta
  setTimeout(() => {
    const kvar = [];
    for (const id of ['norr', 'tippkant', 'tippen', 'rolfhus']) { const m = MARK_TOMTER.find((x) => x.id === id); if (m && !agerMark(id)) kvar.push(m.namn); }
    const pol = POLAROID.length - (S.polaroid || []).length; if (pol > 0) kvar.push(`${pol} polaroider`);
    oppnaRuta(panel({ ikon: 'stjarna', titel: 'Slut på berättelsen', sub: 'Efterspelet börjar', kropp: `<div style="padding:14px 16px;font-size:16px;line-height:1.55">Du är folkbokförd på Soptippsvägen 1. Mamma är imponerad.<br><br><b>Kvar att göra:</b><ul style="margin:6px 0 0 18px">${kvar.map((k) => `<li>${rens(k)}</li>`).join('') || '<li>Ingenting. Bygg fritt.</li>'}<li>Tippen på tid (Dagbok → Spelet)</li></ul></div>` }));
  }, 14000);
}
// testkrok: __printahem.jul() hoppar till dag 22 med allt klart
function julTest() {
  S.dag = 22; S.kapitel = 4; S.folkbokford = true; S.flyttatIn = S.flyttatIn || false;
  const i = STEG.findIndex((x) => x.del === M22); if (i >= 0) S.steg = i;
  S.julFirad = false; S.skyltTand = false; sparaSnart(); return i;
}
{ const st = document.createElement('style'); st.textContent = `.ph-jul{position:fixed;inset:0;z-index:92;display:grid;place-items:center;background:radial-gradient(circle at 50% 35%,rgba(60,30,20,.82),rgba(8,10,16,.94));cursor:pointer;font-family:system-ui}
.ph-jul-kort{max-width:min(620px,88vw);text-align:center;color:#f4ecd8;animation:phJulIn .5s ease-out}.ph-jul-kort small{display:block;color:#ffd27a;font:800 13px system-ui;letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px}
.ph-jul-kort b{display:block;font:900 30px var(--rubrik,'Arial Black',system-ui);margin-bottom:12px}.ph-jul-kort p{font:500 22px/1.45 system-ui;margin:0 0 22px}.ph-jul-forra{opacity:.45;font-size:18px!important;margin:0 0 8px!important}.ph-jul-vidare{font:500 13px system-ui;color:#a9a091}
@keyframes phJulIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`; document.head.appendChild(st); }
function kapitel2Slut() {   // anropas när kapitel 3 är klart (k === 4)
  andraRespekt(15, 'Gamingbod och jacuzzi – folk pratar');
  konfetti(160); fanfar(); ljud.stor();
  void ['Mamma här. Du skickade en bild på en JACUZZI?!'];   // punkt BD: mammas jacuzzi-sms kommer när jacuzzin står ute (paHandelse placerat)
  setTimeout(() => sms('mamma', 'Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är JÄTTESTOLT.'), 1500);
  setTimeout(() => sms('rolf', 'Hörde att du har JACUZZI. Ja tar med grillen. Och Kajsa. Hon e en katt. Hon badar inte. /R'), 5000);
  ui.toast('🏆 KAPITEL 3 KLART! Fabriken sköter sig själv.', 'guld');
}
// ---------- Punkt I: måsen Göran ----------
// Dag 4: mamma sms:ar om måsar, Göran (döpt av Rolf) dyker upp och snor ibland en nyckelring.
// Från dag 6: fågelskrämma (han struntar i den) eller fågelbad (han flyttar in och sitter på skylten).
const GORAN_REPLIK = {
  mamma: ['mamma', 'Det finns MÅSAR vid soptippar!! Dom tar MAT. Och SMÅ HUNDAR. Du är inte en liten hund men ÄNDÅ.'],
  rolf: ['rolf', 'Dä ä Göran. Han ä från 2014. Han tar int skräp, bara grejer som e fina. MVH ROLF'],
  rad: ['rolf', 'Göran tar dina grejer? Ali har fågelbad. Måsar ä enkla. Birgitta hade ett vid husvagnen. MVH ROLF'],
  ali: ['ali', 'Ali här. Din mås stod på min disk i morse. Han köpte inget.'],
};
const goran = new THREE.Group();
{
  const vit = mat(0xf4f4f0), gra = mat(0x8a9099), gul = mat(0xf2c230), ora = mat(0xe8873a);
  const kropp = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 10), vit); kropp.scale.set(1, 0.8, 1.7); goran.add(kropp);
  goran.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), vit), 0, 0.1, 0.25));
  const nabb = cyl(0.0, 0.025, 0.12, gul, 6); nabb.rotation.x = Math.PI / 2; nabb.position.set(0, 0.09, 0.39); goran.add(nabb);
  goran.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 5), mat(0x111111)), 0.06, 0.13, 0.31), at(new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 5), mat(0x111111)), -0.06, 0.13, 0.31));
  const stjart = box(0.14, 0.03, 0.12, gra); stjart.position.set(0, 0.02, -0.3); goran.add(stjart);
  for (const sid of [-1, 1]) {
    const v = new THREE.Group(); v.position.set(sid * 0.1, 0.06, 0); const vinge = box(0.45, 0.02, 0.2, gra); vinge.position.x = sid * 0.22; v.add(vinge);
    const spets = box(0.12, 0.021, 0.14, mat(0x2b2b2b)); spets.position.x = sid * 0.42; v.add(spets); goran.add(v); goran.userData['v' + sid] = v;
  }
  for (const x of [-0.05, 0.05]) { const ben = box(0.02, 0.14, 0.02, ora); ben.position.set(x, -0.18, 0); goran.add(ben); goran.userData.ben = (goran.userData.ben || []).concat(ben); }
  goran.visible = false; scen.add(goran);
}
const gor = { fas: 'borta', t: 0, vinkel: 0, nasta: 0, mal: null, last: null };
const goranHem = () => new THREE.Vector3(SKJUL.x + Math.cos(gor.vinkel) * 7, 7 + Math.sin(gor.vinkel * 2) * 0.8, SKJUL.z + Math.sin(gor.vinkel) * 7);
function goranByte() {
  const mal = (() => { try { const st = STEG[S.steg]; const t = st && (typeof st.bild === 'function' ? st.bild() : st.bild); return t; } catch { return null; } })();
  const kand = Object.entries(VAROR).filter(([id, v]) => v.pris > 0 && !v.gava && !v.rolf && !v.unik && !v.kop && !v.nBest && !v.tradgard && id !== mal && id !== aktivGava?.() && !/^rulle|^fynd/.test(id) && antalInv(id) > 0);
  kand.sort((a, b) => a[1].pris - b[1].pris); return kand[0]?.[0] || null;
}
function goranSkri() { try { const v = 0.03 + 0.06 * (goran.position.distanceTo(spelare.pos) < 15 ? 1 : 0.3); ton(1500, 0.11, v, 'sawtooth'); ton(1200, 0.16, v, 'sawtooth', 0.12); ton(1350, 0.1, v * 0.7, 'sawtooth', 0.32); } catch {} }
function goranSittplats() {
  const b = new THREE.Box3().setFromObject(adressSkylt); return new THREE.Vector3((b.min.x + b.max.x) / 2 + 0.35, b.max.y + 0.17, (b.min.z + b.max.z) / 2 + 0.05);
}
function flyg(dt, mal, fart) {
  const d = mal.clone().sub(goran.position), l = d.length();
  if (l > 0.01) { const steg = Math.min(l, fart * dt); goran.position.addScaledVector(d.normalize(), steg); goran.rotation.y = Math.atan2(d.x, d.z); }
  return l < 0.3;
}
function uppdateraGoran(dt) {
  if (!S.goranSedd) return;
  const nu = performance.now() / 1000;
  goran.visible = true;
  const flaxar = gor.fas !== 'sitter' && !(gor.fas === 'cirkel' && S.goranSkramma && goran.position.y < 2.2);
  const fl = flaxar ? Math.sin(nu * 14) * 0.7 : 0.05;
  goran.userData['v-1'].rotation.z = -fl; goran.userData['v1'].rotation.z = fl;
  goran.userData['v-1'].rotation.y = flaxar ? 0 : 1.35; goran.userData['v1'].rotation.y = flaxar ? 0 : -1.35;   // vingarna fälls ihop när han sitter
  for (const b of goran.userData.ben) b.visible = !flaxar;
  if (S.goranMaskot) {
    const plats = goranSittplats();
    if (gor.fas !== 'sitter') { if (flyg(dt, plats, 7)) { gor.fas = 'sitter'; goran.rotation.y = 0; goranSkri(); } }
    else { goran.position.copy(plats); goran.rotation.y = Math.sin(nu * 0.7) * 0.6; goran.rotation.z = Math.sin(nu * 3) > 0.97 ? 0.15 : 0;
      if (goran.position.distanceTo(spelare.pos) < 4 && nu > gor.nasta) { gor.nasta = nu + 25; goranSkri(); } }
    return;
  }
  if (gor.fas === 'borta' || gor.fas === 'sitter') { gor.fas = 'cirkel'; goran.position.copy(goranHem()); gor.nasta = nu + 60 + Math.random() * 60; }
  const skr = S.goranSkramma && placerade.find((p) => p.typ === 'fagelskramma' && p.mesh);
  if (gor.fas === 'cirkel') {
    gor.vinkel += dt * 0.35;
    if (skr) { const pl = skr.mesh.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 1.82, 0)); if (flyg(dt, pl, 6)) { goran.position.copy(pl); goran.rotation.y = Math.sin(nu * 0.6) * 0.8; } }   // han sitter på fågelskrämman
    else flyg(dt, goranHem(), 6);
    // dags att sno något? bara om du har en nyckelring, aldrig i menyer eller på natten
    if (nu > gor.nasta && ui.igang && !sover && ui.butiksOverlay.hidden && S.goranSnoDag !== S.dag && goranByte() && spelare.pos.distanceTo(new THREE.Vector3(SKJUL.x, 0, SKJUL.z)) < 30) { gor.fas = 'dyk'; goranSkri(); }
    else if (nu > gor.nasta) gor.nasta = nu + 20;
  } else if (gor.fas === 'dyk') {
    const mal = spelare.pos.clone().add(new THREE.Vector3(0, 1.9, 0));
    if (flyg(dt, mal, 10)) {
      const by = goranByte(); if (by && S.goranSnoDag !== S.dag) { taBortInv(by); S.goranSnoDag = S.dag; S.goranGods = [...(S.goranGods || []), by]; S.goranStulit = (S.goranStulit || 0) + 1; sparaSnart(); goranSkri(); ui.toast(`Göran snodde ${by === 'nyckelring' ? 'en nyckelring' : VAROR[by].namn.toLowerCase()}.`, 'fel'); }
      gor.fas = 'upp'; gor.t = 0;
    }
  } else if (gor.fas === 'upp') {
    gor.vinkel += dt * 0.35; if (flyg(dt, goranHem(), 8)) { gor.fas = 'cirkel'; gor.nasta = nu + (harPlacerat('fagelskramma') ? 120 : 150) + Math.random() * 90; }
  }
}
// berättelsen: mamma → Göran syns → Rolf döper honom; dag 6 Rolfs råd; skrämman och badet
function kollaGoran() {
  if (!ui.igang || sover || pausad) return;
  if (S.dag >= 4 && !S.goranMamma) { S.goranMamma = true; sparaSnart(); sms(...GORAN_REPLIK.mamma); setTimeout(() => { S.goranSedd = true; sparaSnart(); goranSkri(); setTimeout(() => sms(...GORAN_REPLIK.rolf), 9000); }, 40000); return; }
  if (!S.goranSedd) return;
  if (S.goranMaskot) {
    // ungefär varannan dag lämnar han något – första gången allt han snott
    if (S.dag >= (S.goranGavaDag ?? 0) + 2) { S.goranGavaDag = S.dag; const gods = S.goranGods || []; S.goranGods = []; const sak = S.dag % 2 ? 'g_kapsyl' : 'g_skruv';
      for (const g of gods) laggTill(g); laggTill(sak);
      ui.toast(gods.length ? `Göran lämnade tillbaka ${gods[0] === 'nyckelring' ? 'nyckelringen' : VAROR[gods[0]].namn.toLowerCase()}${gods.length > 1 ? ' och resten' : ''}. Och ${sak === 'g_kapsyl' ? 'en kapsyl' : 'en blank skruv'}.` : `Göran lämnade ${sak === 'g_kapsyl' ? 'en kapsyl' : 'en blank skruv'} på säljlådan.`, 'guld'); sparaSnart(); }
    if (!S.goranAli && S.dag > (S.goranMaskotDag ?? 99)) { S.goranAli = true; sparaSnart(); sms(...GORAN_REPLIK.ali); }
    return;
  }
  if (S.dag >= 6 && !S.goranRad) { S.goranRad = true; sparaSnart(); sms(...GORAN_REPLIK.rad); return; }
  if (harPlacerat('fagelskramma') && !S.goranSkramma) { S.goranSkramma = true; sparaSnart(); ui.toast('Göran tycker om fågelskrämman. Han sitter på den.', 'guld'); }
  if (harPlacerat('fagelbad')) { S.goranMaskot = true; S.goranMaskotDag = S.dag; S.goranGavaDag = S.dag - 1; sparaSnart(); gor.fas = 'flytt'; ui.toast('Göran har flyttat in. Han sitter på skylten nu.', 'guld'); }
}
// testkrok: __printahem.goran('sno') snor direkt, ('bad') = fågelbadet finns
function goranTest(v) {
  S.goranSedd = true; S.goranMamma = true;
  if (v === 'sno') { S.goranSnoDag = -1; if (!goranByte()) laggTill('nyckelring'); gor.fas = 'dyk'; return true; }
  if (v === 'bad') { placerade.push({ typ: 'fagelbad' }); kollaGoran(); return S.goranMaskot; }
  return false;
}
setInterval(kollaGoran, 2000);
interaktor.registrera(goran, { text: () => S.goranMaskot ? 'Göran. Lägrets maskot.' : 'Göran. Han vill ha dina nyckelringar.', aktivera: () => goranSkri() });
// ---------- Punkt H: tippens lager ----------
// Ju mer av tippen du städar, desto äldre skräp: lager 2 (90-tal), 3 (1987), 4 (1962). Öppnas av kapitel + hur städad tippen är.
const TLAGER = [null, null,
  { kap: 2, stadat: 0.4, namn: '90-talet', farg: 0x8f887a, fynd: ['r_tv', 'r_klocka', 'r_fatolj'] },
  { kap: 3, stadat: 0.65, namn: '1987', farg: 0x9a8070, fynd: ['r_affisch', 'trumstockar', 'r_discokula'] },
  { kap: 4, stadat: 0.85, namn: '1962', farg: 0x8a6a4a, fynd: ['h_telefon', 'h_mjolkpall', 'h_kaffepanna'] }];
const LAGER_REPLIK = {
  2: ['rolf', 'Tjock-TV:n. Ja tittade på Melodifestivalen på en sån. Birgitta röstade på alla. MVH ROLF'],
  3: ['rolf', 'ROLFS ROCKERS. Nittonhundraåttiosju. Vi va STORA i Hudiksvall. En spelning. MVH ROLF'],
  4: ['rolf', 'Sextitvå. Då fanns int ja. Men kaffepannan, den ha ja sett förut. Hos mor. MVH ROLF'],
  foto: ['rolf', 'Va hitta du dä? … Hon ha på sej den gula klänningen. Ja hade hår. MVH ROLF'],
  stickning: ['rolf', 'Hon hann int. Ja ska be Kajsa. Hon ä int bra på att sticka. MVH ROLF'],
};
const tippStadat = () => Math.max(0, 1 - skrapLista.filter((x) => !x.userData.helen && paTippen(x.position.x, x.position.z)).length / TIPP_START);   // Helens hög räknas inte (punkt AN)
const lagerFynd = [];
function byggLagerFynd() {
  for (const f of lagerFynd) scen.remove(f.g); lagerFynd.length = 0;
  for (let n = 2; n <= (S.tippLager || 1); n++) TLAGER[n].fynd.forEach((id, i) => {
    if ((S.lagerHittat || []).includes(id)) return;
    const a = n * 1.7 + i * 2.1, x = TIPP.x + Math.cos(a) * (2 + i), z = TIPP.z + Math.sin(a) * (2 + i);
    const g = new THREE.Group(); const hog = new THREE.Mesh(new THREE.SphereGeometry(0.45, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat(TLAGER[n].farg)); g.add(hog);
    const glimt = box(0.12, 0.12, 0.12, mat(0xffe08a, { emissive: 0xffc84a, emissiveIntensity: 0.6 })); glimt.position.set(0.15, 0.32, 0.1); g.add(glimt);
    g.position.set(x, tippHojd(x, z), z); scen.add(g); traffYta(g, 1, 0.8, 1);
    const f = { id, n, g }; lagerFynd.push(f);
    interaktor.registrera(g, { text: () => g.parent ? `🔍 Gräv fram något från ${TLAGER[n].namn}` : '', kanAktivera: () => !!g.parent && (S.tippNyckel || false), aktivera: () => grav(f) });
  });
}
function grav(f) {
  if ((S.lagerHittat || []).includes(f.id)) return;
  S.lagerHittat = [...(S.lagerHittat || []), f.id]; scen.remove(f.g);
  const har = antalInv(f.id) > 0 || harPlacerat(f.id);
  if (har) { S.mynt += 300; ui.toast(`Ännu en ${VAROR[f.id].namn.toLowerCase()}. Ali köper den för 300 kr – pengarna är dina.`, 'bra'); }
  else { laggTill(f.id); ui.toast(`Du hittade: ${VAROR[f.id].namn}!`, 'guld'); }
  ljud.stor(); sparaSnart();
}
function oppnaLager(n, tyst = false) {
  S.tippLager = n; sparaSnart();
  if (window.__tippKulle) window.__tippKulle.material.color.setHex(TLAGER[n]?.farg ?? 0x7b7466);
  byggLagerFynd();
  if (!tyst) { ui.toast('Tippen har ett nytt lager. Äldre skräp.', 'guld'); setTimeout(() => sms(...LAGER_REPLIK[n]), 8000); }
}
// husvagnen från -78 vid tippkanten: skåpet med fotot och stickningen (kapitel 3, när marken går att nå)
const h78 = new THREE.Group();
{ h78.add(at(box(0.7, 0.9, 0.4, mat(0x9a7a4a)), 0, 0.45, 0)); h78.position.set(TIPP.x - TIPP.r - 12 + 1.6, 0, 2 + 2.4); scen.add(h78); traffYta(h78, 0.8, 1, 0.5); h78.visible = false; }
interaktor.registrera(h78, { text: () => h78.visible ? '🔍 Skåpet i husvagnen' : '', kanAktivera: () => h78.visible, aktivera: () => {
  if (S.h78) return; S.h78 = true; laggTill('h_foto'); laggTill('h_stickning'); h78.visible = false; ljud.stor(); sparaSnart();
  oppnaRuta(panel({ ikon: 'stjarna', titel: 'Skåpet i husvagnen', sub: 'Rolf och Birgittas första husvagn', kropp: '<div style="padding:14px 16px;font-size:16px;line-height:1.5">Ett fotografi från 1979: en kvinna i gul klänning och en man med hår. Och en halvfärdig stickning med stickorna kvar.</div>' }));
  setTimeout(() => sms(...LAGER_REPLIK.foto), 8000);
} });
function kollaLager() {
  if (S.tippLager == null) { S.tippLager = 1; }
  if (!byggLagerFynd.klar) { byggLagerFynd.klar = true; if (S.tippLager > 1) oppnaLager(S.tippLager, true); }
  h78.visible = !S.h78 && S.kapitel >= 3 && tillgang('tippkant');
  if (!ui.igang || sover || pausad) return;
  const n = (S.tippLager || 1) + 1, L = TLAGER[n];
  if (L && S.kapitel >= L.kap && tippStadat() >= L.stadat) oppnaLager(n);
}
setInterval(kollaLager, 2000);
// testkrok: __printahem.lager(n) öppnar lager n
const lagerTest = (n) => { oppnaLager(Math.max(1, Math.min(4, n))); return S.tippLager; };
// ---------- Punkt L: den hemliga beställaren N. ----------
// Dag 8, 10, 12, 15, 17: en prydlig lapp i postlådan. N. vill ha något som redan går att printa (sist en kopp med namn).
// Saken läggs i lådan märkt N. vid staketet i norr, betalningen ligger där nästa morgon. Dag 17–18 avslöjas Bengt-Åke.
const N_BEST = [{ dag: 8, id: 'fagelholk' }, { dag: 10, id: 'lampskarm' }, { dag: 12, id: 'n2_vas' }, { dag: 15, id: 'mobilstall' }, { dag: 17, id: 'n_kopp' }];
const nBetalning = () => Math.max(300, Math.round((S.inkomstSnitt || 0) * JOBB_ANDEL / 50) * 50);
const nLada = new THREE.Group();
{
  const tra = mat(0x6d5434);
  nLada.add(at(box(0.07, 1.0, 0.07, tra), 0, 0.5, 0), at(box(0.5, 0.32, 0.36, mat(0x3e4a3a)), 0, 1.12, 0), at(box(0.52, 0.04, 0.38, mat(0x2d362a)), 0, 1.3, 0));
  const sk = skylt('N.', 0.22, 0.14, '#f4ecd8', '#2a1c08'); sk.position.set(0, 1.12, 0.185); nLada.add(sk);
  nLada.position.set(6, 0, -TOMT + 0.7); scen.add(nLada);
  traffYta(nLada, 0.6, 1.4, 0.5);
}
function nLappLast(i) {
  const b = N_BEST[i]; if (!b) return;
  S.n.vill = b.id;
  if (b.id === 'n_kopp' && !S.ritningar.includes('recept:n_kopp')) S.ritningar.push('recept:n_kopp');
  efterBrev('n' + i, () => ui.toast(`N. vill ha: ${VAROR[b.id].namn} – lådan märkt N. står vid staketet i norr`, 'guld'));   // U013
  sparaSnart();
}
interaktor.registrera(nLada, {
  text: () => { const n = S.n || {};
    if (n.betalt) return `Lådan N. – ett kuvert med ${n.betalt} kr`;
    if (n.vill && antalInv(n.vill)) return `Lägg ${VAROR[n.vill].namn.toLowerCase()} i lådan till N.`;
    if (n.vill) return `Lådan N. – N. vill ha: ${VAROR[n.vill].namn.toLowerCase()}`;
    if (n.betala) return 'Lådan N. – N. hämtar i natt';
    return 'En prydlig låda märkt N.'; },
  aktivera: () => {
    const n = S.n = S.n || {};
    if (n.betalt) { S.mynt += n.betalt; ui.toast(`+${n.betalt} kr från N. Prydligt vikta sedlar. Kuvertet luktar kaffe.`, 'bra'); spelaLjud('mynt'); n.betalt = 0; sparaSnart(); return; }
    if (n.vill && antalInv(n.vill)) {
      const id = n.vill; taBortInv(id); n.vill = null; n.levererat = [...(n.levererat || []), id]; n.betala = { dag: S.dag, kr: nBetalning(), id };
      ljud.placera(); ui.toast('Det ligger i lådan. N. hämtar i natt.', 'guld'); sparaSnart(); return;
    }
    ui.toast(n.vill ? `Printa ${VAROR[n.vill].namn.toLowerCase()} först` : 'Lådan är tom.', '');
  },
});
function kollaN() {
  if (!ui.igang || sover || pausad) return;
  const n = S.n = S.n || {};
  // betalningen ligger i lådan nästa morgon
  if (n.betala && S.dag > n.betala.dag) { n.betalt = (n.betalt || 0) + n.betala.kr; if (n.betala.id === 'n_kopp') n.avslojaDag = S.dag; n.betala = null; sparaSnart(); ui.toast('Det ligger ett kuvert i lådan märkt N.', 'guld'); return; }
  // avslöjandet: morgonen efter koppen – eller dag 18 om man inte gjorde den
  if (!n.avslojad && (n.avslojaDag != null || (n.senast ?? -1) >= 4 && S.dag >= Math.max(18, (n.n4Dag ?? 99) + 1))) {
    n.avslojad = true; sparaSnart(); visaBengt('HMPF.'); visaLapp((n.levererat || []).includes('n_kopp') ? 'navsl' : 'navsl2'); return;
  }
  if (n.avslojad || S.post.lapp) return;   // en lapp i taget i postlådan
  let i = -1; N_BEST.forEach((b, j) => { if (S.dag >= b.dag) i = j; });
  if (i > (n.senast ?? -1)) {
    n.senast = i; n.vill = null; if (i === 4) n.n4Dag = S.dag;
    // reserv: har man inte gjort någon beställning vill N. ingenting – han ville bara skriva
    S.post.lapp = i === 4 && !(n.levererat || []).length ? 'n4tom' : 'n' + i;
    visaPostInne(); sparaSnart(); ui.toast('Det ligger en prydlig lapp i postlådan…', 'guld');
  }
}
setInterval(kollaN, 3000);
// ---------- Punkt N: Birgittas trädgård ----------
// Rolfs husvagn står bakom tippen. Trädgården Birgitta anlade där har vuxit igen. Efter konditoriet ber Rolf om hjälp:
// dag 13 spaljé och bevattning, dag 20 ett printat växthus för rosorna. Ingen belöning – bara Rolf.
const TRADGARD_REPLIK = {
  tack: ['rolf', 'Ja såg. Ja stod vid fönstret länge. Tack. MVH ROLF'],
  reserv: ['rolf', 'Trädgårn står kvar. Ingen brådska. Nässlorna har inga planer. MVH ROLF'],
};
const TRAD = { x: -28.6, z: 0.6 };
const rolfVagn = new THREE.Group(), tradgard = new THREE.Group();
{
  const vit = mat(0xe9e4d4), rand = mat(0x5f8fb8), dack = mat(0x1c1c1c);
  rolfVagn.add(at(box(4.2, 1.9, 2.1, vit), 0, 1.35, 0), at(box(4.2, 0.18, 2.12, rand), 0, 1.0, 0));
  const tak = box(4.3, 0.12, 2.2, mat(0xd8d2c0)); tak.position.y = 2.35; rolfVagn.add(tak);
  for (const x of [-1.2, 0.4, 1.4]) rolfVagn.add(at(box(0.7, 0.5, 0.03, mat(0x9ad0ff, { emissive: 0x1a2a3a })), x, 1.65, 1.06));
  rolfVagn.add(at(box(0.6, 1.4, 0.03, mat(0xcfc6ae)), -0.3, 1.05, 1.07));
  for (const z of [-0.95, 0.95]) { const h = cyl(0.33, 0.33, 0.2, dack, 14); h.rotation.x = Math.PI / 2; h.position.set(0.3, 0.33, z); rolfVagn.add(h); }
  const drag = box(1.0, 0.08, 0.08, mat(0x555555)); drag.position.set(-2.55, 0.45, 0); rolfVagn.add(drag);
  rolfVagn.add(at(box(0.08, 0.6, 0.08, mat(0x777777)), -1.9, 0.3, 0.7), at(box(0.08, 0.6, 0.08, mat(0x777777)), 1.9, 0.3, -0.7));
  rolfVagn.position.set(TRAD.x - 4.2, 0, TRAD.z + 0.2); scen.add(rolfVagn);
  tippHinder.push(new THREE.Box3(new THREE.Vector3(TRAD.x - 4.2 - 2.2, 0, TRAD.z + 0.2 - 1.15), new THREE.Vector3(TRAD.x - 4.2 + 2.2, 2.4, TRAD.z + 0.2 + 1.15)));   // man går inte genom husvagnen
  try { uppdateraHinder(); } catch {}
  { const sk = skylt('ROLF & KAJSA', 0.7, 0.18, '#5e5246', '#ffe9b0'); sk.position.set(-0.3, 1.9, 1.08); rolfVagn.add(sk); }
  tradgard.position.set(TRAD.x, 0, TRAD.z); scen.add(tradgard);
}
function ritaTradgard() {
  const T = S.tradgard || {};
  const nyckel = [T.spalje, T.vatten, T.vaxthus, T.rosor, T.rensad, T.rosorFlyttade].map(Number).join('');
  if (tradgard.userData.n === nyckel) return; tradgard.userData.n = nyckel;
  for (const o of [...tradgard.children]) tradgard.remove(o);
  const jord = mat(0x5b4330), ram = mat(0x7a5a3a);
  tradgard.add(at(box(3.2, 0.12, 2.2, jord), 0, 0.06, 0));
  if (T.spalje && T.vatten) tradgard.add(at(box(5.2, 0.02, 4.2, mat(0x5fa84a)), 0, 0.015, 0));   // gräset blir grönt
  if (!T.vatten) { const kanna = new THREE.Group(); kanna.add(at(cyl(0.12, 0.14, 0.26, mat(0x6f7c74), 10), 0, 0.13, 0)); const pip = box(0.25, 0.03, 0.03, mat(0x6f7c74)); pip.position.set(0.18, 0.2, 0); pip.rotation.z = 0.6; kanna.add(pip); kanna.position.set(1.95, 0, 0.6); kanna.rotation.z = 1.4; kanna.position.y = 0.12; tradgard.add(kanna); }
  if (!T.spalje) { for (const [x, rz] of [[-0.9, 0.3], [-0.3, -0.5], [0.5, 0.15]]) { const p = box(0.04, 1.0, 0.04, mat(0x7a4a2a)); p.position.set(x, 0.45, -1.0); p.rotation.z = rz; tradgard.add(p); } const tv = box(1.2, 0.04, 0.04, mat(0x7a4a2a)); tv.position.set(-0.4, 0.7, -1.0); tv.rotation.z = 0.2; tradgard.add(tv); }
  for (const [w, d, x, z] of [[3.3, 0.1, 0, 1.12], [3.3, 0.1, 0, -1.12], [0.1, 2.3, 1.62, 0], [0.1, 2.3, -1.62, 0]]) tradgard.add(at(box(w, 0.22, d, ram), x, 0.11, z));
  // nässlor: mycket i början, borta när täppan är rensad
  const ograsN = T.rensad ? (T.spalje && T.vatten ? 0 : 4) : 26;
  for (let i = 0; i < ograsN; i++) { const h = (i * 2654435761) >>> 0; const k = cyl(0, 0.08 + (h % 7) / 60, 0.3 + (h % 11) / 18, mat((h & 1) ? 0x6b7a3a : 0x8a7a4a), 5); k.position.set(((h % 300) / 100) - 1.5, 0.2, (((h >>> 8) % 200) / 100) - 1.0); k.rotation.z = ((h % 13) - 6) / 20; tradgard.add(k); }
  // rosorna längs bakkanten: döda pinnar → gröna buskar → blommor
  for (let i = 0; i < 5; i++) {
    const x = -1.2 + i * 0.6, z = -0.75;
    if (!T.vatten) { tradgard.add(at(box(0.03, 0.5, 0.03, mat(0x5a4a35)), x, 0.37, z)); continue; }
    tradgard.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), mat(0x3f7a3a)), x, 0.4, z));
    if (T.rosor && !T.rosorFlyttade) for (let j = 0; j < 4; j++) tradgard.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), mat(0xc8213a)), x + Math.cos(j * 1.7) * 0.16, 0.5 + (j % 2) * 0.1, z + Math.sin(j * 1.7) * 0.16));
  }
  if (T.vatten) { // gurkplantor och en printad slang med droppare
    for (let i = 0; i < 4; i++) tradgard.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.13, 7, 5), mat(0x5aa04a)), -1.1 + i * 0.7, 0.22, 0.45));
    const slang = box(3.0, 0.04, 0.04, mat(0x2f7fd0)); slang.position.set(0, 0.16, -0.35); tradgard.add(slang);
    for (let i = 0; i < 6; i++) tradgard.add(at(box(0.05, 0.08, 0.05, mat(0x4cc9f0)), -1.25 + i * 0.5, 0.2, -0.35));
  }
  if (T.spalje) { // printad spaljé bakom rosorna
    const v = mat(0xf4f4f0);
    for (let i = 0; i <= 6; i++) tradgard.add(at(box(0.03, 1.4, 0.03, v), -1.5 + i * 0.5, 0.82, -1.0));
    for (let j = 0; j < 4; j++) tradgard.add(at(box(3.05, 0.03, 0.03, v), 0, 0.4 + j * 0.38, -1.0));
  }
  if (T.vaxthus) { // printat växthus över hela bädden
    const glas = mat(0xcfe8ff, { transparent: true, opacity: 0.28, roughness: 0.05, metalness: 0.1 }), ramv = mat(0x2f7fd0);
    tradgard.add(at(box(3.4, 1.8, 2.4, glas), 0, 0.9, 0));
    for (const x of [-1.7, -0.57, 0.57, 1.7]) for (const z of [-1.2, 1.2]) tradgard.add(at(box(0.05, 1.8, 0.05, ramv), x, 0.9, z));
    for (const z of [-1.2, 1.2]) tradgard.add(at(box(3.45, 0.05, 0.05, ramv), 0, 1.8, z));
    for (const x of [-1.7, 1.7]) tradgard.add(at(box(0.05, 0.05, 2.45, ramv), x, 1.8, 0));
  }
  { const sk = skylt('BIRGITTAS', 0.6, 0.16, '#6d5434', '#f4ecd8'); sk.position.set(0, 0.45, 1.2); sk.rotation.x = -0.3; tradgard.add(sk); }
  traffYta(tradgard, 3.3, 1.2, 2.3);
}
interaktor.registrera(tradgard, {
  text: () => { const T = S.tradgard || {};
    const har = ['t_spalje', 't_bevattning', 't_vaxthus'].find((id) => antalInv(id) > 0);
    if (har) return `Montera ${VAROR[har].namn.toLowerCase()}`;
    if (T.rosor) return 'Birgittas trädgård. Rosorna blommar.';
    if (T.vaxthus) return 'Birgittas trädgård. Växthuset står klart.';
    if (T.spalje && T.vatten) return 'Birgittas trädgård. Det växer.';
    if (T.rensad) return 'Birgittas trädgård – spaljé och droppslang hos Ali (röd PETG)';
    return T.brev ? 'Birgittas trädgård. Nässlor, en vattenkanna, en rostig spaljé.' : 'Nässlor.'; },
  kanAktivera: () => !!S.tradgard?.brev,
  aktivera: () => {
    const T = S.tradgard = S.tradgard || {};
    const mont = (id, nyckel) => { taBortInv(id); T[nyckel] = true; if (nyckel === 'vaxthus') T.vaxthusDag = S.dag; ljud.placera(); ui.toast(`${VAROR[id].namn} på plats.`, 'bra'); ritaTradgard(); sparaSnart(); if (T.spalje && T.vatten && (nyckel === 'spalje' || nyckel === 'vatten')) setTimeout(() => sms(...TRADGARD_REPLIK.tack), 6000); };
    if (antalInv('t_spalje') > 0) return mont('t_spalje', 'spalje');
    if (antalInv('t_bevattning') > 0) return mont('t_bevattning', 'vatten');
    if (antalInv('t_vaxthus') > 0) return mont('t_vaxthus', 'vaxthus');
    ui.toast(T.rensad ? 'Spaljé och droppslang finns hos Ali (röd PETG) – printa och montera här' : T.brev ? 'Plocka bort skräpet och nässlorna i täppan först' : 'Det har vuxit igen här. Någon brukade bry sig om den.', '');
  },
});
// berättelsen
const tradSkrap = () => skrapLista.filter((x) => Math.abs(x.position.x - TRAD.x) < 1.7 && Math.abs(x.position.z - TRAD.z) < 1.2).length;
function kollaTradgard() {
  ritaTradgard();
  if (!ui.igang || sover || pausad) return;
  const T = S.tradgard = S.tradgard || {};
  // dag 11: Rolfs brev, och 8 bitar skräp bland nässlorna (vanligt plock)
  if (!T.brev && S.dag >= 11) {
    if (S.post.lapp) return;
    T.brev = true; S.post.lapp = 'tr_brev'; visaPostInne();
    for (let i = 0; i < 8; i++) laggSkrap(TRAD.x - 1.3 + (i % 4) * 0.85, TRAD.z - 0.5 + Math.floor(i / 4) * 0.9, slumpVariant(), i);
    T.skrapLagt = true; sparaSnart(); return;
  }
  if (T.skrapLagt && !T.rensad && tradSkrap() === 0) { T.rensad = true; ritaTradgard(); sparaSnart(); ui.toast('Täppan är rensad. Ali har spaljé och droppslang i röd PETG.', 'guld'); return; }
  // reserv: en gång till dag 15 om inget har hänt
  if (T.brev && !T.rensad && !T.reserv && S.dag >= 15) { T.reserv = true; sparaSnart(); sms(...TRADGARD_REPLIK.reserv); return; }
  // morgonen efter växthuset: Rolf har planterat rosorna
  if (T.vaxthus && !T.rosor && S.dag > (T.vaxthusDag ?? 99) && !S.post.lapp) { T.rosor = true; S.post.lapp = 'tr_rosor'; visaPostInne(); ritaTradgard(); sparaSnart(); }
}
setInterval(kollaTradgard, 2500);
// ---------- Punkt G: polaroidväggen ----------
// Ett foto tas av sig självt vid varje milstolpe (det du ser just då) och hängs på väggen i skjulet – i huset när du flyttat in.
const POLAROID = [
  { id: 'nyckelring', text: 'Första nyckelringen. Fyra kronor.', nar: () => (S.stat.salt || 0) >= 1 },
  { id: 'sang', text: 'Egen säng. Den knarrar.', nar: () => !!S.sang && S.dag >= 2 },
  { id: 'tak', text: 'Tak. Det regnar inte in. Nästan.', nar: () => !!S.hem?.tak },
  { id: 'goran', text: 'Göran. Tjuv.', nar: () => (S.goranStulit || 0) >= 1 },
  { id: 'pappa', text: 'Pappa och Rolf. De pratade Scania i en timme.', nar: () => !!S.pappaBesok },
  { id: 'tunna', text: 'Röd fabrik.', nar: () => (S.stat.tungMalt || 0) >= 1 },
  { id: 'magnet', text: 'Magnet. Allt kommer till mig nu.', nar: () => !!S.magnet },
  { id: 'resa', text: 'Rolf, sopbilen och jag. Han lät mig tuta.', nar: () => S.resa === 'klar' },
  { id: 'band', text: 'Den sköter sig själv. Jag sköter mig själv.', nar: () => !!S.auto?.band },
  { id: 'bod', text: 'Boden. Utan tjat.', nar: () => !!S.bod },   // issue #19: bodKlar() bygger boden – får aldrig anropas härifrån
  { id: 'jet', text: 'Det luktade bränt i tre dagar.', nar: () => !!S.kvarn.jet },
  { id: 'tomten', text: 'Min mark. På riktigt.', nar: () => agerMark('egen') },
  { id: 'huset', text: 'Ett hus. Mamma kommer inte tro det.', nar: () => !!S.flyttatIn },
  { id: 'rosor', text: 'Birgittas rosor. Rolf var tyst länge.', nar: () => !!S.tradgard?.rosor },
  { id: 'jul', text: 'Alla.', nar: () => !!S.julFirad },
  { id: 'helen', text: 'Helen, Bettan och Kajsa.', nar: () => !!S.helen?.skjul && !!S.helen?.tackSagt },
];
const polaroidVagg = new THREE.Group();
let polaroidNyckel = '', fotoVantar = null;
function polaroidTex(f) {
  const c = document.createElement('canvas'); c.width = 160; c.height = 192; const g = c.getContext('2d');
  g.fillStyle = '#f7f4ec'; g.fillRect(0, 0, 160, 192);
  const p = POLAROID.find((x) => x.id === f.id), txt = p?.text || '';
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const skriv = () => {
    g.fillStyle = '#2a2a2a'; g.font = '600 15px "Segoe Print","Comic Sans MS","Bradley Hand",cursive'; g.textAlign = 'center';
    let fs = 15; while (g.measureText(txt).width > 148 && fs > 9) { fs--; g.font = `600 ${fs}px "Segoe Print","Comic Sans MS","Bradley Hand",cursive`; }
    g.fillText(txt, 80, 150); if (f.dag) { g.font = '500 11px system-ui'; g.fillStyle = '#7a7468'; g.fillText('Dag ' + f.dag, 80, 172); }
    t.needsUpdate = true;
  };
  if (f.bild) { const im = new Image(); im.onload = () => { g.drawImage(im, 8, 8, 144, 108); skriv(); }; im.src = f.bild; }
  else {   // foton från innan väggen fanns: en blekt bild med bara texten
    const gr = g.createLinearGradient(0, 8, 0, 116); gr.addColorStop(0, '#d9c9a8'); gr.addColorStop(1, '#a8916a'); g.fillStyle = gr; g.fillRect(8, 8, 144, 108);
    g.fillStyle = 'rgba(255,255,255,.35)'; g.font = '900 40px system-ui'; g.textAlign = 'center'; g.fillText('?', 80, 76); skriv();
  }
  return t;
}
function ritaPolaroider() {
  const lista = S.polaroid || [], iHus = !!S.flyttatIn;
  const nyckel = lista.map((f) => f.id).join(',') + '|' + iHus;
  if (nyckel === polaroidNyckel) return; polaroidNyckel = nyckel;
  for (const o of [...polaroidVagg.children]) { polaroidVagg.remove(o); o.material?.map?.dispose(); }
  // i skjulet: vänstra väggen inifrån. I huset: västra rummets norra vägg, ovanför fönstret
  if (iHus) { storHus.add(polaroidVagg); polaroidVagg.position.set(-2, 2.75, -2.86); polaroidVagg.rotation.set(0, 0, 0); }
  else { talt.add(polaroidVagg); polaroidVagg.position.set(0, 2.02, -SKJUL.d / 2 + 0.13); polaroidVagg.rotation.set(0, 0, 0); }
  const kol = iHus ? 8 : 8, dx = iHus ? 0.3 : 0.22, dy = 0.29;
  { const snore = box(kol * dx + 0.1, 0.008, 0.008, mat(0xd8cfb8)); snore.position.set(0, 0.125, 0.004); polaroidVagg.add(snore); }
  lista.forEach((f, i) => {
    const r = Math.floor(i / kol), k = i % kol, h = (i * 2654435761) >>> 0;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.24), new THREE.MeshBasicMaterial({ map: polaroidTex(f) }));
    m.position.set((k - (kol - 1) / 2) * dx, -r * dy, 0.002 * (i % 3)); m.rotation.z = ((h % 100) / 100 - 0.5) * 0.08;
    polaroidVagg.add(m);
    const nypa = box(0.018, 0.05, 0.012, mat([0xc8a070, 0xb88a5a, 0xd4b080][h % 3])); nypa.position.set(m.position.x, m.position.y + 0.115, 0.01); polaroidVagg.add(nypa);
  });
  const traff = new THREE.Mesh(new THREE.PlaneGeometry(kol * dx, Math.max(1, Math.ceil(lista.length / kol)) * dy), traffMat); traff.position.set(0, -(Math.ceil(lista.length / kol) - 1) * dy / 2, 0.02); polaroidVagg.add(traff);
  polaroidVagg.visible = lista.length > 0;
}
interaktor.registrera(polaroidVagg, { text: () => `Polaroidväggen · ${(S.polaroid || []).length} foton`, aktivera: () => oppnaPolaroider() });
function oppnaPolaroider() {
  ui.slappMus();
  const lista = S.polaroid || [];
  const kort = POLAROID.map((p) => { const f = lista.find((x) => x.id === p.id); if (!f) return '<figure class="ph-pol saknas"><div class="ph-pol-tom"></div><figcaption>&nbsp;</figcaption></figure>'; return `<figure class="ph-pol">${f.bild ? `<img src="${f.bild}" alt="">` : `<div class="ph-pol-tom">${ik(f.ikon || 'stjarna')}</div>`}<figcaption>${rens(p.text)}${f.dag ? `<small>Dag ${f.dag}</small>` : ''}</figcaption></figure>`; }).join('');
  oppnaRuta(panel({ ikon: 'film', titel: 'Polaroidväggen', sub: `${lista.length} av ${POLAROID.length} foton`, kropp: `<div class="ph-pol-grid">${kort || '<p class="ui-tom">Inga foton än.</p>'}</div>` }));
}
// ta fotot: det du ser just nu, utan pilen
function taFoto() {
  const pil = malPil.visible; malPil.visible = false;
  renderer.render(scen, kamera); malPil.visible = pil;
  const src = renderer.domElement, W = src.width, H = src.height, bw = Math.min(W, H * 4 / 3), bh = bw * 3 / 4;
  const c = document.createElement('canvas'); c.width = 256; c.height = 192; const g = c.getContext('2d');
  g.drawImage(src, (W - bw) / 2, (H - bh) / 2, bw, bh, 0, 0, 256, 192);
  // lite varmt och blekt, som en riktig polaroid
  g.fillStyle = 'rgba(255,214,150,.12)'; g.fillRect(0, 0, 256, 192);
  try { return c.toDataURL('image/jpeg', 0.66); } catch { return null; }
}
function fotografera(p) {
  const bild = taFoto(); S.polaroid = S.polaroid || []; S.polaroid.push({ id: p.id, dag: S.dag, bild }); sparaSnart();
  const blixt = document.createElement('div'); blixt.className = 'ph-blixt'; document.body.appendChild(blixt); setTimeout(() => blixt.remove(), 700);
  spelaLjud('meny-oppna');
  if (bild) { const d = document.createElement('div'); d.className = 'ph-polny'; d.innerHTML = `<img src="${bild}" alt="">`; document.body.appendChild(d); setTimeout(() => d.remove(), 2500); }
}
// testkrok: __printahem.polaroid(n) tar foto n (1–15) direkt
function polaroidTest(n) { const p = POLAROID[n - 1]; if (!p) return false; S.polaroid = (S.polaroid || []).filter((f) => f.id !== p.id); fotografera(p); ritaPolaroider(); return true; }
function kollaPolaroid() {
  if (!S.polaroid) { S.polaroid = []; sparaSnart(); }
  ritaPolaroider();
  if (!ui.igang || sover || pausad || !ui.butiksOverlay.hidden) return;
  if (fotoVantar) { if (performance.now() < fotoVantar.t) return; const p = fotoVantar.p; fotoVantar = null;
    if (S.polaroid.some((f) => f.id === p.id)) return;
    fotografera(p); return; }
  const ny = POLAROID.find((p) => !S.polaroid.some((f) => f.id === p.id) && (() => { try { return p.nar(); } catch { return false; } })());
  if (ny) fotoVantar = { p: ny, t: performance.now() + 1500 };   // en kort stund efteråt, så att det syns på bilden
}
setInterval(kollaPolaroid, 700);
{ const st = document.createElement('style'); st.textContent = `.ph-blixt{position:fixed;inset:0;background:#fff;z-index:95;pointer-events:none;animation:phBlixt .6s ease-out forwards}@keyframes phBlixt{from{opacity:.85}to{opacity:0}}
.ph-pol-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px;padding:4px}
.ph-pol{margin:0;background:#f7f4ec;padding:8px 8px 10px;border-radius:2px;box-shadow:0 4px 10px rgba(0,0,0,.4);color:#2a2a2a;transform:rotate(-1deg)}.ph-pol:nth-child(2n){transform:rotate(1.2deg)}
.ph-pol img,.ph-pol-tom{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;background:linear-gradient(#d9c9a8,#a8916a)}.ph-pol-tom{display:grid;place-items:center;color:#fff8;font:900 40px system-ui}
.ph-pol.saknas{background:#3a3e48;box-shadow:none;opacity:.55}.ph-pol.saknas .ph-pol-tom{background:#2a2d35}.ph-pol-tom svg{width:44px;height:44px;opacity:.6}
.ph-polny{position:fixed;right:24px;bottom:120px;z-index:94;width:150px;background:#f7f4ec;padding:7px 7px 22px;box-shadow:0 8px 20px rgba(0,0,0,.45);transform:rotate(3deg);animation:phPolIn 2.4s ease-in-out forwards;pointer-events:none}.ph-polny img{width:100%;display:block}@keyframes phPolIn{0%{transform:translateX(220px) rotate(8deg)}15%,80%{transform:translateX(0) rotate(3deg)}100%{transform:translateX(220px) rotate(8deg)}}
.ph-pol figcaption{font:600 14px "Segoe Print","Comic Sans MS",cursive;text-align:center;margin-top:6px}.ph-pol small{display:block;font:500 11px system-ui;color:#7a7468}`; document.head.appendChild(st); }
function kapitelSlut() {
  S.kapVisad = [...new Set([...(S.kapVisad || []), 2])];
  pausad = true; ui.igang = false; spelare.aktiv = false;
  ui.slappMus();
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
      <div class="ph-tel-kropp">${bild ? `<img class="ph-tel-bild" src="${bild}" alt="">` : ''}<div class="ph-tel-jag">Kolla här. Jag har det faktiskt rätt bra.</div><div class="ph-tel-svar"></div></div>
      <button class="fp-knapp" disabled>…</button></div>`;
    const svar = el.querySelector('.ph-tel-svar'), knapp = el.querySelector('button');
    const MAMMA_SVAR = ['Mamma skriver…', ...MAMMA_SVAR_K1, mammaK1Slut()]; void ['Mamma skriver…', 'HAHA träplankor?!', 'Vad är det där för nåt? Du har ju inte ens TAPETER på väggarna.', 'Och var är badrummet?? Du duschar väl??', 'Pappa säger "aha, vad lugnt då". Pappa säger det om allt.', '…men gardinerna i fönstret var fina. Har du gjort dem själv? ❤️'];
    let i = 0;
    const nasta = () => {
      if (i === 0) { svar.innerHTML = '<div class="ph-tel-mamma"><span class="prickar"><span>.</span><span>.</span><span>.</span></span></div>'; i++; setTimeout(nasta, 1600); return; }
      if (i === 1) svar.innerHTML = '';
      if (i < MAMMA_SVAR.length) {
        const b = document.createElement('div'); b.className = 'ph-tel-mamma'; b.textContent = MAMMA_SVAR[i]; svar.appendChild(b);
        prata('mamma', MAMMA_SVAR[i], 'STORY'); vibrera(); ljud.plock(); i++;
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

// ---------- Liv i världen: figurer som syns, vinkar och säger något när du går förbi ----------
const LIV_ROST = [
  ['ali', 'Hej granne!'], ['ali', 'Sålt nåt idag? Jag köper.'], ['ali', 'Kom in, kom in. Eller inte. Jag står här ändå.'],
  ['ali', 'Har du printat nåt nytt? Visa!'], ['ali', 'Tjugofem år bakom disken. Du är det roligaste som hänt.'], ['ali', 'Akta bilarna. Det kommer en i timmen.'],
  ['ali', 'Snart stänger jag. Nio. Inte en minut senare.'],
  ['rolf', 'Såg att du har DÖRR nu. Fin. Kajsa e sur, hon brukade sova i ditt skjul. /R'],
  ['rolf', 'Plåttak! Nu regnar de int in. Ja har bott i husvagn sen 2009, ja vet va ett tak e värt. /R'],
  ...Object.values(ALI_MINNE).map((t) => ['ali', t]),
];
const ROLF_HEM = { dorr: LIV_ROST[7][1], tak: LIV_ROST[8][1] };
const ALI_FORBI = LIV_ROST.slice(0, 6).map((x) => x[1]), ALI_KVALL = LIV_ROST[6][1];

// pratbubblor som sitter fast på något i världen
const varldsBubblor = [];
function varldsBubbla(obj, text, sek = 3.5, hojd = 2.3, klass = '') {
  textLogg('bubbla', obj?.userData?.namn || '', text);
  const el = document.createElement('div'); el.className = 'ph-vbubbla ' + klass; el.textContent = rens(text); document.body.appendChild(el);
  varldsBubblor.push({ obj, el, slut: performance.now() + sek * 1000, hojd });
}
function ritaVarldsBubblor() {
  const nu = performance.now(), v = new THREE.Vector3();
  for (let i = varldsBubblor.length - 1; i >= 0; i--) {
    const b = varldsBubblor[i];
    if (nu > b.slut || !ui.igang) { b.el.remove(); varldsBubblor.splice(i, 1); continue; }
    b.obj.getWorldPosition(v); v.y += b.hojd; const avst = v.distanceTo(kamera.position); v.project(kamera);
    const syns = v.z < 1 && Math.abs(v.x) < 1.1 && Math.abs(v.y) < 1.1 && avst < 40;
    b.el.style.visibility = syns ? '' : 'hidden';
    if (syns) { b.el.style.left = ((v.x * 0.5 + 0.5) * innerWidth) + 'px'; b.el.style.top = ((-v.y * 0.5 + 0.5) * innerHeight) + 'px'; b.el.style.opacity = Math.min(1, (b.slut - nu) / 400); }
  }
}

// Ali: en vinkande arm (de korsade armarna göms så länge) och en lampa som tänds på kvällen
const aliKors = ali.children.filter((o) => o.isMesh && o.position.y > 1.2 && o.position.y < 1.45 && o.geometry?.parameters?.width >= 0.11 && o.geometry.parameters.height <= 0.32);
const aliVink = new THREE.Group(); aliVink.position.set(0.25, 1.48, 0.05); ali.add(aliVink);
{ const arm = box(0.11, 0.55, 0.11, mat(0xe8dcc0)); arm.position.y = 0.26; aliVink.add(arm); const hand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), mat(0xb07a4e)); hand.position.y = 0.56; aliVink.add(hand); }
aliVink.visible = false;
const aliLampa = new THREE.PointLight(0xffd59a, 0, 7); aliLampa.position.set(0, 2.05, 0.2); marknad.add(aliLampa);
const aliGlodlampa = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), new THREE.MeshStandardMaterial({ color: 0xfff1c4, emissive: 0x000000 })); aliGlodlampa.position.copy(aliLampa.position); marknad.add(aliGlodlampa);
let aliVinkT = -1, aliNastaPrat = 0, aliVarNara = false, aliPratNr = 0;

// Kajsa – Rolfs katt – strövar på tippen
const kajsa = new THREE.Group();
{ const p = mat(0x3a3a3a), v = mat(0xf2f2f2);
  kajsa.add(at(box(0.36, 0.17, 0.16, p), 0, 0.2, 0)); kajsa.add(at(box(0.12, 0.06, 0.12, v), 0.02, 0.12, 0));
  const h = new THREE.Group(); h.position.set(0.22, 0.31, 0); kajsa.add(h);
  h.add(new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), p));
  for (const z of [-0.05, 0.05]) { const o = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.08, 4), p); o.position.set(0, 0.1, z); h.add(o); const e = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 4), mat(0xb6e35a)); e.position.set(0.085, 0.02, z * 0.7); h.add(e); }
  for (const [x, z] of [[0.13, 0.06], [0.13, -0.06], [-0.13, 0.06], [-0.13, -0.06]]) kajsa.add(at(box(0.05, 0.13, 0.05, p), x, 0.065, z));
  const svans = box(0.04, 0.04, 0.28, p); svans.position.set(-0.24, 0.32, 0); svans.rotation.x = Math.PI / 2; svans.rotation.z = 0.6; kajsa.add(svans); kajsa.userData.svans = svans; }
kajsa.traverse((o) => { if (o.isMesh) o.castShadow = true; });
scen.add(kajsa);
const katt = { x: TIPP.x + 2, z: TIPP.z, mal: null, vila: 2, nastaMjau: 0 };

// Bengt-Åke syns vid staketet med kikare när han skriker
const bengt = new THREE.Group();
{ const jacka = mat(0x4a5a3a), hud = mat(0xd8a487);
  bengt.add(at(cyl(0.2, 0.24, 0.85, jacka), 0, 1.0, 0)); bengt.add(at(box(0.36, 0.7, 0.2, mat(0x2a2f38)), 0, 0.35, 0));
  const h = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), hud); h.position.y = 1.62; bengt.add(h);
  bengt.add(at(cyl(0.2, 0.2, 0.08, mat(0x6b4a2a)), 0, 1.78, 0)); bengt.add(at(cyl(0.12, 0.14, 0.16, mat(0x6b4a2a)), 0, 1.86, 0));   // hatt
  for (const x of [-0.05, 0.05]) { const k = cyl(0.035, 0.04, 0.14, mat(0x111111), 8); k.rotation.x = Math.PI / 2; k.position.set(x, 1.64, 0.2); bengt.add(k); }   // kikare
  for (const x of [-0.22, 0.22]) { const a = box(0.1, 0.42, 0.1, jacka); a.position.set(x * 0.6, 1.42, 0.16); a.rotation.x = -1.2; bengt.add(a); } }
bengt.traverse((o) => { if (o.isMesh) o.castShadow = true; });
bengt.visible = false; scen.add(bengt);
let bengtSynsTill = 0;
function visaBengt(text) {
  const g = spelare.granser, p = spelare.pos; if (!g) return;
  const d = [[p.x - g.minX, -1, 0], [g.maxX - p.x, 1, 0], [p.z - g.minZ, 0, -1], [g.maxZ - p.z, 0, 1]].sort((a, b) => a[0] - b[0])[0];
  const x = d[1] ? (d[1] < 0 ? g.minX - 2.2 : g.maxX + 2.2) : p.x, z = d[2] ? (d[2] < 0 ? g.minZ - 2.2 : g.maxZ + 2.2) : p.z;
  bengt.position.set(x, 0, z); bengt.lookAt(p.x, 0, p.z); bengt.visible = true; bengtSynsTill = performance.now() + 5000;
  varldsBubbla(bengt, text, 4.5, 2.3, 'arg');
}

function uppdateraLiv(dt) {
  const nu = performance.now(), p = spelare.pos;
  ritaVarldsBubblor();
  // Ali
  const ap = ali.getWorldPosition(new THREE.Vector3()), d = Math.hypot(p.x - ap.x, p.z - ap.z);
  const k = klockan(), kvall = k != null && k >= 18 * 60;
  aliLampa.intensity = kvall ? 2.2 : 0; aliGlodlampa.material.emissive.setHex(kvall ? 0xffc76a : 0x000000);
  const nara = d < 7 && ui.butiksOverlay.hidden;
  if (nara && !aliVarNara && nu > aliNastaPrat && ui.igang && medEl2.hidden && !dagbokLas && performance.now() > pratarTill) {
    aliNastaPrat = nu + 75000; aliVinkT = 0;
    const t = k != null && k >= 20 * 60 ? ALI_KVALL : ALI_FORBI[aliPratNr++ % ALI_FORBI.length];
    varldsBubbla(ali, t, 3.8, 0.55); prata('ali', t);
  }
  aliVarNara = nara;
  if (aliVinkT >= 0) {
    aliVinkT += dt; const vinkar = aliVinkT < 2;
    aliVink.visible = vinkar; aliKors.forEach((o) => { o.visible = !vinkar; });
    aliVink.rotation.z = -(2.5 + Math.sin(aliVinkT * 11) * 0.35);
    if (!vinkar) aliVinkT = -1;
  }
  // Kajsa
  if (katt.mal == null || Math.hypot(katt.mal[0] - katt.x, katt.mal[1] - katt.z) < 0.2) {
    katt.vila -= dt;
    if (S.helen?.kajsaDag === S.dag) { katt.mal = [HELEN.x + 0.3, HELEN.z + 0.25]; katt.vila = 5; }   // punkt AN: Kajsa sover i Helens knä
    else if (katt.vila <= 0) { const a = Math.random() * Math.PI * 2, r = Math.random() * (TIPP.r - 1); katt.mal = [TIPP.x + Math.cos(a) * r, TIPP.z + Math.sin(a) * r]; katt.vila = 2 + Math.random() * 6; }
  } else {
    const dx = katt.mal[0] - katt.x, dz = katt.mal[1] - katt.z, l = Math.hypot(dx, dz), f = Math.min(l, dt * 1.1);
    katt.x += dx / l * f; katt.z += dz / l * f; kajsa.rotation.y = Math.atan2(-dz, dx);
  }
  kajsa.position.set(katt.x, tippHojd(katt.x, katt.z), katt.z);
  kajsa.userData.svans.rotation.y = Math.sin(nu / 300) * 0.4;
  if (Math.hypot(p.x - katt.x, p.z - katt.z) < 2.5 && nu > katt.nastaMjau) { katt.nastaMjau = nu + 30000; varldsBubbla(kajsa, 'Mjau.', 2.2, 0.75); ton(880, 0.12, 0.03, 'triangle'); ton(660, 0.18, 0.03, 'triangle', 0.12); }
  if (bengt.visible && nu > bengtSynsTill) bengt.visible = false;
}

// ---------- Punkt AN: Haggan Helen i efterspelet (texterna ur claude/soptippsvagen-haggan-helen.md) ----------
// Dyker upp i efterspelet en morgon när Rolfs soptipp är köpt och tippen är städad till minst 85 %. Sitter vid kundvagnen Bettan i södra tippkanten.
// Varje morgon tills hennes skjul står: ett öknamn, ett erbjudande (båda svaren är nej) och en eller två quirks.
// Dag 4 (räknat från dagen hon kom = dag 1) ger Rolf ritningen. Skjulet: 3 delar × 1 000 g blå PLA, monteras på den streckade rutan.
const HELEN = { x: -32.4, z: 18.9 };                        // där hon sitter, innanför bommen i södra tippkanten
const HELEN_SKJUL = { x: -35.2, z: 18.3, b: 2.4, d: 2.0 };  // fast plats för hennes skjul
const HELEN_HOG = { x: -37.0, z: 16.6 };                    // hennes hörna – högen räknas inte i städningen
const HELEN_ROLF_SMS = 'Helen ä tillbaka. Hon va hä före mej. Före alla. Var snäll mot henne. Hon biter int. Inte längre. /R';
const HELEN_ROLF_RITNING = 'Helen behöver ett ställe. Ja ha ritat nåt. De ä som dit första skjul fast sämre. Hon kommer gilla de. /R';
const HELEN_ROLF_1987 = 'Hon dansa som en tvättmaskin. Hela kvälln. /R';
const HELEN_OKNAMN = ['Städdiktatorn', 'Kvastgeneralen', 'Rabattmördaren', 'Plastpolisen', 'Sopsnobben', 'Fröken Fin', 'Moppkungen', 'Prydnadsbusken', 'Sopsorteraren', 'Dammsugarsäljaren', 'Tippförstöraren', 'Lilla Kommunen'];
const helenHalsning = (i) => { const n = HELEN_OKNAMN[i % HELEN_OKNAMN.length]; return n === 'Lilla Kommunen' ? 'Nämen. Lilla Kommunen. Har du med dig en blankett?' : i % 2 ? `God morgon, ${n}.` : `Jaha. Där kommer ${n}.`; };
const HELEN_ERBJUD = [
  ['Vill du ha en Blend? Gula. De riktiga.', 'Nej tack.', 'Jag har ju astma.', 'Klokt. Jag började 1971. Det var inte klokt.'],
  ['En slurk? Château Tetra. Årgång i tisdags.', 'Nej tack.', 'Jag har saft.', 'Saft. Då är du sån. Okej.'],
  ['Halv macka? Den har bara legat i fickan sen i morse.', 'Nej tack.', 'Jag är mätt.', 'Mer till mig.'],
  ['Vill du köpa en tändare? Den tänder nästan.', 'Nej tack.', 'Vad kostar den?', 'För dig: en kruka. Nej. Den är inte till salu.'],
  ['Vill du ha en karamell? Den är bara lite ludden.', 'Nej tack.', 'Vad för smak?', 'Ficka.'],
  ['Ska du ha lite vin i saften? Det blir rosé.', 'Nej tack!', 'Mamma skulle döda mig.', 'Din mamma har rätt. Det är en dålig rosé.'],
];
// mammas mat: hon tar en per dag och svarar per sort (spelet har inga kakor – kompott och raggmunkar är "hembakat")
const HELEN_HEMBAKAT = 'Hembakat. Jag har inte ätit hembakat sen 1998. Det var också din mammas. Nej. Skämt.';
const HELEN_MOGEL = 'Lite mögel. Det är bara penicillin.';
const HELEN_MAT = { burk_lingon: 'Äntligen nån som förstår sig på lingon.', burk_sill: 'Sill. I november. Din mamma är ett geni.', burk_mogel_kompott: HELEN_MOGEL, burk_mogel_raggmunk: HELEN_MOGEL, burk_kompott: HELEN_HEMBAKAT, burk_raggmunk: HELEN_HEMBAKAT };
const helenTar = (typ) => !!HELEN_MAT[typ] || (!!VAROR[typ] && VAROR[typ].pris > 0 && !VAROR[typ].kop);   // mammas mat eller en printad sak
const HELEN_MINNEN = [
  [-27.5, 15.5, 'Här stod ett piano 1994. Ostämt. Jag spelade på det varje jul.'],
  [-24.6, 11.0, 'Här låg en soffa i elva år. Nu ligger här en RABATT.'],
  [-30.5, 7.2, '1987 hittade jag en kristallkrona här. Jag hängde den i ett träd. Den hängde där i tre år.'],
  [-35.8, 10.5, 'Här sov jag sommaren 2003. Bästa sommaren. Myggen var snälla.'],
  [-34.6, 14.6, 'Här låg en kyl. Den var min. Jag hade inte ström, men den var min.'],
  [-31.5, 7.8, 'Där borta stod Rolfs husvagn innan den blev Rolfs husvagn.'],
];
// quirks i samtalet (en eller två per dag, i tur och ordning)
const HELEN_QUIRK = [
  { id: 'bettan1', rad: 'Nä, Bettan. Han ser inte ut som en som delar.' },
  { id: 'goran', rad: 'GÖRAN! DU ÄR EN RÅTTA MED VINGAR!' },
  { id: 'knat', rad: 'Knät säger regn i morgon.' },
  { id: 'polaroid', rad: 'Nej. Polisen har redan nog.', fore: true },
  { id: 'rolf', rad: "Jag minns ingenting. Det var 'Sopbilsblues'. Andra versen. Jag minns ingenting.", rolf: true },
  { id: 'kajsa', rad: 'Det är inte min katt. Den bara bor här. Som jag.', kajsa: true },
  { id: 'bettan2', rad: 'Bettan tycker du är okej. Bettan har dålig smak.' },
  { id: 'goran2', berattar: 'Göran och Helen delar på en macka. Under tystnad.', efter: 'goran' },
];
const HELEN_FYND = ['hf_emalj', 'hf_kassett', 'hf_tomte', 'hf_krona'];   // kristallkronan sist
const HELEN_FYND_RAD = 'Den här är från förr. Förr var bättre. Inte mycket, men lite.';
const HELEN_ARKIV = 'Det där var mitt arkiv.';
const HELEN_DELAR = 'Väggar. Fina. För fina. Gör dem lite sneda.';
const HELEN_KLAR = 'Det drar lite. Bra. Det ska dra.';
const HELEN_BETTAN_INNE = 'Bettan sov inne i natt. Första gången sen 2009.';
const HELEN_BENGT = 'BENGT-ÅKE! JAG SER DIN KIKARE!';
const HELEN_INGEN_PLATS = 'Jag har ingen plats. Det är för fint här nu.';   // dag 4 – manuset har ingen exakt replik, så den är kort och rak
const HELEN_EN_OM_DAGEN = 'En om dagen. Jag är inte girig.';
const HELEN_BETTAN_ROR = 'Bettan. Rör inte.';
const HELEN_RADER = () => [...HELEN_OKNAMN.map((_, i) => helenHalsning(i)), ...HELEN_ERBJUD.flatMap((e) => [e[0], e[3]]), ...new Set(Object.values(HELEN_MAT)), ...HELEN_MINNEN.map((m) => m[2]),
  ...HELEN_QUIRK.filter((q) => q.rad).map((q) => q.rad), HELEN_FYND_RAD, HELEN_ARKIV, HELEN_DELAR, HELEN_KLAR, 'Tack.', HELEN_BETTAN_INNE, HELEN_BENGT, HELEN_INGEN_PLATS, HELEN_EN_OM_DAGEN, HELEN_BETTAN_ROR];
const helenDag = () => S.helen ? S.dag - S.helen.kom + 1 : 0;   // dagen hon kom = dag 1

// figuren (mammas blockstil), en back att sitta på, ett tetrapak – och kundvagnen Bettan
const helenFig = introFigur('helen'); helenFig.visible = false; scen.add(helenFig);
const helenSits = new THREE.Group(); {
  helenSits.add(at(box(0.5, 0.4, 0.38, mat(0x2f5f8a)), 0, 0.2, 0));   // en blå back
  const tetra = new THREE.Group(); tetra.add(at(box(0.09, 0.2, 0.06, mat(0x7a1f3a)), 0, 0.1, 0)); tetra.add(at(box(0.07, 0.04, 0.062, mat(0xf2ede2)), 0, 0.15, 0)); tetra.add(at(box(0.012, 0.03, 0.012, mat(0xf2ede2)), 0.025, 0.215, 0));
  tetra.position.set(0.42, 0, 0.15); helenSits.add(tetra);   // Château Tetra – bara rekvisita
  helenSits.visible = false; scen.add(helenSits);
}
const bettan = new THREE.Group(); {
  const stal = mat(0xb9c2cc, { metalness: 0.6, roughness: 0.35 }), svart = mat(0x222222);
  for (const [x, z] of [[-0.25, -0.35], [0.25, -0.35], [-0.25, 0.35], [0.25, 0.35]]) { const h = cyl(0.06, 0.06, 0.04, svart, 10); h.rotation.z = Math.PI / 2; bettan.add(at(h, x, 0.06, z)); }
  bettan.add(at(box(0.5, 0.03, 0.8, stal), 0, 0.15, 0));
  for (const x of [-0.27, 0.27]) for (let y = 0.35; y < 0.95; y += 0.14) bettan.add(at(box(0.02, 0.02, 0.86, stal), x, y, 0));
  for (const z of [-0.42, 0.42]) for (let y = 0.35; y < 0.95; y += 0.14) bettan.add(at(box(0.56, 0.02, 0.02, stal), 0, y, z));
  for (const [x, z] of [[-0.27, -0.42], [0.27, -0.42], [-0.27, 0.42], [0.27, 0.42]]) bettan.add(at(box(0.02, 0.8, 0.02, stal), x, 0.55, z));
  bettan.add(at(box(0.5, 0.02, 0.84, stal), 0, 0.35, 0));
  bettan.add(at(box(0.6, 0.03, 0.03, mat(0xd63a2f)), 0, 1.05, 0.5)); for (const x of [-0.27, 0.27]) bettan.add(at(box(0.02, 0.15, 0.02, stal), x, 0.98, 0.47));
  // innehållet: påsar, en filt och ett paket gula Blend (bara rekvisita)
  bettan.add(at(box(0.4, 0.3, 0.3, mat(0x3a5a8a)), -0.02, 0.55, -0.15)); bettan.add(at(box(0.35, 0.2, 0.35, mat(0x8a3a3a)), 0.03, 0.5, 0.2));
  const filt = new THREE.Mesh(new THREE.SphereGeometry(0.25, 10, 6), mat(0x5a7a4a)); filt.scale.set(1, 0.4, 1.2); filt.position.set(0, 0.78, 0.05); bettan.add(filt);
  bettan.add(at(box(0.09, 0.05, 0.05, mat(0xf1d23b)), 0.12, 0.88, -0.1));
  const sk = skylt('BETTAN', 0.42, 0.11, '#2b2118', '#ffe9b0'); sk.position.set(0, 0.62, 0.44); bettan.add(sk);
  bettan.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  bettan.visible = false; scen.add(bettan);
}
// den streckade rutan där skjulet ska stå (när ritningen finns och skjulet inte står)
const helenRuta = (() => {
  const c = document.createElement('canvas'); c.width = 256; c.height = 214; const g = c.getContext('2d');
  g.fillStyle = 'rgba(76,201,240,.16)'; g.fillRect(0, 0, 256, 214); g.setLineDash([16, 10]); g.lineWidth = 8; g.strokeStyle = '#4cc9f0'; g.strokeRect(6, 6, 244, 202);
  g.setLineDash([]); g.fillStyle = '#fff'; g.font = 'bold 26px system-ui'; g.textAlign = 'center'; g.fillText('HELENS', 128, 96); g.fillText('SKJUL', 128, 132);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(HELEN_SKJUL.b, HELEN_SKJUL.d), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, depthTest: false }));   // ligger på tippens sluttning – ritas ovanpå marken
  m.rotation.x = -Math.PI / 2; m.renderOrder = 2; m.visible = false; scen.add(m); return m;
})();
// själva skjulet: snett, lappat och lite för litet – "som ditt första skjul fast sämre"
const helenSkjul = new THREE.Group(); {
  const pl = mat(0x6f7f8c, { roughness: 0.6, metalness: 0.3 }), tra = mat(0x7a5a3a), bla = mat(0x3d6fb0);
  const { b, d } = HELEN_SKJUL, h = 1.9;
  helenSkjul.add(at(box(b, h, 0.06, bla), 0, h / 2, -d / 2)); helenSkjul.add(at(box(0.06, h, d, bla), -b / 2, h / 2, 0)); helenSkjul.add(at(box(0.06, h * 0.95, d, bla), b / 2, h * 0.475, 0));
  helenSkjul.add(at(box(b * 0.32, h, 0.06, bla), -b * 0.34, h / 2, d / 2)); helenSkjul.add(at(box(b * 0.32, h, 0.06, bla), b * 0.34, h / 2, d / 2));
  const dorr = box(b * 0.36, h * 0.86, 0.04, tra); dorr.position.set(0.05, h * 0.43, d / 2 + 0.05); dorr.rotation.y = -0.35; helenSkjul.add(dorr);
  const tak = box(b + 0.4, 0.05, d + 0.4, pl); tak.position.set(0, h + 0.1, 0); tak.rotation.x = 0.12; tak.rotation.z = -0.05; helenSkjul.add(tak);
  helenSkjul.add(at(box(0.5, 0.3, 0.07, mat(0x8a3a3a)), 0.6, 1.2, -d / 2 - 0.02));   // en lapp i väggen
  helenSkjul.rotation.y = Math.PI + 0.05; helenSkjul.visible = false; scen.add(helenSkjul);   // dörren mot tippen och Helen
  helenSkjul.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
}
const helenHojd = (x, z) => tippHojd(x, z);
function ritaHelen() {
  const H = S.helen, syns = !!H;
  helenFig.visible = syns; bettan.visible = syns; helenSits.visible = syns;
  helenRuta.visible = !!H && H.steg >= 4 && !H.skjul;
  helenRuta.position.set(HELEN_SKJUL.x, helenHojd(HELEN_SKJUL.x, HELEN_SKJUL.z) + 0.05, HELEN_SKJUL.z);
  helenSkjul.visible = !!H?.skjul; helenSkjul.position.set(HELEN_SKJUL.x, helenHojd(HELEN_SKJUL.x, HELEN_SKJUL.z), HELEN_SKJUL.z);
  if (!H) return;
  // hon sitter på en back, vänd mot gården
  poseFigur(helenFig, { x: HELEN.x, z: HELEN.z, rot: 0.6 });
  const u = helenFig.userData; u.ben.forEach((bn) => { bn.rotation.x = -1.35; }); u.hoger.rotation.set(-0.9, 0, 0.15); u.vanster.rotation.set(-0.9, 0, -0.15);
  helenFig.position.y = helenHojd(HELEN.x, HELEN.z) - 0.42;
  helenSits.position.set(HELEN.x, helenHojd(HELEN.x, HELEN.z), HELEN.z); helenSits.rotation.y = 0.6;
  const bp = H.bettan || [HELEN.x + 1.2, HELEN.z - 0.5, 0.3];
  bettan.position.set(bp[0], helenHojd(bp[0], bp[1]), bp[1]); bettan.rotation.y = bp[2];
}
// Helen säger flera repliker efter varandra (ett röstklipp per replik)
function helenSag(rader) {
  let i = 0;
  const nasta = () => {
    if (i >= rader.length) return;
    prata('helen', rader[i++], 'STORY');
    const vanta = () => { if (pratarVem !== 'helen') return; if (performance.now() > pratarTill + DIALOG_PAUS) nasta(); else setTimeout(vanta, 200); };
    setTimeout(vanta, 500);
  };
  nasta();
}
// den nya dagens innehåll: öknamn, erbjudande och quirks
function helenNyDag() {
  const H = S.helen; if (!H) return;
  const fore = !H.skjul, gjorda = H.quirkGjorda || [];
  const pool = HELEN_QUIRK.filter((q) => (!q.fore || fore) && (!q.efter || gjorda.includes(q.efter)) && !gjorda.includes(q.id));
  const reserv = HELEN_QUIRK.filter((q) => !q.fore && !q.rolf && !q.efter);
  const antal = helenDag() % 2 ? 1 : 2, lista = (pool.length ? pool : [reserv[(S.dag * 3) % reserv.length]]).slice(0, antal).map((q) => q.id);
  const bettanInne = !fore && !H.bettanInneSagd && H.skjul < S.dag;
  H.idag = { dag: S.dag, halsning: fore ? helenHalsning(H.oknamn = (H.oknamn ?? -1) + 1) : bettanInne ? HELEN_BETTAN_INNE : null, erbjud: fore ? (H.erbjudNr = ((H.erbjudNr ?? -1) + 1) % HELEN_ERBJUD.length) : null, svar: null, quirks: lista, matGiven: false, fynd: false };
  if (bettanInne) H.bettanInneSagd = true;
  if (lista.includes('kajsa')) H.kajsaDag = S.dag;
  if (helenDag() >= 4 && H.steg < 4) helenRitning();
}
function helenRitning() {
  const H = S.helen; H.steg = 4;
  if (!S.ritningar.includes('helenskjul')) S.ritningar.push('helenskjul');
  if (H.idag) H.idag.ingenPlats = true;
  if (!(S.smsSkickat || []).includes('helenritning')) { S.smsSkickat = [...(S.smsSkickat || []), 'helenritning']; sms('rolf', HELEN_ROLF_RITNING, undefined, true); }
  ritaHelen(); sparaSnart();
}
function helenKommer() {
  S.helen = { kom: S.dag, steg: 1, hog: 0, quirkGjorda: [], minnen: [], fynd: 0 };
  sms('rolf', HELEN_ROLF_SMS, undefined, true);
  helenNyDag(); ritaHelen(); sparaSnart();
}
const helenVillkor = () => !!S.julFirad && agerMark('tippen') && tippStadat() >= 0.85;
// natten: Bettan flyttar, högen växer, morgondagens samtal förbereds
function helenNatt() {
  const H = S.helen; if (!H) return;
  const v = Math.random() * Math.PI * 0.9 - 0.2, r = 1.2 + Math.random() * 1.6;
  H.bettan = [HELEN.x + Math.cos(v) * r, HELEN.z - Math.sin(v) * r * 0.6, Math.random() * 6.3];
  if (H.skjul && H.skjul < S.dag && !H.bettanInneSagd) H.bettan = [HELEN_SKJUL.x + 0.3, HELEN_SKJUL.z + 0.1, 0.2];   // första natten: inne i skjulet
  helenHog(1 + Math.floor(Math.random() * 3));
  helenNyDag(); ritaHelen(); sparaSnart();
}
// morgonen (efter "Börja dagen"): Helen dyker upp när villkoren är uppfyllda
function helenMorgon() { if (!S.helen && helenVillkor()) { helenKommer(); return true; } return false; }
// högen: skräp i hennes hörna, märkt så att det inte räknas i städningen
function helenHog(n) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, rr = Math.random() * 0.9;
    laggSkrap(HELEN_HOG.x + Math.cos(a) * rr, HELEN_HOG.z + Math.sin(a) * rr, variantFor(['flaska', 'burk', 'pase'][i % 3]), Math.random() * 6.3);
    markeraHelen(skrapLista[skrapLista.length - 1]);
  }
  S.helen.hog = (S.helen.hog || 0) + n;
}
function markeraHelen(s) { s.userData.helen = true; s.userData.skrap = [...s.userData.skrap.slice(0, 4), 1]; }
// städar man hennes hög blir hon sur en dag
function helenArkiv(s) {
  const H = S.helen; if (!s.userData.helen || !H) return;
  H.hog = Math.max(0, (H.hog || 1) - 1);
  if (H.sur === S.dag) return;
  H.sur = S.dag; sparaSnart();
  varldsBubbla(helenFig, HELEN_ARKIV, 3.5); prata('helen', HELEN_ARKIV);
}
// samtalet
function pratHelen() {
  const H = S.helen; if (!H) return;
  if (H.idag?.dag !== S.dag) helenNyDag();
  const d = H.idag, rader = [], narr = [];
  if (H.sur === S.dag) rader.push(HELEN_ARKIV);
  if (d.halsning) rader.push(d.halsning);
  if (d.ingenPlats) rader.push(HELEN_INGEN_PLATS);
  for (const id of d.quirks) {
    const q = HELEN_QUIRK.find((x) => x.id === id); if (!q) continue;
    if (q.rolf && !(S.smsSkickat || []).includes('helen1987')) { S.smsSkickat = [...(S.smsSkickat || []), 'helen1987']; setTimeout(() => sms('rolf', HELEN_ROLF_1987, undefined, true), 6000); }
    if (q.rad) rader.push(q.rad); else narr.push(q.berattar);
    if (!(H.quirkGjorda || []).includes(id)) H.quirkGjorda = [...(H.quirkGjorda || []), id];
  }
  sparaSnart();
  const e = d.erbjud != null ? HELEN_ERBJUD[d.erbjud] : null;
  const citat = (t) => `<p>”${rens(t)}”</p>`;
  const kropp = `<div class="ph-helen">${rader.map(citat).join('')}${narr.map((t) => `<p class="ph-helen-narr">${rens(t)}</p>`).join('')}${e ? `${citat(e[0])}${d.svar == null ? `<div class="ph-helen-svar">${knapp({ text: e[1], typ: 'neutral', attr: 'data-hsvar="1"' })}${knapp({ text: e[2], typ: 'neutral', attr: 'data-hsvar="2"' })}</div>` : citat(e[3])}` : ''}${!H.skjul && H.steg >= 4 ? `<p class="ph-helen-narr">Rolfs ritning ligger i skrivaren under Hemmet: Helens skjul, 3 delar blå PLA. Ställ det på den streckade rutan bredvid henne.</p>` : ''}</div>`;
  oppnaRuta(panel({ ikon: 'hjarta', titel: 'Helen', sub: H.skjul ? 'Bor i skjulet i tippkanten. Med Bettan.' : 'Sitter vid kundvagnen Bettan i tippkanten', kropp, klass: 'ph-helen-panel' }), (el) => {
    el.querySelectorAll('[data-hsvar]').forEach((k) => { k.onclick = () => { d.svar = +k.dataset.hsvar; sparaSnart(); tystna(); pratHelen(); prata('helen', e[3]); }; });
  });
  if (d.svar == null) helenSag([...rader, ...(e ? [e[0]] : [])]);
}
// ge Helen mammas mat eller en printad sak (en per dag). Ibland ett fynd tillbaka (max ett per dag).
function geHelen(typ) {
  const H = S.helen; if (!H || !helenTar(typ)) return false;
  if (H.idag?.dag !== S.dag) helenNyDag();
  if (H.idag.matGiven) { varldsBubbla(helenFig, HELEN_EN_OM_DAGEN, 3); prata('helen', HELEN_EN_OM_DAGEN); return true; }
  taBortInv(typ, 1); H.idag.matGiven = true; H.gavor = (H.gavor || 0) + 1; ljud.plock();
  const rad = HELEN_MAT[typ];
  if (rad) { varldsBubbla(helenFig, rad, 4.5); prata('helen', rad); } else notis(`Helen stoppar ${sakNamn(namnFor(typ))} i Bettan utan att säga något.`, '');
  if (H.fynd < HELEN_FYND.length && (H.fynd === 0 || Math.random() < 0.5)) {
    const f = HELEN_FYND[H.fynd++]; H.idag.fynd = true;
    setTimeout(() => { laggTill(f); ritaHotbar(); notis(`${namnFor(f)} – från Helens hemliga förråd`, 'guld'); varldsBubbla(helenFig, HELEN_FYND_RAD, 4); prata('helen', HELEN_FYND_RAD); sparaSnart(); }, rad ? 3800 : 1200);
  }
  ritaHotbar(); sparaSnart(); return true;
}
interaktor.registrera(helenFig, {
  text: () => helenTar(valdTyp()) ? `Ge ${namnFor(valdTyp()).toLowerCase()} till Helen` : 'Prata med Helen',
  kanAktivera: () => !!S.helen,
  aktivera: () => { if (helenTar(valdTyp()) && geHelen(valdTyp())) return; pratHelen(); },
});
traffYta(helenFig, 0.8, 1.9, 0.8);
interaktor.registrera(bettan, { text: () => 'Bettan – Helens kundvagn', kanAktivera: () => !!S.helen, aktivera: () => { varldsBubbla(helenFig, HELEN_BETTAN_ROR, 2.5); prata('helen', HELEN_BETTAN_ROR); } });
traffYta(bettan, 0.6, 1.1, 0.9);
// montera skjulet: välj byggsatsen och klicka på rutan
const helenRutaYta = traffYta(helenRuta, HELEN_SKJUL.b, HELEN_SKJUL.d, 1.2, 0, 0, 0.6);   // rutan ligger ner: lokal z är uppåt
interaktor.registrera(helenRutaYta, {
  text: () => '🔨 Ställ Helens skjul här',
  kanAktivera: () => helenRuta.visible && valdTyp() === 'byggsats:helenskjul',
  aktivera: () => { taBortVald(); ritaHotbar(); helenSkjulKlart(); },
});
function helenSkjulKlart() {
  const H = S.helen; if (!H || H.skjul) return;
  H.skjul = S.dag; H.steg = 5; ritaHelen(); sparaSnart();
  ljud.stor(); konfetti(60);
  varldsBubbla(helenFig, HELEN_KLAR, 4); prata('helen', HELEN_KLAR);
  setTimeout(() => {   // efter en paus: namnet en gång. Sedan aldrig igen.
    if (H.tackSagt) return;
    const namn = S.spelarNamn && S.spelarNamn !== 'Anonym' ? S.spelarNamn : 'du', t = `Tack, ${namn}.`;
    H.tackSagt = true; sparaSnart(); varldsBubbla(helenFig, t, 4); prata('helen', 'Tack.'); notis(`Helen: ”${t}”`, 'guld');
  }, 5200);
}
// minnen av tippen (en per dag när man går förbi en viss plats) och repliken när delarna kommer
function kollaHelen() {
  const H = S.helen; if (!H || !ui.igang || sover || pausad) return;
  const p = spelare.pos;
  if (!H.delarSagt && antalInv('byggsats:helenskjul') && Math.hypot(p.x - HELEN.x, p.z - HELEN.z) < 9) { H.delarSagt = true; sparaSnart(); varldsBubbla(helenFig, HELEN_DELAR, 4); prata('helen', HELEN_DELAR); return; }
  if (H.minneDag === S.dag) return;
  for (const [x, z, t] of HELEN_MINNEN) {
    if ((H.minnen || []).includes(t) || Math.hypot(p.x - x, p.z - z) > 2.2) continue;
    H.minnen = [...(H.minnen || []), t]; H.minneDag = S.dag; sparaSnart();
    replik('helen', t, `Helen ropar: ”${t}”`); return;
  }
}
setInterval(kollaHelen, 1000);
ritaHelen();
{ const st = document.createElement('style'); st.textContent = '.ph-helen{padding:12px 16px;font:500 16px/1.5 system-ui}.ph-helen p{margin:0 0 8px}.ph-helen-narr{opacity:.75;font-style:italic;font-size:14px}.ph-helen-svar{display:flex;gap:10px;margin-top:6px}'; document.head.appendChild(st); }
// testkrok: __printahem.helen(steg) – 0 = dyker upp, 4 = ritningen, 5 = skjulet klart
function helenTest(steg = 0) {
  if (!S.helen) helenKommer();
  const H = S.helen;
  if (steg >= 1 && steg < 4) { H.kom = S.dag - steg + 1; helenNyDag(); }
  if (steg >= 4) { H.kom = Math.min(H.kom, S.dag - 3); helenNyDag(); }
  if (steg >= 5 && !H.skjul) helenSkjulKlart();
  ritaHelen(); return JSON.parse(JSON.stringify(S.helen));
}
// ---------- Punkt AM: fasta platser i fabriken, linjernas spolhållare och "Flytta om" ----------
const PLATS = Object.fromEntries(PLAN.FABRIK_PLATSER.map((p) => [p.id, p]));
// vilka saker som har en fast plats i fabriken, och i vilken ordning platserna fylls
function platsPool(typ) {
  const sk = (l) => [1, 2, 3, 4].map((i) => `L${l}-skrivare${i}`);
  if (typ === 'bord' || typ === 'skrivare3') return [...sk(1).slice(1), ...(S.kapitel >= 4 ? [...sk(3), ...sk(4), ...sk(5)] : [])];
  if (typ === 'skrivarepetg') return sk(2);
  if (typ === 'petgkvarn') return ['L2-kvarn'];
  if (typ === 'sol') return ['sol', 'sol2'];
  if (typ === 'bank') return ['bank', 'bank2'];
  if (typ === 'solpark') return ['solpark', 'solpark2', 'solpark3'];
  if (typ === 'saljlada') return ['saljlada'];
  return null;
}
// bara det första arbetsbordet hör till fabriken (Skrivare M står på det) – fler bord är möbler i hemmet
function fabrikSak(typ) { if (!platsPool(typ)) return false; return typ !== 'bord' || !placerade.some((p) => p.typ === 'bord' && iFabriken(p.x)); }
const iFabriken = (x) => x < -1.5;
const platsUpptagen = (pl, lista = placerade) => (pl.id === 'L1-skrivare1' && !!S.skrivareStar) || lista.some((p) => !p.pa && Math.abs(p.x - pl.x) < 0.6 && Math.abs(p.z - pl.z) < 0.6);
function nastaPlats(typ, lista = placerade) { if (!fabrikSak(typ)) return null; for (const id of platsPool(typ)) { const pl = PLATS[id]; if (pl && !platsUpptagen(pl, lista)) return pl; } return null; }
// ligger (x, z) på en ruta i planen, stigen eller ett band? (för skräpet)
function iPlanRuta(x, z, marg = 0) {
  for (const p of [...PLAN.FABRIK_PLATSER, ...PLAN.INFART]) if (p.id !== 'fabrikshall' && Math.abs(x - p.x) < p.b / 2 + marg && Math.abs(z - p.z) < p.d / 2 + marg) return true;
  return false;
}
// skrivarna i en linje, i platsordning (plats 1 först)
function linjeSkrivare(nr) {
  const z = PLAN.LINJER[nr - 1].z, w = new THREE.Vector3();
  return skrivare.filter((sk) => { sk.mesh.getWorldPosition(w); return Math.abs(w.z - z) < 1.2 && w.x > -12 && w.x < -2; }).sort((a, b) => a.mesh.getWorldPosition(w).x - b.mesh.getWorldPosition(new THREE.Vector3()).x);
}
// linjens spolhållare: vanlig och stor = 1 spole, XL = 2, spoltorn = 4 (nivån är den högsta som monterats i linjen)
function linjeSpolar(nr) { const n = Math.max(nr === 1 ? S.linjeSpol || 0 : 0, ...linjeSkrivare(nr).map((sk) => sk.spolNiva || 0)); return n >= 3 ? 4 : n >= 2 ? 2 : 1; }

// planen i marken: streckade rutor med ikon och text för det som ska stå där. Bara på den nya gården.
const PLAN_IKON = { container: '🗑️', kvarn: '⚙️', extruder: '🔥', spolhallare: '🧵', utband: '➡️', matarband: '➡️', samlingsband: '➡️', lastarm: '🦾', saljlada: '💰', cykel: '🚲', sol: '☀️', bank: '🔋', solpark: '☀️', fabrikshall: '🏭' };
const planYta = { minX: -21, maxX: -1.6, minZ: -21, maxZ: 17 }, PX = 26;
const planCanvas = document.createElement('canvas'); planCanvas.width = Math.round((planYta.maxX - planYta.minX) * PX); planCanvas.height = Math.round((planYta.maxZ - planYta.minZ) * PX);
const planTex = new THREE.CanvasTexture(planCanvas); planTex.anisotropy = 4;
const planMesh = new THREE.Mesh(new THREE.PlaneGeometry(planYta.maxX - planYta.minX, planYta.maxZ - planYta.minZ), new THREE.MeshBasicMaterial({ map: planTex, transparent: true, depthWrite: false }));
planMesh.rotation.x = -Math.PI / 2; planMesh.position.set((planYta.minX + planYta.maxX) / 2, 0.035, (planYta.minZ + planYta.maxZ) / 2); planMesh.renderOrder = 2; scen.add(planMesh);
// stigen mellan fabriken och hemmet: grus
{ const st = PLAN.INFART.find((p) => p.id === 'stig'); const m = new THREE.Mesh(new THREE.PlaneGeometry(st.b, st.d), new THREE.MeshLambertMaterial({ color: 0xb9a37e })); m.rotation.x = -Math.PI / 2; m.position.set(st.x, 0.02, st.z); m.receiveShadow = true; scen.add(m); }
// rutan som lyser när du håller en byggsats med fast plats
const planLjus = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: 0xffd43b, transparent: true, opacity: 0.45, depthWrite: false }));
planLjus.rotation.x = -Math.PI / 2; planLjus.renderOrder = 3; planLjus.visible = false; scen.add(planLjus);
function planLys(pl) { planLjus.visible = !!pl; if (!pl) return; planLjus.position.set(pl.x, 0.05, pl.z); planLjus.scale.set(pl.b + 0.2, pl.d + 0.2, 1); planLjus.material.opacity = 0.3 + Math.abs(Math.sin(performance.now() / 300)) * 0.35; }
let planNyckel = '';
// punkt AS: vilken plats ska fyllas härnäst? Bara när du håller saken eller när dagsmålet pekar dit.
function planNasta() {
  const h = startHall(); if (h) return h;
  const t = valdTyp(), typ = t && arPlacerbar(t) ? placeringsTyp(t) : null;
  if (typ && fabrikSak(typ)) return nastaPlats(typ);
  const id = stegId();
  if (id === 'lasta' && S.skrivareLastad) return startPlats('L1-skrivare1');
  if (id === 'kvarn' && S.kvarnKopt) return startPlats('L1-kvarn');
  const st = STEG[S.steg], b = st && !st.sov ? (typeof st.bild === 'function' ? st.bild() : st.bild) : null;
  if (b && b.startsWith('byggsats:') && fabrikSak(b.slice(9)) && antalInv(b)) return nastaPlats(b.slice(9));
  return null;
}
// planen i marken: nästa plats som en tydlig streckad ruta, och linjerna för kapitel 2–4 som svaga rutor när kapitlet har börjat.
// Hela planen finns som karta i dagboken (Fabriksplanen).
const platsFylld = (p) => p.linje === 1 && ['kvarn', 'extruder', 'container', 'spolhallare'].includes(p.typ) ? !!S.kvarnStar : p.typ === 'cykel' ? !!S.cykelOmbyggd : platsUpptagen(p);
function ritaPlan() {
  // punkt BA (rättelse): gården visar ingen plan längre – bara nästa maskin som ritning (uppdateraRitning) och den gula rutan
  // när man håller maskinen. Hela planen finns i Fabriksplanen i dagboken.
  const t = valdTyp(), hall = t && arPlacerbar(t) && fabrikSak(placeringsTyp(t)) ? planNasta() : null;   // när man håller saken lyser platsen gult
  const nyckel = hall ? 'hall:' + hall.id : 'tom';
  if (planNyckel === nyckel) return; planNyckel = nyckel;
  const c = planCanvas.getContext('2d'); c.clearRect(0, 0, planCanvas.width, planCanvas.height);
  if (hall) {
    const X = (x) => (x - planYta.minX) * PX, Z = (z) => (z - planYta.minZ) * PX, x0 = X(hall.x - hall.b / 2), z0 = Z(hall.z - hall.d / 2), w = hall.b * PX, h = hall.d * PX;
    c.fillStyle = 'rgba(255,212,59,.38)'; c.fillRect(x0, z0, w, h); c.lineWidth = 6; c.strokeStyle = 'rgba(255,224,110,.95)'; c.strokeRect(x0 + 3, z0 + 3, w - 6, h - 6);
  }
  planTex.needsUpdate = true;
}
// ---------- Punkt BA: ritningen – nästa maskin som vita, lite skakiga linjer på sin plats ----------
// Ingen solid modell syns förrän den är köpt och utställd. Då "printas" den fram ur ritningen nerifrån och upp (RITNING_PRINT_TID s).
const RITNING_FARG = 0xeef8ff, RITNING_GLOD = 0x8fd3ff, RITNING_PRINT_TID = 1.5;
let ritning = null, ritningNyckel = '', ritningKoll = 0, trailerLage = false;
const ritMat = new THREE.LineBasicMaterial({ color: RITNING_FARG, transparent: true, opacity: 0.9, depthWrite: false });
const ritGlod = new THREE.LineBasicMaterial({ color: RITNING_GLOD, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending });
// vita kanter för allt som syns i objekten (i världskoordinater), med lite skakighet
function byggRitning(objekt) {
  const g = new THREE.Group(); g.name = 'ritning';
  const slump = (() => { let x = 3; return () => { x = (x * 16807) % 2147483647; return x / 2147483647 - 0.5; }; })();
  for (const rot of objekt) {
    const syn = rot.visible; rot.visible = true; rot.updateMatrixWorld(true);
    rot.traverse((m) => {
      if (!m.isMesh || !m.geometry || m.material?.colorWrite === false || m.material?.opacity === 0 || m.userData?.ingenRitning) return;
      for (let x = m; x && x !== rot; x = x.parent) if (!x.visible) return;
      const e = new THREE.EdgesGeometry(m.geometry, 30); e.applyMatrix4(m.matrixWorld);
      const a = e.attributes.position; for (let i = 0; i < a.count; i++) a.setXYZ(i, a.getX(i) + slump() * 0.025, a.getY(i) + slump() * 0.02, a.getZ(i) + slump() * 0.025);
      const l = new THREE.LineSegments(e, ritMat); l.renderOrder = 5; g.add(l);
      const l2 = new THREE.LineSegments(e, ritGlod); l2.scale.setScalar(1.004); l2.renderOrder = 4; g.add(l2);
    });
    rot.visible = syn;
  }
  return g;
}
// vad är nästa maskin, och var står den? [nyckel, () => objekt att rita]
function ritningMal() {
  if (S.skrivareLastad && !S.skrivareStar) return ['skrivareS', () => [gammal, ladGrupp]];
  if (S.cykelOmbyggd && !S.kvarnStar) return ['kvarn', () => [kvarn, ...(extruder.parent && extruder.parent !== kvarn ? [extruder] : [])]];
  if (S.karra && !S.kvarn.band && S.kvarnStar && (S.kapitel || 1) <= 1) return ['matarband', () => [matarband]];   // B3: sophållaren som ritning bakom kvarnen när man har kärran
  // [plats, maskin]: det du håller, annars den första maskinen i dagens mål som inte är utställd (så syns en ny linjes första maskin när kapitlet börjar)
  const valt = (() => { const t = valdTyp(), typ = t && arPlacerbar(t) ? placeringsTyp(t) : null; return typ && fabrikSak(typ) ? [nastaPlats(typ), typ] : null; })();
  const fran = valt || (() => {
    const del = STEG[S.steg]?.del;
    for (let i = S.steg; i < STEG.length && STEG[i].del === del; i++) {
      const st = STEG[i]; if (st.sov) break; let b = null; try { b = typeof st.bild === 'function' ? st.bild() : st.bild; } catch {}
      if (b && b.startsWith('byggsats:') && fabrikSak(b.slice(9))) { const p2 = nastaPlats(b.slice(9)); if (p2) return [p2, b.slice(9)]; }
    }
    return null;
  })();
  if (!fran) return null;
  const [pl, typ] = fran;
  if (!pl || platsFylld(pl) || !(MASKINER[typ] || SKRIVARTYP[typ])) return null;
  return [typ + '@' + pl.id, () => { const m = SKRIVARTYP[typ] ? skapaSkrivare(SKRIVARTYP[typ]) : skapaMaskin(typ); m.position.set(pl.x, 0, pl.z); m.updateMatrixWorld(true); return [m]; }];
}
function uppdateraRitning(dt) {
  ritningKoll -= dt;
  if (ritningKoll <= 0) {
    ritningKoll = 0.5;
    const mal = ui.igang || trailerLage ? ritningMal() : null, nyckel = mal?.[0] || '';
    if (nyckel !== ritningNyckel) {
      ritningNyckel = nyckel;
      if (ritning && !ritning.userData.tonar) { scen.remove(ritning); ritning.traverse((o) => o.geometry?.dispose?.()); }
      ritning = mal ? byggRitning(mal[1]()) : null; if (ritning) scen.add(ritning);
    }
  }
  const t = performance.now() / 1000;
  ritMat.opacity = 0.78 + Math.sin(t * 2.3) * 0.12; ritGlod.opacity = 0.28 + Math.sin(t * 2.3 + 1) * 0.12;
  for (const pf of printarFram) pf.tick(dt);
}
// printas fram: modellen växer upp lager för lager nerifrån, med ett printerljud
const printarFram = new Set();
function printaFram(objekt) {
  renderer.localClippingEnabled = true;
  const box = new THREE.Box3(); objekt.forEach((o) => { o.updateMatrixWorld(true); box.expandByObject(o); });
  if (box.isEmpty()) return;
  const plan = new THREE.Plane(new THREE.Vector3(0, -1, 0), box.min.y), orig = [];
  objekt.forEach((o) => o.traverse((m) => { if (m.isMesh && m.material) { orig.push([m, m.material]); m.material = Array.isArray(m.material) ? m.material.map((x) => { const c = x.clone(); c.clippingPlanes = [plan]; return c; }) : Object.assign(m.material.clone(), { clippingPlanes: [plan] }); } }));
  const gammalRit = ritning; if (gammalRit) { gammalRit.userData.tonar = true; ritning = null; ritningNyckel = '__print'; }
  let tid = 0, pip = 0;
  const pf = { tick: (dt) => {
    tid += dt; const k = Math.min(1, tid / RITNING_PRINT_TID);
    plan.constant = box.min.y + (box.max.y - box.min.y) * (k * k * (3 - 2 * k)) + 0.001;
    if ((pip -= dt) <= 0 && k < 1) { pip = 0.09; try { ton(900 + Math.random() * 700, 0.04, 0.03, 'square'); } catch {} }
    if (gammalRit) gammalRit.traverse((o) => { if (o.isLineSegments) o.visible = Math.random() > k; });
    if (k >= 1) {
      orig.forEach(([m, mt]) => { const c = m.material; m.material = mt; (Array.isArray(c) ? c : [c]).forEach((x) => x.dispose?.()); });
      if (gammalRit) { scen.remove(gammalRit); gammalRit.traverse((o) => o.geometry?.dispose?.()); }
      printarFram.delete(pf); ritningNyckel = ''; try { ljud.klar(); } catch {}
    }
  } };
  printarFram.add(pf);
}
// punkt AS: hela fabriksplanen som karta ovanifrån (dagboken) – fyllda platser, nästa plats och låsta linjer
function fabriksplanSvg() {
  const kap = S.kapitel || 1, nasta = planNasta(), sk = 14, X = (x) => ((x + 21.5) * sk).toFixed(1), Z = (z) => ((z + 21.5) * sk).toFixed(1);
  const W = (21.5 - 0.5 + 21.5) * sk, H = 43 * sk;
  let svg = `<svg viewBox="0 0 ${(23 * sk).toFixed(0)} ${H.toFixed(0)}" class="ph-fplan" role="img" aria-label="Fabriksplanen"><rect width="100%" height="100%" rx="10" fill="#1d2a3a"/><defs><filter id="fpRit"><feTurbulence baseFrequency="0.08" numOctaves="1" seed="4"/><feDisplacementMap in="SourceGraphic" scale="2.2"/></filter><filter id="fpRitGlod"><feTurbulence baseFrequency="0.08" numOctaves="1" seed="4"/><feDisplacementMap in="SourceGraphic" scale="2.2" result="d"/><feGaussianBlur in="d" stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="d"/></feMerge></filter></defs>`;   // punkt BA: ritningsstil – blått papper, vita skakiga linjer, nästa plats glöder
  for (const l of PLAN.LINJER) {
    const last = l.kapitel > kap;
    svg += `<text x="${X(-21)}" y="${Z(l.z - 1.55)}" fill="${l.farg}" opacity="${last ? 0.5 : 1}" font-size="13" font-weight="800">${last ? '🔒 ' : ''}${l.nr} · ${l.namn}${last ? ' – ' + l.text : ''}</text>`;
  }
  for (const p of PLAN.FABRIK_PLATSER) {
    if (p.typ === 'fabrikshall') continue;
    const last = (p.kapitel || 1) > kap || p.last, fylld = platsFylld(p), ar = p === nasta;
    svg += `<rect x="${X(p.x - p.b / 2)}" y="${Z(p.z - p.d / 2)}" width="${(p.b * sk).toFixed(1)}" height="${(p.d * sk).toFixed(1)}" rx="3" fill="${fylld ? p.farg || '#fff' : 'none'}" fill-opacity="${fylld ? 0.75 : 0}" stroke="${fylld ? p.farg || '#fff' : '#eef8ff'}" stroke-width="${ar ? 2.6 : 1.4}" ${fylld ? '' : `filter="url(#fpRit${ar ? 'Glod' : ''})"`} opacity="${last ? 0.3 : fylld ? 1 : ar ? 1 : 0.7}"><title>${p.text || p.id}</title></rect>`;
  }
  svg += `<text x="${(22.6 * sk).toFixed(0)}" y="${(42.5 * sk).toFixed(0)}" fill="#c9bfa8" font-size="12" text-anchor="end">Vägen ↓ · Tippen ←</text></svg>`;
  return svg;
}
// ---------- Punkt AI: introbilderna – stillbilder renderade med spelets egen Three.js ----------
// Rummet byggs som en egen liten scen (kvällsljus inne). Gården, linje 1 och skjulet tas ur spelvärlden (dagsljus).
// Testkrok: __printahem.introBild(n, bredd, höjd) → data-url. Verktyget verktyg/ai.mjs sparar dem som intro/NN.webp.
function introFigur(vem) {
  const helen = vem === 'helen', g = new THREE.Group(), hud = mat(vem === 'mamma' ? 0xf2c9a5 : helen ? 0xe6bf9e : 0xf0c6a2);
  const kropp = mat(vem === 'mamma' ? 0xe0567a : helen ? 0x5e5236 : 0x2d6cdf), byx = mat(vem === 'mamma' ? 0x3a3550 : helen ? 0x34302c : 0x2b3442), sko = mat(0x2a2320);
  const ben = []; for (const x of [-0.1, 0.1]) { const b = new THREE.Group(); b.position.set(x, 0.85, 0); b.add(at(box(0.15, 0.85, 0.17, byx), 0, -0.42, 0)); b.add(at(box(0.16, 0.08, 0.26, sko), 0, -0.83, 0.04)); g.add(b); ben.push(b); }
  g.add(at(box(0.46, 0.7, 0.27, kropp), 0, 1.2, 0));
  if (vem === 'mamma') { g.add(at(box(0.16, 0.12, 0.02, mat(0xfff5ea)), 0, 1.47, 0.14)); g.add(at(box(0.5, 0.18, 0.3, kropp), 0, 0.88, 0)); }   // blusens krage, koftan längre ner
  else if (helen) {   // den stora rocken: lång, knappar, en halsduk
    g.add(at(box(0.54, 0.5, 0.33, kropp), 0, 0.7, 0)); g.add(at(box(0.5, 0.12, 0.31, kropp), 0, 0.98, 0));
    for (let y = 0.6; y < 1.5; y += 0.22) g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 5), mat(0x2a2016)), 0.05, y, 0.17));
    g.add(at(box(0.5, 0.12, 0.3, mat(0x8a2a2a)), 0, 1.52, 0)); g.add(at(box(0.1, 0.32, 0.03, mat(0x8a2a2a)), 0.12, 1.32, 0.16));
  } else { g.add(at(box(0.3, 0.16, 0.05, mat(0x245bc0)), 0, 1.05, 0.14)); }   // hoodiens ficka
  g.add(at(cyl(0.07, 0.08, 0.1, hud), 0, 1.6, 0));
  const huvud = new THREE.Group(); huvud.position.set(0, 1.77, 0); g.add(huvud);
  huvud.add(new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), hud));
  const har = mat(vem === 'mamma' ? 0x7a4a2a : helen ? 0xb9b5ad : 0x5a3a24);
  const lugg = new THREE.Mesh(new THREE.SphereGeometry(0.178, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.42), har); lugg.position.y = 0.01; huvud.add(lugg);
  if (vem === 'mamma') {
    huvud.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.085, 12, 10), har), 0, 0.17, -0.06));   // hårknuten
    for (const x of [-0.175, 0.175]) huvud.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), mat(0xffd23b, { metalness: 0.5, roughness: 0.3 })), x, -0.07, 0.02));   // örhängen
    for (const x of [-0.16, 0.16]) huvud.add(at(box(0.05, 0.16, 0.12, har), x, -0.02, -0.03));
  }
  if (helen) {   // grå hårknut under en stickad mössa
    huvud.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 10), har), 0, 0.02, -0.17));
    for (const x of [-0.16, 0.16]) huvud.add(at(box(0.04, 0.12, 0.1, har), x, -0.04, -0.04));
    const mossa = new THREE.Mesh(new THREE.SphereGeometry(0.19, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.45), mat(0x2f6a5a)); mossa.position.y = 0.035; huvud.add(mossa);
    huvud.add(at(cyl(0.185, 0.19, 0.06, mat(0x285a4c)), 0, 0.06, 0)); huvud.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), mat(0xd8d0c0)), 0, 0.22, 0));
  }
  if (vem !== 'mamma' && !helen) { const luva = new THREE.Mesh(new THREE.SphereGeometry(0.215, 16, 12, Math.PI - 0.5, Math.PI + 1.0, 0, Math.PI * 0.72), mat(0x2d6cdf, { side: THREE.DoubleSide })); luva.position.set(0, -0.01, -0.03); huvud.add(luva); }
  const fore = huvud.children.length;
  ansikte(huvud, 0, { bryn: vem === 'mamma' ? 0.12 : -0.05, brynFarg: helen ? 0x8a857c : 0x4a2e1a, nasa: 0xd9a07a, munFarg: vem === 'mamma' ? 0xb83a52 : 0x5a2a20 });
  const delar = huvud.children.slice(fore), bryn = delar.filter((o) => o.geometry?.parameters?.width === 0.075), mun = delar[delar.length - 1];
  const arm = (x) => { const a = new THREE.Group(); a.position.set(x, 1.5, 0); a.add(at(box(0.12, 0.6, 0.12, kropp), 0, -0.28, 0)); a.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), hud), 0, -0.6, 0)); g.add(a); return a; };
  const hoger = arm(0.3), finger = at(box(0.03, 0.11, 0.03, hud), 0, -0.7, 0); hoger.add(finger);
  g.userData = { vanster: arm(-0.3), hoger, finger, ben, huvud, bryn, mun, hud, hudFarg: hud.color.getHex() };
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}
function kalenderTex(dag) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 300; const g = c.getContext('2d');
  g.fillStyle = '#ece6da'; g.fillRect(0, 0, 256, 300); g.fillStyle = '#e05a5a'; g.fillRect(0, 0, 256, 80);
  g.fillStyle = '#555'; for (const x of [64, 192]) { g.beginPath(); g.arc(x, 14, 10, 0, 7); g.fill(); }
  g.fillStyle = '#fff'; g.font = 'bold 34px system-ui'; g.textAlign = 'center'; g.fillText('NOVEMBER', 128, 62);
  g.fillStyle = '#333'; g.font = '900 46px system-ui'; g.fillText(dag, 128, 200);
  return new THREE.CanvasTexture(c);
}
// en affisch: färgade fält och lite text, ritad på en canvas
function affischTex(farg, rubrik, figur) {
  const c = document.createElement('canvas'); c.width = 192; c.height = 256; const g = c.getContext('2d');
  g.fillStyle = farg; g.fillRect(0, 0, 192, 256); g.fillStyle = 'rgba(255,255,255,.18)'; for (let y = 0; y < 256; y += 8) g.fillRect(0, y, 192, 2);
  g.font = '110px system-ui'; g.textAlign = 'center'; g.fillText(figur, 96, 150);
  g.fillStyle = '#fff'; g.font = '900 30px system-ui'; g.fillText(rubrik, 96, 226);
  return new THREE.CanvasTexture(c);
}
let introRum = null;
function byggIntroRum() {
  const sc = new THREE.Scene(); sc.background = new THREE.Color(0x1d1a24);
  const R = { vagg: mat(0x8fa7b8), golv: mat(0x9c7a52), tak: mat(0xe8e2d6) };
  const r = (() => { let x = 7; return () => { x = (x * 16807) % 2147483647; return x / 2147483647; }; })();   // samma stök varje gång
  sc.add(at(box(5, 0.05, 4, R.golv), 0, -0.025, 0));
  sc.add(at(box(5, 0.05, 4, R.tak), 0, 2.62, 0));
  sc.add(at(box(5, 2.6, 0.1, R.vagg), 0, 1.3, -2)); sc.add(at(box(0.1, 2.6, 4, R.vagg), -2.5, 1.3, 0));
  // högra väggen med dörröppning (z −0.9 … 0.1)
  sc.add(at(box(0.1, 2.6, 1.1, R.vagg), 2.5, 1.3, -1.45)); sc.add(at(box(0.1, 2.6, 1.9, R.vagg), 2.5, 1.3, 1.05)); sc.add(at(box(0.1, 0.5, 1.0, R.vagg), 2.5, 2.35, -0.4));
  // hallen utanför: ljusare
  sc.add(at(box(2, 0.05, 3, mat(0xb8a586)), 3.5, -0.02, -0.4)); sc.add(at(box(0.1, 2.6, 3, mat(0xd9cfb8)), 4.4, 1.3, -0.4));
  const hall = new THREE.PointLight(0xfff0d0, 6, 6); hall.position.set(3.6, 2.2, -0.4); sc.add(hall);
  // dörren (gångjärn vid z −0.9)
  const dorr = new THREE.Group(); dorr.position.set(2.5, 0, -0.9); dorr.add(at(box(0.05, 2.05, 1.0, mat(0xf2ede2)), 0, 1.025, 0.5)); dorr.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), mat(0xc9a227, { metalness: 0.7 })), -0.05, 1.0, 0.9)); sc.add(dorr);
  // fönster i bakväggen: kvällshimmel
  sc.add(at(box(1.2, 0.9, 0.02, mat(0xff9a55, { emissive: 0xff7a35, emissiveIntensity: 0.9 })), -0.6, 1.55, -1.94)); sc.add(at(box(1.3, 0.06, 0.1, mat(0xf2ede2)), -0.6, 1.08, -1.9)); sc.add(at(box(0.04, 0.9, 0.04, mat(0xf2ede2)), -0.6, 1.55, -1.92));
  // affischer på väggarna, så att de inte är tomma
  const affisch = (x, y, z, rot, farg, rub, fig, w = 0.6, h = 0.8) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: affischTex(farg, rub, fig), roughness: 0.8 })); m.position.set(x, y, z); m.rotation.y = rot; sc.add(m); };
  affisch(1.2, 1.7, -1.94, 0, '#3d2a6b', 'LEVEL 99', '👾'); affisch(-2.44, 1.65, 0.2, Math.PI / 2, '#b23a2a', 'ROCK', '🎸', 0.55, 0.75); affisch(-2.44, 1.5, 1.2, Math.PI / 2, '#1b6f8f', 'GOAL', '⚽', 0.45, 0.6); affisch(2.44, 1.6, 1.4, -Math.PI / 2, '#2f7a4a', 'GAME ON', '🎮', 0.5, 0.65);
  // sängen längs vänstra väggen med täcke
  sc.add(at(box(1.0, 0.35, 2.0, mat(0x6b4a30)), -1.95, 0.2, -0.9)); sc.add(at(box(0.95, 0.15, 1.95, mat(0x4a6fb0)), -1.95, 0.45, -0.9)); sc.add(at(box(0.7, 0.12, 0.4, mat(0xe8eef5)), -1.95, 0.57, -1.65));
  const tacke = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8), mat(0x6a87c9)); tacke.scale.set(1, 0.25, 1.4); tacke.position.set(-1.85, 0.55, -0.6); sc.add(tacke);
  // skrivbordet med skärm
  sc.add(at(box(1.4, 0.06, 0.7, mat(0x3a3a44)), 1.0, 0.75, -1.55)); for (const x of [0.38, 1.62]) sc.add(at(box(0.06, 0.75, 0.6, mat(0x2b2b33)), x, 0.375, -1.55));
  sc.add(at(box(0.7, 0.42, 0.04, mat(0x111111)), 1.0, 1.05, -1.75)); sc.add(at(box(0.62, 0.34, 0.02, mat(0x5e8cff, { emissive: 0x3d6bff, emissiveIntensity: 1.2 })), 1.0, 1.06, -1.72));
  const skarm = new THREE.PointLight(0x7aa0ff, 1.2, 2.5); skarm.position.set(1.0, 1.1, -1.4); sc.add(skarm);
  // stolen med kläder över
  const stol = new THREE.Group(); stol.add(at(box(0.45, 0.06, 0.45, mat(0x2b2b33)), 0, 0.47, 0)); stol.add(at(box(0.45, 0.55, 0.06, mat(0x2b2b33)), 0, 0.75, -0.2)); for (const [x, z] of [[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]]) stol.add(at(box(0.04, 0.47, 0.04, mat(0x555555)), x, 0.235, z));
  stol.add(at(box(0.5, 0.35, 0.04, mat(0x3a8a5a)), 0.02, 0.85, -0.17)); stol.add(at(box(0.36, 0.05, 0.42, mat(0xc94a4a)), -0.04, 0.52, 0.02)); stol.add(at(box(0.08, 0.4, 0.06, mat(0x3a8a5a)), 0.22, 0.66, -0.18));
  stol.position.set(1.0, 0, -0.9); stol.rotation.y = 0.35; sc.add(stol);
  const stok = [];   // stöket: visas mer och mer dag för dag
  const s = (o) => { sc.add(o); stok.push(o); return o; };
  const burk = (x, z, f, liggande = false, y = 0) => { const b = cyl(0.035, 0.035, 0.12, mat(f, { metalness: 0.6, roughness: 0.35 }), 12); if (liggande) { b.rotation.z = Math.PI / 2; b.rotation.y = r() * 3; b.position.set(x, y + 0.035, z); } else b.position.set(x, y + 0.06, z); return s(b); };
  const pizza = (x, y, z, rot) => { const p = new THREE.Group(); p.add(at(box(0.42, 0.05, 0.42, mat(0xc89b5c)), 0, 0.025, 0)); p.add(at(box(0.2, 0.002, 0.08, mat(0xb03a20)), 0, 0.051, 0)); p.position.set(x, y, z); p.rotation.y = rot; return s(p); };
  const strumpa = (x, z, rot) => { const st = new THREE.Group(); st.add(at(box(0.09, 0.03, 0.26, mat(0xe8eef5)), 0, 0.015, 0)); st.add(at(box(0.09, 0.03, 0.12, mat(0xe8eef5)), 0.05, 0.015, 0.16)); st.add(at(box(0.095, 0.032, 0.04, mat(0xe05a5a)), 0, 0.017, -0.1)); st.position.set(x, 0, z); st.rotation.y = rot; return s(st); };
  const klader = (x, z, f, stor = 1) => { const k = new THREE.Mesh(new THREE.SphereGeometry(0.28 * stor, 10, 6), mat(f)); k.scale.set(1.2, 0.3, 0.9); k.position.set(x, 0.06, z); return s(k); };
  const chips = (x, y, z, rot, f = 0xf1c40f) => { const c = new THREE.Group(); const p = box(0.18, 0.24, 0.06, mat(f, { metalness: 0.3, roughness: 0.4 })); p.rotation.x = -1.3; p.position.y = 0.04; c.add(p); c.position.set(x, y, z); c.rotation.y = rot; return s(c); };
  // i ordning: det första syns redan måndag, resten kommer till dag för dag (och allt i bild 1)
  const lista = [
    () => pizza(-1.0, 0, 0.6, 0.3), () => strumpa(-0.2, 0.3, 0.6), () => klader(0.2, -0.5, 0x3a8a5a), () => burk(0.6, 0.5, 0x3de3ff), () => pizza(1.0, 0.78, -1.3, 0.2),
    () => burk(1.2, -1.5, 0x7dffb0, false, 0.78), () => chips(0.62, 0.78, -1.35, 0.5), () => strumpa(1.75, -0.3, -1.2), () => pizza(1.7, 0, 0.3, 0.6), () => klader(1.6, -0.2, 0x444b5a),
    () => pizza(-0.95, 0.05, 0.62, -0.2), () => burk(-0.3, 0.9, 0xe05a5a, true), () => strumpa(1.5, 0.9, 2), () => pizza(1.72, 0.05, 0.28, -0.3), () => chips(1.9, 0, 0.0, 1.2, 0xe05a5a),
    () => burk(1.4, -1.48, 0xe05a5a, false, 0.78), () => pizza(-1.02, 0.1, 0.58, 0.5), () => klader(-0.6, 1.3, 0x8a3a5a), () => burk(0.65, 0.6, 0xf1c40f, true), () => strumpa(-1.4, 1.2, 0.4),
    () => pizza(1.68, 0.1, 0.32, 0.9), () => burk(1.85, 0.6, 0x3de3ff, true), () => strumpa(2.0, -0.1, 0.3), () => chips(-0.2, 0, 1.0, 2.2, 0x3a8be0), () => klader(1.95, 0.9, 0xc94a4a, 0.7),
    () => pizza(0.4, 0, 0.9, 1.1), () => pizza(0.42, 0.05, 0.88, 0.8), () => burk(0.1, 1.4, 0x7dffb0, true), () => strumpa(0.6, -0.2, 2.6), () => chips(1.3, 0, 0.5, 0.2),
    () => burk(1.6, 0.4, 0xf1c40f, true), () => pizza(-0.3, 0, -0.9, 0.4), () => strumpa(-0.6, 0.4, -0.8), () => burk(0.9, -1.4, 0x3de3ff, false, 0.78), () => chips(1.2, 0.78, -1.75, 0.9, 0x7dffb0),
  ];
  // stöket framför dörren (syns i bild 2–4): ett par saker på måndag, mer för varje dag
  const vidDorr = [() => pizza(2.05, 0, -0.55, 0.4), () => strumpa(2.15, -0.15, 1.1), () => burk(1.95, -0.85, 0xe05a5a, true), () => klader(2.05, -0.2, 0x444b5a, 0.8), () => pizza(2.07, 0.05, -0.52, -0.3), () => chips(2.2, 0, -0.75, 2.4, 0xe05a5a), () => strumpa(1.9, -0.45, 2.2), () => pizza(2.03, 0.1, -0.58, 0.9), () => burk(2.25, -0.3, 0x3de3ff, true), () => klader(1.85, -0.9, 0x8a3a5a, 0.6)];
  [1, 5, 9, 13, 17, 21, 25, 29, 32, 34].forEach((pos, i) => lista.splice(pos, 0, vidDorr[i]));
  for (const f of lista) f();
  // tallrik under sängen och en kontroll på golvet (alltid där)
  sc.add(at(cyl(0.13, 0.11, 0.02, mat(0xf2f2f2), 18), -1.55, 0.01, -0.3)); sc.add(at(box(0.1, 0.02, 0.06, mat(0x9a6a3a)), -1.55, 0.03, -0.3));
  { const kontroll = new THREE.Group(); kontroll.add(at(box(0.18, 0.04, 0.1, mat(0x222222)), 0, 0.02, 0)); for (const x of [-0.1, 0.1]) kontroll.add(at(cyl(0.035, 0.035, 0.04, mat(0x222222), 8), x, 0.02, 0.04)); kontroll.position.set(0.1, 0, 0.6); kontroll.rotation.y = 0.5; sc.add(kontroll); }
  // ljuset: varm taklampa och kvällsljus genom fönstret
  sc.add(new THREE.HemisphereLight(0xffe2c0, 0x3a2a30, 0.9));
  const lampa = new THREE.PointLight(0xffc98a, 14, 9, 1.6); lampa.position.set(0.2, 2.45, 0.2); lampa.castShadow = true; lampa.shadow.mapSize.set(1024, 1024); sc.add(lampa);
  sc.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8), mat(0xfff3c4, { emissive: 0xffd27a, emissiveIntensity: 2 })), 0.2, 2.5, 0.2));
  const kvall = new THREE.DirectionalLight(0xff9a55, 1.3); kvall.position.set(-1, 3, -5); kvall.target.position.set(0, 0, 0.5); sc.add(kvall, kvall.target);
  // kalendern bredvid dörren
  const kal = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.5), new THREE.MeshStandardMaterial({ map: kalenderTex('MÅNDAG'), roughness: 0.9 })); kal.position.set(2.44, 1.55, 0.55); kal.rotation.y = -Math.PI / 2; sc.add(kal);
  const mamma = introFigur('mamma'), du = introFigur('du'); sc.add(mamma, du);
  // ryggsäcken: kropp, lock med spänne, framficka, axelremmar och bärhandtag – och lite som sticker ut
  const sack = new THREE.Group(); {
    const bla = mat(0x2d6cdf), mork = mat(0x1f4fa8), spanne = mat(0xc9ccd2, { metalness: 0.7, roughness: 0.3 });
    sack.add(at(box(0.4, 0.5, 0.22, bla), 0, 0.27, 0));
    const kant = (y) => sack.add(at(box(0.42, 0.04, 0.24, mork), 0, y, 0)); kant(0.03);
    const lock = box(0.42, 0.06, 0.26, mork); lock.position.set(0, 0.54, 0.01); lock.rotation.x = -0.08; sack.add(lock);
    sack.add(at(box(0.16, 0.2, 0.02, mork), 0, 0.44, 0.125));   // lockets flik
    sack.add(at(box(0.07, 0.05, 0.02, spanne), 0, 0.36, 0.14));   // spännet
    sack.add(at(box(0.3, 0.2, 0.08, mork), 0, 0.17, 0.14)); sack.add(at(box(0.28, 0.015, 0.01, spanne), 0, 0.25, 0.185));   // framficka med blixtlås
    for (const x of [-0.12, 0.12]) { const rem = box(0.05, 0.52, 0.03, mork); rem.position.set(x, 0.3, -0.125); rem.rotation.x = 0.08; sack.add(rem); sack.add(at(box(0.05, 0.03, 0.06, spanne), x, 0.06, -0.14)); }
    const handtag = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 6, 12, Math.PI), mork); handtag.position.set(0, 0.58, -0.07); sack.add(handtag);
    const strumpa2 = box(0.07, 0.16, 0.03, mat(0xe8eef5)); strumpa2.position.set(0.12, 0.58, 0.08); strumpa2.rotation.z = -0.5; sack.add(strumpa2); sack.add(at(box(0.072, 0.03, 0.032, mat(0xe05a5a)), 0.15, 0.62, 0.08));
    const sladd = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(-0.12, 0.55, 0.06), new THREE.Vector3(-0.2, 0.68, 0.12), new THREE.Vector3(-0.3, 0.6, 0.2), new THREE.Vector3(-0.38, 0.08, 0.3), new THREE.Vector3(-0.5, 0.01, 0.45)]), 30, 0.008, 6), mat(0x222222)); sack.add(sladd);
    sack.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  }
  sc.add(sack);
  const skriv = gammal.clone(true); skriv.position.set(0, 0, 0); sc.add(skriv);
  const damm = new THREE.Group(); for (let i = 0; i < 14; i++) { const d = new THREE.Mesh(new THREE.SphereGeometry(0.05 + r() * 0.06, 6, 4), new THREE.MeshStandardMaterial({ color: 0xd9cfb8, transparent: true, opacity: 0.55 })); d.position.set(2.3 + r() * 0.5, r() * 1.8, -0.9 + r() * 1.1); damm.add(d); } sc.add(damm);
  return { sc, dorr, kal, mamma, du, sack, skriv, damm, stok, lampa };
}
function introKamera(pos, mal, fov = 50, aspect = 1.6) { const k = new THREE.PerspectiveCamera(fov, aspect, 0.1, 200); k.position.set(...pos); k.lookAt(...mal); return k; }
// humor: 'neutral', 'arg' (ögonbryn ner), 'rasande' (rött ansikte). pekaMot: en punkt i världen som högra armen pekar mot.
function poseFigur(f, { x = 0, z = 0, rot = 0, motKamera = null, pekaMot = null, armarUpp = false, handerISidan = false, humor = 'neutral', synlig = true } = {}) {
  f.visible = synlig; f.position.set(x, 0, z); f.rotation.set(0, motKamera ? Math.atan2(motKamera[0] - x, motKamera[2] - z) : rot, 0);
  const u = f.userData; u.hoger.quaternion.identity(); u.vanster.quaternion.identity(); u.huvud.rotation.set(0, 0, 0); u.finger.visible = false;
  u.hud.color.setHex(humor === 'rasande' ? 0xec8a78 : u.hudFarg);
  u.bryn.forEach((b) => { const v = b.position.x < 0; b.rotation.z = humor === 'neutral' ? (v ? 0.12 : -0.12) : (v ? -0.45 : 0.45); b.position.y = humor === 'neutral' ? 0.085 : 0.07; });
  u.mun.scale.set(humor === 'rasande' ? 1.1 : 1.3, humor === 'rasande' ? 0.75 : humor === 'arg' ? 0.15 : 0.25, 0.4);
  if (handerISidan) { u.hoger.rotation.set(0, 0, 0.55); u.vanster.rotation.set(0, 0, -0.55); }
  if (armarUpp) { u.hoger.rotation.set(0, 0, 2.4); u.vanster.rotation.set(0, 0, -2.4); }
  if (pekaMot) {
    f.updateMatrixWorld(true);
    const axel = u.hoger.getWorldPosition(new THREE.Vector3()), dir = new THREE.Vector3(...pekaMot).sub(axel).normalize();
    const lokal = dir.applyQuaternion(f.quaternion.clone().invert());
    u.hoger.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), lokal); u.finger.visible = true;
  }
}
// rendera en scen i bredd × höjd och gör bakgrunden lite suddig (skärpedjup ungefär). nara = suddigt även nära kameran.
function introRendera(sc, kam, W, H, fokus, { nara = false, gra = 0 } = {}) {
  const r = renderer, gammalStorlek = r.getSize(new THREE.Vector2()), pr = r.getPixelRatio();
  r.setPixelRatio(1); r.setSize(W, H, false); kam.aspect = W / H; kam.updateProjectionMatrix();
  r.render(sc, kam);
  const A = document.createElement('canvas'); A.width = W; A.height = H; const a = A.getContext('2d'); a.drawImage(r.domElement, 0, 0, W, H);
  const bg = sc.background, dimma = sc.fog; sc.background = new THREE.Color(0); sc.fog = null; sc.overrideMaterial = new THREE.MeshDepthMaterial();
  r.render(sc, kam);
  sc.overrideMaterial = null; sc.background = bg; sc.fog = dimma;
  const D = document.createElement('canvas'); D.width = W; D.height = H; const d = D.getContext('2d'); d.drawImage(r.domElement, 0, 0, W, H);
  r.setPixelRatio(pr); r.setSize(gammalStorlek.x, gammalStorlek.y, false);
  const ia = a.getImageData(0, 0, W, H);
  if (fokus) {
    const Bc = document.createElement('canvas'); Bc.width = W; Bc.height = H; const b = Bc.getContext('2d'); b.filter = 'blur(3.5px)'; b.drawImage(A, 0, 0);
    const n = kam.near, f = kam.far, zd = (dist) => 1 - (((f + n) / (f - n) - (2 * f * n) / ((f - n) * dist)) + 1) / 2;   // samma djupvärde som MeshDepthMaterial ger på avståndet
    const skarp = zd(fokus * 1.35), suddig = zd(fokus * 2.6), skarpN = zd(fokus * 0.7), suddigN = zd(fokus * 0.45);
    const ib = b.getImageData(0, 0, W, H), id = d.getImageData(0, 0, W, H);
    for (let i = 0; i < ia.data.length; i += 4) {
      const z = id.data[i] / 255; let t = Math.max(0, Math.min(1, (skarp - z) / Math.max(1e-6, skarp - suddig)));
      if (nara) t = Math.max(t, Math.max(0, Math.min(1, (z - skarpN) / Math.max(1e-6, suddigN - skarpN))));
      if (t > 0) for (let c = 0; c < 3; c++) ia.data[i + c] = ia.data[i + c] * (1 - t) + ib.data[i + c] * t;
    }
  }
  if (gra) for (let i = 0; i < ia.data.length; i += 4) { const l = ia.data[i] * 0.3 + ia.data[i + 1] * 0.59 + ia.data[i + 2] * 0.11; for (let c = 0; c < 3; c++) ia.data[i + c] = ia.data[i + c] * (1 - gra) + (l * 0.92 + 8) * gra; }
  a.putImageData(ia, 0, 0);
  return A;
}
function introBild(n, W = 1200, H = 750) {
  if (!introRum) introRum = byggIntroRum();
  const R = introRum, sc = R.sc;
  const stok = (andel) => R.stok.forEach((o, i) => { o.visible = i < R.stok.length * andel; });
  R.dorr.rotation.y = 0; R.damm.visible = false; R.sack.visible = false; R.skriv.visible = false; R.lampa.intensity = 14; poseFigur(R.du, { synlig: false }); stok(1);
  const dag = { 2: 'MÅNDAG', 3: 'TISDAG', 4: 'ONSDAG', 5: 'TORSDAG', 6: 'FREDAG', 7: 'FREDAG' }[n];
  if (dag) { R.kal.material.map?.dispose(); R.kal.material.map = kalenderTex(dag); R.kal.material.needsUpdate = true; }
  const mammaDorr = [2.5, -0.4], kamDorr = [1.05, 2.1, -0.25];
  let A;
  if (n === 1) { poseFigur(R.mamma, { synlig: false }); A = introRendera(sc, introKamera([1.95, 1.15, 1.85], [-0.4, 0.25, -0.4], 60, W / H), W, H, 3.0); }
  else if (n >= 2 && n <= 4) {
    // mamma i dörren från midjan och uppåt, stöket på golvet framför dörren längst ner
    R.dorr.rotation.y = -1.25; stok([0.3, 0.6, 1][n - 2]);
    poseFigur(R.mamma, { x: mammaDorr[0], z: mammaDorr[1], motKamera: kamDorr, humor: ['neutral', 'arg', 'rasande'][n - 2], handerISidan: n === 3, pekaMot: n === 4 ? kamDorr : null });
    A = introRendera(sc, introKamera(kamDorr, [mammaDorr[0], 1.02, mammaDorr[1]], 57, W / H), W, H, 1.7);
  } else if (n === 5) {
    // kalendern skarp i förgrunden, mamma hel i dörren bakom – lite suddig
    R.dorr.rotation.y = -1.25; poseFigur(R.mamma, { x: 3.05, z: -0.42, rot: -Math.PI / 2 - 0.4, armarUpp: true, humor: 'arg' });
    A = introRendera(sc, introKamera([1.3, 1.5, 0.42], [2.8, 1.15, -0.4], 64, W / H), W, H, 0.65);
  } else if (n === 6) {
    R.dorr.rotation.y = -2.1; R.damm.visible = true;
    poseFigur(R.mamma, { x: 2.35, z: -0.35, rot: -Math.PI / 2, armarUpp: true, humor: 'rasande' });
    const k = introKamera([-0.6, 1.0, 1.5], [2.3, 1.45, -0.4], 52, W / H); k.rotateZ(-0.07);
    A = introRendera(sc, k, W, H, 3.2);
  } else if (n === 7) {
    // mamma hel med huvudet i bild, armen pekar mot dörren och ut
    R.dorr.rotation.y = -1.6; R.lampa.intensity = 8;
    poseFigur(R.mamma, { x: 0.9, z: 0.55, rot: -0.75, humor: 'arg', pekaMot: [2.6, 1.4, -0.4] });
    A = introRendera(sc, introKamera([-1.35, 1.5, 2.0], [1.25, 1.25, -0.05], 52, W / H), W, H, 2.6);
  } else if (n === 8) {
    R.dorr.rotation.y = -1.25; poseFigur(R.mamma, { x: 3.1, z: -0.4, rot: -Math.PI / 2 });
    poseFigur(R.du, { x: 0.3, z: 0.2, rot: -0.35 });
    A = introRendera(sc, introKamera([-0.9, 1.55, 2.0], [0.4, 1.35, 0.0], 44, W / H), W, H, 2.2);
  } else if (n === 9) {
    poseFigur(R.mamma, { synlig: false }); stok(0.25);
    R.sack.visible = true; R.sack.position.set(-0.4, 0, 0.6); R.sack.rotation.y = 0.35;
    R.skriv.visible = true; R.skriv.position.set(0.35, 0, 0.45); R.skriv.rotation.y = -0.4;
    A = introRendera(sc, introKamera([-0.05, 0.85, 1.75], [0.0, 0.35, 0.5], 46, W / H), W, H, 1.4);
  } else A = introVarld(n, W, H);
  return A.toDataURL('image/png');
}
// bilderna ute: spelvärlden i dagsljus (den nya gården)
function introVarld(n, W, H) {
  const forr = { bg: scen.background.clone(), fog: scen.fog.color.clone(), sf: sol.color.clone(), si: sol.intensity, lampa: skjulLampa?.intensity };
  satLjus(DAG); const pil = malPil.visible; malPil.visible = false; planMesh.visible = false;
  const tillfalliga = [], tmp = (o) => { scen.add(o); tillfalliga.push(o); return o; };
  const skrapRunt = (antal, x0, x1, z0, z1, undvik = () => false) => { for (let i = 0; i < antal; i++) { let x, z, f = 0; do { x = x0 + Math.random() * (x1 - x0); z = z0 + Math.random() * (z1 - z0); } while ((iPlanRuta(x, z, 0.4) || undvik(x, z)) && ++f < 20); const k = skapaSkrap(variantFor(['flaska', 'burk', 'pase', 'dunk', 'flaska'][i % 5])); k.position.set(x, 0, z); k.rotation.y = Math.random() * 6.3; tmp(k); } };
  let A;
  if (n === 10) {
    // från vägen: skjulet stort till höger, tippen bakom till vänster – "här ska jag bo"
    const dn = scen.fog.near, df = scen.fog.far; scen.fog.near = 70; scen.fog.far = 180; tillfalliga.push({ parent: null, aterstall: () => { scen.fog.near = dn; scen.fog.far = df; } });
    skrapRunt(80, -14, 16, 9, 20, (x, z) => Math.abs(x - SKJUL.x) < 2.6 && Math.abs(z - SKJUL.z) < 2.4);
    A = introRendera(scen, introKamera([15, 1.8, 24.6], [-3, 0.2, 7.1], 50, W / H), W, H, 17);
  } else if (n === 11) {
    // stilleben: flaskan, kvarnen, rullen och skrivaren tätt ihop – skrivaren flyttas en stund närmare, och en slang binder ihop
    const dolda = [cykel, batteri].filter((o) => o.visible); dolda.forEach((o) => { o.visible = false; });
    const flytt = [[gammal, gammal.position.clone()], [ladGrupp, ladGrupp.position.clone()]];
    const sx = -14.1, sz = 11.55; gammal.position.set(sx, 0.7, sz); ladGrupp.position.set(sx, 0, sz);
    const slangar = scen.children.filter((o) => o.geometry?.type === 'TubeGeometry' && o.material?.emissive?.getHex() === new THREE.Color(FIL1).getHex()); slangar.forEach((o) => { o.visible = false; });
    const a0 = rulle.getWorldPosition(new THREE.Vector3()), b0 = new THREE.Vector3(sx - 0.2, 0.95, sz);
    tmp(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([a0.clone().setY(0.25), a0.clone().lerp(b0, 0.3).setY(0.05), a0.clone().lerp(b0, 0.75).setY(0.05), b0.clone().setY(0.4), b0]), 40, 0.02, 6), mat(FIL1, { emissive: FIL1, emissiveIntensity: 0.35 })));
    for (const [x, z, r] of [[-17.35, 12.7, 0.4], [-17.6, 12.4, 2.1], [-17.15, 12.35, 1.2]]) { const f = skapaSkrap(variantFor('flaska')); f.position.set(x, 0, z); f.rotation.y = r; tmp(f); }
    A = introRendera(scen, introKamera([-15.6, 1.05, 14.35], [-15.6, 0.62, 11.6], 50, W / H), W, H, 3.2);
    flytt.forEach(([o, p]) => o.position.copy(p)); dolda.forEach((o) => { o.visible = true; }); slangar.forEach((o) => { o.visible = true; });
  } else {
    // skjulet före och efter: två halvor sida vid sida
    const hemFor = {}; for (const [id, g] of Object.entries(HEM_DELAR)) hemFor[id] = g.visible;
    const vaggFor = HEM_DELAR.vaggar?.children.map((c) => c.visible), plankTak = talt.userData.plankTak;
    const skyltar = [sangSkylt, sangSpoke].filter((o) => o?.visible); skyltar.forEach((o) => { o.visible = false; });
    const kam = () => introKamera([SKJUL.x + 3.2, 2.6, SKJUL.z + 5.8], [SKJUL.x, 1.1, SKJUL.z], 52, (W / 2) / H);
    // före: grått, trasigt, inget tak, skräp runt
    for (const g of Object.values(HEM_DELAR)) g.visible = false; plankTak.visible = false; if (skjulLampa) skjulLampa.intensity = 0;
    scen.background.set(0x9aa3ab); scen.fog.color.set(0x9aa3ab); sol.intensity = 0.9; sol.color.set(0xd8dde2);
    const skrapFore = tillfalliga.length; skrapRunt(28, SKJUL.x - 3.5, SKJUL.x + 4.5, SKJUL.z - 1, SKJUL.z + 4.5, (x, z) => Math.abs(x - SKJUL.x) < 2.0 && Math.abs(z - SKJUL.z) < 1.7);
    const fore = introRendera(scen, kam(), Math.round(W / 2), H, 5, { gra: 0.75 });
    tillfalliga.splice(skrapFore).forEach((o) => scen.remove(o));
    // efter: plåttak, varmt ljus i fönstret, en lampa, krukor, en matta och en skymt av gamingskärmen – i skymningen
    for (const [id, g] of Object.entries(HEM_DELAR)) if (id !== 'fonster') g.visible = true;
    HEM_DELAR.vaggar?.children.forEach((c) => { c.visible = true; }); plankTak.visible = true;
    satLjus(KVALL); sol.intensity = 0.8; scen.background.set(0xd98a5a); scen.fog.color.set(0xd98a5a); if (skjulLampa) skjulLampa.intensity = 12;
    const f0 = new THREE.Vector3(SKJUL.x, 0, SKJUL.z + SKJUL.d / 2);
    const fonster = tmp(new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.55, 0.03), mat(0xffd27a, { emissive: 0xffb84a, emissiveIntensity: 1.6 }))); fonster.position.set(f0.x - 1.15, 1.45, f0.z + 0.03);
    const karm = tmp(new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.63, 0.02), mat(0xf2ede2))); karm.position.set(f0.x - 1.15, 1.45, f0.z + 0.015);
    const sken = tmp(new THREE.PointLight(0xffb060, 5, 4)); sken.position.set(f0.x - 1.15, 1.4, f0.z + 0.8);
    const matta = tmp(new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.02, 0.9), mat(0xb23a2a))); matta.position.set(SKJUL.x, 0.05, SKJUL.z + 0.4);
    const rand = tmp(new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.025, 0.7), mat(0xe9b949))); rand.position.set(SKJUL.x, 0.055, SKJUL.z + 0.4);
    const gb = tmp(skapaVara('gamingbord')); gb.position.set(SKJUL.x + 0.6, 0, SKJUL.z - 0.75); gb.rotation.y = 0;
    const lp = tmp(skapaVara('lampskarm')); lp.position.set(SKJUL.x - 1.25, 0, SKJUL.z + SKJUL.d / 2 + 0.55);
    const lpLjus = tmp(new THREE.PointLight(0xffc27a, 3, 3)); lpLjus.position.set(SKJUL.x - 1.25, 1.0, SKJUL.z + SKJUL.d / 2 + 0.6);
    for (const [t, dx, dz, y = 0] of [['kruka', 1.3, 2.0], ['kruka', -0.55, 2.1], ['pall', 2.1, 1.2], ['fagelholk', 2.4, -0.3], ['kruka', 2.1, 1.2, 0.475]]) { const v = tmp(skapaVara(t)); v.position.set(SKJUL.x + dx, y, SKJUL.z + dz); }
    const efter = introRendera(scen, kam(), Math.round(W / 2), H, 5);
    for (const [id, g] of Object.entries(HEM_DELAR)) g.visible = hemFor[id];
    HEM_DELAR.vaggar?.children.forEach((c, i) => { c.visible = vaggFor[i]; }); skyltar.forEach((o) => { o.visible = true; });
    A = document.createElement('canvas'); A.width = W; A.height = H; const c = A.getContext('2d');
    c.drawImage(fore, 0, 0); c.drawImage(efter, W / 2, 0);
    c.fillStyle = '#191c24'; c.fillRect(W / 2 - 3, 0, 6, H);
    c.fillStyle = '#4cc9f0'; c.strokeStyle = '#191c24'; c.lineWidth = 6; c.beginPath();
    const y = H * 0.5; c.moveTo(W / 2 - 52, y - 16); c.lineTo(W / 2 + 10, y - 16); c.lineTo(W / 2 + 10, y - 40); c.lineTo(W / 2 + 58, y); c.lineTo(W / 2 + 10, y + 40); c.lineTo(W / 2 + 10, y + 16); c.lineTo(W / 2 - 52, y + 16); c.closePath(); c.stroke(); c.fill();
  }
  for (const t of tillfalliga) { if (t.aterstall) t.aterstall(); else scen.remove(t); }
  scen.background.copy(forr.bg); scen.fog.color.copy(forr.fog); sol.color.copy(forr.sf); sol.intensity = forr.si; if (skjulLampa) skjulLampa.intensity = forr.lampa; malPil.visible = pil; planMesh.visible = true;
  return A;
}
// ---------- Punkt AI3/AI4: introts lager – bakgrunder och genomskinliga lager (mamma, stöket, cyklisten …) ----------
// Testkrok: __printahem.introLager(namn, bredd, höjd) → { url, pts }. Verktyget verktyg/ai3.mjs sparar dem som intro/<namn>.webp.
// Genomskinliga lager renderas två gånger (svart och vit bakgrund) och alfa räknas ut ur skillnaden – rendraren har ingen alfakanal.
function matta(sc, kam, W, H, behall) {
  const r = renderer, gammalStorlek = r.getSize(new THREE.Vector2()), pr = r.getPixelRatio();
  const dolda = []; if (behall) sc.children.forEach((o) => { if (o.isLight || behall.includes(o) || !o.visible) return; o.visible = false; dolda.push(o); });
  const bg = sc.background, dimma = sc.fog; sc.fog = null;
  r.setPixelRatio(1); r.setSize(W, H, false); kam.aspect = W / H; kam.updateProjectionMatrix();
  const bild = (farg) => { sc.background = new THREE.Color(farg); r.render(sc, kam); const c = document.createElement('canvas'); c.width = W; c.height = H; c.getContext('2d').drawImage(r.domElement, 0, 0, W, H); return c.getContext('2d').getImageData(0, 0, W, H); };
  const K = bild(0x000000), V = bild(0xffffff);
  sc.background = bg; sc.fog = dimma; dolda.forEach((o) => { o.visible = true; });
  r.setPixelRatio(pr); r.setSize(gammalStorlek.x, gammalStorlek.y, false);
  const ut = new ImageData(W, H);
  for (let i = 0; i < K.data.length; i += 4) {
    const d = ((V.data[i] - K.data[i]) + (V.data[i + 1] - K.data[i + 1]) + (V.data[i + 2] - K.data[i + 2])) / 3, a = Math.max(0, Math.min(1, 1 - d / 255));
    ut.data[i + 3] = Math.round(a * 255);
    if (a > 0.004) for (let c = 0; c < 3; c++) ut.data[i + c] = Math.min(255, K.data[i + c] / a);
  }
  const C = document.createElement('canvas'); C.width = W; C.height = H; C.getContext('2d').putImageData(ut, 0, 0); return C;
}
// en liten egen scen med ljus (för cyklisten och ute-bilderna)
function introLjusScen(bg = null) {
  const sc = new THREE.Scene(); if (bg != null) sc.background = new THREE.Color(bg);
  sc.add(new THREE.HemisphereLight(0xdff1ff, 0x6b5a3a, 1.6));
  const sl = new THREE.DirectionalLight(0xfff2d8, 2.4); sl.position.set(6, 10, 7); sc.add(sl);
  return sc;
}
// du på cykeln: sittande, händerna på styret, ryggsäcken på ryggen, skrivaren fastspänd på pakethållaren
function duPaCykel(medSkrivare = true, fas = 0) {
  if (!introRum) introRum = byggIntroRum();
  const g = new THREE.Group(), cy = vagCykel.clone(true); cy.rotation.set(0, 0, 0); cy.position.set(0, 0, 0); g.add(cy);
  cy.userData.skrivare = cy.children.find((o) => o.type === 'Group' && o.position.y > 0.7 && Math.abs(o.position.z + 0.5) < 0.05);
  cy.children.forEach((o) => { o.visible = true; }); if (!medSkrivare && cy.userData.skrivare) cy.userData.skrivare.visible = false;
  const du = introFigur('du'); poseFigur(du, { x: 0, z: -0.1 }); g.add(du);
  du.position.y = 0.1; du.rotation.x = 0.18;
  const u = du.userData, v = fas * Math.PI / 2;   // punkt BA: pedalernas läge (fyra faser)
  u.ben[0].rotation.x = -0.55 - 0.35 * Math.sin(v); u.ben[1].rotation.x = -0.55 + 0.35 * Math.sin(v);
  for (const a of [u.hoger, u.vanster]) a.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, -0.45, 1).normalize());
  cy.children.filter((o) => Math.abs(o.rotation.z - 0.5) < 0.01).forEach((o) => { o.visible = false; });   // stödet uppfällt
  const sack = introRum.sack.clone(true); sack.visible = true; sack.position.set(0, 1.0, -0.33); sack.rotation.y = Math.PI; sack.scale.setScalar(0.95); du.add(sack);
  return g;
}
const DU_CYKEL_KAM = () => introKamera([0, 0.95, 3.4], [0, 0.95, 0], 38, 1);   // från sidan: cykeln åker åt höger i bilden
function introLager(namn, W = 1000, H = 625) {
  if (!introRum) introRum = byggIntroRum();
  const R = introRum, sc = R.sc;
  const stok = (fran, till) => R.stok.forEach((o, i) => { o.visible = i >= R.stok.length * fran && i < R.stok.length * till; });
  const aterstall = () => { R.dorr.rotation.y = -1.25; R.damm.visible = false; R.sack.visible = false; R.skriv.visible = false; R.lampa.intensity = 14; poseFigur(R.du, { synlig: false }); poseFigur(R.mamma, { synlig: false }); stok(0, 1); };
  aterstall();
  const kamDorr = [1.45, 1.55, 0.45], mammaDorr = [2.5, -0.4], kd = () => introKamera(kamDorr, [mammaDorr[0], 1.3, mammaDorr[1]], 58, W / H);
  R.kal.visible = !/^(rum|stok|mamma|dorr)/.test(namn) || namn === 'rum1';   // kalendern är ett eget lager (SVG) i kort 2–6
  const ut = (c, pts) => ({ url: c.toDataURL('image/png'), pts });
  // DEL 1 – rummet
  if (namn === 'rum1') { stok(0, 1); poseFigur(R.mamma, { synlig: false }); return ut(introRendera(sc, introKamera([1.95, 1.15, 1.85], [-0.4, 0.25, -0.4], 60, W / H), W, H, 3.0)); }
  if (namn === 'rum') { stok(0, 0); return ut(introRendera(sc, kd(), W, H, 1.7)); }   // samma vy kort 2–6: dörren öppen, ingen mamma, inget stök
  if (/^stok[123]$/.test(namn)) {
    // stöket som en hög längst ner i bilden (i förgrunden), en tredjedel i taget
    const k = +namn[4], kam = kd(); kam.updateMatrixWorld(); stok(0, 0);
    const delar = R.stok.slice(Math.floor(R.stok.length * (k - 1) / 3), Math.floor(R.stok.length * k / 3));
    const slump = (() => { let x = 5 + k * 7; return () => { x = (x * 16807) % 2147483647; return x / 2147483647; }; })();
    const flytt = delar.map((o) => [o, o.position.clone(), o.rotation.y]);
    delar.forEach((o, i) => { const nx = -0.95 + (i + 0.5) / delar.length * 1.9 + (slump() - 0.5) * 0.15, ny = -0.98 + slump() * 0.18 + (k - 1) * 0.05; const p = new THREE.Vector3(nx, ny, 0.5).unproject(kam), dir = p.sub(kam.position).normalize(); o.position.copy(kam.position).addScaledVector(dir, 0.85 + slump() * 0.25); o.position.y -= 0.12; o.rotation.y = slump() * 6.3; o.visible = true; });
    const c = matta(sc, kam, W, H, delar);
    flytt.forEach(([o, p, r]) => { o.position.copy(p); o.rotation.y = r; });
    return ut(c);
  }
  if (/^mamma[2-6]$/.test(namn)) {
    const k = +namn[5];
    if (k === 5) poseFigur(R.mamma, { x: 3.9, z: -0.4, rot: -Math.PI / 2 - 0.25, motKamera: kamDorr, humor: 'arg', handerISidan: true });   // längre bort i hallen – hel
    else if (k === 6) poseFigur(R.mamma, { x: mammaDorr[0], z: mammaDorr[1], motKamera: kamDorr, armarUpp: true, humor: 'rasande' });
    else poseFigur(R.mamma, { x: mammaDorr[0], z: mammaDorr[1], motKamera: kamDorr, humor: ['neutral', 'arg', 'rasande'][k - 2], handerISidan: k === 3, pekaMot: k === 4 ? kamDorr : null });
    return ut(matta(sc, kd(), W, H, [R.mamma]));
  }
  if (namn === 'dorr6') { R.dorr.rotation.y = 0; return ut(matta(sc, kd(), W, H, [R.dorr])); }   // stängd dörr – smäller upp i kort 6
  if (namn === 'kort7') { R.dorr.rotation.y = -1.6; R.lampa.intensity = 8; poseFigur(R.mamma, { x: 0.9, z: 0.55, rot: -0.75, humor: 'arg', pekaMot: [2.6, 1.4, -0.4] }); return ut(introRendera(sc, introKamera([-1.35, 1.5, 2.0], [1.25, 1.25, -0.05], 52, W / H), W, H, 2.6)); }
  if (namn === 'kort8') {
    // ur mammas ögonhöjd: du framifrån med armarna i kors, mammas axel suddig i förgrunden
    poseFigur(R.du, { x: -0.2, z: 0.3, motKamera: [1.9, 1.6, -0.1] });
    const u = R.du.userData; u.hoger.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), new THREE.Vector3(-0.72, 0.05, 0.7).normalize()); u.vanster.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), new THREE.Vector3(0.72, 0.12, 0.68).normalize());
    u.bryn.forEach((b) => { const v = b.position.x < 0; b.rotation.z = v ? -0.35 : 0.35; }); u.mun.scale.set(1.1, 0.12, 0.4);
    // mamma står bredvid kameran, vänd åt samma håll – hennes axel syns suddig i nedre hörnet
    const cam = new THREE.Vector3(1.85, 1.62, -0.05), d = new THREE.Vector3(-0.2, 1.4, 0.3).sub(cam).setY(0).normalize(), sida = new THREE.Vector3(d.z, 0, -d.x);
    const mp = cam.clone().addScaledVector(sida, 0.45).addScaledVector(d, 0.3);
    poseFigur(R.mamma, { x: mp.x, z: mp.z, rot: Math.atan2(d.x, d.z) });
    const k = introKamera(cam.toArray(), [-0.2, 1.4, 0.3], 46, W / H);
    return ut(introRendera(sc, k, W, H, 2.1, { nara: true }));
  }
  // DEL 2 – iväg
  if (namn === 'kort9') {
    const sc2 = introLjusScen(0xa8d4f0); byggVilla(sc2);
    const c = duPaCykel(); c.position.set(0.5, 0, 2.2); c.rotation.y = -Math.PI / 2 + 0.35; sc2.add(c);
    return ut(introRendera(sc2, introKamera([3.8, 1.3, 5.6], [0.0, 0.9, 1.4], 48, W / H), W, H, 4.5));
  }
  if (/^cyklist\d?$/.test(namn)) {
    // punkt BA: ren profil (ortografisk kamera, ingen vridning) – cyklist0–3 är fyra lägen på pedalerna
    const sc2 = introLjusScen(); const fas = namn === 'cyklist' ? 0 : +namn.slice(7), c = duPaCykel(true, fas); c.rotation.y = Math.PI / 2; sc2.add(c);
    const k = new THREE.OrthographicCamera(-1.05, 1.05, 1.05, -1.05, 0.1, 50); k.position.set(0, 0.95, 6); k.lookAt(0, 0.95, 0);
    return ut(matta(sc2, k, W, H));
  }
  if (namn === 'vag') {
    // panorama från sidan: villor → skog → vägen ut mot tippen (glider förbi bakom cyklisten)
    const sc2 = introLjusScen(0xa8d4f0); byggVagPanorama(sc2);
    const bredd = VAG_PERIOD, hojd = bredd * H / W, k = new THREE.OrthographicCamera(-bredd / 2, bredd / 2, hojd / 2, -hojd / 2, 0.1, 200);   // punkt BA: bilden är exakt en period
    k.position.set(bredd / 2, hojd / 2 - 1.3, 30); k.lookAt(bredd / 2, hojd / 2 - 1.3, 0);
    const r = renderer, gs = r.getSize(new THREE.Vector2()), pr = r.getPixelRatio(); r.setPixelRatio(1); r.setSize(W, H, false); r.render(sc2, k);
    const c = document.createElement('canvas'); c.width = W; c.height = H; c.getContext('2d').drawImage(r.domElement, 0, 0); r.setPixelRatio(pr); r.setSize(gs.x, gs.y, false);
    return ut(c);
  }
  return introLagerVarld(namn, W, H);
}
// en villa med trädgård (kort 9)
function byggVilla(sc) {
  const mark = new THREE.Mesh(new THREE.PlaneGeometry(60, 40), mat(0x6fae4a)); mark.rotation.x = -Math.PI / 2; sc.add(mark);
  const vag = new THREE.Mesh(new THREE.PlaneGeometry(60, 3.2), mat(0x55585e)); vag.rotation.x = -Math.PI / 2; vag.position.set(0, 0.01, 3.8); sc.add(vag);
  const hus = new THREE.Group(); hus.add(at(box(7, 3.2, 5, mat(0xf2e6c8)), 0, 1.6, 0));
  const tak = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 4.6, 2.2, 4, 1), mat(0x8a3a2a)); tak.rotation.y = Math.PI / 4; tak.scale.set(1.1, 1, 0.8); tak.position.y = 4.3; hus.add(tak);
  for (const x of [-2.2, 2.2]) { hus.add(at(box(1.1, 0.9, 0.05, mat(0x9fc6e8, { emissive: 0x334455, emissiveIntensity: 0.2 })), x, 1.9, 2.53)); hus.add(at(box(1.25, 1.05, 0.03, mat(0xffffff)), x, 1.9, 2.51)); }
  hus.add(at(box(1.0, 2.0, 0.06, mat(0x3a5a8a)), 0, 1.0, 2.53));
  hus.position.set(-1.5, 0, -4.5); sc.add(hus);
  const hack = mat(0x3f7a3a); for (let x = -9; x < 9; x += 0.9) sc.add(at(box(0.9, 0.8, 0.6, hack), x, 0.4, 1.6));
  for (const [x, z, s] of [[-7, -3, 1.3], [6, -5, 1.6], [8.5, -1, 1.1]]) { sc.add(at(cyl(0.15, 0.2, 1.4, mat(0x6b4a2f)), x, 0.7, z)); sc.add(at(new THREE.Mesh(new THREE.SphereGeometry(s, 10, 8), mat(0x4f8f3a)), x, 1.4 + s * 0.8, z)); }
  sc.add(at(box(0.08, 1.1, 0.08, mat(0x777777)), 2.4, 0.55, 2.3)); sc.add(at(box(0.4, 0.3, 0.35, mat(0x2b4a8a)), 2.4, 1.2, 2.3));   // brevlådan
}
// vägen från sidan: villor, sedan skog, sedan vägen ut med soptippsskylten
// punkt BA: vägen är en slinga – allt som står nära kanterna ritas också en period bort, så att vänster och höger kant passar ihop
const VAG_PERIOD = 36;
function byggVagPanorama(sc) {
  const L = VAG_PERIOD;
  sc.add(at(box(L * 3, 4, 2, mat(0x6fae4a)), L / 2, -2, -1)); sc.add(at(box(L * 3, 0.25, 1.2, mat(0x55585e)), L / 2, -0.12, 0.6));
  const r = (() => { let x = 11; return () => { x = (x * 16807) % 2147483647; return x / 2147483647; }; })();
  const tre = (o) => { sc.add(o); for (const d of [-L, L]) { const k = o.clone(true); k.position.x += d; sc.add(k); } };
  const villa = (x, f) => {
    const h = new THREE.Group();
    h.add(at(box(4.5, 2.6, 3, mat(f)), 0, 1.3, 0)); const t = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 3.3, 1.6, 4, 1), mat(0x8a3a2a)); t.rotation.y = Math.PI / 4; t.scale.set(1, 1, 0.65); t.position.y = 3.4; h.add(t);
    for (const wx of [-1.2, 1.2]) h.add(at(box(0.9, 0.8, 0.05, mat(0x9fc6e8)), wx, 1.5, 1.53));
    h.position.set(x, 0, -4); tre(h); tre(at(box(5.5, 0.7, 0.4, mat(0x3f7a3a)), x, 0.35, -1.6));
  };
  villa(3, 0xf2e6c8); villa(9, 0xe8c6a8);
  // skolan: lång gul byggnad med många fönster och en flaggstång
  const skola = new THREE.Group(); skola.add(at(box(8, 3.4, 3, mat(0xe8c56a)), 0, 1.7, 0)); skola.add(at(box(8.3, 0.3, 3.3, mat(0x7a4a32)), 0, 3.5, 0));
  for (let k = 0; k < 6; k++) skola.add(at(box(0.8, 0.9, 0.05, mat(0x9fc6e8)), -3.2 + k * 1.28, 2.2, 1.53));
  skola.position.set(17, 0, -5); tre(skola); tre(at(box(0.06, 4.2, 0.06, mat(0xdddddd)), 21.8, 2.1, -3)); tre(at(box(0.9, 0.55, 0.03, mat(0x3a6fd0)), 22.3, 3.9, -3));
  tre(at(box(3, 2.2, 2, mat(0xd8d0c0)), 25.5, 1.1, -4)); tre(at(box(2.8, 0.5, 0.05, mat(0xe05a5a)), 25.5, 1.9, -2.95));   // affären
  for (let x = 28.6; x < L - 0.6; x += 1.1 + r() * 0.6) {   // skogen där husen tar slut
    const z = -2.5 - r() * 4, s2 = 0.9 + r() * 0.9;
    tre(at(cyl(0.12, 0.18, 1.2, mat(0x5a3d26)), x, 0.6, z)); tre(at(new THREE.Mesh(new THREE.ConeGeometry(s2, 2.8 * s2, 7), mat(r() < 0.5 ? 0x2f6a3a : 0x3c7d44)), x, 1.2 + 1.3 * s2, z));
  }
}
// ute på gården (spelvärlden): kort 11, 12, 13 och 14
function introLagerVarld(namn, W, H) {
  const forr = { bg: scen.background.clone(), fog: scen.fog.color.clone(), sf: sol.color.clone(), si: sol.intensity, lampa: skjulLampa?.intensity };
  const synlig = new Map([kvarn, gammal, ladGrupp, cykel, cykelStall, batteri, vagCykel, startKabel, matarSlang].filter(Boolean).map((o) => [o, o.visible]));
  satLjus(DAG); const pil = malPil.visible; malPil.visible = false; planMesh.visible = false;
  const tmp = [], add = (o) => { scen.add(o); tmp.push(o); return o; };
  let A, pts;
  if (namn === 'gard') {
    // punkt BA: från vägen, lågt och nära – det gamla skjulet (utan tak, dörren mot vägen), tippen till vänster i bakgrunden
    // och en gård full av skräp. Vänster förgrund är fri för cyklisten som rullar in.
    for (const o of synlig.keys()) o.visible = false;
    const hemFor = {}; for (const [id, g] of Object.entries(HEM_DELAR)) { hemFor[id] = g.visible; g.visible = false; }
    const plankTak = talt.userData.plankTak, takFor = plankTak.visible; plankTak.visible = false; if (skjulLampa) skjulLampa.intensity = 0;
    const skyltar = [sangSkylt, sangSpoke, bradhog, adressSkylt].filter((o) => o?.visible); skyltar.forEach((o) => { o.visible = false; });
    const gomt = skrapLista.filter((x) => x.visible && !paTippen(x.position.x, x.position.z)); gomt.forEach((x) => { x.visible = false; });
    const r = (() => { let x = 7; return () => { x = (x * 16807) % 2147483647; return x / 2147483647; }; })();
    const sorter = ['flaska', 'flaska', 'flaska', 'flaska', 'back', 'pase', 'pase', 'burk', 'dunk', 'flaska', 'back', 'pase'];
    const kamG = introKamera([14.5, 1.1, 15.5], [1.2, 0.2, 6.2], 64, W / H); kamG.updateMatrixWorld();
    for (let i = 0; i < 200; i++) {
      const nara = i % 3 === 0, x = nara ? 4 + r() * 10 : -12 + r() * 28, z = nara ? 6 + r() * 7 : 2 + r() * 14;   // var tredje nära kameran, så att förgrunden också är full
      const sp = new THREE.Vector3(x, 0, z).project(kamG); if (Math.abs(sp.x) > 1.05 || sp.z > 1) continue;
      if (sp.x < 0.32 && sp.y < -0.12) continue;   // förgrunden till vänster och i mitten är fri: där rullar cyklisten in och bromsar
      if (Math.abs(x - SKJUL.x) < SKJUL.b / 2 + 0.6 && Math.abs(z - SKJUL.z) < SKJUL.d / 2 + 0.6) continue;
      const k = add(skapaSkrap(variantFor(sorter[i % sorter.length]))); k.position.set(x, 0, z); k.rotation.y = r() * 6;
    }
    for (const [x, z] of [[12.4, 9.6], [5.2, 12.8]]) { const t = add(skapaSkrap(variantFor('tunna'))); t.position.set(x, 0, z); }
    // tippen i bakgrunden: kullen görs högre för bilden och får en hög med skräp
    const kul = window.__tippKulle, ky = kul?.scale.y ?? 1; if (kul) kul.scale.y = 7;
    for (let i = 0; i < 60; i++) { const a2 = r() * 6.3, d = Math.sqrt(r()) * TIPP.r * 0.9, x = TIPP.x + Math.cos(a2) * d, z = TIPP.z + Math.sin(a2) * d; const k = add(skapaSkrap(variantFor(sorter[i % sorter.length]))); k.position.set(x, tippHojd(x, z) * 7, z); k.rotation.set(r(), r() * 6, r()); k.scale.setScalar(1.6); }
    tmp.push({ parent: null, __aterstall: () => { if (kul) kul.scale.y = ky; } });
    const dn = scen.fog.near, df = scen.fog.far; scen.fog.near = 70; scen.fog.far = 180;
    A = introRendera(scen, kamG, W, H, 9.5);
    scen.fog.near = dn; scen.fog.far = df;
    for (const [id, g] of Object.entries(HEM_DELAR)) g.visible = hemFor[id]; plankTak.visible = takFor; skyltar.forEach((o) => { o.visible = true; }); gomt.forEach((x) => { x.visible = true; });
  } else if (namn === 'kort12') {
    // punkt BE: cykeln står parkerad vid skjulet med skrivaren kvar på pakethållaren. Stället och sladden är vita ritningslinjer (pts).
    for (const o of synlig.keys()) o.visible = false;
    const hemFor = {}; for (const [id, g] of Object.entries(HEM_DELAR)) { hemFor[id] = g.visible; g.visible = false; }
    const plankTak = talt.userData.plankTak, takFor = plankTak.visible; plankTak.visible = false;
    const skyltar12 = [sangSkylt, sangSpoke, sangRam, bradhog, adressSkylt].filter((o) => o?.visible); skyltar12.forEach((o) => { o.visible = false; });
    const P0 = new THREE.Vector3(SKJUL.x - 0.4, 0, SKJUL.z + SKJUL.d / 2 + 1.4), R = 0.15;
    const c = add(vagCykel.clone(true)); c.children.forEach((o) => { o.visible = true; }); c.visible = true; c.position.copy(P0); c.rotation.set(0, R, 0.06);
    for (let k = 0; k < 14; k++) { const sk2 = add(skapaSkrap(variantFor(['flaska', 'pase', 'burk', 'back'][k % 4]))); sk2.position.set(SKJUL.x - 4 + (k * 1.37) % 8, 0, SKJUL.z + 2.6 + (k * 0.73) % 3.2); sk2.rotation.y = k; }
    const kam12 = introKamera([P0.x + 2.3, 1.25, P0.z + 2.9], [P0.x - 0.1, 0.62, P0.z - 0.1], 48, W / H); kam12.updateMatrixWorld(); scen.updateMatrixWorld(true);
    const P = (v) => { const q = v.clone().project(kam12); return [+((q.x + 1) / 2 * 100).toFixed(1), +((1 - q.y) / 2 * 62.5).toFixed(1)]; };
    pts = { stall: [], kabel: [] };
    const st2 = cykelStall.clone(true); st2.visible = true; st2.position.copy(P0); st2.rotation.set(0, R - Math.PI / 2, 0); st2.scale.set(1, 1, 1); st2.updateMatrixWorld(true);
    st2.traverse((m) => { if (!m.isMesh) return; const e = new THREE.EdgesGeometry(m.geometry, 30), a = e.attributes.position; for (let q = 0; q < a.count; q += 2) { const p1 = P(new THREE.Vector3().fromBufferAttribute(a, q).applyMatrix4(m.matrixWorld)), p2 = P(new THREE.Vector3().fromBufferAttribute(a, q + 1).applyMatrix4(m.matrixWorld)); if (Math.hypot(p1[0] - p2[0], p1[1] - p2[1]) > 0.2) pts.stall.push([...p1, ...p2]); } e.dispose(); });
    pts.stall.sort((x, y) => Math.max(y[1], y[3]) - Math.max(x[1], x[3]));
    c.updateMatrixWorld(true);
    const skr = c.children.find((o) => o.type === 'Group' && o.position.y > 0.7), mal = skr ? skr.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.05, 0)) : P0.clone().setY(0.9);
    const fran = new THREE.Vector3(0, 0.42, 0.3).applyMatrix4(st2.matrixWorld);
    pts.kabel = new THREE.CatmullRomCurve3([fran, fran.clone().lerp(mal, 0.35).setY(0.12), fran.clone().lerp(mal, 0.7).setY(0.35), mal]).getPoints(30).map(P);
    A = introRendera(scen, kam12, W, H, 3.8);
    for (const [id, g] of Object.entries(HEM_DELAR)) g.visible = hemFor[id]; plankTak.visible = takFor; skyltar12.forEach((o) => { o.visible = true; });
  } else if (namn === 'kort13') {
    // punkt BA: flaskan och Skrivare S är riktiga bilder. Kvarnen, extrudern och rullen blir vita ritningslinjer (pts), slangen streckad.
    for (const o of synlig.keys()) o.visible = false; kvarn.visible = gammal.visible = ladGrupp.visible = true;
    const flytt = [[gammal, gammal.position.clone()], [ladGrupp, ladGrupp.position.clone()]];
    const sx = -14.1, sz = 11.55; gammal.position.set(sx, 0.7, sz); ladGrupp.position.set(sx, 0, sz);
    const a0 = rulle.getWorldPosition(new THREE.Vector3()), b0 = new THREE.Vector3(sx - 0.2, 0.95, sz);
    const kam13 = introKamera([-15.6, 1.05, 14.35], [-15.6, 0.62, 11.6], 50, W / H); kam13.updateMatrixWorld();
    scen.updateMatrixWorld(true);
    const P = (v) => { const q = v.clone().project(kam13); return [+((q.x + 1) / 2 * 100).toFixed(1), +((1 - q.y) / 2 * 62.5).toFixed(1)]; };
    pts = { kvarn: [], extruder: [], rulle: [], slang: [] };
    const grupp = (o) => { for (let x = o; x; x = x.parent) { if (x === rulle) return 'rulle'; if (x === extruder) return 'extruder'; } return 'kvarn'; };
    const ritbar = [kvarn, extruder, rulle].filter((o, i, a) => !a.some((p, j) => j !== i && (() => { for (let x = o.parent; x; x = x.parent) if (x === p) return true; return false; })()));
    const ritSynlig = ritbar.map((o) => [o, o.visible]); ritbar.forEach((o) => { o.visible = true; }); scen.updateMatrixWorld(true);
    for (const rot of ritbar) rot.traverse((m) => {
      if (!m.isMesh || !m.geometry || m.material?.colorWrite === false || m.material?.opacity === 0) return; for (let x = m; x && x !== rot; x = x.parent) if (!x.visible) return;
      const e = new THREE.EdgesGeometry(m.geometry, 35), a = e.attributes.position, g = grupp(m);
      for (let i = 0; i < a.count; i += 2) {
        const p1 = P(new THREE.Vector3().fromBufferAttribute(a, i).applyMatrix4(m.matrixWorld)), p2 = P(new THREE.Vector3().fromBufferAttribute(a, i + 1).applyMatrix4(m.matrixWorld));
        if (Math.hypot(p1[0] - p2[0], p1[1] - p2[1]) > 0.25) pts[g].push([...p1, ...p2]);
      }
      e.dispose();
      // runda former (trattar, rullar) har mjuka sidor utan kanter – rita konturen: linjer mellan ringarnas yttersta punkter
      const gp = m.geometry.parameters, typ = m.geometry.type;
      if ((typ === 'CylinderGeometry' || typ === 'ConeGeometry') && gp?.height) {
        const rt = typ === 'ConeGeometry' ? 0 : gp.radiusTop, rb = typ === 'ConeGeometry' ? gp.radius : gp.radiusBottom, ring = (rad, y) => Array.from({ length: 32 }, (_, k) => P(new THREE.Vector3(Math.cos(k / 32 * Math.PI * 2) * rad, y, Math.sin(k / 32 * Math.PI * 2) * rad).applyMatrix4(m.matrixWorld)));
        const t = ring(rt, gp.height / 2), b2 = ring(rb, -gp.height / 2);
        const ytter = (ri) => [ri.reduce((a, q) => (q[0] < a[0] ? q : a)), ri.reduce((a, q) => (q[0] > a[0] ? q : a))];
        const [tl, tr] = ytter(t), [bl, br] = ytter(b2);
        pts[g].push([...tl, ...bl], [...tr, ...br]);
      }
    });
    for (const g of ['kvarn', 'extruder', 'rulle']) pts[g].sort((x, y) => Math.max(y[1], y[3]) - Math.max(x[1], x[3]));   // nerifrån och upp
    const slangK = new THREE.CatmullRomCurve3([a0.clone().setY(0.25), a0.clone().lerp(b0, 0.3).setY(0.05), a0.clone().lerp(b0, 0.75).setY(0.05), b0.clone().setY(0.4), b0]);
    pts.slang = slangK.getPoints(40).map(P);
    ritbar.forEach((o) => { o.visible = false; });
    flytt.push(...ritSynlig.map(([o, v]) => [{ position: { copy: () => { o.visible = v; } } }, null]));
    if (false) add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([a0.clone().setY(0.25), a0.clone().lerp(b0, 0.3).setY(0.05), a0.clone().lerp(b0, 0.75).setY(0.05), b0.clone().setY(0.4), b0]), 40, 0.02, 6), mat(FIL1, { emissive: FIL1, emissiveIntensity: 0.4 })));
    for (const [x, z, r] of [[-17.35, 12.7, 0.4], [-17.6, 12.4, 2.1], [-17.15, 12.35, 1.2]]) { const f = add(skapaSkrap(variantFor('flaska'))); f.position.set(x, 0, z); f.rotation.y = r; }
    A = introRendera(scen, kam13, W, H, 3.2);
    flytt.forEach(([o, p]) => o.position.copy(p));
  } else if (namn === 'skjul') {
    // skjulet utifrån: grått, trasigt och utan tak, skräp runt omkring. pts = var taket, dörren och fönstret ska ritas (0–1 i bilden)
    for (const o of synlig.keys()) o.visible = false;
    const hemFor = {}; for (const [id, g] of Object.entries(HEM_DELAR)) { hemFor[id] = g.visible; g.visible = false; }
    const plankTak = talt.userData.plankTak, takFor = plankTak.visible; plankTak.visible = false; if (skjulLampa) skjulLampa.intensity = 0;
    const skyltar = [sangSkylt, sangSpoke].filter((o) => o?.visible); skyltar.forEach((o) => { o.visible = false; });
    scen.background.set(0x9aa3ab); scen.fog.color.set(0x9aa3ab); sol.intensity = 0.9; sol.color.set(0xd8dde2);
    for (let i = 0; i < 26; i++) { let x, z, f = 0; do { x = SKJUL.x - 3.5 + Math.random() * 8; z = SKJUL.z - 1 + Math.random() * 5.5; } while (Math.abs(x - SKJUL.x) < 2.0 && Math.abs(z - SKJUL.z) < 1.7 && ++f < 20); const k = add(skapaSkrap(variantFor(['flaska', 'burk', 'pase', 'dunk'][i % 4]))); k.position.set(x, 0, z); k.rotation.y = Math.random() * 6.3; }
    const kam = introKamera([SKJUL.x + 1.6, 1.9, SKJUL.z + 6.4], [SKJUL.x, 1.15, SKJUL.z + 1], 50, W / H);
    A = introRendera(scen, kam, W, H, 6.2, { gra: 0.75 });
    kam.updateMatrixWorld(); const P = (x, y, z) => { const v = new THREE.Vector3(x, y, z).project(kam); return [+((v.x + 1) / 2).toFixed(4), +((1 - v.y) / 2).toFixed(4)]; };
    const fx = SKJUL.z + SKJUL.d / 2 + 0.02, hx = SKJUL.b / 2, h = SKJUL.h;
    pts = {
      tak: [P(SKJUL.x - hx - 0.25, h - 0.05, fx + 0.25), P(SKJUL.x - hx - 0.25, h + 0.45, SKJUL.z), P(SKJUL.x + hx + 0.25, h + 0.45, SKJUL.z), P(SKJUL.x + hx + 0.25, h - 0.05, fx + 0.25), P(SKJUL.x - hx - 0.25, h - 0.05, fx + 0.25)],
      dorr: [P(SKJUL.x - SKJUL.dorr / 2, 0.02, fx), P(SKJUL.x - SKJUL.dorr / 2, 2.0, fx), P(SKJUL.x + SKJUL.dorr / 2, 2.0, fx), P(SKJUL.x + SKJUL.dorr / 2, 0.02, fx)],
      fonster: [P(SKJUL.x - 1.5, 1.2, fx), P(SKJUL.x - 1.5, 1.75, fx), P(SKJUL.x - 0.85, 1.75, fx), P(SKJUL.x - 0.85, 1.2, fx), P(SKJUL.x - 1.5, 1.2, fx)],
      dorrMitt: P(SKJUL.x, 1.0, fx),
    };
    for (const [id, g] of Object.entries(HEM_DELAR)) g.visible = hemFor[id]; plankTak.visible = takFor; skyltar.forEach((o) => { o.visible = true; });
  }
  for (const t of tmp) { if (t.__aterstall) t.__aterstall(); else scen.remove(t); }
  for (const [o, v] of synlig) o.visible = v;
  scen.background.copy(forr.bg); scen.fog.color.copy(forr.fog); sol.color.copy(forr.sf); sol.intensity = forr.si; if (skjulLampa) skjulLampa.intensity = forr.lampa; malPil.visible = pil; planMesh.visible = true;
  return { url: A.toDataURL('image/png'), pts };
}
// ---------- Punkt AM (förslag): gårdsplanen ovanifrån – streckade rutor med text, för granskning ----------
function gardPlanGrupp() {
  const g = new THREE.Group(); g.name = 'gardplan';
  const ruta = (r, farg, tjock = false) => {
    const x0 = r.x - r.b / 2, x1 = r.x + r.b / 2, z0 = r.z - r.d / 2, z1 = r.z + r.d / 2;
    const geo = new THREE.BufferGeometry().setFromPoints([[x0, z0], [x1, z0], [x1, z1], [x0, z1], [x0, z0]].map(([x, z]) => new THREE.Vector3(x, 0.08, z)));
    const l = new THREE.Line(geo, new THREE.LineDashedMaterial({ color: farg, dashSize: tjock ? 0.6 : 0.3, gapSize: 0.2, depthTest: false })); l.computeLineDistances(); l.renderOrder = 998; g.add(l);
    const yta = new THREE.Mesh(new THREE.PlaneGeometry(r.b, r.d), new THREE.MeshBasicMaterial({ color: farg, transparent: true, opacity: r.last ? 0.06 : 0.16, depthTest: false }));
    yta.rotation.x = -Math.PI / 2; yta.position.set(r.x, 0.07, r.z); yta.renderOrder = 997; g.add(yta);
  };
  const text = (t, x, z, farg = '#fff', storlek = 1) => {
    const c = document.createElement('canvas'), cx = c.getContext('2d'); c.width = 512; c.height = 64;
    cx.font = 'bold 30px system-ui'; cx.fillStyle = 'rgba(0,0,0,.55)'; const w = Math.min(500, cx.measureText(t).width + 20); cx.fillRect((512 - w) / 2, 8, w, 48);
    cx.fillStyle = farg; cx.textAlign = 'center'; cx.fillText(t, 256, 44);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(8 * storlek, 1 * storlek), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthTest: false }));
    m.rotation.x = -Math.PI / 2; m.position.set(x, 0.1, z); m.renderOrder = 999; g.add(m);
  };
  ruta({ x: -11.5, z: 0, b: 18, d: 42 }, '#ffffff', true); text('FABRIKEN', -11.5, -20, '#fff', 1.4);
  const hz = PLAN.HEM_ZON; ruta({ x: (hz.minX + hz.maxX) / 2, z: (hz.minZ + hz.maxZ) / 2, b: hz.maxX - hz.minX, d: hz.maxZ - hz.minZ }, '#f4ecd8', true); text('HEMMET', 12.5, -20, '#f4ecd8', 1.4);
  for (const l of PLAN.LINJER) text(`${l.nr} · ${l.namn} · ${l.text}`, -11.5, l.z - 1.4, l.farg, 0.9);
  for (const p of PLAN.FABRIK_PLATSER) { ruta(p, p.farg || '#fff'); if (!p.linje) text(p.text, p.x + (p.d > 10 ? 0 : 0), p.z + (p.d > 10 ? 0 : p.d / 2 + 0.4), p.farg, 0.75); }
  for (const p of [...PLAN.HEM_PLATSER, ...PLAN.INFART]) { ruta(p, '#f4ecd8'); text(p.text, p.x, p.z + p.d / 2 + 0.4, '#f4ecd8', 0.75); }
  // skrivarplatserna i linje 1 får namnen, så att ordningen syns
  for (const p of PLAN.LINJE_PLATSER) text(p.namn.replace('Skrivarplats ', 'Skr ').replace('Skräpcontainer', 'Container').replace('Spolhållare', 'Spol'), p.x, PLAN.LINJER[0].z + (p.typ.startsWith('skrivare') && +p.typ.slice(-1) % 2 ? 1.5 : 2.2), '#fff', 0.3);
  return g;
}
// testkrok: bild av planen ovanifrån (data-url). Spelet i övrigt rörs inte.
function gardPlanBild(halv = 30, overlay = true, cx = -2, cz = 1) {
  const g = overlay ? gardPlanGrupp() : new THREE.Group(); scen.add(g);
  const W = renderer.domElement.width, H = renderer.domElement.height, a = W / H;
  const kam = new THREE.OrthographicCamera(-halv * a, halv * a, halv, -halv, 1, 200); kam.position.set(cx, 100, cz); kam.up.set(0, 0, -1); kam.lookAt(cx, 0, cz);
  const dimma = scen.fog; scen.fog = null; const pil = malPil.visible; malPil.visible = false;
  renderer.render(scen, kam); const url = renderer.domElement.toDataURL('image/png');
  scen.fog = dimma; malPil.visible = pil; scen.remove(g);
  return url;
}
// punkt AO: gammal sparfil → en ruta, de gamla sparfilerna tas bort och spelet börjar om (rekordet i spelhallen är kvar)
function visaOmbyggt() {
  const el = document.createElement('div'); el.className = 'ph-namn ph-ombyggt'; el.style.zIndex = '200';
  el.innerHTML = `<div class="fp-ruta ph-namn-ruta"><h2>Soptippsvägen har byggts om</h2><p style="margin:0 0 14px;line-height:1.45">Ditt gamla spel finns inte kvar – börja om!</p><div style="display:flex;justify-content:center">${knapp({ text: 'Börja om', typ: 'plus', attr: 'data-ok' })}</div></div>`;
  document.body.appendChild(el); el.addEventListener('pointerdown', (e) => e.stopPropagation());
  el.querySelector('[data-ok]').onclick = () => el.remove();
  for (const k of GAMLA_NYCKLAR) try { localStorage.removeItem(k); } catch {}
  if (MOLN?.gammal) { MOLN.gammal.delete().catch(() => {}); for (let n = 1; n <= PLATSER; n++) MOLN.db.doc(`data/users/${MOLN.id}/printahem_plats${n}`).delete().catch(() => {}); }
}
if (GAMMALT_SPEL) visaOmbyggt();
// ---------- Punkt BE: storykedjan – kvittens → varför → nästa mål (claude/soptippsvagen-storykedja.md) ----------
// Varje mål: först en kvittens (STORY, direkt), sedan en mening om varför nästa behövs, och 1 s senare läser berättaren det nya målet.
const KEDJA_TEXT = {
  skylt: ['Soptippsvägen 1. Nu bor jag här. Officiellt. Typ.', 'Skrivaren står kvar på cykeln. Den ska av.'],
  lastat: ['Tung. Den har storebror aldrig burit så långt.'],
  skrivareStar: [null, 'Den behöver ström. Och det enda här som rör sig är jag.'],
  cykel: [null, 'Okej. Trampa. Och välj nåt litet att printa.'],
  printStart: ['Den piper. Den GÖR något.'],
  printKlar: ['Klar! Ta ut den innan den ändrar sig.'],
  aliKvarn: [null, 'Mer plast-tråd behöver du. Jag har pappas gamla köttkvarn där bak. Han byggde om den.', 'ali'],
  kvarnStar: [null, 'En flaska till, sen blir det en rulle.'],
  rulle: [null, 'Fem kronor kvar. Fler nyckelringar, alltså.'],
  harRadGrip: ['Femtio kronor. Nu har jag råd med gripen.'],
  grip: [null, 'Tre åt gången. Men mina armar… Kvarnen borde veva själv.'],
  morkt: [null, 'Det börjar bli mörkt. Jag kan inte sova på jorden.'],
  sang: ['En säng. Jag printade en SÄNG.'],
  dag2: [null, 'Gården är full av skräp. Tre i taget räcker inte.'],
  kruka: ['En kruka. Mamma skulle bli så stolt. Hon får inte veta.', 'Nu städar jag gården. Frivilligt. Säg inget.'],
  rolf0: [null, 'Nyckeln till tippen. Där finns mer plast än jag kan bära.'],
  tippen: [null, 'Det drar från dörrhålet. Ali hade en dörr.'],
  rolf1: [null, 'Tippen är full av tunga grejer. Jag behöver något att bära dem i.'],
  karra: [null, 'Att springa till Ali för varje sak… Kan han inte hämta själv?'],
  saljlada: [null, 'Krukor är bra. Pallar är bättre.'],
  pall: [null, 'Om det regnar i natt drunknar jag. Ett tak.'],
  rolf2: [null, 'Jag trampar mer än jag printar. Solen är gratis.'],
  samtal4: [null, 'Det drar genom väggarna. Det blir kallt snart.'],
  rolf3: [null, 'Två väggar kvar. Sen är det tätt.'],
  vaggar: [null, 'En skrivare räcker inte längre. Ali hade en större.'],
  skrivareM: [null, 'Det är tätt, det är varmt. Nu ska det bli mysigt.'],
  // kapitel 2–4: varför-repliken på morgonen eller efter målet
  d6: [null, 'Tunnorna och kajakerna är för tunga för min lilla kvarn. Men Ali har en röd kvarn.'],
  d7: [null, 'Röd plast. Nu behöver jag något som printar den.'],
  vas: [null, 'En tunna i taget i kärran. Det måste gå fortare.'],
  magnet: [null, 'Tre skrivare drar mer ström än solen ger.'],
  d9: [null, 'Hjälmar säljer bra, säger Ali. Och solen räcker inte.'],
  solpark: [null, 'Skrivarna står och väntar på rullar. Fler spolar.'],
  d10: [null, 'Det blir höst. Och jag vill ha något stort.'],
  d11: [null, 'Jag bär skräp hela dagarna. Tänk om det bara kom av sig självt.'],
  d12: [null, 'Bandet går. Men någon måste lasta det. Och ladda skrivarna.'],
  d13: [null, 'Jag springer till Ali tio gånger om dagen. Han kan väl hämta själv?'],
  d14: [null, 'Kvarnen hinner inte med. Den behöver något… större.'],
  d15: [null, 'Fabriken sköter sig själv. Då kan jag äntligen bygga det jag kom hit för.'],
  d16: [null, 'För att bli folkbokförd måste jag äga marken. Bengt-Åke äger allt.'],
  d17: [null, 'Kolfiber. Det säljer. Och ängen bredvid är till salu.'],
  d18: [null, 'Ett riktigt hus. På riktigt.'],
  d19: [null, 'Guld. Ingen kvarn jag har klarar det.'],
  d20: [null, 'Minus fjorton. Skjulet var en sak. Huset ska vara varmt.'],
  d21: [null, 'Hus, mark, adress. Det är dags.'],
  d22: [null, 'De kommer på jul. Alla. Jag behöver ett bord.'],
};
function kedja(id) {
  S.kedja = S.kedja || []; if (S.kedja.includes(id)) return; S.kedja.push(id); sparaSnart();
  const [kv, va, vem = 'du'] = KEDJA_TEXT[id] || [];
  for (const [typ, t] of [['kvittens', kv], ['varför', va]]) {
    if (!t) continue;
    textLogg(typ, vem, t, id);
    const st0 = S.steg;   // det som pekar bakåt stryks: varför-raden när målet den förklarar redan är klart, kvittensen när spelaren hunnit två mål till
    kanalLagg({ vikt: 'STORY', vem, text: t, stryksOm: () => typ === 'varför' ? S.steg !== st0 : S.steg > st0 + 1, visa: () => notisVisa((vem === 'du' ? '💭 ' : '') + t, vem === 'du' ? 'tanke' : '', { tid: 5000 }) });   // punkt 15: kvittens, sedan varför – i den ordningen
  }
}
paHandelse('skyltKlar', () => kedja('skylt'));
paHandelse('placerat', ({ sak }) => { if (sak === 'leveranslada') ui.toast('Leveranslådan är på – skrivarna printar vidare av sig själva.', 'guld'); });   // U002
paHandelse('placerat', ({ sak }) => {   // punkt BD: mamma om jacuzzin, 30 s efter att den står ute (en gång)
  if (sak !== 'jacuzzi' || S.mammaJacuzzi) return; S.mammaJacuzzi = true; sparaSnart();
  MAMMA_SVAR_K2.forEach((t, i) => setTimeout(() => sms('mamma', t), 30000 + i * 4000));
});
paHandelse('lastatAv', () => kedja('lastat'));
paHandelse('placerat', ({ sak }) => {
  if (sak === 'skrivareS') kedja('skrivareStar'); else if (sak === 'kvarnen') kedja('kvarnStar');
  else if (sak === 'saljlada') kedja('saljlada'); else if (sak === 'skrivare2') kedja('skrivareM'); else if (sak === 'solpark') kedja('solpark');
});
paHandelse('ombyggd', () => kedja('cykel'));
paHandelse('printStart', ({ sak }) => { if (sak === 'nyckelring' && S.dag === 1) kedja('printStart'); });
paHandelse('printKlar', ({ sak, n }) => { if (sak === 'nyckelring' && n === 1) kedja('printKlar'); });
paHandelse('forstaForsaljning', () => setTimeout(() => kedja('aliKvarn'), 400));
paHandelse('tagitUrPrint', ({ sak }) => {
  if (sak === 'byggsats:grip') kedja('grip'); else if (sak === 'sang') kedja('sang'); else if (sak === 'kruka') kedja('kruka');
  else if (sak === 'pall') kedja('pall'); else if (sak === 'byggsats:magnet') kedja('magnet');
});
paHandelse('lagtIPostlada', ({ rolf, jobb }) => { if (!jobb && rolf <= 3) kedja('rolf' + rolf); });
paHandelse('samtalSlut', ({ id }) => { if (id === 'pappa4') kedja('samtal4'); });
paHandelse('morgonkortStangt', ({ dag }) => { if (dag === 2) setTimeout(() => kedja('dag2'), 1500); else if (KEDJA_TEXT['d' + dag]) setTimeout(() => kedja('d' + dag), 1500); });
paHandelse('malKlart', ({ id, nasta }) => {
  if (id === 'flaska') kedja('rulle');
  const st = STEG[S.steg - 1]; const t = st ? (typeof st.text === 'function' ? st.text() : st.text) : '';
  if (/^Hämta 5 skräp på soptippen/.test(t)) kedja('tippen');
  else if (/^Fyll kärran/.test(t)) kedja('karra');
  else if (/sista väggarna/.test(t)) kedja('vaggar');
  else if (/^Sälj designvasen/.test(t)) kedja('vas');
  void nasta;
});
// steg 12–16 dag 1: råd med gripen, och "det börjar bli mörkt" när motorn sitter eller kl 18 – det som kommer sist
setInterval(() => {
  if (S.dag !== 1 || !ui.igang) return;
  if (stegId() === 'kopGrip' && S.mynt >= (MASKINER.grip.ritning || 50)) kedja('harRadGrip');
  if (S.kvarn.motor && klockan() >= 18 * 60) kedja('morkt');
}, 500);
window.__printahem = {
  textLogg: () => TEXTLOGG.slice(), pratar: () => !!kanalAktiv || kanal.length > 0 || performance.now() < pratarTill || performance.now() < kanalFri, kanal: () => ({ aktiv: kanalAktiv && { vem: kanalAktiv.vem, text: kanalAktiv.text, vikt: kanalAktiv.vikt }, ko: kanal.map((x) => ({ vem: x.vem, text: x.text, vikt: x.vikt })) }), rostMatning, renderaIkon, ikonLista, handelseLogg, ritningInfo: () => { const c = ritning ? new THREE.Box3().setFromObject(ritning).getCenter(new THREE.Vector3()) : null; return { nyckel: ritningNyckel, linjer: ritning?.children.length || 0, printar: printarFram.size, mitt: c && [+c.x.toFixed(2), +c.y.toFixed(2), +c.z.toFixed(2)] }; }, prata, elHelFig: () => [...(elHel || [])], avkodat, forladdaRepliker, introLager, trampa: (sek) => { trampTest = sek; }, veva: (sek) => { vevTest = sek; }, nastaInred, prisNu, helaRullar, extruderFull, gardMal, kanLyfta, karraFull, harGava, valdKarra, BARA_SKRAP, SKRAP_RACKVIDD, utlagerKap, startPlats, sattFonster: () => { const n = fonsterLista().length; S.hem = { ...(S.hem || {}), fonster: [...fonsterLista(), { vagg: Object.keys(VAGGAR).filter((k) => !/dorr|fram/i.test(k))[n % 3] || Object.keys(VAGGAR)[0], u: 0.5 }] }; ritaFonster(); uppdateraSkjul(); sparaSnart(); }, medKo, medEl2, uppdatera, stegText: () => { const st = STEG[S.steg]; return st ? (typeof st.text === 'function' ? st.text() : st.text) : ''; }, valdTyp: () => valdTyp(), ritaStart, vagCykel, startYta, cykelStall, byggOmCykeln, SI, stegId, planNasta, fabriksplanSvg, kopDirekt, GAMMALT_SPEL, SPAR_ID, helen: helenTest, helenFig, helenBettan: bettan, helenSkjul, helenRuta, helenRutaYta, pratHelen, geHelen, helenNatt, helenMorgon, helenVillkor, HELEN, HELEN_RADER, introBild, nastaPlats, linjeSkrivare, linjeSpolar, ritaPlan, gardPlanBild, PLAN, rostKoll, invDragInfo: () => invDrag, tidTest: (m) => { klockTest = m; linjeTid = 0; }, invAvsluta, spikaAnim, hammare, efterspel: efterspelTest, efterspelKvar, jul: julTest, julScen, julKrans, julRader, lager: lagerTest, tippStadat, lagerFynd, grav, h78, goran: goranTest, polaroid: polaroidTest, kollaN, nLappLast, N_BEST, nLada, tradgard, ritaTradgard, kollaTradgard, rolfVagn, goranFigur: goran, gor, kollaGoran, goranSittplats, kollaPolaroid, ritaPolaroider, oppnaPolaroider, polaroidVagg, POLAROID, byggSkylt, kollaSkylt, skyltVersion, rostManusDetalj: () => { rostManus(); return rostManus.detalj; }, avbrytJobb, ROLF_TACK, elKlipp: (v, t) => elKlipp(v, t), simulera: (sek, steg = 0.1) => { for (let t = 0; t < sek; t += steg) uppdatera(steg); }, oppnaInv, rymsAlla, invKlick, invFlytta, naraKista, kistPos, matDag, jobbNu, rolfFyndPaket, aliHamtarLadan, skickaData, saljladaAktivera, startaTidtipp, nastaKop, rolfMorgonTack, rolfBrevLast, antalUt, startaDirekt, petgKvarn, petgAktivera, petgText, uppdateraPetg, filTyp, solEffekt, stromBehov, saljMarkerad, oppnaMarknad, oppnaPrintMeny, aliKopLista, stegKonkret, aktivGava, harRecept, harPlacerat, ritaNasta, malRawGet: () => malRaw, ikonHtml, skapaRiktig, VAROR, MASKINER, saljPris, aliSaljLista, kollaSamtal, visaBengt, kajsa, aliVink, aliFig: ali, stegBild, humorAv, varldsBubbla, skjulYta, bodGrupp, vridTips, flyttarBod: () => flyttarBod, dagbokLas: () => dagbokLas, pausad: () => pausad, bradhog, sangSpoke, taltSang: tältSäng, rullePlats, rulleMax, nastaAtgard, STEG, sovDags, kvallKlar, maskinStopp, ritaStopp, spikaSkylt, aliRopar, tittaMot, adressSkylt, introMusik, storHus, husHinder, startaResa, kollaResa, resaSteg, FYND, tillgang, arstid, varme, kollaKyla, uppdateraArstid, folkbokfor, kollaPolett, kanFolkbokfora, rolfHus, MARK_TOMTER, tungtFilament, andraRespekt, nivaUpplast, rolfDialekt, geRolfNummer, vantarPaNummer, kollaMarkTips, ruttnaOverNatten, stallIKyl, kylAntal, kompostera, kopMark, oppnaMark, uppdateraMark, paMark, markTavla, oppnaBokmarken, sparaDagBokmarke, lasBokmarken, miljo, placera, stallBurkar, uppdateraPappa, startaPappaBesok, pappaBesok, FIGURER, malPil, spoke, rektKrock, SKJUL, laggSkrap, paTippen, tippaLast, uppdateraAuto, auto, monteraAuto, rostKlipp, rostNyckel, rostManus, familjSms, oppnaJobbVal, hamtaBeloning, oppnaDagbok, oppnaInkorg, kapitel2Slut, TRIM, bodKlar, kapitelSlut, oppnaSparplatser, sparaPlats, lasPlats, HEM_DELAR, uppdateraSkjul, visaIntro, gardSkrap, laggTill, byt, taBortInv, antalInv, kista, extruder, arende, rolfGubbe, sms, ROLF, flak, bom, postLucka, postlada, grind, ALI, bil, sopbil, sov, TIPP, niva, magnetStrale, oppnaForrad, laggIForrad, vevYta, rulle, kamera, spelare, interaktor, hand, S, spar, skrivare, placerade, skrapLista, ui, kvarn, cykel, marknad, talt, trivsel, startaJobb, uppdateraSkrivare, stallNer };

startaLoop(uppdatera, { scen, kamera, renderer });

// formspråket "Printat & skrotigt" läggs sist så att det vinner över äldre stilar
{ const st = document.createElement('style'); st.textContent = BRAND_CSS + HUD_CSS + '.fp-topp>.fp-chip:first-child,.ph-resp-chip,.ph-dag-chip,.ph-bar-chip,.fp-hjalp,.ph-sms-chip{display:none!important}'; document.head.appendChild(st); }

// ---------- Punkt AA: rensa skärmen (Jesper 2026-11-14) ----------
// Statuskolumn till vänster (dag, kr, rullar, trivsel, el, meddelanden), uppdraget som en smal remsa överst i mitten,
// en notis i taget till höger, sms och dagbok samlas i Meddelanden. Allt här skriver över äldre HUD-stil.
{
  const st = document.createElement('style');
  st.textContent = `
body.aa .fp-topp,body.aa .hud-flikar,body.aa .hud-inkorg,body.aa .ph-meddelanden,body.aa .hud-rang{display:none!important}
body.aa .hud-status{width:172px;gap:4px}
body.aa .hud-status [hidden]{display:none!important}
body.aa .hud-klocka{padding:5px 10px 4px;gap:8px}
body.aa .hud-klocka .dag{font-size:12px}body.aa .hud-klocka .tid{font-size:19px}body.aa .hud-klocka .arstid{font-size:9px}
body.aa .hud-status .hud-matare{gap:7px;padding:4px 8px 4px 5px;border-bottom-width:2px}
body.aa .hud-status .hud-ikon{width:24px!important;height:24px!important;flex:0 0 24px!important}
body.aa .hud-status .hud-ikon svg,body.aa .hud-status .hud-ikon .ui-ik{width:20px!important;height:20px!important}
body.aa .hud-status .hud-m .rad span{font-size:9.5px!important;letter-spacing:.04em}
body.aa .hud-status .hud-m .rad b{font-size:11.5px!important}
body.aa .hud-status .hud-m .rad{display:flex!important;flex-direction:column!important;align-items:flex-start!important;gap:0!important;line-height:1.15}
body.aa .hud-status .hud-m .rad span,body.aa .hud-status .hud-m .rad b{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:128px}
body.aa .hud-status .hud-m{min-width:0;flex:1}
body.aa .hud-klocka{white-space:nowrap}body.aa .hud-klocka .arstid{display:none}
body.aa .hud-status .hud-bar{height:4px!important;margin-top:2px}
body.aa .hud-chip{pointer-events:auto;cursor:pointer;display:flex;align-items:center;gap:8px;padding:5px 10px 5px 8px;border-radius:10px;background:rgba(25,28,36,.88);border:1px solid rgba(255,255,255,.07);border-bottom:2px solid rgba(0,0,0,.45);font:800 13px system-ui;color:#fff;position:relative}
body.aa .hud-chip svg,body.aa .hud-chip .ui-ik{width:20px;height:20px;flex:0 0 20px}
body.aa .hud-chip-sms b{font-weight:700;font-size:12px;color:#c5ccda}
body.aa .hud-chip-sms em{margin-left:auto;font:900 12px system-ui;font-style:normal;background:#ff5c5c;color:#fff;border-radius:999px;min-width:20px;height:20px;display:grid;place-items:center;padding:0 5px}
body.aa .hud-chip-sms.ny b{color:#fff}
/* uppdraget: en rad överst i mitten */
body.aa .ph-mal.hud-uppdrag{left:50%!important;transform:translateX(-50%);width:auto!important;max-width:min(560px,calc(100vw - 2 * 196px));top:max(10px,env(safe-area-inset-top))!important;padding:6px 74px 6px 8px;border-radius:12px}

body.aa .hud-uppdrag .ph-mal-del{display:none!important}
body.aa .hud-antal{top:50%!important;transform:translateY(-50%);right:10px!important;font-size:11px!important;color:#7dffb0!important;white-space:nowrap}
body.aa .ph-mal-text.nasta{display:grid!important;grid-template-columns:auto 1fr;column-gap:9px!important;row-gap:3px!important;align-items:center!important;margin:0!important}
body.aa .ph-mal-text.nasta .nasta-rad{display:contents}
body.aa .ph-mal-text.nasta .nasta-ik{grid-row:1;grid-column:1;flex:none!important;width:30px!important;height:30px!important}
body.aa .ph-mal-text.nasta .nasta-ik svg,body.aa .ph-mal-text.nasta .nasta-ik .ui-ik{width:18px!important;height:18px!important}
body.aa .ph-mal-text.nasta .nasta-ik.bild img{width:26px!important;height:26px!important}
body.aa .nasta-rubrik{grid-row:1;grid-column:2;font:900 15px/1.2 system-ui!important}
body.aa .nasta-t{grid-row:2;grid-column:1/-1;font:700 12.5px/1.3 system-ui!important;display:none}
body.aa .hud-uppdrag.visa-tips .nasta-t{display:block}
body.aa .ph-rolfrad{margin-top:4px;padding-top:4px;font-size:12px}
body.aa .ph-rolfrad:empty{display:none}
/* notiser: en i taget till höger */
body.aa .ph-hoger{top:max(12px,env(safe-area-inset-top));width:280px}
body.aa .ph-notis{padding:8px 11px;font-size:13px}
/* morgonkortet: två kolumner */
.br-morgon{display:grid;grid-template-columns:1.15fr 1fr;gap:14px;text-align:left;align-items:start}
.br-morgon.en{grid-template-columns:1fr}
.br-morgon-v>b{display:block;font-size:20px;margin-bottom:6px}
.br-morgon-h{display:flex;flex-direction:column;gap:10px;font-size:14px}
.br-morgon-h .ali-vill{margin:0}
.br-morgon-h .br-rapport{display:block;margin:0}
.br-start:has(.br-morgon){max-width:760px;width:min(760px,94vw)}
.br-start:has(.br-morgon) .br-ingress{max-width:none!important;width:100%!important;margin-left:0!important;margin-right:0!important}
.br-start:has(.br-morgon) .br-val{flex-wrap:nowrap;gap:6px;max-width:none}
.br-start:has(.br-morgon) .br-valknapp{padding:5px 9px;font-size:12px;min-height:0}
.br-start:has(.br-morgon) .br-valknapp svg{width:15px;height:15px}
.br-start:has(.br-morgon) .br-tyck{font-size:12px;margin-top:4px}

/* ---------- punkt AD: en lång toppbar ---------- */
body.ad .hud-status{position:fixed!important;left:max(8px,env(safe-area-inset-left))!important;right:max(8px,env(safe-area-inset-right))!important;top:max(8px,env(safe-area-inset-top))!important;width:auto!important;display:flex!important;flex-direction:row!important;align-items:center;gap:8px;padding:5px 8px;border-radius:12px;background:rgba(20,23,31,.9);border:1px solid #343a4a;box-shadow:0 4px 14px rgba(0,0,0,.35);z-index:21}
body.ad .hud-status>*{margin:0!important;flex:0 0 auto}
body.ad .hud-klocka{background:none!important;border:0!important;box-shadow:none!important;padding:2px 4px!important;cursor:pointer;flex-direction:column!important;align-items:flex-start!important;gap:0!important;line-height:1.05}
body.ad .hud-klocka .dag{font:900 11px var(--rubrik,system-ui)!important;letter-spacing:.06em}body.ad .hud-klocka .tid{font-size:17px!important}
body.ad .hud-linje{flex:1 1 260px!important;min-width:180px;padding:0 14px 0 6px}
body.ad .hud-linje-spar{position:relative;height:20px;border-radius:99px;margin-right:12px;
  background:linear-gradient(90deg,#1d2b5a 0%,#3c5a9a 6%,#8cc8f0 16%,#a8dcff 45%,#8cc8f0 66%,#ffb36b 78%,#ff7a45 84%,#5a3a78 90%,#16204a 96%);box-shadow:inset 0 1px 3px rgba(0,0,0,.45);overflow:visible}
body.ad .hud-himmel{position:absolute;inset:0;border-radius:99px;overflow:hidden;pointer-events:none}
body.ad .hud-himmel i{position:absolute;width:2px;height:2px;border-radius:50%;background:#fff;opacity:.85;box-shadow:0 0 3px #fff}
body.ad .hud-himmel i:nth-child(1){left:91%;top:28%}body.ad .hud-himmel i:nth-child(2){left:94%;top:62%}body.ad .hud-himmel i:nth-child(3){left:97%;top:34%}body.ad .hud-himmel i:nth-child(4){left:2%;top:40%;opacity:.5}body.ad .hud-himmel i:nth-child(5){left:88%;top:70%;opacity:.6}
body.ad .hud-linje-nu{--f:0;--sol:0;position:absolute;left:calc(var(--f) * 100%);top:50%;width:22px;height:22px;margin:-11px 0 0 -11px;z-index:3;transform:translateY(var(--y,0px));transition:left .3s linear,transform .3s linear;pointer-events:none}
body.ad .hud-linje-nu svg{position:absolute;inset:0;width:100%;height:100%;transition:opacity .6s}
body.ad .hud-linje-nu .hk-sol{opacity:var(--sol);filter:drop-shadow(0 0 5px #ffd43b)}
body.ad .hud-linje-nu .hk-mane{opacity:calc(1 - var(--sol));filter:drop-shadow(0 0 4px #c9d6ff)}
body.ad .hud-linje-nu.sover{transition:left .5s ease-in,transform .5s ease-in,opacity .3s}
body.ad .hud-linje-nu.hopp{transition:none!important;opacity:0}
body.ad .hud-linje-mal i{position:absolute;top:50%;width:8px;height:8px;margin-left:-4px;transform:translateY(-50%);border-radius:50%;background:rgba(20,23,31,.55);border:1.5px solid #fff;z-index:2}
body.ad .hud-linje-mal i.klar{background:#2fbf71;border-color:#eafff2}
body.ad .hud-linje-mal i.nu{background:#ffd43b;border-color:#fff;box-shadow:0 0 0 3px #ffd43b66,0 0 10px #ffd43b;animation:adPuls 1.4s ease-in-out infinite}
@keyframes adPuls{50%{box-shadow:0 0 0 6px #ffd43b22,0 0 14px #ffd43b}}
body.ad .hud-linje-mane{position:absolute;right:-20px;top:50%;transform:translateY(-50%);width:22px;height:22px;opacity:.5;color:#c5ccda;transition:opacity .4s,color .4s}
body.ad .hud-linje-mane svg{width:20px;height:20px}
body.ad .hud-linje-mane em{position:absolute;font:900 9px/1 system-ui;font-style:normal;opacity:0;color:#cfe0ff}
body.ad .hud-linje-mane em:nth-of-type(1){right:-2px;top:-5px}body.ad .hud-linje-mane em:nth-of-type(2){right:-8px;top:-12px;font-size:11px}
body.ad .hud-linje-mane.pa{opacity:1;color:#ffd27a;filter:drop-shadow(0 0 5px #ffd27a)}
body.ad .hud-linje-mane.pa em{animation:adZzz 2s ease-in-out infinite}body.ad .hud-linje-mane.pa em:nth-of-type(2){animation-delay:.6s}
@keyframes adZzz{0%{opacity:0;transform:translateY(3px)}40%{opacity:1}100%{opacity:0;transform:translateY(-5px)}}
body.ad .hud-chip{padding:4px 8px!important;border-radius:8px!important;background:rgba(255,255,255,.05)!important;border:0!important;box-shadow:none!important;min-height:34px;white-space:nowrap}
body.ad .hud-chip b{font-size:13px!important}
body.ad .hud-chip-sms b{display:none}
body.ad .hud-chip-sms{position:relative;padding:4px 10px!important}
body.ad .hud-chip-sms em{position:absolute;right:-4px;top:-4px;min-width:18px!important;height:18px!important;font-size:11px!important}
body.ad .hud-status .hud-matare{width:150px;padding:3px 7px 3px 4px!important;background:rgba(255,255,255,.05)!important;border:0!important;border-radius:8px;box-shadow:none!important}
body.ad .hud-status .hud-matare[data-hud="trivsel"]{width:170px}
body.ad .hud-status .hud-m .rad span,body.ad .hud-status .hud-m .rad b{max-width:118px}
body.ad .hud-status .hud-m .rad b{max-width:none;overflow:visible}
body.ad .ph-mal.hud-uppdrag{position:static!important;transform:none!important;left:auto!important;top:auto!important;width:auto!important;flex:0 1 380px!important;min-width:220px;max-width:420px!important;margin:0!important;padding:5px 10px!important;border-radius:9px!important;box-shadow:none!important}
body.ad .hud-antal,body.ad .hud-lista{display:none!important}
body.ad .ph-hoger{top:calc(var(--bar-h,64px) + 10px)!important}
body.ad .ph-prest{top:calc(var(--bar-h,64px) + 16px)!important}
body.ad .ph-kapkort{top:max(24%,calc(var(--bar-h,64px) + 20px))!important}
body.ad .fp-toast{top:max(22%,calc(var(--bar-h,64px) + 24px))!important}
/* punkt AK: säljvara (guld, mynt) och uppgradering (filamentcyan, pil) */
.kop-slag{display:inline-flex;align-items:center;gap:4px;padding:2px 7px 2px 5px;border-radius:6px;font:900 10px/1.1 var(--rubrik,system-ui);letter-spacing:.06em;vertical-align:middle;white-space:nowrap}
.kop-slag svg,.kop-slag .ui-ik{width:13px!important;height:13px!important}
.kop-slag.salj{background:#e9b949;color:#3a2a06}.kop-slag.upp{background:#4cc9f0;color:#0b3242}
.kop-slag.upp svg{transform:rotate(-90deg)}
.kop-slag.liten{padding:2px;border-radius:50%;width:19px;height:19px;justify-content:center;margin-left:6px;box-shadow:0 0 0 2px rgba(0,0,0,.35)}
.ui-ruta>.kop-slag.liten{position:absolute;left:4px;top:4px;margin:0;z-index:2}
.ali-slag{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-bottom:6px}
.ali-slag-rad{font:800 12.5px/1.25 system-ui}.ali-slag-rad.salj{color:#f5d27a}.ali-slag-rad.upp{color:#8fe0ff}
.ali-tva{display:grid;grid-template-columns:minmax(150px,auto) 1fr;gap:12px;align-items:start}
.ali-del{border-radius:12px;padding:8px 8px 10px;background:rgba(255,255,255,.03)}
.ali-del.salj{border:2px solid #e9b94966;background:linear-gradient(180deg,#e9b94914,transparent 60%)}
.ali-del.upp{border:2px solid #4cc9f055;background:linear-gradient(180deg,#4cc9f010,transparent 60%)}
.ali-del-rub{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:0 2px 8px}.ali-del-rub b{font:900 15px var(--rubrik,system-ui)}.ali-del-rub small{color:#9aa3b5;font-size:11.5px}
.ali-del.salj .ui-grid{grid-template-columns:repeat(auto-fill,minmax(96px,1fr))}
.inv-slag{position:absolute;right:5px;top:5px;width:9px;height:9px;border-radius:50%;box-shadow:0 0 0 2px rgba(0,0,0,.45);z-index:2}
.inv-slag.salj{background:#e9b949}.inv-slag.upp{background:#4cc9f0}
.hud-nasta[data-slag="salj"] .hud-ikon{color:#e9b949}.hud-nasta[data-slag="upp"] .hud-ikon{color:#4cc9f0}.hud-nasta[data-slag="upp"] .hud-ikon svg{transform:rotate(-90deg)}
.br-dagmal li .kop-slag{margin-left:auto}
/* punkt AL: du har råd – NÄSTA blinkar grönt */
body .hud-nasta.rad-klar{animation:alRad 1.1s ease-in-out infinite}
/* punkt AO: bara dator – minsta storlek 1280×720. Toppbaren får plats på en rad från 1280 px. */
body.ad .hud-status .hud-matare .hud-m{min-width:0;overflow:hidden}body.ad .hud-status .hud-matare .rad,body.ad .hud-status .hud-matare .rad b{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
@media (max-width:1600px){body.ad .hud-status .hud-matare{width:122px}body.ad .hud-status .hud-matare[data-hud="trivsel"]{width:150px}body.ad .hud-linje{flex:1 1 150px!important;min-width:110px}body.ad .ph-mal.hud-uppdrag{flex:0 1 300px!important;min-width:230px}body.ad .hud-status{gap:6px}}
@keyframes alRad{50%{box-shadow:0 0 0 3px #3ccf73,0 0 16px #3ccf73;background:rgba(60,207,115,.22)!important}}
`;
  document.head.appendChild(st);
}
