var pathImage,jakeRunning; 
var leftBoundary,rightBoundary

function preload(){
 pathImage = loadImage("path.png");
  
jakeRunning=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");     
}

function setup(){
    createCanvas(400,400);

  //create a path sprite
  path1=createSprite(200,200,20,20);
  path1.addImage("path",pathImage);
  path1.velocityY=3;
  
   
  //create a jack sprite
  jake1=createSprite(200,120,20,50);
  jake1.addAnimation("Running",jakeRunning);
  jake1.scale=0.6;
  
   //creating invisible ground1
  invisibleGround = createSprite(200,100,200,20);
  invisibleGround.visible = false;
  
  leftBoundary=createSprite(0,0,100,800)
   leftBoundary.visible=false;
  
   rightBoundary=createSprite(410,0,100,800)
   rightBoundary.visible=false;
}

function draw() {
  background(0);
  
  
  edges=createEdgeSprites();
  jake1.collide(edges[3])
  jake1.collide(leftBoundary)
   jake1.collide(rightBoundary)
//code for reset the background
   if (path1.y >400){
    path1.y = height/2;
  }
  if (keyDown("right")) {
jake1.velocityX = 3;
}
  if (keyDown("left")) {
jake1.velocityX = -3 ; 
}
  
  
drawSprites();
}
