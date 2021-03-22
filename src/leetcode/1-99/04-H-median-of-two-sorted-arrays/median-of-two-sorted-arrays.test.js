const findMedianSortedArrays = require('./median-of-two-sorted-arrays');

test('leetcode example 1', () => {
    expect(findMedianSortedArrays([1,3], [2])).toBeCloseTo(2);
});

test('leetcode example 2', () => {
    expect(findMedianSortedArrays([1,2], [3,4])).toBeCloseTo(2.5);
});

test('leetcode example 3', () => {
    expect(findMedianSortedArrays([0,0], [0,0])).toBeCloseTo(0);
});

test('leetcode example 4', () => {
    expect(findMedianSortedArrays([], [1])).toBeCloseTo(1);
});

test('leetcode example 5', () => {
    expect(findMedianSortedArrays([2], [])).toBeCloseTo(2);
});

test('zip merge example', () => {
    expect(findMedianSortedArrays([1,3,5,7,9],[2,4,6,8,10])).toBeCloseTo(5.5);
})

test('widely spaced tail', () => {
    expect(findMedianSortedArrays([1,2,5], [3,4,100])).toBeCloseTo(3.5);
})