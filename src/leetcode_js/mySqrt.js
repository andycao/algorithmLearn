/**
 * 69. x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 0;
    let right = x;
    let ans = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid * mid <= x) {
            left = mid + 1;
            ans = mid;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};

const title = "69. x 的平方根";
export default {
    func: () => {
        const res = mySqrt(16);
        console.log(res);

        return `${title}: ${res}`;
    },
    title: title,
    file: "leetcode_js/mySqrt.js",
};
