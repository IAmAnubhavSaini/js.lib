"use strict";
const Default = require("./default");
describe("Default", () => {
    it("should have compareAscending and compareDescending functions", () => {
        expect(Default.compareAscending).toBeInstanceOf(Function);
        expect(Default.compareDescending).toBeInstanceOf(Function);
    });
    describe("compareAscending", () => {
        it("compares two numbers and returns correct result", () => {
            const numbers = [5, 4, 4, 3, 2, 1];
            expect(numbers.sort(Default.compareAscending)).toEqual([1, 2, 3, 4, 4, 5]);
        });
    });
    describe("compareAscendingAsNumbers", () => {
        it("compares numbers and returns correct result", () => {
            const numbers = [22, 2, 33, 3, 1, 4];
            expect(numbers.sort(Default.compareAscendingAsNumbers)).toEqual([1, 2, 3, 4, 22, 33]);
        });
    });
    describe("compareAscendingAsStrings", () => {
        it("compares strings and returns correct result", () => {
            const data = [22, 2, 33, 3, 1, 4];
            expect(data.sort(Default.compareAscendingAsStrings)).toEqual([1, 2, 22, 3, 33, 4]);
        });
    });
    describe("compareDescendingAsStrings", () => {
        it("compares strings and returns correct result", () => {
            const data = [22, 2, 33, 3, 1, 4];
            expect(data.sort(Default.compareDescendingAsStrings)).toEqual([4, 33, 3, 22, 2, 1]);
        });
    });
    describe("compareDescendingAsNumbers", () => {
        it("compares numbers and returns correct result", () => {
            const numbers = [22, 2, 33, 3, 1, 4];
            expect(numbers.sort(Default.compareDescendingAsNumbers)).toEqual([33, 22, 4, 3, 2, 1]);
        });
    });
    describe("compareDescending", () => {
        it("compares two numbers and returns correct result", () => {
            const numbers = [1, 2, 3, 4, 5];
            expect(numbers.sort(Default.compareDescending)).toEqual([5, 4, 3, 2, 1]);
        });
    });
    describe("equals", () => {
        it("numbers are equal", () => {
            const a = 10;
            const b = 10;
            const actual = Default.equalsAsNumbers(a, b);
            expect(actual).toBe(actual);
        });
        it("strings are equal", () => {
            const a = "a";
            const b = "a";
            const actual = Default.equalsAsStrings(a, b);
            const expected = true;
            expect(actual).toEqual(expected);
        });
        it("just check some weird things", () => {
            expect(Default.equals([], [])).toBeFalsy();
            expect(Default.equals([], true)).toBeFalsy();
            expect(Default.equals(![], false)).toBeTruthy();
        });
    });
});
