/**
 * Return the minimum amount of time to reach from node k in a network of size n to every other
 * node along edges weighted according to the set of [u,v,w] weights in the array times.
 *
 * This solution uses a slightly simplified Bellman-Ford algorithm. The simplification is in not
 * worrying about negative-weight cycles since we're guaranteed that w is >= 0 for each edge in
 * the input graph.
 *
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function networkDelayTime(times, n, k) {
    // Do n+1 so we can 1-index the array
    let distance = new Array(n+1).fill(Number.POSITIVE_INFINITY);

    // The distance to the start node is zero.
    distance[k] = 0;

    // Iterate N-1 times. This is because the longest path possible from the start node
    // to another node is N-1 (if the graph is basically a linked list).
    for (let i=0; i<n-1; i++) {
        // For each edge, update the destination distance if it's less. This will ensure that
        // after N-1 iterations, the distance to node v is minimal from start node k.
        for (let [u, v, w] of times) {
            if (distance[u] + w < distance[v]) {
                distance[v] = distance[u] + w;
            }
        }
    }

    // Find the max. Any nodes left with a distance of infinity were not reachable
    // from the start node and thus we should return -1.
    let max = Math.max(...distance.slice(1)); // ignore first element since we are 1-indexed
    return max === Number.POSITIVE_INFINITY? -1 : max;
}

module.exports=networkDelayTime;
