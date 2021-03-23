function checkNums(row) {
    let hash = {};
    for (let col=0; col<row.length; col++) {
        if (row[col] === '.') continue;
        let num = parseInt(row[col]);
        if (num < 1 || num > 9) return false;
        if (hash[num]) return false;
        hash[num] = true;
    }
    return true;
}


/**
 * @param {string[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    // Check rows
    for (let row=0; row<board.length; row++) {
        if (!checkNums(board[row])) {
            return false;
        }
    }

    // Check cols
    for (let col=0; col<board[0].length; col++) {
        if (!checkNums(board.map(x => x[col]))) {
            return false;
        }
    }

    // Check 3x3 subgrids
    for (let row=0; row<board.length; row += 3) {
        for (let col=0; col<board[0].length; col += 3) {
            if (!checkNums([
                board[row][col], board[row][col+1], board[row][col+2],
                board[row+1][col], board[row+1][col+1], board[row+1][col+2],
                board[row+2][col], board[row+2][col+1], board[row+2][col+2]
            ])) {
                return false;
            }
        }
    }

    return true;
}

module.exports=isValidSudoku;
