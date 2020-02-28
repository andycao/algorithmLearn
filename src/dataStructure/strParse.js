/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    S = parseStr(S)
    T = parseStr(T)

    return S == T;
};

const parseStr = (str) => {
    let list = str.split('');
    let result = []
    for(let s of list) {
        if(s == '#') {
            result.pop();
        } else {
            result.push(s)
        }
    } 

    return result.join('')
}

export default () => {
    console.log(
        backspaceCompare('a#b', 'c#b')
    );
}
