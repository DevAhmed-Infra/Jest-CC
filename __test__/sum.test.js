const sum = require("../sum");

/*
  test(name, fn, timeout)
  it(name, fn, timeout)

  test == it
*/


/*

test.only → if you want to specify a test

test.skip → skip this test

both are used to reduce time
*/

describe("Check The Numbers Sum Total", () => {
  describe("If No Numbers Or Only One Number", () => {
    it("Return 0 If No Number", () => {
      expect(sum()).toBe(0);
    });

    it.skip("Return The Number", () => {
      expect(sum(10)).toBe(10);
    });
  });

  describe("If More Than One Number", () => {
    it.only("adds -1 + -2 to equal -3", () => {
      expect(sum(-1, -2)).toBe(-3);
    });

    it("Return The Number 1 + Number 2", () => {
      expect(sum(15, 25)).toBe(40);
    });

    it("Return The Number 1 + Number 2 + Number 3", () => {
      expect(sum(10, 20, 30)).toBe(60);
    });

    it("Return The Number 1 + Number 2 + Number 3 + Number 4", () => {
      expect(sum(10, 20, 30, 10)).toBe(70);
    });

    it.only("Return The Sum Result Of All Numbers", () => {
      expect(sum(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
    });
  });
});

console.log([].reduce((a, b) => a + b, 0));
