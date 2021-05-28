
var bg, bgimg;


function preload() {
  bgimg = loadImage("snoww.jpg")
 
}
function setup() {
  createCanvas(1000, 600);
  
  bg = createSprite(390, 200, 10, 10);
  bg.addImage("snowfalling", bgimg);
  bg.scale = 0.85;

  
}

function draw() {
  background(255, 255, 255);
  drawSprites();
  keyPressed();
}

