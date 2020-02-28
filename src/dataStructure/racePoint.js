/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let results = [];
    for(let op of ops) {
        if(op === 'C') {
            results.pop();
        } else if(op === 'D'){
            results.push(results[results.length - 1] * 2);
        } else if(op === '+'){
            results.push(results[results.length - 1]  + results[results.length - 2]);
        } else {
            try {
                results.push(parseInt(op))
            } catch (error) {
                console.log('parse error');
            }
        }
    }

    let total = 0;
    for(let e of results) {
        total += e;
    }

    return total;
};

const list = ["5", "2", "C", "D", "+"];

export default () => {
    console.log(
        calPoints(list)
    );
}
