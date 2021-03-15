const LinkedList = require('../common/LinkedList');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function swapNodes(head, k) {
    let dummy = LinkedList.makeSinglyLinkedList([-1]); // new ListNode(-1); // for Leetcode
    dummy.next = head;

    let prev1 = dummy;
    let prev2 = dummy;
    let curr = dummy;

    for (let i=1; i<k; i++) {
        prev1 = prev1.next;
        curr = curr.next;
    }
    curr = curr.next;

    while (curr.next) {
        prev2 = prev2.next;
        curr = curr.next;
    }

    if (prev1.next === prev2) {
        // Special case where nodes to swap are adjacent
        let n2 = prev2.next;
        prev2.next = n2.next;
        n2.next = prev1.next;
        prev1.next = n2;
    } else if (prev2.next === prev1) {
        // Special case where nodes to swap are adjacent
        let n1 = prev1.next;
        prev1.next = n1.next;
        n1.next = prev2.next;
        prev2.next = n1;
    } else {
        // Normal case
        let n1 = prev1.next;
        let n2 = prev2.next;
        let next1 = n1.next;
        let next2 = n2.next;
        prev1.next = n2;
        n2.next = next1;
        prev2.next = n1;
        n1.next = next2;
    }

    return dummy.next;
}

module.exports=swapNodes;