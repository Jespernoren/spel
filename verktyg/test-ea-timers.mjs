// EA: ingen text får ha en egen timer. Testet failar om en setTimeout (eller efterBrev/efterPrat/aliRepl utanför butiken)
// innehåller sms, tanke, toast, notis, replik, visaLapp eller inkorg. Texter går som paket genom den enda kön (paket()).
import { readFileSync } from 'node:fs';
const fil = new URL('../spel/printa-hem/spel.js', import.meta.url);
const s = readFileSync(fil, 'utf8');
const TEXT = /\b(sms|smsFram|tanke|enGang|kortTanke|notis|ui\.toast|replik|visaLapp|inkorg|aliSmsIdag)\(/;
function slut(i) {   // index för parentesen som stänger den som öppnas vid i
  let d = 0, q = null;
  for (let j = i; j < s.length; j++) {
    const c = s[j];
    if (q) { if (c === '\\') { j++; continue; } if (c === q) q = null; continue; }
    if (c === '/' && s[j + 1] === '/') { j = s.indexOf('\n', j); continue; }
    if (c === '/' && s[j + 1] === '*') { j = s.indexOf('*/', j); continue; }
    if (c === "'" || c === '"' || c === '`') { q = c; continue; }
    if (c === '(') d++; else if (c === ')' && --d === 0) return j;
  }
  return s.length;
}
const fel = [];
for (const m of s.matchAll(/setTimeout\(/g)) {
  const kropp = s.slice(m.index, slut(m.index + 10) + 1);
  if (TEXT.test(kropp)) fel.push(`rad ${s.slice(0, m.index).split('\n').length}: ${kropp.replace(/\s+/g, ' ').slice(0, 140)}`);
}
for (const ord of ['efterBrev(', 'efterPrat(']) if (s.includes(ord)) fel.push(`${ord} finns kvar`);
if (fel.length) { console.log(`✗ ${fel.length} texter har en egen timer:\n` + fel.join('\n')); process.exit(1); }
console.log('✓ inga setTimeout runt sms, tanke, toast, notis, replik eller lappar – allt går som paket genom kön');
