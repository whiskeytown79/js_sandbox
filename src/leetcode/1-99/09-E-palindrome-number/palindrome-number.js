/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    if (x < 0) return false; // no negative numbers are palindromes
    if (x < 10) return true; // all single-digit numbers are palindromes
    let s = x.toString();
    for (let i=0; i<s.length/2; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
}

module.exports=isPalindrome;
