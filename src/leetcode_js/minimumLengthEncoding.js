/**
 * 820. 单词的压缩编码
 * https://leetcode-cn.com/problems/short-encoding-of-words/
 * 给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。
例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。

那么成功对给定单词列表进行编码的最小字符串长度是多少呢？

 */

/**
 * 对字符串数组list，去重，并且按照长度从大到小排序
 * 辅助函数，包含，检测a，是否包含b
 * 计算最大长度n，遍历数组list，如果能被已有的元素包含，则n - l + 1
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
    //去重
    let list = [...new Set(words)];
    //从长到短排序
    list.sort((a, b) => b.length - a.length);

    //总长度
    let res = 0;
    for(let e of list) {
        res += e.length + 1;
    }

    //判断是否能被压缩
    for(let i = 0; i < list.length; i++) {
        let canInclude = false;
        testInclude: for(let j = i - 1; j >= 0; j--) {
            canInclude = include(list[j], list[i]);
            if(canInclude) {
                //n - l + 1
                res -= list[i].length + 1;
                break testInclude;
            }
        }
    }

    return res;

};

/**
 * if a include b
 * b.length <= a.length
 * @param {string} a 
 * @param {string} b 
 */
function include(a, b) {
    //undefined
    if(!a) return false;

    const blen = b.length;
    const alen = a.length;
    for(let i = 0; i < blen; i++) {
        if(b[blen - i - 1] !== a[alen - i - 1]) return false;
    }

    return true;
}

/**
 * 官方题解，去除后缀
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
    let collect = new Set(words);

    for(let e of collect) {
        for(let i = 1; i < e.length; i++) {
            const str = e.slice(i);
            collect.has(str) && collect.delete(str);
        }
    }

    let res = 0;
    for(let e of collect) {
        res += e.length + 1;
    }

    return res;
}

export default {
    func: () => {
        const n = ["time", "me", "bell", 'ell'];
        let res = minimumLengthEncoding(n);
        console.log(res);

        return `单词的压缩编码： ${res}`
    },
    title: '820. 单词的压缩编码',
    file: "leetcode_js/minimumLengthEncoding.js",
}