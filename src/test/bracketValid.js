import {
    futimesSync
} from "fs";

/**
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let len;
    if (len % 2 == 1) return false
    do {
        len = s.length;
        s = simp(s);
    }
    while (s.length < len)

    console.log(s);
    if (s.length === 0) return true;
    else return false
};

function simp(str) {
    let out = str.replace('[]', '')
    out = out.replace('{}', '')
    out = out.replace('()', '')
    return out;
}

function canSim(str) {
    return str.includes('{}') || str.includes('()') || str.includes('[]')
}

console.log(stackMethod('[([])][]'));


function stackMethod(s) {
    // debugger
    let map = []

    let list = s.split('');
    for (let e of list) {
        if (isLeft(e)) {
            map.push(e)
        } else {
            //right
            let top = map[map.length - 1];
            if (match(top, e)) {
                map.pop();
            } else {
                return false;
            }
        }
    }
    if (map.length === 0)
        return true;
    else 
        return false
}

function isLeft(params) {
    return params === '(' || params === '{' || params === '[';
}

function match(a, b) {
    switch (a + b) {
        case '()':
            return true;
        case '[]':
            return true;
        case '{}':
            return true;
        default:
            return false;
    }
}