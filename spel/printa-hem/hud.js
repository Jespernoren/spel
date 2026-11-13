// =============================================================
//  hud.js – statuspanelen uppe till vänster (Sims-känsla):
//    • digital klocka: dag + tid, alltid i hörnet
//    • trivsel: en gubbe som är ledsen … glad … stjärnögd + mätare
//    • respekt: ett hjärta som är sprucket … rött … gyllene + mätare
//  och uppdragslistan under: dagens mål med bockar.
// =============================================================
import { FARG } from './brand.js';

// ---- ansiktet: 0 ledsen (tår) · 1 sur · 2 sådär · 3 glad · 4 stjärnögon ----
export function ansikte(niva) {
  const ogon = niva === 4
    ? '<path d="M9 9.2l.7 1.4 1.5.2-1.1 1 .3 1.5L9 12.6l-1.4.7.3-1.5-1.1-1 1.5-.2z" fill="#fff4a8" stroke="#7a4b00" stroke-width=".5"/><path d="M15 9.2l.7 1.4 1.5.2-1.1 1 .3 1.5-1.4-.7-1.4.7.3-1.5-1.1-1 1.5-.2z" fill="#fff4a8" stroke="#7a4b00" stroke-width=".5"/>'
    : niva === 0 ? '<path d="M7.5 9.5l2 1M16.5 9.5l-2 1" stroke="#3a2600" stroke-width="1.3" stroke-linecap="round"/><circle cx="9" cy="11.2" r="1.1" fill="#3a2600"/><circle cx="15" cy="11.2" r="1.1" fill="#3a2600"/>'
    : '<circle cx="9" cy="10.5" r="1.2" fill="#3a2600"/><circle cx="15" cy="10.5" r="1.2" fill="#3a2600"/>';
  const mun = ['<path d="M8.5 17.2q3.5-3 7 0" stroke="#3a2600" stroke-width="1.4" fill="none" stroke-linecap="round"/>',
    '<path d="M9 16.6q3-1.6 6 0" stroke="#3a2600" stroke-width="1.4" fill="none" stroke-linecap="round"/>',
    '<path d="M9 16h6" stroke="#3a2600" stroke-width="1.4" stroke-linecap="round"/>',
    '<path d="M8.5 14.8q3.5 3.2 7 0" stroke="#3a2600" stroke-width="1.4" fill="none" stroke-linecap="round"/>',
    '<path d="M8 14.2q4 5.2 8 0z" fill="#7a2a1a"/><path d="M9.6 16.2q2.4 1.4 4.8 0" fill="#ff8a80"/>'][niva];
  const hy = ['#f2c14e', '#f2c14e', '#f6cc4e', '#ffd43b', '#ffd43b'][niva];
  const tar = niva === 0 ? '<path d="M16.8 12.6q.9 1.6 0 2.4q-.9-.8 0-2.4z" fill="#6ec6ff"/>' : '';
  const kinder = niva >= 3 ? '<circle cx="6.8" cy="14" r="1.3" fill="#ff8a65" opacity=".55"/><circle cx="17.2" cy="14" r="1.3" fill="#ff8a65" opacity=".55"/>' : '';
  return `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10.5" fill="${hy}" stroke="#7a4b00" stroke-width="1.2"/>${kinder}${ogon}${mun}${tar}</svg>`;
}
// ---- hjärtat: 0 sprucket grått · 1 blekt · 2 rött · 3 rött med glans · 4 gyllene med gnistor ----
export function hjarta(niva) {
  const H = 'M12 20.5s-7.5-4.6-9.2-9.4C1.7 7.8 3.9 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 3.3 0 5.5 3.3 4.4 6.6C19.5 15.9 12 20.5 12 20.5z';
  const fyll = ['#8b8f99', '#e8a3b0', FARG.lingon, '#e0283f', '#ffb400'][niva];
  const kant = ['#555a66', '#b5677a', '#7a1222', '#7a1222', '#9a5a00'][niva];
  const spricka = niva === 0 ? '<path d="M12 7.3l-1.4 3 2 1.6-1.3 3.2 1 2.6" stroke="#3b3f48" stroke-width="1.2" fill="none" stroke-linejoin="round"/>' : '';
  const glans = niva >= 3 ? '<path d="M6.3 8.2q1.2-1.6 3-1.2" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round" opacity=".75"/>' : '';
  const gnistor = niva === 4 ? '<g class="hud-gnista" fill="#fff4a8"><path d="M20.5 2.5l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z"/><path d="M3 2.8l.4 1 1 .4-1 .4-.4 1-.4-1-1-.4 1-.4z"/></g>' : '';
  return `<svg viewBox="0 0 24 24"><path d="${H}" fill="${fyll}" stroke="${kant}" stroke-width="1.3"/>${spricka}${glans}${gnistor}</svg>`;
}

const LAGER = 'repeating-linear-gradient(0deg,rgba(0,0,0,.13) 0 2px,rgba(255,255,255,.035) 2px 3px,transparent 3px 5px)';
const LAGER_SVAG = 'repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 1px,transparent 1px 4px)';
export const HUD_CSS = `
.fp-topp{left:calc(max(12px,env(safe-area-inset-left)) + 262px)!important;transform:none!important;top:max(12px,env(safe-area-inset-top))!important;flex-wrap:wrap;max-width:calc(100vw - 290px)}
.hud-status{position:fixed;left:max(12px,env(safe-area-inset-left));top:max(12px,env(safe-area-inset-top));z-index:22;display:flex;flex-direction:column;gap:6px;width:250px;pointer-events:none;font-family:system-ui,sans-serif;color:#fff}
.hud-klocka{pointer-events:auto;cursor:pointer;display:flex;align-items:baseline;gap:10px;padding:7px 12px 6px;border-radius:10px;background:${LAGER_SVAG},#0f1217;border:2px solid #2b303c;border-bottom:4px solid #07080b;box-shadow:inset 0 0 14px rgba(76,201,240,.08)}
.hud-klocka .dag{font:900 13px var(--rubrik);letter-spacing:.08em;color:var(--papper)}
.hud-klocka .tid{font:700 24px/1 "Courier New",ui-monospace,monospace;letter-spacing:.06em;color:#7dffb0;text-shadow:0 0 8px rgba(125,255,176,.45)}
.hud-klocka .tid.natt{color:#ffb3bd;text-shadow:0 0 8px rgba(255,120,140,.4)}
.hud-klocka .arstid{margin-left:auto;font:700 11px system-ui;color:#9aa3b5;text-transform:uppercase;letter-spacing:.08em}
.hud-matare{pointer-events:auto;cursor:pointer;display:flex;align-items:center;gap:9px;padding:5px 10px 5px 6px;border-radius:10px;background:${LAGER_SVAG},rgba(25,28,36,.88);border:1px solid rgba(255,255,255,.07);border-bottom:3px solid rgba(0,0,0,.45)}
.hud-ikon{width:34px;height:34px;flex:none;filter:drop-shadow(0 2px 2px rgba(0,0,0,.4))}.hud-ikon svg{width:100%;height:100%;display:block}
.hud-ikon.studs{animation:hudStuds .5s cubic-bezier(.3,1.6,.5,1)}
@keyframes hudStuds{0%{transform:scale(.7)}100%{transform:scale(1)}}
.hud-ikon.niva4{animation:hudPuls 1.6s ease-in-out infinite}
@keyframes hudPuls{50%{transform:scale(1.08)}}
.hud-gnista{animation:hudGnista 1.2s ease-in-out infinite}@keyframes hudGnista{50%{opacity:.2}}
.hud-m{flex:1;min-width:0}
.hud-m .rad{display:flex;justify-content:space-between;font:800 12px system-ui;letter-spacing:.04em;margin-bottom:4px}
.hud-m .rad span{color:#c5ccda;text-transform:uppercase}.hud-m .rad b{font-weight:900}
.hud-bar{height:10px;border-radius:3px;background:rgba(0,0,0,.45);overflow:hidden;box-shadow:inset 0 1px 2px rgba(0,0,0,.5)}
.hud-bar i{display:block;height:100%;width:0;border-radius:3px;transition:width .6s cubic-bezier(.2,.9,.3,1),background .6s;background-image:${LAGER}}
.ph-mal.hud-uppdrag{position:fixed;left:max(12px,env(safe-area-inset-left));top:auto;z-index:21;width:250px;max-width:none;padding:9px 12px 10px;border-radius:10px;background:${LAGER_SVAG},rgba(25,28,36,.88)!important;border:1px solid rgba(255,255,255,.07);border-left:5px solid var(--falu);border-bottom:3px solid rgba(0,0,0,.45);box-shadow:none}
.hud-uppdrag .ph-mal-del{display:flex!important;justify-content:space-between;font:900 11px var(--rubrik)!important;letter-spacing:.08em!important;color:var(--papper);opacity:1!important}
.hud-antal{position:absolute;right:11px;top:9px;font:900 11px var(--rubrik);font-style:normal;color:var(--fil);letter-spacing:.06em}
.hud-uppdrag .ph-mal-text{display:block;font:700 14px/1.35 system-ui;margin:4px 0 6px}
.hud-lista{list-style:none;margin:0;padding:6px 0 0;border-top:1px solid rgba(255,255,255,.08);font:600 12.5px/1.35 system-ui}
.hud-lista li{display:flex;gap:7px;align-items:flex-start;padding:2px 0;color:#7d869a}
.hud-lista li .b{flex:none;width:15px;height:15px;margin-top:1px;border-radius:4px;border:2px solid #4a5268;display:grid;place-items:center;font:900 10px system-ui}
.hud-lista li.klar{color:#8fa39a;text-decoration:line-through;text-decoration-color:rgba(143,163,154,.5)}
.hud-lista li.klar .b{background:#2f8a52;border-color:#2f8a52;color:#fff}
.hud-lista li.nu{color:#fff}.hud-lista li.nu .b{border-color:var(--fil);box-shadow:0 0 0 2px rgba(76,201,240,.25)}
.hud-lista li.precis .b{animation:hudStuds .6s cubic-bezier(.3,1.6,.5,1)}
`;

// mätarfärg: rött → gult → grönt
export const matarFarg = (p) => `hsl(${Math.round(Math.max(0, Math.min(1, p)) * 125)},75%,48%)`;
