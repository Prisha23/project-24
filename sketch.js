
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ground,paper,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite =createSprite(600,700,1200,20);

   paperSprite = createSprite(400,350,50,50);
  
	box1Sprite=createSprite(500, 650, 20, 100);
	//box1.shapeColor = "red";
	box2Sprite=createSprite(690, 650, 20, 100);
	//box2.shapeColor = "red";
	box3Sprite=createSprite(600, 695, 200, 15);
	//box3.shapeColor = "red";

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

drawSprites();
}
