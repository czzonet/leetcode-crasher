import { isMatch } from "../../src/problems/10-Regular-Expression-Matching";

test(`
s = "aa"
p = "a"
Output: false`, () => {
  expect(isMatch("aa", "a")).toBe(false);
});
test(`
s = "aa"
p = "a*"
Output: true`, () => {
  expect(isMatch("aa", "a*")).toBe(true);
});
test(`
s = "ab"
p = ".*"
Output: true`, () => {
  expect(isMatch("ab", ".*")).toBe(true);
});
test(`
s = "aab"
p = "c*a*b"
Output: true`, () => {
  expect(isMatch("aab", "c*a*b")).toBe(true);
});
test(`
s = "mississippi"
p = "mis*is*p*."
Output: false`, () => {
  expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
});

test(`
s = "ab"
p = "c*a*b"
Output: true`, () => {
  expect(isMatch("ab", "c*a*b")).toBe(true);
});
test(`
s = "ab"
p = ".*c"
Output: false`, () => {
  expect(isMatch("ab", ".*c")).toBe(false);
});
test(`
s = "aaa"
p = "a*a"
Output: true
`, () => {
  expect(isMatch("aaa", "a*a")).toBe(true);
});

test(`
s = "aaa"
p = "ab*a*c*a"
Output: true
`, () => {
  expect(isMatch("aaa", "ab*a*c*a")).toBe(true);
});
