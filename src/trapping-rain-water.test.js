const trappingRainWater = require("./trapping-rain-water");

test('example 1 from leetcode', () => {
    expect(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
});

test('example 2 from leetcode', () => {
    expect(trappingRainWater([4,2,0,3,2,5])).toBe(9);
});

test('bathtub curve heights', () => {
    expect(trappingRainWater([4, 1, 1, 1, 1, 4])).toBe(12);
});

test('no valleys', () => {
    expect(trappingRainWater([1,2,3,4,3,2,1])).toBe(0);
});

test('two equal valleys', () => {
    expect(trappingRainWater([1, 3, 5, 3, 2, 5, 2, 3, 5, 3, 1])).toBe(10);
});

test('ascending valleys', () => {
    expect(trappingRainWater([1,2,3,2,3,4,3,4,5,4,5,6,5,4,3,2,1])).toBe(3);
});

test('descending valleys', () => {
    expect(trappingRainWater([1,2,3,4,5,6,5,4,5,4,3,4,3,2,3,2,1])).toBe(3);
});