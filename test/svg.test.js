const SVG = require("../lib/svg");
const { Square } = require("../lib/shapes");

describe("SVG", () => {
  it("should render a 300 x 200 svg element, should append text element, should set text message and color, should include a shape, should throw if text exceeds 3 characters", () => {
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="dodgerblue" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="#333">SVG</text>
    </svg>`;
    const newSVG = new SVG('SVG', '#333', 'square', 'dodgerblue');
    expect(newSVG.render()).toEqual(expectedSvg);
  });
});



