/**
 * 155. 最小栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.minIndex = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    if (this.minIndex === null) {
        this.minIndex = 0;
    } else {
        if (x < this.stack[this.minIndex]) {
            this.minIndex = this.stack.length - 1;
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.minIndex === this.stack.length - 1) {
        let ren = this.stack.pop();
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < this.stack.length; i++) {
            if (this.stack[i] < min) {
                this.minIndex = i;
                min = this.stack[i];
            }
        }
        return ren;
    } else {
        return this.stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[this.minIndex];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
export default {
    func: () => {
        window.open("https://leetcode-cn.com/submissions/detail/70297784/");
    },
    title: `155. 最小栈`,
    file: "leetcode_js/minStack.js",
    leetLink: "https://leetcode-cn.com/submissions/detail/70297784/",
};
