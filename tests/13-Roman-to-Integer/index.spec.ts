import { romanToInt } from "../../src/problems/13-Roman-to-Integer";

test(`
Input: "III"
Output: 3
`, () => {
  expect(romanToInt("III")).toBe(3);
});
