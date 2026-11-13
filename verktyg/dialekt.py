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
    s = s.replace('eː', 'eːə').replace('øː', 'øːə').replace('oː', 'oːə').replace('uː', 'uːə')
    s = s.replace('ɛː', 'eː')
    return s

DIALEKT = {'varmland': varmland, 'stockholm': stockholm, 'narke': narke}
