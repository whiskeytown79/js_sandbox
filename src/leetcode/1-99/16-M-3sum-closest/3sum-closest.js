/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    let bestSum = nums[0] + nums[1] + nums[2];
    let bestDelta = Math.abs(bestSum - target);
    nums.sort((a, b) => (a - b));

    for (let i=0; i<nums.length-2 && bestDelta > 0; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k && bestDelta > 0) {
            let sum = nums[i] + nums[j] + nums[k];
            let delta = Math.abs(sum - target);
            if (delta < bestDelta) {
                bestSum = sum;
                bestDelta = delta;
            } else if (sum > target) {
                k--;
            } else {
                j++;
            }
        }
    }

    return bestSum;
};

module.exports=threeSumClosest;
