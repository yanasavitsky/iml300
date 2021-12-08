var canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  noSmooth();
}

function draw() {
  const m = 150;

  const topR = 255 * noise(frameCount / m);
  const topG = 255 * noise(1000 + frameCount / m);
  const topB = 0 * noise(2000 + frameCount / m);
  const bottomR = 255 * noise(3000 + frameCount / m);
  const bottomG = 0 * noise(4000 + frameCount / m);
  const bottomB = 255 * noise(5000 + frameCount / m);

  const topColor = color(topR, topG, topB);
  const bottomColor = color(bottomR, bottomG, bottomB);

  for (let y = 0; y < height; y++) {
    const lineColor = lerpColor(topColor, bottomColor, y / height);

    stroke(lineColor);
    line(0, y, width, y);
  }
}

//adapted from: https://editor.p5js.org/KevinWorkman/sketches/OdeY6jRpI
