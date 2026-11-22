// =============================================================
//  Soptippsvägen 1 – rösterna (A-078 tillägg 11:45)
//  En tabell, en röst per figur, överallt: introt, spelet och dagboken.
//  Där ett ElevenLabs-klipp finns spelas det (rostKlipp i spel.js); annars talsyntes med figurens röst härifrån.
//  Ingen replik väljer röst själv – lint-roster.mjs kollar att röst bara sätts här och att alla figurer finns i tabellen.
// =============================================================
export const ROSTER = {
  berattare: { pitch: 1.0, rate: 0.95, kon: 'k' },   // samma i varje ruta och i dagboken
  du: { pitch: 1.15, rate: 1.0, kon: 'm' },
  mamma: { pitch: 1.3, rate: 1.08, kon: 'k' },       // ljus och snabb
  pappa: { pitch: 0.7, rate: 0.95, kon: 'm' },       // platt och kort
  bror: { pitch: 1.05, rate: 1.15, kon: 'm' },
  ali: { pitch: 0.8, rate: 0.9, kon: 'm' },          // trött
  rolf: { pitch: 0.55, rate: 0.82, kon: 'm' },       // mörk och släpig
  helen: { pitch: 1.12, rate: 0.98, kon: 'k' },      // lugn
  goran: { pitch: 0.75, rate: 0.88, kon: 'm' },      // guldletaren
  bengt: { pitch: 0.65, rate: 0.95, kon: 'm' },      // A-058: Bengt-Åke, grov och långsam
  chefen: { pitch: 0.6, rate: 1.2, kon: 'm' },       // A-053: Rudolf, kort och arg
  kjelle: { pitch: 1.0, rate: 1.15, kon: 'm' },      // A-047: radioröst, glad och snabb
  gunnar: { pitch: 0.5, rate: 0.7, kon: 'm' },       // A-047: säger ett ord om året
  gunbritt: { pitch: 1.2, rate: 0.9, kon: 'k' },     // A-047: byggnadsnämnden, långsam och beklagande
};
let roster = [];
const laddaRoster = () => { try { roster = speechSynthesis.getVoices().filter((v) => /^sv/i.test(v.lang)); } catch { roster = []; } };
try { laddaRoster(); speechSynthesis.onvoiceschanged = laddaRoster; } catch {}
// naturliga/premium-röster låter mycket bättre – välj dem först om datorn har dem
const rostKvalitet = (v) => (/natural|neural|premium|enhanced|förbättrad|online/i.test(v.name) ? 10 : 0) + (v.localService ? 0 : 1);
const valdRost = {};   // en gång vald röst per figur ligger kvar hela spelet – berättaren byter aldrig röst mitt i
/* inkorg 71: varje figur får en EGEN systemröst när datorn har fler än en svensk röst. Berättaren tar den bästa rösten för sitt kön,
   de andra figurerna fördelas på de övriga rösterna (samma kön först) i tabellens ordning, så att två figurer inte låter likadant.
   Finns bara en svensk röst (vanligt på Mac: Alva) skiljs figurerna åt med tonhöjd och tempo i ROSTER. */
function valjRost(vem, kon) {
  if (valdRost[vem] && roster.includes(valdRost[vem])) return valdRost[vem];
  if (!roster.length) return null;
  const L = [...roster].sort((a, b) => rostKvalitet(b) - rostKvalitet(a) || a.name.localeCompare(b.name));
  const man = /oskar|bengt|alvar|male|man\b|herr/i, kvinna = /alva|klara|hedvig|female|kvinna|google svenska/i;
  const egna = (k) => L.filter((v) => (k === 'm' ? man : kvinna).test(v.name));
  const ordning = Object.keys(ROSTER), mitt = ordning.indexOf(vem);
  if (vem === 'berattare') return (valdRost[vem] = egna(kon)[0] || L[0]);
  if (!valdRost.berattare) valjRost('berattare', ROSTER.berattare.kon);
  const upptagen = new Set(Object.entries(valdRost).filter(([f]) => f !== vem).map(([, v]) => v));
  const kandidater = [...egna(kon), ...L.filter((v) => !egna(kon).includes(v))];
  const fri = kandidater.filter((v) => !upptagen.has(v) && v !== valdRost.berattare);
  return (valdRost[vem] = fri[0] || kandidater[(mitt < 0 ? 0 : mitt) % kandidater.length] || L[0]);
}
export const saknadRost = new Set();   // figurer som pratade utan egen rad i tabellen (regelvakten läser den)
export function rostFor(vem) {
  const r = ROSTER[vem]; if (!r) saknadRost.add(String(vem));
  const x = r || ROSTER.berattare;
  return { pitch: x.pitch, rate: x.rate, kon: x.kon, voice: valjRost(r ? vem : 'berattare', x.kon) };
}
