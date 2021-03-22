const intersection = require('./intersection-of-two-arrays');

test('leetcode example 1', () => {
    let output = intersection([1,2,2,1], [2,2]);
    expect(output.sort()).toEqual([2]);
});

test('leetcode example 2', () => {
    let output = intersection([4,9,5], [9,4,9,8,4]);
    expect(output.sort()).toEqual([4,9]);
});
