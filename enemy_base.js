
class Enemy_base{
  constructor(x,y,width,height){

    var options ={
      'restitution': 0.5,
      'friction': 0.6
    }
    this.body = Bodies.rectangle(x,y,width,height);
    this.image = loadImage('images/enemyFace1.png');
    this.width = width;
    this.height = height;

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
















/*
class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    
      
    }
  
  };
  


  */