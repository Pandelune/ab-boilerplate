import MyArtDrawer from './my-art-drawer';
import { ArtData } from './my-art-generator';

let p;

function setP5js(_p5js: p5) {
  p = _p5js;
  MyArtDrawer.setP5js(p);
}

function getStats(myArtData: ArtData) {
  // just filter interesting data
  // transform booleans into strings
  // etc.
  const stats = {
    color: myArtData.color,
    isNice: myArtData.isNice ? 'true' : 'false',
  }

  return stats;
}


function drawMyArt(myArtData: ArtData, centerX: number, centerY: number, width: number) {
  MyArtDrawer.drawMyArt(myArtData, centerX, centerY, width);
}

export default { setP5js, drawMyArt, getStats };
