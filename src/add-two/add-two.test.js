const addTwo = require('./add-two');

test('adds 1 + 2 to equal 3', () => {
    expect(addTwo(1, 2)).toBe(3);
})