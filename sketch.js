//var test;
var sliderVolume;
var sliderRate;
var sliderPan;
var amp;
var volHistory = [];

function setup() {
  createCanvas(400, 400);

  testSound = loadSound("testSound.mp3", loaded);

  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 2, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);

  amp = new p5.Amplitude();

  // background(0);
}

function loaded() {
  testSound.play();
}

function draw() {
  background(0);

  testSound.setVolume(sliderVolume.value());
  testSound.rate(sliderRate.value());
  testSound.pan(sliderPan.value());

  var vol = amp.getLevel();
  volHistory.push(vol);
  stroke(255);
  noFill();
  translate(0, - height/2);

  beginShape();
  for (var i = 0; i < volHistory.length; i++){
    var y = map(volHistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape(); //볼륨에 따라 선 그리기

  if (volHistory.length > width) {
    volHistory.splice(0, 1);
  }
  //길이 지나면 기존에 있던 거 없애고 새로 시작하기
}
