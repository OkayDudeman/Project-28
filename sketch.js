const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Render = Matter.Render;
	const Constraint=Matter.Constraint;
	var treeObj, stoneObj,groundObject, launcherObject;
	var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
	var world,boyImg,boy;
	var launchingForce=100;
	

	function preload(){
		boyImg=loadImage("boy.png");
	  }
	

	function setup() {
		createCanvas(1300, 600);
		engine = Engine.create();
		world = engine.world;
	
		//boy = createSprite(300,200,100,200);
		//boy.addImage(boyImg);
		//boy.scale = 0.1;

		stoneObj=new Stone(235,420,30); 
	

    mango1 = new Mango(900,280,40,40);
    mango2 = new Mango(950,280,40,40);
    mango3 = new Mango(1000,280,40,40);
    mango4 = new Mango(900,330,40,40);
    mango5 = new Mango(950,330,40,40);
    mango6 = new Mango(1000,330,40,40);
    mango7 = new Mango(950,230,40,40);
    mango8 = new Mango(1050,280,40,40);
    mango9 = new Mango(950,280,40,40);
    mango10= new Mango(1150,280,40,40);
    mango11= new Mango(1050,330,40,40);
    mango12= new Mango(1100,330,40,40);
    mango13= new Mango(1150,330,40,40);
    mango14= new Mango(1050,380,40,40);
    mango15= new Mango(900,380,40,40);
    mango16= new Mango(950,380,40,40);
    mango17= new Mango(1000,380,40,40);
    mango18= new Mango(1050,380,40,40);
    mango19= new Mango(1100,380,40,40);
    mango20= new Mango(1150,380,40,40);
	

		treeObj=new Tree(1000,400,400,700);
		groundObject=new Ground(width/2,600,width,20);
		launcherObject=new Launcher(stoneObj.body,{x:235,y:420})
	  var render = Render.create({
	    element: document.body,
	    engine: engine,
	    options: {
	      width: 1300,
	      height: 600,
	      wireframes: false
	    }
	  });
		
		Engine.run(engine);
	 // Render.run(render);
	}
	

	function draw() {
	

	  background(230);
	  //frameRate(2)
	 // Engine.update(engine)
	  textSize(25);
	  text("Press Space to get a second Chance to Play!!",50 ,50);
	  image(boyImg ,200,340,200,300);
	  //Engine.update(engine)
	  
	

	  treeObj.display();
	  stoneObj.display();
	  mango1.display();
	  mango2.display();
	  mango3.display();
	  mango4.display();
	  mango6.display();
	  mango7.display();
	  mango8.display();
	  mango9.display();
	  mango10.display();
	  mango11.display();
	mango12.display();
	mango13.display();
	  mango14.display();
	mango15.display();
	mango16.display();
	  mango17.display();
	mango18.display();
	mango19.display();
	  mango20.display();
	  stoneObj.display();
	

	  groundObject.display();
	  launcherObject.display();
	  detectollision(stoneObj,mango1);
	  detectollision(stoneObj,mango2);
	  detectollision(stoneObj,mango3);
	  detectollision(stoneObj,mango4);
	  detectollision(stoneObj,mango5);
	  detectollision(stoneObj,mango6);
	  detectollision(stoneObj,mango7);
	  detectollision(stoneObj,mango8);
	  detectollision(stoneObj,mango9);
	  detectollision(stoneObj,mango10);
	  detectollision(stoneObj,mango11);
	  detectollision(stoneObj,mango12);
	}
	

	function mouseDragged()
	{
		Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
	}
	

	function mouseReleased()
	{
		launcherObject.fly();
	    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
	}
	

	function keyPressed() {
		if (keyCode === 32) {
	    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
		  launcherObject.attach(stoneObj.body);
		}
	  }
	

	  function detectollision(lstone,lmango){
		/*var collision = Matter.SAT.collides(lstone,lmango);
		if(collision.collided){
			console.log("collided");
			Matter.Body.setStatic(lmango,false);	
		}*/
	  mangoBodyPosition=lmango.body.position
	  stoneBodyPosition=lstone.body.position
	  
	  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	  //console.log(distance)
	 // console.log(lmango.r+lstone.r)
	  	if(distance<=lmango.r+lstone.r)
	    {
	      //console.log(distance);
	  	  Matter.Body.setStatic(lmango.body,false);
	    }
	

	  }

