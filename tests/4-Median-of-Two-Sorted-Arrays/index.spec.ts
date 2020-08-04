import { findMedianSortedArrays } from "../../src/problems/4-Median-of-Two-Sorted-Arrays";

test(`
nums1 = [1, 3]
nums2 = [2]

The median is 2.0`, () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
});

test(`
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5`, () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});
