#!/bin/bash
# Användning: verktyg/bygg-react.sh <källa.tsx> <mapp> "<Titel>"
set -e
SRC="$(realpath "$1")"; MAPP="$2"; TITEL="$3"
REPO="$(cd "$(dirname "$0")/.." && pwd)"
# Körs i en byggmapp med: npm i esbuild react@18 react-dom@18
cp "$SRC" app.tsx
cat > entry.tsx <<'E2'
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
createRoot(document.getElementById("root")!).render(<App />);
E2
npx esbuild entry.tsx --bundle --minify --format=iife --jsx=automatic --define:process.env.NODE_ENV='"production"' --outfile=out.js --log-level=warning
mkdir -p $REPO/spel/$MAPP
{
cat <<H
<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>$TITEL</title>
<style>html,body{margin:0;min-height:100%;} #root{min-height:100vh;}</style>
</head>
<body>
<div id="root"></div>
<script>
H
cat out.js
printf '\n</script>\n</body>\n</html>\n'
} > $REPO/spel/$MAPP/index.html
ls -la $REPO/spel/$MAPP/index.html
