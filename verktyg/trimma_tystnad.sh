#!/bin/bash
# Tar bort tystnad i början (och slutet) av röstklipp, så att repliken börjar direkt.
# Användning: trimma_tystnad.sh fil1.mp3 fil2.mp3 ...
for f in "$@"; do
  ffmpeg -loglevel error -y -i "$f" -af "silenceremove=start_periods=1:start_silence=0.05:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_silence=0.15:start_threshold=-45dB,areverse" -ac 1 -ar 24000 -b:a 64k "$f.tmp.mp3" && mv "$f.tmp.mp3" "$f"
done
