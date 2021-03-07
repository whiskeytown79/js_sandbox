const makeTree = require('./maketree');
const isSymmetric = require('./symmetric-tree');

test('leetcode example 1', () => {
    let tree = makeTree([1,2,2,3,4,4,3]);
    expect(isSymmetric(tree)).toBe(true);
});

test('leetcode example 2', () => {
    let tree = makeTree([1,2,2,null,3,null,3]);
    expect(isSymmetric(tree)).toBe(false);
});

test('leetcode test case 1', () => {
    let tree = makeTree([1, 2, 2, null, 3, 3]);
    expect(isSymmetric(tree)).toBe(true);
});

test('leetcode test case 2', () => {
    let tree = makeTree([2,3,3,4,5,5,4,null,null,8,9,9,8]);
    expect(isSymmetric(tree)).toBe(true);
});

test('leetcode test case 3', () => {
    let tree = makeTree([1]);
    expect(isSymmetric(tree)).toBe(true);
});