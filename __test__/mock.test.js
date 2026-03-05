const mocker = require("../say");

it("mock function", () => {
  const mocker = jest.fn((name) => `Hello, ${name}!`);
  expect(mocker("Ahmed")).toBe("Hello, Ahmed!");
  expect(mocker("Sayed")).toBe("Hello, Sayed!");

  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(2);
  expect(mocker).toHaveBeenCalledWith("Ahmed");
  expect(mocker).toHaveBeenLastCalledWith("Sayed");
});
