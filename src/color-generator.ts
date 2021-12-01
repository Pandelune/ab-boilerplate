let p;
let R;

function setP5js(_p5js: p5) {
  p = _p5js;
}

function setRandom(_R) {
  R = _R;
};

function getColor() {

  const colors = [
    'forestgreen',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'greenyellow',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
  ];

  return R.random_choice(colors);

}

export default { setRandom, setP5js, getColor };
