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

test('single value singly-linked list equality', () => {
    let v1 = [42];
    let v2 = [42];
    let l1 = LinkedList.makeSinglyLinkedList(v1);
    let l2 = LinkedList.makeSinglyLinkedList(v2);
    expect(LinkedList.areEqual(l1, l2)).toBe(true);
});

test('single value doubly-linked list equality', () => {
    let v1 = [42];
    let v2 = [42];
    let l1 = LinkedList.makeDoublyLinkedList(v1);
    let l2 = LinkedList.makeDoublyLinkedList(v2);
    expect(LinkedList.areEqual(l1, l2)).toBe(true);
});

test('single value singly-linked list inequality', () => {
    let v1 = [42];
    let v2 = [43];
    let l1 = LinkedList.makeSinglyLinkedList(v1);
    let l2 = LinkedList.makeSinglyLinkedList(v2);
    expect(LinkedList.areEqual(l1, l2)).toBe(false);
});

test('single value doubly-linked list inequality', () => {
    let v1 = [42];
    let v2 = [43];
    let l1 = LinkedList.makeDoublyLinkedList(v1);
    let l2 = LinkedList.makeDoublyLinkedList(v2);
    expect(LinkedList.areEqual(l1, l2)).toBe(false);
});

test('multi-value singly-linked list equality', () => {
    let v1 = [1, 2, 3, 7, 8, 9];
    let v2 = [1, 2, 3, 7, 8, 9];
    let l1 = LinkedList.makeSinglyLinkedList(v1);
    let l2 = LinkedList.makeSinglyLinkedList(v2);
    expect(LinkedList.areEqual(l1, l2)).toBe(true);
});

test('multi-value doubly-linked list equality', () => {
    let v1 = [1, 2, 3, 7, 8, 9];
    let v2 = [1, 2, 3, 7, 8, 9];
    let l1 = LinkedList.makeDoublyLinkedList(v1);
    let l2 = LinkedList.makeDoublyLinkedList(v2);
    expect(LinkedList.areEqual(l1, l2)).toBe(true);
});

test('multi-value singly-linked list inequality', () => {
    let v1 = [1, 2, 3, 7, 8, 9];
    let v2 = [1, 2, 3, 7, 7, 7];
    let l1 = LinkedList.makeSinglyLinkedList(v1);
    let l2 = LinkedList.makeSinglyLinkedList(v2);
    expect(LinkedList.areEqual(l1, l2)).toBe(false);
});

test('multi-value doubly-linked list inequality', () => {
    let v1 = [1, 2, 3, 7, 8, 9];
    let v2 = [1, 2, 3, 7, 7, 7];
    let l1 = LinkedList.makeDoublyLinkedList(v1);
    let l2 = LinkedList.makeDoublyLinkedList(v2);
    expect(LinkedList.areEqual(l1, l2)).toBe(false);
});

test('uneven lengths singly-linked list inequality', () => {
    let v1 = [1, 2, 3];
    let v2 = [1, 2, 3, 4];
    let l1 = LinkedList.makeSinglyLinkedList(v1);
    let l2 = LinkedList.makeSinglyLinkedList(v2);
    expect(LinkedList.areEqual(l1, l2)).toBe(false);
});

test('uneven lengths doubly-linked list inequality', () => {
    let v1 = [1, 2, 3];
    let v2 = [1, 2, 3, 4];
    let l1 = LinkedList.makeDoublyLinkedList(v1);
    let l2 = LinkedList.makeDoublyLinkedList(v2);
    expect(LinkedList.areEqual(l1, l2)).toBe(false);
});

test('tostring singly-linked single value', () => {
    let list = LinkedList.makeSinglyLinkedList([42]);
    expect(list.toString()).toEqual("singly-linked list ( 42 )");
});

test('tostring doubly-linked single value', () => {
    let list = LinkedList.makeDoublyLinkedList([42]);
    expect(list.toString()).toEqual("doubly-linked list ( 42 )");
});

test('tostring singly-linked list', () => {
    let list = LinkedList.makeSinglyLinkedList([1,2,3,4,5]);
    expect(list.toString()).toEqual('singly-linked list ( 1 -> 2 -> 3 -> 4 -> 5 )');
});

test('tostring doubly-linked list', () => {
    let list = LinkedList.makeDoublyLinkedList([1,2,3,4,5]);
    expect(list.toString()).toEqual('doubly-linked list ( 1 <-> 2 <-> 3 <-> 4 <-> 5 )');
});

test('toEqualList expect extension with equal lists', () => {
    let l1 = LinkedList.makeSinglyLinkedList([1,2,3]);
    let l2 = LinkedList.makeSinglyLinkedList([1,2,3]);
    expect(l1).toEqualList(l2);
});

test('toEqualList expect extension with unequal lists', () => {
    let l1 = LinkedList.makeSinglyLinkedList([1,2,3]);
    let l2 = LinkedList.makeSinglyLinkedList([1,2,3,4]);
    expect(l1).not.toEqualList(l2);
});