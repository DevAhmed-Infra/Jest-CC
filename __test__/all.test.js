const allData = require("../all");

describe("Array tests", () => {
  it("should be an array", () => {
    expect(Array.isArray(allData)).toBe(true);
  });

  it("should have length of 6", () => {
    expect(allData.length).toBe(6);
  });

  it("should have length of 6 using toHaveLength", () => {
    expect(allData).toHaveLength(6);
  });

  it("should contain the number 3", () => {
    expect(allData).toContain(3);
  });

  it("should contain 1 and 6", () => {
    expect(allData).toContain(1);
    expect(allData).toContain(6);
  });

  it("should not contain 7", () => {
    expect(allData).not.toContain(7);
  });

  it("first element should be 1", () => {
    expect(allData[0]).toBe(1);
  });

  it("last element should be 6", () => {
    expect(allData[5]).toBe(6);
  });

  it("Check If Array Not Contains Number Zero", () => {
    for (let i = 0; i < allData.length; i++) {
      expect(allData[i]).not.toBe(0);
    }
  });

  it("Check If Array Contains Only Numbers 1st Method", () => {
    for (let i = 0; i < allData.length; i++) {
      expect(isNaN(allData[i])).toBe(false);
    }
  });

  it("Check If Array Contains Only Numbers 2nd Method", () => {
    for (let i = 0; i < allData.length; i++) {
      expect(isNaN(allData[i])).toBeFalsy();
    }
  });

  it("Check If Array Contains Only Numbers 3rd Method", () => {
    for (let i = 0; i < allData.length; i++) {
      expect(isNaN(allData[i])).not.toBeTruthy();
    }
  });

  it("Check If Array First Element Is Larger Than 1", () => {
    expect(allData[0]).toBeGreaterThanOrEqual(1);
  });

  it("Check If Array First Element Is Less Than 5", () => {
    expect(allData[0]).toBeLessThanOrEqual(5);
  });
});

// Ive created my own Matcher

expect.extend({
  toBeLargerThan(recieved, target) {
    const pass = recieved > target;
  },
});

expect.extend({
  toBeLargerThan(received, target) {
    const pass = received > target;
    if (pass) {
      return {
        message: () => `Expected ${received} To Be Larger Than ${target}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: Expected ${received} To Be Larger Than ${target}`,
        pass: false,
      };
    }
  },
});

it("Check If Number Is Larger Than Other Number", () => {
  expect(10).toBeLargerThan(9);
});



expect.extend({
  toBeBetween(received, start, end) {
    const pass = received > start && received < end;
    if (pass) {
      return {
        message: () => `Expected ${received} To Be Between ${start} And ${end}`,
        pass: true,
      };
    } else {
      return {
        message: () => `Expected ${received} To Be Between ${start} And ${end}`,
        pass: false,
      };
    }
  },
});

it("Check If Year Is Between Years Range", () => {
  expect(1982).toBeBetween(1900, 2020);
});



/*

// expect.anything() => Anything But Undefined + Null

test("Expect Anything", () => {
  let x = "A";
  expect("Ahmed").toEqual(expect.anything());
  expect(1).toEqual(expect.anything());
  expect([1, 2, 3, 4]).toEqual(expect.anything());
  expect(x).toEqual(expect.anything());
});

// expect.any(Constructor)

it("Expect Any Constructor", () => {
  expect("Ahmed").toEqual(expect.any(String));
});

// expect.arrayContaining(array)

it("Expect Array To Be Found In The Main Array", () => {
  const myArray = [1, 2, 3, 4, 5, 6];
  expect(myArray).toEqual(expect.arrayContaining([5, 3, 4, 6]));
});

*/

