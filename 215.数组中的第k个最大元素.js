/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let heap = buildHeap(nums);
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(heap.shift());
    maxHeapify(heap, 0, heap.length);
  }
  return res.pop();
};
// @lc code=end

function buildHeap(nums) {
  let heap = [, ...nums];
  for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
    maxHeapify(heap, i, heap.length);
  }
  heap.shift();
  return heap;
}

function maxHeapify(nums, i, len) {
  let left = 2 * i;
  let right = left + 1;
  let largest = i;
  if (left < len && nums[left] > nums[largest]) {
    largest = left;
  }
  if (right < len && nums[right] > nums[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [nums[i], nums[largest]] = [nums[largest], nums[i]];
    maxHeapify(nums, largest, len);
  }
}

console.log(buildHeap([3, 2, 1, 5, 6, 4, 9]));

function buildHeap1(nums) {
  let heap = [, ...nums];
  for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
    minHeapify(heap, i, heap.length);
  }
  heap.shift();
  return heap;
}


function minHeapify(nums, i, len) {
  let left = 2 * i;
  let right = left + 1;
  let smallest = i;
  if (left < len && nums[left] < nums[smallest]) {
    smallest = left;
  }
  if (right < len && nums[right] < nums[smallest]) {
    smallest = right;
  }
  if (smallest !== i) {
    [nums[i], nums[smallest]] = [nums[smallest], nums[i]];
    minHeapify(nums, smallest, len);
  }
}

// console.log(buildHeap1([3, 2, 1, 5, 6, 4, 9]));
console.log(findKthLargest([3, 2, 1, 5, 6, 4, 9], 3));