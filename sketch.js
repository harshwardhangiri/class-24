const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var box1,box2,ground;
function setup() {
  var Canvas = createCanvas(1200,400);
  engine = Engine.create();
  world=engine.world;

  ground = new Ground(600,400,1200,20)
  box1 = new BOX(700,320,70,70);
  box2 = new BOX(920,320,70,70);
  log1 = new Log(810,200,300,PI/2);
  pig1 = new Pig(810,350);
  bird1 = new Bird(0,0);

  console.log(ground);
 
 
  
}
function draw() {
  background(200);  
  Engine.update(engine);

  box1.display() ;
  box2.display();
  ground.display();
  log1.display();
  pig1.display();
  bird1.display();
}


