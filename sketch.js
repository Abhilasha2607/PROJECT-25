
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new Paper (200,450,40);
	dustbin = new Dustbin (1200,650);
	ground = new Ground(800,670,1600,20);
  
}


function draw() {
  //rectMode(CENTER);
  background(255);
  
 
  paper.display();
  dustbin.display();
  ground.display();
 

}
function keyPressed(){
	if (keyCode===UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}



