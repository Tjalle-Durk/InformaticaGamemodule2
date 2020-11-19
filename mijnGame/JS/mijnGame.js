//var Jager{
  //x: 100,
  //y: 400,
//}
var xJager = 0;
var yJager = 400;

var xSter = 1800;
var ySter = 400;

var zwaartekracht = 20;
var onoff = 1;
var black = 'black';
var white = 'lightgray';




  function setup() {
    canvas = createCanvas(1920,1080);
    // canvas.parent('processing');
    textFont("Verdana");
    textSize(140);
    noStroke();
    frameRate(50);
  }

function draw() {
  background('white');
  if (keyIsDown(DOWN_ARROW) && onoff == 1 ){
    onoff = 2;
    white = white;
    black = darkkhaki;
  }
  if (keyIsDown(DOWN_ARROW) && onoff == 2){
    onoff = 1;
  }

  
  
  if (keyIsDown(LEFT_ARROW)) {
    xJager -= 15;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJager += 15;
  }
  if (keyIsDown(UP_ARROW)) {
    //for(var n = 1; n<=4 ; n++){
      //yJager -= n*10
  }
  else {
    yJager += zwaartekracht;
  }
  if (xJager <= 500) {
    yJager = constrain(yJager,0,400);
    
  }
  if (xJager >=700){
    yJager = constrain(yJager,0,400);
  }

  xJager = constrain(xJager, 0, width - 100);
  yJager = constrain(yJager, 0, height - 100);


  if (xJager >= xSter - 100 && xJager <= xSter + 75 && yJager >= ySter - 100 && yJager <= ySter + 50) {
    fill('chartreuse');
    eindScherm();
  }
  else {
    fill('darkkhaki');
  }
  rect(xSter,ySter,75, 50);
  fill('moccasin');
  rect(xJager,yJager, 100, 100);
  fill(black);
  rect(0,500,500,500);
  fill(white)
  rect(800,500,1120,500)
}

function eindScherm() {
  background('white');
  fill('black');
  text("GEVANGEN!", 75, 250);
  noLoop();
}