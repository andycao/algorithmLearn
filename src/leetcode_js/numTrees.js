/**
 * 96. 不同的二叉搜索树
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 * https://leetcode-cn.com/problems/unique-binary-search-trees/
 * 
 * 思路：1..n的二叉搜索树数量 = 1为根节点的1..n的二叉搜索数量 + 2为根节点 + 3为根节点 + 4 ... n
 * 而 1为根节点1..n的二叉搜索树数量 = 1 * n - 1个元素的数量
 * 2为根节点1..n的二叉搜索树数量 = 左边1个元素的数量 * 右边n - 2个元素数量
 * 3为根节点1..n数量 = 左边2元素数量 * 右边 n - 3数量
 * 4为根 = 左3数量 * 右n-4数量
 * 可以递归
 * 
 * 利用了动态规划，加了个results，效率内存都大大提升。
 * 
 * @param {number} n
 * @return {number}
 */
let results = [];
var numTrees = function(n) {
    if(n === 1 || n === 0) return 1;
    if(results[n]) {
        return results[n];
    }

    let res = 0;
    //1 .. n个根相加
    for(let i = 1; i <= n; i++) {
        res += numTrees(i - 1) * numTrees(n - i);
    }
    results[n] = res;

    return res;
};

export default {
    func: () => {
        const n = 10;
        let res = numTrees(n);
        console.log(res);

        return `1 .. ${n}可以组成的二叉搜索树数量： ${res}`
    },
    title: '96. 不同的二叉搜索树',
    file: "leetcode_js/numTrees.js",
    leetLink: "https://leetcode-cn.com/problems/unique-binary-search-trees/solution/di-gui-you-hua-by-egerton/",
}