var test;
var sliderVolume;
var sliderRate;
var sliderPan;

// var innerSound;
// var movingSound;
// var dailySound;

function setup() {
  createCanvas(400, 400);

  testSound = loadSound("testSound.mp3", loaded);

  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  // slider.position(0, height);

  sliderRate = createSlider(0, 2, 1, 0.01);
  // slider.position(width-260, height);

  sliderPan = createSlider(-1, 1, 0, 0.01);
  // slider.position(width, height);
}

function loaded() {
  testSound.play();
}

function draw() {
  background(220);
  testSound.setVolume(sliderVolume.value());
  testSound.rate(sliderRate.value());
  testSound.pan(sliderPan.value());
}
