class Box {

    constructor(x,y,width,height){
       var options ={
           isStatic: true
       }
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.body=Bodies.rectangle(this.x,this.y,this.width,this.height)
      World.add(world,this.body)
    }

display(){
    var bpos = this.body.position
    push ();
fill ("yellow");
translate(bpos.x,bpos.y);
rect(0,0,this.width,this.height)
    pop ();
}



}
