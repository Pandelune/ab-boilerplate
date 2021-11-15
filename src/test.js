import MyArt from './my-art';
import Helpers from './helpers';
import RandomLib from './random';
import MyArtGenerator from './my-art-generator';

let tokenData;

function initP5Helper(p) {
  MyArt.setP5js(p);
  MyArtGenerator.setP5js(p);
}

function doMyArt() {

  RandomLib.setTokenData(tokenData);
  const R = new RandomLib.Random();
  MyArtGenerator.setRandom(R);
  
  new p5(function (p) {
    const realWidth = window.innerWidth;
    const realHeight = window.innerHeight;

    let myArtData;
    let stats;

    p.setup = function () {

      initP5Helper(p);
      p.createCanvas(realWidth, realHeight);
      p.noLoop();

      myArtData = MyArtGenerator.genMyArt();
      stats = MyArt.getStats(myArtData);
    };

    p.draw = function () {
      const artWidth = Math.min(realWidth, realHeight) * 0.95;
      MyArt.drawMyArt(myArtData, realWidth / 2, realHeight / 2, artWidth);

      console.log(stats);
    }
  });
}

function doRandom() {
  tokenData = Helpers.genMyTokenData();
  doMyArt();
}

function doOnHash(hash) {
  tokenData = {
    hash: hash
  };
  doMyArt();
}

doRandom();
// doOnHash('0x54dce1bfbc42de9d3c43ab1ad1845a651db9a1f411c54f713c5f248f68a3108f');

