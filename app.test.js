const add = require("./app");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(10);
});

test("adds negative numbers", () => {
  expect(add(-2, -3)).toBe(-5);
});
