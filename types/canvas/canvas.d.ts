declare class Point2d {
    constructor(x?: number, y?: number);
    get X(): number;
    get Y(): number;
    toString(): string;
    distanceFrom(other2DPoint: any): number;
    translate(scalar: any): Point2d;
    flip(): Point2d;
    #private;
}
declare class Circle {
    constructor(context: any, radius?: number);
    draw(withPattern: any, atPosition: any): this;
    drawAt(point: any): this;
    drawWith(options: any): this;
    fill(withPattern: any, atPosition: any): this;
    fillAt(point: any): this;
    fillWith(fillPattern: any): this;
    #private;
}
declare class Pencil {
    constructor(context: any, startAt: any);
    lineTo(to: any): this;
    #private;
}
declare class Rectangle {
    constructor(context: any, sideShort?: number, sideLong?: number);
    drawAt(point2d: any): this;
    #private;
}
declare class Square {
    constructor(context: any, side?: number);
    drawAt(point2d: any): this;
    #private;
}
export namespace canvas {
    export { Point2d };
    export { Circle };
    export { Pencil };
    export { Rectangle };
    export { Square };
}
export {};
