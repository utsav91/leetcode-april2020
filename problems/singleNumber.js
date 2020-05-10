// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


//Solution 1 using inbuilt methods of JS
//This is not linear time.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.filter(number => nums.indexOf(number) === nums.lastIndexOf(number))[0]
};

//Solution 2 using Bit manipulation - XOR

var singleNumber = function(nums) {
  let a = 0;
  nums.forEach(element => {
    a ^= element
  });
  return a;
};