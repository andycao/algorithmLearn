function ListNode(val) {
    this.val = val;
    this.next = null;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

//两两转换位置
var swapPairs = function (head) {
    if (head && head.next) {
        let next = head.next;
        head.next = swapPairs(next.next);
        next.next = head
        return next;
    } else {
        return head
    }
};

// 1->2->3->4->5->NULL
// 1->2->3->4<-5
// 1->2->3<-4<-5
let reverseList = function (head) {
    let newhead = null;
    let oldhead = head;

    while (oldhead) {
        //swap and set new head
        let temp = oldhead.next;
        oldhead.next = newhead;
        newhead = oldhead;
        oldhead = temp;
    }

    return newhead;
}


let recursiveReverseList = function (head) {
    if(head == null || head.next == null) {
        return head;
    } else {
        let p = recursiveReverseList(head.next)
        head.next.next = head;
        head.next = null;
        return p
    }
}

let a = recursiveReverseList(head);
console.log(a);

