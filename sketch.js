var fixedRect, movingRect;
var a_1, a_2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
   a_1 = createSprite(400,400,60,80);
   a_1 .shapeColor = "yellow";

  a_2 = createSprite(300,350,60,80);
   a_2 .shapeColor = "purple";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,a_1)){
    movingRect.shapeColor = "red";
   a_1.shapeColor = "yellow";
  }else {
    movingRect.shapeColor = "green";
    a_1.shapeColor = "blue";
  }
   
  drawSprites();
}

function isTouching(object1 , object2) {
  if (object1.x -object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
    
  }
  else {
    return false;
  }
}
