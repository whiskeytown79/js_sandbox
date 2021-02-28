function firstMissingPositive(nums) {
    let hash = {};
    for (let i in nums) {
        if (nums[i] > 0) {
            hash[nums[i]] = 1;
        }
    }
    let i = 1;
    let max = Object.keys(hash).length;
    while (i <= max && hash[i]) {
        i++
    }
    return i;
}

module.exports = firstMissingPositive;