
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new Roof(width/2,height/4,width/7,20);
	bobDiameter = 35;
	bobPositionX = width/2;
	bobPositionY = height/4 + 400;

	bob1 = new Bob(bobPositionX - bobDiameter * 2,bobPositionY,bobDiameter)
	bob2 = new Bob(bobPositionX - bobDiameter,bobPositionY,bobDiameter)
	bob3 = new Bob(bobPositionX,bobPositionY,bobDiameter)
	bob4 = new Bob(bobPositionX + bobDiameter,bobPositionY,bobDiameter)
	bob5 = new Bob(bobPositionX + bobDiameter * 2,bobPositionY,bobDiameter)

	rope1 = new Rope(bob1.body,roofObject.body,-bobDiameter * 2,0)
	rope2 = new Rope(bob2.body,roofObject.body,-bobDiameter * 1,0)
	rope3 = new Rope(bob3.body,roofObject.body,0,0)
	rope4 = new Rope(bob4.body,roofObject.body,bobDiameter * 1,0)
	rope5 = new Rope(bob5.body,roofObject.body,bobDiameter * 2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roofObject.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{
			x : -60,
			y : -50
		})
	}
}

