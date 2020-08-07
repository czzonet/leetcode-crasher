export function isMatch(s: string, p: string): boolean {
  const charsRaw = s.split("");
  const charsP = p.split("");

  let target = true;

  let cursor = 0;

  for (let index = 0; index < charsRaw.length; index++) {
    const element = charsRaw[index];

    /** 当模式匹配重复 字符不符合模式时 即0个字符来跳过匹配 */
    while (
      charsP[cursor + 1] === "*" &&
      charsP[cursor] !== "." &&
      charsP[cursor] !== element
    ) {
      cursor += 2;
    }

    // TODO: 没有解决多重复匹配的后缀问题 即a*b*b*a
    /** 当模式是重复匹配 并且还有几个匹配字符相同 即a*b*a 需要先考虑后面 简单换位 */
    if (charsP[cursor + 1] === "*" && charsP[cursor] === charsP[cursor + 2]) {
      // let current = cursor
      // while (charsP[current + 1] === "*"){
      //   current += 2;
      // }
      // if (charsP[cursor] === charsP[cursor]) {
      //   charsP.splice(cursor+2,current-cursor)
      // }

      charsP[cursor + 1] = charsP[cursor + 2];
      charsP[cursor + 2] = "*";
    }

    /** 当模式匹配重复时 */
    if (charsP[cursor + 1] === "*") {
      /** 当重复字符和模式字符不同时 */
      if (charsP[cursor] !== "." && charsP[cursor] !== element) {
        target = false;
        break;
      }

      /** 当字符重复结束时匹配结束 */
      if (charsP[cursor] !== "." && charsRaw[index] !== charsRaw[index + 1]) {
        cursor += 2;
      }
    } else {
      /** 当单纯字符匹配 比较不符合时 */
      if (charsP[cursor] !== "." && charsP[cursor] !== element) {
        target = false;
        break;
      } else {
        cursor += 1;
      }
    }
    console.log();
  }
  /** 当字符结束了还有模式 且模式匹配重复时 即0个字符来跳过匹配 */
  while (charsP[cursor + 1] === "*") {
    cursor += 2;
  }

  /** 还有不可跳过的模式时 */
  if (cursor <= charsP.length - 1) {
    target = false;
  }

  return target;
}
