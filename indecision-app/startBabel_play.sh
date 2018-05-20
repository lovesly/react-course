#!/usr/bin/env bash

echo "start watching playground *.js changes"
babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch
