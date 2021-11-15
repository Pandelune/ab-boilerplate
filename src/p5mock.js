function mag(x, y) {
  return Math.hypot(x, y);
}

function dist(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

function sq(n) {
  return n * n;
}

function createVector(x, y) {
  return {
    x: x,
    y: y,
  }
}

const PI = Math.PI;
const HALF_PI = Math.PI / 2;
const QUARTER_PI = Math.PI / 4;
const TWO_PI = Math.PI * 2;

export default {
  mag, dist, sq, createVector,
  PI, HALF_PI, QUARTER_PI, TWO_PI,
};
