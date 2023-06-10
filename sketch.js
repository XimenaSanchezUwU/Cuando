
let img;
let myFont;
function preload() {
  img = loadImage('assets/Caminos.png');
  myFont = loadFont('assets/CherryHand-Regular.ttf');
}

//Hacer la imagen menor a 1000 pixeles
//Cargar la fuente loadFont()-->

/*
let myFont;
function preload() {
  myFont = loadFont('assets/Handmade.otf');
}
*/


function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  textFont(myFont);
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  text('¿Hacia dónde voy con todo esto?', 33, 411);
  //textFont('myFont');
  fill(random(122), 132, 123);
  text('¿Hacia dónde voy con todo esto?', random(100), 111);
  //textFont('myFont');
  textSize(random(100));
  fill(11, 32, 123);
  frameRate(10);
  text('¿Hacia dónde voy con todo esto?', 20, random(631));
  //textFont('myFont');
  textSize(65);
  fill(222,1,12);
}