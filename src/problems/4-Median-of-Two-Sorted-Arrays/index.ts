export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  // /**
  //  * 三种情况
  //  * 1. 分开
  //  * 2. 相切
  //  * 3. 包含
  //  */
  // /** 数组的起始 */
  // const startA = nums1[0];
  // const endA = nums1[nums1.length - 1];
  // const startB = nums2[0];
  // const endB = nums2[nums2.length - 1];

  // if (endA <= startB) {
  //   return (endA + startB) / 2;
  // } else if (startA >= endB) {
  //   return (startA + endB) / 2;
  // } else {
  //   const startASub = nums1.find((d) => d > startB);
  //   const endBSub = nums2.find((d) => d < endA);

  //   const numsASub = nums1.slice(startASub, nums1.length);
  //   const numsBSub = nums2.slice(0, endBSub);
  //   const numsSub = numsASub.concat(numsBSub);
  //   if (numsSub.length % 2 == 0) {
  //     return (
  //       (numsSub[numsSub.length / 2 - 1] + numsSub[numsSub.length / 2]) / 2
  //     );
  //   } else {
  //     return numsSub[(numsSub.length + 1) / 2 - 1];
  //   }
  // }

  let nums = nums1.concat(nums2);

  nums.sort((a, b) => a - b);

  if (nums.length % 2 == 0) {
    return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  } else {
    return nums[(nums.length + 1) / 2 - 1];
  }
}
