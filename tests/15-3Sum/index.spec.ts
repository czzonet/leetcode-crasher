import { threeSum, isDuplicateTriplets } from "../../src/problems/15-3Sum";

test(`
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
//
same as:
[
  [-1, 0, 1],
  [-1, 2 ,-1]
]
`, () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
    [-1, 0, 1],
    [-1, 2, -1],
  ]);
});
test(`

  [-1, 0, 1],
[  0,-1,  1],

`, () => {
  expect(isDuplicateTriplets([-1, 0, 1], [0, -1, 1])).toBe(true);
});
