class Solution {
    /**
     * @param {number} radius
     * @param {number} x_center
     * @param {number} y_center
     */
    constructor(radius, x_center, y_center) {
        this.radius = radius;
        this.x = x_center;
        this.y = y_center;
    }
}

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    let theta = Math.random() * 2 * Math.PI;
    let rr = Math.sqrt(Math.random()) * this.radius;
    let dx = rr * Math.cos(theta);
    let dy = rr * Math.sin(theta);
    return [this.x + dx, this.y + dy];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */

module.exports=Solution;
