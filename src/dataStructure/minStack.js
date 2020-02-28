/**
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。
示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 * 
 * 手写一个最小栈
 * 
 * initialize your data structure here.
 */
var MinStack = function() {
    this.list = [];
    this.min = Number.MAX_SAFE_INTEGER;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.list[this.list.length] = x
    if(x < this.min) {
        this.min = x;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    //list
    const out = this.list[this.list.length - 1];
    this.list.length -= 1; 

    //min
    if(out > this.min) {
        //nothing
    } else {
        //重新找到最小值
        this.min = Number.MAX_SAFE_INTEGER;
        for(let e of this.list) {
            if(e < this.min) {
                this.min = e;
            }
        }
    }
    return out;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.list[this.list.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
obj.push(5)
obj.push(6)
obj.pop()
console.log(obj);
var param_3 = obj.top()
var param_4 = obj.getMin()

console.log(param_3, param_4);