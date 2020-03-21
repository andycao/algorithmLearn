/**
 * 365. 水壶问题
 * 有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？

如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。

你允许：

装满任意一个水壶
清空任意一个水壶
从一个水壶向另外一个水壶倒水，直到装满或者倒空

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/water-and-jug-problem
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 暴力法
 * 经过演算，发现x,y之间，假设y > x，则每次n = y - x, 如果剩余大于x则继续n - x，小于x则，用y减去x-n
 * 每次计算，如果n不存在结果数组，则把结果存进来，如果n存在于数组则结束
 * 结果数组就是所有的可能性
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {

    let big = x + y;
    let small = Math.min(x, y);
    let res = [0, small, big];
    let t = calc(big, small);
    while(!res.includes(t)) {
        res.push(t);
        t = calc(t, small);
    }
    return res.includes(z);

    function calc(a, b) {
        if(a >= b) {
            return a - b;
        } else {
            return big - (b - a);
        }
    }
};

/**
 * 验算推测
 * 假设x小，y大
 * 如果y 是x的倍数，那么，只能算出来x的倍数
 * 如果x,y都是偶数，那么能算出<=y的所有偶数
 * 其他情况，能算出来<= x + y的所有数字
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater2 = function(x, y, z) {
    let big = Math.max(x, y)
    let small = x > y? Math.min(x - y, y) : Math.min(y - x, x);

    if(z > x + y) return false;

    if(big % small === 0) {
        return z % small === 0;
    } else if(big % 2 === 0 && small % 2 === 0) {
        return z % 2 === 0;
    } else {
        return true;
    }
};

/**
 * 看了官方题解，数学的力量真厉害
 * 贝祖定理 最大公约数
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater3 = function(x, y, z) {
    if(z > x + y) return false;
    if(x === 0 || y === 0) return z === 0 || z === x + y;
    return z % gcd(x, y) === 0;
    function gcd(x, y) {
        if(x > y) {
            return x % y === 0? y : gcd(y, x %y);
        } else {
            return y % x === 0? x : gcd(x, y %x);
        }
    }
};

export default {
    func: () => {
        const a = [6, 9, 1]
        const res = canMeasureWater(...a);
        const res2 = canMeasureWater2(...a);
        console.log(res);
        return `canMeasureWater ${a} func1: ${res}  func2: ${res2}`;
    },
    title: '365. 水壶问题',
    file: "leetcode_js/canMeasureWater.js",
    leetLink: 'https://leetcode-cn.com/problems/water-and-jug-problem/solution/shui-hu-wen-ti-by-leetcode-solution/'
}