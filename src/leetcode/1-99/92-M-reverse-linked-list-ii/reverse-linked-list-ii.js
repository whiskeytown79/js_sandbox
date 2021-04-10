/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
    // Cheese solution - use a stack to reverse the values of the nodes
    // without changing any pointers.
    let node = head;
    for (let i=1; i<left; i++) {
        node = node.next;
    }
    let stack = [];
    let start = node;
    for (let i=left; i<=right; i++) {
        stack.push(node.val);
        node = node.next;
    }
    node = start;
    while (stack.length > 0) {
        node.val = stack.pop();
        node = node.next;
    }
    return head;
}

module.exports=reverseBetween;
