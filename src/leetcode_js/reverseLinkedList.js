/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 迭代的方法
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let newHead = null;
    let temp = head;
    while (temp) {
        temp = head.next;
        head.next = newHead;
        newHead = head;
        head = temp;
    }

    return newHead;
};


/**
 * 递归的方法
 * 反向递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head == null || head.next == null)
        return head;

    let res = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return res;
};

var reverseList = (head) =>{
    // debugger
    let reverse = (pre, cur) => {
      if(!cur) return pre;
      // 保存 next 节点
      let next = cur.next;
      cur.next = pre;
      return reverse(cur, next);
    }
    return reverse(null, head);
  }

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let h1 = new ListNode(1);
h1.next = new ListNode(2);
h1.next.next = new ListNode(3);
h1.next.next.next = new ListNode(4);

export default () => {
    let old = JSON.parse(JSON.stringify(h1));
        let newH = reverseList(h1);
        console.log('old', old);
        console.log('new', newH);
}
