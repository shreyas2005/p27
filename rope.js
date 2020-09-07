class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.04,
            pointB :{x:this.offsetX,y:this.offsetY}
        }
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pos=this.chain.bodyA.position;
        var pos2=this.chain.bodyB.position;
        var pos3=pos2.x+this.offsetX;
        var pos4=pos2.y+this.offsetY;
        line(pos.x,pos.y,pos3,pos4);
    }
}