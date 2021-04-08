const numOfMinutes = require('./time-needed-to-inform-all-employees');

test('leetcode example 1', () => {
    expect(numOfMinutes(1, 0,
        [-1],
        [0])).toEqual(0);
});

test('leetcode example 2', () => {
    expect(numOfMinutes(6, 2,
        [2,2,-1,2,2,2],
        [0,0,1,0,0,0])).toEqual(1);
});

test('leetcode example 3', () => {
    expect(numOfMinutes(7, 6,
        [1,2,3,4,5,6,-1],
        [0,6,5,4,3,2,1])).toEqual(21);
});

test('leetcode example 4', () => {
    expect(numOfMinutes(15, 0,
        [-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6],
        [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0])).toEqual(3);
});

test('leetcode example 5', () => {
    expect(numOfMinutes(4, 2,
        [3,3,-1,2],
        [0,0,162,914])).toEqual(1076);
});
