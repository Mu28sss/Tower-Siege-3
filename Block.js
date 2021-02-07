class Block{
  constructor(x, y, width, height, angle) {
    var options = {
      restitution : 0.7,
      friction : 0.6,
      isStatic : false,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = 30;
    this.height = 40;
    this.Visibility = 255;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<10){
      var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body);
      push()
      this.Visibility = this.Visibility-5;
    }
  }
  Score(){
    if (this.Visiblity<0 && this.Visiblity>-105){
      score++;
    }
  }
}    


