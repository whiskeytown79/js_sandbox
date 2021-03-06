/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
    // Seems like dynamic programming.
    // For each node, the min total is its own value plus the minimum of the
    // two nodes beneath it.
    // So we can start from the second row from the bottom, and replace each of
    // its values with its value plus the min of the two values beneath it.
    for (let row=triangle.length - 2; row >= 0; row--) {
        for (let i=0; i<triangle[row].length; i++) {
            triangle[row][i] += Math.min(triangle[row+1][i], triangle[row+1][i+1]);
        }
    }
    return triangle[0][0];
}

module.exports = minimumTotal;