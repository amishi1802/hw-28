
class Trees
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
        this.image=loadImage("Pluckingmangoes/tree.png");
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.body.depth=1;
 		World.add(world, this.body);

	}
	display()
	{
			
			var treesPos=this.body.position;		

			push()
			translate(treesPos.x, treesPos.y);
			imageMode(CENTER)
			strokeWeight(4);
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}