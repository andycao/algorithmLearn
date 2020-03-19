/**
 * 1013. 将数组分成和相等的三个部分
 * 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
 * 形式上，如果可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。
 * 
 * 看例子以及描述，排序是不可变的，那么就用双指针i , j 不停滑动计算判断
 * 
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
    if (A.length < 3) return false;

    let a = 0, b = 0, c = 0;
    for (let i = 1; i < A.length - 1; i++) {
        a += A[i - 1];
        b = 0;
        for (let j = i + 1; j < A.length; j++) {
            b += A[j - 1];
            if (a === b) {
                c = sum(A, j, A.length);
                if (a === c) {
                    return true;
                }
            }
        }
    }

    return false;
};

function sum(array, i, j) {
    let sum = 0;
    for (let index = i; index < j; index++) {
        sum += array[index];
    }

    return sum;
}

export default {
    func: () => {
        let list = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4]
        const res = canThreePartsEqualSum(list)
        console.log(res);
        return `${res}`;
    },
    title: '1013. 数组三等分',
    file: "leetcode_js/diameterOfBinaryTree.js",
}