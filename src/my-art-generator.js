import ColorGenerator from './color-generator';
import Constants from './constants';

let p;
let R;

function setP5js(_p5js) {
  p = _p5js;
  ColorGenerator.setP5js(p);
}

function setRandom(_R) {
  R = _R;
  ColorGenerator.setRandom(R);
}


function genMyArt() {
  
  const myArtData = {};
   
  myArtData.color = ColorGenerator.getColor();

  myArtData.circleWidth = R.random_int(10, Constants.stdWidth * 0.9);

  myArtData.isNice = R.random_dec() > 0.9;

  // console.log(myArtData);
  return myArtData;

}

export default { setP5js, setRandom, genMyArt };
