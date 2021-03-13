const coinChange = require('./coin-change');

test('leetcode example 1', () => {
    expect(coinChange([1,2,5], 11)).toBe(3);
});

test('leetcode example 2', () => {
    expect(coinChange([2], 3)).toBe(-1);
});

test('leetcode example 3', () => {
    expect(coinChange([1], 0)).toBe(0);
});

test('leetcode example 4', () => {
    expect(coinChange([1], 1)).toBe(1);
});

test('leetcode example 5', () => {
    expect(coinChange([1], 2)).toBe(2);
});

test('leetcode test case 1', () => {
    expect(coinChange([186,419,83,408], 6249)).toBe(20);
})