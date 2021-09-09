//var bg;
//function preload(){
//    bg = loadImage("image/monolith2.jpg")
//}
function setup() {
    createCanvas(displayWidth, displayHeight);
//    cnv.style('display', 'block');
}
//function draw() {
//    background(bg)
//}
function draw(){
  circle(mouseX+random(-10, 10), mouseY+random(-10, 10), random(50));
  //console.log('mouseIsPressed', mouseIsPressed);
}
function mousePressed(){
  background(random(255), random(255), random(255), 30);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //centerCanvas();
}
