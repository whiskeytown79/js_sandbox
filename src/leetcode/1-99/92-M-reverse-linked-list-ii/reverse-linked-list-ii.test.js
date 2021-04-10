const reverseBetween = require('./reverse-linked-list-ii');
const LinkedList = require('../../common/LinkedList');

test('leetcode example 1', () => {
    let head = LinkedList.makeSinglyLinkedList([1,2,3,4,5]);
    let result = reverseBetween(head, 2, 4);
    let expected = LinkedList.makeSinglyLinkedList([1,4,3,2,5]);
    expect(LinkedList.areEqual(result, expected));
});

test('leetcode example 2', () => {
    let head = LinkedList.makeSinglyLinkedList([5]);
    let result = reverseBetween(head, 1, 1);
    let expected = LinkedList.makeSinglyLinkedList([5]);
    expect(LinkedList.areEqual(result, expected));
});
