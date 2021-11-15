const fs = require('fs');

const mainScript = fs.readFileSync('dist/mint.js', 'utf-8');


const chunkSize = 10000;

console.log(mainScript.length);

let start = 0;
let index = -1;

const toRebuild = [];

do {

  index++;

  let end = start + chunkSize;
  
  if (end > mainScript.length) {
    // is ok: we take the rest
  } else {
    while (mainScript[end - 1] != ',') {
      end--;
    }
  }

  const chunk = mainScript.slice(start, end);
  console.log(start, end, chunk.length);

  fs.writeFileSync('dist/render_' + index + '.js', chunk,'utf-8');

  toRebuild.push(chunk);

  start = end;

} while (start < mainScript.length);

fs.writeFileSync('dist/mint_rebuilt.js', toRebuild.join(' '),'utf-8');
