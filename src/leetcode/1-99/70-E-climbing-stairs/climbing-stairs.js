/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    let nums = { 0:1, 1:2 };
    for (let i=2; i<n; i++) {
        nums[i] = nums[i-1] + nums[i-2];
    }
    return nums[n-1];
}

module.exports = climbStairs;