class dustbin
{
	constructor(x,y)
	{

		var options={
			isStatic:true
		}
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=200;
		this.wallThickness=20;

		this.image = loadImage("dustbingreen.png");
		
		this.bottomwall=Bodies.rectangle(x,y, this.dustbinWidth, this.wallThickness,options);
		this.leftWall=Bodies.rectangle(x-this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,options)
		this.rightWall=Bodies.rectangle(x+this.dustbinWidth/2,y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,options)

		World.add(world, this.bottomwall)
		World.add(world, this.leftWall)
		World.add(world, this.rightWall);

	}
	display()
	{	
		imageMode(CENTER);
		image(this.image,this.x,this.y-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
		
	}

}