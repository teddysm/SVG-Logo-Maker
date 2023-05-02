const inquirer = require("inquirer");
const SVG = require("./svg");
const { writeFile } = require("fs/promises");

class CLI {
  async run() {
    // checks to see if title input exceeds 3 characters or not
    const confirmChar = async (input) => {
      if (input.length > 3){
        throw new Error('Text must not exceed 3 characters.')
      }
      return true;
    }

    // prompt for user input
    const response = await inquirer.prompt([
      {
        type: 'input',
        message: 'What text would you like for your logo? (Up to 3 characters)',
        name: 'title',
        validate: confirmChar,
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

    // create a new SVG object
    const SVGLogo = new SVG(response.title, response.textColor, response.shape, response.logoColor);
    // write to file the SVG image
    writeFile('logo.SVG', SVGLogo.render());
  }
}

module.exports = CLI;
