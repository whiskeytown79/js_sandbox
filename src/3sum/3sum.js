/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    let triplets = [];
    let set = {}
    let seen = {};
    for (let i=0; i<nums.length; i++) {
        if (!set[nums[i]]) {
            set[nums[i]] = i;
        }
    }
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            let pairSumTarget = 0 - (nums[i] + nums[j]);
            let index = set[pairSumTarget];
            if (index && index !== i && index !== j) {
                let triplet = [nums[i], nums[j], pairSumTarget].sort();
                if (!seen[triplet.toString()]) {
                    console.log("Match: " + triplet);
                    seen[triplet.toString()] = true;
                    triplets.push(triplet);
                }
            }
        }
    }

    return triplets;
}

module.exports=threeSum;