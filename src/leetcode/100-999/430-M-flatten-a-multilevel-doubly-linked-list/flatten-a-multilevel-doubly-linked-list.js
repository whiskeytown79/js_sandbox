/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

function Node(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
}


/**
 * @param {Node} head
 * @return {Node}
 */
function flatten(head) {
    let node = head;
    while (node) {
        let next = node.next;
        if (node.child) {
            let subHead = flatten(node.child);
            node.child = null;
            let subTail = subHead;
            while (subTail.next) {
                subTail = subTail.next;
            }
            subHead.prev = node;
            node.next = subHead;
            if (next) {
                next.prev = subTail;
                subTail.next = next;
            }
        }
        node = next;
    }
    return head;
}

module.exports = {
    Node: Node,
    flatten: flatten,
};
