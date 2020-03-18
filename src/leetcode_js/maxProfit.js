/* eslint-disable no-redeclare */
/**
 * 121. 买卖股票的最佳时机
 * 给定一个数组, 它的第 i 个元素是一支给定股票第 i 天的价格。

    如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

 * 注意你不能在买入股票前卖出股票。
 * 根据原数组，(n + 1)  - n 创建一个变化数组,计算变化数组的最大段，最大值
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;
    if (prices.length === 0) return max;

    let accList = prices.map((val, index, array) => {
        if (index === array.length - 1) {
            return 0;
        } else {
            let temp = array[index + 1] - val;
            return temp;
        }
    });

    max = Math.max(...accList);

    //计算区间 max
    for (let i = 0; i < accList.length; i++) {
        let sum = 0;
        //优化：只有最左边，或者，左侧值<0时
        if (i === 0 || accList[i - 1] < 0) {
            for (let j = i; j < accList.length; j++) {
                sum += accList[j];
                max = Math.max(max, sum);
            }
        }
    }

    return max;
};

//保存历史最低价，一次遍历
var maxProfit = function (prices) {
    let max = 0;
    if (prices.length === 0) return max;
    let minPrice = prices[0];
    for (let v of prices) {
        if (v < minPrice) {
            minPrice = v;
        } else {
            if (v - minPrice > max) {
                max = v - minPrice;
            }
        }
    }

    return max;
}

export default () => {
    // let list = [2,1,2,0,1];
    let list = [2, 1, 2, 0, 1, 5, 4, 1, 6];
    let res = maxProfit(list);
    console.log(res);

    return JSON.stringify(`max profit: ${res}`);
}