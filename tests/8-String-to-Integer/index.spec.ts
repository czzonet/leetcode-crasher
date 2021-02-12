import { myAtoi } from "../../src/problems/8-String-to-Integer";

test(`
Input: "42"
Output: 42`, () => {
  expect(myAtoi("42")).toBe(42);
});
test(`
Input: "   -42"
Output: -42`, () => {
  expect(myAtoi("   -42")).toBe(-42);
});
test(`
Input:"-91283472332"
Output: -2147483648`, () => {
  expect(myAtoi("-91283472332")).toBe(-2147483648);
});
test(`
Input: "+1"
Output: 1`, () => {
  expect(myAtoi("+1")).toBe(1);
});
