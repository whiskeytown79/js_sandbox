const atn = require('./add-two-numbers');
const makeList = atn.makeList;
const addTwoNumbers = atn.addTwoNumbers;

test('leetcode example 1', () => {
    const l1 = makeList([2,4,3]);
    const l2 = makeList([5,6,4]);
    const ans = makeList([7,0,8]);
    expect(addTwoNumbers(l1, l2)).toEqual(ans);
});

test('leetcode example 2', () => {
    const l1 = makeList([0]);
    const l2 = makeList([0]);
    const ans = makeList([0]);
    expect(addTwoNumbers(l1, l2)).toEqual(ans);
});

test('leetcode example 1', () => {
    const l1 = makeList([9,9,9,9,9,9,9]);
    const l2 = makeList([9,9,9,9]);
    const ans = makeList([8,9,9,9,0,0,0,1]);
    expect(addTwoNumbers(l1, l2)).toEqual(ans);
});
