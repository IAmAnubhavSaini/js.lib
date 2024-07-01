const { containsChar, containsStr } = require("./contains");

describe("contains functions", () => {
    describe("containsChar", () => {
        it("returns true if a string contains a character", () => {
            expect(containsChar({ input: "abc", char: "a" })).toEqual(true);
        });
        it("returns true if a string contains a character", () => {
            expect(containsChar({ input: "abc", char: "b" })).toEqual(true);
        });
        it("returns true if a string contains a character", () => {
            expect(containsChar({ input: "abc", char: "c" })).toEqual(true);
        });
        it("returns false if a string does not contain a character", () => {
            expect(containsChar({ input: "abc", char: "d" })).toEqual(false);
        });
    });

    describe("containsStr", () => {
        it("returns true if a string contains a substring", () => {
            expect(containsStr({ input: "abc", str: "ab" })).toEqual(true);
        });
        it("returns true if a string contains a substring", () => {
            expect(containsStr({ input: "abc", str: "bc" })).toEqual(true);
        });
        it("returns true if a string contains a substring", () => {
            expect(containsStr({ input: "abc", str: "ca" })).toEqual(false);
        });
        it("returns false if a string does not contain a substring", () => {
            expect(containsStr({ input: "abc", str: "d" })).toEqual(false);
        });
    });

    describe("Security tests for containsChar and containsStr functions", function () {
        // Test with Regular Input
        it("should return true for regular input", function () {
            expect(containsChar({ input: "hello", char: "e" })).toBe(true);
            expect(containsStr({ input: "hello world", str: "world" })).toBe(true);
        });

        // Test with Special Characters
        it("should handle special characters correctly", function () {
            expect(containsChar({ input: "hello", char: '"' })).toBe(false);
            expect(containsStr({ input: 'hello "world"', str: '"world"' })).toBe(true);
        });

        // Test with Script Injection
        it("should not execute script injections", function () {
            expect(containsChar({ input: "<script>alert('test')</script>", char: "<" })).toBe(true);
            expect(containsStr({ input: "<script>alert('test')</script>", str: "<script>" })).toBe(true);
        });

        // Test with Extremely Long Strings
        it("should handle extremely long strings", function () {
            let longString = "a".repeat(10000);
            expect(containsChar({ input: longString, char: "b" })).toBe(false);
            expect(containsStr({ input: longString, str: "b" })).toBe(false);
        });

        // Test with Null and Undefined
        it("should handle null and undefined gracefully", function () {
            expect(containsChar({ input: null, char: "a" })).toBe(false);
            expect(containsStr({ input: undefined, str: "a" })).toBe(false);
        });

        // Test with Non-String Types
        it("should reject non-string types gracefully", function () {
            // @ts-ignore Testing for failure cases
            expect(containsChar({ input: 123, char: 1 })).toBe(false);
            // @ts-ignore Testing for failure cases
            expect(containsStr({ input: {}, str: {} })).toBe(false);
        });
    });
});
