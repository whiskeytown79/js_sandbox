/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
    const lowerLimit = -2147483648;
    const upperLimit = 2147483647;
    const digits = { "0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9 };

    let result = 0;
    let neg = false;
    let idx = 0;

    // Consume leading whitespace
    while (idx < s.length && s[idx] === ' ') {
        idx++;
    }

    // Consume + or -, store 'neg' flag if - found.
    if (idx < s.length && s[idx] === '-') {
        neg = true;
        idx++;
    } else if (idx < s.length && s[idx] === '+') {
        idx++;
    }

    // Consume digits and convert to integer
    while (idx < s.length && digits[s[idx]] !== undefined) {
        result *= 10;
        result += digits[s[idx]];
        idx++;
    }

    // Apply negative if needed
    if (neg) {
        result *= -1;
    }

    // Clamp to signed 32-bit range
    if (result < lowerLimit) {
        result = lowerLimit;
    } else if (result > upperLimit) {
        result = upperLimit;
    }

    return result;
}

module.exports = myAtoi;