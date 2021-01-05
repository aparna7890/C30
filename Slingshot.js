class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,80,30,140);
        image(this.sling2,182,76,30,90)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            stroke(48, 22, 8)
            var pointB = this.pointB;
            
            if(pointA.x < 240){
            strokeWeight(7);
            line(pointA.x - 10, pointA.y, pointB.x - 5, pointB.y);
            line(pointA.x - 10, pointA.y, pointB.x + 20, pointB.y)
            image(this.sling3, pointA.x - 20, pointA.y - 10, 10, 20)          
            }

            else{
            strokeWeight(3);
            line(pointA.x + 10, pointA.y, pointB.x - 5, pointB.y);
            line(pointA.x + 10, pointA.y, pointB.x + 20, pointB.y)
            image(this.sling3, pointA.x + 15, pointA.y - 5, 10, 20)
        }
        }
    }
    
}