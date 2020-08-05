export function myAtoi(str: string): number {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  const charsRaw = str.split("");

  const charsValid = "0123456789".split("");

  // 去掉头部空格字符
  let indexStart = charsRaw.findIndex((d) => d !== " ");
  const charsSubHead = charsRaw.slice(indexStart);
  // 正负处理
  const charFirst = charsSubHead[0];
  const charsSubPositive: string[] = charsSubHead.concat();
  if (charFirst === "-" || charFirst === "+") {
    // 切掉一位
    charsSubPositive.splice(0, 1);
  }

  // 去掉尾部无效字符
  /** 寻找第一个无效字符 */
  let indexEnd = charsSubPositive.findIndex(
    (d) => !(charsValid.indexOf(d) + 1)
  );

  const charsSubAll =
    indexEnd === -1
      ? charsSubPositive.slice()
      : charsSubPositive.slice(0, indexEnd);

  /** 倒置后乘以位数方便 */
  const nums = charsSubAll.map((d) => numBaseConvert(d)).reverse();

  let target = nums.reduce((p, v, i) => p + v * Math.pow(10, i), 0);

  if (charFirst === "-") {
    target = -target;
  }

  target = target > INT_MAX ? INT_MAX : target;
  target = target < INT_MIN ? INT_MIN : target;

  return target;
}

function numBaseConvert(s: string): number {
  const res =
    s === "0"
      ? 0
      : s === "1"
      ? 1
      : s === "2"
      ? 2
      : s === "3"
      ? 3
      : s === "4"
      ? 4
      : s === "5"
      ? 5
      : s === "6"
      ? 6
      : s === "7"
      ? 7
      : s === "8"
      ? 8
      : 9;

  return res;
}
