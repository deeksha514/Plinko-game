class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0.3,
            density:1.2,
            friction:0.5
              }
              this.radius=10;
              this.y=y;
              this.x=x;
            
              this.body=Bodies.circle(this.x,this.y,this.radius,options);
              World.add(world,this.body);
             }
            
              display(){
                  var ppos=this.body.position;
                  push()
                  translate(ppos.x,ppos.y);
                  rotate (this.body.angle);
                  fill ("blue");
                  ellipseMode(CENTER);
                  ellipse(0,0,this.radius,this.radius);
                  pop()
    }

} 