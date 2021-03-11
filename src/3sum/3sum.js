/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a,b) => (a-b));
    let triplets = [];
    let seen = {};

    for (let i=0; i<nums.length-2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                let triplet = [nums[i], nums[j], nums[k]].sort();
                if (!seen[triplet.toString()]) {
                    seen[triplet.toString()] = true;
                    triplets.push(triplet);
                }
                k--;
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }

    return triplets;
}

module.exports=threeSum;