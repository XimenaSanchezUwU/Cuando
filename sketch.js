let img;
let myFont;
function preload() {
  img = loadImage('assets/A_tu_edad.png');
  myFont = loadFont('assets/JMH Typewriter.otf');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  textFont(myFont);
}

function draw() {
  background(0, 42, 54);
  image(img, 0, 0, windowWidth, windowHeight);
  textSize(65);
  fill(21, 2, 0);
  text('Yo ha tu edad ya', 120, 233);
  fill(168, 13, 0);
  textSize(45);
  text('Tenía trabajo', random(32), 1033);
  textSize(40);
  fill(255, 66, 66);
  frameRate(2);
  text('Tenía casa', random(1732), 5000);
  fill(193, 242, 255);
  frameRate(10);
  fill(255, 15, 0);
  text('Me había casado', random(132), 7500);
  frameRate(7);
}