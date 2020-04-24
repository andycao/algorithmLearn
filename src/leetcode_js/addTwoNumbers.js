/**
 * 445. 两数相加 II
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 把两个linkedlist 转换为栈，倒叙计算，生成新的linkedList
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];

    while(l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while(l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    const len1 = stack1.length;
    const len2 = stack2.length;
    let pre = new ListNode();
    for(let i = 1, add = 0, len = Math.max(len1, len2);i <= len || add === 1; i++ ) {
        const a = stack1.length > 0? stack1.pop() : 0;
        const b = stack2.length > 0? stack2.pop() : 0;

        const num = a + b + add;
        add = num >= 10 ? 1 : 0;
        let tmp = new ListNode(num % 10);
        tmp.next = pre.next;
        pre.next = tmp;
    }
    return pre.next;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

let h1 = new ListNode(1);

let h2 = new ListNode(9);
h2.next = new ListNode(9);

const title = "445. 两数相加 II"
export default {
    func: () => {
        const res = addTwoNumbers(h1, h2);
        console.log(res);

        return `${title}: ${res}`
    },
    title: title,
    file: "leetcode_js/addTwoNumbers.js",
    leetLink: 'https://leetcode-cn.com/problems/add-two-numbers-ii/solution/zhan-dao-xu-by-egerton/'
}