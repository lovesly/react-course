#!/usr/bin/env bash

echo "start watching playground *.js changes"
babel src/playground/counter_example_v2.js --out-file=public/scripts/app.js --presets=env,react --watch
