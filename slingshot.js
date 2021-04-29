class Slingshot {

    //attaching body to a point (parameters)....
    constructor(bodyA, pointB) {

        var opt = {

            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.07,
            length : 10

        };

        this.sling = Constraint.create(opt);
        this.pointB= pointB;
        World.add(world, this.sling);

    };

    display() {

        //doing a null check for bodyA so that there are no errors once bodyA is detached...
        if (this.sling.bodyA) {

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        };

        

    };

    fly() {

        //detaching the bodyA (bird) from sling by making it 'null'
        this.sling.bodyA = null;

    };

};