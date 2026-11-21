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
while ((m = re.exec(spel))) { const t = m[2]; if (t.length < 12 || !/\s/.test(t) || /^[\w.:#-]+$/.test(t) || /[{}<>;=]/.test(t) && !/\$\{/.test(t)) continue; strangar.push({ t, rad: spel.slice(0, m.index).split('\n').length }); }
const traffar = [];
for (const { t, rad } of strangar) for (const [namn, r] of Object.entries(REGLER)) if (r.test(t)) traffar.push({ regel: namn, text: t.slice(0, 90), rad });
// VISNING UTAN STEG: kontrollhjälp för en handling som styrs av lösa flaggor i stället för stegets handling
const kh = spel.slice(spel.indexOf('const KONTROLL_HJALP = ['), spel.indexOf('\n];', spel.indexOf('const KONTROLL_HJALP = [')));
for (const rad of kh.split('\n')) { const id = /id: '(\w+)'/.exec(rad)?.[1]; if (!id) continue; if (/nar: \(\) => /.test(rad) && !/aktivtStoryStag|kedjaNu|kanNu|kHjalpKlar|hjalpBehov|valdTyp|MAT_VARDE|MONTERA|TA_PA|spoke|S\.sms|S\.dag <= 1 && S\.steg <= 1|S\.hotbar/.test(rad.split('nar:')[1] || '')) traffar.push({ regel: 'VISNING UTAN STEG', text: `KONTROLL_HJALP ${id}`, rad: 0 }); }
const fil = new URL('./lint-story-undantag.json', import.meta.url);
const nyckel = (x) => `${x.regel}|${x.text}`;
if (process.argv.includes('--undantag')) { fs.writeFileSync(fil, JSON.stringify(traffar.map((x) => ({ regel: x.regel, text: x.text, skal: /skylt|skrivare|cykel|kvarn|generator|powerbank|grip|kruka|säng|nyckelring/i.test(x.text) ? 'dag 1: pekrutan, info eller en tanke som säger var saken är just då (sägs när saken är där) – gås igenom mot lage() i omgång 2' : 'dag 2–23 – flyttas till story.js i omgång 3' })), null, 1)); console.log(`lint-story: ${traffar.length} undantag skrivna`); process.exit(0); }
const und = new Set((fs.existsSync(fil) ? JSON.parse(fs.readFileSync(fil, 'utf8')) : []).map(nyckel));
const nya = traffar.filter((x) => !und.has(nyckel(x)));
if (nya.length) { console.log(`lint-story: ${nya.length} nya träffar utanför story.js`); nya.slice(0, 20).forEach((x) => console.log(`  ✗ ${x.regel} rad ${x.rad}: "${x.text}"`)); process.exit(1); }
console.log(`lint-story: 0 nya · ${und.size} gamla undantag med skäl (lint-story-undantag.json)`);
