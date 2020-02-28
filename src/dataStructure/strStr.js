/**
 * 实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，
在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 * 
 * @param {*} haystack 
 * @param {*} needle 
 */
var strStr = function(haystack, needle) {
    let len = needle.length;
    if(len === 0 ) return 0;
    if(len > haystack.length) return -1;

    for(let i = 0; i < haystack.length; i++) {
        let tmp = haystack.substring(i, i + len)
        if(tmp === needle) {
            return i
        }
    }

    return -1;
};

console.log(strStr('hello', ''));