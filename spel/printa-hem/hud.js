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
.fp-topp{left:calc(max(12px,env(safe-area-inset-left)) + 292px)!important;transform:none!important;top:max(12px,env(safe-area-inset-top))!important;flex-wrap:wrap;max-width:calc(100vw - 320px)}
.hud-status{position:fixed;left:max(12px,env(safe-area-inset-left));top:max(12px,env(safe-area-inset-top));z-index:22;display:flex;flex-direction:column;gap:6px;width:280px;pointer-events:none;font-family:system-ui,sans-serif;color:#fff}
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
.hud-flikar{position:fixed;right:max(12px,env(safe-area-inset-right));top:max(12px,env(safe-area-inset-top));z-index:22;display:flex;gap:8px}
.hud-flik{position:relative;width:46px;height:46px;border-radius:10px;border:1px solid rgba(255,255,255,.07);border-bottom:3px solid rgba(0,0,0,.45);background:${LAGER_SVAG},rgba(25,28,36,.88);color:var(--papper);display:grid;place-items:center;cursor:pointer;pointer-events:auto}
.hud-flik:hover{background-color:#2c3242}.hud-flik .ui-ik{width:24px;height:24px}
.hud-flik em{position:absolute;right:-5px;top:-5px;min-width:20px;height:20px;border-radius:10px;padding:0 5px;background:var(--lingon);color:#fff;font:900 12px/20px system-ui;font-style:normal;box-shadow:0 2px 0 #7a1222}
.hud-flik.larm{animation:hudPuls 1.2s ease-in-out infinite;color:#fff}
.ph-notis.klickbar{pointer-events:auto;cursor:pointer}.ph-notis.klickbar:hover{filter:brightness(1.15)}
.hud-klarad{position:relative;display:flex;gap:8px;align-items:flex-start;margin:4px -6px 6px;padding:6px;border-radius:8px;background:rgba(47,138,82,.35);box-shadow:0 0 0 2px #2f8a52;font:700 14px/1.35 system-ui;color:#d8ffe6;overflow:visible;max-height:120px;animation:hudStuds .4s cubic-bezier(.3,1.6,.5,1);transition:max-height .45s ease,opacity .45s ease,margin .45s ease,padding .45s ease,transform .45s ease}
.hud-klarad .b{flex:none;width:18px;height:18px;border-radius:5px;background:#2f8a52;color:#fff;display:grid;place-items:center;font:900 12px system-ui}
.hud-klarad .t{background:linear-gradient(#d8ffe6,#d8ffe6) no-repeat 0 55%/0 2px;transition:background-size .5s ease}
.hud-klarad.stryk .t{background-size:100% 2px;color:#a9d8b9}
.hud-klarad.bort{max-height:0;opacity:0;margin:0 -6px;padding:0 6px;transform:translateX(40px)}
.hud-konfetti{position:absolute;top:40%;width:7px;height:10px;border-radius:2px;pointer-events:none}
.hud-ny{animation:hudStuds .5s cubic-bezier(.3,1.6,.5,1)}
.ph-meddelanden{z-index:31!important}
.hud-dagbok{position:fixed;left:50%;top:76px;transform:translateX(-50%) rotate(-.6deg);z-index:23;width:min(520px,60vw);pointer-events:none;background:#fff8e1;color:#3a2e1a;border-radius:8px;padding:12px 16px 12px;box-shadow:0 5px 0 #d8c58f,0 18px 40px rgba(0,0,0,.4);animation:hudDagIn .45s cubic-bezier(.2,.9,.3,1.2)}
@keyframes hudDagIn{from{transform:translate(-50%,-30px) rotate(-.6deg);opacity:0}}
.hud-dagbok.ut{transition:opacity .6s,transform .6s;opacity:0;transform:translate(-50%,-20px) rotate(-.6deg)}
.hud-dagbok .rub{display:flex;align-items:center;gap:8px;font:800 13px system-ui;opacity:.75;margin-bottom:4px}.hud-dagbok .rub em{margin-left:auto;font-style:normal;font-weight:700}
.hud-dagbok .txt{font:500 17px/1.45 "Comic Sans MS","Chalkboard SE","Segoe Print",system-ui,sans-serif}
.hud-dagbok-bar{height:4px;border-radius:2px;background:rgba(0,0,0,.1);margin-top:8px;overflow:hidden}.hud-dagbok-bar i{display:block;height:100%;width:0;background:#c49a6c}
.ali-niva{border-radius:10px;padding:10px 12px 12px;margin-bottom:12px;border:2px solid}
.ali-niva.salj{background:rgba(47,138,82,.12);border-color:rgba(47,138,82,.55)}
.ali-niva.kop{background:rgba(200,33,58,.10);border-color:rgba(200,33,58,.5)}
.ali-niva-rub{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.ali-niva-rub>span{display:inline-flex;align-items:center;gap:7px;font:900 15px var(--rubrik);letter-spacing:.04em;text-transform:uppercase}
.ali-niva.salj .ali-niva-rub>span{color:#7dffb0}.ali-niva.kop .ali-niva-rub>span{color:#ff8fa0}
.ali-niva-rub small{color:#9aa3b5;font-size:12.5px;flex:1}
.ali-niva-rub .ui-knapp{min-width:0;padding:7px 12px;font-size:13.5px}
.ali-niva.kop .ui-sektion span{color:#ffc2cb}
.ph-ali-panel .ui-ruta .pris.minus{color:#ffb3bd}
.hud-stopplager{position:fixed;inset:0;pointer-events:none;z-index:19}
.hud-stopp{position:absolute;left:0;top:0;transform-origin:50% 100%;min-width:120px;max-width:260px;padding:7px 11px 8px;border-radius:9px;text-align:center;color:#fff;background:${LAGER},var(--lingon);border-bottom:4px solid #7a1222;box-shadow:0 8px 20px rgba(0,0,0,.4);font-family:system-ui}
.hud-stopp::after{content:"";position:absolute;left:50%;bottom:-11px;margin-left:-7px;border:7px solid transparent;border-top-color:#7a1222}
.hud-stopp b{display:block;font:900 12px var(--rubrik);letter-spacing:.06em;text-transform:uppercase;opacity:.9}
.hud-stopp span{display:block;font:800 15px/1.25 system-ui;margin:2px 0}
.hud-stopp em{display:block;font:700 12.5px/1.3 system-ui;font-style:normal;background:rgba(0,0,0,.25);border-radius:6px;padding:3px 6px;margin-top:4px}
.hud-stopp.stopp{animation:hudStoppPuls 1.4s ease-in-out infinite}
@keyframes hudStoppPuls{50%{filter:brightness(1.18)}}
.hud-stopp.klar{background:${LAGER},#2f8a52;border-bottom-color:#1d5a35}.hud-stopp.klar::after{border-top-color:#1d5a35}
.hud-stopp.hit{background:${LAGER},#e0a82e;color:#2a1c05;border-bottom-color:#8a6510}.hud-stopp.hit::after{border-top-color:#8a6510}.hud-stopp.hit em{background:rgba(255,255,255,.3)}
.hud-flik kbd{position:absolute;left:50%;bottom:-9px;transform:translateX(-50%);font:900 10px system-ui;padding:1px 5px;border-radius:4px;background:#0f1217;border:1px solid #3a4155;color:var(--papper)}
.ph-notis .las kbd{display:inline-block;font:900 11px system-ui;padding:1px 6px;margin-right:4px;border-radius:4px;background:var(--papper);color:#191c24;border-bottom:2px solid #b9ad94}
.ph-notis.sms.klickbar{border-left:5px solid var(--fil)!important;animation:hudPuls 1.6s ease-in-out 3}
.hud-inkorg{display:flex;flex-direction:column;gap:8px}
.hud-bubbla{pointer-events:none;background:${LAGER_SVAG},rgba(25,28,36,.94);color:#fff;border-radius:12px 12px 4px 12px;padding:9px 12px 10px;border:1px solid rgba(255,255,255,.08);border-right:5px solid var(--fil);box-shadow:0 8px 22px rgba(0,0,0,.35);transform:translateX(120%);transition:transform .4s cubic-bezier(.2,.9,.3,1.15),opacity .4s}
.hud-bubbla.in{transform:none}.hud-bubbla.ut{opacity:0;transform:translateX(40px)}
.hud-bubbla.lapp{background:#fff8e1;color:#3a2e1a;border-right-color:#c49a6c}
.hud-bubbla .rub{display:flex;align-items:center;gap:8px;font:800 13px system-ui;margin-bottom:4px}.hud-bubbla .rub em{margin-left:auto;font:700 11px system-ui;font-style:normal;opacity:.65}
.hud-bubbla .txt{font:500 14px/1.4 system-ui;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden}
.hud-bubbla.lapp .txt{font-family:"Comic Sans MS","Chalkboard SE","Segoe Print",system-ui,sans-serif;font-size:15px}
.hud-bubbla.vantar{opacity:.72}.hud-bubbla.laser{box-shadow:0 0 0 2px var(--fil),0 8px 22px rgba(0,0,0,.35)}.hud-bubbla.lapp.laser{box-shadow:0 0 0 2px #c49a6c,0 8px 22px rgba(0,0,0,.35)}
.hud-bubbla-bar{height:3px;border-radius:2px;background:rgba(127,127,127,.2);margin-top:7px;overflow:hidden}.hud-bubbla-bar i{display:block;height:100%;width:0;background:var(--fil)}.hud-bubbla.lapp .hud-bubbla-bar i{background:#c49a6c}
.hud-hjultips{position:fixed;left:50%;bottom:118px;transform:translateX(-50%);z-index:22;pointer-events:none;display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:12px;background:${LAGER},var(--fil);color:#0d1a22;font:600 14px/1.35 system-ui;box-shadow:0 5px 0 var(--fil-mork),0 12px 28px rgba(0,0,0,.35);animation:hudStuds .5s cubic-bezier(.3,1.6,.5,1)}
.hud-hjultips b{font:900 15px var(--rubrik);text-transform:uppercase;letter-spacing:.03em}.hud-hjultips small{opacity:.75}
.hud-hjultips::after{content:"";position:absolute;left:50%;bottom:-10px;margin-left:-8px;border:8px solid transparent;border-top-color:var(--fil-mork)}
.hud-hjultips .mus{position:relative;width:22px;height:34px;border:3px solid #0d1a22;border-radius:12px;flex:none}
.hud-hjultips .mus i{position:absolute;left:50%;top:5px;width:4px;height:8px;margin-left:-2px;border-radius:2px;background:#0d1a22;animation:hudHjul 1s ease-in-out infinite}
@keyframes hudHjul{0%{transform:translateY(0);opacity:1}100%{transform:translateY(9px);opacity:0}}
.ali-tips{display:flex;gap:10px;align-items:flex-start;margin:0 0 12px;padding:10px 12px;border-radius:10px;background:rgba(76,201,240,.12);border:2px dashed rgba(76,201,240,.55);font:500 13.5px/1.45 system-ui;color:#d9eef7}.ali-tips .ui-ik{color:var(--fil);margin-top:2px}
.ali-unik{position:relative;margin:2px 0 14px;padding:10px 12px 12px;border-radius:10px;background:linear-gradient(135deg,rgba(255,196,57,.16),rgba(178,58,42,.10));border:2px solid #e0a82e;box-shadow:0 0 18px rgba(255,196,57,.18) inset}
.ali-unik-rub{display:flex;align-items:baseline;gap:10px;margin-bottom:8px}.ali-unik-rub span{font:900 15px var(--rubrik);color:#ffd166;letter-spacing:.05em;text-transform:uppercase;text-shadow:0 0 10px rgba(255,209,102,.4)}.ali-unik-rub small{color:#d9c79a;font-size:12.5px}
.ali-unik-grupp{margin-top:6px}.ali-unik-grupp>b{display:block;font:800 11px system-ui;letter-spacing:.08em;text-transform:uppercase;color:#f3d9a0;margin-bottom:5px}
.ali-unik .ui-ruta{border-color:#c9921f #ffe3a1 #ffe3a1 #c9921f;background:#b9a27a;box-shadow:0 0 0 1px rgba(255,209,102,.4),0 0 12px rgba(255,209,102,.35)}
.ali-unik .ui-ruta.dyr{background:#5a4a3a}
.ali-unik .ui-ruta::before{content:"★";position:absolute;right:3px;bottom:1px;font-size:12px;color:#ffd166;text-shadow:0 1px 2px #000}
.hud-musfri{position:absolute;right:0;top:56px;white-space:nowrap;font:700 11px system-ui;color:#c5ccda;background:rgba(25,28,36,.75);padding:2px 7px;border-radius:6px}.hud-musfri kbd{font:900 10px system-ui;padding:0 4px;border-radius:3px;background:var(--papper);color:#191c24;margin-right:3px}
body.mus-fri .hud-flik{box-shadow:0 0 0 2px var(--fil);animation:hudPuls 1.2s ease-in-out infinite}body.mus-fri .hud-musfri{background:var(--fil);color:#0d1a22}
.hud-tabtips{bottom:200px}.hud-tabtips kbd.stor{font:900 16px system-ui;padding:6px 12px;border-radius:7px;background:#0d1a22;color:#fff;border-bottom:3px solid #000}
.hud-ios{position:fixed;left:auto;right:max(12px,env(safe-area-inset-right));top:76px;z-index:45;width:min(380px,92vw);display:flex;gap:11px;padding:11px 13px 12px;border-radius:20px;background:rgba(40,40,44,.82);backdrop-filter:blur(18px) saturate(1.6);-webkit-backdrop-filter:blur(18px) saturate(1.6);color:#fff;box-shadow:0 12px 34px rgba(0,0,0,.45);pointer-events:none;font-family:-apple-system,system-ui,sans-serif;transform:translateX(120%);transition:transform .45s cubic-bezier(.2,.9,.3,1.12),opacity .4s}
.hud-inkorg .hud-ios{position:relative;right:auto;top:auto;width:auto;pointer-events:none}
.hud-ios.in{transform:none}.hud-ios.ut{transform:translateX(120%);opacity:0}
.hud-ios .app{flex:none;width:38px;height:38px;border-radius:9px;background:linear-gradient(#5cf777,#0ec32f);display:grid;place-items:center;color:#fff}.hud-ios .app svg{width:22px;height:22px}
.hud-ios .inne{flex:1;min-width:0}
.hud-ios .topp{display:flex;justify-content:space-between;font:600 11.5px -apple-system,system-ui;letter-spacing:.04em;color:rgba(255,255,255,.55);margin-bottom:2px}
.hud-ios .fran{display:flex;align-items:center;gap:6px;font:700 14.5px -apple-system,system-ui}.hud-ios .fran .ui-portratt{box-shadow:none}
.hud-ios .txt{font:400 14.5px/1.35 -apple-system,system-ui;color:rgba(255,255,255,.92);display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;margin-top:1px}
.hud-ios .hud-bubbla-bar{background:rgba(255,255,255,.12);margin-top:8px}.hud-ios .hud-bubbla-bar i{background:#34c759}
.ph-smsval{display:flex;flex-direction:column;align-items:center;gap:18px}
.ph-smsval .hud-ios.statisk{position:relative;left:auto;top:auto;transform:none;width:min(420px,90vw)}
.ph-smsval-knappar{display:flex;gap:12px}.ph-smsval-knappar .fp-knapp{display:inline-flex;align-items:center;gap:8px}.ph-smsval-knappar kbd{font:900 11px system-ui;padding:1px 6px;border-radius:4px;background:rgba(0,0,0,.3)}
.hud-plats{position:fixed;left:0;top:0;z-index:21;pointer-events:none;max-width:280px;padding:7px 12px 8px;border-radius:9px;text-align:center;font:800 14px/1.3 system-ui;color:#fff;background:${LAGER_SVAG},rgba(25,28,36,.92);border-bottom:3px solid rgba(0,0,0,.5);box-shadow:0 8px 20px rgba(0,0,0,.35);transform-origin:50% 100%}
.hud-plats::after{content:"";position:absolute;left:50%;bottom:-10px;margin-left:-6px;border:6px solid transparent;border-top-color:rgba(25,28,36,.92)}
.hud-plats.fel{background:${LAGER},var(--lingon);border-bottom-color:#7a1222}.hud-plats.fel::after{border-top-color:var(--lingon)}
.hud-plats.bra{background:${LAGER},#2f8a52;border-bottom-color:#1d5a35}.hud-plats.bra::after{border-top-color:#2f8a52}
.hud-plats.guld{background:${LAGER},#e0a82e;color:#2a1c05;border-bottom-color:#8a6510}.hud-plats.guld::after{border-top-color:#e0a82e}
.hud-kors-lapp{left:50%;top:calc(50% - 26px);transform:translate(-50%,-100%);transition:opacity .45s;animation:hudStuds .35s cubic-bezier(.3,1.6,.5,1)}
.hud-hand{position:fixed;left:24%;bottom:150px;z-index:21;pointer-events:none;display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 12px 7px;border-radius:10px;background:${LAGER_SVAG},rgba(25,28,36,.82);border-bottom:3px solid rgba(0,0,0,.45);color:#fff}
.hud-hand[hidden]{display:none}
.hud-hand b{font:900 20px/1 var(--rubrik);letter-spacing:.03em}
.hud-hand span{display:block;width:64px;height:6px;border-radius:3px;background:rgba(0,0,0,.45);overflow:hidden}.hud-hand i{display:block;height:100%;width:0;transition:width .2s}
.hud-hand.full b{color:#ff8a8a}.hud-hand.studs{animation:hudStuds .35s cubic-bezier(.3,1.6,.5,1)}
.ph-mal.hud-uppdrag{position:fixed;left:max(12px,env(safe-area-inset-left));top:auto;z-index:21;width:280px;max-width:none;padding:9px 12px 10px;border-radius:10px;background:${LAGER_SVAG},rgba(25,28,36,.88)!important;border:1px solid rgba(255,255,255,.07);border-left:5px solid var(--falu);border-bottom:3px solid rgba(0,0,0,.45);box-shadow:none}
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
