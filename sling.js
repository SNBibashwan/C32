class Sling{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 180,
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        
        World.add(world, this.sling);
    }

    tear(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("grey");
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}