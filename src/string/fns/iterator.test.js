const { genChar, genCode, rangeAscii, rangeUnicode } = require("./iterator");

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

describe("rangeAscii", () => {
    it("should return characters from 'a' to 'z' when no input is provided", () => {
        const generator = rangeAscii();
        const actual = Array.from(generator);
        expect(actual).toEqual([
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ]);
        expect(generator.next().done).toBe(true);
    });
    it("should return characters from 'A' to 'Z' when input is 'A-Z'", () => {
        const generator = rangeAscii({ input: "A-Z" });
        //convert generator to array
        const actual = Array.from(generator);
        expect(actual).toEqual([
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ]);
        expect(generator.next().done).toBe(true);
    });
    it("should return characters from '0' to '9' when input is '0-9'", () => {
        const generator = rangeAscii({ input: "0-9" });
        const actual = Array.from(generator);
        expect(actual).toEqual(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
        expect(generator.next().done).toBe(true);
    });
});

describe("rangeUnicode", () => {
    it("should return characters from '😊' to '😋' when no input is provided", () => {
        const generator = rangeUnicode();
        const actual = Array.from(generator);
        expect(actual).toEqual(["😊", "😋"]);
        expect(generator.next().done).toBe(true);
    });
    it("should return characters from 'A' to 'Z' when input is 'A-Z'", () => {
        const generator = rangeUnicode({ input: "A-Z" });
        const actual = Array.from(generator);
        expect(actual).toEqual([
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ]);
        expect(generator.next().done).toBe(true);
    });
    it("should return characters from '0' to '9' when input is '0-9'", () => {
        const generator = rangeUnicode({ input: "0-9" });
        const actual = Array.from(generator);
        expect(actual).toEqual(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
        expect(generator.next().done).toBe(true);
    });
    it("should return a range of unicode characters when input is '😊-😋'", () => {
        const generator = rangeUnicode({ input: "😊-😋" });
        const actual = Array.from(generator);
        expect(actual).toEqual(["😊", "😋"]);
        expect(generator.next().done).toBe(true);
    });
    it("should return an empty array if input is '😋-😊'", () => {
        const generator = rangeUnicode({ input: "😋-😊" });
        const actual = Array.from(generator);
        expect(actual).toEqual([]);
        expect(generator.next().done).toBe(true);
    });
    it("should return an empty array if input is 'Z-A'", () => {
        const generator = rangeUnicode({ input: "Z-A" });
        const actual = Array.from(generator);
        expect(actual).toEqual([]);
        expect(generator.next().done).toBe(true);
    });
    it("should return an empty array if input is an empty string", () => {
        const generator = rangeUnicode({ input: "" });
        const actual = Array.from(generator);
        expect(actual).toEqual([]);
        expect(generator.next().done).toBe(true);
    });

    it("should return an empty array if input is a single character", () => {
        const generator = rangeUnicode({ input: "A" });
        const actual = Array.from(generator);
        expect(actual).toEqual([]);
        expect(generator.next().done).toBe(true);
    });

    it("should return an empty array if input is a range with invalid characters", () => {
        const generator = rangeUnicode({ input: "A-@" });
        const actual = Array.from(generator);
        expect(actual).toEqual([]);
        expect(generator.next().done).toBe(true);
    });

    it("should return a single item array if input is a range with the same character", () => {
        const generator = rangeUnicode({ input: "A-A" });
        const actual = Array.from(generator);
        expect(actual).toEqual(["A"]);
        expect(generator.next().done).toBe(true);
    });
});
