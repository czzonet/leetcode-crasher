import { intToRoman } from "../../src/problems/12-Integer-to-Roman";

test(`
Input: 3
Output: "III"
`, () => {
  expect(intToRoman(3)).toBe("III");
});
test(`
Input: 4
Output: "IV"
`, () => {
  expect(intToRoman(4)).toBe("IV");
});
test(`
Input: 9
Output: "IX"
`, () => {
  expect(intToRoman(9)).toBe("IX");
});
test(`
Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
`, () => {
  expect(intToRoman(58)).toBe("LVIII");
});
test(`
Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
`, () => {
  expect(intToRoman(1994)).toBe("MCMXCIV");
});
