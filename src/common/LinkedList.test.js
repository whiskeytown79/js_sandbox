const LinkedList = require('./LinkedList');

test('null input yields null output', () => {
    expect(LinkedList.makeSinglyLinkedList(null)).toBeNull();
    expect(LinkedList.makeDoublyLinkedList(null)).toBeNull();
});

test('empty input yields null output', () => {
    expect(LinkedList.makeSinglyLinkedList([])).toBeNull();
    expect(LinkedList.makeDoublyLinkedList([])).toBeNull();
});

test('single element singly linked list of numbers', () => {
    let nums = [42];
    let list = LinkedList.makeSinglyLinkedList(nums);
    expect(list).toBeDefined();
    expect(list.val).toEqual(nums[0]);
    expect(list.next).toBeNull();
    expect(list.prev).toBeUndefined();
});

test('single element singly linked list of strings', () => {
    let strs = ["hello, world"];
    let list = LinkedList.makeSinglyLinkedList(strs);
    expect(list).toBeDefined();
    expect(list.val).toEqual(strs[0]);
    expect(list.next).toBeNull();
    expect(list.prev).toBeUndefined();
});

test('single element doubly linked list of numbers', () => {
    let nums = [42];
    let list = LinkedList.makeDoublyLinkedList(nums);
    expect(list).toBeDefined();
    expect(list.val).toEqual(nums[0]);
    expect(list.next).toBeNull();
    expect(list.prev).toBeNull();
});

test('single element doubly linked list of strings', () => {
    let strs = ["hello, world"];
    let list = LinkedList.makeDoublyLinkedList(strs);
    expect(list).toBeDefined();
    expect(list.val).toEqual(strs[0]);
    expect(list.next).toBeNull();
    expect(list.prev).toBeNull();
});

test('three element singly-linked list', () => {
    let values = [1, "two", new Set([3])];
    let list = LinkedList.makeSinglyLinkedList(values);
    expect(list).toBeDefined();
    let first = list;
    expect(first.val).toEqual(values[0]);
    expect(first.prev).toBeUndefined();
    expect(first.next).toBeDefined();
    let second = first.next;
    expect(second.val).toEqual(values[1]);
    expect(second.prev).toBeUndefined();
    expect(second.next).toBeDefined();
    let third = second.next;
    expect(third.val).toEqual(values[2]);
    expect(third.prev).toBeUndefined();
    expect(third.next).toBeNull();
});

test('three element doubly-linked list', () => {
    let values = [1, "two", new Set([3])];
    let list = LinkedList.makeDoublyLinkedList(values);
    expect(list).toBeDefined();
    let first = list;
    expect(first.val).toEqual(values[0]);
    expect(first.prev).toBeNull();
    expect(first.next).toBeDefined();
    let second = first.next;
    expect(second.val).toEqual(values[1]);
    expect(second.prev).toBe(first);
    expect(second.next).toBeDefined();
    let third = second.next;
    expect(third.val).toEqual(values[2]);
    expect(third.prev).toBe(second);
    expect(third.next).toBeNull();
});