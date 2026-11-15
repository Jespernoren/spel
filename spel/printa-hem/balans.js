// ============================================================================
// Soptippsvägen 1 – balans.js
// Alla siffror som styr progressionen och ekonomin. spel.js läser härifrån.
// Ändra här för att balansera – inget annat i koden behöver röras.
// (Punkt T i bygglistan: bara flytt, inga värden ändrade.)
// ============================================================================

// ---------- Priser hos Ali ----------
// PRIS_SKALA: Ali betalar runt 60 kr per rulle i början, så ritningar och lyx-recept är skalade efter det.
// Varje `ritning` i MASKIN_SIFFROR och varje `recept` på en lyxvara (VAROR med lyx: true) som är 150 kr
// eller mer multipliceras med PRIS_SKALA när spelet startar och avrundas till närmaste 10 kr.
//   Exempel: tak `ritning: 420`  →  420 × 0,6 = 252  →  Ali tar 250 kr.
//            Skrivare M `ritning: 1330`  →  Ali tar 800 kr.   Jacuzzi-recept 30000  →  18 000 kr.
// Under 150 kr (t.ex. dörr 120, grip 50) gäller siffran som den står.
// Vill du sätta ett pris som det syns i spelet: dela med 0,6 (800 kr  →  skriv 1330).
export const PRIS_SKALA = 0.6;
export const MATTNAD = 0.9, MATTNAD_GOLV = 0.5;   // varje såld vara av samma sort samma dag sänker Alis pris 10 % (lägst 50 % av fullpris) – nollställs på morgonen
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
export const TRIVSEL_MAL = 150;   // trivselmålet i kapitel 1
export const RESPEKT_NIVAER = [[25, 'Filament nivå 2 – röd PETG'], [60, 'Filament nivå 3 – grön kolfiber'], [110, 'Filament nivå 4 – guldkomposit'], [180, 'Filament nivå 5 – titanblandning']];

// ---------- Rolf ----------
// Belöningen i postlådan för gåva 1–4 (kapitel 1). 'mynt:N' = kronor, 'extra' = Rolf lägger fler fynd på tippen.
export const ROLF_BELONING = [['mynt:60'], ['mynt:120'], ['mynt:250', 'extra'], ['mynt:400', 'extra']];
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
export const SOLPARK_PER_S = 14;        // en solcellspark: sex paneler – mer än du hinner trampa
export const MOTOR_STROM = 1;           // ström per sekund när motorn mal

// ---------- Bära och förvara ----------
export const BARA_SKRAP = [4, 8, 14, 22];      // händer, grip, grip + sopsäck, magnet
export const HOTBAR = 9;                // platser i verktygsraden (plats 1 = verktyget/famnen)
export const KISTA_PLATSER = 27, STACK = 20;   // kistan har 27 platser, max 20 av samma sak per plats
export const RYGG_BAS = 18, RYGG_STOR = 27;     // ryggsäcken: 18 platser, 27 med Större ryggsäck
export const UT_MAX = 12;   // så många färdiga saker som får stå på skrivaren innan den slutar upprepa

// ---------- Automation ----------
export const LASTARM_TID = 2.5;   // sekunder per plock för lastarmen vid tippen (×0,85 per armtrim)
export const BAND_BAS = 9;        // platser på rullbandet från tippen utan trim (+3 per bandtrim)
export const LASTARM_MAX = 700;   // gram lastarmen orkar lyfta utan trim – tar dunkar men inte tunnor (×1,7 per armtrim)

// ---------- Marken (Bengt-Åke) ----------
export const MARK_PRIS = {
  egen: { pris: 30000, respekt: 0 },
  oster: { pris: 42000, respekt: 0 },
  tippkant: { pris: 60000, respekt: 70 },
  tippen: { pris: 120000, respekt: 110 },
  rolfhus: { pris: 80000, respekt: 140 },
  huset: { pris: 60000, respekt: 0 },
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
  n2_vas: { gram: 600, tid: 24, pris: 320, recept: 600 },
  n2_hjalm: { gram: 900, tid: 30, pris: 560, recept: 1200 },
  n2_neon: { gram: 1200, tid: 40, pris: 900, recept: 2400 },
  n2_paddel: { gram: 2000, tid: 50, pris: 2300, recept: 4500 },
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
  kruka: { gram: 400, tid: 18, pris: 60 },
  pall: { gram: 1000, tid: 32, pris: 170 },
  rulle: { gram: 1000, tid: 0, pris: 0 },
  mobilstall: { gram: 300, tid: 12, pris: 50, recept: 100 },
  fagelholk: { gram: 800, tid: 26, pris: 170, recept: 300 },
  t_spalje: { gram: 1500, tid: 30, pris: 0, recept: 1 },       // punkt N: ritningen kommer från Rolf (recept: 1 = måste ha ritningen)
  t_bevattning: { gram: 1200, tid: 26, pris: 0, recept: 1 },
  t_vaxthus: { gram: 4000, tid: 60, pris: 0, recept: 1 },
  fagelskramma: { gram: 600, tid: 20, pris: 60, recept: 250 },   // punkt I: Göran struntar i den
  fagelbad: { gram: 900, tid: 28, pris: 90, recept: 330 },        // punkt I: Göran flyttar in
  lampskarm: { gram: 1200, tid: 34, pris: 320, recept: 600 },
  dronare: { gram: 1500, tid: 40, pris: 480, recept: 1000 },
  skateboard: { gram: 2000, tid: 50, pris: 780, recept: 1500 },
  gitarr: { gram: 3000, tid: 64, pris: 1400, recept: 2500 },
  cykelram: { gram: 5000, tid: 80, pris: 2900, recept: 4500 },
  pkajak: { gram: 12000, tid: 120, pris: 9000, recept: 10000 },
};

// ---------- Maskiner och 3D-modeller: ritning = råpris (≥ 150 skalas med PRIS_SKALA), delar, gram per del, tid per del ----------
export const MASKIN_SIFFROR = {
  kvarnmotor: { ritning: 50, delar: 1, gram: 500, tid: 10 },
  solpark: { ritning: 4000, delar: 4, gram: 2400, tid: 24 },
  bank: { ritning: 1330, delar: 2, gram: 600, tid: 12 },
  korg: { ritning: 90, delar: 2, gram: 500, tid: 12 },
  ryggsack2: { ritning: 670, delar: 2, gram: 500, tid: 12 },
  karra: { ritning: 200, delar: 3, gram: 900, tid: 16 },
  petgkvarn: { ritning: 3000, delar: 3, gram: 600, tid: 16 },
  skrivarepetg: { ritning: 3000, delar: 5, gram: 900, tid: 18 },
  petgband: { ritning: 900, delar: 3, gram: 1000, tid: 16 },
  magnet: { ritning: 4000, delar: 3, gram: 1000, tid: 16 },
  turbomotor: { ritning: 400, delar: 3, gram: 800, tid: 14 },
  jetmotor: { ritning: 13330, delar: 4, gram: 1200, tid: 18 },
  spolhallare: { ritning: 120, delar: 2, gram: 400, tid: 10 },
  spolhallare2: { ritning: 1170, delar: 3, gram: 700, tid: 12 },
  spolhallare3: { ritning: 1500, delar: 4, gram: 900, tid: 14 },
  matarband: { ritning: 220, delar: 3, gram: 700, tid: 14 },
  rullstall: { ritning: 180, delar: 2, gram: 500, tid: 12 },
  hardkniv: { ritning: 1670, delar: 2, gram: 600, tid: 12 },
  diamantkniv: { ritning: 10000, delar: 3, gram: 1000, tid: 16 },
  stortratt: { ritning: 150, delar: 2, gram: 600, tid: 12 },
  dorr: { ritning: 120, delar: 2, gram: 500, tid: 14 },
  vaggar: { ritning: 220, delar: 1, gram: 700, tid: 16 },
  tak: { ritning: 420, delar: 3, gram: 400, tid: 16 },
  fonster: { ritning: 150, delar: 2, gram: 700, tid: 14 },
  golv: { ritning: 140, delar: 3, gram: 800, tid: 14 },
  taklampa: { ritning: 90, delar: 1, gram: 400, tid: 10 },
  tapeter: { ritning: 1330, delar: 4, gram: 500, tid: 12 },
  gamingbod: { ritning: 20000, delar: 6, gram: 700, tid: 20 },
  grip: { ritning: 50, delar: 1, gram: 400, tid: 10 },
  bord: { ritning: 120, delar: 3, gram: 700, tid: 14 },
  sol: { ritning: 670, delar: 3, gram: 800, tid: 14 },
  rullband: { ritning: 12670, delar: 4, gram: 900, tid: 16 },
  lastarm: { ritning: 7500, delar: 4, gram: 1000, tid: 18 },
  robotarm: { ritning: 9170, delar: 4, gram: 1000, tid: 18 },
  saljlada: { ritning: 250, delar: 2, gram: 500, tid: 12 },
  utlada: { ritning: 15000, delar: 3, gram: 800, tid: 16 },
  skrivare3: { ritning: 8330, delar: 6, gram: 1200, tid: 20 },
  skrivare2: { ritning: 1330, delar: 5, gram: 900, tid: 18 },
};
