#!/usr/bin/env bash

echo "Test sh start babel"
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch