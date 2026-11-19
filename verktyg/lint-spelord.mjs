// A-076 tillägg 13:55: inga spelord i det man hör eller läser. Kollar uppmaningarna i spel.js:
// JAG_TAL, STEG_TAL, knuff:, tanke:, regi.info('…') och prata(vem, '…'). Kör: node verktyg/lint-spelord.mjs
import fs from 'node:fs';
const fil = new URL('../spel/printa-hem/spel.js', import.meta.url).pathname, kod = fs.readFileSync(fil, 'utf8');
const SPELORD = /lysande (rutan|platsen)|markeringen|konturen|\bmålet\b|uppdraget|klicka här/i;
const fel = [];
const block = (namn) => { const i = kod.indexOf(`const ${namn} = {`); if (i < 0) return ''; return kod.slice(i, kod.indexOf('\n};', i)); };
for (const namn of ['JAG_TAL', 'STEG_TAL']) for (const m of block(namn).matchAll(/:\s*'([^']*)'/g)) if (SPELORD.test(m[1])) fel.push(`${namn}: "${m[1]}"`);
for (const re of [/knuff:\s*'([^']*)'/g, /tanke:\s*'([^']*)'/g, /regi\.info\(\s*'([^']*)'/g, /prata\(\s*'[a-z]+',\s*'([^']*)'/g]) for (const m of kod.matchAll(re)) if (SPELORD.test(m[1])) fel.push(`${re.source.split('\\')[0]} "${m[1].slice(0, 70)}"`);
if (fel.length) { console.log('lint-spelord: ' + fel.length + ' SPELORD I REPLIK'); for (const f of fel) console.log('  ' + f); process.exit(1); }
console.log('lint-spelord: 0 spelord i uppmaningar, tankar och info');
