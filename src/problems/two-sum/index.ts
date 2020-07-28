export const twoSum = (nums: number[], target: number) => {
  let pause = false;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (pause) {
      break;
    } else {
      const from = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        if (pause) {
          break;
        } else {
          const to = nums[j];
          from + to == target
            ? (res.push(i), res.push(j), (pause = true))
            : null;
        }
      }
    }
  }

  return res;
};
