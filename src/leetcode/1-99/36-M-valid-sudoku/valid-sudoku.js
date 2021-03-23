/**
 * @param {string[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    let rowHash = {};
    let colHash = {};
    let gridHash = {};
    for (let i=0; i<9; i++) {
        rowHash[i] = {};
        colHash[i] = {};
        gridHash[i] = {};
    }

    for (let i=0; i<9; i++) {
        for (let j=0; j<9; j++) {
            let n = board[i][j];
            if (n === '.') continue;
            if (rowHash[i][n]) return false;
            rowHash[i][n] = true;
            if (colHash[j][n]) return false;
            colHash[j][n] = true;
            let gridIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (gridHash[gridIdx][n]) return false;
            gridHash[gridIdx][n] = true;
        }
    }

    return true;
}

module.exports=isValidSudoku;
