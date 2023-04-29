const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  async run() {
    const response = await inquirer.prompt([
      {
        type: 'input',
        message: 'What text would you like for your logo? (Up to 3 characters)',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What color would you like for the text of your logo? (color or hex code)',
        name: 'textColor',
      },
      {
        type: 'list',
        message: 'What shape would you like for your logo?',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape',
      },
      {
        type: 'input',
        message: 'What color would you like for your logo? (color or hex code)',
        name: 'logoColor',
      },
    ])
    
    const [title, textColor, shape, logoColor] = response;
    writeFile('logo.SVG', SVG(title, textColor, shape, logoColor));
    /**
     * Eg.
     * let someShape;
     * switch(response.shapeType) {
     *  case "Triangle":
     *    someShape = new Circle(response.shapeColor)
     *    break;
     * }
    */
  }
}

module.exports = CLI;
