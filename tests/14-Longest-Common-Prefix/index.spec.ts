import { longestCommonPrefix } from "../../src/problems/14-Longest-Common-Prefix";

test(`
Input: ["flower","flow","flight"]
Output: "fl"
`, () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});
test(`
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
`, () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});
test(`
Input: []
Output: ""
`, () => {
  expect(longestCommonPrefix([])).toBe("");
});
test(`
Input: ["a"]
Output: ""
`, () => {
  expect(longestCommonPrefix(["a"])).toBe("a");
});
