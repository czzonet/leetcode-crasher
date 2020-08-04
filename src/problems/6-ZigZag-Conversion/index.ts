export function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  } else {
    const charsRaw = s.split("");
    const arrTarget: string[][] = [];

    let cursor = 0;

    let index = 0;

    while (index < charsRaw.length) {
      /** 生成基础列 */
      const column = Array.from({ length: numRows }, (d) => "");

      if (cursor % (numRows - 1) === 0) {
        for (let i = 0; i < column.length; i++) {
          column[i] = charsRaw[index];
          index += 1;
          if (index > charsRaw.length - 1) {
            break;
          }
        }
      } else {
        column[numRows - 1 - (cursor % (numRows - 1))] = charsRaw[index];
        index += 1;
      }

      arrTarget.push(column);
      cursor += 1;
    }

    const arrRead: string[] = [];
    for (let j = 0; j < numRows; j++) {
      arrTarget.forEach((d) => arrRead.push(d[j]));
    }

    const strRead = arrRead.filter((d) => d !== "").join("");

    return strRead;
  }
}
