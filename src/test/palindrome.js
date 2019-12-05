var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }

    let a = (x + '').split('')
    let b = [...a].reverse()

    return a == b
};

console.log(isPalindrome(2211));