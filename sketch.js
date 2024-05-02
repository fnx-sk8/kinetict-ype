let font, points = [];
let xSpeed = 1; // Horizontal speed
let ySpeed = 1; // Vertical speed
let xDirection = 1; // Horizontal direction
let yDirection = 1; // Vertical direction
let isGrayscale = false; // Track whether text is in grayscale mode

function preload() {
  font = loadFont("Jersey_10/Jersey10-Regular.ttf");
}

function setup() {
  createCanvas(600, 400);
  points = font.textToPoints("E F", 50, 200, 300);
}

function draw() {
  background(30); // Set background color to light black
  
  // Draw ellipses for each point with grayscale or color fill
  for (let i = 0; i < points.length; i++) {
    if (isGrayscale) {
      let gray = random(255);
      fill(gray); // Set random grayscale color
    } else {
      let r = random(255);
      let g = random(255);
      let b = random(255);
      fill(r, g, b); // Set random fill color
    }
    let x = points[i].x;
    let y = points[i].y;
    ellipse(x, y, 10, 7);
    
    // Update position with slower speed and direction
    points[i].x += xSpeed * xDirection;
    points[i].y += ySpeed * yDirection;
    
    // Check for collision with edges
    if (points[i].x < 0 || points[i].x > width || points[i].y < 0 || points[i].y > height) {
      // Toggle between grayscale and color modes
      isGrayscale = !isGrayscale;
      // Reverse directions to keep text within canvas
      xDirection *= -1;
      yDirection *= -1;
    }
  }
}
