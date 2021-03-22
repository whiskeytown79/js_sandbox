const spiralOrder = require('./spiral-matrix');

test('leetcode example 1', () => {
    let matrix = [[1,2,3],[4,5,6],[7,8,9]];
    expect(spiralOrder(matrix)).toEqual([1,2,3,6,9,8,7,4,5]);
});

test('leetcode example 2', () => {
    let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
    expect(spiralOrder(matrix)).toEqual([1,2,3,4,8,12,11,10,9,5,6,7]);
});

test('jake and candice 4x5 example', () => {
    /*
     1   2   3   4
     5   6   7   8
     9  10  11  12
    13  14  15  16
    17  18  19  20
    */
    let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]];
    let expectedOrder = [1,2,3,4,8,12,16,20,19,18,17,13,9,5,6,7,11,15,14,10];
    expect(spiralOrder(matrix)).toEqual(expectedOrder);
});