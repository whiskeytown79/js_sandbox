const countAndSay = require('./count-and-say');

test('leetcode example 1', () => {
    expect(countAndSay(1)).toEqual("1");
});

test('leetcode example 2', () => {
    expect(countAndSay(4)).toEqual("1211");
});
