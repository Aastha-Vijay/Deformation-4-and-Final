var car, wall;
var speed, weight, deformation;

function setup() {
  createCanvas(800,400);
  car=createSprite(20, 200, 50, 50);
  car.shapeColor="white";
  wall=createSprite(750,200,40,120);
  
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;

}

function draw() {
  background("black");  

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22509;
    if(deformation<100){
      car.shapeColor="green";
    }

    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }

    if(deformation>180){
      car.shapeColor="red";
    }
  }
  drawSprites();
}


/*var bullet, wall, thickness;
var speed, weight, damage;

function setup() {
  createCanvas(800,400);
  bullet=createSprite(20, 200, 30, 10);
  bullet.shapeColor="white";
 
  thickness=random(10,100);
  wall=createSprite(700,200,thickness,120);
  speed=random(7,25);
  weight=random(30,120);
  bullet.velocityX=speed;

}

function draw() {
  background("black");  

  if(wall.x-car.x<(car.width+wall.width)/2){
    bullet.velocityX=0;
    damage = (0.5*weight*Math.sqrt(speed))/Math.cbrt(thickness);

    if(damage<50){
      wall.shapeColor="green";
    }

    else{
      wall.shapeColor="red";
    }
  }
  drawSprites();
}*/