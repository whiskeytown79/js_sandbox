const LinkedList = require('../common/LinkedList');
const mergeKLists = require('./merge-k-sorted-lists');

function makeLists(arrays) {
    let output = [];
    for (let array of arrays) {
        if (array.length > 0) {
            output.push(LinkedList.makeSinglyLinkedList(array));
        }
    }
    return output;
}

function compareAnswer(list, values) {
    let idx = 0;
    while (list) {
        if (list.val !== values[idx]) {
            return false;
        }
        list = list.next;
        idx++;
    }
    return idx === values.length;
}

test('makeLists with empty array gives empty array', () => {
    expect(makeLists([])).toEqual([]);
});

test('makeLists with array of empty array gives empty array', () => {
    expect(makeLists([[]])).toEqual([]);
});

test('leetcode example 1', () => {
    let lists = makeLists([[1,4,5],[1,3,4],[2,6]]);
    let result = mergeKLists(lists);
    expect(compareAnswer(result, [1,1,2,3,4,4,5,6])).toBeTruthy();
});

test('leetcode example 2', () => {
    let lists = makeLists([]);
    let result = mergeKLists(lists);
    expect(compareAnswer(result, [])).toBeTruthy();
});

test('leetcode example 3', () => {
    let lists = makeLists([[]]);
    let result = mergeKLists(lists);
    expect(compareAnswer(result, [])).toBeTruthy();
});