const { Node, flatten } = require('./flatten-a-multilevel-doubly-linked-list');
const LinkedList = require('../../common/LinkedList');

const nodeFactory = (val) => new Node(val);

test('leetcode example 1', () => {
    let l1 = LinkedList.makeDoublyLinkedList([1, 2, 3, 4, 5, 6], nodeFactory);
    let l2 = LinkedList.makeDoublyLinkedList([7, 8, 9, 10], nodeFactory);
    let l3 = LinkedList.makeDoublyLinkedList([11, 12], nodeFactory);
    l1.next.next.child = l2;
    l2.next.child = l3;
    let expected = LinkedList.makeDoublyLinkedList([1,2,3,7,8,11,12,9,10,4,5,6], nodeFactory);
    let result = flatten(l1);
    expect(LinkedList.areEqual(result, expected)).toBe(true);
});

test('leetcode example 2', () => {
    let l1 = LinkedList.makeDoublyLinkedList([1, 2], nodeFactory);
    let l2 = LinkedList.makeDoublyLinkedList([3], nodeFactory);
    l1.child = l2;
    let expected = LinkedList.makeDoublyLinkedList([1, 3, 2], nodeFactory);
    let result = flatten(l1);
    expect(LinkedList.areEqual(result, expected)).toBe(true);
});

test('leetcode example 3', () => {
    expect(flatten(null)).toEqual(null);
});
