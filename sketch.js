// https://youtu.be/h_aTgOl9J5I?t=130

var sliderVolume;
var sliderRate;
var sliderPan;
var amp;
var volhistory = [];

function setup() {
  createCanvas(720, 420);

  angleMode(DEGREES);

  testSound = loadSound("testSound.mp3", loaded);

  // innerSound = loadSound("innerSound.mp3", loaded);
  // movingSound = loadSound("movingSound.mp3", loaded);
  // outsideSound = loadSound("outsideSound.mp3", loaded);

  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 2, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01); //슬라이더 생성

  amp = new p5.Amplitude();
}

function loaded() {
  testSound.play();

  // innerSound.play();
  // movingSound.play();
  // outsideSound.play(); //사운드 재생
}

function draw() {
  background(0);

  testSound.setVolume(sliderVolume.value());
  testSound.rate(sliderRate.value());
  testSound.pan(sliderPan.value()); //슬라이더 속성 부여

  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();

  beginShape();
  for (var i = 0; i < 360; i++){
    r = 100;
    var x = r * cos(i);
    var y = r * sin(i);
    //var y = map(volhistory[i], 0, 1, height, 0);
    vertex(x, y);
  }
  endShape();

  beginShape();
  for (var i = 0; i < volhistory.length; i++){
    var y = map(volhistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape(); //볼륨에 따라 선 그리기
  pop();
  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }  //길이 지나면 기존에 있던 거 없애고 새로 시작하기
}
