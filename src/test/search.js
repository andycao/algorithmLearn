/*
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 
 * 如果数组中不存在目标值，返回 [-1, -1]。
 */

let list = [10, 10]
let num = 10
let search = (list, num) => {
    let start = -1;
    let end = -1

    if (num > list[list.length - 1] || num < list[0]) return [start, end]

    for (let i = 0; i < list.length; i++) {
        const ele = list[i];
        if (ele === num) {
            if (start === -1) {
                start = i;
                end = i;
            } else {
                end = i;
            }
        } else if (ele > num) {
            if (start === -1) return [start, end];
            else {
                end = i - 1;
                return [start, end];
            }
        }
    }

    return [start, end];
}

console.log(search(num, list));