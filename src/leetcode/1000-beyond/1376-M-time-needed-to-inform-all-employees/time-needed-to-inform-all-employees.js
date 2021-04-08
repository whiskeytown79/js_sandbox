function dfs(adjacency, currIdx, visit) {
    let node = adjacency[currIdx];
    let values = [];
    for (let i=0; i<node.length; i++) {
        values.push(dfs(adjacency, node[i], visit));
    }
    return visit(currIdx, values);
}

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
function numOfMinutes(n, headID, manager, informTime) {
    if (manager.length === 1) {
        return informTime[0];
    }
    let reports = Array.from({length: manager.length}, () => []);
    for (let i=0; i<manager.length; i++) {
        if (manager[i] === -1) continue;
        reports[manager[i]].push(i);
    }
    return dfs(reports, headID, (currIdx, vals) => {
        let result = informTime[currIdx];
        if (vals.length > 0) {
            result += Math.max(...vals);
        }
        return result;
    });
}

module.exports=numOfMinutes;
