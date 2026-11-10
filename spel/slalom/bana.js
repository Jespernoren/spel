// ⛷️ Slalom – banan och fysiken (ingen grafik här, så den kan testas fristående)
//
// Banan byggs av "segment" i ordning nerför backen. Lek gärna med listorna i BACKAR!
//   ['platt', längd]                lugnt och nästan platt
//   ['backe', längd]                vanlig lutning
//   ['brant', längd]                brant – här går det fort!
//   ['vagor', längd, höjd, våglängd]  kullar på rad (rollers)
//   ['sving', längd, sidled]        doserad kurva (bank) åt höger (+) eller vänster (−)
//   ['hopp', 'liten'|'mellan'|'stor'] hopp med kicker, deck och landning
//   ['mal', längd]                  utåkning efter mål

// ================= JUSTERBARA VÄRDEN =================
export const BANBREDD = 9;        // halva bredden på banan (meter)
export const G = 16;              // gravitation (lite starkare än på riktigt = mer fart i hoppen)
const LUFTMOTSTAND = 0.0058;      // högre = lägre toppfart
const HUK_MOTSTAND = 0.62;        // hukande minskar luftmotståndet till så här mycket
const SVANG_BROMS = 0.35;         // hur mycket svängar bromsar
const SVANG_MAX = 0.75;           // max vinkel ut från banans riktning (radianer)
const SVANG_SNABBHET = 4.5;
const AUTOSTYR = 0.85;            // hur mycket åkaren följer kurvan själv (1 = helt)
const BANK_DRAG = 0.3;            // hur mycket doseringen drar dig mot innerkurvan
const POP_FONSTER = 7;            // meter före hoppkanten där Enter räknas
const POP_MAX = 2.6;              // extra uppåtfart vid perfekt pop
const OLLIE = 4.2;                // uppåtfart när man hoppar på plan mark
const MJUK_LANDNING = 3.5;        // under detta = mjuk landning (fartbonus)
const HARD_LANDNING = 8; 
const HARD_I_LANDNING = 13;      // mer förlåtande när man landar i själva landningsbacken         // över detta = hård landning (tappar fart)
const MIN_FART = 3;
const HOPP_STYRNING = 0.75;      // 0–1: hur mycket farten i avstampet styrs mot hoppets designfart (gör hoppen förutsägbara)

export const HOPP = {
  liten:  { h: 1.0, kicker: 5, deck: 5,  landning: 13, fall: 2.0 },
  mellan: { h: 1.5, kicker: 6, deck: 7,  landning: 15, fall: 3.0 },
  stor:   { h: 2.0, kicker: 7, deck: 9,  landning: 18, fall: 4.2 },
};

const LUTNING = { platt: 0.1, backe: 0.2, brant: 0.38, vagor: 0.2, sving: 0.18, hopp: 0.18, mal: 0.06, start: 0.08 };

// medalj = [guld, silver, brons] i sekunder
export const BACKAR = {
  gron: {
    namn: 'Gröna backen', ikon: '🟢', lutFaktor: 0.6, portbredd: 5.2, portSidled: 2.2, portAvstand: 26,
    medalj: [0, 0, 0],
    segment: [['platt', 25], ['backe', 35], ['vagor', 44, 0.45, 13], ['sving', 60, 10], ['hopp', 'liten'],
      ['backe', 30], ['sving', 60, -12], ['vagor', 39, 0.5, 13], ['hopp', 'liten'], ['backe', 35], ['sving', 45, 8], ['mal', 50]],
  },
  bla: {
    namn: 'Blå backen', ikon: '🔵', lutFaktor: 0.82, portbredd: 4.4, portSidled: 3, portAvstand: 24,
    medalj: [0, 0, 0],
    segment: [['platt', 20], ['backe', 30], ['vagor', 52, 0.65, 13], ['sving', 55, 12], ['hopp', 'mellan'], ['brant', 25],
      ['sving', 55, -13], ['hopp', 'mellan'], ['vagor', 39, 0.7, 13], ['sving', 50, 10], ['hopp', 'mellan'], ['backe', 30], ['mal', 50]],
  },
  svart: {
    namn: 'Svarta backen', ikon: '⚫', lutFaktor: 1, portbredd: 3.8, portSidled: 3.6, portAvstand: 22,
    medalj: [0, 0, 0],
    segment: [['platt', 18], ['brant', 30], ['vagor', 48, 0.7, 13], ['backe', 15], ['hopp', 'stor'], ['sving', 55, 14], ['backe', 10], ['sving', 55, -15], ['brant', 35],
      ['hopp', 'stor'], ['vagor', 48, 0.75, 13], ['sving', 50, 11], ['hopp', 'stor'], ['brant', 30], ['hopp', 'mellan'], ['backe', 20], ['mal', 50]],
  },
};
// ======================================================

export const STEG = 0.5; // meter mellan mätpunkterna i höjdkartan

const smooth = (t) => t * t * (3 - 2 * t);
const klamp = (v, a, b) => Math.max(a, Math.min(b, v));

// Bygger banans höjdkarta. d = sträcka nerför backen (d = -z i 3D-världen).
export function byggBana(id) {
  // Bygg först med standardhopp, forma sedan om varje hopp efter farten man har in mot det
  const B = BACKAR[id];
  const hoppParam = B.segment.filter((x) => x[0] === 'hopp').map((x) => ({ ...HOPP[x[1]] }));
  let bana = byggMedHopp(id, hoppParam);
  for (let j = 0; j < hoppParam.length; j++) {
    const in_ = farDitHopp(bana, j);
    if (!in_) break;
    formaHopp(hoppParam[j], in_.fart, in_.vy, B.lutFaktor);
    bana = byggMedHopp(id, hoppParam);
  }
  return bana;
}

// Simulerar ett åk (med perfekt pop) fram till hopp nr j och returnerar farten vid kanten
function farDitHopp(bana, j) {
  const s = nyAkare(bana); s.fart = 4;
  const dt = 1 / 120; // samma steg som spelet
  let port = 0;
  for (let t = 0; t < 200; t += dt) {
    const in_ = botStyr(s, bana, port, { pop: true });
    const f = s.d;
    const ev = fysik(s, bana, in_, dt);
    const p = bana.portar[port]; if (p && f < p.d && s.d >= p.d) port++;
    const av = ev.find((e) => e.typ === 'avstamp');
    if (av && s.nastaHopp === j) return { fart: s.fart / (1 + 0.05 * av.kvalitet), vy: s.vy - POP_MAX * av.kvalitet };
    if (s.d > bana.hopp[j].lapp + 3) return { fart: s.fart, vy: Math.max(2, s.vy) };
  }
  return null;
}

// Räknar ut deck och landning så att: utan pop landar man på decket (knuckle),
// med perfekt pop landar man mitt i landningsbacken.
function formaHopp(H, v, vy, lutFaktor = 1) {
  const lut = LUTNING.hopp * lutFaktor;
  H.v = v; H.vy = vy;
  const flyg = (vy0, malY) => { // sträcka tills banan (relativ höjd malY(x)) nås
    let x = 0, y = 0, vyy = vy0; const dt = 1 / 120;
    for (let t = 0; t < 4; t += dt) { x += v * dt; vyy -= G * dt; y += vyy * dt; if (vyy < 0 && y <= malY(x)) return x; }
    return x;
  };
  const utanPop = flyg(vy, (x) => -lut * x);
  H.deck = Math.max(3, utanPop * 1.1);
  // prova olika landningslängder tills pop-landningen hamnar ungefär mitt i landningen
  let L = 12;
  for (let k = 0; k < 25; k++) {
    const fall = Math.max(H.h + 0.5, L * 0.42 - H.h);
    const profil = (x) => -lut * x - (x < H.deck ? 0 : (H.h + fall) * smooth(Math.min(1, (x - H.deck) / L)));
    const medPop = flyg(vy + POP_MAX, profil);
    const andel = (medPop - H.deck) / L;
    if (andel > 0.4) L *= 1.1; else if (andel < 0.25) L *= 0.93; else break;
    L = Math.min(45, Math.max(10, L));
  }
  H.landning = L;
  H.fall = Math.max(H.h + 0.5, L * 0.42 - H.h);
}

function byggMedHopp(id, hoppParam) {
  const B = BACKAR[id];
  const typer = [['start', 12], ...B.segment];
  let hNr = 0;
  const hp = typer.map((s) => (s[0] === 'hopp' ? hoppParam[hNr++] : null));
  let totalt = 0;
  typer.forEach((s, k) => { totalt += s[0] === 'hopp' ? langdHopp(hp[k]) : s[1]; });
  const n = Math.ceil(totalt / STEG) + 400; // extra efter mål
  const Y = new Float32Array(n), CX = new Float32Array(n), BANK = new Float32Array(n), TYP = new Array(n);
  const hopp = [];
  const segment = [];
  let bas = 0, cx = 0, i = 0, d = 0;
  for (let sk = 0; sk < typer.length; sk++) {
    const s = typer[sk];
    const typ = s[0];
    const L = typ === 'hopp' ? langdHopp(hp[sk]) : s[1];
    const start = d;
    const cx0 = cx;
    const lut = LUTNING[typ] * (B.lutFaktor || 1); // lutFaktor: brantare/flackare backe
    let malDrop = 0;
    if (typ === 'hopp') {
      const H = hp[sk];
      hopp.push({ start, lapp: start + H.kicker, deckSlut: start + H.kicker + H.deck, slut: start + L, storlek: s[1], ...H });
      malDrop = H.fall;
    }
    segment.push({ typ, start, slut: start + L, param: s });
    const steg = Math.round(L / STEG);
    // jämna ut övergången mellan segment (inga skarpa kanter)
    for (let k = 0; k < steg && i < n; k++, i++) {
      const t = k / steg;
      const lokal = k * STEG;
      let extra = 0;
      if (typ === 'vagor') {
        const [, , hojd, vag] = s;
        const in_ = Math.min(1, lokal / vag, (L - lokal) / vag); // tona in/ut
        extra = Math.sin((lokal / vag) * Math.PI * 2) * hojd * Math.max(0, in_);
      } else if (typ === 'hopp') {
        const H = hp[sk];
        if (lokal < H.kicker) extra = H.h * Math.pow(lokal / H.kicker, 1.7);
        else if (lokal < H.kicker + H.deck) extra = H.h;
        else extra = H.h - (H.h + H.fall) * smooth(Math.min(1, (lokal - H.kicker - H.deck) / H.landning));
      } else if (typ === 'sving') {
        const dx = s[2];
        cx = cx0 + dx * smooth(t);
        const kurva = (dx * 6 * t * (1 - t)) / L; // derivata av smoothstep
        BANK[i] = -klamp(kurva * 0.9, -0.38, 0.38); // ytterkurvan höjs
      }
      Y[i] = bas + extra;
      CX[i] = cx;
      TYP[i] = typ;
      bas -= lut * STEG;
      d += STEG;
    }
    bas -= malDrop;
    if (typ === 'mal') { /* mållinjen ligger i början av mal-segmentet */ }
  }
  // utåkning
  for (; i < n; i++) { Y[i] = bas; CX[i] = cx; TYP[i] = 'mal'; bas -= 0.04 * STEG; }
  // jämna ut banken lite så kurvorna blir mjuka
  const B2 = Float32Array.from(BANK);
  for (let j = 6; j < n - 6; j++) { let sum = 0; for (let q = -6; q <= 6; q++) sum += BANK[j + q]; B2[j] = sum / 13; }

  const malSeg = segment.find((x) => x.typ === 'mal');
  const malD = malSeg.start;

  const bana = { id, B, Y, CX, BANK: B2, TYP, n, hopp, segment, malD, langd: n * STEG };
  bana.portar = byggPortar(bana);
  return bana;
}

function langdHopp(H) { return H.kicker + H.deck + H.landning + 6; }

function byggPortar(bana) {
  const { B } = bana;
  const portar = [];
  let sida = 1;
  for (let d = 40; d < bana.malD - 10; d += B.portAvstand) {
    // inga portar i hopp eller precis före dem
    const iHopp = bana.hopp.some((h) => d > h.start - 12 && d < h.slut + 4);
    if (iHopp) continue;
    const cx = cxVid(bana, d);
    const x = cx + sida * B.portSidled;
    portar.push({ d, x, bredd: B.portbredd, farg: portar.length % 2 ? 0x1e6bff : 0xe5383b });
    sida *= -1;
  }
  return portar;
}

const idx = (bana, d) => klamp(d / STEG, 0, bana.n - 1.001);
function lerp(arr, f) { const i = Math.floor(f); const t = f - i; return arr[i] + (arr[i + 1] - arr[i]) * t; }
export const cxVid = (bana, d) => lerp(bana.CX, idx(bana, d));
export const bankVid = (bana, d) => lerp(bana.BANK, idx(bana, d));
export const typVid = (bana, d) => bana.TYP[Math.round(idx(bana, d))];

// Markhöjd i punkten (x, d)
export function markY(bana, x, d) {
  const f = idx(bana, d);
  const u = x - lerp(bana.CX, f);
  let y = lerp(bana.Y, f) + lerp(bana.BANK, f) * u;
  const kant = Math.abs(u) - BANBREDD - 0.5;
  if (kant > 0) y += Math.pow(kant, 1.35) * 0.3;
  return y;
}
// Banans riktning (radianer, 0 = rakt ner, + = åt höger)
export function riktning(bana, d) { return Math.atan2(cxVid(bana, d + 2) - cxVid(bana, d - 2), 4); }

export function nyAkare(bana) {
  return { x: 0, d: 2, y: markY(bana, 0, 2), vy: 0, fart: 0, vinkel: 0, glid: 0, luft: false, luftTid: 0,
    pop: 0, popHopp: null, franHopp: false, snurr: 0, snurrar: false, vingel: 0, nastaHopp: 0 };
}

// Ett fysiksteg. in = { styr: -1..1, huka: bool, hopp: bool (nyss tryckt), aktiv: bool }
// Returnerar händelser som spelet kan visa/spela ljud för.
export function fysik(s, bana, in_, dt) {
  const h = [];
  const rikt = riktning(bana, s.d);
  // --- styrning ---
  const mal = rikt * AUTOSTYR + in_.styr * SVANG_MAX;
  const kraft = s.luft ? 0.3 : 1;
  s.vinkel += (mal - s.vinkel) * Math.min(1, dt * SVANG_SNABBHET * kraft);

  // --- fart ---
  if (!s.luft) {
    const fram = Math.cos(s.vinkel);
    const lutLangs = (markY(bana, s.x, s.d + 0.5) - markY(bana, s.x, s.d - 0.5)); // per meter (negativ = nerför)
    const motstand = LUFTMOTSTAND * (in_.huka ? HUK_MOTSTAND : 1);
    let acc = -G * lutLangs * fram - motstand * s.fart * s.fart - SVANG_BROMS * Math.abs(s.vinkel - rikt) * s.fart;
    if (!in_.aktiv) acc = -s.fart * 1.2; // bromsar efter mål
    s.fart = Math.max(in_.aktiv ? MIN_FART : 0, s.fart + acc * dt);
    // doseringen drar mot innerkurvan
    s.glid += (-G * bankVid(bana, s.d) * BANK_DRAG) * dt;
  }
  s.glid *= Math.pow(0.15, dt);

  // --- förflyttning ---
  const forraD = s.d;
  s.x += (Math.sin(s.vinkel) * s.fart + s.glid) * dt;
  s.d += Math.cos(s.vinkel) * s.fart * dt;

  // kanter
  const cx = cxVid(bana, s.d);
  const u = s.x - cx;
  if (Math.abs(u) > BANBREDD) {
    s.x = cx + Math.sign(u) * BANBREDD;
    s.vinkel = rikt + (s.vinkel - rikt) * -0.3;
    s.glid = 0;
    if (!s.vidKant) { s.fart *= 0.9; h.push({ typ: 'kant', sida: Math.sign(u) }); }
    s.vidKant = true;
  } else if (Math.abs(u) < BANBREDD - 0.5) {
    s.vidKant = false;
  }

  // --- pop-timing (Enter) ---
  const nasta = bana.hopp[s.nastaHopp];
  if (nasta && forraD > nasta.lapp + 1) s.nastaHopp++;
  const iFonster = nasta && !s.luft && s.d > nasta.lapp - POP_FONSTER && s.d <= nasta.lapp + 0.3;
  if (in_.hopp) {
    if (iFonster && !s.popHopp) {
      const avst = Math.max(0, nasta.lapp - s.d);
      s.pop = klamp(1 - avst / POP_FONSTER, 0, 1);
      s.popHopp = nasta;
      h.push({ typ: 'pop', kvalitet: s.pop });
    } else if (!s.luft && !iFonster) {
      s.luft = true; s.vy += OLLIE; s.luftTid = 0; s.franHopp = false;
      h.push({ typ: 'ollie' });
    } else if (s.luft && s.franHopp && !s.snurrar && s.snurr === 0 && s.luftTid < 0.6) {
      s.snurrar = true;
      h.push({ typ: 'snurr' });
    }
  }

  // --- höjd: mark eller luft ---
  const mark = markY(bana, s.x, s.d);
  if (!s.luft) {
    const markVy = (mark - s.y) / dt;
    // marken försvinner under oss snabbare än tyngdkraften hinner dra ner oss → vi flyger
    const vidKant = nasta && Math.abs(s.d - nasta.lapp) < 2.5;
    if ((vidKant && markVy < s.vy - G * dt * 1.6 && s.fart > 4) || markVy < s.vy - G * dt * 9) {
      s.luft = true; s.luftTid = 0;
      s.franHopp = !!vidKant;
      if (vidKant) {
        // styr farten mot hoppets designfart så att hoppet blir förutsägbart
        if (nasta.v) {
          s.fart += (nasta.v - s.fart) * HOPP_STYRNING;
          s.vy += (nasta.vy - s.vy) * HOPP_STYRNING;
        }
        const kval = s.popHopp === nasta ? s.pop : 0;
        s.vy += POP_MAX * kval;
        s.fart *= 1 + 0.05 * kval;
        s.senasteHopp = nasta;
        h.push({ typ: 'avstamp', kvalitet: kval, poppade: s.popHopp === nasta });
        s.popHopp = null; s.pop = 0;
      }
      s.y += s.vy * dt;
    } else {
      s.vy = markVy;
      s.y = mark;
    }
  } else {
    s.luftTid += dt;
    s.vy -= G * dt;
    s.y += s.vy * dt;
    if (s.snurrar) { s.snurr += dt / 0.55; if (s.snurr >= 1) { s.snurr = 1; s.snurrar = false; } }
    if (s.y <= mark) {
      // landning: jämför vår fallhastighet med markens lutning
      const markVyLand = (markY(bana, s.x, s.d + 0.5) - markY(bana, s.x, s.d - 0.5)) * Math.cos(s.vinkel) * s.fart;
      const small = markVyLand - s.vy; // positiv = vi faller brantare än backen
      s.y = mark; s.vy = markVyLand; s.luft = false;
      const lang = s.luftTid > 0.45;
      let kvalitet = 'normal';
      const hp = s.franHopp ? s.senasteHopp : null;
      if (hp && s.d < hp.deckSlut + 1) {
        kvalitet = 'knuckle'; s.fart *= 0.8; s.vingel = 0.6;          // landade på decket
      } else if (hp && small < HARD_I_LANDNING && s.d < hp.deckSlut + hp.landning * 0.95) {
        kvalitet = 'perfekt'; s.fart *= 1.15;                           // landade i landningsbacken
      } else if (small > HARD_LANDNING && s.luftTid > 0.35) {
        kvalitet = 'hard'; s.vingel = 1;
        s.fart *= hp ? Math.max(0.6, 0.85 - (small - HARD_LANDNING) * 0.03) : 0.95;
      } else if (small < MJUK_LANDNING && lang) { kvalitet = 'mjuk'; s.fart *= 1.03; }
      let trick = null;
      if (s.snurr > 0) {
        trick = s.snurr >= 0.7 ? 'klar' : 'miss';
        if (trick === 'miss') { s.fart *= 0.75; s.vingel = 1; }
        s.snurr = 0; s.snurrar = false;
      }
      h.push({ typ: 'landning', kvalitet, small, luftTid: s.luftTid, trick, franHopp: s.franHopp });
      s.franHopp = false;
    }
  }
  if (!s.luft && s.popHopp && s.d > s.popHopp.lapp + 1) { s.popHopp = null; s.pop = 0; }
  s.vingel = Math.max(0, s.vingel - dt * 2);
  return h;
}

// Autopilot (för test): siktar på nästa port och poppar perfekt
export function botStyr(s, bana, nastaPort, { pop = true } = {}) {
  const p = bana.portar[nastaPort];
  const malX = p && p.d - s.d < 30 ? p.x : cxVid(bana, s.d + 8);
  const malD = p && p.d - s.d < 30 ? p.d : s.d + 8;
  // vilken sidledsfart behövs för att nå målet i tid?
  const tidKvar = Math.max(0.35, (malD - s.d) / Math.max(5, s.fart));
  const onskadVx = (malX - s.x) / tidKvar;
  const nuVx = Math.sin(s.vinkel) * s.fart + s.glid;
  const styr = klamp((onskadVx - nuVx) * 0.22, -1, 1);
  const nasta = bana.hopp[s.nastaHopp];
  const hopp = pop && nasta && !s.luft && !s.popHopp && nasta.lapp - s.d < 0.6 && nasta.lapp - s.d > 0;
  return { styr, huka: true, hopp: !!hopp, aktiv: true };
}
