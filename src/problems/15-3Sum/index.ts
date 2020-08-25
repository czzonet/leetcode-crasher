export function threeSum(nums: number[]): number[][] {
  const numsSorted = nums.sort((a, b) => a - b);
  const resNums: number[][] = [];

  for (let i = 0; i < numsSorted.length - 2; i++) {
    for (let j = i + 1; j < numsSorted.length - 1; j++) {
      const sumTwo = numsSorted[i] + numsSorted[j];
      const left = -sumTwo;

      const isOutBand =
        left < numsSorted[j + 1] || left > numsSorted[numsSorted.length - 1];

      if (isOutBand) {
        continue;
      }

      const indexThree = numsSorted.indexOf(left, j + 1);

      if (indexThree !== -1) {
        const res = [numsSorted[i], numsSorted[j], numsSorted[indexThree]];
        const isExist =
          resNums.findIndex((d) => d.toString() == res.toString()) !== -1;
        !isExist ? resNums.push(res) : null;
      }
    }
  }

  return resNums;
}
