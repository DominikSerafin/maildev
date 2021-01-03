#!/bin/sh
export PATH="/wd/node_modules/.bin:$PATH"
node-sass -wr --output-style compressed -o app/styles assets/styles/style.scss & \
nodemon --verbose --watch index.js --watch lib bin/maildev --verbose --smtp=1025 --web=1080 --mail-directory=/var/maildev/data
