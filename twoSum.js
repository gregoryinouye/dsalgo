/*

https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Example 2:

Given nums = [10, 15, 3, 7], target = 17,
return [0, 3].

*/

function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
      const second = target - nums[i];
      if (map[second] !== undefined) {
          return [map[second], i];
      }
      
      map[nums[i]] = i;
  }
  
  return [-1];
};
