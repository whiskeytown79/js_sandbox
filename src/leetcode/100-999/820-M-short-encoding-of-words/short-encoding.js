
/**
 * @param {string[]} words
 * @return {number}
 */
function minimumLengthEncoding(words) {
    let trie = {}; // mapping of letter to children
    for (let i=0; i<words.length; i++) {
        let word = words[i];
        let node = trie;
        for (let j=word.length-1; j>=0; j--) {
            if (node[word[j]] === undefined) {
                node[word[j]] = {};
            }
            node = node[word[j]];
        }
    }

    // DFS the trie and add up depths
    let sum = 0;
    // Start with a depth of 1 to represent the '#' after encoded segments
    let stack = [[trie, 1]];
    while (stack.length > 0) {
        let so = stack.pop();
        let node = so[0];
        let depth = so[1];
        let children = Object.keys(node);
        if (children.length === 0) {
            // Leaf node
            sum += depth;
        } else {
            for (let i=0; i<children.length; i++) {
                stack.push([node[children[i]], depth+1]);
            }
        }
    }
    return sum;
}

module.exports = minimumLengthEncoding;