# SVG Logo Maker

Command line tool to generate an svg logo and write it to file.

<br>

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [References](#references)
- [Links](#links)
- [Features](#features)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)

<br>

## Description

- You will be prompted with questions about the content for your SVG Logo
- Answer each questions with the information you want for your SVG Logo

<br>

## Usage

![Screenshot](/Images/Screenshot%202023-05-01%20223349.png)
- Requires Node v12+. (This app has only been tested on Node 16)
- Run `npm install` to download dependencies.
- Run `node index.js` to start the app.
  - Answer questions to generate a logo.
  - Logo will be written to `logo.svg` in the working directory.
- Run tests with `npm run test`

<br>

## References

<https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction>
<https://marketplace.visualstudio.com/items?itemName=jock.svg>
<https://github.com/SBoudrias/Inquirer.js>
<https://jestjs.io/>

<br>

## Links

- Github page: https://github.com/teddysm/SVG-Logo-Maker
- Video walkthrough: https://drive.google.com/file/d/10sQlkoILJGxyABMG0mIlPLW2EBxqCR9c/view


<br>

## Features

- Generates an SVG file with the logo of your choice
- You can choose text (up to 3 characters), text color, SVG shape and SVG shape color

<br>

## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```