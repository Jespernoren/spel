// =============================================================
//  brand.js – SOPTIPPSVÄGEN 1 · formspråket "Printat & skrotigt"
//
//  Allt ska se ut som något du själv har printat på en gammal
//  skrivare och skruvat fast med det du hittade på tippen:
//    • lagerlinjer (tunna vågräta ränder) på skyltar, knappar, paneler
//    • skruvar i hörnen, lite rost i kanten
//    • tjocka, kompakta rubriker
//    • färger från spelet: faluröd, filamentcyan, rost, lingon, planka, papper
// =============================================================

export const FARG = {
  falu: '#b23a2a', faluMork: '#7d2519',
  fil: '#4cc9f0', filMork: '#1b6f8f',
  rost: '#c0612b', lingon: '#c8213a',
  planka: '#8a6a3f', papper: '#f4ecd8',
  natt: '#191c24', natt2: '#232733', kant: '#343a4a',
  bark: '#2b2118', grus: '#9aa3b5',
};
export const NAMN = 'Soptippsvägen 1';
export const RUBRIK_FONT = `"Arial Black","Archivo Black","Helvetica Neue",Impact,system-ui,sans-serif`;

let _id = 0;

// Logotypen: en printad gatuskylt i faluröd med ett filamentcyant husnummer.
export function logo({ bredd = 460, under = true } = {}) {
  const u = 'sv' + (++_id);
  const H = under ? 230 : 172;
  const bult = (x, y) => `<g><circle cx="${x}" cy="${y}" r="7" fill="#d9cbb0" stroke="#5b4630" stroke-width="2"/><path d="M${x - 4} ${y - 2}L${x + 4} ${y + 2}" stroke="#5b4630" stroke-width="2"/></g>`;
  return `<svg class="br-logo" viewBox="0 0 620 ${H}" width="${bredd}" role="img" aria-label="${NAMN}" xmlns="http://www.w3.org/2000/svg">
<defs>
  <pattern id="${u}l" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="2.2" fill="rgba(0,0,0,.20)"/><rect y="2.2" width="6" height=".8" fill="rgba(255,255,255,.10)"/></pattern>
  <radialGradient id="${u}r" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="${FARG.rost}" stop-opacity=".85"/><stop offset="1" stop-color="${FARG.rost}" stop-opacity="0"/></radialGradient>
  <clipPath id="${u}c"><rect x="14" y="26" width="470" height="122" rx="16"/></clipPath>
</defs>
${under ? `<path d="M520 150 C 520 190, 470 196, 420 186 S 300 170, 250 194" fill="none" stroke="${FARG.fil}" stroke-width="5" stroke-linecap="round" opacity=".9"/>` : ''}
<g transform="rotate(-2 250 90)">
  <rect x="14" y="32" width="470" height="122" rx="16" fill="${FARG.faluMork}"/>
  <rect x="14" y="26" width="470" height="122" rx="16" fill="${FARG.falu}"/>
  <g clip-path="url(#${u}c)">
    <ellipse cx="470" cy="140" rx="70" ry="40" fill="url(#${u}r)"/>
    <ellipse cx="30" cy="34" rx="40" ry="22" fill="url(#${u}r)" opacity=".7"/>
    <rect x="14" y="26" width="470" height="122" fill="url(#${u}l)"/>
  </g>
  <rect x="24" y="36" width="450" height="102" rx="10" fill="none" stroke="${FARG.papper}" stroke-width="4" opacity=".85"/>
  <text x="249" y="110" text-anchor="middle" font-family='${RUBRIK_FONT}' font-weight="900" font-size="60" textLength="410" lengthAdjust="spacingAndGlyphs" fill="${FARG.faluMork}">SOPTIPPSVÄGEN</text>
  <text x="249" y="106" text-anchor="middle" font-family='${RUBRIK_FONT}' font-weight="900" font-size="60" textLength="410" lengthAdjust="spacingAndGlyphs" fill="${FARG.papper}">SOPTIPPSVÄGEN</text>
  <rect x="14" y="26" width="470" height="122" rx="16" fill="url(#${u}l)" opacity=".55"/>
  ${bult(34, 46)}${bult(464, 46)}${bult(34, 128)}${bult(464, 128)}
</g>
<g transform="rotate(7 540 92)">
  <circle cx="540" cy="98" r="64" fill="${FARG.filMork}"/>
  <circle cx="540" cy="92" r="64" fill="${FARG.fil}"/>
  <circle cx="540" cy="92" r="52" fill="none" stroke="${FARG.natt}" stroke-width="4" opacity=".75"/>
  <text x="540" y="128" text-anchor="middle" font-family='${RUBRIK_FONT}' font-weight="900" font-size="104" fill="${FARG.natt}">1</text>
  <circle cx="540" cy="92" r="64" fill="url(#${u}l)" opacity=".7"/>
</g>
${under ? `<text x="250" y="${H - 14}" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="19" letter-spacing="6" fill="${FARG.papper}" opacity=".72">PRINTAT · SKROTIGT · HEMMA</text>` : ''}
</svg>`;
}

// Lagerlinjer som CSS-bakgrund (läggs ovanpå valfri färg)
const LAGER = 'repeating-linear-gradient(0deg,rgba(0,0,0,.13) 0 2px,rgba(255,255,255,.035) 2px 3px,transparent 3px 5px)';
const LAGER_SVAG = 'repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 1px,transparent 1px 4px)';
const SKRUV = (x, y) => `radial-gradient(circle at ${x} ${y},#c9bda4 0 3px,#5b4630 3px 4px,transparent 4.5px)`;
const SKRUVAR = [SKRUV('10px', '10px'), SKRUV('calc(100% - 10px)', '10px'), SKRUV('10px', 'calc(100% - 10px)'), SKRUV('calc(100% - 10px)', 'calc(100% - 10px)')].join(',');

export const BRAND_CSS = `
:root{--falu:${FARG.falu};--falu-mork:${FARG.faluMork};--fil:${FARG.fil};--fil-mork:${FARG.filMork};--rost:${FARG.rost};--lingon:${FARG.lingon};--planka:${FARG.planka};--papper:${FARG.papper};--natt:${FARG.natt};--natt2:${FARG.natt2};--kant:${FARG.kant};--rubrik:${RUBRIK_FONT}}
.br-logo{display:block;max-width:100%;height:auto;margin:0 auto;filter:drop-shadow(0 10px 18px rgba(0,0,0,.45))}

/* --- start/paus-rutan --- */
.fp-overlay{background:radial-gradient(circle at 50% 30%,rgba(178,58,42,.22),rgba(8,10,16,.78) 70%)}
.fp-ruta{position:relative;background:${SKRUVAR},${LAGER_SVAG},var(--natt);border:2px solid var(--kant);border-top:8px solid var(--falu);border-radius:14px;padding:26px 30px 22px;max-width:500px;box-shadow:0 6px 0 #0d0f14,0 24px 60px rgba(0,0,0,.55)}
.fp-ruta h1{font:900 30px/1.1 var(--rubrik);letter-spacing:.02em;margin:0 0 12px;color:var(--papper)}
.fp-ruta h1 .br-logo{margin:-6px auto 4px}
.fp-ruta p{color:#d9d4c7}
.fp-tillbaka{color:var(--fil)}

/* startrutan: luft, en tydlig STARTA, val bredvid varandra under */
.fp-ruta.br-start{max-width:520px;padding:30px 38px 22px}
.br-start .br-logo{margin:0 auto 22px}
.br-ingress{margin:0 auto 26px;max-width:380px}
.br-ingress p{margin:0 0 10px!important;font-size:15.5px;line-height:1.5;color:#c9c3b4;opacity:1!important}
.br-ingress .br-slogan{margin:16px 0 0!important;font:900 20px/1.2 var(--rubrik);color:var(--papper);letter-spacing:.02em}
.br-starta{display:block;width:100%;max-width:300px;margin:0 auto;font-size:21px!important;padding:16px 30px!important}
.br-val{display:flex;gap:10px;justify-content:center;margin:16px auto 0;max-width:300px}
.br-valknapp{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:7px;padding:10px 10px;border-radius:10px;border:2px solid var(--kant);background:${LAGER_SVAG},transparent;color:#d9d4c7;font:700 13.5px system-ui;cursor:pointer}
.br-valknapp:hover{border-color:#4a5268;color:#fff}.br-valknapp .ui-ik{width:16px;height:16px}
.br-valknapp.varning{border-color:var(--lingon);color:#ffb3bd}
.br-start .fp-tillbaka{margin-top:20px;font-size:13px;opacity:.8}

/* --- knappar: tjocka, printade --- */
.fp-knapp,.ui-knapp.primar{background:${LAGER},var(--falu)!important;color:var(--papper)!important;border-radius:10px;box-shadow:0 4px 0 var(--falu-mork),0 8px 16px rgba(0,0,0,.3);font-family:var(--rubrik);font-weight:900;letter-spacing:.03em;text-transform:uppercase;transition:transform .06s,box-shadow .06s,filter .1s}
.fp-knapp{font-size:17px;padding:13px 30px}
.fp-knapp:hover,.ui-knapp.primar:hover:not(:disabled){filter:brightness(1.1)}
.fp-knapp:active,.ui-knapp:active:not(:disabled){transform:translateY(3px);box-shadow:0 1px 0 var(--falu-mork),0 3px 8px rgba(0,0,0,.3)}
.fp-knapp.sek{background:${LAGER_SVAG},transparent!important;color:#d9d4c7!important;border:2px solid var(--kant);box-shadow:none;font:700 14px system-ui;text-transform:none;letter-spacing:0}
.ui-knapp{border-radius:10px;box-shadow:0 3px 0 rgba(0,0,0,.4);background-image:${LAGER}}
.ui-knapp.plus{background-color:#2f8a52}.ui-knapp.minus{background-color:var(--lingon)}
.ui-knapp.fil{background-color:var(--fil);color:var(--natt)}

/* --- paneler --- */
.ui-panel{background:${LAGER_SVAG},var(--natt);border:2px solid var(--kant);border-top:7px solid var(--falu);border-radius:14px;box-shadow:0 6px 0 #0d0f14,0 24px 70px rgba(0,0,0,.55)}
.ui-head{background:${SKRUV('calc(100% - 8px)', '8px')},${LAGER},var(--natt2)}
.ui-headik{background:var(--falu);color:var(--papper);box-shadow:0 3px 0 var(--falu-mork)}
.ui-titel b{font-family:var(--rubrik);font-weight:900;letter-spacing:.02em}
.ui-sektion span{font-family:var(--rubrik);color:var(--papper);letter-spacing:.1em}
.ui-flikar button.pa{color:var(--fil);border-bottom-color:var(--fil)}
.ui-flikar em{background:var(--lingon)}
.ui-rad{background:${LAGER_SVAG},var(--natt2)}
.ui-rad.ny{box-shadow:inset 4px 0 0 var(--fil)}
.ui-ruta.vald{background:#c8f1ff;border-color:var(--fil-mork) #effbff #effbff var(--fil-mork);box-shadow:0 0 0 2px var(--fil)}
.ui-fakta>.minus{color:#ff8fa0}

/* --- HUD --- */
.fp-chip{background:${LAGER_SVAG},rgba(25,28,36,.86);border:1px solid rgba(255,255,255,.07);border-bottom:3px solid rgba(0,0,0,.45);border-radius:10px}
.fp-bar{background:rgba(255,255,255,.12);border-radius:4px}
.fp-bar i{background:${LAGER},linear-gradient(90deg,var(--fil),#7dffb0)}
.fp-toast{background:${LAGER_SVAG},rgba(25,28,36,.92);border-left:5px solid var(--falu);border-radius:10px;font-family:var(--rubrik);letter-spacing:.02em}
.fp-toast.bra{border-left-color:#2fa85d}.fp-toast.fel{border-left-color:var(--lingon)}.fp-toast.guld{border-left-color:var(--fil)}
.fp-prompt{background:rgba(25,28,36,.82);border-radius:8px;border-bottom:3px solid var(--falu)}
.fp-kors.aktiv{background:var(--fil)}

/* --- introt --- */
.ph-intro{background:radial-gradient(circle at 50% 35%,#3a1d1a,#0d0b10 75%)!important}
.ph-intro::before{content:"";position:absolute;inset:0;background:${LAGER_SVAG};pointer-events:none}
.ph-intro-titel{background:none!important;-webkit-background-clip:initial!important;background-clip:initial!important;color:inherit!important;font-size:0!important;letter-spacing:0!important}
.ph-intro-svg{border-radius:10px!important;filter:drop-shadow(0 6px 0 #0d0f14) drop-shadow(0 18px 30px rgba(0,0,0,.5))}
.ph-intro-bubbla{background:var(--papper)!important;color:#2a2018!important;box-shadow:0 5px 0 #b9ad94,0 14px 30px rgba(0,0,0,.4)!important;font-family:var(--rubrik)!important;font-weight:900!important;letter-spacing:.01em}
.ph-intro-bubbla.du{background:var(--fil)!important;box-shadow:0 5px 0 var(--fil-mork),0 14px 30px rgba(0,0,0,.4)!important}
.ph-intro-hoppa{background:rgba(25,28,36,.8)!important;border:2px solid var(--kant)!important;color:#d9d4c7!important;border-radius:10px!important}
.ph-intro-vem{color:var(--fil)}
.ph-intro-prickar span.pa{background:var(--falu)}
`;

// Printad skylt för 3D-världen (canvas): lagerlinjer, skruvar, lite rost.
// Används av skylt() i spel.js så att alla skyltar i världen hör ihop med UI:t.
export function malaSkylt(g, W, H, bg, fg, text, { skruvar = true, rost = true } = {}) {
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  // lagerlinjer
  const steg = Math.max(3, Math.round(H / 36));
  for (let y = 0; y < H; y += steg) { g.fillStyle = 'rgba(0,0,0,.10)'; g.fillRect(0, y, W, Math.max(1, steg * 0.4)); }
  // rost i ett hörn (deterministiskt från texten)
  let h = 0; for (const c of text) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  if (rost && W > 60) {
    const rx = (h & 1) ? W * 0.92 : W * 0.08, ry = (h & 2) ? H * 0.9 : H * 0.1;
    const gr = g.createRadialGradient(rx, ry, 0, rx, ry, H * 0.7);
    gr.addColorStop(0, 'rgba(192,97,43,.55)'); gr.addColorStop(1, 'rgba(192,97,43,0)');
    g.fillStyle = gr; g.fillRect(0, 0, W, H);
  }
  // kant
  g.strokeStyle = 'rgba(0,0,0,.35)'; g.lineWidth = Math.max(2, H * 0.04); g.strokeRect(g.lineWidth / 2, g.lineWidth / 2, W - g.lineWidth, H - g.lineWidth);
  // text
  let fs = Math.round(H * 0.55);
  const f = (s) => `900 ${s}px ${RUBRIK_FONT}`;
  g.font = f(fs);
  const maxB = W * (skruvar && H > 40 ? 0.84 : 0.92);
  while (g.measureText(text).width > maxB && fs > 8) { fs -= 2; g.font = f(fs); }
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = 'rgba(0,0,0,.35)'; g.fillText(text, W / 2 + 2, H / 2 + 6);
  g.fillStyle = fg; g.fillText(text, W / 2, H / 2 + 4);
  // skruvar
  if (skruvar && H > 40) {
    const r = Math.max(4, H * 0.06), m = r * 2.2;
    for (const [x, y] of [[m, m], [W - m, m], [m, H - m], [W - m, H - m]]) {
      g.fillStyle = '#c9bda4'; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
      g.strokeStyle = '#5b4630'; g.lineWidth = Math.max(1.5, r * 0.3); g.stroke();
      g.beginPath(); g.moveTo(x - r * 0.6, y - r * 0.3); g.lineTo(x + r * 0.6, y + r * 0.3); g.stroke();
    }
  }
}
