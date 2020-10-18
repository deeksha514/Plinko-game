const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine;
var world;
var particles=[];
var plinko=[];
var division=[];

var divisionHeight=300;
var ground;

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(width/2,790,width,20);

  for(k=0;k<=width;k=k+80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }

  for(var j=15;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,175));
  }

  for(var j=40;j<=width-20;j=j+50){
    plinko.push(new Plinko(j,275));
  }

  for(var j=15;j<=width-30;j=j+50){
    plinko.push(new Plinko(j,375));
  }
    
}

function draw() {
  background(0,0,0);  

  Engine.update(engine);
  ground.display();
  
  for(i=0;i<plinko.length;i++){
   plinko[i].display();

  }
  
  for(l=0;l<division.length;l++){
    division[l].display();
  }

  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for(j=0;j<particles.length;j++){
    particles[j].display();
  }
  

}