/**
 * @license
 * put you own license, and all licenses of components you integrate, here
*/

import RandomLib from './random';
import MyArt from './my-art';
import MyArtGenerator, { ArtData } from './my-art-generator';


function doMint() {
  // @ts-expect-error
  new p5(function (p: p5) {
    const realWidth = window.innerWidth;
    const realHeight = window.innerHeight;

    let myArtData: ArtData;
    let stats;

    RandomLib.setTokenData(tokenData); // comes from html page, or AB context
    const R = new RandomLib.Random();

    p.setup = function () {
      p.createCanvas(realWidth, realHeight);
      p.noLoop();

      myArtData = MyArtGenerator.genMyArt(R);
      stats = MyArt.getStats(myArtData);
    };

    p.draw = function () {
      const artWidth = Math.min(realWidth, realHeight) * 0.95;
      MyArt.drawMyArt(p, myArtData, realWidth / 2, realHeight / 2, artWidth);
    }
  });
};

doMint(); // the real production one
