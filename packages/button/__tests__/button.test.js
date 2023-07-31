const { button } = require('../dist/button.umd.tsx');

test("button", () => {
  expect(button(1)).toBe(true);
});
