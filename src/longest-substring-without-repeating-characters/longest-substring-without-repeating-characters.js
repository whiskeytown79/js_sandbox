/*
Idea:
Use two pointers representing the start and end of the current substring.
Advance the end pointer, adding characters to a hash while they don't exist and
keeping track of the substring and its length.
Once a character repeats, advance the start pointer until it's past the repeated
character. Keep substring updated and length.
Update max substring and length found if exceeds previous.
 */

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let hash = {};
    let curLength = 0;

    while (end < s.length) {
        let c = s[end];
        if (hash[c] === undefined) {
            curLength += 1;
            if ((curLength) > maxLength) {
                maxLength = curLength;
            }
        } else {
            while (start <= hash[c]) {
                delete hash[s[start]];
                start += 1;
            }
            curLength = end - start + 1;
        }
        hash[c] = end;
        end += 1;
    }

    return maxLength;
}

module.exports = lengthOfLongestSubstring;