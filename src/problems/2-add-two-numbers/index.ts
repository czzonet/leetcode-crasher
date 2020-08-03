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
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 将链表的值提取为数字数组
 * @param l1 头节点
 */
function getCompose(l1: ListNode | null) {
  if (l1 === null) {
    return null;
  } else {
    /** 游标 */
    /** 技巧：先声明后赋值 可以多类型 */
    let a: ListNode | null;
    a = l1;
    /** 值的数组 */
    const valsA = [];
    /** 当节点非空时 遍历链表 提取值的数组 */
    while (a) {
      /** 提取值 */
      valsA.push(a.val);
      /** 指向下一个节点 */
      a = a.next;
    }

    return valsA;
  }
}

/**
 * 转化数字数组为链表
 * @param arr 数字数组 高位在后
 */
export function getList(arr: number[]) {
  /** 游标 */
  /** 技巧：先声明后赋值 可以多类型 */
  let a: ListNode | null;
  a = new ListNode(arr[arr.length - 1]);
  /** 循环从后往前生成 */
  for (let index = arr.length - 2; index >= 0; index--) {
    const element = arr[index];
    a = new ListNode(element, a);
  }

  /** 返回链表头节点 */
  return a;
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const a = getCompose(l1);
  const b = getCompose(l2);

  if (a === null || b === null) {
    return null;
  } else {
    const c = plusArr(a, b);
    return getList(c);
  }
}

/**
 * 数字数组相加
 */
export function plusArr(numsA: number[], numsB: number[]) {
  /** 进位 */
  let accession = 0;

  const lengthMax = numsA.length > numsB.length ? numsA.length : numsB.length;

  const numsTarget = [];

  for (let index = 0; index < lengthMax; index++) {
    const a = numsA[index] || 0;
    const b = numsB[index] || 0;
    const c = a + b + accession;

    if (c < 10) {
      numsTarget.push(c);
      accession = 0;
    } else {
      numsTarget.push(c - 10);
      accession = 1;
    }
  }

  accession ? numsTarget.push(accession) : null;

  return numsTarget;
}
