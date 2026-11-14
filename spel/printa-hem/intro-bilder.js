// Introts bilder – tecknade SVG-scener i spelets stil (inga emojis). En per ruta i INTRO.
import { PORTRATT } from './ui-kit.js';
import { FARG } from './brand.js';

// varje bild är en printad platta: natt-bakgrund, lagerlinjer över allt, faluröd kant upptill och en skruv i varje hörn
const SKRUV = (x, y) => `<circle cx="${x}" cy="${y}" r="4" fill="#c9bda4" stroke="#5b4630" stroke-width="1.4"/><path d="M${x - 2.4} ${y - 1}l4.8 2" stroke="#5b4630" stroke-width="1.4"/>`;
const S = (inre) => `<svg viewBox="0 0 320 200" class="ph-intro-svg" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="ilager" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="1.5" fill="rgba(0,0,0,.16)"/></pattern><radialGradient id="irost"><stop offset="0" stop-color="${FARG.rost}" stop-opacity=".5"/><stop offset="1" stop-color="${FARG.rost}" stop-opacity="0"/></radialGradient><clipPath id="iklipp"><rect width="320" height="200" rx="10"/></clipPath></defs>
<g clip-path="url(#iklipp)"><rect width="320" height="200" fill="${FARG.natt2}"/>${inre}<rect width="320" height="200" fill="url(#ilager)"/><ellipse cx="312" cy="196" rx="46" ry="26" fill="url(#irost)"/><rect width="320" height="6" fill="${FARG.falu}"/></g>
<rect x="1.5" y="1.5" width="317" height="197" rx="10" fill="none" stroke="${FARG.kant}" stroke-width="3"/>${SKRUV(12, 16)}${SKRUV(308, 16)}${SKRUV(12, 188)}${SKRUV(308, 188)}</svg>`;
// en porträttfigur inbäddad i scenen
const fig = (vem, x, y, st) => `<g transform="translate(${x} ${y}) scale(${st / 100})">${PORTRATT[vem].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g>`;
const golv = (f = FARG.planka) => `<rect x="0" y="150" width="320" height="50" fill="${f}"/><rect y="150" width="320" height="3" fill="rgba(0,0,0,.3)"/>${[60, 150, 230, 300].map((x, i) => `<path d="M${x} ${153 + (i % 2) * 24}v${24 - (i % 2) * 0}" stroke="rgba(0,0,0,.25)" stroke-width="2"/>`).join('')}<path d="M0 176h320" stroke="rgba(0,0,0,.22)" stroke-width="2"/>`;
const pizza = (x, y, r = 0) => `<g transform="translate(${x} ${y}) rotate(${r})"><rect width="46" height="10" rx="2" fill="#c89b5c"/><rect y="-3" width="46" height="4" rx="1.5" fill="#d9ad6c"/><text x="23" y="8" font-size="6" font-weight="800" fill="#8a3a20" text-anchor="middle">PIZZA</text></g>`;
const strumpa = (x, y, r = 0) => `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M0 0h9v16c0 3 2 4 6 4h4v7H6c-4 0-6-3-6-6z" fill="#e8eef5"/><rect y="2" width="9" height="3" fill="#e05a5a"/></g>`;
// skrivbordskalender – står still mellan rutorna medan bladen rivs av: förra dagens blad viks upp och försvinner
const sida = (dag) => `<rect y="22" width="80" height="66" rx="4" fill="#fff"/><text x="40" y="66" font-size="16" font-weight="900" fill="#333" text-anchor="middle" font-family="system-ui">${dag}</text>`;
export const kalender = (dag, x = 40, y = 30, fore = null) => `<g transform="translate(${x} ${y})"><rect y="4" width="80" height="88" rx="8" fill="#d8d0c0"/><rect y="2" width="80" height="88" rx="8" fill="#ece6da"/>${sida(dag)}${fore ? `<g class="ph-kal-blad">${sida(fore)}</g>` : ''}<rect width="80" height="26" rx="8" fill="#e05a5a"/><rect y="18" width="80" height="8" fill="#e05a5a"/><circle cx="20" cy="4" r="4" fill="#555"/><circle cx="60" cy="4" r="4" fill="#555"/></g><style>.ph-kal-blad{transform-box:fill-box;transform-origin:50% 0;animation:phKalBlad 1.4s .5s ease-in forwards}@keyframes phKalBlad{0%{transform:scaleY(1) skewX(0)}45%{transform:scaleY(.35) skewX(-8deg);opacity:1}80%{transform:scaleY(-.15) translateY(-10px) skewX(-14deg);opacity:.6}100%{transform:scaleY(-.3) translateY(-40px) rotate(-25deg);opacity:0}}</style>`;
const bubbla = (x, y, w, t) => `<g transform="translate(${x} ${y})"><rect y="3" width="${w}" height="26" rx="8" fill="#b9ad94"/><rect width="${w}" height="26" rx="8" fill="${FARG.papper}"/><path d="M10 24l-4 10 14-10z" fill="${FARG.papper}"/><text x="${w / 2}" y="18" font-size="12.5" font-weight="900" fill="${FARG.lingon}" text-anchor="middle" font-family="Arial Black,Impact,system-ui">${t}</text></g>`;
const skrivare = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="0" y="40" width="54" height="8" fill="#333"/><rect x="3" y="0" width="5" height="42" fill="#8c8c8c"/><rect x="46" y="0" width="5" height="42" fill="#8c8c8c"/><rect x="3" y="0" width="48" height="5" fill="#8c8c8c"/><rect x="5" y="18" width="44" height="4" fill="#8c8c8c"/><rect x="22" y="16" width="9" height="10" fill="#555"/><rect x="9" y="36" width="36" height="4" fill="#1f1f1f"/><circle cx="58" cy="20" r="9" fill="#3de3ff" stroke="#222" stroke-width="3"/></g>`;
const skjul = (x, y, s = 1, fint = false) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 30L45 0l45 30z" fill="${fint ? '#3d4048' : '#5a4632'}"/><rect x="6" y="30" width="78" height="54" fill="${fint ? FARG.falu : '#6b5238'}"/>${fint ? '<rect x="6" y="30" width="5" height="54" fill="#fff"/><rect x="79" y="30" width="5" height="54" fill="#fff"/><rect x="14" y="42" width="20" height="16" fill="#ffe7a8" stroke="#fff" stroke-width="3"/><rect x="56" y="48" width="20" height="36" fill="#7a4e2a"/><circle cx="72" cy="66" r="2" fill="#ffd43b"/>' : '<path d="M14 30v54M26 30v54M38 30v54M50 30v54M62 30v54M74 30v54" stroke="#3e2f20" stroke-width="2"/><rect x="34" y="52" width="22" height="32" fill="#1c140c"/>'}</g>`;
const flaska = (x, y, f = '#7fc8f8') => `<g transform="translate(${x} ${y})"><rect x="3" y="0" width="6" height="6" fill="${f}"/><rect y="6" width="12" height="26" rx="4" fill="${f}" opacity=".9"/></g>`;
const pil = (x, y) => `<path transform="translate(${x} ${y})" d="M0 6h16V0l12 10-12 10v-6H0z" fill="${FARG.fil}"/>`;
const trad = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-3" y="40" width="6" height="14" fill="#5a3d22"/><path d="M0 0l20 44H-20z" fill="#2f7a4a"/></g>`;

export const INTRO_BILDER = [
  // 1 – rummet, som vanligt
  S(`${golv()}<rect x="200" y="96" width="100" height="40" rx="6" fill="#4a6fb0"/><rect x="200" y="86" width="30" height="18" rx="5" fill="#e8eef5"/><rect x="200" y="132" width="100" height="18" fill="#2c3e60"/>
    ${pizza(30, 140, -8)}${pizza(44, 128, 6)}${pizza(36, 117, -3)}${pizza(120, 145, 12)}${strumpa(96, 120, -30)}${strumpa(170, 130, 25)}${strumpa(250, 70, 10)}
    <g transform="translate(150 150)"><rect x="-16" y="-8" width="32" height="14" rx="7" fill="#444"/><circle cx="-8" cy="-1" r="2.5" fill="#bbb"/><circle cx="8" cy="-3" r="2" fill="#e05a5a"/><circle cx="11" cy="1" r="2" fill="#3c9be0"/></g>
    <g transform="translate(70 90)"><rect width="16" height="22" rx="3" fill="#f1c40f"/><rect y="6" width="16" height="9" fill="#e05a5a"/></g><path d="M180 60q8-10 0-20M188 60q8-10 0-20" stroke="#9fd18b" stroke-width="3" fill="none" opacity=".7"/>`),
  // 2–4 – mamma tjatar, dag efter dag
  S(`${kalender('MÅNDAG', 40, 30, 'SÖNDAG')}${fig('mamma', 190, 40, 100)}`),
  S(`${kalender('TISDAG', 40, 30, 'MÅNDAG')}${fig('mamma', 190, 40, 100)}<path d="M180 30l8 10M300 30l-8 10" stroke="#e05a5a" stroke-width="5" stroke-linecap="round"/>`),
  S(`${kalender('ONSDAG', 40, 30, 'TISDAG')}${fig('mamma', 190, 40, 100)}<path d="M150 70q10-12 0-24M162 74q10-12 0-24" stroke="#9fd18b" stroke-width="4" fill="none"/>`),
  // 5 – torsdag: tjat, tjat, tjat
  S(`${kalender('TORSDAG', 40, 30, 'ONSDAG')}${bubbla(150, 30, 80, 'STÄDA!')}${bubbla(170, 80, 90, 'STÄDA!!')}${bubbla(150, 130, 100, 'STÄDA!!!')}`),
  // 6 – dörren flyger upp
  S(`${golv()}<rect x="110" y="20" width="100" height="130" fill="#2a2440"/><g transform="skewY(-12) translate(60 30)"><rect x="50" y="10" width="60" height="120" fill="#c98a4b"/><circle cx="100" cy="72" r="4" fill="#ffd43b"/></g>
    ${fig('mamma', 135, 50, 60)}<path d="M100 20l-20-14M220 20l20-14M96 80H70M224 80h26M104 140l-20 14M216 140l20 14" stroke="${FARG.lingon}" stroke-width="5" stroke-linecap="round"/>`),
  // 7 – mamma pekar mot dörren
  S(`${golv()}${fig('mamma', 50, 30, 110)}<path d="M160 90h70" stroke="#f2c9a5" stroke-width="10" stroke-linecap="round"/><path d="M232 82l14 8-14 8z" fill="#f2c9a5"/><rect x="260" y="40" width="44" height="110" fill="#6b5238"/><rect x="266" y="46" width="32" height="104" fill="#1c140c"/>`),
  // 8 – du
  S(`${golv()}${fig('du', 110, 30, 110)}<text x="245" y="70" font-size="40" font-weight="900" fill="#fff" opacity=".6" font-family="system-ui">…</text>`),
  // 9 – ryggsäck + storebrors skrivare
  S(`${golv()}<g transform="translate(60 60)"><rect width="70" height="86" rx="18" fill="#2d6cdf"/><rect x="12" y="44" width="46" height="30" rx="8" fill="#2558b8"/><path d="M18 0q17-22 34 0" stroke="#1d4590" stroke-width="7" fill="none"/></g>
    <text x="155" y="112" font-size="34" font-weight="900" fill="${FARG.fil}" font-family="system-ui">+</text>${skrivare(190, 72, 1.4)}`),
  // 10 – soptippen, skjulet och gården full av skräp
  S(`<rect width="320" height="200" fill="#a9cfe0"/><rect y="130" width="320" height="70" fill="#8a7a55"/>${trad(30, 76)}${trad(60, 70, 1.2)}${trad(295, 74)}
    ${skjul(110, 50, 0.95)}<path d="M200 140q30-40 60-30t50 30z" fill="#6d6d6d"/>${flaska(214, 112, '#6ad48a')}${flaska(240, 108)}${flaska(268, 116, '#f5f5f5')}<rect x="226" y="122" width="20" height="14" fill="#e0a050"/>
    <g transform="translate(20 132)"><rect width="70" height="30" rx="4" fill="#2e8b57"/><rect x="50" y="-12" width="26" height="42" rx="4" fill="#f5f5f5"/><circle cx="16" cy="32" r="8" fill="#222"/><circle cx="62" cy="32" r="8" fill="#222"/></g>
    ${flaska(100, 150)}${flaska(170, 158, '#f5f5f5')}`),
  // 11 – skräp blir plast blir filament blir … allt
  S(`${flaska(18, 80)}${pil(42, 86)}<g transform="translate(80 70)"><rect width="44" height="50" rx="6" fill="#6d7b8a"/><path d="M-2 0h48l-10-18H8z" fill="#9aa9b8"/></g>${pil(132, 86)}
    <g transform="translate(186 96)"><circle r="20" fill="#3de3ff" stroke="#222" stroke-width="6"/><circle r="5" fill="#222"/></g>${pil(214, 86)}${skrivare(248, 62, 1)}`),
  // 12 – planen: skjul → riktigt hem med gamingsetup
  S(`<rect width="320" height="200" fill="${FARG.natt2}"/>${golv()}${skjul(20, 66, 0.9)}${pil(122, 120)}${skjul(160, 50, 1.1, true)}
    <g transform="translate(262 110)"><rect width="40" height="26" rx="3" fill="#111"/><rect x="3" y="3" width="34" height="20" fill="#7d4dff"/><rect x="16" y="26" width="8" height="10" fill="#333"/><rect x="4" y="36" width="32" height="4" fill="#ff3cac"/></g>
    <path d="M240 40l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="${FARG.fil}"/>`),
];
