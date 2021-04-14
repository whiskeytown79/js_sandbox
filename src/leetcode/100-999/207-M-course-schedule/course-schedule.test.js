const canFinish = require('./course-schedule');

test('leetcode example 1', () => {
    expect(canFinish(2, [[1,0]])).toEqual(true);
});

test('leetcode example 2', () => {
    expect(canFinish(2, [[1,0],[0,1]])).toEqual(false);
});
