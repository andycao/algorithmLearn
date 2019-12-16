const min = 125730
const max = 579381

const judge = num => {
    let list = num.toString().split('')
    //有重复
    let valid = false;
    for(let i = 0; i < list.length - 1; i++){
        if(list[i] === list[i+1] && (i + 1 < 5? list[i+1] !== list[i+2] : true) &&
        (i > 0? list[i-1] !== list[i] : true)) {
            valid = true;
        }

        //never decrease
        if(list[i] > list[i+1]) {
            return false;
        }
    }
    return valid;
}

const num = 123344
console.log(num,judge(num));

const count = () => {
    let count = 0;
    for(let i = min; i <= max; i++) {
        if(judge(i)) {
            count ++
        }
    }
    return count
}

console.log(count());