#!/usr/bin/env bash

echo "start watching playground *.js changes"
babel src/playground/toggle-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
