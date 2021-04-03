const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {

  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(550, 500, 1100, 25)
  
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight - 50))
  }
 
  for (var j = 10; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 50, 10))
  }

  for (var j = 10; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 100, 10))
  }
  
  
 Engine.run(engine);
 
  }
  



function draw() {
  background(0);   
  ground.display();
  
  for (var k = 0; k < divisions.length; k = k +1 ){
    divisions[k].display();
  }

  for(var j=0;j<plinkos.length;j=j+1){
    plinkos[j].display()
  }
  
 if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
  
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }

   drawSprites(); 
  
}