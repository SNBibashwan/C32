


class Player{
  constructor(x,y){

    var options ={
      'restitution':0.5,
      'friction': 0.8,
      'density':0.1
    }
    this.body = Bodies.rectangle(x,y,80,80);
    this.image = loadImage('images/myface1.png');
    this.width = 80;
    this.height = 80;
    Matter.Body.setMass(this.body, this.body.mass * 10);

    World.add(world,this.body);
  }

  display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}





