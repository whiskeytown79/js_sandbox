const LinkedList = require('../../common/LinkedList');
const swapNodes = require('./swapping-nodes-in-a-linked-list');

test('leetcode example 1', () => {
    /*
    Input: head = [1,2,3,4,5], k = 2
    Output: [1,4,3,2,5]
     */
    let input = LinkedList.makeSinglyLinkedList([1,2,3,4,5]);
    let output = swapNodes(input, 2);
    let expected = LinkedList.makeSinglyLinkedList([1,4,3,2,5]);
    expect(output).toEqualList(expected);
});

test('leetcode example 2', () => {
    /*
    Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
    Output: [7,9,6,6,8,7,3,0,9,5]
     */
    let input = LinkedList.makeSinglyLinkedList([7,9,6,6,7,8,3,0,9,5]);
    let output = swapNodes(input, 5);
    let expected = LinkedList.makeSinglyLinkedList([7,9,6,6,8,7,3,0,9,5]);
    expect(output).toEqualList(expected);
});

test('leetcode example 3', () => {
    /*
    Input: head = [1], k = 1
    Output: [1]
     */
    let input = LinkedList.makeSinglyLinkedList([1]);
    let output = swapNodes(input, 1);
    let expected = LinkedList.makeSinglyLinkedList([1]);
    expect(output).toEqualList(expected);
});

test('leetcode example 4', () => {
    /*
    Input: head = [1,2], k = 1
    Output: [2,1]
     */
    let input = LinkedList.makeSinglyLinkedList([1,2]);
    let output = swapNodes(input, 1);
    let expected = LinkedList.makeSinglyLinkedList([2,1]);
    expect(output).toEqualList(expected);
});

test('k is beyond the midpoint', () => {
    /*
    Input: head = [1,2,3,4,5,6,7,8,9], k = 7
    Outut: [1,2,7,4,5,6,3,8,9]
     */
    let input = LinkedList.makeSinglyLinkedList([1,2,3,4,5,6,7,8,9]);
    let output = swapNodes(input, 7);
    let expected = LinkedList.makeSinglyLinkedList([1,2,7,4,5,6,3,8,9]);
    expect(output).toEqualList(expected);
});

test('k is listsize so we swap head and tail', () => {
    /*
    Input: head = [1,2,3,4,5], k = 5
    Output: [5,2,3,4,1]
     */
    let input = LinkedList.makeSinglyLinkedList([1,2,3,4,5]);
    let output = swapNodes(input, 5);
    let expected = LinkedList.makeSinglyLinkedList([5,2,3,4,1]);
    expect(output).toEqualList(expected);
});

test('leetcode example 5', () => {
    /*
    Input: head = [1,2,3], k = 2
    Output: [1,2,3]
     */
    let input = LinkedList.makeSinglyLinkedList([1,2,3]);
    let output = swapNodes(input, 2);
    let expected = LinkedList.makeSinglyLinkedList([1,2,3]);
    expect(output).toEqualList(expected);
})

test('leetcode test case [100,90], 2', () => {
    let input = LinkedList.makeSinglyLinkedList([100,90]);
    let output = swapNodes(input, 2);
    let expected = LinkedList.makeSinglyLinkedList([90,100]);
    expect(output).toEqualList(expected);
});
