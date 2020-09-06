import {
  removeNthFromEnd,
  data,
} from "../../src/problems/19-Remove-Nth-Node-From-End-of-List";

test(`
Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
`, () => {
  expect(removeNthFromEnd(data(), 2).val).toBe(1);
});
