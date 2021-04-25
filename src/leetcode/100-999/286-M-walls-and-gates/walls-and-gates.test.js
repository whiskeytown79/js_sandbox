const wallsAndGates = require('./walls-and-gates');

const INF = 2147483647;

test('leetcode example 1', () => {
    let rooms = [[INF,-1,0,INF],[INF,INF,INF,-1],[INF,-1,INF,-1],[0,-1,INF,INF]];
    wallsAndGates(rooms);
    expect(rooms).toEqual([[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]);
});

test('leetcode example 2', () => {
    let rooms = [[0,-1],[INF,INF]];
    wallsAndGates(rooms);
    expect(rooms).toEqual([[0,-1],[1,2]]);
});
