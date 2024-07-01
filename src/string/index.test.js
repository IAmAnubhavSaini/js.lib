const { deleteChar, deleteStr, toNumber, compareEnds } = require("./index");

describe("string functions", () => {
    it("deleteChar deletes a character from a string", () => {
        expect(deleteChar({ input: "abc", char: "c" })).toEqual("ab");
    });
    it("deleteChar deletes a character from a string", () => {
        expect(deleteChar({ input: "abc", char: "b" })).toEqual("ac");
    });
    it("deleteChar deletes a character from a string", () => {
        expect(deleteChar({ input: "abc", char: "a" })).toEqual("bc");
    });
    it("deleteChar does not delete a character from a string if it doesn't exist in it", () => {
        expect(deleteChar({ input: "abc", char: "d" })).toEqual("abc");
    });

    it("deleteStr deletes a string from a string", () => {
        expect(deleteStr({ input: "abc", str: "c" })).toEqual("ab");
    });
    it("deleteStr deletes a string from a string", () => {
        expect(deleteStr({ input: "abc", str: "b" })).toEqual("ac");
    });
    it("deleteStr deletes a string from a string", () => {
        expect(deleteStr({ input: "abc", str: "a" })).toEqual("bc");
    });
    it("deleteStr deletes a string from a string", () => {
        expect(deleteStr({ input: "abc", str: "bc" })).toEqual("a");
    });
    it("deleteStr does not delete a string from a string if it doesn't exist in it", () => {
        expect(deleteStr({ input: "abc", str: "d" })).toEqual("abc");
    });

    it("toNumber converts a string to a number", () => {
        expect(toNumber({ input: "123" })).toEqual(123);
    });
    it("toNumber converts a string to a number", () => {
        expect(toNumber({ input: "0" })).toEqual(0);
    });
    it("toNumber converts a string to a number", () => {
        expect(toNumber()).toEqual(0);
    });
    it("toNumber converts a string to a number", () => {
        expect(toNumber({ input: "abc" })).toEqual(0);
    });

    it("compareEnds checks if a string starts and ends with a given string", () => {
        expect(compareEnds({ input: "abca", str: "a" })).toEqual(true);
    });
    it("compareEnds checks if a string starts and ends with a given string", () => {
        expect(compareEnds({ input: "abc", str: "b" })).toEqual(false);
    });
    it("compareEnds checks if a string starts and ends with a given string", () => {
        expect(compareEnds({ input: "abc", str: "c" })).toEqual(false);
    });
    it("compareEnds checks if a string starts and ends with a given string", () => {
        expect(compareEnds({ input: "abc", str: "bc" })).toEqual(false);
    });
    it("compareEnds checks if a string starts and ends with a given string", () => {
        expect(compareEnds({ input: "abc", str: "abc" })).toEqual(true);
    });
    it("compareEnds checks if a string starts and ends with a given string", () => {
        expect(compareEnds({ input: "abc", str: "abcd" })).toEqual(false);
    });
    it("compareEnds checks if a string starts and ends with a given string", () => {
        expect(compareEnds({ input: "abc", str: "a" }, { i: true, n: 1 })).toEqual(false);
    });
    it("compareEnds checks if a string starts and ends with a given string", () => {
        expect(compareEnds({ input: "abcA", str: "A" }, { i: true, n: 1 })).toEqual(true);
    });
    it("compareEnds checks if a string starts and ends with a given string", () => {
        expect(compareEnds({ input: "abca", str: "A" }, { i: false, n: 1 })).toEqual(false);
    });
    it("compareEnds checks if a string starts and ends with a given string", () => {
        expect(compareEnds({ input: "abccba", str: "a" }, { i: false, n: 1 })).toEqual(true);
    });
    it("compareEnds checks if a string starts and ends with a given string", () => {
        expect(compareEnds({ input: "abc", str: "" }, { i: false, n: 2 })).toEqual(false);
    });
    it("compareEnds returns false if input string is empty", () => {
        expect(compareEnds({ input: "", str: "a" }, { i: false, n: 3 })).toEqual(false);
    });
    it("compareEnds returns  true when both the inputs are empty strings", () => {
        expect(compareEnds({ input: "", str: "" }, { i: false, n: 4 })).toEqual(false);
    });

    describe("compareEnds function security tests", () => {
        it("should handle non-string inputs gracefully", () => {
            expect(compareEnds({ input: null, str: null })).toBe(false);
            // @ts-ignore Testing for failure cases
            expect(compareEnds({ input: 123, str: 456 })).toBe(false);
        });

        it("boundary condition with n larger than input and str", () => {
            expect(compareEnds({ input: "hello", str: "he" }, { i: false, n: 10 })).toBe(false);
        });

        it("case insensitivity with non-ASCII characters", () => {
            expect(compareEnds({ input: "ß", str: "SS" }, { i: true, n: 1 })).toBe(false);
        });

        it("handles special characters without security implications", () => {
            const actual = compareEnds({ input: '<script>alert("xss")</script>', str: "script>" }, { i: false, n: 7 });
            expect(actual).toBe(false);
        });

        it("performance with large strings", () => {
            const largeString = "a".repeat(10000);
            const startTime = performance.now();
            compareEnds({ input: largeString, str: "a" }, { i: false, n: 10000 });
            const endTime = performance.now();
            expect(endTime - startTime).toBeLessThan(100); // Example threshold, adjust based on requirements
        });
    });
});
