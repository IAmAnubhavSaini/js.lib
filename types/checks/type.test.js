"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
describe("isString", () => {
    it("should return true for string values", () => {
        expect((0, type_1.isString)("hello")).toBeTruthy();
    });
    it("should return false for non-string values", () => {
        expect((0, type_1.isString)(10)).toBeFalsy();
    });
});
describe("isEmptyOrNullString", () => {
    it("should return true for empty strings", () => {
        expect((0, type_1.isEmptyOrNullString)("")).toBeTruthy();
    });
    it("should return true for null values", () => {
        expect((0, type_1.isEmptyOrNullString)(null)).toBeTruthy();
    });
    it("should return false for non-empty strings", () => {
        expect((0, type_1.isEmptyOrNullString)("hello")).toBeFalsy();
    });
    it("should return false for undefined values", () => {
        expect((0, type_1.isEmptyOrNullString)(undefined)).toBeFalsy();
    });
});
describe("isUndefinedOrNull", () => {
    it("should return true if the input is undefined", () => {
        expect((0, type_1.isUndefinedOrNull)(undefined)).toBeTruthy();
    });
    it("should return true if the input is null", () => {
        expect((0, type_1.isUndefinedOrNull)(null)).toBeTruthy();
    });
});
describe("isPrimitive", () => {
    it("should return true for boolean values", () => {
        expect((0, type_1.isPrimitive)(true)).toBeTruthy();
        expect((0, type_1.isPrimitive)(false)).toBeTruthy();
    });
    it("should return true for number values", () => {
        expect((0, type_1.isPrimitive)(10)).toBeTruthy();
    });
    it("should return true for string values", () => {
        expect((0, type_1.isPrimitive)("hello")).toBeTruthy();
    });
    it("should return false for non-primitive values", () => {
        class MyClass {
        }
        const myObject = new MyClass();
        expect((0, type_1.isPrimitive)(myObject)).toBeFalsy();
    });
    it("should return false for array values", () => {
        expect((0, type_1.isPrimitive)([1, 2, 3])).toBeFalsy();
    });
    it("should return false for object values", () => {
        const myObject = { a: 1, b: 2 };
        expect((0, type_1.isPrimitive)(myObject)).toBeFalsy();
    });
    it("should return true for null value", () => {
        expect((0, type_1.isPrimitive)(null)).toBeTruthy();
    });
    it("should return true for undefined values", () => {
        expect((0, type_1.isPrimitive)(undefined)).toBeTruthy();
    });
    it("should return true for NaN value", () => {
        expect((0, type_1.isPrimitive)(NaN)).toBeTruthy();
    });
});
describe("isArrayOf", () => {
    it("should return true if the array contains only values of the specified type", () => {
        expect((0, type_1.isArrayOf)("string", ["hello", "world"])).toBeTruthy();
    });
    it("should return false if the array contains values of different types", () => {
        expect((0, type_1.isArrayOf)("string", [1, 2, "hello"])).toBeFalsy();
    });
    it("should return true for an empty array", () => {
        expect((0, type_1.isArrayOf)("string", [])).toBeTruthy();
    });
    it("should return false if the input is not an array", () => {
        expect((0, type_1.isArrayOf)("string", "hello")).toBeFalsy();
    });
    it("should return true if array contains only the numbers", () => {
        expect((0, type_1.isArrayOf)("number", [1, 2, 3])).toBeTruthy();
    });
    it("should return false if array contains mix of numbers and strings", () => {
        expect((0, type_1.isArrayOf)("string", [1, 2, "three", "four", 5])).toBeFalse();
        expect((0, type_1.isArrayOf)("number", [1, 2, "three", "four", 5])).toBeFalse();
    });
});
