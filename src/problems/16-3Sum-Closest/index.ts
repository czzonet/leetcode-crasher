export function threeSumClosest(nums: number[], target: number): number {
  let low;
  let upper;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum <= target) {
          if (low == undefined) {
            low = sum;
          }

          if (sum > low) {
            low = sum;
          }
        } else if (sum > target) {
          if (upper == undefined) {
            upper = sum;
          }

          if (sum < upper) {
            upper = sum;
          }
        } else {
        }
      }
    }
  }

  let res;
  if (low == undefined && upper == undefined) {
  } else if (low == undefined && upper != undefined) {
    res = upper;
  } else if (low != undefined && upper == undefined) {
    res = low;
  } else if (low != undefined && upper != undefined) {
    res = target - low > upper - target ? upper : low;
  } else {
  }
  res = res as number;

  return res;
}
