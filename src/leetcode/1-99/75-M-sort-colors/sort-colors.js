/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects
 * of the same color are adjacent, with the colors in the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let zeroes = 0, ones = 0, twos = 0;
    for (let i in nums) {
        switch (nums[i]) {
            case 0: zeroes++; break;
            case 1: ones++; break;
            case 2: twos++; break;
        }
    }
    let idx = 0;
    while (zeroes) { nums[idx++] = 0; zeroes--; }
    while (ones) { nums[idx++] = 1; ones--; }
    while (twos) { nums[idx++] = 2; twos--; }
};

module.exports = sortColors;