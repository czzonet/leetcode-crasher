test("1 tobe 1", () => {
  expect(1).toBe(1);
});

import { lengthOfLongestSubstring } from "../../src/problems/3-Longest-Substring-Without-Repeating-Characters";

test("abcabcbb tobe 3", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});
test("bbbbb tobe 1", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});
test("pwwkew tobe 3", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});
