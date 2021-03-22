const TreeNode = require('./treenode');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    if (!root.left && !root.right) {
        return true;
    } else if (root.left && root.right) {
        let queue = [{a:root.left, b:root.right}];
        while (queue.length > 0) {
            let pair = queue.shift();
            if (pair.a.val !== pair.b.val) {
                return false;
            }
            if (pair.a.left && !pair.b.right ||
                pair.a.right && !pair.b.left ||
                pair.b.left && !pair.a.right ||
                pair.b.right && !pair.a.left) {
                return false;
            }
            if (pair.a.left) {
                queue.push({a:pair.a.left, b:pair.b.right});
            }
            if (pair.a.right) {
                queue.push({a:pair.a.right, b:pair.b.left});
            }
        }
        return true;
    }
    return false;
}

module.exports = isSymmetric;