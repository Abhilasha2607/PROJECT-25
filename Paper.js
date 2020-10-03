class Paper {
    constructor (x,y,radius){

    
    var option = {
        isStatic : false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2

    } 
    this.body = Bodies.circle(x,y,radius/2,option);
    this.r = radius;
    this.image = loadImage("paper.png");


    World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(255,0,255);
       // ellipse(0,0,this.r,this.r);
       imageMode (CENTER);
       image(this.image,0,0,this.r,this.r);

        pop ();
    }
}