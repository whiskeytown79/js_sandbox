const zigzagLevelOrder = require('./binary-tree-zigzag-level-order-traversal');
const BinaryTree = require('../../common/BinaryTree');

test('leetcode example 1', () => {
    let root = BinaryTree.fromArray([3,9,20,null,null,15,7]);
    expect(zigzagLevelOrder(root)).toEqual([[3],[20,9],[15,7]]);
});

test('leetcode example 2', () => {
    let root = BinaryTree.fromArray([1]);
    expect(zigzagLevelOrder(root)).toEqual([[1]]);
});

test('leetcode example 3', () => {
    let root = null
    expect(zigzagLevelOrder(root)).toEqual([]);
});

test('leetcode test case 1', () => {
    let root = BinaryTree.fromArray([1,2,3,4,null,null,5]);
    expect(zigzagLevelOrder(root)).toEqual([[1],[3,2],[4,5]]);
});
