const orangesRotting = require('./rotting-oranges');

test('leetcode example 1', () => {
    let grid = [[2,1,1],[1,1,0],[0,1,1]];
    expect(orangesRotting(grid)).toEqual(4);
});

test('leetcode example 2', () => {
    let grid = [[2,1,1],[0,1,1],[1,0,1]];
    expect(orangesRotting(grid)).toEqual(-1);
});

test('leetcode example 3', () => {
    let grid = [[0,2]];
    expect(orangesRotting(grid)).toEqual(0);
});
