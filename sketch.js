var ground;
var unicorn, unicornImage , unicornJump;
var mud,mudImg;

var life1, life2, life3;
var lifeImg;

var enemyGroup;



function preload(){
   lifeImg = loadImage("life.png");
  
   mudImg = loadImage("mud.png")
   
   unicornImage = loadImage("rarity.png","walking.png");
   unicornJump  = loadImage("jump.png");
   unicornDug  = loadImage("dug.png")
   unicornCollide = loadImage("collide.png");

}

function setup(){


    createCanvas(800,400);

    // creating the unicorn sprite

    unicorn = createSprite(50,290,10,10)
    unicorn.addImage(unicornImage)
    unicorn.scale = 0.2
    unicorn.debug = true
    unicorn.setCollider("rectangle",0,0,300,300)

    ground = createSprite(300,360,1000,10)
    //ground.visible = false

    life1 = createSprite(750,50,10,10)
    life1.addImage(lifeImg)
    life1.scale= 0.3;

    life1 = createSprite(700,50,10,10)
    life1.addImage(lifeImg)
    life1.scale= 0.3;

    life1 = createSprite(650,50,10,10)
    life1.addImage(lifeImg)
    life1.scale= 0.3;

    enemyGroup = new Group();
}

function draw(){
    background("pink")

    //moving the unicorn up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
   unicorn.y =unicorn.y-30
   unicorn.addImage(unicornJump)
   unicorn.scale = 0.5
   unicorn.setCollider("rectangle",0,0,150,150)

}
unicorn.velocityY = unicorn.velocityY + 0.8
if(unicorn.y>280){
  unicorn.addImage(unicornImage)
  unicorn.scale = 0.2;
  unicorn.velocityY = 0
  console.log("hii")
}

if(keyWentDown("DOWN_ARROW")||touches.length>0){
    unicorn.y = unicorn.y+30
    unicorn.addImage(unicornDug)
    unicorn.scale = 0.2
   }
  else if(keyWentUp("DOWN_ARROW")|| touches.length>0){
    unicorn.y =unicorn.y-30
    unicorn.addImage(unicornImage)
    unicorn.scale = 0.2
  }
  
unicorn.collide(ground);


// calling the function to spawn mud
enemy();

  drawSprites();
}

// creating function

function enemy(){
   if (frameCount%100 === 0){

    mud = createSprite(750,360,40,40)
    mud.addImage(mudImg)
    mud.scale = 0.2;
    mud.velocityX = -3
    mud.debug= true
    mud.setCollider("rectangle",0,0,400,400)
   
    mud.lifetime = 400
     
    console.log("enemy")

   }
}