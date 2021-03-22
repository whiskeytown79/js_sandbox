/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    for (let i=0; i<s.length/2; i++) {
        [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
    }
}

module.exports=reverseString;
