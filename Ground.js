class Ground{
    constructor(x,y,width,height){
        var objectOption = {
            isStatic:true
        }
      this.body = Bodies.rectangle(x,y,width,height,objectOption);
      this.width = width;
      this.height = height;
      World.add(world,this.body);

    }
    display(){
var POS = this.body.position;
rectMode(CENTER);
fill("brown");
rect(POS.x, POS.y, this.width, this.height);

    }
}