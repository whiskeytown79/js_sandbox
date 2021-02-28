const firstMissingPositive = require('./first-missing-positive');

test('one element examples', () => {
    expect(firstMissingPositive([1])).toBe(2);
    expect(firstMissingPositive([2])).toBe(1);
    expect(firstMissingPositive([0])).toBe(1);
    expect(firstMissingPositive([-1])).toBe(1);
});

test('contiguous input elements', () => {
    expect(firstMissingPositive([1,2,3,4,5])).toBe(6);
    expect(firstMissingPositive([4,2,5,1,3])).toBe(6);
    expect(firstMissingPositive([-3,-2,-1,0,1,2,3])).toBe(4);
    expect(firstMissingPositive([2,0,3,-1,-3,1,-2])).toBe(4);
    expect(firstMissingPositive([-5,-4,-3,-2,-1])).toBe(1);
    expect(firstMissingPositive([-4,-5,-1,-3,-2])).toBe(1);
});

test('additional sequences', () => {
    expect(firstMissingPositive([-10, 14, 7, 21, -42, 8, -3, 3, 2, 1])).toBe(4);
    expect(firstMissingPositive([1, 3, 17, 47, 81])).toBe(2);
    expect(firstMissingPositive([1, -1, 2, -2, 3, -3])).toBe(4);
    expect(firstMissingPositive([2, 3, 4, 5])).toBe(1);
    expect(firstMissingPositive([1, 2, 3, 4, 5, 7, 8, 9, 10])).toBe(6);
});