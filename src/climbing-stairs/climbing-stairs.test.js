const climbingStairs = require('./climbing-stairs');

test('leetcode example 1', () => {
    expect(climbingStairs(2)).toBe(2);
});

test('leetcode example 3', () => {
    expect(climbingStairs(3)).toBe(3);
});

test('all nums from 1 to 45', () => {
    expect(climbingStairs(1)).toBe(1);
    expect(climbingStairs(2)).toBe(2);
    expect(climbingStairs(3)).toBe(3);
    expect(climbingStairs(4)).toBe(5);
    expect(climbingStairs(5)).toBe(8);
    expect(climbingStairs(6)).toBe(13);
    expect(climbingStairs(7)).toBe(21);
    expect(climbingStairs(8)).toBe(34);
    expect(climbingStairs(9)).toBe(55);
    expect(climbingStairs(10)).toBe(89);
    expect(climbingStairs(11)).toBe(144);
    expect(climbingStairs(12)).toBe(233);
    expect(climbingStairs(13)).toBe(377);
    expect(climbingStairs(14)).toBe(610);
    expect(climbingStairs(15)).toBe(987);
    expect(climbingStairs(16)).toBe(1597);
    expect(climbingStairs(17)).toBe(2584);
    expect(climbingStairs(18)).toBe(4181);
    expect(climbingStairs(19)).toBe(6765);
    expect(climbingStairs(20)).toBe(10946);
    expect(climbingStairs(21)).toBe(17711);
    expect(climbingStairs(22)).toBe(28657);
    expect(climbingStairs(23)).toBe(46368);
    expect(climbingStairs(24)).toBe(75025);
    expect(climbingStairs(25)).toBe(121393);
    expect(climbingStairs(26)).toBe(196418);
    expect(climbingStairs(27)).toBe(317811);
    expect(climbingStairs(28)).toBe(514229);
    expect(climbingStairs(29)).toBe(832040);
    expect(climbingStairs(30)).toBe(1346269);
    expect(climbingStairs(31)).toBe(2178309);
    expect(climbingStairs(32)).toBe(3524578);
    expect(climbingStairs(33)).toBe(5702887);
    expect(climbingStairs(34)).toBe(9227465);
    expect(climbingStairs(35)).toBe(14930352);
    expect(climbingStairs(36)).toBe(24157817);
    expect(climbingStairs(37)).toBe(39088169);
    expect(climbingStairs(38)).toBe(63245986);
    expect(climbingStairs(39)).toBe(102334155);
    expect(climbingStairs(40)).toBe(165580141);
    expect(climbingStairs(41)).toBe(267914296);
    expect(climbingStairs(42)).toBe(433494437);
    expect(climbingStairs(43)).toBe(701408733);
    expect(climbingStairs(44)).toBe(1134903170);
    expect(climbingStairs(45)).toBe(1836311903);
});