#!/bin/sh
# inkorg 62 (A-117): efter varje push – vänta tills GitHub Pages serverar commitens index.html (samma ?v=), kör sedan röktestet där.
# Kör: sh verktyg/efter-push.sh [commit]   (standard: HEAD)
C="${1:-$(git rev-parse --short HEAD)}"
node verktyg/roktest-modul.mjs "https://jespernoren.github.io/spel/spel/printa-hem/index.html" "$C"
