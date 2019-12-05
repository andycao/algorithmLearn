let list = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function(nums) {
    let temp = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === temp) {
            nums.splice(i, 1)
            i--
        } else {
            temp = nums[i]
        }
    }
    return nums.length
};


console.log(removeDuplicates(list), list);