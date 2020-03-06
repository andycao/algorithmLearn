/**
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 

限制：

1 <= target <= 10^5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * 暴力的方法，1 ~ target / 2，每个数开始，加起来看看是否相等于target
 小于则继续加，大于则不成立，等于则数组有效
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let result = [];
    //1
    if(target === 1) {
        return result;
    }

    //从1 开始 到 Math.ceil(target / 2)
    for(let i = 1; i < Math.ceil(target / 2); i++) {
        let sum = 0;
        let acc = i;
        while(sum <= target) {
            if(sum < target) {
                sum += acc++;
            } else if(sum === target){
                //equal array from i ~ acc
                let array = [];
                for(let index = i; index < acc; index++) {
                    array.push(index);
                }

                result.push(array);

                break;
            }
        }
    }

    return result;
};
/*
* 滑动窗口 
定义左侧，右侧，l,r  1,2
计算l ~ r 的和，< target l不变，r可以向右扩展
= target 则l r组合正确，而且l开头的组合就这一个保存并且l + 1，r + 1。 
    l+1 r 的组合肯定小于target。l最远能到target / 2中间
>target 则l 开头没有正确组合， l + 1, r不变
当l > target / 2 或l >= r时结束循环，返回结果

* @param {number} target
* @return {number[][]}
*/
var findContinuousSequence = function(target) {
    let result = [];
    if(target === 1) return result;
    let l = 1;
    let r = 2;

    let sum = 0;
    let mid = Math.ceil(target / 2);
    while(l < mid && l < r) {
        sum = (l + r) * (r - l + 1) / 2;
        if(sum < target) {
            r++;
        } else if(sum === target) {
            let array = [];
            for(let index = l; index <= r; index++) {
                array.push(index);
            }
            result.push(array);

            l++;
            r++;
        } else {
            l++;
        }
    }

    return result;
}

export default () => {
    const res = findContinuousSequence(15)
    console.log(res);
    return JSON.stringify(res);
}
