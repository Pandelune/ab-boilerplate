import Constants from './constants';

let p;

function setP5js(_p5js) {
  p = _p5js;
}


function drawMyArt(myArtData, centerX, centerY, width) {


  p.noStroke();
  p.fill(p.color(myArtData.color));
  
  p.push();

  p.translate(centerX, centerY);

  p.scale(width / Constants.stdWidth);

  p.circle(0, 0, myArtData.circleWidth);

  
  p.pop();
}


export default { setP5js, drawMyArt };
