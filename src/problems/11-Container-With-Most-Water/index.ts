export function maxArea(height: number[]): number {
  /** 似乎题目不难 可能有优化方法 */

  /** 体积就是距离乘以较小值 */
  let v = 0;
  let iOfv = 0;
  let jOfv = 0;

  for (let i = 0; i < height.length; i++) {
    const element = height[i];

    for (let j = i + 1; j < height.length; j++) {
      const widthCurrent = j - i;
      const heightCurrent = height[i] < height[j] ? height[i] : height[j];
      const vCurrent = widthCurrent * heightCurrent;
      /** 当比较大时 记录信息 */
      vCurrent > v ? ([v, iOfv, jOfv] = [vCurrent, i, j]) : null;
    }
  }

  return v;
}
