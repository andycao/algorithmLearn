/**
 * 1111. 有效括号的嵌套深度
 * 题目很难理解，贴上链接
 * https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/
 * 
 */
/**
 * 先计算seq的最大深度，那么分解的两个子字符串深度都为(偶数) deep/2，或者(奇数)deep/2 + 1, deep/2
 * 设两个栈，a,b,为他们的深度，令其不能超过自己的最大深度，amax, bmax依次分解原数组，规则如下
 * 如果遇到( 优先分配到a中，a++ 如果a深度=amax，则分配给b
 * 如果遇到)，如果b > 0，分配给b，b深度--,如果b === 0, 分配给a, a--
 * 直到最后 返回res
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
    let res = [];
    const max = findMaxDeep(seq);

    const amax = Math.ceil(max / 2);
    const bmax = Math.floor(max / 2);
    let a = 0;
    let b = 0;

    for(let s of seq) {
        if(s === '(') {
            if(a < amax) {
                a++;
                res.push(0);
            } else {
                b++;
                res.push(1);
            }
        } else {
            if(b > 0) {
                b--;
                res.push(1);
            } else {
                a--;
                res.push(0);
            }
        }
    }

    return res;
};

/**
 * 默认str为有效括号字符串
 * @param {string} str 
 */
function findMaxDeep(str) {
    let max = 0;
    let n = 0;
    for (let s of str) {
        if (s === '(') {
            n++;
            max = Math.max(max, n);
        } else {
            n--;
        }
    }
    return max;
}

const title = "1111. 有效括号的嵌套深度"
export default {
    func: () => {
        const n = '()(())()';
        let res = maxDepthAfterSplit(n);
        console.log(res);

        return `${title}: ${res}`
    },
    title: title,
    file: "leetcode_js/maxDepthAfterSplit.js",
    leetLink: 'https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solution/jian-dan-rong-yi-li-jie-de-on-by-egerton/'
}