class Bob{
    constructor(x,y,r){
        var options = {
            restitution : 1,
            density : 0.8
        }
        this.y = y
        this.x = x
        this.r = r
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options)
        World.add(world,this.body)
    }

    display(){
        var position = this.body.position;
        push();
        translate(position.x,position.y)
        rectMode(CENTER);
        fill("red");
        ellipse(0,0,this.r,this.r)
        pop();
    }
}