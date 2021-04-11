const levelOrder = require('./binary-tree-level-order-traversal');
const BinaryTree = require('../../common/BinaryTree');

test('leetcode example 1', () => {
    let root = BinaryTree.fromArray([3,9,20,null,null,15,7]);
    expect(levelOrder(root)).toEqual([[3],[9,20],[15,7]]);
});

test('leetcode example 2', () => {
    expect(levelOrder(BinaryTree.fromArray([1]))).toEqual([[1]]);
});

test('leetcode example 1', () => {
    expect(levelOrder(null)).toEqual([]);
});
