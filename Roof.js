class Roof{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.y = y
        this.x = x
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)
    }

    display(){
        var position = this.body.position;
        push();
        translate(position.x,position.y)
        rectMode(CENTER);
        fill("black");
        rect(0,0,this.w,this.h)
        pop();
    }
}