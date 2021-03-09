/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        let area = 0;
        let width = right - left;
        if (height[left] < height[right]) {
            area = width * height[left];
            left++;
        } else {
            area = width * height[right];
            right--;
        }
        if (area > maxArea) {
            maxArea = area;
        }
    }

    return maxArea;
}

module.exports=maxArea;
