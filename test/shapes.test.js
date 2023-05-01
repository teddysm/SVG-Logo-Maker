const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  it("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const newCircle = new Circle('green');
    // SOME VALUE - IS EXPECTED TO EQUAL - THE EXPECT VALUE
    expect(expectedSvg.toEqual(newCircle.render()));
  });
  it("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const newCircle = new Circle('blue');
    expect(expectedSvg.toEqual(newCircle.render()));
  });
});

describe("Triangle", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
    const newTriangle = new Triangle('bisque');
    expect(expectedSvg.toEqual(newTriangle.render()));
  });
  it("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
    const newTriangle = new Triangle('purple');
    expect(expectedSvg.toEqual(newTriangle.render()));
  });
});

describe("Square", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
    const newSquare = new Square('dodgerblue');
    expect(expectedSvg.toEqual(newSquare.render()));
  });
  it("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const newSquare = new Square('dodgerblue');
    expect(expectedSvg.toEqual(newSquare.render()));
  });
});
