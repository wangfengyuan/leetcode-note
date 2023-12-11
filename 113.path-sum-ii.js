/*
 * @lc app=leetcode.cn id=113 lang=javascript
 * @lcpr version=
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const res = []
  function dfs(root, targetSum, path) {
    if (!root) return false;
    path.push(root.val);
    if (!root.left && !root.right) {
      if (targetSum === root.val) {
        res.push([...path]);
      }
    };
    dfs(root.left, targetSum - root.val, path)
    dfs(root.right, targetSum - root.val, path);
    path.pop();
  }
  dfs(root, targetSum, []);
  return res;
};
// @lc code=end


/*
// @lcpr case=start
// [5,4,8,11,null,13,4,7,2,null,null,5,1]\n22\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

 */

