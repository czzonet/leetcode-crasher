import { isValid } from "../../src/problems/20-Valid-Parentheses";

test(`
Input: s = "()"
Output: true
`, () => {
  expect(isValid("()")).toBe(true);
});
