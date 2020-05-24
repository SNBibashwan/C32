class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 20,
            
        }
        this.bodyA = bodyA;
        this.pointB = pointB
        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("saddlebrown");
                strokeWeight(4);
                line(pointA.x - 25, pointA.y+10, pointB.x +10, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x + 10, pointB.y - 1);
            
            pop();
        }
    }

    
}