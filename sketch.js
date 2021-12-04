var innerSound;
var movingSound;
var dailySound;

function setup() {
  createCanvas(400, 400);
  innerSound = loadSound("innerSound.mp3");
  movingSound = loadSound("movingSound.mp3");
  dailySound = loadSound("dailySound.mp3");
}

function draw() {
  background(220);
}