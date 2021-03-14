/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    if (head.next === null) {
        return null;
    }
    let hash = {};
    let idx = 0;
    while (head) {
        hash[idx] = head;
        head = head.next;
        idx++;
    }
    let target = idx - n;
    if (target === 0) {
        return hash[1];
    }
    hash[target - 1].next = hash[target].next;
    return hash[0];
}

module.exports=removeNthFromEnd;