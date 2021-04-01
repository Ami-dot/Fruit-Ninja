var PLAY=1;
var END = 0;
var gameState = 1;
var score;
var fruitGroup,fruit,fruit2,fruit3,fruit4;
var enemeyGroup,alien1,alien2,alien1I,alien2I;
var swordImage, sword;

function preload(){
 swordImage = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png.png");
  fruit3 = loadImage("fruit3.png.png");
  fruit4 = loadImage("fruit4.png.png");
  alien= loadImage("alien1.png");
  alien2 = loadImage("alien2.png");
}

function draw(){
  function fruits (){
    if(World.frameCount%80===0){
      fruit = createSprite(400,200.20,20);
      fruit.scale=0.2;
      r=Math.round(random(1,4));
      if(r==1){
        fruit.addImage(fruit1);
      } else if (r==2){
        fruit.addImage(fruit2);
      } else if (r==3){
        fruit.addImage(fruit3);
      }
    }
  }
sword = createSprite(40,200,20,20);
sword.addImage(swordImage);
sword.scale = 0.7
 
}