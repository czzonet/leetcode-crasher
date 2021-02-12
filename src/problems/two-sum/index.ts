export const twoSum = (nums: number[], target: number): number[] => {
  let res;

  for (let i = 0; i < nums.length; i++) {
    /** 起始值 */
    const from = nums[i];
    /** 剩余值 */
    const left = target - from;
    /** 从后一个开始查找剩余值 */
    const j = nums.indexOf(left, i + 1);
    if (j + 1) {
      res = [i, j];
      break;
    }
  }

  return res as number[];
};
