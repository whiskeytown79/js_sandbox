/**
 * @param {number[]} height
 * @return {number}
 */
function trappingRainWater(height) {
    let rainWater = 0;
    let idxMaxHeight = 0;
    let maxHeight = 0;
    for (var i in height) {
        if (height[i] > maxHeight) {
            maxHeight = height[i];
            idxMaxHeight = i;
        }
    }

    let localMax = 0;
    for (let i=0; i<idxMaxHeight; i++) {
        if (height[i] > localMax) {
            localMax = height[i];
        } else {
            rainWater += localMax - height[i];
        }
    }

    localMax = 0;
    for (let i=height.length-1; i >= idxMaxHeight; i--) {
        if (height[i] > localMax) {
            localMax = height[i];
        } else {
            rainWater += localMax - height[i];
        }
    }

    return rainWater;
};

module.exports = trappingRainWater;