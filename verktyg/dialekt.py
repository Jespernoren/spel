# Dialekter för Kokoro-rösterna: samma idé som Alis brytning – svensk text blir talljud (IPA),
# och talljuden ändras som en person från en viss trakt skulle uttala dem. Sedan läser rösten ljuden.
import re

VOKAL = 'aeiouyɑɒæɛɪʊœøəɐɔɨʏ'

def varmland(ipa):
    """Rolf: värmländska/dalmål – tjockt l, öppet ä, mörkt a, lite bredare vokaler."""
    s = ipa
    s = re.sub(rf'(?<=[{VOKAL}ː])l', 'ɽ', s)          # tjockt l efter vokal: "gåɽn", "heɽa"
    s = s.replace('ɛː', 'æː').replace('ɑː', 'ɒː')       # här → hæær, ja → jåå-ish
    s = s.replace('eː', 'ɛː')                           # hela → häla
    s = re.sub(r'ʊ(?!ː)', 'ɔ', s)                       # korta u-ljud blir öppnare
    return s

def stockholm(ipa):
    """Pappa: stockholmska – framskjutet a, öppet ä före r, lite slappare i."""
    s = ipa
    s = s.replace('ɑː', 'aː')                           # "jaa", "braa"
    s = re.sub(r'ɛː(?=r)', 'æː', s)                     # här → hær
    s = re.sub(r'ɛ(?!ː)', 'e', s)                       # korta ä blir e
    s = s.replace('iː', 'ɪː')                           # lite slappare i
    return s

def narke(ipa):
    """Mamma: närkingska – långa vokaler glider (diftonger), ä blir e."""
    s = ipa
    s = s.replace('eː', 'eə').replace('øː', 'øə').replace('oː', 'oə').replace('uː', 'uə')   # korta glidljud – inte släpigt
    s = s.replace('ɛː', 'eː')
    return s

def smaland(ipa):
    """Mamma (punkt AH): småländska från Nässjö – skorrande r, framskjutet a, ä blir e, o glider lite."""
    s = ipa
    s = re.sub(rf'(?<=[{VOKAL}ː])r', 'ʁ', s)            # skorrande r efter vokal ("gåʁd") – i början av ordet hörs r tydligt
    s = s.replace('ɑː', 'aː')                           # "jaa", "maamma"
    s = s.replace('ɛː', 'eː')                           # städa → steeda
    s = s.replace('oː', 'oʊ')                           # något → noʊgot, lite sjungande
    return s

DIALEKT = {'varmland': varmland, 'stockholm': stockholm, 'narke': narke, 'smaland': smaland}
