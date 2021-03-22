/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
    let table = new Array(s.length + 1);
    for (let i=0; i<s.length+1; i++) {
        table[i] = new Array(p.length + 1);
    }

    // Empty string and empty pattern will match
    table[0][0] = true;

    // Fill initial row: empty string, nonempty pattern. All false unless we happen to have
    // a pattern like a*b* where we could potentially have a zero length string match.
    for (let i=0; i<p.length; i++) {
        if (p[i] === '*') {
            table[0][i+1] = table[0][i-1];
        } else {
            table[0][i+1] = false;
        }
    }

    // Fill initial column: empty pattern, nonempty string. This can never match.
    for (let i=0; i<s.length; i++) {
        table[i+1][0] = false;
    }

    // Fill rest of table.
    for (let sIdx=0; sIdx<s.length; sIdx++) {
        let tRow = sIdx + 1;
        for (let pIdx=0; pIdx<p.length; pIdx++) {
            let tCol = pIdx + 1;
            if (s[sIdx] === p[pIdx] || p[pIdx] === '.') {
                // If the current character of the string matches the current character of the
                // pattern, then whether we've matched up to this point just depends on whether we
                // had matched up to the previous character in both the string and the pattern.
                table[tRow][tCol] = table[tRow-1][tCol-1];
            } else if (p[pIdx] === '*') {
                // Otherwise if the current character is a star, we have two possibilities.
                if (s[sIdx] === p[pIdx-1] || p[pIdx-1] === '.') {
                    // If the previous string character and previous regex character match, or the
                    // previous regex character is a dot, then we can consider both including and
                    // not including the current character of the string. But not including the
                    // current character of the string only works if we matched up to the current
                    // character minus the most recent star sequence of the regex.
                    table[tRow][tCol] = table[tRow-1][tCol] || table[tRow][tCol-2];
                } else {
                    // If the previous character doesnt match, then we can only match up to this
                    // point if we consider the current star seqeunce to be zero-width, so its
                    // equivalent to the same string and two positions earlier in the regex.
                    table[tRow][tCol] = table[tRow][tCol-2];
                }
            } else {
                // If none of the above applies, then this is not a match up to this point in the
                // string and the regex.
                table[tRow][tCol] = false;
            }
        }
    }

    // We match only if the final character of the string and the final character of the regex have
    // been calculated as a match.
    return table[s.length][p.length];
}

module.exports=isMatch;
