export const twoSum = (nums: number[], target: number): number[] => {
  let res;

  for (let i = 0; i < nums.length; i++) {
    if (res) {
      break;
    } else {
      /** 起始值 */
      const from = nums[i];
      /** 剩余值 */
      const left = target - from;
      for (let j = i + 1; j < nums.length; j++) {
        if (res) {
          break;
        } else {
          /** 结束值 */
          const to = nums[j];
          /** 结束与剩余相等时，即为结果 */
          to == left ? (res = [i, j]) : null;
        }
      }
    }
  }

  return res as number[];
};
