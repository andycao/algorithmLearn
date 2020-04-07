/**
 * 面试题 01.07. 旋转矩阵
 * 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
    不占用额外内存空间能否做到？
 */
/**
 * 在研究x,y的坐标变化时，发现可以通过在原数组，对角线反转，在中线左右反转即可
 * 时间复杂度 O(n^2) 空间复杂度O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    //对角线反转 0,0  n-1,n-1
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            swap(matrix, [i, j], [j, i]);
        }
    }

    //中线左右反转
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n / 2; j++) {
            swap(matrix, [i, j], [i, n - 1 - j]);
        }
    }

    function swap(matrix, [x1, y1], [x2, y2]) {
        const tmp = matrix[x1][y1];
        matrix[x1][y1] = matrix[x2][y2];
        matrix[x2][y2] = tmp;
    }
};

const title = "面试题 01.07. 旋转矩阵"
export default {
    func: () => {
        let matrix = 
        [
          [1,2,3],
          [4,5,6],
          [7,8,9]
        ];
        rotate(matrix);
        console.log(matrix);

        return `${title}: ${matrix}`
    },
    title: title,
    file: "leetcode_js/rotate.js",
    leetLink: 'https://leetcode-cn.com/problems/rotate-matrix-lcci/solution/jian-dan-hao-li-jie-de-kong-jian-o1-by-egerton/'
}