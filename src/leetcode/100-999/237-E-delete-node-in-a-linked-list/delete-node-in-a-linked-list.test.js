const deleteNode = require('./delete-node-in-a-linked-list');
const LinkedList = require('../../common/LinkedList');

test('leetcode example 1', () => {
    let ll = LinkedList.makeSinglyLinkedList([4,5,1,9]);
    let node = ll.next;
    let output = deleteNode(node);
    let expected = LinkedList.makeSinglyLinkedList([4,1,9]);
    expect(ll).toEqualList(expected);
});

test('leetcode example 2', () => {
    let ll = LinkedList.makeSinglyLinkedList([4,5,1,9]);
    let node = ll.next.next;
    let output = deleteNode(node);
    let expected = LinkedList.makeSinglyLinkedList([4,5,9]);
    expect(ll).toEqualList(expected);
});

test('leetcode example 3', () => {
    let ll = LinkedList.makeSinglyLinkedList([1,2,3,4]);
    let node = ll.next.next;
    let output = deleteNode(node);
    let expected = LinkedList.makeSinglyLinkedList([1,2,4]);
    expect(ll).toEqualList(expected);
});

test('leetcode example 4', () => {
    let ll = LinkedList.makeSinglyLinkedList([0,1]);
    let node = ll;
    ll = ll.next;
    let output = deleteNode(node);
    let expected = LinkedList.makeSinglyLinkedList([1]);
    expect(ll).toEqualList(expected);
});

test('leetcode example 5', () => {
    let ll = LinkedList.makeSinglyLinkedList([-3,5,-99]);
    let node = ll;
    ll = ll.next;
    let output = deleteNode(node);
    let expected = LinkedList.makeSinglyLinkedList([5,-99]);
    expect(ll).toEqualList(expected);
});
