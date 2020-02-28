/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    nums.sort((a, b) => a - b);
    let start = nums.length - k >= 0? nums.length - k : 0
    this.nums = nums.slice(start)
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    let {nums, k} = this;

    if(this.nums.length < this.k) {
        this.nums.push(val);
        this.nums.sort((a, b) => a - b);
        return this.nums[0];
    } else if(val <= nums[0]) {
        return nums[0]
    } else {
        nums[0] = val;
        nums.sort((a, b) => a - b);
        let start = nums.length - k >= 0? nums.length - k : 0
        this.nums = nums.slice(start)
        return nums[0];
    }
};  

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
export default () => {
    let k = 3
    let nums = [5, -1]

    var obj = new KthLargest(k, nums)
    var param_1 = obj.add(2)
    var param_2 = obj.add(1)
    var param_3 = obj.add(-1)
    var param_4 = obj.add(3)
    var param_5 = obj.add(4)

    console.log(param_1, param_2, param_3, param_4, param_5);

}