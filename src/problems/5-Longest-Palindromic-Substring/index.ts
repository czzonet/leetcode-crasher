export function longestPalindrome(s: string): string {
  /** 字符数组 */
  const charsRaw = s.split("");
  /** 子字符数组 */
  let charsTarget: string[] = [];

  let lengthMax = -1;

  /** 循环每一个 作为子数组起始值 */
  for (let i = 0; i < charsRaw.length; i++) {
    /** 子字符数组 */
    const charsSub: string[] = [];
    /** 循环 从起始值开始往后 */
    for (let j = i; j < charsRaw.length; j++) {
      /** 子字符数组 */
      charsSub.push(charsRaw[j]);
      /** 当是回文时 */
      const statPalindrome = isPalindrome(charsSub);
      const stateMax = charsSub.length > lengthMax;
      if (statPalindrome && stateMax) {
        /** 添加进子数组 复制副本 */
        charsTarget = charsSub.concat();
        lengthMax = charsSub.length;
      }
    }
  }
  return charsTarget.join("");
}

/**
 * 判断回文字符数组
 * @param arr 字符数组
 */
function isPalindrome(arr: string[]): boolean {
  let result = true;

  /** 当长度为偶数时 */
  if (arr.length % 2 === 0) {
    for (let index = 0; index < arr.length / 2; index++) {
      if (arr[index] !== arr[arr.length - index - 1]) {
        result = false;
        break;
      }
    }
  } else {
    /** 当长度为奇数时 */
    for (let index = 0; index < (arr.length + 1) / 2 - 1; index++) {
      if (arr[index] !== arr[arr.length - index - 1]) {
        result = false;
        break;
      }
    }
  }
  return result;
}
