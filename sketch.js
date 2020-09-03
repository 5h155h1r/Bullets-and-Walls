var b1, b2, b3, b4;
var wall1, wall2, wall3, wall4;
var d1, d2, d3, d4;
var thickness1, thickness2, thickness3, thickness3, thickness4;
var speed1, speed2, speed3, speed4;
var weight1, weight2, weight3, weight4  


function setup() {
  createCanvas(1600,500);
  b1 = createSprite(50, 50, 25, 25);
  b2 = createSprite(50, 175, 25, 25);
  b3 = createSprite(50, 300, 25, 25);
  b4 = createSprite(50, 425, 25, 25);
  wall1 = createSprite(1000, 50, 25, 75);
  wall2 = createSprite(1000, 175, 25, 75);
  wall3 = createSprite(1000, 300, 25, 75);
  wall4 = createSprite(1000, 425, 25, 75);
  thickness1 = random(22,83)
  thickness2 = random(22,83)
  thickness3 = random(22,83)
  thickness4= random(22,83)
  speed1 = random(223,321)
  speed2 = random(223,321)
  speed3 = random(223,321)
  speed4 = random(223,321)
  weight1 = random(30,52)
  weight2 = random(30,52)
  weight3 = random(30,52)
  weight4 = random(30,52)
}

function draw() {
  background(255,255,255); 
  
  if(keyDown("space")){
b1.velocityX = 2
b2.velocityX = 2
b3.velocityX = 2
b4.velocityX = 2
  }

 if ( wall1.x - b1.x  < (b1.width + b1.width)/2){
     b1.velocityX = 0
     d1 = 0.5 * weight1 * speed1  / (thickness1 * thickness1 )
     if (d1 < 3){
         b1.shapeColor = "#76EE00" 
     } else if (d1 >3){
         b1.shapeColor = (255,0,0)  
     }
    }

     if ( wall2.x - b2.x  < (b2.width + wall2.width)/2){
      b2.velocityX = 0
      d2 = 0.5 * weight2 * speed2  / (thickness2 * thickness2)
      if (d2 < 3){
          b2.shapeColor = "#76EE00"
      } else if (d2 > 3){
          b2.shapeColor = "#FF0000"  
      }
    }

      if ( wall3.x - b3.x  < (b3.width + wall3.width)/2){
        b3.velocityX = 0
        d3 = 0.5 * weight3 * speed3 / (thickness3 * thickness3 )
        if (d3 < 3){
            b3.shapeColor = "#76EE00"
        } else if (d3 > 3){
            b3.shapeColor = "#FF0000" 
        }
      }

        if (wall4.x -  b4.x  < (b4.width + wall4.width)/2){
          b4.velocityX = 0
          d4 = 0.5 * weight4 * speed4  / (thickness4 * thickness4 )
          if (d4 < 3){
              b4.shapeColor = "#76EE00"
          } else if (d3 > 3){
              b4.shapeColor = "#FF0000"  
          }
        }

  drawSprites();
}