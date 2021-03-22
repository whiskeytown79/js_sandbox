const isMatch = require('./regular-expression-matching');

test('leetcode example 1', () => {
    expect(isMatch("aa", "a")).toBe(false);
});

test('leetcode example 2', () => {
    expect(isMatch("aa", "a*")).toBe(true);
});

test('leetcode example 3', () => {
    expect(isMatch("ab", ".*")).toBe(true);
});

test('leetcode example 4', () => {
    expect(isMatch("aab", "c*a*b")).toBe(true);
});

test('leetcode example 5', () => {
    expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
});

test('mississippi positive', () => {
    expect(isMatch("mississippi", "mis*is*ip*i")).toBe(true);
})

test('dot-star matches anything', () => {
    expect(isMatch("", ".*")).toBe(true);
    expect(isMatch("a", ".*")).toBe(true);
    expect(isMatch("aa", ".*")).toBe(true);
    expect(isMatch("abc", ".*")).toBe(true);
    expect(isMatch("ababab", ".*")).toBe(true);
});

test('handles over-permissive patterns like dot-star dot-star', () => {
    expect(isMatch("", ".*.*")).toBe(true);
    expect(isMatch("a", ".*.*")).toBe(true);
    expect(isMatch("ab", ".*.*")).toBe(true);
    expect(isMatch("abab", ".*.*")).toBe(true);
    expect(isMatch("abaaacc", ".*.*")).toBe(true);
});

test('allow anything before', () => {
    expect(isMatch("abc", ".*abc")).toBe(true);
    expect(isMatch("abcabc", ".*abc")).toBe(true);
    expect(isMatch("defabc", ".*abc")).toBe(true);
    expect(isMatch("aaaaaaaabc", ".*abc")).toBe(true);
});

test('allow anything after', () => {
    expect(isMatch("ab", "ab.*")).toBe(true);
    expect(isMatch("abab", "ab.*")).toBe(true);
    expect(isMatch("abcdef", "ab.*")).toBe(true);
    expect(isMatch("abbbbbb", "ab.*")).toBe(true);
});

test('allow anything before and after', () => {
    expect(isMatch("abc", ".*abc.*")).toBe(true);
    expect(isMatch("abcabc", ".*abc.*")).toBe(true);
    expect(isMatch("abcabcabc", ".*abc.*")).toBe(true);
    expect(isMatch("defabcdef", ".*abc.*")).toBe(true);
    expect(isMatch("aaaabcccc", ".*abc.*")).toBe(true);
});

test('more fun with stars', () => {
    expect(isMatch("aaaaaa", "a*")).toBe(true);
    expect(isMatch("aaaaaabbbbbb", "a*")).toBe(false);
    expect(isMatch("aaaaaabbbbbb", "a*b*")).toBe(true);
    expect(isMatch("abababab", "a*b*")).toBe(false);
    expect(isMatch("b", "a*b")).toBe(true);
    expect(isMatch("ab", "a*b")).toBe(true);
    expect(isMatch("aab", "a*b")).toBe(true);
    expect(isMatch("aaab", "a*b")).toBe(true);
    expect(isMatch("a", "a*b")).toBe(false);
    expect(isMatch("acb", "a*b")).toBe(false);
});

test('more fun with dots', () => {
    expect(isMatch("acb", "a.b")).toBe(true);
    expect(isMatch("aab", "a.b")).toBe(true);
    expect(isMatch("axb", "a.b")).toBe(true);
    expect(isMatch("ab", "a.b")).toBe(false);
    expect(isMatch("acby", "a.b")).toBe(false);
    expect(isMatch("cb", "a.b")).toBe(false);
});

test('more fun with dots and stars', () => {
    expect(isMatch("by", "a*b.*y")).toBe(true);
    expect(isMatch("bly", "a*b.*y")).toBe(true);
    expect(isMatch("ably", "a*b.*y")).toBe(true);
    expect(isMatch("ablmy", "a*b.*y")).toBe(true);
    expect(isMatch("ay", "a*b.*y")).toBe(false);
    expect(isMatch("ab", "a*b.*y")).toBe(false);
});