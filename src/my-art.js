import MyArtDrawer from './my-art-drawer';

let p;

function setP5js(_p5js) {
  p = _p5js;
  MyArtDrawer.setP5js(p);
}

function getStats(myArtData) {
  // just filter interesting data
  // transform booleans into strings
  // etc.
  const stats = {
    color: myArtData.color,
    isNice: myArtData.isNice ? 'true' : 'false',
  }

  return stats;
}


function drawMyArt(myArtData, centerX, centerY, width) {
  MyArtDrawer.drawMyArt(myArtData, centerX, centerY, width);
}

export default { setP5js, drawMyArt, getStats };
