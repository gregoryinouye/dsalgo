/*

https://leetcode.com/problems/random-pick-index/

Given an array of integers with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.

Note:
The array size can be very large. Solution that uses too much extra space will not pass the judge.

Example:

int[] nums = new int[] {1,2,3,3,3};
Solution solution = new Solution(nums);

// pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
solution.pick(3);

// pick(1) should return 0. Since in the array only nums[0] is equal to 1.
solution.pick(1);


*/

/*
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/*
* @param {number} target
* @return {number}
*/
Solution.prototype.pick = function(target) {
  let result;
  let count = 0;
  
  for (let i = 0; i < this.nums.length; i++) {
      const num = this.nums[i];
      if (num === target) {
          count++;
          const rnd = Math.ceil(Math.random() * count);
          if (rnd === count) result = i;
      }
  }
  
  return result;
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.pick(target)
*/