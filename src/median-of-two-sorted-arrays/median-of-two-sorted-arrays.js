/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
    let merged = [];
    let i1 = 0;
    let i2 = 0;
    while (i1 < nums1.length || i2 < nums2.length) {
        if (i1 < nums1.length) {
            if (i2 < nums2.length && nums2[i2] < nums1[i1]) {
                merged.push(nums2[i2]);
                i2 += 1;
            } else {
                merged.push(nums1[i1]);
                i1 += 1;
            }
        } else if (i2 < nums2.length) {
            merged.push(nums2[i2]);
            i2 += 1;
        }
    }
    if (merged.length % 2) {
        return merged[Math.floor(merged.length / 2)];
    }
    let left = merged[Math.floor(merged.length / 2) - 1];
    let right = merged[Math.floor(merged.length / 2)];
    return (left + right) / 2;
}

module.exports = findMedianSortedArrays;