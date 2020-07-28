import { twoSum } from ".";

test("[2, 7, 11, 15], 9 to equal [0, 1]", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});
test("[3, 2, 4], 6 to equal [1, 2]", () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});
