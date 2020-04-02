/**
 * 289. 生命游戏
 * 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let copy = [];
    for(let i = 0; i < board.length; i++) {
        copy[i] = [];
        for(let j = 0; j < board[i].length; j++) {
            copy[i][j] = board[i][j];
        }
    }

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            let num = count(copy, i, j);
            if(num === 3) {
                board[i][j] = 1;
            } else if(num === 2 && copy[i][j] === 1) {
                board[i][j] = 1;
            } else {
                board[i][j] = 0;
            }
        }
    }
};

function count(board, i, j) {
    let num = 0;
    for(let x = i - 1; x <= i + 1; x++) {
        for(let y = j - 1; y <= j + 1; y++) {
            if(typeof board[x] === 'object' && board[x][y] === 1) num++;
        }
    }
    if(board[i][j] === 1) num--;
    return num;
}

const title = "289. 生命游戏"
export default {
    func: () => {
        const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
        gameOfLife(board);
        console.log(board);

        return `${title}: ${board}`
    },
    title: title,
    file: "leetcode_js/gameOfLife.js",
}