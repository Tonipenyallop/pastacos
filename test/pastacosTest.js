const { pastacos } = require("../pastacos.js");
const { expect } = require("chai");

describe("pastacos", () => {
  it("should be function", () => {
    expect(typeof pastacos).to.equal("function");
  });
});
