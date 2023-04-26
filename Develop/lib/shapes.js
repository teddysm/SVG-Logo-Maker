// Base class for shapes
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor
  }
  render() {
    return "Error. No shape defined";
  }
}

/**
 * Eg.
 * let someShape;
 * switch(response.shapeType) {
 *  case "Triangle":
 *    someShape = new Circle(response.shapeColor)
 *    break;
 * }
*/
class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<circle .... fill="${shapeColor}" />`;
  }
}

class Triangle extends Shape {

}

class Square extends Shape {

}

module.exports = { Circle, Triangle, Square };
