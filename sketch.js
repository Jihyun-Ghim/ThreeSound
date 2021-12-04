var test;

// var innerSound;
// var movingSound;
// var dailySound;

function preload() {
  testSound = loadSound("testSound.mp3");

  // innerSound = loadSound("innerSound.mp3");
  // movingSound = loadSound("movingSound.mp3");
  // dailySound = loadSound("dailySound.mp3");
}

function setup() {
  createCanvas(400, 400);
  testSound.play();

  // innerSound.play();
}

function draw() {
  background(220);
}
