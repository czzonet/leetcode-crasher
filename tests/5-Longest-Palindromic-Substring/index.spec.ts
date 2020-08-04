import { longestPalindrome } from "../../src/problems/5-Longest-Palindromic-Substring";

test(`
Input: "babad"
Output: "bab"`, () => {
  expect(longestPalindrome("babad")).toBe("bab");
});

test(`
Input: "cbbd"
Output: "bb"`, () => {
  expect(longestPalindrome("cbbd")).toBe("bb");
});
test(`
Input: "a"
Output: "a"`, () => {
  expect(longestPalindrome("a")).toBe("a");
});
