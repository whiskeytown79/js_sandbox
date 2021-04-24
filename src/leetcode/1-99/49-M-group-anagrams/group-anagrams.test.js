const groupAnagrams = require('./group-anagrams');

test('leetcode example 1', () => {
    let result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
    expect(result).toIncludeSameMembers([["bat"],["nat","tan"],["ate","eat","tea"]]);
});

test('leetcode example 2', () => {
    let result = groupAnagrams([""]);
    expect(result).toEqual([[""]]);
});

test('leetcode example 3', () => {
    let result = groupAnagrams(["a"]);
    expect(result).toEqual([["a"]]);
});
