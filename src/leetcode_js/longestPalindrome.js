/**
 * 5. 最长回文子串
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let res = '';

    debugger
    for (let i = 0; i < s.length; i++) {
        let len1 = findLongestAround(s, i, i); //奇数
        let len2 = findLongestAround(s, i, i + 1) //偶数
        let len = Math.max(len1, len2);
        if(len > res.length) {
            res = s.substr(i - Math.floor((len - 1) / 2), len);
        }
    }

    return res;
};

function testPalindrome(str) {
    let reverse = [...str].reverse().join('');
    return reverse == str;
}

function findLongestAround(str, left, right) {

    while (left >= 0 && right < str.length && str.charAt(left) === str.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1
}

export default () => {
    console.log(
        longestPalindrome('dabbac')
    );
}