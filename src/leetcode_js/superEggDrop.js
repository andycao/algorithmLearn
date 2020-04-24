/**
 * 887. 鸡蛋掉落
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 */
/**
 * 递归
 * 每次除2，判断两边的max
 * 左边 0 ~ floor(n / 2) k - 1   +1
 * 右边 floor(n / 2) ~ n等于 0 ~ n - floor(n / 2) - 1  k      +1
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    //todo 没有做出来，等空出来再研究研究
    console.log(K, N)
    if(N === 0) return 0;

    if(K === 1 || N === 1) {
        return N;
    }
    let mid = Math.floor(N / 2);
    let a = superEggDrop(K - 1, mid - 1) + 1;
    let b = superEggDrop(K, N - mid);

    return Math.max(a, b);
};

const title = "887. 鸡蛋掉落"
export default {
    func: () => {
        const k = 2;
        const n = 3;
        let res = superEggDrop(k, n);
        console.log(res);

        return `${title}: ${res}`
    },
    title: title,
    file: "leetcode_js/superEggDrop.js",
}