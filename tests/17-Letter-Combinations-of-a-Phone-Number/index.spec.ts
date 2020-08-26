import { letterCombinations } from "../../src/problems/17-Letter-Combinations-of-a-Phone-Number";

test(`
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
`, () => {
  expect(letterCombinations("23")).toBe([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});
