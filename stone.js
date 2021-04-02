class Stone {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          restitution:0.2,
          friction:1,
          density:1.2

      }
      this.body = Bodies.circle(x, y,r, options);
      this.width = 50;
      this.height = 50;
      this.image=loadImage("stone.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
  
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
      pop();
    }
  }