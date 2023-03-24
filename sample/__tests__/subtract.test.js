// eslint-disable-next-line @typescript-eslint/no-var-requires
const subtract = require("../lib/subtract");

describe("lib: subtract", () => {
  it("shold subtract two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
