class BOX{
    constructor(x,y,width,height){
        var option= {
            'restitution': 1.000,
            'friction': 0.3,
           'density': 1.000
           }
           this.body=Bodies.rectangle(x,y,width,height,option);
           this.width = width;
           this.height = height;
           World.add(world,this.body);
    }

    display() {
          push ();
       translate (this.body.position.x,this.body.position.y);
       rotate (this.body.angle);
       fill (255);
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop ();
    }
}

