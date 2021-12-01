import ColorGenerator from './color-generator';
import Constants from './constants';

let p: p5;
let R;

function setP5js(_p5js: p5) {
  p = _p5js;
  ColorGenerator.setP5js(p);
}

function setRandom(_R) {
  R = _R;
  ColorGenerator.setRandom(R);
}

export type ArtData = {
  color: string;
  circleWidth: number;
  isNice: boolean;
};

function genMyArt() {

  const myArtData: ArtData = {
    color: ColorGenerator.getColor(),
    circleWidth: R.random_int(10, Constants.stdWidth * 0.9),
    isNice: R.random_dec() > 0.9,
  };

  // console.log(myArtData);
  return myArtData;

}

export default { setP5js, setRandom, genMyArt };
