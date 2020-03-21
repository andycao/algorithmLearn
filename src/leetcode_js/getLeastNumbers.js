/**
 * 40. 最小的k个数
 * 输入整数数组 arr ，找出其中最小的 k 个数。
 * 例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 */
/**
 * 暴力一点，对字符串排序，前k个
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    arr.sort((a, b) => a - b);
    return arr.slice(0, k);
};

/**
 * 选择排序，找前k个
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    if (k < arr.length / 2) {
        for (let i = 0; i < k; i++) {
            //每次找到最小的，换到最前面
            for (let j = i + 1; j < arr.length; j++) {
                //比较 i j，i 小继续，j小交换
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    } else {
        //选择最大的len - k 个
        //剩余的就是
        let len = arr.length;
        for (let i = len; i > k - 1; i--) {
            //每次找到最大的，换到最后
            for (let j = i - 1; j >= 0; j--) {
                //比较 i j
                if (arr[i] < arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr.slice(0, k);
};

/**
 * 快速排序 n
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// var getLeastNumbers = function (arr, k) {
//     if(k === 0 || arr.length === 0) return [];

//     // eslint-disable-next-line no-debugger
//     debugger
//     return quickSearch(arr, 0, arr.length - 1)

//     function quickSearch(arr, l, r) {
//         let p = partition(arr, 0, arr.length - 1);
//         if(p === k) {
//             return arr.slice(0, k);
//         } else if(p < k) {
//             return quickSearch(arr, p + 1, r);
//         } else {
//             return quickSearch(arr, l, p - 1);
//         }
//     }
    
//     // 切分 返回参考元素下标
//     function partition(arr, l, r) {
//         let par = arr[l]; //参考元素
//         let i = l + 1;
//         let j = r;
//         while(i < j) {
//             //找到左边第一个大于par
//             while(i < r && arr[i] <= par) i++;
//             //找到右边第一个小于par
//             while(j > l && arr[j] >= par) j--;
//             if(i >= j) {
//                 break;
//             }
//             //交换
//             const temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//         //把做左侧的参考元素放到中间
//         arr[l] = arr[j];
//         arr[j] = par;

//         //返回参考元素下标
//         return j;
//     }
// };

export default {
    func: () => {
        let a = [2, 1, 3, 5, 2, 4, 1, 6, 2]
        const res = getLeastNumbers(a, 5)
        console.log(res);
        return `getLeastNumbers ${a} : ${res}`;
    },
    title: '40. 最小的k个数',
    file: "leetcode_js/getLeastNumbers.js",
}