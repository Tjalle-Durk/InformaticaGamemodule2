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
var achtergrond = 'white';

var plateaus = new Array (plateau(0,500,500,500),plateau(800,500,1120,500));


class Jager {
  vallen(){
    yJager -= 12;
  }

}
class plateau {
  constructor(x,y,w,h){
    this.x =x;
    this.y =y;
    this.w =w;
    this.h =h;
  }
}





  function setup() {
    canvas = createCanvas(1920,1080);
    textFont("Verdana");
    textSize(140);
    noStroke();
    frameRate(50);
  }

function draw() {
  background(achtergrond);
  if (keyIsDown(DOWN_ARROW) && onoff == 1 ){
    onoff = 2;
    white = 'white';
    black = 'darkgray';
    achtergrond = 'black';
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
    yJager -= 12
    //for(var n = 1; n <=4 ; n++){
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
  //if (xJager >= 500 && xJager <= 700 && yJager <=400){
  //  xJager = constrain(xJager,500,0);
  //  xJager = constrain(xJager,700,0);
  //}

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