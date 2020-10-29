
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,groundObject, roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(200,450,40);
	bobObject2=new Bob(280,450,40);
	bobObject3=new Bob(360,450,40);
	bobObject4=new Bob(440,450,40);
	bobObject5=new Bob(520,450,40);
	groundObject=new Roof(width/2,670,width,20);
	roof=new Roof(350,400,400,20);
	chain1 = new Chain(bobObject1.body,roof.body)
	chain2 = new Chain(bobObject2.body,roof.body)
	chain3 = new Chain(bobObject3.body,roof.body)
	chain4 = new Chain(bobObject4.body,roof.body)
	chain5 = new Chain(bobObject5.body,roof.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 groundObject.display();
 roof.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();
}



