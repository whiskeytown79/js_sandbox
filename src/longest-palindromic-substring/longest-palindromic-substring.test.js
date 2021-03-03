const longestPalindrome = require('./longest-palindromic-substring');

test('leetcode example 1', () => {
    expect(longestPalindrome("babad")).toBe("bab");
});

test('leetcode example 2', () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
});

test('leetcode example 3', () => {
    expect(longestPalindrome("a")).toBe("a");
});

test('leetcode example 4', () => {
    expect(longestPalindrome("ac")).toBe("a");
});