var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 100);
  fixedRect.debug=true;
  fixedRect.shapeColor="green";
  movingRect=createSprite(200, 100, 100, 50);
  movingRect.debug=true;
  movingRect.shapeColor="green";
  movingRect.velocityX=+2;
  movingRect.velocityY=2
}

function draw() {
  background(255,255,255); 
  
 // movingRect.y=mouseY;
  
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2&&
    fixedRect.y-movingRect.y< fixedRect.height/2+movingRect.height/2&& 
    movingRect.y-fixedRect.y< fixedRect.height/2+movingRect.height/2){
    movingRect.velocityX=-(movingRect.velocityX) ;
    movingRect.velocityY=-(movingRect.velocityY);
    }
  
  drawSprites();
}