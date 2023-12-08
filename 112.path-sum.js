/*
 * @lc app=leetcode.cn id=112 lang=javascript
 * @lcpr version=
 *
 * [112] 路径总和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false;
    const queue = [root];
    const nums = [root.val];
    while (queue.length) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        const num = nums.shift();
        if (!node.left && !node.right) {
          if (num === targetSum) {
            return true 
          }
        }
        if (node.left) {
          queue.push(node.left)
          nums.push(node.left.val + num)
        }
        if (node.right) {
          queue.push(node.right)
          nums.push(node.right.val + num)
        }
      }
    }
    return false;
};
// @lc code=end


// var hasPathSum = function(root, targetSum) {
//   if (!root) return false;
//   if (!root.left && !root.right) return targetSum === root.val;
//   return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
// };


/*
// @lcpr case=start
// [5,4,8,11,null,13,4,7,2,null,null,null,1]\n22\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */

