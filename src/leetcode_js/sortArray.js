/**
 * 912. 排序数组
 * 给你一个整数数组 nums，请你将该数组升序排列。
 */
/**
 * 冒泡排序
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[j] < nums[j - 1]) {
                swap(nums, j, j - 1);
            }
        }
    }
    return nums;
};

/**
 * 选择排序
 * @param {number[]} nums 
 * @returns {number[]}
 */
var sortArray2 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let sm = i;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] < nums[sm]) {
                sm = j;
            }
        }
        swap(nums, sm, i);
    }
    return nums;
};
/**
 * 快速排序
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */
var sortArray3 = function (nums) {
    quickSort(0, nums.length - 1);
    return nums;
    function quickSort(a, b) {
        let m = divide(a, b);
        if (m > a) {
            quickSort(a, m - 1);
        }

        if (m < b) {
            quickSort(m + 1, b);
        }
    }

    /**
     * 对nums的i - j 快速排序
     * @param {number} i 
     * @param {number} j 
     * @returns {number} middle
     */
    function divide(a, b) {
        let v = nums[a];
        let i = a;
        let j = b;
        while (i < j) {
            while (i <= j && nums[i] <= v) {
                i++;
            }
            while (i <= j && nums[j] > v) {
                j--;
            }
            if (i >= j) break;
            swap(nums, i, j);
        }
        swap(nums, j, a);
        return j;
    }
};

function swap(list, i, j) {
    const temp = list[j];
    list[j] = list[i];
    list[i] = temp;
}

const title = "912. 排序数组"
export default {
    func: () => {
        const n = [0, 5, 9, 12, 2, 5, 7, 3, 8, 5]
        let res = sortArray3(n);
        console.log(res);

        return `${title}: ${res}`
    },
    title: title,
    file: "leetcode_js/sortArray.js",
    leetLink: 'https://leetcode-cn.com/problems/sort-an-array/solution/kuai-pai-kan-zhao-jian-dan-xie-qi-lai-nan-by-egert/'
}