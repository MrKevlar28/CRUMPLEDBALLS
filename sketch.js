var paper, ground, dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400, 680, 800, 10);

	  paper = new Paper(180, 350, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  console.log(paper.x);
  ground.display();
  //dustbin.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
       Matter.Body.applyForce(paper.body, paper.Body.position, {x:85,y:-85});
	}

}



