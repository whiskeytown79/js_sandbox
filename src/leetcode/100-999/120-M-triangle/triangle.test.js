const minimumTotal = require('./triangle');

test('leetcode example 1', () => {
    expect(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])).toBe(11);
});

test('leetcode example 2', () => {
    expect(minimumTotal([[-10]])).toBe(-10);
});