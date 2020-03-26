/**
 * 999. 车的可用捕获量
 * 给定一个二维数组棋盘，有一个格子是R车，看它上下左右能不能吃到p卒子，返回能吃到的数量
 */
/**
 * 找到R的位置
 * 向4个方向寻找，找到第一个非.看是否是p，直到边界
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let res = 0;
    let R = [];
    const len = 8;
    forR: for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (board[i][j] === 'R') {
                R = [i, j];
                break forR;
            }
        }
    }

    console.log(R);
    //left
    left: for (let j = R[1]; j >= 0; j--) {
        const c = board[R[0]][j];
        if (c !== '.' && c !== 'R') {
            if (c === 'p') {
                res++;
                break left;
            } else {
                break left;
            }
        }
    }

    //right
    right: for (let j = R[1]; j < len; j++) {
        const c = board[R[0]][j];
        if (c !== '.' && c !== 'R') {
            if (c === 'p') {
                res++;
                break right;
            } else {
                break right;
            }
        }
    }

    //top
    top: for(let i = R[0]; i >= 0; i--) {
        const c = board[i][R[1]];
        if (c !== '.' && c !== 'R') {
            if (c === 'p') {
                res++;
                break top;
            } else {
                break top;
            }
        }
    }

    //bottom
    bottom: for(let i = R[0]; i < len; i++) {
        const c = board[i][R[1]];
        if (c !== '.' && c !== 'R') {
            if (c === 'p') {
                res++;
                break bottom;
            } else {
                break bottom;
            }
        }
    }

    return res;
};
export default {
    func: () => {
        let str1 = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
        const res = numRookCaptures(str1);
        console.log(res);
        return `numRookCaptures: ${res}`;
    },
    title: '999. 车的可用捕获量',
    file: "leetcode_js/numRookCaptures.js",
}