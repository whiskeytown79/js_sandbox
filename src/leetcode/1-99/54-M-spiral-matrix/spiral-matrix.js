/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    let minX = 0;
    let maxX = matrix[0].length - 1;
    let minY = 0;
    let maxY = matrix.length - 1;
    let curX = 0;
    let curY = 0;
    let dir = "right";

    let isCorner = {
        "right": () => { return curX === maxX },
        "down":  () => { return curY === maxY },
        "left":  () => { return curX === minX },
        "up":    () => { return curY === minY }
    };

    let turnCorner = {
        "right": () => { dir = "down";  minY += 1; curY += 1; },
        "down":  () => { dir = "left";  maxX -= 1; curX -= 1; },
        "left":  () => { dir = "up";    maxY -= 1; curY -= 1; },
        "up":    () => { dir = "right"; minX += 1; curX += 1; }
    };

    let move = {
        "right": () => { curX += 1; },
        "down":  () => { curY += 1; },
        "left":  () => { curX -= 1; },
        "up":    () => { curY -= 1; }
    };

    let size = (maxX + 1) * (maxY + 1);
    let output = [];

    while (output.length < size) {
        output.push(matrix[curY][curX]);
        if (isCorner[dir]()) {
            turnCorner[dir]();
        } else {
            move[dir]();
        }
    }
    return output;
};

module.exports=spiralOrder;
