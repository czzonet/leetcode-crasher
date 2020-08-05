import { isPalindrome } from "../../src/problems/9-Palindrome-Number";

test(`
Input: 121
Output: true`, () => {
  expect(isPalindrome(121)).toBe(true);
});
test(`
Input: -121
Output: false`, () => {
  expect(isPalindrome(-121)).toBe(false);
});
