/*
 * @lc app=leetcode.cn id=662 lang=javascript
 * @lcpr version=
 *
 * [662] 二叉树最大宽度
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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    let max = 0n;
    if (!root) return 0;
    const queue = [root]
    const count = [1n]
    while(queue.length) {
      const size = queue.length;
      let minIndex;
      let maxIndex;
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        const index = count.shift();
        if (i === 0) {
          minIndex = index
        }
        if (i === size - 1) {
          maxIndex = index
        }
        if (node.left) {
          queue.push(node.left);
          count.push(2n * index)
        }
        if (node.right) {
          queue.push(node.right);
          count.push(2n * index + 1n)
        }
      }
      if (maxIndex - minIndex + 1n > max)  {
        max = maxIndex - minIndex + 1n;
      }
    }
    return max;
};
// @lc code=end



/*
// @lcpr case=start
// [1,3,2,5,3,null,9]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,2,5,null,null,9,6,null,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,2,5]\n
// @lcpr case=end

 */

