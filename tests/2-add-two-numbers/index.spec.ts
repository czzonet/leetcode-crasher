import {
  addTwoNumbers,
  getList,
  plusArr,
} from "../../src/problems/2-add-two-numbers";

test(`
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
`, () => {
  const a = getList([2, 4, 3]);

  const b = getList([5, 6, 4]);
  const c = getList([7, 0, 8]);

  expect(addTwoNumbers(a, b)).toStrictEqual(c);
});

test(`
Input: [2, 4, 3][5, 6, 4]
Output: [7, 0, 8]
Explanation: 342 + 465 = 807.
`, () => {
  expect(plusArr([2, 4, 3], [5, 6, 4])).toStrictEqual([7, 0, 8]);
});

test(`
Input: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5,6,4]
Output: [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1].
`, () => {
  const a = JSON.parse(
    "[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]"
  );

  const b = [5, 6, 4];
  const c = JSON.parse(
    "[6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]"
  );

  expect(plusArr(a, b)).toStrictEqual(c);
});

test(`
Input: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5,6,4]
Output: [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1].
`, () => {
  const a = getList(
    JSON.parse(
      "[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]"
    )
  );

  const b = getList([5, 6, 4]);
  const c = getList(
    JSON.parse(
      "[6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]"
    )
  );

  expect(addTwoNumbers(a, b)).toStrictEqual(c);
});

test(`
Input: [1][9,9]
Output: [0, 0, 1]
`, () => {
  expect(plusArr([2, 4, 3], [5, 6, 4])).toStrictEqual([7, 0, 8]);
});

test(`
Input: [1][9,9]
Output:[0, 0, 1]
`, () => {
  const a = getList([1]);

  const b = getList([9, 9]);
  const c = getList([0, 0, 1]);

  expect(addTwoNumbers(a, b)).toStrictEqual(c);
});
