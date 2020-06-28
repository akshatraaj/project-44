var canvas, backgroundImage;
var fixedRect, movingRect;
var child, kidnapper,gate, childImage, babyImage, baby, kidnapperImage, kidnap, play,stc;
var gameState = 0;
var lives = 0;
var edges,ciig;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35;
var form , game;
function preload(){
  babyImage = loadImage("baby.png");
  kidnapperImage = loadImage("kidnap.png");
  backgroundImage = loadImage("bg.jpg");
  ciig = loadImage("babyImgIngame.png");
}
function setup(){
  canvas = createCanvas(1165,650);
  
 // game = new Game();
 // game.play();
  form = new Form();
  form.display();
 
 //textSize(100);
 //textFont('Georgia');
 //color("Red");
}


function draw(){
 // createEdgeSprites();
  //background('red'||backgroundImage);
  //text("Save the child",700,250);

  

  bg();
 edges = createEdgeSprites();
 
  drawSprites();
 
}
/*function hid(){
  kidnap.hide();
   baby.hide();
   play.hide();
}*/
function bg(){
  if(kidnap.x<1160){
    background('red');
}
if(kidnap.x>1160){
  background(backgroundImage);
  //game.play();
}
}