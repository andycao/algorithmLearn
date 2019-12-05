/**
 * @param {string[]} strs
 * @return {string}
 * 编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1:

    输入: ["flower","flow","flight"]
    输出: "fl"
    示例 2:

    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。
    说明:

    所有输入只包含小写字母 a-z 。
 */

const strs = ['asd', 'as', 'asdf']


var longestCommonPrefix = function (strs) {
    let str = strs[0] || ''
    let match = false

    if (strs.length === 0) return str;
    do {
        if (str.length > 0) {

            match = check(str, strs)
            if(!match) {
                str = str.substr(0, str.length - 1)
            }
        }else {
            match = true
        }
    } while (!match)

    return str;
};

function check(str, list) {
    let result = true;
    let len = str.length;
    for (let ele of list) {
        let tmp = ele.substr(0, len)
        result = result && str === tmp
    }
    return result;
}

console.log(another(strs));

function another(strs){
    if (strs.length == 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix == '') return "";
        }        
    return prefix;
}