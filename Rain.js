class Rain{
    constructor(){
        var options = {
            isStatic : false,
            friction : 0.01
        }
        this.body = Bodies.circle(Math.round(random(10,390)), Math.round(random(0,400)), 10, options);
        World.add(world,this.body);


    }

    update(){
        if(this.body.position.y > 550){
            Matter.Body.setPosition(this.body, {x : random(10,390), y : random(0,400)});

        }
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x, pos.y, 10,10);
    }
}