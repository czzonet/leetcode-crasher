import { addTwoNumbers } from "../../src/problems/2-add-two-numbers";

test(`
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
`, () => {
  expect(addTwoNumbers(null, null)).toStrictEqual(null);
});
