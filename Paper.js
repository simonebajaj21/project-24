class Paper {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          restitution: 0.3,
          friction:0.5,
          density:1.3
  
      }
      this.body = Bodies.circle(x, y, r/2, options);
  this.x = x
  this.y = y
  this.r = r

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x,pos.y);
    
      rectMode(CENTER);
      fill("pink");
      ellipse(0,0,this.r,this.r);
      pop();
    }
  }
  

