// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// https://leetcode.com/problems/add-two-numbers/description/

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function addTwoNumbers(l1, l2) {
    let d1 = l1;
    let d2 = l2;
    let carry = 0;
    let result = new ListNode();
    let rd = result;
    let currentSum = 0;
    let val1 = 0;
    let val2 = 0;

    while(d1 || d2) {
        val1 = d1 ? d1.val : 0;
        val2 = d2 ? d2.val : 0;
        currentSum = val1 + val2 + carry;
        rd.val = currentSum < 10 ? currentSum : currentSum - 10;
        carry = currentSum < 10 ? 0 : 1;
        d1 = d1 && d1.next ? d1.next : null;
        d2 = d2 && d2.next ? d2.next : null;
        rd.next = d1 || d2 ? new ListNode() : null;
        rd = rd.next ? rd.next : rd;
    }
    if(carry === 1) {
        rd.next = new ListNode(1);
        carry = 0;
    }
    return result;
};

let l1 = new ListNode(9);
let l2 = new ListNode(0);

console.log(addTwoNumbers(l1, l2));
console.log('smile');
