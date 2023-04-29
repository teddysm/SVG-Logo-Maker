// Base class for shapes
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor
  }
  render() {
    return "Error. No shape defined";
  }
}


class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${shapeColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
