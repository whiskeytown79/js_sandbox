const lengthOfLongestSubstring = require('./longest-substring-without-repeating-characters');

test('leetcode example 1: "abcabcbb"', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test('leetcode example 2: "bbbbb"', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test('leetcode example 3: "pwwkew"', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test('leetcode example 4: ""', () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
});

test('leetcode test case: "tmmzuxt"', () => {
    expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5);
});

test('full alphabet', () => {
    expect(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz")).toBe(26);
});

test('numbers 0-9', () => {
    expect(lengthOfLongestSubstring("0123456789")).toBe(10);
});

test('pangram', () => {
    expect(lengthOfLongestSubstring("thequickbrownfoxjumpsoveralazydog")).toBe(14);
});