// =============================================================
//  gardplan.js – punkt AM: gårdens plan (FÖRSLAG, granskas innan det byggs)
//
//  Norr = bak (−z), vägen i söder (+z), tippen i väster (−x). Tomten går från −21 till +21.
//  FABRIKEN i väster (x −20 … −3): fem linjer, en per filament. Linje 1 närmast infarten, linje 5 längst bak.
//  Varje linje har samma platser i samma ordning, väster → öster:
//    container → kvarn → extruder → spolhållare → skrivarplats 1–4 → utband
//  HEMMET i öster (x 5 … 20): skjulet, kistan, sängen, boden, uteplatsen. Huset på ängen ligger direkt intill.
//  INFARTEN i mitten: skylten, marktavlan och stigen mellan zonerna.
//  Måtten är i meter: x/z = mitten på platsen, b = bredd (x), d = djup (z).
// =============================================================

export const LINJER = [
  { nr: 1, namn: 'Blå linjen', filament: 'Blå plast', farg: '#4cc9f0', z: 11.5, kapitel: 1, text: 'Dag 1' },
  { nr: 2, namn: 'Röda linjen', filament: 'Röd PETG', farg: '#e5484d', z: 6, kapitel: 2, text: 'Kapitel 2' },
  { nr: 3, namn: 'Gröna linjen', filament: 'Grön kolfiber', farg: '#3ccf73', z: 0.5, kapitel: 4, text: 'Kapitel 4' },
  { nr: 4, namn: 'Guldlinjen', filament: 'Guldkomposit', farg: '#e9b949', z: -5, kapitel: 4, text: 'Kapitel 4' },
  { nr: 5, namn: 'Titanlinjen', filament: 'Titan', farg: '#b8c4d6', z: -10.5, kapitel: 4, text: 'Kapitel 4 / efterspelet' },
];

// platserna i varje linje (x = mitten, b × d = storlek). Skrivarplatserna är stora nog för en L-skrivare.
export const LINJE_PLATSER = [
  { typ: 'container', namn: 'Skräpcontainer', x: -18.3, b: 1.8, d: 1.8 },
  { typ: 'kvarn', namn: 'Kvarn', x: -16.3, b: 2.0, d: 1.8 },
  { typ: 'extruder', namn: 'Extruder', x: -15.0, b: 1.0, d: 1.2 },
  { typ: 'spolhallare', namn: 'Spolhållare', x: -13.8, b: 1.0, d: 1.2 },
  { typ: 'skrivare1', namn: 'Skrivarplats 1', x: -10.5, b: 1.6, d: 1.6 },
  { typ: 'skrivare2', namn: 'Skrivarplats 2', x: -8.7, b: 1.6, d: 1.6 },
  { typ: 'skrivare3', namn: 'Skrivarplats 3', x: -6.9, b: 1.6, d: 1.6 },
  { typ: 'skrivare4', namn: 'Skrivarplats 4', x: -5.1, b: 1.6, d: 1.6 },
  { typ: 'utband', namn: 'Utband', x: -3.85, b: 0.7, d: 0.8 },
];

// alla fasta platser i fabriken: fem linjer + det som är gemensamt
export const FABRIK_PLATSER = [
  ...LINJER.flatMap((l) => LINJE_PLATSER.map((p) => ({ id: `L${l.nr}-${p.typ}`, linje: l.nr, kapitel: l.kapitel, typ: p.typ, x: p.x, z: l.z, b: p.b, d: p.d,
    text: `Här ska ${p.namn.toLowerCase().replace('skrivarplats', 'skrivare')} stå`, farg: l.farg }))),
  { id: 'matarband', typ: 'matarband', kapitel: 3, x: -20.3, z: 1.5, b: 0.8, d: 25, text: 'Matarband från tippen – kapitel 3', farg: '#c0612b' },
  { id: 'lastarm', typ: 'lastarm', kapitel: 3, x: -20.3, z: 15.5, b: 1.6, d: 1.6, text: 'Lastarmen vid tippen – kapitel 3', farg: '#c0612b' },
  { id: 'samlingsband', typ: 'samlingsband', kapitel: 3, x: -2.9, z: 1.0, b: 0.8, d: 24, text: 'Samlingsband till lådan – kapitel 3', farg: '#c0612b' },
  { id: 'saljlada', typ: 'saljlada', kapitel: 1, x: -2.9, z: 14.6, b: 1.6, d: 1.4, text: 'Säljlådan (dag 3) – leveranslådan i kapitel 3', farg: '#e9b949' },
  { id: 'cykel', typ: 'cykel', kapitel: 1, x: -12.6, z: 13.9, b: 1.0, d: 1.8, text: 'Cykeln', farg: '#4cc9f0' },
  { id: 'sol', typ: 'sol', kapitel: 1, x: -18.2, z: -17.5, b: 2.2, d: 1.6, text: 'Solpanelen (dag 4)', farg: '#ffd43b' },
  { id: 'bank', typ: 'bank', kapitel: 2, x: -15.4, z: -17.5, b: 1.4, d: 1.2, text: 'Batteribanken', farg: '#ffd43b' },
  { id: 'solpark', typ: 'solpark', kapitel: 2, x: -11.0, z: -17.5, b: 5.0, d: 2.4, text: 'Solcellsparken', farg: '#ffd43b' },
  { id: 'sol2', typ: 'sol', kapitel: 2, x: -18.2, z: -14.6, b: 2.2, d: 1.6, text: 'En solpanel till', farg: '#ffd43b' },
  { id: 'bank2', typ: 'bank', kapitel: 2, x: -15.4, z: -14.6, b: 1.4, d: 1.2, text: 'En batteribank till', farg: '#ffd43b' },
  { id: 'solpark2', typ: 'solpark', kapitel: 3, x: -11.0, z: -14.4, b: 5.0, d: 2.4, text: 'Solcellspark 2', farg: '#ffd43b' },
  { id: 'solpark3', typ: 'solpark', kapitel: 3, x: -5.6, z: -17.5, b: 5.0, d: 2.4, text: 'Solcellspark 3', farg: '#ffd43b' },
  { id: 'fabrikshall', typ: 'fabrikshall', kapitel: 4, x: -11.5, z: 8.75, b: 18.4, d: 9.5, text: 'Fabrikshallen – tak och väggar över linje 1–2 (senare)', farg: '#9aa3b5', last: true },
];

// hemmet: fri placering inom zonen. Skjulet ligger nära kvarnen och Ali, den bakre delen (norr) sparas till gamingboden och mysiga saker
export const HEM_ZON = { minX: 5, maxX: 20, minZ: -19, maxZ: 15 };
export const HEM_PLATSER = [
  { id: 'skjul', typ: 'skjul', x: 9, z: 7, b: 3.6, d: 3.0, text: 'Skjulet – kistan och sängen står inne' },
  { id: 'bod', typ: 'bod', x: 9, z: 2.4, b: 3.2, d: 2.8, text: 'Gamingboden (kapitel 3) – norr om skjulet' },
  { id: 'uteplats', typ: 'uteplats', x: 9, z: 10.6, b: 4, d: 2.4, text: 'Uteplatsen framför dörren' },
  { id: 'huset', typ: 'huset', x: 26, z: 0, b: 8, d: 6, text: 'Huset på ängen (kapitel 4) – hemmet växer österut' },
];

// infarten mot vägen: skylten (som i dag), marktavlan och stigen mellan zonerna
export const INFART = [
  { id: 'skylt', typ: 'skylt', x: -3.5, z: 20.4, b: 1.2, d: 0.6, text: 'Skylten' },
  { id: 'marktavla', typ: 'marktavla', x: 1.5, z: 19.8, b: 1.4, d: 0.5, text: 'Marktavlan' },
  { id: 'stig', typ: 'stig', x: 1, z: 1, b: 2, d: 38, text: 'Stigen mellan fabriken och hemmet' },
];
