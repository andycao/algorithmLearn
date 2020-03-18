
/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let j = 0;
    let len = s.length;
    let test = [];
    let max = 0;
    while(j < len) {
        if(test.indexOf(s.charAt(j)) !== -1) {
            test.shift();
        } else {
            test.push(s.charAt(j));
            max = Math.max(max, test.length);
            j++
        }
    }

    return max;
};

let str = "asdasd";

let num = lengthOfLongestSubstring(str);

console.log('最长字符串num', num);

