class Paper {
constructor (x, y, r){
    var options = {
    density : 1.2,
    restitution : 0.4,
    friction : 0
    }

    this.body = Bodies.circle (x, y, (r - 10)/2, options);
    World.add (world, this.body);
 this.image = loadImage("paper.png")
this.radius = r;
}

display (){
var pos = this.body.position;
push();
translate (pos.x, pos.y);
rotate (this.body.angle);
image (this.image, 0,0, this.radius, this.radius);
    pop();
}

}