class Graph {
    constructor(vertexCount) {
        this.vertexCount = vertexCount;
        this.adjacency = new Array(vertexCount);
        for (let i=0; i<vertexCount; i++) {
            this.adjacency[i] = new Array();
        }
    }
    addEdge(v1, v2) {
        this.adjacency[v1].push(v2);
    }
    hasCycle() {
        let adjacency = this.adjacency;
        // DFS using a pair of tracking arrays. Visited keeps track of nodes I've
        // checked overall, and stack keeps track of the nodes I'm traversing during
        // the DFS. E.g. if two graphs edges take me to the same node, that is different
        // invocations of stack[i], but visited[i] will be true after the first visit and
        // if stack[i] is false at that point, i can shortcut my logic and not keep DFSing
        // from there.
        let hasCycleHelper = function(i, visited, stack) {
            if (stack[i]) {
                return true;
            }
            if (visited[i]) {
                return false;
            }
            visited[i] = true;
            stack[i] = true;
            for (let vertex of adjacency[i]) {
                if (hasCycleHelper(vertex, visited, stack)) {
                    return true;
                }
            }
            stack[i] = false;
            return false;
        };
        let visited = new Array(this.vertexCount).fill(false);
        let stack = new Array(this.vertexCount).fill(false);
        for (let i=0; i<this.vertexCount; i++) {
            if (hasCycleHelper(i, visited, stack)) {
                return true;
            }
        }
        return false;
    }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
    let graph = new Graph(numCourses);
    for (let edge of prerequisites) {
        graph.addEdge(edge[0], edge[1]);
    }
    return !graph.hasCycle();
}

module.exports=canFinish;
