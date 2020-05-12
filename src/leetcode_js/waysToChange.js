/**
 * 08.11. 硬币
 * 硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)
 *
 */
/**
 * 定义一个函数S(n) 可以计算n的所有组合方式，则S(n) = S(n - 25) + S(n - 10) + S(n - 5) + S(n - 1)
 * 判断 n - x的大小，> 0可继续， === 0 返回1，< 0不需要考虑
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
    let cache = [];
    return sumOf(n);

    function sumOf(n) {
        if(typeof cache[n] === 'number') {
            return cache[n];
        }

        let res = 0;
        if(n >= 25) {
            res = sumOf(n - 25) + sumOf(n - 10) + sumOf(n - 5) + sumOf(n - 1);
        } else if(n >= 10) {
            res = sumOf(n - 10) + sumOf(n - 5) + sumOf(n - 1);
        } else if(n >= 5) {
            res = sumOf(n - 5) + sumOf(n - 1);
        } else if(n >= 1) {
            res = sumOf(n - 1);
        } else if(n === 0) {
            res = 1; 
        }

        cache[n] = res;
        return res;
    }
};

const title = "08.11. 硬币";
export default {
    func: () => {
        const list = 6;
        const res = waysToChange(list);
        console.log(res);

        return `${title}: ${list} ${res}`;
    },
    title: title,
    file: "leetcode_js/waysToChange.js",
};
