// Soptippsvägen 1 – genererar röstklipp med ElevenLabs (eleven_v3) från en JSON-lista.
// Körs i GitHub Action (.github/workflows/roster-elevenlabs.yml). Nyckeln läses ur miljön och skrivs ALDRIG ut.
// Indata, två format:
//   taggar (verktyg/roster-taggar.json): [{ id, figur, rost, visad, skickas, hand? }]
//   pilot  (verktyg/roster-pilot.json):  [{ id, figur, nycklar, visad, el }]
// `rost` väljer röst-id, `skickas` (eller `el`) är texten som skickas. Nyckeln som spelet slår upp är figur-hash(visad).
// Samma skickade text för samma röst görs bara en gång (Rolfs två dialektvarianter delar klipp).
// Utdata: spel/printa-hem/roster-el/<id>.mp3 och roster-el/index.json { 'figur-hash': '<id>.mp3' }
import fs from 'fs';
import path from 'path';
import vm from 'vm';
/* inkorg 12c: samma uttalslista som talsyntesen (delat/rost.js) – texten som SKICKAS skrivs t.ex. "fillament", den som visas är oförändrad */
const uttalFonster = {}; vm.runInNewContext(fs.readFileSync('delat/rost.js', 'utf8'), { window: uttalFonster });
const uttal = (t) => (uttalFonster.__uttal ? uttalFonster.__uttal.ratta(t) : t);

const ROST_ID = {
  mamma: 'KXa8ZwUkoRUXzlvWVH45', pappa: 'XCJuXKNe1b2guCye5YRd', rolf: 'YwdqQE1lPKpzJWBC2ZoK',
  du: 'gTmjceSSOghNgfcSeoEH', berattare: 'VWpskToyR7MBO58Hh6NP',   // punkt AW: du i introt, berättaren bara som lyssningsprov än så länge
  // bror, chefen: läggs till när Jesper skickar röst-id. Ali behåller den gamla rösten.
};
const FIGURER = ['rolf', 'ali', 'pappa', 'bror', 'chefen', 'du', 'mamma', 'berattare'];
const [fil = 'verktyg/roster-taggar.json', lage = 'nya', figurerArg = '', torrArg = 'ja', takArg = '0'] = process.argv.slice(2);   // lage: nya | alla; figurer: t.ex. "rolf,mamma,pappa"
// EC: ElevenLabs körs bara med en figurlista, ett tak för antal tecken och efter en torrkörning som Jesper har sagt ja till.
// torr = ja (standard): räknar bara klipp och tecken, skickar ingenting. torr = nej: skarp körning, kräver figurer och tak.
const bara = figurerArg.split(',').map((x) => x.trim()).filter(Boolean);
const TORR = torrArg !== 'nej', TAK = Number(takArg) || 0;
if (!bara.length) { console.error('Avbryter: ange figurer (t.ex. rolf,mamma). En körning utan figurlista kan göra av med alla krediter.'); process.exit(1); }
const NYCKEL = process.env.ELEVENLABS_API_KEY;
if (!TORR && !NYCKEL) { console.error('ELEVENLABS_API_KEY saknas'); process.exit(1); }

// samma nyckel som spelet (rostNyckel i spel.js)
function rostNyckel(t) {
  const ren = String(t).replace(/<[^>]+>/g, ' ').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
  let h = 0x811c9dc5;
  for (let i = 0; i < ren.length; i++) { h ^= ren.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0');
}
const nyckelFor = (r) => r.nycklar || [`${FIGURER.includes(r.figur) ? r.figur : 'berattare'}-${rostNyckel(r.visad)}`];

const UT = 'spel/printa-hem/roster-el';
fs.mkdirSync(UT, { recursive: true });
const indexFil = path.join(UT, 'index.json');
const index = fs.existsSync(indexFil) ? JSON.parse(fs.readFileSync(indexFil, 'utf8')) : {};
let lista = JSON.parse(fs.readFileSync(fil, 'utf8')).map((r) => ({ ...r, rost: r.rost || r.figur, text: uttal(r.skickas || r.el), nycklar: nyckelFor(r) }));
// handtaggade repliker går före automatiskt taggade med samma nyckel
const hand = new Set(lista.filter((r) => r.hand).flatMap((r) => r.nycklar));
lista = lista.filter((r) => r.hand || !r.nycklar.some((k) => hand.has(k)));
// slå ihop: samma röst + samma skickade text = ett klipp
const grupper = new Map();
for (const r of lista) {
  if (!ROST_ID[r.rost] || (bara.length && !bara.includes(r.rost))) continue;
  const k = r.rost + '|' + r.text;
  if (!grupper.has(k)) grupper.set(k, { ...r, nycklar: [...r.nycklar] }); else grupper.get(k).nycklar.push(...r.nycklar);
}
let gjorda = 0, tecken = 0, fel = 0, iRad = 0;
{ // EC: torrkörning – exakt vad som skulle skickas, per figur
  const behov = [...grupper.values()].filter((r) => lage === 'alla' || !fs.existsSync(r.prov ? path.join('verktyg/roster-prov/el', `${r.id.replace(/[^\w-]/g, '_')}.mp3`) : path.join(UT, `${r.id.replace(/[^\w-]/g, '_')}.mp3`)));
  const per = {}; for (const r of behov) { per[r.rost] = per[r.rost] || { klipp: 0, tecken: 0 }; per[r.rost].klipp++; per[r.rost].tecken += r.text.length; }
  const tot = behov.reduce((a, r) => a + r.text.length, 0);
  console.log(`TORRKÖRNING: ${behov.length} nya klipp, ${tot} tecken · ${JSON.stringify(per)}`);
  if (TORR) { console.log('Torrkörning – inget skickat. Kör skarpt med torr=nej och ett tak (antal tecken) när Jesper har sagt ja.'); process.exit(0); }
  if (!TAK) { console.error('Avbryter: ett tak (antal tecken) krävs för en skarp körning.'); process.exit(1); }
  if (tot > TAK) { console.error(`Avbryter: ${tot} tecken är över taket ${TAK}.`); process.exit(1); }
}
console.log(`att skicka: ${grupper.size} klipp, ${[...grupper.values()].reduce((a, r) => a + r.text.length, 0)} tecken (de som redan finns hoppas över)`);
for (const r of grupper.values()) {
  const mp3 = `${r.id.replace(/[^\w-]/g, '_')}.mp3`, ut = r.prov ? path.join('verktyg/roster-prov/el', mp3) : path.join(UT, mp3);   // prov: lyssningsprov, inte i spelet
  if (r.prov) fs.mkdirSync('verktyg/roster-prov/el', { recursive: true });
  if (lage !== 'alla' && fs.existsSync(ut)) { if (!r.prov) for (const k of r.nycklar) index[k] = mp3; continue; }
  const svar = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ROST_ID[r.rost]}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: { 'xi-api-key': NYCKEL, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
    body: JSON.stringify({ text: r.text, model_id: 'eleven_v3', voice_settings: { stability: 0.0, ...(r.speed ? { speed: r.speed } : {}) } }),   // speed: BJ, berättaren lite snabbare   // v3 Creative: mest uttryck
  });
  if (!svar.ok) {
    fel++; iRad++;
    console.log(`FEL ${r.id}: HTTP ${svar.status} ${(await svar.text()).slice(0, 200).split(NYCKEL).join('***')}`);
    if (iRad >= 3 || svar.status === 401) { console.log('Avbryter: tre fel i rad eller nekad nyckel (kreditgräns?). Det som hann göras sparas.'); break; }
    continue;
  }
  iRad = 0;
  const buf = Buffer.from(await svar.arrayBuffer());
  fs.writeFileSync(ut, buf); if (!r.prov) for (const k of r.nycklar) index[k] = mp3;
  gjorda++; tecken += r.text.length; console.log(`ok ${r.id} (${Math.round(buf.length / 1024)} kB, ${r.text.length} tecken)`);
  if (gjorda % 20 === 0) fs.writeFileSync(indexFil, JSON.stringify(index, null, 1));   // spara index ofta
}
fs.writeFileSync(indexFil, JSON.stringify(index, null, 1));
console.log(`klart: ${gjorda} nya klipp, ${tecken} tecken, ${fel} fel (${grupper.size} klipp i listan efter sammanslagning)`);
if (fel && !gjorda) process.exit(1);
