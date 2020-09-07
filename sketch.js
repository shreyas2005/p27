
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var bob1,bob2;
var bob3,bob4,bob5,bob6
var chain1 ;
var bobDiameter=40;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 =new Bob(280,250,50);
	bob2 =new roof(220,150,300,20);
	bob3 =new Bob(250,250,50);
	bob4 =new Bob(220,250,50);
	bob5 =new Bob(190,250,50);
	bob6 =new Bob(160,250,50);

	chain1 =new Chain(bob2.body,bob3.body,-bobDiameter*1,0);
	Engine.run(engine);
  
}

function draw() {
  background(255);
  Engine.update(engine);

  drawSprites();
  bob2.display();
 bob1.display();
 bob3.display();
 bob4.display();
 bob5.display();
 bob6.display();
 chain1.display();
}



