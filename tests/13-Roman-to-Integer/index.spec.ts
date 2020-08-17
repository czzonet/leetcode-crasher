import { romanToInt } from "../../src/problems/13-Roman-to-Integer";

test(`
Input: "III"
Output: 3
`, () => {
  expect(romanToInt("III")).toBe(3);
});
test(`
Input: "IV"
Output: 4
`, () => {
  expect(romanToInt("IV")).toBe(4);
});
test(`
Input: "IX"
Output: 9
`, () => {
  expect(romanToInt("IX")).toBe(9);
});
test(`
Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
`, () => {
  expect(romanToInt("LVIII")).toBe(58);
});
test(`
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
`, () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
