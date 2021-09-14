var starImg,bgImg,ferimg;
var star, starBody;
var ground,groundbody;
var pico1,pico2,pico3;
var pico11,pico22,pico33;
var p1img,p2img,p3img;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
function preload()
{
	p1img=loadImage("photos/pico1.png");
	p2img=loadImage("photos/pico2.png")
	p3img=loadImage("photos/pico3.png")


}

function setup() {
	createCanvas(displayWidth,displayHeight);

	engine = Engine.create();
	world = engine.world;

    ground=createSprite(displayWidth/2,displayHeight-50,width,100);

    groundbody=Bodies.rectangle(displayWidth/2,displayHeight-50,width,100,{isStatic:true});
    World.add(world,groundbody)

    pico1 = createSprite(displayWidth/2 ,30,10,10);
    pico1.addImage(p1img);
	pico11 = Bodies.rectangle(displayWidth/2 , 30 , 10 ,10, {restitution:1.0, isStatic:false});
	World.add(world, pico11);

    pico2 = createSprite(displayWidth/2 ,30,10,10);
    pico2.addImage(p2img)
	pico22 = Bodies.rectangle(displayWidth/2 , 30 , 10 ,10, {restitution:1.0, isStatic:false});
	World.add(world, pico22);
    
    pico3 = createSprite(displayWidth/2 ,30,10,10);
    pico3.addImage(p3img)
    pico33 = Bodies.rectangle(displayWidth/2 , 30 , 10 ,10, {restitution:1.0, isStatic:false});
	World.add(world, pico33);

   
  
	Engine.run(engine);

}


function draw() {
  background("blue");

  pico1.x=pico11.position.x ;
  pico1.y= pico11.position.y ;

  pico2.x=pico22.position.x ;
  pico2.y= pico22.position.y ;

  pico3.x=pico33.position.x ;
  pico3.y= pico33.position.y ;

 

  drawSprites();

}

