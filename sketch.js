
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

Matter.Bodies.circle(50, 20, ball_options, 30);

groundObj.display();
groundObj=new ground(width/2, 670, width, 20);
leftSide = new ground(110, 600, 20, 120);
var ball_options=
{
	isStatic:false,
	restitution:0.3, 
	friction:0, 
	density:0.2
} 


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Matter.Body.applyForce(circle, 50, 20, force)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



