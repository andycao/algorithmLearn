/**
 * 面试题 10.01. 合并排序的数组
 */
/**
 * 定义一个a数组存储A的前m个元素
 * 对两个数组，进行合并，进入A
 * 每次判断第一个元素，把小的放进去
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var mergeArray = function (A, m, B, n) {
    let a = A.slice(0, m);

    let i = 0;
    while(a.length > 0 || B.length > 0) {
        if(a[0] < B[0] || B.length === 0) {
            A[i] = a.shift();
        } else {
            A[i] = B.shift();
        }

        i++;
    }
};

const title = "10.01. 合并排序的数组";
export default {
    func: () => {
        let A = [1, 2, 3, 0, 0, 0];
        let m = 3;
        let B = [2, 5, 6];  
        let n = 3;

        mergeArray(A, m, B, n);
        console.log(A);

        return `${title}: ${A}`;
    },
    title: title,
    file: "leetcode_js/mergeArray.js",
};
