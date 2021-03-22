/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    let hash = {};
    for (let num of nums1) {
        hash[num] = true;
    }
    let intersection = {};
    for (let num of nums2) {
        if (hash[num]) {
            intersection[num] = true;
        }
    }
    return Object.keys(intersection).map(s => parseInt(s));
}

module.exports=intersection;
