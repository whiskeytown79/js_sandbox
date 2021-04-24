/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
    let output = [];
    let queue = [];
    let last = undefined;
    if (root) {
        queue.push([1,root]);
        last = root.val;
    }
    let level = 1;
    while (queue.length > 0) {
        let ln = queue.shift();
        if (ln[0] !== level) {
            output.push(last);
            level = ln[0];
        }
        if (ln[1].left) {
            queue.push([ln[0]+1, ln[1].left]);
        }
        if (ln[1].right) {
            queue.push([ln[0]+1, ln[1].right]);
        }
        last = ln[1].val;
    }
    if (last !== undefined) {
        output.push(last);
    }
    return output;
}

module.exports=rightSideView;
