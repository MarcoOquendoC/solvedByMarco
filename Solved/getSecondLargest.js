function getSecondLargest(nums) {
// Day 3: Arrays
// https://www.hackerrank.com/challenges/js10-arrays/problem
  const max = Math.max(...nums);
  let second = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < max && nums[i] > second) second = nums[i];
  }
  return second;
}
