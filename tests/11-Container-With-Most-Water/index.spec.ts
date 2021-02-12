import { maxArea } from "../../src/problems/11-Container-With-Most-Water";

test(`
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
`, () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toStrictEqual(49);
});
