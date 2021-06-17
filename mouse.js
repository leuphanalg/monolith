function setup() {
  createCanvas(windowWidth, windowHeight);
  background(windowWidth, windowHeight);
}
function draw() {
  circle(mouseX+random(-10, 10), mouseY+random(-10, 10), random(50));
  //console.log('mouseIsPressed', mouseIsPressed);
}
function mousePressed() {
  background(random(255), random(255), random(255))
}
