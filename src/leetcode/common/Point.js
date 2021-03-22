/**
 * General purpose Point class representing a point on a Cartesian plane.
 */
class Point {
    /**
     * Constructs a point with given x y coordinates.
     *
     * @param {number} x
     * @param {number} y
     * @constructor
     */
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    /**
     * Returns a string representation of this point.
     *
     * @returns {string}
     * @override
     */
    toString() {
        return `(${this.x}, ${this.y})`;
    }

    /**
     * Returns the cartesian distance between two points.
     *
     * @param {Point} p1
     * @param {Point} p2
     * @returns {number}
     */
    static distance(p1, p2) {
        let dx = Math.abs(p1.x - p2.x);
        let dy = Math.abs(p1.y - p2.y);
        return Math.sqrt(dx*dx + dy*dy);
    }

    /**
     * Convenience factory method takes x and y separately.
     *
     * @param {number} x
     * @param {number} y
     * @returns {Point}
     */
    static fromXY(x, y) {
        return new Point(x, y);
    }

    /**
     * Convenience factory method takes x and y as a two-member array.
     *
     * @param {number[]} xy
     * @returns {Point}
     */
    static fromArray(xy) {
        return new Point(xy[0], xy[1]);
    }
}

module.exports=Point;
