var player,babyImg2,toddler,adolescent
var ground
var bgImg,Bg2img
var BG
var toy1,toy2,toy3,car1,car2,car3
var toyGroup,carGroup

function preload() {
babyImg = loadImage("Images/Baby.png");
bgImg = loadImage("Images/BG.jpg");
toy1 = loadImage("Images/toy1.png");
toy2 = loadImage("Images/TOY2.png");
toy3 = loadImage("Images/TOY3.png");
toddler = loadImage("Images/Boy1.png");
adolescent = loadImage("Images/Boy2.png")
car1 = loadImage("Images/Car1.png");
car2 = loadImage("Images/Car2.png");
car3 = loadImage("Images/Car 3.png")
Bg2img = loadImage("Images/BG2.jpg")
}


function setup() {
  createCanvas(1000,700);
  BG = createSprite(250,200,1000,700)
  BG.addImage("bg",bgImg)
  BG.addImage("bg2",Bg2img)
  BG.scale = 2.5
  player = createSprite(100, 600, 50, 50);
  player.addImage("Img",babyImg)
  player.scale = 0.5
  player.addImage("image",toddler)
  player.addImage("pic",adolescent)
  
  ground = createSprite(500,680,1000,20)

  toyGroup = new Group()
}



function draw() {
  background("black");  


  if(keyDown("space")){
    ground.velocityX=-4
   
   }

   if(keyDown(UP_ARROW)&&player.collide(ground)){
    player.velocityY=-20
   
   }

if(frameCount>=600){
  BG.changeImage("bg2",Bg2img)
}
   
   
   
   if(frameCount===500){
     player.changeImage("image",toddler)
   }

   if(frameCount===1000){
     player.changeImage("pic",adolescent)
   }

player.velocityY = player.velocityY+0.8

if(ground.x<0){
 ground.x=ground.width/2
}

if(frameCount>=1 && frameCount<=1000){
  spawnToys()
}
if(toyGroup.isTouching(player)){
  toyGroup.destroyEach()
}
 
player.collide(ground)

drawSprites();
}

function spawnToys(){
  if(frameCount % 100 === 0&&frameCount<=500){
    var toys = createSprite(800,350,10,40);
    toys.velocityX = -6;
    
    toys.scale = 0.3
    
    toys.lifetime = 300;
    var num = Math.round(random(1,3))
    if(num===1){
      toys.addImage("toy1",toy1);
    }
    else if(num===2){
      toys.addImage("toy2",toy2);
    }
    if(num===3){
      toys.addImage("toy3",toy3);
      
    }
    toyGroup.add(toys)
  }
}

function spawnCars(){
  if(frameCount % 100 === 0&&frameCount>=600&&frameCount<=1000){
    var cars = createSprite(800,350,10,40);
    cars.velocityX = -6;
    
    cars.scale = 0.3
    
    cars.lifetime = 300;
    var num = Math.round(random(1,3))
    if(num===1){
      cars.addImage("car1",car1);
    }
    else if(num===2){
      cars.addImage("car2",car2);
    }
    if(num===3){
      cars.addImage("car3",car3);
      
    }
    carGroup.add(cars)
  }
}