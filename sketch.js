const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(800, 480);
  engine = Engine.create(); 
  world = engine.world;
  Engine.run(engine);
  ground1 = new ground(400, 750, 800, 50)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0, 0, 254);  
  
  ground1.display();
  //drawSprites();
}