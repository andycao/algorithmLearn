/**
 * 面试题13. 机器人的运动范围
 */
/**
 * 用动态规划，创建一个m x n的数组，从0 ,0 开始向右 向下扩展，填充true, false
 * 
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let list = [];
    for(let i = 0; i < m; i++) {
        list[i] = [];
    }
    list[0][0] = true;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(list[i][j] === true) {
                //向右向下扩展
                if(i + 1 < m) {
                    list[i + 1][j] = judge(i + 1, j, k);
                }

                if(j + 1 < n) {
                    list[i][j + 1] = judge(i, j + 1, k);
                }
            }
        }
    }
    return flatten(list).filter(e => e).length;
};

function flatten(array) {
    return array.reduce(
        (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
        [])
}

function judge(x, y, k) {
    let v = 0;
    v += Math.floor(x / 100) + Math.floor(x / 10) + x % 10;
    v += Math.floor(y / 100) + Math.floor(y / 10) + y % 10;
    return v <= k;
}

const title = "面试题13. 机器人的运动范围"
export default {
    func: () => {
        let res = movingCount(38, 15, 9);
        console.log(res);

        return `${title}: ${res}`
    },
    title: title,
    file: "leetcode_js/movingCount.js",
}