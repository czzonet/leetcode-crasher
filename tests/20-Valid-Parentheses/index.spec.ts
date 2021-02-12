import { isValid } from "../../src/problems/20-Valid-Parentheses";

test(`
Input: s = "()"
Output: true
`, () => {
  expect(isValid("()")).toBe(true);
});
test(`
Input: s = "()[]{}"
Output: true
`, () => {
  expect(isValid("()[]{}")).toBe(true);
});
test(`
Input: s = "(]"
Output: false
`, () => {
  expect(isValid("(]")).toBe(false);
});
test(`
Input: s = "([)]"
Output: false
`, () => {
  expect(isValid("([)]")).toBe(false);
});
test(`
Input: s = "{[]}"
Output: true
`, () => {
  expect(isValid("{[]}")).toBe(true);
});
test(`
Input: s = "["
Output: true
`, () => {
  expect(isValid("[")).toBe(false);
});
