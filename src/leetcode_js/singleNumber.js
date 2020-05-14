/**
 * 136. 只出现一次的数字
 */
/**
 * 看了题解，使用位运算符异或 ^
 * 同时它满足交换律和结合律
 * a ^ 0 === a
 * a ^ a === 0
 * (a ^ b) ^ b === a ^ (b ^ b) === a
 * 
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((prev, curr) => {
        return prev ^ curr;
    }, 0);
};

export default {
    func: () => {
        const param = [4,1,2,1,2];
        const ans = singleNumber(param);
        console.log(ans);
        return ans;
    },
    title: `136. 只出现一次的数字`,
    file: "leetcode_js/singleNumber.js",
    leetLink: "https://leetcode-cn.com/problems/single-number/solution/js-shi-yong-reduce-yi-huo-by-egerton/"
};
