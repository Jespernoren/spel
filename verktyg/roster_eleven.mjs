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

const ROST_ID = {
  mamma: 'KXa8ZwUkoRUXzlvWVH45', pappa: 'XCJuXKNe1b2guCye5YRd', rolf: 'YwdqQE1lPKpzJWBC2ZoK',
  // du, bror, berattare, chefen: läggs till när Jesper skickar röst-id. Ali behåller den gamla rösten.
};
const FIGURER = ['rolf', 'ali', 'pappa', 'bror', 'chefen', 'du', 'mamma', 'berattare'];
const [fil = 'verktyg/roster-taggar.json', lage = 'nya', figurerArg = ''] = process.argv.slice(2);   // lage: nya | alla; figurer: t.ex. "rolf,mamma,pappa"
const bara = figurerArg.split(',').map((x) => x.trim()).filter(Boolean);
const NYCKEL = process.env.ELEVENLABS_API_KEY;
if (!NYCKEL) { console.error('ELEVENLABS_API_KEY saknas'); process.exit(1); }

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
let lista = JSON.parse(fs.readFileSync(fil, 'utf8')).map((r) => ({ ...r, rost: r.rost || r.figur, text: r.skickas || r.el, nycklar: nyckelFor(r) }));
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
for (const r of grupper.values()) {
  const mp3 = `${r.id.replace(/[^\w-]/g, '_')}.mp3`, ut = path.join(UT, mp3);
  if (lage !== 'alla' && fs.existsSync(ut)) { for (const k of r.nycklar) index[k] = mp3; continue; }
  const svar = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ROST_ID[r.rost]}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: { 'xi-api-key': NYCKEL, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
    body: JSON.stringify({ text: r.text, model_id: 'eleven_v3', voice_settings: { stability: 0.0 } }),   // v3 Creative: mest uttryck
  });
  if (!svar.ok) {
    fel++; iRad++;
    console.log(`FEL ${r.id}: HTTP ${svar.status} ${(await svar.text()).slice(0, 200).split(NYCKEL).join('***')}`);
    if (iRad >= 3 || svar.status === 401) { console.log('Avbryter: tre fel i rad eller nekad nyckel (kreditgräns?). Det som hann göras sparas.'); break; }
    continue;
  }
  iRad = 0;
  const buf = Buffer.from(await svar.arrayBuffer());
  fs.writeFileSync(ut, buf); for (const k of r.nycklar) index[k] = mp3;
  gjorda++; tecken += r.text.length; console.log(`ok ${r.id} (${Math.round(buf.length / 1024)} kB, ${r.text.length} tecken)`);
  if (gjorda % 20 === 0) fs.writeFileSync(indexFil, JSON.stringify(index, null, 1));   // spara index ofta
}
fs.writeFileSync(indexFil, JSON.stringify(index, null, 1));
console.log(`klart: ${gjorda} nya klipp, ${tecken} tecken, ${fel} fel (${grupper.size} klipp i listan efter sammanslagning)`);
if (fel && !gjorda) process.exit(1);
