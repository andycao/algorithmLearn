/**
 * 5369. 统计作战单位数
 * n 名士兵站成一排。每个士兵都有一个 独一无二 的评分 rating 。

每 3 个士兵可以组成一个作战单位，分组规则如下：

从队伍中选出下标分别为 i、j、k 的 3 名士兵，他们的评分分别为 rating[i]、rating[j]、rating[k]
作战单位需满足： rating[i] < rating[j] < rating[k] 或者 rating[i] > rating[j] > rating[k] ，其中  0 <= i < j < k < n
请你返回按上述条件可以组建的作战单位数量。每个士兵都可以是多个作战单位的一部分。
 */
/**
 * 遍历一遍，i,j,k count
 * 满足 i > j > k 同时 rating[i] > rating[j] > rating[k]
 * 或者相反的情况 count ++
 * i范围 0 ~ len - 3, j: i + 1 ~ len - 2 k:j + 1 ~ len - 1
 * 
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
    let count = 0;
    const len = rating.length;
    if (len < 3) return count;

    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                if (rating[i] > rating[j] && rating[j] > rating[k] || rating[i] < rating[j] 
                    && rating[j] < rating[k]) {
                    count++;
                }
            }
        }
    }

    return count;
};

const title = "5369. 统计作战单位数"
export default {
    func: () => {
        const n = [1, 2, 3, 4, 5];
        let res = numTeams(n);
        console.log(res);

        return `${title}: ${res}`
    },
    title: title,
    file: "leetcode_js/findLucky.js",
    leetLink: 'https://leetcode-cn.com/problems/count-number-of-teams/solution/bao-li-bian-li-by-egerton/'
}