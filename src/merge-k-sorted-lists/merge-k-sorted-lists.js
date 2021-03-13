function findMinList(lists) {
    let min = 0;
    for (let i=1; i<lists.length; i++) {
        if (lists[i].val < lists[min].val) {
            min = i;
        }
    }
    return min;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
    let i = 0;
    // Get rid of initially-empty lists
    while (i < lists.length) {
        if (lists[i] === null) {
            lists.splice(i, 1);
        } else {
            i++;
        }
    }

    let head = null;
    let curNode = null;
    while (lists.length > 0) {
        let minListIdx = findMinList(lists);
        let node = lists[minListIdx];
        if (node.next !== null) {
            lists[minListIdx] = node.next;
        } else {
            lists.splice(minListIdx, 1);
        }
        node.next = null;
        if (!head) {
            head = node;
            curNode = head;
        } else {
            curNode.next = node;
            curNode = node;
        }
    }
    return head;
}

module.exports=mergeKLists;