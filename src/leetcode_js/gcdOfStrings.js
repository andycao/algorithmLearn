/**
 * 1071. 字符串的最大公因子
 * 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
 * 返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。
 */

/**
 * 辅助方法，判断x是否为str的公因子，可以使用正则表达式match
 * 
 * 根据str1进行切分，1, 1/2, 1/3,....1/n
 * 根据长度判断能否被整除
 * 然后，判断x是否是两个字符串的公因子，第一个match的就是最大的
 * 
 * 暴力法
 * 
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    if(len1 === 0 || len2 === 0) return '';

    for(let num = 1; num <= len1; num ++) {
        if(len1 % num === 0) {
            let xLen = len1 / num;
            if(len2 % xLen === 0) {
                //判断string
                let x = str1.substr(0, xLen);
                if(isGcd(x, str1) && isGcd(x, str2)) {
                    return x;
                }
            }
        }
    }

    return '';
};
/**
 * 最大公约数 辗转相除法
 * 辅助方法，判断x是否为str的公因子，可以使用正则表达式match
 * 看了题解改成了，最大公约数的方法，跟暴力法相比效率成倍提升
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 *  
 */
var gcdOfStrings = function (str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    if(len1 === 0 || len2 === 0) return '';

    let gcdNum = 1;
    if(len1 > len2) {
        gcdNum = gcd(len1, len2);
    } else {
        gcdNum = gcd(len2, len1);
    }

    let str = str1.substr(0, gcdNum);
    if(isGcd(str, str1) && isGcd(str, str2)) {
        return str1.substr(0, gcdNum);
    } else {
        return '';
    }
}

//公因子
function isGcd(x, str) {
    let reg = new RegExp(`^(${x})+$`, 'i');
    return reg.test(str);
}

//最大公约数
//num1 > num2
function gcd(num1, num2) {
    let tmp = num1 % num2;
    if(tmp === 0) {
        return num2;
    } else {
        return gcd(num2, tmp)
    }
}

export default () => {
    let str1 = 'aaaa';
    let str2 = 'aaaaab';
    const res = gcdOfStrings(str1, str2);
    console.log(res);
    return `gcd of string: ${res}`;
}
