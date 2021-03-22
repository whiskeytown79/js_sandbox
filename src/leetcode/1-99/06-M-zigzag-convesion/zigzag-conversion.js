/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    /*
     * This approach creates the solution by reading the characters from the input string
     * in the order they appear for each row. The number of indexes to skip between adjacent
     * characters depends on whether we are zigging down (in which case it's based on the
     * number of rows below our current row) or zigging up (in which case it's based on the
     * number of rows above our current row).
     */
    let row = 0;
    let ans = "";
    while (row < numRows) {
        let remainingRows = numRows - row - 1;
        let precedingRows = row;
        let goingDown = remainingRows !== 0;
        let index = row;
        while (index < s.length) {
            ans = ans + s[index];
            if (goingDown) {
                if (remainingRows > 0) {
                    index = index + remainingRows * 2 - 1;
                }
                if (precedingRows > 0) {
                    goingDown = false;
                }
            } else {
                if (precedingRows > 0) {
                    index = index + precedingRows * 2 - 1;
                }
                if (remainingRows > 0) {
                    goingDown = true;
                }
            }
            index = index + 1;
        }
        row += 1;
    }
    return ans;
}

module.exports = convert;