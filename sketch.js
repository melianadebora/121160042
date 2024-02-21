let gunung1_x=0;
let gunung2_x=300;
let gunung3_x=150;
let matahari_x=0;

let img;
function preload() {
  img = loadImage('yellowcar.png')
}

function setup() {
  createCanvas(430,320);
  frameRate(30);
}

function draw() {
  background(134,208,200);
  line(400,0,400,500)
  // gunung
  fill(19,126,66);
  strokeWeight(0);
  ellipse(gunung1_x,190,200,240);
  ellipse(gunung2_x,190,200,240);
  ellipse(gunung3_x,190,200,240);
  //tanah
  fill(149,103,39);
  rect(0,200,500,500);
  
  //matahari
  fill(300,150,70);
  circle(matahari_x,30,40)
  image(img,0,0);
  //animasi
  gunung1_x=gunung1_x+1;
  gunung2_x=gunung2_x+1;
  gunung3_x=gunung3_x+1;
  if(gunung1_x>400+100)gunung1_x=-100;
  if(gunung2_x>400+100)gunung2_x=-100;
  if(gunung3_x>400+100)gunung3_x=-100;
  
  matahari_x = matahari_x + 1;
  if(matahari_x>400)matahari_x=0;
}

  