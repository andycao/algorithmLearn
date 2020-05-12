/**
 * 45. 跳跃游戏 IIZ
 */
/**
 * 判断一个值能否调到最后 i + nums[i] === nums.length - 1
 * 递归的方法，会报内存泄漏
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if (nums.length === 1) return 0;

    for (let i = 0; i < nums.length; i++) {
        if (i + nums[i] >= nums.length - 1) {
            return jump(nums.slice(0, i + 1)) + 1;
        }
    }

    return Infinity;
};

/**
 * 动态规划，改进效率
 * 辅助数组，记录到节点的最小步数
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let minStep = [];
    minStep.length = nums.length;
    minStep.fill(Infinity);
    minStep[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i]; j++) {
            let target = i + j + 1;
            if (target < nums.length - 1) {
                minStep[target] = Math.min(minStep[i] + 1, minStep[target]);
            } else if(target === nums.length - 1) {
                return minStep[i] + 1
            }

        }
    }

    return minStep[nums.length - 1];
};

/**
 * O(n)
 * @param {*} nums 
 */
var jump = function (nums) {
    let len = nums.length;
    let end = 0;
    let steps = 0;
    let maxPos = 0;
    for(let i = 0; i < len - 1; i++) {
        maxPos = Math.max(maxPos, i + nums[i]);

        if(end === i) {
            steps ++;
            end = maxPos;
        }
    }
    return steps;
};

export default {
    func: () => {
        const n = [2, 3, 1, 1, 4];
        let res = jump(n);
        console.log(res);

        return `${res}`;
    },
    title: "45. 跳跃游戏 IIZ",
    file: "leetcode_js/jump.js",
};
