const generate = require('./pascals-triangle');

test('leetcode example 1', () => {
    expect(generate(5)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
});

test('leetcode example 2', () => {
    expect(generate(1)).toEqual([[1]]);
});
