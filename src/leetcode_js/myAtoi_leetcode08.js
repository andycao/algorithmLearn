/**
 * @param {string} str
 * @return {number}
 */
let max = 2147483648 - 1;
let min = -2147483648;
var myAtoi = function(str) {
    let s = str.trim();

    let reg = /^[+-]?\d+/;
    let res = reg.exec(s);
    if(res) {
        let num = parseInt(res[0]);
        if(num > max) return max;
        else if(num < min) return min;
        else return num;
    } else {
        return 0;
    }
};

export default () => {
    console.log(
        myAtoi('-91283472332-=')
    );
}
