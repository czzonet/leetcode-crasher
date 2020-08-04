export function lengthOfLongestSubstring(s: string): number {
  /** 字符数组 */
  const charsRaw = s.split("");
  /** 子字符数组的数组 */
  const charsSubs: string[][] = [];

  /** 循环每一个 作为子数组起始值 */
  for (let index = 0; index < charsRaw.length; index++) {
    /** 子字符数组 */
    const charsSub: string[] = [];
    /** 循环 从起始值开始往后 */
    for (let j = index; j < charsRaw.length; j++) {
      const element = charsRaw[j];
      /** 当重复字符时 */
      if (charsSub.indexOf(element) + 1) {
        break;
      } else {
        /** 添加进子数组 */
        charsSub.push(element);
      }
    }
    charsSubs.push(charsSub);
  }

  const lengthMax = charsSubs.reduce(
    (p, v) => (v.length > p ? v.length : p),
    0
  );

  return lengthMax;
}
