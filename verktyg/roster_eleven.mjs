// Soptippsvägen 1 – genererar röstklipp med ElevenLabs (eleven_v3) från en JSON-lista.
// Körs i GitHub Action (.github/workflows/roster-elevenlabs.yml). Nyckeln läses ur miljön och skrivs ALDRIG ut.
// Indata: [{ id, figur, nycklar: ['figur-hash', ...], visad, el: 'text med [taggar]' }]
// Utdata: spel/printa-hem/roster-el/<id>.mp3 och roster-el/index.json { 'figur-hash': '<id>.mp3' }
import fs from 'fs';
import path from 'path';

const ROST_ID = { mamma: 'KXa8ZwUkoRUXzlvWVH45', pappa: 'XCJuXKNe1b2guCye5YRd', rolf: 'YwdqQE1lPKpzJWBC2ZoK' };
const [fil = 'verktyg/roster-pilot.json', lage = 'nya'] = process.argv.slice(2);   // lage: 'nya' (hoppa över befintliga) eller 'alla'
const NYCKEL = process.env.ELEVENLABS_API_KEY;
if (!NYCKEL) { console.error('ELEVENLABS_API_KEY saknas'); process.exit(1); }
const UT = 'spel/printa-hem/roster-el';
fs.mkdirSync(UT, { recursive: true });
const indexFil = path.join(UT, 'index.json');
const index = fs.existsSync(indexFil) ? JSON.parse(fs.readFileSync(indexFil, 'utf8')) : {};
const lista = JSON.parse(fs.readFileSync(fil, 'utf8'));
let gjorda = 0, tecken = 0, fel = 0;
for (const r of lista) {
  const rost = ROST_ID[r.figur];
  if (!rost) { console.log(`hoppar över ${r.id}: ingen ElevenLabs-röst för ${r.figur}`); continue; }
  const mp3 = `${r.id}.mp3`, ut = path.join(UT, mp3);
  if (lage !== 'alla' && fs.existsSync(ut)) { for (const k of r.nycklar) index[k] = mp3; continue; }
  const svar = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${rost}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: { 'xi-api-key': NYCKEL, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
    body: JSON.stringify({ text: r.el, model_id: 'eleven_v3', voice_settings: { stability: 0.0 } }),   // v3 Creative: mest uttryck
  });
  if (!svar.ok) { fel++; console.log(`FEL ${r.id}: HTTP ${svar.status} ${(await svar.text()).slice(0, 200).replace(NYCKEL, '***')}`); continue; }
  const buf = Buffer.from(await svar.arrayBuffer());
  fs.writeFileSync(ut, buf); for (const k of r.nycklar) index[k] = mp3;
  gjorda++; tecken += r.el.length; console.log(`ok ${r.id} (${Math.round(buf.length / 1024)} kB, ${r.el.length} tecken)`);
}
fs.writeFileSync(indexFil, JSON.stringify(index, null, 1));
console.log(`klart: ${gjorda} nya klipp, ${tecken} tecken, ${fel} fel`);
if (fel) process.exit(1);
