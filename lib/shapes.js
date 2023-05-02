// Base class for shapes
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor
  }
  render() {
    return "Error. No shape defined";
  }
}

// circle shape with default color being green
class Circle extends Shape {
  constructor(shapeColor = "green") {
    super(shapeColor);
  }
  // SVG code for a circle with given color
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

// triangle shape with default color being green
class Triangle extends Shape {
  constructor(shapeColor = "green") {
    super(shapeColor);
  }
  // SVG code for a triangle with given color
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

// square shape with default color being green
class Square extends Shape {
  constructor(shapeColor = "green") {
    super(shapeColor);
  }
  // SVG code for a square with given color
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
