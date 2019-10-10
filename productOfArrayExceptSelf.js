/*

https://leetcode.com/problems/product-of-array-except-self/

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

Input: [1, 2, 3, 4, 5]
Output: [120, 60, 40, 30, 24]

Input: [3, 2, 1]
Output: [2, 3, 6]

Follow up:
Solve it without division.
Solve  it in O(n).
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

*/

function productOfArrayExceptSelf(arr) {
  const result = [];

  arr.reduce((acc, curr, index) => {
      result[index] = acc;
      return acc * curr;
  }, 1);

  arr.reduceRight((acc, curr, index) => {
      result[index] *= acc;
      return acc * curr;
  });

  return result;
};
