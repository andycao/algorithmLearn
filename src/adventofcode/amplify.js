//day 7 Amplification Circuit
let list = [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 38, 55, 72, 93, 118, 199, 280, 361, 442, 99999, 3, 9, 1001, 9, 2, 9, 1002, 9, 5, 9, 101, 4, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 3, 9, 1001, 9, 5, 9, 1002, 9, 4, 9, 4, 9, 99, 3, 9, 101, 4, 9, 9, 1002, 9, 3, 9, 1001, 9, 4, 9, 4, 9, 99, 3, 9, 1002, 9, 4, 9, 1001, 9, 4, 9, 102, 5, 9, 9, 1001, 9, 4, 9, 4, 9, 99, 3, 9, 101, 3, 9, 9, 1002, 9, 3, 9, 1001, 9, 3, 9, 102, 5, 9, 9, 101, 4, 9, 9, 4, 9, 99, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 99, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 99, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 99]

const calcThrust = (settings, input) => {

    const amplifier = (list, input1, input2) => {
        //记录输出值
        let output = ''
        const process = (list, index) => {
            let opcode = list[index] + '';
            opcode = opcode.padStart(4, '0');
            const opsign = opcode.substr(2, 2);
            const mode1 = opcode.substr(1, 1);
            const mode2 = opcode.substr(0, 1);

            if (opsign === '01') {
                //add
                let a;
                if (mode1 === '0') {
                    a = list[list[index + 1]];
                } else {
                    a = list[index + 1]
                }

                let b;
                if (mode2 === '0') {
                    b = list[list[index + 2]];
                } else {
                    b = list[index + 2]
                }

                list[list[index + 3]] = a + b

                return index + 4
            } else if (opsign === '02') {
                //times
                let a;
                if (mode1 === '0') {
                    a = list[list[index + 1]];
                } else {
                    a = list[index + 1]
                }

                let b;
                if (mode2 === '0') {
                    b = list[list[index + 2]];
                } else {
                    b = list[index + 2]
                }

                list[list[index + 3]] = a * b

                return index + 4
            } else if (opsign === '03') {
                //input
                if (index === 0) {
                    list[list[index + 1]] = input1;
                } else {
                    list[list[index + 1]] = input2;
                }
                return index + 2
            } else if (opsign === '04') {
                //output
                output = list[list[index + 1]]
                return index + 2
            } else if (opsign === '99') {
                //exit
                return false;
            } else if (opsign === '05') {
                //jump if true
                let a;
                if (mode1 === '0') {
                    a = list[list[index + 1]];
                } else {
                    a = list[index + 1]
                }

                let b;
                if (mode2 === '0') {
                    b = list[list[index + 2]];
                } else {
                    b = list[index + 2]
                }

                if (a == 0) {
                    return index + 3
                } else {
                    return b
                }
            } else if (opsign === '06') {
                //jump if false
                let a;
                if (mode1 === '0') {
                    a = list[list[index + 1]];
                } else {
                    a = list[index + 1]
                }

                let b;
                if (mode2 === '0') {
                    b = list[list[index + 2]];
                } else {
                    b = list[index + 2]
                }

                if (a == 0) {
                    return b
                } else {
                    return index + 3
                }
            } else if (opsign === '07') {
                //less than
                let a;
                if (mode1 === '0') {
                    a = list[list[index + 1]];
                } else {
                    a = list[index + 1]
                }

                let b;
                if (mode2 === '0') {
                    b = list[list[index + 2]];
                } else {
                    b = list[index + 2]
                }

                list[list[index + 3]] = a < b ? 1 : 0

                return index + 4
            } else if (opsign === '08') {
                //equals
                let a;
                if (mode1 === '0') {
                    a = list[list[index + 1]];
                } else {
                    a = list[index + 1]
                }

                let b;
                if (mode2 === '0') {
                    b = list[list[index + 2]];
                } else {
                    b = list[index + 2]
                }

                list[list[index + 3]] = a === b ? 1 : 0

                return index + 4
            } else {
                console.log('ai error');
                return false;
            }
        }

        let index = process(list, input)

        while (index) {
            index = process(list, index)
        }

        return output
    }

    let output = 0

    for (let setting of settings) {
        output = amplifier(list, setting, output)
    }

    return output
}

//js 实现全排列
let settings = []
let a = [0, 1, 2, 3, 4];

//swap用来交换数组a中的两个元素
function swap(a, p, q) {
    var t = a[p];
    a[p] = a[q];
    a[q] = t;
}

//全排列函数pai，在数组a中，对p位置到q位置之间的元素进行全排列
function pai(a, p, q) {
    if (p == q) {
        settings.push([...a]);
    } //一个数的全排列就是自己，输出自己
    else {
        for (var i = p; i < q; i++) {
            swap(a, i, p); //把 a 中的每个元素都作一次头元素
            pai(a, p + 1, q); //对头元素后的数据再次递归实现全排列
            swap(a, i, p); //排完之后要换回来，防止重复排列
        }
    }

}
const part1 = () => {

    pai(a, 0, a.length);
    
    let max = Number.MIN_SAFE_INTEGER;
    for(let ele of settings) {
        let cal = calcThrust(ele, 0);
        if(cal > max) max = cal;
    }
    console.log(max);
}
// part1();
//part1 368584


//part2
list = [3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5]

const process = () => {
    let output = 0;
    let setting = [9,8,7,6,5]
    
    while(output < 1396297291) {
        output = calcThrust(setting, output);
        console.log(output);
    }
}

process()