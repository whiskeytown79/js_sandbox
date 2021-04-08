const maxDepth = require('./maximum-depth-of-binary-tree');
const BinaryTree = require('../../common/BinaryTree');

test('leetcode example 1', () => {
    let root = BinaryTree.fromArray([3,9,20,null,null,15,7]);
    expect(maxDepth(root)).toEqual(3);
});

test('leetcode example 2', () => {
    let root = BinaryTree.fromArray([1,null,2]);
    expect(maxDepth(root)).toEqual(2);
});

test('leetcode example 3', () => {
    let root = BinaryTree.fromArray([]);
    expect(maxDepth(root)).toEqual(0);
});

test('leetcode example 4', () => {
    let root = BinaryTree.fromArray([0]);
    expect(maxDepth(root)).toEqual(1);
});
