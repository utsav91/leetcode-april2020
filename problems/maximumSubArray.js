// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */


var maxSubArray = function(nums) {
  var max_cur=nums[0], max_global = nums[0];
  for (var i = 1; i < nums.length; i++) {
      max_cur = Math.max(nums[i], max_cur + nums[i]);
      max_global = Math.max(max_cur, max_global);
  }  
  return max_global;
};
