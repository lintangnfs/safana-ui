const { button } = require('../dist/button.js');

test("button", () => {
  expect(button(1)).toBe(true);
})
