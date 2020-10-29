  class Stone{
    constructor(x,y,r){
                var options={
                restitution:0,
                isStatic:true,
                density:0.2,
                friction:1
                };
                
                this.image=loadImage("pluckingmangoes/stone.png");
                this.x=x;
                this.y=y;
                this.r=r;
                this.stone=Bodies.circle(this.x,this.y,this.r,options);
                World.add(world,this.stone);
            }
         
        
            display(){
                var pos=this.stone.position;
                push();
                translate(pos.x,pos.y);
                imageMode(CENTER);
                image(this.image,0,0,this.r,this.r);
             pop();     
        }
        }
