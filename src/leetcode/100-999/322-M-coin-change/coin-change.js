
function ccHelper(coins, amount, cache) {
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    if (cache[amount]) return cache[amount];
    let min = -1;
    for (let coin of coins) {
        let cur = ccHelper(coins, amount - coin, cache);
        if (cur !== -1) {
            if (min === -1 || cur + 1 < min) {
                min = cur + 1;
            }
        }
    }
    cache[amount] = min;
    return min;
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    return ccHelper(coins, amount, {});
}

module.exports=coinChange;