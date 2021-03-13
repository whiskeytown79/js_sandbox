const letterCombinations = require('./letter-combinations-of-a-phone-number');

test('leetcode example 1', () => {
    let result = letterCombinations("23");
    let expected = ["ad","ae","af","bd","be","bf","cd","ce","cf"];
    expect(new Set(result)).toEqual(new Set(expected));
});

test('leetcode example 2', () => {
    expect(letterCombinations("")).toEqual([]);
});

test('leetcode example 3', () => {
    let result = letterCombinations("2");
    let expected = ["a","b","c"];
    expect(new Set(result)).toEqual(new Set(expected));
});