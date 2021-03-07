const isPalindrome = require('./palindrome-number');

test('leetcode example 1', () => {
    expect(isPalindrome(121)).toBe(true);
});

test('leetcode example 2', () => {
    expect(isPalindrome(-121)).toBe(false);
});

test('leetcode example 3', () => {
    expect(isPalindrome(10)).toBe(false);
});

test('leetcode example 4', () => {
    expect(isPalindrome(-101)).toBe(false);
});

test('single digits are palindromes', () => {
    expect(isPalindrome(0)).toBe(true);
    expect(isPalindrome(1)).toBe(true);
    expect(isPalindrome(2)).toBe(true);
    expect(isPalindrome(3)).toBe(true);
    expect(isPalindrome(4)).toBe(true);
    expect(isPalindrome(5)).toBe(true);
    expect(isPalindrome(6)).toBe(true);
    expect(isPalindrome(7)).toBe(true);
    expect(isPalindrome(8)).toBe(true);
    expect(isPalindrome(9)).toBe(true);
});

test('negative numbers are not palindromes', () => {
    expect(isPalindrome(-1)).toBe(false);
    expect(isPalindrome(-22)).toBe(false);
    expect(isPalindrome(-12321)).toBe(false);
});

test('some more positive test cases', () => {
    expect(isPalindrome(11)).toBe(true);
    expect(isPalindrome(12321)).toBe(true);
    expect(isPalindrome(146641)).toBe(true);
});