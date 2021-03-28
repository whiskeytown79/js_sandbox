class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

class BinaryTree {
    /**
     * Returns the root of a tree constructed from the given input numbers.
     * The input is an array representing a binary tree in level order, using
     * null to represent a missing node.
     *
     * @param nums
     * @return {TreeNode}
     */
    static fromArray(nums) {
        if (nums.length === 0) {
            return undefined;
        }
        let root = new TreeNode(nums[0]);
        let queue = [];
        queue.push(root);
        let i = 1;
        while (queue.length > 0) {
            let node = queue.shift();
            if (i < nums.length && nums[i] !== null) {
                node.left = new TreeNode(nums[i]);
                queue.push(node.left);
            }
            if (i+1 < nums.length && nums[i+1] !== null) {
                node.right = new TreeNode(nums[i + 1]);
                queue.push(node.right);
            }
            i += 2;
        }
        return root;
    }
}

module.exports = BinaryTree;
