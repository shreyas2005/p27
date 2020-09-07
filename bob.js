class Bob{
    constructor(x,y,radius){
        var option={
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body=Bodies.circle(x,y,radius,option);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        
        var pos =this.body.position;
        var angle=this.body.angle;
       push();
        translate(pos.x,pos.y)
        rotate(angle);
        
        fill("white")
        ellipseMode(this.radius);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}