const { Circle, Triangle, Square } = require("./shapes");

class SVG {
  // contains SVG text, text color, SVG shape and SVG color
  constructor(title, textColor, shape, logoColor){
    this.title = title;
    this.textColor = textColor;
    this.shape = shape;
    this.logoColor = logoColor
  }

  render() {
    // initialize the shape class based on the shape chosen
    let shapeClass;
    switch(this.shape){
      case 'triangle':
        shapeClass = new Triangle(this.logoColor);
        break;
      case 'square':
        shapeClass = new Square(this.logoColor);
        break;
      case 'circle':
        shapeClass = new Circle(this.logoColor);
    }

    // return the entire SVG code accordingly to object's properties
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeClass.render()}
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>
    </svg>`
  }
}

module.exports = SVG;