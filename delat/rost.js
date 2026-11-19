// =============================================================
//  Rättar uppläsningen (speechSynthesis) i alla spel.
//  1. Rösten säger "versal Ö" när en ensam stor bokstav läses upp.
//     Ensamma stora bokstäver görs om till små innan de läses: "Ö" → "ö".
//  2. UTTAL: ord som rösten uttalar fel byts BARA i det som läses upp,
//     aldrig i texten på skärmen. Hela ord, oavsett stora/små bokstäver.
//     Lägg till fler ord i tabellen nedan.
//  Läggs först i <head>:  <script src="../../delat/rost.js"></script>
// =============================================================
(function () {
  const UTTAL = [
    // [skrivs, läses]   – Jesper 2026-11-19 18:23: "filament" sägs FILLAment (kort i)
    ['filament', 'fillament'],
    ['filamentet', 'fillamentet'],
    ['filamentrulle', 'fillamentrulle'],
    ['filamentrullen', 'fillamentrullen'],
    ['filamentrullar', 'fillamentrullar'],
    ['filamentrullarna', 'fillamentrullarna'],
  ];
  const Orig = window.SpeechSynthesisUtterance;
  const ord = new Map(UTTAL.map(([s, l]) => [s.toLowerCase(), l]));
  const monster = new RegExp(`(^|[^\\p{L}])(${UTTAL.map(([s]) => s).sort((a, b) => b.length - a.length).join('|')})(?=[^\\p{L}]|$)`, 'giu');
  const behall = (fran, till) => (fran[0] === fran[0].toUpperCase() ? till[0].toUpperCase() + till.slice(1) : till);
  const ratta = (t) => typeof t === 'string'
    ? t.replace(/(^|[^\p{L}])(\p{Lu})(?=[^\p{L}]|$)/gu, (_, fore, b) => fore + b.toLowerCase())
      .replace(monster, (_, fore, w) => fore + behall(w, ord.get(w.toLowerCase()) || w))
    : t;
  /* för regelvakten (UTTAL SAKNAS) och för den som behöver samma rättning, t.ex. text som skickas till ElevenLabs */
  window.__uttal = { lista: UTTAL, ratta, saknas: (t) => typeof t === 'string' && new RegExp(monster.source, 'iu').test(t) };
  if (!Orig || Orig.__rattad) return;
  class Uppl extends Orig {
    constructor(text) { super(ratta(text)); }
    get text() { return super.text; }
    set text(v) { super.text = ratta(v); }
  }
  Uppl.__rattad = true;
  window.SpeechSynthesisUtterance = Uppl;
})();
