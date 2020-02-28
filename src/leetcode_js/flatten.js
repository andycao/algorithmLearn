// const flatten = function (array) {
//     let result = [];
//     for(let e of array) {
//         if(Array.isArray(e)) {
//             result.push(...flatten(e))
//         } else {
//             result.push(e)
//         }
//     }
//     return result;
// }

const flatten = function (array) {
    return array.reduce(
        (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), 
        [])
}

export default () => {
    console.log(
        flatten([1,2,3,[4, 5, 6, [7, 8]]])
    );
}

