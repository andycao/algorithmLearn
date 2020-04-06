/**
 * 42. 接雨水
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 */
/**
 * 找出最大值maxIndex
 * 维护一个res
 * 遍历左侧到max, 维护当前数字，向右侧补全。同样遍历右侧
 * target - height数组得到结果
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0;
    let maxIndex = 0;
    for(let i = 0; i < height.length; i++) {
        if(height[i] > height[maxIndex]) {
            maxIndex = i;
        }
    }

    let curr = 0;
    //左侧
    for(let i = 0; i < maxIndex; i++) {
        if(height[i] > curr) {
            curr = height[i];
        } else {
            res += curr - height[i];
        }
    }

    //right
    curr = 0;
    for(let i = height.length - 1; i > maxIndex; i--) {
        if(height[i] > curr) {
            curr = height[i];
        } else {
            res += curr - height[i];
        }
    }

    return res;
};

const title = "42. 接雨水"
export default {
    func: () => {
        const list = [0,1,0,2,1,0,1,3,2,1,2,1];
        const res = trap(list);
        console.log(res);

        return `${title}: ${res}`
    },
    title: title,
    file: "leetcode_js/trap.js",
    leetLink: 'https://leetcode-cn.com/problems/trapping-rain-water/solution/onbian-li-by-egerton/'
}