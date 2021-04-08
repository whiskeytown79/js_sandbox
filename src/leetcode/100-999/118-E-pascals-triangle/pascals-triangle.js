/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    if (numRows === 1) {
        return [[1]];
    } else if (numRows === 2) {
        return [[1], [1,1]];
    }
    let prev = generate(numRows-1);
    let above = prev[prev.length - 1];
    let output = [1];
    for (let i=0; i<above.length-1; i++) {
        output.push(above[i] + above[i+1]);
    }
    output.push(1);
    prev.push(output);
    return prev;
}

module.exports=generate;
