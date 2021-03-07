const myAtoi = require('./atoi');

test('leetcode example 1', () => {
    expect(myAtoi("42")).toBe(42);
});

test('leetcode example 2', () => {
    expect(myAtoi("   -42")).toBe(-42);
});

test('leetcode example 3', () => {
    expect(myAtoi("4193 with words")).toBe(4193);
});

test('leetcode example 4', () => {
    expect(myAtoi("words and 987")).toBe(0);
});

test('leetcode example 5', () => {
    expect(myAtoi("-91283472332")).toBe(-2147483648);
});

test('leetcode test case', () => {
    expect(myAtoi("21474836460")).toBe(2147483647);
})