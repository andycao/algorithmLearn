/**
 * 面试题51. 数组中的逆序对
*/
/**
 * 暴力，每个元素，跟后面的每个元素比较一遍
 * 暴力法超时，需要归并排序思想解题
 * O(n^2)
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let res = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i; j < nums.length; j++) {
            if(nums[j] < nums[i]) {
                res++;
            }
        }
    }

    return res;
};

const title = "面试题51. 数组中的逆序对"
export default {
    func: () => {
        const n = [7,5,6,4];
        let res = reversePairs(n);
        console.log(res);

        return `${title}: ${res}`
    },
    title: title,
    file: "leetcode_js/reversePairs.js",
}