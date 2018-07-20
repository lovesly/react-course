#!/usr/bin/env bash

echo "start watching app.js changes"
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
