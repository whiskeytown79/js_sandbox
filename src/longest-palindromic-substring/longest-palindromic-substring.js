/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let longest = s[0];

    // Initialize table that records whether a given pair of start and end points represents
    // a palindrome. When the start and end point are the same, we initialize the value as
    // true, as all one-letter substrings are inherently palindromes.
    let table = [];
    for (let i=0; i<s.length; i++) {
        table.push([]);
        for (let j=0; j<s.length; j++) {
            table[i].push(i === j);
        }
    }

    let maxLength = 1;

    // Find two-character palindromes.
    for (let i=0; i<s.length-1; i++) {
        if (s[i] === s[i+1]) {
            table[i][i+1] = true;
            maxLength = 2;
            if (longest.length === 1) {
                longest = s.substr(i, 2);
            }
        }
    }

    // Starting with length 3 up to the length of the string, go through the string and check
    // substrings of that length to see if they are a palindrome.
    for (let len=3; len<=s.length; len++) {
        for (let i=0; i<s.length - len + 1; i++) {
            let j = i + len - 1;
            if (s[i] === s[j] && table[i+1][j-1]) {
                table[i][j] = true;
                if (len > maxLength) {
                    maxLength = len;
                    longest = s.substr(i, len);
                }
            }
        }
    }

    return longest;
}

module.exports = longestPalindrome;