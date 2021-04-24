const rightSideView = require('./binary-tree-right-side-view');
const BinaryTree = require('../../common/BinaryTree');


test('leetcode example 1', () => {
    let root = BinaryTree.fromArray([1,2,3,null,5,null,4]);
    expect(rightSideView(root)).toEqual([1,3,4]);
});

test('leetcode example 2', () => {
    let root = BinaryTree.fromArray([1,null,3]);
    expect(rightSideView(root)).toEqual([1,3]);
});

test('leetcode example 3', () => {
    expect(rightSideView(null)).toEqual([]);
});
