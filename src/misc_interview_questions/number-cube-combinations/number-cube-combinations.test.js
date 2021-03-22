const numberCubeCombinations = require('./number-cube-combinations');

test('cube faces are [0,1,2,3,4,5] and [0,1,2,6,8,9]', () => {
    const facesA = [0,1,2,3,4,5];
    const facesB = [0,1,2,6,8,9];
    const theAnswer = [
        7,
        17,
        27,
        33, 34, 35, 37,
        43, 44, 45, 47,
        53, 54, 55, 57,
        66, 67, 68, 69,
        70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
        86, 87, 88, 89,
        96, 97, 98, 99];
    expect(numberCubeCombinations(facesA, facesB)).toStrictEqual(theAnswer);
});