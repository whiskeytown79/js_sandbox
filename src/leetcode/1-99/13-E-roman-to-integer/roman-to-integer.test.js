const romanToInt = require('./roman-to-integer');

test('leetcode example 1', () => {
    expect(romanToInt("III")).toBe(3);
});

test('leetcode example 1', () => {
    expect(romanToInt("IV")).toBe(4);
});

test('leetcode example 1', () => {
    expect(romanToInt("IX")).toBe(9);
});

test('leetcode example 1', () => {
    expect(romanToInt("LVIII")).toBe(58);
});

test('leetcode example 1', () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
});