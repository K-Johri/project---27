class Rope{
    constructor(body1,body2,offSetX,offSetY){
        this.offSetX = offSetX
        this.offSetY = offSetY
        var options = {
           bodyA : body1,
           bodyB : body2,
           pointB : {
               x : this.offSetX,
               y : this.offSetY
           }
        }
        this.body = Constraint.create(options)
        World.add(world,this.body)
    }

    display(){
        var positionA = this.body.bodyA.position;
        var positionB = this.body.bodyB.position;
        var anchor1X = positionA.x
        var anchor1Y = positionA.y
        var anchor2X = positionB.x + this.offSetX
        var anchor2Y = positionB.y + this.offSetY
        line(anchor1X,anchor1Y,anchor2X,anchor2Y)
    }
}