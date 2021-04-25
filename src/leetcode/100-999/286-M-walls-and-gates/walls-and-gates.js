/**
 * Populate rooms with distance to nearest gate.
 *
 * -1 is a wall
 * 0 is a gate
 * 2^32 - 1 is an empty room
 *
 * @param {number[][]} rooms M x N 2d grid
 */
function wallsAndGates(rooms) {
    let queue = [];
    for (let i=0; i<rooms.length; i++) {
        for (let j=0; j<rooms[i].length; j++) {
            if (rooms[i][j] === 0) {
                queue.push([i,j,1]);
            }
        }
    }
    while (queue.length > 0) {
        let ijd = queue.shift();
        let i = ijd[0], j = ijd[1], d = ijd[2];
        // North
        if (i > 0 && d < rooms[i-1][j]) {
            rooms[i-1][j] = d;
            queue.push([i-1,j,d+1]);
        }
        // South
        if (i < rooms.length - 1 && d < rooms[i+1][j]) {
            rooms[i+1][j] = d;
            queue.push([i+1,j,d+1]);
        }
        // East
        if (j < rooms[i].length - 1 && d < rooms[i][j+1]) {
            rooms[i][j+1] = d;
            queue.push([i,j+1,d+1]);
        }
        // West
        if (j > 0 && d < rooms[i][j-1]) {
            rooms[i][j-1] = d;
            queue.push([i,j-1,d+1]);
        }
    }
}

module.exports=wallsAndGates;
