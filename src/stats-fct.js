import MyArtGenerator from './my-art-generator';
import MyArt from './my-art';
import RandomLib from './random';

// we use the mock here (we don't want to draw anything)
import p5 from './p5mock';

function genStats(tokenData) {
  // init

  RandomLib.setTokenData(tokenData);
  const R = new RandomLib.Random();
  MyArtGenerator.setRandom(R);

  MyArtGenerator.setP5js(p5);
  MyArt.setP5js(p5);

  const myArtData = MyArtGenerator.genMyArt();

  return MyArt.getStats(myArtData);
}

// to get minified properly, it must do the job
Object.assign(features, genStats(tokenData));
