function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l1 = new ListNode(1)
let l2 = new ListNode(2)
let l3 = new ListNode(3)
let l4 = new ListNode(4)

l1.next = l2
l2.next = l3
l3.next = l4

console.log(l1);
function click(){
    console.log('遍历链表');

    for(let node = l1; node != null; node = node.next) {
        console.log(node.val);
    }
}

export default click