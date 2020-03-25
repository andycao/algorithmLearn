/**
 * 892. 三维形体的表面积
 * 在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。

每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

请你返回最终形体的表面积。
例如：
输入：[[1,2],[3,4]]
输出：34

在0,1的位置1个block，0,2的位置2层, 1,0的位置3层, 1,1的位置4层
共 34个面
 */
/**
 * 表面积 = block个数 * 6 - 2 * 贴合的面数字
 * 那么，遍历一遍，计算block个数，同时计算贴合面数字
 * 计算即可
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let blocks = 0;
    let faces = 0;

    //遍历多维数组，双循环
    for(let i = 0; i < grid.length; i++) {
        //行
        for(let j = 0; j < grid[i].length; j++) {
            //高度
            const h = grid[i][j];
            blocks += h;
            //贴合的面数
            faces += h > 0? h - 1 : 0;
            faces += j > 0? Math.min(grid[i][j - 1], h) : 0;
            faces += i > 0? Math.min(grid[i - 1][j], h) : 0;
        }
    }

    return blocks * 6 - 2 * faces;
};

export default {
    func: () => {
        let str1 = [[1,2], [3, 4]]
        const res = surfaceArea(str1);
        console.log(res);
        return `surfaceArea: ${res}`;
    },
    title: '892. 三维形体的表面积',
    file: "leetcode_js/surfaceArea.js",
    leetLink: "https://leetcode-cn.com/problems/surface-area-of-3d-shapes/solution/kuai-ji-suan-by-egerton/"
}