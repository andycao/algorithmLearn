/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * @param {string} str
 * @param {number} numRows
 * @return {string}
 */
var convert = function (str, numRows) {

    //1
    if(numRows === 1) {
        return str;
    }

    let myMap = new Map();
    for (let i = 0; i < numRows; i++) {
        myMap.set(i, []);
    }

    let flag = 0; //down
    let index = 0;
    debugger
    for (let e of str) {

        myMap.get(index).push(e);
        
        if (flag === 0) {
            index++;
        } else {
            index--;
        }        
        
        //flag
        if (index === 0) {
            flag = 0;
        } else if (index === numRows - 1) {
            flag = 1;
        }
    }

    console.log(myMap);
    

    let res = '';
    for (let row of myMap.values()) {
        res += row.join('');
    }

    return res;

};

export default () => {
    console.log(
        convert('ab', 1)
    );
}