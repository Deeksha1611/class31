class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.i=loadImage("sprites/smoke.png");
    this.path=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10){
      var position=[this.body.position.x,this.body.position.y]
      this.path.push(position)  
    }

    for(var i=0;i<this.path.length;i=i+1){

    image(this.i,this.path[i][0],this.path[i][1])
  }

  }
}
/*
//a=[[x1,y1],[x2,y2],[x3,y3]]
x1=a[0][0]
x2=a[1][0]
x3=a[2][0]
y1=a[0][1]
y2=a[1][1]
y3=a[2][1]


*/