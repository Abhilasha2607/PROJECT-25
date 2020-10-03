class Dustbin {
    constructor(x,y){
 this.angle = 0;


      this.bottomBody = Bodies.rectangle(x,y,200,20,{isStatic: true});
      World.add(world,this.bottomBody);
     
     
      this.leftbody = Bodies.rectangle(x-100,y-50,20,100,{isStatic:true});
      World.add(world,this.leftbody);
      Matter.Body.setAngle(this.leftbody, this.angle);
      

      this.rightbody = Bodies.rectangle(x+100,y-50,20,100,{isStatic:true});
      
      Matter.Body.setAngle(this.rightbody, this.angle * -1);
      World.add(world,this.rightbody);

      this.image = loadImage("dustbingreen.png" );
} 
display(){
    

    
    
    var posBottom = this.bottomBody.position;
    push ();
    translate(posBottom.x,posBottom.y);
    rectMode(CENTER);
    fill(255);
  //  rect(0,0,200,20)
    image(this.image,0,-50,200,100);
      
    pop ();

    var posleft = this.leftbody.position;
    push();
    translate(posleft.x,posleft.y);
    angleMode(RADIANS);
    rotate (this.angle);
    fill(265);
   // rect(0,0,20,100);
    pop();

    var posright = this.rightbody.position;
    push();
    translate(posright.x,posright.y);
    angleMode(RADIANS);
    rotate(-1*this.angle);
    fill(265);
   // rect(0,0,20,100);
    pop();
}
}