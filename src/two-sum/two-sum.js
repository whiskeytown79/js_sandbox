/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let hash = {};
    for (let i=0; i<nums.length; i++) {
        if (hash[target - nums[i]] !== undefined) {
            return [hash[target - nums[i]], i];
        } else {
            hash[nums[i]] = i;
        }
    }
    return [0,0];
}

module.exports = twoSum;