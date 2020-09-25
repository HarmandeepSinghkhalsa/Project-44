
// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;
var car, carimg; 
var bg, bgimg;
var obstacle1, obstacle1img;
var obstacle2, obstacle2img;
var obstacle3, obstacle3img; 
var obstaclegroup1, obstaclegroup2, obstaclegroup3;
var play = 1;
var end = 0;
var gameState = play;
var score = 0; 
var reset, resetimg; 
function preload()
{
	carimg = loadImage("purple car.png");
	obstacle1img = loadImage("blue car (1).png");
	obstacle2img = loadImage("red car (2).png");
	obstacle3img = loadImage("orange car (2).png");
	bgimg = loadImage("road1.jpg");
	resetimg = loadImage("Reset (1).png");
}

function setup() {
	createCanvas(800, 600);
	bg = createSprite(800,300,200,600);
	bg.addImage("back", bgimg); 
	bg.scale = 6;
	car  = createSprite(150,300,20,20);
	car.addImage("carss", carimg);
	car.scale = 0.2;
	reset = createSprite(400,300,50,50);
	reset.addImage("resset", resetimg);
	reset.visible = false;
reset.scale = 0.3;
	obstaclegroup1 = new Group();
	obstaclegroup2 = new Group();
	obstaclegroup3 = new Group();
	// engine = Engine.create();
	// world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("black");
  if (gameState === play){
  if (keyDown("UP_ARROW")){
	  car.y = car.y - 5
  }
  if (keyDown("DOWN_ARROW")){
	  car.y = car.y + 5;
  }
  bg.velocityX = -5;
    if (bg.x<0){
      bg.x = bg.width/2;
	}
	
if (frameCount % 3 === 0){
	score = score + 1;
}
  obstacles1();
  obstacles2();
  obstacles3();
  if (car.isTouching(obstaclegroup1)||car.isTouching(obstaclegroup2)|| car.isTouching(obstaclegroup3)){
	  gameState = end;
  }
}
else if(gameState === end){
	bg.velocityX = 0;
	obstaclegroup1.setVelocityXEach(0);
	obstaclegroup2.setVelocityXEach(0);
	obstaclegroup3.setVelocityXEach(0);
	obstaclegroup1.setLifetimeEach(-1);
	obstaclegroup2.setLifetimeEach(-1);
	obstaclegroup3.setLifetimeEach(-1);
	reset.visible = true; 
}
if (mousePressedOver(reset)){
	restart();
   }
  
  drawSprites();
 textSize(30);
 text("Score : "+score, 50,50);
}
function restart(){
	gameState = play;
	obstaclegroup1.destroyEach();
	obstaclegroup2.destroyEach();
	obstaclegroup3.destroyEach();
	score = 0;
	reset.visible = false;
  }

function obstacles1(){
	// var a = random(100,150);
	 if(frameCount % 200===0){
	   console.log("hello");
	 obstacle1 = createSprite(800,400,50,50);
	 obstacle1.addImage("plan1", obstacle1img);
	 obstacle1.scale = 0.06;
	 obstacle1.velocityX = -4;
	 obstacle1.y = random(10,580);
	 obstacle1.lifetime = 220;
	 obstacle1.setCollider("circle",0,0,600);
	 obstacle1.debug = true;
	 obstaclegroup1.add(obstacle1);
	 reset.depth = obstacle1.depth + 1;
}
}

function obstacles2(){
	// var a = random(100,150);
	 if(frameCount % 250===0){
	   console.log("hello");
	 obstacle2 = createSprite(800,400,50,50);
	 obstacle2.addImage("plan2", obstacle2img);
	 obstacle2.scale = 0.2;
	 obstacle2.velocityX = -4;
	 obstacle2.y = random(10,580);
	 obstacle2.lifetime = 220;
	 obstacle2.setCollider("circle", 0,0,200);
	 obstacle2.debug = true;
	 obstaclegroup2.add(obstacle2);
	 reset.depth = obstacle2.depth + 1;
}
	
	
}

function obstacles3(){
	// var a = random(100,150);
	 if(frameCount % 300===0){
	   console.log("hello");
	 obstacle3 = createSprite(800,400,50,50);
	 obstacle3.addImage("plan2", obstacle3img);
	 obstacle3.scale = 0.2;
	 obstacle3.velocityX = -4;
	 obstacle3.y = random(10,580);
	 obstacle3.lifetime = 220;
	 obstacle3.setCollider("circle",0,0,200);
	 obstacle3.debug = true;
	 obstaclegroup3.add(obstacle3);
	 reset.depth = obstacle3.depth + 1;
}
}


