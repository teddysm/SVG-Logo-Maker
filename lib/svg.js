const { Circle, Triangle, Square } = require("./shapes");

class SVG {
  // constructor 
  // will receive the rendered SVG/html of some shape: new SVG(someShape.render(), response.text, ..)
  // will receive your text
  // will receive your text color
  constructor(title, textColor, shape, logoColor){
    this.title = title;
    this.textColor = textColor;
    this.shape = shape;
    this.logoColor = logoColor
  }

  render() {
    // Using this.__, this.__, etc, will print out the entire SVG code:
    // That entire SVG code encapsulates the shape's SVG code
    switch(this.shape){
      case 'triangle':
        const newTriangle = new Triangle(this.logoColor);
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${newTriangle.render()}      
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>     
        </svg>
        `
      case 'square':
        const newSquare = new Square(this.logoColor);
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${newSquare.render()}
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>
        </svg>
        `
      case 'circle':
        const newCircle = new Circle(this.logoColor);
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${newCircle.render()}
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>
        </svg>
        `
      default:
        return 'Error';
    }
  }
}

module.exports = SVG;
