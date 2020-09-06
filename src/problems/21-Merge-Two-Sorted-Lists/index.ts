/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (null === l1 && null === l2) {
    return null;
  }
  if (null === l1) {
    return l2;
  }
  if (null === l2) {
    return l1;
  }
  const nodesNew = [];
  let head = l1;
  let cur1 = l1;
  let cur2: ListNode | null = l2;
  while (null !== cur2) {
    /** 小的值前插 */
    if (cur2.val < head.val) {
      /** 小的值遍历等到的大值前插 */
      while (null !== cur2.next && cur2.next.val < cur1.val) {
        nodesNew.push(new ListNode(cur2.val));
        cur2 = cur2.next;
      }
      if (cur2.val > cur1.val) {
        nodesNew.push(new ListNode(cur1.val));
      }
      nodesNew.push(new ListNode(cur2.val));
    } else {
      /** 大的值遍历等到小的值前插 */
      while (null !== cur1.next && cur2.val > cur1.next.val) {
        cur1 = cur1.next;
      }
      const node = new ListNode(cur2.val, cur1.next);
      cur1.next = node;
    }

    cur2 = cur2.next;
  }
  console.log();

  return head;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
export function data() {
  const a1 = new ListNode(4);
  const a2 = new ListNode(2, a1);
  const a3 = new ListNode(1, a2);

  const b1 = new ListNode(4);
  const b2 = new ListNode(3, b1);
  const b3 = new ListNode(1, b2);

  return [a3, b3];
}
export function test() {
  const [a, b] = data();
  const res = mergeTwoLists(a, b);
  debugger;
}
export function test2() {
  const b1 = new ListNode(5);

  const a1 = new ListNode(4);
  const a2 = new ListNode(2, a1);
  const a3 = new ListNode(1, a2);

  const res = mergeTwoLists(b1, a3);
  debugger;
}
