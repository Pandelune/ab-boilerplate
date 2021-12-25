import MyArtDrawer from './my-art-drawer';
import { ArtData } from './my-art-generator';

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


function drawMyArt(p, myArtData: ArtData, centerX: number, centerY: number, width: number) {
  MyArtDrawer.drawMyArt(p, myArtData, centerX, centerY, width);
}

export default { drawMyArt, getStats };
