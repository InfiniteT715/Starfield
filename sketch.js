var stars = [];
var speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 1000; i++) { // Increased number of stars for larger screens
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width/2, height/2);

  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}