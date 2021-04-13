/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
    let totalFresh = 0;
    let queue = [];
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] === 1) {
                totalFresh++;
            } else if (grid[i][j] === 2) {
                queue.push([j,i,1]);
            }
        }
    }
    if (totalFresh === 0) return 0;
    let totalMins = 0;
    while (queue.length > 0 && totalFresh > 0) {
        let orange = queue.shift();
        let mins = orange[2];
        if (mins > totalMins) {
            totalMins = mins;
        }
        let x = orange[0], y = orange[1];
        if (x > 0 && grid[y][x-1] === 1) {
            grid[y][x-1] = 2;
            queue.push([x-1,y,mins+1]);
            totalFresh--;
        }
        if (x < grid[y].length - 1 && grid[y][x+1] === 1) {
            grid[y][x+1] = 2;
            queue.push([x+1,y,mins+1]);
            totalFresh--;
        }
        if (y > 0 && grid[y-1][x] === 1) {
            grid[y-1][x] = 2;
            queue.push([x,y-1,mins+1]);
            totalFresh--;
        }
        if (y < grid.length - 1 && grid[y+1][x] === 1) {
            grid[y+1][x] = 2;
            queue.push([x,y+1,mins+1]);
            totalFresh--;
        }
    }
    return totalFresh > 0? -1 : totalMins;
}

module.exports=orangesRotting;
