var movingRect, fixedRect;

function setup() { 
  createCanvas(800,400);

   movingRect = createSprite( 400, 50, 100, 50);
   movingRect.shapeColor = "blue";
   movingRect.velocityY = 5;
   //movingRect.velocityX= 5;
   fixedRect = createSprite( 400, 200, 50, 100);
   fixedRect.shapeColor = "blue";


   } 
   
   function draw() { 
     background(255,255,255);

     //  movingRect.y = World.mouseY;
       // movingRect.x = World.mouseX;
       
       console.log(movingRect.x - fixedRect.x);
        console.log(fixedRect.width/2 + movingRect.width/2);
      
        if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 
          && 
          fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2
          &&
          fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2
          &&
          movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
         
fixedRect.velocityY = movingRect.velocityY * 1;
movingRect.velocityY = movingRect.velocityY * -1;


movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";


        }else{
          movingRect.shapeColor = "blue";
        fixedRect.shapeColor = "blue";
      }

        drawSprites();
      
      }

