const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var world;
var ground;
var engine;
var ball;
function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;
  var options={
  isStatic: true
  }
  var ball_={
    restitution: 1,friction:3,density:9
    
  }
ground= Bodies.rectangle(200,390,400,20,options)
ball= Bodies.circle(200,200,30,ball_)
World.add(world,ground)
World.add(world,ball)
 
}

function draw() {
  Engine.update(engine);
  background("skyblue");  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
}