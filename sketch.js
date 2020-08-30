var ground, paper, box1, box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1280, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground (640,700,1280,280);

	paper = new Paper (200,400,40);

	box1 = new Box (1030,455,200,20);
	box2 = new Box (930,415,20,100);
	box3 = new Box (1130,415,20,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
  
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.postion,{x:85,y:-85});
    }
}


