const threeSum = require('./3sum');

test('leetcode example 1', () => {
    let input = [-1,0,1,2,-1,-4];
    let output = threeSum(input);
    expect(output.length).toBe(2);
    expect(new Set(output)).toEqual(new Set([[-1,-1,2],[-1,0,1]]));
});

test('leetcode example 2', () => {
    expect(threeSum([])).toEqual([]);
});

test('leetcode example 3', () => {
    expect(threeSum([0])).toEqual([]);
});

test('big input array with lots of duplicates', () => {
    let input = new Array(3000);
    for (let i=0; i<1000; i++) {
        input[i] = 0;
    }
    for (let i=1000; i<2000; i++) {
        input[i] = 1;
    }
    for (let i=2000; i<3000; i++) {
        input[i] = -1;
    }
    expect(new Set(threeSum(input))).toEqual(new Set([[0,0,0],[-1,0,1]]));
});