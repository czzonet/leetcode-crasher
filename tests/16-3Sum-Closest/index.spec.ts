import { threeSumClosest } from "../../src/problems/16-3Sum-Closest";

test(`
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
`, () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
});
