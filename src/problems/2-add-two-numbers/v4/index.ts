import { ListNode } from "./ListNode";

// 两数加法满十进一取余数并保留进位
const Adder = () => {
  // 进位
  let carry = 0;

  return (a: number = 0, b: number = 0) => {
    const sum = a + b + carry;

    // 余数
    let remainder;

    // 溢出时处理
    if (sum >= 10) {
      remainder = sum - 10;
      carry = 1;
    } else {
      remainder = sum;
      carry = 0;
    }

    return remainder;
  };
};

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let currentL1 = l1;
  let currentL2 = l2;
  let currentRes: ListNode | null = null;
  let resHead = null;
  const add = Adder();

  // 初次产生链表 头节点
  currentRes = new ListNode(
    add(
      currentL1 == null ? 0 : currentL1.val,
      currentL2 == null ? 0 : currentL2.val
    )
  );
  resHead = currentRes;

  // 前往下一个节点 注意会有null
  currentL1 = currentL1 == null ? null : currentL1.next;
  currentL2 = currentL2 == null ? null : currentL2.next;

  // 链表都没有结束时
  while (currentL1 != null || currentL2 != null) {
    // 加节点
    currentRes.next = new ListNode(
      add(
        currentL1 == null ? 0 : currentL1.val,
        currentL2 == null ? 0 : currentL2.val
      )
    );

    // 前往下一个节点 注意会有null
    currentL1 = currentL1 == null ? null : currentL1.next;
    currentL2 = currentL2 == null ? null : currentL2.next;
    currentRes = currentRes.next;
  }

  // 尾巴 还有进位时
  const tail = add();
  if (tail != 0) {
    (currentRes as ListNode).next = new ListNode(tail);
  }

  return resHead;
}
