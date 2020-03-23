/**
 * 876. 链表中间点
 * 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
 * 如果有两个中间结点，则返回第二个中间结点。
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 创建一个数组，遍历，保存所有node的引用，返回length / 2的
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let list = [head];

    while (head.next) {
        head = head.next;
        list.push(head);
    }
    console.log(list);
    return list[Math.floor(list.length / 2)];
};

/**
 * 根据官方题解，快慢指针
 * @param {ListNode} head 
 * @return {ListNode}
 */
var middleNode = function (head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let h1 = new ListNode(1);
h1.next = new ListNode(2);
h1.next.next = new ListNode(3);
h1.next.next.next = new ListNode(4);
h1.next.next.next.next = new ListNode(5);

export default {
    func: () => {
        let res = middleNode(h1);

        return `链表中间点 ${res.val}`

    },
    title: '876. 链表中间点',
    file: "leetcode_js/middleNode.js",
    leetLink: "https://leetcode-cn.com/problems/middle-of-the-linked-list/solution/fu-zhu-shu-zu-by-egerton/"
}