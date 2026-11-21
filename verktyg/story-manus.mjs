// story-manus (inkorg 58 §4 p.2, A-113): skriver masterfilen som ett läsbart manus i verktyg/story-manus.md.
// Kör: node verktyg/story-manus.mjs
import fs from 'node:fs';
import { STORY } from '../spel/printa-hem/story.js';
const txt = (v) => v == null ? '–' : typeof v === 'function' ? `*(beror på läget)* ${(String(v).match(/'[^']{6,}'/g) || []).join(' / ')}` : `"${v}"`;
const KONTROLL = { spika: 'Klick · Klicka för att spika', lyfta: 'Klick · Klicka för att ta upp', stallNer: 'Klick · Ställ ner · R vrid', montera: 'Klick · Klicka för att montera', valj: 'Klick · Välj modell på skrivaren', trampa: 'Klicka och håll · Trampa cykeln', salj: '– (hos Ali)', kop: '– (hos Ali)', veva: 'Klicka och håll · Veva kvarnen', printa: 'Klick · Välj modell på skrivaren', sov: 'Klick · Sov', ta: 'Klick', lagg: 'Klick', ga: 'W A S D' };
let ut = '# Soptippsvägen 1 – manuset ur story.js\n\n*Skrivs av `node verktyg/story-manus.mjs`. Ändra i `spel/printa-hem/story.js`, inte här.*\n';
for (const d of STORY) {
  ut += `\n## Dag ${d.dag} (kapitel ${d.kapitel})\n`;
  d.steg.forEach((p, i) => {
    ut += `\n### ${i + 1}. ${typeof p.mal === 'function' ? txt(p.mal) : p.mal} \`${p.id}\`\n`;
    ut += `- **Moment:** ${p.mom || '–'} · **sak:** ${p.sak || '–'} · **bild:** ${typeof p.bild === 'function' ? 'beror på läget' : p.bild || '–'} · **pil:** ${p.pil || '–'}\n`;
    ut += `- **Handling:** ${p.handling || '–'} → kontrollhjälp *${KONTROLL[p.handling] || '–'}*\n`;
    ut += `- **Kräver:** ${(p.kraver || []).join(', ') || '–'} · **ger:** ${(p.ger || []).join(', ') || '–'}\n`;
    ut += `- **Start (sägs när steget börjar):** ${txt(p.start)}\n`;
    for (const [l, v] of Object.entries(p.lagen || {})) ut += `  - i läget **${l}:** "${v.tanke}"\n`;
    for (const m of p.medan || []) ut += `  - medan steget pågår (${m.id}): "${m.tanke}"\n`;
    ut += `- **Påminnelse:** ${txt(p.pamin)}\n- **Kvitto:** ${txt(p.kvitto)}\n`;
    if (p.tal) ut += `- **Uppläsning:** "${p.tal}"${p.talSpara ? ` (utan pengar: "${p.talSpara[0]}")` : ''}\n`;
  });
}
fs.writeFileSync(new URL('./story-manus.md', import.meta.url), ut);
console.log('story-manus: verktyg/story-manus.md');
