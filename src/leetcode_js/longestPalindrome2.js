/**
 * 409. 最长回文串
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 
*/
/**
 * 遍历一遍s，使用set保存字母e，
 * 有重复的，长度+2，并去除
 * 不存在，则添加
 * 最后，看set，非空则长度+1
 * @param {string} s
 * @return {number}
 */
var longestPalindrome2 = function(s) {
    let len = 0;
    let chars = new Set();
    for(let e of s) {
        if(chars.has(e)) {
            len += 2;
            chars.delete(e);
        } else {
            chars.add(e);
        }
    }

    if(chars.size !== 0) {
        len += 1;
    }

    return len;
};
export default {
    func: () => {
        const s = 'aaaaaaaaaaab';
        let res = longestPalindrome2(s);
        console.log(res);
        return `最长回文串 ${s} ${res}`;
    },
    title: `409. 最长回文串`,
    file: "leetcode_js/longestPalindrome2.js",
    leetLink: 'https://leetcode-cn.com/problems/longest-palindrome/solution/bian-li-zi-fu-chuan-by-egerton/'
}


