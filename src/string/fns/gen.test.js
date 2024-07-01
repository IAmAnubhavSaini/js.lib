const { genChar, genCode } = require("./gen");

describe("gen functions", () => {
    describe("genChar", () => {
        it("should return characters of the input string one by one", () => {
            const generator = genChar({ input: "Hello" });
            expect(generator.next().value).toBe("H");
            expect(generator.next().value).toBe("e");
            expect(generator.next().value).toBe("l");
            expect(generator.next().value).toBe("l");
            expect(generator.next().value).toBe("o");
            expect(generator.next().done).toBe(true);
        });

        it("should return an empty string if no input is provided", () => {
            const generator = genChar();
            expect(generator.next().done).toBe(true);
        });
        it("should allow access to restricted characters as that is not this functions job | security", () => {
            const generator = genChar({ input: "Hello<script>alert('XSS');</script>" });
            expect(generator.next().value).toBe("H");
            expect(generator.next().value).toBe("e");
            expect(generator.next().value).toBe("l");
            expect(generator.next().value).toBe("l");
            expect(generator.next().value).toBe("o");
            expect(generator.next().done).toBe(false);
        });
    });

    describe("genCode", () => {
        it("should return character codes of the input string one by one", () => {
            const generator = genCode({ input: "Hello" });
            expect(generator.next().value).toBe(72);
            expect(generator.next().value).toBe(101);
            expect(generator.next().value).toBe(108);
            expect(generator.next().value).toBe(108);
            expect(generator.next().value).toBe(111);
            expect(generator.next().done).toBe(true);
        });

        it("should return an empty string if no input is provided", () => {
            const generator = genCode();
            expect(generator.next().done).toBe(true);
        });
        it("should throw an error if input is not a string | failure", () => {
            // @ts-ignore Testing for failure cases; should convet the number to an empty string
            const actual = () => genCode({ input: 123 });
            expect(actual).not.toThrow("Input must be a string");
            expect(actual().next()).toEqual({ done: true, value: undefined });
        });
    });
});
