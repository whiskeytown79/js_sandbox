const Point = require('./Point');

test('construct point with constructor', () => {
    let point = new Point(3.0, 4.0);
    expect(point.x).toBeCloseTo(3.0);
    expect(point.y).toBeCloseTo(4.0);
});

test('construct point with 2-arg factory method', () => {
    let point = Point.fromXY(3.0, 4.0);
    expect(point.x).toBeCloseTo(3.0);
    expect(point.y).toBeCloseTo(4.0);
});

test('construct point with 1-arg factory method', () => {
    let point = Point.fromArray([3.0, 4.0]);
    expect(point.x).toBeCloseTo(3.0);
    expect(point.y).toBeCloseTo(4.0);
});

test('toString', () => {
    let point = Point.fromXY(3.51, 4.5);
    expect(point.toString()).toEqual("(3.51, 4.5)");
});

test('distance 1', () => {
    let p1 = Point.fromXY(0.0, 0.0);
    let p2 = Point.fromXY(3.0, 4.0);
    expect(Point.distance(p1, p2)).toBeCloseTo(5.0);
});

test('distance 2', () => {
    let p1 = Point.fromXY(3.5, 7.5);
    let p2 = Point.fromXY(4.5, 8.5);
    expect(Point.distance(p1, p2)).toBeCloseTo(Math.sqrt(2));
});
