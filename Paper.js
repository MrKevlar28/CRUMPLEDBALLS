class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2

        }
        this.body = Bodies.circle(180,350,30,options);
        World.add(world,this.body);
        this.r = 30;
    }
    display(){
        var pos2 = this.body.position;
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(pos2.x , pos2.y , this.r, this.r);

    }
}