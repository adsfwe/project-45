var backgroundImage, car_1Img, car_2Img, car_3Img, car_4Img, left_ninjaImg, right_ninjaImg, front_ninjaImg, back_ninjaImg
var ninja
var car

function preload() {
backgroundImage = loadImage("assets/road.png")
car_1Img = loadImage("assets/car_1.png")
car_2Img = loadImage("assets/car_2.png")  
car_3Img = loadImage("assets/car_3.png")
car_4Img = loadImage("assets/car_4.png")
left_ninjaImg = loadImage("assets/left.png")
right_ninjaImg = loadImage("assets/right.png")
front_ninjaImg = loadImage("assets/front.png")
back_ninjaImg = loadImage("assets/back.png")

}



function setup() {
  createCanvas(windowWidth,windowHeight);
  ninja = createSprite(width/2, height-50, 50, 50);
  ninja.addImage('front',front_ninjaImg)
  ninja.addImage("left",left_ninjaImg)
  ninja.addImage("right",right_ninjaImg)
  ninja.scale = 0.5
}

function draw() {
  background(backgroundImage);  
  drawSprites();

  if (keyDown(LEFT_ARROW)) {
    ninja.x -= 8
    ninja.changeImage("left")
  }
  if (keyDown(RIGHT_ARROW)) {
    ninja.x += 8
    ninja.changeImage("right")
  }
  if (keyDown(UP_ARROW)) {
    ninja.y -= 5
    ninja.changeImage("front")
  }
  spawnCars()
}

function spawnCars() {
  if (frameCount % 150 === 0) {
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: car = createSprite(width,height-200)
              car.addImage(car_1Img)
              car.velocityX = -5
              car.scale = 0.5
              break;
      case 2: car = createSprite(0,height-150)
              car.addImage(car_2Img)
              car.velocityX = 5
              car.scale = 0.5
              break;
      case 3: car = createSprite(width,height-200)
              car.addImage(car_3Img)
              car.velocityX = -5
              car.scale = 0.5
              break;
      case 4: car = createSprite(0,height-150)
              car.addImage(car_4Img)
              car.velocityX = 5
              car.scale = 0.5
              break;
    }
  }
}