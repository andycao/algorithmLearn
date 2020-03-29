/**
 * 5368. 找出数组中的幸运数
 * 在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。

给你一个整数数组 arr，请你从中找出并返回一个幸运数。

如果数组中存在多个幸运数，只需返回 最大 的那个。
如果数组中不含幸运数，则返回 -1 。
 */
/**
 * 输出来所有的数，然后排序，倒序检测
 * key === value
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let list = [];
    list.length = 500;
    list.fill(0);
    for(let e of arr) {
        list[e] += 1;
    }
    for(let i = list.length - 1; i > 0; i--){
        if(list[i] === i) return i;
    }

    return -1;
};
export default {
    func: () => {
        const n = [1,1,2,2,3,3];
        let res = findLucky(n);
        console.log(res);

        return `5368. 找出数组中的幸运数： ${res}`
    },
    title: '5368. 找出数组中的幸运数',
    file: "leetcode_js/findLucky.js",
    leetLink: 'https://leetcode-cn.com/problems/find-lucky-integer-in-an-array/solution/js-bian-li-by-egerton-2/'
}