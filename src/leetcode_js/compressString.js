/**
 * 01.06 字符串压缩
 * 利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
 * 比如，字符串aabcccccaaa会变为a2b1c5a3。
 * 若“压缩”后的字符串没有变短，则返回原先的字符串。
 * 你可以假设字符串中只包含大小写英文字母（a至z）。
 */
/**
 * 遍历，temp暂存，一致num++ 否则组建输出字符串，temp指向新的
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let res = '';
    let temp = '';
    let num = 0;
    for(let i = 0; i < S.length; i ++) {
        if(temp === S.charAt(i)) {
            num++;
        } else {
            if(num > 0)
                res +=  temp + num
            temp = S.charAt(i);
            num = 1;
        }
    }

    res += temp + num;
    if(S.length > res.length){
        return res;
    } else {
        return S;
    }
};

export default {
    func: () => {
        const str = 'aabcaaaaa';
        const res = compressString(str)
        console.log(res);
        return `compress ${str} : ${res}`;
    },
    title: '01.06 字符串压缩'
}