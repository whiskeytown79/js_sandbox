/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/*
Idea: to speed this up, don't zip the array, but go through the loop as if I'm zipping the array
up to the midpoint or pair of midpoints (known in advance by the summed length of the arrays).
I either then get the one value I want, or a pair of values to average.
 */
function findMedianSortedArrays(nums1, nums2) {
    let i1 = 0;
    let i2 = 0;
    let totalLength = nums1.length + nums2.length;
    let target1 = Math.floor((totalLength - 1) / 2);
    let target2 = Math.floor(totalLength / 2);
    let val1 = 0;
    let val2 = 0;
    let pos = 0;
    while (i1 < nums1.length || i2 < nums2.length) {
        if (i1 < nums1.length) {
            if (i2 < nums2.length && nums2[i2] < nums1[i1]) {
                if (pos == target1) {
                    val1 = nums2[i2];
                }
                if (pos == target2) {
                    val2 = nums2[i2];
                }
                i2 += 1;
            } else {
                if (pos == target1) {
                    val1 = nums1[i1];
                }
                if (pos == target2) {
                    val2 = nums1[i1];
                }
                i1 += 1;
            }
        } else if (i2 < nums2.length) {
            if (pos == target1) {
                val1 = nums2[i2];
            }
            if (pos == target2) {
                val2 = nums2[i2];
            }
            i2 += 1;
        }
        pos = pos + 1;
        if (pos > target2) {
            break;
        }
    }
    return (val1 + val2) / 2;
}

module.exports = findMedianSortedArrays;