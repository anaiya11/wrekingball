class Box{
    constructor(x,y,width,height){
        var objectOption = {
            restitution: 0.8,
            friction: 1.0,
            density:0.04
        }
      this.body = Bodies.rectangle(x,y,width,height,objectOption);
      this.width = width;
      this.height = height;
      World.add(world,this.body);

    }
    display(){
var POS = this.body.position;
var angle  = this.body.angle;
push ();
translate(POS.x, POS.y);
rotate(angle);
strokeWeight(4);
stroke("green");
rectMode(CENTER);
fill("pink");
rect(POS.x, POS.y, this.width, this.height);
pop ();
    }
}