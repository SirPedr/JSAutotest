// eslint-disable-next-line @typescript-eslint/no-var-requires
const capitalize = require(".");

describe("lib: capitalize", () => {
  it("should capitalize word", () => {
    expect(capitalize("socorro")).toBe("Socorro");
  });
});
