/**
 * 53. 最大子序和
 * https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 */
/**
 * 暴力法做出来
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let iCurrent = 0;
        for (let j = i; j < nums.length; j++) {
            iCurrent += nums[j];
            max = Math.max(max, iCurrent);
        }
    }

    return max;
};

/**
 * 如果之前的和为正则相加, 为负则丢弃之前的和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] > 0) {
            nums[i] = nums[i] + nums[i - 1];
        }
    }
    return Math.max(...nums);
};

export default {
    func: () => {
        const n = [-2, -1, -3, -4];
        // const n = [-2,1,-3,4,-1,2,1,-5,4];
        let res = maxSubArray(n);

        return `maxSubArray ${n}： ${res}`;
    },
    title: "53. 最大子序和",
    file: "leetcode_js/maxSubArray.js",
    leetLink:
        "https://leetcode-cn.com/problems/maximum-subarray/solution/kan-liao-ti-jie-zhong-xie-de-dong-tai-gui-hua-by-e/",
};
