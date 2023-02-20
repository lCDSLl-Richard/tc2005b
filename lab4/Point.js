class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getDistance(point) {
    return Math.sqrt((point.x - this.x) ** 2 + (point.y - this.y) ** 2);
  }

  getSlope(point) {
    return (point.y - this.y) / (point.x - this.x);
  }
}
