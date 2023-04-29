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
        // const newTriangle = new Triangle();
        break;
      case 'square':
        break;
      case 'circle':
        break;
      default:
        return 'Error'

      // <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    }
  }
}

module.exports = SVG;
