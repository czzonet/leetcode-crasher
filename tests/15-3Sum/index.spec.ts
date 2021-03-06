import { threeSum } from "../../src/problems/15-3Sum";

test(`
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
or same as:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
`, () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});
