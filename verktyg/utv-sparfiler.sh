#!/bin/sh
# inkorg 76 (A-131): utvecklarlägets sparningar, en per morgon dag 1–22, i spel/printa-hem/utv/dagN.json.
# Bygg dem med boten (en körning till julafton sparar varje morgon):
#   SIM_SPAR=/tmp/utv/dag node verktyg/sim-kapitel1.mjs <url> /tmp/utv/r.md 1 23
# och kopiera sedan in dem:  sh verktyg/utv-sparfiler.sh /tmp/utv/dag [/tmp/annan/dag ...]
# Dag 1 tas från verktyg/sparfiler/start-dag1.json (morgonen direkt efter introt). Senare mappar fyller dagar som saknas i de första.
UT=spel/printa-hem/utv; mkdir -p "$UT"
cp verktyg/sparfiler/start-dag1.json "$UT/dag1.json"
for d in $(seq 2 22); do for k in "$@"; do if [ ! -f "$UT/dag$d.json.ny" ] && [ -f "$k$d.json" ]; then cp "$k$d.json" "$UT/dag$d.json.ny"; fi; done; [ -f "$UT/dag$d.json.ny" ] && mv "$UT/dag$d.json.ny" "$UT/dag$d.json"; done
ls "$UT" | wc -l
