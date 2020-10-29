class Mango{
    constructor(x,y,r){
        var options={
        isStatic:true,
        restitution:0,
        friction:1
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        this.image=loadImage("Pluckingmangoes/mango.png");
        this.body.scale=0.5;
        this.body.depth=5;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    } 
}