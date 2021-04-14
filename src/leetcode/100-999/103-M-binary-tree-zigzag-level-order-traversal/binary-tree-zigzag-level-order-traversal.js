function levelOrder(root) {
    let output = [];
    let queue = [];
    if (root) {
        queue.push([1, root]);
        output.push([]);
    }
    let currLevel = 1;
    while (queue.length > 0) {
        let ln = queue.shift();
        let level = ln[0], node = ln[1];
        if (level !== currLevel) {
            currLevel = level;
            output.push([]);
        }
        output[output.length-1].push(node.val);
        if (node.left) {
            queue.push([level+1, node.left]);
        }
        if (node.right) {
            queue.push([level+1, node.right]);
        }
    }
    return output;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
    let output = levelOrder(root);
    for (let i=1; i<output.length; i+=2) {
        output[i].reverse();
    }
    return output;
}

module.exports=zigzagLevelOrder;
