// 使用map， 时间复杂度O(n) 空间复杂度O(n)

var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const diff = target-nums[i];
        if(map.has(diff)) {
            const index = map.get(diff);
            return [index, i]
        }
        map.set(nums[i], i);
    }
};