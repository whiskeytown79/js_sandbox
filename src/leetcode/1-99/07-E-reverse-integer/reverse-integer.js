/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    let neg = false;
    if (x < 0) {
        x *= -1;
        neg = true;
    }
    let ans = 0;
    while (x !== 0) {
        let digit = x % 10;
        if (ans > 214748364 || ans === 214748364 && digit > 7) {
            return 0;
        }
        ans *= 10;
        if (ans || digit) {
            ans = ans + digit;
        }
        x = Math.floor(x / 10);
    }
    if (neg) {
        ans *= -1;
    }
    return ans;
}

module.exports = reverse;