/**
 * 面试题62. 最后的数字
 * 0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。
 */
/**
 * 试了几次，没有找到规律
 * 暴力法
 * 创建一个 0 ~ n -1的数组
 * 算出下标 t = (cur - 1 + m)%length
 * 每次splice(t, 1)
 * 直到length === 1
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
    let list = [];
    for(let i = 0; i < n; i++) {
        list[i] = i;
    }

    let cur = 0;
    while(list.length > 1) {
        cur = (cur - 1 + m)%list.length;
        list.splice(cur, 1);
    }

    return list[0];
};

const title = "面62. 最后的数字"
export default {
    func: () => {
        const n = 10;
        const m = 17;
        let res = lastRemaining(n, m);
        console.log(res);

        return `${title}: ${res}`
    },
    title: title,
    file: "leetcode_js/lastRemaining.js",
    leetLink: 'https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/bao-li-js-by-egerton/'
}