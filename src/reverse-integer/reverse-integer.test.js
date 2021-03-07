const reverse = require('./reverse-integer');

test('leetcode example 1', () => {
    expect(reverse(123)).toBe(321);
});

test('leetcode example 2', () => {
    expect(reverse(-123)).toBe(-321);
});

test('leetcode example 3', () => {
    expect(reverse(120)).toBe(21);
});

test('leetcode example 4', () => {
    expect(reverse(0)).toBe(0);
});

test('reversed number outside range returns 0', () => {
    expect(reverse(1534236469)).toBe(0);
});

test('lots of trailing zeroes', () => {
    expect(reverse(123400000)).toBe(4321);
});

test('INT_MIN gives zero', () => {
    const INT_MIN = 0 - Math.pow(2, 31);
    expect(reverse(INT_MIN)).toBe(0);
});

test('more random examples', () => {
    expect(reverse(1010101)).toBe(1010101);
    expect(reverse(123456)).toBe(654321);
    expect(reverse(10020030)).toBe(3002001);
});