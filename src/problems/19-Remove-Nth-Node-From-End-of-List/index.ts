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

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (null === head) {
    return null;
  }

  let pointPre = head;
  let pointCur = head;
  let i = n;
  /** 向后取到第n个 */
  while (i > 0 && null !== pointCur.next) {
    pointCur = pointCur.next;
    i--;
  }
  /** 提前结束 返回头节点的下一个节点 */
  if (i > 0) {
    return pointPre.next;
  }

  /** 遍历到结束 */
  while (null !== pointCur.next) {
    pointPre = pointPre.next as ListNode;
    pointCur = pointCur.next;
  }

  /** 删去一个节点 */
  pointPre.next = (pointPre.next as ListNode).next;

  /** 返回原链表 */
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
  const a = new ListNode(5);
  const b = new ListNode(4, a);
  const c = new ListNode(3, b);
  const d = new ListNode(2, c);
  const e = new ListNode(1, d);

  return e;
}
