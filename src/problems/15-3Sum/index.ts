export function threeSum(nums: number[]): number[][] {
  const resNums: number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const res = [nums[i], nums[j], nums[k]];
        const sum = res.reduce((p, v) => p + v, 0);

        if (sum === 0) {
          resNums.push(res);
        }
      }
    }
  }
  const uniqeNums: number[][] = [];

  resNums.forEach((d) => {
    const isExist = uniqeNums.findIndex((v) => isDuplicateTriplets(d, v));
    if (isExist === -1) {
      uniqeNums.push(d);
    }
  });

  return uniqeNums;
}

export function isDuplicateTriplets(a: number[], b: number[]): boolean {
  const arrA = a.slice();
  const arrB = b.slice();

  let res = true;

  for (let i = 0; i < arrA.length; i++) {
    const element = arrA[i];

    const sameFirstIndex = arrB.findIndex((d) => d === element);

    if (sameFirstIndex === -1) {
      res = false;
    } else {
      arrB.splice(sameFirstIndex, 1);
    }
  }

  return res;
}
