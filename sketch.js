var hr,mn,se;
var hrAngle,mnAngle,seAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
 
}

function draw() {
  background(255,255,255);  
 translate(200,200)

 rotate (-90)
 hr= hour();
 mn= minute();
 se= second();

 seAngle= map(se,0,60,0,360)
 mnAngle= map(mn,0,60,0,360)
 hrAngle= map(hr %12,0,12,0,360)

 push ()
rotate(seAngle)
 stroke ("red")
 strokeWeight(8)
 line (0,0,100,0);
  pop ()

  push ()
  rotate(mnAngle)
  stroke ("green")
  strokeWeight(8)
  line (0,0,75,0);
  pop ()

  push ()
  rotate(hrAngle)
  stroke ("blue")
  strokeWeight(8)
  line (0,0,50,0);
  pop ()

  stroke(255,0,255);
  point (0,0)
  strokeWeight(10)
  noFill()
  stroke("red")
  arc (0,0,300,300,0,seAngle)

  stroke("green")
  arc (0,0,280,280,0,mnAngle)

  stroke("blue")
  arc (0,0,260,260,0,hrAngle)


  drawSprites();
}