"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const primitives_1 = require("./primitives");
describe("isString", () => {
    it("should return true for string values", () => {
        expect((0, primitives_1.isString)("hello")).toBeTruthy();
    });
    it("should return false for non-string values", () => {
        expect((0, primitives_1.isString)(10)).toBeFalsy();
    });
});
describe("isEmptyOrNullString", () => {
    it("should return true for empty strings", () => {
        expect((0, primitives_1.isEmptyOrNullString)("")).toBeTruthy();
    });
    it("should return true for null values", () => {
        expect((0, primitives_1.isEmptyOrNullString)(null)).toBeTruthy();
    });
    it("should return false for non-empty strings", () => {
        expect((0, primitives_1.isEmptyOrNullString)("hello")).toBeFalsy();
    });
    it("should return false for undefined values", () => {
        expect((0, primitives_1.isEmptyOrNullString)(undefined)).toBeFalsy();
    });
});
describe("isUndefinedOrNull", () => {
    it("should return true if the input is undefined", () => {
        expect((0, primitives_1.isUndefinedOrNull)(undefined)).toBeTruthy();
    });
    it("should return true if the input is null", () => {
        expect((0, primitives_1.isUndefinedOrNull)(null)).toBeTruthy();
    });
});
describe("isPrimitive", () => {
    it("should return true for boolean values", () => {
        expect((0, primitives_1.isPrimitive)(true)).toBeTruthy();
        expect((0, primitives_1.isPrimitive)(false)).toBeTruthy();
    });
    it("should return true for number values", () => {
        expect((0, primitives_1.isPrimitive)(10)).toBeTruthy();
    });
    it("should return true for string values", () => {
        expect((0, primitives_1.isPrimitive)("hello")).toBeTruthy();
    });
    it("should return false for non-primitive values", () => {
        class MyClass {
        }
        const myObject = new MyClass();
        expect((0, primitives_1.isPrimitive)(myObject)).toBeFalsy();
    });
    it("should return false for array values", () => {
        expect((0, primitives_1.isPrimitive)([1, 2, 3])).toBeFalsy();
    });
    it("should return false for object values", () => {
        const myObject = { a: 1, b: 2 };
        expect((0, primitives_1.isPrimitive)(myObject)).toBeFalsy();
    });
    it("should return true for null value", () => {
        expect((0, primitives_1.isPrimitive)(null)).toBeTruthy();
    });
    it("should return true for undefined values", () => {
        expect((0, primitives_1.isPrimitive)(undefined)).toBeTruthy();
    });
    it("should return true for NaN value", () => {
        expect((0, primitives_1.isPrimitive)(NaN)).toBeTruthy();
    });
});
