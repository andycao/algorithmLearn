/**
 * 22. 括号生成
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let cache = [];

    return generate(n);

    function generate(n) {
        if (cache[n]) return cache[n];

        let res = [];
        if (n === 0) return [''];



        //(a)b  对a b的个数进行分组
        for (let i = 0; i < n; i++) {
            for (let a of generate(i)) {
                for (let b of generate(n - i - 1)) {
                    res.push(`(${a})${b}`);
                }
            }
        }

        cache[n] = res;
        return res;
    }
};

const title = "22. 括号生成"
export default {
    func: () => {
        let res = generateParenthesis(4);
        console.log(res);

        return `${title}: length${res.length} ${res}`
    },
    title: title,
    file: "leetcode_js/generateParenthesis.js",
}