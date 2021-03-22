/**
 * @param {number[]} height
 * @return {number}
 */
function trappingRainWater(height) {
    let rainWater = 0;
    let leftMax = 0, rightMax = 0;
    let left = 0, right = height.length - 1;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > leftMax) {
                leftMax = height[left];
            } else {
                rainWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right];
            } else {
                rainWater += rightMax - height[right];
            }
            right--;
        }
    }
    return rainWater;
};

module.exports = trappingRainWater;