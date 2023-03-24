// eslint-disable-next-line @typescript-eslint/no-var-requires
const add = require(".");

describe("lib: add", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
