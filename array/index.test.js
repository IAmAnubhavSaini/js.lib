const {
    defaultArray,
    randomArray,
    randomMatrix,
    resetArray,
    reverseSortedArray,
    sortedArray,
    zeroNumberArray,
    zeroStringArray,
} = require("./index");

describe("array functions", () => {
    it("defaultArray returns an array", () => {
        expect(defaultArray().length).toEqual(10);
    });
    it("zeroNumberArray zeroes a number array", () => {
        const randomArray = [1, 2, 3, 4, 5];
        zeroNumberArray(randomArray);
        expect(randomArray.every(a => a === 0)).toBe(true);
    });
    it("zeroStringArray zeroes a string array", () => {
        const randomArray = ["asd", "BBC", "zed"];
        zeroStringArray(randomArray);
        expect(randomArray.every(a => a === '')).toBe(true);
    });
    it("resetArray resets each array element to undefined", () => {
        const randomArray = [{a: "asd"}, "BBC", 0, "zed"];
        resetArray(randomArray);
        expect(randomArray.every(a => a === undefined)).toBe(true);
    });
});

describe("random", () => {
    it("randomArray returns an array of random numbers by default", () => {
        const actual = randomArray();
        expect(actual.length).toBe(10);
        expect(actual.every(a => a <= 10)).toBe(true);
        expect(actual.every(a => a >= 0)).toBe(true);
    });
    it("randomArray returns one random element in an array for given length of 1", () => {
        const actual = randomArray({length: 1, minValue: 0, maxValue: 0});
        expect(actual.length).toBe(1);
        expect(actual[0] === 0).toBe(true);
    });
    it("randomArray handles minValue > maxValue properly", () => {
        const actual = randomArray({length: 10, minValue: 10, maxValue: 0});
        expect(actual.length).toBe(10);
        expect(actual.every(a => a <= 10)).toBe(true);
        expect(actual.every(a => a >= 0)).toBe(true);
    });

    it("randomMatrix returns a matrix of random numbers by default", () => {
        const actual = randomMatrix();
        expect(actual.length).toBe(3);
        expect(actual[0].length).toBe(3);
        expect(actual.every(row => row.every(col => col <= 10))).toBe(true);
        expect(actual.every(row => row.every(col => col >= 0))).toBe(true);
    });

    it("sortedArray returns an array of numbers from 1 to 10 by default", () => {
        const actual = sortedArray();
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(actual.length).toBe(expected.length);
        expect(actual).toEqual(expected);
    });

    it("reverseSortedArray returns an array of numbers from 1 to 10 by default", () => {
        const actual = reverseSortedArray();
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();
        expect(actual.length).toBe(expected.length);
        expect(actual).toEqual(expected);
    });
});
