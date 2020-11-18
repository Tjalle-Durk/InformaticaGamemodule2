var xJager = 50;
var yJager = 400;
var xProoi = 1800;
var yProoi = 400


  function setup() {
    canvas = createCanvas(1920, 1080);
    // canvas.parent('processing');
    textFont("Verdana");
    textSize(140);
    noStroke();
    frameRate(50);
  }

function draw() {
  background('white');
  if (keyIsDown(LEFT_ARROW)) {
    xJager -= 15;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJager += 15;
  }
  if (keyIsDown(UP_ARROW)) {
    yJager -= 10;
  }
  else {
    yJager += 22;
  }
  if (xJager <= 500) {
    yJager = constrain(yJager,0,400);
    
  }
  if (xJager >=700){
    yJager = constrain(yJager,0,400);
  }





  xJager = constrain(xJager, 0, width - 100);
  yJager = constrain(yJager, 0, height - 100);


  if (xJager >= xProoi - 100 && xJager <= xProoi + 75 && yJager >= yProoi - 100 && yJager <= yProoi + 50) {
    fill('chartreuse');
    eindScherm();
  }
  else {
    fill('darkkhaki');
  }
  rect(xProoi, yProoi, 75, 50);
  fill('moccasin');
  rect(xJager, yJager, 100, 100);
  fill('black');
  rect(0,500,500,500);
  rect(800,500,1120,500)
}

function eindScherm() {
  background('white');
  fill('black');
  text("GEVANGEN!", 75, 250);
  noLoop();
}