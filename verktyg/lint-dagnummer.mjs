// lint-dagnummer (inkorg 54, A-109): ingen text som spelaren ser innehåller "Dag" + siffra – spelet räknar ned till jul och visar datumet.
// Läser alla strängar i spel.js och story.js. Internt (S.dag, stegens del-nycklar, loggar, regelvakten, kommentarer) får säga dag N.
import fs from 'node:fs';
const INTERNT = [/^\s*const [A-Z]\d+ = 'Dag \d+ – /, /textLogg\(/, /regelvakt\.(brott|regel)\(/, /console\.(log|warn|error)\(/, /\bvid\('/, /varfor:/, /laggFynd\(|langDagbok\.push|tidigFanfar\.push|spokeFynd\.push|felByggeffekt\.push/];   // del-nycklarna (R6 = 'Dag 6 – …') visas aldrig – morgonkortet tar bort "Dag N – "
const fel = [];
for (const fil of ['spel/printa-hem/spel.js', 'spel/printa-hem/story.js']) {
  const rader = fs.readFileSync(new URL('../' + fil, import.meta.url), 'utf8').split('\n');
  rader.forEach((rad, i) => {
    const kod = rad.replace(/\/\*.*?\*\//g, '').replace(/(^|[^:'"`\\])\/\/.*$/, '$1');   // utan kommentarer
    if (INTERNT.some((r) => r.test(kod))) return;
    if (/['"`]\s*dag\s+['"`]\s*\+/i.test(kod)) fel.push(`${fil}:${i + 1} "dag " + tal (övergångskortet, inkorg 67 p.4)`);   /* inkorg 67 p.4: 'DAG ' + S.dag i kalendern missades */
    for (const m of kod.matchAll(/'([^'\\]|\\.)*'|"([^"\\]|\\.)*"|`([^`\\]|\\.)*`/g)) if (/\bDag \d+\b|\b[Dd]ag \$\{|\bdag \d+\b(?! [–-])/.test(m[0]) && !/^['"`](Dag \d+ – )/.test(m[0])) fel.push(`${fil}:${i + 1} ${m[0].slice(0, 80)}`);
  });
}
if (fel.length) { console.log(`lint-dagnummer: ${fel.length} fel – en text som spelaren ser säger "dag N" (visa datumet eller nedräkningen):`); fel.forEach((f) => console.log('  ✗ ' + f)); process.exit(1); }
console.log('lint-dagnummer: 0 texter med dagnummer');
