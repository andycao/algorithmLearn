import { link, linkSync } from "fs";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l1 = new ListNode(1)
l1.next = new ListNode(2)

let l2 = new ListNode(2)
l2.next = new ListNode(3)
l2.next.next = new ListNode(9)
var addTwoNumbers = function (l1, l2) {

    let out = new ListNode();

    let cur = out;
    let l1cur = l1;
    let l2cur = l2;

    let process = 0;
    // debugger
    while(l1cur || l2cur || process) {

        let sum = process
        if(l1cur) sum += l1cur.val
        if(l2cur) sum += l2cur.val
        cur.val = sum % 10;
        process = Math.floor(sum / 10)

        if(l1cur) l1cur = l1cur.next;
        if(l2cur) l2cur = l2cur.next;
        if((l1cur || l2cur || process)) {

            cur.next = new ListNode(0)
            cur = cur.next;
        }
    }

    return out;
};

console.log(addTwoNumbers(l1, l2));