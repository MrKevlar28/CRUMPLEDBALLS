class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(400, 680, 800, 10, options);
        World.add(world,this.body);
        this.body.width = width;
        this.body.height = 10;

    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill("cyan");
        rect(pos.x, pos.y, this.width, this.height);
    }
}