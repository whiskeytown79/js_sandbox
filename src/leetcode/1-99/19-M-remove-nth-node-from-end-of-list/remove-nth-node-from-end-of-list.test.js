const LinkedList = require('../../common/LinkedList');
const removeNthFromEnd = require('./remove-nth-node-from-end-of-list');

test('leetcode example 1', () => {
    let input = LinkedList.makeSinglyLinkedList([1,2,3,4,5]);
    let output = removeNthFromEnd(input, 2);
    let expected = LinkedList.makeSinglyLinkedList([1,2,3,5]);
    expect(LinkedList.areEqual(output, expected)).toBe(true);
});

test('leetcode example 2', () => {
    let input = LinkedList.makeSinglyLinkedList([1]);
    let output = removeNthFromEnd(input, 1);
    expect(output).toBeNull();
});

test('leetcode example 3', () => {
    let input = LinkedList.makeSinglyLinkedList([1,2]);
    let output = removeNthFromEnd(input, 1);
    let expected = LinkedList.makeSinglyLinkedList([1]);
    expect(LinkedList.areEqual(output, expected)).toBe(true);
});

test('leetcode test case 1', () => {
    let input = LinkedList.makeSinglyLinkedList([1,2]);
    let output = removeNthFromEnd(input, 2);
    let expected = LinkedList.makeSinglyLinkedList([2]);
    expect(LinkedList.areEqual(output, expected)).toBe(true);
});
