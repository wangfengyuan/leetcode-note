/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map();
  let l = 0, r = 0;
  let max = 0;
  while (r < s.length) {
    if (map.has(s[r])) {
      l = Math.max(map.get(s[r]) + 1, l);
    }
    map.set(s[r], r);
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
};
// @lc code=end

