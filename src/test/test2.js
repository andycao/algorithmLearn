var generate = function (numRows) {
    let list = [];
    for(let i = 0; i < numRows; i++) {
        list.push((numRows - 1, i))
    }

    return list;
};

function f(i, j) {
    if (i === 0) {
        if (j === 0)
            return 1;
        else
            return 0;
    }
    if (i === 1 && j === 0) {
        return 1;
    }
    return f(i - 1, j - 1) + f(i - 1, j)
}

//array
function row(num) {
    let list = [];
    for(let i = 0; i < num; i++) {
        list.push(f(num - 1, i))
    }

    return list;
}