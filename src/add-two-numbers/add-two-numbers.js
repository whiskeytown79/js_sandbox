/**
 * Definition for singly-linked list
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * Makes a singly linked list out of the given array of digits
 * @param {int[]} digits
 * @return {ListNode}
 */
function makeList(digits) {
    if (digits.length < 1) {
        return undefined;
    }
    let list = new ListNode(digits[0], undefined);
    let node = list;
    let idx = 1;
    while (idx < digits.length) {
        node.next = new ListNode(digits[idx], undefined);
        node = node.next;
        idx++;
    }
    return list;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let sum = l1.val + l2.val;
    l1 = l1.next;
    l2 = l2.next;
    let carry = Math.floor(sum / 10);
    let answer = new ListNode(sum % 10);
    let node = answer;
    while (l1 || l2 || carry > 0) {
        sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        node.next = new ListNode(sum % 10);
        node = node.next;
    }
    return answer;
}

exports.ListNode = ListNode;
exports.makeList = makeList;
exports.addTwoNumbers = addTwoNumbers;