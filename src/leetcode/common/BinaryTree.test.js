const BinaryTree = require('./BinaryTree');

test('empty input gives undefined tree root', () => {
    expect(BinaryTree.fromArray([])).toBeUndefined();
});

test('single value input gives single tree node with no children', () => {
    let tree = BinaryTree.fromArray([42]);
    expect(tree).toBeDefined();
    expect(tree.val).toBe(42);
    expect(tree.left).toBeNull();
    expect(tree.right).toBeNull();
});

test('simple three element tree', () => {
    let tree = BinaryTree.fromArray([1, 2, 3]);
    expect(tree).toBeDefined();
    expect(tree.val).toBe(1);
    expect(tree.left).toBeDefined();
    expect(tree.left.val).toBe(2);
    expect(tree.left.left).toBeNull();
    expect(tree.left.right).toBeNull();
    expect(tree.right).toBeDefined();
    expect(tree.right.val).toBe(3);
    expect(tree.right.left).toBeNull();
    expect(tree.right.right).toBeNull();
});

/*
 [ 1, 2, 3, null, 4, null, 5 ]
             1
            / \
           2   3
            \   \
             4   5
 */
test('tree with depth 2 and two null elements', () => {
    let tree = BinaryTree.fromArray([1,2,3,null,4,null,5]);
    expect(tree).toBeDefined();
    expect(tree.val).toBe(1);
    expect(tree.left).toBeDefined();
    expect(tree.left.val).toBe(2);
    expect(tree.left.left).toBeNull();
    expect(tree.left.right).toBeDefined();
    expect(tree.left.right.val).toBe(4);
    expect(tree.right).toBeDefined();
    expect(tree.right.val).toBe(3);
    expect(tree.right.left).toBeNull();
    expect(tree.right.right).toBeDefined();
    expect(tree.right.right.val).toBe(5);
});

test('just left subtree exists', () => {
    let tree = BinaryTree.fromArray([1, 2, null, 3, 4]);
    expect(tree).toBeDefined();
    expect(tree.left).toBeDefined();
    expect(tree.right).toBeNull();
    expect(tree.left.left).toBeDefined();
    expect(tree.left.right).toBeDefined();
});

test('just right subtree exists', () => {
    let tree = BinaryTree.fromArray([1, null, 2, null, null, 3, 4]);
    expect(tree).toBeDefined();
    expect(tree.left).toBeNull();
    expect(tree.right).toBeDefined();
    expect(tree.right.left).toBeDefined();
    expect(tree.right.right).toBeDefined();
});
