const maxArea = require('./container-with-most-water');

test('leetcode example 1', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
});

test('leetcode example 2', () => {
    expect(maxArea([1,1])).toBe(1);
});

test('leetcode example 3', () => {
    expect(maxArea([4,3,2,1,4])).toBe(16);
});

test('leetcode example 4', () => {
    expect(maxArea([1,2,1])).toBe(2);
});

test('leetcode test case with zero height', () => {
    expect(maxArea([0,2])).toBe(0);
})