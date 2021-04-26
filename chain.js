class Chain {

    constructor(bodyA, bodyB) {

        var opt = {

            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.07,
            length : 10

        };

        this.chain = Constraint.create(opt);
        World.add(world, this.chain);

    };

    display() {

        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }

};