import {
  mergeTwoLists,
  data,
} from "../../src/problems/21-Merge-Two-Sorted-Lists";

test(`
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
`, () => {
  const [a, b] = data();
  expect(mergeTwoLists(a, b).val).toBe(1);
});
