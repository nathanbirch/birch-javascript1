function getDepth() {
  let depth = parseFloat(prompt('please enter the depth of the house: '));
  return depth;
}

function getWidth() {
  let width = parseFloat(prompt('please enter the width of the house: '));
  return width;
}

function getHeight() {
  let height = parseFloat(prompt('please enter the height of the house: '));
  return height;
}

function getSweep() {
  let sweep = parseFloat(prompt('please enter the sweep of the house: '));
  return sweep;
}

function houseVolume(width, depth, height, sweep) {
  return livingVolume(width, depth, height) + roofVolume(width, depth, sweep);
}

function livingVolume(width, depth, height) {
  return width * depth * height;
}

function roofVolume(width, depth, sweep) {
  let triangle_area = triangleArea(depth, sweep, sweep);
  return triangle_area * width;
}

function triangleArea(a, b, c) {
  let p = (a + b + c) / 2;
  return Math.sqrt(p + (p - a) * (p - b) * (p - c));
}

let depth = getDepth();
let width = getWidth();
let height = getHeight();
let sweep = getSweep();
let v = houseVolume(width, depth, height, sweep);

alert(v);
