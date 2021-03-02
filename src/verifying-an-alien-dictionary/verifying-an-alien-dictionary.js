/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function isAlienSorted(words, order) {
    let alphapos = {};
    for (let i=0; i<order.length; i++) {
        alphapos[order[i]] = i;
    }
    let a = words[0];
    let idx = 1;
    while (idx < words.length) {
        let b = words[idx];

        for (let i=0; i<a.length; i++) {
            if (alphapos[a[i]] < alphapos[b[i]]) {
                break;
            }
            if (i >= b.length || alphapos[a[i]] > alphapos[b[i]]) {
                return false;
            }
        }

        a = words[idx];
        idx += 1;
    }
    return true;
}

module.exports = isAlienSorted;