// =============================================================
//  Rättar uppläsningen (speechSynthesis) i alla spel.
//  Rösten säger "versal Ö" när en ensam stor bokstav läses upp.
//  Här görs ensamma stora bokstäver om till små innan de läses: "Ö" → "ö".
//  Läggs först i <head>:  <script src="../../delat/rost.js"></script>
// =============================================================
(function () {
  const Orig = window.SpeechSynthesisUtterance;
  if (!Orig || Orig.__rattad) return;
  const ratta = (t) => typeof t === 'string'
    ? t.replace(/(^|[^\p{L}])(\p{Lu})(?=[^\p{L}]|$)/gu, (_, fore, b) => fore + b.toLowerCase())
    : t;
  class Uppl extends Orig {
    constructor(text) { super(ratta(text)); }
    get text() { return super.text; }
    set text(v) { super.text = ratta(v); }
  }
  Uppl.__rattad = true;
  window.SpeechSynthesisUtterance = Uppl;
})();
