/**
 * 914. 卡牌分组
 * https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。
 */
/**
 * 数出所有数字卡牌的个数
 * 如果，个数都是偶数，返回true
 * 求这一组的最大公约数，如果大于1则返回true，否则false
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let list = [];
    for(let e of deck) {
        list[e] = list[e] ? list[e]+1 : 1
    }
    
    //去除undefined
    list = list.filter(e=>e);
    let gcdNum = list[0];
    for(let e of list) {
        gcdNum = gcd(gcdNum, e);
        if(gcdNum < 2) {
            return false;
        }
    }

    return true;
};

function gcd(num1, num2) {
    if(num2 === 0) throw Error('no 0');
    let tmp = num1 % num2;
    if (tmp === 0) {
        return num2;
    } else {
        return gcd(num2, tmp)
    }
}

export default {
    func: () => {
        // const n = [1,2,3,4,4,3,2,1];
        const n = [1]
        let res = hasGroupsSizeX(n);
        console.log(res);

        return `hasGroupsSizeX ${n}： ${res}`
    },
    title: '914. 卡牌分组',
    file: "leetcode_js/hasGroupsSizeX.js",
    leetLink: "https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/solution/bao-li-gcd-by-egerton/"
}