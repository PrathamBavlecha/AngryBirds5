class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.visibility = 255
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
 
    super.display();
    
    if(this.body.velocity.x>1&&this.body.position.x>200){
    var pos = [this.body.position.x,this.body.position.y]
    this.trajectory.push(pos)
    }
    for (var i = 0;i<this.trajectory.length;i++){
      push ()
      this.visibility = this.visibility - 0.5
      tint(255,this.visibility)
      image (this.smoke,this.trajectory[i][0],this.trajectory[i][1])
      pop ()
    }
   }
}
