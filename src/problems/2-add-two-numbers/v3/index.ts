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

// 数组依次相加
export const addTwoNumbersOfArray = (a: number[], b: number[]) => {
  const res = [];
  const resLength = a.length > b.length ? a.length : b.length;

  const add = Adder();

  for (let i = 0; i < resLength; i++) {
    const ci = add(a[i], b[i]);
    res.push(ci);
  }

  const tail = add();
  if (tail > 0) {
    res.push(tail);
  }

  return res;
};

const arraytoList = (arr: number[]) => {
  if (arr.length == 0) {
    return new ListNode();
  }

  const head = new ListNode(arr[0]);

  let current = head;
  for (let index = 1; index < arr.length; index++) {
    current.next = new ListNode(arr[index]);
    current = current.next;
  }

  return head;
};

const listtoArray = (list: ListNode | null) => {
  let current: ListNode | null = list;
  const t: number[] = [];

  if (current == null) {
    return t;
  }

  while (current != null) {
    t.push(current.val);
    current = current.next;
  }

  return t;
};

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const a1 = listtoArray(l1);
  const a2 = listtoArray(l2);

  const t = addTwoNumbersOfArray(a1, a2);

  const res = arraytoList(t);

  return res;
}
