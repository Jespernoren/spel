// ============================================================================
// Soptippsvägen 1 – balans.js
// Alla siffror som styr progressionen och ekonomin. spel.js läser härifrån.
// Ändra här för att balansera – inget annat i koden behöver röras.
// (Punkt T i bygglistan: bara flytt, inga värden ändrade.)
// ============================================================================

// ---------- A-053: Rudolfs böter ----------
// Vartannat ja till Rolfs fiffel ger böter: 30 % av pengarna man har just då, minst 100 kr och högst 2 500 kr,
// aldrig mer än man har. Avrundas till jämna 50 kr.
export const BOTER_ANDEL = 0.30;
export const BOTER_MIN = 100;
export const BOTER_MAX = 2500;

// ---------- Priser hos Ali ----------
// PRIS_SKALA: Ali betalar runt 60 kr per rulle i början, så ritningar och lyx-recept är skalade efter det.
// Varje `ritning` i MASKIN_SIFFROR och varje `recept` på en lyxvara (VAROR med lyx: true) som är 150 kr
// eller mer multipliceras med PRIS_SKALA när spelet startar och avrundas till närmaste 10 kr.
//   Exempel: tak `ritning: 420`  →  420 × 0,6 = 252  →  Ali tar 250 kr.
//            Skrivare M `ritning: 1330`  →  Ali tar 800 kr.   Jacuzzi-recept 30000  →  18 000 kr.
// Under 150 kr (t.ex. dörr 120, grip 50) gäller siffran som den står.
// Vill du sätta ett pris som det syns i spelet: dela med 0,6 (800 kr  →  skriv 1330).
export const PRIS_SKALA = 0.6;
export const MATTNAD = 0.95, MATTNAD_GOLV = 0.7;   // BI: mjukare mättnad (var 0,9 / 0,5)
//   // varje såld vara av samma sort samma dag sänker Alis pris 10 % (lägst 50 % av fullpris) – nollställs på morgonen
export const ALI_VILL_BONUS = 1.5;   // "Ali vill ha idag": en slumpad vara per morgon ger +50 % hela dagen
export const GROSSIST = 0.7;   // leveranslådan: Ali köper till grossistpris
export const SALJ_TILLBAKA = 0.1;       // kr per gram när man säljer tillbaka en byggsats till Ali
export const FILAMENT_KOP = { gram: 1000, pris: 150 };  // en hel rulle – dyrare än du får för prints (≈60–180 kr/rulle)
export const SLAPP_PER_DAG = 2;   // Ali släpper högst så här många nyheter per dag (dagens mål släpps alltid)

// ---------- Trivsel ger mer betalt ----------
export const TRIVSEL_PER_PROCENT = 20;   // varje 20 trivsel ger +1 % på allt Ali betalar för prints (hos Ali, säljlådan, leveranslådan)
export const TRIVSEL_MAX_BONUS = 0.4;    // taket: +40 %

// ---------- Kapitel och belöningar ----------
export const KAP1_BELONING = 1000;   // kr när kapitel 1 är klart – så kapitel 2 kommer igång direkt
export const TRIVSEL_MAL = 130;   // trivselmålet i kapitel 1 (B42: 150 → 130)
export const RESPEKT_NIVAER = [[25, 'Filament nivå 2 – röd PETG'], [60, 'Filament nivå 3 – svartgrå kolfiber'], [110, 'Filament nivå 4 – guldkomposit'], [180, 'Tippium – blandas i labbet']];

// ---------- Rolf ----------
// Belöningen i postlådan för gåva 1–4 (kapitel 1). 'mynt:N' = kronor, 'extra' = Rolf lägger fler fynd på tippen.
export const ROLF_BELONING = [['mynt:60', 'nyckel'], ['mynt:120', 'karra'],   /* A-050: skottkärran är tacket för flasköppnaren */
    // EQ 39: nyckeln till tippen är tacket för ölhållaren
  ['mynt:250', 'extra'], ['mynt:400', 'extra']];
// Skumma jobb: [ja, nej] i kronor för jobb 1–5. Varje nytt varv (efter fem jobb) ×(1 + JOBB_VARV).
export const SKUMMA_JOBB = [[1200, 150], [1800, 220], [2500, 300], [3500, 400], [5000, 550]];
export const JOBB_VARV = 0.6;
export const JOBB_ANDEL = 0.5;       // ett ja-jobb ger minst halva dagens snittinkomst
export const FYND_ANDEL = 0.45;      // Rolfs fynd (nej-jobb och tack) är värda ca 30–60 % av en dags snittinkomst
export const SMS_MELLAN = 180;   // sekunder speltid mellan två sms

// ---------- Ström ----------
export const STROM_BAS = 100;           // batteriet vid skrivaren rymmer så här mycket
export const BANK_PLUS = 100;           // varje batteribank lagrar så här mycket mer
export const TRAMP_PER_S = 12;          // ström per sekund när man trampar
export const SOL_PER_S = 4;             // ström per sekund per solpanel – en panel driver Skrivare S (4/s) helt själv
export const VINDKRAFT_PER_S = 40;     // EE tillägg 2: vindkraftverket på backen – guldlinjen drar mycket
export const SOLPARK_PER_S = 14;        // en solcellspark: sex paneler – mer än du hinner trampa
// A-069 §2: strömdraget per linje, satt efter progressionskartan – strömmen ska ta stopp när en linje startar:
// röda kvarnen dag 6, kolfiberkvarnen dag 11 och extraktorn dag 19 (svaren: solpanelen, batteribank 2 och vindkraftverket)
export const STROM_DRAG = { rod_kvarn: 7, kolf_kvarn: 14, extraktor: 30, guldskrivare: 30 };
export const MOTOR_STROM = 1;           // ström per sekund när motorn mal

// ---------- Bära och förvara ----------
export const BARA_SKRAP = [3, 6, 10, 16, 30];   // A-072: händer 3 → skräpgrip 6 → sopsäck 10 (dag 2) → ryggkorg 16 (dag 3) → magnetpistol 30 (kapitel 2)
export const HOTBAR = 9;                // platser i verktygsraden (plats 1 = verktyget/famnen)
export const KISTA_PLATSER = 27, STACK = 20;   // kistan har 27 platser, max 20 av samma sak per plats
export const RYGG_BAS = 18, RYGG_STOR = 27;     // ryggsäcken: 18 platser, 27 med Större ryggsäck
export const PLATTA = { 1: 1, 2: 2, 3: 4, 4: 2 };   // punkt 11: färdiga saker som får plats på byggplattan (S, M, L, PETG). Full platta = skrivaren väntar

// ---------- Automation ----------
export const LASTARM_TID = 2.5;   // sekunder per plock för lastarmen vid tippen (×0,85 per armtrim)
export const BAND_BAS = 9;        // platser på rullbandet från tippen utan trim (+3 per bandtrim)
export const LASTARM_MAX = 700;   // gram lastarmen orkar lyfta utan trim – tar dunkar men inte tunnor (×1,7 per armtrim)

// ---------- Marken (Bengt-Åke) ----------
export const MARK_PRIS = {
  egen: { pris: 20000, respekt: 0 },   // AX g41–g42: 30 000 kr tog över 20 min dag 16 (man börjar dagen med ca 3 000 kr efter jacuzzin)
  oster: { pris: 36000, respekt: 0 },   // A-043: kapitel 4 får inte ha dagar över 20 min
  husgrund: { pris: 25000, respekt: 0 },   // A-043/A-045: huset delas på två dagar – grunden dag 18
  tippkant: { pris: 60000, respekt: 70 },
  tippen: { pris: 120000, respekt: 110 },
  rolfhus: { pris: 80000, respekt: 140 },
  huset: { pris: 30000, respekt: 0 },   // själva huset på grunden dag 19
  norr: { pris: 35000, respekt: 45 },
};

// ---------- Saker att printa: gram filament, tid i sekunder på Skrivare S, pris hos Ali ----------
// pris = vad Ali betalar · recept = vad receptet kostar hos Ali (lyx-recept ≥ 150 skalas med PRIS_SKALA)
// present = vad presenten till Rolf kostar · protoPris = Alis prototyper
export const VARA_SIFFROR = {
  olhallare: { gram: 300, tid: 12, pris: 0 },
  flaskoppnare: { gram: 200, tid: 8, pris: 0 },
  grillspade: { gram: 600, tid: 16, pris: 0 },
  tomte: { gram: 800, tid: 22, pris: 0 },
  m_turbo: { gram: 0, tid: 0, pris: 0, protoPris: 6000 },
  a_holo: { gram: 0, tid: 0, pris: 0, protoPris: 9000 },
  m_snal: { gram: 0, tid: 0, pris: 0, protoPris: 12000 },
  m_nano: { gram: 0, tid: 0, pris: 0, protoPris: 18000 },
  m_grav: { gram: 0, tid: 0, pris: 0, protoPris: 30000 },
  m_fusion: { gram: 0, tid: 0, pris: 0, protoPris: 45000 },
  a_robot: { gram: 0, tid: 0, pris: 0, protoPris: 80000 },
  tapet_1: { gram: 0, tid: 0, pris: 0 },
  tapet_2: { gram: 0, tid: 0, pris: 0 },
  tapet_3: { gram: 0, tid: 0, pris: 0 },
  tapet_4: { gram: 0, tid: 0, pris: 0 },
  tapet_5: { gram: 0, tid: 0, pris: 0 },
  tapet_0: { gram: 0, tid: 0, pris: 0 },
  p_sexpack: { gram: 0, tid: 0, pris: 0, present: 300 },
  p_korv: { gram: 0, tid: 0, pris: 0, present: 600 },
  p_kajsa: { gram: 0, tid: 0, pris: 0, present: 1100 },
  p_fiske: { gram: 0, tid: 0, pris: 0, present: 2500 },
  p_trummor: { gram: 0, tid: 0, pris: 0, present: 4500 },
  p_konsert: { gram: 0, tid: 0, pris: 0, present: 8000 },
  p_resa: { gram: 0, tid: 0, pris: 0, present: 20000 },
  rulle2: { gram: 0, tid: 0, pris: 0 },
  fynd2: { gram: 0, tid: 0, pris: 0 },
  fynd3: { gram: 0, tid: 0, pris: 0 },
  fynd4: { gram: 0, tid: 0, pris: 0 },
  fynd5: { gram: 0, tid: 0, pris: 0 },
  rulle3: { gram: 0, tid: 0, pris: 0 },
  rulle4: { gram: 0, tid: 0, pris: 0 },
  rulle5: { gram: 0, tid: 0, pris: 0 },
  n2_vas: { gram: 600, tid: 22, pris: 790, recept: 600 },   // BI steg 5: +25 %   // BI: receptet 600 → 300 kr   // BP: varje nytt recept tjänar mer   // DL
  n2_hjalm: { gram: 900, tid: 31, pris: 1330, recept: 2300 },   // BI steg 5: +25 %   // BP: varje nytt recept tjänar mer   // DL
  n2_neon: { gram: 1200, tid: 30, pris: 1530, recept: 3800 },   // BP: varje nytt recept tjänar mer   // DL
  n2_paddel: { gram: 2000, tid: 50, pris: 3000, recept: 5900 },   // DL
  n3_stol: { gram: 2000, tid: 60, pris: 5200 },
  n4_staty: { gram: 3000, tid: 80, pris: 9000 },
  n5_drake: { gram: 4000, tid: 100, pris: 16000 },
  burk_honung: { gram: 0, tid: 0, pris: 0 },
  burk_lingon: { gram: 0, tid: 0, pris: 0 },
  burk_saft: { gram: 0, tid: 0, pris: 0 },
  burk_vante: { gram: 0, tid: 0, pris: 0 },
  burk_sill: { gram: 0, tid: 0, pris: 0 },
  burk_sockor: { gram: 0, tid: 0, pris: 0 },
  burk_duk: { gram: 0, tid: 0, pris: 0 },
  burk_toarulle: { gram: 0, tid: 0, pris: 0 },
  burk_porslin: { gram: 0, tid: 0, pris: 0 },
  burk_tavla: { gram: 0, tid: 0, pris: 0 },
  burk_tavla2: { gram: 0, tid: 0, pris: 0 },
  burk_tavla3: { gram: 0, tid: 0, pris: 0 },
  burk_blomma: { gram: 0, tid: 0, pris: 0 },
  burk_vissen: { gram: 0, tid: 0, pris: 0 },
  burk_kompott: { gram: 0, tid: 0, pris: 0 },
  burk_raggmunk: { gram: 0, tid: 0, pris: 0 },
  burk_mogel_kompott: { gram: 0, tid: 0, pris: 0 },
  burk_mogel_raggmunk: { gram: 0, tid: 0, pris: 0 },
  r_tv: { gram: 0, tid: 0, pris: 0 },
  r_affisch: { gram: 0, tid: 0, pris: 0 },
  r_gardin: { gram: 0, tid: 0, pris: 0 },
  r_klocka: { gram: 0, tid: 0, pris: 0 },
  r_fatolj: { gram: 0, tid: 0, pris: 0 },
  r_discokula: { gram: 0, tid: 0, pris: 0 },
  r_jukebox: { gram: 0, tid: 0, pris: 0 },
  trumstockar: { gram: 0, tid: 0, pris: 0 },
  nyckelkopia: { gram: 150, tid: 8, pris: 0 },
  stangdskylt: { gram: 700, tid: 16, pris: 0 },
  termoslock: { gram: 400, tid: 12, pris: 0 },
  stampel: { gram: 350, tid: 12, pris: 0 },
  tillstand: { gram: 250, tid: 10, pris: 0 },
  sang: { gram: 1200, tid: 20, pris: 0 },
  nyckelring: { gram: 100, tid: 4, pris: 15 },
  kruka: { gram: 400, tid: 11, pris: 70, recept: 40 },     // ED: receptet köps hos Ali för 40 kr (EE: erbjuds när nyckelringarna tar stopp som inkomst)   // BP: varje nytt recept tjänar mer
  pall: { gram: 1000, tid: 21, pris: 180, recept: 80 },   // B43: 32 → 20 s   // BP: varje nytt recept tjänar mer
  rulle: { gram: 1000, tid: 0, pris: 0 },
  mobilstall: { gram: 300, tid: 10, pris: 50, recept: 100 },   // BP: varje nytt recept tjänar mer
  fagelholk: { gram: 800, tid: 16, pris: 170, recept: 300 },   // BP: varje nytt recept tjänar mer
  n_kopp: { gram: 300, tid: 14, pris: 0, recept: 1 },         // punkt L: bara för N. (betalningen följer JOBB_ANDEL, minst 300 kr)
  t_spalje: { gram: 1500, tid: 30, pris: 0, recept: 500 },     // punkt N: röd PETG, 500 × PRIS_SKALA = 300 kr hos Ali
  t_bevattning: { gram: 1200, tid: 26, pris: 0, recept: 420 },  // 250 kr
  t_vaxthus: { gram: 4000, tid: 60, pris: 0, recept: 6670 },    // kolfiber, kapitel 4: ca 4 000 kr
  fagelskramma: { gram: 600, tid: 20, pris: 30, recept: 40 },    // punkt I: Göran sätter sig på den (under 150 kr – skalas inte)
  fagelbad: { gram: 900, tid: 28, pris: 45, recept: 60 },         // punkt I: Göran flyttar in
  julbord: { gram: 500, tid: 20, pris: 0 },                        // punkt O: gratis, printas på ca 20 s
  g_kapsyl: { gram: 0, tid: 0, pris: 4 },                          // Görans gåvor – humor, inte ekonomi
  g_skruv: { gram: 0, tid: 0, pris: 6 },
  lampskarm: { gram: 1200, tid: 25, pris: 320, recept: 600 },   // BP: varje nytt recept tjänar mer
  dronare: { gram: 1500, tid: 32, pris: 480, recept: 1000 },   // BP: varje nytt recept tjänar mer
  skateboard: { gram: 2000, tid: 30, pris: 600, recept: 1500 },   // BP: varje nytt recept tjänar mer   // DL
  gitarr: { gram: 3000, tid: 37, pris: 925, recept: 2500 },   // BP: varje nytt recept tjänar mer   // DL
  cykelram: { gram: 5000, tid: 52, pris: 1560, recept: 4500 },   // BP: varje nytt recept tjänar mer   // DL
  pkajak: { gram: 3000, tid: 80, pris: 8000, recept: 10000 },   // DL: kolfiberkajak (linje 3) – mellan kolfiberstolen och guldstatyn
};

// ---------- Maskiner och 3D-modeller: ritning = råpris (≥ 150 skalas med PRIS_SKALA), delar, gram per del, tid per del ----------
export const MASKIN_SIFFROR = {
  kvarnmotor: { ritning: 50, delar: 1, gram: 500, tid: 10 },
  solpark: { ritning: 4000, delar: 4, gram: 2400, tid: 24 },
  bank: { ritning: 1330, delar: 2, gram: 600, tid: 12 },
  vindkraft: { ritning: 12000, delar: 4, gram: 3200, tid: 30 },   /* EE tillägg 2: vindkraftverket på backen i norr, dag 19 */
  korg: { ritning: 60, delar: 1, gram: 300, tid: 10 },     // punkt AX: sopsäcken dag 2, ca 60 kr
  ryggkorg: { ritning: 120, delar: 2, gram: 500, tid: 12 },   // punkt AX: ryggkorgen dag 3
  ryggsack2: { ritning: 670, delar: 2, gram: 500, tid: 12 },
  karra: { ritning: 200, delar: 3, gram: 900, tid: 16 },
  petgkvarn: { ritning: 2000, delar: 3, gram: 600, tid: 16 },   // BI: 1 800 → 1 200 kr
  skrivarepetg: { ritning: 2500, delar: 5, gram: 900, tid: 18 },   // BI: 1 800 → 1 500 kr
  petgband: { ritning: 900, delar: 3, gram: 1000, tid: 16 },
  petgcontainer: { ritning: 900, delar: 3, gram: 1000, tid: 16 },   // linje 2: ersätter det tunga rullbandet
  petgtorn: { ritning: 1000, delar: 3, gram: 1000, tid: 16 },        // linje 2: Rulltorn XL, 12 rullar
  magnet: { ritning: 4000, delar: 3, gram: 1000, tid: 16 },
  turbomotor: { ritning: 400, delar: 3, gram: 800, tid: 14 },
  jetmotor: { ritning: 13330, delar: 4, gram: 1200, tid: 18 },
  spolhallare: { ritning: 120, delar: 2, gram: 400, tid: 10 },
  spolhallare2: { ritning: 1170, delar: 3, gram: 700, tid: 12 },
  spolhallare3: { ritning: 1500, delar: 4, gram: 900, tid: 14 },
  matarband: { ritning: 200, delar: 3, gram: 700, tid: 14 },
  rullstall: { ritning: 180, delar: 2, gram: 500, tid: 12 },
  vindsnurra: { ritning: 133, delar: 1, gram: 400, tid: 15 },   // BL: 80 kr hos Ali, under en halv rulle, ca 15 s
  hardkniv: { ritning: 1670, delar: 2, gram: 600, tid: 12 },
  diamantkniv: { ritning: 10000, delar: 3, gram: 1000, tid: 16 },
  stortratt: { ritning: 150, delar: 2, gram: 600, tid: 12 },
  dorr: { ritning: 120, delar: 2, gram: 500, tid: 14 },
  vaggar: { ritning: 220, delar: 1, gram: 700, tid: 16 },
  tak: { ritning: 420, delar: 3, gram: 400, tid: 16 },
  fonster: { ritning: 150, delar: 2, gram: 700, tid: 14 },
  golv: { ritning: 140, delar: 3, gram: 800, tid: 14 },
  taklampa: { ritning: 90, delar: 1, gram: 400, tid: 10 },
  tapeter: { ritning: 1330, delar: 1, gram: 500, tid: 12 },   // punkt BG: en ritning, fyra tapetrullar – en per vägg (som isolerskivorna)
  gamingbod: { ritning: 20000, delar: 6, gram: 700, tid: 20 },
  grip: { ritning: 50, delar: 1, gram: 400, tid: 10 },
  bord: { ritning: 120, delar: 3, gram: 700, tid: 14 },
  sol: { ritning: 670, delar: 3, gram: 800, tid: 14 },
  rullband: { ritning: 12670, delar: 4, gram: 900, tid: 16 },
  kolfkvarn: { ritning: 10000, delar: 4, gram: 900, tid: 18 },     // DF: linje 3, ca 6 000 kr
  kolfband: { ritning: 12670, delar: 4, gram: 900, tid: 16 },      // DF: rullbandet från tippen till kolfiberkvarnen, ca 7 600 kr
  kolfskrivare: { ritning: 8330, delar: 5, gram: 1000, tid: 18 },
  guldskrivare: { ritning: 8330, delar: 5, gram: 1200, tid: 20 },   // A-069 §4: priset räknas om av värdetrappan (dag 19)  // DF: ca 5 000 kr
  kolfslang: { ritning: 9170, delar: 3, gram: 800, tid: 16 },      // DF: slangfördelaren, ca 5 500 kr
  lastarm: { ritning: 7500, delar: 4, gram: 1000, tid: 18 },
  robotarm: { ritning: 9170, delar: 4, gram: 1000, tid: 18 },
  saljlada: { ritning: 670, delar: 2, gram: 500, tid: 12 },
  utlada: { ritning: 15000, delar: 3, gram: 800, tid: 16 },
  skrivare3: { ritning: 5833, delar: 6, gram: 1200, tid: 20 },   // BI: 5 000 → 3 500 kr
  skrivare2: { ritning: 833, delar: 5, gram: 900, tid: 18 },   // CF: 800 → 500 kr, dag 4
};
export const ROST_FART = { rolf: 1.5, pappa: 1.4, mamma: 1.35, du: 1.85, berattare: 1.25 };   // DT: berättaren läses 25 % snabbare (ffmpeg atempo i verktyg/roster_el_pack.py – samma tonhöjd), gäller introt och spelet
export const STROM_INGEN = 4;           // DT steg 0: ingen lagring – ungefär en sekunds print, skrivaren går bara medan man trampar
export const STROM_POWERBANK = 20;      // DT steg 1: powerbanken från Ali – ungefär en nyckelring (5 s × 4/s)
export const FORSTA_PRINT_S = 5;        // DT: de tre första printarna tar ca 5 s (lagom att trampa)

// ---------- EE: flaskhalsstyrd upplåsning ----------
// Nästa sak i en kedja låses upp när kedjans flaskhals har tagit stopp så här länge (s) eller så många gånger (bara: turer med fulla händer, inkomst: sålda nyckelringar)
export const FLASK_GRANS = { bara: 6, mala: 10, trampa: 10, strom: 15, skrivare: 75, inkomst: 6, skrivare_rod: 75, skrivare_kolf: 75 };   /* A-069 §3: linjernas egna skrivarkedjor */   // efter AX 17/11: boten vevar och trampar mycket snabbare än ett barn – ett barn når gränsen senare, ordningen är densamma
// ordningen i varje kedja – en i taget
export const FLASK_KEDJA = {
  bara: ['grip', 'ryggkorg', 'matarband', 'magnet'],   // sopsäcken från Rolf (EL 28), kärran är Rolfs tack (A-050), sophållaren töms med kärran

  mala: ['kvarnmotor', 'turbomotor'],
  trampa: ['vindsnurra'],
  strom: ['cykelbatteri', 'vindsnurra2', 'vindsnurra3', 'sol', 'bank', 'solpark', 'bank2', 'solpark2', 'vindkraft'],   /* EE tillägg 2: ett batteri för alla linjer – ny kapacitet på ny plats: taket (d6) → gården (d8–9) → bank 2 (d12) → ängen (d17) → backen (d19) */   // EE tillägg: vindsnurra 3 (blå nivå 5), sedan sol – Skrivare M och L drar mer än vinden ger
  skrivare: ['rullstall', 'trim_skrivare', 'skrivare2', 'trim_skrivare2', 'trim_skrivare3', 'skrivare3', 'kolfskrivare', 'guldskrivare'],   /* A-069 §4: guldskrivaren av skrivarflaskhalsen när den första guldrullen finns (d19) */   /* EE tillägg 2: L efter PETG-skrivaren (d8), kolfiberskrivaren av flaskhalsen (d12) */   /* EE: rullställ och skrivartrim dag 2, Skrivare M dag 3, trim 2 dag 4, trim 3 dag 5, L dag 6 */
  inkomst: ['kruka'],
  skrivare_rod: ['trim_rod1', 'trim_rod2', 'trim_rod3'],      /* A-069 §3: röda linjens skrivare hinner inte – trim röd 1 (d9) → 2 (d10) → 3 */
  skrivare_kolf: ['trim_kolf1', 'trim_kolf2', 'trim_kolf3'],   /* A-069 §3: kolfiberskrivarna – trim 1–3 dag 13–15 */
};
// reserv: står ett mål och väntar på sin flaskhals så här länge (s spelad tid) låses det upp ändå, så att ingen fastnar
export const FLASK_RESERV = 180;

// ============================================================================
// A-067: värdetrappan – från kolfiber är varje linje värd ca ×6 per gram mot linjen före,
// och priserna i kapitel 3–4 och efterspelet räknas fram ur inkomsten:  pris = målminuter × inkomst per minut.
// verktyg/ekonomi.mjs skriver tabellen (dag, mål, pris, inkomst, minuter) och flaggar DYR DAG, BILLIG DAG och PLATT STEG.
// ============================================================================
export const TRAPP_STEG = 6;
export const VARDE_PER_GRAM = { bla: 0.25, rod: 1.45, kolf: 8, guld: 50, tippium: 300 };   // kr per gram hos Ali (blå och röd som förut)
// Mätningen som allt utgår från (AX g53/g54, b3544ff): kr per minut för boten och dagarnas längd med de gamla priserna.
export const INKOMST_AX = { 1: 144, 2: 602, 3: 1138, 4: 3866 };
export const DAG_MIN_AX = { 11: 4.4, 12: 4.2, 13: 3.1, 14: 5.2, 15: 18.0, 16: 4.9, 17: 3.9, 18: 3.9, 19: 3.7, 20: 1.6, 21: 0.9, 22: 14.7, 23: 10 };
export const DAG_MAL_MIN = 10;   // målet för en dag (8–15 min, aldrig under 6 eller över 20)
// Gram som fabriken gör per minut (inkomsten delad med det gamla kr per gram): kapitel 3 ≈ 430 g/min kolfiber, guldlinjen ≈ 1 300 g/min.
export const GRAM_PER_MIN = { kolf: 430, guld: 1290, tippium: 1290 };
// Guldlinjen tjänar först när guldskrivaren finns (A-069, dag 19). Tills dess är kapitel 4 kolfiber + råguld, och priserna räknas på det.
// Sätt true när guldskrivaren är byggd – då räknas kapitel 4 och efterspelet om på guldets ×6.
export const GULDLINJEN = false;
// AX 91 (nytt spel dag 1 → 14): kolfibret ger 7 000 kr/min dag 12 medan kajakerna från tippen räcker, 3 300 dag 13 och 860 dag 14 när de är slut
// (sopbilen lämnar 2–3 om dagen). Snittet dag 12–14 är ca 2 600 kr/min, och med tiden boten går och väntar ca 2 000. Det är fabrikens takt.
export const KOLF_INKOMST_AX = 1200;   // AX 94: med 2 000 svalt boten på pengar dag 15 (skräpet och kajakerna slut) – hellre en kort dag än en dag som står still
export const kapitelFor = (dag) => dag <= 5 ? 1 : dag <= 10 ? 2 : dag <= 15 ? 3 : 4;
// Förväntad inkomst per minut dag för dag med den nya trappan (verktyg/ekonomi.mjs skriver ut den)
export function inkomstPerMin(dag) {
  if (dag <= 10) return INKOMST_AX[kapitelFor(dag)];
  if (dag === 11) return 700;                                           // kolfiberlinjen byggs – röd linje betalar
  if (dag === 12) return Math.round(GRAM_PER_MIN.kolf * VARDE_PER_GRAM.kolf * 0.7);   // första kolfibern, halva dagen
  if (dag <= 17) return KOLF_INKOMST_AX;                                // kolfiber, som boten faktiskt tjänar (kajakerna tar slut)
  if (!GULDLINJEN) return KOLF_INKOMST_AX;                              // utan guldskrivaren: bara kolfiberfabriken
  if (dag === 18) return Math.round(GRAM_PER_MIN.guld * VARDE_PER_GRAM.guld * 0.4);   // diamantkvarnen först, sedan guld halva dagen
  if (dag <= 22) return GRAM_PER_MIN.guld * VARDE_PER_GRAM.guld;
  return GRAM_PER_MIN.tippium * VARDE_PER_GRAM.tippium * 0.5;          // efterspelet: Tippium (labbet) halva tiden
}
// Pris med samma målminuter som förut, men i den nya inkomsten – och dagar som var för korta (eller långa) justeras mot DAG_MAL_MIN.
// Justering efter AX 83 (dag 16–21 med den nya trappan): boten tjänar ca 4 000 kr/min dag 18 men diamantkvarnen och guldrullen tar ca 8 min först,
// och dag 20 tog kaminen bara 3,5 min. Faktorn läggs på trappans pris för målet.
export const AX_JUSTERING = { husgrund: 0.6, kamin: 2.5, huset: 0.7 };   // huset efter AX 87: dag 19 tog 24 min med vindkraftverket och guldskrivaren
export function trappPris(gammalt, dag) {
  const kap = kapitelFor(Math.min(dag, 22)), langd = Math.min(7, Math.max(0.6, DAG_MAL_MIN / (DAG_MIN_AX[dag] || DAG_MAL_MIN)));
  return runda(gammalt * inkomstPerMin(dag) / INKOMST_AX[kap] * langd);
}
// Avrundning som ser ut som priser: 2–3 värdesiffror
export function runda(n) { const s = n < 1000 ? 10 : n < 10000 ? 50 : n < 100000 ? 500 : n < 1000000 ? 5000 : 50000; return Math.max(s, Math.round(n / s) * s); }
// Den första maskinen i en ny linje kostar ca 10 min av den FÖRRA linjens inkomst (den betalas med gamla pengar)
export const FORSTA_I_LINJEN = { kolfkvarn: 11, diamantkniv: 18 };
const forstaPris = (dag) => runda(10 * inkomstPerMin(dag - 1));
// Vilken dag varje mål köps på (för trappPris). Ritningar anges som Alis pris (PRIS_SKALA räknas bort nedan).
export const TRAPP_MAL = {
  maskin: { kolfband: 11, kolfskrivare: 12, kolfslang: 12, lastarm: 13, robotarm: 14, utlada: 14, jetmotor: 14, guldskrivare: 19, gamingbod: 13, vindkraft: 19, solpark2: 17, bank2: 17 },
  mark: { egen: 16, oster: 17, husgrund: 18, huset: 19, norr: 23, tippkant: 23, tippen: 23, rolfhus: 23 },
  lyx: { gamingstol: 13, hogtalare: 13, gamingbord: 13, ledpinne: 13, akustik: 13, neonskylt: 13, figurhylla: 13, projektor: 15, arkad: 15, simrig: 15, biljard: 15, dator: 13, jacuzzi: 15, kamin: 20 },
  recept: { pkajak: 12, t_vaxthus: 20 },
  present: { p_trummor: 13, p_konsert: 15, p_resa: 17 },
  proto: 23,
};
// Varor i de nya linjerna: gram × linjens kr per gram × varans faktor
export const LINJE_VAROR = { n3_stol: ['kolf', 1.0], pkajak: ['kolf', 1.0], n4_staty: ['guld', 1.0], n5_drake: ['tippium', 1.0] };
for (const [id, [linje, f]] of Object.entries(LINJE_VAROR)) { const v = VARA_SIFFROR[id]; if (v) v.pris = runda(v.gram * VARDE_PER_GRAM[linje] * f); }
for (const [id, dag] of Object.entries(TRAPP_MAL.recept)) { const v = VARA_SIFFROR[id]; if (v?.recept) v.recept = Math.round(trappPris(v.recept * PRIS_SKALA, dag) / PRIS_SKALA); }
for (const [id, dag] of Object.entries(TRAPP_MAL.present)) { const v = VARA_SIFFROR[id]; if (v?.present) v.present = trappPris(v.present, dag); }
for (const v of Object.values(VARA_SIFFROR)) if (v.protoPris) v.protoPris = trappPris(v.protoPris, TRAPP_MAL.proto);
for (const [id, dag] of Object.entries(TRAPP_MAL.maskin)) { const m = MASKIN_SIFFROR[id]; if (m?.ritning) m.ritning = Math.round(trappPris(m.ritning * PRIS_SKALA, dag) / PRIS_SKALA); }
for (const [id, dag] of Object.entries(FORSTA_I_LINJEN)) { const m = MASKIN_SIFFROR[id]; if (m) m.ritning = Math.round(forstaPris(dag) / PRIS_SKALA); }
for (const [id, dag] of Object.entries(TRAPP_MAL.mark)) { const m = MARK_PRIS[id]; if (m) m.pris = runda(trappPris(m.pris, dag) * (AX_JUSTERING[id] || 1)); }
// Lyx-recept (gamingsakerna, jacuzzin, kaminen) och andra priser som stod i spel.js (A-067 §3: en enda källa)
export const LYX_RECEPT = { gamingstol: 900, hogtalare: 700, kamin: 3330, kyl: 1200, gamingbord: 1800, soffa: 2200, ledpinne: 500, akustik: 600, neonskylt: 900, figurhylla: 1200, projektor: 2500, arkad: 3000, simrig: 4500, biljard: 5000, jacuzzi: 15000, dator: 3500 };
for (const [id, dag] of Object.entries(TRAPP_MAL.lyx)) LYX_RECEPT[id] = Math.round(runda(trappPris(LYX_RECEPT[id] * PRIS_SKALA, dag) * (AX_JUSTERING[id] || 1)) / PRIS_SKALA);
export const DIREKT_RITNING = { webbdator: 500, hylla: 250, spis: 600, gs_tak: 400, gs_isolering: 500, gs_dorr: 300 };
export const TAPET_PRIS = [500, 900, 1500, 3000, 6000];
// Trimsatser: bas och växt per linje. Kolfiberns bas följer trappan (dag 13).
export const TRIM_KOST = { kvarn: [300, 1.6], skrivare: [400, 1.6], pris: [500, 1.7], sopbil: [250, 1.5], batteri: [200, 1.5], utlager: [120, 1.9], band: [600, 1.6],
  kvarn_rod: [900, 1.6], skrivare_rod: [1000, 1.6], torn_rod: [800, 1.7], kvarn_kolf: [1800, 1.6], skrivare_kolf: [2000, 1.6], torn_kolf: [1600, 1.7], arm: [700, 1.65] };
for (const id of ['kvarn_kolf', 'skrivare_kolf', 'torn_kolf']) TRIM_KOST[id][0] = trappPris(TRIM_KOST[id][0], 13);
// Råguldet (A-067 §1): Ali köper guldsanden från dag 17. Priset är satt så att vaskning för hand ger ungefär lika mycket per minut
// som fabriken dag 17 (ca 7 fynd per minut vid floden → ca 3 400 kr/min). Det är ca 1 % av ett gram guldprint per gram, inte 25 %: se loggen.
export const RAGULD = { dag: 17, pris: runda(inkomstPerMin(17) / 7) };
// Rudolfs böter: taket är 10 minuter av kapitlets inkomst i stället för 2 500 kr
export const BOTER_MAX_MIN = 10;
export const boterMax = (dag) => Math.max(BOTER_MAX, runda(BOTER_MAX_MIN * inkomstPerMin(dag)));
// "Ali köper den för 300 kr" (en tvåa av ett fynd) följer trappan
export const FYND_TVAA = (dag) => dag >= 11 ? trappPris(300, Math.min(dag, 22)) : 300;
// Dag 21 var 0,9 min (folkbokföringen var gratis). Lagfarten på huset blir dagens mål: ca 6 min av guldlinjens inkomst.
export const LAGFART = runda(6 * inkomstPerMin(21));
