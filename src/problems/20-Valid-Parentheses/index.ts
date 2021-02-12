export function isValid(s: string): boolean {
  const stack = [];
  const charsRaw = s.split("");
  let res = true;

  for (let i = 0; i < charsRaw.length; i++) {
    const current = charsRaw[i];

    /** 左边压栈 */
    if (isLeft(current)) {
      stack.push(current);
      continue;
    }

    const left = stack.pop();
    /** 有右边 但栈空了 退出返回假 */
    if (undefined === left) {
      res = false;
      break;
    }

    /** 不匹配 退出返回假 */
    if (current !== getPair(left)) {
      res = false;
      break;
    }
  }

  if (stack.length !== 0) {
    res = false;
  }

  return res;
}

function isLeft(char: string) {
  return char === "(" || char === "{" || char === "[";
}
function getPair(char: string) {
  const res = char === "(" ? ")" : char === "{" ? "}" : "]";

  return res;
}
