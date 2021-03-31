const calculate = require('./basic-calculator');

test('leetcode example 1', () => {
    expect(calculate("1 + 1")).toEqual(2);
});

test('leetcode example 2', () => {
    expect(calculate("2-1 + 2")).toEqual(3);
});

test('leetcode example 3', () => {
    expect(calculate("(1+(4+5+2)-3)+(6+8)")).toEqual(23);
});

test('leetcode test case 1', () => {
    expect(calculate("-2+ 1")).toEqual(-1);
});

test('leetcode test case 2', () => {
    expect(calculate("- (3 + (4 + 5))")).toEqual(-12);
});

test('leetcode test case 3', () => {
    expect(calculate("(7)-(0)+(4)")).toEqual(11);
})
