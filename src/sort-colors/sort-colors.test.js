const sortColors = require('./sort-colors');

test('leetcode example 1', () => {
    let nums = [2,0,2,1,1,0];
    sortColors(nums);
    expect(nums).toStrictEqual([0,0,1,1,2,2]);
});

test('leetcode example 2', () => {
    let nums = [2,0,1];
    sortColors(nums);
    expect(nums).toStrictEqual([0,1,2]);
});

test('leetcode example 3', () => {
    let nums = [0];
    sortColors(nums);
    expect(nums).toStrictEqual([0]);
});

test('leetcode example 4', () => {
    let nums = [1];
    sortColors(nums);
    expect(nums).toStrictEqual([1]);
});