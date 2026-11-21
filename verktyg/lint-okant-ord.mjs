// Inkorg 36 (A-095): ingen figur eller plats nämns innan spelaren har mött den. Körs i pre-commit.
// Läser alla strängar i printa-hem/*.js. En sträng som nämner ett ord ur listan nedan är godkänd om
//   1. samma rad (eller raden före) har ett villkor som kräver att saken är känd (kand('…') eller samma flagga som KAND_AUTO),
//   2. den som säger texten är den som presenterar saken (Rolf säger Birgitta, Kjelle säger Gunnar, Gun-Britt sig själv …),
//   3. raden bara kan visas senare (kapitel ≥ 2, dag ≥ 2 för tippen …), eller
//   4. den står i verktyg/okant-ord-undantag.json med skäl.
// Allt annat är fel. Kör: node verktyg/lint-okant-ord.mjs [--alla]
import fs from 'node:fs';
const rot = new URL('../spel/printa-hem/', import.meta.url).pathname;
const undantag = JSON.parse(fs.readFileSync(new URL('./okant-ord-undantag.json', import.meta.url), 'utf8'));
/* [ordet, nyckel, villkor som räknas som "känd" på raden, vem som presenterar] */
const ORD = [
  [/\bRolfs?\b/, 'rolf', /kand\('rolf'\)|rolfKand|S\.rolf\??\.(i|heder|nummer)|rolfNummer|S\.tippNyckel|S\.rolfsBank|kapitel \|\| 1\) >= [2-4]|S\.kapitel >= [2-4]|S\.dag >= ([3-9]|\d\d)/, ['rolf', 'chefen']],
  [/\bAlis?\b/, 'ali', /kand\('ali'\)|aliMott|S\.stat\.salt|SI\.aliKvarn|brorSms|S\.dag >= ?[2-9]|S\.dag > 1|kapitel/, ['ali', 'bror']],
  [/\bHelens?\b/, 'helen', /kand\('helen'\)|S\.helen/, ['helen', 'rolf']],
  [/\bBengt/, 'bengt', /kand\('bengt'\)|bengtSkrik|bengtNamnd|bengtAvslojad|kapitel \|\| 1\) >= [3-4]|S\.kapitel >= [3-4]/, ['bengt', 'rolf']],
  [/\bGörans?\b/, 'goran', /kand\('goran'\)|goranSedd|goranForsta/, ['goran', 'rolf']],
  [/\bKjelle/, 'kjelle', /kand\('kjelle'\)|kjelle(Forsta|Hord|Jul)/, ['kjelle']],
  [/\bGunnars?\b/, 'gunnar', /kand\('gunnar'\)|\.gunnar\b/, ['kjelle', 'rolf', 'mamma']],
  [/\bBirgittas?\b/, 'birgitta', /kand\('birgitta'\)|rolfKand|S\.rolf\??\.i/, ['rolf']],
  [/\bRudolfs?\b/, 'rudolf', /kand\('rudolf'\)|rudolfKand/, ['chefen', 'rudolf']],
  [/Gun-Britt/, 'gunbritt', /kand\('gunbritt'\)|S\.gunBritt/, ['gunbritt']],
  [/\btippen\b/i, 'tippen', /kand\('tippen'\)|tippNyckel|rolfKand|S\.dag >= ?[2-9]|S\.dag > 1|kapitel/, ['rolf', 'bror']],
  [/\btornet\b/i, 'torn', /kand\('torn'\)|skrivareStar|torn/, []],
  [/\bsopbil/i, 'sopbil', /kand\('sopbil'\)|sopbilSett|rolfKand/, ['rolf']],
];
const fel = [], ok = { villkor: 0, presentatör: 0, senare: 0, undantag: 0, kod: 0 };
const anvandaUndantag = new Set();
for (const fil of fs.readdirSync(rot).filter((f) => f.endsWith('.js') && !/^(intro-bilder|regelvakt)\.js$/.test(f))) {
  const rader = fs.readFileSync(rot + fil, 'utf8').split('\n'); let block = '(toppen)';
  rader.forEach((rad, i) => {
    const bm = rad.match(/^(?:export )?(?:async )?(?:const|let|var|function\*?|class) +(\w+)/); if (bm) block = bm[1]; else if (/^[a-zA-Z_$]/.test(rad) && !/^(if|for|while|try|\}|\)|else)/.test(rad)) block = '(toppen)';
    if (/^\s*(\/\/|\/\*|\*)/.test(rad)) return;
    const kod = rad.replace(/\/\*.*?\*\//g, '').replace(/\s\/\/ .*$/, '');
    for (const m of kod.matchAll(/'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`/g)) {
      const s = m[1] ?? m[2] ?? m[3] ?? ''; if (!/\s/.test(s) && !/^[A-ZÅÄÖ]/.test(s)) continue;   // id:n och nycklar
      if (/^[\w:.-]+$/.test(s) && !/\s/.test(s) && s.length < 14 && !/[.!?]/.test(s)) { /* ett ensamt namn som etikett, t.ex. namn: 'Rolf' */ }
      if (/^(A-\d+|[A-Z]{1,3}\d*( #\d+)?:|rad \d+|inkorg \d+|EA|ED|BO|CY)\b/.test(s)) continue;   // förklaringar till loggen (varfor) – visas aldrig
      for (const [re, k, villkor, pres] of ORD) {
        if (!re.test(s)) continue;
        const fore = kod.slice(0, m.index), ctx = (rader[i - 1] || '') + '\n' + kod;
        if (villkor.test(ctx)) { ok.villkor++; continue; }
        const vem = [...fore.matchAll(/(?:\[|vem: |replik\(|prata\(|kalla\(|sms: \[|brev: \[|\(\s*)'(\w+)',\s*$/g)].pop()?.[1] || fore.match(/vem: '(\w+)'[^']*$/)?.[1];
        if (vem && pres.includes(vem)) { ok.presentatör++; continue; }
        if (/kap(itel)?: [2-4]\b|kapitel >= [2-4]|dag: (?:[2-9]|1\d|2\d)\b|S\.dag >= (?:[2-9]|1\d|2\d)/.test(ctx) && k !== 'helen' && k !== 'goran') { ok.senare++; continue; }
        const u = undantag.find((x) => (!x.fil || x.fil === fil) && (!x.ord || [].concat(x.ord).includes(k)) && (!x.block || x.block === block) && (!x.text || new RegExp(x.text).test(s)));
        if (u) { ok.undantag++; anvandaUndantag.add(u); continue; }
        fel.push(`${fil}:${i + 1} [${block}] ${k}: "${s.slice(0, 90)}"`);
      }
    }
  });
}
const oanvanda = undantag.filter((x) => !anvandaUndantag.has(x));
const alla = process.argv.includes('--alla');
for (const f of fel.slice(0, alla ? 9999 : 40)) console.log('  ' + f);
if (oanvanda.length) console.log(`  (${oanvanda.length} undantag matchar ingen sträng längre: ${oanvanda.map((x) => x.block + ' ' + (x.text || x.ord || '')).slice(0, 5).join(' · ')})`);
console.log(`lint-okant-ord: ${fel.length} fel · godkända: ${ok.villkor} med villkor, ${ok.presentatör} sagda av den som presenterar, ${ok.senare} senare i spelet, ${ok.undantag} undantag med skäl`);
process.exit(fel.length ? 1 : 0);
