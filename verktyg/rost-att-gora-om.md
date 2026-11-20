# Röstklipp att göra om i nästa ElevenLabs-omgång

*Inkorg rad 23 p.8 (Jesper 12:43: "ändra sen när vi gör om"). Generera inte om förrän nästa ElevenLabs-omgång (rad 16).*

## Klipp som säger "brorsan"

Sökt 2026-11-20 i `spel/printa-hem/roster-el/index.json` mot alla texter som sa "brorsan/brorsans" före `60231d5` (spel.js och intro-bilder.js), och mot `verktyg/roster-manus.json`.

**Resultat: 0 ElevenLabs-klipp säger "brorsan".** Raderna som sa "brorsan" spelades redan med talsyntesen (Piper), så de säger "storebror" nu utan ny körning.

| Klipp-id | Gammal text | Ny text | Status |
|---|---|---|---|
| – | – | – | inget att göra om |

Rader som sa "brorsan" och nu säger "storebror" (alla utan ElevenLabs-klipp, läses med talsyntes):

| Figur | Gammal text | Ny text |
|---|---|---|
| du | Brorsans skrivare står kvar på cykeln vid vägen. Den ska av. | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| du | En nyckelring till, så länge brorsans rulle räcker. | En nyckelring till, så länge storebrors rulle räcker. |
| du | Slut på brorsans rulle. Och här ligger ju plast överallt. … | Slut på storebrors rulle. Och här ligger ju plast överallt. … |
| berättaren (intro) | Och surrar fast brorsans gamla 3D-skrivare på cykeln. | storebrors (introt) |
| info | 🖨️ Brorsans skrivare. Den ska stå där borta, mot skräpberget. | 🖨️ Storebrors skrivare. … |
| bror (sms) | … Grattis brorsan. Eller vad du nu är. Du vet. | … Grattis lillebror. Eller vad du nu är. Du vet. |

## Andra klipp som redan är kända

- Mammas sms från inkorg 22 (`f631ebc`): klippen har versaler och skrik. Texterna står i `texter-att-granska-3.md` nr 73–117. Görs om bara om Jesper säger ja.
- Trailerns röster `rost-du-trampar`, `rost-du-riktigt-hem`, `rost-du-mitt-hem` och Alis `rost-ali-kottkvarn` (rad 16).
