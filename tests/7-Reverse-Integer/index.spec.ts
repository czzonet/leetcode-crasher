import { reverse } from "../../src/problems/7-Reverse-Integer";

test(`
Input: 123
Output: 321`, () => {
  expect(reverse(123)).toBe(321);
});
test(`
Input: 1534236469
Output: 0`, () => {
  expect(reverse(1534236469)).toBe(0);
});
