import { convert } from "../../src/problems/6-ZigZag-Conversion";

test(`
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"`, () => {
  expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
});

test(`
Input: "A"1
Output: "A"`, () => {
  expect(convert("A", 1)).toBe("A");
});
