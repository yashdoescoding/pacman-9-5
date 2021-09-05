var player, playerImg;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22;
var greenGhost, greenGhostImg, redGhost, redGhostImg, purpleGhost, purpleGhostImg, blueGhost, blueGhostImg;
var score;
var strawberry, strawberryImg, cherry, cherryImg, coin, coinImg;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8


function preload() {
  playerImg = loadAnimation("images/player.png", "images/playerEating.png");
  purpleGhostImg = loadImage("images/purpleGhost.png");
  greenGhostImg = loadImage("images/greenGhost.png");
  redGhostImg = loadImage("images/redGhost.png");
  blueGhostImg = loadImage("images/blueGhost.png");

  strawberryImg = loadImage("images/strawberry.png")
  cherryImg = loadImage("images/cherry.png")
  coinImg = loadImage("images/playerEating.png")

}


function setup() {
  createCanvas(430, 400);
  player = createSprite(16, 16, 10, 10);
  player.addAnimation("pacman", playerImg)
  greenGhost = createSprite(375, 180)
  greenGhost.addImage(greenGhostImg)
  greenGhost.scale = 0.06

  purpleGhost = createSprite(30, 300)
 purpleGhost.addImage(purpleGhostImg)
  purpleGhost.scale = 0.16

  score = 0;

  coin1 = createSprite(15, 55, 5, 5)
  coin1.addImage(coinImg)
  coin1.scale = 0.015

  coin2= createSprite(15, 75, 5, 5)
  coin2.addImage(coinImg)
  coin2.scale = 0.015

  coin3 = createSprite(15, 95, 5, 5)
  coin3.addImage(coinImg)
  coin3.scale = 0.015

  coin4 = createSprite(15, 115, 5, 5)
  coin4.addImage(coinImg)
  coin4.scale = 0.015

  coin5 = createSprite(15, 135, 5, 5)
  coin5.addImage(coinImg)
  coin5.scale = 0.015

  coin6 = createSprite(35, 135, 5, 5)
  coin6.addImage(coinImg)
  coin6.scale = 0.015

  coin7 = createSprite(55, 135, 5, 5)
  coin7.addImage(coinImg)
  coin7.scale = 0.015

  coin8 = createSprite(75, 135, 5, 5)
  coin8.addImage(coinImg)
  coin8.scale = 0.015

  coin9 = createSprite(95, 135, 5, 5)
  coin9.addImage(coinImg)
  coin9.scale = 0.015

  coin10 = createSprite(115, 135, 5, 5)
  coin10.addImage(coinImg)
  coin10.scale = 0.015

  coin11 = createSprite(135, 135, 5, 5)
  coin11.addImage(coinImg)
  coin11.scale = 0.015

  player.scale=0.04
  var wall1 = createSprite(50, 50, 20, 100);
  wall1.shapeColor = 'orange';

  var wall2 = createSprite(115, 110, 150, 20);
  wall2.shapeColor = 'red';

  var wall3 = createSprite(200, 95, 20, 50);
  wall3.shapeColor = 'orange';

  var wall4 = createSprite(65, 160, 210, 20);
  wall4.shapeColor = 'red';

  var wall5 = createSprite(215, 200, 20, 100);
  wall5.shapeColor = 'orange';

  var wall6 = createSprite(205, 250, 100, 20);
  wall6.shapeColor = 'red';

  var wall7 = createSprite(160, 60, 100, 20);
  wall7.shapeColor = 'red';

  var wall8 = createSprite(265, 278, 20, 75);
  wall8.shapeColor = 'orange';

  var wall9 = createSprite(175, 300, 100, 20);
  wall9.shapeColor = 'red';

  var wall10 = createSprite(350, 210, 100, 20);
  wall10.shapeColor = 'red';

  var wall11 = createSprite(310, 280, 20, 120);
  wall11.shapeColor = 'orange';

  var wall12 = createSprite(195, 350, 250, 20);
  wall12.shapeColor = 'red';

  var wall13 = createSprite(80, 297, 20, 85);
  wall13.shapeColor = 'orange';

  var wall14 = createSprite(50, 265, 40, 20);
  wall14.shapeColor = 'red';

  var wall15 = createSprite(120, 205, 100, 20);
  wall15.shapeColor = 'red';

  var wall16 = createSprite(325, 20, 20, 40);
  wall16.shapeColor = 'red';

  var wall17 = createSprite(290, 50, 90, 20);
  wall17.shapeColor = 'orange';

  var wall18 = createSprite(255, 85, 20, 50);
  wall18.shapeColor = 'red';

  var wall19 = createSprite(302, 100, 75, 20);
  wall19.shapeColor = 'orange';

  var wall20 = createSprite(350, 115, 20, 50);
  wall20.shapeColor = 'red';

  var wall21 = createSprite(310, 150, 100, 20);
  wall21.shapeColor = 'orange';

  var wall22 = createSprite(270, 185, 20, 50);
  wall22.shapeColor = 'red';
  
}

function draw() {
  background(0);
  text(mouseX + " " + mouseY, mouseX, mouseY);
  textSize(15);
  fill (255)
  text("Score:" + score, 360, 15)
  
  if (player.isTouching(coin1)) {
    coin1.destroy();
    score++;
  }

  if (keyDown("W")) {
    player.setVelocity(0, -2);
  }

  if (keyDown("S")) {
    player.setVelocity(0, 2);
  }

  if (keyDown("A")) {
    player.setVelocity(-2, 0);
  }

  if (keyDown("D")) {
    player.setVelocity(2, 0);
  }

  // createEdgeSprites();

  // player.collide(wall1)
  // player.collide(wall2)
  // player.collide(wall3)
  // player.collide(wall4)
  // player.collide(wall5)
  // player.collide(wall6)
  // player.collide(wall7)

  drawSprites();
}