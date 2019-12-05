/*
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 如果数组中不存在目标值，返回 [-1, -1]。
 */

let list = [3, 2, 4]
let num = 6
let twoSum = (list, num) => {
    let map = new Map()
    for (let i = 0; i < list.length; i++) {
        map.set(list[i], i)
    }

    for (let i = 0; i < list.length; i++) {
        let dif = num - list[i];
        if(map.has(dif) && map.get(dif) !== i) {
            return [i, map.get(dif)]
        }
    }

    return [-1, -1]
}

console.log(twoSum(list, num));