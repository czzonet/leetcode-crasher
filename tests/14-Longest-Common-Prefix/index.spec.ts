import { longestCommonPrefix } from "../../src/problems/14-Longest-Common-Prefix";

test(`
Input: ["flower","flow","flight"]
Output: "fl"
`, () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});
