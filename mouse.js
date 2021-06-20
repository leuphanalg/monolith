//let bg;
//function preload() {
// bg = loadImage("monolith2.jpg");
//}
function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  circle(mouseX+random(-10, 10), mouseY+random(-10, 10), random(50));
  //console.log('mouseIsPressed', mouseIsPressed);
}
function mousePressed(){
  background(random(255), random(255), random(255), 30);
}
//let y = 0;
//function draw() {
//  background(bg);
//  stroke(226, 204, 0);
//  line(0, y, width, y);
//  y++;
//  if (y > height) {
//    y = 0;
//  }
//}
