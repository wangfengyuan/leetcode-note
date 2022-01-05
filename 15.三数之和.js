/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  const res = [];
  nums.sort((a, b) => a -b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const first = nums[i];
    const target = -first;
    let j = i + 1, k = nums.length - 1;
    while(j < k) {
      const total = nums[j] + nums[k];
      if (total > target) {
        k--;
      } else if (total < target) {
        j++;
      } else {
        // 找到了
        res.push([nums[i], nums[j], nums[k]]);
        while(j < k && nums[j] === nums[j++]) j++;
        while(j < k && nums[k] === nums[k--]) k--;
        j++;
        k--;
      }
    }
  }
  return res;
};
// @lc code=end


console.log(threeSum([-4, -1, -1, 0, 1, 2]))