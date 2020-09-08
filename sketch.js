const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, tree,treeimg;
var boy, boyimg;
var stones;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7,mango8;

function preload()
{
boyimg = loadImage("boy.png");
treeimg = loadImage("tree.png");
}

function setup() {
	
createCanvas(1023, 640);
engine = Engine.create();
world = engine.world;

//Create the Bodies Here.

ground=new Ground();

mango1=new Mango(600,290,55,60);
mango2=new Mango(855,300,55,60);
mango3=new Mango(670,260,55,60);
mango4=new Mango(730,200,55,60);
mango5=new Mango(710,320,55,60);
mango6=new Mango(780,230,55,60);
mango7=new Mango(825,170,55,60);
mango8=new Mango(950,270,55,60);

tree=createSprite(775,368);
tree.addImage(treeimg);
tree.scale=0.42;

boy=createSprite(160,550);
boy.addImage(boyimg);
boy.scale=0.125;

stones=new Stone(100,400,43,43);

attach=new Throw(stones.body,{x:100,y:465});

Engine.run(engine);
}


function draw() {
rectMode(CENTER);
background(0);

fill("white");
textSize(25);
text("press space to get second chance",60,80)

detectCollision(stones,mango1);
detectCollision(stones,mango2);
detectCollision(stones,mango3);
detectCollision(stones,mango4);
detectCollision(stones,mango5);
detectCollision(stones,mango6);
detectCollision(stones,mango7);
detectCollision(stones,mango8);


ground.display();

drawSprites();


mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
stones.display();

}

function mouseDragged(){
Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
attach.fly();
}

function detectCollision(lstones,lmango){

if(lstones.body.position.x- lmango.body.position.x <lmango.width + lstones.width
&& lmango.body.position.x - lstones.body.position.x  < lmango.width + lstones.width
&&lstones.body.position.y -lmango.body.position.y < lmango.height + lstones.height
&& lmango.body.position.y - lstones.body.position.y < lmango.height + lstones.height){
Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(stones.body,{x:100,y:465});
attach.Launch(stones.body);
}
}