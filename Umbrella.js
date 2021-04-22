class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        this.image1 = loadImage("bat/Bestman-01.png");
        this.Visiblity1 = 0;
        this.image2 = loadImage("cloud.png");
        this.Visiblity = 0;
        this.image3 = loadImage("Walking Frame/batman.png");
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount>=400){
            push();
            this.Visiblity1 = this.Visiblity1 + 5;
            tint(255,this.Visiblity1);
            image(this.image1,pos.x,pos.y+50,200,350);
            pop();
        }else{
            animation(this.image,pos.x,pos.y+50,300,300);
            
        }
        if(frameCount>=180 && frameCount<400){
            push();
            this.Visiblity = this.Visiblity + 5;
            tint(255, this.Visiblity);
            image(this.image2, pos.x + 110, pos.y-93, 180,100);
            image(this.image3, pos.x + 110, pos.y-100, 80,80);
            pop();

        }
    }
}
