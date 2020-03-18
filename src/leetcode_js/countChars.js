/**
 * 1160. 拼写单词
 * 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

    假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

    注意：每次拼写时，chars 中的每个字母都只能用一次。

    返回词汇表 words 中你掌握的所有单词的 长度之和。
 */
/**
 * 把chars转换成map 字母，出现次数
 * 如果words的单词，出现的字母都在map中，并且数量不超过num，那么这个字母是true
 * 返回长度增加word的length
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const known = parseWordToMap(chars);
    let total = 0;

    for(let word of words) {
        const map1 = parseWordToMap(word);
        if(test(map1, known)) {
            console.log(map1, known);
            total += word.length;
        }
    }

    return total;
};

function parseWordToMap(str) {
    let map = new Map();
    for(let s of str) {
        if(map.has(s)) {
            map.set(s,map.get(s) + 1);
        } else {
            map.set(s, 1);
        }
    }
    return map;
}

/**
 * map1 included in map2
 * @param {*} map1 
 * @param {*} map2 
 */
function test(map1, map2) {
    for(let k of map1.keys()){
        if(!map2.has(k) || map2.get(k) < map1.get(k)) {
            return false;
        }
    }
    return true;
}


export default {
    func: () => {
        const words = ["cat","bt","hat","tree"];
        const chars = "atach";
        const res = countCharacters(words, chars);
        console.log(res);
        return `拼写单词 ${words} ${chars} : ${res}`;
    },
    title: '1160. 拼写单词'
}