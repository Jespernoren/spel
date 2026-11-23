// lint-story (inkorg 58 §4 p.4, A-113): texter utanför story.js får inte uppmana, säga var en sak är, eller kalla ett köp för en gåva.
//   UPPMANING UTAN STEG · PLATS UTAN LÄGE · VISNING UTAN STEG · GÅVA SOM KÖP
// Det som redan finns (dag 2–23, som flyttas i omgång 3, och stämning) står i lint-story-undantag.json med skäl. Nya träffar stoppar committen.
// Kör: node verktyg/lint-story.mjs   ·   skriv om undantagen: node verktyg/lint-story.mjs --undantag
import fs from 'node:fs';
const spel = fs.readFileSync(new URL('../spel/printa-hem/spel.js', import.meta.url), 'utf8');
const REGLER = {
  'UPPMANING UTAN STEG': /\b(först borde|nu ska jag|jag behöver|dags att|glöm inte|ska in i|ska upp på|ska stå|ska bli)\b/i,
  'PLATS UTAN LÄGE': /\b(där borta|vid vägen|i handen|i kistan|i ryggsäcken|på cykeln)\b/i,
  'GÅVA SOM KÖP': /\bAli ger dig\b.*\bkr\b|\bköpte\b.*\bgratis\b/i,
};
const strangar = []; const re = /(['`])((?:\\.|(?!\1)[^\\\n])*?)\1/g; let m;
/* inkorg 58 rest: regler i stället för undantag. Det som inte räknas, med skäl:
   1. det spelaren aldrig ser – regelvaktens flaggor och meddelanden, loggar och felsökning
   2. andra figurers sms, brev och repliker – de säger inte var dina saker är och ger dig inga mål
   3. ett nej på ett klick (felljudet på samma rad eller strax före) – det är svaret på det du gjorde, ingen uppmaning
   4. menyer (html) – de visas bara när du själv öppnat dem
   5. tabeller som hör till saken i handen (MONTERA_TIPS) och klagotankar som hör till ett steg via las (KLAGO, kollas nedan) */
const fore = (i, n) => spel.slice(Math.max(0, i - n), i);
const sats = (i) => { const f = fore(i, 600); const k = Math.max(f.lastIndexOf(';\n'), f.lastIndexOf('{\n'), f.lastIndexOf('}\n')); return f.slice(k + 1); };
const iBlock = (i, namn) => { const a = spel.lastIndexOf('const ' + namn + ' = {', i); return a >= 0 && spel.indexOf('\n};', a) > i; };
const kategori = (i) => {
  const st = sats(i);
  if (/(regelvakt\.(regel|brott)|textLogg|console\.\w+|laggFynd|stLogg|throw new Error)\(/.test(st) && !/(tanke|prata|kortTanke|notisVisa)\([^)]*$/.test(st)) return 'intern';
  if (/\b(sms|smsFram)\(\s*'?\w*'?,?\s*$|\{ sms: \[\s*'\w+',\s*$|replik\(\s*'\w+',\s*$|bubbla\([^,]+,\s*$/.test(fore(i, 60))) return 'annan';
  if (/ljud\.fel\(\)/.test(fore(i, 220).split('\n').pop() + ' ' + fore(i, 220)) && /(tanke|kortTanke|regi\.info|prata)\(/.test(fore(i, 120))) return 'nej';
  if (iBlock(i, 'MONTERA_TIPS') || iBlock(i, 'KLAGO') || iBlock(i, 'VARN') || iBlock(i, 'PLATS_VAR') || /const (TANKAR_NYA|TANKAR_INLINE) = \[[^\n]*$/.test(fore(i, 4000)) || /const STROM_DIPP_T = \[[^\]]*$/.test(fore(i, 600))) return 'tabell';
  if (/vem: '(?!du')[\w-]+'[^}]*\btext: $/.test(fore(i, 300))) return 'annan';
  if (/^(['`])((?:\\.|(?!\1)[^\\\n])*?)\1, 'fel'\)/.test(spel.slice(i, i + 400))) return 'nej';   // regi.info(text, 'fel') – svaret på ett klick
  { const namn = /\b([A-Z][A-Z0-9_]+) = $/.exec(fore(i, 40))?.[1]; const R = spel.split('\n'); if (namn && R.some((r, j) => r.includes(namn) && !r.includes(namn + ' =') && /ljud\.fel\(|ljudH\('fel'\)|varna\(|'fel'\)/.test(R.slice(Math.max(0, j - 3), j + 1).join('\n')))) return 'nej'; }   // en konstant som används som nej-svar
  { const rader = fore(i, 900).split('\n').slice(-6).join('\n'); if (/regelvakt\.regel\(|Fynd\.push\(/.test(rader) && !/(tanke|prata|kortTanke|notisVisa|regi\.info)\(/.test(rader.slice(rader.search(/regelvakt\.regel\(|Fynd\.push\(/)))) return 'intern'; }
  if (/\bif \(/.test(sats(i)) && /(tanke|paket|regi\.info|kortTanke)\(/.test(sats(i))) return 'villkor';   // rad 55: en uppmaning med ett villkor är tillåten
  return '';
};
while ((m = re.exec(spel))) { const t = m[2]; if (kategori(m.index)) continue; if (/<\/?[a-z]+[ >]|class=\\?"/.test(t)) continue; if (t.length < 12 || !/\s/.test(t) || /^[\w.:#-]+$/.test(t) || /[{}<>;=]/.test(t) && !/\$\{/.test(t)) continue; strangar.push({ t, rad: spel.slice(0, m.index).split('\n').length }); }
const traffar = [];
// inte ett läge: ett mål för handlingen ("Montera X på cykeln", "X ska kopplas in på cykeln"), ett fast landmärke (skylten sitter vid vägen),
// en etikett i koden (varfor/skratt/inkorg …) och introts berättarrader (en scen, inget steg)
const INTE_LAGE = [/\b(sak|något|verktyget) i handen\b/i, /^I handen: \$\{/, /\b(brädhögen|tavlan|skjulet) (ligger |sitter )?vid vägen/i, /^\$\{[^}]+\} ligger i (kistan|handen)/, /^där borta\b|\bdär borta (skiner|stod|bor|egentligen)|blänker i fönstret där borta/i, /\b(montera|ställ|lägg|koppla|häng|sätt|ge)\b[^.]*\b(på cykeln|i kistan|vid vägen|i ryggsäcken)/i, /\bska (kopplas in|sitta|monteras|stå)\b/i, /skylt(en)? vid vägen/i, /^(inkorg|A-\d|EA|EC|ED|CT|DT)\b/];
const iIntro = (rad) => { const fore = spel.split('\n').slice(0, rad).join('\n'); const i = fore.lastIndexOf('const INTRO'); return i >= 0 && !/\n\];/.test(fore.slice(i)); };
for (const { t, rad } of strangar) for (const [namn, r] of Object.entries(REGLER)) if (r.test(t) && !iIntro(rad) && !(namn === 'PLATS UTAN LÄGE' && INTE_LAGE.some((x) => x.test(t)))) traffar.push({ regel: namn, text: t.slice(0, 90), rad });
// VISNING UTAN STEG: kontrollhjälp för en handling som styrs av lösa flaggor i stället för stegets handling
const kh = spel.slice(spel.indexOf('const KONTROLL_HJALP = ['), spel.indexOf('\n];', spel.indexOf('const KONTROLL_HJALP = [')));
for (const rad of kh.split('\n')) { const id = /id: '(\w+)'/.exec(rad)?.[1]; if (!id) continue; if (/nar: \(\) => /.test(rad) && !/aktivtStoryStag|kedjaNu|kanNu|kHjalpKlar|hjalpBehov|valdTyp|MAT_VARDE|MONTERA|TA_PA|spoke|S\.sms|S\.dag <= 1 && S\.steg <= 1|S\.hotbar/.test(rad.split('nar:')[1] || '')) traffar.push({ regel: 'VISNING UTAN STEG', text: `KONTROLL_HJALP ${id}`, rad: 0 }); }
const fil = new URL('./lint-story-undantag.json', import.meta.url);
const nyckel = (x) => `${x.regel}|${x.text}`;
if (process.argv.includes('--undantag')) { fs.writeFileSync(fil, JSON.stringify(traffar.map((x) => ({ regel: x.regel, text: x.text, skal: 'dag 2–23 – flyttas till story.js i omgång 3' })), null, 1)); console.log(`lint-story: ${traffar.length} undantag skrivna`); process.exit(0); }
const und = new Set((fs.existsSync(fil) ? JSON.parse(fs.readFileSync(fil, 'utf8')) : []).map(nyckel));
const nya = traffar.filter((x) => !und.has(nyckel(x)));
if (nya.length) { console.log(`lint-story: ${nya.length} nya träffar utanför story.js`); nya.slice(0, 20).forEach((x) => console.log(`  ✗ ${x.regel} rad ${x.rad}: "${x.text}"`)); process.exit(1); }
console.log(`lint-story: 0 nya · ${und.size} gamla undantag med skäl (lint-story-undantag.json)`);
