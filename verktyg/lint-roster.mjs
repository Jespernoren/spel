// A-078 tillägg 11:45: en röst per figur. Lint: rösten (pitch, rate, voice) sätts bara via rostFor() från spel/printa-hem/rost.js,
// talsyntesen skapas på ett enda ställe, och varje figur som pratar har en rad i ROSTER.
// Kör: node verktyg/lint-roster.mjs  (körs i pre-commit)
import fs from 'node:fs';
const rot = new URL('../spel/printa-hem/', import.meta.url).pathname;
const kod = fs.readFileSync(rot + 'spel.js', 'utf8'), rost = fs.readFileSync(rot + 'rost.js', 'utf8');
const figurer = new Set([...rost.matchAll(/^\s{2}([a-z]+): \{ pitch/gm)].map((m) => m[1]));
const fel = [];
const rader = kod.split('\n');
rader.forEach((r, i) => {
  if (/new SpeechSynthesisUtterance\(/.test(r) && !/rostFor\(vem\)/.test(r)) fel.push(`rad ${i + 1}: talsyntes utan rostFor()`);
  if (/\.(pitch|rate)\s*=\s*[^=]/.test(r) && /\bu\./.test(r) && !/r\.pitch|r\.rate/.test(r)) fel.push(`rad ${i + 1}: väljer röst själv`);
  if (/\.voice\s*=/.test(r) && !/r\.voice/.test(r)) fel.push(`rad ${i + 1}: väljer röst själv (voice)`);
  for (const m of r.matchAll(/\bprata\('([a-z]+)'/g)) if (!figurer.has(m[1])) fel.push(`rad ${i + 1}: ${m[1]} pratar men saknas i ROSTER`);
  for (const m of r.matchAll(/\[\['([a-z]+)', '[^']*[a-zåäö][^']*'/g)) if (/\btal: \[\[/.test(r) && !figurer.has(m[1])) fel.push(`rad ${i + 1}: ${m[1]} pratar men saknas i ROSTER`);
});
if ((kod.match(/new SpeechSynthesisUtterance\(/g) || []).length > 1) fel.push('talsyntesen skapas på fler än ett ställe');
if (/const ROSTER\s*=/.test(kod)) fel.push('en egen rösttabell i spel.js – den ska bara finnas i rost.js');
console.log(fel.length ? 'lint-roster: ' + fel.length + ' fel\n  ' + fel.slice(0, 20).join('\n  ') : `lint-roster: 0 fel (${figurer.size} figurer i ROSTER)`);
process.exit(fel.length ? 1 : 0);
