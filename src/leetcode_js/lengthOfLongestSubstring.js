/**
 * 3. 无重复字符的最长子串
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;

    let valid = new Set();
    let end = 0;
    // debugger
    for(let start = 0; start < s.length; start++) {
        valid.delete(s.charAt(start - 1));

        while(end < s.length && !valid.has(s.charAt(end))) {
            valid.add(s.charAt(end));
            end++;
        }

        maxLen = Math.max(maxLen, valid.size);
    }

    return maxLen;
};

const title = "3. 无重复字符的最长子串";

export default {
    func: () => {
        let matrix = 'bbbb'
        let res = lengthOfLongestSubstring(matrix)
        console.log(res);

        return `${title}: ${res}`
    },
    title: title,
    file: "leetcode_js/lengthOfLongestSubstring.js",
    leetLink: 'https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/js-setguan-fang-ti-jie-er-lai-by-egerton/'
}