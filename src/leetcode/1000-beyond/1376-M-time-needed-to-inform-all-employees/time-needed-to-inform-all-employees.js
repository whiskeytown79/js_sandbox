/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
function numOfMinutes(n, headID, manager, informTime) {
    // Subroutine to calculate the time to inform from the root (owner) down to
    // the current person. Calculates by doing DFS upwards towards the root, but
    // caches the values in the informTime[] array and resets the manager to -1 so
    // we don't process those nodes again.
    let timeToRoot = (id) => {
        if (manager[id] !== -1) {
            informTime[id] += timeToRoot(manager[id]);
            manager[id] = -1;
        }
        return informTime[id];
    };

    // Go through each person and set the inform time from that person to the
    // root of the tree (the owner).
    manager.forEach((_, id) => timeToRoot(id));

    // Return the max of the inform times we calculated
    return Math.max(...informTime);
}

module.exports=numOfMinutes;
