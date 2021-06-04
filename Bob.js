class Bob{
    constructor(x, y){
        var options = {
            isStatic: false,
            'density': 1.2,
            'friction': 0.5,
            'restitution': 0.3

        }
        this.body = Bodies.circle(x, y, 20, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("red");
        ellipse(0, 0, 50, 50);
        pop();
    }

}