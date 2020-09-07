class roof{
    constructor(x,y,width,height){
     var op={
    
        isStatic : true
     }
        this.body=Bodies.rectangle(x,y,width,height,op);
        this.width=width;
        this.height=height;
     
        World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    push();
   translate(pos.x,pos.y);
   rotate(this.body.angle);
    fill("red");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    pop();
    }
    
    
    }