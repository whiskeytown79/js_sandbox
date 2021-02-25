const trappingRainWater = require("./trapping-rain-water");

test('example 1 from leetcode', () => {
    expect(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
});

test('example 2 from leetcode', () => {
    expect(trappingRainWater([4,2,0,3,2,5])).toBe(9);
});