const theFilter = require("../filterName");

describe("Validate The Input Field", () => {
  it("Check If Name Is Empty", () => {
    expect(theFilter()).toBe("unknown");
  });
  it("Check For Spaces (Start + End)", () => {
    expect(theFilter(" Ahmed ")).toBe("Ahmed");
  });
  it("Check If Name Length > 10 Characters", () => {
    expect(theFilter("Osama_Mohamed_Elsayed")).toBe("Osama_Moha");
  });
  it("Check If Name Not Starts With Underscore", () => {
    expect(theFilter("_Ahmed")).toBe("Ahmed");
  });
});
