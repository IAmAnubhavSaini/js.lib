"use strict";
class Point2d {
    #x = 0;
    #y = 0;
    constructor(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
    }
    get X() {
        return this.#x;
    }
    get Y() {
        return this.#y;
    }
    toString() {
        return `{${this.#x}, ${this.#y}}`; // {x, y}
    }
    distanceFrom(other2DPoint) {
        return Math.sqrt(Math.pow(this.#x - other2DPoint.X, 2) + Math.pow(this.#y - other2DPoint.Y, 2));
    }
    translate(scalar) {
        return new Point2d(this.#x * scalar, this.#y * scalar);
    }
    flip() {
        return new Point2d(this.#y, this.#x);
    }
}
class Circle {
    #startAngle = null;
    #endAngle = null;
    #antiClockwise = null;
    #context = null;
    #radius = 1;
    constructor(context, radius = 1) {
        this.#startAngle = 0;
        this.#endAngle = 2 * Math.PI;
        this.#antiClockwise = false;
        this.#context = context;
        this.#radius = radius;
    }
    draw(withPattern, atPosition) {
        this.drawWith(withPattern);
        this.drawAt(atPosition);
        return this;
    }
    drawAt(point) {
        this.#context.beginPath();
        this.#context.arc(point.X, point.Y, this.#radius, this.#startAngle, this.#endAngle, this.#antiClockwise);
        this.#context.closePath();
        this.#context.stroke();
        return this;
    }
    drawWith(options) {
        this.#context.strokeStyle = options.strokePattern;
        this.#context.lineWidth = options.lineWidth;
        return this;
    }
    fill(withPattern, atPosition) {
        this.fillWith(withPattern);
        this.fillAt(atPosition);
        return this;
    }
    fillAt(point) {
        this.#context.beginPath();
        this.#context.arc(point.X, point.Y, this.#radius, this.#startAngle, this.#endAngle, this.#antiClockwise);
        this.#context.closePath();
        this.#context.fill();
        return this;
    }
    fillWith(fillPattern) {
        this.#context.fillStyle = fillPattern;
        return this;
    }
}
class Square {
    #context;
    #side = 1;
    constructor(context, side = 1) {
        this.#side = side;
        this.#context = context;
    }
    drawAt(point2d) {
        this.#context.fillRect(point2d.X, point2d.Y, this.#side, this.#side);
        return this;
    }
}
class Rectangle {
    #context = null;
    #sideShort = 1;
    #sideLong = 1;
    constructor(context, sideShort = 1, sideLong = 2) {
        this.#sideShort = sideShort;
        this.#sideLong = sideLong;
        this.#context = context;
    }
    drawAt(point2d) {
        this.#context.fillRect(point2d.X, point2d.Y, this.#sideShort, this.#sideLong);
        return this;
    }
}
class Pencil {
    #context = null;
    #current = null;
    constructor(context, startAt) {
        this.#current = startAt;
        this.#context = context;
    }
    lineTo(to) {
        this.#context.beginPath();
        this.#context.moveTo(this.#current.X, this.#current.Y);
        this.#context.lineTo(to.X, to.Y);
        this.#context.stroke();
        this.#current = to;
        return this;
    }
}
module.exports = {
    canvas: {
        Point2d,
        Circle,
        Pencil,
        Rectangle,
        Square,
    },
};
