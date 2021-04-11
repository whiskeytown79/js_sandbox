const numDecodings = require('./decode-ways');

test('leetcode example 1', () => {
    expect(numDecodings("12")).toEqual(2);
});

test('leetcode example 2', () => {
    expect(numDecodings("226")).toEqual(3);
});

test('leetcode example 3', () => {
    expect(numDecodings("0")).toEqual(0);
});

test('leetcode example 4', () => {
    expect(numDecodings("06")).toEqual(0);
});

test('leetcode test case 1', () => {
    expect(numDecodings("10")).toEqual(1);
});

test('leetcode test case 2', () => {
    expect(numDecodings("99")).toEqual(1);
});

test('leetcode test case 3', () => {
    expect(numDecodings("1201234")).toEqual(3);
});

test('leetcode test case 4', () => {
    expect(numDecodings("123123")).toEqual(9);
})
