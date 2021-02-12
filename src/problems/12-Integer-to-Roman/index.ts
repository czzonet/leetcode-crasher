export function intToRoman(num: number): string {
  const numsRaw = num
    .toString()
    .split("")
    .map((d) => parseInt(d));

  numsRaw.reverse();

  const strsRoman = numsRaw.map((d, i) => convert(d, i), "");

  const strsTarget = strsRoman.concat().reverse();

  const res = strsTarget.join("");

  return res;
}

/**
 * 
```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
 */

/**
 * 根据对应权重转换单个数字
 * @param num 0-9
 * @param base 十进制权重
 */
function convert(num: number, base: number) {
  const bases = [
    ["I", "V"],
    ["X", "L"],
    ["C", "D"],
    ["M", "?"],
  ];
  let strTarget = "";

  /** 0-4 */
  if (num < 5) {
    if (num === 4) {
      strTarget = bases[base][0] + bases[base][1];
    } else {
      strTarget = Array.from({ length: num % 5 }, (d) => bases[base][0]).join(
        ""
      );
    }
  } else {
    /** 5-9 */
    if (num === 9) {
      strTarget = bases[base][0] + bases[base + 1][0];
    } else {
      strTarget =
        bases[base][1] +
        Array.from({ length: num % 5 }, (d) => bases[base][0]).join("");
    }
  }

  return strTarget;
}
