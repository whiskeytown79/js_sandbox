/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    if (!root) return 0;
    let left = root.left? maxDepth(root.left) : 0;
    let right = root.right? maxDepth(root.right) : 0;
    return Math.max(left + 1, right + 1);
}

module.exports=maxDepth;
