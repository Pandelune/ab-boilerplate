const fs = require('fs');

const license = fs.readFileSync('dist/mint.js.LICENSE.txt', 'utf-8');

// re inject in minimized file

const original = fs.readFileSync('dist/mint.js', 'utf-8');
const placeHolder = '/*! For license information please see mint.js.LICENSE.txt */';
const res = original.replace(placeHolder, license);
fs.writeFileSync('dist/mint.js', res, 'utf-8');

// also put in stats

const stats = fs.readFileSync('dist/statsWrapped.js', 'utf-8');
const newStats = license + stats;
fs.writeFileSync('dist/statsWrapped.js', newStats, 'utf-8');

