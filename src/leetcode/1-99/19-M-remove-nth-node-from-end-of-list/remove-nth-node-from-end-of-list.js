function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    if (!head.next) {
        return null;
    }
    let preHead = new ListNode(-1, head);
    let preNode = preHead;
    let x = head;
    while (--n) {
        x = x.next;
    }
    while (x.next != null) {
        x = x.next;
        preNode = preNode.next;
    }
    preNode.next = preNode.next.next;
    return preHead.next;
}

module.exports=removeNthFromEnd;
