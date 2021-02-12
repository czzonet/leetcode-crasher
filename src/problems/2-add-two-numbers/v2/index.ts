import { ListNode, ListNodeType } from "./ListNode";

export const getList = (arr: number[]): ListNodeType => {
  const head = ListNode(arr[0]);

  const arrLeft = arr.slice(1);

  /** 迭代添加链表节点 */
  const res = arrLeft.reduce((p, v) => {
    const aNode = ListNode(v);
    p.next = aNode;
    return aNode;
  }, head);

  return head;
};

type Cursor = {
  head: ListNodeType | null;
  current: ListNodeType | null;
};

export const addTwoNumbers = (
  firstList: ListNodeType,
  secondList: ListNodeType
) => {
  let carry = 0;

  const res: Cursor = {
    head: null,
    current: null,
  };
  const first: Cursor = {
    head: firstList,
    current: firstList,
  };
  const second: Cursor = {
    head: secondList,
    current: secondList,
  };

  /** 都存在的相加 */
  while (first.current != null && second.current != null) {
    let remainder = first.current.val + second.current.val + carry;

    /** 进位 */
    if (remainder >= 10) {
      remainder -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    const aNode = ListNode(remainder);

    /** 构建结果链表 */
    if (res.head == null) {
      res.head = aNode;
      res.current = aNode;
    } else {
      (res.current as ListNodeType).next = aNode;
      res.current = aNode;
    }

    /** 步进 */
    first.current = first.current.next;
    second.current = second.current.next;
  }

  /** 剩余节点 */
  if (first.current == null) {
    while (second.current != null) {
      let remainder = second.current.val + carry;

      /** 进位 */
      if (remainder >= 10) {
        remainder -= 10;
        carry = 1;
      } else {
        carry = 0;
      }

      const aNode = ListNode(remainder);

      (res.current as ListNodeType).next = aNode;
      res.current = aNode;

      /** 步进 */
      second.current = second.current.next;
    }
  } else {
    while (first.current != null) {
      let remainder = first.current.val + carry;

      /** 进位 */
      if (remainder >= 10) {
        remainder -= 10;
        carry = 1;
      } else {
        carry = 0;
      }

      const aNode = ListNode(remainder);

      (res.current as ListNodeType).next = aNode;
      res.current = aNode;

      /** 步进 */
      first.current = first.current.next;
    }
  }

  if (carry == 1) {
    const aNode = ListNode(carry);

    (res.current as ListNodeType).next = aNode;
    res.current = aNode;

    carry = 0;
  }

  return res.head;
};
