const isAlienSorted = require('./verifying-an-alien-dictionary');

test('leetcode example 1', () => {
    expect(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")).toBe(true);
});

test('leetcode example 2', () => {
    expect(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")).toBe(false);
});

test('leetcode example 3', () => {
    expect(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz")).toBe(false);
});

test('leetcode test suite test 1', () => {
    expect(isAlienSorted(["kuvp","q"], "ngxlkthsjuoqcpavbfdermiywz")).toBe(true);
});

test('leetcode test suite test 2', () => {
    const words = [
        "fxasxpc","dfbdrifhp","nwzgs","cmwqriv","ebulyfyve","miracx","sxckdwzv","dtijzluhts","wwbmnge","qmjwymmyox"
    ];
    const order = "zkgwaverfimqxbnctdplsjyohu";
    expect(isAlienSorted(words, order)).toBe(false);
})