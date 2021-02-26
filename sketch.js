function setup()
 
{ createCanvas(1200,800);
   rect1=createSprite(600,400,50,80);
    rect1.shapeColor="blue"; 
    rect2=createSprite(400,200,80,30);
     rect2.shapeColor="blue";
      console.log(rect1.x-rect2.x);
     }
     function draw() { background("white");
      rect1.x=World.mouseX;
       rect1.y=World.mouseY;

     if(rect1.x-rect2.x < rect1.width/2+rect2.width/2
      && rect2.x-rect1.x < rect1.width/2+rect2.width/2
      &&rect1.y-rect2.y <rect1.height/2+rect2.height/2
      &&rect2.y-rect1.y <rect1.height/2+rect2.height/2)
      { rect1.shapeColor="red";

       rect2.shapeColor="red"; }

       else{
          rect1.shapeColor="blue";
           rect2.shapeColor="blue"; } 
     drawSprites(); }















