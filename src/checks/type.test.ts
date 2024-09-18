import { isString, isEmptyOrNullString, isUndefinedOrNull, isPrimitive, isArrayOf } from "./type";

describe("isString", () => {
    it("should return true for string values", () => {
        expect(isString("hello")).toBeTruthy();
    });
    it("should return false for non-string values", () => {
        expect(isString(10)).toBeFalsy();
    });
});

describe("isEmptyOrNullString", () => {
    it("should return true for empty strings", () => {
        expect(isEmptyOrNullString("")).toBeTruthy();
    });
    it("should return true for null values", () => {
        expect(isEmptyOrNullString(null)).toBeTruthy();
    });
    it("should return false for non-empty strings", () => {
        expect(isEmptyOrNullString("hello")).toBeFalsy();
    });
    it("should return false for undefined values", () => {
        expect(isEmptyOrNullString(undefined)).toBeFalsy();
    });
});

describe("isUndefinedOrNull", () => {
    it("should return true if the input is undefined", () => {
        expect(isUndefinedOrNull(undefined)).toBeTruthy();
    });
    it("should return true if the input is null", () => {
        expect(isUndefinedOrNull(null)).toBeTruthy();
    });
});

describe("isPrimitive", () => {
    it("should return true for boolean values", () => {
        expect(isPrimitive(true)).toBeTruthy();
        expect(isPrimitive(false)).toBeTruthy();
    });
    it("should return true for number values", () => {
        expect(isPrimitive(10)).toBeTruthy();
    });
    it("should return true for string values", () => {
        expect(isPrimitive("hello")).toBeTruthy();
    });
    it("should return false for non-primitive values", () => {
        class MyClass {}
        const myObject = new MyClass();
        expect(isPrimitive(myObject)).toBeFalsy();
    });
    it("should return false for array values", () => {
        expect(isPrimitive([1, 2, 3])).toBeFalsy();
    });
    it("should return false for object values", () => {
        const myObject = { a: 1, b: 2 };
        expect(isPrimitive(myObject)).toBeFalsy();
    });
    it("should return true for null value", () => {
        expect(isPrimitive(null)).toBeTruthy();
    });
    it("should return true for undefined values", () => {
        expect(isPrimitive(undefined)).toBeTruthy();
    });

    it("should return true for NaN value", () => {
        expect(isPrimitive(NaN)).toBeTruthy();
    });
});

describe("isArrayOf", () => {
    it("should return true if the array contains only values of the specified type", () => {
        expect(isArrayOf("string", ["hello", "world"])).toBeTruthy();
    });
    it("should return false if the array contains values of different types", () => {
        expect(isArrayOf("string", [1, 2, "hello"])).toBeFalsy();
    });
    it("should return true for an empty array", () => {
        expect(isArrayOf("string", [])).toBeTruthy();
    });
    it("should return false if the input is not an array", () => {
        expect(isArrayOf("string", "hello" as unknown as Array<unknown>)).toBeFalsy();
    });

    it("should return true if array contains only the numbers", () => {
        expect(isArrayOf("number", [1, 2, 3])).toBeTruthy();
    });

    it("should return false if array contains mix of numbers and strings", () => {
        expect(isArrayOf("string", [1, 2, "three", "four", 5])).toBeFalse();
        expect(isArrayOf("number", [1, 2, "three", "four", 5])).toBeFalse();
    });
});
