// 3D Torus Knot – Math is Beautiful
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
}

function draw() {
  background(0);
  orbitControl(); // allows you to rotate with finger (optional)
  
  // Rotate the whole shape
  rotateY(angle);
  rotateX(angle * 0.3);
  angle += 0.01;
  
  // Draw the torus knot
  stroke(255);
  noFill();
  let r = 200;      // main radius
  let tube = 30;    // tube radius
  let detail = 50;  // smoothness
  
  // Torus knot (p=3, q=7) – play with these numbers!
  for (let i = 0; i <= detail; i++) {
    let t = map(i, 0, detail, 0, TWO_PI * 3); // wrap 3 times
    
    // Parametric equations for a torus knot
    let x = (r + tube * cos(7 * t)) * cos(3 * t);
    let y = (r + tube * cos(7 * t)) * sin(3 * t);
    let z = tube * sin(7 * t);
    
    stroke((i * 10) % 255, 255, 255);
    push();
    translate(x, y, z);
    sphere(4);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
