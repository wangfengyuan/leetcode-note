/*
 * @lc app=leetcode.cn id=670 lang=javascript
 * @lcpr version=
 *
 * [670] 最大交换
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const numArr = num.toString().split('');
  const maxIndexArr = [];
  let max = -1;
  let maxIndex;
  for (let i = numArr.length - 1; i >= 0; i--) {
      if (numArr[i] > max) {
          maxIndex = i;
          max = numArr[i];
      }
      maxIndexArr[i] = maxIndex;
  }
  for (let i = 0; i < numArr.length; i++) {
      // 如果当前值等于最大值，继续
      if (numArr[i] === numArr[maxIndexArr[i]]) {
          continue;
      }
      [numArr[i], numArr[maxIndexArr[i]]] = [numArr[maxIndexArr[i]], numArr[i]];
      break;
  }
  return numArr.join('');
};
// @lc code=end



/*
// @lcpr case=start
// 2736\n
// @lcpr case=end

// @lcpr case=start
// 9973\n
// @lcpr case=end

 */

