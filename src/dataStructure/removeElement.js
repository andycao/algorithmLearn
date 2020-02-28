/**
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */
let list = [3,3]

var removeElement = function (nums, val) {
    let i = 0;
    let j = nums.length;
    j = findLastNotEqual(val, nums, j)

    while (i < j) {
        if(nums[i] === val) {
            nums[i] = nums[j];
            j = findLastNotEqual(val, nums, j);
            if(i < j)
                i ++
        } else {
            i++
        }
    }

    if(nums[i] === val) {
        return 0;
    }

    return i + 1;
};

var findLastNotEqual = (val, list, index) => {
    for (let i = index - 1; i >= 0; i--) {
        if(val !== list[i]) {
            return i;
        }
    }
    return null;
}
console.log(removeElement(list, 3), list);