const longestCommonPrefix = require('./longest-common-prefix');

test('leetcode example 1', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
});

test('leetcode example 2', () => {
    expect(longestCommonPrefix(["dog","racecar","car"])).toBe("")
});

test('all same words', () => {
    expect(longestCommonPrefix(["rabbits", "rabbits", "rabbits"])).toBe("rabbits");
});

test('no input words', () => {
    expect(longestCommonPrefix([])).toBe("");
});

test('single input word', () => {
    expect(longestCommonPrefix(["a"])).toBe("a");
    expect(longestCommonPrefix(["abcdefg"])).toBe("abcdefg");
});

test("empty input word exists", () => {
    expect(longestCommonPrefix(["empty", "input", "word", ""])).toBe("");
});