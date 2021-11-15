const fs = require('fs');

const statsScript = fs.readFileSync('dist/stats-fct.js', 'utf-8');

const template = fs.readFileSync('packaging/statsTemplate.js', 'utf-8');

const res = template.replace('THAT_STUFF_TO_REPLACE', statsScript);

fs.writeFileSync('dist/statsWrapped.js', res, 'utf-8');

