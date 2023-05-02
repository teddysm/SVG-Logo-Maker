const { Square, Triangle, Circle } = require("../lib/shapes");

// testing circle class
describe("Circle", () => {
  it("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const newCircle = new Circle();
    expect(newCircle.render()).toEqual(expectedSvg);
  });
  it("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const newCircle = new Circle('blue');
    expect(newCircle.render()).toEqual(expectedSvg);
  });
});

// testing triangle class
describe("Triangle", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
    const newTriangle = new Triangle('bisque');
    expect(newTriangle.render()).toEqual(expectedSvg);
  });
  it("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
    const newTriangle = new Triangle('purple');
    expect(newTriangle.render()).toEqual(expectedSvg);
  });
});

// testing square class
describe("Square", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
    const newSquare = new Square('dodgerblue');
    expect(newSquare.render()).toEqual(expectedSvg);
  });
  it("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const newSquare = new Square('red');
    expect(newSquare.render()).toEqual(expectedSvg);
  });
  it("should be able to overwrite fillColor param with setColor", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const newSquare = new Square('blue');
    newSquare.setColor('red');
    expect(newSquare.render()).toEqual(expectedSvg);
  });
});
