class Ground {
    constructor(x,y,width,height)
    {
        var options ={
            isStatic:true,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width; 
        this.height = height;
        this.color = "forestgreen";
        this.stroke = "darkgreen";
    
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        fill(this.color);
        rectMode(CENTER);
        stroke(this.stroke);
        strokeWeight(4);
        rect(pos.x,pos.y,this.width,this.height);
    }
}



