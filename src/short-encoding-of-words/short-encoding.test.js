const minimumLengthEncoding = require('./short-encoding');

test('leetcode example 1', () => {
    let words = ["time", "me", "bell"];
    expect(minimumLengthEncoding(words)).toBe(10);
});

test('leetcode example 2', () => {
    let words = ["t"];
    expect(minimumLengthEncoding(words)).toBe(2);
});

test('leetcode test case 1', () => {
    let words = ["me", "time"];
    expect(minimumLengthEncoding(words)).toBe(5);
});