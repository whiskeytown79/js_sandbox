const Solution = require('./generate-random-point-in-a-circle');
const Point = require('../../common/Point');

test('test a bunch of points around 0,0 with unit circle', () => {
    let radius = 1.0;
    let center = Point.fromXY(0.0, 0.0);
    let solution = new Solution(radius, center.x, center.y);

    for (let i=0; i<1000; i++) {
        let point = Point.fromArray(solution.randPoint());
        expect(Point.distance(point, center)).toBeLessThanOrEqual(radius);
    }
});

test('test a bunch of points around 3.5,-2.5 with circle of radius 7.4', () => {
    let radius = 7.4;
    let center = Point.fromXY(3.5, -2.5);
    let solution = new Solution(radius, center.x, center.y);

    for (let i=0; i<1000; i++) {
        let point = Point.fromArray(solution.randPoint());
        expect(Point.distance(point, center)).toBeLessThanOrEqual(radius);
    }
});
